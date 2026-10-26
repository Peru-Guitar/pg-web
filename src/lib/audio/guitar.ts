/**
 * Distorted electric guitar sound for playable tabs (ported from Fret Quest).
 *
 * Tone.js is imported on the first play and the samples are downloaded once
 * from the tonejs-instruments collection (clean electric guitar). Only a few
 * notes are loaded; Tone.js pitches the rest from the nearest sample. The
 * distortion is added with effects.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Tone = any;

const SAMPLE_BASE =
  "https://nbrosowsky.github.io/tonejs-instruments/samples/guitar-electric/";
// The collection writes sharps with "s": Fs3 = F#3.
const SAMPLES = ["E2", "A2", "C3", "F#3", "C4", "F#4", "C5", "A5"];

// Standard tuning in MIDI, from string 1 (high E) to 6 (low E).
const OPEN_STRINGS = [64, 59, 55, 50, 45, 40];

let ctx: AudioContext | null = null;
let tone: Tone = null;
let sampler: Tone = null;
/** The same samples as raw buffers: a slide plays one while changing its speed. */
let buffers: Tone = null;
/** Harmonics: the same guitar without lows (thin and bright) plus a bit of pure tone. */
let harmonics: Tone = null;
let bell: Tone = null;
/** Distortion input: slides connect here to sound like the rest. */
let drive: Tone = null;
/** Slides currently sounding, to cut them on stop. */
const slides = new Set<AudioBufferSourceNode>();
/** Shared output: lets `silence` cut everything at once. */
let master: Tone = null;
let loading: Promise<void> | null = null;

