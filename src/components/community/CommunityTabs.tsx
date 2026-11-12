import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const SECTIONS = [
  { id: "retos", label: "Retos" },
  { id: "collabs", label: "Collabs" },
  { id: "manga", label: "Manga" },
  { id: "podcast", label: "Podcast" },
  { id: "recursos", label: "Recursos" },
  { id: "grupo", label: "Grupo" },
];

/** Anchor pills that jump to each section of the community hub. */
export const CommunityTabs = () => (
  <nav aria-label="Secciones" className="mb-12 flex flex-wrap gap-2">
    {SECTIONS.map((section) => (
      <a
        key={section.id}
        href={`#${section.id}`}
        className="rounded-pill border border-line bg-surface px-4 py-2 text-sm font-semibold transition-colors hover:border-brand hover:text-brand"
      >
        {section.label}
      </a>
    ))}
  </nav>
);

/** Back link from a community catalog page to the hub. */
export const CommunityBackLink = ({ className = "" }: { className?: string }) => (
  <Link
    href="/comunidad"
    className={`mb-10 inline-flex items-center gap-2 text-sm font-semibold text-ink-muted hover:text-brand ${className}`}
  >
    <ArrowLeft size={16} /> Volver a comunidad
  </Link>
);
