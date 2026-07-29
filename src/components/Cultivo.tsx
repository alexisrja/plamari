import { negocio } from "@/config/negocio";
import Clavel from "./Clavel";
import Reveal from "./Reveal";

const pasos = [
  {
    titulo: "Siembra y cuidado",
    texto:
      "Trabajamos el clavel en invernadero, con riego controlado y monitoreo de plaga sin exceso de químico.",
  },
  {
    titulo: "Corte en punto",
    texto:
      "Cortamos el botón en el punto exacto para que abra en casa de tu cliente, no en el camión.",
  },
  {
    titulo: "Hidratación inmediata",
    texto:
      "El tallo entra a solución hidratante en menos de una hora desde el corte.",
  },
  {
    titulo: "Empaque y salida",
    texto:
      "Se arma el bonche, se enfunda y sale en transporte refrigerado el mismo día.",
  },
];

export default function Cultivo() {
  return (
    <section id="cultivo" className="bg-hoja py-16 text-white sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium tracking-wider text-clavel-suave uppercase">
            Nosotros
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Somos productores, no intermediarios
          </h2>
          <p className="mt-5 leading-relaxed text-white/80">
            {negocio.nombre} cultiva clavel en {negocio.direccion}. Cada flor que
            vendemos sale de nuestro invernadero, así que sabemos exactamente
            qué día se cortó y cómo viajó. Eso es lo que hace que tu flor dure
            más y que tu cliente vuelva.
          </p>

          <div className="mt-8 space-y-4">
            {negocio.zonasEntrega.map((z) => (
              <div key={z} className="flex gap-3 text-sm text-white/85">
                <span aria-hidden className="text-clavel-suave">
                  ●
                </span>
                {z}
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-white/70">
            Horario de atención: {negocio.horario}
          </p>
        </div>

        <ol className="space-y-3">
          {pasos.map((p, i) => (
            <Reveal key={p.titulo} delay={i * 90}>
              <li className="flex gap-5 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <div className="shrink-0 pt-1">
                  <Clavel color="var(--clavel-suave)" size={38} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    {i + 1}. {p.titulo}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/75">
                    {p.texto}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
