"use client";

import dynamic from "next/dynamic";

const HomePageClient = dynamic(
  () => import("@/components/HomePageClient").then((m) => m.HomePageClient),
  { ssr: false }
);

export function HomePageDynamic() {
  return <HomePageClient />;
}
