---
title: Crime in US Cities
date: 2016-12-31
modified: null
description:
art: crime-in-us-cities.jpg
layout: post.html
---

[insert copy here]


## Data
- ['Uniform Crime Reporting' data from ucr.fbi.gov](https://ucr.fbi.gov/crime-in-the-u.s/2015/crime-in-the-u.s.-2015/tables/table-8/table_8_offenses_known_to_law_enforcement_by_state_by_city_2015.xls/view)
- [US States & Cities via Atlas-Make](https://github.com/bradoyler/atlas-make)

<figure class="media-full">
## Map
<iframe id="iframe_map" src="/assets/widgets/crime/map.htm" frameborder="0" width="100%" scrolling="no" height="0"></iframe>
</figure>
<script>
    window.addEventListener('message', function(e) {
       console.log('message.e:', e.data);
        var $iframe = document.getElementById('iframe_map');
        var height = e.data[1];
        if (e.data[0]==='setHeight') {
            $iframe.style.height = height + 'px';
        }
    }, false);
</script>

<figure class="media-full">
## Scatterplot
<iframe id="iframe_scatterplot" src="/assets/widgets/crime/scatterplot.htm" frameborder="0" width="100%" scrolling="no" height="0"></iframe>
</figure>
<script>
    window.addEventListener('message', function(e) {
       console.log('message.e:', e.data);
        var $iframe = document.getElementById('iframe_scatterplot');
        var height = e.data[1];
        if (e.data[0]==='setHeight') {
            $iframe.style.height = height + 'px';
        }
    }, false);
</script>

## The Code
<a href='https://gist.github.com/bradoyler/1f0807a636d5159ce60bb7e90dad2714' target='blank'>gist.github.com/bradoyler/crime-in-us</a>

## Lessons learned
#### There seems to be an interesting correlation between shrinking cities and crime, which has inspired me to dig more, but more on that in 2017.   
