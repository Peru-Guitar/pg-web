import { pageMetadata } from "@/lib/metadata";
import { PRODUCTS } from "@/content/products";
import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/ui/ProductCard";

export const metadata = pageMetadata({
  title: "Tienda",
  description: "Púas y productos de Peru Guitar para guitarristas.",
  path: "/tienda",
});

export default function StorePage() {
  return (
    <section className="relative -mb-10 overflow-hidden bg-night text-on-night">
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-brand/20 blur-[120px]" />
      <Container className="relative pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand">La tienda de Peru Guitar</p>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">Dale carácter<br />a tu sonido.</h1>
        <p className="mt-5 text-lg text-on-night-muted">Accesorios para acompañarte en cada ensayo, grabación y escenario.</p>
      </div>

      <div className="flex flex-col gap-6">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      </Container>
    </section>
  );
}
