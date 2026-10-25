import {
  BookOpen,
  Gamepad2,
  Headphones,
  House,
  Library,
  LucideIcon,
  ShoppingBag,
  Sparkles,
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
  { label: "Blog", href: "/blog", icon: BookOpen },
  { label: "Fret Quest", href: "https://fretquest.peruguitar.com", icon: Sparkles, external: true, highlight: true },
  { label: "PG Fighters", href: "https://fighters.peruguitar.com", icon: Gamepad2, external: true },
  { label: "Recursos", href: "/recursos", icon: Library },
  { label: "Media", href: "/media", icon: Headphones },
  { label: "Tienda", href: "/tienda", icon: ShoppingBag },
];
