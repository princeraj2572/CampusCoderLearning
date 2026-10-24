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

## A classic problem for each pattern

Start with one well-known problem per pattern, then do others of the same type until the idea feels natural.

| Pattern | Classic problem to start with | Key idea |
| --- | --- | --- |
| Hash map | Two Sum | Store what you have seen so a lookup replaces an inner loop. |
| Two pointers | Container With Most Water | Move the pointer that limits the answer, from both ends. |
| Sliding window | Longest Substring Without Repeating Characters | Grow the window to the right, shrink from the left when it breaks the rule. |
| Prefix sums | Subarray Sum Equals K | Sums of ranges become differences of prefix values. |
| Binary search | Search in Rotated Sorted Array | Find which half is sorted, then decide where the target lies. |
| Binary search on answer | Koko Eating Bananas | Search over possible answers when you can check one cheaply. |
| Stack | Valid Parentheses | The most recent open item must close first. |
| Monotonic stack | Daily Temperatures | Keep a stack in order so each item is pushed and popped once. |
| Fast and slow pointers | Linked List Cycle | Two speeds meet inside a cycle. |
| BFS | Rotting Oranges | Process level by level when distance or time is the answer. |
| DFS | Number of Islands | Walk every connected cell and mark it visited. |
| Heap | Top K Frequent Elements | Keep only the k best items in a heap of size k. |
| Intervals | Merge Intervals | Sort by start, then merge neighbours that overlap. |
| Backtracking | Subsets | Choose, explore, then undo the choice. |
| Dynamic programming | Coin Change | Define the state, write the recurrence, then add a table. |
| Union-find | Number of Provinces | Merge groups and test whether two items share a root. |
| Topological sort | Course Schedule | Process nodes with no unmet dependencies first. |
| Trie | Implement Trie (Prefix Tree) | Share prefixes to search words quickly. |

## A weekly pattern routine

- Monday: read the idea for one pattern and solve its classic problem without hints.
- Tuesday to Thursday: solve three more problems of the same pattern, one easier and two at medium level.
- Friday: explain the pattern aloud as if teaching a friend. Write the template in your notes.
- Saturday: take a contest and note which pattern each problem needed.
- Sunday: redo two problems you failed during the week, then rest.

## From an SDE's desk

Patterns are how experienced engineers recognise a problem fast. The same shapes show up in real code: windows over a stream, graphs of dependencies, intervals in a calendar.

- Dependency order in a build tool is a topological sort. Scheduling meetings is interval merging. Rate limiting is a sliding window.
- When two approaches both work, pick the one a teammate can read in a minute. Clever code costs more to maintain than it saves.
- Write the brute force first, state its cost, then improve. It is also how you should approach a real performance problem.

## Code templates: arrays, strings and searching

Learn these as shapes, not as text to copy. Type each one from memory, run it on a small input, then change it to solve a related problem. All examples are Python, and the same shapes work in C++ and Java.

**Two pointers on a sorted array (pair with a given sum): O(n) time, O(1) space**

```python
def pair_sum(a, target):
    l, r = 0, len(a) - 1
    while l < r:
        s = a[l] + a[r]
        if s == target:
            return [l, r]
        if s < target:
            l += 1          # need a bigger sum
        else:
            r -= 1          # need a smaller sum
    return []
```

**Sliding window (longest substring without repeating characters): O(n)**

```python
def longest_unique(s):
    last_seen = {}          # char -> most recent index
    left = best = 0
    for right, ch in enumerate(s):
        if ch in last_seen and last_seen[ch] >= left:
            left = last_seen[ch] + 1   # shrink past the repeat
        last_seen[ch] = right
        best = max(best, right - left + 1)
    return best
```

**Prefix sums with a hash map (number of subarrays with sum k): O(n)**

```python
def subarray_sum(nums, k):
    count = {0: 1}          # prefix sum -> times seen
    s = result = 0
    for x in nums:
        s += x
        result += count.get(s - k, 0)   # earlier prefix = s - k
        count[s] = count.get(s, 0) + 1
    return result
```

