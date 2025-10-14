"use client";

import { ImgWithSkeleton } from "./Skeleton";
import {
  MapPin,
  Check,
  Search,
  BrickWall,
  Shirt,
  Columns3,
} from "lucide-react";
import { ShinyWord } from "../navbar/ShinyWord";
import RevealOnScroll from "../assets/RevealWrapper";
export default function Hero() {
  return (
    <section className="bg-white " aria-labelledby="hero-heading" id="/">
      <div className="p-5  container mx-auto  flex flex-col items-center justify-center  gap-10 md:flex-row md:justify-evenly md:gap-20 md:px-10  xl:justify-between ">
        <div className="w-[95%] space-y-2 lg:max-w-[600px] xl:space-y-4 ">
          <p className="inline-flex justify-start items-center text-sm text-black/50 bg-[#16B1C2]/10  w-fit px-2 py-1 border-2 border-[#16B1C2]/30 rounded-sm">
            <MapPin className="scale-60" /> Koszalin, Kołobrzeg, Białogard i
            okolice
          </p>
          <h1 className="text-3xl font-bold lg:text-4xl xl:text-6xl  ">
            Każda <ShinyWord> powierzchnia</ShinyWord> może być płótnem
          </h1>
          <h2 className="text-black/70 mb-10 xl:text-2xl xl:mb-20 ">
            Dzięki technologii druku UV wprowadzamy kolor, design i trwałość w
            każdy detal Twojego otoczenia. Twoje pomysły stają się
            rzeczywistością!
          </h2>
          <div className="flex justify-start text-sm gap-5 mb-5 xl:text-md xl:font-regular xl:gap-5">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-teal-500 to-cyan-500 px-4 py-2 font-medium text-white hover:opacity-90 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-600"
            >
              <Check className="scale-80 xl:scale-100" />
              Zamów nadruk
            </a>
            <a
              href="#realizacje"
              className="inline-flex items-center gap-2 rounded-md  px-4 py-2 font-medium border-2 hover:bg-gray-50 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal-600"
            >
              <Search className="scale-80" />
              Nasze realizacje
            </a>
          </div>
          <div className="grid grid-cols-3 place-items-center  border-t-2 border-black/20 pt-5 xl:pt-10">
            <RevealOnScroll>
              <div className="flex flex-col items-center text-black/50 space-y-2">
                <BrickWall />
                <span>Ściany</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div className="flex flex-col items-center text-black/50 space-y-2">
                <Columns3 />
                <span>Podłogi</span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={0.4}>
              <div className="flex flex-col items-center text-black/50 space-y-2">
                <Shirt />
                <span>Odzież</span>
              </div>
            </RevealOnScroll>
          </div>
        </div>
        <div className="w-[95%] md:w-[95%] grid grid-cols-12 gap-3  lg:gap-5 lg:max-w-[500px]">
          <figure className="col-span-12">
            <div
              className="group relative aspect-square overflow-hidden rounded-sm border-8 border-white shadow-xl
                  will-change-transform transform-gpu"
            >
              <ImgWithSkeleton
                src="/assets/images/hero/hero_big.png"
                alt="Duży hero"
                sizes="(max-width: 1024px) 50vw, 22vw"
                loading="lazy"
                className="h-full w-full object-cover scale-[1.10] transition-transform duration-300 ease-out
                 group-hover:translate-x-[-6px] group-hover:translate-y-[-6px]
                 motion-reduce:transform-none motion-reduce:transition-none"
              />

              {/* sheen */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 translate-x-[-120%]
                 bg-gradient-to-r from-transparent via-white/35 to-transparent
                 transition-transform duration-700 ease-out
                 group-hover:translate-x-[120%]"
                style={{ mixBlendMode: "overlay" }}
              />
            </div>
          </figure>
          <figure className="col-span-5">
            <div className="group relative aspect-square overflow-hidden rounded-sm border-8 border-white shadow-xl will-change-transform transform-gpu">
              <ImgWithSkeleton
                src="/assets/images/hero/hero_square.png"
                alt="Hero square"
                sizes="(max-width: 1024px) 50vw, 22vw"
                loading="lazy"
                className="h-full w-full object-cover scale-[1.08] transition-transform duration-300 ease-out 
                   group-hover:translate-x-[6px] group-hover:translate-y-[-4px]
                   motion-reduce:transform-none motion-reduce:transition-none"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 translate-x-[-120%]
                   bg-gradient-to-r from-transparent via-white/35 to-transparent
                   transition-transform duration-700 ease-out
                   group-hover:translate-x-[120%]"
                style={{ mixBlendMode: "overlay" }}
              />
            </div>
          </figure>

          {/* MAŁY PROSTOKĄT */}
          <figure className="col-span-7">
            <div className="group relative h-full overflow-hidden rounded-sm border-8 border-white shadow-xl will-change-transform transform-gpu">
              <ImgWithSkeleton
                src="/assets/images/hero/hero_rectangle.png"
                alt="Hero rectangle"
                sizes="(max-width: 1024px) 50vw, 22vw"
                loading="lazy"
                className="h-full w-full object-cover scale-[1.08] transition-transform duration-300 ease-out 
                   group-hover:translate-x-[-6px] 
                   motion-reduce:transform-none motion-reduce:transition-none"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 translate-x-[-120%]
                   bg-gradient-to-r from-transparent via-white/35 to-transparent
                   transition-transform duration-700 ease-out
                   group-hover:translate-x-[120%]"
                style={{ mixBlendMode: "overlay" }}
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
