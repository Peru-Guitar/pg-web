export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Fret Quest", href: "https://app.peruguitar.com", external: true },
  { label: "Recursos", href: "/recursos" },
  { label: "Podcasts y videos", href: "/media" },
  { label: "Tienda", href: "/tienda" },
];
