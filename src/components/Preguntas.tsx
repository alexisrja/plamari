import { faq } from "@/config/negocio";
import Reveal from "./Reveal";

export default function Preguntas() {
  return (
    <section id="preguntas" className="mx-auto max-w-3xl px-5 py-20 sm:py-28">
      <Reveal desde="izquierda">
        <p className="rotulo flex items-center gap-3 text-clavel">
          <span className="h-px w-8 bg-clavel" />
          Antes de pedir
        </p>
        <h2 className="font-display mt-5 text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">
          Lo que más nos preguntan
        </h2>
      </Reveal>

      <div className="mt-12 border-t border-linea">
        {faq.map((f, i) => (
          <Reveal key={f.pregunta} desde="abajo" delay={i * 50}>
            <details className="group border-b border-linea">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-5 font-medium">
                {f.pregunta}
                <span
                  aria-hidden
                  className="shrink-0 text-oro transition-transform duration-300 ease-out group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 text-sm leading-relaxed text-humo">
                {f.respuesta}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
