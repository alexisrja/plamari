import { faq } from "@/config/negocio";

export default function Preguntas() {
  return (
    <section id="preguntas" className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
      <p className="text-sm font-medium tracking-wider text-clavel uppercase">
        Preguntas frecuentes
      </p>
      <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        Lo que más nos preguntan
      </h2>

      <div className="mt-10 divide-y divide-borde border-y border-borde">
        {faq.map((f) => (
          <details key={f.pregunta} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
              {f.pregunta}
              <span
                aria-hidden
                className="shrink-0 text-clavel transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {f.respuesta}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
