"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { groups } from "../lib/data";
import { useDone } from "./progress";

const all = groups.flatMap((g) => g.pages.map((p) => p.href));

export default function Sidebar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const done = useDone();
  const count = all.filter((h) => done.includes(h)).length;
  // Close the mobile menu after navigating.
  useEffect(() => setOpen(false), [path]);
  const isActive = (href: string) => (href === "/roadmap" ? path === href : path === href || path.startsWith(href + "/"));

  return (
    <header className={`side${open ? " open" : ""}`}>
      <div className="side-top">
        <Link href="/" className="brand">CampusCoder Roadmap</Link>
        <button className="menu-btn" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <div className="progress" title={`${count} of ${all.length} pages completed`}>
        <div className="bar"><div style={{ width: `${(count / all.length) * 100}%` }} /></div>
        <span className="muted">{count} of {all.length} done</span>
      </div>
      <nav id="nav" aria-label="Roadmap">
        {groups.map((g) => (
          <div key={g.label} style={{ ["--c" as string]: g.color }}>
            <h3>{g.label}</h3>
            {g.pages.map((p) => (
              <Link key={p.href} href={p.href} aria-current={isActive(p.href) ? "page" : undefined}>
                {p.label}
                {done.includes(p.href) && <span className="tick" aria-label="completed"> ✓</span>}
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </header>
  );
}
