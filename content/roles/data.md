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

## Year by year

| Year | Focus | Build | Milestone |
| --- | --- | --- | --- |
| Year 1 | Excel or Sheets, basic statistics, SQL basics, Git | Clean and chart a small dataset | A first dashboard |
| Year 2 | SQL in depth, Python and Pandas, visualisation | An analysis with a clear question and a written finding | Two analyses and a dashboard online |
| Year 3 | Statistics, a BI tool, data modelling, pipelines, an internship | A dashboard fed by a scheduled pipeline | An internship offer and a portfolio of three analyses |
| Year 4 | Warehousing, orchestration, experiments, interview loops | An end-to-end data project from raw data to decision | An offer for an analyst or data engineer role |

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

## Engineer's notes

- Check the data before you analyse it: duplicates, nulls, time zones and units cause wrong answers.
- A number without a definition is not useful. Write down exactly how each metric is calculated.
- Start with the question the business is asking. A beautiful chart for the wrong question is wasted.
- Reproducibility matters. Keep queries and notebooks in version control.
- Explain results in plain language and say how sure you are.

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

## Interview questions and answers

**Q: What is the difference between WHERE and HAVING?**

WHERE filters rows before grouping. HAVING filters groups after aggregation.

**Q: How do you handle missing data?**

First find out why it is missing. Then drop, fill with a sensible value (mean, median, a flag) or model it, and always say what you did.

**Q: Explain a join, with the main types.**

A join combines rows from two tables on a key. Inner keeps matches only, left keeps all rows from the left table, right does the reverse, and full outer keeps everything.

**Q: How do you check that a dashboard number is right?**

Reproduce it with a separate query, compare with a known total, check filters and time zones, and look for duplicates from joins.

**Q: When is a result statistically meaningful?**

When the sample is large enough, the groups were fairly assigned, the effect size matters in practice, and the p-value or interval supports it. Statistical significance alone is not business value.

## Glossary

| Term | Meaning |
| --- | --- |
| ETL / ELT | Extract, transform and load data into a store, in one order or the other. |
| Data warehouse | A database designed for analysis across large amounts of data. |
| Dimension / fact table | Descriptive attributes versus measurable events in a data model. |
| Window function | A SQL calculation across related rows without collapsing them. |
| A/B test | Comparing two versions with random groups to see which does better. |
| P-value | The chance of seeing a result at least this extreme if nothing is really going on. |
| Data quality | How accurate, complete and consistent the data is. |
| Orchestration | Scheduling and ordering data jobs, for example with Airflow. |

## Resources

- [Mode SQL Tutorial](https://mode.com/sql-tutorial): SQL for analysis, from basic to advanced
- [Kaggle Learn: Pandas](https://www.kaggle.com/learn/pandas): A short, practical pandas course
- [Data Engineering Zoomcamp](https://github.com/DataTalksClub/data-engineering-zoomcamp): A free, project-based data engineering course
- [roadmap.sh: Data Analyst](https://roadmap.sh/data-analyst): A visual checklist of topics
