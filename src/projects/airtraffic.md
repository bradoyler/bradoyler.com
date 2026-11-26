---
title: Air Traffic
date: 2026-10-22
modified: null
project:
  url: https://airtraffic.bradoyler.com
description: A canvas and D3 animation of a simulated day of US domestic flights
art: airtraffic-social2.jpg
layout: post.njk
tags: ['projects']
---

![Air Traffic US domestic flights canvas animation](/assets/images/airtraffic-social2.jpg)

[Launch Air Traffic](https://airtraffic.bradoyler.com/) | [Read the write-up](/ai/airplane-mode-revisited/)

Air Traffic is a standalone canvas + D3 v7 animation of a simulated 24-hour day of US domestic flights, rebuilt from scratch as a modern take on the 2017 air traffic map I built for NBC News' *Airplane Mode*.

## Highlights

- **Two-layer canvas rendering:** A static Albers USA base map sits on one canvas while thousands of flights and glowing great-circle trails animate on a second canvas at 60 fps.
- **Interactive timeline & playback:** Scrub across any time of day, pause or step, and switch playback speeds (`5m/s`, `15m/s`, `30m/s`, `1h/s`).
- **Airport filtering & deep links:** Click any airport to isolate its departures and arrivals, or jump straight to a moment like [Atlanta at 7 AM](https://airtraffic.bradoyler.com/#time=07:00&airport=ATL).
- **Zero build step:** About 600 lines of plain ES modules loading D3 and TopoJSON from CDN, hosted on Cloudflare Pages from `sites/airtraffic/` in this repo.
