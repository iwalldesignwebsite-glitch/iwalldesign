// components/sections/Visualizer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "../assets/Container";
import Title from "../assets/Title";
import { ShinyWord } from "../navbar/ShinyWord";
import RevealOnScroll from "../assets/RevealWrapper";

export function VisualizerSection() {
  return (
    <section
      id="wizualizator"
      aria-labelledby="wiz-title"
      aria-describedby="wiz-lead"
    >
      <Container className="gap-10">
        {/* Nagłówek */}
        <Title
          titleId="wiz-title"
          lead="wiz-lead"
          description="Nie wiesz, jak będzie wyglądał nadruk w realnym miejscu? Nasz
              wizualizator pokaże to zanim złożysz zamówienie.
              Dodajesz zdjęcie powierzchni, dopasowujesz grafikę i od razu
              widzisz efekt."
        >
          Przetestuj <ShinyWord>Wizualizator</ShinyWord>
        </Title>

        <ol className="flex flex-col gap-16  md:gap-0">
          <li className="relative flex flex-col md:flex-row items-center justify-evenly   ">
            <RevealOnScroll>
              <div className="relative w-full max-w-[250px] md:max-w-[300px] lg:max-w-[340px] ">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[70%] aspect-square rounded-full bg-gradient-to-tr from-blue-500 via-emerald-300 to-emerald-600 blur-3xl lg:w-full opacity-60" />
                <Image
                  src="/assets/images/timeline/uploadStep.png"
                  alt="Krok 1 — przesyłanie zdjęcia powierzchni"
                  width={800}
                  height={520}
                  className="relative z-10 w-full h-auto rounded-xl"
                  priority
                />
              </div>
            </RevealOnScroll>

            <div className=" md:max-w-[350px] ">
              <h3 className="font-semibold text-xl md:text-2xl ">
                <span className="mr-2 pb-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/30 font-semibold">
                  1
                </span>
                Dodaj tło
              </h3>
              <p className="mt-1 text-base md:text-lg text-black/60">
                Wgraj zdjęcie powierzchni (ściana, podłoga, mebel, tkanina). To
                będzie Twoje „płótno”.
              </p>
            </div>

            <Image
              src="/assets/images/timeline/arrow-down-first.png"
              alt=""
              width={200}
              height={120}
              aria-hidden="true"
              className="z-10 pointer-events-none select-none absolute left-1/2 bottom-0 -translate-x-1/2  w-30 translate-y-[90%] md:translate-y-1/2 md:w-38 -rotate-15 opacity-80 md:-rotate-35"
            />
          </li>

          <li className="relative flex flex-col md:flex-row-reverse items-center justify-evenly     ">
            <RevealOnScroll>
              <div className="relative w-full max-w-[250px] md:max-w-[300px] lg:max-w-[340px] ">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[70%] aspect-square rounded-full bg-gradient-to-tr from-blue-500 via-emerald-300 to-emerald-600 blur-3xl lg:w-full opacity-60" />
                <Image
                  src="/assets/images/timeline/adjustStep.png"
                  alt="Krok 2 — dopasowanie grafiki"
                  width={800}
                  height={520}
                  className="relative z-10 w-full h-auto rounded-xl"
                />
              </div>
            </RevealOnScroll>
            <div className=" md:max-w-[350px]  ">
              <h3 className="font-semibold text-xl md:text-2xl ">
                <span className="mr-2 pb-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/30 font-semibold">
                  2
                </span>
                Umieść i dopasuj
              </h3>
              <p className="mt-1 text-base md:text-lg text-black/60">
                Przeciągnij swoją grafikę, skaluj i ustaw dokładnie w kadrze.
                Intuicyjne uchwyty pozwalają dopracować detale w sekundę.
              </p>
            </div>

            <Image
              src="/assets/images/timeline/arrow-down-second.png"
              alt=""
              width={200}
              height={120}
              aria-hidden="true"
              className=" pointer-events-none select-none z-10 absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[90%] md:translate-y-1/2 md:w-38  w-30  rotate-15 opacity-80 md:rotate-35"
            />
          </li>
          <li className="relative flex flex-col md:flex-row items-center justify-evenly  ">
            <RevealOnScroll>
              <div className="relative w-full max-w-[250px] md:max-w-[300px] lg:max-w-[340px] ">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[70%] aspect-square rounded-full bg-gradient-to-tr from-blue-500 via-emerald-300 to-emerald-600 blur-3xl lg:w-full opacity-60" />
                <Image
                  src="/assets/images/timeline/finalStep.png"
                  alt="Krok 3 — realistyczny podgląd i zatwierdzenie"
                  width={800}
                  height={520}
                  className="relative z-10 w-full h-auto rounded-xl"
                />
              </div>
            </RevealOnScroll>
            <div className="md:max-w-[350px] ">
              <h3 className="font-semibold text-xl md:text-2xl ">
                <span className="mr-2 pb-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/30 font-semibold">
                  3
                </span>
                Zobacz efekt
              </h3>
              <p className="mt-1 text-base md:text-lg text-black/60">
                Otrzymujesz realistyczną wizualizację - dokładnie tak, jak
                nadruk będzie wyglądał w Twojej przestrzeni.
              </p>
            </div>
          </li>
        </ol>

        <div className="pt-2 text-center">
          <Link
            href="/wizualizator"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 font-medium text-white shadow-md hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-600"
          >
            Uruchom wizualizator
          </Link>
        </div>
      </Container>
    </section>
  );
}
