# Project 2: International B2B Lead Generation

**Type:** Personal practice project with a simulated client. **Data:** 100 SYNTHETIC company records. Every name ends in "(fictional)", websites use the reserved `.example` domain, and there are no real people or contact details.
**Files:** `data/b2b-leads-synthetic.csv`, workbook tab "P2 Leads CRM", case study at `projects/lead-generation.html`.

---

## 1. Brief

**Client (fictional):** OpsBridge, a remote operations-support agency (research, admin, CRM upkeep).
**Goal:** 100 researched target accounts in the US, UK, Australia and Singapore, scored so the founder can contact the best-fit 20 first.
**Industries:** SaaS, digital agencies, EdTech, consulting.

## 2. Ideal Customer Profile (ICP)

| Attribute | Definition |
|---|---|
| Industry | B2B SaaS, digital and marketing agencies, EdTech, management and operations consulting |
| Size | Primary 51–200 employees; secondary 11–50 and 201–500; low fit above 500 |
| Geography | US, UK, AU, SG (English-speaking, open to remote contractors, workable overlap with UTC+7) |
| Triggers | Open ops or admin roles; growth signal (funding, new office, headcount growth); uses a CRM such as HubSpot |
| Exclusions | Under 10 staff, sole traders, competitors, any company with a "no solicitation" notice |

## 3. Buyer persona: "Operations-stretched Olivia"

- **Role:** Head of Operations, 120-person B2B SaaS company.
- **Goals:** a clean CRM, on-time weekly reporting, senior staff freed from admin.
- **Pains:** headcount freeze, research and data backlog, cross-time-zone hand-offs.
- **Triggers:** an ops role open for more than 30 days; a new market launch.
- **Objections:** "Offshore quality is inconsistent"; "Onboarding takes too long".
- **Proof she needs:** a small paid pilot, written SOPs, a sample deliverable.
- **Channels:** LinkedIn, email; prefers short, specific messages.

*This persona is a hypothesis built from typical job descriptions. Validate it with 5–10 buyer conversations.*

## 4. Prospect research methodology (SOP)

1. **Account universe:** LinkedIn company search (industry, headcount, location), curated directories, Google search operators.
2. **Firmographics:** confirm on the company website (About, Careers, Contact). Log the source URL and access date in the CRM.
3. **Signals:** careers page and job boards for ops roles; page source or forms for CRM evidence; news for growth.
4. **Decision-maker title:** use the title map (section 5). For a real client, add names only from public professional profiles, and keep only business contact data.
5. **Score and tier** (section 6). Verify only Tier A and B.
6. **QA:** spot-check 10% of rows against their sources; de-duplicate on website domain; normalise country names and size bands; no blank required fields.

**Search operator examples**
```
site:linkedin.com/company ("SaaS" OR "software") "51-200 employees" "Singapore"
site:*.com/careers ("operations coordinator" OR "operations associate") "remote"
("digital agency" OR "marketing agency") "Manchester" "about us" -jobs
intitle:"team" "Head of Operations" "EdTech" "Melbourne"
```

**Data dictionary (CRM columns)**

| Column | Allowed values / format |
|---|---|
| lead_id | LD-### |
| company_name, website | Text; domain only, without "https://" |
| industry | SaaS / Digital Agency / EdTech / Consulting |
| country | United States / United Kingdom / Australia / Singapore |
| company_size | 11–50 / 51–200 / 201–500 / 501–1,000 |
| target_job_title | From the title map |
| signal_* | Yes / No / Unknown |
| priority_score | 0–100 (formula) |
| lead_qualification_status | Qualified – Tier A / Qualified – Tier B / Nurture / Disqualified |
| research_source | Source URLs (synthetic description in this demo) |
| contact_verification_status | Not verified / Verified (date) / Invalid |

## 5. Decision-maker identification

| Company size | SaaS | Agency | EdTech | Consulting |
|---|---|---|---|---|
| 11–50 | Founder or COO | Founder / Managing Director | Founder or Head of Growth | Managing Partner |
| 51–200 | Head of Operations, RevOps Manager | Operations Director | Head of Growth, Operations Manager | COO, Practice Lead |
| 201–500 | VP Sales or Ops (budget); RevOps (champion) | Head of Client Services | Director of Partnerships | COO |

## 6. Lead qualification framework and scoring

| Factor | Points |
|---|---|
| Company size | 51–200: 25 · 201–500: 20 · 11–50: 15 · 501–1,000: 8 |
| Region fit | US 15 · UK 14 · AU 13 · SG 13 |
| Hiring for ops or admin roles | Yes: 20 |
| Uses HubSpot | Yes: 15 · Unknown: 5 · No: 0 |
| Recent growth signal | Yes: 15 |
| Data completeness | 0–10 |

