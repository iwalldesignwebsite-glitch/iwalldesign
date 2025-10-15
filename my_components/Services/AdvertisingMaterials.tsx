import Container from "../assets/Container";
import Title from "../assets/Title";
import { ShinyWord } from "../navbar/ShinyWord";
import { CompareCards } from "./CompareCards";

const content = {
  titleId: "naklejki-plakaty-druk-uv",
  leadId: "lead-naklejki-plakaty-druk-uv",
  description:
    "Drukujemy to, co wyróżnia Twoją markę. Naklejki firmowe, plakaty promocyjne, wizytówki i banery — wszystko w jakości premium, z dbałością o każdy szczegół i kolor. Realizujemy projekty dla firm i klientów indywidualnych w Koszalinie i całej Polsce.",
};

const AdvertisingMaterials = () => {
  return (
    <Container>
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
      <CompareCards/>
        </div>
    </Container>
  );
};

export default AdvertisingMaterials;
