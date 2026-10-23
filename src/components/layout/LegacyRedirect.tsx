import Link from "next/link";
import { SITE_URL } from "@/lib/posts";
import { Container } from "./Container";

/**
 * Static redirect for GitHub Pages, which has no server redirects: an instant
 * meta refresh plus a canonical link so search engines move the ranking.
 */
export const LegacyRedirect = ({ to }: { to: string }) => (
  <Container className="py-16">
    <meta httpEquiv="refresh" content={`0; url=${to}`} />
    <link rel="canonical" href={`${SITE_URL}${to}`} />
    <p>
      Esta página se movió a <Link href={to}>{SITE_URL + to}</Link>.
    </p>
  </Container>
);
