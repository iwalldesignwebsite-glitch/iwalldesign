import { ShinyWord } from "../navbar/ShinyWord";
import StatCard from "./StatCard";
import Title from "../assets/Title";
import Container from "../assets/Container";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import List from "./List";
import RevealOnScroll from "../assets/RevealWrapper";
import Image from "next/image";

const images = [
  {
    name: "zdjecie",
    src: "/assets/images/about/about.png",
  },
  {
    name: "zdjecie 2",
    src: "/assets/images/gallery/gallery1.png",
  },
  {
    name: "zdjecie 3",
    src: "/assets/images/gallery/gallery2.png",
  },
  {
    name: "zdjecie 4",
    src: "/assets/images/gallery/gallery3.png",
  },
  {
    name: "zdjecie 5",
    src: "/assets/images/gallery/gallery4.png",
  },
];

const content = {
  titleId: "o-nas-tytuł",
  leadId: "o-nas-opis",
};

export default function AboutSection() {
  return (
    <section
      id="o-nas"
      aria-labelledby={content.titleId}
      aria-describedby={content.leadId}
    >
      <Container className="border-2">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-evenly gap-6  md:h-full border-2">
            {/* <div className="space-y-6"> */}
            <Title titleId={content.titleId} lead={content.leadId}>
              Kim jesteśmy? <ShinyWord>Poznaj nas</ShinyWord>
            </Title>
            <p className="xl:text-xl text-black/80">
              Jesteśmy drukarnią z Koszalina, która łączy technologię UV z
              kreatywnością. Drukujemy na wszystkim, co płaskie – od ścian i
              szkła po drewno, tkaniny i metal.
            </p>

            <p className="xl:text-xl text-black/80">
              Oferujemy także naklejki, plakaty, wizytówki i banery reklamowe,
              tworzone z myślą o trwałości i estetyce. Wierzymy, że druk to nie
              tylko produkt, ale sposób wyrażenia pomysłów i marki. Dlatego
              każdy projekt traktujemy indywidualnie – doradzamy, dopasowujemy
              technologię i dbamy o każdy detal.
            </p>
            <p className="xl:text-xl text-black/80">
              Działamy lokalnie w Koszalinie, Kołobrzegu, Białogardzie i całym
              zachodniopomorskim, ale nasze realizacje trafiają do klientów w
              całej Polsce.
            </p>
            {/* </div> */}
            <RevealOnScroll>
              <List />
            </RevealOnScroll>
          </div>

          <div className="space-y-6 border-2">
            <RevealOnScroll>
              {/* <AnimatedTestimonials testimonials={images} /> */}
              <div className="relative w-full max-w-[600px] mx-auto aspect-square overflow-hidden rounded-md">
                <Image
                  src="/assets/images/about/aboutUs.jpg"
                  alt="Plakat reklamowy — druk UV Koszalin"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  quality={80}
                  loading="lazy" // ← to jest idealne dla sekcji poniżej folda
                  className="object-cover object-[50%_40%] "
                />
              </div>
            </RevealOnScroll>

            {/* <StatCard /> */}
          </div>
        </div>
      </Container>
    </section>
  );
}
