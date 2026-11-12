import { CHALLENGES } from "@/content/challenges";
import { Container } from "@/components/layout/Container";
import { CommunityBackLink } from "@/components/community/CommunityTabs";
import { ChallengeCard } from "@/components/community/ChallengeCard";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Retos",
  description:
    "Retos de guitarra de la comunidad Peru Guitar para practicar, compartir y mejorar juntos.",
  path: "/comunidad/retos",
});

export default function ChallengesPage() {
  return (
    <Container className="py-16">
      <CommunityBackLink />
      <h1 className="mb-2 text-4xl font-extrabold">Retos</h1>
      <p className="mb-12 max-w-2xl text-ink-muted">
        Saca un lick o un pedacito de una canción, grábate y compártelo. Aquí no
        hay ganadores: es una forma sana de practicar y mejorar en comunidad.
      </p>

      <div className="grid gap-6 lg:grid-cols-2">
        {CHALLENGES.map((challenge) => (
          <ChallengeCard key={challenge.slug} challenge={challenge} layout="row" />
        ))}
      </div>
    </Container>
  );
}
