"use client";

import { toDirectDownloadUrl } from "@/lib/drive";
import {
  FileIcon,
  FileMusic,
  FileArchive,
  FileText,
  Download,
  type LucideIcon,
} from "lucide-react";

interface DownloadFile {
  name: string;
  url: string;
  extension: string;
  size?: string;
}

interface DownloadLinksProps {
  files: DownloadFile[];
}

const ICON_MAP: Record<string, LucideIcon> = {
  mp3: FileMusic,
  wav: FileMusic,
  flac: FileMusic,
  zip: FileArchive,
  rar: FileArchive,
  "7z": FileArchive,
  pdf: FileText,
};

const getIcon = (ext: string) => {
  const extension = ext.toLowerCase().replace(".", "");
  const Icon = ICON_MAP[extension] || FileIcon;
  return <Icon className="w-6 h-6" />;
};

export const DownloadLinks = ({ files }: DownloadLinksProps) => {
  if (!files.length) return null;

  const handleDownload = (url: string) => {
    const directUrl = toDirectDownloadUrl(url);
    const link = document.createElement("a");
    link.href = directUrl;
    link.target = "_blank";
    link.setAttribute("download", "");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="my-10 space-y-4">
      <div className="grid gap-3">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-2xl border border-white/5 bg-zinc-900/50 hover:bg-zinc-800/50 hover:border-white/10 transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 text-purple-400 group-hover:scale-110 group-hover:text-purple-300 transition-all duration-300">
                {getIcon(file.extension)}
              </div>

              {/* Truncated text block */}
              <div className="flex flex-col -space-y-0.5">
                <div className="font-semibold text-zinc-100 text-sm sm:text-base">
                  {file.name}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-purple-400 uppercase">
                    {file.extension.replace(".", "")}
                  </span>
                  {file.size && (
                    <>
                      <span className="text-zinc-600 text-[10px]">•</span>
                      <span className="text-[11px] font-medium text-zinc-400">
                        {file.size}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={() => handleDownload(file.url)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white text-zinc-400 hover:text-black transition-all duration-300 text-sm font-bold border border-white/5 hover:border-white shadow-lg cursor-pointer shrink-0"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Descargar</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
