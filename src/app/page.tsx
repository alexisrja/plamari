import BotonWhatsApp from "@/components/BotonWhatsApp";
import Cotizador from "@/components/Cotizador";
import Cultivo from "@/components/Cultivo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Precios from "@/components/Precios";
import Preguntas from "@/components/Preguntas";
import Variedades from "@/components/Variedades";
import Ventajas from "@/components/Ventajas";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Ventajas />
        <Variedades />
        <Precios />
        <Cultivo />
        <Preguntas />
        <Cotizador />
      </main>
      <Footer />
      <BotonWhatsApp />
    </>
  );
}
