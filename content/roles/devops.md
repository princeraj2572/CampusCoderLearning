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
