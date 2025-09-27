"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const SECTIONS = [
  { slug: "o-nas", label: "O nas" },
  { slug: "oferta", label: "Oferta" },
  { slug: "wizualizator", label: "Wizualizator" },
  { slug: "realizacje", label: "Realizacje" },
  { slug: "cennik", label: "Cennik" },
  { slug: "kontakt", label: "Kontakt" },
];

export default function Footer() {
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
    if (location.pathname !== "/") {
      history.pushState(null, "", `/#${slug}`);
      location.assign(`/#${slug}`);
      return;
    }
    scrollWithOffset(slug);
    history.pushState(null, "", `#${slug}`);
  };

  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t bg-white">
      <div className="container mx-auto px-4 py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo + opis */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/assets/images/hero/logo.png"
                alt="iWallDesign"
                width={150}
                height={40}
                className="h-auto w-auto"
                priority={false}
              />
            </Link>
            <p className="mt-4 max-w-prose text-sm text-black/60">
              Druk UV na niemal każdej powierzchni: ściany, podłogi, meble,
              szkło, płytki i wiele więcej. Trwałość, kolory i precyzja – Twoje
              pomysły stają się rzeczywistością.
            </p>

            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-gray-50"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-gray-50"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Nawigacja</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {SECTIONS.map(({ slug, label }) => (
                <li key={slug}>
                  <Link
                    href={`/#${slug}`}
                    onClick={(e) => onSectionClick(e, slug)}
                    className="text-black/70 hover:text-black"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Kontakt</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2 text-black/70">
                <Phone className="h-4 w-4" />
                <a href="tel:+48500600700" className="hover:text-black">
                  +48 500 600 700
                </a>
              </li>
              <li className="flex items-center gap-2 text-black/70">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:kontakt@iwalldesign.pl"
                  className="hover:text-black"
                >
                  kontakt@iwalldesign.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs text-black/60 md:flex-row">
          <p>© {year} iWallDesign. Wszelkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/polityka-prywatnosci"
              className="hover:text-black underline-offset-2 hover:underline"
            >
              Polityka prywatności
            </Link>
            <Link
              href="/regulamin"
              className="hover:text-black underline-offset-2 hover:underline"
            >
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
