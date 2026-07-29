"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { negocio } from "@/config/negocio";
import { linkWhatsApp } from "@/lib/whatsapp";

const enlaces = [
  { href: "#catalogo", texto: "Catálogo" },
  { href: "#precios", texto: "Precios" },
  { href: "#cultivo", texto: "Nosotros" },
  { href: "#preguntas", texto: "Preguntas" },
  { href: "#cotizar", texto: "Cotizar" },
];

export default function Header() {
  const [abierto, setAbierto] = useState(false);
  const [conFondo, setConFondo] = useState(false);

  useEffect(() => {
    const alHacerScroll = () => setConFondo(window.scrollY > 24);
    alHacerScroll();
    window.addEventListener("scroll", alHacerScroll, { passive: true });
    return () => window.removeEventListener("scroll", alHacerScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        conFondo
          ? "bg-background/90 backdrop-blur border-b border-borde"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#inicio" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt={negocio.nombreCompleto}
            width={44}
            height={44}
            priority
            className="h-11 w-11 object-contain"
          />
          <span className="font-display text-lg leading-tight font-semibold tracking-tight sm:text-xl">
            {negocio.nombre}
            <span className="block text-[10px] font-normal tracking-[0.18em] text-oro uppercase">
              Distribuidora floral
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {enlaces.map((e) => (
            <a
              key={e.href}
              href={e.href}
              className="text-sm text-muted transition-colors hover:text-clavel"
            >
              {e.texto}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={linkWhatsApp(
              `Hola ${negocio.nombre}, quiero información sobre sus claveles.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-hoja px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-hoja-clara sm:inline-block"
          >
            Pedir por WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-label="Abrir menú"
            className="rounded-lg border border-borde bg-surface p-2 md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {abierto ? (
                <>
                  <path d="M5 5l14 14" />
                  <path d="M19 5L5 19" />
                </>
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {abierto && (
        <nav className="border-t border-borde bg-surface md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-2">
            {enlaces.map((e) => (
              <li key={e.href}>
                <a
                  href={e.href}
                  onClick={() => setAbierto(false)}
                  className="block border-b border-borde py-3 text-sm last:border-0"
                >
                  {e.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
