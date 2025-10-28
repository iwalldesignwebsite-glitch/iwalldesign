import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const SECTIONS = [
  { slug: "o-nas", label: "O nas" },
  { slug: "oferta", label: "Oferta" },
  { slug: "wizualizator", label: "Wizualizator" },
  { slug: "realizacje", label: "Realizacje" },
  { slug: "cennik", label: "Cennik" },
  { slug: "kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const linkCls =
    "relative px-2 py-3 font-medium text-gray-800 transition-colors duration-200 hover:text-black " +
    "after:absolute after:left-0 after:bottom-1 after:h-[2px] after:w-0 after:bg-teal-500 " +
    "after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b bg-white py-2">
      <nav className="container mx-auto hidden lg:flex h-16 items-center justify-between px-2">
        <Link
          href="/"
          aria-label="Strona główna"
          className="flex items-center gap-2"
        >
          <Image
            src="/assets/images/logo.png"
            alt="Logo iWallDesign"
            width={140}
            height={70}
            priority
          />
        </Link>

        <ul className="flex items-center gap-8">
          {SECTIONS.map(({ slug, label }) => (
            <li key={slug}>
              <Link href={`/#${slug}`} className={linkCls}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/wizualizator"
          className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 px-5 py-2.5 font-medium text-white hover:opacity-90"
        >
          Wizualizator
        </Link>
      </nav>

      <MobileMenu sections={SECTIONS} linkCls={linkCls} />
    </header>
  );
}
