"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { negocio } from "@/config/negocio";
import { linkWhatsApp } from "@/lib/whatsapp";

const enlaces = [
  { href: "#catalogo", texto: "Colores" },
  { href: "#precios", texto: "Precios" },
  { href: "#cultivo", texto: "Invernadero" },
  { href: "#preguntas", texto: "Preguntas" },
  { href: "#cotizar", texto: "Cotizar" },
];

export default function Header() {
  const [abierto, setAbierto] = useState(false);
  const [pegado, setPegado] = useState(false);

  useEffect(() => {
    const alHacerScroll = () => setPegado(window.scrollY > 40);
    alHacerScroll();
    window.addEventListener("scroll", alHacerScroll, { passive: true });
    return () => window.removeEventListener("scroll", alHacerScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        pegado || abierto
          ? "border-b border-linea-oscura bg-hoja/95 backdrop-blur"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={negocio.nombreCompleto}
            width={44}
            height={44}
            priority
            className="h-10 w-10 object-contain"
          />
          <span className="font-display text-lg leading-none text-hueso">
            {negocio.nombre}
            <span className="rotulo mt-1.5 block font-sans text-oro-claro">
              Distribuidora floral
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {enlaces.map((e) => (
            <a
              key={e.href}
              href={e.href}
              className="rotulo group relative py-2 text-bruma transition-colors duration-200 hover:text-hueso"
            >
              {e.texto}
              {/* Subrayado que crece desde la izquierda */}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-oro transition-transform duration-300 ease-out group-hover:scale-x-100" />
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
            className="rotulo hidden min-h-11 items-center rounded-sm bg-clavel px-5 text-white transition-colors duration-200 hover:bg-clavel-vivo sm:inline-flex"
          >
            Pedir ahora
          </a>

          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            className="flex h-11 w-11 items-center justify-center rounded-sm border border-linea-oscura text-hueso md:hidden"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              aria-hidden
            >
              {abierto ? (
                <>
                  <path d="M5 5l14 14" />
                  <path d="M19 5L5 19" />
                </>
              ) : (
                <>
                  <path d="M3 7h18" />
                  <path d="M3 12h18" />
                  <path d="M3 17h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {abierto && (
        <nav className="border-t border-linea-oscura bg-hoja md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-1">
            {enlaces.map((e) => (
              <li key={e.href}>
                <a
                  href={e.href}
                  onClick={() => setAbierto(false)}
                  className="rotulo flex min-h-12 items-center border-b border-linea-oscura text-bruma last:border-0"
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
