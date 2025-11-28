# Static site for bradoyler.com
Basic blog with mobile support, light/dark theme, multiple page types and minimal dependencies.  
One of my main goals is to not have to rebuild this thing every 3 yrs (we'll see how that goes).

## How to Setup

### 1. Clone
`git clone https://github.com/bradoyler/bradoyler.com.git`

### 2. Install Dependencies
```
$ npm install
```

## How to use
To develop: `npm run dev`
To generate: `npm run build`

### Requirements
Nodejs v20+


## There's a few options to load CSS

1. Use the locally built tailwind css. This requires tailwind to install/compile even when u dont need to modify
```html
<link rel="stylesheet" href="/assets/style.css" />
```

2. Use previously built Tailwind CSS, so you can remove local CSS build step (my preference) but still be able to modify (if needed).
```html
<link rel="stylesheet" href="https://www.bradoyler.com/assets/style.css" />
```

3. Use unpkg version pinned CDN to reduce build dependencies & breakage, but you can't modify (maybe a good thing for most).
```html
<script src="https://unpkg.com/tailwindcss-cdn@3.4.10/tailwindcss-with-typography.js"></script>
```

CSS is loaded via include @ [layouts/_includes/cssloader.njk](layouts/_includes/cssloader.njk) 
