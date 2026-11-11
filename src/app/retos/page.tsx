import { LegacyRedirect } from "@/components/layout/LegacyRedirect";
import { pageMetadata } from "@/lib/metadata";

// Challenges now live under /comunidad.
export const metadata = pageMetadata({
  title: "Retos",
  description: "Los retos de la comunidad de Peru Guitar.",
  path: "/comunidad/retos",
});

export default function LegacyChallengesPage() {
  return <LegacyRedirect to="/comunidad/retos" />;
}
