import Link from "next/link";
import { groups, slugify } from "../lib/data";
import MarkDone from "./MarkDone";

type Props = {
  title: string;
  lead?: string;
  color?: string;
  back?: { href: string; label: string };
  headings: string[];
  hero?: React.ReactNode;
  children: React.ReactNode;
};

// Every page in reading order, for previous/next links.
const order = groups.flatMap((g) => g.pages);

export default function Article({ title, lead, color, back, headings, hero, children }: Props) {
  return (
    <div className="page">
      <article style={color ? { ["--c" as string]: color } : undefined} className={color ? "themed" : undefined}>
        {back && <Link href={back.href} className="back">← {back.label}</Link>}
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
        {hero}
        {children}
      </article>
      <aside className="toc" aria-label="On this page">
        <h4>On this page</h4>
        {headings.map((h) => <a key={h} href={`#${slugify(h)}`}>{h}</a>)}
      </aside>
    </div>
  );
}

export function PrevNext({ href }: { href: string }) {
  const i = order.findIndex((p) => p.href === href);
  const prev = order[i - 1];
  const next = order[i + 1];
  if (i < 0) return null;
  return (
    <>
    <div className="done-row"><MarkDone href={href} /></div>
    <nav className="prevnext" aria-label="Previous and next">
      {prev ? <Link href={prev.href}><span className="muted">Previous</span>← {prev.label}</Link> : <span />}
      {next ? <Link href={next.href} className="next"><span className="muted">Next</span>{next.label} →</Link> : <span />}
    </nav>
    </>
  );
}
