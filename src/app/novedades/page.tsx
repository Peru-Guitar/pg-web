import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/layout/Container";
import { changelog } from "@/content/changelog";

export const metadata = pageMetadata({
  title: "Novedades",
  description: "Lo nuevo en cada versión de Peru Guitar.",
  path: "/novedades",
  noindex: true,
});

const MONTHS = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
const dayLabel = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} de ${MONTHS[m - 1]} de ${y}`;
};

// Timeline by day; each version of that day in its own card.
export default function ChangelogPage() {
  const days = new Map<string, typeof changelog>();
  for (const entry of changelog) days.set(entry.date, [...(days.get(entry.date) ?? []), entry]);

  return (
    <Container narrow className="py-16">
      <h1 className="mb-2 text-4xl font-extrabold">Novedades</h1>
      <p className="mb-12 text-ink-muted">Lo nuevo en cada versión.</p>

      <ol className="relative flex flex-col gap-8 border-l border-ink/15 pl-6">
        {[...days].map(([date, entries], i) => (
          <li key={date} className="relative">
            <span
              className={`absolute -left-[31px] top-1.5 size-3 rounded-full border-2 ${i === 0 ? "border-brand bg-brand" : "border-ink/30 bg-white"}`}
            />
            <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink-muted">
              {dayLabel(date)}
            </h2>
            <div className="flex flex-col gap-3">
              {entries.map(({ version, notes }) => (
                <div key={version} className="rounded-2xl border border-ink/10 p-5">
                  <span className="mb-3 inline-block rounded-full border border-brand px-2.5 py-0.5 font-mono text-xs text-brand">
                    v{version}
                  </span>
                  <ul className="flex flex-col gap-2">
                    {notes.map((note) => (
                      <li key={note} className="flex gap-3">
                        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </Container>
  );
}
