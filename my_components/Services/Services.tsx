"use client";
import Container from "../assets/Container";
import Title from "../assets/Title";
import { ShinyWord } from "../navbar/ShinyWord";
import { CompareBlock } from "./CompareBlock";
import { CompareCards } from "./CompareCards";
import PeelSticker from "./Sticker";

const content = {
  titleId: "dlaczego-druk-uv",
  leadId: "lead-dlaczego",
  description:
    "Druk UV to technologia, która pozwala nanosić grafikę bezpośrednio na niemal każdą płaską powierzchnię – od szkła, metalu i drewna, po płytki, płyty meblowe czy kompozyty. Atrament utwardzany światłem UV gwarantuje doskonałą przyczepność, głębię kolorów i trwałość, której nie zapewniają tradycyjne metody. To rozwiązanie, które łączy design, funkcjonalność i nowoczesność, pozwalając zamienić dowolny materiał w unikalny element dekoracji lub reklamy.",
};

function BeforeAfter() {
  return (
    <section
      className="scroll-mt-14 lg:scroll-mt-16"
      id="oferta"
      aria-labelledby="dlaczego-druk-uv"
      aria-describedby="lead-dlaczego"
    >
      <Container>
        <div className="  flex flex-col-reverse items-center justify-center gap-10 md:gap-5  lg:flex-row lg:items-start lg:gap-10 xl:justify-evenly xl:gap-50">
          <CompareBlock />
          <div className="w-full ">
            <Title
              titleId={content.titleId}
              lead={content.leadId}
              description={content.description}
            >
              {" "}
              <ShinyWord>Druk UV</ShinyWord> - nowoczesna technologia nadruku
              bez ograniczeń
            </Title>
            <CompareCards />
          </div>
        </div>
      </Container>
      <Container>
        <PeelSticker
          imageSrc="/assets/images/logo.png"
          alt="Naklejka demo"
          size={320}
        />
      </Container>
    </section>
  );
}

export default BeforeAfter;
