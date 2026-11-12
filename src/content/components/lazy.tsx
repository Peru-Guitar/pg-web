"use client";

import dynamic from "next/dynamic";

// Post-only players, split into their own chunks so pages that merely list
// posts (home, blog, community) don't ship them. Still server-rendered.
export const AudioPlayer = dynamic(() =>
  import("./AudioPlayer").then((m) => m.AudioPlayer),
);

export const TabVisualizer = dynamic(() =>
  import("./TabVisualizer/TabVisualizer").then((m) => m.TabVisualizer),
);
