"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { Menu, X } from "lucide-react";

const SECTIONS = [
  { slug: "o-nas", label: "O nas" },
  { slug: "oferta", label: "Oferta" },
  { slug: "wizualizator", label: "Wizualizator" },
  { slug: "realizacje", label: "Realizacje" },
  { slug: "cennik", label: "Cennik" },
  { slug: "kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Zablokuj scroll gdy panel mobilny otwarty + ESC zamyka
  useEffect(() => {
    const { documentElement, body } = document;
    if (open) {
      documentElement.style.overflow = "hidden";
      body.style.overflow = "hidden";
      body.style.touchAction = "none";
    } else {
      documentElement.style.overflow = "";
      body.style.overflow = "";
      body.style.touchAction = "";
    }
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open]);

  // Smooth scroll z offsetem headera
  const scrollWithOffset = useCallback((id: string) => {
    const el = document.getElementById(id);
    const header = document.querySelector<HTMLElement>("[data-sticky-header]");
    if (!el) return;
    const headerH = header?.offsetHeight ?? 0;
    const top = el.getBoundingClientRect().top + window.scrollY - headerH - 6;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const onSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    slug: string
  ) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== "/") {
      history.pushState(null, "", `/#${slug}`);
      location.assign(`/#${slug}`);
      return;
    }
    scrollWithOffset(slug);
    history.pushState(null, "", `#${slug}`);
  };

  const linkCls =
    "relative px-2 py-3 font-medium text-gray-800 transition-colors duration-200 hover:text-black " +
    "after:absolute after:content-[''] after:left-0 after:bottom-1 after:h-[2px] after:w-0 after:bg-teal-500 " +
    "after:transition-all after:duration-300 hover:after:w-full";

  return (
    <>
      {/* FIX: zawsze fixed; żadnych transformów. Półprzezroczne tło + blur dla czytelności */}
      <header
        className="fixed inset-x-0 top-0 z-[100] border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
        data-sticky-header
      >
        {/* DESKTOP */}
        <nav className="container mx-auto hidden lg:flex h-16 items-center justify-between px-2">
          <Link
            href="/"
            aria-label="Strona główna"
            className="flex items-center gap-2"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                history.pushState(null, "", "/");
              }
            }}
          >
            <Image
              src="/assets/images/logo.png"
              alt="iWallDesign logo"
              width={150}
              height={40}
              priority
            />
          </Link>

          <ul className="flex items-center gap-8">
            {SECTIONS.map(({ slug, label }) => (
              <li key={slug}>
                <Link
                  href={`/#${slug}`}
                  className={linkCls}
                  onClick={(e) => onSectionClick(e, slug)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/wizualizator"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 px-5 py-2.5 font-medium text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
          >
            Wizualizator
          </Link>
        </nav>

        {/* MOBILE – top bar */}
        <div className="container mx-auto flex h-14 items-center justify-between px-4 lg:hidden">
          <Link
            href="/"
            aria-label="Strona główna"
            className="flex items-center"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                history.pushState(null, "", "/");
              }
            }}
          >
            <Image
              src="/assets/images/logo.png"
              alt="iWallDesign logo"
              width={120}
              height={60}
              priority
            />
          </Link>
          <button
            aria-expanded={open}
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            onClick={() => setOpen((v) => !v)}
            className="p-2"
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* MOBILE – panel */}
        <div
          className={[
            "lg:hidden fixed left-0 right-0 z-[90]",
            "top-14", // pod belką 56px
            "bg-white border-t shadow-sm",
            "transition-[max-height] duration-300 overflow-hidden",
            open ? "max-h-[calc(100dvh-56px)]" : "max-h-0",
          ].join(" ")}
        >
          <ul className="flex flex-col text-center">
            {SECTIONS.map(({ slug, label }) => (
              <li key={slug} className="border-b">
                <Link
                  href={`/#${slug}`}
                  onClick={(e) => onSectionClick(e, slug)}
                  className={linkCls + " block w-full"}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="p-3">
              <Link
                href="/wizualizator"
                className="block w-full rounded-sm bg-teal-500 px-4 py-2 text-center font-medium text-white"
                onClick={() => setOpen(false)}
              >
                Wizualizator
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* SPACER pod fixed headerem (zapobiega "podskakiwaniu" contentu) */}
      <div aria-hidden className="h-14 lg:h-16" />
    </>
  );
}
