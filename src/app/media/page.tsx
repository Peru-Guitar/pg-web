import { LegacyRedirect } from "@/components/layout/LegacyRedirect";

// Media was merged into /recursos; keep the old URL working.
export default function MediaRedirect() {
  return <LegacyRedirect to="/recursos" />;
}
