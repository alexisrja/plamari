"use client";

import { useState, type FormEvent } from "react";
import { negocio, variedades } from "@/config/negocio";
import { linkWhatsApp } from "@/lib/whatsapp";

/**
 * El formulario no envía nada a un servidor: arma el mensaje y lo abre
 * en WhatsApp. Así no hace falta backend, correo ni base de datos.
 */
export default function Cotizador() {
  const [enviando, setEnviando] = useState(false);

  const campo =
    "w-full rounded-xl border border-borde bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-hoja";
  const etiqueta = "mb-1.5 block text-sm font-medium";

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
    <section id="cotizar" className="bg-crema py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-medium tracking-wider text-clavel uppercase">
            Cotiza sin compromiso
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Dinos qué necesitas y te pasamos precio
          </h2>
          <p className="mt-4 text-muted">
            Llena el formulario y se abre WhatsApp con tu pedido ya escrito.
            Contestamos en menos de una hora en horario de atención.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <a
              href={`tel:${negocio.telefono.replace(/\s/g, "")}`}
              className="flex items-center gap-3 hover:text-clavel"
            >
              <span aria-hidden>📞</span> {negocio.telefono}
            </a>
            <a
              href={`mailto:${negocio.email}`}
              className="flex items-center gap-3 hover:text-clavel"
            >
              <span aria-hidden>✉️</span> {negocio.email}
            </a>
            <p className="flex items-center gap-3 text-muted">
              <span aria-hidden>📍</span> {negocio.direccion}
            </p>
            <p className="flex items-center gap-3 text-muted">
              <span aria-hidden>🕗</span> {negocio.horario}
            </p>
          </div>
        </div>

        <form
          onSubmit={enviar}
          className="rounded-2xl border border-borde bg-surface p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className={etiqueta} htmlFor="nombre">
                Tu nombre o negocio
              </label>
              <input
                id="nombre"
                name="nombre"
                required
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
              <select id="color" name="color" className={campo} defaultValue="Rojo intenso">
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
                placeholder="Ciudad de México, col. Del Valle"
                className={campo}
              />
            </div>

            <div className="sm:col-span-2">
              <label className={etiqueta} htmlFor="notas">
                Notas (opcional)
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
            className="mt-6 w-full rounded-full bg-clavel px-6 py-3.5 font-medium text-white transition-colors hover:bg-hoja disabled:opacity-60"
          >
            {enviando ? "Abriendo WhatsApp…" : "Enviar por WhatsApp"}
          </button>

          <p className="mt-3 text-center text-xs text-muted">
            No guardamos tus datos: el mensaje se abre directo en tu WhatsApp.
          </p>
        </form>
      </div>
    </section>
  );
}
