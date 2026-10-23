import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Narrow reading column, used by the articles. */
  narrow?: boolean;
}

/** Shared page width and gutters, used by every page and section. */
export const Container = ({
  children,
  className = "",
  narrow = false,
}: ContainerProps) => (
  <div
    className={`mx-auto w-full px-4 ${narrow ? "max-w-3xl" : "max-w-6xl"} ${className}`}
  >
    {children}
  </div>
);
