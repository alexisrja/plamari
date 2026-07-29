/**
 * ============================================================
 *  DATOS DEL NEGOCIO — EDITA SOLO ESTE ARCHIVO
 * ============================================================
 * Todo el contenido del folleto (nombre, teléfonos, precios,
 * variedades, textos) sale de aquí. No hace falta tocar el
 * resto del código para cambiar la información.
 *
 * Los valores marcados con "TODO:" son de ejemplo: reemplázalos
 * con los datos reales antes de publicar el sitio.
 */

export const negocio = {
  // ---- Identidad -------------------------------------------------
  nombre: "Plamari", // TODO: nombre real del negocio
  eslogan: "Claveles frescos de cultivo propio",
  descripcionCorta:
    "Cultivamos y distribuimos clavel estándar y mini clavel con corte del día, listos para florerías, eventos y hogares.",

  // ---- Contacto --------------------------------------------------
  // El número de WhatsApp va con código de país y SIN espacios,
  // signos ni el símbolo +.  Ej. México: 52 + 10 dígitos.
  whatsapp: "5215512345678", // TODO: número real de WhatsApp
  whatsappVisible: "+52 55 1234 5678", // TODO: cómo se muestra en pantalla
  telefono: "+52 55 1234 5678", // TODO
  email: "ventas@plamari.com", // TODO
  direccion: "Villa Guerrero, Estado de México", // TODO: zona del cultivo
  horario: "Lunes a sábado, 7:00 a 18:00 h",
  instagram: "", // TODO: usuario sin @, deja vacío para ocultar el enlace
  facebook: "", // TODO: usuario o página, deja vacío para ocultar

  // ---- Moneda ----------------------------------------------------
  moneda: "MXN", // TODO: cambia a COP, USD, etc. si aplica
  simbolo: "$",

  // ---- Zonas de entrega ------------------------------------------
  zonasEntrega: [
    "Entrega propia en CDMX y Estado de México",
    "Envío refrigerado al interior de la república (24-48 h)",
    "Recolección directa en el cultivo sin costo",
  ],
} as const;

// ============================================================
//  VARIEDADES Y COLORES
// ============================================================
// `hex` se usa para pintar el ícono de la flor en el catálogo.

export type Variedad = {
  id: string;
  nombre: string;
  hex: string;
  tipo: "Estándar" | "Mini (spray)";
  descripcion: string;
  usos: string;
  disponible: boolean;
};

export const variedades: Variedad[] = [
  {
    id: "rojo",
    nombre: "Rojo intenso",
    hex: "#c8102e",
    tipo: "Estándar",
    descripcion:
      "El clásico de mayor rotación. Botón grande, pétalo firme y color parejo.",
    usos: "San Valentín, día de las madres, arreglos románticos",
    disponible: true,
  },
  {
    id: "blanco",
    nombre: "Blanco puro",
    hex: "#f7f5f0",
    tipo: "Estándar",
    descripcion:
      "Blanco limpio sin tonos crema. Base ideal para teñido y para combinar.",
    usos: "Bodas, primeras comuniones, servicios funerarios",
    disponible: true,
  },
  {
    id: "rosa",
    nombre: "Rosa pastel",
    hex: "#f2a3bc",
    tipo: "Estándar",
    descripcion: "Tono suave y uniforme, muy pedido en decoración de eventos.",
    usos: "Baby showers, XV años, ramos de novia",
    disponible: true,
  },
  {
    id: "fucsia",
    nombre: "Fucsia",
    hex: "#d81b7d",
    tipo: "Estándar",
    descripcion: "Color saturado que aguanta bien la luz artificial de salón.",
    usos: "Eventos temáticos, arreglos de alto contraste",
    disponible: true,
  },
  {
    id: "amarillo",
    nombre: "Amarillo sol",
    hex: "#f5c518",
    tipo: "Estándar",
    descripcion: "Botón abierto y vistoso, excelente duración en florero.",
    usos: "Cumpleaños, aperturas, arreglos de agradecimiento",
    disponible: true,
  },
  {
    id: "naranja",
    nombre: "Naranja",
    hex: "#f07818",
    tipo: "Estándar",
    descripcion: "Tono cálido, muy usado en temporada de otoño.",
    usos: "Decoración de temporada, arreglos rústicos",
    disponible: true,
  },
  {
    id: "lila",
    nombre: "Lila / morado",
    hex: "#8f6bbd",
    tipo: "Estándar",
    descripcion: "Disponible por temporada, sujeto a corte.",
    usos: "Arreglos elegantes, combinaciones frías",
    disponible: false,
  },
  {
    id: "bicolor",
    nombre: "Bicolor (jaspeado)",
    hex: "#e8455f",
    tipo: "Estándar",
    descripcion: "Pétalo con borde contrastante. Lote limitado por corte.",
    usos: "Arreglos de autor, detalles especiales",
    disponible: true,
  },
  {
    id: "mini-rosa",
    nombre: "Mini clavel rosa",
    hex: "#ef8fa8",
    tipo: "Mini (spray)",
    descripcion:
      "Varios botones por tallo. Rinde más volumen con menos tallos.",
    usos: "Relleno de arreglos, centros de mesa, ramos pequeños",
    disponible: true,
  },
  {
    id: "mini-blanco",
    nombre: "Mini clavel blanco",
    hex: "#faf8f4",
    tipo: "Mini (spray)",
    descripcion: "Multiflor de botón cerrado, abre en 2-3 días tras el corte.",
    usos: "Bodas, tocados, boutonnières",
    disponible: true,
  },
  {
    id: "mini-rojo",
    nombre: "Mini clavel rojo",
    hex: "#b81c33",
    tipo: "Mini (spray)",
    descripcion: "Alta densidad de botón, color estable en transporte.",
    usos: "Coronas, arreglos de volumen",
    disponible: true,
  },
  {
    id: "verde",
    nombre: "Verde (teñido)",
    hex: "#7bb661",
    tipo: "Estándar",
    descripcion: "Clavel blanco teñido bajo pedido. Cualquier tono a solicitud.",
    usos: "Eventos corporativos, colores de marca",
    disponible: true,
  },
];

