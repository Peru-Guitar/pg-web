import { Post, PostAuthor, PostCategory } from "../types";

const JURY = [
  { name: "Eduardo Rodríguez", instagram: "erpprojectofficial" },
  { name: "Koko Rengifo", instagram: "jmar_rreng" },
  { name: "Victor Hugo", instagram: "vhglenny" },
  { name: "Pepe Irei", instagram: "pepeireiguitar" },
  { name: "Jaison Tovar", instagram: "jaisontovar" },
  { name: "Guillermo Tisoc", instagram: "_mgty84" },
  { name: "Joseph Rodriguez", instagram: "joe.nunez_music" },
  { name: "Rómulo Granados" },
];

const RANKING = [
  {
    flag: "🇵🇪",
    name: "Luis Melendez",
    instagram: "luismelendezguitarist",
    feedback: "Narrativa clara, técnica precisa y melodía con buen criterio.",
  },
  {
    flag: "🇨🇴",
    name: "Alejandro Bautista",
    instagram: "alejandro_bautistav",
    feedback: "Técnica sólida, fraseo claro y creatividad sobre base compleja.",
  },
  {
    flag: "🇵🇪",
    name: "Angel Escobar",
    instagram: "angel.escobarguitar",
    feedback:
      "Buen lenguaje, toque personal y narrativa musical con precisión.",
  },
  {
    flag: "🇨🇴",
    name: "Juan Camilo",
    instagram: "mercho.himself",
    feedback:
      "Frases claras, buena técnica y coherencia en sonido y desarrollo.",
  },
  {
    flag: "🇵🇪",
    name: "Raymi Salazar",
    instagram: "raymisalazar",
    feedback:
      "Técnica fluida, buen shred y recursos expresivos bien aplicados.",
  },
  {
    flag: "🇵🇪",
    name: "Carlos Rodríguez",
    instagram: "carlos.rodriguezg",
    feedback: "Ideas de rock bien articuladas y sincronización precisa.",
  },
  {
    flag: "🇵🇪",
    name: "Luis Fernando",
    instagram: "luis.ormachea.music",
    feedback: "Improvisación clara, fraseo firme y buen cierre melódico.",
  },
  {
    flag: "🇨🇴",
    name: "Camilo Tellez",
    instagram: "camilotellez_gtr",
    feedback: "Buen inicio, toque limpio y explosividad bien controlada.",
  },
  {
    flag: "🇵🇪",
    name: "Eduardo Zuñiga",
    instagram: "ezguitars_",
    feedback: "Sonido sólido, frases creativas y propuesta con buen gusto.",
  },
  {
    flag: "🇵🇪",
    name: "Julio Yucra",
    instagram: "yucra.guitar",
    feedback:
      "Fraseo dinámico con tensión y reposo, final sorpresivo y afinado.",
  },
];

const InstagramLink = ({ handle }: { handle: string }) => (
  <a
    href={`https://www.instagram.com/${handle}/`}
    target="_blank"
    rel="noopener noreferrer"
  >
    @{handle}
  </a>
);

export const concursoIResultados: Post = {
  id: "primer-concurso-peru-guitar-resultados",
  cover: "/content/primer-concurso-peru-guitar-resultados/header.webp",
  title: "Primer Concurso de Peru Guitar: resultados y ranking final",
  description:
    "41 guitarristas de 5 países, 8 jurados y un solo ranking. Así quedó el Primer Concurso de Peru Guitar.",
  category: PostCategory.Events,
  date: new Date("2025-07-15T00:00:00"),
  author: PostAuthor.ErpProject,
  content: () => (
    <>
      <p>
        El <strong>Primer Concurso de Peru Guitar</strong> cerró en{" "}
        <strong>julio de 2025</strong>. Participaron{" "}
        <strong>41 guitarristas</strong> de cinco países y el jurado definió el
        TOP 10 final. Solo los <strong>3 primeros lugares</strong> recibieron
        premio en efectivo.
      </p>

      <h2>Participantes por país</h2>

      <ul>
        <li>🇵🇪 Perú: 31 participantes</li>
        <li>🇨🇴 Colombia: 7 participantes</li>
        <li>🇦🇷 Argentina: 1 participante</li>
        <li>🇧🇷 Brasil: 1 participante</li>
        <li>🇪🇨 Ecuador: 1 participante</li>
      </ul>

      <h2>Premios</h2>

      <ul>
        <li>
          <strong>Primer lugar:</strong> S/ 500 o US$ 130
        </li>
        <li>
          <strong>Segundo lugar:</strong> S/ 250 o US$ 70
        </li>
        <li>
          <strong>Tercer lugar:</strong> S/ 140 o US$ 40
        </li>
      </ul>

      <h2>Criterios de calificación</h2>

      <ul>
        <li>
          <strong>Técnica (30%):</strong> precisión, afinación y limpieza.
        </li>
        <li>
          <strong>Lenguaje (30%):</strong> fraseo y originalidad de la
          composición.
        </li>
        <li>
          <strong>Desarrollo (25%):</strong> coherencia durante el inicio,
          clímax y cierre.
        </li>
        <li>
          <strong>Sonido (15%):</strong> claridad y balance dentro de la mezcla.
        </li>
      </ul>

      <h2>Jurado oficial</h2>

      <ul>
        {JURY.map(({ name, instagram }) => (
          <li key={name}>
            {name}
            {instagram && (
              <>
                {" "}
                (<InstagramLink handle={instagram} />)
              </>
            )}
          </li>
        ))}
      </ul>

      <h2>Ranking final</h2>

      <ol>
        {RANKING.map(({ flag, name, instagram, feedback }) => (
          <li key={name}>
            {flag} <strong>{name}</strong> (
            <InstagramLink handle={instagram} />)
            <br />
            <em>{feedback}</em>
          </li>
        ))}
      </ol>

      <p>
        Gracias a todos los que participaron y al jurado por su tiempo. ¡Nos
        vemos en el próximo concurso!
      </p>
    </>
  ),
};
