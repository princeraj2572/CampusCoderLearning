import Link from "next/link";
import { notFound } from "next/navigation";
import { Links, List, Table } from "../../../../components/Blocks";
import { roles } from "../../../../lib/data";

export const dynamicParams = false;
export const generateStaticParams = () => roles.map((r) => ({ slug: r.slug }));

const S = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section><h2>{title}</h2>{children}</section>
);

export default async function Role({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = roles.find((x) => x.slug === slug);
  if (!r) notFound();
  return (
    <article style={{ ["--c" as string]: r.color }}>
      <Link href="/roadmap/roles" className="muted">← All roles</Link>
      <h1>{r.name}</h1>
      <p className="lead">{r.tagline}</p>
      <S title="The job"><p>{r.job}</p><p><b>Suits you if:</b> {r.suits}</p><p><b>Stack:</b> {r.stack}</p></S>
      <S title="A typical day"><List items={r.daily} /></S>
      <S title="Learning path">
        {r.stages.map((s) => (
          <div key={s.title}>
            <h3>{s.title} <span className="muted">{s.time}</span></h3>
            <List items={s.study} />
            <p><b>Build:</b> {s.build}</p>
          </div>
        ))}
      </S>
      <S title="Projects">
        <Table head={["Level", "Project", "What", "Proves"]} rows={r.projects.map((p) => [p.level, p.name, p.what, p.proves])} />
      </S>
      <S title="Tools"><List items={r.tools} /></S>
      <S title="Advice from seniors">
        <h3>Do</h3><List items={r.senior.do} />
        <h3>Avoid</h3><List items={r.senior.avoid} />
      </S>
      <S title="Common mistakes"><List items={r.mistakes} /></S>
      <S title="Myths">
        <Table head={["Myth", "Truth"]} rows={r.myths.map((m) => [m.myth, m.truth])} />
      </S>
      <S title="Interview"><List items={r.interview} /></S>
      <S title="Questions to ask an employer"><List items={r.ask} /></S>
      <S title="Where you can work">
        <Table head={["Type", "What"]} rows={r.where.map((w) => [w.type, w.what])} />
      </S>
      <S title="Career ladder">
        <Table head={["Level", "Focus"]} rows={r.ladder.map((l) => [l.level, l.focus])} />
      </S>
      <S title="Your first 90 days">
        <Table head={["When", "Goal"]} rows={r.first90.map((d) => [d.days, d.goal])} />
      </S>
      <S title="A weekly routine">
        <Table head={["When", "What"]} rows={r.week.map((w) => [w.when, w.what])} />
      </S>
      <S title="Resources"><Links links={r.links} /></S>
    </article>
  );
}
