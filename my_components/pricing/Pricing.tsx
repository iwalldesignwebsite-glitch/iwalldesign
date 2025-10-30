import React from "react";
import { ShinyWord } from "../navbar/ShinyWord";
import PriceCard from "./PriceCard";
import Title from "../assets/Title";
import Container from "../assets/Container";
import RevealOnScroll from "../assets/RevealWrapper";
import ContactBtn from "../assets/ContactBtn";

const PricingCardsInfo = [
  {
    image: "/assets/images/pricing/whiteWall.png",
    title: "Biała ściana",
    price: "299zł",
    unit: "/m²",
    pros: [
      "Nadaj ścianom charakter i wyjątkowy design",
      "Żywe kolory odporne na blaknięcie",
      "Szybka i czysta realizacja bez bałaganu",
      "Indywidualne projekty dopasowane do wnętrza",
    ],
  },
  {
    image: "/assets/images/pricing/differentWall.png",
    title: "Inny kolor ściany",
    price: "499zł",
    unit: "/m²",
    pros: [
      "Perfekcyjne krycie i nasycone kolory",
      "Trwały efekt nawet na ciemnych powierzchniach",
    ],
    description:
      "Zużycie atramentu jest większe przy ciemnych odcieniach dlatego cena jest inna niż w przypadku druku na białej ścianie.",
  },
  {
    image: "/assets/images/pricing/floor.jpg",
    title: "Podłoga",
    price: "399zł",
    unit: "/m²",
    pros: [
      "Odporność na ścieranie i wilgoć",
      "Świetny efekt w biurach, sklepach i galeriach",
      "Bez ryzyka ślizgania",
    ],
  },
  {
    image: "/assets/images/pricing/otherServices.png",
    title: "Inne usługi",
    price: "Wycena indywidualna",
    unit: "",
    pros: ["Naklejki", "Plakaty", "Banery", "Nadruki na przedmiotach"],
  },
];

const content = {
  titleId: "cennik",
  leadId: "lead-cennik",
  description:
    "Zapomnij o rozwiązaniach, które szybko tracą kolor i wymagają częstej wymiany. Druk UV to technologia, która daje intensywne barwy, perfekcyjne detale i trwałość na lata – bez blaknięcia i ścierania. Efekt wygląda lepiej niż w przypadku tradycyjnych metod i zostaje z Tobą na długo.",
};

function Pricing() {
  return (
    <section
      aria-labelledby="cennik"
      aria-describedby="lead-cennik"
      id="cennik"
    >
      <Container>
        <Title
          titleId={content.titleId}
          lead={content.leadId}
          description={content.description}
        >
          Inwestycja w design która się opłaca! Sprawdź{" "}
          <ShinyWord>ile kosztuje druk UV.</ShinyWord>
        </Title>
        <div className="mt-10 grid items-stretch gap-6 [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]">
          {PricingCardsInfo.map((card, id) => (
            <RevealOnScroll key={card.title} delay={+`0.${id}`}>
              <PriceCard
                image={card.image}
                title={card.title}
                pros={card.pros}
                price={card.price}
                unit={card.unit}
                description={card?.description}
              />
            </RevealOnScroll>
          ))}
        </div>
        <div className="mt-16 mx-auto gap-6  flex items-center justify-center">
          <div>
            <p className="text-xl max-w-2xl font-medium">
              Twój projekt jest nieszablonowy?
            </p>
            <p className="text-lg max-w-[550px]">
              Dla nas nie ma rzeczy niemożliwych! Skontatuj się z nami i uzyskaj
              indywidualną ofertę dopasowaną do Twoich potrzeb.
            </p>
          </div>
          <ContactBtn variant="solid" />
        </div>
      </Container>
    </section>
  );
}

export default Pricing;
