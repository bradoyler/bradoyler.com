---
title: My “Key Management Principles” (KMP)
date: 2013-07-23
modified: null
description: YAGNI, KISS, Occam’s razor & Agile are my best lessons learned.
art: article.png
layout: post.njk
tags: ['blog']
excludeFromSitemap: true
---

~~ re-post from Nov 2008 ~~

Below are a few of the main principles I try to practice on a daily basis and also try to pass on to people I work with. The prime reason for this; is that they are based on common sense and haven’t proved to be wrong yet. Some of the principles below may seem solely oriented towards software development, but they also apply to an agile project management style.

YAGNI
YAGNI, short for ‘You Ain’t Gonna Need It’, suggests to that they should not add functionality until it is necessary. Ron Jeffries writes, “Always implement things when you actually need them, never when you just foresee that you need them.”
The temptation to add features that are not necessary at the moment, but might be in the future, has the following disadvantages:
• The time spent is taken from adding, testing or improving necessary functionality.
• The new features must be debugged, documented, and supported.
• Any new feature imposes constraints on what can be done in the future, so an unnecessary feature now may prevent implementing a necessary feature later.
• Until the feature is actually needed, it is difficult to fully define what it should do and to test it. If the new feature is not properly defined and tested, the unnecessary feature may not work right, even if it eventually is needed.
• It leads to code bloat; the software becomes larger and more complicated.
• Unless there are specifications and some kind of revision control, the feature may not be known to programmers who could make use of it.
• Adding the new feature may suggest other new features. If these new features are implemented as well, this may result in a snowball effect towards feature creep.

KISS
The K.I.S.S. principle or “Keep It Simple Stupid”, states that design simplicity should be a key goal and unnecessary complexity avoided. It serves as a useful principle in a wide array of disciplines, such as software development, animation, journalism, photography, engineering, and strategic planning.
“Everything should be made as simple as possible, but no simpler.” – Albert Einstein

Occam’s razor
Occam’s razor, often paraphrased as “All other things being equal, the simplest solution is the best.” In other words, when multiple competing theories are equal in other respects, the principle recommends selecting the theory that introduces the fewest assumptions and postulates the fewest entities. It is in this sense that Occam’s razor is usually understood.

Last Responsible Moment
The key is to make decisions as late as you can responsibly wait because that is the point at which you have the most information on which to base the decision. In software design it means you forgo creating generalized solutions or class structures until you know that they’re justified or necessary.
Making decisions at the Last Responsible Moment isn’t procrastination; it’s inspired laziness. It’s a solid, fundamental risk avoidance strategy. Decisions made too early in a project are hugely risky. Early decisions often result in work that has to be thrown away. Even worse, those early decisions can have crippling and unavoidable consequences for the entire future of the project.

Core Principles of Agile
1. Individuals and interactions over processes and tools
2. Working software over comprehensive documentation
3. Customer collaboration over contract negotiation
4. Responding to change over following a plan

(Source: brad.w3portals.com)
