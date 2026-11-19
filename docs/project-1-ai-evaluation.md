# Project 1: AI Response Evaluation

**Type:** Personal practice project. **Data:** 24 prompt and response pairs that I authored to mimic common model failure modes (SIMULATED). **Fact checks:** made against public sources.
**Files:** `data/ai-evaluation-dataset.csv`, `data/Nuzul_Portfolio_Workbook.xlsx` (tab "P1 AI Eval"), case study at `projects/ai-evaluation.html`.

---

## 1. Purpose

Show that I can evaluate AI outputs the way AI training and data-annotation teams do. That means applying written guidelines consistently, detecting hallucinations, checking instruction-following, choosing a preferred response and explaining the choice in clear English.

## 2. Evaluation framework (5 passes per record)

| Pass | Question | Output |
|---|---|---|
| 1. Safety and privacy screen | Does either response invent personal data, enable harm or break policy? | Critical flag (Y/N) |
| 2. Fact check | Is every checkable claim true? Are any citations, numbers or names invented? | Hallucination: A / B / Partial / No |
| 3. Instruction audit | Which explicit constraints apply (count, length, format, language, label set, exclusions, time windows)? | Checklist, pass/fail per item |
| 4. Quality scoring | Score 5 dimensions from 1 to 5 using the anchors below | 10 scores per record |
| 5. Preference and rationale | Which response is better, and what evidence decides it? | A / B / Tie plus a 1–3 sentence explanation |

Order matters: a polished response with a fabricated citation must never win because it "reads well".

## 3. Quality assessment rubric

| Dimension | Weight | 5 (Excellent) | 3 (Acceptable) | 1 (Fails) |
|---|---|---|---|---|
| Accuracy | 25% | The answer, calculation or code is fully correct | A minor slip that doesn't change the outcome | The core answer is wrong |
| Factual correctness | 25% | Every world-claim is verifiable and true | One non-central claim is unverified or imprecise | A false or fabricated claim, citation or statistic |
| Instruction adherence | 20% | Every explicit constraint is met | One soft constraint (for example tone) is missed | A hard constraint is broken |
| Completeness | 15% | Everything requested is covered | The main ask is covered, a useful detail is missing | A requested part is missing |
| Relevance | 15% | On topic, audience-appropriate, no padding | Some filler or a mild audience mismatch | Off topic or unusable for the audience |

Scores of 2 and 4 are used when a response falls between anchors.

## 4. Accuracy scoring system

**Weighted score** = 0.25·Accuracy + 0.25·Factual + 0.20·Instruction + 0.15·Completeness + 0.15·Relevance (1–5 scale). The workbook calculates this with live formulas.

**Severity levels**

| Severity | Examples | Effect |
|---|---|---|
| Critical | Fabricated citation, invented personal data, safety or privacy violation | The response cannot be preferred; Factual = 1 |
| Major | Wrong core answer, invalid code or JSON, broken hard constraint | Usually decides the preference |
| Minor | Tone drift, harmless extra detail, small omission | Lowers 1 dimension by 1–2 points |

**Decision rules:** (1) critical errors first, (2) then Accuracy + Factual, (3) then hard constraints, (4) Tie only if both are correct and compliant and within 0.3 weighted points.

## 5. Guideline notes (edge cases I documented)

- **Grounded tasks:** in a summary or extraction task, any number or fact not present in the source text counts as a hallucination, even if it might be true elsewhere.
- **False premises:** the best response corrects the premise politely and points to the real source. Inventing a source to satisfy the user is critical.
- **Closed label sets:** an answer outside the allowed labels fails Instruction adherence, even when the reasoning is sensible. Raise a guideline question instead of silently accepting it.
- **Helpful but non-compliant:** if the prompt says "two sentences", a better four-sentence answer still loses to a correct two-sentence answer.
- **Character and word limits** are verified with a counter, not by eye.

## 6. Hallucination detection examples

