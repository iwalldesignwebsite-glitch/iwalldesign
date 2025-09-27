"use client";
import React, { useState } from "react";
import Title from "../assets/Title";
import { ShinyWord } from "../navbar/ShinyWord";
import { AlarmClockCheck, Mail, MapPinned, Phone } from "lucide-react";
import ContactForm from "./ContactForm";
import Container from "../assets/Container";
import AlertToast from "./AlertToast";

const content = {
  titleId: "kontakt-tytuł",
  leadId: "kontakt-lead",
  description:
    "Niezależnie, czy chcesz odmienić wnętrze, nadać charakter przestrzeni biurowej czy stworzyć unikalne nadruki na tekstyliach – przygotujemy dla Ciebie indywidualną ofertę.",
};

export default function Contact() {
  const [toast, setToast] = useState<"idle" | "success" | "error">("idle");
  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-tytuł"
      aria-describedby="kontakt-lead"
      className="mx-auto relative  px-4  scroll-mt-14 lg:scroll-mt-16"
    >
      <Container>
        <Title
          titleId={content.titleId}
          description={content.description}
          lead={content.description}
        >
          Wypełnij formularz, aby otrzymać spersonalizowaną wycenę druku UV –{" "}
          <ShinyWord>
            szybko, rzetelnie <span className="text-black">i</span> bez ukrytych
            kosztów.
          </ShinyWord>
        </Title>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {/* LEWA KOLUMNA */}
          <aside className="space-y-6">
            <section
              aria-labelledby="skontaktuj-się"
              className="rounded-lg  bg-white p-6 "
            >
              <h3
                id="skontaktuj-się"
                className="mb-12 text-xl font-medium lg:text-2xl"
              >
                Bądźmy w kontakcie!
              </h3>

              <address className="not-italic">
                <ul className="space-y-12 text-lg">
                  <li className="flex items-center gap-3 ">
                    <span
                      aria-hidden
                      className="mt-0.5  p-3 rounded-md bg-gray-200 text-gray-500"
                    >
                      <Mail className=" aspect-square" />
                    </span>
                    <div className=" h-full flex flex-col items-start ">
                      <span className="text-sm text-black/40">
                        Napisz do nas!
                      </span>
                      <a
                        href="mailto:example@mail.com"
                        className="underline-offset-2 hover:underline font-semibold"
                      >
                        example@mail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 ">
                    <span
                      aria-hidden
                      className="mt-0.5  p-3 rounded-md bg-gray-200 text-gray-500"
                    >
                      <Phone className=" aspect-square" />
                    </span>
                    <div className=" h-full flex flex-col items-start ">
                      <span className="text-sm text-black/40">
                        Zadzwoń do nas
                      </span>
                      <a
                        href="tel:+48123456789"
                        className="underline-offset-2 hover:underline font-semibold"
                      >
                        +48 123 456 789
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 ">
                    <span
                      aria-hidden
                      className="mt-0.5  p-3 rounded-md bg-gray-200 text-gray-500"
                    >
                      <MapPinned className=" aspect-square" />
                    </span>
                    <div className=" h-full flex flex-col items-start ">
                      <span className="text-sm text-black/40">Odwiedź nas</span>
                      <span className="font-semibold">
                        Ul. Drukarek 5, 75-344 Koszalin
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 ">
                    <span
                      aria-hidden
                      className="mt-0.5  p-3 rounded-md bg-gray-200 text-gray-500"
                    >
                      <AlarmClockCheck className=" aspect-square" />
                    </span>
                    <div className=" h-full flex flex-col items-start ">
                      <span className="text-sm text-black/40">
                        Szybka odpowiedź
                      </span>
                      <span className="font-semibold">
                        Odpowiadamy tego samego dnia
                      </span>
                      <span className="text-xs text-black/40">
                        Dokładamy wszelkich starań aby dostarczyć Wam
                        natychmiastowych odpowiedzi, jednak w wyjątkowych
                        sytuacjach czas odpowiedzi może wydłużyć się do 24h.
                        Dziękujemy za cierpliwość!
                      </span>
                    </div>
                  </li>
                </ul>
              </address>
            </section>
          </aside>

          {/* PRAWA KOLUMNA (FORMULARZ) */}
          <div>
            <ContactForm onSubmitResult={(s) => setToast(s)} />
          </div>
        </div>
        <AlertToast status={toast} onClose={() => setToast("idle")} />
      </Container>
    </section>
  );
}

