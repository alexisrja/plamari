import { negocio } from "@/config/negocio";
import Reveal from "./Reveal";

/** Esto sí es una secuencia: por eso lleva números y una línea que la une. */
const pasos = [
  {
    titulo: "Siembra y cuidado",
    texto:
      "Clavel en invernadero, con riego controlado y monitoreo de plaga sin exceso de químico.",
  },
  {
    titulo: "Corte en punto",
    texto:
      "El botón se corta en el punto exacto para que abra en casa de tu cliente, no en el camión.",
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
    <section id="cultivo" className="relative overflow-hidden bg-hoja py-20 text-hueso sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 88px, var(--oro-claro) 88px 89px)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 px-5 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal desde="izquierda">
          <p className="rotulo flex items-center gap-3 text-oro-claro">
            <span className="h-px w-8 bg-oro" />
            El invernadero
          </p>
          <h2 className="font-display mt-5 text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">
            Sabemos qué día se cortó cada flor
          </h2>
          <p className="mt-5 leading-relaxed text-bruma">
            {negocio.nombreCompleto} cultiva en {negocio.direccion}. Cada tallo
            que sale de aquí pasó por nuestras manos, así que conocemos su fecha
            de corte y cómo viajó. Por eso te dura más y tu cliente regresa.
          </p>

          <ul className="mt-9 space-y-3 border-t border-linea-oscura pt-6">
            {negocio.zonasEntrega.map((z) => (
              <li key={z} className="flex gap-3 text-sm text-bruma">
                <span aria-hidden className="text-oro">
                  —
                </span>
                {z}
              </li>
            ))}
          </ul>

          <p className="rotulo mt-8 text-bruma">{negocio.horario}</p>
        </Reveal>

        {/* Línea de proceso: la vertical dorada une los cuatro pasos */}
        <ol className="relative self-start">
          <span
            aria-hidden
            className="absolute top-4 bottom-[4.5rem] left-[1.05rem] w-px bg-linea-oscura"
          />
          {pasos.map((p, i) => (
            <Reveal as="li" key={p.titulo} desde="abajo" delay={i * 90}>
              <div className="relative flex gap-6 pb-10 last:pb-0">
                <span className="rotulo relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-oro bg-hoja text-oro-claro">
                  {i + 1}
                </span>
                <div className="pt-1">
                  <h3 className="font-display text-xl tracking-tight">
                    {p.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-bruma">
                    {p.texto}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
