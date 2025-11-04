import { MapPin, Search, Check } from "lucide-react";
import { ShinyWord } from "../navbar/ShinyWord";
import HeroClient from "./HeroClient";

export default function Hero() {
  return (
    <section
      id="/"
      aria-labelledby="hero-heading"
      aria-roledescription="Slajder promocyjny"
      className="relative isolate overflow-hidden bg-white mt-14 xl:mt-16"
    >
      <div className="container mx-auto flex flex-col items-center md:flex-row md:items-center p-2 px-5 md:px-10 lg:px-15 xl:px-20 h-[72svh] md:h-[60svh] xl:h-[72svh]">
        <HeroClient />

        <div className="max-w-[500px] z-10  md:max-w-[400px]  xl:max-w-[650px]  py-5 ">
          <p className="inline-flex items-center justify-center gap-2 text-sm text-black/70 bg-[#16B1C2]/10 w-fit mx-auto md:mx-0 px-2 py-1 border border-[#16B1C2]/30 rounded-md">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>Koszalin, Kołobrzeg, Białogard i okolice</span>
          </p>

          <h1
            id="hero-heading"
            className="text-3xl font-bold md:text-4xl xl:text-6xl mt-4"
          >
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
      </div>
    </section>
  );
}
