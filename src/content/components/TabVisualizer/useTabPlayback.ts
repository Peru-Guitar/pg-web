"use client";

import { useEffect, useRef, useState } from "react";
import {
  harmonic,
  play as playNote,
  prepare,
  silence,
  slide,
} from "@/lib/audio/guitar";

/** A note on one step: string (1-6) and fret. */
export type TabStepNote = {
  string: number;
  fret: number;
  /** Natural harmonic (`<12>`). */
  harmonic?: boolean;
  /** Slide: fret this note glides to, and how many steps later it lands. */
  slideTo?: number;
  slideSteps?: number;
  /** Target of a slide: it sounds through the glide, without its own attack. */
  slid?: boolean;
};

/** Notes that sound together on one step. */
export type TabStep = TabStepNote[];

export const MIN_BPM = 40;
export const MAX_BPM = 240;

/**
 * Plays tab steps with a sampled guitar, one step per `1 / notesPerBeat` beat.
 * Ported from the Fret Quest TabPlayer.
 */
export function useTabPlayback(
  steps: TabStep[],
  initialBpm: number,
  notesPerBeat: number,
) {
  const [bpm, setBpm] = useState(initialBpm);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [step, setStep] = useState<number | null>(null);

  // Playback always reads the latest tempo without restarting.
  const bpmRef = useRef(bpm);
  const timer = useRef<number | undefined>(undefined);
  const active = useRef(false);
  useEffect(() => {
    bpmRef.current = bpm;
  }, [bpm]);

  const stepDuration = () => 60 / bpmRef.current / notesPerBeat;
  const sound = (i: number) =>
    steps[i]?.forEach((n) => {
      const d = stepDuration();
      if (n.harmonic) harmonic(n.string, n.fret, d * 4);
      else if (n.slideTo !== undefined) {
        // The first note holds until the target; it glides at the end and the target rings one step.
        const k = n.slideSteps ?? 1;
        slide(n.string, n.fret, n.slideTo, k * d * 0.6, (k + 1) * d);
      } else if (!n.slid) playNote(n.string, n.fret, d);
    });

  function stop() {
    window.clearTimeout(timer.current);
    active.current = false;
    silence();
    setPlaying(false);
    setLoading(false);
  }

  function advance(i: number) {
    if (!active.current) return;
    if (i >= steps.length) {
      stop();
      setStep(null);
      return;
    }
    sound(i);
    setStep(i);
    timer.current = window.setTimeout(
      () => advance(i + 1),
      stepDuration() * 1000,
    );
  }

  async function toggle() {
    if (active.current) return stop();
    active.current = true;
    setPlaying(true);
    setLoading(true);
    // First time: downloads Tone.js and the samples. On failure the tab still works.
    const ok = await prepare().then(
      () => true,
      () => false,
    );
    setLoading(false);
    if (!ok) setAudioError(true);
    // Resumes after the last note heard, or starts from the beginning.
    advance(step === null ? 0 : step + 1);
  }

  /** Goes back to the first note; keeps playing if it was playing. */
  function restart() {
    window.clearTimeout(timer.current);
    silence();
    setStep(null);
    if (active.current) advance(0);
  }

  // Stops the sound when the tab leaves the page.
  useEffect(
    () => () => {
      window.clearTimeout(timer.current);
      active.current = false;
      silence();
    },
    [],
  );

  return {
    bpm,
    setBpm: (value: number) =>
      setBpm(Math.min(MAX_BPM, Math.max(MIN_BPM, value))),
    playing,
    loading,
    audioError,
    step,
    toggle,
    restart,
  };
}
