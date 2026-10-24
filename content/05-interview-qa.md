# Interview questions and answers

The questions interviewers ask again and again, with short answers you can build on. Do not memorise the words. Understand each answer well enough to explain it with an example of your own.

## How to use this page

1. Cover the answer and try to say it out loud first.
2. Compare, and note what you missed.
3. Add a small example or a real use. Interviewers remember examples.
4. Come back to the questions you missed after a week.

## DBMS and SQL

**Q: What is normalisation, and why do we do it?**

It is organising tables so each fact is stored once, to avoid update, insert and delete anomalies. 1NF removes repeating groups, 2NF removes partial dependencies on a key, 3NF removes dependencies between non-key columns, and BCNF tightens 3NF.

**Q: What are the ACID properties?**

Atomicity: a transaction happens fully or not at all. Consistency: it moves the database from one valid state to another. Isolation: concurrent transactions do not see each other's half-done work. Durability: once committed, it survives a crash.

**Q: Primary key, candidate key, foreign key: what is the difference?**

A candidate key is any minimal set of columns that identifies a row. The primary key is the candidate you choose, and it cannot be null. A foreign key is a column that refers to a primary key in another table, to enforce a relationship.

**Q: What is the difference between WHERE and HAVING?**

WHERE filters rows before grouping. HAVING filters groups after aggregation, so it can use functions such as COUNT and SUM.

**Q: Explain INNER, LEFT, RIGHT and FULL joins.**

INNER keeps only rows that match on both sides. LEFT keeps all rows from the left table and fills nulls where nothing matches. RIGHT is the mirror. FULL keeps all rows from both sides.

**Q: What is an index, and what does it cost?**

An index is a separate structure, usually a B+ tree, that lets the database find rows without scanning the table. It speeds up reads, but it uses space and slows down inserts, updates and deletes, because it must be maintained.

**Q: What are the transaction isolation levels?**

Read uncommitted, read committed, repeatable read and serialisable. Higher levels prevent more anomalies (dirty, non-repeatable and phantom reads) but allow less concurrency.

**Q: How is DELETE different from TRUNCATE and DROP?**

DELETE removes chosen rows and can be rolled back and filtered. TRUNCATE removes all rows quickly and resets the table. DROP removes the table itself, with its structure.

**Q: SQL or NoSQL?**

Choose SQL when you need relations, transactions and a fixed schema. Choose NoSQL when you need flexible documents, simple key-based access or horizontal scale, and can accept weaker consistency. Many systems use both.

**Q: How would you find the second highest salary?**

Use a subquery on the maximum below the maximum, or DENSE_RANK() over salary descending and select rank 2. The window-function version also handles ties and the top N.

## Operating systems

**Q: What is the difference between a process and a thread?**

A process is a running program with its own memory space. Threads are lightweight units of execution inside a process that share its memory, so they communicate easily but can interfere with each other.

**Q: What is a deadlock, and how can it be prevented?**

Processes wait for each other's resources forever. It needs four conditions: mutual exclusion, hold and wait, no pre-emption and circular wait. Break any one, for example by acquiring locks in a fixed order, to prevent it.

**Q: What is the difference between a mutex and a semaphore?**

A mutex lets one thread at a time into a critical section and is owned by the thread that locks it. A semaphore holds a count, so it lets up to N threads in and can signal between threads.

**Q: Explain paging and virtual memory.**

Memory is divided into fixed-size pages, and a page table maps virtual addresses to physical frames. Virtual memory lets a process use more memory than is physically present by keeping rarely used pages on disk.

**Q: What is a page fault, and what is thrashing?**

A page fault happens when a program touches a page that is not in memory, so the OS loads it from disk. Thrashing is when the system spends most of its time swapping pages instead of doing work.

**Q: Name some CPU scheduling algorithms.**

First come first served, shortest job first, round robin, priority scheduling and multilevel queues. Round robin gives fair time slices, and shortest job first minimises average waiting time but can starve long jobs.

**Q: What is a context switch?**

The CPU saves the state of the running process or thread and loads the state of another. It enables multitasking, but it has a cost, so too many switches waste time.

**Q: What is a system call?**

The way a user program asks the kernel to do something privileged, such as reading a file or creating a process. It switches from user mode to kernel mode and back.

