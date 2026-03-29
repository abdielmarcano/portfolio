import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Software, embedded, security, and hardware projects by Abdiel Marcano.",
};

export default function ProjectsLayout({
  children,
}: { children: React.ReactNode }) {
  return <>{children}</>;
}
