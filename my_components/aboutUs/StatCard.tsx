import React from "react";
import { ShinyWord } from "../navbar/ShinyWord";
import RevealOnScroll from "../assets/RevealWrapper";

const StatCard = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <RevealOnScroll>
        <dl
          aria-label="Statystyka — liczba zrealizowanych projektów"
          className="rounded-lg border-black/20 bg-white p-4 shadow-md border-2 flex flex-col items-center text-center h-full"
        >
          <dt className="text-2xl font-semibold">
            <ShinyWord>500+</ShinyWord>
          </dt>
          <dd className="mt-1 text-sm text-neutral-600">
            Zrealizowanych projektów
          </dd>
        </dl>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <dl
          aria-label="Statystyka — procent zadowolonych klientów"
          className="rounded-lg border-black/20 bg-white p-4 shadow-md border-2 flex flex-col items-center text-center h-full"
        >
          <dt className="text-2xl font-semibold">
            <ShinyWord>100%</ShinyWord>
          </dt>
          <dd className="mt-1 text-sm text-neutral-600">
            Zadowolonych klientów
          </dd>
        </dl>
      </RevealOnScroll>

      <RevealOnScroll delay={0.3}>
        <dl
          aria-label="Statystyka — liczba klientów powracających"
          className="rounded-lg border-black/20 bg-white p-4 shadow-md border-2 flex flex-col items-center text-center h-full"
        >
          <dt className="text-2xl font-semibold">
            <ShinyWord>8/10</ShinyWord>
          </dt>
          <dd className="mt-1 text-sm text-neutral-600">
            Klientów wraca po więcej
          </dd>
        </dl>
      </RevealOnScroll>

      <RevealOnScroll delay={0.4}>
        <dl
          aria-label="Statystyka — lata doświadczenia firmy"
          className="rounded-lg border-black/20 bg-white p-4 shadow-md border-2 flex flex-col items-center text-center h-full"
        >
          <dt className="text-2xl font-semibold">
            <ShinyWord>2+</ShinyWord>
          </dt>
          <dd className="mt-1 text-sm text-neutral-600">Lata doświadczenia</dd>
        </dl>
      </RevealOnScroll>
    </div>
  );
};

export default StatCard;
