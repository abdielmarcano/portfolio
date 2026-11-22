"use client";

import { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { profile } from "content/profile";
import { motion } from "framer-motion";

const cards = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "abdiel-marcano",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "abdielmarcano",
    href: profile.github,
    icon: Github,
  },
];

export default function ContactPage() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Contact
      </h1>
      <p className="mb-10 text-zinc-600 dark:text-zinc-400">
        Get in touch via email, LinkedIn, or GitHub.
      </p>

      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        {cards.map(({ label, value, href, icon: Icon }) => (
          <motion.a
            key={label}
            href={href}
            target={label === "Email" ? undefined : "_blank"}
            rel={label === "Email" ? undefined : "noopener noreferrer"}
            className="flex flex-col items-center gap-2 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Icon className="h-8 w-8 text-zinc-600 dark:text-zinc-400" />
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
              {label}
            </span>
            <span className="text-center text-sm text-zinc-500 dark:text-zinc-400">
              {value}
            </span>
          </motion.a>
        ))}
      </div>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Send a Message
        </h2>
        <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
          This form opens your email client with a prefilled subject and body.
        </p>
        <div className="space-y-4">
          <div>
            <label htmlFor="subject" className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="e.g. Internship Inquiry"
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder-zinc-500"
            />
          </div>
          <div>
            <label htmlFor="body" className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Message
            </label>
            <textarea
              id="body"
              rows={4}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Your Message..."
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-zinc-900 placeholder-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder-zinc-500"
            />
          </div>
          <a
            href={mailto}
            className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <Mail className="h-4 w-4" />
            Open in Email
          </a>
        </div>
      </section>
    </div>
  );
}
