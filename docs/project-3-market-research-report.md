# No-Code Automation Platforms: Market & Competitive Intelligence Report

**Prepared by:** Nuzul Nur Robbulizzat · **Research date:** 19 November 2026 · **Type:** personal project answering a simulated client brief, using real public sources.

**Evidence labels used throughout**
- **[FACT]** stated in a cited source (reference number in brackets)
- **[ESTIMATE]** my calculation from cited figures
- **[ASSUMPTION]** an input I chose to make a calculation possible
- **[HYPOTHESIS]** a claim that needs testing before anyone relies on it

---

## 1. Executive summary

- **[ESTIMATE]** The broad "workflow automation" market is roughly **USD 25–30 billion in 2026**. Four firms put it between $24.7B and $29.9B, with forecast CAGRs of 9.4–16.6% [1][3][4].
- **[FACT]** Published sizes differ by more than 4× because of definitions, from $6.61B (automation and optimisation software) to $29.95B [4][6]. Always quote the definition with the number.
- **[FACT]** The five platforms price on different units: tasks (Zapier) [7], credits (Make) [8], executions (n8n) [11], users or bots (Power Automate) [13] and active flows or credits (Activepieces) [15]. Cost comparisons only make sense for a specific workflow.
- **[FACT]** Pricing is unstable. Make changed its paid-plan structure twice in 2026 [10], and Zapier counts successful AI steps as tasks [7].
- **[HYPOTHESIS]** The best opening for a small operations-support provider is **platform-neutral implementation**: an automation audit, a cost model and documented builds. SMB AI adoption is high [17], but businesses report needing implementation help [19].

## 2. Client question, scope and method

**Simulated client:** a small consultancy supporting 10–20 SMB clients. *"Which platform should we default to, and what services can we sell around it?"*

**Vendors in scope:** Zapier, Make, n8n, Microsoft Power Automate, Activepieces.

**Source hierarchy**
1. Vendor pricing pages (highest confidence).
2. Research-firm report listings and public summaries (full reports were not purchased).
3. Dated third-party pricing trackers, used only where a vendor page doesn't show prices in text, and marked lower confidence.

**Rules:** every figure has a source and a date. Conflicts are shown, not hidden.

## 3. Market overview

| Publisher | Scope | 2026 | Forecast | CAGR | Ref |
|---|---|---|---|---|---|
| Coherent Market Insights | Workflow automation | $29.95B | $87.74B by 2033 | 16.6% | [4] |
| Fortune Business Insights | Workflow automation | $27.91B | ≈ $65B by 2034 (as summarised) | n/a | [1] |
| Mordor Intelligence | Workflow automation | $26.01B | $40.77B by 2031 | 9.41% | [1] |
| MarkNtel Advisors | Workflow automation | $24.70B | $50.88B by 2032 | 12.8% | [3] |
| The Business Research Company | Business workflow automation | $14.96B | n/a | 14.5% (2025→2026) | [2] |
| Meticulous Research | AI workflow automation only | $10.80B | $97.9B by 2036 | 22.4% | [5] |
| 360iResearch | Workflow automation and optimisation software | $6.61B | $12.01B by 2032 | 10.44% | [6] |

- **[ESTIMATE]** The median of the four broad estimates is **≈ $27.0B** (the average of the middle two, $26.01B and $27.91B).
- **[ESTIMATE]** The AI-only subset forecast (22.4% CAGR [5]) grows faster than every broad-market forecast (9.4–16.6%). I interpret this as the AI layer outgrowing the core market. That is an inference across different methodologies, not a reported fact.
- **Caveat:** the Fortune Business Insights and Mordor figures come from a secondary summary [1].

## 4. Industry trends

1. **AI is metered like any other step.** [FACT] On Zapier, successful AI steps and tool calls consume tasks. Zapier Agents have a separate activity allowance: 400/month on Free and 1,500/month on Pro [7].
2. **Per-run pricing challenges per-step pricing.** [FACT] n8n bills per workflow execution, includes unlimited users and workflows on all plans, and lists AI agents and MCP on its Starter plan [11].
3. **Pricing volatility.** [FACT] A pricing tracker reports that Make introduced a Core/Pro/Teams ladder in June 2026, then reverted to a single paid plan in August 2026 [10]. Make's current page bills in credits and names Core, Pro and Teams [8]. [FACT] Activepieces moved its cloud product to per-active-flow pricing in 2026 [15].
4. **SMB AI adoption is broad.** [FACT] A Thryv survey (April 2026, 561 US SMB decision-makers) found 66% use AI, up from 55% a year earlier [17]. [FACT] Upwork Research Institute reports that 34% of SMB leaders are actively piloting AI agents for workflow automation [18].
5. **Implementation is the bottleneck.** [FACT] In the Goldman Sachs 10,000 Small Businesses Voices survey, 73% said more training and implementation resources would help them adopt AI [19].
6. **Suite bundling.** [FACT] Microsoft 365 includes Power Automate for standard connectors, and Premium costs $15/user/month on annual billing [13].

