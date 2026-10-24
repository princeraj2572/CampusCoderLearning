import { notFound } from "next/navigation";
import Article from "../../../../../components/Article";
import { Links, List, Table } from "../../../../../components/Blocks";
import { roles, slugify } from "../../../../../lib/data";

export const dynamicParams = false;
export const generateStaticParams = () => roles.map((r) => ({ slug: r.slug }));

export default async function Role({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = roles.find((x) => x.slug === slug);
  if (!r) notFound();

  const sections: [string, React.ReactNode][] = [
    ["The job", <><p>{r.job}</p><p><b>Suits you if:</b> {r.suits}</p></>],
    ["A typical day", <List items={r.daily} />],
    ["Year by year", <Table head={["Year", "Focus", "Build", "Milestone"]} rows={r.byYear.map((y) => [`Year ${y.year}`, y.focus, y.build, y.milestone])} />],
    ["Learning path", <>{r.stages.map((s) => (
      <div key={s.title}>
        <h3>{s.title} <span className="muted">{s.time}</span></h3>
        <List items={s.study} />
        <p><b>Build:</b> {s.build}</p>
      </div>
    ))}</>],
    ["Projects", <Table head={["Level", "Project", "What", "Proves"]} rows={r.projects.map((p) => [p.level, p.name, p.what, p.proves])} />],
    ["Tools", <List items={r.tools} />],
    ["Advice from seniors", <><h3>Do</h3><List items={r.senior.do} /><h3>Avoid</h3><List items={r.senior.avoid} /></>],
    ["Engineer's notes", <List items={r.sdeNotes} />],
    ["Common mistakes", <List items={r.mistakes} />],
    ["Myths", <Table head={["Myth", "Truth"]} rows={r.myths.map((m) => [m.myth, m.truth])} />],
    ["Interview", <List items={r.interview} />],
    ["Interview questions and answers", <>{r.qa.map((x) => <details key={x.q}><summary>{x.q}</summary><p>{x.a}</p></details>)}</>],
    ["Questions to ask an employer", <List items={r.ask} />],
    ["Where you can work", <Table head={["Type", "What"]} rows={r.where.map((w) => [w.type, w.what])} />],
    ["Career ladder", <Table head={["Level", "Focus"]} rows={r.ladder.map((l) => [l.level, l.focus])} />],
    ["Your first 90 days", <Table head={["When", "Goal"]} rows={r.first90.map((d) => [d.days, d.goal])} />],
    ["A weekly routine", <Table head={["When", "What"]} rows={r.week.map((w) => [w.when, w.what])} />],
    ["Glossary", <Table head={["Term", "Meaning"]} rows={r.glossary.map((t) => [t.term, t.meaning])} />],
    ["Resources", <Links links={r.links} />],
  ];

  return (
    <Article
      title={r.name}
      lead={r.tagline}
      color={r.color}
      back={{ href: "/roadmap/roles", label: "All roles" }}
      headings={sections.map(([t]) => t)}
      hero={<p className="stack">{r.stack.split(",").map((t) => <span key={t} className="chip">{t.trim()}</span>)}</p>}
    >
      {sections.map(([title, body]) => (
        <section key={title} id={slugify(title)}><h2>{title}</h2>{body}</section>
      ))}
    </Article>
  );
}
