import Image from "next/image";
import { negocio } from "@/config/negocio";
import { linkWhatsApp } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-crema pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      {/* Manchas de color de fondo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-clavel-suave opacity-30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-hoja-clara opacity-20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-borde bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-hoja uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-clavel" />
            Cultivo propio · {negocio.direccion}
          </span>

          <h1 className="font-display mt-6 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Claveles frescos,
            <br />
            <span className="text-clavel">directo del cultivo</span> a tu mesa.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {negocio.descripcionCorta} Vendemos al mayoreo para florerías y
            eventos, y al menudeo para quien quiere regalar flor de verdad.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={linkWhatsApp(
                `Hola ${negocio.nombre}, vi su folleto en línea y quiero cotizar claveles.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-clavel px-7 py-3.5 font-medium text-white shadow-lg shadow-clavel/25 transition-transform hover:-translate-y-0.5"
            >
              Cotizar por WhatsApp
            </a>
            <a
              href="#catalogo"
              className="rounded-full border border-hoja px-7 py-3.5 font-medium text-hoja transition-colors hover:bg-hoja hover:text-white"
            >
              Ver catálogo de colores
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-borde pt-6">
            {[
              { n: "12+", t: "colores disponibles" },
              { n: "15 días", t: "de vida en florero" },
              { n: "24 h", t: "del corte a tu puerta" },
            ].map((d) => (
              <div key={d.t}>
                <dt className="font-display text-2xl font-semibold text-hoja">
                  {d.n}
                </dt>
                <dd className="mt-1 text-sm text-muted">{d.t}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Logo de la distribuidora */}
        <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
          <div
            aria-hidden
            className="absolute h-[85%] w-[85%] rounded-full bg-white opacity-70 blur-2xl"
          />
          <Image
            src="/logo.png"
            alt={negocio.nombreCompleto}
            width={640}
            height={640}
            priority
            className="relative w-full max-w-sm object-contain lg:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
