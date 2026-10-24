# Start here

CampusCoders ranks students by what they solve on LeetCode, Codeforces and CodeChef and what they build on GitHub. If you are starting from zero, follow this order.

## First steps

1. Pick a language: C++, Java or Python. Stay with one until you are comfortable.
2. Create your accounts on LeetCode, Codeforces, CodeChef and GitHub, then add them to your CampusCoders profile.
3. Solve a little every day. Consistency beats marathon sessions.
4. Build and ship projects, and put them on GitHub.
5. Contribute to open source.

## Year-wise path

| Year | Focus |
| --- | --- |
| 1 | One language, logic building, Git, a basic web or app project, start LeetCode |
| 2 | Full DSA (A2Z), OOP and DBMS, regular contests, first open-source PRs, two projects |
| 3 | Interview prep: SDE sheet, OS, CN, SQL, system design basics, internship and mock interviews |
| 4 | Revise, apply early, polish the resume, and keep the contest and contribution streak going |

## A 15-week starter plan

| Weeks | Focus |
| --- | --- |
| 1–2 | Language basics, Git, one LeetCode problem a day |
| 3–10 | Striver A2Z sheet, steps 1–10, along with SQL basics |
| 11–14 | DBMS, OS and CN theory, first Codeforces and CodeChef contests |
| 15+ | A project, your first open-source PR, then the SDE sheet and a contest every week |

## A daily routine

Sleep, exercise and breaks are part of the plan, not extras. Burnout ends more streaks than lack of talent.

| Slot | Activity |
| --- | --- |
| 45–60 min | Learn a DSA topic and solve 1–2 problems |
| 30 min | A core subject (DBMS, OS, CN) or revise old problems |
| 30–60 min | Project or open-source work |
| Weekly | One contest, then upsolve it on the weekend |
| Weekly | One rest day with no screens for study |

## Using CampusCoders to stay on track

- Link your LeetCode, Codeforces, CodeChef and GitHub accounts so your standing updates automatically.
- Check your tier and your rank on your year and department boards, and set one concrete target for the next month.
- Watch the weekly trend chart. A flat line tells you to adjust your routine, not to give up.
- Find peers a little ahead of you on the boards and learn from what they work on.

## Common mistakes to avoid

- Watching videos without coding along.
- Switching sheets and courses every week. Pick one and finish it.
- Reading editorials too soon.
- Skipping core subjects until the week before interviews.
- Building only tutorial clones.
- Starting open source with a huge issue instead of a small one.
- Leaving gaps in the streak. Thirty minutes every day beats ten hours once a week.
- Comparing your first month with someone else's third year.

## Frequently asked questions

**Q: I am a beginner. Where do I start today?**

Pick a language, finish a basic course such as CS50, and solve one easy problem. Then open Striver's A2Z sheet and begin at step 1.

**Q: C++, Java or Python?**

Whichever you will actually practise. C++ is the usual choice for competitive programming, Java for enterprise roles, Python for AI and quick scripting. Interviews accept all three.

**Q: How many problems are enough?**

There is no fixed number. When you can spot the pattern in a new medium problem and solve it in 30–40 minutes, you are in good shape.

**Q: I am in my final year. Is it too late?**

No. Focus on the SDE sheet, the core subjects and mock interviews, build one strong project, and apply right away.

**Q: Should I do DSA or development first?**

Both, in short daily slots. DSA gets you through the screening, and projects get you through the interview and the job.

**Q: My rank is low. Should I worry?**

Rank only shows where you are today. Improve your trend week over week and keep going.


---

# Data structures and algorithms

Solving many problems is not the goal. Being able to solve a new one is. Pick one sheet, follow it in order, and practise the way this page describes.

## Where to learn

