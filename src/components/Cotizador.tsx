"use client";

import { useState, type FormEvent } from "react";
import { negocio, variedades } from "@/config/negocio";
import { linkWhatsApp } from "@/lib/whatsapp";
import Reveal from "./Reveal";

/**
 * El formulario no manda nada a un servidor: arma el mensaje y lo abre en
 * WhatsApp. Sin backend, sin correo, sin base de datos.
 */
export default function Cotizador() {
  const [enviando, setEnviando] = useState(false);

  const campo =
    "min-h-11 w-full rounded-sm border border-linea bg-hueso px-4 py-3 text-sm text-tinta transition-colors duration-200 outline-none placeholder:text-humo/60 focus:border-hoja";
  const etiqueta = "rotulo mb-2 block text-humo";

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const datos = new FormData(e.currentTarget);

    const mensaje = [
      `Hola ${negocio.nombre}, quiero cotizar claveles.`,
      "",
      `Nombre: ${datos.get("nombre")}`,
      `Tipo de compra: ${datos.get("tipo")}`,
      `Color: ${datos.get("color")}`,
      `Cantidad: ${datos.get("cantidad")}`,
      `Fecha que la necesito: ${datos.get("fecha") || "por definir"}`,
      `Entrega en: ${datos.get("lugar") || "por definir"}`,
      datos.get("notas") ? `Notas: ${datos.get("notas")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setEnviando(true);
    window.open(linkWhatsApp(mensaje), "_blank", "noopener,noreferrer");
    setTimeout(() => setEnviando(false), 1200);
  }

  return (
    <section id="cotizar" className="border-t border-linea bg-lienzo py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal desde="izquierda">
          <p className="rotulo flex items-center gap-3 text-clavel">
            <span className="h-px w-8 bg-clavel" />
            Cotiza sin compromiso
          </p>
          <h2 className="font-display mt-5 text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">
            Dinos qué necesitas
          </h2>
          <p className="mt-4 text-humo">
            Al enviar se abre WhatsApp con tu pedido ya escrito. Contestamos en
            menos de una hora en horario de atención.
          </p>

          <dl className="mt-10 space-y-5 border-t border-linea pt-8 text-sm">
            <div>
              <dt className="rotulo text-humo">Teléfono</dt>
              <dd className="mt-1">
                <a
                  href={`tel:${negocio.telefono.replace(/\s/g, "")}`}
                  className="cifras transition-colors hover:text-clavel"
                >
                  {negocio.telefono}
                </a>
              </dd>
            </div>
            <div>
              <dt className="rotulo text-humo">Correo</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${negocio.email}`}
                  className="transition-colors hover:text-clavel"
                >
                  {negocio.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="rotulo text-humo">Cultivo</dt>
              <dd className="mt-1">{negocio.direccion}</dd>
            </div>
            <div>
              <dt className="rotulo text-humo">Horario</dt>
              <dd className="mt-1">{negocio.horario}</dd>
            </div>
          </dl>
        </Reveal>

        <Reveal desde="abajo" delay={120}>
          <form
            onSubmit={enviar}
            className="rounded-sm border border-linea bg-hueso p-6 sm:p-9"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className={etiqueta} htmlFor="nombre">
                  Tu nombre o negocio
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  required
                  autoComplete="organization"
                  placeholder="Florería La Rosa"
                  className={campo}
                />
              </div>

              <div>
                <label className={etiqueta} htmlFor="tipo">
                  Tipo de compra
                </label>
                <select id="tipo" name="tipo" className={campo} defaultValue="Mayoreo">
                  <option>Mayoreo</option>
                  <option>Menudeo</option>
                  <option>Evento</option>
                </select>
              </div>

              <div>
                <label className={etiqueta} htmlFor="color">
                  Color
                </label>
                <select
                  id="color"
                  name="color"
                  className={campo}
                  defaultValue="Rojo intenso"
                >
                  {variedades.map((v) => (
                    <option key={v.id}>{v.nombre}</option>
                  ))}
                  <option>Colores mezclados</option>
                  <option>Color a definir</option>
                </select>
              </div>

              <div>
                <label className={etiqueta} htmlFor="cantidad">
                  Cantidad aproximada
                </label>
                <input
                  id="cantidad"
                  name="cantidad"
                  required
                  placeholder="5 bonches / 2 ramos"
                  className={campo}
                />
                <p className="mt-2 text-xs text-humo">
                  Un bonche son 25 tallos. Si no sabes, escribe para cuántos
                  arreglos es.
                </p>
              </div>

              <div>
                <label className={etiqueta} htmlFor="fecha">
                  ¿Para cuándo?
                </label>
                <input id="fecha" name="fecha" type="date" className={campo} />
              </div>

              <div className="sm:col-span-2">
                <label className={etiqueta} htmlFor="lugar">
                  Ciudad o zona de entrega
                </label>
                <input
                  id="lugar"
                  name="lugar"
                  autoComplete="address-level2"
                  placeholder="Toluca, centro"
                  className={campo}
                />
              </div>

              <div className="sm:col-span-2">
                <label className={etiqueta} htmlFor="notas">
                  Notas <span className="normal-case">(opcional)</span>
                </label>
                <textarea
                  id="notas"
                  name="notas"
                  rows={3}
                  placeholder="Necesito entrega recurrente cada semana…"
                  className={`${campo} resize-y`}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={enviando}
              className="mt-8 min-h-11 w-full rounded-sm bg-clavel px-6 py-4 font-medium text-white transition-[background-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:bg-clavel-vivo disabled:translate-y-0 disabled:opacity-50"
            >
              {enviando ? "Abriendo WhatsApp…" : "Enviar por WhatsApp"}
            </button>

            <p className="mt-4 text-center text-xs text-humo">
              No guardamos tus datos: el mensaje se abre directo en tu WhatsApp.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
