interface YouTubePlayerProps {
  id: string;
}

export const YouTubePlayer = ({ id }: YouTubePlayerProps) => {
  if (!id) return null;

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-white/5 bg-zinc-900 shadow-2xl">
      <div className="aspect-video w-full">
        <iframe
          title="Reproductor de video de YouTube"
          loading="lazy"
          src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>
    </div>
  );
};
