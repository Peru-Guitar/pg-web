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
      className={`block border-b-2 py-2 text-sm transition-colors ${active ? "border-brand text-on-night" : "border-transparent text-on-night-muted hover:text-on-night"}`}
    >
      {item.label}
    </Link>
  );
};

export const Navbar = () => {
  const menu = useRef<HTMLDetailsElement>(null);
  return (
    <header className="relative z-50 border-b border-night-line bg-night text-on-night">
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

          <ul className="hidden gap-6 md:flex">
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
            <ul className="absolute right-0 mt-3 w-48 rounded-card border border-night-line bg-night-surface p-3">
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
