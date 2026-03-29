"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface ResumeBulletsBlockProps {
  bullets: string[];
}

export function ResumeBulletsBlock({ bullets }: ResumeBulletsBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    const text = bullets.map((b) => `• ${b}`).join("\n");
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Resume Bullets
        </h2>
        <button
          type="button"
          onClick={copyToClipboard}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy bullets
            </>
          )}
        </button>
      </div>
      <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-zinc-400 dark:text-zinc-500">•</span>
            {bullet}
          </li>
        ))}
      </ul>
    </section>
  );
}
