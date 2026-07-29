import { ventajas } from "@/config/negocio";
import Reveal from "./Reveal";

/**
 * Se presentan como renglones de una ficha, no como tarjetas sueltas:
 * son cuatro afirmaciones sobre el mismo producto, no cuatro productos.
 */
export default function Ventajas() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20 sm:py-24">
      <ul className="grid gap-px bg-linea sm:grid-cols-2">
        {ventajas.map((v, i) => (
          <Reveal
            as="li"
            key={v.titulo}
            desde="abajo"
            delay={i * 70}
            className="bg-lienzo"
          >
            <div className="group h-full px-6 py-8 transition-colors duration-300 hover:bg-hueso">
              {/* La regla dorada se extiende al pasar el cursor: el único
                  adorno de esta sección, y responde al usuario. */}
              <span className="block h-px w-10 bg-oro transition-all duration-300 ease-out group-hover:w-20" />
              <h3 className="font-display mt-5 text-2xl tracking-tight">
                {v.titulo}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-humo">
                {v.texto}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
