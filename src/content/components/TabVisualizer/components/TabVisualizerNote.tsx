export type TabVisualizerNoteItem = {
  val: string | number;
  tech?: string | null;
};

type TabVisualizerNoteProps = {
  item: TabVisualizerNoteItem;
  /** The note currently sounding during playback. */
  active?: boolean;
};

export function TabVisualizerNote({ item, active }: TabVisualizerNoteProps) {
  return (
    <div className="relative flex items-center justify-center font-mono text-sm font-black text-zinc-900 leading-none tabular-nums cursor-default z-20 w-full">
      <span
        className={`relative z-20 rounded px-1.5 ${active ? "bg-brand text-white" : "bg-white"}`}
      >
        {item.val}
      </span>

      {item.tech && (
        <span className="absolute left-1/2 top-1/2 -translate-y-1/2 w-full h-full z-30 pointer-events-none">
          {(item.tech === "h" || item.tech === "p") && (
            <>
              <span className="absolute -top-[14px] left-[50%] -translate-x-1/2 text-[9px] font-black text-violet-600 bg-white px-[2px] z-10 uppercase tracking-widest rounded-full leading-none">
                {item.tech}
              </span>
              <svg
                className="absolute -top-[2px] left-0 w-[100%] h-[12px] overflow-visible text-violet-500"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M 15 12 Q 50 -3 85 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                />
              </svg>
            </>
          )}

          {(item.tech === "/" || item.tech === "\\") && (
            <svg
              className="absolute top-1/2 -translate-y-1/2 left-0 w-[100%] h-[14px] overflow-visible text-blue-500"
              viewBox="0 0 100 14"
              preserveAspectRatio="none"
            >
              <line
                x1="20"
                y1={item.tech === "/" ? "14" : "0"}
                x2="80"
                y2={item.tech === "/" ? "0" : "14"}
                stroke="currentColor"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
                strokeLinecap="round"
              />
            </svg>
          )}
        </span>
      )}
    </div>
  );
}
