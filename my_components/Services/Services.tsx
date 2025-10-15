"use client";
import Container from "../assets/Container";
import Title from "../assets/Title";
import { ShinyWord } from "../navbar/ShinyWord";
import { CompareBlock } from "./CompareBlock";
import { CompareCards } from "./CompareCards";
import AdvertisingMaterials from "./AdvertisingMaterials";

const projects = [
  {
    title: "Bez ograniczeń materiałowych",
    description:
      "Ściany, podłogi, ubrania, szkło, metal, drewno – jeśli powierzchnia jest płaska, możemy ją zadrukować.",
    image: "Layers",
  },
  {
    title: "Perfekcyjna jakość",
    description:
      "Fotograficzne detale, głębia barw i profesjonalne wykończenie – design, który wygląda lepiej niż w wyobraźni.",
  },
  {
    title: "Niezrównana trwałość",
    description:
      "Kolory, które nie blakną i nadruki, które się nie ścierają – efekt, który zostaje z Tobą na długo.",
  },
  {
    title: "Ekspresowa realizacja",
    description:
      "Nie czekasz tygodniami. Projekt dziś – efekt, który zachwyca, szybciej niż myślisz.",
  },
];

const content = {
  titleId: "dlaczego-druk-uv",
  leadId: "lead-dlaczego",
  description:
    "Druk UV to technologia, która pozwala nanosić grafikę bezpośrednio na niemal każdą płaską powierzchnię – od szkła, metalu i drewna, po płytki, płyty meblowe czy kompozyty. Atrament utwardzany światłem UV gwarantuje doskonałą przyczepność, głębię kolorów i trwałość, której nie zapewniają tradycyjne metody. To nowoczesne rozwiązanie pozwala zamienić dowolny materiał w unikalny element dekoracji lub reklamy.",
};

function BeforeAfter() {
  return (
    <section
      className="scroll-mt-14 lg:scroll-mt-16"
      id="oferta"
      aria-labelledby="dlaczego-druk-uv"
      aria-describedby="lead-dlaczego"
    >
      <Container className="  flex flex-col items-center justify-center gap-10 md:gap-0 xl:hidden">
        <Title
          titleId={content.titleId}
          lead={content.leadId}
          description={content.description}
        >
          {" "}
          <ShinyWord>Druk UV</ShinyWord> - nowoczesna technologia nadruku bez
          ograniczeń
        </Title>
        <div className="w-full flex flex-col-reverse justify-between lg:flex-row items-center gap-10 md:gap-5 ">
          <CompareBlock />
          <CompareCards projects={projects} />
        </div>
      </Container>
      <Container className="hidden    xl:flex flex-col items-center justify-center lg:flex-row gap-20">
        <CompareBlock />
        <div className="w-full flex flex-col justify-between  items-center gap-10 ">
          <Title
            titleId={content.titleId}
            lead={content.leadId}
            description={content.description}
          >
            {" "}
            <ShinyWord>Druk UV</ShinyWord> - nowoczesna technologia nadruku bez
            ograniczeń
          </Title>
          <CompareCards projects={projects}/>
        </div>
      </Container>
      <AdvertisingMaterials />
    </section>
  );
}

export default BeforeAfter;
