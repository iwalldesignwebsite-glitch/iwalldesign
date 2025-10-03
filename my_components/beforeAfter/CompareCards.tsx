import { HoverEffect } from "@/components/ui/card-hover-effect";
import RevealOnScroll from "../assets/RevealWrapper";
export function CompareCards() {
  return (
    <div className="max-w-5xl">
      <RevealOnScroll>
        <HoverEffect items={projects} />
      </RevealOnScroll>
    </div>
  );
}
export const projects = [
  {
    title: "Bez ograniczeń materiałowych",
    description:
      "Ściany, podłogi, ubrania – zamień wszystko w swoje płótno. Twój pomysł, nasza technologia.",
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
