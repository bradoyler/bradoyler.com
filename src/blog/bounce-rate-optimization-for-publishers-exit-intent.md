---
title: Bounce Rate optimization for publishers (exit intent)
date: 2014-10-05
modified: null
description: how understanding 'exit intent' can optimize a news site
art: exit_intent.png
layout: post.njk
tags: ['blog']
---

### Understanding Bounce rate

First off, [according to Google Analytics](https://support.google.com/analytics/answer/1009409):
> "Bounce Rate is the percentage of single-page sessions (i.e. sessions in which the person left your site from the entrance page without interacting with the page)."

Important caveat: Bounce rate in GA is actually calculated as a single "pixel download" (_utm.gif) per session. So if you trigger a subsequent custom event, you could be inadvertently disguising an actual bounce since events also trigger pixel downloads by default. You can override this behavior by using ["non-interaction" events](https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide#non-interaction).

On a news site, blog, or any site where Ad impressions are a revenue producing goal, Bounce Rate can be a key indicator. If you haven't really dug into how Exit Rates differ, you should give [Exit Rate vs Bounce Rate](https://support.google.com/analytics/answer/2525491) a read.
Why do we care? Because by simply reducing bounce rate (without decreasing user sessions) we would directly increase overall [Pageviews](https://support.google.com/analytics/answer/2525491). Yay Goals!

### What is Exit Intent?
![img](http://68.media.tumblr.com/6b5e8097ed06bd4d268f2f872e5015b8/tumblr_inline_ncy78dFXy41qzitrw.png)

Exit Intent is just a way to detect a user navigating towards the top of the browser in a way that suggests they are about to leave your website. Pretty simple actually.

Targeting users with "Exit Intent"

"Exit Intent Targeting" is definitely not a new concept… a lot of e-commerce sites have been using this tactic for many years by displaying a popup or overlay window to offer some discount right before you "bounce". More info at http://exitintentpopup.com

There are even quite a few services on how to implement this concept on your site, like [OptKit](http://optkit.com), [OptiMonk](http://www.optimonk.com), [Bounce Exchange](http://bounceexchange.com) & [ExitIntent](http://exitintent.io)

Personally, I like having control/understanding of the javascript, so a really nice implementation is available on GitHub @ https://github.com/carlsednaoui/ouibounce

DEMO:
![demo](http://68.media.tumblr.com/0a37f5226af2b2a12ce7c2ac5ff61ba3/tumblr_inline_nczh2yCg1a1qzitrw.gif)

### Good idea for publishers?
So this is all cool stuff that COULD be easily tested on your site in a non-invasive way, but the real question (for me) is how this tactic should be used on a news site or blog and whether the impact would be worth the effort.

Either way, I plan to test out this technique in a few different ways to entice visitors to click "one more time". Possible techniques could use: 'Breaking News', related stories, or a targeted newsletter signup.