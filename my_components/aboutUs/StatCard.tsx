import React from "react";
import { ShinyWord } from "../navbar/ShinyWord";
import RevealOnScroll from "../assets/RevealWrapper";

const StatCard = () => {
  return (
    <dl className="grid grid-cols-2 gap-4">
      <RevealOnScroll>
        <div className="rounded-lg border bg-white p-4 shadow-sm flex flex-col items-center text-center h-full">
          <dd className="text-2xl font-semibold ">
            <ShinyWord>500+</ShinyWord>
          </dd>
          <dt className="mt-1 text-sm text-neutral-600">
            Zrealizowanych projektów
          </dt>
        </div>
      </RevealOnScroll>
      <RevealOnScroll delay={0.2}>
        <div className="rounded-lg border bg-white p-4 shadow-sm flex flex-col items-center text-center h-full">
          <dd className="text-2xl font-semibold ">
            <ShinyWord>100%</ShinyWord>
          </dd>
          <dt className="mt-1 text-sm text-neutral-600">
            Zadowolonych klientów
          </dt>
        </div>
      </RevealOnScroll>
      <RevealOnScroll delay={0.3}>
        <div className="rounded-lg border bg-white p-4 shadow-sm flex flex-col items-center text-center h-full">
          <dd className="text-2xl font-semibold ">
            <ShinyWord>8/10</ShinyWord>
          </dd>
          <dt className="mt-1 text-sm text-neutral-600">
            Klientów wraca po więcej
          </dt>
        </div>
      </RevealOnScroll>
      <RevealOnScroll delay={0.4}>
        <div className="rounded-lg border bg-white p-4 shadow-sm flex flex-col items-center text-center h-full">
          <dd className="text-2xl font-semibold ">
            <ShinyWord>2+</ShinyWord>
          </dd>
          <dt className="mt-1 text-sm text-neutral-600">lata doświadczenia</dt>
        </div>
      </RevealOnScroll>
    </dl>
  );
};

export default StatCard;
