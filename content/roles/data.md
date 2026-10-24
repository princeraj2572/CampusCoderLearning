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
