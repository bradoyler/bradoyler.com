---
title: Highest Murder Rate Cities in the US
date: 2016-12-31
modified: null
description: A look at homicide across cities in America
art: crime-in-us-cities.jpg
layout: post.html
---

By using the number of murders in large cities (over 250k) combined with their population, we can determine the murder rate (per 100k residents) in those cities.

I realized that geography doesn't give a great representation so I added a scatterplot below to show how the murder rates are clustered. Of course, murder rate alone doesn't give the full picture of crime in a city, but I'm saving that for another post.

## Data
The FBI releases a yearly [Crime in the US](https://ucr.fbi.gov/crime-in-the-u.s) report which gives a breakdown of crimes for each city.

Murder rate is determined by murders per 100k residents.
#### data sources:
- [Offenses known to law enforcement (2015)](https://ucr.fbi.gov/crime-in-the-u.s/2015/crime-in-the-u.s.-2015/tables/table-8/table_8_offenses_known_to_law_enforcement_by_state_by_city_2015.xls/view) - FBI.gov Uniform Crime Reporting (UCR) database.
- US States (Topojson) via [Atlas-Make/us-states](https://github.com/bradoyler/atlas-make/tree/master/us-states)
- US Cities via [Atlas-Make/us-cities](https://github.com/bradoyler/atlas-make/tree/master/us-cities)

## Map - US Cities by Murder Rate
<figure class="media-full">
<iframe id="iframe_map" src="/assets/widgets/crime/map.htm" frameborder="0" width="100%" scrolling="no" height="0"></iframe>
</figure>

## Scatterplot - Murders over Population
<figure class="media-full">
<iframe id="iframe_scatterplot" src="/assets/widgets/crime/scatterplot.htm" frameborder="0" width="100%" style="height:500px;" scrolling="no" height="0"></iframe>
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
1) There seems to be an interesting correlation between violent crime rate and shrinking cities. If you look at past populations in Detroit, Baltimore, New Orleans, and St. Louis you'll notice those cities have shrunk dramatically in the past 20-30 years. Hoping to dig more into that soon.

2) The FBI report, for the previous year, is released pretty late (September), so I want to have these charts handy for that time next year. 538 has also collected partial data for 2016

3) [FiveThirtyEight](http://fivethirtyeight.com/features/murders-rose-at-their-fastest-pace-in-a-quarter-century-last-year/), [Washington Post](https://www.washingtonpost.com/graphics/national/2015-homicides/) and [NYTimes](http://www.nytimes.com/interactive/2016/09/08/us/us-murder-rates.html) have all posted some great insights on recent crime and homicide trends.

4) FBI also publishes a report on the weapons used in reported homicides, but that only seems to be available by state. This state data is also often reported as 'Limited supplemental homicide data received.' so the numbers can be completely incorrect. [See example with Alabama](https://ucr.fbi.gov/crime-in-the-u.s/2015/crime-in-the-u.s.-2015/tables/table-20)
