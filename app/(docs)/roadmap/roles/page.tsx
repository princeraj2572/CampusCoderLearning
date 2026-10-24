import Link from "next/link";
import Article, { PrevNext } from "../../../../components/Article";
import { roles } from "../../../../lib/data";

export default function Roles() {
  return (
    <Article title="Roles and jobs" lead="14 roles: what each does, what to study and build, and what seniors advise." headings={[]}>
      <div className="cards">
        {roles.map((r) => (
          <Link key={r.slug} href={`/roadmap/roles/${r.slug}`} className="card" style={{ ["--c" as string]: r.color }}>
            <strong>{r.name}</strong>
            <span className="muted">{r.tagline}</span>
            <span className="chip">{r.stack.split(",").slice(0, 3).join(" · ")}</span>
          </Link>
        ))}
      </div>
      <PrevNext href="/roadmap/roles" />
    </Article>
  );
}
