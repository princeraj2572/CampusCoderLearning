"use client";
import { toggleDone, useDone } from "./progress";

export default function MarkDone({ href }: { href: string }) {
  const done = useDone().includes(href);
  return (
    <button className={`btn markdone${done ? " is-done" : ""}`} aria-pressed={done} onClick={() => toggleDone(href)}>
      {done ? "✓ Completed" : "Mark as done"}
    </button>
  );
}
