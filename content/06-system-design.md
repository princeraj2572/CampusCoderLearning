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

## Worked example: a URL shortener

1. Clarify: users create a short link for a long URL and are redirected when they open it. Ask about custom aliases, expiry, analytics and expected traffic.
2. Estimate: suppose 100 million new links a month and a read-to-write ratio of 100:1. That is roughly 40 writes a second and 4,000 reads a second on average, and more at peak.
3. API: POST /links with the long URL returns a short code. GET /{code} returns a redirect (HTTP 301 or 302).
4. Data: one table with code (primary key), long URL, created time, expiry and owner. A key-value store or a SQL table with an index on code both work.
5. Generate the code: use a counter encoded in base62, or hash the URL and check for collisions. A counter is simple and has no collisions, but needs care when many servers run.
6. Scale reads: put a cache such as Redis in front of the database, because the same popular links are read again and again. Add a CDN or edge cache if the traffic is global.
7. Scale writes: split the data by code range or hash. Give each application server a block of counter values so servers do not wait on each other.
8. Extras: rate-limit creation, check links for abuse, and log clicks through a queue so analytics never slow down a redirect.
9. Trade-offs to mention: 301 is cached by browsers and cuts load but hides later clicks. 302 lets you count every click. Random codes are harder to guess than counters.

## Which year to learn system design

- Years 1–2: learn how the web, databases and caches work. You do not need to design systems yet.
- Year 3: learn the framework, building blocks and a few classic designs. Practise saying your thinking aloud.
- Year 4: practise full designs against a timer, and rehearse low-level design for the companies that ask for it.

## From an SDE's desk

In real teams, system design is mostly deciding what not to build. The best design is the simplest one that meets today's load with a clear path to the next stage.

- Start with one server and one database. Add a cache, a queue or a new service only when a measured problem asks for it.
- Every box you add is something that can fail at 3 am and something a teammate must learn. Count that cost.
- Write the design down before building it, even a one-page note. Many bad ideas die on paper cheaply.
- Numbers beat opinions. Estimate load and storage, then check against real metrics after launch.

## Deep dive: caching

| Strategy | How it works | Good for | Watch out for |
| --- | --- | --- | --- |
| Cache-aside (lazy loading) | App checks the cache, on a miss reads the database and fills the cache. | Read-heavy data, the most common choice. | Stale data after writes. Delete or update the key on write. |
| Read-through | The cache itself loads from the database on a miss. | Simpler app code. | Needs a cache that supports it. |
| Write-through | Writes go to the cache and the database together. | Data that is read right after it is written. | Slower writes. |
| Write-back | Writes go to the cache and are saved to the database later. | Very write-heavy loads. | Data loss if the cache fails before saving. |

**Cache-aside with expiry (a plain dict stands in for Redis)**

```python
import time

cache = {}                              # key -> (value, expires_at)
TTL = 60                                # seconds

def get_user(user_id, db):
    hit = cache.get(user_id)
    if hit and hit[1] > time.time():
        return hit[0]                   # cache hit
    user = db.fetch_user(user_id)       # cache miss: go to the source
    cache[user_id] = (user, time.time() + TTL)
    return user

def update_user(user_id, data, db):
    db.save_user(user_id, data)
    cache.pop(user_id, None)            # invalidate so the next read is fresh
```

**An LRU cache: evict the least recently used item**

```python
from collections import OrderedDict

class LRU:
    def __init__(self, capacity):
        self.cap = capacity
        self.items = OrderedDict()

    def get(self, key):
        if key not in self.items:
            return None
        self.items.move_to_end(key)     # mark as most recently used
        return self.items[key]

    def put(self, key, value):
        self.items[key] = value
        self.items.move_to_end(key)
        if len(self.items) > self.cap:
            self.items.popitem(last=False)   # drop the oldest
```

