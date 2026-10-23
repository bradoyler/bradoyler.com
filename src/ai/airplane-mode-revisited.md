---
title: "Airplane Mode, Revisited: Days of Work in 10 Minutes"
date: 2026-10-22
modified: null
description: "In 2017 I spent days building the air traffic animation for NBC News' Airplane Mode story. This week I rebuilt it with Claude Opus 5.5 in about 10 minutes and 78k tokens. Here is what changed, and what didn't."
art: airtraffic-social.jpg
layout: post.njk
tags: ['blog', 'ai']
---

![The 2017 Airplane Mode air traffic map for NBC News next to the 2026 Air Traffic rebuild](/assets/images/airtraffic-social.jpg)

In 2017, while I was on the NBC News Specials team, I worked on [Airplane Mode](https://www.nbcnews.com/specials/airplane-mode/), a long-form story. My piece of it was the animation of a day of US air traffic. Thousands of little planes leave glowing trails across a dark map of the country, the sky fills up in the morning, and it slowly empties out after midnight. It is one of those projects that looks simple, and it took me multiple days to get right.

This week I rebuilt that animation from scratch as [Air Traffic](https://airtraffic.bradoyler.com/). With Claude Opus 5.5 doing the building, it took about 10 minutes and roughly 78,000 tokens.

That number is worth dwelling on, because the interesting part is not that it was fast. It is *which* part got fast.

## What was hard in 2017

The hard part of the Airplane Mode animation was never drawing a plane on a map. Any developer can do that in an afternoon. The hard part was drawing thousands of them, sixty times a second, with trails, on whatever device a reader happened to open the story on, without turning their browser into a space heater.

A news site in 2017 could not pick its audience's hardware. A big chunk of readers came in on phones from social links. Some were on aging laptops. Internet Explorer still showed up in the analytics. Retina screens meant a canvas had to be drawn at two or three times its visible size to look sharp, which multiplies the pixel work. And a story page is not a dedicated app: the animation shared the main thread with ads, analytics, and everything else on the page.

So most of my time went into the unglamorous work of making it *not* slow:

- Figuring out how many planes the animation could show before frame rates fell apart.
- Finding ways to draw trails without issuing a separate draw call for every segment of every plane.
- Keeping the static map out of the per-frame redraw.
- Testing across browsers and devices, then going back and doing it again when one of them fell over.

None of that shows up in the final product. That is the point. If the performance work is done well, nobody notices it.

## What the rebuild looks like

The new version is about 600 lines of plain JavaScript, and the [source is on GitHub](https://github.com/bradoyler/airtraffic). It uses ES modules and d3 v7, and it has no build step. Here is what it does:

- **Data.** It uses nonstop routes between contiguous-US airports from [OpenFlights](https://github.com/jpatokal/openflights), weighted by how many airlines fly each route. The base map comes from us-atlas.
- **Flights.** It generates about 24,000 flights in the browser with a seeded random number generator. Busy routes between big airports get more daily departures. Departure times follow a typical airline-day curve in each origin's local time, and flight duration comes from great-circle distance.
- **Rendering.** Two canvases are stacked. The base map is drawn once, and only the plane layer redraws each frame.
- **Trails.** Each plane's trail is the last ~30 simulated minutes of its own path, split into ten segments that fade out. The key trick is that every segment at the same fade level, across *all* planes, goes into one batched `Path2D` and is drawn with a single stroke. So instead of hundreds of thousands of tiny draw calls per frame, there are about a dozen.
- **Interaction.** A d3 area chart of planes in the air doubles as a timeline scrubber. Hovering an airport (found with a quadtree) highlights its outbound and inbound flights. Keyboard controls and a shareable URL like `#time=18:30&airport=ATL` link straight to a moment.
- **Deploy.** It is hosted on Cloudflare Pages.

Look at that rendering section again. The batched-stroke approach, the split between the static layer and the dynamic one, and capping the device pixel ratio at 2 are exactly the problems I spent days on in 2017. This time they showed up in the first pass, already solved, alongside a working timeline, hover filtering, and a README.

## Two things changed, not one

It would be easy to tell this as a pure AI story, but that is not quite honest. Two different things got better between 2017 and 2026.

**The browsers got better.** `Path2D` works everywhere now. Canvas rendering in every modern browser is far faster than it was. Internet Explorer is gone. Phones today have more graphics horsepower than the laptops I was testing on back then. A lot of the performance wall I hit in 2017 has simply been torn down by browser vendors and hardware makers. If I wrote this by hand today, it would still go much faster than it did then.

**The model already knew the playbook.** This is the part that still surprises me. The tricks I had to work out by trial, profiling, and a lot of reloading are now standard knowledge for a model like Opus. Batch your strokes by style, keep static layers static, don't render at 3x DPR when 2x looks the same, use a quadtree for hit testing instead of looping over every airport on every mouse move. None of it is secret. It was scattered across blog posts, Stack Overflow answers, and conference talks, and you had to find it and string it together yourself. Now it all comes back at once, applied to your specific problem.

In 2017 I was the one who had to know all of that. In 2026 I mostly had to know *what I wanted*, and recognize good work when I saw it.

## What I brought to the table

The 10 minutes is real, but it rests on a lot of context that was not in the prompt.

I knew what this animation should look and feel like, because I had built it before. I knew the failure modes, starting with "too many planes and the frame rate dies." So I could tell right away whether the output was right. I knew which details mattered to a reader (the morning rush, the overnight lull, the way the East Coast lights up first) and which ones nobody would notice.

That is the same shift I wrote about in [Development Is Now About Automation, Semantics & Context](/ai/shift-in-software-development/). The mechanical work of writing the code was the part that collapsed. The judgment about what to build, and whether the result is good, did not. If anything, that judgment is now the whole job.

There is an uncomfortable flip side. Someone without that background could produce the same project in the same 10 minutes. They just would not know whether it was good. They would not know that the batched `Path2D` trick is the reason it runs smoothly on a phone, or what to check when it doesn't. Experience used to buy you speed. Now it mostly buys you the ability to evaluate.

## The honest caveats

It is a simulation, not a feed. The flights are synthetic, built from route data and a realistic daily schedule curve, not real flight tracks. And OpenFlights stopped updating its route data in 2014, so the network itself is a snapshot from that era. The original animation had its own data behind it, and this version doesn't try to recreate that.

And 10 minutes is the build time, not the whole effort. Writing this post took longer than writing the code. That is a strange sentence to type.

## Why this one stuck with me

I have used AI tools on plenty of projects at this point, and most of the speedups feel incremental: a function here, a refactor there. This one landed differently because I have a direct before-and-after. Same idea, same person, nine years apart. Multiple days of profiling and cross-browser testing on one side, about 10 minutes and 78k tokens on the other.

An animation like the one in Airplane Mode used to need a newsroom graphics team and a few days on the calendar. Now one person can do one on a weeknight because they are curious. That is good news for anyone who likes making things on the web. The bar for building something delightful just dropped to roughly "have a good idea and know what good looks like."

Go [watch the planes](https://airtraffic.bradoyler.com/), or jump to [Atlanta at 7 AM](https://airtraffic.bradoyler.com/#time=07:00&airport=ATL) to see the morning bank of departures fan out from the world's busiest airport. The code is at [github.com/bradoyler/airtraffic](https://github.com/bradoyler/airtraffic) if you want to see how it works.
