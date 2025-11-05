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
    default:
      "Drukarnia iWallDesign – Druk UV Koszalin, Karlino, Białogard i okolice",
    template: "%s | iWallDesign",
  },
  description:
    "Nowoczesna drukarnia UV w Koszalinie, Karlinie i okolicach. Personalizowany druk na szkle, drewnie, ścianach i materiałach reklamowych.",
  keywords: [
    "drukarnia Koszalin",
    "drukarnia UV Koszalin",
    "drukarnia Karlino",
    "drukarnia Białogard",
    "druk UV Koszalin",
    "druk UV Karlino",
    "drukarnia Kołobrzeg",
    "druk UV Białogard",
    "druk na szkle",
    "druk na drewnie",
    "druk reklamowy",
    "iWallDesign",
  ],
  verification: {
    google: "r4wB6pM5vv3r1ntOCteC4SOKwH0HmtFbM4Z2J5QwhP0",
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://iwalldesign.pl",
    title:
      "Drukarnia iWallDesign – Druk UV Koszalin, Karlino, Białogard i okolice",
    description:
      "Nowoczesna drukarnia UV w Koszalinie, Karlinie i okolicach. Personalizowany druk na szkle, drewnie, ścianach i materiałach reklamowych.",
    siteName: "iWallDesign",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Logo drukarni iWallDesign",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Drukarnia iWallDesign – Druk UV Koszalin, Karlino, Białogard i okolice",
    description:
      "Nowoczesna drukarnia UV w Koszalinie, Karlinie i okolicach. Personalizowany druk na szkle, drewnie, ścianach i materiałach reklamowych.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://iwalldesign.pl",
  },
  icons: {
    icon: "/assets/favicon.svg",
    shortcut: "/assets/favicon.svg",
    apple: "/assets/apple-touch-icon.svg",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "iWallDesign",
    url: "https://iwalldesign.pl",
    image: "https://iwalldesign.pl/og-image.png",
    email: "biuro@iwalldesign.pl",
    telephone: "+48 882 945 714",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karlino",
      addressCountry: "PL",
    },
    areaServed: [
      "Koszalin",
      "Kołobrzeg",
      "Białogard",
      "Pomorze Zachodnie",
      "Karlino",
      "Sławno",
      "Sianów",
      "Mielno",
      "Darłowo",
      "Słupsk",
      "Bobolice",
      "Świdwin",
    ],
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
