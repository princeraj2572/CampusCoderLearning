"use client";
import { useSyncExternalStore } from "react";

// Completed page hrefs, kept in localStorage. The page works without it (private mode, blocked storage).
const KEY = "cc-done";
const none: string[] = [];
let raw: string | null = null;
let cache = none;

const read = () => {
  try {
    const v = localStorage.getItem(KEY);
    if (v !== raw) { raw = v; cache = v ? (JSON.parse(v) as string[]) : none; }
  } catch { /* storage unavailable */ }
  return cache;
};
const subscribe = (cb: () => void) => {
  window.addEventListener("storage", cb);
  window.addEventListener("cc-done", cb);
  return () => { window.removeEventListener("storage", cb); window.removeEventListener("cc-done", cb); };
};

export const useDone = () => useSyncExternalStore(subscribe, read, () => none);

export const toggleDone = (href: string) => {
  const cur = read();
  const next = cur.includes(href) ? cur.filter((h) => h !== href) : [...cur, href];
  try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* ignore */ }
  window.dispatchEvent(new Event("cc-done"));
};
