/* eslint-disable @next/next/no-img-element */
import React from "react";

interface ImageVisualizerProps {
  src: string;
  alt: string;
  caption?: string;
}

export const ImageVisualizer: React.FC<ImageVisualizerProps> = ({
  src,
  alt,
  caption,
}) => {
  return (
    <figure className="flex justify-center w-full my-10">
      <div className="max-w-fit overflow-hidden border border-zinc-800 bg-zinc-900 rounded-xl shadow-xl">
        <img src={src} alt={alt} className="block w-full h-auto max-w-full" />

        {caption && (
          <figcaption className="px-4 py-2.5 border-t border-zinc-800 text-center text-[11px] uppercase tracking-wider font-medium text-zinc-400">
            {caption}
          </figcaption>
        )}
      </div>
    </figure>
  );
};
