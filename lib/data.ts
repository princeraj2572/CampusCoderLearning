import raw from "../data/roadmap.json";

export type Link = { label: string; href: string; note?: string };
export type Section = {
  heading: string;
  steps?: string[];
  bullets?: string[];
  paragraphs?: string[];
  links?: Link[];
  table?: { head: string[]; rows: string[][] };
  qa?: { q: string; a: string }[];
};
export type Page = { slug: string; label: string; title: string; intro: string; sections: Section[] };
export type Role = {
  slug: string; name: string; color: string; tagline: string; job: string; suits: string; stack: string;
  daily: string[]; tools: string[]; interview: string[]; mistakes: string[]; ask: string[];
  stages: { title: string; time: string; study: string[]; build: string }[];
  projects: { level: string; name: string; what: string; proves: string }[];
  senior: { do: string[]; avoid: string[] };
  links: Link[];
  ladder: { level: string; focus: string }[];
  first90: { days: string; goal: string }[];
  week: { when: string; what: string }[];
  where: { type: string; what: string }[];
  myths: { myth: string; truth: string }[];
};
type Group = { label: string; color: string; pages: { label: string; href: string }[] };

export const groups = raw.groups as Group[];
export const pages = raw.pages as Page[];
export const roles = raw.roles as Role[];
