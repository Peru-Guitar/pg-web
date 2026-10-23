"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowRight, Heart, X } from "lucide-react";

export const CommunitySupport = () => {
  const dialog = useRef<HTMLDialogElement>(null);
  const [method, setMethod] = useState<"Yape" | "Plin">("Yape");

  return (
    <>
      <div className="mb-10 flex flex-col gap-3 border-y border-white/15 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-3 text-zinc-300">
          <Heart size={18} className="shrink-0 text-accent" aria-hidden="true" />
          Ayúdanos a seguir creando recursos gratuitos.
        </p>
        <button type="button" onClick={() => dialog.current?.showModal()} aria-haspopup="dialog" className="inline-flex min-h-10 items-center gap-2 self-start rounded-lg px-2 font-semibold text-accent transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:self-auto">
          Apoyar <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>
      <dialog ref={dialog} aria-labelledby="community-support-title" aria-describedby="community-support-description" onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }} className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-md overflow-y-auto rounded-3xl border border-white/15 bg-night p-0 text-on-night shadow-2xl backdrop:bg-black/75">
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <Heart size={25} className="text-accent" aria-hidden="true" />
            <button type="button" onClick={() => dialog.current?.close()} aria-label="Cerrar ventana de apoyo" className="-mr-2 -mt-2 flex size-11 items-center justify-center rounded-full text-zinc-400 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-brand"><X size={20} /></button>
          </div>
          <h2 id="community-support-title" className="mt-3 text-2xl font-extrabold tracking-tight">Gracias por apoyar a PeruGuitar.</h2>
          <p id="community-support-description" className="mt-3 text-sm leading-relaxed text-zinc-300">Tu aporte nos ayuda a seguir compartiendo recursos gratuitos para guitarristas. Elige Yape o Plin y escanea el QR desde tu aplicación.</p>
          <div className="mt-6 grid grid-cols-2 gap-1 rounded-xl border border-white/15 bg-white/5 p-1" role="group" aria-label="Método de apoyo">
            {(["Yape", "Plin"] as const).map((option) => (
              <button key={option} type="button" aria-pressed={method === option} onClick={() => setMethod(option)} className={`min-h-11 rounded-lg px-4 py-2 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${method === option ? "bg-brand text-white shadow-sm" : "text-zinc-300 hover:bg-white/10"}`}>{option}</button>
            ))}
          </div>
          <div className="mx-auto mt-6 w-fit rounded-2xl bg-white p-4">
            <Image src={`/qrs/${method.toLowerCase()}.jpg`} alt={`Código QR para apoyar a PeruGuitar con ${method}`} width={200} height={200} unoptimized className="size-[200px]" />
          </div>
          <p className="mt-4 text-center text-sm text-accent">Escanea con {method}</p>
        </div>
      </dialog>
    </>
  );
};
