import { negocio } from "@/config/negocio";

/**
 * Arma el enlace de WhatsApp con un mensaje ya escrito.
 * Funciona igual en celular (abre la app) y en escritorio (abre WhatsApp Web).
 */
export function linkWhatsApp(mensaje: string) {
  return `https://wa.me/${negocio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

/** Formatea un precio con la moneda configurada en negocio.ts */
export function precio(valor: number) {
  return `${negocio.simbolo}${valor.toLocaleString("es-MX")}`;
}
