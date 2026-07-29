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
    titulo: "Precios para florerías, eventos y revendedores",
    bajada:
      "Precio directo de productor. El bonche estándar es de 25 tallos y puedes mezclar colores.",
  },
  menudeo: {
    titulo: "Precios para regalo y hogar",
    bajada:
      "Ramos armados y arreglos listos para entregar, con tarjeta sin costo.",
  },
};

function Tarjeta({ p }: { p: Paquete }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl border p-7 ${
        p.destacado
          ? "border-clavel bg-surface shadow-xl shadow-clavel/10"
          : "border-borde bg-surface"
      }`}
    >
      {p.etiqueta && (
        <span className="absolute -top-3 left-7 rounded-full bg-clavel px-3 py-1 text-[11px] font-semibold tracking-wide text-white uppercase">
          {p.etiqueta}
        </span>
      )}

      <h3 className="font-display text-xl font-semibold">{p.titulo}</h3>
      <p className="mt-1 text-sm text-muted">{p.unidad}</p>

      <div className="mt-5 flex items-end gap-2">
        <span className="font-display text-4xl font-semibold tracking-tight">
          {precio(p.precio)}
        </span>
        <span className="pb-1.5 text-sm text-muted">{negocio.moneda}</span>
        {p.precioAnterior && (
          <span className="pb-1.5 text-sm text-muted line-through">
            {precio(p.precioAnterior)}
          </span>
        )}
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {p.detalle.map((d) => (
          <li key={d} className="flex gap-2.5 text-sm text-muted">
            <span aria-hidden className="mt-0.5 text-hoja">
              ✓
            </span>
            {d}
          </li>
        ))}
      </ul>

      <a
        href={linkWhatsApp(
          `Hola ${negocio.nombre}, quiero pedir "${p.titulo}" (${p.unidad}) por ${precio(p.precio)} ${negocio.moneda}.`,
        )}
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-7 rounded-full px-6 py-3 text-center font-medium transition-colors ${
          p.destacado
            ? "bg-clavel text-white hover:bg-hoja"
            : "border border-hoja text-hoja hover:bg-hoja hover:text-white"
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
    <section id="precios" className="mx-auto max-w-6xl px-5 py-16 sm:py-24">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wider text-clavel uppercase">
            Precios
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {textos[modo].titulo}
          </h2>
          <p className="mt-4 text-muted">{textos[modo].bajada}</p>
        </div>

        <div
          role="tablist"
          aria-label="Tipo de cliente"
          className="inline-flex shrink-0 rounded-full border border-borde bg-surface p-1"
        >
          {(["mayoreo", "menudeo"] as const).map((m) => (
            <button
              key={m}
              role="tab"
              aria-selected={modo === m}
              type="button"
              onClick={() => setModo(m)}
              className={`rounded-full px-6 py-2 text-sm font-medium capitalize transition-colors ${
                modo === m ? "bg-hoja text-white" : "text-muted hover:text-hoja"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {paquetes.map((p, i) => (
          <Reveal key={p.id} delay={i * 90} className="h-full">
            <Tarjeta p={p} />
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-muted">
        Precios sujetos a temporada y disponibilidad de corte. ¿Necesitas un
        volumen mayor?{" "}
        <a
          href={linkWhatsApp(
            `Hola ${negocio.nombre}, necesito una cotización por volumen alto de claveles.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-clavel underline underline-offset-4"
        >
          Pide cotización especial
        </a>
        .
      </p>
    </section>
  );
}
