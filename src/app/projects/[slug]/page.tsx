import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  ExternalLink,
  Video,
  Download,
  FileText,
  Lock,
} from "lucide-react";
import { getProjectBySlug, projects } from "content/projects";
import { MediaGallery } from "@/components/MediaGallery";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.impact,
    openGraph: {
      title: project.title,
      description: project.impact,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const {
    links,
    sections,
    metrics,
    media,
    heroImage,
    heroObjectPosition,
    localVideo,
    privateRepo,
    noRepo,
    confidentialityNote,
    architectureSteps,
  } = project;
  const hero = heroImage || project.thumbnail;
  const linkBtn =
    "inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800";

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="mb-8">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
          {privateRepo && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
              <Lock className="h-3 w-3" />
              Private Repo
            </span>
          )}
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          {project.title}
        </h1>
        <p className="mt-1 text-zinc-600 dark:text-zinc-400">{project.dates}</p>
      </div>

      {hero && (
        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800">
          <Image
            src={hero}
            alt={`${project.title} hero`}
            fill
            className="object-cover"
            style={{
              objectPosition:
                heroObjectPosition ??
                project.thumbnailObjectPosition ??
                "center",
            }}
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
          />
        </div>
      )}

      {localVideo && (
        <section className="mb-8">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-800">
            <video
              className="aspect-video w-full bg-black"
              controls
              playsInline
              preload="metadata"
              poster={localVideo.poster}
            >
              <source src={localVideo.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {localVideo.caption && (
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {localVideo.caption}
            </p>
          )}
        </section>
      )}

      {/* Key metrics */}
      {metrics && metrics.length > 0 && (
        <section className="mb-8 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Key Metrics
          </h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {metrics.map((m) => (
              <li key={m.label} className="text-sm">
                <span className="font-medium text-zinc-900 dark:text-zinc-50">
                  {m.label}:
                </span>{" "}
                <span className="text-zinc-600 dark:text-zinc-400">
                  {m.value}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Action buttons */}
      <div className="mb-10 flex flex-wrap gap-3">
        {!noRepo && links.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={linkBtn}
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        )}
        {noRepo && (
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-400">
            Code Samples Available Upon Request
          </span>
        )}
        {privateRepo && !noRepo && (
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            Code Samples Available Upon Request
          </span>
        )}
        {links.devpost && (
          <a
            href={links.devpost}
            target="_blank"
            rel="noopener noreferrer"
            className={linkBtn}
          >
            <ExternalLink className="h-4 w-4" />
            Devpost
          </a>
        )}
        {links.video && (
          <a
            href={links.video}
            target="_blank"
            rel="noopener noreferrer"
            className={linkBtn}
          >
            <Video className="h-4 w-4" />
            {slug === "burnt-out" ? "Presentation and Demo Video" : "Video"}
          </a>
        )}
        {links.download && (
          <a
            href={links.download}
            target="_blank"
            rel="noopener noreferrer"
            className={linkBtn}
          >
            <Download className="h-4 w-4" />
            Google Drive Download
          </a>
        )}
        {links.slides && (
          <a
            href={links.slides}
            target="_blank"
            rel="noopener noreferrer"
            className={linkBtn}
          >
            <FileText className="h-4 w-4" />
            Slides / PDF
          </a>
        )}
        {links.demoVideo && (
          <a
            href={links.demoVideo}
            target="_blank"
            rel="noopener noreferrer"
            className={linkBtn}
          >
            <Video className="h-4 w-4" />
            Demo Video
          </a>
        )}
        {links.presentationVideo && (
          <a
            href={links.presentationVideo}
            target="_blank"
            rel="noopener noreferrer"
            className={linkBtn}
          >
            <Video className="h-4 w-4" />
            System Overview
          </a>
        )}
        {links.sampleReport && (
          <a
            href={links.sampleReport}
            target="_blank"
            rel="noopener noreferrer"
            className={linkBtn}
          >
            <FileText className="h-4 w-4" />
            Sample Report (PDF)
          </a>
        )}
      </div>

      {confidentialityNote && (
        <div className="mb-10 rounded-xl border border-zinc-200 bg-zinc-50/80 px-4 py-3 text-sm text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800/50 dark:text-zinc-400">
          {confidentialityNote}
        </div>
      )}

      {/* Sections */}
      <div className="space-y-8">
        {sections.problem && (
          <section>
            <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Problem
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {sections.problem}
            </p>
          </section>
        )}
        <section>
          <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Solution
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            {sections.solution}
          </p>
        </section>
        {sections.myRole && (
          <section>
            <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              My Role
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {sections.myRole}
            </p>
          </section>
        )}
        {sections.architecture && (
          <section>
            <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Architecture
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {sections.architecture}
            </p>
          </section>
        )}
        {architectureSteps && architectureSteps.length > 0 && (
          <section>
            <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Architecture Flow
            </h2>
            <ol className="space-y-3">
              {architectureSteps.map((step, i) => (
                <li
                  key={i}
                  className="flex gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-xs font-semibold text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200">
                    {i + 1}
                  </span>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        )}
        {sections.results && (
          <section>
            <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Results
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {sections.results}
            </p>
          </section>
        )}
        {sections.learned && (
          <section>
            <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              What I Learned
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              {sections.learned}
            </p>
          </section>
        )}
      </div>

      {/* Media gallery */}
      {media.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Media
          </h2>
          {slug === "pwnboxer" ? (
            <>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Portal & Report Screens
              </h3>
              <MediaGallery
                items={media.filter(
                  (m) =>
                    m.src.includes("pwnboxer-report") ||
                    m.src.includes("pwnboxer-dashboard") ||
                    m.src.includes("pwnboxer-admin") ||
                    m.src.includes("pwnboxer-login")
                )}
              />
              <h3 className="mb-2 mt-6 text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Embedded Integration Setup
              </h3>
              <MediaGallery
                items={media.filter(
                  (m) =>
                    m.src.includes("pwnboxer-esp32") ||
                    m.src.includes("pwnboxer-cm4") ||
                    m.src.includes("pwnboxer-integration-prototype")
                )}
              />
            </>
          ) : (
            <MediaGallery items={media} />
          )}
        </section>
      )}

      <div className="mt-12">
        <Link
          href="/projects"
          className="text-sm font-medium text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
