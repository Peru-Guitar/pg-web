import { PODCAST_EPISODES } from "@/content/media";
import { SpotifyEpisode } from "./SpotifyEpisode";

/** Podcast episodes, newest first. `limit` keeps only the latest ones. */
export const PodcastEpisodes = ({ limit }: { limit?: number }) => {
  const episodes = [...PODCAST_EPISODES].reverse().slice(0, limit);
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {episodes.map((episode) => (
        <SpotifyEpisode
          key={episode.id}
          id={episode.id}
          title={episode.title}
          number={PODCAST_EPISODES.indexOf(episode) + 1}
        />
      ))}
    </div>
  );
};
