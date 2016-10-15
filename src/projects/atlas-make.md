---
title: Atlas-Make
date: 2016-09-15
modified: null
project:
  url: https://github.com/bradoyler/atlas-make
description: Makefile toolbelt for building geojson, topojson & csv from public Shape files
art: atlas-make-square.jpg
layout: post.html
---

<figure class="media-full">
  ![Homepage on Desktop](/assets/images/atlas-make.png)
  <figcaption> World map built from [Small scale Cultural vectors](http://www.naturalearthdata.com/downloads/10m-cultural-vectors/) via [Natural Earth](http://naturalearthdata.com/) </figcaption>
</figure>

### Install System prereqs (Linux/MacOSX):

```
$ brew install node
$ brew install gdal
```

### Clone repo and install dependencies

```
$ git clone https://github.com/bradoyler/atlas-make.git
$ cd atlas-make
$ npm install
```

### Make all targets/recipes

```
$ make all
```
this may take about 15mins, so try `$ make us-states` first

### Current targets:

[`$ make na-places`](https://github.com/bradoyler/atlas-make/tree/master/na-places) (populated places in North America )

[`$ make us-states`](https://github.com/bradoyler/atlas-make/tree/master/us-states)

[`$ make us-counties`](https://github.com/bradoyler/atlas-make/tree/master/us-counties)

[`$ make us-towns`](https://github.com/bradoyler/atlas-make/tree/master/us-towns) (county subdivisions)

[`$ make us-cities`](https://github.com/bradoyler/atlas-make/tree/master/us-cities)

[`$ make us-demographics`](https://github.com/bradoyler/atlas-make/tree/master/us-demographics)

[`$ make us-transportation`](https://github.com/bradoyler/atlas-make/tree/master/us-transportation)

[`$ make us-congress`](https://github.com/bradoyler/atlas-make/tree/master/us-congress)
