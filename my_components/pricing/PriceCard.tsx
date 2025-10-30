import Image from "next/image";
import React from "react";
import {  ArrowRight, Dot, Info } from "lucide-react";

type Props = {
  image: string;
  title: string;
  price: string;
  unit: string;
  pros: string[];
  description?: string;
};

function PriceCard({ image, title, price, pros, unit, description }: Props) {
  return (
    <div className="flex flex-col justify-between rounded-md shadow-md h-full hover:-translate-y-3 hover:shadow-xl transition-all duration-200 ease-out  mx-auto bg-white">
      <div className="w-full h-48 overflow-hidden rounded-t-md">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          priority
          className="w-full h-full object-cover"
          sizes="(min-width: 1024px) 400px, 100vw"
        />
      </div>

      <div className="flex flex-col flex-1 pt-3 pb-5 px-2">
        <h3 className="text-lg font-semibold mb-1 px-4">{title}</h3>

        <p className="text-2xl md:text-3xl font-bold mb-4 px-4">
          {price.length < 10 && <span className="text-lg">od </span>}
          {price}
          {unit && (
            <span className="text-black/30 font-medium text-lg ml-1">
              {unit}
            </span>
          )}
        </p>

        <ul className="flex-1 space-y-3 px-2">
          {pros.map((el, id) => (
            <li key={id} className="flex items-center text-sm md:text-base">
              <Dot className="w-10 h-10   flex-shrink-0  " />
              <span>{el}</span>
            </li>
          ))}
        </ul>
        {description && description?.length > 0 && (
          <div className="flex items-start text-black/60 px-4">
            <Info className=" w-10  mr-1" />
            <p className="text-sm ">{description}</p>
          </div>
        )}
        <a
          href="#kontakt"
          aria-label={`Darmowa wycena dla ${title}`}
          className="mt-6 group flex items-center justify-center gap-2  w-full py-2 px-4 rounded-sm border-2 font-semibold transition hover:bg-gray-50"
        >
          Darmowa wycena
          <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-2" />
        </a>
      </div>
    </div>
  );
}

export default PriceCard;
