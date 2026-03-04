---
title: Development Is Now About Automation, Semantics & Context
date: 2026-03-04
modified: null
description: The Shift Is Real. Writing code is no longer the core skill, learn how automation, semantics, and context are redefining how we build software.
art: mar03-social-image.jpg
layout: post.njk
tags: ['blog', 'ai']
---

For most of my career, writing software meant writing code. You opened a file, reasoned through a problem, typed out a solution line by line, and shipped it. The craft lived in the syntax, the careful construction of logic that a machine could execute.

That era isn't over, but it's no longer the center of gravity.

Something more fundamental has changed. The work of building software is increasingly about *what you mean*, *what the system knows*, and *what it can do without you*. Automation, semantics, and context have moved from supporting concepts to core competencies. If you're still optimizing primarily for how fast you can write code, you're optimizing for the wrong thing.

## We've Been Here Before

This isn't the first time the ground shifted under developers' feet.

Around 2008–2012, cloud computing and SaaS rewrote the rules of the industry in a similar way. Before that wave, software teams spent enormous energy managing their own infrastructure, provisioning servers, babysitting deployments, maintaining databases on bare metal. That *was* the job, just as much as writing application logic.

Then AWS, Heroku, and a wave of SaaS tooling showed up and said: *you don't have to do that anymore.* Suddenly, spinning up a server was an API call. Storage was someone else's problem. Authentication, email delivery, payments, search, all available as services. The craft didn't disappear, but where you spent your attention fundamentally changed. Teams that clung to on-premises infrastructure as a point of pride fell behind. The developers who thrived were the ones who learned to compose services, reason about systems, and stop rebuilding solved problems.

What the Cloud/SaaS wave took off the plate was *infrastructure management*. What the current AI wave is taking off the plate is *mechanical code production*. Different layer, same pattern: a whole category of work gets abstracted away, and the job evolves upward.

## Automation Isn't a Feature Anymore, It's the Architecture

We used to talk about automation as something you bolt on: CI/CD pipelines, test runners, deployment scripts. Useful scaffolding around the real work. Now automation is baked into the tissue of development itself.

Developers' roles are shifting away from writing code toward curating prompt libraries, setting AI policies, and providing high-level strategic oversight. That's a dramatic reframing. The person who once wrote the function is now the person who defines the intent, reviews the output, and makes the judgment call about whether it's right.

AI-ready platforms now offer context-aware recommendations, which tests to run, which security rules apply, enforce policy-as-code, and integrate AI assistants directly into workflows. The pipeline has gotten smart. It's not just running your code; it's reasoning about it.

But here's the tension, and it echoes what happened with cloud adoption too: automation rewards discipline. It doesn't substitute for it. If your foundations are strong, you get faster. If things are messy, you might ship faster… into more problems. Teams that adopted the cloud without cleaning up their architecture just distributed their mess across more regions. The same trap exists today with AI-driven automation.

## Semantics: Meaning Is the New Interface

Here's what I think gets underappreciated in the conversation about AI and development: the bottleneck has shifted from *syntax* to *semantics*.

Any competent model can write syntactically correct code. What's hard, what separates good output from bad, is whether the system understands what the code is *supposed to do* in context. Does "revenue" mean gross or net? Does "active user" mean logged in today, or in the last 30 days? These are semantic questions, not syntactic ones.

A semantic layer translates complex data into business-friendly terms, so words like "revenue," "active customer," or "incident severity" mean the same thing everywhere. That kind of shared meaning used to live in people's heads, passed around in Slack threads and tribal knowledge. Now it needs to be explicit, codified, and machine-readable.

This too has a cloud-era parallel. When SaaS products proliferated, teams suddenly had to think hard about data contracts and API schemas, because you were now integrating with systems outside your control, and a mismatched field name could break a whole pipeline. Semantics started mattering at the integration layer. Now they matter everywhere, because AI is integrating with *everything*.

Modern AI systems understand not just syntax but the broader context of an entire project, analyzing codebases, coding patterns, and project architecture to provide suggestions that match the development style. That's a semantic operation. It's the system asking: *what does this codebase mean?* Not just: *what does this code say?*

Developers who thrive in this environment are the ones who can articulate meaning precisely. Writing a great prompt is an act of semantic clarity. Defining what done looks like for an AI agent is a semantic contract. The skill is less about knowing how to express logic in a programming language and more about knowing how to express *intent* in a way that can be reliably acted upon.

## Context Is the New Currency

If semantics is about meaning, context is about *scope*. And in modern software development, context engineering has become one of the most important practices no one was trained for.

Effectively communicating with AI models is the key to doing good work. The more background AI tools are given about a project, the better the code they generate will be. Developers have to understand both how to manage what the AI knows about their project, context engineering, and how to communicate it, prompt engineering.

This is genuinely new territory. We've spent decades learning how to structure code so compilers can understand it. Now we're learning how to structure *information* so AI can act on it. That means thinking carefully about what's in the window, what's in the memory, what's in the retrieval system, and what's simply absent.

Agentic AI systems demonstrate autonomous capabilities that include understanding project context, suggesting architectural improvements, and maintaining consistency with existing codebases. The better the context you provide, the better the agent performs. Garbage in, garbage out, but now the "garbage" is often incomplete or ambiguous framing rather than bad logic.

## What This Means for How We Work

None of this makes developers obsolete. It makes the cognitive parts of the job more important, and the mechanical parts less so.

The same was true after the cloud shift. Sysadmins who only knew how to rack servers struggled. But engineers who understood systems, reliability, and scale? They became more valuable, not less, because the abstraction raised the floor for everyone and the ceiling for those who could think clearly about the new layer.

We're at that same inflection point now. The work is shifting toward: defining clear specifications, maintaining shared semantic layers, engineering context deliberately, reviewing AI output with judgment, and making architectural decisions that AI can't make alone. System architecture design, task planning, context-rich prompt engineering, and orchestration belong to the human; the mind-numbing drudgery belongs to AI.

That's a reasonable division of labor. But it requires a different kind of developer fluency, one built on clarity of thought over speed of typing.

The teams that are winning right now aren't the ones with the most engineers writing the most code. They're the ones who've gotten good at saying precisely what they want, building systems that encode shared meaning, and designing automation that can act on both.

Cloud computing took infrastructure off your plate. AI is taking mechanical code production off your plate. Both times, the job got harder in the ways that matter and easier in the ways that were never really the point.

Syntax got us here. Semantics and context are what comes next.