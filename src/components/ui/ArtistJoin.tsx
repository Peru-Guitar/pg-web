import { ArrowRight, Music } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ARTISTS_FORM_URL } from "@/content/artists";
import { TornBand } from "@/components/ui/TornBand";

/** Full-width diagonal band with torn-paper edges inviting guitarists to apply to Artistas PG. */
export const ArtistJoin = () => (
  <section aria-labelledby="artistas-postular" className="relative my-6 md:my-10">
    <TornBand className="bg-black py-20 md:py-32">
      {/* Background: diagonal pinstripes and a soft vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:repeating-linear-gradient(-35deg,rgb(255_255_255/.04)_0_1px,transparent_1px_22px)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgb(0_0_0/.6))]"
      />
      <Music
        aria-hidden
        className="pointer-events-none absolute -right-10 top-1/2 aspect-square h-[65%] w-auto -translate-y-1/2 rotate-12 text-brand/25 md:right-10"
      />
      <Container className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="mb-2 text-xs font-bold uppercase tracking-[.2em] text-accent">
            Artistas PG
          </p>
          <h2 id="artistas-postular" className="text-3xl font-extrabold text-white md:text-4xl">
            ¿Eres guitarrista? Queremos conocerte.
          </h2>
          <p className="mt-3 text-on-night-muted md:text-lg">
            Llena el formulario y cuéntanos sobre tu música para aparecer en Artistas PG.
          </p>
        </div>
        <a
          href={ARTISTS_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-pill bg-brand px-6 py-3 font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 md:self-auto"
        >
          Postular <ArrowRight size={18} />
        </a>
      </Container>
    </TornBand>
  </section>
);
