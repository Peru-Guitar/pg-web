/* eslint-disable @next/next/no-img-element */
"use client";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Container } from "./Container";
import { NAV_ITEMS, NavItem } from "@/content/navigation";

const NavLink = ({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate?: () => void;
}) => {
  const pathname = usePathname();
  const active =
    item.href === "/"
      ? pathname === "/"
      : !item.external && pathname.startsWith(item.href);
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className={`flex items-center gap-2 border-b-2 py-2 text-sm transition-colors ${item.highlight ? "border-transparent font-semibold text-amber-400 hover:text-amber-300" : active ? "border-brand text-on-night" : "border-transparent text-on-night-muted hover:text-on-night"}`}
    >
      <item.icon size={16} aria-hidden="true" className="shrink-0" />
      {item.label}
    </Link>
  );
};

/** Pages that open with a full banner: the navbar floats over it. */
const hasBanner = (pathname: string) =>
  pathname === "/" ||
  pathname === "/acerca-de-nosotros" ||
  /^\/blog\/(?!categoria\/)[^/]+$/.test(pathname);

export const Navbar = () => {
  const menu = useRef<HTMLDetailsElement>(null);
  const overlay = hasBanner(usePathname());
  return (
    <header
      className={`z-50 border-b text-on-night ${overlay ? "absolute inset-x-0 top-0 border-white/10 bg-transparent" : "relative border-night-line bg-night"}`}
    >
      <nav>
        <Container className="flex items-center justify-between py-3">
          <Link href="/">
            <img
              src="/logo.png"
              alt="Peru Guitar"
              width={180}
              height={32}
              className="h-8 w-auto max-w-44"
            />
          </Link>

          <ul className="hidden gap-5 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <NavLink item={item} />
              </li>
            ))}
          </ul>

          <details ref={menu} className="relative md:hidden">
            <summary className="list-none cursor-pointer" aria-label="Menú">
              <Menu />
            </summary>
            <ul className="absolute right-0 mt-3 w-56 rounded-card border border-night-line bg-night-surface p-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <NavLink
                    item={item}
                    onNavigate={() => {
                      if (menu.current) menu.current.open = false;
                    }}
                  />
                </li>
              ))}
            </ul>
          </details>
        </Container>
      </nav>
    </header>
  );
};
