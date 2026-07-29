"use client";

import { useState } from "react";
import { negocio, variedades } from "@/config/negocio";
import { linkWhatsApp } from "@/lib/whatsapp";
import Reveal from "./Reveal";

const filtros = ["Todos", "Estándar", "Mini (spray)"] as const;

/**
 * Índice de color.
 *
 * Un florista no elige "tarjeta 7": elige un color. Por eso el catálogo
 * es una lista de franjas de color sobre papel claro (donde el tono se
 * lee tal cual es) y cada renglón se abre para dar la ficha completa.
 */
export default function Variedades() {
  const [filtro, setFiltro] = useState<(typeof filtros)[number]>("Todos");
  const [abierta, setAbierta] = useState<string | null>(variedades[0].id);

  const lista =
    filtro === "Todos" ? variedades : variedades.filter((v) => v.tipo === filtro);

  return (
    <section id="catalogo" className="bg-lienzo py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal desde="izquierda" className="max-w-xl">
            <p className="rotulo flex items-center gap-3 text-clavel">
              <span className="h-px w-8 bg-clavel" />
              Índice de color
            </p>
            <h2 className="font-display mt-5 text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">
              Doce tonos en corte
            </h2>
            <p className="mt-4 text-humo">
              Elige por color. Si tu tono no está aquí, teñimos clavel blanco al
              que necesites, incluido el de tu marca.
            </p>
          </Reveal>

          <Reveal desde="abajo" delay={120}>
            <div
              role="tablist"
              aria-label="Tipo de clavel"
              className="flex gap-1 rounded-sm border border-linea bg-hueso p-1"
            >
              {filtros.map((f) => (
                <button
                  key={f}
                  role="tab"
                  aria-selected={filtro === f}
                  type="button"
                  onClick={() => setFiltro(f)}
                  className={`rotulo min-h-11 rounded-sm px-4 transition-colors duration-200 ${
                    filtro === f
                      ? "bg-hoja text-hueso"
                      : "text-humo hover:text-tinta"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <ul className="mt-12 border-t border-linea">
          {lista.map((v, i) => {
            const activa = abierta === v.id;
            return (
              <Reveal
                as="li"
                key={v.id}
                desde="abajo"
                delay={Math.min(i, 6) * 45}
                className="border-b border-linea"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setAbierta(activa ? null : v.id)}
                    aria-expanded={activa}
                    aria-controls={`ficha-${v.id}`}
                    className="group flex w-full items-center gap-4 py-5 text-left sm:gap-6"
                  >
                    {/* La franja de color crece al abrir: el color es el
                        dato principal, así que es lo que se mueve. */}
                    <span
                      className="h-12 shrink-0 rounded-[2px] ring-1 ring-black/10 transition-[width,height] duration-300 ease-out group-hover:h-14"
                      style={{
                        background: v.hex,
                        width: activa ? "5.5rem" : "3.25rem",
                      }}
                    />

                    <span className="min-w-0 flex-1">
                      <span className="font-display block text-xl tracking-tight sm:text-2xl">
                        {v.nombre}
                      </span>
                      <span className="rotulo mt-1 block text-humo">
                        {v.tipo}
                        {!v.disponible && " · por temporada"}
                      </span>
                    </span>

                    <span
                      aria-hidden
                      className={`rotulo shrink-0 text-humo transition-transform duration-300 ease-out ${
                        activa ? "rotate-45" : "group-hover:translate-y-0.5"
                      }`}
                    >
                      +
                    </span>
                  </button>
                </h3>

                {/* Ficha desplegada. El truco de grid 0fr→1fr permite
                    animar la altura sin conocerla de antemano. */}
                <div
                  id={`ficha-${v.id}`}
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: activa ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-6 pb-8 sm:grid-cols-[1fr_auto] sm:items-end">
                      <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                        <div>
                          <dt className="rotulo text-humo">Carácter</dt>
                          <dd className="mt-1 text-sm leading-relaxed">
                            {v.descripcion}
                          </dd>
                        </div>
                        <div>
                          <dt className="rotulo text-humo">Se pide para</dt>
                          <dd className="mt-1 text-sm leading-relaxed">
                            {v.usos}
                          </dd>
                        </div>
                      </dl>

                      <a
                        href={linkWhatsApp(
                          `Hola ${negocio.nombre}, me interesa el clavel "${v.nombre}" (${v.tipo}). ¿Me pasan disponibilidad y precio?`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={activa ? undefined : -1}
                        className="rotulo inline-flex min-h-11 shrink-0 items-center gap-2 rounded-sm bg-hoja px-5 text-hueso transition-colors duration-200 hover:bg-clavel"
                      >
                        Preguntar por este tono
                        <span aria-hidden>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
