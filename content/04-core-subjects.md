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

- Do them in order if you want foundations first. Projects 1 to 4 cover most of what interviews and the OS and networking parts of GATE ask.
- Fit them to your gaps. Projects 2 and 10 build Redis knowledge and system design thinking. For Docker, add a mini container runtime later (Linux only).
- Keep each to about a week. Do not start the next until you pass its test.

## Rules for every project

1. Write it yourself. Use AI as a tutor that gives tasks and reviews your work, not one that writes the code.
2. Write a one-page note: what it does, the one idea that clicked, and the one bug that taught you something.
3. Explain it to a friend, or record yourself for 3 minutes. Wherever you get stuck is the concept to revisit.

## Which year to study what

| Year | Subjects | How deep |
| --- | --- | --- |
| 1 | Programming, discrete maths basics, how computers work | Concepts and examples |
| 2 | OOP, DBMS and SQL, operating systems, computer networks | Full syllabus, with practice questions |
| 3 | Revision of all four for interviews, plus system design basics and your role's stack | Interview depth: why, trade-offs, examples |
| 4 | Revision on demand and company-specific topics | Quick recall and clear explanations |

## Revision checklist by subject

- OOP: classes and objects, the four pillars, SOLID, composition versus inheritance, common design patterns (singleton, factory, observer).
- DBMS: keys, normalisation, ACID, transactions, isolation levels, indexes, joins, group by, subqueries, window functions.
- OS: processes versus threads, scheduling, deadlock, synchronisation (mutex, semaphore), memory management, paging, virtual memory.
- CN: OSI and TCP/IP layers, TCP versus UDP, the three-way handshake, DNS, HTTP and HTTPS, status codes, cookies, TLS basics.
- Be able to draw one small diagram for each subject from memory. Drawing shows you understand it.

## From an SDE's desk

These subjects look like exam material until you debug a real system. Then they become the explanation.

- DBMS: a missing index, a bad join or a long transaction causes most slow pages. Learn to read a query plan.
- OS: memory leaks, thread pools, file handles and zombie processes are everyday issues. Know what a process and a thread really are.
- Networks: timeouts, retries, DNS and TLS errors show up as 'the site is down'. Know where each layer can fail.
- OOP: the point is clear boundaries. If a class needs six collaborators to test, the design is telling you something.

## DBMS in depth: keys and normalisation with an example

Take a single messy table: orders(order_id, customer_id, customer_name, customer_city, product_id, product_name, price, qty). Customer details repeat on every row, so changing a city means updating many rows. That is an update anomaly. Deleting the only order for a product deletes the product, a delete anomaly. Normalisation splits the table so each fact is stored once.

| Normal form | Rule | Fix in the example |
| --- | --- | --- |
| 1NF | Each cell holds one value. No repeating groups. | One row per order line, not a list of products in one cell. |
| 2NF | No non-key column depends on only part of a composite key. | Move product_name and price to a products table keyed by product_id. |
| 3NF | No non-key column depends on another non-key column. | Move customer_name and customer_city to a customers table keyed by customer_id. |
| BCNF | Every determinant is a candidate key. | Rarely needed beyond 3NF. It matters when two candidate keys overlap. |

**The result after normalisation**

```sql
CREATE TABLE customers (
  customer_id INT PRIMARY KEY,
  name        VARCHAR(100) NOT NULL,
  city        VARCHAR(100)
);
CREATE TABLE products (
  product_id INT PRIMARY KEY,
  name       VARCHAR(100) NOT NULL,
  price      DECIMAL(10,2) NOT NULL CHECK (price >= 0)
);
CREATE TABLE orders (
  order_id    INT PRIMARY KEY,
  customer_id INT NOT NULL REFERENCES customers(customer_id),
  created_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE order_items (
  order_id   INT REFERENCES orders(order_id),
  product_id INT REFERENCES products(product_id),
  qty        INT NOT NULL CHECK (qty > 0),
  PRIMARY KEY (order_id, product_id)
);
```

- Denormalise on purpose only when you have measured a read problem. Copy a column, keep it in sync, and write down why.
- Store money as DECIMAL or as integer minor units (paise, cents), never as floating point.
- Use constraints (NOT NULL, UNIQUE, CHECK, foreign keys). The database should refuse bad data even if the code has a bug.

## DBMS in depth: SQL you should be able to write

**Customers who never ordered (anti-join)**

```sql
SELECT c.customer_id, c.name
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.customer_id
WHERE o.order_id IS NULL;
```

**Duplicate emails**

```sql
SELECT email, COUNT(*) AS n
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```

**Second highest salary**

```sql
SELECT MAX(salary)
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);
```

**Top 3 earners in each department (window function)**

