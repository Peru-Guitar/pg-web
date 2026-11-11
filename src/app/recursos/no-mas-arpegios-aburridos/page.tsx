import { LegacyRedirect } from "@/components/layout/LegacyRedirect";

// Resources now live under /comunidad/recursos.
export const metadata = {
  alternates: { canonical: "/comunidad/recursos/no-mas-arpegios-aburridos" },
};

export default function LegacyEbookPage() {
  return <LegacyRedirect to="/comunidad/recursos/no-mas-arpegios-aburridos" />;
}
