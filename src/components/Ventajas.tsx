import { ventajas } from "@/config/negocio";
import Reveal from "./Reveal";

export default function Ventajas() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ventajas.map((v, i) => (
          <Reveal key={v.titulo} delay={i * 80}>
            <div className="h-full rounded-2xl border border-borde bg-surface p-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-crema font-display text-sm font-semibold text-hoja">
                {i + 1}
              </div>
              <h3 className="font-display mt-4 text-lg font-semibold">
                {v.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.texto}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