- Cache what is read often and changes rarely. Do not cache what is cheap to compute or must always be exact, such as an account balance.
- Pick a time to live (TTL) on purpose. Short TTLs mean fresher data and more database load.
- Cache stampede: a popular key expires and many requests hit the database at once. Add random jitter to TTLs, or let one request rebuild while the others wait.
- Eviction policies: LRU (least recently used), LFU (least frequently used) and FIFO. LRU is the usual default.
- Layers: the browser cache, a CDN for static files, an application cache such as Redis, and the database's own buffers.

## Deep dive: scaling the database

1. Add indexes and fix slow queries first. This is the cheapest and biggest win.
2. Add a cache for repeated reads.
3. Add read replicas: one primary takes writes, copies take reads. Replication lag means a replica can briefly serve old data.
4. Scale vertically (a bigger machine) while that is simpler than anything else.
5. Partition large tables, for example by date, so queries touch less data.
6. Shard: split data across several databases by a key such as user_id. It works, but cross-shard queries and joins get hard, so delay it as long as you can.

| Sharding method | How | Trade-off |
| --- | --- | --- |
| Range | Users 1–1M on shard A, 1M–2M on shard B. | Simple, but one shard can become a hot spot. |
| Hash | shard = hash(user_id) mod N. | Even spread, but adding shards moves a lot of data unless you use consistent hashing. |
| Directory | A lookup table says which shard holds which key. | Flexible, but the directory is one more thing to scale and protect. |

- Consistent hashing places servers and keys on a ring, so adding or removing a server moves only a small share of keys.
- Pick a shard key with high cardinality and even access. A bad key, like country, creates a hot shard.
- SQL gives joins and transactions. Many NoSQL stores give easy horizontal scaling and flexible shape. Choose by access pattern, not fashion.

## Deep dive: queues, events and consistency

A queue lets a fast part of the system hand work to a slower part without waiting. The web request puts 'send the receipt email' on a queue and returns at once, and a worker does the email later. This smooths traffic spikes, lets you retry, and keeps failures from spreading.

- At-most-once delivery can lose messages. At-least-once never loses them but can deliver twice, so consumers must be idempotent. Exactly-once is really at-least-once plus idempotent handling.
- Make a consumer idempotent by storing the IDs of messages already handled, or by using operations that are safe to repeat, such as 'set status to paid'.
- A dead-letter queue holds messages that keep failing so they do not block the rest and can be inspected.
- Backpressure: if producers outrun consumers, queues grow without limit. Limit the queue, shed load or scale consumers.
- CAP theorem: during a network partition you must choose between consistency (every read sees the latest write) and availability (every request gets an answer). Most systems choose per feature.
- Eventual consistency means replicas agree after a short delay. It is fine for likes and feeds, and not fine for payments.
- Use the outbox pattern when you must update a database and publish an event reliably: write the event to an outbox table in the same transaction, then publish from that table.

## Deep dive: load balancing, rate limiting and APIs

| Load balancing method | How it picks a server | Good for |
| --- | --- | --- |
| Round robin | Takes servers in turn. | Similar servers and similar requests. |
| Least connections | Picks the server with the fewest active connections. | Requests of uneven length. |
| IP or key hash | Same client goes to the same server. | Sticky sessions or local caches. |
| Weighted | Bigger servers get more traffic. | Mixed hardware. |

**Token bucket rate limiter: allows bursts, enforces an average rate**

```python
import time

class TokenBucket:
    def __init__(self, rate_per_sec, capacity):
        self.rate = rate_per_sec
        self.capacity = capacity
        self.tokens = capacity
        self.last = time.monotonic()

    def allow(self):
        now = time.monotonic()
        # refill for the time that has passed
        self.tokens = min(self.capacity, self.tokens + (now - self.last) * self.rate)
        self.last = now
        if self.tokens >= 1:
            self.tokens -= 1
            return True
        return False                    # caller returns HTTP 429
```

