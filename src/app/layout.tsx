import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { negocio } from "@/config/negocio";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans-base",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display-base",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
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
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
