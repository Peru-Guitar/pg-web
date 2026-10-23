import { Metadata } from "next";
import { PRODUCTS } from "@/content/products";
import { Container } from "@/components/layout/Container";
import { ProductCard } from "@/components/ui/ProductCard";

export const metadata: Metadata = {
  title: "Tienda",
  description: "Púas y productos de Peru Guitar para guitarristas.",
};

export default function StorePage() {
  return (
    <Container className="py-16">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand">La tienda de Peru Guitar</p>
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">Dale carácter<br />a tu sonido.</h1>
        <p className="mt-5 text-lg text-ink-muted">Accesorios para acompañarte en cada ensayo, grabación y escenario.</p>
      </div>

      <div className="flex flex-col gap-6">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Container>
  );
}
