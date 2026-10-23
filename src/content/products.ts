export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string[];
  cover?: string;
  specs: ProductSpec[];
  /** Price in soles. Omit for free products. */
  price?: number;
  /** External checkout link. Without it, the product is sold over WhatsApp. */
  checkoutUrl?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "puas-pg-mk-i",
    name: "Púas PG MK-I",
    cover: "/products/puas-pg-mk-i.webp",
    tagline: "Ataque definido y un brillo increíble.",
    description: [
      "Ya llegaron nuestras púas PG MK-I, inspiradas en las púas Gravity, con un ataque definido y un brillo increíble.",
      "Ideales para sesiones de grabación y performance en vivo.",
    ],
    specs: [
      { label: "Modelo", value: "PG MK-I" },
      { label: "Inspiración", value: "Púas Gravity" },
      { label: "Sonido", value: "Ataque definido y brillo" },
      { label: "Uso", value: "Grabación y performance en vivo" },
      { label: "Presentación", value: "Pack de 2 púas" },
    ],
    price: 25,
  },
];

export const getProduct = (id: string) => PRODUCTS.find((p) => p.id === id);

export const formatPrice = (product: Product) =>
  product.price === undefined ? "Gratis" : `S/ ${product.price.toFixed(2)}`;