- [Striver's A2Z DSA Sheet](https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/): Step-by-step topic order from basics to advanced, with videos
- [Striver's SDE Sheet](https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/): Top interview problems, once the A2Z basics are done
- [NeetCode 150](https://neetcode.io/practice): Curated LeetCode problems with video explanations
- [LeetCode Top Interview 150](https://leetcode.com/studyplan/top-interview-150/): The official interview-prep plan
- [CP-Algorithms](https://cp-algorithms.com): Reference for competitive programming algorithms
- [Codeforces EDU](https://codeforces.com/edu/courses): Free courses with graded problems

## How to practise properly

1. Learn the topic first. Watch or read one lesson, then solve the easy problems of that topic the same day.
2. Think before you look. Give each problem 20–30 minutes: restate it, try small examples, write the brute force, then improve it.
3. Read the editorial only after a real attempt. Then close it and code the solution from memory. Copying code teaches nothing.
4. Write down what you learned: the pattern, the trick, and why your first idea failed.
5. Revise on a schedule. Re-solve a problem after 3 days, 2 weeks and 2 months. Mark the ones you got wrong.
6. Always state the time and space complexity out loud.
7. Do not jump ahead. Finish a topic before starting the next.

## The A2Z order

Basics and pattern printing, sorting, arrays, binary search, strings, linked lists, recursion and backtracking, bit manipulation, stacks and queues, sliding window and two pointers, heaps, greedy, binary trees, binary search trees, graphs, dynamic programming, tries.

Do the easy and medium problems first and come back for the hard ones.

## Targets

These are rough guides, not rules. About 150 LeetCode problems and a rating of 1400+ in LeetCode contests makes a good campus placement profile. Top product companies tend to expect 300+ problems and some Codeforces or CodeChef contest history.

## Competitive programming

- Start contests once you know arrays, sorting, binary search and basic maths. Do not wait to feel ready.
- Join every LeetCode weekly and biweekly contest, and one Codeforces Div. 3 or Div. 4 round a week.
- After each contest, upsolve: solve the problems you missed, even though the contest is over. This is where most of the improvement comes from.
- Aim to solve problems A and B quickly and accurately before chasing C.
- Read how top-rated people solved the problems you could not.


---

# DSA patterns and cheat sheets

Most interview problems are a small number of ideas in different clothes. Learn to recognise the pattern from the problem statement, and a new problem stops being new.

## How to recognise a pattern

1. Read the constraints first. An input size of 10^5 means you need about O(n log n) or better. 20 or fewer hints at backtracking or bitmasks.
2. Look at the input shape: a sorted array, a string, a tree, a graph, intervals or a stream.
3. Look at the ask: longest, shortest, count of ways, minimum or maximum, all possibilities, or does it exist.
4. Write the brute force and find where it repeats work. That repeated work is what the pattern removes.
5. Match it to a pattern below, then check the example problems to see if the idea fits.

## Arrays and strings

| Pattern | Use it when | Core idea | Practise on |
| --- | --- | --- | --- |
| Two pointers | A sorted array or a pair or triple with a target | Move one pointer from each end, or both forward, based on a comparison | Two Sum II, 3Sum, Container With Most Water |
| Sliding window | A contiguous subarray or substring with a condition | Grow the window on the right and shrink on the left to keep it valid | Longest Substring Without Repeating Characters, Minimum Window Substring |
| Prefix sum | Many range-sum queries, or a subarray with a given sum | Store running totals so any range is a subtraction | Subarray Sum Equals K, Range Sum Query |
| Hash map counting | Frequencies, duplicates, pairs, or grouping | Trade memory for speed: one pass with a map of what you have seen | Two Sum, Group Anagrams, Longest Consecutive Sequence |
| Monotonic stack | The next greater or smaller element, or spans | Keep a stack in sorted order and pop when the order breaks | Daily Temperatures, Largest Rectangle in Histogram |
| Intervals | Overlapping ranges, meetings, or scheduling | Sort by start, then merge or compare with the last interval | Merge Intervals, Meeting Rooms II, Insert Interval |
| Kadane's algorithm | The best contiguous subarray sum | Keep the best sum ending here, and the best seen so far | Maximum Subarray, Maximum Product Subarray |

## Searching, sorting and heaps

| Pattern | Use it when | Core idea | Practise on |
| --- | --- | --- | --- |
| Binary search | A sorted or rotated array, or any monotonic yes/no check | Halve the range each step by testing the middle | Search in Rotated Sorted Array, Find Peak Element |
| Binary search on the answer | Find the minimum or maximum value that satisfies a condition | Search the range of possible answers, and check each with a simple function | Koko Eating Bananas, Capacity to Ship Packages |
| Top K with a heap | The k largest, smallest or most frequent | Keep a heap of size k, so each insert costs log k | Kth Largest Element, Top K Frequent Elements |
| Two heaps | A running median, or balancing two halves | A max-heap for the lower half and a min-heap for the upper half | Find Median from Data Stream |
| Merge k sorted lists | Combining several sorted sources | Keep the current head of each in a min-heap | Merge k Sorted Lists, Smallest Range Covering Elements |

## Linked lists, trees and graphs

| Pattern | Use it when | Core idea | Practise on |
| --- | --- | --- | --- |
| Fast and slow pointers | Cycles or the middle of a linked list | One pointer moves two steps, the other one, and they meet if there is a cycle | Linked List Cycle, Middle of the Linked List |
| Tree DFS | Depth, paths, or anything that depends on both children | Recurse on the children and combine the results on the way up | Maximum Depth, Diameter of Binary Tree, Path Sum |
| Tree BFS (level order) | Level by level, or the shortest path in an unweighted graph | A queue, processed one level at a time | Binary Tree Level Order Traversal, Rotting Oranges |
| Graph DFS and flood fill | Connected components, islands, or reachability | Mark each node visited, and explore neighbours | Number of Islands, Clone Graph |
| Topological sort | Tasks with dependencies, or detecting a cycle in a directed graph | Process nodes with no incoming edges first (Kahn's algorithm) | Course Schedule, Alien Dictionary |
| Union-Find | Grouping, and 'are these connected?' as edges arrive | Merge sets with path compression and union by rank | Number of Provinces, Redundant Connection |
| Shortest path | Weighted edges and a minimum cost | Dijkstra for non-negative weights, Bellman-Ford if negative edges exist | Network Delay Time, Cheapest Flights Within K Stops |
| Trie | Prefix search and word dictionaries | A tree of characters, so shared prefixes are stored once | Implement Trie, Word Search II |

## Recursion, backtracking and dynamic programming

| Pattern | Use it when | Core idea | Practise on |
| --- | --- | --- | --- |
| Backtracking | All combinations, permutations, subsets, or valid placements | Choose, explore, then undo the choice. Prune when a branch cannot work | Subsets, Permutations, N-Queens, Combination Sum |
| 1D dynamic programming | The answer for i depends on a few earlier answers | Define the state, write the recurrence, then fill from the smallest case | Climbing Stairs, House Robber, Coin Change |
| 2D / grid dynamic programming | Two sequences or a grid | State is two indices, and the recurrence looks at the neighbours | Unique Paths, Longest Common Subsequence, Edit Distance |
| Knapsack | Pick items under a limit, to maximise value or count ways | State is the item and the remaining capacity | Partition Equal Subset Sum, Target Sum |
| Longest increasing subsequence | The longest ordered subsequence | O(n^2) with a table, or O(n log n) with binary search | Longest Increasing Subsequence, Russian Doll Envelopes |
| Greedy | A local best choice that never needs undoing | Sort, take the best option each step, and be ready to prove why it works | Jump Game, Gas Station, Task Scheduler |
| Bit manipulation | Single numbers, toggles, subsets of small sets | XOR cancels pairs; n & (n - 1) removes the lowest set bit | Single Number, Counting Bits |

## Big-O cheat sheet

A rule of thumb for time limits: about 10^8 simple operations per second. With n = 10^5, aim for O(n log n). With n = 10^3, O(n^2) is fine. With n up to 20, exponential solutions can work.

| Structure | Access | Search | Insert | Delete |
| --- | --- | --- | --- | --- |
| Array | O(1) | O(n) | O(n) | O(n) |
| Linked list | O(n) | O(n) | O(1) at a known node | O(1) at a known node |
| Hash map (average) | n/a | O(1) | O(1) | O(1) |
| Balanced BST | n/a | O(log n) | O(log n) | O(log n) |
| Heap | O(1) for the top | O(n) | O(log n) | O(log n) for the top |
| Stack and queue | O(n) | O(n) | O(1) | O(1) |

## Sorting and common algorithm costs

| Algorithm | Time (typical) | Space | Notes |
| --- | --- | --- | --- |
| Merge sort | O(n log n) | O(n) | Stable, with predictable speed |
| Quick sort | O(n log n) average, O(n^2) worst | O(log n) | Fast in practice |
| Heap sort | O(n log n) | O(1) | Not stable |
| Counting sort | O(n + k) | O(k) | For small integer ranges |
| BFS or DFS | O(V + E) | O(V) | Graph traversal |
| Dijkstra with a heap | O((V + E) log V) | O(V) | Non-negative weights only |
| Binary search | O(log n) | O(1) | Needs a monotonic condition |

## Common mistakes in DSA problems

- Coding before you understand the examples and the edge cases.
- Forgetting empty input, a single element, duplicates, negative numbers and overflow.
- Off-by-one errors in binary search and sliding windows. Decide whether your range is inclusive or exclusive and stay consistent.
- Modifying a collection while looping over it.
- Passing a shared list into recursion without copying it when you save a result.
- Using recursion on a deep input without thinking about the stack limit.
- Stating the wrong complexity, such as ignoring the cost of string slicing or sorting.

## A way to talk through any problem in an interview

1. Restate the problem in your own words and ask about the input size, ranges and edge cases.
2. Work through one small example by hand.
3. Describe the brute force and its complexity.
4. Find the bottleneck, and say which pattern might remove it.
5. Explain the improved approach before you write code.
6. Write clean code, with clear variable names, and keep talking.
7. Test with your example and with one edge case, and fix what you find.
8. State the final time and space complexity.

## Where to practise by pattern

- [NeetCode roadmap](https://neetcode.io/roadmap): Problems grouped by pattern, in a sensible order
- [Blind 75](https://www.techinterviewhandbook.org/grind75): A short list of high-value interview problems, with a schedule
- [LeetCode Patterns study plans](https://leetcode.com/studyplan/): Official plans such as Dynamic Programming and Graph theory
- [Visualgo](https://visualgo.net/en): Animations of sorting, trees and graph algorithms
- [Big O notation (Wikipedia)](https://en.wikipedia.org/wiki/Big_O_notation): The definition and the common growth rates


---

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


---

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


---

# System design basics

System design asks how you would build something that many people use: what the parts are, how they talk, and what breaks first. Start after you are comfortable with DSA and databases. For freshers the bar is lower: show clear thinking, not a perfect architecture.

## When it matters

- Freshers: some product companies ask a light design question, such as a URL shortener or a parking lot. Many ask only low-level design (classes and objects).
- 1–3 years of experience: expect one full design round.
- Senior roles: design is the main round.
- Even when it is not asked, it makes you a better developer, because you stop writing code that cannot scale.

## A framework for any design question

1. Clarify the requirements. What must it do (functional), and how well (speed, availability, scale)? Ask who the users are and how many.
2. Estimate the scale: requests per second, data stored per day, read-to-write ratio. Rough numbers are enough.
3. Define the API: the main endpoints and what they take and return.
4. Sketch the data model: the main entities and which database fits.
5. Draw the high-level design: clients, load balancer, services, database, cache, queue.
6. Go deeper on one or two parts the interviewer cares about, such as how to generate unique IDs or how to fan out a feed.
7. Discuss bottlenecks and trade-offs: single points of failure, hot keys, consistency versus availability.
8. Summarise, and say what you would improve with more time.

## The building blocks

| Block | What it does | Reach for it when |
| --- | --- | --- |
| Load balancer | Spreads requests over several servers and drops unhealthy ones | One server cannot handle the traffic, or you want no single point of failure |
| Cache (Redis, Memcached) | Keeps hot data in memory for quick reads | Reads are far more frequent than writes, or a query is slow |
| CDN | Serves static files from servers near the user | Images, videos and scripts are slow for faraway users |
| Relational database | Stores structured data with transactions and joins | You need consistency, relations and flexible queries |
| NoSQL (document, key-value, wide-column) | Scales out for simple access patterns | Huge volume, a flexible schema, or lookups by key |
| Replication | Copies data to other servers | You want more read capacity or failover |
| Sharding | Splits data over servers by a key | One database cannot hold or serve all the data |
| Message queue (Kafka, RabbitMQ, SQS) | Holds work to be done later, decoupling producers and consumers | Spikes, slow tasks such as emails, or several consumers of an event |
| API gateway | A single entry point for authentication, routing and rate limits | Many services sit behind one public API |
| Object storage (S3) | Cheap storage for files and large blobs | Images, videos, backups and logs |
| Search index (Elasticsearch) | Full-text and fuzzy search | SQL LIKE queries become slow or too limited |

## Numbers worth remembering

You are not expected to be exact. Show that you can reason: 10 million users, 10% active a day, 5 actions each, is 5 million writes a day, or about 60 per second on average.

| Quantity | Rough value |
| --- | --- |
| Seconds in a day | About 100,000 (86,400) |
| 1 million requests a day | About 12 requests per second on average |
| Memory read | About 100 nanoseconds |
| SSD read | About 100 microseconds |
| Network round trip in one data centre | About 0.5 milliseconds |
| Network round trip across continents | About 150 milliseconds |
| A character | 1 byte (ASCII) to about 4 bytes (UTF-8) |
| A typical row or small JSON object | About 1 KB |
| A photo | A few MB |
| Peak traffic | Plan for 2 to 10 times the average |

## Key trade-offs

The CAP theorem says that during a network partition a system must choose between consistency and availability. Banks choose consistency. Social feeds usually choose availability.

| Choice | What you gain | What you pay |
| --- | --- | --- |
| Cache | Speed and less database load | Stale data, and invalidation is hard |
| Replication | Availability and read capacity | Replicas may lag, so reads can be stale |
| Sharding | Scale beyond one machine | Cross-shard queries and rebalancing are hard |
| Async with queues | Smooth spikes and faster responses | Eventual results, retries and duplicates to handle |
| Microservices | Independent teams and scaling | Network failures, deployment and debugging cost |
| Strong consistency | Everyone sees the latest data | Slower, and less available during failures |
| Eventual consistency | High availability and speed | Users may briefly see old data |

## Classic designs to practise

| Design | Key ideas to cover |
| --- | --- |
| URL shortener | Unique ID or hash generation, base62 encoding, a read-heavy cache, a redirect with 301 or 302, expiry, and click analytics |
| Rate limiter | Token bucket or sliding window, counters in Redis, per-user and per-IP limits, and what happens across several servers |
| Chat application | WebSockets, message ordering, delivery receipts, offline storage, group chats and fan-out |
| News feed | Fan-out on write versus on read, ranking, a cache for hot users, and pagination |
| Notification service | A queue, templates, retries, deduplication, user preferences and several channels |
| File storage (like Drive) | Chunked uploads, metadata separate from blobs, sync, versioning and deduplication |
| Ride booking | Location updates, geospatial indexing, matching, surge pricing and payments |
| Video streaming | Encoding to several resolutions, a CDN, adaptive bitrate and a recommendation service |

## Low-level design (object-oriented design)

Many fresher interviews ask for classes and relationships instead of servers. The aim is clean, extensible code.

- Practise: parking lot, library management, elevator, tic-tac-toe, chess, a vending machine, a food ordering app and an ATM.
- Steps: list the requirements, identify the objects (nouns), write their behaviour (verbs), draw the relationships, then code the core classes.
- Use SOLID principles and a design pattern only where it fits, for example Strategy for pricing rules or State for a vending machine.
- Handle concurrency and edge cases at the end, and say which assumptions you made.

## Common mistakes

- Jumping to the architecture without asking questions.
- Adding Kafka, Kubernetes and microservices to a problem that needs one database.
- Ignoring data: no schema, no estimate of size.
- Not discussing failure: what happens when a server, a database or a network link goes down.
- Saying 'use a cache' without saying what is cached, for how long and how it is invalidated.
- Going quiet. Explain your thinking all the time.

## Where to learn

- [System Design Primer](https://github.com/donnemartin/system-design-primer): A free guide with diagrams and worked answers
- [ByteByteGo](https://bytebytego.com): Clear diagrams and a weekly newsletter
- [High Scalability](http://highscalability.com): Case studies on real systems
- [Designing Data-Intensive Applications](https://dataintensive.net): The standard book on data systems, for after the basics
- [Awesome Low Level Design](https://github.com/ashishps1/awesome-low-level-design): Object-oriented design problems with code
- [Engineering blogs](https://github.com/kilimchoi/engineering-blogs): A list of company blogs where real designs are explained


---

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


---

# Project ideas

Pick one project from each level and finish it. A finished, deployed project with a good README is worth more than five half-built ones. Choose something that solves a real problem for you or your classmates.

## How to choose and finish a project

1. Pick a project you would use yourself. Motivation is what finishes projects.
2. Write one sentence: who it is for and what problem it solves.
3. List the smallest version that works (the first version should take a weekend or two).
4. Build it, deploy it early and show it to three people.
5. Improve it from their feedback, and write the README and a short demo video.
6. Add the project to your resume with one line about the result.

## Beginner: logic and first apps (1–2 weeks each)

| Idea | Stack | What you learn |
| --- | --- | --- |
| To-do list with filters and local storage | HTML, CSS, JavaScript | The DOM, events, saving state |
| Weather app using a public API | JavaScript or React | Fetching data, loading and error states |
| Expense tracker with charts | Any frontend stack | State, forms, simple charts |
| Quiz app with a score and a timer | JavaScript | Application logic and timers |
| Pomodoro and habit tracker | React | Components, effects, local storage |
| Markdown notes app | React or Vue | Text parsing, persistence |
| Tic-tac-toe or Snake with an AI opponent | Any language | Game loops, minimax or simple heuristics |
| Command-line contact book | Python or Java | Files, data structures, input handling |
| URL shortener (basic) | Node.js or Python and SQLite | Routing, a database, redirects |
| Personal portfolio and blog | Next.js or plain HTML | Layout, responsive design, deployment |

## Intermediate: real apps with a database (3–5 weeks each)

| Idea | Stack | What you learn |
| --- | --- | --- |
| Campus event and club portal | Next.js, PostgreSQL, auth | Roles, CRUD, notifications |
| Study group and notes sharing app | Full-stack, file uploads | Uploads, permissions, search |
| Placement tracker (companies, deadlines, status) | Full-stack with a calendar view | Data modelling and reminders |
| Hostel mess feedback and complaint system | Full-stack with dashboards | Real users, admin views, analytics |
| Lost and found for campus | Full-stack with images | Image uploads, matching, moderation |
| Coding contest tracker with reminders | Node.js, public contest APIs | API integration, cron jobs, email |
| Blog or CMS with a markdown editor | Next.js and a database | Auth, drafts, SEO, caching |
| Real-time chat with rooms | WebSockets, Redis | Real-time messaging, presence |
| Job and internship board | Full-stack with search | Filtering, pagination, full-text search |
| Expense splitting app (like Splitwise) | Full-stack | Algorithms for settling debts, data design |
| Resume builder that exports a PDF | React and a PDF library | Forms, templates, rendering |
| Quiz and exam platform with timed tests | Full-stack | Sessions, timers, anti-cheat basics |

## Advanced: systems and depth (6–10 weeks each)

| Idea | Stack | What you learn |
| --- | --- | --- |
| Collaborative document editor | WebSockets, CRDTs or operational transforms | Conflict resolution and real-time sync |
| Code execution sandbox (online judge) | Docker, queues, a backend | Isolation, queues, security, resource limits |
| Distributed rate limiter or job queue | Redis, Go or Java | Distributed locking, retries, idempotency |
| Search engine for a set of documents | Inverted index, ranking | Indexing, relevance, text processing |
| Mini database or key-value store | C++, Go or Rust | Storage engines, indexes, persistence |
| Recommendation engine for books or courses | Python, scikit-learn | Collaborative filtering, evaluation |
| Retrieval-based Q&A bot over college documents | Python, embeddings, a vector store | Chunking, retrieval, evaluation, cost |
| Monitoring dashboard with alerts | Prometheus, Grafana, a sample app | Metrics, dashboards, alerting rules |
| Compiler or interpreter for a small language | Any language | Parsing, scoping, bytecode, error messages |
| Multiplayer game with a server | Unity or Godot, a backend | Networking, lag handling, authority |

## Ideas by role

| Role | Strong portfolio project |
| --- | --- |
| Backend | An order service with idempotent payments, a queue for emails and a load test showing the results |
| Frontend | A design system with documented components, accessibility tests and a published demo site |
| Full-stack | A product with real users, payments, an admin area, tests and CI |
| Mobile | An offline-first app on the Play Store or TestFlight, with crash reporting |
| AI / ML | An evaluated retrieval app, or a model with an honest error analysis and a demo |
| Data | A daily pipeline that loads, tests and models data, with a dashboard and documentation |
| DevOps | A full pipeline in code: build, test, deploy, monitor and roll back |
| Security | A write-up series of CTF challenges, and fixes for a deliberately vulnerable app |
| QA | An automated suite in CI with reports and a load test |
| Embedded | A connected sensor device with firmware updates and a custom board |
| Game | A published game with a finished loop, from a game jam |
| UI/UX | A redesign case study with research, a tested prototype and a small design system |
| Product | A student product you led, with a spec, a launch and a write-up of the numbers |
| Blockchain | A tested contract with fuzz tests, a front end, and write-ups of security challenges |

## Make your project stand out

- A live demo link that works. Many reviewers will not clone a repository.
- A README with a screenshot, a one-line pitch, features, the tech stack, how to run it and what you would do next.
- Tests and a CI badge, even a small number of tests.
- A short write-up of one hard problem you solved and the trade-offs you made.
- Real usage: even 20 classmates using it is a strong signal.
- Clean commits and a clear history. Reviewers read it.
- No secrets in the repository, and a sensible licence.

## Project README template

1. Title and a one-line description of the problem it solves.
2. A screenshot or a short GIF of the app in use.
3. Features, in a short list.
4. Tech stack, and why you chose it.
5. How to run it locally, with the exact commands.
6. Architecture: a diagram or a few lines on the main parts.
7. What you learned and what you would improve.
8. Links: the live demo, a demo video, and how to contribute.

## Where to find ideas and datasets

- [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x): Guides for rebuilding Git, Redis, a shell, a database and more
- [Project-Based Learning](https://github.com/practical-tutorials/project-based-learning): Tutorials that teach through projects, by language
- [Free public APIs](https://github.com/public-apis/public-apis): A list of APIs to build on
- [Kaggle datasets](https://www.kaggle.com/datasets): Data for ML and analysis projects
- [Frontend Mentor](https://www.frontendmentor.io): Real design challenges to build
- [CodeCrafters](https://codecrafters.io): Build real tools step by step, with tests


---

# Git and essential tools

Tools are what separate a student who can code from a developer who can work in a team. Git comes first: you will use it every day for the rest of your career. Then the terminal, an editor, containers and the rest.

## Git: the mental model

Git stores snapshots of your project, called commits. Each commit points to the one before it, so the history is a chain. A branch is only a movable label on a commit, which is why creating one is instant and free.

Your files live in three places: the working directory (what you edit), the staging area (what you have chosen to include in the next commit) and the repository (the saved history). Most Git commands move changes between those three places.

A remote, usually called origin, is a copy of the repository on GitHub. Pushing sends your commits there, and pulling brings other people's commits to you.

1. Edit files in the working directory.
2. git add chooses which changes go into the next commit.
3. git commit saves them as a snapshot with a message.
4. git push sends the new commits to GitHub.

## Git: the commands you will use daily

| Command | What it does | When to use it |
| --- | --- | --- |
| git clone <url> | Copies a repository to your computer | Once, to start working on a project |
| git status | Shows what has changed and what is staged | Constantly, before every other command |
| git add <file> | Stages a file for the next commit | After you finish one logical change |
| git add -p | Stages a file piece by piece | To keep unrelated edits in separate commits |
| git commit -m "message" | Saves the staged changes | After staging, with a clear message |
| git diff | Shows unstaged changes line by line | Before staging, to review your own work |
| git diff --staged | Shows what is about to be committed | Before committing |
| git log --oneline --graph | Shows history as a short graph | To see where you are and how branches relate |
| git switch -c <name> | Creates a branch and moves to it | At the start of every task |
| git switch <name> | Moves to an existing branch | To change tasks |
| git fetch | Downloads new commits without changing your files | To see what has changed on the remote |
| git pull | Fetches and brings the remote changes in | To update your branch |
| git push -u origin <name> | Sends a new branch to GitHub | The first time you push a branch |
| git stash | Puts unfinished changes aside | When you must switch branches mid-task |
| git stash pop | Brings the stashed changes back | When you return to the task |

## Git: undoing mistakes

Almost nothing in Git is lost for good. Learn these, and you will stop being afraid of the tool.

| Situation | What to run | Notes |
| --- | --- | --- |
| Edited a file and want to discard the changes | git restore <file> | This cannot be undone, so check git diff first |
| Staged the wrong file | git restore --staged <file> | The edits stay in your working directory |
| Typo in the last commit message, not yet pushed | git commit --amend | Do not amend a commit you have already pushed |
| Forgot a file in the last commit | git add <file> then git commit --amend --no-edit | Only before pushing |
| Want to undo the last commit but keep the work | git reset --soft HEAD~1 | The changes return to the staging area |
| Want to undo a commit that is already pushed | git revert <commit> | Adds a new commit that cancels the old one, so history stays safe |
| Committed to the wrong branch | git switch the-right-branch, then git cherry-pick <commit> | Then remove it from the wrong branch with a reset |
| Lost a commit after a bad reset | git reflog, then git switch -c rescue <hash> | The reflog remembers where HEAD has been for weeks |
| Committed a password or key | Rotate the secret immediately | Removing it from history does not help once it has been public |

## Git: a team workflow that works

1. Update main: git switch main, then git pull.
2. Create a branch for one task: git switch -c feat/search-filter.
3. Make small commits, each doing one thing, with a clear message.
4. Push early, and open a draft pull request so others can see the direction.
5. Pull main into your branch regularly (or rebase on it) to avoid a big conflict at the end.
6. Ask for review, answer every comment, and push fixes as new commits.
7. Merge when the review and the checks pass, then delete the branch.
8. Switch back to main, pull, and start the next task on a new branch.

## Git: good habits

- One commit does one thing. If you need the word 'and' in the message, it may be two commits.
- Write messages in the imperative: 'Add search filter', not 'added stuff'. Say what and why in the first line, in under about 70 characters.
- Use a common style such as feat:, fix:, docs: and chore: at the start of the message, if your team does.
- Never commit secrets, API keys, .env files or large generated folders. Put them in .gitignore before the first commit.
- Read your own diff before every commit and every pull request.
- Never rewrite history on a branch other people use. Rebase and amend only what is yours and unpushed.
- Use merge when you want to keep the full history, and rebase when you want a straight line. Both are fine. Follow your team.
- Never force-push to main. If you must force-push your own branch, use --force-with-lease.

## Git: fixing a merge conflict

A conflict means two people changed the same lines. Git cannot guess which to keep, so it marks both and asks you. It looks scary, but it is routine.

1. Run git status to see which files conflict.
2. Open each file and find the markers: <<<<<<<, ======= and >>>>>>>.
3. Choose what the final code should be. It may be one side, the other, or a mix. Delete the markers.
4. Run the code and the tests. A conflict that compiles can still be wrong.
5. git add the fixed files, then finish with git commit (for a merge) or git rebase --continue (for a rebase).
6. If you are lost, git merge --abort or git rebase --abort puts everything back as it was.

## Git and GitHub: learn these next

- [Learn Git Branching](https://learngitbranching.js.org): An interactive game that makes branches and rebase click
- [Pro Git](https://git-scm.com/book): The free Git book, from basics to internals
- [GitHub Skills](https://skills.github.com): Short hands-on courses on pull requests, Actions and Pages
- [Oh Shit, Git!?!](https://ohshitgit.com): Plain-language fixes for common Git disasters
- [Conventional Commits](https://www.conventionalcommits.org): A simple convention for commit messages
- [GitHub Docs](https://docs.github.com): Forks, pull requests, issues, Actions and security

## Your GitHub profile

- Use a real profile photo and a short bio. Recruiters do look.
- Pin your best 4–6 repositories, and write a README for each with a screenshot, how to run it and what you learned.
- Create a profile README (a repository named after your username) with who you are, what you are learning and your best links.
- Commit steadily. A graph with small activity every week beats one with a burst of 200 commits in a day.
- Contribute to others' repositories. Merged pull requests show up on your profile.
- Turn on two-factor authentication, and add an SSH key so you do not type passwords.

## The terminal and Linux

Almost every server runs Linux, and most developer tools are made for the terminal. An hour of practice each week makes you quicker for years.

| Task | Command | Why it matters |
| --- | --- | --- |
| Move around | cd, ls, pwd | Basic navigation |
| Search inside files | grep -rn "text" . | Finding where something is used |
| Search for files | find . -name "*.ts" | Locating files fast |
| Read logs | tail -f app.log | Watching what an app does live |
| Chain commands | ls \| grep test \| wc -l | Pipes are the heart of the shell |
| Permissions | chmod, chown | Fixing 'permission denied' correctly |
| Processes | ps, top, kill | Finding and stopping stuck programs |
| Network | curl, ping, ssh | Testing APIs and logging in to servers |

- [The Missing Semester](https://missing.csail.mit.edu): Shell, editors, Git, debugging and more, from MIT
- [Linux Journey](https://linuxjourney.com): Beginner-friendly Linux lessons
- [OverTheWire: Bandit](https://overthewire.org/wargames/bandit/): A game that teaches the command line

## Editor, debugger and shortcuts

- Pick one editor (VS Code is a good default) and learn its shortcuts: multi-cursor, go to definition, rename symbol, search across files, command palette.
- Learn to use the debugger: breakpoints, stepping, watching variables and the call stack. It is quicker than adding print statements.
- Install a formatter and a linter, and run them on save. Your code stays consistent without arguments.
- Type faster with fewer errors: learn touch typing for 15 minutes a day for a month.
- Keep your dotfiles and settings in a GitHub repository so a new laptop takes ten minutes to set up.

## Package managers and runtimes

| Ecosystem | Tools | Remember |
| --- | --- | --- |
| JavaScript / TypeScript | Node.js, npm, pnpm, nvm | Commit the lockfile, and never commit node_modules |
| Python | python, pip, venv, uv | One virtual environment per project |
| Java | JDK, Maven or Gradle | Match the JDK version the project expects |
| C++ | g++ or clang, CMake, make | Compile with warnings turned on |
| Go and Rust | go, cargo | Both ship their own build and test tools |

## Docker and containers

1. Install Docker and run a first container: docker run hello-world.
2. Understand the three words: an image (a template), a container (a running copy) and a volume (data that survives).
3. Write a Dockerfile for one of your projects, and build and run it.
4. Use Docker Compose to start the app and its database with one command.
5. Learn to read logs and enter a running container: docker logs and docker exec.
6. Keep images small, and never put secrets inside an image.

- [Docker getting started](https://docs.docker.com/get-started/): The official walkthrough
- [Play with Docker](https://labs.play-with-docker.com): Free labs in your browser

## APIs, databases and debugging tools

| Tool | Use it for |
| --- | --- |
| Postman, Bruno or curl | Trying and saving API requests |
| Browser DevTools | Inspecting the DOM, network calls, console errors, performance and storage |
| DBeaver, TablePlus or pgAdmin | Looking at tables and running queries against a database |
| JSON formatters and jq | Reading and filtering JSON from the command line |
| Regex101 | Building and testing regular expressions |
| Excalidraw and draw.io | Quick architecture diagrams for your README and interviews |

## CI/CD, testing and quality

- Set up GitHub Actions on one project: run the tests, the linter and the build on every pull request.
- Write tests for the parts that would hurt most if they broke. Start with a few, not none.
- Use a formatter (Prettier, Black) and a linter (ESLint, Ruff) so style never wastes review time.
- Use Dependabot or a similar tool to keep dependencies updated and to spot known vulnerabilities.
- Add a pre-commit hook so mistakes are caught before they reach the repository.

- [GitHub Actions documentation](https://docs.github.com/en/actions): Workflows, triggers and examples
- [Vitest](https://vitest.dev): A fast test runner for JavaScript and TypeScript
- [Playwright](https://playwright.dev): Browser tests that behave like a real user

## Notes, documentation and productivity

- Keep a notes system (Notion, Obsidian or plain Markdown in Git). Write down each bug you fix and each concept you finally understood.
- Learn Markdown. You will write it in every README, issue and pull request.
- Write a README before you finish a project, so you can tell whether another person could run it.
- Use a task board (GitHub Projects or a simple list) for your own projects, as a team would.
- Block distractions during study hours, and keep a weekly review: what did I finish, and what next?

## Learning to use AI coding tools

- Use an AI assistant to explain unfamiliar code, suggest tests and review your diff. Do not use it to skip learning the basics.
- Always read and run what it gives you. Check APIs it mentions against the official docs, because it can be confidently wrong.
- Give it context: the error message, the relevant code and what you already tried. Better questions give better answers.
- Never paste secrets, private keys or other people's confidential code into a tool you do not control.
- You are responsible for every line you commit, whoever or whatever wrote it.

## A setup checklist for your first week

1. Install Git, set your name and email, and create an SSH key for GitHub.
2. Install VS Code with a formatter and a linter, and learn five shortcuts.
3. Install Node.js or Python, and create your first project in a Git repository.
4. Install Docker and run one container.
5. Install a database client and a PostgreSQL instance, and write your first query.
6. Create a GitHub profile README and pin one repository.
7. Set up a notes folder and write down today's lesson.


---

# Learning and building in the age of AI

AI tools now write a lot of code, and companies know it. That changes what is worth learning and how you should learn it, but it does not remove the need for fundamentals. The students who do well use AI to learn faster and build more, and can still explain every line they ship.

## What AI changes, and what it does not

A useful rule: if you could not have written it, or at least explained it, do not commit it. The AI is a fast junior who is confident and sometimes wrong. You are the senior who reviews the work.

| Still matters | Matters more now | Matters less now |
| --- | --- | --- |
| DSA, DBMS, OS, networks: interviews still test them, and you need them to judge AI output | Reading and reviewing code, writing tests, debugging, and explaining trade-offs | Memorising syntax and boilerplate |
| Building and finishing real projects | Breaking a vague problem into small, checkable steps | Typing speed, and writing simple CRUD by hand |
| Clear writing and communication | Knowing when the AI is wrong, and how to verify it | Looking up the same commands again and again |

## Use AI to learn, not to skip learning

- Try the problem first for 20–30 minutes. Then ask for a hint, not the answer. Say 'give me a hint only' or 'ask me questions until I find it'.
- Ask it to explain a concept three ways: simply, with an example, and with where it breaks. Then explain it back in your own words and ask it to find the gaps.
- Ask it to quiz you on a topic, and to mark your answers. It is a patient interviewer that is available at 2 a.m.
- Paste an error and your code, and ask why it happens. Do not just apply the fix. Understand the cause.
- Ask for a code review of your own solution: bugs, edge cases, complexity and naming. Compare it with a better solution afterwards.
- Never copy a solution you cannot reproduce from a blank file a day later. That is the test of whether you learned it.
- Check facts against the official docs. AI can invent functions, flags and links that do not exist.

## Where AI help hurts you

- Contests and online assessments often ban AI, and interviews often test you without it. If you only ever practised with help, you will freeze.
- Pasting the problem and the answer back builds the feeling of understanding without the skill.
- Accepting code you did not read creates bugs you cannot debug, and security holes you cannot see.
- Your college or an employer may have rules on AI use. Read them, and say honestly when you used it.
- Sharing private data, API keys, or company code in a public AI tool can leak it. Treat prompts as public unless you know otherwise.

## A good workflow for coding with AI

1. Write down what you want in plain words first: inputs, outputs, edge cases and what 'done' means.
2. Ask for a plan or a design before code, and read the plan. Fix the plan before you fix the code.
3. Work in small steps. One function or one change at a time, not a whole app in one go.
4. Read every line of the result. Run it. Ask what each part does if you do not know.
5. Write or ask for tests, and run them. Tests are how you check the AI, not the other way round.
6. Use Git: commit before a big AI change so you can undo it, and review the diff like a teammate's pull request.
7. When it goes in circles, stop. Start a new chat with a short summary of the problem, or debug it yourself.

## How to write a good prompt

- Give context: the language, the framework, the version, and what the code is for.
- Show the actual error message, the relevant code and what you already tried.
- State the constraints: 'no new libraries', 'must run in O(n log n)', 'match the style of the file'.
- Say the output you want: a diff, one function, a table, or a step-by-step explanation.
- Ask it to say what it is unsure about, and to list assumptions it made.
- Iterate. The first answer is a draft. Reply with what is wrong and what you want changed.

## Learning to build with AI: a path

Every software role is gaining AI work, not only the AI/ML role. Adding a language model to a product is now an ordinary skill, like adding a database. This path is for building apps that use models, and it needs ordinary programming first.

| Stage | Learn | Build |
| --- | --- | --- |
| 1. Foundations (any time) | Python or TypeScript, HTTP and JSON APIs, basic SQL, Git | A small app that calls any public API and shows the result |
| 2. Use a model through an API | Chat and message formats, system prompts, temperature, tokens and context windows, streaming, error handling and rate limits, cost per call | A command-line or web chatbot with a clear purpose and a saved history |
| 3. Make the output reliable | Structured output (JSON with a schema), validation, retries, few-shot examples, and handling refusals and bad output | A tool that turns messy text (emails, resumes, receipts) into clean data |
| 4. Give the model your data (RAG) | Embeddings, chunking, a vector store or full-text search, retrieval, citing sources, and when not to use RAG | A question-answering bot over your college notes or a set of PDFs, with source links |
| 5. Tools and agents | Tool and function calling, loops with a step limit, state, human approval for risky actions, and why simple workflows beat clever agents | An assistant that can search, read a file and call one real API, with a log of each step |
| 6. Evaluate and ship | Test sets, automatic and human evaluation, regression checks when you change a prompt, logging, latency and cost, and caching | Take one earlier project and add an evaluation set and a dashboard of cost and quality |

## Concepts worth understanding

| Concept | In one line |
| --- | --- |
| Large language model (LLM) | A model trained to predict the next piece of text, which turns out to be useful for many language tasks |
| Token and context window | Models read and write in pieces called tokens, and can only consider a limited amount of text at once |
| Hallucination | A fluent answer that is wrong or made up. Ground it with sources and check it |
| Embedding | A list of numbers that captures meaning, so similar texts are close together |
| RAG (retrieval-augmented generation) | Fetch relevant text first, then ask the model to answer from it |
| Fine-tuning | Further training a model on your examples. Try prompting and RAG first, since they are cheaper and easier |
| Agent | A model in a loop that can call tools and decide the next step. Powerful, but harder to make reliable |
| Evaluation | A repeatable test of quality on example inputs. Without one you are guessing whether a change helped |
| Prompt injection | Text in the input that tries to give the model new instructions. Never trust content the model reads from the web or from users |

## Safety and good habits when you ship AI features

- Treat model output as untrusted input. Validate it before you run it, show it, or put it in a database.
- Never let a model run commands, send emails or spend money without a limit and, for risky actions, a human check.
- Keep API keys on the server, never in the browser or in the repository. Set spending limits.
- Do not send personal or private data to a model unless you have a clear reason and permission.
- Tell users when they are talking to an AI, and give a way to report a bad answer.
- Log inputs, outputs, latency and cost so you can find problems, and respect privacy while doing it.
- Expect models to change. Pin the model version where you can and re-run your evaluation set when it changes.

## What to do in each year

| Year | Learn | Do with AI |
| --- | --- | --- |
| First | A language, basic DSA, Git, and how to debug without help | Use AI as a tutor: explain, quiz, hint. Keep a rule of no copy-pasting solutions |
| Second | DSA, DBMS, OS, networks and web development | Review your own code with AI, and build a small app that calls a model API |
| Third | System design basics, a role-specific stack, and the AI path from stages 2 to 4 | Ship a RAG or structured-output project to real users, with an evaluation set |
| Final | Interview skills and depth in one area | Show one AI project with measured results, and be ready to explain every design choice without help |

## For students who want an AI/ML career

Building apps with models and researching or training models are different jobs. The first is a software skill and open to everyone. The second needs more mathematics and is the AI/ML role described on the Roles page.

- Maths to study: linear algebra, probability and statistics, and a little calculus (gradients).
- Learn classical machine learning first: regression, trees, evaluation, overfitting and cross-validation. It teaches you to think about data.
- Then deep learning: neural networks, backpropagation, and transformers. Build a tiny model from scratch once.
- Read a paper a week with a friend. Start with surveys and well-known papers, and reproduce one result.
- Show work: a Kaggle notebook, a reproduced paper, or an honest error analysis of a model you trained.

## AI in interviews and at work

- Many interviews are still run without AI. Practise on paper or in a plain editor so you can think without help.
- Some companies now allow or even test AI use. Then they judge how you prompt, check, and fix the output.
- Expect questions on your projects: why this model, how you evaluated it, what it costs, and what fails. Prepare honest answers.
- At work, you are still responsible for the code you merge. 'The AI wrote it' is never an answer in a review.
- Be open about it. Say which parts used AI and how you verified them. Teams trust people who check.

## Common mistakes

- Skipping the basics because 'AI will do it'. You then cannot tell good output from bad.
- Building a chatbot wrapper with no clear problem, and no evaluation, and calling it a project.
- Starting with agents or fine-tuning before you have a reliable single prompt.
- Not checking cost until the bill arrives.
- Trusting a confident answer. Test it, run it, and read the docs.
- Switching tools every week. Pick one assistant and learn it well.
- Hiding your use of AI in coursework or interviews.

## Where to learn

- [Anthropic documentation](https://docs.anthropic.com): The API, prompting guides and examples for building with Claude
- [OpenAI documentation](https://platform.openai.com/docs): APIs, embeddings and guides for building with GPT models
- [Prompt Engineering Guide](https://www.promptingguide.ai): Techniques and examples for writing prompts
- [DeepLearning.AI short courses](https://www.deeplearning.ai/short-courses/): Free, one-hour courses on RAG, agents, evaluation and more
- [Hugging Face Learn](https://huggingface.co/learn): Free courses on LLMs, transformers and agents
- [Machine Learning Crash Course (Google)](https://developers.google.com/machine-learning/crash-course): A free, practical start in machine learning
- [fast.ai: Practical Deep Learning](https://course.fast.ai): A free, code-first course in deep learning
- [Neural Networks: Zero to Hero (Andrej Karpathy)](https://karpathy.ai/zero-to-hero.html): Build a small language model from scratch
- [AI SDK](https://ai-sdk.dev): A TypeScript toolkit for chat, streaming, tools and structured output
- [OWASP Top 10 for LLM applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/): The main security risks when building with models


---

# Open source

Merged pull requests show you can read other people's code, work with reviewers and finish what you start. Start small and start early.

## Where to start

- [Open Source Guides](https://opensource.guide): How open source works and how to join in
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/): The step-by-step guide
- [first-contributions](https://github.com/firstcontributions/first-contributions): Make a practice pull request
- [Good First Issue](https://goodfirstissue.dev): Beginner issues from many projects
- [Up For Grabs](https://up-for-grabs.net): Projects with beginner-friendly tasks

## Your first contribution, step by step

1. Choose a project you already use, or one in your language. A smaller project with active maintainers beats a huge one.
2. Read the README, CONTRIBUTING.md and the code of conduct.
3. Run the project locally before you change anything.
4. Pick a labelled issue (good first issue, documentation). Comment that you want to work on it and wait for a reply.
5. Fork, clone, and create a branch for the change.
6. Keep the change small and follow the project's style and commit rules.
7. Open a pull request that links the issue, explains what you changed and why, and includes screenshots or test results.
8. Respond to review politely and quickly. Review feedback is the best free mentoring you will get.
9. Repeat. After three or four merged PRs, move on to bug fixes and small features.

## Programmes to aim for

Start in your second year at the latest if you want GSoC or similar programmes. Applications open early in the year, and they look for a history of merged work.

- [Hacktoberfest](https://hacktoberfest.com): Runs every October
- [Google Summer of Code](https://summerofcode.withgoogle.com): Paid summer mentorship with open-source organisations
- [MLH Fellowship](https://fellowship.mlh.io): Remote fellowship on open-source projects
- [LFX Mentorship](https://lfx.linuxfoundation.org/tools/mentorship/): Linux Foundation mentorships


---

# Roles and jobs

Pick a direction, see what the job is, what to study, what to build and what a senior would tell you.

| Role | Tagline | Main tools |
| --- | --- | --- |
| [Backend developer](roles/backend.md) | Build the servers, APIs and databases that apps run on. | Java, Node.js/TypeScript, Python or Go, SQL, Redis |
| [Frontend developer](roles/frontend.md) | Build what people see, tap and read in the browser. | HTML, CSS, TypeScript, React, Next.js |
| [Full-stack developer](roles/full-stack.md) | Own a feature from the database to the screen. | TypeScript, React/Next.js, Node.js, PostgreSQL |
| [Mobile developer](roles/mobile.md) | Build apps people carry in their pocket. | Kotlin, Swift, or React Native/Flutter |
| [AI / ML engineer](roles/ai-ml.md) | Train, evaluate and ship models, and build products on top of them. | Python, NumPy, pandas, PyTorch, scikit-learn, SQL |
| [Data analyst / engineer](roles/data.md) | Move data, shape it, and turn it into answers. | SQL, Python, Airflow or similar, a warehouse such as BigQuery, Power BI or Tableau |
| [DevOps / cloud engineer](roles/devops.md) | Make software ship safely and stay running. | Linux, Docker, Kubernetes, Terraform, GitHub Actions, AWS or GCP |
| [Security engineer](roles/security.md) | Find weaknesses before attackers do, and help fix them. | Networking, Linux, Python, Burp Suite, Wireshark, SIEM tools |
| [QA / test automation engineer](roles/qa.md) | Make sure the software works before users find out that it does not. | Python or JavaScript, Playwright or Selenium, Postman, SQL, GitHub Actions |
| [Embedded / IoT engineer](roles/embedded.md) | Write the software that runs inside devices. | C, C++, microcontrollers (ESP32, STM32, Arduino), RTOS, I2C, SPI, UART |
| [Game developer](roles/game.md) | Build the interactive worlds that people play. | C# with Unity, C++ with Unreal, Godot, Git LFS |
| [UI/UX designer](roles/ui-ux.md) | Work out what people need, then shape a product that is easy and pleasant to use. | Figma, user research, prototyping, design systems, basic HTML and CSS |
| [Product manager](roles/product.md) | Decide what to build and why, and keep the team pointed at the right problem. | Writing, SQL and analytics, user research, roadmaps, basic technical knowledge |
| [Blockchain developer](roles/web3.md) | Build programs that run on a blockchain, where mistakes can be expensive and permanent. | Solidity, Foundry or Hardhat, TypeScript, ethers or viem, a wallet, a testnet |


---

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

## Resources

- [roadmap.sh: Backend](https://roadmap.sh/backend): A visual checklist of topics
- [System Design Primer](https://github.com/donnemartin/system-design-primer): Design problems with worked answers
- [Use The Index, Luke](https://use-the-index-luke.com): Free guide to SQL indexing
- [OWASP Top 10](https://owasp.org/www-project-top-ten/): The risks every backend developer should know


---

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


---

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

## Resources

- [The Odin Project](https://www.theodinproject.com): A free full-stack curriculum
- [Full Stack Open](https://fullstackopen.com/en/): University of Helsinki's free course
- [Learn Next.js](https://nextjs.org/learn): The official interactive tutorial
- [roadmap.sh: Full Stack](https://roadmap.sh/full-stack): A visual checklist of topics


---

# Mobile developer

*Build apps people carry in their pocket.*

## The job

You build apps for Android, iPhone or both. You work with touch input, small screens, flaky networks, battery limits and app-store rules, which makes the job different from the web.

### A day in the job

- Build screens and navigation from designs.
- Handle offline use, slow networks and background work.
- Test on real devices and several screen sizes.
- Ship through the app stores and fix issues from crash reports.

**Good if:** You enjoy polished interfaces, and you like building something you use yourself every day.

**Main tools:** Kotlin, Swift, or React Native/Flutter

## Where you will work

| Type | What you do there |
| --- | --- |
| Consumer app companies | Food, travel, payments and social apps depend on mobile. |
| Fintech and banks | Secure apps used by millions. |
| Startups | Mobile-first products built by tiny teams. |
| Agencies | Build apps for many brands. |

## Study plan

### Programming foundations (Months 1–2)

- A solid grip on one language: Kotlin, Swift, or TypeScript for React Native.
- OOP, collections and async code.
- Git, and reading API documentation.

**Build:** A command-line or console app that fetches and prints data from a public API.

### First apps (Months 3–5)

- Pick one route: native Android (Kotlin and Jetpack Compose), native iOS (Swift and SwiftUI) or cross-platform (React Native with Expo, or Flutter).
- Layouts, navigation, lists and forms.
- Calling REST APIs and showing the results.
- Local storage.

**Build:** A multi-screen app that talks to an API and saves data on the device.

### Real-world behaviour (Months 6–8)

- App architecture: separating screens, state and data.
- Offline-first design and syncing.
- Push notifications, permissions, camera and location.
- Authentication and keeping tokens safe.
- Crash reporting and analytics.

**Build:** Make your app work offline and add push notifications and sign-in.

### Release (Months 9+)

- Performance: list rendering, memory, start-up time.
- Testing UI and logic.
- App store listings, signing, review guidelines and release builds.
- CI for building and testing.

**Build:** Publish an app to the Play Store or TestFlight and collect feedback.

## What to build

| Level | Project | What | What it proves |
| --- | --- | --- | --- |
| Starter | Expense or habit tracker | Several screens, local storage, charts. | You can build and navigate a complete app. |
| Intermediate | Campus utility app | Timetable, notes or bus times from an API, with notifications and offline use. | You can handle the network and device features. |
| Advanced | A published app with real users | Sign-in, sync, crash reporting, store listing and several releases. | You can ship and maintain, which is what employers want. |

## Tools

- Android Studio, or Xcode on a Mac
- A real device for testing
- Expo and Expo Go, if you use React Native
- Firebase, or an equivalent for auth and push
- Postman
- A crash reporting tool such as Crashlytics or Sentry

## A week of study

| When | What |
| --- | --- |
| Mon, Wed | Learn one mobile topic and add it to your app (1 hour) |
| Tue, Thu | DSA: two problems and a revision (45 minutes) |
| Fri | Study one well-known app's behaviour and rebuild a screen (45 minutes) |
| Weekend | Build: two hours on your app, test on a real phone |

## A senior's advice

### Do

- Test on a real, cheap phone. Emulators hide slowness.
- Design for no network first, then add the network.
- Ask for a permission only when the user needs the feature, and explain why.
- Keep a release checklist and follow it.
- Read crash reports weekly.

### Avoid

- Choosing cross-platform or native only because of hype. Choose for the team and the product.
- Doing heavy work on the main thread.
- Storing tokens in plain text on the device.
- Building for the newest phone only.
- Ignoring the app store rules until the review fails.

## Mistakes juniors make

- Only testing on a fast emulator.
- Blocking the main thread with network or database work.
- Asking for every permission on the first launch.
- Not handling screen rotation, small screens or the keyboard.
- Ignoring the store's review guidelines until the app is rejected.

## Questions to ask a senior

- How do you keep release quality up when you cannot instantly update the app?
- How do you support old phones and old operating systems?
- What do you log to understand a crash?

## Myths and reality

| Myth | Reality |
| --- | --- |
| Cross-platform makes native skills useless. | Knowing the native platform helps you solve problems the framework hides. |
| Mobile is only for people who like design. | Performance, offline sync and architecture are large parts of the job. |
| Once published, an app is finished. | Releases, crashes and operating-system updates never stop. |

## First 90 days

| When | Goal |
| --- | --- |
| Days 1–30 | Build and run the app on a real device, fix small bugs, and learn the navigation structure. |
| Days 31–60 | Ship one screen or flow with tests and handle its offline behaviour. |
| Days 61–90 | Find a crash or slow screen from the reports and fix it. |

## Career ladder

| Level | Focus |
| --- | --- |
| Junior (0–2 years) | Build screens, wire them to APIs, and fix bugs from crash reports. |
| Mid-level (2–5 years) | Own features and architecture, and handle offline use and performance. |
| Senior (5+ years) | Lead app architecture, release process and quality for the team. |
| Staff and beyond | Set mobile strategy across apps and platforms. |

## Interview preparation

- DSA at medium level.
- The app lifecycle, and how state survives rotation or being killed.
- Architecture: MVVM or similar, and why.
- How you would build an offline-first feed or chat screen.
- Walk through your published or demo app.

## Resources

- [roadmap.sh: Android](https://roadmap.sh/android): A visual checklist of topics
- [Android Basics with Compose](https://developer.android.com/courses/android-basics-compose/course): Google's free beginner course
- [Expo documentation](https://docs.expo.dev): React Native with the fastest start
- [100 Days of SwiftUI](https://www.hackingwithswift.com/100/swiftui): A free structured course for iOS


---

# AI / ML engineer

*Train, evaluate and ship models, and build products on top of them.*

## The job

You turn data into working predictions or language features. Much of the job is not the model: it is cleaning data, measuring whether the model is actually good, and getting it into a product that does not break.

### A day in the job

- Clean and explore data, and find where it is wrong or biased.
- Train, tune and compare models, or design prompts and retrieval for language models.
- Build evaluation sets and measure quality honestly.
- Package a model behind an API and monitor it.
- Explain results to people who are not specialists.

**Good if:** You enjoy maths, experiments and being wrong several times before being right. You are careful about evidence.

**Main tools:** Python, NumPy, pandas, PyTorch, scikit-learn, SQL

## Where you will work

| Type | What you do there |
| --- | --- |
| Product companies | Recommendations, search, fraud detection and assistants. |
| AI startups | Build products on top of language and vision models. |
| Research labs | Usually need a master's degree or a PhD. |
| Healthcare and finance | Predictive models with strict quality rules. |

## Study plan

### Programming and maths (Months 1–3)

- Python, including NumPy and pandas.
- Linear algebra: vectors, matrices, dot products.
- Probability and statistics: distributions, mean and variance, bias, sampling.
- Calculus essentials: derivatives and the chain rule.
- Plotting with matplotlib.

**Build:** Analyse a real dataset and write up three findings with charts.

### Classical machine learning (Months 4–6)

- Regression, classification, trees, and ensembles.
- Train, validation and test splits; cross-validation; overfitting.
- Metrics: accuracy, precision, recall, F1, ROC-AUC, and why accuracy misleads.
- Feature engineering with scikit-learn.

**Build:** A model on a Kaggle dataset, with a clear metric and an honest error analysis.

### Deep learning and language models (Months 7–10)

- Neural networks, backpropagation, and training with PyTorch.
- CNNs for images and transformers for text.
- Fine-tuning and using pretrained models.
- Working with language-model APIs: prompting, structured output, retrieval-augmented generation and evaluation.

**Build:** A retrieval-based question-answering app over a document set, with a test set to measure quality.

### Production (Months 11+)

- Serving a model through an API, and batching.
- Experiment tracking and data versioning.
- Monitoring for drift and bad outputs.
- Cost and latency trade-offs.
- Safety, privacy and bias.

**Build:** Deploy your model or app with logging, an evaluation script and a short model card.

## What to build

| Level | Project | What | What it proves |
| --- | --- | --- | --- |
| Starter | Exploratory data analysis | A cleaned dataset, charts, a baseline model and an honest note on its limits. | You can handle data and not oversell results. |
| Intermediate | Image or text classifier with a demo | Transfer learning, a proper evaluation, a small web demo. | You can train, measure and present a model. |
| Advanced | Retrieval-based assistant with evaluation | Documents, chunking, retrieval, a prompt, an evaluation set and cost tracking. | You can build something useful and know whether it works. |

## Tools

- Python with Jupyter or VS Code notebooks
- NumPy, pandas, scikit-learn, matplotlib
- PyTorch
- Weights & Biases or MLflow for experiment tracking
- Hugging Face for models and datasets
- FastAPI for serving

## A week of study

| When | What |
| --- | --- |
| Mon, Wed | Maths or an ML lesson plus exercises (1 hour) |
| Tue, Thu | DSA: two problems and a SQL query (45 minutes) |
| Fri | Read a paper summary and reimplement one idea (45 minutes) |
| Weekend | Build: three hours on a Kaggle task or your project |

## A senior's advice

### Do

- Start with a dumb baseline. If a simple rule gets 90%, you need a reason to use a model.
- Hold out a test set and do not touch it until the end.
- Look at your data and your errors by hand. Most improvements come from there.
- Write the evaluation before you build the feature.
- Learn the maths behind one model deeply, not the name of fifty.

### Avoid

- Quoting accuracy on an imbalanced dataset.
- Leaking test data into training.
- Copying notebooks without understanding each cell.
- Using a huge model where a small one would do.
- Shipping a demo as if it were a product.

## Mistakes juniors make

- Tuning the model before looking at the data.
- Reporting a number from a single lucky run.
- Splitting data randomly when it should be split by time or user.
- Not writing down which data and settings produced a result.
- Treating a model's confident answer as a true answer.

## Questions to ask a senior

- How do you decide a model is good enough to ship?
- How do you find out that a model has quietly got worse?
- How do you handle labelling and bad data?

## Myths and reality

| Myth | Reality |
| --- | --- |
| AI jobs are mostly about training models. | Most of the work is data, evaluation, and getting models into products. |
| You need a PhD. | Research roles often do, but applied engineering roles value skills and projects. |
| Calling an API is enough. | Employers want people who can measure quality and handle failures. |

## First 90 days

| When | Goal |
| --- | --- |
| Days 1–30 | Learn the data, reproduce the current baseline, and read the evaluation code. |
| Days 31–60 | Run a clean experiment that beats a baseline, with notes anyone can repeat. |
| Days 61–90 | Ship an improvement behind a flag and track its effect in production. |

## Career ladder

| Level | Focus |
| --- | --- |
| Junior (0–2 years) | Clean data, run experiments, and reproduce results with guidance. |
| Mid-level (2–5 years) | Own a model or feature, design evaluations, and ship it. |
| Senior (5+ years) | Choose approaches, set quality bars, and lead projects from idea to production. |
| Staff and beyond | Define the technical strategy for data and models across teams. |

## Interview preparation

- Python and DSA at an easy to medium level.
- Statistics and ML fundamentals: overfitting, bias and variance, regularisation, metrics.
- Walk through a project: data, baseline, results and mistakes.
- SQL and data manipulation questions.
- How you would evaluate a language-model feature.

## Resources

- [Machine Learning Specialization](https://www.coursera.org/specializations/machine-learning-introduction): Andrew Ng's course, a gentle start
- [fast.ai Practical Deep Learning](https://course.fast.ai): A free, project-first course
- [Kaggle Learn](https://www.kaggle.com/learn): Short courses and datasets to practise on
- [roadmap.sh: AI and Data Scientist](https://roadmap.sh/ai-data-scientist): A visual checklist of topics


---

# Data analyst / engineer

*Move data, shape it, and turn it into answers.*

## The job

Analysts answer business questions with data and show the answers clearly. Data engineers build the pipelines that collect, clean and store that data so analysts and models can trust it. The two roles overlap, and many people start as one and move to the other.

### A day in the job

- Write SQL to answer questions or to build clean tables.
- Build and monitor pipelines that load data on a schedule.
- Check data quality and chase down why numbers do not match.
- Build dashboards and explain what they mean.
- Work with the people who own the data and the people who use it.

**Good if:** You like finding the story in numbers, you are careful with details, and you enjoy explaining things plainly.

**Main tools:** SQL, Python, Airflow or similar, a warehouse such as BigQuery, Power BI or Tableau

## Where you will work

| Type | What you do there |
| --- | --- |
| Product and e-commerce companies | Track the business with dashboards and models. |
| Banks and insurers | Reporting, risk and customer analysis. |
| Consulting firms | Analyse data for many clients. |
| Tech companies | Build the pipelines and platforms other teams rely on. |

## Study plan

### SQL and spreadsheets (Months 1–2)

- SQL: joins, aggregates, subqueries, window functions and CTEs.
- Spreadsheet formulas and pivot tables.
- Basic statistics: averages, medians, percentiles, correlation, sampling.

**Build:** Answer 20 business questions on a public dataset, with the SQL for each.

### Python and analysis (Months 3–4)

- Python with pandas for cleaning and reshaping data.
- Visualisation with matplotlib or a BI tool.
- Data cleaning: missing values, duplicates, wrong types and outliers.
- Telling a story: one question, one chart, one conclusion.

**Build:** A dashboard with a written summary that a manager could act on.

### Data engineering (Months 5–8)

- Data modelling: facts and dimensions, star schema.
- ETL and ELT, and scheduling with Airflow or similar.
- A cloud warehouse such as BigQuery, Snowflake or Redshift.
- Batch versus streaming, and what Kafka is for.
- Data quality tests and monitoring.

**Build:** An automated pipeline that loads data daily, tests it and updates a dashboard.

### Scale (Months 9+)

- Spark or a similar engine for large data.
- Partitioning, file formats such as Parquet, and cost control.
- Orchestration, lineage and documentation.
- Privacy and access control for data.

**Build:** Process a large public dataset and compare the speed of two designs.

## What to build

| Level | Project | What | What it proves |
| --- | --- | --- | --- |
| Starter | Sales or cricket analysis | Clean the data, answer ten questions in SQL, and chart the results. | You can get answers out of data and show them. |
| Intermediate | Automated reporting pipeline | Pull from an API daily, store in a database, test quality, refresh a dashboard. | You can build something that runs without you. |
| Advanced | Warehouse with a star schema | Several sources, modelled tables, tests, documentation and a cost report. | You think about design, trust and cost, like an engineer. |

## Tools

- PostgreSQL, plus a free warehouse tier such as BigQuery
- Python with pandas and Jupyter
- Power BI, Tableau or Metabase
- dbt, for building tested tables in SQL
- Airflow or a similar scheduler
- Git for your queries and pipelines

## A week of study

| When | What |
| --- | --- |
| Mon, Wed | SQL practice or a data modelling topic (1 hour) |
| Tue, Thu | DSA: two easy to medium problems (45 minutes) |
| Fri | Analyse a new public dataset and write three insights (45 minutes) |
| Weekend | Build: two hours on your pipeline or dashboard |

## A senior's advice

### Do

- Check the numbers against a second source before showing anyone.
- Write SQL that another person can read: CTEs, clear names, comments for the odd parts.
- Ask what decision the analysis will support before starting.
- Make pipelines safe to run twice.
- Document where each number comes from.

### Avoid

- Showing a chart with no conclusion.
- Cleaning data by hand in a way you cannot repeat.
- Trusting a join without checking the row counts.
- Averaging when the median tells the truth.
- Building for big data when a spreadsheet would do.

## Mistakes juniors make

- Joining tables without checking for duplicates.
- Showing a number without saying what it counts.
- Hard-coding dates and filters in queries.
- Making a dashboard nobody asked for.
- Fixing data by hand in a spreadsheet.

## Questions to ask a senior

- Which numbers here do people trust, and which do they argue about?
- How do you find out that a pipeline has failed silently?
- How do you decide what belongs in the warehouse?

## Myths and reality

| Myth | Reality |
| --- | --- |
| Analysts only make charts. | The value is in choosing the right question and checking the answer. |
| Data engineering is only for big companies. | Any company with several data sources needs reliable pipelines. |
| SQL is outdated. | SQL is the most used data skill, and it is asked in almost every interview. |

## First 90 days

| When | Goal |
| --- | --- |
| Days 1–30 | Learn where each important number comes from, and recreate one report from raw data. |
| Days 31–60 | Build a trusted table or pipeline with tests, plus documentation. |
| Days 61–90 | Find a recurring data problem and fix its cause, not just its symptom. |

## Career ladder

| Level | Focus |
| --- | --- |
| Junior (0–2 years) | Write reliable queries and build charts from clear requests. |
| Mid-level (2–5 years) | Own datasets and dashboards, model data, and build pipelines. |
| Senior (5+ years) | Design the data platform, set quality standards and guide analysts. |
| Staff and beyond | Define data strategy, governance and the way a company uses its data. |

## Interview preparation

- SQL: joins, window functions, finding duplicates, top-N per group.
- A case study: given a metric that dropped, how would you investigate?
- Statistics and probability basics.
- Pipeline design: how to load, test and monitor daily data.
- A project walk-through with the business question and result.

## Resources

- [Mode SQL Tutorial](https://mode.com/sql-tutorial): SQL for analysis, from basic to advanced
- [Kaggle Learn: Pandas](https://www.kaggle.com/learn/pandas): A short, practical pandas course
- [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp): A free, project-based data engineering course
- [roadmap.sh: Data Analyst](https://roadmap.sh/data-analyst): A visual checklist of topics


---

# DevOps / cloud engineer

*Make software ship safely and stay running.*

## The job

You build the machinery that tests, packages, deploys and monitors software, and you keep it running on cloud servers. When a release breaks at night or a server fills its disk, you are the one who knows where to look.

### A day in the job

- Maintain pipelines that build, test and deploy code.
- Run applications in containers and manage the cloud resources under them.
- Watch dashboards and alerts, and respond when something is wrong.
- Automate repeated work with scripts and infrastructure as code.
- Work with developers on making deploys safer and faster.

**Good if:** You like understanding how systems fit together, you stay calm when things break, and you prefer automating a task to doing it twice.

**Main tools:** Linux, Docker, Kubernetes, Terraform, GitHub Actions, AWS or GCP

## Where you will work

| Type | What you do there |
| --- | --- |
| Cloud-based product companies | Run the platform that everyone deploys on. |
| Fintech and e-commerce | High uptime is a business requirement. |
| Managed service providers | Operate infrastructure for clients. |
| Startups | Often one person sets up everything. |

## Study plan

### Linux and networking (Months 1–3)

- The Linux command line, file permissions, processes, services and logs.
- Shell scripting.
- Networking: IP, ports, DNS, TCP, HTTP, TLS, firewalls.
- Git, and one programming language (Python or Go).

**Build:** Set up a Linux virtual machine, host a website on it with HTTPS, and write a backup script.

### Containers and CI/CD (Months 4–5)

- Docker: images, layers, volumes, networks and Compose.
- CI/CD with GitHub Actions: build, test, deploy.
- Environments, secrets and configuration.

**Build:** A pipeline that tests an app, builds an image and deploys it on every merge.

### Cloud and infrastructure as code (Months 6–8)

- One cloud in depth (AWS or GCP): compute, storage, networking, IAM, managed databases.
- Terraform: write infrastructure as code and keep state safely.
- Cost control and least-privilege permissions.

**Build:** Define a small environment in Terraform: network, server, database. Create it and destroy it from code.

### Reliability (Months 9+)

- Kubernetes basics: pods, deployments, services, scaling.
- Observability: metrics with Prometheus and Grafana, logs and alerts.
- Incident response, post-mortems, SLOs.
- Backups, disaster recovery and security hardening.

**Build:** Run an app on Kubernetes with monitoring, an alert and a documented runbook.

## What to build

| Level | Project | What | What it proves |
| --- | --- | --- | --- |
| Starter | Self-hosted site on a Linux server | Nginx, HTTPS, a firewall, automatic renewal and backups. | You know the basics underneath the platforms. |
| Intermediate | CI/CD pipeline for a real app | Tests, a Docker build, deploy to the cloud, and a rollback step. | You can make delivery repeatable and safe. |
| Advanced | Monitored, scalable environment as code | Terraform for the infrastructure, Kubernetes for the app, dashboards, alerts and a runbook. | You can run a service, not just deploy it once. |

## Tools

- A Linux machine or WSL, and a good terminal
- Docker and Docker Compose
- GitHub Actions
- Terraform
- kubectl with minikube or kind
- Prometheus and Grafana

## A week of study

| When | What |
| --- | --- |
| Mon, Wed | A Linux, networking or cloud lesson with a lab (1 hour) |
| Tue, Thu | Scripting practice and DSA (45 minutes) |
| Fri | Break your own setup on purpose and fix it (45 minutes) |
| Weekend | Build: two hours on your lab, and destroy it to keep costs at zero |

## A senior's advice

### Do

- Automate anything you do twice, then write down why it works.
- Keep secrets out of Git. Always.
- Give each tool the least access it needs.
- Practise restoring from a backup. A backup you have never restored is a hope.
- Write a short runbook for every alert.

### Avoid

- Learning Kubernetes before you understand Linux and Docker.
- Clicking through the cloud console and forgetting what you changed.
- Leaving cloud resources running and getting a surprise bill.
- Giving everything admin access to save time.
- Blaming people after an incident instead of fixing the process.

## Mistakes juniors make

- Making changes on a server by hand and not recording them.
- Alerts that fire so often everyone ignores them.
- Giving a pipeline admin keys.
- Copying commands from the internet without reading them.
- No test of the rollback until it is needed.

## Questions to ask a senior

- What does a good deploy look like here, and what does a bad one look like?
- How do you decide what deserves an alert?
- What is the cheapest improvement we could make to reliability?

## Myths and reality

| Myth | Reality |
| --- | --- |
| DevOps means knowing every tool. | It is a way of working: automation, feedback and shared ownership. |
| It is only for experienced people. | Many start as developers or system administrators and learn on the job. |
| Kubernetes is the first thing to learn. | Linux, networking and Docker come first. |

## First 90 days

| When | Goal |
| --- | --- |
| Days 1–30 | Learn how code gets from a commit to production, and read the last three incident reports. |
| Days 31–60 | Automate one painful manual task and write the runbook for it. |
| Days 61–90 | Improve a metric: deploy time, failure rate or cloud cost, and show the numbers. |

## Career ladder

| Level | Focus |
| --- | --- |
| Junior (0–2 years) | Maintain pipelines, handle tickets and learn the systems with guidance. |
| Mid-level (2–5 years) | Own the deployment platform and automate away repeated work. |
| Senior (5+ years) | Design reliable platforms, lead incidents and set standards for delivery. |
| Staff and beyond | Define reliability, cost and security strategy across the company. |

## Interview preparation

- Linux and networking: what happens when you type a URL; debugging a slow server.
- Docker and CI/CD design for a given app.
- Cloud services and IAM questions.
- Scenario: the site is down, what do you check first?
- Scripting, plus DSA at an easy to medium level.

## Resources

- [roadmap.sh: DevOps](https://roadmap.sh/devops): A visual checklist of topics
- [Docker getting started](https://docs.docker.com/get-started/): The official walkthrough
- [Kubernetes basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/): An interactive introduction
- [Google SRE books](https://sre.google/books/): Free books on running reliable services


---

# Security engineer

*Find weaknesses before attackers do, and help fix them.*

## The job

You protect software and systems. That can mean testing applications for flaws, reviewing designs for risk, detecting and responding to attacks, or building safer defaults for developers. You must have permission before you test anything.

### A day in the job

- Review code and designs for security problems.
- Test applications and networks that you are authorised to test.
- Investigate alerts and incidents.
- Write clear reports so developers can fix what you find.
- Help teams adopt safe practices such as dependency checks and secret scanning.

**Good if:** You are curious about how things break, careful about ethics and permission, and you can explain a risk without scaring people.

**Main tools:** Networking, Linux, Python, Burp Suite, Wireshark, SIEM tools

## Where you will work

| Type | What you do there |
| --- | --- |
| Product companies | Application security and incident response teams. |
| Banks and fintech | Strict rules and high stakes. |
| Security consultancies | Test many clients' systems, with permission. |
| Bug bounty | Independent testing of programmes that invite it. |

## Study plan

### Fundamentals (Months 1–3)

- Networking: TCP/IP, DNS, HTTP, TLS.
- Linux and the command line.
- Programming in Python, and reading code in other languages.
- Cryptography basics: hashing, symmetric and public-key encryption, and what each protects.

**Build:** Set up a home lab with virtual machines and capture and read your own network traffic.

### Web security (Months 4–6)

- The OWASP Top 10: injection, broken access control, XSS, CSRF, SSRF and more.
- How authentication, sessions and tokens fail.
- Burp Suite and browser DevTools.
- Secure coding fixes for each class of bug.

**Build:** Complete the PortSwigger Web Security Academy labs and write up three of them.

### Practice in safe places (Months 7–9)

- Capture-the-flag events on picoCTF, TryHackMe and Hack The Box.
- Linux privilege escalation and basic reverse engineering.
- Reporting: describe impact, steps to reproduce and a fix.
- Responsible disclosure and bug-bounty rules.

**Build:** A public write-up series of CTF challenges you solved, explained for a beginner.

### Specialise (Months 10+)

- Pick one: application security, cloud security, blue team and detection, or malware analysis.
- Threat modelling a real design.
- Cloud security basics: IAM, misconfiguration and logging.
- Certifications only if your target employers ask for them.

**Build:** Threat-model one of your own projects and fix what you find.

## What to build

| Level | Project | What | What it proves |
| --- | --- | --- | --- |
| Starter | Home lab and traffic analysis | Virtual machines, Wireshark captures, and a note on what each protocol exposes. | You understand what travels on a network. |
| Intermediate | Secure a vulnerable app | Find the flaws in an intentionally vulnerable app such as OWASP Juice Shop, then fix the code and retest. | You can find a bug and fix it, not just report it. |
| Advanced | Security review of a real project | Threat model, dependency and secret scanning, a written report, and pull requests that fix the issues, with the maintainers' permission. | You can add real value to a real codebase. |

## Tools

- Kali Linux or Parrot in a virtual machine
- Burp Suite Community Edition
- Wireshark and nmap, on networks you own
- Browser DevTools
- A note-taking tool such as Obsidian
- Python and Bash for scripting

## A week of study

| When | What |
| --- | --- |
| Mon, Wed | A lab on PortSwigger or TryHackMe, then write notes (1 hour) |
| Tue, Thu | Networking or cryptography reading plus Python (45 minutes) |
| Fri | Read a public bug report or post-mortem and summarise it (45 minutes) |
| Weekend | A CTF, or write up the last one you solved |

## A senior's advice

### Do

- Get written permission before testing anything that is not yours.
- Learn to build before you break. You cannot secure what you do not understand.
- Write reports that a developer can act on in 10 minutes.
- Practise only in legal labs and CTFs.
- Keep notes of everything you try.

### Avoid

- Testing real sites without permission. It is illegal and ends careers.
- Running tools without knowing what they do.
- Chasing certifications instead of skills.
- Reporting every low-risk finding as critical.
- Collecting tools instead of learning concepts.

## Mistakes juniors make

- Testing something without clear permission.
- Reporting a finding with no steps to reproduce.
- Using a tool's output as the conclusion.
- Ignoring the easy problems, such as weak passwords and old software.
- Keeping secrets in notes that are not protected.

## Questions to ask a senior

- Which security issue has cost this team the most?
- How do you get developers to fix findings quickly?
- How do you decide what to fix first when everything looks urgent?

## Myths and reality

| Myth | Reality |
| --- | --- |
| Security is mostly hacking like in films. | It is patient reading, writing, testing and helping developers fix things. |
| You can start with tools like Kali. | Networking, Linux and web fundamentals come first. |
| Bug bounties are an easy income. | They are competitive. Treat them as practice, not a salary. |

## First 90 days

| When | Goal |
| --- | --- |
| Days 1–30 | Learn the systems and the threat model, and shadow reviews and incidents. |
| Days 31–60 | Complete a supervised review and write a report the developers act on. |
| Days 61–90 | Automate one repeated check, such as dependency or secret scanning. |

## Career ladder

| Level | Focus |
| --- | --- |
| Junior (0–2 years) | Triage findings, run tests under supervision and write clear reports. |
| Mid-level (2–5 years) | Own assessments or a detection area and guide developers to fix problems. |
| Senior (5+ years) | Lead security programmes, threat modelling and incident response. |
| Staff and beyond | Set security strategy and risk decisions across the organisation. |

## Interview preparation

- Networking and web fundamentals: HTTP, TLS, cookies, same-origin policy.
- Explain an OWASP Top 10 bug and how to fix it.
- Scenario: you find a suspicious login in the logs, what do you do?
- Threat-model a simple login page.
- Python scripting and DSA at an easy level.

## Resources

- [PortSwigger Web Security Academy](https://portswigger.net/web-security): Free labs for web security
- [picoCTF](https://picoctf.org): Beginner-friendly capture-the-flag practice
- [TryHackMe](https://tryhackme.com): Guided learning paths
- [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/): A deliberately vulnerable app to practise on


---

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


---

# Embedded / IoT engineer

*Write the software that runs inside devices.*

## The job

You program the small computers inside things: sensors, watches, cars, routers, medical devices and smart-home gadgets. The code must work with tight memory, little power and real hardware that does not always behave. Your software touches the physical world.

### A day in the job

- Write C or C++ firmware that reads sensors and controls hardware.
- Debug with oscilloscopes, logic analysers and serial logs.
- Read datasheets and schematics to understand what a chip really does.
- Add communication over Wi-Fi, Bluetooth, or wired protocols.
- Test on real boards and measure power use and timing.

**Good if:** You like electronics and tinkering, you are patient with hardware that fails in odd ways, and you enjoy seeing code move something real.

**Main tools:** C, C++, microcontrollers (ESP32, STM32, Arduino), RTOS, I2C, SPI, UART

## Where you will work

| Type | What you do there |
| --- | --- |
| Automotive | Engine control, infotainment and driver assistance. |
| Consumer electronics | Wearables, speakers and smart-home devices. |
| Medical and industrial | Reliable devices with strict safety rules. |
| Telecom and networking | Routers and radio equipment. |

## Study plan

### C and electronics basics (Months 1–3)

- C in depth: pointers, memory, bit manipulation and structs.
- Digital electronics: voltage, current, resistors, transistors and logic levels.
- Reading a datasheet and a pinout.
- Arduino or ESP32 basics: GPIO, PWM, analogue reading.

**Build:** A blinking LED, then a button-controlled light with debouncing, then a temperature display.

### Communication and sensors (Months 4–6)

- UART, I2C and SPI, and when to use each.
- Interrupts and timers.
- Reading real sensors and filtering noisy data.
- Wi-Fi and Bluetooth, with MQTT for sending data.

**Build:** A weather station that sends readings to a dashboard over Wi-Fi.

### Real-time and professional firmware (Months 7–9)

- An RTOS such as FreeRTOS: tasks, queues, semaphores and priorities.
- State machines and clean firmware structure.
- Debugging with a hardware debugger, JTAG or SWD, and a logic analyser.
- Low-power design and watchdog timers.

**Build:** A multi-task device with a state machine, a watchdog and a low-power mode.

### Product-level skills (Months 10+)

- Bootloaders and safe over-the-air updates.
- Basic PCB design and schematics with KiCad.
- Unit testing firmware and hardware-in-the-loop testing.
- Security: secure boot, encrypted storage and safe defaults.

**Build:** A complete device with a custom board, firmware updates and a written test plan.

## What to build

| Level | Project | What | What it proves |
| --- | --- | --- | --- |
| Starter | Smart plant monitor | A soil sensor, an LED alert and readings on a small display. | You can connect sensors to code reliably. |
| Intermediate | IoT weather or air-quality station | Several sensors, Wi-Fi, MQTT, a dashboard and sleeping between readings. | You can build a connected device that runs for weeks. |
| Advanced | RTOS-based device with updates | FreeRTOS tasks, a state machine, a bootloader and over-the-air updates, on your own PCB. | You understand how real products are built and maintained. |

## Tools

- An ESP32 or STM32 board and an Arduino
- A multimeter and a breadboard
- A logic analyser (even a cheap one)
- PlatformIO or ESP-IDF
- KiCad
- A serial terminal

## A week of study

| When | What |
| --- | --- |
| Mon, Wed | C practice and one electronics topic with a small experiment (1 hour) |
| Tue, Thu | DSA in C or C++ (45 minutes) |
| Fri | Read one datasheet section and write a driver from it (45 minutes) |
| Weekend | Build: two hours on your hardware project |

## A senior's advice

### Do

- Read the datasheet first. The answer is almost always in it.
- Test on the real hardware early and often. Simulators hide timing problems.
- Keep interrupt handlers tiny, and do the work outside them.
- Add a watchdog and a safe state. Devices must recover on their own.
- Log over serial from the first day.

### Avoid

- Using delay() everywhere instead of timers and state machines.
- Allocating memory dynamically in a long-running device without a plan.
- Ignoring the power supply. Many 'software' bugs are electrical.
- Copying library code you cannot debug.
- Shipping without a way to update the device.

## Mistakes juniors make

- Skipping the datasheet and copying a library.
- Doing heavy work inside an interrupt.
- Blaming the code when the wiring or power is wrong.
- Not using a watchdog.
- Forgetting that variables shared with interrupts need to be volatile.

## Questions to ask a senior

- What is the hardest bug you have debugged, and how did you find it?
- How do you test firmware without the real device?
- How do you make updates safe when the device is in the field?

## Myths and reality

| Myth | Reality |
| --- | --- |
| Embedded means only Arduino. | Arduino is a start. Professional work uses C, RTOS and custom boards. |
| You must be an electronics graduate. | Many software people succeed, if they learn electronics basics. |
| It is a dying field. | Every connected device needs firmware, and demand keeps growing. |

## First 90 days

| When | Goal |
| --- | --- |
| Days 1–30 | Build the firmware, flash a board and read through the existing drivers. |
| Days 31–60 | Fix hardware-related bugs using the debugger and a logic analyser. |
| Days 61–90 | Own a small feature and test it on real hardware, including a long-running test. |

## Career ladder

| Level | Focus |
| --- | --- |
| Junior (0–2 years) | Write drivers and small features, and learn to debug on real hardware. |
| Mid-level (2–5 years) | Own a subsystem, such as communication or power management. |
| Senior (5+ years) | Design firmware architecture, choose parts and lead bring-up of new boards. |
| Staff and beyond | Set the technical direction for a product line and its hardware and software together. |

## Interview preparation

- C questions: pointers, volatile, const, bit manipulation, memory layout.
- Explain interrupts, DMA, and the difference between polling and interrupts.
- Compare UART, I2C and SPI.
- Design a state machine for a simple device, such as a washing machine.
- Walk through a hardware bug you debugged and how you found it.

## Resources

- [Arduino documentation](https://docs.arduino.cc): Tutorials for your first sensors and circuits
- [FreeRTOS documentation](https://www.freertos.org/Documentation/00-Overview): The most common real-time operating system
- [ESP-IDF programming guide](https://docs.espressif.com/projects/esp-idf/en/latest/): Professional development for the ESP32
- [KiCad](https://www.kicad.org): Free tool for schematics and circuit boards


---

# Game developer

*Build the interactive worlds that people play.*

## The job

You write the code that makes games run: movement, physics, enemy behaviour, menus, saving, and the many small systems that make a game feel good. A game must run smoothly 60 times a second, so performance and clear structure matter as much as ideas.

### A day in the job

- Implement gameplay features in Unity (C#) or Unreal (C++).
- Tune how the game feels: jump height, camera, controls and timing.
- Profile and fix frame-rate drops.
- Work with artists and designers on tools and content pipelines.
- Fix bugs found in play tests.

**Good if:** You love games and finishing things, you enjoy maths and logic, and you are happy iterating until it feels right.

**Main tools:** C# with Unity, C++ with Unreal, Godot, Git LFS

## Where you will work

| Type | What you do there |
| --- | --- |
| Game studios | Gameplay, tools and engine programming. |
| Mobile game companies | Casual and free-to-play titles. |
| Simulation and training | Games engines for education, defence and architecture. |
| Indie and freelance | Build and sell your own games. |

## Study plan

### Programming and game maths (Months 1–2)

- C# (for Unity) or C++ (for Unreal) with OOP basics.
- Vectors, dot and cross products, and basic geometry.
- The game loop: input, update, render, delta time.
- Git, and keeping large assets out of normal Git.

**Build:** A tiny 2D game with no engine, such as Pong or Snake, using a simple graphics library.

### An engine and your first games (Months 3–5)

- Unity or Godot: scenes, objects, components, prefabs.
- 2D and 3D movement, collision and physics.
- UI, audio, animation and particle effects.
- Saving and loading data.

**Build:** A complete 2D game with a start screen, levels, sound, a win and a lose state.

### Systems and polish (Months 6–8)

- Enemy AI: state machines, pathfinding with A* and behaviour trees.
- Design patterns for games: components, object pooling, events.
- Profiling, memory and optimising frame time.
- Game feel: screen shake, easing, feedback and sound.

**Build:** Add AI enemies and object pooling to your game, and hold 60 frames a second on an older laptop.

### Ship it (Months 9+)

- Multiplayer basics: client and server, lag and synchronisation.
- Shaders and rendering basics.
- Builds for several platforms, and releasing on itch.io or Steam.
- Game jams: finishing a game in 48 hours.

**Build:** Publish a game on itch.io and take feedback from real players.

## What to build

| Level | Project | What | What it proves |
| --- | --- | --- | --- |
| Starter | Classic arcade clone | Pong, Snake or Flappy Bird, finished, with score and restart. | You can finish a game loop from end to end. |
| Intermediate | Platformer or top-down shooter | Levels, enemies with simple AI, sound, a save system and a menu. | You can build several systems that work together. |
| Advanced | Published game or game-jam entry | A polished build with pathfinding or multiplayer, released and playable by strangers. | You can ship, which is what studios look for. |

## Tools

- Unity, Godot or Unreal Engine
- Visual Studio or Rider
- Git and Git LFS
- Aseprite or Blender for simple art
- The engine's profiler
- itch.io for publishing

## A week of study

| When | What |
| --- | --- |
| Mon, Wed | Learn one engine feature or maths topic and add it to your game (1 hour) |
| Tue, Thu | DSA, with pathfinding and geometry questions (45 minutes) |
| Fri | Rebuild one mechanic from a game you like (45 minutes) |
| Weekend | Build: three hours on your game, or a game jam |

## A senior's advice

### Do

- Finish small games. Ten finished tiny games teach more than one unfinished epic.
- Make it playable first, then pretty. A grey-box prototype shows if it is fun.
- Join game jams. A deadline forces you to cut and finish.
- Profile before you optimise.
- Let other people play, and watch without telling them what to do.

### Avoid

- Starting with a huge multiplayer RPG.
- Copying a tutorial game and calling it your design.
- Spending months on assets before the game is fun.
- Allocating memory every frame, which causes stutter.
- Ignoring the business side: the market is crowded and finishing counts.

## Mistakes juniors make

- Starting a huge project and never finishing it.
- Putting all logic in one giant script.
- Spawning and destroying objects every frame.
- Tuning by guesswork instead of testing with real players.
- Not building for the target device until the end.

## Questions to ask a senior

- How do you decide a feature is fun enough to keep?
- How do you keep the game running at a steady frame rate?
- How do programmers and designers work together here?

## Myths and reality

| Myth | Reality |
| --- | --- |
| Game development is mostly playing games. | It is long, careful engineering with tight deadlines. |
| You need to be an artist too. | Programmers focus on code, though basic art helps for prototypes. |
| Game skills only lead to game jobs. | Performance, maths and real-time systems transfer to many industries. |

## First 90 days

| When | Goal |
| --- | --- |
| Days 1–30 | Build the project, play the game a lot and fix small bugs. |
| Days 31–60 | Implement a small gameplay feature with the designers and tune how it feels. |
| Days 61–90 | Find and fix a frame-rate problem using the profiler. |

## Career ladder

| Level | Focus |
| --- | --- |
| Junior (0–2 years) | Implement features and fix bugs inside an existing game. |
| Mid-level (2–5 years) | Own gameplay systems, such as combat, inventory or AI. |
| Senior (5+ years) | Design the architecture, lead a feature team and tune performance. |
| Staff and beyond | Lead technical direction, engines and tools across projects. |

## Interview preparation

- C++ or C# fundamentals, and DSA at a medium level.
- Vector maths questions, such as finding the angle or distance between objects.
- Explain the game loop and how you would make movement frame-rate independent.
- Design a system, such as an inventory or an enemy AI.
- Show a playable build and explain a technical problem you solved in it.

## Resources

- [Unity Learn](https://learn.unity.com): Free official courses and pathways
- [Godot documentation](https://docs.godotengine.org): A free, open-source engine with a friendly start
- [itch.io game jams](https://itch.io/jams): Find a jam and finish a game
- [Game Programming Patterns](https://gameprogrammingpatterns.com): A free book on structuring game code


---

# UI/UX designer

*Work out what people need, then shape a product that is easy and pleasant to use.*

## The job

You study how people use a product, find where they get stuck, and design the screens and flows that fix it. You sketch, build clickable prototypes, test them with real users, and work with developers so the final product matches the design. Good design makes software feel simple.

### A day in the job

- Talk to users and read feedback to understand what they are trying to do.
- Sketch flows and wireframes, then build them as clean screens in Figma.
- Test a prototype with five people and note where they hesitate.
- Hand designs to developers, answer questions, and check the built result.
- Keep the design system (colours, type, components) consistent.

**Good if:** You notice what is confusing, you care about details and people, and you can explain a design choice calmly to someone who disagrees.

**Main tools:** Figma, user research, prototyping, design systems, basic HTML and CSS

## Where you will work

| Type | What you do there |
| --- | --- |
| Product companies | Designers embedded in teams building one product. |
| Design and digital agencies | Varied client work with fast learning. |
| Startups | Broad roles: research, design and sometimes front-end code. |
| In-house teams at banks and large firms | Complex tools and internal products. |

## Study plan

### Design fundamentals (Months 1–2)

- Layout, spacing, alignment and visual hierarchy.
- Typography and colour, including contrast and accessibility.
- Usability heuristics and the laws of UX.
- Figma basics: frames, auto layout, components and styles.

**Build:** Recreate three screens of an app you like, pixel by pixel, then redesign one of them.

### Research and flows (Months 3–4)

- User interviews, surveys and writing user stories.
- Personas, journeys and mapping a flow from start to goal.
- Information architecture: how to organise content and navigation.
- Low-fidelity wireframes before any visual polish.

**Build:** Interview five students about a problem on campus and map the main user flow.

### Prototype and test (Months 5–7)

- Clickable prototypes with Figma and realistic content.
- Usability testing: tasks, observing, and writing findings.
- Responsive design for phone, tablet and desktop.
- Accessibility: contrast, focus order, touch targets and labels.

**Build:** A full prototype tested with five people, with a short report of what you changed.

### Systems and handoff (Months 8+)

- Building a design system: tokens, components and documentation.
- Working with developers: specs, states and edge cases.
- Basic HTML and CSS so you understand what is possible.
- Telling the story of a project in a portfolio case study.

**Build:** A small design system and a portfolio with three case studies.

## What to build

| Level | Project | What | What it proves |
| --- | --- | --- | --- |
| Starter | Redesign an app you use | Pick one screen with a real problem, explain it, and redesign it with before and after. | You can see problems and justify your choices. |
| Intermediate | End-to-end design for a campus problem | Research with real students, wireframes, a tested prototype and a short report. | You follow a full design process, not just draw screens. |
| Advanced | Design system and case-study portfolio | A documented component library, plus three case studies showing the problem, process and result. | You design at scale and can explain your thinking. |

## Tools

- Figma
- FigJam or Miro for flows
- Maze or a simple usability test setup
- Contrast checkers such as the WebAIM tool
- A notes app for research
- Basic HTML and CSS

## A week of study

| When | What |
| --- | --- |
| Mon, Wed | Study one principle and apply it to a screen (1 hour) |
| Tue, Thu | Redesign one real screen in Figma (45 minutes) |
| Fri | Test your design with one person and note where they struggled (30 minutes) |
| Weekend | Build: two hours on your portfolio case study |

## A senior's advice

### Do

- Start with the user's problem. A beautiful screen that solves the wrong thing is waste.
- Test early with rough designs. It is cheap to change a sketch and costly to change code.
- Design every state: empty, loading, error and success, not just the happy screen.
- Learn enough code to talk to developers, and design within what is easy to build.
- Show the reasoning in your portfolio, not only the final images.

### Avoid

- Copying trends without asking whether they help the user.
- Designing only for yourself or for the latest phone.
- Ignoring accessibility. Poor contrast and tiny targets exclude real people.
- Defending a design instead of listening to what testing showed.
- A portfolio of pretty screens with no problem, process or outcome.

## Mistakes juniors make

- Showing final screens without the problem or the process.
- Designing only the happy path and skipping empty, loading and error states.
- Using low-contrast grey text because it looks elegant.
- Never testing with a real person.
- Never talking to the developers who will build the design.

## Questions to ask a senior

- How do you learn what users really need, and how often?
- How closely do designers and developers work together here?
- How do you decide when a design is done?

## Myths and reality

| Myth | Reality |
| --- | --- |
| UI/UX design is just making things pretty. | Most of the job is research, structure and testing. Visual polish is one part. |
| You must be good at drawing. | You need judgement, empathy and clear thinking more than illustration skill. |
| Designers do not need to know any code. | You do not need to code, but understanding HTML and CSS makes you far more effective. |

## First 90 days

| When | Goal |
| --- | --- |
| Days 1–30 | Learn the product and its users, read past research, and ship a small design fix. |
| Days 31–60 | Own a small feature: research, wireframes, a test and handoff to developers. |
| Days 61–90 | Show the result of your work in numbers or user feedback, and improve the design system. |

## Career ladder

| Level | Focus |
| --- | --- |
| Junior (0–2 years) | Design screens and flows under guidance, run small tests and learn the system. |
| Mid-level (2–5 years) | Own a feature from research to handoff, and contribute to the design system. |
| Senior (5+ years) | Lead design for a product area, set the process and mentor others. |
| Staff and beyond | Shape the design direction of a product, or become a design lead or head of design. |

## Interview preparation

- A portfolio walkthrough: the problem, your role, your process, and what changed because of your work.
- A design exercise: improve a flow, such as booking a ticket, in 45 minutes while thinking aloud.
- How you would research a problem and decide what to test.
- Critique an existing app: what works, what does not, and what you would change.
- Questions on accessibility, design systems and working with developers.

## Resources

- [Laws of UX](https://lawsofux.com): Short, clear principles of how people use interfaces
- [Nielsen Norman Group articles](https://www.nngroup.com/articles/): Research-backed guidance on usability
- [Refactoring UI](https://www.refactoringui.com): Practical visual design tips for people who are not artists
- [Figma Learn](https://help.figma.com/hc/en-us): Official tutorials for the main design tool
- [Material Design](https://m3.material.io): A real design system to study, with guidelines
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/): How a well-known platform thinks about design
- [WCAG quick reference](https://www.w3.org/WAI/WCAG22/quickref/): The accessibility rules, searchable


---

# Product manager

*Decide what to build and why, and keep the team pointed at the right problem.*

## The job

You do not write the code or draw the screens. You work out which problems are worth solving, decide what to build first, write it down clearly, and keep designers, engineers and the business working together. You are judged on whether the product succeeds, not on how many features ship.

### A day in the job

- Talk to users and read data to find what hurts most.
- Write a clear problem statement and a short spec for the next piece of work.
- Prioritise the backlog and say no to good ideas that are not the best idea.
- Work with engineers and designers to scope and unblock the work.
- Look at the numbers after release and decide what to do next.

**Good if:** You like people, problems and trade-offs, you write and speak clearly, and you are comfortable making decisions with incomplete information.

**Main tools:** Writing, SQL and analytics, user research, roadmaps, basic technical knowledge

## Where you will work

| Type | What you do there |
| --- | --- |
| Product companies and startups | The most common route, often via an associate or APM programme. |
| Large tech firms | Structured programmes and specialised product areas. |
| Fintech, e-commerce and edtech | Fast-growing teams that need product thinking. |
| Consulting and internal tools teams | Product work for a business or for staff. |

## Study plan

### Product thinking (Months 1–2)

- What a product is, who it is for, and what problem it solves.
- How to write a problem statement and a short product spec.
- Prioritisation: impact against effort, and simple frameworks like RICE.
- How software teams work: sprints, backlogs and releases.

**Build:** A one-page product spec for a feature you would add to an app you use daily.

### Users and data (Months 3–4)

- User interviews and finding the real problem behind a request.
- Basic SQL and a spreadsheet for answering questions with data.
- Metrics: activation, retention, conversion and how to pick a goal.
- Running a simple experiment, such as an A/B test, and reading the result.

**Build:** Analyse a public dataset or your own project's usage and recommend one change.

### Work with a team (Months 5–7)

- Writing user stories and acceptance criteria that engineers can build from.
- Roadmaps: what to commit to and what to leave flexible.
- Enough technical knowledge to talk with engineers: APIs, databases, trade-offs.
- Communicating with stakeholders and saying no politely.

**Build:** Be the product lead on a small student project: define the goal, scope it and ship it.

### Strategy and craft (Months 8+)

- Market and competitor analysis.
- Pricing and business models at a basic level.
- Product teardowns: why a product works and where it fails.
- Telling the story of a product decision in an interview.

**Build:** Three product teardowns and one launched project with measured results.

## What to build

| Level | Project | What | What it proves |
| --- | --- | --- | --- |
| Starter | Product teardown | Analyse a well-known app: who it is for, how it makes money, what you would fix, and why. | You can think about products critically. |
| Intermediate | Lead a small student product | Run a project with 3–4 classmates: users, spec, priorities, launch and a review of the numbers. | You can lead without authority and ship. |
| Advanced | Experiment with real users | Run an A/B test or a pricing experiment on a live project and write up the decision. | You make decisions from evidence. |

## Tools

- A notes and docs app for writing specs
- Spreadsheet skills
- SQL
- Figma, to read and discuss designs
- Jira, Linear or a similar tracker
- An analytics tool, such as Google Analytics or PostHog

## A week of study

| When | What |
| --- | --- |
| Mon, Wed | Product reading and one teardown of an app (1 hour) |
| Tue, Thu | SQL and spreadsheet practice on real data (45 minutes) |
| Fri | Write a one-page spec for an idea (45 minutes) |
| Weekend | Build: two hours on your student project, with your team |

## A senior's advice

### Do

- Fall in love with the problem, not the solution. Many good ideas solve nothing.
- Talk to users every week. Reports are no replacement for conversations.
- Write short, clear documents. If it takes ten pages to explain, it is not yet clear.
- Learn enough about technology to respect what is hard and what is cheap.
- Say no often, and explain why in terms of the goal.

### Avoid

- Building whatever the loudest person asks for.
- Treating engineers and designers as people who simply carry out orders.
- Measuring success by features shipped instead of results for users.
- Hiding behind data you have not looked at carefully, or ignoring data that disagrees with you.
- Writing a long roadmap that no one believes.

## Mistakes juniors make

- Writing long documents nobody reads.
- Saying yes to every request to keep people happy.
- Never looking at the data after a release.
- Giving engineers solutions instead of problems.
- Not learning enough about how software is built.

## Questions to ask a senior

- How does the team decide what to build next?
- How do you measure whether a feature worked?
- How do product, design and engineering work together day to day?

## Myths and reality

| Myth | Reality |
| --- | --- |
| A product manager is the boss of the engineers. | You lead through clarity and trust. You have responsibility, not authority. |
| You can go straight into product from college easily. | Entry roles are few. Many start as engineers, designers or analysts, or build and launch their own project. |
| Product managers do not need technical knowledge. | You need enough to understand trade-offs. The best ones can read data and talk to engineers as equals. |

## First 90 days

| When | Goal |
| --- | --- |
| Days 1–30 | Learn the product, the users and the metrics. Talk to ten users and your team. |
| Days 31–60 | Write your first spec, work with engineers to scope it and ship a small improvement. |
| Days 61–90 | Measure the result, share what you learned, and propose the next priority. |

## Career ladder

| Level | Focus |
| --- | --- |
| Associate (0–2 years) | Support a product manager, write specs, analyse data and run small improvements. |
| Product manager (2–5 years) | Own a product area end to end: users, roadmap, delivery and results. |
| Senior (5+ years) | Lead strategy for a larger area, handle ambiguity and mentor others. |
| Director and beyond | Own a portfolio of products and the strategy behind it, or lead the product team. |

## Interview preparation

- A product design question: improve an app, or design a product for a group of users.
- A prioritisation case: you have ten ideas and limited time, so what do you build first and why?
- A metrics question: how would you measure the success of a feature, and what if the number drops?
- A behavioural question about influencing a team or handling a disagreement.
- A teardown of a product you know well, with a clear opinion.

## Resources

- [Lenny's Newsletter](https://www.lennysnewsletter.com): Practical product advice from people doing the job
- [Silicon Valley Product Group articles](https://www.svpg.com/articles/): How strong product teams work
- [Shape Up (Basecamp)](https://basecamp.com/shapeup): A free book on scoping and shipping work
- [Mind the Product](https://www.mindtheproduct.com): Articles and talks from the product community
- [Mode SQL Tutorial](https://mode.com/sql-tutorial/): Learn the SQL a product manager uses to answer questions


---

# Blockchain developer

*Build programs that run on a blockchain, where mistakes can be expensive and permanent.*

## The job

You write smart contracts, programs that run on a blockchain and often handle money, and the apps that talk to them. Because deployed contracts are hard to change and can hold real value, you work carefully, test heavily and think like an attacker. Many students try this area, so strong fundamentals stand out.

### A day in the job

- Write and test smart contracts in Solidity (or Rust on other chains).
- Build a front end that connects a wallet and reads or writes to a contract.
- Review code for security problems such as reentrancy and bad access control.
- Estimate and reduce the gas cost of functions.
- Read audits and past hacks to learn what went wrong.

**Good if:** You are careful and curious, you like security and systems, and you are comfortable with a field that changes quickly and has real risks.

**Main tools:** Solidity, Foundry or Hardhat, TypeScript, ethers or viem, a wallet, a testnet

## Where you will work

| Type | What you do there |
| --- | --- |
| Blockchain protocols and startups | Core contracts, tooling and infrastructure. |
| Security and audit firms | Review other teams' contracts for a living. |
| Fintech and payments | Settlement, tokenisation and cross-border payments. |
| Open-source and grants | Many contributors work on public goods and are funded by grants. |

## Study plan

### Blockchain basics (Months 1–2)

- How a blockchain works: blocks, hashing, consensus and transactions.
- Wallets, keys, signatures and gas.
- What smart contracts can and cannot do, and what an oracle is.
- JavaScript or TypeScript, and strong general programming skills.

**Build:** Explain a transaction from wallet to block, and send one on a test network.

### Smart contracts (Months 3–5)

- Solidity: types, storage, functions, events and errors.
- The ERC-20 and ERC-721 standards, using OpenZeppelin.
- Testing with Foundry or Hardhat, including fuzz tests.
- Deploying to a testnet and verifying a contract.

**Build:** An ERC-20 token and an NFT contract, fully tested and deployed to a testnet.

### Security (Months 6–8)

- Common bugs: reentrancy, access control, integer issues and front-running.
- Solving Ethernaut and Damn Vulnerable DeFi challenges.
- Reading real audit reports and post-mortems of hacks.
- Gas optimisation, and when it is not worth the complexity.

**Build:** Write-ups for ten security challenges, each explaining the bug and the fix.

### Full applications (Months 9+)

- A front end with a wallet connection, using viem or ethers.
- Indexing events, with The Graph or your own indexer.
- Upgradable contracts and their risks.
- Layer 2 networks and how costs and security differ.

**Build:** A complete app: contract, tests, front end and a testnet deployment.

## What to build

| Level | Project | What | What it proves |
| --- | --- | --- | --- |
| Starter | Token and voting contract | An ERC-20 token and a simple voting contract with tests and a testnet deployment. | You can write and ship basic contracts. |
| Intermediate | Escrow or crowdfunding app | A contract that holds funds under rules, a front end with wallet connection and thorough tests. | You handle money logic safely and build the full stack. |
| Advanced | Security write-ups and a small protocol | A lending or staking contract with fuzz tests, plus public write-ups of challenges you solved. | You think about security and can explain risk. |

## Tools

- Foundry or Hardhat
- Solidity and an editor extension
- A wallet such as MetaMask, for testnets only
- viem or ethers
- A block explorer such as Etherscan
- Slither for static analysis

## A week of study

| When | What |
| --- | --- |
| Mon, Wed | Study one Solidity or security topic and write code (1 hour) |
| Tue, Thu | Solve a security challenge on Ethernaut (45 minutes) |
| Fri | Read one audit report or hack post-mortem (45 minutes) |
| Weekend | Build: two hours on your contract project, with tests |

## A senior's advice

### Do

- Treat every contract as if it will be attacked, because it will be.
- Test far more than you would for ordinary software, and use fuzz tests.
- Use well-reviewed libraries such as OpenZeppelin instead of writing your own.
- Keep contracts small and simple. Complexity is where bugs hide.
- Learn from past hacks. Most new exploits are variations of old ones.

### Avoid

- Deploying untested code with real money in it.
- Copying a contract you do not fully understand.
- Storing secrets or private keys in a repository or on the chain.
- Chasing hype instead of learning fundamentals.
- Promising returns to users. Build tools, not get-rich-quick schemes.

## Mistakes juniors make

- Deploying without enough tests, and with real funds.
- Copying code from tutorials without understanding the risks.
- Putting private keys in a repository.
- Learning only tools and skipping general programming and security.
- Chasing token prices instead of building skills.

## Questions to ask a senior

- How is code reviewed and audited before deployment?
- How do you handle an upgrade or an emergency pause?
- What does your testing strategy look like, including fuzz tests?

## Myths and reality

| Myth | Reality |
| --- | --- |
| You can get rich quickly in this field. | It is hard engineering with real risk. The people who last are the careful ones. |
| You do not need a computer science foundation. | Strong programming, data structures and security knowledge matter even more here than elsewhere. |
| The market is always booming. | Hiring rises and falls with the market. Skills in security and testing stay valuable throughout. |

## First 90 days

| When | Goal |
| --- | --- |
| Days 1–30 | Learn the codebase and the protocol, run the full test suite and fix a small bug. |
| Days 31–60 | Ship a small contract change with tests, and take part in a code review. |
| Days 61–90 | Own a feature, including tests and a security review, and learn how audits work. |

## Career ladder

| Level | Focus |
| --- | --- |
| Junior (0–2 years) | Write and test contracts under review, and learn security patterns. |
| Mid-level (2–5 years) | Own contracts for a protocol feature, write thorough tests and review others. |
| Senior (5+ years) | Design protocol architecture, lead security reviews and handle audits. |
| Staff and beyond | Set the technical and security direction, or become an auditor or protocol lead. |

## Interview preparation

- Explain how a transaction is created, signed, included in a block and finalised.
- Spot the bug in a short Solidity function, such as a reentrancy or an access control flaw.
- Explain gas, storage versus memory, and how you would reduce a function's cost.
- Describe how you would test and secure a contract that holds user funds.
- General coding and data structures, since many teams test them first.

## Resources

- [Solidity documentation](https://docs.soliditylang.org): The official language guide
- [Ethereum developer docs](https://ethereum.org/en/developers/): Concepts and tutorials from the start
- [Foundry Book](https://book.getfoundry.sh): The fast testing and deployment toolkit
- [OpenZeppelin documentation](https://docs.openzeppelin.com): Audited contracts and security guidance
- [CryptoZombies](https://cryptozombies.io): Learn Solidity by building a small game
- [Ethernaut](https://ethernaut.openzeppelin.com): Hacking challenges that teach contract security
- [Cyfrin Updraft](https://updraft.cyfrin.io): Free courses on Solidity, testing and security


---

# Placements and career

Interviews test more than problem solving. Prepare aptitude, your resume, your projects and how you talk about your work.

## Aptitude and placement preparation

- Many companies filter first on aptitude: quantitative, logical reasoning and verbal. Practise for 20–30 minutes a day in your last year.
- Learn the common puzzles and probability basics.
- Solve ten past questions from each target company's online assessment, such as those on GeeksforGeeks interview experiences and LeetCode Discuss.
- Prepare "tell me about yourself", a project walkthrough, and a story each for teamwork, failure and conflict.

- [IndiaBIX](https://www.indiabix.com): Aptitude and reasoning practice

## Resume and interview checklist

- One page, with projects, links to your GitHub and coding profiles, and numbers where you can (users, problems solved, rating).
- Practise explaining your approach out loud, as you would in an interview.
- Do mock interviews with friends or on Pramp and interviewing.io.
- Know your projects well enough to answer any question about them.

- [Pramp](https://www.pramp.com): Free peer mock interviews
- [interviewing.io](https://interviewing.io): Anonymous mock interviews

## Writing a resume that gets read

- One page, one column, a plain font. Recruiters and screening tools read it in seconds.
- Order: contact line, education, projects, skills, experience, achievements. Freshers put projects before skills.
- Write each project as: what you built, with what, and the result. Example: 'Built a leaderboard for 300 students with Next.js and PostgreSQL; refreshes scores every 5 minutes.'
- Start lines with a strong verb (built, reduced, designed, led) and add a number where honest.
- List only skills you can answer questions about. Group them: languages, frameworks, tools.
- Link your GitHub, LeetCode or Codeforces profile and a live project. Check that every link works.
- Name the file clearly, such as FirstName_LastName_Resume.pdf, and send a PDF.
- Ask a senior to review it. Two reviews are better than one.

## LinkedIn and cold outreach

A message that works is specific. 'Hi, I am a third-year student and I built a leaderboard that tracks 300 students' coding profiles. I saw your team works on data pipelines, and I am applying for the SDE intern role. Could you tell me what the team looks for in interns?' is much better than 'Please give me a referral'.

1. Use a clear photo, a headline with your role and skills, and an About section with two or three lines on what you build.
2. Follow the companies you want and read their engineering posts.
3. Find an engineer or recruiter on the team. Check that they hire for your level.
4. Send a short message: who you are, one specific reason for this person or team, and one clear ask, such as advice or a referral for a named role.
5. Attach nothing on the first message, and keep it under about 100 words.
6. Follow up once after a week. If there is no reply, move on politely.
7. Thank anyone who helps, and tell them how it went.

## Hackathons, internships and clubs

- Hackathons: you learn more in 24 hours of building with a team than in weeks of tutorials.
- Internships: apply from the second year onwards. Startups often take juniors.
- Clubs: join or start a coding club on campus. Teaching others is the fastest way to learn something thoroughly.
- Write in public: a short blog or LinkedIn post about what you built or learned helps recruiters find you and helps you remember.

- [Devpost](https://devpost.com): Hackathons
- [Unstop](https://unstop.com): Hackathons and contests
- [MLH](https://mlh.io): Student hackathons
- [Internshala](https://internshala.com): Internships
- [Wellfound](https://wellfound.com): Startup jobs
- [LinkedIn](https://www.linkedin.com): Jobs and networking

## Using AI tools well

- Use AI to explain a concept, review your code or suggest test cases. Do not use it to produce the solution before you have tried.
- Never submit code you cannot explain line by line.
- Verify every claim and every API it gives you against the official docs.
- Ask it to quiz you or find the flaw in your approach, rather than hand you the answer.

## Further reading

- Cracking the Coding Interview, by Gayle Laakmann McDowell.
- Introduction to Algorithms (CLRS), as a reference rather than a first read.
- Designing Data-Intensive Applications, by Martin Kleppmann, for backend and system design.
- The Pragmatic Programmer, by Hunt and Thomas.
- Competitive Programmer's Handbook, by Antti Laaksonen (free PDF).
