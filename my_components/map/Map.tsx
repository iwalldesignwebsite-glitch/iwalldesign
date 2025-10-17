import { Mail, MapPin, Phone } from "lucide-react";
import Title from "../assets/Title";
import Container from "../assets/Container";
import RevealOnScroll from "../assets/RevealWrapper";

const content = {
  titleId: "lokalizacja",
  leadId: "lead-lokalizacja",
  description:
    "Działamy na terenie Koszalina, Kołobrzegu, Białogardu, Darłowa, Szczecinka i całego województwa zachodniopomorskiego. Niezależnie, czy potrzebujesz nadruku w domu, biurze czy przestrzeni publicznej – jesteśmy blisko Ciebie.",
};

export default function Map() {
  return (
    <section
      id="lokalizacja"
      aria-labelledby="lokalizacja"
      aria-describedby="lead-lokalizacja"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:items-start">
          <div className="flex flex-col  items-start gap-8 md:gap-4 justify-evenly md:h-full ">
            <Title
              titleId={content.titleId}
              description={content.description}
              lead={content.leadId}
            >
              Twój partner w druku UV – Koszalin i okolice
            </Title>

            <address className=" text-black/90 leading-relaxed font-medium space-y-2 text-sm lg:text-xl">
              <div className=" flex gap-2 items-center ">
                <MapPin className="text-emerald-500" />
                ul. Drukarek 5 Koszalin 75-000
              </div>
              <div className=" flex gap-2 items-center ">
                <Phone className="text-emerald-500" />
                123 456 789
              </div>
              <div className=" flex gap-2 items-center ">
                <Mail className="text-emerald-500" />
                iwalldesign@mail.com
              </div>
            </address>
          </div>
          <RevealOnScroll>
            <div className="w-full">
              <div className="relative w-full overflow-hidden rounded-md shadow aspect-square md:max-h-[400px]">
                <iframe
                  title="Mapa Koszalina"
                  aria-label="Mapa Koszalina"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12248.76426043767!2d16.1619351!3d54.1947325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4700f0a4a62d91f3%3A0x84c17ed3d2f1b2d9!2sKoszalin!5e0!3m2!1spl!2spl!4v1694091200000"
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
