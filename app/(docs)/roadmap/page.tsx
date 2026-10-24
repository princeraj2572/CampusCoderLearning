import Article, { PrevNext } from "../../../components/Article";
import { Sections } from "../../../components/Blocks";
import { pages } from "../../../lib/data";

export default function Start() {
  const p = pages.find((x) => x.slug === "")!;
  return (
    <Article title={p.title} lead={p.intro} headings={p.sections.map((s) => s.heading)}>
      <Sections sections={p.sections} />
      <PrevNext href="/roadmap" />
    </Article>
  );
}
