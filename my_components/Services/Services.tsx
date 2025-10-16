"use client";
import Container from "../assets/Container";
import Title from "../assets/Title";
import { ShinyWord } from "../navbar/ShinyWord";
import { CompareBlock } from "./CompareBlock";
import { CompareCards } from "./CompareCards";
import AdvertisingMaterials from "./AdvertisingMaterials";
import { Layers, Medal, Clock, Leaf } from "lucide-react";

const projects = [
  {
    title: "Bez ograniczeń materiałowych",
    description:
      "Ściany, podłogi, ubrania, szkło, metal, drewno – jeśli powierzchnia jest płaska, możemy ją zadrukować.",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    title: "Perfekcyjna jakość",
    description:
      "Fotograficzne detale, głębia barw i profesjonalne wykończenie – design, który wygląda lepiej niż w wyobraźni.",
    icon: <Medal className="w-5 h-5" />,
  },
  {
    title: "Ekologiczne i bezpieczne tusze",
    description:
      "Drukujemy tuszami o niskiej emisji VOC, bezwonnie i bezpiecznie dla wnętrz.",
    codeblock: (
      <ul className=" text-sm list-disc list-inside space-y-1   ">
        <li>
          <a
            href="/assets/pdf/Certyfikat_GREENGUARD_Gold_270.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:underline  "
          >
            Certyfikat GREENGUARD
          </a>
        </li>
        <li>
          <a
            href="/assets/pdf/Oswiadczenie_71-3_NanoJet_UV_LED_C15.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-600 hover:underline  "
          >
            Europejska Norma EN 71-3:2019
          </a>
        </li>
      </ul>
    ),
    icon: <Leaf className="w-5 h-5" />,
  },
  {
    title: "Ekspresowa realizacja",
    description:
      "Nie czekasz tygodniami. Projekt dziś – efekt, który zachwyca, szybciej niż myślisz.",
    icon: <Clock className="w-5 h-5" />,
  },
];
const content = {
  titleId: "dlaczego-druk-uv",
  leadId: "lead-dlaczego",
  description:
    "Druk UV to technologia, która pozwala nanosić grafikę bezpośrednio na niemal każdą płaską powierzchnię – od szkła, metalu i drewna, po płytki, płyty meblowe czy kompozyty. Atrament utwardzany światłem UV gwarantuje doskonałą przyczepność, głębię kolorów i trwałość, której nie zapewniają tradycyjne metody. To nowoczesne rozwiązanie pozwala zamienić dowolny materiał w unikalny element dekoracji lub reklamy.",
};

function Services() {
  return (
    <section
      className="scroll-mt-14 lg:scroll-mt-16"
      id="oferta"
      aria-labelledby="dlaczego-druk-uv"
      aria-describedby="lead-dlaczego"
    >
      <Container className=" flex flex-col items-center justify-center gap-10 md:gap-10 2xl:hidden">
        <Title
          titleId={content.titleId}
          lead={content.leadId}
          description={content.description}
        >
          {" "}
          <ShinyWord>Druk UV</ShinyWord> - nowoczesna technologia nadruku bez
          ograniczeń
        </Title>
        <div className="w-full flex flex-col-reverse justify-between lg:flex-row-reverse items-center lg:items-start gap-10 md:gap-5 ">
          <CompareCards projects={projects} />
          <CompareBlock />
        </div>
      </Container>
      <Container className="hidden    2xl:flex flex-col items-center justify-center lg:flex-row gap-20">
        <CompareBlock />
        <div className="w-full flex flex-col justify-between  items-start gap-10 ">
          <Title
            titleId={content.titleId}
            lead={content.leadId}
            description={content.description}
          >
            {" "}
            <ShinyWord>Druk UV</ShinyWord> - nowoczesna technologia nadruku bez
            ograniczeń
          </Title>
          <CompareCards projects={projects} />
        </div>
      </Container>
      <AdvertisingMaterials />
    </section>
  );
}

export default Services;
