import { ArrowRight, MessageCircle, Users } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { CHALLENGES } from "@/content/challenges";
import { PODCAST_EPISODES, VIDEOS } from "@/content/media";
import { BOOKS, RESOURCES } from "@/content/resources";
import { WHATSAPP_URL } from "@/content/community";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ResourcesList } from "@/components/ui/ResourcesList";
import { CommunityTabs } from "@/components/community/CommunityTabs";
import { ChallengeCard } from "@/components/community/ChallengeCard";
import { CollabCard } from "@/components/community/CollabCard";
import { MangaBand } from "@/components/community/MangaBand";
import { PodcastEpisodes } from "@/components/community/PodcastEpisodes";

export const metadata = pageMetadata({
  title: "Comunidad",
  description:
    "Retos, collabs, podcast, recursos gratuitos y el grupo de Peru Guitar: la comunidad guitarrística peruana.",
  path: "/comunidad",
});

/** Community hub: a preview of each section, linking to its full catalog. */
export default function CommunityPage() {
  return (
    <>
      <Container className="pt-16">
        <h1 className="mb-2 text-4xl font-extrabold">Comunidad</h1>
        <p className="mb-6 max-w-2xl text-ink-muted">
          Guitarristas que tocan, comparten y crean juntos. Súmate al reto del
          mes, entra al grupo y mira lo que hemos grabado juntos.
        </p>

        <CommunityTabs />

        <div id="retos" className="scroll-mt-24">
          <SectionHeader
            title="Retos"
            subtitle="Saca un lick o un pedazo de canción, grábate y compártelo."
            link={{ label: `Ver los ${CHALLENGES.length} retos`, href: "/comunidad/retos" }}
          />
        </div>
        <div className="mb-16 grid gap-6 lg:grid-cols-2">
          {CHALLENGES.slice(0, 2).map((challenge) => (
            <ChallengeCard key={challenge.slug} challenge={challenge} layout="row" />
          ))}
        </div>

        <div id="collabs" className="scroll-mt-24">
          <SectionHeader
            title="Collabs"
            subtitle="Videos hechos entre miembros de la comunidad."
            link={{ label: `Ver los ${VIDEOS.length} collabs`, href: "/comunidad/collabs" }}
          />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEOS.slice(0, 6).map((video) => (
            <CollabCard key={video.id} video={video} />
          ))}
        </div>
      </Container>

      <MangaBand teaser />

      <Container className="pb-16">
        <div id="podcast" className="scroll-mt-24">
          <SectionHeader
            title="Podcast"
            subtitle="Conversaciones entre guitarristas que grabamos en su momento."
            link={{
              label: `Ver los ${PODCAST_EPISODES.length} episodios`,
              href: "/comunidad/podcast",
            }}
          />
        </div>
        <PodcastEpisodes limit={4} />

        <div id="recursos" className="mt-16 scroll-mt-24">
          <SectionHeader
            title="Recursos gratuitos"
            subtitle="Material gratuito para poner las manos en las cuerdas."
            link={{
              label: `Ver los ${BOOKS.length + RESOURCES.length} recursos`,
              href: "/comunidad/recursos",
            }}
          />
        </div>
        <ResourcesList limit={3} />

        <div
          id="grupo"
          className="community-feature relative isolate mt-16 flex scroll-mt-24 flex-col items-start gap-6 overflow-hidden rounded-3xl p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-12"
        >
          <div className="community-strings" aria-hidden="true">
            {Array.from({ length: 14 }, (_, n) => (
              <i key={n} />
            ))}
          </div>
          <Users
            aria-hidden="true"
            size={260}
            strokeWidth={1}
            className="absolute -bottom-20 -right-10 -z-10 text-white/5"
          />
          <div>
            <MessageCircle className="mb-4 text-brand" size={30} />
            <h2 className="text-3xl font-extrabold tracking-tight">
              Únete al grupo de Peru Guitar
            </h2>
            <p className="mt-3 max-w-md text-white/80">
              El grupo de WhatsApp de la comunidad: retos, dudas, música y
              novedades.
            </p>
          </div>
          <Button href={WHATSAPP_URL} external>
            Entrar al grupo <ArrowRight size={18} />
          </Button>
        </div>
      </Container>
    </>
  );
}
