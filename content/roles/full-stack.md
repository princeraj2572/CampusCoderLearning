# Full-stack developer

*Own a feature from the database to the screen.*

## The job

You build both sides of an application: the pages people use and the server behind them. Small teams and startups value this a lot, because one person can ship a whole feature.

### A day in the job

- Build a feature end to end: schema, API, user interface.
- Deploy, monitor and fix your own work.
- Decide where logic should live, on the server or in the browser.
- Move quickly between SQL, TypeScript and CSS.

**Good if:** You like seeing something finished, and you do not mind being slightly less deep in each area.

**Main tools:** TypeScript, React/Next.js, Node.js, PostgreSQL

## Where you will work

| Type | What you do there |
| --- | --- |
| Startups | Small teams need people who can ship a feature alone. |
| Product teams | Own features from database to screen. |
| Freelance and agencies | Deliver full websites and apps for clients. |
| Internal tools teams | Build dashboards and admin tools for a company. |

## Year by year

| Year | Focus | Build | Milestone |
| --- | --- | --- | --- |
| Year 1 | HTML, CSS, JavaScript, one backend language, Git | A static site and a tiny API | Three small projects online |
| Year 2 | A frontend framework, a database, authentication | A full app with login and a database, deployed | A deployed full-stack app |
| Year 3 | Testing, Docker, CI, system design, an internship | A larger product with tests and a pipeline | An internship offer and one strong product |
| Year 4 | Performance, security, scaling, interview loops | A real product with users and monitoring | An offer for a full-stack role |

## Study plan

### Both foundations (Months 1–3)

- HTML, CSS and JavaScript as in the frontend path.
- HTTP, REST and SQL as in the backend path.
- Git and a deployment workflow.

**Build:** A static site plus a tiny API, deployed.

### One stack, end to end (Months 4–6)

- TypeScript across frontend and backend.
- Next.js (or similar): routing, server components, API routes.
- A hosted PostgreSQL database and an ORM or query builder.
- Authentication with a provider or library, not written by hand.

**Build:** A full app with sign-in, a database and a deploy. This leaderboard is a good model.

### Production habits (Months 7–9)

- Tests at three levels: unit, API and end to end.
- Environment variables, secrets and database migrations.
- CI/CD with GitHub Actions.
- Error tracking and basic monitoring.

**Build:** Add tests, CI and error tracking to your app.

### Product sense (Months 10+)

- Payments, file uploads and email: the usual integrations.
- Performance on both sides: database indexes and page speed.
- Reading and shaping requirements, not just implementing them.

**Build:** A product with real users, even if only 20 of them.

## What to build

| Level | Project | What | What it proves |
| --- | --- | --- | --- |
| Starter | Notes or task app | Sign-in, create and edit items, per-user data, deployed. | You can connect all the layers. |
| Intermediate | Marketplace or booking app | Roles, search, image uploads, email notifications. | You can handle several user types and integrations. |
| Advanced | Product with real users | Payments, an admin area, analytics, tests, CI and error tracking. | You can run something in production, which is rarer than building it. |

## Tools

- VS Code, Git and GitHub
- Node.js and a package manager
- PostgreSQL and a database client
- Docker
- A hosting platform such as Vercel, Render or Fly.io
- Postman and browser DevTools

## A week of study

| When | What |
| --- | --- |
| Mon, Wed | Learn one missing piece, frontend or backend (1 hour) |
| Tue, Thu | DSA: two problems and a revision (45 minutes) |
| Fri | Read the code of an open-source app you admire (45 minutes) |
| Weekend | Build: three hours on your product, then deploy the changes |

## A senior's advice

### Do

- Pick one stack and go deep. Switching every month leaves you shallow everywhere.
- Ship early, then improve. A live app teaches more than a perfect local one.
- Keep validation on the server. The browser is not a security boundary.
- Write database migrations instead of editing the schema by hand.
- Learn what your auth library does, even if you do not write it.

### Avoid