{
  /* <form className="rounded-lg border bg-white p-6 shadow-sm" noValidate>
            <fieldset className="grid gap-4 md:grid-cols-2">
              <legend className="sr-only">Dane kontaktowe</legend>

              <div className="flex flex-col">
                <label htmlFor="name" className="mb-1 text-sm font-medium">
                  Imię i nazwisko{" "}
                  <span aria-hidden className="text-emerald-600">
                    *
                  </span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 text-sm font-medium">
                  E-mail{" "}
                  <span aria-hidden className="text-emerald-600">
                    *
                  </span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-1 text-sm font-medium">
                  Numer telefonu
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="city" className="mb-1 text-sm font-medium">
                  Miasto
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  className="rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </fieldset>

            <fieldset className="mt-5">
              <legend className="mb-2 text-sm font-medium">
                Dodaj zdjęcia powierzchni lub projektu (max 3)
              </legend>

              {/* UI strefy wgrywania – bez logiki */
}
// <div className="flex flex-col items-center justify-center rounded-md border border-dashed bg-neutral-50 px-4 py-8 text-center">
//   <p className="text-sm text-neutral-600">
//     Przeciągnij i upuść pliki tutaj lub
//   </p>
//   <label
//     htmlFor="files"
//     className="mt-2 inline-block cursor-pointer rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white"
//   >
//     Przeglądaj
//   </label>
//   <input
//     id="files"
//     name="files"
//     type="file"
//     multiple
//     className="sr-only"
//   />
//   <p className="mt-2 text-xs text-neutral-500">
//     Obsługiwane: JPG, PNG, PDF (do 10 MB każdy)
//   </p>
// </div>

{
  /* Placeholder listy plików (UI) */
}
//     <ul className="mt-3 space-y-2 text-sm">
//       <li className="flex items-center justify-between rounded-md border px-3 py-2 text-neutral-600">
//         <span className="truncate">plik-przykladowy-1.jpg</span>
//         <button
//           type="button"
//           className="text-red-600 hover:underline"
//         >
//           Usuń
//         </button>
//       </li>
//     </ul>
//   </fieldset>

//   <div className="mt-5">
//     <label
//       htmlFor="message"
//       className="mb-1 block text-sm font-medium"
//     >
//       Dodatkowe informacje (opcjonalnie)
//     </label>
//     <textarea
//       id="message"
//       name="message"
//       rows={4}
//       className="w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
//     />
//   </div>

//   <fieldset className="mt-5">
//     <legend className="sr-only">Zgody</legend>
//     <label className="inline-flex items-start gap-2 text-sm">
//       <input
//         type="checkbox"
//         name="consent"
//         className="mt-1"
//         required
//       />
//       <span>
//         Zapoznałem(am) się i akceptuję{" "}
//         <a
//           href="/polityka-prywatnosci"
//           className="text-emerald-700 underline-offset-2 hover:underline"
//         >
//           Politykę Prywatności
//         </a>
//         .
//       </span>
//     </label>
//   </fieldset>

//   <div className="mt-6">
//     <button
//       type="submit"
//       className="inline-flex w-full items-center justify-center rounded-md bg-gradient-to-r from-emerald-600 to-cyan-600 px-4 py-2.5 text-white transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-emerald-500"
//     >
//       Wyślij zapytanie
//     </button>
//   </div>
// </form> */}