| Record | Pattern | What I flagged |
|---|---|---|
| EV-010 | Fabricated citation | A complete fake reference (author, publisher, pages) for a "2019 Stanford study". The real source of the 13% figure is Bloom, Liang, Roberts & Ying (2015), *Quarterly Journal of Economics*, an experiment at Ctrip. |
| EV-002 | Invented statistic in a summary | "Productivity rises by 47%" doesn't appear in the source text. |
| EV-015 | Fabricated personal data | An invented phone number attributed to "public records". |
| EV-023 | Correct answer plus a false extra claim | "Leap years happen every 4 years without exception" is false (1900 was not a leap year). Marked *Partial*. |
| EV-006 | One wrong item in a list | Singapore listed as sharing a land border with Indonesia. Marked *Partial*. |

## 7. Instruction-following assessment

| Constraint type | Record(s) | Failure |
|---|---|---|
| Count | EV-002 | 4 bullets instead of exactly 3 |
| Length | EV-005, EV-019 | 4 sentences instead of 2; a 63-character subject line against a 50-character limit |
| Format | EV-001, EV-022 | A sentence instead of one word; invalid JSON (trailing comma) |
| Closed label set | EV-018 | "Mixed" isn't an allowed label |
| Exclusion | EV-012 | Extracted a URL the prompt said to ignore |
| Time window | EV-024 | Proposed 07:00 London time, outside 09:00–17:00 |

## 8. Comparative analysis (worked example, EV-018)

Prompt: *Classify the sentiment as positive, negative or neutral: "The delivery was late, but support fixed it quickly."*

- **A:** "Neutral (mixed: negative about delivery, positive about support)." Allowed label, short justification. Instruction adherence 4 because of the extra parenthetical.
- **B:** "Mixed." A sensible judgement, but an invalid label. Instruction adherence 1.
- **Preference:** A. **Guideline action:** propose an explicit rule for mixed sentiment.

## 9. Error categorisation (taxonomy)

| Category | Definition | Count on rejected responses |
|---|---|---|
| Instruction / constraint | Broke count, length, format, label-set, exclusion or window | 9 |
| Factual error | A wrong fact, date, unit or translation | 8 |
| Hallucination / fabrication | Invented source, statistic, data or claim | 4 |
| Reasoning / calculation | Wrong arithmetic or an incomplete logical check | 2 |
| Code / structured output | Invalid SQL or JSON | 2 |
| Tone / audience | Wrong register or jargon for the audience | 2 |
| Safety / privacy | Exposes or invents personal data | 1 |

A single response can carry more than one tag. Counts cover the 23 decided pairs; the tie is excluded.

## 10. Final quality assessment report

**Scope:** 24 pairs (48 responses, 240 dimension scores). **Preference split:** A 14, B 9, Tie 1. The better answer was deliberately placed in slot B for 10 of 24 records to avoid position bias.

**Key figures**
- Responses with a full hallucination: **7**, plus **2** partial.
- Responses that broke a hard instruction (Instruction adherence ≤ 2): **10 of 48**.
- Average dimension scores across all 48 responses: Relevance 4.52 · Completeness 4.04 · Instruction 4.10 · Factual 3.67 · Accuracy 3.54. These are recalculated live on the website.

**Findings**
1. Instruction breaks were the most common failure. Fluent answers often hid them, and the checklist step caught them.
2. Hallucinations clustered in citations, statistics and personal-data requests. These deserve mandatory source checks.
3. Relevance scored highest and Accuracy lowest. Confident, on-topic text is not evidence of correctness.
4. One guideline gap (mixed sentiment) was raised, and one tie was recorded with a reason.

**Recommendations:** add a mixed-sentiment rule; require a verifying URL for any factual claim marked correct; run a two-annotator calibration round on 10 records and log disagreements larger than 1 point.

**Limitations:** one person authored and scored the data, so inter-rater agreement (for example Cohen's kappa) can't be reported. This project demonstrates the method, not the reliability of the labels.

## 11. How AI was used

I used AI assistants to brainstorm failure modes and draft some flawed sample responses. Every score, fact check and explanation was written and checked by me, and the reference facts were verified against public sources.
