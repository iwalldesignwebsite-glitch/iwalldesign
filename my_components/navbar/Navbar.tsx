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

  // blokada scrolla + Esc
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

  // helper: smooth scroll z offsetem headera
  const scrollWithOffset = useCallback((id: string) => {
    const el = document.getElementById(id);
    const header = document.querySelector<HTMLElement>("[data-sticky-header]");
    if (!el) return;
    const headerH = header?.offsetHeight ?? 0;
    const top = el.getBoundingClientRect().top + window.scrollY - headerH - 6;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  // klik w link sekcji
  const onSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    slug: string
  ) => {
    // zawsze zatrzymaj domyślne zachowanie i scrolluj ręcznie
    e.preventDefault();
    setOpen(false);
    // jeśli jesteś na innej stronie, najpierw przejdź na "/" z #, a po nawigacji dociągnie HashScrollFix (poniżej)
    if (location.pathname !== "/") {
      history.pushState(null, "", `/#${slug}`);
      // wymuś przeładowanie SPA do /
      location.assign(`/#${slug}`);
      return;
    }
    // na landingu — od razu przewiń z offsetem
    scrollWithOffset(slug);
    // zaktualizuj hash w pasku adresu (bez reloadu)
    history.pushState(null, "", `#${slug}`);
  };

  const linkCls =
    "relative px-2 py-3 font-medium text-gray-800 transition-colors duration-200 hover:text-black " +
    "after:absolute after:content-[''] after:left-0 after:bottom-1 after:h-[2px] after:w-0 after:bg-teal-500 " +
    "after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] bg-white border-b will-change-transform transform-gpu pt-1 pb-2"
      data-sticky-header
    >
      {/* DESKTOP */}
      <nav className="container mx-auto hidden lg:flex items-center justify-between h-16 px-2">
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
            src="/assets/images/hero/logo.png"
            alt="iWallDesign"
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
          className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 px-5 py-2.5 font-medium text-white hover:opacity-90 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-600"
        >
          Wizualizator
        </Link>
      </nav>

      {/* MOBILE – top bar */}
      <div className="lg:hidden container mx-auto h-14 px-4 flex items-center justify-between">
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

      {/* MOBILE – panel (bez overlayu) */}
      <div
        className={[
          "lg:hidden fixed left-0 right-0 z-[90]",
          "top-14", // 56px (h-14)
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
              className="block w-full text-center rounded-sm px-4 py-2 font-medium bg-teal-500 text-white"
              onClick={() => setOpen(false)}
            >
              Wizualizator
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
