import type { Metadata } from "next";
import Navbar from "@/my_components/navbar/Navbar";
import Visualizer from "@/my_components/vizualization/Vizualization";
import React from "react";
import Footer from "@/my_components/footer/Footer";

export const metadata: Metadata = {
  title: "Wizualizator nadruków UV",
  description:
    "Zaprojektuj swój nadruk UV i zobacz, jak będzie wyglądał na ścianie, szkle lub drewnie. Wizualizator iWallDesign – stwórz swój projekt online.",
  keywords: [
    "wizualizator druku UV",
    "druk UV Koszalin",
    "nadruki na ścianie",
    "druk na szkle",
    "druk na drewnie",
    "iWallDesign",
  ],
  openGraph: {
    title: "Wizualizator nadruków UV | iWallDesign",
    description:
      "Zaprojektuj swój nadruk UV i zobacz, jak wygląda w Twoim wnętrzu. Wizualizator druku UV od iWallDesign.",
    url: "https://iwalldesign.pl/wizualizator",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wizualizator nadruków UV iWallDesign",
      },
    ],
  },
};

export default function WizualizatorPage() {
  return (
    <>
      <Navbar />
      <Visualizer />
      <Footer />
    </>
  );
}
