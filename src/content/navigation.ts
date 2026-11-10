import {
  BookOpen,
  House,
  Guitar,
  LucideIcon,
  ShoppingBag,
  Sparkles,
  Users,
} from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
  /** Rendered in an accent color so it stands out. */
  highlight?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "/", icon: House },
  { label: "Artistas", href: "/artistas", icon: Guitar },
  { label: "Blog", href: "/blog", icon: BookOpen },
  { label: "Comunidad", href: "/comunidad", icon: Users },
  { label: "Tienda", href: "/tienda", icon: ShoppingBag },
  { label: "Fret Quest", href: "https://fretquest.peruguitar.com", icon: Sparkles, external: true, highlight: true },
];
