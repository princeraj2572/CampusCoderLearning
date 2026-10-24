import Link from "next/link";
import { roles } from "../../../lib/data";

export default function Roles() {
  return (
    <article>
      <h1>Roles and jobs</h1>
      <p className="lead">14 roles: what each does, what to study and build, and what seniors advise.</p>
      <div className="cards">
        {roles.map((r) => (
          <Link key={r.slug} href={`/roadmap/roles/${r.slug}`} className="card" style={{ ["--c" as string]: r.color }}>
            <strong>{r.name}</strong>
            <span className="muted">{r.tagline}</span>
          </Link>
        ))}
      </div>
    </article>
  );
}
