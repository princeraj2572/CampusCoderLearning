# Core subjects

DBMS, operating systems, networks and OOP are asked in almost every interview. Learn them alongside DSA, and build small projects to make the ideas stick.

## Where to learn

- [Gate Smashers](https://www.youtube.com/@GateSmashers): DBMS, OS and networks playlists
- [Knowledge Gate](https://www.youtube.com/@KnowledgeGATE): A more detailed alternative
- [SQLBolt](https://sqlbolt.com): Learn SQL by typing queries
- [Mode SQL Tutorial](https://mode.com/sql-tutorial): SQL from basics to window functions
- [LeetCode SQL 50](https://leetcode.com/studyplan/top-sql-50/): SQL practice for interviews
- [GeeksforGeeks DBMS](https://www.geeksforgeeks.org/dbms/): Quick notes for revision
- [CS50](https://cs50.harvard.edu/x/): A free introduction to computer science from Harvard

## DBMS and SQL: what to cover

Practise by designing the database for a small app (a library, a hostel, this leaderboard), writing 20 queries for it, and explaining your design choices.

| Area | Topics |
| --- | --- |
| Basics | Database vs file system, DBMS architecture, keys (primary, candidate, foreign, super), ER model |
| Design | Functional dependencies, normalisation up to BCNF, 1NF to 3NF differences, denormalisation |
| SQL | SELECT, WHERE, GROUP BY, HAVING, joins (inner, left, right, full, self), subqueries, window functions, CTEs, indexes |
| Transactions | ACID, isolation levels, dirty, non-repeatable and phantom reads, locking, deadlocks, serialisability |
| Internals | B and B+ trees, indexing, query optimisation, recovery and logging |
| Beyond SQL | SQL vs NoSQL, CAP theorem, sharding and replication |

## Operating systems, networks and OOP

- OS: processes vs threads, scheduling, synchronisation (mutex, semaphore), deadlock, memory management, paging and virtual memory.
- Computer networks: OSI and TCP/IP layers, TCP vs UDP, what happens when you type a URL in the browser, HTTP and HTTPS, DNS, IP addressing.
- OOP: the four pillars with real examples, SOLID principles, abstract class vs interface, and the common design patterns.

## Concept-clearing projects

Small projects that teach how things work underneath. Each builds on the one before. The last column is the test: you understand it when you can explain that out loud, without notes.

- Do them in order if you want foundations first. Projects 1 to 4 cover most of what interviews and the OS and networking parts of GATE ask.
- Fit them to your gaps. Projects 2 and 10 build Redis knowledge and system design thinking. For Docker, add a mini container runtime later (Linux only).
- Keep each to about a week. Do not start the next until you pass its test.

| # | Project | Concept it clears | You understand it when you can explain |
| --- | --- | --- | --- |
| 1 | HTTP server from scratch | Sockets, TCP, request and response format, status codes | What happens between typing a URL and seeing a page |
| 2 | Mini Redis | Protocols, hash maps, expiry, handling many clients | Why Redis is fast, and what a client and a server each do |
| 3 | Unix shell | Processes, pipes, file descriptors, signals | What `ls \| grep x` does at the system level |
| 4 | Scheduler and memory simulator | CPU scheduling, paging, page replacement | Why one algorithm beats another on a given workload |
| 5 | Regex engine | Finite automata, parsing | How a pattern becomes a state machine |
| 6 | Tiny interpreter, then a bytecode VM | Tokenising, parsing, scope, stacks, compilation | How code becomes behaviour |
| 7 | Mini database (B-tree on disk, simple SQL) | Indexes, pages, query execution | Why an index speeds up a query and what it costs on writes |
| 8 | Mini Git | Hashing, content-addressed storage, graphs | What a commit really is, and why branches are cheap |
| 9 | Search engine (inverted index, BM25) | Indexing, ranking, text processing | Why one page ranks above another |
| 10 | Load balancer and reverse proxy | Concurrency, health checks, rate limiting | What happens when one backend dies |
| 11 | Autograd engine (tiny neural network library) | Backpropagation, gradients, training loops | How a model learns from an error |
| 12 | Auth system (sessions, password hashing, JWT, OAuth flow) | Security basics, cookies, tokens | Why passwords are hashed, not encrypted, and what a token proves |

## Rules for every project

1. Write it yourself. Use AI as a tutor that gives tasks and reviews your work, not one that writes the code.
2. Write a one-page note: what it does, the one idea that clicked, and the one bug that taught you something.
3. Explain it to a friend, or record yourself for 3 minutes. Wherever you get stuck is the concept to revisit.
