import { negocio, variedades } from "@/config/negocio";
import { linkWhatsApp } from "@/lib/whatsapp";
import Clavel from "./Clavel";

const decorativos = ["rojo", "rosa", "amarillo", "blanco", "fucsia"]
  .map((id) => variedades.find((v) => v.id === id))
  .filter((v): v is (typeof variedades)[number] => Boolean(v));

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

        {/* Ramo ilustrado */}
        <div className="relative mx-auto flex h-[22rem] w-full max-w-md items-end justify-center sm:h-[28rem]">
          {decorativos.map((v, i) => {
            const posiciones = [
              { left: "8%", bottom: "2%", size: 130, rot: -16, z: 1 },
              { left: "30%", bottom: "16%", size: 165, rot: -4, z: 3 },
              { left: "54%", bottom: "6%", size: 120, rot: 12, z: 2 },
              { left: "18%", bottom: "30%", size: 100, rot: -26, z: 2 },
              { left: "56%", bottom: "28%", size: 108, rot: 22, z: 1 },
            ];
            const p = posiciones[i];
            return (
              <div
                key={v.id}
                className="absolute"
                style={{
                  left: p.left,
                  bottom: p.bottom,
                  zIndex: p.z,
                  transform: `rotate(${p.rot}deg)`,
                }}
              >
                <Clavel color={v.hex} size={p.size} conTallo />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
