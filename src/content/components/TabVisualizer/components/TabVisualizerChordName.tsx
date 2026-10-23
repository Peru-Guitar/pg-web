type TabVisualizerChordNameProps = {
  chordName: string;
};

export function TabVisualizerChordName({
  chordName,
}: TabVisualizerChordNameProps) {
  return (
    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-700 px-2 py-0.5 border border-zinc-200 shadow-sm rounded-md text-[11px] font-bold text-zinc-100 tracking-wider whitespace-nowrap z-50">
      {chordName}
    </div>
  );
}
