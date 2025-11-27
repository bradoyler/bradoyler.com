---
title: D3-Node
date: 2016-07-13
modified: null
project:
  url: https://github.com/bradoyler/d3-node
description: Server-side D3 for static chart/map generation via Node.js
art: d3-node.png
layout: post.njk
tags: ['projects']
---

<figure>
  <img src="/assets/images/d3-node.png" alt="Homepage on Desktop">
  <figcaption>Example choropleth using population data of France and topojson from Atlas-Make.</figcaption>
</figure>

### Why?

- Performance: pre-rendering allows offloading data processing, and network overhead
- Take advantage of the entire ecosystem: npmjs.com
- Static rendering of Data-Driven Documents (D3.js)
- Portable SVG with embedded stylesheets
- Easily adapt examples from bl.ocks.org


### Basic usage:

[![NPM](https://nodei.co/npm/d3-node.png?downloads=true&downloadRank=true)](https://nodei.co/npm/d3-node/)

```javascript
 var D3Node = require('d3-node')
 var d3 = D3Node.d3
 var d3n = new D3Node()    // create instance
 d3.select(d3n.document.body).append('span') // select <body> & insert span
 d3n.html() // returns: <html><head></head><body><span></span></body></html>
```

__SVG creation__

```javascript
 var d3n = new D3Node()      // initializes D3 with container element
 d3n.createSVG().append('g') // create SVG w/ 'g' tag
 d3n.svgString() // output: <svg xmlns="http://www.w3.org/2000/svg"><g></g></svg>
```

### Advanced usage

__Setting container & insertion point via selector__

```javascript
 var options = { selector: '#chart', container: '<div id="container"><div id="chart"></div></div>' }
 var d3n = new D3Node(options) // initializes D3 with container element
 var d3 = d3n.d3
 d3.select(d3n.document.querySelector('#chart')).append('span') // insert span tag into #chart
 d3n.html()   // output: <html><body><div id="container"><div id="chart"><span></span></div></div></body></html>               
```

__Inline SVG styles__

```javascript
 var d3n = new D3Node({styles:'.test {fill:#000;}'})
 d3n.createSVG().append('g')
 d3n.svgString()
```

> Output
```html
<svg xmlns="http://www.w3.org/2000/svg">
   <defs>
     <style type="text/css"><![CDATA[ .test{fill:#000;} ]]></style>
   </defs>
   <g></g>
<svg>
```

See more [D3-Node examples](https://github.com/bradoyler/d3-node/blob/master/examples/README.md)
