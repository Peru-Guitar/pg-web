"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Minus, Plus } from "lucide-react";

type Preferences = { theme: "light" | "sepia" | "dark"; size: number };
export function BookReader({
  children,
  chapters,
  bookId,
  title,
}: {
  children: ReactNode;
  chapters: { id: string; title: string }[];
  bookId: string;
  title: string;
}) {
  const [preferences, setPreferences] = useState<Preferences>({
    theme: "light",
    size: 20,
  });
  const [progress, setProgress] = useState(0);
  const [resume, setResume] = useState(0);
  const [active, setActive] = useState(chapters[0]?.id);
  const ready = useRef(false);
  const article = useRef<HTMLDivElement>(null);
  const key = `peruguitar:reader:${bookId}`;
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        const data = JSON.parse(localStorage.getItem(key) || "null");
        if (data) {
          if (
            ["light", "sepia", "dark"].includes(data.theme) &&
            Number.isFinite(data.size)
          )
            setPreferences({
              theme: data.theme,
              size: Math.max(16, Math.min(28, data.size)),
            });
          if (Number.isFinite(data.position))
            setResume(Math.max(0, Math.min(1, data.position)));
        }
      } catch {}
      ready.current = true;
    });
    return () => cancelAnimationFrame(frame);
  }, [key]);
  useEffect(() => {
    const update = () => {
      const el = article.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const range = Math.max(1, el.offsetHeight - window.innerHeight + 100);
      const position = Math.max(
        0,
        Math.min(1, (window.scrollY - top + 100) / range),
      );
      setProgress(Math.round(position * 100));
      const current = chapters
        .filter(
          (c) =>
            (document.getElementById(c.id)?.getBoundingClientRect().top ??
              Infinity) < 180,
        )
        .at(-1);
      setActive(current?.id ?? chapters[0]?.id);
      if (ready.current && window.scrollY >= top - 100)
        try {
          localStorage.setItem(
            key,
            JSON.stringify({ ...preferences, position }),
          );
        } catch {}
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [chapters, key, preferences]);
  useEffect(() => {
    if (ready.current)
      try {
        const previous = JSON.parse(localStorage.getItem(key) || "{}");
        localStorage.setItem(
          key,
          JSON.stringify({ ...previous, ...preferences }),
        );
      } catch {}
  }, [preferences, key]);
  function continueReading() {
    const el = article.current;
    if (!el) return;
    window.scrollTo({
      top:
        el.getBoundingClientRect().top +
        window.scrollY -
        100 +
        resume * Math.max(1, el.offsetHeight - window.innerHeight + 100),
      behavior: "smooth",
    });
    setResume(0);
  }
  return (
    <section className={`book-reader reader-${preferences.theme}`}>
      <div className="reader-toolbar sticky top-14 z-30 border-b px-4 py-3">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3">
          <Link href="/recursos" className="flex items-center gap-2 text-sm">
            <ArrowLeft size={16} /> Biblioteca
          </Link>
          <details className="relative lg:hidden">
            <summary className="flex min-h-10 cursor-pointer list-none items-center gap-2 text-sm">
              <BookOpen size={17} /> Índice
            </summary>
            <nav
              aria-label="Capítulos del ebook"
              className="reader-toolbar absolute right-0 top-full mt-2 w-64 max-w-[85vw] rounded-xl border p-3 shadow-xl"
            >
              {chapters.map((chapter) => (
                <a
                  key={chapter.id}
                  href={`#${chapter.id}`}
                  onClick={(event) => {
                    const menu = event.currentTarget.closest("details");
                    if (menu) menu.open = false;
                  }}
                  className="block rounded-lg px-3 py-3 text-sm hover:text-brand"
                >
                  {chapter.title}
                </a>
              ))}
            </nav>
          </details>
          <div className="flex flex-wrap items-center gap-3">
            <label className="text-xs">
              Tema{" "}
              <select
                aria-label="Tema de lectura"
                value={preferences.theme}
                onChange={(e) =>
                  setPreferences({
                    ...preferences,
                    theme: e.target.value as Preferences["theme"],
                  })
                }
                className="ml-1 rounded border bg-transparent p-1.5"
              >
                <option value="light">Claro</option>
                <option value="sepia">Sepia</option>
                <option value="dark">Oscuro</option>
              </select>
            </label>
            <div className="flex items-center gap-2">
              <button
                className="flex min-h-10 min-w-8 items-center justify-center"
                aria-label="Reducir tamaño de letra"
                disabled={preferences.size <= 16}
                onClick={() =>
                  setPreferences({ ...preferences, size: preferences.size - 2 })
                }
              >
                <Minus size={17} />
              </button>
              <span className="text-xs">{preferences.size}</span>
              <button
                className="flex min-h-10 min-w-8 items-center justify-center"
                aria-label="Aumentar tamaño de letra"
                disabled={preferences.size >= 28}
                onClick={() =>
                  setPreferences({ ...preferences, size: preferences.size + 2 })
                }
              >
                <Plus size={17} />
              </button>
            </div>
            <span className="text-xs" aria-label="Progreso de lectura">
              {progress}%
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:py-16">
        <aside className="hidden lg:block">
          <details open className="lg:sticky lg:top-40">
            <summary className="mb-5 flex cursor-pointer items-center gap-2 text-sm font-bold">
              <BookOpen size={18} /> Índice de capítulos
            </summary>
            <ol className="space-y-3">
              {chapters.map((c, i) => (
                <li key={c.id}>
                  <a
                    href={`#${c.id}`}
                    aria-current={active === c.id ? "location" : undefined}
                    className={`block border-l-2 py-1 pl-3 text-sm ${active === c.id ? "border-brand font-bold" : "border-transparent opacity-70"}`}
                  >
                    <span className="mr-2 text-xs opacity-60">0{i + 1}</span>
                    {c.title}
                  </a>
                </li>
              ))}
            </ol>
          </details>
        </aside>
        <div className="min-w-0 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-brand">
            Biblioteca PeruGuitar · Ebook gratuito
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>
          {resume > 0.01 && resume < 0.99 && (
            <button
              onClick={continueReading}
              className="mt-6 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white"
            >
              Continuar donde lo dejé · {Math.round(resume * 100)}%
            </button>
          )}
          <div
            ref={article}
            className="reader-content prose mt-10 max-w-none prose-headings:scroll-mt-40"
            style={{ fontSize: preferences.size }}
          >
            {children}
          </div>
          <Link
            href="/recursos"
            className="mt-12 inline-flex items-center gap-2 text-sm font-bold"
          >
            <ArrowLeft size={16} /> Volver a los recursos
          </Link>
        </div>
      </div>
    </section>
  );
}
