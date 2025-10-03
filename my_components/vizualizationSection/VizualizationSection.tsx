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
      <Container>
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-14 xl:gap-12">
          {/* Nagłówek */}
          <div className="space-y-6">
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
          </div>

          <ol className="flex flex-col gap-16 md:gap-20 lg:gap-16 xl:gap-0">
            <li className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 lg:gap-12 pb-10 md:pb-14">
              <RevealOnScroll>
                <div className="justify-self-center">
                  <div className="relative w-full max-w-[250px] md:max-w-[300px] lg:max-w-[340px]">
                    <div className="absolute inset-0 rounded-2xl bg-gray-200/70 blur-2xl" />
                    <Image
                      src="/assets/images/timeline/uploadStep.png"
                      alt="Krok 1 — przesyłanie zdjęcia powierzchni"
                      width={800}
                      height={520}
                      className="relative z-10 w-full h-auto rounded-xl"
                      priority
                    />
                  </div>
                </div>
              </RevealOnScroll>

              <div className="max-w-prose justify-self-center md:justify-self-start">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border font-semibold">
                  1
                </div>
                <h3 className="font-semibold text-xl md:text-2xl">Dodaj tło</h3>
                <p className="mt-2 text-base md:text-lg text-black/60">
                  Wgraj zdjęcie powierzchni (ściana, podłoga, mebel, tkanina).
                  To będzie Twoje „płótno”.
                </p>
              </div>

              <Image
                src="/assets/images/timeline/arrow-down-first.png"
                alt=""
                width={200}
                height={120}
                aria-hidden="true"
                className="hidden md:block pointer-events-none select-none absolute left-1/2 -translate-x-1/2 bottom-[-26px] w-24 md:w-28 lg:w-32 -rotate-15"
              />
            </li>

            <li className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 lg:gap-12 pb-10 md:pb-14">
              <div className="order-1 md:order-2 justify-self-center">
                <RevealOnScroll>
                  <div className="relative w-full max-w-[250px] md:max-w-[300px] lg:max-w-[340px]">
                    <div className="absolute inset-0 rounded-2xl bg-gray-200/70 blur-2xl" />
                    <Image
                      src="/assets/images/timeline/adjustStep.png"
                      alt="Krok 2 — dopasowanie grafiki"
                      width={800}
                      height={520}
                      className="relative z-10 w-full h-auto rounded-xl"
                    />
                  </div>
                </RevealOnScroll>
              </div>

              <div className="order-2 md:order-1 max-w-prose justify-self-center md:justify-self-start">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border font-semibold">
                  2
                </div>
                <h3 className="font-semibold text-xl md:text-2xl">
                  Umieść i dopasuj
                </h3>
                <p className="mt-2 text-base md:text-lg text-black/60">
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
                className="hidden md:block pointer-events-none select-none absolute left-1/2 -translate-x-1/2 bottom-[-26px] w-24 md:w-28 lg:w-32 rotate-15"
              />
            </li>
            <li className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-10 lg:gap-12">
              <RevealOnScroll>
                <div className="justify-self-center">
                  <div className="relative w-full max-w-[250px] md:max-w-[300px] lg:max-w-[340px]">
                    <div className="absolute inset-0 rounded-2xl bg-gray-200/70 blur-2xl" />
                    <Image
                      src="/assets/images/timeline/finalStep.png"
                      alt="Krok 3 — realistyczny podgląd i zatwierdzenie"
                      width={800}
                      height={520}
                      className="relative z-10 w-full h-auto rounded-xl"
                    />
                  </div>
                </div>
              </RevealOnScroll>

              <div className="max-w-prose justify-self-center md:justify-self-start">
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border font-semibold">
                  3
                </div>
                <h3 className="font-semibold text-xl md:text-2xl">
                  Zobacz efekt
                </h3>
                <p className="mt-2 text-base md:text-lg text-black/60">
                  Otrzymujesz realistyczną wizualizację — dokładnie tak, jak
                  nadruk będzie wyglądał w Twojej przestrzeni.
                </p>
              </div>
            </li>
          </ol>

          {/* CTA */}
          <div className="pt-2 text-center">
            <Link
              href="/wizualizator"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-8 py-3 font-medium text-white shadow-sm hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-600"
            >
              Uruchom wizualizator
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
