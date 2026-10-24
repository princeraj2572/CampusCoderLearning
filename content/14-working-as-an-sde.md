# Working as a software engineer

What the job is actually like once you join: a typical week, code review, debugging, estimating, on-call, communication and how people grow. Written from the point of view of an engineer on a product team.

## A typical week

These numbers vary a lot by team and level. Treat them as a feel for the job, not a rule.

| Activity | Rough share of time | Notes |
| --- | --- | --- |
| Writing code | 30–40% | Less than most students expect. Most of the rest supports it. |
| Reading code and docs | 15–20% | You will read far more than you write, especially in your first year. |
| Code review | 10–15% | Reviewing others and responding to reviews on your work. |
| Meetings and planning | 10–20% | Stand-ups, planning, design talks, one-to-ones. |
| Debugging and support | 10–20% | Bugs, alerts, questions from other teams. |
| Learning | 5–10% | New tools, the domain, the codebase. |

## How work flows through a team

1. A product need becomes a ticket with a clear goal and acceptance criteria.
2. You or the team estimate it and break it into small pieces.
3. You write a short plan for anything non-trivial and discuss it with a teammate.
4. You make a branch, write code and tests, and open a pull request with a clear description.
5. Automated checks run: build, lint, tests, sometimes security scans.
6. Teammates review. You answer comments and push changes.
7. The change merges, is deployed (often behind a feature flag) and is watched in production.
8. You check metrics and logs, fix surprises and close the ticket.

## Your first pull request

- Pick a small, well-defined ticket. Your goal is to learn the process, not to impress anyone.
- Read how others in the repo name branches, write commit messages and structure tests. Match them.
- Run the full test suite and the linter locally before you push.
- Describe the change: what, why, how you tested it, and anything you want the reviewer to look at.
- Keep it small. A hundred lines is easy to review. A thousand will wait in a queue.
- Expect comments. They are about the code, not about you.

## Code review: giving and receiving

- As an author: review your own diff first, point out the risky parts and reply to every comment.
- As a reviewer: understand the goal first, then check correctness, tests, naming, error handling and security.
- Ask questions instead of giving orders: 'What happens if this list is empty?'
- Separate must-fix from preference. Label small style notes as 'nit'.
- Approve when the change is good enough and safe, not when it matches how you would have written it.
- Say what is good too. Specific praise teaches as well as criticism does.

## A method for debugging

1. Reproduce it. If you cannot make it fail on demand, you cannot know that you fixed it.
2. Read the error message and stack trace fully, from the top.
3. Shrink the problem: remove code, inputs or steps until the smallest failing case remains.
4. Form a hypothesis and test it with one change at a time. Write down what you tried.
5. Check recent changes. 'What changed?' solves many bugs.
6. Use the right tool: the debugger, logs, a profiler or a network inspector.
7. Fix the cause, not only the symptom, and add a test that would have caught it.
8. If you are stuck for more than about thirty minutes, explain it to someone else. It often unlocks the answer.

## Estimating work

- Estimates are guesses with a range. Say 'two to four days' rather than 'three days'.
- Break the task into pieces under a day each. Estimating small pieces is much more accurate.
- Include testing, review, deployment and surprises, not only coding.
- Say early when you are late and why. Surprises hurt more than slow progress.
- Compare your guesses with what actually happened, and adjust next time.

## Writing tickets and design notes

A good ticket says what problem is being solved, who it affects, what 'done' looks like and what is out of scope. A good design note says the problem, the options, the choice and why, and what could go wrong. Both are short. Writing them is a senior habit that you can start now.

- Lead with the why. Details are easier to follow when the goal is clear.
- List alternatives you rejected, with a reason for each.
- End with open questions so reviewers know where to focus.

## Testing and quality in practice

- Write tests for behaviour that would hurt if it broke: money, permissions, data loss, core flows.
- Test the boundaries: empty, one, many, maximum, invalid and duplicate.
- A test that fails randomly is a bug. Fix it or remove it quickly.
- Use staging and feature flags to release safely and roll back fast.
- Monitor after release: error rate, latency and the business number the change should move.

## On-call and incidents

Nobody expects a new engineer to run an incident alone. You will shadow first. Ask to be included early.

1. Acknowledge the alert and tell the team you are looking.
2. Check the impact: who is affected, since when, how badly.
3. Stop the bleeding first: roll back, disable the flag, or scale up. Do not hunt for the perfect fix while users suffer.
4. Communicate in one place with short updates every so often.
5. Fix the root cause once the system is stable.
6. Write a blameless post-incident review: timeline, cause, what went well, and actions with owners.

## Reading an unfamiliar codebase

- Start with the README, the folder layout and how to run the tests.
- Pick one user-visible feature and trace it from the entry point to the database.
- Use search and 'find usages' more than scrolling. Follow the data.
- Read the tests. They show intended behaviour.
- Read the history of a confusing file. Commit messages often explain why.
- Draw a small diagram as you learn and share it. Someone will correct it, and you both learn.

## Working with people

- Ask good questions: say what you tried, what you expected and what happened.
- Give updates before you are asked: done, next, blocked.
- Disagree with ideas and not with people. Use evidence and offer an alternative.
- Write down decisions so that nobody has to remember a meeting.
- Be reliable. Doing what you said you would do is the quickest way to earn trust.
- Help others. Answering a teammate's question is part of the job, and it builds your reputation.

## Growth: from SDE 1 to senior

| Level | What changes | How to grow into it |
| --- | --- | --- |
| SDE 1 (new grad) | You finish well-scoped tasks with guidance and learn the codebase. | Ship reliably, ask good questions, write tests, take feedback well. |
| SDE 2 | You own features end to end and work with less guidance. | Break down ambiguous work, review others, improve the system you touch. |
| Senior | You own larger problems across teams and make others better. | Write designs, mentor, make trade-offs clear, lead through influence. |
| Staff and above | You shape direction across many teams. | Pick the right problems, align people, keep technical quality high. |

## Habits that compound

- Keep a work log of what you did and learned each week. It helps in reviews.
- Read one good engineering blog post or one chapter a week.
- Leave the code a little cleaner than you found it.
- Take notes on mistakes, yours and others', and turn them into checklists.
- Protect your time off. Tired engineers write more bugs.