## Computer networks

**Q: What happens when you type a URL into a browser?**

The browser looks up the IP address through DNS, opens a TCP connection (and a TLS handshake for HTTPS), sends an HTTP request, the server returns a response, and the browser parses the HTML and loads the other resources to render the page.

**Q: What is the difference between TCP and UDP?**

TCP is connection-based and reliable: it orders data, retransmits lost packets and controls congestion. UDP sends independent datagrams with no guarantee, so it is faster and used for video calls, games and DNS.

**Q: Explain the TCP three-way handshake.**

The client sends SYN, the server replies SYN-ACK, and the client sends ACK. Both sides now agree on starting sequence numbers and the connection is open.

**Q: What are the layers of the OSI and TCP/IP models?**

OSI has seven: physical, data link, network, transport, session, presentation and application. TCP/IP groups these into four: link, internet, transport and application.

**Q: How does HTTPS work?**

HTTPS is HTTP over TLS. The server shows a certificate, the client verifies it, and both agree on keys for encrypted communication. It protects against eavesdropping and tampering.

**Q: What is DNS?**

The system that turns names like example.com into IP addresses. A resolver asks the root, the top-level domain and the authoritative servers, and caches the answers.

**Q: What is the difference between HTTP/1.1, HTTP/2 and HTTP/3?**

HTTP/1.1 sends one request at a time per connection. HTTP/2 multiplexes many requests on one connection. HTTP/3 does the same over QUIC (on UDP) to avoid head-of-line blocking at the transport level.

**Q: What is the difference between GET and POST, and what do the status codes mean?**

GET reads data and should have no side effects, while POST sends data to create or change something. 2xx means success, 3xx redirect, 4xx a client error (such as 404 or 401) and 5xx a server error.

## OOP and design

**Q: What are the four pillars of OOP?**

Encapsulation: hide data behind methods. Abstraction: expose only what matters. Inheritance: reuse and extend behaviour. Polymorphism: one interface, many behaviours.

**Q: Abstract class or interface?**

An interface defines a contract with no state and can be implemented by any class. An abstract class can share state and partial code among related classes. Use an interface for 'can do', and an abstract class for 'is a'.

**Q: What does SOLID stand for?**

Single responsibility, open for extension and closed for modification, Liskov substitution, interface segregation, and dependency inversion. Together they keep code easy to change.

**Q: Overloading or overriding?**

Overloading is several methods with the same name and different parameters, decided at compile time. Overriding is a subclass changing an inherited method, decided at run time.

**Q: Composition or inheritance?**

Prefer composition: build objects from smaller parts. Inheritance creates tight coupling and fragile hierarchies, so use it only for a true 'is a' relationship.

**Q: Name a few design patterns and when you would use them.**

Singleton for one shared instance, Factory to create objects without naming the class, Observer to notify many listeners, Strategy to swap algorithms, and Decorator to add behaviour without subclassing.

## Web and backend basics

**Q: What is the difference between authentication and authorisation?**

Authentication proves who you are. Authorisation decides what you may do once known.

**Q: Sessions or JWTs?**

A session keeps state on the server and gives the client an identifier in a cookie, so it is easy to revoke. A JWT is a signed token holding claims, so the server stays stateless, but revoking it before it expires is harder.

**Q: What is REST?**

An API style where URLs name resources and HTTP verbs act on them: GET to read, POST to create, PUT or PATCH to update and DELETE to remove, with stateless requests.

**Q: What is CORS?**

A browser rule that stops a page from one origin reading responses from another unless the server says so with headers. It protects users, and does not protect the server itself.

**Q: How do you prevent SQL injection?**

Never build queries by joining user input into a string. Use parameterised queries or an ORM, validate input and give the database user only the permissions it needs.

**Q: What is caching, and what is the risk?**

Keeping a copy of data that is expensive to compute or fetch. The risk is stale data, so you need a plan for expiry and invalidation.

## Behavioural questions

Use the STAR shape: Situation, Task, Action and Result. Keep each answer to about two minutes, say 'I' for what you did, and end with a result and what you learned.

**Q: Tell me about yourself.**

Give a 60-second summary: who you are, what you study, one or two projects or results that matter, and why you want this role. Do not recite your resume.