```sql
SELECT *
FROM (
  SELECT e.*,
         DENSE_RANK() OVER (PARTITION BY dept_id ORDER BY salary DESC) AS rnk
  FROM employees e
) t
WHERE rnk <= 3;
```

**Running total per customer**

```sql
SELECT customer_id, created_at, amount,
       SUM(amount) OVER (PARTITION BY customer_id ORDER BY created_at) AS running_total
FROM payments;
```

**Revenue per month, newest first**

```sql
SELECT DATE_TRUNC('month', created_at) AS month, SUM(amount) AS revenue
FROM payments
GROUP BY 1
ORDER BY 1 DESC;
```

- WHERE filters rows before grouping, HAVING filters groups after. Writing a condition in the wrong one is a common bug.
- NULL is not equal to anything, even NULL. Use IS NULL, and remember that COUNT(col) skips NULLs while COUNT(*) does not.
- Date functions differ between databases (DATE_TRUNC in PostgreSQL, DATE_FORMAT in MySQL). Check the docs for yours.

## DBMS in depth: indexes, query plans and transactions

An index is usually a B+ tree: sorted, shallow and good at equality and range lookups. A composite index on (customer_id, created_at) helps queries that filter on customer_id, or on customer_id and then created_at. It does not help a query that filters only on created_at. This is the left-most prefix rule.

| Isolation level | Dirty read | Non-repeatable read | Phantom read |
| --- | --- | --- | --- |
| Read uncommitted | Possible | Possible | Possible |
| Read committed | No | Possible | Possible |
| Repeatable read | No | No | Possible (depends on the database) |
| Serializable | No | No | No |

**Create an index and read the plan**

```sql
CREATE INDEX idx_orders_customer_date ON orders (customer_id, created_at);

EXPLAIN
SELECT * FROM orders
WHERE customer_id = 42 AND created_at >= '2026-01-01';
-- Look for an index scan. A full table scan on a big table is the red flag.
```

**A transaction: both updates happen or neither does**

```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;      -- or ROLLBACK; if anything failed
```