**Base62 encoding for short URL codes (an ID from a counter becomes a short string)**

```python
ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

def encode(n):
    if n == 0:
        return ALPHABET[0]
    out = []
    while n:
        n, r = divmod(n, 62)
        out.append(ALPHABET[r])
    return "".join(reversed(out))

# 62^7 is about 3.5 trillion, so 7 characters is plenty for most systems.
```

- Rate limiting algorithms: fixed window (simple, but allows bursts at the boundary), sliding window (smoother), token bucket (allows bursts) and leaky bucket (smooths output).
- Keep rate limit counters in a shared store such as Redis when you run many servers.
- API design: use nouns for resources (/users/42/orders), HTTP methods for actions, plural names, consistent error shapes, pagination and versioning.
- Prefer cursor pagination (?after=id) over page numbers for large or changing lists. Offsets get slow and can skip or repeat items.
- Health checks let a load balancer stop sending traffic to a broken server. Add a cheap liveness check and a deeper readiness check.

## Deep dive: reliability and observability

| Availability target | Downtime per year (approx.) |
| --- | --- |
| 99% | About 3.65 days |
| 99.9% | About 8.8 hours |
| 99.99% | About 53 minutes |
| 99.999% | About 5 minutes |

- Timeouts everywhere: a call with no timeout can hang a whole service. Set one on every network call.
- Retries with exponential backoff and jitter. Retrying instantly in lockstep makes an outage worse. Retry only operations that are safe to repeat.
- A circuit breaker stops calling a failing dependency for a while so it can recover and your service stays responsive.
- Graceful degradation: when a part fails, show something useful, such as cached data or a simpler page, rather than an error.
- Replication and backups: a backup you have never restored is only a hope. Practise the restore.
- Logs say what happened, metrics say how much and how fast, traces show the path of one request. You want all three.
- Track the four golden signals: latency, traffic, errors and saturation. Alert on symptoms users feel, not on every internal blip.
- Define an SLO such as 99.9% of requests succeed in 300 ms. The remaining 0.1% is your error budget for risk and releases.

## Worked example: design a news feed

1. Clarify: users follow others and see a feed of recent posts. Ask about scale, freshness, ranking and media.
2. Estimate: say 100 million users, 10 million daily posters, and each user opens the feed 10 times a day. Reads far outweigh writes.
3. Choose a model. Fan-out on write: when someone posts, push the post ID into each follower's feed list. Reads are fast, writes are heavy for people with millions of followers.
4. Fan-out on read: build the feed when the user opens it by pulling recent posts from everyone they follow. Writes are cheap, reads are heavy.
5. Hybrid: fan-out on write for normal users, and fan-out on read for celebrity accounts, merging the two at read time.
6. Store feed lists in a cache or fast store (a list of post IDs per user), and post content in a database, fetched by ID.
7. Add pagination with a cursor, a ranking step if needed, and a CDN for images and video.
8. Discuss failure: a queue absorbs bursts of posts, workers do the fan-out, and slow followers' feeds can be built lazily.

## Worked example: design a chat system

1. Clarify: one-to-one and group chat, online status, history, delivery receipts, media.
2. Connection: use WebSockets for a long-lived two-way connection, with a fallback to long polling.
3. Message flow: client sends to a chat server, the server stores the message, then delivers it to the recipient's connection, or to a push notification service if offline.
4. Storage: messages by conversation ID and time in a store good at appends and range reads. Keep users, groups and settings in a relational database.
5. Ordering: give each message an ID that increases within a conversation, so clients can sort and detect gaps.
6. Delivery guarantees: clients acknowledge messages, the server retries until acknowledged, and duplicates are removed by message ID.
7. Scale: many connection servers behind a load balancer, with a registry (such as Redis) that says which server holds which user's connection.
8. Presence: heartbeats update a 'last seen' value. Show 'online' only if it is recent, and avoid broadcasting every change to everyone.
