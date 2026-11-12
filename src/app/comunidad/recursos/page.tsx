import { Container } from "@/components/layout/Container";
import { CommunityBackLink } from "@/components/community/CommunityTabs";
import { ResourcesList } from "@/components/ui/ResourcesList";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Recursos gratuitos",
  description:
    "Ebooks y backing tracks gratuitos de Peru Guitar para practicar guitarra.",
  path: "/comunidad/recursos",
});

export default function ResourcesPage() {
  return (
    <Container className="py-16">
      <CommunityBackLink />
      <h1 className="mb-2 text-4xl font-extrabold">Recursos gratuitos</h1>
      <p className="mb-12 max-w-2xl text-ink-muted">
        Material gratuito para poner las manos en las cuerdas: ebooks para leer
        en línea y backing tracks para descargar.
      </p>
      <ResourcesList />
    </Container>
  );
}