| Tier | Score | Action |
|---|---|---|
| Qualified – Tier A | ≥ 78 | Verify the email, start the sequence this week |
| Qualified – Tier B | 62–77 | Verify, start the sequence this month |
| Nurture | 42–61 | Re-check signals in 60 days |
| Disqualified | < 42 | Archive with a reason |

**Result on the synthetic set:** 12 Tier A, 42 Tier B, 38 Nurture, 8 Disqualified.

## 7. Email verification workflow

1. Verify Tier A and B only.
2. Find the business address from public company sources, or derive a pattern and mark it "pattern – unconfirmed".
3. Check it with a verification tool's free tier (syntax, domain/MX, mailbox where possible).
4. Log the outcome: **Valid** (send) · **Catch-all** (send in small batches and watch bounces) · **Invalid** (remove) · **Unknown** (find another channel).
5. Keep bounces low. Pause and re-verify if bounces rise above about 3%.
6. Store the verification date and re-verify after 90 days.

In this demo, the `simulated_email_check` column shows how results are logged. **No real checks were performed.**

## 8. Outreach strategy

**Tier A sequence:** Day 1 email → Day 3 LinkedIn connection (no pitch) → Day 6 follow-up with a sample → Day 12 breakup email.

**Email 1 (template)**
> Subject: Ops backlog at {{Company}}?
>
> Hi {{FirstName}}, I noticed {{Company}} is hiring for {{OpsRole}}. That's often a sign the team is stretched while the hire happens.
>
> OpsBridge covers research, CRM upkeep and weekly reporting for teams in {{Country}}, with written SOPs from week one.
>
> Worth a 15-minute chat to see if a 2-week pilot would help?
>
> {{Sender}} · {{Company address}} · Reply "no thanks" and I won't follow up.

**Email 2 (Day 6)**
> Subject: Re: Ops backlog at {{Company}}?
>
> Hi {{FirstName}}, here's a one-page sample of the weekly ops report we'd send your team: {{link}}. Happy to adapt it to your tools.

**Email 3 (Day 12)**
> Subject: Close the loop?
>
> Hi {{FirstName}}, I'll assume the timing isn't right and won't follow up again. If ops support becomes a priority, just reply to this email.

### Compliance notes by market

These summaries are for briefing a client, not legal advice. Confirm with the client's counsel before any campaign.

| Market | Rule of thumb | Source |
|---|---|---|
| UK (PECR + UK GDPR) | Corporate subscribers (limited companies, LLPs) can receive B2B marketing email without prior consent. Sole traders and simple partnerships are treated as individuals and need consent or the soft opt-in. Always include an opt-out. | Harper James, "B2B marketing and GDPR" (https://harperjames.co.uk/article/b2b-marketing-and-gdpr-the-basics/); ICO guidance (https://ico.org.uk/for-organisations/advice-for-small-organisations/direct-marketing-and-data-protection/making-marketing-work-for-you-and-your-customers/) |
| Australia (Spam Act 2003) | Express or inferred consent is required. Inferred consent via "conspicuous publication" works only if there's no "no marketing" statement and the message relates to the recipient's role. Include sender ID and an unsubscribe option. | ALRC Report 108, ch. 73 (https://www.alrc.gov.au/publication/for-your-information-australian-privacy-law-and-practice-alrc-report-108/73-other-telecommunications-privacy-issues/spam-act/); Spam Act 2003, Sch. 2 (https://www.legislation.gov.au/C2004A01214) |
| Singapore (Spam Control Act 2007 + PDPA) | Unsolicited commercial email sent in bulk must start its subject line with "<ADV>" and include an unsubscribe option. | IMDA / DMAS checklist (https://www.imda.gov.sg/assets/91e5f59f-56af-4e87-8158-5f8047831fd6.pdf); Chambers Cybersecurity 2025 guide (https://gpg-pdf.chambers.com/view/902006512/229) |
| United States (CAN-SPAM) | Accurate header and subject, a physical postal address, a clear opt-out honoured promptly. | FTC, CAN-SPAM Act: A Compliance Guide for Business (https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business) |

All sources accessed 19 November 2026.

## 9. Quality checks run on the dataset

- 100 unique company names and 100 unique `.example` domains.
- Every row has a data label, a score and a status; scores are reproducible from the formula.
- Tier counts match between the CSV, the workbook and the website.

## 10. Limitations

This dataset is synthetic, so it shows structure, scoring logic and process, not research accuracy. To prove research accuracy, run the same SOP on 20 real companies (company-level data only, from public sources) and show the source URL for every field.
