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

## Year by year

| Year | Focus | Build | Milestone |
| --- | --- | --- | --- |
| Year 1 | Python, maths (linear algebra, probability), Git | Small scripts, NumPy and a plotting notebook | Python fluency and a few notebooks online |
| Year 2 | Pandas, scikit-learn, classic models, evaluation | Two end-to-end models on public datasets | Two notebooks with clear write-ups |
| Year 3 | Deep learning, PyTorch, deployment, LLM apps, an internship | A model served through an API, and an LLM app with retrieval | An internship offer and one deployed project |
| Year 4 | MLOps, evaluation, research habits, interview loops | A final project with data, a model, an API and monitoring | An offer for an ML or AI engineer role |

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

## Engineer's notes

- Most of the work is data: cleaning, labelling, checking leaks and building a trustworthy test set.
- Start with a simple baseline. If a simple model is close, the complex one may not be worth it.
- A model that works in a notebook is not a product. Plan for serving, monitoring and retraining.
- Track experiments: data version, code version, settings and results. You will forget otherwise.
- Evaluate with real examples from your users, not only a public benchmark.

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

## Interview questions and answers

**Q: What is overfitting, and how do you reduce it?**

The model learns noise in the training set and does poorly on new data. Reduce it with more data, simpler models, regularisation, dropout, early stopping and cross-validation.

**Q: Why is accuracy a poor metric for imbalanced data?**

A model that always predicts the majority class can score high accuracy while finding none of the rare cases. Use precision, recall, F1 or PR-AUC.

**Q: What is the bias-variance trade-off?**

Bias is error from too-simple assumptions, and variance is error from sensitivity to the training data. Better fit lowers bias but can raise variance, so you tune for the best total.

**Q: How does retrieval-augmented generation work?**

Split documents into chunks, embed them, store them in a vector index, retrieve the closest chunks for a question, and give them to the model as context to answer from.

**Q: How do you know an LLM feature works?**

Build an evaluation set of realistic questions with expected answers, score outputs with checks or a rubric, track results over time, and test again after each change.

## Glossary

| Term | Meaning |
| --- | --- |
| Overfitting | A model that memorises training data and fails on new data. |
| Train/validation/test split | Separate data for learning, tuning and the final honest check. |
| Precision / recall | How many predicted positives are right / how many real positives were found. |
| Embedding | A vector that captures the meaning of text, an image or other data. |
| RAG | Retrieval-augmented generation: fetch relevant documents and give them to the model. |
| Fine-tuning | Training an existing model further on your own data. |
| Hallucination | A confident answer from a model that is not true. |
| Gradient descent | A way to train by repeatedly nudging parameters to lower the loss. |

## Resources

- [Machine Learning Specialization](https://www.coursera.org/specializations/machine-learning-introduction): Andrew Ng's course, a gentle start
- [fast.ai Practical Deep Learning](https://course.fast.ai): A free, project-first course
- [Kaggle Learn](https://www.kaggle.com/learn): Short courses and datasets to practise on
- [roadmap.sh: AI and Data Scientist](https://roadmap.sh/ai-data-scientist): A visual checklist of topics
