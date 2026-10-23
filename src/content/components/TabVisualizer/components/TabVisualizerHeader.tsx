import { ReactNode } from "react";

type TabVisualizerHeaderProps = {
  title: string;
  /** Controls shown on the right (playback). */
  children?: ReactNode;
};

export function TabVisualizerHeader({
  title,
  children,
}: TabVisualizerHeaderProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-night-line bg-night px-6 py-3">
      <div className="font-bold text-on-night">{title}</div>
      {children}
    </div>
  );
}
