import { Clock } from "lucide-react";

interface ChallengeVideoProps {
  id: string;
  title: string;
  start: string;
  end: string;
}

/** Challenge video and the part to learn, as a single card. */
export const ChallengeVideo = ({ id, title, start, end }: ChallengeVideoProps) => (
  <div className="my-8 overflow-hidden rounded-card border border-night-line bg-night text-on-night">
    <iframe
      title={title}
      loading="lazy"
      src={`https://www.youtube.com/embed/${id}?rel=0&iv_load_policy=3`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="aspect-video w-full border-0"
    />
    <p className="flex items-center justify-center gap-2 p-4 text-center text-sm">
      <Clock size={18} className="shrink-0 text-accent" aria-hidden />
      <span>
        Empieza en el <strong>{start}</strong> y termina aproximadamente en el{" "}
        <strong>{end}</strong> del video.
      </span>
    </p>
  </div>
);
