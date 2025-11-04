import React from "react";
import GalleryGrid from "./GalleryGrid";
import { ShinyWord } from "../navbar/ShinyWord";
import Title from "../assets/Title";
import Container from "../assets/Container";
const cards = [
  {
    id: 1,
    content: "Ściana",
    thumbnail: "/assets/images/gallery/gallery1.webp",
    className: " aspect-square",
    alt: "Superbohaterowie marvela - druk uv na ścianie",
  },
  {
    id: 2,
    content: "Ściana",
    thumbnail: "/assets/images/gallery/gallery2.webp",
    className: " aspect-square",
    alt: "orzeł - druk uv na ścianie",
  },
  {
    id: 3,
    content: "Ściana",
    thumbnail: "/assets/images/gallery/gallery3.webp",
    className: " aspect-square",
    alt: "Krajobraz - druk uv na ścianie",
  },
  {
    id: 4,
    content: "Ściana",
    thumbnail: "/assets/images/gallery/gallery4.webp",
    className: "  aspect-square",
    alt: "Formuła 1 - druk uv na ścianie",
  },
  {
    id: 5,
    content: "Ściana",
    thumbnail: "/assets/images/gallery/gallery5.webp",
    className: " aspect-square ",
    alt: "zielone gobliny - druk uv na ścianie",
  },
  {
    id: 6,
    content: "Ściana",
    thumbnail: "/assets/images/gallery/gallery6.webp",
    className: "aspect-square ",
    alt: "Mario w gokarcie - druk uv na ścianie",
  },
  {
    id: 7,
    content: "Ściana",
    thumbnail: "/assets/images/gallery/gallery7.webp",
    className: "aspect-square  ",
    alt: "squid game - druk uv na ścianie",
  },
  {
    id: 8,
    content: "Ściana",
    thumbnail: "/assets/images/gallery/gallery8.webp",
    className: "aspect-square",
    alt: "Banknot jednodolarowy - druk uv na ścianie",
  },
  {
    id: 9,
    content: "Ściana",
    thumbnail: "/assets/images/gallery/gallery9.webp",
    className: "aspect-square ",
    alt: "Wonder Woman niosąca zakupy - druk uv na ścianie",
  },
  {
    id: 10,
    content: "Ściana",
    thumbnail: "/assets/images/gallery/gallery10.webp",
    className: " aspect-square",
    alt: "Druk Uv, realistyczna kompozycja roślin na ścianie",
  },
  {
    id: 11,
    content: "Ściana",
    thumbnail: "/assets/images/gallery/gallery11.webp",
    className: "aspect-square",
    alt: "Druk UV Myszka Mickey na białej ścianie",
  },

  {
    id: 13,
    content: "Ściana",
    thumbnail: "/assets/images/gallery/gallery13.webp",
    className: "aspect-square ",
    alt: "Druk UV różowe krzesła na białej ścianie",
  },
];

const content = {
  titleId: "realizacje-druku-uv",
  leadId: "lead-realizacje-druku-uv",
  description:
    "Każdy projekt to nowa historia – od odważnych nadruków na ścianach, przez designerskie podłogi, aż po indywidualne nadruki na Ścianay. Nasze realizacje pokazują, jak druk UV potrafi zmienić zwykłą przestrzeń w coś, co budzi emocje i zostaje w pamięci.",
};

function Gallery() {
  return (
    <section
      aria-labelledby="realizacje-druku-uv"
      aria-describedby="lead-realizacje-druku-uv"
      id="realizacje"
      // className="content-visibility-auto"
    >
      <Container>
        <Title
          titleId={content.titleId}
          lead={content.leadId}
          description={content.description}
        >
          Nasze <ShinyWord>realizacje.</ShinyWord> Zobacz jak Druk UV zmienia
          przestrzeń
        </Title>
        <div className="mt-10">
          <GalleryGrid cards={cards} />
        </div>
      </Container>
    </section>
  );
}

export default Gallery;
