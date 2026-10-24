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

## Year by year

| Year | Focus | Build | Milestone |
| --- | --- | --- | --- |
| Year 1 | Networking, Linux, one scripting language, how the web works | Capture-the-flag warm-ups and a home lab | A basic lab and a few CTF solves |
| Year 2 | Web security (OWASP Top 10), cryptography basics, tools | Find and write up flaws in a deliberately vulnerable app | Public write-ups and CTF ranking |
| Year 3 | Penetration testing methods, cloud security, defence basics, an internship | A report on a lab target with fixes | An internship offer and a portfolio of write-ups |
| Year 4 | Specialise (appsec, cloud, blue team), certifications, interview loops | A project on detection or secure design | An offer for a security role |

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

## Engineer's notes

- Security is about trade-offs and risk, not perfection. Fix the biggest risks first.
- Work with developers, not against them. The best fixes are easy to adopt.
- Only test systems you have written permission to test. Keep clear records.
- Write findings so a busy engineer can act: what, where, impact and how to fix.
- Assume breach. Plan how you will detect and respond, not only how you will prevent.

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

## Interview questions and answers

**Q: How do you prevent SQL injection?**

Use parameterised queries or an ORM, never build SQL by joining strings, validate input and give the database user minimal rights.

**Q: How should passwords be stored?**

Hash them with a slow, salted algorithm such as bcrypt, scrypt or Argon2. Never store them in plain text or with a fast hash.

**Q: What is the difference between symmetric and asymmetric encryption?**

Symmetric uses one shared key and is fast. Asymmetric uses a public and private key pair, and is used for key exchange and signatures.

**Q: What does HTTPS protect against?**

Eavesdropping and tampering on the network, and it proves the server's identity through a certificate. It does not make the app itself secure.

**Q: Walk through what you would do after finding a vulnerability.**

Confirm it, record minimal proof, assess impact, report it responsibly to the owner with steps and a fix suggestion, and test the fix. Only test systems you have permission to test.

## Glossary

| Term | Meaning |
| --- | --- |
| Threat model | A structured list of what can go wrong, who attacks and how. |
| XSS | Injecting script into a page that other users then run. |
| SQL injection | Tricking an app into running attacker-supplied SQL. |
| CSRF | Making a user's browser send an unwanted request to a site they are logged in to. |
| Hash vs encryption | A hash is one-way. Encryption can be reversed with a key. |
| Least privilege | Giving each person or process only the access it needs. |
| CVE | A public ID for a known vulnerability. |
| Red team / blue team | Attackers testing defences / defenders detecting and responding. |

## Resources

- [PortSwigger Web Security Academy](https://portswigger.net/web-security): Free labs for web security
- [picoCTF](https://picoctf.org): Beginner-friendly capture-the-flag practice
- [TryHackMe](https://tryhackme.com): Guided learning paths
- [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/): A deliberately vulnerable app to practise on
