"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MediaItem {
  src: string;
  alt: string;
}

interface MediaGalleryProps {
  items: MediaItem[];
  className?: string;
}

export function MediaGallery({ items, className = "" }: MediaGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = useCallback((index: number) => setLightboxIndex(index), []);
  const close = useCallback(() => setLightboxIndex(null), []);

  if (items.length === 0) return null;

  const isPdf = (src: string) => src.toLowerCase().endsWith(".pdf");

  return (
    <>
      <div
        className={`grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 ${className}`}
      >
        {items.map((item, index) => (
          <div key={item.src} className="overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800/50">
            {isPdf(item.src) ? (
              <a
                href={item.src}
                target="_blank"
                rel="noopener noreferrer"
                className="flex aspect-video items-center justify-center p-4 text-sm font-medium text-zinc-600 dark:text-zinc-400"
              >
                View PDF
              </a>
            ) : (
              <button
                type="button"
                className="block w-full focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:focus:ring-zinc-500"
                onClick={() => open(index)}
              >
                <div className="relative aspect-video w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </button>
            )}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && !isPdf(items[lightboxIndex]!.src) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={close}
          >
            <button
              type="button"
              aria-label="Close Lightbox"
              className="absolute right-4 top-4 rounded-full p-2 text-white hover:bg-white/10"
              onClick={close}
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-h-[90vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={items[lightboxIndex]!.src}
                alt={items[lightboxIndex]!.alt}
                width={1200}
                height={800}
                className="max-h-[90vh] w-auto rounded-lg object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
