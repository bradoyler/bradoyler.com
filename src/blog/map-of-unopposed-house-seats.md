---
title: The 29 unopposed house seats in 2016 election
date: 2016-12-05
modified: null
description: map of the 115th congress
art: map-congress-unopposed.png
layout: post.html
---

I'm somewhat new to the world of election data, but one piece of data I stumbled upon while working on [the 2016 Elections for NBC News](http://www.nbcnews.com/politics/2016-election/house), was that 29 house seats went unopposed. I thought this was pretty interesting and wanted to understand why this happens. After half a dozen ill-informed google searched, I came up with nothing.

Logical next step (for me) was to create a static map using topojson from [Atlas-Make](https://github.com/bradoyler/atlas-make/tree/master/us-congress-census), the final House results from the [AP Election API](https://developer.ap.org/ap-elections-api) and render all the data together using [D3Node](https://github.com/bradoyler/d3-node)

## The Data
- [CSV of the 29 races that only have 1 candidate](https://github.com/bradoyler/d3-node/blob/master/examples/data/unopposed-house-2016.csv)
- [115th Congressional Districts with US States Topojson](https://github.com/bradoyler/d3-node/blob/master/examples/data/congress-115-states.json)

## The Map
<img style='background:#ccc;' class='svg' src='/assets/images/map-unopposed-house.svg' />

## The Code
<a href='https://github.com/bradoyler/d3-node/blob/master/examples/map-congress-unopposed.js' target='blank'>github.com/bradoyler/d3-node/examples/map-congress-unopposed.js</a>

## Lesson learned
Well, it turns out every single unopposed race was the incumbent so this was actually the most telling piece of data that sort of answered my initial question. But still, thought this map might serve someone well or even inspire someone to run for office!?!
