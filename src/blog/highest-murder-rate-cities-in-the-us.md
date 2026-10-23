---
title: Highest Murder Rate Cities in the US
date: 2017-11-16
modified: null
description: A look at homicide across cities in America
art: crime-in-us-cities.jpg
layout: post.njk
tags: ['blog']
---

By combining the number of murders in large cities (over 250k people) with their populations, we can calculate each city's murder rate per 100k residents.

A map alone doesn't show the pattern very well, so I added scatterplots below that show how murder rates cluster. Of course, murder rate alone doesn't give the full picture of crime in a city, but I'm saving that for another post.

## Data
The FBI releases a yearly [Crime in the US](https://ucr.fbi.gov/crime-in-the-u.s) report with a breakdown of crimes for each city.

Murder rate is the number of murders per 100k residents.
#### Data sources:
- [Offenses known to law enforcement (2016)](https://ucr.fbi.gov/crime-in-the-u.s/2016/crime-in-the-u.s.-2016/tables/table-6/table-6.xls/view) - FBI.gov Uniform Crime Reporting (UCR) database.
- [Offenses known to law enforcement (2015)](https://ucr.fbi.gov/crime-in-the-u.s/2015/crime-in-the-u.s.-2015/tables/table-8/table_8_offenses_known_to_law_enforcement_by_state_by_city_2015.xls/view) - FBI.gov (UCR)
- US States (TopoJSON) via [Atlas-Make/us-states](https://github.com/bradoyler/atlas-make/tree/master/us-states)
- US Cities via [Atlas-Make/us-cities](https://github.com/bradoyler/atlas-make/tree/master/us-cities)

## Map - US Cities by Murder Rate
<figure class="media-full">
<iframe id="iframe_map" src="/assets/widgets/crime/map.htm" frameborder="0" width="100%" scrolling="no" height="0"></iframe>
</figure>

## Scatterplots - Murders over Population (2015 - 2016)
<h3>2016</h3>
<figure class="media-full">
<iframe id="iframe_scatterplot" src="/assets/widgets/crime/scatterplot2016.htm" frameborder="0" width="100%" style="height:500px;" scrolling="no" height="0"></iframe>
</figure>
<h3>2015 </h3>
<figure class="media-full">
<iframe id="iframe_scatterplot" src="/assets/widgets/crime/scatterplot2015.htm" frameborder="0" width="100%" style="height:500px;" scrolling="no" height="0"></iframe>
</figure>


<script>
    window.addEventListener('message', function(e) {
       console.log('message.e:', e.data);
        var $iframe = document.getElementById('iframe_map');
        var height = e.data[1];
        if (e.data[0]==='setHeight' && e.data[2].indexOf($iframe.src) > -1) {
            $iframe.style.height = height + 'px';
        }
    }, false);
</script>

## The Code
<a href='http://bl.ocks.org/bradoyler/5adf1567be59283d3e882035e0371ed1' target='blank'>gist.github.com/bradoyler/crime-in-us</a>

## Lessons learned
1) There seems to be an interesting correlation between violent crime and shrinking cities. Detroit, Baltimore, New Orleans, and St. Louis have all lost a dramatic share of their population over the past 20-30 years. I'm hoping to dig into that soon.

2) The FBI releases each year's report pretty late (in September), so I want these charts ready to update when next year's comes out. FiveThirtyEight has also collected partial data for 2016.

3) [FiveThirtyEight](http://fivethirtyeight.com/features/murders-rose-at-their-fastest-pace-in-a-quarter-century-last-year/), [The Washington Post](https://www.washingtonpost.com/graphics/national/2015-homicides/), and [The New York Times](http://www.nytimes.com/interactive/2016/09/08/us/us-murder-rates.html) have all published great insights on recent crime and homicide trends.

4) The FBI also publishes a report on the weapons used in homicides, but it only seems to be available by state. The state data is also often marked "Limited supplemental homicide data received," so the numbers can be way off. [See Alabama, for example](https://ucr.fbi.gov/crime-in-the-u.s/2015/crime-in-the-u.s.-2015/tables/table-20).
