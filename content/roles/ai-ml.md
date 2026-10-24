# AI / ML engineer

*Train, evaluate and ship models, and build products on top of them.*

## The job

You turn data into working predictions or language features. Much of the job is not the model: it is cleaning data, measuring whether the model is actually good, and getting it into a product that does not break.

### A day in the job

- Clean and explore data, and find where it is wrong or biased.
- Train, tune and compare models, or design prompts and retrieval for language models.
- Build evaluation sets and measure quality honestly.
- Package a model behind an API and monitor it.
- Explain results to people who are not specialists.

**Good if:** You enjoy maths, experiments and being wrong several times before being right. You are careful about evidence.

**Main tools:** Python, NumPy, pandas, PyTorch, scikit-learn, SQL

## Where you will work

| Type | What you do there |
| --- | --- |
| Product companies | Recommendations, search, fraud detection and assistants. |
| AI startups | Build products on top of language and vision models. |
| Research labs | Usually need a master's degree or a PhD. |
| Healthcare and finance | Predictive models with strict quality rules. |

## Study plan

### Programming and maths (Months 1–3)

- Python, including NumPy and pandas.
- Linear algebra: vectors, matrices, dot products.
- Probability and statistics: distributions, mean and variance, bias, sampling.
- Calculus essentials: derivatives and the chain rule.
- Plotting with matplotlib.

**Build:** Analyse a real dataset and write up three findings with charts.

### Classical machine learning (Months 4–6)

- Regression, classification, trees, and ensembles.
- Train, validation and test splits; cross-validation; overfitting.
- Metrics: accuracy, precision, recall, F1, ROC-AUC, and why accuracy misleads.
- Feature engineering with scikit-learn.

**Build:** A model on a Kaggle dataset, with a clear metric and an honest error analysis.

### Deep learning and language models (Months 7–10)

- Neural networks, backpropagation, and training with PyTorch.
- CNNs for images and transformers for text.
- Fine-tuning and using pretrained models.
- Working with language-model APIs: prompting, structured output, retrieval-augmented generation and evaluation.

**Build:** A retrieval-based question-answering app over a document set, with a test set to measure quality.

### Production (Months 11+)

- Serving a model through an API, and batching.
- Experiment tracking and data versioning.
- Monitoring for drift and bad outputs.
- Cost and latency trade-offs.
- Safety, privacy and bias.

**Build:** Deploy your model or app with logging, an evaluation script and a short model card.

## What to build

| Level | Project | What | What it proves |
| --- | --- | --- | --- |
| Starter | Exploratory data analysis | A cleaned dataset, charts, a baseline model and an honest note on its limits. | You can handle data and not oversell results. |
| Intermediate | Image or text classifier with a demo | Transfer learning, a proper evaluation, a small web demo. | You can train, measure and present a model. |
| Advanced | Retrieval-based assistant with evaluation | Documents, chunking, retrieval, a prompt, an evaluation set and cost tracking. | You can build something useful and know whether it works. |

## Tools

- Python with Jupyter or VS Code notebooks
- NumPy, pandas, scikit-learn, matplotlib
- PyTorch
- Weights & Biases or MLflow for experiment tracking
- Hugging Face for models and datasets
- FastAPI for serving

## A week of study

| When | What |
| --- | --- |
| Mon, Wed | Maths or an ML lesson plus exercises (1 hour) |
| Tue, Thu | DSA: two problems and a SQL query (45 minutes) |
| Fri | Read a paper summary and reimplement one idea (45 minutes) |
| Weekend | Build: three hours on a Kaggle task or your project |

## A senior's advice

### Do

- Start with a dumb baseline. If a simple rule gets 90%, you need a reason to use a model.
- Hold out a test set and do not touch it until the end.
- Look at your data and your errors by hand. Most improvements come from there.
- Write the evaluation before you build the feature.
- Learn the maths behind one model deeply, not the name of fifty.

### Avoid

- Quoting accuracy on an imbalanced dataset.
- Leaking test data into training.
- Copying notebooks without understanding each cell.
- Using a huge model where a small one would do.
- Shipping a demo as if it were a product.

## Mistakes juniors make

- Tuning the model before looking at the data.
- Reporting a number from a single lucky run.
- Splitting data randomly when it should be split by time or user.
- Not writing down which data and settings produced a result.
- Treating a model's confident answer as a true answer.

## Questions to ask a senior

- How do you decide a model is good enough to ship?
- How do you find out that a model has quietly got worse?
- How do you handle labelling and bad data?

## Myths and reality

| Myth | Reality |
| --- | --- |
| AI jobs are mostly about training models. | Most of the work is data, evaluation, and getting models into products. |
| You need a PhD. | Research roles often do, but applied engineering roles value skills and projects. |
| Calling an API is enough. | Employers want people who can measure quality and handle failures. |

## First 90 days

| When | Goal |
| --- | --- |
| Days 1–30 | Learn the data, reproduce the current baseline, and read the evaluation code. |
| Days 31–60 | Run a clean experiment that beats a baseline, with notes anyone can repeat. |
| Days 61–90 | Ship an improvement behind a flag and track its effect in production. |

## Career ladder

| Level | Focus |
| --- | --- |
| Junior (0–2 years) | Clean data, run experiments, and reproduce results with guidance. |
| Mid-level (2–5 years) | Own a model or feature, design evaluations, and ship it. |
| Senior (5+ years) | Choose approaches, set quality bars, and lead projects from idea to production. |
| Staff and beyond | Define the technical strategy for data and models across teams. |

## Interview preparation

- Python and DSA at an easy to medium level.
- Statistics and ML fundamentals: overfitting, bias and variance, regularisation, metrics.
- Walk through a project: data, baseline, results and mistakes.
- SQL and data manipulation questions.
- How you would evaluate a language-model feature.

## Resources

- [Machine Learning Specialization](https://www.coursera.org/specializations/machine-learning-introduction): Andrew Ng's course, a gentle start
- [fast.ai Practical Deep Learning](https://course.fast.ai): A free, project-first course
- [Kaggle Learn](https://www.kaggle.com/learn): Short courses and datasets to practise on
- [roadmap.sh: AI and Data Scientist](https://roadmap.sh/ai-data-scientist): A visual checklist of topics
