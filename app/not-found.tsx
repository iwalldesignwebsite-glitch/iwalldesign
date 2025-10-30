import Link from "next/link";
import { Home, Compass } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main className="relative h-svh flex flex-col items-center justify-center px-6 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white via-white to-emerald-50"
      />

      <div className="mx-auto max-w-xl">
        <p className="text-sm font-medium text-emerald-600">Błąd 404</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Strony nie znaleziono
        </h1>
        <p className="mt-3 text-gray-600">
          Link może być nieaktualny albo adres został wpisany z błędem. Wróć na
          stronę główną lub przejdź do oferty.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 px-5 py-2.5 text-white font-medium hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Wróć na stronę główną
          </Link>
          <Link
            href="/#oferta"
            className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-5 py-2.5 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
          >
            <Compass className="h-4 w-4" aria-hidden="true" />
            Zobacz ofertę
          </Link>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          Jeśli problem się powtarza, napisz do nas:{" "}
          <a
            href="mailto:biuro@iwalldesign.pl"
            className="text-emerald-700 hover:underline"
          >
            biuro@iwalldesign.pl
          </a>
        </p>
      </div>
    </main>
  );
}
