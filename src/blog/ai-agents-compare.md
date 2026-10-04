---
title: The AI Agent Land Grab - Muse, Dot, Claude Code, Copilot, and Gemini Compared
date: 2026-10-04
modified: null
description: "Five AI agents, five different bets on who you are and what you'll pay for. Traction, architecture, pricing, and target customer for the biggest names in agentic AI - plus the money behind them."
layout: post.njk
tags: ['blog', 'ai']
---

Everyone is shipping an AI agent in 2026. But they're not shipping the same product. After watching this space all year, here's how I see the five serious contenders breaking down: what traction they actually have, how their agents work under the hood, what they charge, and who they're really built for.

## The money behind the agents

Before the products, the balance sheets. The agent race is being funded at a scale that makes the cloud wars look quaint:

| Company | Revenue run rate | Valuation | Status |
| --- | --- | --- | --- |
| OpenAI | ~$70B (Sept 2026) | $1.4T (seeking $30B round) | IPO delayed to 2027 |
| Anthropic | $65B (Jul 2026), heading to $100B | ~$2T (IPO prep) | Potentially largest IPO ever |
| Meta | - | $1.9T+ market cap | Muse launch added ~$192B in a day |
| Microsoft | - | - | 30M+ paid Copilot seats |
| Google | - | - | Gemini bundled into Workspace/Android |

OpenAI's revenue run rate nearly doubled in a single quarter this summer, driven by enterprise sales. Anthropic went from $9 billion at the start of 2026 to a $65 billion pace by July. Both are burning staggering amounts of cash on compute - OpenAI's projected 2026-2030 compute bill alone is $856 billion. The agent products below are how they plan to earn it back.

## Muse (Meta)

**Traction:** Launched September 8, 2026 in the US for adults 18 and over. Over 500,000 users in the first week, roughly 2.8 million downloads in the first two weeks, and it hit #1 on the US App Store ahead of ChatGPT. Meta's stock jumped 11% on the launch news, adding about $192 billion in market value in a single day. The numbers are real, though they say more about Meta's distribution muscle - billions of Instagram and WhatsApp accounts to promote to - than about product-market fit so far.

**Approach:** Muse runs in its own Secure VM: an isolated computer and browser, with Sentinel monitoring watching for misuse. It asks before taking sensitive actions. The architecture is genuinely ahead of the "just trust the chatbot" pack - the agent gets its own machine rather than running loose in yours.

The connector list is where Muse earns the "personal agent" title: Asana, Slack, Shopify, Notion, Zoom, Stripe, QuickBooks, Canva, Dropbox, Figma, and more. On September 29, Meta added Muse for Small Business with connectors aimed at companies. Under the hood it runs on Muse Spark 1.3, which Meta opened via a Model API that's drop-in compatible with the OpenAI SDK - a smart play to poach developers already set up for OpenAI.

One notable wrinkle: Meta openly admitted Muse draws heavy inspiration from OpenClaw, an open-source project that predates it. Some file names and contents are reportedly nearly identical. For a company of Meta's size to ship something and credit the open-source homework is unusual, and worth watching.

**Pricing:** Free for most uses, with Power at $20/month and Maximum at $100/month for heavier use.

**Target customer:** Consumers first - errands, shopping, scheduling, pulling dates out of email into a family calendar, the tedious parts of daily life. The Small Business push suggests Meta sees the same agent working for companies that live in those connected apps.

## Dot (OpenAI)

**Traction:** Dot launched September 30, 2026 at OpenAI's developer day, so it's days old as I write this. But it rides on ChatGPT's base of over 1.2 billion weekly users, up from 1 billion in the summer. The context that matters is what came before.

**The Operator cautionary tale:** OpenAI's original agent, Operator, launched in January 2025 as a browser-automation agent and was one of the most talked-about launches of that year. It was folded into the new ChatGPT agent in July 2025, and the standalone Operator app shut down that August. The ChatGPT agent itself was then removed from ChatGPT in early August 2026, and the ChatGPT Atlas browser was sunset on August 9, 2026. As of September 2026, the capability survived only through a cloud browser on OpenAI's servers, a Chrome extension, and a desktop app - not a product called Operator.

