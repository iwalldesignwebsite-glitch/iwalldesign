"use client";
import Image from "next/image";
import { ShinyWord } from "../navbar/ShinyWord";
import { Tabs } from "@/components/ui/tabs";
import Title from "../assets/Title";
import Container from "../assets/Container";
import RevealOnScroll from "../assets/RevealWrapper";

type Material = { label: string; img: string };
type Category = {
  ściany: Material[];
  podłogi: Material[];
  tekstylia: Material[];
};

const categories: Category = {
  ściany: [
    {
      label: "Gładka ściana",
      img: "/assets/images/surfaces/gladka_sciana.png",
    },
    {
      label: "Elewacja zewnętrzna",
      img: "/assets/images/surfaces/elewacja.png",
    },
    { label: "Tynk", img: "/assets/images/surfaces/tynk.png" },
    { label: "Cegła", img: "/assets/images/surfaces/cegla.png" },
    { label: "Beton", img: "/assets/images/surfaces/beton.png" },
  ],
  podłogi: [
    {
      label: "Parkiet drewniany",
      img: "/assets/images/surfaces/parkiet.png",
    },
    { label: "Panele winylowe", img: "/assets/images/surfaces/panele.png" },
    {
      label: "Beton przemysłowy",
      img: "/assets/images/surfaces/beton_przemyslowy.png",
    },
    { label: "Płytki ceramiczne", img: "/assets/images/surfaces/plytki.png" },
  ],
  tekstylia: [
    { label: "Bawełna", img: "/assets/images/surfaces/bawelna.png" },
    { label: "Poliester", img: "/assets/images/surfaces/poliester.png" },
    {
      label: "Mieszanki tkanin",
      img: "/assets/images/surfaces/mieszanki.png",
    },
    {
      label: "Tkaniny techniczne",
      img: "/assets/images/surfaces/techniczne.png",
    },
  ],
};

const surfaces = [
  {
    title: "Ściany",
    value: "walls",
    content: (
      <div className="w-full p-5 lg:p-10 space-y-5 overflow-hidden relative h-full rounded-xl  text-xl   font-bold bg-white">
        <div className="flex flex-col h-full gap-2 md:flex-row lg:gap-8 ">
          {categories["ściany"].map((item) => (
            <div
              key={item.label}
              className="relative   w-full h-full  overflow-hidden  rounded-md lg:hover:w-[300%] duration-300 ease-in-out"
            >
              <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent  z-10 "></div>
              <Image
                src={item.img}
                alt={item.label}
                fill
                className="object-cover"
                sizes="(max-width: 120px) 70vw, (max-width: 1400px) 70vw, 70vw"
                priority={false}
              />
              <p className="absolute left-2 bottom-2 text-lg  md:text-xl text-wrap max-w-[60%] lg:text-2xl lg:left-4 lg:bottom-4 text-white/90 z-20   ">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Podłogi",
    value: "floors",
    content: (
      <div className="w-full p-5 lg:p-10 space-y-5 overflow-hidden relative h-full rounded-xl  text-xl   font-bold bg-white">
        <div className="flex flex-col h-full gap-2 md:flex-row lg:gap-8 ">
          {categories["podłogi"].map((item) => (
            <div
              key={item.label}
              className="relative   w-full h-full  overflow-hidden  rounded-md lg:hover:w-[300%] duration-300 ease-in-out"
            >
              <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent  z-10 "></div>
              <Image
                src={item.img}
                alt={item.label}
                fill
                className="object-cover"
                sizes="(max-width: 120px) 70vw, (max-width: 1400px) 70vw, 70vw"
                priority={false}
              />
              <p className="absolute left-2 bottom-2 text-lg  md:text-xl text-wrap max-w-[50%] lg:text-2xl lg:left-4 lg:bottom-4 text-white/90 z-20   ">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Tekstylia",
    value: "textile",
    content: (
      <div className="w-full p-5 lg:p-10 space-y-5 overflow-hidden relative h-full rounded-xl  text-xl   font-bold bg-white">
        <div className="flex flex-col h-full gap-2 md:flex-row lg:gap-8 ">
          {categories["tekstylia"].map((item) => (
            <div
              key={item.label}
              className="relative   w-full h-full  overflow-hidden  rounded-md lg:hover:w-[300%] duration-300 ease-in-out"
            >
              <div className="w-full h-full absolute left-0 top-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent  z-10 "></div>
              <Image
                src={item.img}
                alt={item.label}
                fill
                className="object-cover"
                sizes="(max-width: 120px) 70vw, (max-width: 1400px) 70vw, 70vw"
                priority={false}
              />
              <p className="absolute left-2 bottom-2 text-lg  md:text-xl text-wrap max-w-[50%] lg:text-2xl lg:left-4 lg:bottom-4 text-white/90 z-20   ">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const content = {
  titleId: "powierzchnie",
  leadId: "lead-powierzchnie",
  description:
    "Poznaj szeroką gamę materiałów do druku UV – od ścian i podłóg po tekstylia. Oferujemy nadruki na betonie, cegle, parkiecie, panelach winylowych, bawełnie, poliestrze i wielu innych powierzchniach.",
};

export default function Surfaces() {
  return (
    <section
      aria-labelledby="powierzchnie"
      aria-describedby="lead-powierzchnie"
    >
      <Container>
        <Title
          titleId={content.titleId}
          description={content.description}
          lead={content.leadId}
        >
          Drukujemy na każdej <ShinyWord>powierzchni</ShinyWord>
        </Title>

        <RevealOnScroll>
          <div className="mt-12 h-[40rem] md:h-[20rem] [perspective:10000px]   relative  flex flex-col  mx-auto w-full  items-start justify-start mb-20">
            <Tabs tabs={surfaces} />
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}
