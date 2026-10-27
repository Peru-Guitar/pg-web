import type { Metadata } from "next";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Keep the page out of search results (e.g. changelog). */
  noindex?: boolean;
}

/** Keep search and social previews consistent for each page. */
export function pageMetadata({ title, description, path, image = "/og-peruguitar-v3.jpg", noindex = false }: PageMetadataOptions): Metadata {
  const socialTitle = `${title} | Peru Guitar`;
  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noindex && { robots: { index: false, follow: false } }),
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: "Peru Guitar",
      locale: "es_PE",
      type: "website",
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}