**Q: Tell me about a project you are proud of.**

Describe the problem, your part, one technical decision and why you made it, a bug that taught you something, and the result, ideally with a number.

**Q: Describe a time you failed.**

Choose a real, small failure. Say what you did wrong, how you fixed it and what you do differently now. Do not blame others.

**Q: How do you handle disagreement in a team?**

Listen first, explain your reasoning with evidence, find the goal you share, and accept the team's decision once it is made.

**Q: Why do you want to work here?**

Name something specific: the product, the technology, the team or the problem. Link it to what you want to learn. Research before the interview.

**Q: Do you have any questions for us?**

Always ask. For example: what does the first three months look like, how do you review code, what is the hardest problem the team has now, and how do new people get mentored?

## Behavioural patterns: the STAR method in detail

| Part | What to say | Rough share of the answer |
| --- | --- | --- |
| Situation | One or two sentences of context: where, when, what the project or team was. | 15% |
| Task | Your responsibility or the goal. What was at stake or what was hard? | 10% |
| Action | The specific steps you took, with 'I' and not 'we'. Include one decision and why. | 50% |
| Result | What happened, with a number if you can, and what you learned or would change. | 25% |

- Practise each story aloud until it takes about two minutes. Shorter is fine, longer loses people.
- Prefer stories with a clear result, even a small one: a faster page, a bug fixed, a feature shipped, a contest rank.
- If the result was bad, say what you learned and what you changed afterwards. Honesty reads better than polish.

## Behavioural patterns: build a story bank

Do not prepare fifty answers. Prepare five to seven real stories and learn to bend each one to fit different questions. Write each in four lines (S, T, A, R) in your notes.

| Story | Where to find it | Questions it can answer |
| --- | --- | --- |
| A project you are proud of | A college or personal project | Tell me about yourself, proudest work, a technical challenge, ownership |
| A time something went wrong | A failed contest, a bug in a demo, a missed deadline | Failure, learning, handling pressure |
| A disagreement or hard teammate | Group project, hackathon, club | Conflict, communication, teamwork |
| Learning something fast | A new framework for a hackathon, a new subject | Learning, adaptability, curiosity |
| Leading or helping others | A club event, mentoring a junior, an open-source review | Leadership, initiative, going beyond the task |
| A tight deadline or trade-off | Exam week with a project due, a hackathon | Prioritisation, time management, decisions |
| Feedback you received | A code review, a mentor's comment | Handling criticism, growth |

## Behavioural patterns: match the question to the story

| The question sounds like | What they really want to know | Pattern for your answer |
| --- | --- | --- |
| Tell me about a time you failed | Do you own mistakes and learn? | Small real failure, what you changed, a result since then |
| Tell me about a conflict | Can you disagree without drama? | Listen, state the shared goal, use evidence, accept the outcome |
| Tell me about a time you led | Do you take initiative? | You saw a gap, you acted without being asked, others benefited |
| Tell me about a tight deadline | Can you prioritise? | What you cut, what you kept and why, how you told others |
| Tell me about a time you learned something quickly | Can you grow on the job? | How you broke it down, what you used, what you built in the end |
| What is your biggest weakness? | Are you self-aware? | A real, not fatal, weakness plus the steps you are taking on it |
| Why should we hire you? | Do you understand the role? | Match two or three of their needs with proof from your work |
| Where do you see yourself in five years? | Will you grow and stay? | Skills you want to build and the kind of impact you want, linked to this role |

## Behavioural patterns: example answers

**Q: Tell me about a time you worked in a team and something went wrong.**

Situation: in a four-person hackathon team, our API and frontend did not match two hours before the demo. Task: I owned the backend and needed to get the app working end to end. Action: I called a ten-minute stop, wrote the real response shapes on a shared page, fixed my endpoints to match, and added a quick script to check them. Result: we demoed on time and reached the finals. Since then I agree on API shapes before anyone writes code.

**Q: Tell me about a time you had to learn something quickly.**

Situation: our club project needed a database I had never used. Task: build the data layer in one week. Action: I read the official quick-start, built a tiny version first, then asked a senior to review my schema. Result: we shipped on schedule, and I later wrote a short guide for the club. I learn by building the smallest working thing first.