Dot is the third attempt at the same idea in under two years. That's not a scandal, it's a pattern, and it's the single most important thing to understand if you build on a vendor's agent: keep an abstraction layer and an exit path, because the product you're integrating with today may not exist next year.

**Approach:** Dot is an always-on agent powered by GPT-6 Astra. You message or talk to it through ChatGPT, Slack, or Microsoft Teams (text messaging planned later). It operates a computer, pulls from connected apps, does research, drafts documents, and writes code. Users set the permissions up front - each person decides how much responsibility to hand over. OpenAI's engineers reportedly already use it internally to fix dozens of bugs a day.

The Slack and Teams integration is the tell: OpenAI wants Dot inside the workday, not just the browser tab. They're also testing a professional version for enterprise use cases like email marketing, accounting, and legal analysis.

**Pricing:** A new $500/month high-end plan launched alongside Dot with higher usage limits and faster processing. Usage limits on some $200 plans were reduced at the same time - OpenAI is clearly pushing its heaviest users upmarket.

**Target customer:** Everyone ChatGPT already has, plus enterprise. With 1.2 billion weekly users as the top of funnel, Dot doesn't need to win new users - it needs to convert existing ones into agent users.

## Claude Code (Anthropic)

**Traction:** This is the revenue story of the year. Generally available since May 2025, Claude Code passed $2.5 billion in run-rate revenue by early 2026, roughly a year after launch, up from $1 billion in November 2025. Weekly active users doubled in the first months of 2026; business subscriptions quadrupled. Enterprise customers generate more than half of Claude Code revenue. Claude holds an estimated 54% of the enterprise coding-model market versus OpenAI's 21%, and Anthropic counts 8 of the Fortune 10 as customers, with over 1,000 customers spending more than $1 million a year.

The broader context: Anthropic as a whole went from a $9 billion run rate at the start of 2026 to $65 billion by July, heading toward $100 billion, with 40% of enterprise LLM spend. It's preparing what could be the largest IPO in history.

**Approach:** Terminal-based agentic coding. Claude Code reads your codebase, plans a sequence of actions, executes them using real development tools, evaluates the result, and adjusts its approach. The developer sets the objective and retains control over what gets committed, but the execution loop runs independently. The average user now spends about 20 hours a week working with it.

The detail that stuck with me: this is the first year Anthropic's own internal pull requests have inflected upward due to Claude's work on the company's own codebase. The tool Anthropic sells to developers is now a material contributor to Anthropic's own engineering output. That's a feedback loop competitors without a comparable product can't easily replicate.

Anthropic has also been investing in the supervision layer - they hired Chrome veteran Addy Osmani specifically to work on developer experience for Claude Code, exposing enough context for developers to oversee agents without inspecting every token.

**Pricing:** Usage-based through the API and team/enterprise plans rather than a flat consumer subscription. The money is in enterprise contracts, not $20/month seats.

**Target customer:** Developers and enterprise engineering teams, full stop. The most vertically focused product on this list, and it's winning precisely because of that focus. Software development is about 37% of business-context Claude conversations.

## Microsoft Copilot

**Traction:** Over 30 million paid Microsoft 365 Copilot seats as of Q4 FY2026 (reported July 2026), with seat growth more than doubling quarter over quarter. At $30 per user per month on top of a qualifying Microsoft 365 plan, that's a serious enterprise business - and it's still growing fast.

**Approach:** Copilot is grounded in the Microsoft Graph: files, email, meetings, calendars, Teams data, all while respecting existing permissions. It's embedded directly in Word, Excel, PowerPoint, and Outlook rather than living in a separate app. Copilot Studio lets companies build their own agents on top of the platform, and the newer Cowork product extends it further.

