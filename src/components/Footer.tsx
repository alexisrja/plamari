import { negocio } from "@/config/negocio";
import Clavel from "./Clavel";

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="border-t border-borde bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Clavel color="var(--clavel)" size={28} />
            <span className="font-display text-lg font-semibold">
              {negocio.nombre}
            </span>
          </div>
          <p className="mt-3 text-sm text-muted">{negocio.eslogan}</p>
        </div>

        <div className="text-sm">
          <h3 className="font-medium">Contacto</h3>
          <ul className="mt-3 space-y-2 text-muted">
            <li>
              <a href={`tel:${negocio.telefono.replace(/\s/g, "")}`} className="hover:text-clavel">
                {negocio.telefono}
              </a>
            </li>
            <li>
              <a href={`mailto:${negocio.email}`} className="hover:text-clavel">
                {negocio.email}
              </a>
            </li>
            <li>{negocio.direccion}</li>
            <li>{negocio.horario}</li>
          </ul>
        </div>

        <div className="text-sm">
          <h3 className="font-medium">Secciones</h3>
          <ul className="mt-3 space-y-2 text-muted">
            <li><a href="#catalogo" className="hover:text-clavel">Catálogo de colores</a></li>
            <li><a href="#precios" className="hover:text-clavel">Precios</a></li>
            <li><a href="#cultivo" className="hover:text-clavel">Nuestro cultivo</a></li>
            <li><a href="#cotizar" className="hover:text-clavel">Cotizar</a></li>
          </ul>

          {(negocio.instagram || negocio.facebook) && (
            <div className="mt-4 flex gap-4">
              {negocio.instagram && (
                <a
                  href={`https://instagram.com/${negocio.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-clavel"
                >
                  Instagram
                </a>
              )}
              {negocio.facebook && (
                <a
                  href={`https://facebook.com/${negocio.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-clavel"
                >
                  Facebook
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-borde py-5 text-center text-xs text-muted">
        © {anio} {negocio.nombre}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
