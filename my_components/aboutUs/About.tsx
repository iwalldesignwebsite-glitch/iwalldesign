import { ShinyWord } from "../navbar/ShinyWord";
import StatCard from "./StatCard";
import Title from "../assets/Title";
import Container from "../assets/Container";
import List from "./List";
import RevealOnScroll from "../assets/RevealWrapper";
import Image from "next/image";

// const images = [
//   {
//     name: "zdjecie",
//     src: "/assets/images/about/about.png",
//   },
//   {
//     name: "zdjecie 2",
//     src: "/assets/images/gallery/gallery1.png",
//   },
//   {
//     name: "zdjecie 3",
//     src: "/assets/images/gallery/gallery2.png",
//   },
//   {
//     name: "zdjecie 4",
//     src: "/assets/images/gallery/gallery3.png",
//   },
//   {
//     name: "zdjecie 5",
//     src: "/assets/images/gallery/gallery4.png",
//   },
// ];

const content = {
  titleId: "o-nas-tytul",
  leadId: "o-nas-opis",
  description:
    "Personalizujemy wnętrza i marki — od szkła i ścian po drewno, tkaniny i metal. Dbamy o każdy detal, dlatego zaufały nam firmy i klienci z całej Polski.",
};

export default function AboutSection() {
  return (
    <section
      id="o-nas"
      aria-labelledby={content.titleId}
      aria-describedby={content.leadId}
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="flex flex-col justify-evenly  md:h-full ">
            <Title
              titleId={content.titleId}
              lead={content.leadId}
              description={content.description}
            >
              Kim jesteśmy? <ShinyWord>Poznaj nas</ShinyWord>
            </Title>
            <p className="xl:text-xl text-black/80 my-6">
              Oferujemy naklejki, plakaty, wizytówki, banery reklamowe oraz
              wydruki UV na szkle, drewnie i innych materiałach. Doradzamy na
              każdym etapie — od projektu po realizację — tak, aby efekt
              idealnie pasował do wnętrza, marki i Twojej wizji.
            </p>

            <p className="xl:text-xl text-black/80 mb-6">
              Stawiamy na trwałość, estetykę i nowoczesną technologię. Nasz druk
              UV jest odporny na zarysowania i warunki zewnętrzne, dlatego
              sprawdza się zarówno w domach i biurach, jak i w przestrzeniach
              usługowych oraz reklamie outdoorowej.
            </p>
            <p className="xl:text-xl text-black/80 mb-6">
              Działamy lokalnie w Koszalinie, Kołobrzegu, Białogardzie i całym
              Pomorzu Zachodnim, ale realizujemy projekty dla klientów w całej
              Polsce. Jeśli szukasz partnera, który zadba o szczegóły i pomoże
              wyróżnić Twoją przestrzeń lub markę — jesteśmy tu dla Ciebie.
            </p>
            <RevealOnScroll>
              <List />
            </RevealOnScroll>
          </div>

          <div className="space-y-6 ">
            <RevealOnScroll>
              {/* <AnimatedTestimonials testimonials={images} /> */}
              <div className="relative w-full  mx-auto aspect-square overflow-hidden rounded-md">
                <Image
                  src="/assets/images/about/aboutUs.jpg"
                  alt="Zdjęcie zespołu iWallDesign"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  quality={80}
                  loading="lazy"
                  className="object-cover object-[50%_40%] "
                />
              </div>
            </RevealOnScroll>

            <StatCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
