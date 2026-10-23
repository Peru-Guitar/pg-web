import { ReactNode } from "react";

export type ResourceType = "ebook" | "audio";

interface ResourceCardProps {
  id: string;
  type: ResourceType;
  title: string;
  description: string;
  /** Fills a fixed 16:9 slot on the left so every card lines up. */
  media: ReactNode;
  specs: { label: string; value: string }[];
  /** Extra content between the specs and the actions. */
  children?: ReactNode;
  actions: ReactNode;
}

/** Shared card for every kind of free resource. */
export const ResourceCard = ({
  id,
  title,
  description,
  media,
  specs,
  children,
  actions,
}: ResourceCardProps) => (
  <article
    id={id}
    className="grid scroll-mt-24 overflow-hidden rounded-card border border-line bg-surface md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
  >
    <div className="aspect-video self-start overflow-hidden bg-night md:m-6 md:rounded-card">
      {media}
    </div>

    <div className="flex flex-col gap-4 p-6 md:pl-0">
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-ink-muted">{description}</p>
      </div>

      <dl className="flex flex-wrap gap-x-8 gap-y-3 border-y border-line py-4">
        {specs.map((spec) => (
          <div key={spec.label}>
            <dt className="text-xs uppercase text-ink-muted">{spec.label}</dt>
            <dd className="font-semibold">{spec.value}</dd>
          </div>
        ))}
      </dl>

      {children}

      <div className="mt-auto flex flex-wrap gap-3 pt-2">{actions}</div>
    </div>
  </article>
);
