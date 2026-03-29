"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  FileText,
  Cpu,
  Shield,
  Eye,
  CircuitBoard,
  Lock,
  Video,
} from "lucide-react";
import { profile } from "content/profile";
import { getFeaturedSlugs, getProjectBySlug } from "content/projects";
import type { Project } from "content/projects";
import { ProjectCard } from "@/components/ProjectCard";

const highlights = [
  { label: "Secure APIs", icon: Shield },
  { label: "Embedded Systems", icon: Cpu },
  { label: "Computer Vision", icon: Eye },
  { label: "PCB + Analog", icon: CircuitBoard },
];

const proofStats = [
  { value: "10 Concurrent Uploads Tested", label: "Load Tested" },
  { value: "~12 REST Endpoints", label: "API Surface" },
  { value: "Range Validated: 2000 mm", label: "Ultrasonic" },
  { value: "Award: Most Complete", label: "Game Jam" },
];

const timeline = [
  {
    type: "Education",
    title: "University of Central Florida",
    detail: `B.S. Computer Engineering · GPA ${profile.education.gpa}`,
  },
  {
    type: "Experience",
    title: "Organizations",
    detail: profile.organizations.join(" · "),
  },
];

const btnBase =
  "inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800";

export function HomePageClient() {
  const featured: Project[] = getFeaturedSlugs()
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => p != null);
  const pwnboxer = getProjectBySlug("pwnboxer");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      {/* Hero */}
      <section className="mb-24 flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="shrink-0"
        >
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-zinc-200 shadow-lg dark:border-zinc-700 sm:h-48 sm:w-48">
            {/* Plain img so object-position isn't overridden by Next.js image cache */}
            <img
              src={profile.headshot}
              alt={profile.name}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: "28% 50%" }}
            />
          </div>
        </motion.div>
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="mt-2 text-lg text-zinc-600 dark:text-zinc-400"
          >
            {profile.tagline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400"
          >
            {profile.summary[0]}
            <br />
            {profile.summary[1]}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              View Projects
            </Link>
            <a
              href={profile.resume.software}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <FileText className="h-4 w-4" />
              Resume (Software)
            </a>
            <a
              href={profile.resume.embedded}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <FileText className="h-4 w-4" />
              Resume (Embedded)
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <Mail className="h-4 w-4" />
              Contact
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick highlights */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {highlights.map(({ label, icon: Icon }) => (
            <motion.div
              key={label}
              whileHover={{ y: -2 }}
              className="flex flex-col items-center gap-2 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <Icon className="h-8 w-8 text-zinc-600 dark:text-zinc-400" />
              <span className="text-center text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Proof stats */}
      <section className="mb-24 rounded-2xl bg-zinc-50 px-4 py-8 dark:bg-zinc-900/50 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proofStats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -2 }}
              className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                {stat.value}
              </p>
              <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Spotlight: PwnBoxer */}
      {pwnboxer && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-2 lg:gap-0">
              <div className="relative aspect-[4/3] w-full lg:aspect-auto lg:min-h-[320px]">
                <Image
                  src="/media/pwnboxer-report.png"
                  alt="PwnBoxer report view"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  Project Spotlight
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
                  PwnBoxer
                </h2>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  Secure device-to-cloud reporting platform with authenticated uploads, report generation, admin device management, and downloadable security artifacts. Built with Node.js, Express, Prisma, and PostgreSQL; supports JWT, RBAC, and revocable API keys for devices.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li className="flex gap-2">
                    <span className="text-zinc-400 dark:text-zinc-500">•</span>
                    Secure authenticated uploads from users and devices
                  </li>
                  <li className="flex gap-2">
                    <span className="text-zinc-400 dark:text-zinc-500">•</span>
                    Admin-managed API-key-per-device workflows
                  </li>
                  <li className="flex gap-2">
                    <span className="text-zinc-400 dark:text-zinc-500">•</span>
                    Downloadable structured PDF report artifacts
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/projects/pwnboxer"
                    className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                  >
                    View Project
                  </Link>
                  {(pwnboxer.links.demoVideo || pwnboxer.links.presentationVideo) && (
                    <a
                      href={pwnboxer.links.demoVideo || pwnboxer.links.presentationVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={btnBase}
                    >
                      <Video className="h-4 w-4" />
                      Demo Video
                    </a>
                  )}
                  {pwnboxer.links.sampleReport && (
                    <a
                      href={pwnboxer.links.sampleReport}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={btnBase}
                    >
                      <FileText className="h-4 w-4" />
                      Sample Report (PDF)
                    </a>
                  )}
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
                    <Lock className="h-3.5 w-3.5" />
                    Private Repo · Code Samples Available Upon Request
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Featured Projects */}
      <section className="mb-24 rounded-2xl bg-zinc-50 px-4 py-10 dark:bg-zinc-900/50 sm:px-6">
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
          Featured Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="text-sm font-medium text-zinc-600 underline-offset-4 hover:underline dark:text-zinc-400"
          >
            View All Projects →
          </Link>
        </div>
      </section>

      {/* Mini timeline */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="mb-8 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
          Education & Experience
        </h2>
        <div className="space-y-4">
          {timeline.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -2 }}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {item.type}
              </p>
              <p className="mt-1 font-semibold text-zinc-900 dark:text-zinc-50">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
