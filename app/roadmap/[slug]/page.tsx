import { notFound } from "next/navigation";
import { Sections } from "../../../components/Blocks";
import { pages } from "../../../lib/data";

export const dynamicParams = false;
export const generateStaticParams = () => pages.filter((p) => p.slug).map((p) => ({ slug: p.slug }));

export default async function Topic({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = pages.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <article>
      <h1>{p.title}</h1>
      <p className="lead">{p.intro}</p>
      <Sections sections={p.sections} />
    </article>
  );
}
