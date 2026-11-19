"use client";

import { useEffect } from "react";
import { track } from "@/lib/track";

const GROUPS: Record<string, string> = { DfTBrkCd8UMCYiGDRl0E9X: "comunidad", BqVeyGhXMGO2XkdD424Z7o: "fretquest" };
const APPS: Record<string, string> = { "fretquest.peruguitar.com": "fretquest", "fighters.peruguitar.com": "fighters" };

/**
 * One click listener for the whole site: WhatsApp sales links → `generate_lead`, WhatsApp groups → `join_group`,
 * links to the apps → `select_content`. `location` is the page where the click happened.
 */
export default function LinkTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(link instanceof HTMLAnchorElement)) return;
      let url: URL;
      try {
        url = new URL(link.href);
      } catch {
        return;
      }
      const location = window.location.pathname;
      if (url.hostname === "wa.me") {
        const item = /\/tienda\/([\w-]+)/.exec(url.searchParams.get("text") ?? "")?.[1] ?? "general";
        track("generate_lead", { item, location });
      } else if (url.hostname === "chat.whatsapp.com") {
        track("join_group", { group: GROUPS[url.pathname.slice(1)] ?? "otro", location });
      } else if (APPS[url.hostname]) {
        track("select_content", { content_type: "app", app: APPS[url.hostname], location });
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
