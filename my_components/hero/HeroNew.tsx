"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Check, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { ShinyWord } from "../navbar/ShinyWord";
import Container from "../assets/Container";

type Slide = {
  label: string;
  image: string;
  alt: string;
};

const slides: Slide[] = [
  {
    label: "Ściany",
    image: "/assets/images/hero/hero_wall.png",
    alt: "Turkusowo-zielony nadruk naścienny",
  },
  {
    label: "Podłogi",
    image: "/assets/images/hero/hero_floor.png",
    alt: "Kolorowy nadruk podłogowy",
  },
  {
    label: "Odzież",
    image: "/assets/images/hero/hero_clothing.png",
    alt: "Nadruk papugi na białej koszulce",
  },
  {
    label: "Plakaty",
    image: "/assets/images/hero/hero_printing.png",
    alt: "Drukarka drukująca plakat",
  },
];

export default function HeroNew() {
  const [i, setI] = useState(0);
  const s = slides[i];
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startTimer = () => {
    if (prefersReducedMotion) return;
    clearTimer();
    intervalRef.current = setInterval(() => {
      setI((x) => (x + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [prefersReducedMotion]);

  const next = () => {
    setI((x) => (x + 1) % slides.length);
    startTimer();
  };

  const prev = () => {
    setI((x) => (x - 1 + slides.length) % slides.length);
    startTimer();
  };

  return (
    <section
      id="/"
      aria-labelledby="hero-heading"
      aria-roledescription="Slajder promocyjny"
      className="relative isolate overflow-hidden bg-white mt-14 xl:mt-16     "
    >
      <div className="container  mx-auto flex flex-col items-center md:flex-row md:items-center p-2 px-5 md:px-10 lg:px-15 xl:px-20 h-[72svh] md:h-[60svh] xl:h-[72svh]">
        {/* ===== DESKTOP TŁO (od lg) ===== */}
        <div
          className="hidden md:block absolute inset-0 -z-10 "
          aria-hidden="true"
        >
          <div className="absolute inset-y-0 right-0 w-svw">
            <AnimatePresence mode="wait">
              <motion.img
                key={s.image}
                src={s.image}
                alt=""
                role="presentation"
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ opacity: 0, x: "-5%" }}
                animate={{ opacity: 1, x: "0%" }}
                exit={{ opacity: 0, x: "5%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </AnimatePresence>

            <div
              className="
            absolute inset-0 pointer-events-none w-full
              bg-[linear-gradient(to_right,white_0%,white_35%,rgba(255,255,255,0.1)_75%,transparent_100%)]
            "
            />
          </div>
        </div>

        {/* ===== MOBILE / TABLET TŁO ===== */}
        <div
          className="md:hidden absolute inset-x-0 bottom-0 h-full -z-10 "
          aria-hidden="true"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={s.image}
              src={s.image}
              alt=""
              role="presentation"
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "auto"}
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0, x: "-5%" }}
              animate={{ opacity: 1, x: "0%" }}
              exit={{ opacity: 0, x: "5%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </AnimatePresence>
        </div>

        <div
          className="md:hidden absolute inset-0 pointer-events-none -z-10 
                   bg-[linear-gradient(to_bottom,white_0%,white_25%,rgba(255,255,255,0.7),transparent_100%)]"
          aria-hidden="true"
        />

        {/* ===== TEKST ===== py-32 md:py-20 lg:py-26 xl:py-32 */}
        <div className="max-w-[500px] z-10  md:max-w-[400px]  xl:max-w-[650px]  py-5 ">
          <p className="inline-flex items-center justify-center gap-2 text-sm text-black/70 bg-[#16B1C2]/10 w-fit mx-auto md:mx-0 px-2 py-1 border border-[#16B1C2]/30 rounded-md">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>Koszalin, Kołobrzeg, Białogard i okolice</span>
          </p>

          <h1 className="text-3xl font-bold md:text-4xl xl:text-6xl mt-4">
            Każda <ShinyWord>powierzchnia</ShinyWord> może być płótnem <br />
            <span className="text-black/80 text-xl md:text-2xl block mt-4 font-medium">
              Druk UV Koszalin – nadruki na każdej powierzchni, plakaty,
              wizytówki i naklejki
            </span>
          </h1>

          <div className="mt-10 flex justify-start gap-4 text-sm w-full md:mt-16">
            <a
              href="#realizacje"
              className="inline-flex w-full md:w-auto items-center justify-center gap-1 rounded-md px-3 py-2 font-medium border-2 bg-white hover:bg-gray-50 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              <Search className="w-4 h-4" aria-hidden="true" />
              <span>Nasze realizacje</span>
            </a>
            <a
              href="#kontakt"
              className="inline-flex w-full md:w-auto items-center justify-center gap-1 rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 px-3 py-2 font-medium text-white hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            >
              <Check className="w-4 h-4" aria-hidden="true" />
              <span>Zamów nadruk</span>
            </a>
          </div>
        </div>

        {/* ===== breadcrumb ===== */}
        <div className=" w-fit mx-auto     items-end justify-center">
          <div
            className="absolute right-3 bottom-3 md:right-6 md:top-6 pointer-events-none"
            role="status"
            aria-live="polite"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={s.label} // ważne: zmienia się przy slajdzie
                initial={{ opacity: 0, x: "-5%" }}
                animate={{ opacity: 1, x: "0%" }}
                exit={{ opacity: 0, x: "5%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                role="status"
                aria-live="polite"
                className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-medium text-zinc-700 shadow"
              >
                {s.label}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>
        {/* KONTROLKI*/}
        <div className="w-full h-full   flex items-end justify-center mb-5">
          <div
            className="z-20 flex items-center gap-2 "
            role="group"
            aria-label="Sterowanie slajdami (mobile)"
          >
            <button
              onClick={prev}
              aria-label="Poprzedni"
              className="rounded-full p-1 bg-white/85 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              <ChevronLeft
                className="w-5 h-5 text-zinc-700"
                aria-hidden="true"
              />
            </button>
            <div className="flex gap-2 bg-white/75 px-3 py-2 rounded-full">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 w-2 rounded-full transition-all ${
                    idx === i ? "bg-emerald-500 w-4" : "bg-zinc-400"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Następny"
              className="rounded-full p-1 bg-white/85 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600"
            >
              <ChevronRight
                className="w-5 h-5 text-zinc-700"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
