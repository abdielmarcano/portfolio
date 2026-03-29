import type { Metadata } from "next";
import { profile } from "content/profile";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name} - ${profile.tagline}`,
};

export default function AboutLayout({
  children,
}: { children: React.ReactNode }) {
  return <>{children}</>;
}
