# Plamari — folleto web de venta de claveles

Sitio de una sola página (Next.js 16 + Tailwind 4) pensado para conseguir
clientes: catálogo de colores, precios de mayoreo y menudeo, sección del
cultivo, preguntas frecuentes y cotización directa por WhatsApp.

## Cómo verlo en tu computadora

```bash
npm run dev
```

Abre http://localhost:3000

## Cómo cambiar la información

**Todo el contenido está en un solo archivo:** `src/config/negocio.ts`

Ahí editas:

| Qué                                 | Dónde en el archivo |
| ----------------------------------- | ------------------- |
| Nombre, teléfono, correo, dirección | `negocio`           |
| Número de WhatsApp                  | `negocio.whatsapp`  |
| Moneda (MXN, COP, USD…)             | `negocio.moneda`    |
| Colores y variedades de clavel      | `variedades`        |
| Precios de mayoreo                  | `preciosMayoreo`    |
| Precios de menudeo                  | `preciosMenudeo`    |
| Argumentos de venta                 | `ventajas`          |
| Preguntas frecuentes                | `faq`               |

Los valores marcados con `// TODO:` son de ejemplo. **Cámbialos antes de
publicar**, sobre todo el número de WhatsApp y los precios.

### El número de WhatsApp

Va con código de país, sin `+`, sin espacios ni guiones:

```ts
whatsapp: "5215512345678",   // México: 52 + 1 + 10 dígitos
```

## Cómo funciona el botón de pedido

No hay servidor ni base de datos. El formulario de cotización arma el
mensaje con los datos que llenó el cliente y abre WhatsApp con el texto ya
escrito. Tú solo respondes.

## Fotos reales

Las flores del catálogo están dibujadas por código
(`src/components/Clavel.tsx`) para que el sitio cargue rápido y no dependa
de imágenes externas. Cuando tengas fotos de tu cultivo:

1. Guárdalas en la carpeta `public/`
2. En `src/components/Variedades.tsx`, reemplaza `<Clavel ... />` por
   `<Image src="/tu-foto.jpg" ... />` de `next/image`.

Las fotos reales del producto venden más que cualquier ilustración: es la
mejora número uno que puedes hacerle a este folleto.

## Publicar el sitio

La forma más rápida y gratuita es Vercel:

```bash
npx vercel
```

Luego puedes conectarle tu dominio propio desde el panel de Vercel.

## Estructura

```
src/
  config/negocio.ts       ← EDITA AQUÍ (todo el contenido)
  lib/whatsapp.ts         ← arma los enlaces de WhatsApp y formatea precios
  components/
    Header.tsx            menú fijo con navegación
    Hero.tsx              portada con ramo ilustrado
    Ventajas.tsx          por qué comprarte a ti
    Variedades.tsx        catálogo filtrable de colores
    Precios.tsx           pestañas mayoreo / menudeo
    Cultivo.tsx           sobre nosotros y proceso
    Preguntas.tsx         FAQ
    Cotizador.tsx         formulario que abre WhatsApp
    BotonWhatsApp.tsx     botón flotante
    Footer.tsx            pie de página
    Clavel.tsx            ilustración SVG de la flor
    Reveal.tsx            animación de aparición al hacer scroll
  app/
    page.tsx              orden de las secciones
    layout.tsx            título y descripción para Google
    globals.css           colores y tipografías
```
