import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin-ext"],       
  display: "swap",          
  preload: true,           
});

export const metadata: Metadata = {
  title: "iWallDesign",
  description: "Personalizowany nadruk UV – nowoczesny design ścian i powierzchni",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${geist.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
