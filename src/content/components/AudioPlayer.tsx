"use client";

import React, { useState, useRef } from "react";

interface AudioPlayerProps {
  title: string;
  source: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ title, source }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedData = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 my-4 bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg">
      <audio
        ref={audioRef}
        src={source}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
        onEnded={() => setIsPlaying(false)}
        preload="auto"
      />

      <button
        onClick={togglePlay}
        className="shrink-0 flex items-center justify-center w-12 h-12 transition-all bg-white rounded-full hover:scale-105 active:scale-95 text-zinc-900"
      >
        {isPlaying ? (
          <span className="text-xl">Ⅱ</span>
        ) : (
          <span className="ml-1 text-xl">▶</span>
        )}
      </button>

      <div className="flex flex-col flex-1 min-w-0">
        <strong className="text-zinc-100 font-medium leading-none truncate mb-3">
          {title}
        </strong>
        <input
          type="range"
          min="0"
          max={duration || 1}
          step="0.01"
          value={currentTime}
          onChange={handleSliderChange}
          className="w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-white"
        />
      </div>
    </div>
  );
};