**Binary search (first index with a[i] >= x): O(log n)**

```python
def lower_bound(a, x):
    lo, hi = 0, len(a)      # search in [lo, hi)
    while lo < hi:
        mid = (lo + hi) // 2
        if a[mid] < x:
            lo = mid + 1
        else:
            hi = mid
    return lo               # len(a) if every element is smaller
```

**Binary search on the answer (minimum eating speed so all piles finish in h hours)**

```python
def min_speed(piles, h):
    lo, hi = 1, max(piles)
    while lo < hi:
        mid = (lo + hi) // 2
        hours = sum((p + mid - 1) // mid for p in piles)   # ceil division
        if hours <= h:
            hi = mid        # fast enough: try slower
        else:
            lo = mid + 1    # too slow: need more speed
    return lo
```

**Merge intervals: O(n log n) for the sort**

```python
def merge(intervals):
    if not intervals:
        return []
    intervals.sort()
    out = [intervals[0]]
    for start, end in intervals[1:]:
        if start <= out[-1][1]:
            out[-1][1] = max(out[-1][1], end)   # overlap: extend
        else:
            out.append([start, end])
    return out
```

- Off-by-one errors live in binary search. Decide once whether your range is [lo, hi) or [lo, hi], and keep every line consistent with it.
- For sliding window, ask: what makes the window invalid, and how do I shrink it? If you cannot answer, it is not a sliding-window problem.
- Prefix sums turn 'sum of a range' into a subtraction. Whenever you see 'subarray sum', think prefix sums plus a map.

## Code templates: stacks, graphs and ordering

**Monotonic stack (days until a warmer temperature): O(n), each index pushed and popped once**

```python
def daily_temperatures(t):
    answer = [0] * len(t)
    stack = []              # indices with no warmer day found yet
    for i, x in enumerate(t):
        while stack and t[stack[-1]] < x:
            j = stack.pop()
            answer[j] = i - j
        stack.append(i)
    return answer
```

**BFS (shortest distance in an unweighted graph): O(V + E)**

```python
from collections import deque

def bfs(graph, start):
    dist = {start: 0}
    q = deque([start])
    while q:
        u = q.popleft()
        for v in graph[u]:
            if v not in dist:           # first visit is the shortest
                dist[v] = dist[u] + 1
                q.append(v)
    return dist
```

**DFS on a grid (number of islands): O(rows x cols)**

```python
def count_islands(grid):
    rows, cols = len(grid), len(grid[0])
    count = 0

    def dfs(r, c):
        if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] != "1":
            return
        grid[r][c] = "0"                # mark visited
        dfs(r + 1, c); dfs(r - 1, c); dfs(r, c + 1); dfs(r, c - 1)

    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == "1":
                count += 1
                dfs(r, c)
    return count
```

**Topological sort with Kahn's algorithm (course order): O(V + E)**

```python
from collections import deque

def topo_order(n, edges):               # edge (a, b): a must come before b
    graph = [[] for _ in range(n)]
    indegree = [0] * n
    for a, b in edges:
        graph[a].append(b)
        indegree[b] += 1
    q = deque(i for i in range(n) if indegree[i] == 0)
    order = []
    while q:
        u = q.popleft()
        order.append(u)
        for v in graph[u]:
            indegree[v] -= 1
            if indegree[v] == 0:
                q.append(v)
    return order if len(order) == n else []   # empty list means a cycle
```

**Dijkstra with a heap (shortest paths, non-negative weights): O((V + E) log V)**

```python
import heapq

def dijkstra(graph, src):               # graph[u] = [(v, weight), ...]
    dist = {src: 0}
    heap = [(0, src)]
    while heap:
        d, u = heapq.heappop(heap)
        if d > dist.get(u, float("inf")):
            continue                    # stale entry
        for v, w in graph[u]:
            nd = d + w
            if nd < dist.get(v, float("inf")):
                dist[v] = nd
                heapq.heappush(heap, (nd, v))
    return dist
```

