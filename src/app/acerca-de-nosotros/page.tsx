import { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/layout/Hero";

export const metadata: Metadata = {
  title: "Acerca de nosotros",
  description:
    "La primera comunidad de guitarristas en el Perú, desde 2003. Blog, apps, recursos, eventos y más para aprender y practicar guitarra.",
  alternates: { canonical: "/acerca-de-nosotros" },
};

export default function AboutPage() {
  return (
    <article>
      <Hero
        eyebrow="Comunidad de guitarristas · Desde 2003"
        title="Acerca de nosotros"
        narrow
      />

      <Container narrow className="py-16">
        <div className="prose prose-lg max-w-none prose-a:text-brand">
          <h2>Orígenes</h2>

          <p>
            Somos una comunidad que nació en el <strong>2003</strong> y tuvo
            periodos de inactividad por varios años. Intentamos regresar, caímos
            y hoy en día hemos decidido volver a los orígenes, en el cual
            buscamos compartir contenido e información relevante para los
            guitarristas.
          </p>

          <h2>Lo que hacemos</h2>

          <p>
            Hoy Peru Guitar es mucho más que un blog. Es un espacio para
            aprender, practicar y conectar con otros guitarristas del Perú y de
            todo el mundo.
          </p>

          <ul>
            <li>
              <strong>
                <Link href="/blog">Blog</Link>:
              </strong>{" "}
              tips de guitarra, licks, teoría, producción y reflexiones como
              guitarristas. Usamos la IA como herramienta para mejorar la
              calidad de cada entrega.
            </li>
            <li>
              <strong>
                <a href="https://app.peruguitar.com">Fret Quest</a>:
              </strong>{" "}
              tu plan para practicar guitarra y progresar cada día.
            </li>
            <li>
              <strong>
                <a href="https://game.peruguitar.com">PG Fighters</a>:
              </strong>{" "}
              el juego de la comunidad.
            </li>
            <li>
              <strong>
                <Link href="/recursos">Recursos</Link>:
              </strong>{" "}
              guías y backing tracks gratuitos para practicar.
            </li>
            <li>
              <strong>
                <Link href="/blog/categoria/events">Eventos</Link>:
              </strong>{" "}
              concursos como el primero de 2025, que reunió a 41 guitarristas de
              5 países.
            </li>
            <li>
              <strong>
                <Link href="/media">Media</Link>:
              </strong>{" "}
              collabs entre miembros de la comunidad y nuestro podcast.
            </li>
            <li>
              <strong>
                <Link href="/tienda">Tienda</Link>:
              </strong>{" "}
              productos pensados para guitarristas, como nuestras púas PG MK-I.
            </li>
          </ul>

          <p>
            Si tocas guitarra, este también es tu espacio. La guitarra nos
            conecta.
          </p>
        </div>
      </Container>
    </article>
  );
}
