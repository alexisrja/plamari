"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cuenta hasta un número cuando entra en pantalla.
 * Aquí la animación significa algo: son cantidades (colores, días, horas),
 * y verlas subir refuerza de qué se está hablando.
 *
 * Si el sistema pide menos movimiento, muestra la cifra final de una vez.
 */
export default function Conteo({
  hasta,
  duracion = 1100,
  sufijo = "",
}: {
  hasta: number;
  duracion?: number;
  sufijo?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [valor, setValor] = useState(0);

  useEffect(() => {
    const nodo = ref.current;
    if (!nodo) return;

    let cuadro = 0;
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        observador.disconnect();

        const menosMovimiento = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

        if (menosMovimiento) {
          setValor(hasta);
          return;
        }

        const inicio = performance.now();
        const paso = (ahora: number) => {
          const t = Math.min((ahora - inicio) / duracion, 1);
          // Desaceleración: arranca rápido y se asienta.
          const suave = 1 - Math.pow(1 - t, 3);
          setValor(Math.round(hasta * suave));
          if (t < 1) cuadro = requestAnimationFrame(paso);
        };
        cuadro = requestAnimationFrame(paso);
      },
      { threshold: 0.5 },
    );

    observador.observe(nodo);
    return () => {
      observador.disconnect();
      cancelAnimationFrame(cuadro);
    };
  }, [hasta, duracion]);

  return (
    <span ref={ref} className="cifras">
      {valor}
      {sufijo}
    </span>
  );
}
