# Project 4: AI-Powered Virtual Assistant Operations System

**Type:** Personal project with a SIMULATED client week. **Simulated client:** "Brightside Studio" (fictional), a 12-person design studio in London (UTC+0), supported from Indonesia (UTC+7), 3 hours a day.
**Files:** `data/va-weekly-task-tracker.csv`, workbook tabs "P4 Task Tracker" and "P4 Weekly Report", case study at `projects/va-operations.html`.

---

## 1. Operating model

| Item | Standard |
|---|---|
| Shift | 15:00–18:00 WIB (08:00–11:00 London in winter), so the founder's morning is covered |
| Channels | Email for external work, Slack for internal work, Notion for tasks and documents |
| Daily outputs | Two inbox passes, a task-log update, an end-of-day note |
| Weekly outputs | A weekly report every Friday, next-week priorities, an improvement suggestion |
| Access | Least privilege: delegated mailbox and calendar access, no password sharing (use the client's password manager) |

---

## 2. Email management SOP

**Purpose:** keep the founder's inbox under control without missing anything important.
**Frequency:** start and end of each shift.

**Labels**

| Label | Meaning | Who acts |
|---|---|---|
| 1-Action-Founder | Needs the founder's decision or voice | Founder (with my summary and a draft) |
| 2-Action-VA | I can handle it with approved templates | VA |
| 3-Waiting | Waiting on someone else; follow up on the date in the note | VA |
| 4-Read-Later | Newsletters, FYI | Founder, optional |
| 5-Receipts | Invoices, receipts, confirmations | VA files them to Drive / Finance |

**Procedure**
1. Open the inbox, sorted oldest unread first.
2. For each email: label it → act (reply, draft, file, forward) → archive.
3. Two-minute rule: if an approved template answers it, reply and log it.
4. **Never send** anything new, financial, legal or emotionally sensitive. Draft it and label it 1-Action-Founder.
5. Response targets: clients within 1 business day, vendors within 2, cold pitches no reply unless whitelisted.
6. Update `3-Waiting` follow-ups that are due today.
7. Send the end-of-day note (template below).

**End-of-day note**
```
EOD — [date]
Handled (4): rescheduled X, sent invoice reminder drafts, filed 6 receipts, replied to 2 FAQs
Needs you (2): 1) Approve proposal reply to [client] — draft ready  2) Choose Tue/Wed for [meeting]
Waiting (1): [vendor] quote — follow up Thu
```

**Reply templates (approved by the founder before use)**
- *Meeting request:* "Thanks for reaching out. I manage [Founder]'s calendar. Here are three times that work: [times, recipient's time zone]. Let me know which suits you."
- *Invoice reminder (draft only):* "Hi [Name], a friendly reminder that invoice [#] for [amount] was due on [date]. Could you confirm when payment is scheduled? The invoice is attached again for convenience."
- *Polite decline:* "Thank you for thinking of us. We're not taking on [X] at the moment, but we'll keep your details on file."

---

## 3. Calendar management workflow

1. Protect focus blocks first (marked "Busy – Deep work").
2. Write both time zones in every external event title: "16:00 WIB / 09:00 GMT".
3. 15-minute buffers between calls; a maximum of 4 meeting hours a day unless the founder approves.
4. Every meeting gets an agenda link (meeting brief template). No agenda 24 hours before means I flag it.
5. Confirm external meetings the day before; log reschedules.
6. Conflict rule: clients → investors → team → vendors, unless the founder says otherwise.
7. Daylight-saving check: re-confirm offsets in the weeks when the UK, US or Australia change clocks.

---

## 4. Meeting preparation template

```
MEETING BRIEF — [Meeting] — [Date, time in both zones]
Purpose (1 sentence):
Decision needed:
Attendees (name, role, one useful fact from public profile/company site):
Context: last touchpoint, open items, relevant numbers (source)
Agenda (with minutes): 1) … 2) … 3) …
Materials:
Prepared by / checked against: CRM, email thread, last minutes
```

## 5. Meeting minutes template

```
MINUTES — [Meeting] — [Date]
Attendees / absent:
Decisions: D1 … D2 …
Action items:
| # | Action | Owner | Due | Status |
Open questions / parking lot:
Next meeting:
Distributed within 2 hours to: [list]
```

---

## 6. Research documentation template

```
RESEARCH BRIEF — [Question] — requested by [name] on [date]
Answer (3 bullets, each with confidence High/Medium/Low):
Evidence:
| Claim | Source URL | Published | Accessed | Fact / Estimate |
Could not verify:
AI use: [tool] for [summarising/drafting]; every claim checked against sources above
Time spent: [min]
```

---

## 7. Weekly reporting dashboard

Built in the workbook ("P4 Weekly Report") with formulas: tasks completed, completion rate, estimated versus actual minutes by category, AI-assisted share, P1 completion.

**Simulated week result:** 17 of 20 tasks done; 1 in progress, 1 not started, 1 blocked.

```
WEEKLY REPORT — Week of [date]
Completed: 17 of 20 tasks · Time logged vs estimate: see sheet
Wins: …
Blocked / needs you: newsletter draft waiting on brand assets
Risks: Drive clean-up in progress (25 of 40 min); finishes Monday
Next week: 1) … 2) … 3) …
Suggested improvement: automate form lead → Sheet → Slack alert (prototype built, ready to test)
```

---

## 8. Project tracking system

| Field | Values | Rule |
|---|---|---|
| Status | Not started / In progress / Waiting / Blocked / Done | "Waiting" separates other people's delays from mine |
| Owner | One person | Never "team" |
| Due + next check-in | Dates | Check-in comes before the due date |
| Blocker note | Text | Written so it can be unblocked with one reply |
| Output link | URL | Every task links to its file |

---

## 9. Notion workspace structure

```
Brightside Ops HQ
├── Inbox & Requests     (database: request, requester, due, status)
├── Tasks                (views: Today · This week · Waiting · By project)
├── Projects             (relation → Tasks)
├── Meetings             (brief + minutes templates; relation → Tasks)
├── Research Library     (brief template, sources, confidence)
├── Weekly Reports       (template button, one page per week)
├── SOPs                 (Email · Calendar · Research · Reporting · Tool access)
├── AI Prompt Library    (prompt, use case, required human check)
└── Access & Accounts    (tool, owner, permission level, never passwords)
```

---

## 10. Google Sheets templates

The Excel workbook `Nuzul_Portfolio_Workbook.xlsx` opens in Google Sheets (File → Import). Conventions: blue text marks input cells, black text marks formulas, and each tab has a legend row.

- **P4 Task Tracker:** task log with a variance formula (actual − estimate) and a COUNTIF status summary.
- **P4 Weekly Report:** SUMIF by category, completion rate, AI-assisted share.

## 11. Automation example (Zapier free tier, designed and documented)

**Trigger:** new Google Form response (website enquiry) → **Action 1:** add a row to the "Leads" sheet → **Action 2:** post to Slack #leads with name, company and need.
Note: Zapier's Free plan allows two-step Zaps only [Zapier pricing, https://zapier.com/pricing.md, accessed 19 Nov 2026], so the free version runs as two separate Zaps, or as one multi-step Zap on a paid plan.
**Test plan:** submit 3 test entries, confirm the row and message for each, then check failure notifications.

---

## 12. AI prompt library

Every prompt has a human checkpoint. Confidential client data goes only into AI tools the client has approved.

| Use case | Prompt | Human check |
|---|---|---|
| Inbox summary | "Here are 15 email subjects and first lines. Sort them into Needs founder / I can handle / FYI, with one-line reasons. Don't invent details that aren't in the text." | Open every "Needs founder" email |
| Reply draft | "Draft a reply in this tone (examples below). Max 120 words. Use [brackets] for anything not given. Don't promise dates or prices." | Fill the brackets; check names, dates and amounts |
| Minutes | "From these notes, list decisions, then action items as a table (action, owner, due). Write UNASSIGNED if there's no owner." | Compare with the notes and confirm owners |
| Research summary | "Summarise only the sources pasted below. Add [source #] after each claim. Say 'not in sources' if unsure." | Open every source; verify each number |
| Weekly report | "Turn this task log into the weekly report template. Keep all numbers exactly as given; don't calculate new ones." | Recalculate totals in the sheet |
| SOP draft | "Turn these steps I recorded into an SOP with purpose, frequency, steps, and what to do when X fails." | Do a dry run of the SOP once |

**Tool notes:** I use ChatGPT and Claude for drafting and structuring, and Gemini when working inside Google Workspace. Outputs are never sent without review.
