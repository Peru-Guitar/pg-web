import { LegacyRedirect } from "@/components/layout/LegacyRedirect";
import { pageMetadata } from "@/lib/metadata";

// Resources now live inside the community page.
export const metadata = pageMetadata({
  title: "Recursos",
  description: "Ebooks y backing tracks gratuitos de Peru Guitar.",
  path: "/comunidad",
});

export default function ResourcesPage() {
  return <LegacyRedirect to="/comunidad/recursos" />;
}
