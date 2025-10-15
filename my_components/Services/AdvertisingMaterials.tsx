import Image from "next/image";
import Container from "../assets/Container";
import Title from "../assets/Title";
import { ShinyWord } from "../navbar/ShinyWord";
import { CompareCards } from "./CompareCards";
import { Sticker, Image as ImageLucide, IdCard, FileText } from "lucide-react";

const content = {
  titleId: "naklejki-plakaty-druk-uv",
  leadId: "lead-naklejki-plakaty-druk-uv",
  description:
    "Drukujemy to, co wyróżnia Twoją markę. Naklejki firmowe, plakaty promocyjne, wizytówki i banery — wszystko w jakości premium, z dbałością o każdy szczegół i kolor. Realizujemy projekty dla firm i klientów indywidualnych w Koszalinie i całej Polsce.",
};

const projects = [
  {
    title: "Naklejki do każdej powierzchni",
    description:
      "Drukujemy naklejki, etykiety i folie samoprzylepne w dowolnym kształcie i rozmiarze. Doskonale trzymają się szkła, metalu, plastiku i drewna – idealne do wnętrz i na zewnątrz.",
    icon: <Sticker className="w-5 h-5" />,
  },
  {
    title: "Plakaty i banery reklamowe",
    description:
      "Plakaty w jakości fotograficznej i banery odporne na warunki atmosferyczne. Skuteczny sposób na wyróżnienie Twojej marki w przestrzeni publicznej.",
    icon: <ImageLucide className="w-5 h-5" />,
  },
  {
    title: "Wizytówki i karty firmowe",
    description:
      "Projektujemy i drukujemy wizytówki, które budują profesjonalny wizerunek. Wybierz spośród różnych formatów, papierów i wykończeń premium.",
    icon: <IdCard className="w-5 h-5" />,
  },
  {
    title: "Ulotki i foldery reklamowe",
    description:
      "Druk ulotek, katalogów i folderów reklamowych w pełnym kolorze. Doskonała jakość, precyzyjny druk i szybka realizacja – skuteczna forma promocji Twojej firmy.",
    icon: <FileText className="w-5 h-5" />,
  },
];
const AdvertisingMaterials = () => {
  return (
    <Container className="gap-10 lg:flex-row lg:gap-20">
      <div className="w-full flex flex-col justify-between  items-center gap-10 ">
        <Title
          titleId={content.titleId}
          lead={content.leadId}
          description={content.description}
        >
          {" "}
          <ShinyWord>Naklejki, plakaty i wizytówki </ShinyWord>— profesjonalny
          druk reklamowy w Koszalinie
        </Title>
        <CompareCards projects={projects} />
      </div>
      <div className="relative w-full max-w-[500px] mx-auto aspect-square overflow-hidden rounded-md shadow-lg">
        <Image
          src="/assets/images/services.png"
          alt="Materiały reklamowe — naklejki, plakaty, wizytówki i ulotki"
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover object-center"
          priority
        />
      </div>
    </Container>
  );
};

export default AdvertisingMaterials;
