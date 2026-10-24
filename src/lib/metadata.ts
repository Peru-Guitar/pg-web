import type { Metadata } from "next";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
}

/** Keep search and social previews consistent for each page. */
export function pageMetadata({ title, description, path, image = "/og-peruguitar-v3.jpg" }: PageMetadataOptions): Metadata {
  const socialTitle = `${title} | Peru Guitar`;
  return {
    title,
    description,
    alternates: { canonical: path },
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
