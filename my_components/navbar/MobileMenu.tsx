"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type Section = { slug: string; label: string };

export default function MobileMenu({
  sections,
  linkCls,
}: {
  sections: Section[];
  linkCls: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const { body } = document;
    if (open) {
      body.style.overflow = "hidden";
      body.style.touchAction = "none";
    } else {
      body.style.overflow = "";
      body.style.touchAction = "";
    }
    return () => {
      body.style.overflow = "";
      body.style.touchAction = "";
    };
  }, [open]);

  return (
    <>
      <div className="container mx-auto flex h-14 items-center justify-between px-4 lg:hidden">
        <Link href="/" aria-label="Strona główna" className="flex items-center">
          <Image
            src="/assets/images/logo.png"
            alt="iWallDesign logo"
            width={100}
            height={50}
            priority
          />
        </Link>

        <button
          aria-expanded={open}
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          onClick={() => setOpen((v) => !v)}
          className={[
            "p-2 transition-transform duration-200 ease-out",
            open ? "rotate-90" : "rotate-0",
            "motion-reduce:transition-none motion-reduce:transform-none",
          ].join(" ")}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={[
          "lg:hidden fixed inset-0 top-18 z-[80] bg-black/50",
          "transition-opacity duration-200 ease-out",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
          "motion-reduce:transition-none",
        ].join(" ")}
      />

      <div
        className={[
          "lg:hidden fixed left-0 right-0 z-[90] top-18 bg-white border-t shadow-sm",
          "transition-[max-height,opacity,transform] duration-300 ease-out overflow-hidden",
          open
            ? "max-h-[calc(100dvh-56px)] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2",
          "motion-reduce:transition-none motion-reduce:transform-none",
        ].join(" ")}
      >
        <ul className="flex flex-col text-center">
          {sections.map(({ slug, label }, idx) => (
            <li
              key={slug}
              className={[
                "border-b",
                open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1",
                "transition-all duration-300 ease-out",
                "motion-reduce:transition-none motion-reduce:transform-none",
              ].join(" ")}
              style={{
                transitionDelay: open ? `${60 + idx * 35}ms` : "0ms",
              }}
            >
              <Link
                href={`/#${slug}`}
                onClick={() => setOpen(false)}
                className={linkCls + " block w-full py-3"}
              >
                {label}
              </Link>
            </li>
          ))}

          <li
            className={[
              "p-3",
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1",
              "transition-all duration-300 ease-out",
              "motion-reduce:transition-none motion-reduce:transform-none",
            ].join(" ")}
            style={{
              transitionDelay: open ? `${60 + sections.length * 35}ms` : "0ms",
            }}
          >
            <Link
              href="/wizualizator"
              className="block w-full rounded-sm bg-teal-500 px-4 py-2 text-center font-medium text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
              onClick={() => setOpen(false)}
            >
              Wizualizator
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