**Q: What is your biggest weakness?**

Pick something real that will not break the job. For example: I used to dive into code without planning, which cost me rework. Now I write a short plan and the main steps before I start, and my last two projects needed far fewer rewrites.

**Q: Tell me about a time you disagreed with a teammate.**

We disagreed on whether to use a new framework for a deadline project. I asked what risks each choice had, we listed them, and I suggested a small test of the new framework for a day. It was slower, so we kept the familiar tool. I accepted the decision and we finished on time.

## Behavioural patterns: what to avoid

- Saying 'we' for everything. The interviewer needs to hear what you did.
- Blaming a teammate, a teacher or the tools. Describe the problem and your part.
- A story with no result. Always finish with what happened.
- Memorised scripts. They sound flat, and they fall apart when the question changes.
- Made-up stories. Follow-up questions will find the gaps. Use something real and small.
- Speaking for five minutes without pausing. Aim for two, then let them ask more.

## Behavioural patterns: a practice routine

1. Write down five to seven stories in S, T, A, R lines.
2. Tell each aloud to a mirror or a friend. Time it and trim to two minutes.
3. Pick ten questions from the table above and choose which story answers each.
4. Record yourself once. Watch for filler words, rushing and long setups.
5. Do one mock interview with a senior and ask for feedback on clarity and results, not just content.
6. Update the stories after each real interview with what worked.

## More practice

