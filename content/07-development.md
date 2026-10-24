# Development and projects

Do DSA for everyone. After the basics, go deep in one track instead of sampling all of them, and ship projects that real people use.

## Pick a track

| Track | Learn | Good first project |
| --- | --- | --- |
| Web (frontend) | HTML, CSS, JavaScript, TypeScript, React, Next.js, accessibility | A portfolio site and a dashboard with live data |
| Web (backend) | Node.js or Python, REST APIs, SQL, authentication, caching, testing | A REST API with login, roles and a database |
| Mobile | React Native with Expo, or Kotlin / Swift | A campus utility app (timetable, notes, bus timings) |
| AI / ML | Python, NumPy, pandas, scikit-learn, then deep learning | A model on a real Kaggle dataset, with a small demo app |
| DevOps / Cloud | Linux, Docker, CI/CD with GitHub Actions, AWS or GCP basics | Deploy one of your projects with automated tests and deploys |
| Security | Networking, web vulnerabilities, the OWASP Top 10, beginner CTFs | Solve beginner CTFs and write up what you learned |

## Where to learn

- [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development): The reference for HTML, CSS and JavaScript
- [The Odin Project](https://www.theodinproject.com): A free full-stack curriculum built on projects
- [Learn Next.js](https://nextjs.org/learn): The official interactive tutorial
- [roadmap.sh](https://roadmap.sh): Roadmaps for any track
- [fast.ai](https://course.fast.ai): Practical deep learning
- [Kaggle](https://www.kaggle.com): Datasets and ML practice
- [picoCTF](https://picoctf.org): Beginner-friendly security challenges
- [OWASP Top 10](https://owasp.org/www-project-top-ten/): The most common web security risks
- [System Design Primer](https://github.com/donnemartin/system-design-primer): Read after you finish the DSA basics

## Tools every student should know

- Terminal and Linux: navigation, grep, ssh, permissions and shell scripts.
- Git beyond the basics: branches, rebase, resolving conflicts, clear commit messages and pull requests.
- An editor and debugger: learn your editor's shortcuts and use a debugger instead of print statements.
- Docker basics: write a Dockerfile for one project.
- Reading documentation: go to the official docs before a video. This one skill separates a beginner from a developer.
- Testing: write a few unit tests for every project.

- [The Missing Semester](https://missing.csail.mit.edu): The shell, Git, editors and debugging, taught properly
- [Pro Git](https://git-scm.com/book): The Git book
- [GitHub Skills](https://skills.github.com): Short hands-on Git and GitHub courses

## Building projects that count

- Build 2–3 projects, not 10. Finish them and deploy them.
- Pick a real problem: a tool for your hostel, club or college. Real users beat tutorial clones.
- Each project should include a database, authentication and a deployed link.
- Write a README with a screenshot, a description, the tech stack and how to run it.
- Be ready to explain why you made each design choice.

## What to build in each year

| Year | Projects that fit | What they prove |
| --- | --- | --- |
| 1 | Calculator, to-do list, quiz game, personal portfolio, a small command-line tool | You can write, run and share working code. |
| 2 | Blog or notes app with login, expense tracker, weather dashboard, a small REST API | You can use a database, authentication and an external API. |
| 3 | A full product for real users, a clone of a known app with your own twist, a project for your target role | You can design, build, test and deploy something larger. |
| 4 | Final-year project, an open-source contribution series, a deployed side project with users | You can finish and maintain real work. |

## A path from idea to deployed app

1. Write one sentence: who it helps and what it does.
2. List the smallest set of features that makes it useful, and cut the rest for later.
3. Sketch the screens on paper and list the data you will store.
4. Set up the repository, a README and a simple folder structure.
5. Build the data layer first, then the API, then the screens.
6. Add validation and error handling before you add new features.
7. Write tests for the parts that would hurt most if they broke.
8. Deploy early, even if it is ugly, and fix what only shows up in production.
9. Write the README with screenshots, setup steps and what you would improve next.

## From an SDE's desk

The gap between a tutorial project and a job is the boring parts: error handling, logging, configuration, deployment and keeping it running.

- Handle failure on purpose. What happens if the database is down, the input is empty, or the API is slow?
- Keep configuration and secrets out of the code from day one. Leaked keys on GitHub are a very common mistake.
- Commit small and often, with messages that explain why, not only what.
- Deploy early. The first deployment always finds problems that your laptop hid.
