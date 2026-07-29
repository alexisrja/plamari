"use client";

import { useState } from "react";
import {
  negocio,
  preciosMayoreo,
  preciosMenudeo,
  type Paquete,
} from "@/config/negocio";
import { linkWhatsApp, precio } from "@/lib/whatsapp";
import Reveal from "./Reveal";

type Modo = "mayoreo" | "menudeo";

const textos: Record<Modo, { titulo: string; bajada: string }> = {
  mayoreo: {
    titulo: "Para quien revende",
    bajada:
      "Precio de productor. El bonche va de 25 tallos y puedes mezclar colores dentro de la caja.",
  },
  menudeo: {
    titulo: "Para quien regala",
    bajada: "Ramos armados y arreglos listos, con tarjeta escrita sin costo.",
  },
};

function Ficha({ p, indice }: { p: Paquete; indice: number }) {
  return (
    <div
      className={`group relative flex h-full flex-col rounded-sm border bg-hueso p-7 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 ${
        p.destacado
          ? "border-clavel shadow-[0_18px_50px_-30px_rgba(193,16,44,0.7)]"
          : "border-linea hover:border-oro"
      }`}
    >
      {/* Folio: encabezado de hoja de empaque */}
      <div className="flex items-baseline justify-between border-b border-linea pb-4">
        <span className="rotulo text-humo">
          Folio {String(indice + 1).padStart(2, "0")}
        </span>
        {p.etiqueta && (
          <span className="rotulo text-clavel">{p.etiqueta}</span>
        )}
      </div>

      <h3 className="font-display mt-5 text-2xl tracking-tight">{p.titulo}</h3>
      <p className="rotulo mt-1 text-humo">{p.unidad}</p>

      <div className="mt-6 flex items-baseline gap-2">
        <span className="font-display cifras text-[2.75rem] leading-none tracking-tight">
          {precio(p.precio)}
        </span>
        <span className="rotulo text-humo">{negocio.moneda}</span>
        {p.precioAnterior && (
          <span className="rotulo cifras text-humo line-through">
            {precio(p.precioAnterior)}
          </span>
        )}
      </div>

      <dl className="mt-7 flex-1 space-y-3 border-t border-linea pt-5">
        {p.detalle.map((d) => (
          <div key={d} className="flex gap-3 text-sm text-humo">
            <dt className="rotulo shrink-0 pt-0.5 text-oro">✓</dt>
            <dd>{d}</dd>
          </div>
        ))}
      </dl>

      <a
        href={linkWhatsApp(
          `Hola ${negocio.nombre}, quiero pedir "${p.titulo}" (${p.unidad}) por ${precio(p.precio)} ${negocio.moneda}.`,
        )}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-7 min-h-11 rounded-sm px-6 py-3.5 text-center font-medium transition-colors duration-200 ${
          p.destacado
            ? "bg-clavel text-white hover:bg-clavel-vivo"
            : "border border-hoja text-hoja hover:bg-hoja hover:text-hueso"
        }`}
      >
        Pedir este paquete
      </a>
    </div>
  );
}

export default function Precios() {
  const [modo, setModo] = useState<Modo>("mayoreo");
  const paquetes = modo === "mayoreo" ? preciosMayoreo : preciosMenudeo;

  return (
    <section id="precios" className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <Reveal desde="izquierda" className="max-w-xl">
          <p className="rotulo flex items-center gap-3 text-clavel">
            <span className="h-px w-8 bg-clavel" />
            Lista de precios
          </p>
          <h2 className="font-display mt-5 text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">
            {textos[modo].titulo}
          </h2>
          <p className="mt-4 text-humo">{textos[modo].bajada}</p>
        </Reveal>

        {/* El indicador se desliza entre las dos opciones: el movimiento
            dice de dónde vienes y a dónde vas. */}
        <Reveal desde="abajo" delay={120}>
          <div
            role="tablist"
            aria-label="Tipo de cliente"
            className="relative inline-flex rounded-sm border border-linea bg-hueso p-1"
          >
            <span
              aria-hidden
              className="absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-sm bg-hoja transition-transform duration-300 ease-out"
              style={{
                transform:
                  modo === "menudeo" ? "translateX(100%)" : "translateX(0)",
              }}
            />
            {(["mayoreo", "menudeo"] as const).map((m) => (
              <button
                key={m}
                role="tab"
                aria-selected={modo === m}
                type="button"
                onClick={() => setModo(m)}
                className={`rotulo relative z-10 min-h-11 w-32 transition-colors duration-200 ${
                  modo === m ? "text-hueso" : "text-humo hover:text-tinta"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* La `key` fuerza que las fichas vuelvan a entrar al cambiar de
          pestaña, en cascada. */}
      <div key={modo} className="mt-14 grid gap-6 md:grid-cols-3">
        {paquetes.map((p, i) => (
          <Reveal key={p.id} desde="abajo" delay={i * 70} className="h-full">
            <Ficha p={p} indice={i} />
          </Reveal>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-humo">
        Precios sujetos a temporada y a lo que dé el corte. ¿Necesitas más
        volumen?{" "}
        <a
          href={linkWhatsApp(
            `Hola ${negocio.nombre}, necesito una cotización por volumen alto de claveles.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-clavel underline decoration-clavel/40 underline-offset-4 transition-colors hover:decoration-clavel"
        >
          Pide precio especial
        </a>
        .
      </p>
    </section>
  );
}
