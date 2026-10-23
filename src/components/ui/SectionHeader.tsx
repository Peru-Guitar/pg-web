import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  link?: { label: string; href: string };
}

export const SectionHeader = ({
  title,
  subtitle,
  link,
}: SectionHeaderProps) => (
  <div className="mb-6 flex items-end justify-between gap-4">
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      {subtitle && <p className="text-ink-muted">{subtitle}</p>}
    </div>

    {link && (
      <Link
        href={link.href}
        className="flex shrink-0 items-center gap-1 text-sm font-medium text-brand hover:text-brand-strong"
      >
        {link.label} <ArrowRight size={16} />
      </Link>
    )}
  </div>
);