function audio(): AudioContext {
  ctx ??= new AudioContext();
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

/**
 * Unlocks audio inside the click, before any `await`: iOS only enables sound
 * at that moment. Also asks to play even with the iPhone in silent mode.
 */
function unlock(): void {
  const session = (navigator as Navigator & { audioSession?: { type: string } })
    .audioSession;
  if (session) session.type = "playback";
  const ac = audio();
  // A silent buffer finishes unlocking audio on older Safari.
  const source = ac.createBufferSource();
  source.buffer = ac.createBuffer(1, 1, 22050);
  source.connect(ac.destination);
  source.start();
}

/** Loads Tone.js and the samples. Must be called from a click (browser rule). */
export function prepare(): Promise<void> {
  unlock();
  if (tone && master) {
    // The browser suspends audio when switching tabs or locking the phone: resume on every click.
    if (tone.getContext().state !== "running") void tone.start();
    // Right after `silence` the output is still at 0: bring it back so the first notes aren't lost.
    const now = tone.now();
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(1, now);
  }
  loading ??= (async () => {
    tone = await import("tone");
    // Reuse the context unlocked in the click (the async import loses the gesture on iOS).
    tone.setContext(audio());
    await tone.start();
    master = new tone.Gain(1).toDestination();
    // Distortion, then a filter that trims harsh highs, like an amp speaker.
    const cabinet = new tone.Filter(3800, "lowpass").connect(master);
    drive = new tone.Distortion({
      distortion: 0.9,
      oversample: "4x",
    }).connect(cabinet);
    sampler = new tone.Sampler({
      urls: Object.fromEntries(
        SAMPLES.map((n) => [n, `${n.replace("#", "s")}.mp3`]),
      ),
      baseUrl: SAMPLE_BASE,
      // No reverb and a short release: each note fades before the next one.
      release: 0.25,
      volume: -13,
    }).connect(drive);
    buffers = new tone.ToneAudioBuffers({
      urls: Object.fromEntries(
        SAMPLES.map((n) => [n, `${n.replace("#", "s")}.mp3`]),
      ),
      baseUrl: SAMPLE_BASE,
    });
    const thin = new tone.Filter(1400, "highpass").connect(drive);
    harmonics = new tone.Sampler({
      urls: Object.fromEntries(
        SAMPLES.map((n) => [n, `${n.replace("#", "s")}.mp3`]),
      ),
      baseUrl: SAMPLE_BASE,
      release: 0.8,
      volume: -6,
    }).connect(thin);
    bell = new tone.PolySynth(tone.Synth, {
      oscillator: { type: "sine" },
      envelope: { attack: 0.002, decay: 1.2, sustain: 0, release: 0.4 },
      volume: -26,
    }).connect(cabinet);
    await tone.loaded();
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

/** Semitones a natural harmonic sounds above the open string, by fret. */
const HARMONICS: Record<number, number> = {
  3: 31,
  4: 28,
  5: 24,
  7: 19,
  9: 28,
  12: 12,
  16: 28,
  19: 19,
  24: 24,
};

/** Natural harmonic over `fret` (5, 7, 12…). Other frets sound an octave above the fretted note. */
export function harmonic(
  string: number,
  fret: number,
  durationSec: number,
): void {
  if (!harmonics) return;
  const open = OPEN_STRINGS[string - 1];
  if (open === undefined) return;
  const frequency = tone
    .Frequency(open + (HARMONICS[fret] ?? fret + 12), "midi")
    .toFrequency();
  const length = Math.max(0.6, durationSec);
  harmonics.triggerAttackRelease(frequency, length, tone.now(), 0.9);
  bell.triggerAttackRelease(frequency, length, tone.now(), 0.7);
}

/**
 * Slide from `fromFret` to `toFret` (up or down) with a single attack: the
 * nearest sample plays and its speed ramps to the target note. `holdSec` is how
 * long the first note lasts before sliding and `totalSec` the whole length,
 * including the target note.
 */
export function slide(
  string: number,
  fromFret: number,
  toFret: number,
  holdSec: number,
  totalSec: number,
): void {
  if (!buffers?.loaded || !drive) return;
  const open = OPEN_STRINGS[string - 1];
  if (open === undefined) return;
  const from = open + fromFret;
  const midis = SAMPLES.map((n) => tone.Frequency(n).toMidi() as number);
  const nearest = midis.reduce((a, b) =>
    Math.abs(b - from) < Math.abs(a - from) ? b : a,
  );
  const rate = (midi: number) => Math.pow(2, (midi - nearest) / 12);

  const ac = audio();
  const src = ac.createBufferSource();
  src.buffer = buffers.get(SAMPLES[midis.indexOf(nearest)]).get();
  const gain = ac.createGain();
  src.connect(gain);
  tone.connect(gain, drive);

  const t = ac.currentTime;
  // A quick glide, like a real slide: a bit longer the farther it goes.
  const glide = Math.min(
    0.25,
    0.04 + Math.abs(toFret - fromFret) * 0.025,
    Math.max(0.03, totalSec - holdSec),
  );
  const end = t + Math.max(holdSec + glide + 0.1, totalSec);
  src.playbackRate.setValueAtTime(rate(from), t);
  src.playbackRate.setValueAtTime(rate(from), t + holdSec);
  src.playbackRate.exponentialRampToValueAtTime(
    rate(open + toFret),
    t + holdSec + glide,
  );
  // Same level as the sampler (-13 dB, velocity 0.85) and a short fade, no click.
  gain.gain.setValueAtTime(0.19, t);
  gain.gain.setValueAtTime(0.19, end - 0.08);
  gain.gain.linearRampToValueAtTime(0, end);
  src.start(t);
  src.stop(end);
  slides.add(src);
  src.onended = () => slides.delete(src);
}

/**
 * Cuts the sound immediately (on stop). Besides releasing the notes it drops
 * the output to 0, since Tone schedules events slightly ahead; the output comes
 * back shortly after, ready for the next play.
 */
export function silence(): void {
  if (!tone || !master) return;
  const now = tone.now();
  sampler?.releaseAll(now);
  harmonics?.releaseAll(now);
  bell?.releaseAll(now);
  for (const src of slides) src.stop();
  slides.clear();
  master.gain.cancelScheduledValues(now);
  master.gain.setValueAtTime(0, now);
  master.gain.setValueAtTime(1, now + 0.25);
}
