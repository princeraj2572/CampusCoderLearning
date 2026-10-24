import Link from "next/link";
import { groups, pages, roles, slugify } from "../lib/data";

const years = [
  { n: 1, title: "Build the base", text: "One language, Git, logic and your first small projects.", heading: "Year 1 in detail: build the base" },
  { n: 2, title: "Go deep on the core", text: "Data structures, algorithms, core subjects and real projects.", heading: "Year 2 in detail: go deep on the core" },
  { n: 3, title: "Get interview-ready", text: "Patterns, system design, a big project and internship applications.", heading: "Year 3 in detail: prepare for internships and interviews" },
  { n: 4, title: "Land the offer", text: "Mock interviews, placements and a strong final-year project.", heading: "Year 4 in detail: convert the work into an offer" },
];

const qaCount = pages.reduce((n, p) => n + p.sections.reduce((m, s) => m + (s.qa?.length ?? 0), 0), 0)
  + roles.reduce((n, r) => n + r.qa.length, 0);

const stats = [
  [String(pages.length), "topic pages"],
  [String(roles.length), "career roles"],
  [String(qaCount), "interview questions"],
  ["4", "years planned"],
];

export default function Landing() {
  return (
    <div className="landing">
      <header className="lp-nav">
        <strong>CampusCoder Roadmap</strong>
        <nav aria-label="Main">
          <Link href="/roadmap">Roadmap</Link>
          <Link href="/roadmap/roles">Roles</Link>
          <Link href="/roadmap/interview-qa">Interview Q&amp;A</Link>
        </nav>
      </header>

      <section className="hero">
        <p className="eyebrow">A free guide for college students</p>
        <h1>From your first line of code to your first job</h1>
        <p className="lead">
          A year-by-year plan covering DSA, core subjects, projects, tools, open source and 14 career roles, with the
          interview questions to match.
        </p>
        <div className="cta">
          <Link href="/roadmap" className="btn primary">Start here</Link>
          <Link href="/roadmap/roles" className="btn">Explore roles</Link>
        </div>
        <ul className="stats">
          {stats.map(([n, label]) => <li key={label}><strong>{n}</strong><span>{label}</span></li>)}
        </ul>
      </section>

      <section className="lp-section">
        <h2>Your four years</h2>
        <div className="cards years">
          {years.map((y, i) => (
            <Link key={y.n} href={`/roadmap#${slugify(y.heading)}`} className="card" style={{ ["--c" as string]: groups[i % groups.length].color }}>
              <span className="chip">Year {y.n}</span>
              <strong>{y.title}</strong>
              <span className="muted">{y.text}</span>
            </Link>
          ))}
        </div>
      </section>

      {groups.filter((g) => g.label !== "Start").map((g) => (
        <section key={g.label} className="lp-section" style={{ ["--c" as string]: g.color }}>
          <h2 className="group-title">{g.label}</h2>
          <div className="cards">
            {g.pages.map((p) => (
              <Link key={p.href} href={p.href} className="card">
                <strong>{p.label}</strong>
                <span className="muted">{(p as { blurb?: string }).blurb}</span>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="lp-section">
        <h2>Pick a role</h2>
        <div className="role-grid">
          {roles.map((r) => (
            <Link key={r.slug} href={`/roadmap/roles/${r.slug}`} className="chip role" style={{ ["--c" as string]: r.color }}>
              {r.name}
            </Link>
          ))}
        </div>
      </section>

      <footer className="lp-footer">
        <p>
          The content is written from general knowledge, not a single source. Have a senior review it before you rely on
          it, and re-check links from time to time.
        </p>
      </footer>
    </div>
  );
}