- Calling yourself full-stack after only following tutorials.
- Making every project the same to-do app.
- Ignoring the database until it is slow.
- Skipping deployment. 'It works locally' is not finished.
- Rewriting things for fun that already work.

## Engineer's notes

- Own the whole flow for a feature, from the click to the database and back, so you can find where it breaks.
- Agree on the API shape first and write it down. Most frontend-backend bugs are mismatched assumptions.
- Watch the cost of each layer: one extra query per row can freeze a page.
- Deploys, environment variables and migrations are part of your job, not someone else's.
- Do not try to be an expert in everything. Be solid across the stack and deep in one part.

## Mistakes juniors make

- Using a different new tool in every project.
- Building features nobody has asked for.
- Putting business rules only in the user interface.
- Forgetting that every field is a possible attack path.
- Never deploying until the end.

## Questions to ask a senior

- How do you decide what to build first when time is short?
- Where have you regretted putting logic on the wrong side?
- What do you check before every release?

## Myths and reality

| Myth | Reality |
| --- | --- |
| Full-stack means being an expert at everything. | It means being useful across the stack and deep in at least one part. |
| It is the easier path. | It asks for broad learning and steady updating on both sides. |
| Full-stack roles pay less. | Pay depends on the company and your depth, not the title. |

## First 90 days

| When | Goal |
| --- | --- |
| Days 1–30 | Run the whole stack locally, fix a bug on each side, and read the database schema. |
| Days 31–60 | Ship one complete feature, from migration to user interface, with tests. |
| Days 61–90 | Own a small area, such as emails or onboarding, and improve something measurable. |

## Career ladder

| Level | Focus |
| --- | --- |
| Junior (0–2 years) | Ship small features across the stack with guidance. |
| Mid-level (2–5 years) | Own whole features and the way they are deployed and monitored. |
| Senior (5+ years) | Lead product areas, choose the stack, and balance speed and quality. |
| Staff and beyond | Own the technical direction of a product, or move toward engineering management. |

## Interview preparation

- DSA at medium level.
- Build or design a small feature across the stack.
- SQL and schema questions, plus a frontend question.
- Explain a project you shipped, including a trade-off you made.
- Authentication flows and common security mistakes.

## Interview questions and answers

**Q: Where would you store a login session, and why?**

Either a server-side session with an httpOnly, secure cookie, or a signed token. Cookies marked httpOnly resist theft by scripts. Avoid local storage for sensitive tokens.

**Q: What is CORS, and why does it exist?**

Browsers block a page from reading responses from another origin unless the server allows it with CORS headers. It protects users from malicious sites reading their data.

**Q: SSR, SSG or client rendering: how do you choose?**

SSG for content that rarely changes, SSR for pages that depend on each request, and client rendering for highly interactive parts behind a login. Mix them per page.

**Q: How do you validate input?**

On the server always, since the client can be bypassed. Use a schema, reject bad data early, and escape output.

**Q: How do you deploy a small full-stack app?**

Build the frontend, run the API with a managed database, keep secrets in environment variables, set up HTTPS, and add a CI check before deploy.

## Glossary

| Term | Meaning |
| --- | --- |
| Monolith | One codebase and deployment that holds the whole app. |
| ORM | A library that maps database rows to objects in code. |
| JWT | A signed token that carries identity between client and server. |
| CORS | Browser rules about which sites may call your API. |
| SSR | Rendering HTML on the server for each request. |
| SSG | Rendering pages at build time into static files. |
| Migration | A versioned change to the database schema. |
| Environment variable | A setting kept outside the code, such as a secret or URL. |

## Resources

- [The Odin Project](https://www.theodinproject.com): A free full-stack curriculum
- [Full Stack Open](https://fullstackopen.com/en/): University of Helsinki's free course
- [Learn Next.js](https://nextjs.org/learn): The official interactive tutorial
- [roadmap.sh: Full Stack](https://roadmap.sh/full-stack): A visual checklist of topics
