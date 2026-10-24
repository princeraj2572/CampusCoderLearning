# Frontend developer

*Build what people see, tap and read in the browser.*

## The job

You turn designs and ideas into pages that load fast, work on every screen size and can be used by everyone, including people on keyboards and screen readers. You also decide how data from the server is fetched, cached and shown.

### A day in the job

- Build components from a design and make them responsive.
- Connect pages to APIs and handle loading, empty and error states.
- Fix layout and browser bugs.
- Improve speed: images, bundle size, rendering.
- Work with designers and backend developers on how a feature should behave.

**Good if:** You care how things look and feel, you notice small details, and you enjoy quick visual feedback.

**Main tools:** HTML, CSS, TypeScript, React, Next.js

## Where you will work

| Type | What you do there |
| --- | --- |
| Product companies | Own the web app that customers use every day. |
| Agencies | Build many sites for different clients quickly. |
| SaaS startups | Ship dashboards and tools with design and backend teams. |
| E-commerce | Speed and accessibility directly affect sales. |

## Study plan

### Web foundations (Months 1–2)

- Semantic HTML, forms and links.
- CSS: the box model, flexbox, grid, responsive design.
- JavaScript: functions, closures, arrays, async/await, the DOM.
- Browser DevTools: elements, network and console tabs.

**Build:** Three static pages with no framework: a portfolio, a landing page and a form.

### Modern frontend (Months 3–5)

- TypeScript basics.
- React: components, props, state, effects and custom hooks.
- Fetching data, loading and error states, and forms with validation.
- A CSS approach (Tailwind or CSS modules) and a component library.
- Routing and a framework such as Next.js.

**Build:** A dashboard that loads real API data, with search, filters and a dark mode.

### Quality (Months 6–8)

- Accessibility: keyboard use, focus, labels, contrast, ARIA only when needed.
- Performance: Core Web Vitals, image formats, lazy loading, code splitting.
- Testing: component tests and one end-to-end test with Playwright.
- State management beyond local state, and caching server data.

**Build:** Audit your dashboard with Lighthouse and fix every issue you can explain.

### Depth (Months 9+)

- Rendering strategies: static, server and client rendering, and when to use each.
- How React works underneath: rendering, reconciliation, keys.
- Design systems and reusable components.
- Basic backend skills, so you can build a full feature alone.

**Build:** A small design system with documented components and tests.

## What to build

| Level | Project | What | What it proves |
| --- | --- | --- | --- |
| Starter | Personal portfolio, hand-written | Responsive, accessible, under 100 KB, and deployed on a free host. | You know HTML and CSS without a framework doing the work. |
| Intermediate | Data dashboard | Charts, tables with sorting and filters, loading and error states, dark mode. | You can handle real data and all the states around it. |
| Advanced | Collaborative or real-time app | A shared to-do board or chat with optimistic updates, offline handling and tests. | You can manage complex state and keep the interface honest. |

## Tools

- VS Code with ESLint and Prettier
- Chrome DevTools and the React DevTools extension
- Node.js with npm or pnpm
- Figma, at least for reading designs
- Lighthouse and axe for accessibility and speed checks
- Playwright for browser tests

## A week of study

| When | What |
| --- | --- |
| Mon, Wed | One lesson on a frontend topic, then apply it (1 hour) |
| Tue, Thu | DSA: two problems and a JavaScript question (45 minutes) |
| Fri | Rebuild one real site's component from scratch (45 minutes) |
| Weekend | Build: two hours on your project, then one accessibility fix |

## A senior's advice

### Do

- Test with the keyboard only. If you cannot use your page, neither can many users.
- Handle every state: loading, empty, error, slow network.
- Learn plain CSS before a library, so you can fix things when it breaks.
- Measure performance before optimising.
- Read the framework's docs. Most of the answers are there.

### Avoid

- Adding a library for something the browser already does.
- Using div for everything.
- Putting all state in one global store from day one.
- Designing only for your own laptop screen.
- Chasing every new framework instead of mastering one.

## Mistakes juniors make

- Fixing a layout with magic numbers instead of understanding the cause.
- Fetching data inside every component.
- Not handling the loading and error states.
- Removing the focus outline.
- Testing only on one browser.

## Questions to ask a senior

- How do you decide between a new component and a variation of an existing one?
- What does a performance regression look like on this team?
- How do you work with designers when the design cannot be built as drawn?

## Myths and reality

| Myth | Reality |
| --- | --- |
| Frontend is just making things pretty. | It is state, performance, accessibility and a lot of engineering. |
| You must know every framework. | Learn one framework deeply and the JavaScript beneath it. |
| Frontend roles do not need DSA. | Many companies still test it, though often at a lighter level. |

## First 90 days

| When | Goal |
| --- | --- |
| Days 1–30 | Run the app, fix small visual bugs, and learn the component library and naming. |
| Days 31–60 | Build a feature from a design, including empty and error states and tests. |
| Days 61–90 | Find and fix one real performance or accessibility problem and show the numbers. |

## Career ladder

| Level | Focus |
| --- | --- |
| Junior (0–2 years) | Turn designs into working, responsive components and fix visual bugs. |
| Mid-level (2–5 years) | Own features, manage state well, and improve accessibility and speed. |
| Senior (5+ years) | Design the frontend architecture, guide the design system, and mentor others. |
| Staff and beyond | Set standards across products and connect design, product and engineering. |

## Interview preparation

- JavaScript fundamentals: closures, this, promises, the event loop.
- Build a small component live, such as a search box with debouncing or an accordion.
- CSS layout questions with flexbox and grid.
- React: hooks, why keys matter, how to avoid unnecessary renders.
- How you would make a page fast and accessible.

## Resources

- [roadmap.sh: Frontend](https://roadmap.sh/frontend): A visual checklist of topics
- [web.dev Learn](https://web.dev/learn): Google's courses on CSS, accessibility and performance
- [JavaScript.info](https://javascript.info): The modern JavaScript tutorial
- [React documentation](https://react.dev/learn): Learn React from the official docs
