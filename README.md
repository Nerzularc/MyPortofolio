# Nuzul Nur Robbulizzat | AI-Powered Research & Business Operations Assistant

> Helping businesses transform research, data, and repetitive operations into structured, actionable workflows.

This repository is my professional portfolio for remote, part-time and freelance work: AI data evaluation, data research, B2B lead generation, virtual assistance, market research, business operations and social media operations. It's a static website (HTML, CSS and vanilla JavaScript) that runs on **GitHub Pages** with no build step, no external APIs and no paid tools.

**Live site:** https://nerzularc.github.io/nuzul-portfolio/

---

## What's inside

| # | Case study | What it proves | Data type |
|---|---|---|---|
| 1 | [AI Response Evaluation](projects/ai-evaluation.html) | Rubric-based scoring, hallucination detection, instruction-following checks, QA reporting | Simulated responses (24 pairs) |
| 2 | [International B2B Lead Generation](projects/lead-generation.html) | ICP, persona, research SOP, lead scoring, CRM hygiene, verification and outreach compliance | Synthetic (100 fictional companies) |
| 3 | [Market Research: No-Code Automation](projects/market-research.html) | Cited market sizing, competitor mapping, SWOT, pricing comparison, recommendations | Real public sources (20, dated) |
| 4 | [AI-Powered VA Operations](projects/va-operations.html) | Email and calendar SOPs, meeting templates, Notion workspace, dashboards, AI prompt library | Simulated client week |
| 5 | [AI-Powered Social Media Operations](projects/social-media.html) | Content pillars, 30-day calendar, 15 posts with Canva briefs, engagement analysis | Fictional brand, simulated metrics |

### Honesty labels

- **Cited:** real public sources with URL and access date.
- **Synthetic:** generated records. Companies are fictional and use the reserved `.example` domain. There are no real people or contacts.
- **Simulated:** an authored practice scenario.
- **AI-assisted:** AI drafted part of it, and I edited and verified it.

No client work or testimonials are claimed. Real roles, awards and certificates are listed in the site's Experience section, and certificate PDFs are in `/certificates`.

## Repository structure

```
.
├── index.html                  Home, About, Skills map, Projects, Method, Contact
├── projects/                   5 case-study pages
├── assets/
│   ├── css/style.css           Design system (navy and white, provenance tags)
│   ├── js/main.js              Tables (sort, filter, search, paging), charts, nav
│   ├── js/data.js              Generated from /data CSVs (works offline and on file://)
│   ├── js/posts.js             Project 5 posts
│   └── img/                    Favicon and screenshots
├── data/
│   ├── ai-evaluation-dataset.csv
│   ├── b2b-leads-synthetic.csv
│   ├── market-research-pricing.csv
│   ├── va-weekly-task-tracker.csv
│   ├── social-30-day-calendar.csv
│   ├── social-performance-simulated.csv
│   └── Nuzul_Portfolio_Workbook.xlsx   10 tabs, 395 live formulas, opens in Google Sheets
├── docs/                       Full project documents (Markdown + HTML)
├── cv/                         3 tailored CVs (.docx editable + .pdf)
├── certificates/               Original certificate PDFs (IBM SkillsBuild, Ioda Academy, DBS Foundation)
└── career-kit/                 LinkedIn, Upwork, proposals, interview prep, 30-day roadmap, recruiter review
```

## Deploy on GitHub Pages (5 minutes)

1. Create a new public repository, for example `nuzul-portfolio`.
2. Upload all files in this folder, keeping the structure (drag and drop works in the GitHub web UI).
3. Go to **Settings → Pages → Build and deployment → Source: Deploy from a branch**, then choose **Branch: `main`**, folder **`/ (root)`** and **Save**.
4. After about a minute, the site is live at `https://<your-username>.github.io/nuzul-portfolio/`.
5. If you use a different repository name, update the portfolio URL (search for `nerzularc.github.io`).

The `.nojekyll` file tells GitHub Pages to serve the files as they are.

## Edit and extend

- **Data:** edit the CSVs in `/data`. If you regenerate `assets/js/data.js`, keep the same column names so the tables keep working.
- **Workbook:** blue cells are inputs, black cells are formulas and yellow cells are key assumptions (weights, thresholds).
- **Text:** every page is plain HTML. Search for the sentence you want to change.
- **Docs:** edit the `.md` files. The `.html` copies in `/docs` and `/career-kit` are for reading on the live site.

## Tools used

ChatGPT, Claude, Gemini · Google Search, LinkedIn, Google Sheets · Notion, Google Workspace, Microsoft Excel · Zapier, Make.com · HubSpot · Canva · HTML, CSS, JavaScript

## Contact

nuzulnurri@gmail.com · https://www.linkedin.com/in/nuzulnurri · https://www.upwork.com/freelancers/~0146bd17e11c0c59b3

---
© 2026 Nuzul Nur Robbulizzat. Content and code may be reused with attribution. Third-party sources belong to their owners and are linked, not reproduced.
