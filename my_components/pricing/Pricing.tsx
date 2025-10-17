import React from "react";
import { ShinyWord } from "../navbar/ShinyWord";
import PriceCard from "./PriceCard";
import { Send } from "lucide-react";
import Title from "../assets/Title";
import Container from "../assets/Container";
import RevealOnScroll from "../assets/RevealWrapper";
import ContactBtn from "../assets/ContactBtn";

const PricingCardsInfo = [
  {
    image: "/assets/images/pricing/wall.png",
    title: "Ściany",
    price: "150",
    unit: "m²",
    pros: [
      "Nadaj ścianom charakter i wyjątkowy design",
      "Żywe kolory odporne na blaknięcie",
      "Szybka i czysta realizacja bez bałaganu",
      "Indywidualne projekty dopasowane do wnętrza",
    ],
  },
  {
    image: "/assets/images/pricing/floor.png",
    title: "Podłogi",
    price: "200",
    unit: "m²",
    pros: [
      "Ekstremalna wytrzymałość – idealne do miejsc o dużym ruchu",
      "Odporność na wilgoć i zabrudzenia",
      "Łatwe w czyszczeniu i utrzymaniu",
    ],
  },
  {
    image: "/assets/images/pricing/textile.png",
    title: "Tekstylia",
    price: "25",
    unit: "sztuka",
    pros: [
      "Elastyczny nadruk odporny na pękanie",
      "Intensywne kolory zachowane nawet po praniu",
      "Nadaje się do codziennego użytku",
      "Zamówienia już od 1 sztuki – brak limitów",
    ],
  },
  {
    image: "/assets/images/pricing/textile.png",
    title: "Tekstyliaxd",
    price: "25",
    unit: "sztuka",
    pros: [
      "Elastyczny nadruk odporny na pękanie",
      "Intensywne kolory zachowane nawet po praniu",
      "Nadaje się do codziennego użytku",
      "Zamówienia już od 1 sztuki – brak limitów",
    ],
  },
  {
    image: "/assets/images/pricing/textile.png",
    title: "Tekstyliaxx",
    price: "25",
    unit: "sztuka",
    pros: [
      "Elastyczny nadruk odporny na pękanie",
      "Intensywne kolory zachowane nawet po praniu",
      "Nadaje się do codziennego użytku",
      "Zamówienia już od 1 sztuki – brak limitów",
    ],
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
        <div className="mt-10 grid items-stretch gap-6 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
          {PricingCardsInfo.map((card, id) => (
            <RevealOnScroll key={card.title} delay={+`0.${id}`}>
              <PriceCard
                // ← zadbaj, by karta rozciągała się na wysokość
                image={card.image}
                title={card.title}
                pros={card.pros}
                price={card.price}
                unit={card.unit}
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
