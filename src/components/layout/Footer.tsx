import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Instagram, Youtube } from "lucide-react";
import { Container } from "./Container";
import { CommunitySupport } from "./CommunitySupport";
import { instagramUrl, youtubeUrl } from "@/content/settings.json";

const columns = [
  {
    title: "Explora",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "Recursos gratuitos", href: "/recursos" },
      { label: "Podcasts y videos", href: "/media" },
    ],
  },
  {
    title: "PeruGuitar",
    links: [
      { label: "Acerca de nosotros", href: "/acerca-de-nosotros" },
      { label: "Fret Quest", href: "https://fretquest.peruguitar.com" },
      { label: "PG Fighters", href: "https://fighters.peruguitar.com" },
      { label: "Tienda", href: "/tienda" },
    ],
  },
];

export const Footer = () => (
  <footer className="community-footer relative isolate mt-10 overflow-hidden bg-night text-on-night-muted">
    <div className="community-footer-art pointer-events-none absolute inset-x-0 top-0 -z-10" aria-hidden="true" />
    <Container className="relative pb-10 pt-10 md:pb-14 md:pt-14">
      <CommunitySupport />
      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link
            href="/"
            aria-label="PeruGuitar, inicio"
            className="inline-block"
          >
            <Image
              src="/logo.png"
              alt="PeruGuitar"
              width={210}
              height={40}
              className="h-auto w-52"
            />
          </Link>
          <p className="mt-6 max-w-xs text-2xl font-bold leading-snug tracking-tight text-on-night">
            La guitarra
            <br />
            nos conecta.
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Aprende, practica y disfruta la música con la comunidad.
          </p>
        </div>

        {columns.map((column) => (
          <nav
            key={column.title}
            aria-label={column.title + " en el pie de página"}
          >
            <h2 className="mb-6 text-lg font-bold text-on-night">
              {column.title}
            </h2>
            <ul className="space-y-4">
              {column.links.map((link) => {
                const external = link.href.startsWith("https://");
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 text-sm transition-colors hover:text-on-night"
                    >
                      {link.label}
                      {external && (
                        <ArrowUpRight size={14} aria-hidden="true" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        ))}

        <nav aria-label="Redes sociales">
          <h2 className="mb-6 text-lg font-bold text-on-night">Síguenos</h2>
          <ul className="space-y-4">
            <li>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm transition-colors hover:text-on-night"
              >
                <Instagram size={19} aria-hidden="true" />
                Instagram
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm transition-colors hover:text-on-night"
              >
                <Youtube size={19} aria-hidden="true" />
                YouTube
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mt-14 flex flex-col gap-4 border-t border-night-line pt-7 text-sm md:mt-20 md:flex-row md:items-center md:justify-between">
        <p className="max-w-xl leading-relaxed text-on-night">
          La primera comunidad de guitarristas en el Perú desde el 2003.
        </p>
        <p className="shrink-0 text-xs">
          © {new Date().getFullYear()} PeruGuitar.
        </p>
      </div>
    </Container>
  </footer>
);
