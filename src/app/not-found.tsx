import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <h1 className="text-4xl font-extrabold">Página no encontrada</h1>
      <p className="mt-4 mb-8 text-ink-muted">
        Lo que buscas no existe o se movió.
      </p>
      <Button href="/blog">Ir al blog</Button>
    </Container>
  );
}
