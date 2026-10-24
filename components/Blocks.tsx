import type { Link as L, Section } from "../lib/data";

export const List = ({ items, ordered }: { items: string[]; ordered?: boolean }) => {
  const Tag = ordered ? "ol" : "ul";
  return <Tag>{items.map((t) => <li key={t}>{t}</li>)}</Tag>;
};

export const Table = ({ head, rows }: { head: string[]; rows: string[][] }) => (
  <div className="scroll">
    <table>
      <thead><tr>{head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
      <tbody>{rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j}>{c}</td>)}</tr>)}</tbody>
    </table>
  </div>
);

export const Links = ({ links }: { links: L[] }) => (
  <ul>
    {links.map((l) => (
      <li key={l.href}>
        <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
        {l.note && <span className="muted"> {l.note}</span>}
      </li>
    ))}
  </ul>
);

export const Sections = ({ sections }: { sections: Section[] }) => (
  <>
    {sections.map((s) => (
      <section key={s.heading}>
        <h2>{s.heading}</h2>
        {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
        {s.steps && <List items={s.steps} ordered />}
        {s.bullets && <List items={s.bullets} />}
        {s.table && <Table {...s.table} />}
        {s.qa?.map((x) => (
          <details key={x.q}><summary>{x.q}</summary><p>{x.a}</p></details>
        ))}
        {s.links && <Links links={s.links} />}
      </section>
    ))}
  </>
);
