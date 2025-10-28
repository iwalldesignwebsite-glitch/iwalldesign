// "use client";
// import React, { useState } from "react";
// import Title from "../assets/Title";
// import { ShinyWord } from "../navbar/ShinyWord";
// import { AlarmClockCheck, Mail, MapPinned, Phone } from "lucide-react";
// import ContactForm from "./ContactForm";
// import Container from "../assets/Container";
// import AlertToast from "./AlertToast";
// import RevealOnScroll from "../assets/RevealWrapper";

// const content = {
//   titleId: "kontakt-tytuł",
//   leadId: "kontakt-lead",
//   description:
//     "Niezależnie, czy chcesz odmienić wnętrze, nadać charakter przestrzeni biurowej czy stworzyć unikalne nadruki na tekstyliach – przygotujemy dla Ciebie indywidualną ofertę.",
// };

// export default function Contact() {
//   const [toast, setToast] = useState<"idle" | "success" | "error">("idle");
//   return (
//     <section
//       id="kontakt"
//       aria-labelledby="kontakt-tytuł"
//       aria-describedby="kontakt-lead"
//       className="mx-auto relative  px-4  "
//     >
//       <Container>
//         <Title
//           titleId={content.titleId}
//           description={content.description}
//           lead={content.description}
//         >
//           Wypełnij formularz, aby otrzymać spersonalizowaną wycenę druku UV –{" "}
//           <ShinyWord>
//             szybko, rzetelnie <span className="text-black">i</span> bez ukrytych
//             kosztów.
//           </ShinyWord>
//         </Title>

//         <div className="mt-10 grid gap-8 md:grid-cols-2">
//           <aside className="space-y-6">
//             <section
//               aria-labelledby="skontaktuj-się"
//               className="rounded-lg  bg-white p-6 "
//             >
//               <h3
//                 id="skontaktuj-się"
//                 className="mb-12 text-xl font-medium lg:text-2xl"
//               >
//                 Bądźmy w kontakcie!
//               </h3>

//               <address className="not-italic">
//                 <ul className="space-y-12 text-lg">
//                   <RevealOnScroll>
//                     <li className="flex items-center gap-3 ">
//                       <span
//                         aria-hidden
//                         className="mt-0.5  p-3 rounded-md bg-gray-200 text-gray-500"
//                       >
//                         <Mail className=" aspect-square" />
//                       </span>
//                       <div className=" h-full flex flex-col items-start ">
//                         <span className="text-sm text-black/40">
//                           Napisz do nas!
//                         </span>
//                         <a
//                           href="mailto:example@mail.com"
//                           className="underline-offset-2 hover:underline font-semibold"
//                         >
//                           example@mail.com
//                         </a>
//                       </div>
//                     </li>
//                   </RevealOnScroll>
//                   <RevealOnScroll delay={0.2}>
//                     <li className="flex items-center gap-3 ">
//                       <span
//                         aria-hidden
//                         className="mt-0.5  p-3 rounded-md bg-gray-200 text-gray-500"
//                       >
//                         <Phone className=" aspect-square" />
//                       </span>
//                       <div className=" h-full flex flex-col items-start ">
//                         <span className="text-sm text-black/40">
//                           Zadzwoń do nas
//                         </span>
//                         <a
//                           href="tel:+48123456789"
//                           className="underline-offset-2 hover:underline font-semibold"
//                         >
//                           +48 123 456 789
//                         </a>
//                       </div>
//                     </li>
//                   </RevealOnScroll>
//                   <RevealOnScroll delay={0.4}>
//                     <li className="flex items-center gap-3 ">
//                       <span
//                         aria-hidden
//                         className="mt-0.5  p-3 rounded-md bg-gray-200 text-gray-500"
//                       >
//                         <MapPinned className=" aspect-square" />
//                       </span>
//                       <div className=" h-full flex flex-col items-start ">
//                         <span className="text-sm text-black/40">
//                           Odwiedź nas
//                         </span>
//                         <span className="font-semibold">
//                           Ul. Drukarek 5, 75-344 Koszalin
//                         </span>
//                       </div>
//                     </li>
//                   </RevealOnScroll>
//                   <RevealOnScroll delay={0.6}>
//                     <li className="flex items-start gap-3 ">
//                       <span
//                         aria-hidden
//                         className="mt-0.5  p-3 rounded-md bg-gray-200 text-gray-500"
//                       >
//                         <AlarmClockCheck className=" aspect-square" />
//                       </span>
//                       <div className=" h-full flex flex-col items-start ">
//                         <span className="text-sm text-black/40">
//                           Szybka odpowiedź
//                         </span>
//                         <span className="font-semibold">
//                           Odpowiadamy tego samego dnia
//                         </span>
//                         <span className="text-xs text-black/40">
//                           Dokładamy wszelkich starań aby dostarczyć Wam
//                           natychmiastowych odpowiedzi, jednak w wyjątkowych
//                           sytuacjach czas odpowiedzi może wydłużyć się do 24h.
//                           Dziękujemy za cierpliwość!
//                         </span>
//                       </div>
//                     </li>
//                   </RevealOnScroll>
//                 </ul>
//               </address>
//             </section>
//           </aside>

