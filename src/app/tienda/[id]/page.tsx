/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle } from "lucide-react";

import { PRODUCTS, Product, formatPrice, getProduct } from "@/content/products";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SITE_URL } from "@/lib/posts";
import { salesWhatsApp } from "@/content/settings.json";

/** WhatsApp chat with a ready message that includes the product URL. */
const whatsAppOrderUrl = (product: Product) => {
  const message = `Hola, quiero comprar las ${product.name}. ${SITE_URL}/tienda/${product.id}`;
  return `https://wa.me/${salesWhatsApp}?text=${encodeURIComponent(message)}`;
};

interface Props {
  params: Promise<{ id: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ id: product.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return {};

  return pageMetadata({
    title: product.name,
    description: product.tagline,
    path: `/tienda/${product.id}`,
    image: product.cover,
  });
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  return (
    <Container className="py-10 sm:py-16">
      <Link href="/tienda" className="mb-6 inline-flex text-sm font-semibold text-ink-muted hover:text-brand">← Volver a la tienda</Link>
      <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-night text-on-night lg:grid-cols-2">
      <div className="overflow-hidden bg-[#151b12]">
        {product.cover && (
          <img
            src={product.cover}
            alt={`${product.name}: pack de dos púas verdes translúcidas con el logo PG`}
            width={960}
            height={1174}
            className="h-full max-h-[760px] w-full object-cover"
          />
        )}
      </div>

      <div className="flex flex-col gap-6 p-7 sm:p-10 lg:p-12">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Peru Guitar · Accesorios</p>
          <h1 className="text-4xl font-extrabold leading-tight">
            {product.name}
          </h1>
          <p className="mt-3 text-3xl font-bold text-accent">
            {formatPrice(product)}
          </p>
        </div>

        {product.description.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-zinc-300">
            {paragraph}
          </p>
        ))}

        <section>
          <h2 className="mb-3 text-lg font-bold">Ficha técnica</h2>
          <dl className="divide-y divide-white/10 border-y border-white/15">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex justify-between gap-4 py-3 text-sm">
                <dt className="text-zinc-400">{spec.label}</dt>
                <dd className="text-right font-medium">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="flex flex-wrap gap-4">
          {product.price !== undefined &&
            (product.checkoutUrl ? (
              <Button href={product.checkoutUrl} external>
                Comprar
              </Button>
            ) : (
              <Button href={whatsAppOrderUrl(product)} external>
                <MessageCircle size={16} /> Comprar por WhatsApp
              </Button>
            ))}
        </div>
      </div>
      </div>
    </Container>
  );
}
