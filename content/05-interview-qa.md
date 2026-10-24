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

## More practice

- [GeeksforGeeks interview experiences](https://www.geeksforgeeks.org/company-interview-corner/): Real company interview reports
- [Tech Interview Handbook](https://www.techinterviewhandbook.org): A free guide to every stage of the interview
- [LeetCode Discuss: Interview Experience](https://leetcode.com/discuss/interview-experience): Recent questions by company
- [Pramp](https://www.pramp.com): Free mock interviews with peers
- [InterviewBit](https://www.interviewbit.com): Practice problems and topic-wise questions