## 5. Competitor mapping

| Vendor | Billing unit | Entry paid plan | Hosting | Best fit |
|---|---|---|---|---|
| Zapier | Tasks (successful action steps; triggers and failed actions don't count) [7] | Professional $19.99/mo annual ($29.99 monthly), 750 tasks [7] | Cloud | Non-technical teams who need the widest app catalogue (9,000+ integrations [15]) |
| Make | Credits [8] | Free 1,000 credits [8]; paid from ≈ $9/mo annual for 10,000 credits (third-party, low confidence) [9] | Cloud | Visual multi-branch scenarios at a lower cost per step |
| n8n | Workflow executions [11] | Starter €20/mo annual, 2,500 executions [11] | Cloud or self-hosted | Technical teams, high-step or AI-agent workflows, data control |
| Power Automate | Per user / per bot [13][14] | Premium $15/user/mo annual [13]; Process $150/bot/mo [14] | Cloud + desktop RPA | Microsoft 365 organisations |
| Activepieces | Active flows / credits (changed in 2026) [15] | Conflicting reports, e.g. Plus $20/mo [16] | Cloud or self-hosted (MIT community edition [15]) | Cost-sensitive teams wanting open source |

**[HYPOTHESIS] Positioning:** from low technical skill and lower cost predictability at scale (Zapier) to high skill and high predictability (n8n). Make sits in the middle, Power Automate is predictable for Microsoft organisations, and Activepieces is close to n8n.

## 6. SWOT analysis

Strengths and weaknesses are based on the cited pricing facts. Opportunities and threats are [HYPOTHESIS].

**Zapier.** S: largest catalogue, free tier, simple model. W: every action and AI step uses tasks; the entry Pro tier is 750 tasks [7]. O: upsell of Agents and AI fields. T: per-run competitors look cheaper as workflows grow.

**Make.** S: visual builder, a free 1,000 credits [8], low entry price [9]. W: 2026 plan changes reduce cost predictability [10]. O: price-sensitive SMBs leaving per-task tools. T: buyer distrust if pricing keeps changing.

**n8n.** S: per-execution billing regardless of steps; unlimited users and workflows; self-hosting [11]. W: no permanent free cloud tier; self-hosting needs upkeep. O: multi-step AI-agent workflows. T: complexity for non-technical SMBs.

## 7. Customer segmentation

| Segment | Need | Likely fit | Service they'd buy |
|---|---|---|---|
| Solo / micro (1–10) | Simple form → email → sheet flows | Zapier or Make free tiers | One-off setup, templates |
| Non-technical SMB (11–200) | Lead routing, CRM upkeep, reporting | Zapier or Make | Audit, build, SOPs, monthly upkeep |
| Technical startups and agencies | Complex, high-volume, AI-heavy flows | n8n or Activepieces | Documentation, QA, monitoring |
| Microsoft 365 organisations | Approvals, SharePoint and Teams flows | Power Automate | Flows built within IT policy |

[ASSUMPTION] Segment sizes and willingness to pay were not measured. Validate with 10–15 discovery calls.

## 8. Pricing comparison

Full table with source URL, date and confidence per row: `data/market-research-pricing.csv`.

**Source conflict to flag:** for Make, Jet Admin (checked 26 Sep 2026) reports Core/Pro/Teams at $9/$16/$29 a month on annual billing for 10,000 credits [9]. A Zapier blog article reports Pro at $21 and Teams at $38 [20], and a tracker reports a reversion to a single plan with a 5,000-credit entry step in August 2026 [10]. **Recommendation:** check make.com in a browser on the day of advising a client.

### Workload scenario

[ASSUMPTION] Lead-routing workflow: 1 trigger + 4 actions, 1,000 runs a month. Make uses about 1 credit per module run, including the trigger.

| Platform | Units / month | Entry plan enough? |
|---|---|---|
| Zapier | [ESTIMATE] 4,000 tasks (triggers don't count) [7] | No. Pro entry is 750 tasks, so a higher tier is needed (price not captured) |
| Make | [ESTIMATE] ≈ 5,000 credits | Likely, if a 10,000-credit entry tier still applies [9] |
| n8n Cloud | [ESTIMATE] 1,000 executions | Yes. Starter includes 2,500 for €20/mo annual [11] |
| Power Automate | Not metered per run | Included with standard connectors; otherwise $15/user [13] |

## 9. Market opportunity assessment

Scoring: Total = Demand (1–5) + Fit (1–5) + (6 − Competition (1–5)).

| Opportunity | Evidence | Demand | Competition | Fit | Total |
|---|---|---|---|---|---|
| Automation audit + cost model | Pricing complexity [7][10]; 73% want implementation help [19] | 4 | 2 | 5 | **13** |
| Build and document SMB workflows | 34% piloting agents for workflow automation [18] | 4 | 4 | 4 | **10** |
| Monthly upkeep and monitoring | Plan limits and failed runs [7][11] | 3 | 3 | 4 | **10** |
| Self-hosted n8n infrastructure | Self-host option [11] | 3 | 3 | 1 | **7** |

[HYPOTHESIS] These scores are judgements to prioritise testing.

## 10. Strategic recommendations

1. **Lead with a platform-neutral automation audit:** map workflows, count steps and runs, and model cost on 2–3 platforms. *Test:* offer it to 10 clients and aim for at least 2 paid audits in 30 days.
2. **Default stack by segment:** Zapier or Make for non-technical SMBs, n8n for technical or high-step workloads, Power Automate for Microsoft 365 organisations.
3. **Keep a monthly pricing log**, and alert clients when a change affects their bill.
4. **Sell documentation with every build** (SOPs, run-books) to reduce key-person risk.
5. **Collect primary data:** 10–15 SMB interviews before fixing prices.

## 11. Limitations

- Market-size figures come from public listings and summaries, and methodologies aren't visible without buying the reports.
- Some vendor pages render prices only in the browser. Where that happened, a dated third-party source was used and marked lower confidence.
- No primary research (interviews or surveys) was conducted.

## 12. References (all accessed 19 November 2026)

1. Kissflow, "Workflow automation statistics" (summarising Mordor Intelligence and Fortune Business Insights), 2026. https://kissflow.com/workflow/workflow-automation-statistics-trends/
2. The Business Research Company, *Business Workflow Automation Market Report 2026*, ResearchAndMarkets listing, Feb 2026. https://www.researchandmarkets.com/reports/6215133/business-workflow-automation-market-report
3. MarkNtel Advisors, *Global Workflow Automation Market 2026–2032*. https://www.marknteladvisors.com/research-library/workflow-automation-market-report.html
4. Coherent Market Insights, *Workflow Automation Market*, GII listing. https://www.giiresearch.com/report/coh2052986-workflow-automation-market-by-deployment-by.html
5. Meticulous Research, *AI Workflow Automation Market 2026–2036*, Jun 2026. https://www.meticulousresearch.com/product/ai-workflow-automation-market-6718
6. 360iResearch, *Workflow Automation & Optimization Software Market*, GII listing. https://www.giiresearch.com/report/ires2017054-workflow-automation-optimization-software-market.html
7. Zapier, Pricing (machine-readable reference), last updated 19 Nov 2026. https://zapier.com/pricing.md
8. Make, Pricing. https://www.make.com/en/pricing
9. Jet Admin, "Make.com Pricing in 2026", checked 26 Sep 2026. https://www.jetadmin.io/blog/make-pricing/
10. UsagePricing, "Make collapses its Core/Pro/Teams ladder back into one Make Plan", Aug 2026. https://usagepricing.com/blueprint/activity/make-2026-08-06-packaging
11. n8n, Pricing. https://n8n.io/pricing
12. CloudZero, "n8n pricing" (monthly-billing figures). https://www.cloudzero.com/blog/n8n-pricing/
13. Softr, "Microsoft Power Automate pricing in 2026", 28 Oct 2026. https://www.softr.io/blog/power-automate-pricing
14. FlowForma, "Power Automate Pricing for Enterprise: 2026", 2 Sep 2026. https://www.flowforma.com/blog/power-automate-pricing
15. Automation Atlas, "What does Activepieces cost in 2026?", Jul 2026. https://automationatlas.io/answers/activepieces-pricing-explained-2026/
16. CostBench, Activepieces pricing, Nov 2026. https://costbench.com/software/ai-automation/activepieces/hidden-costs/
17. CPA Practice Advisor, "SMB AI Use Continues to Rise, But They Need Help" (Thryv survey), 14 Jul 2026. https://www.cpapracticeadvisor.com/2026/07/14/ai-adoption-continues-to-rise-but-70-say-they-need-more-training/186565/
18. Upwork Research Institute, "The State of AI Within SMBs in 2026" (figures from the page summary; the full page could not be retrieved). https://www.upwork.com/resources/state-of-ai-in-smbs
19. TechInformed, coverage of the Upwork Business Leader Landscape and Goldman Sachs 10,000 Small Businesses Voices surveys, 2026. https://techinformed.com/?p=38768
20. Zapier blog, "Make.com pricing". https://zapier.com/blog/make-com-pricing/
