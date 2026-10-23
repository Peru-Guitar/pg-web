/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Product, formatPrice } from "@/content/products";
import { salesWhatsApp } from "@/content/settings.json";
import { SITE_URL } from "@/lib/posts";

export const ProductCard = ({ product }: { product: Product }) => (
  <article className="group grid overflow-hidden rounded-3xl border border-white/10 bg-night text-on-night transition-shadow hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand md:grid-cols-2">
    <Link href={`/tienda/${product.id}`} aria-label={`Ver ${product.name}`} className="overflow-hidden bg-[#151b12] focus-visible:outline-2 focus-visible:outline-brand">
      {product.cover && <img src={product.cover} alt={`${product.name}: dos púas verdes translúcidas con el logo PG`} width={960} height={1174} className="aspect-[1/1] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] md:aspect-[5/4]" />}
    </Link>
    <div className="flex flex-col items-start justify-center gap-6 p-7 sm:p-12 lg:p-16">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Peru Guitar · Accesorios</span>
      <div>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">{product.name}</h2>
        <p className="mt-4 max-w-sm text-lg leading-relaxed text-zinc-300">{product.tagline}</p>
      </div>
      <div className="w-full border-t border-white/15 pt-6">
        <p className="text-3xl font-bold">{formatPrice(product)}</p>
        <p className="mt-2 text-sm text-zinc-400">{product.specs.find((spec) => spec.label === "Presentación")?.value}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link href={`/tienda/${product.id}`} className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-strong focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">Ver producto <ArrowUpRight size={18} /></Link>
        <a href={`https://wa.me/${salesWhatsApp}?text=${encodeURIComponent(`Hola, quisiera saber más sobre las ${product.name}. ${SITE_URL}/tienda/${product.id}`)}`} target="_blank" rel="noopener noreferrer" aria-label={`Preguntar por WhatsApp sobre ${product.name}`} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-on-night transition-colors hover:border-accent hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"><MessageCircle size={18} /> Preguntar</a>
      </div>
    </div>
  </article>
);
