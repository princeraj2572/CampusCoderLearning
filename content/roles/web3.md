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

## Year by year

| Year | Focus | Build | Milestone |
| --- | --- | --- | --- |
| Year 1 | Programming, data structures, how the web and cryptography work | A simple hash chain in code | Strong basics and a blockchain mini-project |
| Year 2 | Ethereum basics, Solidity, a wallet, testing with Hardhat or Foundry | A token and a simple voting contract on a testnet | Two contracts on a testnet |
| Year 3 | Security patterns, frontends with ethers or viem, an internship | A full dApp with a contract and a UI | An internship offer and an audited-style review |
| Year 4 | Auditing, gas optimisation, protocol design, interview loops | A project with tests, a security review and docs | An offer for a blockchain developer role |

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

## Engineer's notes

- Code is law and mistakes are permanent. Test far more than you would for a normal app.
- Get an independent audit before holding real funds, and still assume bugs remain.
- Gas costs are a real constraint. Design data and loops with them in mind.
- Never put private keys or seed phrases in code, chats or screenshots.
- Understand the economics and incentives. Many exploits are design flaws, not coding bugs.

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

## Interview questions and answers

**Q: What is a reentrancy attack, and how do you prevent it?**

An external call lets an attacker call back into your function before state is updated, draining funds. Update state before external calls, use a reentrancy guard and prefer pull payments.

**Q: Why is gas important when writing contracts?**

Each operation costs gas, and storage is costly. Efficient code lowers fees for users and avoids hitting limits.

**Q: How is a blockchain different from a normal database?**

It is shared and replicated across many parties, append-only and secured by cryptography and consensus, so no single party can rewrite history. It is slower and costlier than a database.

**Q: What does immutable mean for contract bugs?**

A deployed contract cannot be edited, so bugs are hard to fix. Test heavily, get audits, use upgradeable patterns with care and add emergency stops.

**Q: How do you keep private keys safe?**

Never put them in code or a repository, use hardware wallets or secure key stores, and keep separate keys for testing and for real funds.

## Glossary

| Term | Meaning |
| --- | --- |
| Smart contract | A program stored and run on a blockchain. |
| Gas | The fee for computation on a blockchain. |
| Wallet | A tool that holds keys and signs transactions. |
| Consensus | How nodes agree on the state of the chain. |
| ABI | A description of a contract's functions for other programs. |
| Reentrancy | A bug where a call back into a contract happens before it updates its state. |
| Testnet | A practice network with no real money. |
| Oracle | A service that brings outside data onto a chain. |

## Resources

- [Solidity documentation](https://docs.soliditylang.org): The official language guide
- [Ethereum developer docs](https://ethereum.org/en/developers/): Concepts and tutorials from the start
- [Foundry Book](https://book.getfoundry.sh): The fast testing and deployment toolkit
- [OpenZeppelin documentation](https://docs.openzeppelin.com): Audited contracts and security guidance
- [CryptoZombies](https://cryptozombies.io): Learn Solidity by building a small game
- [Ethernaut](https://ethernaut.openzeppelin.com): Hacking challenges that teach contract security
- [Cyfrin Updraft](https://updraft.cyfrin.io): Free courses on Solidity, testing and security
