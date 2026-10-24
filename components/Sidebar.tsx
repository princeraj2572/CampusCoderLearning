import Link from "next/link";
import { groups } from "../lib/data";

export default function Sidebar() {
  return (
    <nav className="side">
      <Link href="/" className="brand">CampusCoder Roadmap</Link>
      {groups.map((g) => (
        <div key={g.label} style={{ ["--c" as string]: g.color }}>
          <h3>{g.label}</h3>
          {g.pages.map((p) => <Link key={p.href} href={p.href}>{p.label}</Link>)}
        </div>
      ))}
    </nav>
  );
}
