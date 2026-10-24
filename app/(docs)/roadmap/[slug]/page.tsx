import { notFound } from "next/navigation";
import Article, { PrevNext } from "../../../../components/Article";
import { Sections } from "../../../../components/Blocks";
import { pages } from "../../../../lib/data";

export const dynamicParams = false;
export const generateStaticParams = () => pages.filter((p) => p.slug).map((p) => ({ slug: p.slug }));

export default async function Topic({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = pages.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <Article title={p.title} lead={p.intro} headings={p.sections.map((s) => s.heading)}>
      <Sections sections={p.sections} />
      <PrevNext href={`/roadmap/${slug}`} />
    </Article>
  );
}
