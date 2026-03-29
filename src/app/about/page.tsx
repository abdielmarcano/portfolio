import { profile } from "content/profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name} - ${profile.tagline}`,
};

const skillGroups = [
  {
    title: "Software",
    items: [
      "JavaScript/TypeScript",
      "Node.js",
      "React / Next.js",
      "REST APIs",
      "FastAPI",
      "PostgreSQL / MongoDB",
      "Prisma",
      "Supabase",
      "Docker",
    ],
  },
  {
    title: "Embedded & Hardware",
    items: [
      "C / C++",
      "Arduino",
      "ESP32",
      "Raspberry Pi",
      "PCB Design",
      "KiCad",
      "Analog Circuits",
      "Signal Conditioning",
    ],
  },
  {
    title: "Tools & Other",
    items: [
      "Git",
      "Linux",
      "JWT / RBAC",
      "Computer Vision (YOLO, OpenCV)",
      "Unreal Engine 5",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        About
      </h1>
      <p className="mb-10 text-zinc-600 dark:text-zinc-400">
        {profile.tagline}
      </p>

      <section className="mb-10">
        <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Bio
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          I&apos;m a Computer Engineering student at the University of Central
          Florida with a focus on both software and embedded systems. I build
          secure full-stack applications, REST APIs with proper auth and RBAC,
          and embedded/firmware projects from PCB design to sensor integration
          and computer vision. I enjoy bridging the gap between web services and
          hardware.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Education
        </h2>
        <p className="font-medium text-zinc-900 dark:text-zinc-50">
          {profile.education.school}
        </p>
        <p className="text-zinc-600 dark:text-zinc-400">
          B.S. Computer Engineering · GPA {profile.education.gpa}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Organizations
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          {profile.organizations.join(" · ")}
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Skills
        </h2>
        <div className="space-y-6">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-2 text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
        <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          What I&apos;m looking for
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400">
          {profile.lookingFor}
        </p>
      </section>
    </div>
  );
}
