import { Mail, Phone } from "lucide-react";
import Title from "../assets/Title";
import Container from "../assets/Container";
import RevealOnScroll from "../assets/RevealWrapper";

const content = {
  sectionId: "lokalizacja",
  titleId: "lokalizacja-heading",
  leadId: "lead-lokalizacja",
  description:
    "Działamy na terenie Koszalina, Kołobrzegu, Białogardu, Darłowa, Szczecinka i całego województwa zachodniopomorskiego. Realizujemy także projekty w innych częściach Polski — jeśli szukasz najwyższej jakości druku UV, zrealizujemy Twoje zamówienie niezależnie od lokalizacji.",
};

export default function Map() {
  return (
    <section
      id={content.sectionId}
      aria-labelledby={content.titleId}
      aria-describedby={content.leadId}
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:items-start">
          <div className="flex flex-col items-start gap-8 md:gap-4 justify-evenly md:h-full">
            <Title
              titleId={content.titleId}
              description={content.description}
              lead={content.leadId}
            >
              Twój partner w druku UV – Koszalin i okolice
            </Title>

            <address className="not-italic text-black/90 leading-relaxed font-medium space-y-2 text-sm lg:text-xl">
              <div className="flex gap-2 items-center">
                <Phone className="text-emerald-500" aria-hidden="true" />
                <a href="tel:+48882945714" className="hover:underline">
                  +48 882 945 714
                </a>
              </div>
              <div className="flex gap-2 items-center">
                <Mail className="text-emerald-500" aria-hidden="true" />
                <a
                  href="mailto:biuro@iwalldesign.pl"
                  className="hover:underline"
                >
                  biuro@iwalldesign.pl
                </a>
              </div>
            </address>
          </div>
          <RevealOnScroll>
            <div className="w-full">
              <div className="relative w-full overflow-hidden rounded-md shadow aspect-square md:max-h-[400px]">
                <iframe
                  title="Mapa — Koszalin i województwo zachodniopomorskie"
                  aria-label="Mapa — Koszalin i województwo zachodniopomorskie"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=Koszalin&hl=pl&z=8&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
}