**Union-find with path compression and union by size: near O(1) per operation**

```python
class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.size = [1] * n

    def find(self, x):
        while self.parent[x] != x:
            self.parent[x] = self.parent[self.parent[x]]   # path halving
            x = self.parent[x]
        return x

    def union(self, a, b):
        a, b = self.find(a), self.find(b)
        if a == b:
            return False                # already connected
        if self.size[a] < self.size[b]:
            a, b = b, a
        self.parent[b] = a
        self.size[a] += self.size[b]
        return True
```

- Use BFS for fewest steps in an unweighted graph. Use Dijkstra when edges have weights, and never with negative weights.
- Recursive DFS can overflow the stack on a deep input. Use an explicit stack when depth could reach thousands.
- A cycle in a dependency graph means no valid order. Topological sort tells you that for free.

## Code templates: backtracking and dynamic programming

1. Define the state in one sentence: 'dp[i] means ...'. If you cannot, you do not have a DP yet.
2. Write the recurrence: how does dp[i] come from smaller states?
3. Set the base cases, then choose an order so every dependency is ready.
4. Check it by hand on a tiny input before you trust it.
5. Look for space savings: if row i only needs row i-1, keep two rows or one.

**Backtracking (all subsets): choose, explore, un-choose. O(2^n)**

```python
def subsets(nums):
    result, path = [], []

    def go(i):
        if i == len(nums):
            result.append(path[:])      # copy, the list keeps changing
            return
        go(i + 1)                       # skip nums[i]
        path.append(nums[i])            # take nums[i]
        go(i + 1)
        path.pop()                      # undo

    go(0)
    return result
```

**1D DP (fewest coins for an amount): O(amount x coins)**

```python
def coin_change(coins, amount):
    INF = amount + 1
    dp = [0] + [INF] * amount           # dp[a] = fewest coins to make a
    for a in range(1, amount + 1):
        for c in coins:
            if c <= a:
                dp[a] = min(dp[a], dp[a - c] + 1)
    return dp[amount] if dp[amount] != INF else -1
```

**2D DP (longest common subsequence): O(m x n)**

```python
def lcs(a, b):
    m, n = len(a), len(b)
    dp = [[0] * (n + 1) for _ in range(m + 1)]   # dp[i][j] for a[:i], b[:j]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if a[i - 1] == b[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[m][n]
```

**0/1 knapsack with a 1D array: O(n x capacity). Loop the capacity downwards so each item is used once**

```python
def knapsack(weights, values, capacity):
    dp = [0] * (capacity + 1)
    for w, v in zip(weights, values):
        for c in range(capacity, w - 1, -1):
            dp[c] = max(dp[c], dp[c - w] + v)
    return dp[capacity]
```

## Complexity analysis in depth

| Code shape | Time | Why |
| --- | --- | --- |
| One loop over n items | O(n) | Each item is touched once. |
| Two nested loops over n | O(n²) | n x n pairs. |
| A loop that halves the range each time | O(log n) | Binary search shape. |
| Sort, then a single pass | O(n log n) | The sort dominates. |
| Recursion that branches twice with no overlap, depth n | O(2^n) | Each level doubles the calls. |
| Recursion with memoisation over k states, constant work each | O(k) | Each state is computed once. |
| Visit every vertex and edge of a graph | O(V + E) | BFS, DFS, topological sort. |
| Heap push or pop | O(log n) | Height of the heap. |
| Build a heap from n items | O(n) | Sift-down work sums to linear. |
| Hash map get or set | O(1) average | O(n) in a bad worst case. |

- Drop constants and lower-order terms: 3n² + 5n + 2 is O(n²).
- Multiply for nested work, add for sequential work.
- Space counts too: recursion depth uses stack space, and a DP table uses O(states).
- Amortised cost averages over a sequence. Appending to a dynamic array is O(1) amortised.
- A rough rule for contests: about 10^8 simple operations fit in a second. If n is 10^5, aim for O(n log n) or better. If n is 20, O(2^n) can work.
