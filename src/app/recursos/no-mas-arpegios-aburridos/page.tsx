import { pageMetadata } from "@/lib/metadata";

import {
  CHAPTERS,
  NoMasArpegiosAburridos,
} from "@/content/books/no-mas-arpegios-aburridos";
import { BookReader } from "@/components/reader/BookReader";

export const metadata = pageMetadata({
  title: "¡No Más Arpegios Aburridos!",
  description: "Guía gratuita para expandir tus arpegios con tensiones: séptimas, oncenas y arpegios modales, con tablaturas.",
  path: "/recursos/no-mas-arpegios-aburridos",
  image: "/resources/arpegios-guitarrista.webp",
});

export default function ArpeggiosGuidePage() {
  return (
    <BookReader
      bookId="no-mas-arpegios-aburridos"
      title="¡No Más Arpegios Aburridos!"
      chapters={CHAPTERS}
    >
      <NoMasArpegiosAburridos />
    </BookReader>
  );
}
