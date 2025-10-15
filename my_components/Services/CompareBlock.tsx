import React from "react";
import { Compare } from "@/components/ui/compare";
import RevealOnScroll from "../assets/RevealWrapper";

export function CompareBlock() {
  return (
    <div className="relative border-2 text-center shadow-md flex flex-col items-center w-[100%] md:max-w-[600px]  rounded-sm overflow-hidden">
      <RevealOnScroll>
        <div className="aspect-square     ">
          <span className="absolute z-20 right-0 m-3 py-1 px-5 bg-gradient-to-tr from-blue-900/70 via-blue-500/80  to-emerald-500/80 rounded-sm font-medium text-white">
            Po nadruku UV
          </span>
          <Compare
            firstImage="/assets/images/before.png"
            secondImage="/assets/images/after.png"
            firstImageClassName="object-cover object-left-top w-full"
            secondImageClassname="object-cover object-left-top w-full"
            className="h-full w-full "
            slideMode="drag"
            autoplay={false}
          />
        </div>
        <div className="p-3 max-w-[600px] space-y-1">
          <p className="text-xl font-medium ">
            Ta sama przestrzeń przed i po nadruku UV
          </p>
          <p className="text-black/70">
            Zobacz niezwykłą metamorfozę - od pustej ściany do zachwycającego
            dzieła sztuki.
          </p>
        </div>
      </RevealOnScroll>
    </div>
  );
}
