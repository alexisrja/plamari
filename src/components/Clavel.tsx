/**
 * Ilustración vectorial de un clavel.
 * Se dibuja por código (no es una foto) para que el sitio no dependa
 * de imágenes externas y cada color del catálogo se pinte solo.
 *
 * Cuando tengas fotos reales del cultivo, puedes sustituir este
 * componente por <Image /> dentro de Variedades.tsx.
 */

type Props = {
  color: string;
  /** Tamaño en píxeles del lado del cuadro. */
  size?: number;
  /** Dibuja tallo y hojas debajo de la flor. */
  conTallo?: boolean;
  className?: string;
};

// Pétalo con la punta dentada característica del clavel.
const PETALO =
  "M0 0 C-17 -13 -23 -34 -14 -47 L-9 -39 L-4 -50 L0 -42 L4 -50 L9 -39 L14 -47 C23 -34 17 -13 0 0 Z";

function anillo(cantidad: number, desfase: number) {
  return Array.from({ length: cantidad }, (_, i) => (i * 360) / cantidad + desfase);
}

export default function Clavel({
  color,
  size = 120,
  conTallo = false,
  className,
}: Props) {
  return (
    <svg
      viewBox="-60 -60 120 160"
      width={size}
      height={(size * 160) / 120}
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      {conTallo && (
        <g stroke="var(--hoja)" fill="none" strokeLinecap="round">
          <path d="M0 20 L0 96" strokeWidth="4" />
          <path
            d="M0 52 C-16 46 -26 54 -30 66 C-16 70 -4 64 0 54 Z"
            fill="var(--hoja-clara)"
            strokeWidth="2"
          />
          <path
            d="M0 70 C16 64 26 72 30 84 C16 88 4 82 0 72 Z"
            fill="var(--hoja)"
            strokeWidth="2"
          />
        </g>
      )}

      {/* Cáliz verde en la base de la flor */}
      {conTallo && (
        <path
          d="M-10 12 L10 12 L7 30 L-7 30 Z"
          fill="var(--hoja)"
          opacity="0.9"
        />
      )}

      {/* Tres anillos de pétalos, del más abierto al centro.
          El contorno tenue evita que los colores muy claros (blanco, crema)
          desaparezcan sobre fondos claros. */}
      <g style={{ color }} stroke="rgba(0,0,0,0.14)" strokeWidth="1.2">
        <g fill="currentColor" opacity="0.55">
          {anillo(9, 0).map((deg) => (
            <path key={`o${deg}`} d={PETALO} transform={`rotate(${deg}) scale(1.05)`} />
          ))}
        </g>
        <g fill="currentColor" opacity="0.8">
          {anillo(8, 22).map((deg) => (
            <path key={`m${deg}`} d={PETALO} transform={`rotate(${deg}) scale(0.74)`} />
          ))}
        </g>
        <g fill="currentColor">
          {anillo(6, 12).map((deg) => (
            <path key={`i${deg}`} d={PETALO} transform={`rotate(${deg}) scale(0.44)`} />
          ))}
        </g>
        <circle r="5" fill="currentColor" />
        <circle r="5" fill="#000" opacity="0.12" stroke="none" />
      </g>
    </svg>
  );
}
