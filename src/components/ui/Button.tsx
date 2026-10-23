import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  external?: boolean;
  /** Renders a plain anchor that downloads the file instead of navigating. */
  download?: boolean;
}

const VARIANTS = {
  primary: "bg-brand text-white hover:bg-brand-strong",
  outline: "border border-current hover:bg-white/10",
};

export const Button = ({
  href,
  children,
  variant = "primary",
  external,
  download,
}: ButtonProps) => {
  const className = `inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${VARIANTS[variant]}`;

  if (download) {
    return (
      <a href={href} download className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {children}
    </Link>
  );
};
