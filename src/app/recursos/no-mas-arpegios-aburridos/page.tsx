import { Metadata } from "next";

import {
  CHAPTERS,
  NoMasArpegiosAburridos,
} from "@/content/books/no-mas-arpegios-aburridos";
import { BookReader } from "@/components/reader/BookReader";

const URL_PATH = "/recursos/no-mas-arpegios-aburridos";

export const metadata: Metadata = {
  title: "¡No Más Arpegios Aburridos!",
  description:
    "Guía gratuita para expandir tus arpegios con tensiones: séptimas, oncenas y arpegios modales, con tablaturas.",
  alternates: { canonical: URL_PATH },
};

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
