import Image from "next/image";
import { negocio } from "@/config/negocio";

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="border-t border-linea-oscura bg-hoja text-hueso">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:grid-cols-3">
        <div>
          <Image
            src="/logo.png"
            alt={negocio.nombreCompleto}
            width={160}
            height={160}
            className="h-24 w-24 rounded-full bg-hueso object-contain p-1"
          />
          <p className="font-display mt-5 text-xl leading-tight">
            {negocio.nombreCompleto}
          </p>
          <p className="mt-2 text-sm text-bruma">{negocio.eslogan}</p>
        </div>

        <div>
          <h3 className="rotulo text-oro-claro">Contacto</h3>
          <ul className="mt-5 space-y-3 text-sm text-bruma">
            <li>
              <a
                href={`tel:${negocio.telefono.replace(/\s/g, "")}`}
                className="cifras transition-colors hover:text-hueso"
              >
                {negocio.telefono}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${negocio.email}`}
                className="transition-colors hover:text-hueso"
              >
                {negocio.email}
              </a>
            </li>
            <li>{negocio.direccion}</li>
            <li>{negocio.horario}</li>
          </ul>
        </div>

        <div>
          <h3 className="rotulo text-oro-claro">Secciones</h3>
          <ul className="mt-5 space-y-3 text-sm text-bruma">
            <li>
              <a href="#catalogo" className="transition-colors hover:text-hueso">
                Índice de color
              </a>
            </li>
            <li>
              <a href="#precios" className="transition-colors hover:text-hueso">
                Lista de precios
              </a>
            </li>
            <li>
              <a href="#cultivo" className="transition-colors hover:text-hueso">
                El invernadero
              </a>
            </li>
            <li>
              <a href="#cotizar" className="transition-colors hover:text-hueso">
                Cotizar
              </a>
            </li>
          </ul>

          {(negocio.instagram || negocio.facebook) && (
            <div className="mt-6 flex gap-5 text-sm">
              {negocio.instagram && (
                <a
                  href={`https://instagram.com/${negocio.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bruma transition-colors hover:text-hueso"
                >
                  Instagram
                </a>
              )}
              {negocio.facebook && (
                <a
                  href={`https://facebook.com/${negocio.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bruma transition-colors hover:text-hueso"
                >
                  Facebook
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-linea-oscura py-6">
        <p className="rotulo mx-auto max-w-6xl px-5 text-center text-bruma">
          © {anio} {negocio.nombreCompleto}
        </p>
      </div>
    </footer>
  );
}
