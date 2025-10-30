// app/polityka-prywatnosci/page.tsx
import Link from "next/link";
import Navbar from "@/my_components/navbar/Navbar";
import Container from "@/my_components/assets/Container";
import { ShinyWord } from "@/my_components/navbar/ShinyWord";
import Footer from "@/my_components/footer/Footer";

export const metadata = {
  title: "Polityka prywatności | iWallDesign",
  description:
    "Dowiedz się, jak iWallDesign z Karlina przetwarza Twoje dane osobowe zgodnie z RODO. Zasady bezpieczeństwa, przechowywania i kontaktu w sprawie danych.",
  alternates: {
    canonical: "https://iwalldesign.vercel.app/polityka-prywatnosci",
  },
};

const UPDATED_AT = "2025-10-30";

export default function Privacy() {
  return (
    <main>
      <Navbar />
      <section className="pt-28 pb-16">
        <Container className="flex flex-col items-center">
          <header className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold">
              Polityka <ShinyWord>Prywatności</ShinyWord>
            </h1>
            <p className="mt-3 text-sm text-black/60">
              Ostatnia aktualizacja:{" "}
              <time dateTime={UPDATED_AT}>{UPDATED_AT}</time>
            </p>
          </header>

          <article className="prose prose-neutral max-w-3xl w-full mt-10">
            <h2>1. Administrator danych</h2>
            <p>
              Administratorem danych osobowych jest <strong>iWallDesign</strong>{" "}
              z siedzibą w<strong> Karlinie</strong>. Kontakt w sprawie danych:{" "}
              <a href="mailto:iwalldesign@mail.com">iwalldesign@mail.com</a>,
              tel. <a href="tel:+48882945714">+48 882 945 714</a>.
            </p>

            <h2>2. Zakres przetwarzanych danych</h2>
            <p>
              Przetwarzamy dane dobrowolnie przekazane poprzez formularz
              kontaktowy: imię, adres e-mail, numer telefonu oraz treść
              wiadomości.
            </p>

            <h2>3. Cel i podstawa prawna przetwarzania</h2>
            <ul>
              <li>
                <strong>Obsługa zapytań i przygotowanie wyceny</strong> –
                odpowiedź na wiadomość, przygotowanie oferty i kontakt zwrotny
                (art. 6 ust. 1 lit. b RODO – czynności zmierzające do zawarcia
                umowy).
              </li>
              <li>
                <strong>Utrzymanie korespondencji</strong> oraz dochodzenie lub
                obrona roszczeń (art. 6 ust. 1 lit. f RODO – prawnie uzasadniony
                interes administratora).
              </li>
            </ul>

            <h2>4. Odbiorcy danych</h2>
            <p>
              Dane nie są sprzedawane ani udostępniane podmiotom trzecim. Mogą
              być powierzone zaufanym dostawcom usług niezbędnych do działania
              serwisu (np. operatorowi poczty e-mail lub serwisowi wysyłki
              wiadomości), wyłącznie na podstawie umów powierzenia i w zakresie
              koniecznym do realizacji usługi.
            </p>

            <h2>5. Okres przechowywania</h2>
            <p>
              Dane z formularza przechowujemy przez okres niezbędny do obsługi
              zapytania i komunikacji, maksymalnie do 12 miesięcy od ostatniego
              kontaktu lub do czasu skutecznego zgłoszenia sprzeciwu, chyba że
              dłuższe przechowywanie wynika z przepisów prawa.
            </p>

            <h2>6. Twoje prawa</h2>
            <ul>
              <li>dostęp do danych i uzyskanie ich kopii,</li>
              <li>sprostowanie (poprawienie) danych,</li>
              <li>usunięcie danych („prawo do bycia zapomnianym”),</li>
              <li>ograniczenie przetwarzania,</li>
              <li>
                sprzeciw wobec przetwarzania opartego na art. 6 ust. 1 lit. f
                RODO,
              </li>
              <li>przenoszenie danych (jeśli ma zastosowanie),</li>
              <li>
                skarga do Prezesa Urzędu Ochrony Danych Osobowych (UODO), jeśli
                uznasz, że przetwarzamy dane niezgodnie z prawem.
              </li>
            </ul>

            <h2>7. Pliki cookies i analityka</h2>
            <p>
              Nie wykorzystujemy plików cookies ani narzędzi analitycznych do
              śledzenia użytkowników. Jeśli w przyszłości wdrożymy takie
              rozwiązania, polityka zostanie odpowiednio zaktualizowana przed
              ich uruchomieniem.
            </p>

            <h2>8. Bezpieczeństwo danych</h2>
            <p>
              Stosujemy odpowiednie środki techniczne i organizacyjne, takie jak
              szyfrowanie transmisji (HTTPS) oraz ograniczenia dostępu do
              skrzynek pocztowych. Dane przesyłane z formularza trafiają
              bezpośrednio do skrzynki e-mail i są wykorzystywane wyłącznie do
              obsługi zapytania.
            </p>

            <h2>9. Dobrowolność podania danych</h2>
            <p>
              Podanie danych jest dobrowolne, ale niezbędne do przygotowania
              oferty lub udzielenia odpowiedzi na przesłane zapytanie.
            </p>

            <h2>10. Zmiany w polityce prywatności</h2>
            <p>
              Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej
              polityce w przypadku aktualizacji przepisów prawa lub wprowadzenia
              nowych funkcji w serwisie. Aktualna wersja zawsze znajduje się na
              tej stronie.
            </p>

            <hr />
          </article>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 px-5 py-2.5 text-white font-medium hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              Wróć na stronę główną
            </Link>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  );
}
