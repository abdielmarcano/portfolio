"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { projects } from "content/projects";
import type { Project, ProjectTag } from "content/projects";
import { ProjectCard } from "@/components/ProjectCard";

const allTags: ProjectTag[] = [
  "Software",
  "Embedded",
  "Security",
  "CV",
  "PCB",
  "Analog",
  "Game",
  "AI",
  "Hardware",
  "Firmware",
  "In Progress",
];

type SortOption = "featured" | "recent";

/** Sort key for Recent: current first, then by date descending (endDate or startDate). */
function compareByRecent(a: Project, b: Project): number {
  const aCurrent = a.current ? 1 : 0;
  const bCurrent = b.current ? 1 : 0;
  if (aCurrent !== bCurrent) return bCurrent - aCurrent;
  const aDate = a.current ? (a.startDate ?? "") : (a.endDate ?? a.startDate ?? "");
  const bDate = b.current ? (b.startDate ?? "") : (b.endDate ?? b.startDate ?? "");
  const dateCmp = bDate.localeCompare(aDate);
  if (dateCmp !== 0) return dateCmp;
  return 0;
}

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<Set<ProjectTag>>(new Set());
  const [sort, setSort] = useState<SortOption>("featured");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const list = projects.filter((p) => {
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.impact.toLowerCase().includes(q) ||
        p.stack.some((s) => s.toLowerCase().includes(q)) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      const matchTags =
        selectedTags.size === 0 ||
        p.tags.some((t) => selectedTags.has(t));
      return matchSearch && matchTags;
    });
    if (sort === "featured") {
      return [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return [...list].sort(compareByRecent);
  }, [search, selectedTags, sort]);

  const toggleTag = (tag: ProjectTag) => {
    setSelectedTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const hasActiveFilters = selectedTags.size > 0 || search.trim().length > 0;
  const clearFilters = () => {
    setSearch("");
    setSelectedTags(new Set());
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Projects
      </h1>
      <p className="mb-8 text-zinc-600 dark:text-zinc-400">
        Filter by search or tag to find a project.
      </p>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
          <input
            type="search"
            placeholder="Search Projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search Projects"
            className="w-full rounded-xl border border-zinc-200 bg-white py-2.5 pl-10 pr-4 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:placeholder-zinc-500"
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <label htmlFor="sort-projects" className="text-sm text-zinc-500 dark:text-zinc-400">
            Sort By:
          </label>
          <select
            id="sort-projects"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50"
          >
            <option value="featured">Featured</option>
            <option value="recent">Recent</option>
          </select>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
            >
              <X className="h-4 w-4" />
              Clear Filters
            </button>
          )}
        </div>
      </div>
      <div className="mb-8 flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => toggleTag(tag)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
              selectedTags.has(tag)
                ? "bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-900"
                : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-zinc-500 dark:text-zinc-400">
          No projects match your filters.
        </p>
      )}
    </div>
  );
}
