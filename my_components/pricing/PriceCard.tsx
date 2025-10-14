import Image from "next/image";
import React from "react";
import { Check, ArrowRight } from "lucide-react";
type Props = {
  image: string;
  title: string;
  price: string;
  unit: string;
  pros: string[];
};

function PriceCard({ image, title, price, pros, unit }: Props) {
  return (
    <div className="flex flex-col justify-between  rounded-md shadow-md w-full  h-full hover:-translate-y-3 hover:shadow-xl transition-all duration-75 ease-out max-w-sm mx-auto">
      <div className="w-full h-48 overflow-hidden ">
        <Image
          src={image}
          alt={title}
          priority
          width={400}
          height={300}
          className="w-full h-full object-cover rounded-t-md "
          sizes="(min-width: 1024px) 400px, 100vw"
        />
      </div>

      <div className="flex flex-col flex-1 pt-2 pb-4 px-6 ">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl md:text-3xl  font-bold mb-4 ">
          od {price}zł
          <span className="text-black/30 font-medium text-lg"> /{unit}</span>
        </p>
        <ul className="flex-1 space-y-4 mb-6 h-full  ">
          {pros.map((el, id) => (
            <li key={id} className=" flex  items-center gap-1 ">
              <Check className="w-7 h-7  p-1 rounded-full flex-shrink-0" /> {el}
            </li>
          ))}
        </ul>

        <a
          href="#kontakt"
          className="group flex items-end justify-center gap-1 mt-auto w-full py-2 px-4  rounded-sm border-2 font-semibold transition hover:cursor-pointer hover:bg-gray-50"
        >
          Darmowa wycena{" "}
          <ArrowRight className="max-h-[90%] transition-transform duration-200 group-hover:translate-x-5" />
        </a>
      </div>
    </div>
  );
}

export default PriceCard;
