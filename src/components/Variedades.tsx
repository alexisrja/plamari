"use client";

import { useState } from "react";
import { negocio, variedades } from "@/config/negocio";
import { linkWhatsApp } from "@/lib/whatsapp";
import Clavel from "./Clavel";
import Reveal from "./Reveal";

const filtros = ["Todos", "Estándar", "Mini (spray)"] as const;

export default function Variedades() {
  const [filtro, setFiltro] = useState<(typeof filtros)[number]>("Todos");

  const lista =
    filtro === "Todos"
      ? variedades
      : variedades.filter((v) => v.tipo === filtro);

  return (
    <section id="catalogo" className="bg-crema py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-medium tracking-wider text-clavel uppercase">
            Catálogo
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Variedades y colores disponibles
          </h2>
          <p className="mt-4 text-muted">
            Clavel estándar de un botón por tallo y mini clavel de varios
            botones. Si no encuentras tu tono, lo teñimos a pedido.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {filtros.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFiltro(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filtro === f
                  ? "bg-hoja text-white"
                  : "border border-borde bg-surface text-muted hover:border-hoja hover:text-hoja"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {lista.map((v, i) => (
            <Reveal key={v.id} delay={(i % 3) * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-borde bg-surface">
                <div className="flex h-44 items-center justify-center bg-background">
                  <div className="transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                    <Clavel color={v.hex} size={112} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold">
                      {v.nombre}
                    </h3>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${
                        v.disponible
                          ? "bg-hoja/10 text-hoja"
                          : "bg-borde text-muted"
                      }`}
                    >
                      {v.disponible ? "Disponible" : "Por temporada"}
                    </span>
                  </div>

                  <p className="mt-1 text-xs font-medium tracking-wide text-clavel uppercase">
                    {v.tipo}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {v.descripcion}
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    <span className="font-medium text-foreground">Ideal para:</span>{" "}
                    {v.usos}
                  </p>

                  <a
                    href={linkWhatsApp(
                      `Hola ${negocio.nombre}, me interesa el clavel "${v.nombre}" (${v.tipo}). ¿Me pasan disponibilidad y precio?`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-hoja transition-colors hover:text-clavel"
                  >
                    Preguntar por este color
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
