import { FileText, Music } from "lucide-react";
import { ARTISTS_FORM_URL } from "@/content/artists";

/** Invitation for Peruvian guitarists to apply to Artistas PG. */
export const ArtistJoin = () => (
  <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[.03] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
    <div className="flex items-center gap-4">
      <span className="hidden size-10 shrink-0 items-center justify-center rounded-full bg-brand/15 text-accent sm:flex">
        <Music size={18} />
      </span>
      <div>
        <p className="font-bold text-on-night">
          ¿Eres guitarrista peruano? Queremos conocerte.
        </p>
        <p className="text-sm text-on-night-muted">
          Llena el formulario y cuéntanos sobre tu música para aparecer en Artistas PG.
        </p>
      </div>
    </div>
    <a
      href={ARTISTS_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-on-night transition-colors hover:border-accent hover:text-accent"
    >
      <FileText size={16} /> Postular
    </a>
  </div>
);
