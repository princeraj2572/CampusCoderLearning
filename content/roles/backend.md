# Backend developer

*Build the servers, APIs and databases that apps run on.*

## The job

You write the code that runs on servers: the APIs a website or app calls, the rules that decide who can do what, and the database queries behind it. Users never see your work, but they feel it when it is slow or broken.

### A day in the job

- Design and build API endpoints, and agree their shape with the frontend or mobile team.
- Write and tune SQL queries and database schemas.
- Debug production problems from logs, metrics and error reports.
- Review teammates' code and write tests for your own.
- Talk to other services: payments, email, queues, third-party APIs.

**Good if:** You like logic, data and making systems reliable more than pixels. You are patient when debugging.

**Main tools:** Java, Node.js/TypeScript, Python or Go, SQL, Redis

## Where you will work

| Type | What you do there |
| --- | --- |
| Product companies | Own APIs and services for a large user base. |
| Startups | Build the whole backend quickly with a small team. |
| Fintech and e-commerce | Payments, orders and reliability matter most. |
| Service companies | Build systems for clients across industries. |

## Year by year

| Year | Focus | Build | Milestone |
| --- | --- | --- | --- |
| Year 1 | One language, HTTP basics, Git, SQL basics | A command-line tool and a small HTTP server | Two projects online and easy problems solved alone |
| Year 2 | REST APIs, a relational database, authentication, testing | A full CRUD API with login, deployed | A deployed API with docs and tests |
| Year 3 | Caching, queues, Docker, system design, an internship | A project with a cache, a background job and metrics | An internship offer and a design you can explain |
| Year 4 | Scale, reliability, security, interview loops | A final project with logs, monitoring and load tests | An offer for a backend role |

## Study plan

### Foundations (Months 1–2)

- One language well (Java, Python, Node.js with TypeScript or Go).
- How the web works: HTTP, status codes, headers, cookies, DNS.
- Git, the terminal, and reading error messages calmly.
- Basic SQL: tables, joins, GROUP BY.

**Build:** A small command-line tool and a plain HTTP server with three endpoints.

### Core backend (Months 3–5)

- REST API design: resources, verbs, pagination, versioning, error format.
- A relational database in depth: schema design, normalisation, indexes, transactions.
- Authentication and authorisation: sessions, JWT, OAuth, role checks.
- Input validation, logging and configuration through environment variables.
- Automated tests: unit tests and API tests.

**Build:** A CRUD API with login, roles, a real database, tests and a deploy.

### Make it fast and reliable (Months 6–8)

- Caching with Redis, and when a cache causes more problems than it solves.
- Background jobs and queues; retries and idempotency.
- Reading query plans (EXPLAIN) and fixing slow queries.
- Rate limiting, timeouts, and handling a downstream service that fails.
- Docker and a CI pipeline that runs your tests.

**Build:** Add a cache, a job queue and rate limiting to the previous project, and measure the difference.

### Systems thinking (Months 9+)

- System design basics: load balancers, replication, sharding, CAP theorem.
- Message brokers and event-driven designs.
- Observability: structured logs, metrics, traces, alerts.
- Security basics: OWASP Top 10, secrets handling, SQL injection.

**Build:** A design document and working prototype for a URL shortener or a notification system.

## What to build

| Level | Project | What | What it proves |
| --- | --- | --- | --- |
| Starter | Library or hostel manager API | CRUD endpoints, a relational schema, login, and a README with every endpoint documented. | You can model data and build a clean API. |
| Intermediate | URL shortener with analytics | Short codes, redirects, click counts, a cache in front of the database, rate limiting. | You understand caching, indexes and abuse protection. |
| Advanced | Order and payment service | Idempotent payment calls, a job queue for emails and invoices, retries, and an audit log. | You can design for failure, which is the real backend skill. |

## Tools

- PostgreSQL or MySQL, plus a client such as DBeaver
- Postman or curl for trying APIs
- Docker and Docker Compose
- Redis
- Git and GitHub Actions
- A debugger and a profiler for your language

## A week of study

| When | What |
| --- | --- |
| Mon, Wed | Study one backend topic and apply it in your project (1 hour) |
| Tue, Thu | DSA: two problems and a revision (45 minutes) |
| Fri | SQL practice or a system design case (45 minutes) |
| Weekend | Build: two hours on your project, then a contest |

## A senior's advice

### Do

