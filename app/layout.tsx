import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin-ext"],
  display: "swap",
  preload: true,
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iwalldesign.pl"),
  title: {
    default: "iWallDesign – Druk UV Koszalin i okolice",
    template: "%s | iWallDesign",
  },
  description:
    "Personalizowany druk UV w Koszalinie i okolicach. Nadruki na ścianach, szkle, drewnie, reklamie, wizytówkach i plakatach.",
  keywords: [
    "druk UV Koszalin",
    "druk na szkle",
    "druk na drewnie",
    "druk na ścianie",
    "druk reklamowy Koszalin",
    "nadruki UV Kołobrzeg",
    "personalizowane nadruki UV",
    "druk plakatów Koszalin",
    "iWallDesign",
  ],
  verification: {
    google: "9COgsLr7R_xjErPO_s0eOIwMF6OndXUK9urjIvGaOaw",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://iwalldesign.pl",
    title: "iWallDesign – Druk UV Koszalin i okolice",
    description:
      "Druk UV na ścianach, szkle, drewnie, reklamie – Koszalin, Kołobrzeg, Białogard i okolice.",
    siteName: "iWallDesign",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Przykładowa realizacja druku UV iWallDesign",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iWallDesign – Druk UV Koszalin i okolice",
    description:
      "Nadruki UV na ścianach, szkle, drewnie i reklamie – Koszalin i okolice.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://iwalldesign.pl",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "iWallDesign",
    url: "https://iwalldesign.pl",
    image: "https://iwalldesign.pl/og-image.jpg",
    email: "biuro@iwalldesign.pl",
    telephone: "+48 882 945 714",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Koszalin",
      addressCountry: "PL",
    },
    areaServed: ["Koszalin", "Kołobrzeg", "Białogard", "Pomorze Zachodnie"],
    openingHours: "Mo-Su 09:00-21:00",
  };

  return (
    <html lang="pl" data-scroll-behavior="smooth" className="scroll-smooth">
      <body className={`${geist.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
