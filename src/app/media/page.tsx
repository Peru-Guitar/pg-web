import { LegacyRedirect } from "@/components/layout/LegacyRedirect";

// Media (collabs and podcast) now lives in /comunidad; keep the old URL working.
export default function MediaRedirect() {
  return <LegacyRedirect to="/comunidad" />;
}
