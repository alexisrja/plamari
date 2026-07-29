import { variedades } from "@/config/negocio";

/**
 * Cinta de disponibilidad: el pizarrón de corte de la semana, corriendo.
 * Es decorativa para lectores de pantalla — la misma información está
 * completa y navegable en el catálogo.
 */
export default function Cinta() {
  const items = variedades.filter((v) => v.disponible);

  const pista = (
    <ul className="cinta-pista flex shrink-0 items-center">
      {items.map((v) => (
        <li key={v.id} className="flex items-center gap-3 px-6 py-3">
          <span
            className="h-2.5 w-2.5 shrink-0 rounded-full ring-1 ring-white/25"
            style={{ background: v.hex }}
          />
          <span className="rotulo whitespace-nowrap text-bruma">
            {v.nombre}
          </span>
          <span className="rotulo text-oro/70">
            {v.tipo === "Mini (spray)" ? "mini" : "est"}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      aria-hidden
      className="cinta overflow-hidden border-y border-linea-oscura bg-hoja"
    >
      <div className="flex w-max">
        {pista}
        {pista}
      </div>
    </div>
  );
}