- Learn SQL properly. Most backend work is a database problem in disguise.
- Write the data model first. A good schema removes half the bugs.
- Log enough to debug a failure at 2 am, but never passwords or tokens.
- Add an index only after checking the query plan.
- Make every write safe to retry.

### Avoid

- Reaching for microservices before one service is well built.
- Storing money in floating-point numbers.
- Trusting any input from the client, even from your own frontend.
- Skipping tests because 'it works on my machine'.
- Copying a framework tutorial without knowing what the framework does for you.

## Engineer's notes

- Most production problems are data problems: bad migrations, missing indexes, and inconsistent state. Treat schema changes with care.
- Log with request IDs so you can follow one request across services. You will thank yourself during an incident.
- Never trust input from a client. Validate on the server, always.
- Make writes idempotent where you can. Retries are normal and must not double-charge anyone.
- Version your API. Changing a response field breaks someone you have never met.

## Mistakes juniors make

- Building endpoints without thinking about who is allowed to call them.
- Returning different error shapes from different endpoints.
- Running a query inside a loop.
- Catching an exception and doing nothing with it.
- Never reading the logs of their own deployed service.

## Questions to ask a senior

- What was the worst production incident here, and what did you change afterwards?
- How do you decide when to add a new service?
- What would you check first if the API suddenly became slow?

## Myths and reality

| Myth | Reality |
| --- | --- |
| Backend is only CRUD. | The hard part is correctness, speed and failure at scale, not the endpoints. |
| You must learn microservices early. | A well-built single service is better than a badly split system. |
| The framework is the skill. | Databases, networking and design outlast any framework. |

## First 90 days

| When | Goal |
| --- | --- |
| Days 1–30 | Get the project running locally, fix two small bugs, and read the main request flow end to end. |
| Days 31–60 | Ship a small feature with tests, and learn how the team deploys and monitors. |
| Days 61–90 | Take an on-call shadow shift and own a small improvement, such as a slow query. |

## Career ladder

| Level | Focus |
| --- | --- |
| Junior (0–2 years) | Finish well-scoped tasks, write tests, and learn the codebase. |
| Mid-level (2–5 years) | Own a service or feature area, design APIs, and fix production problems alone. |
| Senior (5+ years) | Design systems, review others, and make trade-offs between speed, cost and safety. |
| Staff and beyond | Set technical direction across teams and grow other engineers. |

## Interview preparation

- DSA at medium level, usually hashing, trees and graphs.
- SQL queries and schema design for a small app.
- Design an API or a service such as a URL shortener.
- What happens when you type a URL; how HTTPS works; how sessions differ from JWTs.
- Walk through one of your projects, including a bug you fixed.

## Interview questions and answers

**Q: What is the difference between authentication and authorisation?**

Authentication proves who you are (a login). Authorisation decides what you may do once known (permissions). Check both on every protected request.

**Q: Why do we use database indexes, and what is the cost?**

An index lets the database find rows without scanning the table, so reads get faster. The cost is extra storage and slower writes, because the index must be updated too.

**Q: How would you make an endpoint safe to retry?**

Make it idempotent: accept a client-supplied idempotency key, store the result of the first call, and return the same result for repeats.

**Q: What is the N+1 query problem?**

Running one query for a list and then one more query per item. Fix it with a join or by loading the related rows in a single batched query.

**Q: How does a cache go wrong?**

Stale data after a change, a stampede when a popular key expires, and memory growth. Use expiry, invalidate on writes, and protect hot keys.

## Glossary

| Term | Meaning |
| --- | --- |
| API | A set of endpoints other programs call to use your service. |
| REST | A style of API using HTTP methods and resource URLs. |
| Index | A database structure that speeds up lookups at the cost of slower writes. |
| Transaction | A group of database changes that succeed or fail together. |
| Cache | Fast storage for results you expect to need again. |
| Idempotent | An operation that gives the same result if repeated. |
| Queue | A buffer that lets work happen later, in order. |
| Rate limit | A cap on how many requests a client can make in a time window. |

## Resources

- [roadmap.sh: Backend](https://roadmap.sh/backend): A visual checklist of topics
- [System Design Primer](https://github.com/donnemartin/system-design-primer): Design problems with worked answers
- [Use The Index, Luke](https://use-the-index-luke.com): Free guide to SQL indexing
- [OWASP Top 10](https://owasp.org/www-project-top-ten/): The risks every backend developer should know