Microsoft's edge is the control plane: enterprise deployment, sensitivity labels, retention policies, audit logs, and a Copilot Control System built specifically for data protection. It's the only agent on this list your CIO already knows how to govern. Microsoft has also started broadening the models available through Copilot - Claude and GPT models have both appeared in recent updates - which suggests they're positioning Copilot as the interface layer regardless of whose model is underneath.

**Pricing:** $30/user/month for Microsoft 365 Copilot (annual commitment), on top of a qualifying M365 plan. Business tier starts around $18-21/user/month.

**Target customer:** Enterprise knowledge workers in Microsoft shops. If your company runs on Microsoft 365, Copilot is the default, and Microsoft knows it.

## Gemini (Google)

**Traction:** Google doesn't break out agent-specific numbers, which is itself a signal - Gemini's agent capabilities are a feature of the ecosystem, not a standalone P&L. The footprint is enormous: woven through Workspace (Gmail, Docs, Drive, Meet, Sheets), shipped on Android, with Gemini Enterprise and Workflow Builder reaching general availability in September 2026.

**Approach:** Workspace-native agents plus Deep Research, with connected apps pulling in Gmail, Drive, Docs, and Calendar. The newer Gemini Spark agent handles autonomous tasks on web, mobile, and Mac (notably not the Windows app at launch). Google's play is the mirror image of Microsoft's: the agent wins by living where your work already lives.

The honest caveat: Google's consumer data posture is the weakest of the group. Data from connected email and files may be used to personalize and in some cases train models. Microsoft's enterprise data protection explicitly excludes training on your Graph data. Worth knowing if you're choosing between them.

**Pricing:** Workspace Business Standard at $14/user/month; Gemini Enterprise from $30/user/month. Consumer Gemini AI Pro at $19.99/month.

**Target customer:** Google Workspace organizations and Android consumers. If Copilot is for Microsoft houses, Gemini is for Google houses.

## Head to head

| | Muse | Dot | Claude Code | Copilot | Gemini |
| --- | --- | --- | --- | --- | --- |
| Traction signal | 2.8M downloads in 2 weeks | 1.2B ChatGPT weekly users | $2.5B run-rate revenue | 30M+ paid seats | Workspace + Android footprint |
| Approach | Secure VM + app connectors | Always-on, permissioned | Terminal-based coding agent | Graph-grounded, M365-native | Workspace-native agents |
| Pricing | Free / $20 / $100 | Up to $500/mo tiers | Usage + enterprise contracts | $30/user/mo | $14-30/user/mo |
| Target customer | Consumers, small business | Consumers, enterprise | Developers, enterprise eng | Microsoft enterprises | Google orgs, Android users |
| Maturity | Weeks old | Days old (3rd attempt) | 1+ year, profitable shape | 2+ years, scaling | Feature of ecosystem |

## The pattern

**The vertical agent is winning on revenue.** Claude Code makes more money than the rest of this list combined, and it does exactly one thing: write code with developers. The horizontal "do anything" agents are still proving they can convert users into dollars. Nobody has shown that millions of consumer downloads turn into a durable, paying habit yet.

**Distribution beats product.** Muse hit #1 on the App Store in a week because Meta can put it in front of billions of people. ChatGPT's 1.2 billion weekly users are the reason Dot matters on day one. The best agent doesn't win; the best-distributed one does.

**The enterprise is being carved up by ecosystem, not by merit.** Copilot owns Microsoft shops, Gemini owns Google shops, Claude Code owns engineering orgs. Nobody is winning the enterprise in general - they're winning it one stack at a time. The "winner" is whichever one you already live inside.

**Vendor agents are mortal.** Operator launched, merged, and vanished in under two years. If you're building workflows on someone else's agent, keep an abstraction layer and an exit path. The company selling you the agent today may sunset it tomorrow and sell you its replacement the day after.

My bet: the consumer agent race is still wide open, because downloads aren't habits and habits aren't revenue. The enterprise race is mostly over, and it was won by whoever already owned the workflow. And the most interesting company in this whole list might be Anthropic - the only one whose agent is both the product and the factory that builds the product.
