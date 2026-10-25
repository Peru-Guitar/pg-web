/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useMemo, useRef } from "react";
import { TabVisualizerHeader } from "./components/TabVisualizerHeader";
import { TabVisualizerNote } from "./components/TabVisualizerNote";
import { TabVisualizerChordName } from "./components/TabVisualizerChordName";
import { TabVisualizerControls } from "./components/TabVisualizerControls";
import { TabStep, TabStepNote, useTabPlayback } from "./useTabPlayback";

interface TabVisualizerProps {
  notes: string[];
  title?: string;
  maxNotesPerLine?: number;
  maxNotesPerBar?: number | null;
  maxVisibleLines?: number;
  /** Makes the tab playable at this tempo. */
  bpm?: number;
  /** Steps per beat: 1 = quarter notes, 2 = eighth notes, 4 = sixteenth notes. */
  notesPerBeat?: number;
}

const STRINGS = ["e", "B", "G", "D", "A", "E"];
const STRING_MAP: Record<string, string> = {
  "1": "e",
  "2": "B",
  "3": "G",
  "4": "D",
  "5": "A",
  "6": "E",
};

export const TabVisualizer = ({
  notes,
  title = "Lick",
  maxNotesPerLine = 12,
  maxNotesPerBar = 4,
  maxVisibleLines = 4,
  bpm,
  notesPerBeat = 2,
}: TabVisualizerProps) => {
  const LINE_HEIGHT = 215;

  const allSystems = useMemo(() => {
    type Cell = { val: string; tech: string | null; chordName?: string | null };
    const emptyTimeline = (): Record<string, Cell[]> => ({
      e: [],
      B: [],
      G: [],
      D: [],
      A: [],
      E: [],
    });

    // Each array item, and each blank line inside one, is a block that starts
    // a new line (as in Fret Quest); long blocks still wrap at maxNotesPerLine.
    const blocks: Record<string, Cell[]>[] = [];
    let timeline = emptyTimeline();
    const flush = () => {
      if (timeline["e"].length) blocks.push(timeline);
      timeline = emptyTimeline();
    };

    notes.forEach((block) => {
      flush();
      block
        .trim()
        .split("\n")
        .forEach((line) => {
          const trimmed = line.trim();
          if (trimmed === "") return flush();
          if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
            let content = trimmed.slice(1, -1).trim();
            let cName = null;
            if (content.includes("|")) {
              const parts = content.split("|");
              content = parts[0].trim();
              cName = parts[1].trim();
            }
            STRINGS.forEach((s) =>
              timeline[s].push({
                val: "-",
                tech: null,
                chordName: s === "e" ? cName : null,
              }),
            );
            const lastIdx = timeline["e"].length - 1;
            content.split(/\s+/).forEach((n) => {
              const [sNum, val] = n.split(".");
              if (STRING_MAP[sNum])
                timeline[STRING_MAP[sNum]][lastIdx].val = val;
            });
          } else if (trimmed.includes(":")) {
            const [sNum, seq] = trimmed.split(":");
            const sName = STRING_MAP[sNum.trim()];
            if (sName) {
              seq
                .trim()
                .split("-")
                .forEach((step) => {
                  if (step === "") {
                    STRINGS.forEach((s) =>
                      timeline[s].push({ val: "-", tech: null }),
                    );
                    return;
                  }
                  const parts = step.split(/([hpHP/\\])/);
                  if (parts.length === 1) {
                    STRINGS.forEach((s) =>
                      timeline[s].push(
                        s === sName
                          ? { val: step, tech: null }
                          : { val: "-", tech: null },
                      ),
                    );
                  } else {
                    for (let i = 0; i < parts.length; i += 2) {
                      const noteVal = parts[i];
                      const techVal =
                        i + 1 < parts.length
                          ? parts[i + 1].toLowerCase()
                          : null;
                      STRINGS.forEach((s) =>
                        timeline[s].push(
                          s === sName
                            ? { val: noteVal, tech: techVal }
                            : { val: "-", tech: null },
                        ),
                      );
                    }
                  }
                });
            }
          }
        });
    });

    flush();

    const systems: Record<string, any[]>[] = [];
    blocks.forEach((block) => {
      for (let i = 0; i < block["e"].length; i += maxNotesPerLine) {
        const chunk = emptyTimeline();
        STRINGS.forEach(
          (s) => (chunk[s] = block[s].slice(i, i + maxNotesPerLine)),
        );
        systems.push(chunk);
      }
    });
    return systems;
  }, [notes, maxNotesPerLine]);

  // One playable step per column; a column can hold several strings (chords).
  // `<12>` is a natural harmonic; `/` and `\\` slide to the next note on that string.
  const steps = useMemo<TabStep[]>(() => {
    const columns = allSystems.flatMap((system) =>
      system["e"].map((_: unknown, i: number) =>
        STRINGS.map(
          (s) => system[s][i] as { val: string; tech: string | null },
        ),
      ),
    );
    const fretOf = (val: string) => parseInt(val.replace(/[<>]/g, ""), 10);
    const result: TabStep[] = columns.map(() => []);
    columns.forEach((column, c) =>
      column.forEach((cell, index) => {
        const fret = fretOf(cell.val);
        if (Number.isNaN(fret)) return;
        const note: TabStepNote = { string: index + 1, fret };
        if (/^<\d+>$/.test(cell.val)) note.harmonic = true;
        else if (cell.tech === "/" || cell.tech === "\\") {
          const target = columns.findIndex(
            (col, k) => k > c && !Number.isNaN(fretOf(col[index].val)),
          );
          if (target > 0 && !/^</.test(columns[target][index].val)) {
            note.slideTo = fretOf(columns[target][index].val);
            note.slideSteps = target - c;
          }
        }
        result[c].push(note);
      }),
    );
    result.forEach((step) =>
      step.forEach((n) => {
        if (n.slideTo === undefined) return;
        const target = result[result.indexOf(step) + n.slideSteps!];
        const landing = target.find((t) => t.string === n.string);
        if (landing) landing.slid = true;
      }),
    );
    return result;
  }, [allSystems]);
  const playback = useTabPlayback(steps, bpm ?? 80, notesPerBeat);

  // First step of each line: lines can have different lengths.
  const offsets = useMemo(() => {
    let total = 0;
    return allSystems.map((system) => {
      const start = total;
      total += system["e"].length;
      return start;
    });
  }, [allSystems]);

  // Keeps the sounding line in view inside the tab, without moving the page.
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (playback.step === null) return;
    const line = offsets.findLastIndex((start) => start <= playback.step!);
    const scroller = scrollRef.current;
    const el = scroller?.querySelector<HTMLElement>(`[data-line="${line}"]`);
    if (!scroller || !el) return;
    const top = el.offsetTop;
    if (
      top < scroller.scrollTop ||
      top + el.offsetHeight > scroller.scrollTop + scroller.clientHeight
    ) {
      scroller.scrollTop = top - 24;
    }
  }, [playback.step, offsets]);

  return (
    <div className="my-8 w-full border border-zinc-800 rounded-xl overflow-hidden">
      <TabVisualizerHeader title={title}>
        {bpm !== undefined && <TabVisualizerControls playback={playback} />}
      </TabVisualizerHeader>
      {playback.audioError && (
        <p className="bg-brand-soft px-6 py-2 text-sm text-brand-strong">
          No se pudo cargar el sonido; la tablatura sigue funcionando.
        </p>
      )}

      <div
        ref={scrollRef}
        className="relative p-6 md:p-10 flex flex-col gap-10 bg-white overflow-x-auto overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-200"
        style={{ maxHeight: `${maxVisibleLines * LINE_HEIGHT}px` }}
      >
        {allSystems.map((system, idx) => (
          <div
            key={idx}
            data-line={idx}
            className="flex flex-col w-full min-w-200 md:min-w-full relative mt-4"
          >
            <div
              className="absolute inset-y-0 left-8 right-0 grid pointer-events-none z-0"
              style={{
                gridTemplateColumns: `repeat(${maxNotesPerLine}, minmax(0, 1fr))`,
              }}
            >
              {system["e"].map((_, i) => (
                <div key={i} className="relative flex justify-end">
                  {maxNotesPerBar !== null &&
                    (i + 1) % maxNotesPerBar === 0 &&
                    i !== system["e"].length - 1 && (
                      <div className="h-full w-[2px] bg-zinc-200 absolute right-0" />
                    )}
                </div>
              ))}
            </div>

            {STRINGS.map((s) => (
              <div
                key={s}
                className="relative flex items-center h-6 shrink-0 w-full group"
              >
                <div className="w-8 text-zinc-400 font-mono text-xs font-black shrink-0 select-none border-r border-zinc-100 mr-2">
                  {s}
                </div>
                <div className="relative flex-1 flex items-center h-full px-2">
                  <div className="absolute inset-x-0 h-[1.5px] bg-zinc-300 pointer-events-none" />
                  <div
                    className="relative z-10 grid w-full"
                    style={{
                      gridTemplateColumns: `repeat(${maxNotesPerLine}, minmax(0, 1fr))`,
                    }}
                  >
                    {system[s].map((item, i) => (
                      <div
                        key={i}
                        className="flex justify-center items-center relative"
                      >
                        {s === "e" && item.chordName && (
                          <TabVisualizerChordName chordName={item.chordName} />
                        )}
                        {item.val !== "-" ? (
                          <TabVisualizerNote
                            item={item}
                            active={playback.step === offsets[idx] + i}
                          />
                        ) : (
                          <div className="h-6 w-6 invisible" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