// ============================================================
//  PRECIOS
// ============================================================
// Un bonche estándar = 25 tallos. Ajusta cantidades y precios.

export type Paquete = {
  id: string;
  titulo: string;
  unidad: string;
  precio: number;
  precioAnterior?: number;
  detalle: string[];
  destacado?: boolean;
  etiqueta?: string;
};

/** Precios para florerías, revendedores y organizadores de eventos. */
export const preciosMayoreo: Paquete[] = [
  {
    id: "mayoreo-1",
    titulo: "Bonche suelto",
    unidad: "por bonche de 25 tallos",
    precio: 90, // TODO: precio real
    detalle: [
      "Desde 1 bonche",
      "Color a elegir del catálogo",
      "Tallo de 60-70 cm",
      "Corte del día anterior",
    ],
  },
  {
    id: "mayoreo-2",
    titulo: "Caja media",
    unidad: "10 bonches / 250 tallos",
    precio: 780, // TODO
    precioAnterior: 900,
    etiqueta: "Más vendido",
    destacado: true,
    detalle: [
      "Ahorro del 13% contra bonche suelto",
      "Hasta 4 colores por caja",
      "Empaque con hidratación",
      "Entrega programada semanal",
    ],
  },
  {
    id: "mayoreo-3",
    titulo: "Caja completa",
    unidad: "20 bonches / 500 tallos",
    precio: 1450, // TODO
    precioAnterior: 1800,
    detalle: [
      "Mejor precio por tallo",
      "Colores mezclados sin costo extra",
      "Reserva de corte para tu fecha",
      "Envío refrigerado incluido en zona metropolitana",
    ],
  },
];

/** Precios para cliente final. */
export const preciosMenudeo: Paquete[] = [
  {
    id: "menudeo-1",
    titulo: "Ramo docena",
    unidad: "12 claveles",
    precio: 180, // TODO
    detalle: [
      "Papel de envoltura y listón",
      "Color a elegir",
      "Tarjeta con mensaje sin costo",
    ],
  },
  {
    id: "menudeo-2",
    titulo: "Ramo grande",
    unidad: "24 claveles",
    precio: 320, // TODO
    etiqueta: "El más regalado",
    destacado: true,
    detalle: [
      "Envoltura premium",
      "Combinación de dos colores",
      "Tarjeta con mensaje sin costo",
      "Entrega a domicilio local",
    ],
  },
  {
    id: "menudeo-3",
    titulo: "Centro de mesa",
    unidad: "arreglo en base",
    precio: 450, // TODO
    detalle: [
      "Base incluida",
      "Diseño a tu color",
      "Ideal para eventos y oficinas",
      "Bajo pedido con 48 h de anticipación",
    ],
  },
];

// ============================================================
//  ARGUMENTOS DE VENTA (por qué comprarnos)
// ============================================================

export const ventajas = [
  {
    titulo: "Corte del día",
    texto:
      "Cortamos por la mañana y despachamos el mismo día. Sin intermediarios ni flor de bodega.",
  },
  {
    titulo: "Hasta 15 días en florero",
    texto:
      "Flor hidratada desde el corte y transportada en frío para que llegue firme a tu cliente.",
  },
  {
    titulo: "Precio directo del cultivo",
    texto:
      "Somos productores, no revendedores. Eso baja tu costo por tallo y sube tu margen.",
  },
  {
    titulo: "Volumen garantizado",
    texto:
      "Reservamos corte para tus fechas fuertes: 14 de febrero, 10 de mayo y temporada de bodas.",
  },
];

// ============================================================
//  PREGUNTAS FRECUENTES
// ============================================================

export const faq = [
  {
    pregunta: "¿Cuál es el pedido mínimo?",
    respuesta:
      "Para mayoreo, un bonche de 25 tallos. Para menudeo no hay mínimo: puedes pedir un solo ramo.",
  },
  {
    pregunta: "¿Con cuánta anticipación debo pedir?",
    respuesta:
      "Pedidos normales, 24 horas antes. En temporada alta (14 de febrero y 10 de mayo) recomendamos apartar con dos semanas de anticipación.",
  },
  {
    pregunta: "¿Hacen envíos a otros estados?",
    respuesta:
      "Sí. Enviamos en caja con hidratación y transporte refrigerado, con llegada de 24 a 48 horas según destino.",
  },
  {
    pregunta: "¿Puedo pedir un color que no está en el catálogo?",
    respuesta:
      "Sí. Teñimos clavel blanco al tono que necesites, incluidos los colores de tu marca. Requiere 3 días de anticipación.",
  },
  {
    pregunta: "¿Cómo se paga?",
    respuesta:
      "Transferencia o efectivo contra entrega en zona local. Para clientes recurrentes manejamos crédito a 15 días.",
  },
];
