---
title: My “Key Management Principles” (KMP)
date: 2013-07-23
modified: null
description: YAGNI, KISS, Occam’s razor & Agile are my best lessons learned.
art: kmp-social.jpg
layout: post.njk
tags: ['blog']
excludeFromSitemap: true
---

*Reposted from November 2008.*

Below are a few of the principles I try to practice every day and pass on to the people I work with. I keep coming back to them because they are based on common sense and haven’t been proven wrong yet. Some of them may seem aimed only at software development, but they apply just as well to an agile style of project management.

## YAGNI

YAGNI, short for “You Ain’t Gonna Need It,” says you should not add functionality until it is necessary. As Ron Jeffries puts it, “Always implement things when you actually need them, never when you just foresee that you need them.”

Adding features that aren’t needed now, but might be someday, has these disadvantages:

- The time spent is taken away from adding, testing, or improving the functionality you actually need.
- The new features must be debugged, documented, and supported.
- Every new feature constrains what can be done in the future, so an unnecessary feature now may block a necessary feature later.
- Until a feature is actually needed, it is hard to define what it should do or how to test it. A feature that isn’t well defined and tested may not work right, even if it is eventually needed.
- It leads to code bloat: the software becomes larger and more complicated.
- Without specifications and some kind of revision control, other programmers who could use the feature may never know it exists.
- One new feature tends to suggest others. If those get built too, you can snowball into feature creep.

## KISS

The KISS principle, “Keep It Simple, Stupid,” says that simplicity should be a key design goal and unnecessary complexity should be avoided. It is useful in a wide range of disciplines, including software development, animation, journalism, photography, engineering, and strategic planning.

> “Everything should be made as simple as possible, but no simpler.” – Albert Einstein

## Occam’s razor

Occam’s razor is often paraphrased as “All other things being equal, the simplest solution is the best.” In other words, when competing theories are equal in other respects, pick the one that makes the fewest assumptions.

## Last Responsible Moment

Make decisions as late as you responsibly can, because that is when you have the most information to base them on. In software design, it means holding off on generalized solutions or class structures until you know they are justified.

Making decisions at the Last Responsible Moment isn’t procrastination; it’s inspired laziness, and a solid, fundamental way to avoid risk. Decisions made too early in a project are hugely risky. They often produce work that has to be thrown away. Even worse, they can have crippling, unavoidable consequences for the rest of the project.

## Core Principles of Agile

1. Individuals and interactions over processes and tools
2. Working software over comprehensive documentation
3. Customer collaboration over contract negotiation
4. Responding to change over following a plan

*(Originally posted at brad.w3portals.com)*
