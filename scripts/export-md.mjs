// Regenerates README.md, ALL-CONTENT.md and content/**/*.md from data/roadmap.json.
// The JSON is the source of truth. Run: npm run export:md
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const { groups, pages, roles } = JSON.parse(readFileSync(join(root, "data/roadmap.json"), "utf8"));

const cell = (s) => String(s).replace(/\|/g, "\\|");
const table = (head, rows) =>
  [`| ${head.map(cell).join(" | ")} |`, `| ${head.map(() => "---").join(" | ")} |`, ...rows.map((r) => `| ${r.map(cell).join(" | ")} |`)].join("\n");
const bullets = (items) => items.map((i) => `- ${i}`).join("\n");
const link = (l) => `- [${l.label}](${l.href})${l.note ? `: ${l.note}` : ""}`;
const join2 = (parts) => parts.filter(Boolean).join("\n\n");

const fence = "```";
const codeBlock = (c) => `${c.title ? `**${c.title}**\n\n` : ""}${fence}${c.lang}\n${c.text}\n${fence}`;

const section = (s) =>
  join2([
    `## ${s.heading}`,
    ...(s.paragraphs ?? []),
    s.steps && s.steps.map((t, i) => `${i + 1}. ${t}`).join("\n"),
    s.table && table(s.table.head, s.table.rows),
    s.code && s.code.map(codeBlock).join("\n\n"),
    s.bullets && bullets(s.bullets),
    s.qa && s.qa.map((x) => `**Q: ${x.q}**\n\n${x.a}`).join("\n\n"),
    s.links && s.links.map(link).join("\n"),
  ]);

const pageMd = (p) => join2([`# ${p.title}`, p.intro, ...p.sections.map(section)]) + "\n";

const roleMd = (r) =>
  join2([
    `# ${r.name}`,
    `*${r.tagline}*`,
    `## The job`,
    r.job,
    `### A day in the job`,
    bullets(r.daily),
    `**Good if:** ${r.suits}`,
    `**Main tools:** ${r.stack}`,
    `## Where you will work`,
    table(["Type", "What you do there"], r.where.map((w) => [w.type, w.what])),
    `## Year by year`,
    table(["Year", "Focus", "Build", "Milestone"], r.byYear.map((y) => [`Year ${y.year}`, y.focus, y.build, y.milestone])),
    `## Study plan`,
    ...r.stages.map((s) => join2([`### ${s.title} (${s.time})`, bullets(s.study), `**Build:** ${s.build}`])),
    `## What to build`,
    table(["Level", "Project", "What", "What it proves"], r.projects.map((p) => [p.level, p.name, p.what, p.proves])),
    `## Tools`,
    bullets(r.tools),
    `## A week of study`,
    table(["When", "What"], r.week.map((w) => [w.when, w.what])),
    `## A senior's advice`,
    `### Do`,
    bullets(r.senior.do),
    `### Avoid`,
    bullets(r.senior.avoid),
    `## Engineer's notes`,
    bullets(r.sdeNotes),
    `## Mistakes juniors make`,
    bullets(r.mistakes),
    `## Questions to ask a senior`,
    bullets(r.ask),
    `## Myths and reality`,
    table(["Myth", "Reality"], r.myths.map((m) => [m.myth, m.truth])),
    `## First 90 days`,
    table(["When", "Goal"], r.first90.map((d) => [d.days, d.goal])),
    `## Career ladder`,
    table(["Level", "Focus"], r.ladder.map((l) => [l.level, l.focus])),
    `## Interview preparation`,
    bullets(r.interview),
    `## Interview questions and answers`,
    r.qa.map((x) => `**Q: ${x.q}**\n\n${x.a}`).join("\n\n"),
    `## Glossary`,
    table(["Term", "Meaning"], r.glossary.map((g) => [g.term, g.meaning])),
    `## Resources`,
    r.links.map(link).join("\n"),
  ]) + "\n";

const rolesIndexMd =
  join2([
    "# Roles and jobs",
    "Pick a direction, see what the job is, what to study, what to build and what a senior would tell you.",
    table(["Role", "Tagline", "Main tools"], roles.map((r) => [`[${r.name}](roles/${r.slug}.md)`, r.tagline, r.stack])),
  ]) + "\n";

// Reading order comes from the sidebar groups; the roles index is not a page in the JSON.
const entries = groups.flatMap((g) =>
  g.pages.map((gp) => {
    const slug = gp.href === "/roadmap" ? "" : gp.href.replace("/roadmap/", "");
    const page = pages.find((p) => p.slug === slug);
    return { group: g.label, label: gp.label, slug: slug || "start", page };
  }),
);

rmSync(join(root, "content"), { recursive: true, force: true });
mkdirSync(join(root, "content/roles"), { recursive: true });

const all = [];
entries.forEach((e, i) => {
  const name = `${String(i + 1).padStart(2, "0")}-${e.slug}.md`;
  const md = e.slug === "roles" ? rolesIndexMd : pageMd(e.page);
  writeFileSync(join(root, "content", name), md);
  all.push(md.trimEnd());
  if (e.slug === "roles") for (const r of roles) {
    const rm = roleMd(r);
    writeFileSync(join(root, "content/roles", `${r.slug}.md`), rm);
    all.push(rm.trimEnd());
  }
});
writeFileSync(join(root, "ALL-CONTENT.md"), all.join("\n\n---\n\n") + "\n");

const readme = join2([
  "# Student learning roadmap: content",
  "All the content from the CampusCoders roadmap, exported for reuse. These files are generated from `data/roadmap.json` by `npm run export:md`, so edit the JSON and re-run the export instead of editing them by hand.",
  `## Layout\n\n- \`ALL-CONTENT.md\`: everything in one file, in reading order.\n- \`content/NN-*.md\`: one Markdown file per topic page, numbered in reading order.\n- \`content/roles/*.md\`: one file per role.\n- \`data/roadmap.json\`: the same content as structured data (groups, pages, roles).`,
  `## Reading order\n\n${entries.map((e, i) => `${i + 1}. **${e.group}**: ${e.page?.title ?? e.label}`).join("\n")}`,
  `## Roles (${roles.length})\n\n${roles.map((r) => `- [${r.name}](content/roles/${r.slug}.md)`).join("\n")}`,
  `## Notes\n\n- The content is written from general knowledge, not from a single source. Have a senior review it before presenting it as authoritative.\n- External links were checked when written. Links change, so re-check them from time to time.`,
]) + "\n";
writeFileSync(join(root, "README.md"), readme);

console.log(`exported ${entries.length} pages and ${roles.length} roles`);