- ACID: atomicity (all or nothing), consistency (rules hold), isolation (transactions do not see each other's half-done work) and durability (committed data survives a crash).
- Indexes speed up reads but slow writes and use space. Index the columns you filter, join and sort on, not every column.
- Functions on an indexed column, such as WHERE LOWER(email) = 'x', can stop the index being used. Index the expression, or store it normalised.
- A deadlock happens when two transactions each wait for a lock the other holds. Databases detect it and abort one. Reduce the risk by locking rows in a consistent order and keeping transactions short.
- SQL versus NoSQL is about access patterns. Relational databases suit related data and strong consistency. Key-value, document and wide-column stores suit specific scale or shape needs.

## Operating systems in depth: processes, threads and scheduling

| Concept | Process | Thread |
| --- | --- | --- |
| Memory | Own address space | Shares the process's memory |
| Creation cost | Heavier | Lighter |
| Crash effect | Isolated from other processes | Can take down the whole process |
| Communication | Needs IPC (pipes, sockets, shared memory) | Reads and writes shared variables, which needs synchronisation |

- A process moves between states: new, ready, running, waiting (blocked) and terminated. A context switch saves one task's registers and loads another's, which costs time.
- FCFS is simple but a long job can block short ones (the convoy effect). SJF minimises average waiting time but can starve long jobs and needs a guess of run time.
- Round robin gives each task a time slice. A tiny slice wastes time switching, and a huge one behaves like FCFS.
- Priority scheduling can starve low-priority tasks. Aging raises the priority of a task the longer it waits.
- Real operating systems use a mix, such as multilevel feedback queues, to favour interactive tasks and still be fair.

## Operating systems in depth: synchronisation, deadlock and memory

| Deadlock condition (all four must hold) | How to break it |
| --- | --- |
| Mutual exclusion: a resource is held by one task at a time | Use shareable resources where you can |
| Hold and wait: a task holds one resource while waiting for another | Request every resource at once |
| No preemption: a held resource cannot be taken away | Allow the system to take resources back |
| Circular wait: a cycle of tasks each waiting for the next | Always acquire locks in one fixed global order |

**A race condition, and the fix with a lock**

```python
import threading

counter = 0
lock = threading.Lock()

def add_unsafe():
    global counter
    for _ in range(100_000):
        counter += 1            # read, add, write: threads can interleave and lose updates

def add_safe():
    global counter
    for _ in range(100_000):
        with lock:              # only one thread in this block at a time
            counter += 1
```

- A mutex lets one task into a critical section. A semaphore is a counter that lets up to N tasks in. A condition variable lets tasks wait until something becomes true.
- Paging splits memory into fixed-size pages. A page table maps virtual pages to physical frames, and the TLB caches recent translations.
- A page fault happens when a page is not in memory. The OS loads it from disk, which is thousands of times slower than memory.
- Thrashing is when a system spends more time swapping pages than doing work, because too many tasks compete for too little memory.
- Common page replacement choices are FIFO, LRU and clock. LRU performs well but costs bookkeeping to track recency.
- Virtual memory lets each process think it has its own large, continuous address space and keeps processes isolated from each other.

## Computer networks in depth: from a URL to a response

1. The browser checks its caches, then asks a DNS resolver to turn the domain into an IP address. The resolver walks root, top-level domain and authoritative servers if it has no cached answer.
2. The browser opens a TCP connection with a three-way handshake: SYN, SYN-ACK, ACK.
3. For HTTPS, a TLS handshake follows: the server proves its identity with a certificate, and both sides agree on session keys for encrypted traffic.
4. The browser sends an HTTP request: a method, a path, headers (host, cookies, accept) and sometimes a body.
5. A load balancer or reverse proxy forwards the request to an application server, which may call caches and databases.
6. The server returns a response with a status code, headers and a body. The browser parses HTML, then fetches CSS, JavaScript and images, often in parallel and over a reused connection.
7. The browser builds the DOM and renders the page. Cached files and CDNs make later visits faster.

| Layer (TCP/IP) | Job | Examples |
| --- | --- | --- |
| Application | What programs say to each other | HTTP, HTTPS, DNS, SMTP, SSH |
| Transport | End-to-end delivery between processes | TCP (reliable, ordered), UDP (fast, no guarantee) |
| Internet | Routing packets between networks | IP, ICMP |
| Link | Moving frames on one local network | Ethernet, Wi-Fi |

- TCP gives reliable, ordered delivery with retransmission, flow control and congestion control. UDP skips all that for speed, which suits video calls, games and DNS.
- Common HTTP status codes: 200 OK, 201 Created, 301 and 302 redirects, 400 bad request, 401 unauthenticated, 403 forbidden, 404 not found, 429 too many requests, 500 server error, 503 unavailable.
- GET reads and should not change data. POST creates. PUT replaces. PATCH changes part of a resource. DELETE removes. GET, PUT and DELETE should be idempotent.
- HTTP/2 multiplexes many requests on one connection. HTTP/3 runs over QUIC (on UDP) to avoid TCP head-of-line blocking.
- A cookie stores small data in the browser and sends it back with each request. Use HttpOnly, Secure and SameSite flags for session cookies.
- CORS is a browser rule: a page can read a cross-origin response only if the server allows it with the right headers.

## OOP and design in depth: SOLID with examples

| Principle | Meaning | Warning sign when broken |
| --- | --- | --- |
| Single responsibility | A class has one reason to change. | A class that handles HTTP, validation, and database access. |
| Open/closed | Add behaviour by adding code, not by editing old code. | A growing if/else chain on a type. |
| Liskov substitution | A subclass can stand in for its parent without surprises. | A subclass that throws on a method the parent supports. |
| Interface segregation | Prefer small interfaces to one huge one. | Classes that implement methods they do not need. |
| Dependency inversion | Depend on abstractions, not concrete classes. | A class that creates its own database client, making it hard to test. |

**Dependency inversion in practice: the service does not know which store it uses**

```python
from typing import Protocol

class UserStore(Protocol):
    def get(self, user_id: int) -> dict | None: ...

class PostgresStore:
    def get(self, user_id):
        ...                             # real database call

class FakeStore:
    def __init__(self, users): self.users = users
    def get(self, user_id): return self.users.get(user_id)

class ProfileService:
    def __init__(self, store: UserStore):
        self.store = store              # injected, not created here

    def display_name(self, user_id):
        user = self.store.get(user_id)
        return user["name"] if user else "Guest"

# In a test: no database needed.
assert ProfileService(FakeStore({1: {"name": "Asha"}})).display_name(1) == "Asha"
```

**Observer pattern: a subject notifies many listeners without knowing them**

```python
class EventBus:
    def __init__(self):
        self.listeners = {}

    def subscribe(self, event, fn):
        self.listeners.setdefault(event, []).append(fn)

    def publish(self, event, data):
        for fn in self.listeners.get(event, []):
            fn(data)

bus = EventBus()
bus.subscribe("order_placed", lambda o: print("email receipt for", o["id"]))
bus.subscribe("order_placed", lambda o: print("reduce stock for", o["id"]))
bus.publish("order_placed", {"id": 7})
```

- Prefer composition to inheritance: build behaviour from small parts that you can swap, instead of deep class trees.
- Four pillars: encapsulation (hide internals), abstraction (expose what, not how), inheritance (reuse by extending) and polymorphism (one interface, many behaviours).
- Patterns worth knowing: singleton, factory, builder, strategy, observer, decorator and adapter. Learn the problem each one solves, not only the diagram.
- Overusing patterns is a smell. Reach for one when the code shows the problem, not before.
