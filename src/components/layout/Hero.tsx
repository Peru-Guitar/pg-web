import { ReactNode } from "react";
import { Container } from "./Container";

interface HeroProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  /** Optional background image (path under /public). */
  image?: string;
  /** Extra content below the description (buttons, meta). */
  children?: ReactNode;
  /** Match the narrow reading column of the articles. */
  narrow?: boolean;
}

/** Dark page header shared by the home and the articles. */
export const Hero = ({
  eyebrow,
  title,
  description,
  image,
  children,
  narrow = false,
}: HeroProps) => (
  <section
    className="relative bg-night bg-cover bg-center text-on-night"
    style={image ? { backgroundImage: `url(${image})` } : undefined}
  >
    {image && <div className="absolute inset-0 bg-night/75" />}

    <Container narrow={narrow} className="relative pb-20 pt-36 md:pb-28 md:pt-44">
      {eyebrow && (
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
          {eyebrow}
        </div>
      )}
      <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-6 max-w-2xl text-lg text-on-night-muted">
          {description}
        </p>
      )}
      {children && <div className="mt-8">{children}</div>}
    </Container>
  </section>
);
