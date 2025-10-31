import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, Phone } from "lucide-react";

const SECTIONS = [
  { slug: "o-nas", label: "O nas" },
  { slug: "oferta", label: "Oferta" },
  { slug: "wizualizator", label: "Wizualizator" },
  { slug: "realizacje", label: "Realizacje" },
  { slug: "cennik", label: "Cennik" },
  { slug: "kontakt", label: "Kontakt" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t bg-white content-visibility-auto">
      <div className="container mx-auto px-4 py-10 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image
                src="/assets/images/logo.png"
                alt="iWallDesign logo"
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
                href="https://www.instagram.com/iwalldesign.pl/"
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
                <a href="tel:+48 882 945 714" className="hover:text-black">
                  +48 882 945 714
                </a>
              </li>
              <li className="flex items-center gap-2 text-black/70">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:biuro@iwalldesign.pl"
                  className="hover:text-black"
                >
                  biuro@iwalldesign.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 border-t pt-6 text-xs text-black/60 md:flex-row">
          <p>© {year} iWallDesign. Wszelkie prawa zastrzeżone.</p>

          <p className="text-xs text-black/60">
            <Link
              href="/polityka-prywatnosci"
              className="text-emerald-700 underline underline-offset-2 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-sm"
            >
              Polityka prywatności
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
