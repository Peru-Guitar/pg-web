import { VIDEOS } from "@/content/media";
import { youtubeUrl } from "@/content/settings.json";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { CommunityBackLink } from "@/components/community/CommunityTabs";
import { CollabCard } from "@/components/community/CollabCard";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Collabs",
  description:
    "Videos colaborativos grabados entre guitarristas de la comunidad Peru Guitar.",
  path: "/comunidad/collabs",
});

export default function CollabsPage() {
  return (
    <Container className="py-16">
      <CommunityBackLink />
      <h1 className="mb-2 text-4xl font-extrabold">Collabs</h1>
      <p className="mb-12 max-w-2xl text-ink-muted">
        Videos hechos entre miembros de la comunidad: cada uno graba su parte
        desde casa y la juntamos en un solo tema.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {VIDEOS.map((video) => (
          <CollabCard key={video.id} video={video} />
        ))}
      </div>

      <div className="mt-12">
        <Button href={youtubeUrl} external>
          Ver canal de YouTube
        </Button>
      </div>
    </Container>
  );
}
