import type { Metadata } from "next";
import { Archivo, Bodoni_Moda, Space_Mono } from "next/font/google";
import { negocio } from "@/config/negocio";
import "./globals.css";

/* Bodoni recoge la capital romana dorada del logo; se usa solo en
   títulos grandes, donde sus trazos finos aguantan. */
const bodoni = Bodoni_Moda({
  variable: "--font-display-base",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-sans-base",
  subsets: ["latin"],
  display: "swap",
});

/* La monoespaciada es la voz de la hoja de empaque: tallos, cm, días. */
const mono = Space_Mono({
  variable: "--font-dato-base",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

/* Necesario para que la imagen de vista previa se resuelva como URL
   absoluta; sin esto WhatsApp y Facebook no la muestran.
   Si conectas un dominio propio, define NEXT_PUBLIC_SITIO en Vercel. */
const sitio =
  process.env.NEXT_PUBLIC_SITIO ??
  "https://plamari-alexisrja62-gmailcoms-projects.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(sitio),
  title: `${negocio.nombreCompleto} | Claveles al mayoreo y menudeo`,
  description: negocio.descripcionCorta,
  keywords: [
    "claveles",
    "clavel al mayoreo",
    "flores frescas",
    "mini clavel",
    "florerías",
    "flores para eventos",
    negocio.direccion,
  ],
  openGraph: {
    // La imagen de vista previa (la que sale al pegar el link en WhatsApp)
    // se toma de src/app/opengraph-image.png automáticamente.
    title: `${negocio.nombreCompleto} | ${negocio.eslogan}`,
    description: negocio.descripcionCorta,
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${bodoni.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
