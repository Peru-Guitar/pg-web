"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-strong"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {copied ? "¡Copiado!" : "Copiar texto"}
    </button>
  );
};