//           {/* PRAWA KOLUMNA (FORMULARZ) */}
//           <div>
//             <ContactForm onSubmitResult={(s) => setToast(s)} />
//           </div>
//         </div>
//         <AlertToast status={toast} onClose={() => setToast("idle")} />
//       </Container>
//     </section>
//   );
// }

// components/sections/ContactSection.tsx
import Title from "../assets/Title";
import { ShinyWord } from "../navbar/ShinyWord";
import { AlarmClockCheck, Mail, Phone } from "lucide-react";
import Container from "../assets/Container";
import RevealOnScroll from "../assets/RevealWrapper";
import ContactInteractive from "./ContactInteractive"; // client-only poddrzewo

const content = {
  titleId: "kontakt-tytul",
  leadId: "kontakt-lead",
  description:
    "Niezależnie, czy chcesz odmienić wnętrze, nadać charakter przestrzeni biurowej czy stworzyć unikalne nadruki na tekstyliach – przygotujemy dla Ciebie indywidualną ofertę.",
};

export default function ContactSection() {
  return (
    <section
      id="kontakt"
      aria-labelledby={content.titleId}
      aria-describedby={content.leadId}
      className="mx-auto relative px-4"
    >
      <Container>
        <Title
          titleId={content.titleId}
          lead={content.leadId}
          description={content.description}
        >
          Wypełnij formularz, aby otrzymać spersonalizowaną wycenę druku UV –{" "}
          <ShinyWord>
            szybko, rzetelnie <span className="text-black">i</span> bez ukrytych
            kosztów.
          </ShinyWord>
        </Title>

        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-0">
          <aside className="space-y-6 ">
            <section
              aria-labelledby="skontaktuj-sie"
              className="rounded-lg bg-white p-6"
            >
              <h3
                id="skontaktuj-sie"
                className="mb-12 text-xl font-medium lg:text-2xl"
              >
                Bądźmy w kontakcie!
              </h3>

              <address className="not-italic">
                <ul className="space-y-12 text-lg">
                  <RevealOnScroll>
                    <li className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className="mt-0.5 p-3 rounded-md bg-gray-200 text-gray-500"
                      >
                        <Mail className="aspect-square" aria-hidden="true" />
                      </span>
                      <div className="flex flex-col items-start">
                        <span className="text-sm text-black/40">
                          Napisz do nas
                        </span>
                        <a
                          href="mailto:iwalldesign@mail.com"
                          className="underline-offset-2 hover:underline font-semibold"
                        >
                          biuro@iwalldesign.pl
                        </a>
                      </div>
                    </li>
                  </RevealOnScroll>

                  <RevealOnScroll delay={0.2}>
                    <li className="flex items-center gap-3">
                      <span
                        aria-hidden
                        className="mt-0.5 p-3 rounded-md bg-gray-200 text-gray-500"
                      >
                        <Phone className="aspect-square" aria-hidden="true" />
                      </span>
                      <div className="flex flex-col items-start">
                        <span className="text-sm text-black/40">
                          Zadzwoń do nas
                        </span>
                        <a
                          href="tel:+48882945714"
                          className="underline-offset-2 hover:underline font-semibold"
                        >
                          +48 882 945 714
                        </a>
                      </div>
                    </li>
                  </RevealOnScroll>

                  <RevealOnScroll delay={0.4}>
                    <li className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="mt-0.5 p-3 rounded-md bg-gray-200 text-gray-500"
                      >
                        <AlarmClockCheck
                          className="aspect-square"
                          aria-hidden="true"
                        />
                      </span>
                      <div className="flex flex-col items-start">
                        <span className="text-sm text-black/40">
                          Szybka odpowiedź
                        </span>
                        <span className="font-semibold">
                          Odpowiadamy tego samego dnia
                        </span>
                        <span className="text-xs text-black/40">
                          W wyjątkowych sytuacjach czas odpowiedzi może wydłużyć
                          się do 24 h. Dziękujemy za cierpliwość!
                        </span>
                      </div>
                    </li>
                  </RevealOnScroll>
                </ul>
              </address>
            </section>
          </aside>

          {/* PRAWA: interaktywne (client-only wyspa) */}
          <ContactInteractive />
        </div>
      </Container>
    </section>
  );
}