- [GeeksforGeeks interview experiences](https://www.geeksforgeeks.org/company-interview-corner/): Real company interview reports
- [Tech Interview Handbook](https://www.techinterviewhandbook.org): A free guide to every stage of the interview
- [LeetCode Discuss: Interview Experience](https://leetcode.com/discuss/interview-experience): Recent questions by company
- [Pramp](https://www.pramp.com): Free mock interviews with peers
- [InterviewBit](https://www.interviewbit.com): Practice problems and topic-wise questions

## Data structures and algorithms (concepts)

**Q: Array versus linked list: when would you choose each?**

Arrays give O(1) access by index and good cache use, but inserting in the middle costs O(n) and resizing copies data. Linked lists insert or delete in O(1) once you hold the node, but access is O(n) and each node has pointer overhead. Choose an array by default and a linked list when you do many insertions and deletions in the middle and rarely index.

**Q: How does a hash map work, and what happens on a collision?**

A hash function maps a key to a bucket index. Two keys can land in the same bucket, which is a collision. Common fixes are chaining (each bucket holds a list) and open addressing (probe for the next free slot). Lookup is O(1) on average and O(n) in the worst case. A resize keeps the load factor low.

**Q: Compare BFS and DFS. When is each the right choice?**

BFS explores level by level with a queue and finds the shortest path in an unweighted graph. DFS goes deep with a stack or recursion and suits cycle detection, topological sort, connected components and backtracking. Both are O(V+E).

**Q: What is the difference between a stack and a queue?**

A stack is last in, first out (push and pop at one end). A queue is first in, first out (add at the back, remove from the front). Stacks suit undo, recursion and parsing. Queues suit scheduling and BFS.

**Q: What is dynamic programming, and how do you start a DP problem?**

DP solves a problem by combining answers to overlapping subproblems and storing them to avoid repeat work. Start by defining the state in words, write the recurrence between states, set the base cases, choose the order (top-down with memoisation or bottom-up with a table), then see if you can shrink the space.

**Q: Why is quicksort usually faster than merge sort in practice, even though its worst case is worse?**

Quicksort sorts in place with good cache behaviour and small constants, and a random or median pivot makes the O(n²) case very unlikely. Merge sort always runs in O(n log n) and is stable but needs O(n) extra space.

**Q: What is a balanced binary search tree, and why does balance matter?**

A balanced BST keeps its height near log n, so search, insert and delete stay O(log n). Without balance, sorted inserts turn the tree into a list with O(n) operations. AVL and red-black trees keep balance with rotations.

**Q: What does amortised O(1) mean?**

It means the average cost per operation over a long sequence is constant, even if a few operations are expensive. Appending to a dynamic array is the usual example: most appends are O(1), and an occasional resize costs O(n), but spread over all appends the average is O(1).

## Git, tools and testing

**Q: What is the difference between git merge and git rebase?**

Merge joins two branches with a merge commit and keeps the true history. Rebase replays your commits on top of another branch, giving a linear history but rewriting those commits. Do not rebase commits that others already use.

**Q: What is the difference between git fetch and git pull?**

Fetch downloads new commits and updates remote-tracking branches without changing your working branch. Pull is a fetch followed by a merge (or rebase) into your current branch.

**Q: What are unit, integration and end-to-end tests?**

Unit tests check one function or class in isolation. Integration tests check that parts work together, such as an API with its database. End-to-end tests drive the whole system the way a user would. Keep many unit tests, fewer integration tests and a few end-to-end tests.

**Q: What is CI/CD?**

Continuous integration builds and tests every change automatically so problems show up early. Continuous delivery or deployment then releases the passing build, either with one click or fully automatically.

**Q: What is the difference between a container and a virtual machine?**

A virtual machine runs a full guest operating system on virtual hardware. A container shares the host kernel and isolates only the process and its files, so it starts faster and uses less memory.

## How ready are you in each year?

| Year | A fair interview-readiness target |
| --- | --- |
| 1 | Explain your language's basics and solve easy problems. No interviews yet, just build confidence. |
| 2 | Answer basic OOP, DBMS and OS questions, and solve medium problems with hints. |
| 3 | Answer core-subject questions clearly, solve mediums alone, and explain every project you list. |
| 4 | Handle a full loop: coding, core subjects, a design discussion, projects and a behavioural round. |

## From an SDE's desk

As someone who sits on the interviewer side: we are not checking if you memorised an answer. We want to see how you think and whether we would enjoy solving problems with you.

- Say your thinking aloud. A reasoned wrong answer scores better than a silent right one.
- Ask a clarifying question before you start. It signals that you would ask in a real ticket as well.
- If you do not know, say so, then reason from what you do know. Bluffing is easy to spot and costs trust.
- Honest answers about projects win. Be ready to go two levels deeper on anything on your resume.

## Operating systems (more questions)

**Q: What is the difference between a process and a thread?**

A process has its own memory space and resources. Threads inside a process share its memory, so they are cheaper to create and to switch between, but they need synchronisation and a crash in one can bring down the process.

**Q: What is a context switch, and why is it expensive?**

It is when the CPU stops one task and starts another, saving and restoring registers and other state. It costs time directly and also hurts caches, because the new task's data is not warm.

**Q: What are the four conditions for deadlock?**

Mutual exclusion, hold and wait, no preemption and circular wait. All four must hold. Breaking any one prevents deadlock, for example by locking in a fixed order to avoid circular wait.

**Q: What is the difference between a mutex and a semaphore?**

A mutex is a lock owned by one thread at a time, used to protect a critical section. A semaphore is a counter that allows up to N holders and can be signalled by a different thread, used to limit access or to coordinate.

**Q: What is virtual memory?**

A technique that gives every process its own large address space, mapped to physical memory and disk by the OS and hardware. It gives isolation, lets programs use more than physical RAM, and simplifies loading.

**Q: What is a page fault?**

An access to a page that is not currently in physical memory. The OS finds the page on disk, loads it into a frame, updates the page table and restarts the instruction.

**Q: What is thrashing?**

When the system spends most of its time moving pages between memory and disk because processes need more memory than is available, so little real work is done. Fix by reducing the number of active processes or adding memory.

**Q: What is starvation, and how does aging help?**

Starvation is when a task never gets a resource because others keep getting it first. Aging gradually raises a waiting task's priority so it eventually runs.

**Q: What is the difference between user mode and kernel mode?**

Kernel mode can run privileged instructions and access all hardware and memory. User mode is restricted. Programs enter kernel mode only through system calls, which protects the system from faulty or hostile programs.

**Q: What is a zombie process?**

A process that has finished but still has an entry in the process table because its parent has not yet read its exit status. The parent should call wait to clean it up.

## Computer networks (more questions)

**Q: Explain the TCP three-way handshake.**

The client sends SYN, the server replies SYN-ACK, and the client sends ACK. Both sides now agree on starting sequence numbers and the connection is open. Closing uses FIN and ACK messages from each side.

**Q: TCP versus UDP: when would you choose each?**

TCP when you need reliable, ordered delivery, such as web pages, files and APIs. UDP when speed matters more than perfect delivery or you handle loss yourself, such as live video, games and DNS.

**Q: How does DNS work?**

A resolver checks its cache, then asks root servers, then the top-level domain servers, then the authoritative server for the domain, which returns the IP address. Answers are cached for a time to live.

**Q: What is the difference between HTTP and HTTPS?**

HTTPS is HTTP over TLS. TLS encrypts traffic, verifies the server's identity with a certificate and protects against tampering.

**Q: What is the difference between GET and POST?**

GET requests data and should not change anything, so it can be cached and bookmarked. POST sends data to create or change something, and its body is not part of the URL. Neither is secure by itself, because security comes from HTTPS and the server.

**Q: What is a load balancer?**

A component that spreads requests across servers, checks their health and removes failed ones, and may end TLS. It can work at layer 4 (connections) or layer 7 (HTTP content).

**Q: What is NAT?**

Network address translation lets many devices in a private network share one public IP address. The router rewrites addresses and ports and remembers the mapping for replies.

**Q: What is the difference between a hub, a switch and a router?**

A hub repeats traffic to all ports. A switch forwards frames only to the right port using MAC addresses. A router connects different networks and forwards packets using IP addresses.

**Q: What is a CDN?**

A content delivery network is a set of servers around the world that cache static content close to users, giving lower latency and taking load off your origin server.

**Q: What is the difference between a cookie, a session and a token?**

A cookie is data the browser stores and sends back. A session is server-side state, usually found by an ID kept in a cookie. A token, such as a JWT, carries signed claims that the server can check without looking up state.

## DBMS and SQL (more questions)

**Q: What is the difference between DELETE, TRUNCATE and DROP?**

DELETE removes selected rows, can use WHERE and can be rolled back in a transaction. TRUNCATE removes all rows quickly and keeps the table. DROP removes the table itself, including structure and data.

**Q: What is the difference between a clustered and a non-clustered index?**

A clustered index decides the physical order of the rows, so a table has only one. A non-clustered index is a separate structure with pointers to the rows, and a table can have many.

**Q: What is a view, and what is a materialised view?**

A view is a stored query that behaves like a table. A materialised view stores its result and must be refreshed, which makes reads fast but adds staleness.

**Q: What is a stored procedure, and when would you avoid one?**

A stored procedure is code saved inside the database. It can reduce round trips and centralise logic, but it is harder to version, test and move between databases, so many teams keep business logic in application code.

**Q: What is the difference between UNION and UNION ALL?**

UNION combines results and removes duplicates, which costs a sort or hash. UNION ALL keeps every row and is faster. Use UNION ALL unless you need deduplication.

**Q: What is a correlated subquery?**

A subquery that refers to a column of the outer query, so it runs once per outer row. It can be slow, and is often rewritten as a join or a window function.

**Q: How would you find the Nth highest salary?**

Use DENSE_RANK() over salary descending in a subquery and filter for rank N. An older approach is ORDER BY salary DESC with LIMIT 1 OFFSET N-1, which does not handle ties the same way.

**Q: What is the N+1 query problem?**

Running one query for a list and then one more per item. Fix it with a join, or by fetching all related rows in one batched query.

**Q: What is database replication, and what is replication lag?**

Replication copies data from a primary to replicas for read scaling and failover. Lag is the delay before a change reaches a replica, so a read from a replica can briefly return old data.

**Q: When would you pick NoSQL over SQL?**

When the data shape is flexible, when you need very high write volume or horizontal scale, or when access is simple key-based. Pick SQL when you need joins, transactions and a stable schema.

## OOP and design (more questions)

**Q: What is the difference between an abstract class and an interface?**

An interface describes what a type can do and has no state, so a class can implement many. An abstract class can hold shared state and partial code but a class can usually extend only one. Prefer interfaces for contracts and abstract classes for shared base behaviour.

**Q: What is polymorphism? Give an example.**

One interface with different behaviour depending on the object. A Shape list where each item has an area() method gives the right area for circles and rectangles without checking types.

**Q: Composition versus inheritance: which do you prefer?**

Composition. It keeps parts independent and swappable, while deep inheritance couples a subclass tightly to its parent. Use inheritance for a true 'is a' relationship with stable behaviour.

**Q: What is the difference between overloading and overriding?**

Overloading is several methods with the same name but different parameters, resolved at compile time. Overriding is a subclass replacing a parent's method with the same signature, resolved at run time.

**Q: What is the singleton pattern, and what are its problems?**

A class that allows one instance with global access. It hides dependencies, makes tests harder and can cause trouble with threads. Prefer passing a single instance in through the constructor.

**Q: What is dependency injection?**

Giving an object the things it needs from outside instead of letting it create them. It makes code easier to test and to change, for example by passing a fake database in a test.

**Q: What is the difference between shallow and deep copy?**

A shallow copy duplicates the outer object but shares inner objects. A deep copy duplicates everything, so changes to the copy never affect the original.

**Q: What does 'program to an interface, not an implementation' mean?**

Depend on a contract, not a concrete class, so you can swap the implementation without changing the callers.

**Q: Design a parking lot. How would you start?**

Ask about vehicle types, floors, pricing and payment. Identify nouns as classes (ParkingLot, Level, Spot, Vehicle, Ticket) and behaviours as methods (park, unpark, calculateFee). Keep spot assignment and pricing as separate strategies so each can change.

**Q: What is a race condition, and how do you avoid it?**

A bug where the result depends on the timing of threads touching shared data. Avoid it by not sharing mutable state, or by protecting it with locks, atomic operations or immutable data.

## System design (more questions)

**Q: How do you design a rate limiter?**

Choose an algorithm (token bucket is a good default), key it by user or IP, store counters in a shared fast store such as Redis, return HTTP 429 with a Retry-After header, and decide what to do if the store fails, usually allowing the request.

**Q: How would you design a URL shortener?**

Generate a unique short code from a counter encoded in base62, store code to URL, redirect on read, cache hot links and rate-limit creation. Reads far outnumber writes, so scale reads with caches and replicas.

**Q: How do you scale a read-heavy service?**

Cache, add read replicas, use a CDN for static data, add indexes, and precompute results that are expensive to build.

**Q: How do you scale a write-heavy service?**

Batch and queue writes, partition or shard the data, choose a store built for high write throughput, and reduce write amplification such as extra indexes.

**Q: What is eventual consistency, and when is it fine?**

Replicas converge after a delay without a guarantee that every read is the latest. It suits feeds, likes and counters, and does not suit payments or inventory that must not oversell.

**Q: How would you make a payment API safe to retry?**

Require an idempotency key. Store the result of the first request under that key, and return the same result for repeats, so a retry never charges twice.

**Q: Monolith or microservices?**

Start with a well-structured monolith. Split out a service when a part needs to scale, deploy or be owned separately. Microservices add network failures, distributed data and operational cost.

**Q: How do you find the bottleneck in a slow system?**

Measure. Look at latency percentiles, then trace a slow request through each hop, and check CPU, memory, database queries and queues. Fix the biggest cost first, and measure again.

## SQL practice questions (with answers)

**Employees earning more than their manager**

```sql
SELECT e.name
FROM employees e
JOIN employees m ON e.manager_id = m.id
WHERE e.salary > m.salary;
```

**Departments with more than 5 employees**

```sql
SELECT dept_id, COUNT(*) AS headcount
FROM employees
GROUP BY dept_id
HAVING COUNT(*) > 5;
```

**Users who logged in on three consecutive days (gaps and islands idea)**

```sql
SELECT DISTINCT user_id
FROM (
  SELECT user_id, login_date,
         login_date - ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date) * INTERVAL '1 day' AS grp
  FROM (SELECT DISTINCT user_id, login_date FROM logins) d
) t
GROUP BY user_id, grp
HAVING COUNT(*) >= 3;
```

**Delete duplicate rows but keep the lowest id**

```sql
DELETE FROM users
WHERE id NOT IN (
  SELECT MIN(id) FROM users GROUP BY email
);
```

- Before you write SQL in an interview, say the tables, the join keys and the shape of the result you want.
- Run each query in your head on a tiny table with two or three rows, including a row with a NULL.
- Syntax for dates and intervals differs by database. Say which one you assume.
