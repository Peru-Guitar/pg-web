import { MangaBand } from "@/components/community/MangaBand";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Manga",
  description:
    "Los mangas de la comunidad Peru Guitar: historias de guitarristas contadas en viñetas.",
  path: "/comunidad/manga",
});

export default function MangaPage() {
  return <MangaBand page />;
}
