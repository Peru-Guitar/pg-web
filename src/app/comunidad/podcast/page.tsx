import { Container } from "@/components/layout/Container";
import { CommunityBackLink } from "@/components/community/CommunityTabs";
import { PodcastEpisodes } from "@/components/community/PodcastEpisodes";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Podcast",
  description:
    "Archivo del podcast de Peru Guitar: conversaciones entre guitarristas peruanos.",
  path: "/comunidad/podcast",
});

export default function PodcastPage() {
  return (
    <Container className="py-16">
      <CommunityBackLink />
      <h1 className="mb-2 text-4xl font-extrabold">Podcast</h1>
      <p className="mb-12 max-w-2xl text-ink-muted">
        Conversaciones entre guitarristas que grabamos en su momento.
      </p>
      <PodcastEpisodes />
    </Container>
  );
}
