import { Sections } from "../../components/Blocks";
import { pages } from "../../lib/data";

export default function Start() {
  const p = pages.find((x) => x.slug === "")!;
  return (
    <article>
      <h1>{p.title}</h1>
      <p className="lead">{p.intro}</p>
      <Sections sections={p.sections} />
    </article>
  );
}
