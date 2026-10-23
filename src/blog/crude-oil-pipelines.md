---
title: Crude Oil Pipelines
date: 2016-12-17
modified: null
description: U.S. Map of Crude Oil Pipelines
art: map-pipelines-v2.jpg
layout: post.njk
tags: ['blog']
---

Recent news about the Dakota Access Pipeline [(DAPL)](http://www.nbcnews.com/storyline/dakota-pipeline-protests/) got me looking into the public data on crude oil pipelines in the US, which led me to the [Energy Information Administration (EIA.gov)](https://www.eia.gov). They have a bunch of [interesting maps](https://www.eia.gov/maps/), but I couldn't find one specific to crude oil pipelines, so I made one.

There are also a [handful of great maps focused on the recent DAPL events](http://www.nytimes.com/interactive/2016/11/23/us/dakota-access-pipeline-protest-map.html), so go check those out too.

## Data
- [Pipeline data from EIA.gov](https://www.eia.gov/maps/layer_info-m.php)
- [US states and cities via Atlas-Make](https://github.com/bradoyler/atlas-make)

## Interactive Map
<figure class="media-full">
<iframe id="iframe_pipelines" src="/assets/widgets/pipelines.htm" frameborder="0" width="100%" scrolling="no" height="0"></iframe>
</figure>
<script>
    window.addEventListener('message', function(e) {
       console.log('message.e:', e.data);
        var $iframe = document.getElementById('iframe_pipelines');
        var height = e.data[1];
        if (e.data[0]==='setHeight') {
            $iframe.style.height = height + 'px';
        }
    }, false);
</script>

## The Code
<a href='https://gist.github.com/bradoyler/1f0807a636d5159ce60bb7e90dad2714' target='blank'>gist.github.com/bradoyler/crude-oil</a>

## Lessons learned
#### 1) Top 12 pipeline operators in the U.S. (by number of pipelines):

- ENBRIDGE (27)
-	PLAINS PIPELINE (25)
-	SUNOCO (20)
-	CENTURION PIPELINE (12)
-	SHELL (11)
-	ENTERPRISE (10)
-	PHILLIPS 66 PIPELINE (9)
-	KOCH PIPELINE (7)
-	BP PIPELINE (7)
-	GENESIS ENERGY (6)
-	HUNT CRUDE OIL SUPPLY (6)
-	EXXONMOBIL (6)

(Note: I'm still working on a list by mileage.)

#### 2) <a href='http://opsweb.phmsa.dot.gov/pipeline_replacement/by_decade_installation.asp'>48% of crude oil pipelines were installed before 1970 (PHMSA)</a>
These older pipelines are vulnerable to seam quality issues, which can lead to leaks.

*Source: [phmsa.dot.gov/pipelines](http://opsweb.phmsa.dot.gov/pipeline_replacement/by_decade_installation.asp)*
