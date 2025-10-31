import React from "react";
import { Compare } from "@/components/ui/compare";
import RevealOnScroll from "../assets/RevealWrapper";

export function CompareBlock() {
  return (
    <RevealOnScroll className="w-full lg:order-1">
      <div className="relative w-full  aspect-square  rounded-md shadow-md overflow-hidden  lg:max-w-[600px] ">
        <span className="absolute z-20 right-0 m-3 py-1 px-5 bg-gradient-to-tr from-blue-900/70 via-blue-500/80  to-emerald-500/80 rounded-sm font-medium text-white">
          Po nadruku UV
        </span>
        <Compare
          firstImage="/assets/images/before.png?v=2"
          secondImage="/assets/images/after.png?v=2"
          firstImageClassName="object-cover object-left-top w-full"
          secondImageClassname="object-cover object-left-top w-full"
          className="relative w-full   aspect-square overflow-hidden rounded-md shadow-lg "
          slideMode="drag"
          autoplay={false}
        />
      </div>
    </RevealOnScroll>
  );
}
