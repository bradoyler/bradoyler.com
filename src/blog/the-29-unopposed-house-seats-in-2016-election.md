---
title: The 29 Unopposed House seats in 2016 Election
date: 2016-12-05
modified: null
description: U.S. Map of the 115th Congress
art: map-unopposed.jpg
layout: post.njk
tags: ['blog']
---

I'm fairly new to the world of election data, but while working on [the 2016 elections for NBC News](http://www.nbcnews.com/politics/2016-election/house), I stumbled on one interesting fact: 29 House seats went unopposed. I wanted to understand why that happens. Half a dozen ill-informed Google searches later, I had nothing.

The logical next step (for me) was to make a static map. I used TopoJSON from [Atlas-Make](https://github.com/bradoyler/atlas-make/tree/master/us-congress-census) and the final House results from the [AP Elections API](https://developer.ap.org/ap-elections-api), and rendered them together with [D3Node](https://github.com/bradoyler/d3-node).

## The Data
- [CSV of the 29 races with only one candidate](https://github.com/bradoyler/d3-node/blob/master/examples/data/unopposed-house-2016.csv)
- [TopoJSON of the 115th Congressional Districts with US states](https://github.com/bradoyler/d3-node/blob/master/examples/data/congress-115-states.json)

## The Map
<img alt='Map of the 29 unopposed House seats in 2016' src='https://cloud.githubusercontent.com/assets/425966/21755664/572f8a96-d5e5-11e6-889a-584e3369aaa9.jpg' />

## The Code
<a href='https://github.com/bradoyler/d3-node/blob/master/examples/map-congress-unopposed.js' target='blank'>github.com/bradoyler/d3-node/examples/map-congress-unopposed.js</a>

## Lesson learned
It turns out every single unopposed race had an incumbent running, which was the most telling piece of data and more or less answered my original question. Still, I thought this map might be useful to someone, or even inspire someone to run for office!
