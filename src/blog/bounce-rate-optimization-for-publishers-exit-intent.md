---
title: Bounce Rate optimization for publishers (exit intent)
date: 2014-10-05
modified: null
description: How understanding 'exit intent' can help a news site lower its bounce rate.
art: exit_intent.png
layout: post.njk
tags: ['blog']
excludeFromSitemap: true
---

### Understanding bounce rate

First off, [according to Google Analytics](https://support.google.com/analytics/answer/1009409):
> "Bounce Rate is the percentage of single-page sessions (i.e. sessions in which the person left your site from the entrance page without interacting with the page)."

An important caveat: GA actually counts a bounce as a session with a single "pixel download" (`__utm.gif`). Events also trigger pixel downloads by default, so firing a custom event after the pageview can disguise a real bounce. You can avoid that by using ["non-interaction" events](https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide#non-interaction).

On a news site, a blog, or any site where ad impressions drive revenue, bounce rate can be a key indicator. If you haven't dug into how exit rate differs, give [Exit Rate vs Bounce Rate](https://support.google.com/analytics/answer/2525491) a read.

Why do we care? Because simply reducing bounce rate (without losing sessions) directly increases overall [pageviews](https://support.google.com/analytics/answer/2525491). Yay, goals!

### What is exit intent?

![Exit intent illustration](http://68.media.tumblr.com/6b5e8097ed06bd4d268f2f872e5015b8/tumblr_inline_ncy78dFXy41qzitrw.png)

Exit intent is a way to detect a user moving their mouse toward the top of the browser in a way that suggests they are about to leave your site. Pretty simple, actually.

### Targeting users with exit intent

Exit intent targeting is definitely not a new concept. Many e-commerce sites have used it for years, showing a popup or overlay with a discount right before you "bounce." More info at [exitintentpopup.com](http://exitintentpopup.com).

There are even a few services that will implement it on your site for you, like [OptKit](http://optkit.com), [OptiMonk](http://www.optimonk.com), [Bounce Exchange](http://bounceexchange.com), and [ExitIntent](http://exitintent.io).

Personally, I like to control and understand the JavaScript, and there's a really nice open-source implementation on GitHub: [ouibounce](https://github.com/carlsednaoui/ouibounce).

Demo:

![ouibounce demo](http://68.media.tumblr.com/0a37f5226af2b2a12ce7c2ac5ff61ba3/tumblr_inline_nczh2yCg1a1qzitrw.gif)

### Good idea for publishers?

This could all be tested on a site easily and without being invasive. The real question (for me) is how a news site or blog should use the tactic, and whether the impact would be worth the effort.

Either way, I plan to test a few different ways to entice visitors to click "one more time." Some options: breaking news, related stories, or a targeted newsletter signup.
