"use client";
import React from "react";
import GalleryGrid from "./GalleryGrid";
import { ShinyWord } from "../navbar/ShinyWord";
import Title from "../assets/Title";
import Container from "../assets/Container";
const cards = [
  {
    id: 1,
    content: "Ściana",
    thumbnail: "/assets/images/gallery/gallery1.png",
    className: "lg:col-span-2  xl:col-span-4 xl:aspect-[4/2]",
  },
  {
    id: 2,
    content: "Ściana",
    thumbnail: "/assets/images/gallery/gallery2.png",
    className: "lg:aspect-[4/4] xl:col-span-4 xl:aspect-[4/2]",
  },
  {
    id: 3,
    content: "Odzież",
    thumbnail: "/assets/images/gallery/gallery3.png",
    className: "xl:col-span-4 xl:aspect-[4/2]",
  },
  {
    id: 4,
    content: "Odzież",
    thumbnail: "/assets/images/gallery/gallery4.png",
    className: " xl:col-span-3 xl:aspect-[4/2]",
  },
  {
    id: 5,
    content: "Podłoga",
    thumbnail: "/assets/images/gallery/gallery5.png",
    className: "xl:col-span-6 xl:aspect-[8/2] ",
  },
  {
    id: 6,
    content: "Szkło",
    thumbnail: "/assets/images/gallery/gallery6.png",
    className: "lg:aspect-[4/3] xl:col-span-3 xl:aspect-[4/2]",
  },
  {
    id: 7,
    content: "Ściana",
    thumbnail: "/assets/images/gallery/gallery7.png",
    className: "lg:aspect-[4/3] xl:col-span-4 xl:aspect-[4/2] ",
  },
  {
    id: 8,
    content: "Płótno",
    thumbnail: "/assets/images/gallery/gallery8.png",
    className: "lg:aspect-[4/3] xl:col-span-4 xl:aspect-[4/2]",
  },
  {
    id: 9,
    content: "Podłoga",
    thumbnail: "/assets/images/gallery/gallery9.png",
    className:
      "md:col-span-2 md:aspect-[8/2] lg:col-span-3 lg:aspect-[4/1] xl:col-span-4 xl:aspect-[4/2] ",
  },
];

const content = {
  titleId: "realizacje-druku-uv",
  leadId: "lead-realizacje-druku-uv",
  description:
    "Każdy projekt to nowa historia – od odważnych nadruków na ścianach, przez designerskie podłogi, aż po indywidualne nadruki na odzieży. Nasze realizacje pokazują, jak druk UV potrafi zmienić zwykłą przestrzeń w coś, co budzi emocje i zostaje w pamięci.",
};

function Gallery() {
  return (
    <section
      
      aria-labelledby="realizacje-druku-uv"
      aria-describedby="lead-realizacje-druku-uv"
      id="realizacje"
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
