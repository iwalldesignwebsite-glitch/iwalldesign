import About from "@/my_components/aboutUs/About";
import Contact from "@/my_components/contact/ContactSection";
import Faq from "@/my_components/faq/Faq";
import Footer from "@/my_components/footer/Footer";
import Map from "@/my_components/map/Map";
import Navbar from "@/my_components/navbar/Navbar";
import Gallery from "@/my_components/portfolio/Gallery";
import Pricing from "@/my_components/pricing/Pricing";
import Surfaces from "@/my_components/surfaces/Surfaces";
import { VisualizerSection } from "@/my_components/vizualizationSection/VizualizationSection";
import WhereUV from "@/my_components/whereUv/WhereUV";
import Services from "@/my_components/Services/Services";
import Hero from "@/my_components/hero/Hero";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative  space-y-12  overflow-hidden ">
        <Hero />
        <About />
        <Services />
        <WhereUV />
        <Surfaces />
        <VisualizerSection />
        <Gallery />
        <Pricing />
        <Map />
        <Faq />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
