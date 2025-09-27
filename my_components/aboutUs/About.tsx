import { ShinyWord } from "../navbar/ShinyWord";
import StatCard from "./StatCard";
import Title from "../assets/Title";
import Container from "../assets/Container";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import List from "./List";

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
  description:
    "Specjalizujemy się w druku UV na ścianach, podłogach i odzieży w Koszalinie i okolicy. Łączymy technologię z estetyką, żeby wnętrza i oznakowanie wyglądały świetnie i były trwałe.",
};

export default function AboutSection() {
  return (
    <section
      id="o-nas"
      aria-labelledby={content.titleId}
      aria-describedby={content.leadId}
      className="scroll-mt-14 lg:scroll-mt-16"
    >
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-between gap-6  md:h-full">
            <div className="space-y-6">
              <Title
                titleId={content.titleId}
                lead={content.leadId}
                description={content.description}
              >
                Kim jesteśmy? <ShinyWord>Poznaj nas</ShinyWord>
              </Title>
              <p className="xl:text-xl text-black/60">
                Każdy projekt prowadzimy indywidualnie – od konsultacji i doboru
                materiałów po montaż. Dbamy o kolory, detale i terminowość.
              </p>
            </div>
            <List />
          </div>

          <div className="space-y-6 ">
            <div className="mx-auto w-full">
              <AnimatedTestimonials testimonials={images} />
            </div>

            <StatCard />
          </div>
        </div>
      </Container>
    </section>
  );
}
