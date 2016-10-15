---
title: Route-Cache
date: 2014-08-01
modified: null
project:
  url: https://github.com/bradoyler/route-cache
description: Caching middleware for Express (w/ expiration)
art: route-cache.jpg
layout: post.html
---

[View repo on Github >>](https://github.com/bradoyler/route-cache)

Make your routes do this ->![dodging](http://forgifs.com/gallery/d/80400-8/Muhammad-Ali-dodges-punches.gif)

## Why?
- makes hard-working routes super-fast, under heavy-load, [see Load Tests](loadtests)
- easy to use and fork for your needs
- works with gzip compression

## Install
```sh
npm install route-cache
```

## Test
```sh
npm test
```

## How to use
```javascript

var routeCache = require('route-cache');

// cache route for 20 seconds
app.get('/index', routeCache.cacheSeconds(20), function(req, res){
	// do your dirty work here...
	console.log('you will only see this every 20 seconds.');
	res.send('this response will be cached');
});


```

## Delete a cached route
```javascript
routeCache.removeCache('/index');
```

## Future plans / todos
- client-side Cache-Control
- support for distributed caches (redis or memcache)
