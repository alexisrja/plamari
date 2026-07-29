"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Desde = "abajo" | "izquierda" | "escala";

/**
 * Descubre su contenido cuando entra en pantalla.
 *
 * Solo para contenido por debajo del pliegue: lo de arriba usa las
 * animaciones CSS de globals.css, que no dependen de que el JS cargue.
 *
 * El CSS anula todo esto si el sistema pide menos movimiento.
 */
export default function Reveal({
  children,
  desde = "abajo",
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  desde?: Desde;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span";
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const nodo = ref.current;
    if (!nodo) return;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisible(true);
          observador.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observador.observe(nodo);
    return () => observador.disconnect();
  }, []);

  return (
    <Tag
      // El tipo de ref varía según la etiqueta; el comportamiento no.
      ref={ref as never}
      data-desde={desde}
      className={`reveal ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
