import { Minus, Pause, Play, Plus, RotateCcw } from "lucide-react";
import { MAX_BPM, MIN_BPM, useTabPlayback } from "../useTabPlayback";

type Playback = ReturnType<typeof useTabPlayback>;

const ICON_BUTTON =
  "grid size-9 place-items-center rounded-full text-on-night-muted hover:bg-night-line hover:text-on-night disabled:opacity-40";

export function TabVisualizerControls({ playback }: { playback: Playback }) {
  const { bpm, setBpm, playing, loading, step, toggle, restart } = playback;

  const label = loading
    ? "Cargando…"
    : playing
      ? "Pausar"
      : step === null
        ? "Escuchar"
        : "Continuar";

  return (
    <div className="flex flex-wrap items-center gap-1">
      <button
        type="button"
        onClick={toggle}
        aria-pressed={playing}
        className={`inline-flex min-h-9 items-center gap-2 rounded-full bg-brand px-4 text-sm font-bold text-white hover:bg-brand-strong ${loading ? "animate-pulse" : ""}`}
      >
        {playing ? (
          <Pause className="size-4 fill-current" aria-hidden />
        ) : (
          <Play className="size-4 fill-current" aria-hidden />
        )}
        {label}
      </button>

      <button
        type="button"
        onClick={restart}
        disabled={step === null}
        className={ICON_BUTTON}
        aria-label="Volver al inicio"
      >
        <RotateCcw className="size-4" />
      </button>

      <span className="ml-2 flex items-center" role="group" aria-label="Tempo">
        <button
          type="button"
          onClick={() => setBpm(bpm - 10)}
          disabled={bpm <= MIN_BPM}
          className={ICON_BUTTON}
          aria-label="Más lento"
        >
          <Minus className="size-4" />
        </button>
        <span className="w-16 text-center font-mono text-xs font-bold text-on-night">
          {bpm} BPM
        </span>
        <button
          type="button"
          onClick={() => setBpm(bpm + 10)}
          disabled={bpm >= MAX_BPM}
          className={ICON_BUTTON}
          aria-label="Más rápido"
        >
          <Plus className="size-4" />
        </button>
      </span>
    </div>
  );
}
