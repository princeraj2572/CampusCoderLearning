# QA / test automation engineer

*Make sure the software works before users find out that it does not.*

## The job

You find problems early. You plan what to test, write automated tests that run on every change, explore the product like a curious user would, and tell the team clearly what is broken and how to reproduce it. Good testers save a company from expensive failures.

### A day in the job

- Read a new feature's requirements and decide what could go wrong.
- Write and maintain automated tests for the interface and the API.
- Explore the product by hand to find problems a script would miss.
- Report bugs with exact steps, evidence and the expected result.
- Keep the test pipeline fast and reliable, and fix flaky tests.

**Good if:** You notice details, you like asking 'what if?', and you enjoy proving a system wrong in a constructive way.

**Main tools:** Python or JavaScript, Playwright or Selenium, Postman, SQL, GitHub Actions

## Where you will work

| Type | What you do there |
| --- | --- |
| Product companies | Quality engineers embedded in feature teams. |
| Service and testing firms | Test software for many clients. |
| Fintech and healthcare | Testing is part of compliance. |
| Game studios | Playtesting and automation for builds. |

## Study plan

### Testing fundamentals (Months 1–2)

- Testing levels: unit, integration, system and acceptance.
- Test design: equivalence classes, boundary values and decision tables.
- How to write a clear bug report and a test case.
- Basic programming in Python or JavaScript, plus SQL.

**Build:** A test plan and 30 written test cases for a website you use every day.

### API and interface automation (Months 3–5)

- Testing REST APIs with Postman, then with code.
- Browser automation with Playwright (or Selenium).
- A test framework: pytest, or Vitest and Jest.
- Page objects and keeping tests easy to read and maintain.

**Build:** An automated suite for a demo shop: sign-in, search, cart and checkout.

### Quality in the pipeline (Months 6–8)

- Running tests in GitHub Actions on every pull request.
- Flaky tests: why they happen and how to remove them.
- Test data, mocks and test environments.
- Reports, and metrics that matter, such as escaped bugs and test run time.

**Build:** Plug the suite into CI with a report, and make it run in under five minutes.

### Beyond functional testing (Months 9+)

- Performance testing with k6 or JMeter.
- Accessibility and security testing basics.
- Mobile app testing and cross-browser testing.
- Contract testing and testing in production safely.

**Build:** A load test with a clear report on where the app slows down.

## What to build

| Level | Project | What | What it proves |
| --- | --- | --- | --- |
| Starter | Manual test plan and bug reports | Test a real app, write 30 cases and file ten well-written bug reports. | You think like a tester and write clearly. |
| Intermediate | Automated suite for a demo shop | UI and API tests, readable structure, run in CI with a report. | You can build and maintain automation. |
| Advanced | Test platform with performance checks | Parallel runs, test data setup, a load test and a dashboard of failures. | You can improve the whole quality process, not just write scripts. |

## Tools

- Playwright or Selenium
- Postman
- pytest, or Vitest and Jest
- GitHub Actions
- Jira or a similar issue tracker
- k6 for load tests

## A week of study

| When | What |
| --- | --- |
| Mon, Wed | Learn a testing technique or tool and practise on a real site (1 hour) |
| Tue, Thu | Coding practice and SQL (45 minutes) |
| Fri | Find and write up five bugs in an open-source app (45 minutes) |
| Weekend | Build: two hours on your automation project |

## A senior's advice

### Do

- Learn to code properly. The best testers are strong developers who choose to protect quality.
- Test the risky parts first, and automate what is run often.
- Write bug reports a developer can reproduce in one minute.
- Fix flaky tests the day they appear, or the team will stop trusting the suite.
- Work with developers early, when a requirement is still cheap to change.

### Avoid

- Automating everything, including tests that rarely run and often change.
- Writing long end-to-end tests when a small API test would do.
- Using fixed sleeps instead of waiting for a condition.
- Treating testing as a final stage after development ends.
- Blaming developers. You are on the same team.

## Mistakes juniors make

- Writing tests that depend on each other's order.
- Using fixed waits instead of waiting for the page.
- Reporting a bug with no steps or screenshot.
- Testing only the happy path.
- Never reading the code under test.

## Questions to ask a senior

- Which bugs reach users most often, and why do they escape?
- How do you decide what to automate and what to leave manual?
- How do you stop the suite becoming slow and flaky?

## Myths and reality

| Myth | Reality |
| --- | --- |
| QA is a lesser job than development. | Good quality engineers write code, design systems and are valued highly. |
| Automation will replace testers. | It replaces repeated checks. Thinking about risk still needs people. |
| Testing is only clicking around. | Modern testing is programming, API work and pipeline design. |

## First 90 days

| When | Goal |
| --- | --- |
| Days 1–30 | Learn the product as a user, run the existing tests and file your first real bug reports. |
| Days 31–60 | Automate a few repeated checks and fix at least one flaky test. |
| Days 61–90 | Own the test plan for a feature from requirement to release. |

## Career ladder

| Level | Focus |
| --- | --- |
| Junior (0–2 years) | Run and write test cases, report bugs clearly and learn the product. |
| Mid-level (2–5 years) | Own the automation for an area, keep it reliable and mentor newcomers. |
| Senior (5+ years) | Design the test strategy and framework, and shape quality across teams. |
| Staff and beyond | Set the quality engineering direction, or move into engineering leadership. |

## Interview preparation

- Test a simple object, such as a pen, a login page or an elevator, and explain your approach.
- Write a test case and a bug report from a given scenario.
- Coding at an easy to medium level, plus SQL.
- Explain how you would design an automation framework and avoid flaky tests.
- Differences between severity and priority, regression and retesting, smoke and sanity tests.

## Resources

- [Playwright documentation](https://playwright.dev/docs/intro): Modern browser automation, with good guides
- [Test Automation University](https://testautomationu.com): Free courses on automation tools and techniques
- [Ministry of Testing](https://www.ministryoftesting.com): Articles and a community for testers
- [k6 documentation](https://grafana.com/docs/k6/latest/): Performance testing with code
