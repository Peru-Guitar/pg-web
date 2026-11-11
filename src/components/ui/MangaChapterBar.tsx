"use client";

import { useEffect, useState } from "react";
import type { MangaChapter } from "@/content/manga";

/** Sticky reader bar: reading progress plus a chapter switcher that tracks the current chapter. */
export const MangaChapterBar = ({ chapters }: { chapters: MangaChapter[] }) => {
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const reader = document.getElementById("lector");
    const onScroll = () => {
      if (!reader) return;
      const rect = reader.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      setProgress(total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0);
      // Current chapter = last one whose divider has scrolled past the middle of the screen.
      let active = 0;
      for (const { number } of chapters) {
        const el = document.getElementById(`capitulo-${number}`);
        if (el && el.getBoundingClientRect().top < window.innerHeight / 2) active = number;
      }
      setCurrent(active);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [chapters]);

  return (
    <nav
      aria-label="Capítulos"
      className="sticky top-0 z-40 border-b border-white/10 bg-black/85 backdrop-blur"
    >
      <div className="mx-auto flex max-w-3xl items-center gap-1 overflow-x-auto px-3 py-2">
        <span className="mr-2 shrink-0 text-xs font-bold uppercase tracking-widest text-on-night-muted">
          Cap.
        </span>
        {chapters.map(({ number, title }) => (
          <a
            key={number}
            href={`#capitulo-${number}`}
            title={title}
            aria-current={current === number ? "location" : undefined}
            className={`flex size-9 shrink-0 items-center justify-center rounded-md text-sm font-extrabold transition-colors ${
              current === number
                ? "bg-brand text-white"
                : "text-on-night-muted hover:bg-white/10 hover:text-on-night"
            }`}
          >
            {number}
          </a>
        ))}
        {current > 0 && (
          <span className="ml-auto hidden shrink-0 truncate pl-3 text-sm font-semibold text-on-night sm:block">
            {chapters[current - 1].title}
          </span>
        )}
      </div>
      <div className="h-0.5 bg-white/5">
        <div
          className="h-full origin-left bg-brand transition-transform duration-150"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </nav>
  );
};
