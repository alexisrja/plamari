import Image from "next/image";
import { negocio } from "@/config/negocio";
import { linkWhatsApp } from "@/lib/whatsapp";
import Conteo from "./Conteo";

const datos = [
  { n: 12, sufijo: "+", etiqueta: "colores en corte" },
  { n: 15, sufijo: " días", etiqueta: "de vida en florero" },
  { n: 25, sufijo: "", etiqueta: "tallos por bonche" },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-hoja text-hueso">
      {/* Surcos del invernadero: líneas verticales muy tenues */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 88px, var(--oro-claro) 88px 89px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-oro opacity-[0.09] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pt-32 pb-16 sm:pt-40 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24">
        <div>
          <div className="entra">
            <p className="rotulo flex items-center gap-3 text-oro-claro">
              <span className="h-px w-8 bg-oro" />
              Coatepec Harinas · Edo. de México
            </p>
          </div>

          <h1 className="font-display mt-7 text-[2.6rem] leading-[1.06] font-normal tracking-[-0.02em] sm:text-6xl lg:text-[4.2rem]">
            <span className="cortina">
              <span style={{ animationDelay: "80ms" }}>Clavel cortado</span>
            </span>
            <span className="cortina text-oro-claro">
              <span style={{ animationDelay: "170ms" }}>esta mañana.</span>
            </span>
            <span className="cortina">
              <span style={{ animationDelay: "260ms" }}>En tu local mañana.</span>
            </span>
          </h1>

          <div className="entra" style={{ animationDelay: "300ms" }}>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-bruma">
              Somos el invernadero, no la bodega. Surtimos por bonche a
              florerías y por ramo a quien va a regalar.
            </p>
          </div>

          <div className="entra" style={{ animationDelay: "380ms" }}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={linkWhatsApp(
                  `Hola ${negocio.nombre}, vi su catálogo en línea y quiero cotizar claveles.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-clavel px-8 py-4 font-medium text-white transition-[background-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-clavel-vivo"
              >
                Pedir por WhatsApp
              </a>
              <a
                href="#catalogo"
                className="rounded-sm border border-linea-oscura px-8 py-4 font-medium text-hueso transition-colors duration-200 hover:border-oro hover:text-oro-claro"
              >
                Ver el índice de color
              </a>
            </div>
          </div>

          {/* Ficha de datos: la información que un florista pregunta primero */}
          <div className="entra" style={{ animationDelay: "460ms" }}>
            <dl className="mt-14 grid max-w-lg gap-px overflow-hidden rounded-sm border border-linea-oscura bg-linea-oscura sm:grid-cols-3">
              {datos.map((d) => (
                <div
                  key={d.etiqueta}
                  className="flex items-baseline gap-4 bg-hoja px-4 py-4 sm:block sm:py-5"
                >
                  <dt className="font-display text-3xl whitespace-nowrap text-oro-claro">
                    <Conteo hasta={d.n} sufijo={d.sufijo} />
                  </dt>
                  <dd className="rotulo text-bruma sm:mt-2">{d.etiqueta}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="entra-escala relative mx-auto w-full max-w-sm" style={{ animationDelay: "140ms" }}>
          <div
            aria-hidden
            className="absolute inset-[8%] rounded-full bg-hueso opacity-95"
          />
          <div
            aria-hidden
            className="absolute inset-[4%] rounded-full border border-oro/40"
          />
          <Image
            src="/logo.png"
            alt={negocio.nombreCompleto}
            width={640}
            height={640}
            priority
            className="relative w-full object-contain p-[6%]"
          />
        </div>
      </div>
    </section>
  );
}
