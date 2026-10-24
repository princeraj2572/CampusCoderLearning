import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CampusCoder Roadmap",
  description: "A student learning roadmap: DSA, core subjects, projects, tools and 14 career roles.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
