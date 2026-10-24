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
