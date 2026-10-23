import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HubApp } from "@/content/apps";

export const AppCard = ({ app }: { app: HubApp }) => (
  <Link
    href={app.href}
    target={app.external ? "_blank" : undefined}
    rel={app.external ? "noopener noreferrer" : undefined}
    className="group flex flex-col gap-3 rounded-card bg-night p-6 text-on-night"
  >
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-bold">{app.name}</h3>
      <ArrowRight className="transition-transform group-hover:translate-x-1" />
    </div>

    <p className="text-on-night-muted">{app.description}</p>

    <ul className="mt-auto flex flex-wrap gap-2">
      {app.tags.map((tag) => (
        <li
          key={tag}
          className="rounded-pill bg-night-surface px-3 py-1 text-xs"
        >
          {tag}
        </li>
      ))}
    </ul>
  </Link>
);
