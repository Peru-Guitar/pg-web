/**
 * Guitar sound for playable tabs (same approach as Fret Quest).
 *
 * Tone.js is imported on the first play and the samples are downloaded once
 * from the tonejs-instruments collection. Only a few notes are loaded; Tone.js
 * pitches the rest from the nearest sample.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Tone = any;

const SAMPLE_BASE =
  "https://nbrosowsky.github.io/tonejs-instruments/samples/guitar-acoustic/";
const SAMPLES = ["E2", "A2", "D3", "G3", "B3", "E4", "A4", "D5"];

// Standard tuning in MIDI, from string 1 (high E) to 6 (low E).
const OPEN_STRINGS = [64, 59, 55, 50, 45, 40];

let tone: Tone = null;
let sampler: Tone = null;
let loading: Promise<void> | null = null;

/** Loads Tone.js and the samples. Must be called from a click (browser rule). */
export function prepare(): Promise<void> {
  loading ??= (async () => {
    tone = await import("tone");
    await tone.start();
    const reverb = new tone.Reverb({ decay: 1.4, wet: 0.15 }).toDestination();
    sampler = new tone.Sampler({
      urls: Object.fromEntries(SAMPLES.map((n) => [n, `${n}.mp3`])),
      baseUrl: SAMPLE_BASE,
      release: 1,
      volume: -4,
    }).connect(reverb);
    await Promise.all([reverb.ready, tone.loaded()]);
  })().catch((error) => {
    loading = null; // allows retrying
    throw error;
  });
  return loading;
}

/** Plays a note. `string`: 1 (high) to 6 (low). */
export function play(string: number, fret: number, durationSec: number): void {
  if (!sampler) return;
  const open = OPEN_STRINGS[string - 1];
  if (open === undefined) return;
  const frequency = tone.Frequency(open + fret, "midi").toFrequency();
  sampler.triggerAttackRelease(
    frequency,
    Math.max(0.15, durationSec),
    tone.now(),
    0.85,
  );
}

/** Cuts the sound immediately (on stop). */
export function silence(): void {
  sampler?.releaseAll();
}
