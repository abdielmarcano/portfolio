"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lock, Star } from "lucide-react";
import type { Project } from "content/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const hasThumbnail = project.thumbnail && project.thumbnail.length > 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          {hasThumbnail ? (
            <Image
              src={project.thumbnail}
              alt=""
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              style={{
                objectPosition: project.thumbnailObjectPosition ?? "center",
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-zinc-400 dark:text-zinc-500">
              <span className="text-4xl font-light">{project.title[0]}</span>
            </div>
          )}
          {project.featured && (
            <span className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-zinc-700 shadow dark:bg-zinc-800/90 dark:text-zinc-200">
              <Star className="inline h-3 w-3" /> Featured
            </span>
          )}
          {project.privateRepo && !project.featured && (
            <span className="absolute right-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-xs font-medium text-zinc-600 shadow dark:bg-zinc-800/90 dark:text-zinc-300">
              <Lock className="inline h-3 w-3" />
            </span>
          )}
        </div>
        <div className="p-5">
          <div className="mb-1 flex flex-wrap items-center gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="mb-1 font-semibold text-zinc-900 dark:text-zinc-50">
            {project.title}
          </h3>
          <p className="mb-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
            {project.impact}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.metrics && project.metrics[0] && (
            <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
              {project.metrics[0].label}: {project.metrics[0].value}
            </p>
          )}
          <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
            {project.dates}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
