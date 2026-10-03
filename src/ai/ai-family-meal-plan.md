---
title: I Put an AI Assistant in Charge of Family Meal Planning
date: 2026-10-03
modified: null
description: "How I used Muse to turn a chaotic pile of family dinner ideas into a real system - a recipe library, a weekly planner, a freezer inventory, and a log of what we actually liked."
layout: post.njk
tags: ['blog', 'ai']
---

Every family has the same nightly conversation. It is 5pm, everyone is hungry, and someone asks "what's for dinner?" followed by a long silence, some half-hearted suggestions, and eventually a decision made more from exhaustion than inspiration.

We had a second problem on top of that one. Over the years my family had accumulated a big, disorganized pile of meals we liked - recipes in text threads, screenshots, a few printed cards, the mental list of "oh yeah, we should make that again." Nothing in one place. Nothing searchable. And no connection between the meals we liked, the groceries we bought, and the food already sitting in our freezer.

So I did what felt natural: I asked Muse, my AI assistant, to help me build a system out of it.

## Starting with the pile

The first step was just getting everything into one document. I dictated meals rapid-fire - fish tacos, Mississippi pot roast, chicken parm, baked ziti, the orecchiette with broccoli rabe and sausage we always forget about - and Muse organized them into a recipe library sorted by category: seafood, beef, poultry, pork, pasta, sides.

That alone was worth it. For the first time, the full inventory of "things this family eats" existed in one place. About 29 dishes. Seeing them all at once was clarifying. It also made the gaps obvious - we were heavy on pasta and light on quick weeknight options.

## The weekly planner

Next came the actual planning layer: a rolling three-week planner with a dinner slot for every day. The key insight Muse brought was treating the plan as a rotation problem. With ~29 dishes in the library, we could run a four-week cycle where nothing repeats. The family had one explicit rule - no eating the same stuff every week - and the system enforces it naturally.

Real life intrudes, of course. Our first planned week ended up looking like this: Mississippi pot roast on Monday, eating out Tuesday, leftovers Wednesday, breaded chicken cutlets Thursday, pizza Friday, eating out Saturday, baked ziti Sunday. The planner handles that gracefully. "Eating out" and "leftovers" are first-class entries, not failures of the system. That matters, because a meal plan you feel guilty about is a meal plan you stop using.

## The freezer inventory

This was the part I did not expect to love. I mentioned I had a frozen chuck roast, and Muse suggested tracking everything in the freezer. So we built a freezer inventory: item, quantity, date added, and a notes column for meal ideas.

It changed how we shop. Before buying groceries, we check the freezer first. That 3-pound chuck roast became Monday's Mississippi pot roast instead of a duplicate purchase. Ground chuck, ribeye steaks, chicken bites, mashed potatoes, sausage - nine items, all visible, all with a plan attached. It is a small thing, but it closes the loop between "food we own" and "food we plan to eat," which is where most household food waste lives.

## The "meals we liked" log

The last piece is the feedback loop. Next to the planner sits a simple log: date, meal, who liked it, make it again? Every time we cook something, it gets a verdict. Over time this becomes the family's actual taste profile - not what we think we like, but what we rated.

This is the part that makes the system compound. Next month's rotation draws from the log, not just the library. Dishes that scored well come back sooner. The duds quietly disappear. Turkey chili, it turns out, is not a family favorite - it now lives in the "infrequent" category, and I did not have to be the one to break the news to anyone.

## What I learned

A few observations from building this with an AI assistant rather than in a spreadsheet by hand:

**Voice input changes the economics of capture.** Almost every addition to this system arrived as a dictated sentence while I was doing something else. "Add sausage and peppers with club rolls." "We have a frozen chuck roast." The friction of opening an app and typing is what kills most home organization systems. Talking to an assistant that just handles it is a different experience entirely.

**The assistant remembers the constraints.** Family does not love turkey chili. We shop at ShopRite, Giant, or Wegmans on Saturday nights or Sunday mornings. Pot roast gets Yukon potatoes and carrots, not rice. These tiny household facts used to live only in my head. Now they are part of the system, and every shopping list respects them automatically.

**Structure emerged from use, not from planning.** I did not sit down and design a meal planning system. I started with "put my recipes in a doc" and the inventory tracker, the liked-meals log, and the rotation logic all grew out of actual needs as they came up. The assistant proposed each piece at the moment it became useful. That is a very different - and I think better - way to build personal tooling than designing the perfect schema upfront.

**It lives where the family lives.** The whole thing is a shared Google Doc. My wife has edit access. The kids can see the plan. Nobody needs to learn a new app. The best system is the one people actually open, and for my family that is a document, not a dashboard.

There is a deeper point here that took me back years. The doc is not really a document - it is structured data wearing a document costume. The recipe library is a table. The freezer inventory is a table with typed columns. The liked-meals log is a table with a rating field. Every part of the system I described above is rows and columns; the prose around them is just comments.

That is exactly the idea behind ArchieML, the markup language the New York Times built for letting writers author structured data inside Google Docs. I worked on ArchieML years ago, and the premise was simple: non-technical people already live in documents, so instead of dragging them into a CMS, you make the document itself machine-readable. A few lightweight conventions - keys, arrays, scopes - and a Google Doc compiles down to JSON that the real system consumes.

My meal plan is ArchieML thinking applied to a household. Nobody in my family would open a database admin panel to log that the chicken cutlets were a hit. But they will open a doc. The tables are the schema; the family is the data entry team; the assistant is the compiler. I did not set out to rebuild that old idea, but once the system had three tables in it, the resemblance was hard to miss.

## The last mile: from list to doorstep

The natural next step is closing the gap between the shopping list and the actual groceries. The weekly list the system produces - grouped by produce, meat, dairy, pantry - is already in the shape a delivery app wants. The idea is simple: take the list and hand it to Instacart or Gopuff instead of walking the aisles yourself.

I work at Gopuff, so I think about this a lot. The weekly plan knows what we need, the freezer inventory knows what we already have, and the delivery app knows what is in stock right now. Stitch those three together and the Saturday grocery run mostly disappears. You review the cart, swap anything that looks off, and the food shows up. The meal plan becomes not just a plan but an order.

We are not fully there yet - right now the list still gets a human glance before it becomes a cart. But the direction is clear. The planning system produces structured output, and structured output is exactly what delivery APIs consume. The boring part of grocery shopping is a data pipeline problem, and we already built the first half of the pipeline without realizing it.

## The honest caveats

It is not magic. The recipe links are still blank in a lot of rows - I have an assistant tracking those down, but someone still has to verify them. The shopping lists need a human glance; it once put bell peppers on the list for a stir fry we had already dropped from the week. And the whole thing only works because I keep feeding it - a system like this rots fast if you stop updating it.

But that is also the point. The assistant did not replace the work of running a household. It lowered the activation energy of the unglamorous parts - capturing, organizing, remembering - far enough that the system actually exists. Before Muse, this meal plan was a vague intention. Now it is a document my family uses.

That feels like the right shape for AI in domestic life. Not a robot that cooks dinner. Just something that remembers that we do not like turkey chili.
