# AGENTS.md

Notes for AI agents writing or publishing posts on bradoyler.com. See [README.md](README.md) for general setup.

## Site layout

- Eleventy 3 static site. Config is in [.eleventy.js](.eleventy.js). Source is `src/`, layouts are in `layouts/`, and build output goes to `docs/` (served by GitHub Pages).
- Posts are Markdown. Put AI posts in `src/ai/` and everything else in `src/blog/`. The URL comes from the path, so `src/ai/my-post.md` becomes `/ai/my-post/`.
- The site's posts are the `blog` tag collection. `ai` is a second tag for the AI section.
- Images go in `src/assets/images/` and are copied to the build as-is.

## Post frontmatter

```yaml
---
title: "Post Title"
date: 2026-10-22
modified: null
description: "One or two sentences. Used for meta/OG tags and post previews."
art: some-image.jpg        # optional; file in src/assets/images/, used as og:image
layout: post.njk
tags: ['blog', 'ai']       # always include 'blog'; add 'ai' for AI posts
---
```

- **Quote `title` and `description` whenever they contain a colon.** An unquoted colon has broken the YAML before (commit 3c12d9c).
- **Every post gets a social image.** Without `art`, the post has no social preview. Make one by default, save it in `src/assets/images/`, and also put it at the top of the post body, as in [airplane-mode-revisited.md](src/ai/airplane-mode-revisited.md).
- To make a social image for a post about a live web project, screenshot it at 1200x630 with headless Chrome and save it straight to JPG (no image library is installed):
  ```sh
  "<path to chrome>" --headless=new --hide-scrollbars \
    --window-size=1200,630 --virtual-time-budget=2500 \
    --screenshot="<absolute path to repo>/src/assets/images/<name>.jpg" "<url>"
  ```
  Chrome needs an absolute path for `--screenshot`. On Windows, give it a native path (backslashes).
  Don't pass `--disable-gpu`. With it, canvas animations come out blank. Always look at the image before using it.
- For a composite, like a before/after side by side, write a small 1200x630 HTML page that lays out the screenshots and screenshot that page with the same command plus `--allow-file-access-from-files`. Use the CSS `object-view-box: inset(...)` property to crop each screenshot. If a site's on-screen text overlaps the area you want, capture it in a wider window (for example 2000x1000) so the content sits clear of the text.
- For a post with no live project to screenshot (an essay or news roundup), make a title card: a 1200x630 HTML page with the post title, a few key facts, and "bradoyler.com" in a footer. Keep the page in a scratch directory, not the repo, and screenshot it the same way. `continuous-delivery-social.jpg` is an example.
- `excludeFromSitemap: true` keeps a post out of the sitemap (used for old reposts). `draft: true` keeps a post out of the `blog` collection.

## Writing style

- **No em-dashes (—).** The author removed them on purpose (commit a01f27a). Use commas, periods, colons, or " - " (a spaced hyphen) instead.
- First person and conversational, with a clear point of view. Use `##` section headings and paragraphs, and lists only where they help. Bold lead-ins inside a paragraph are fine.
- Posts often end with an "honest caveats" section and a short closing thought.
- Link to related posts with absolute site paths, such as `/ai/shift-in-software-development/`.
- Brad's background is useful context: NBC News / TODAY.com engineer from 2013, NBC News Specials team (Airplane Mode, 2017), ArchieML, and now Gopuff. See [src/about.md](src/about.md).
- Describe Brad's past role precisely. For example, Airplane Mode was an NBC News long-form story, and Brad built its air traffic animation, not the whole story.
- Don't invent details about past projects. If something is only known in general terms, write it generally and ask Brad to add specifics.
- Related project repos are cloned next to this one, in the parent directory (for example `../airtraffic/`). Read the code and README for accurate technical details.
- Don't write about Gopuff internals (incidents, systems, team details). Leave a spot and let Brad decide what to share.

## Posts about current events

- Search before writing, and check every number, date, and credit against the primary source or a reputable outlet. Very recent stories change, and some secondary posts get details wrong.
- Credit only what the reporting supports. If sources disagree (for example, who found a bug, or whether AI was involved), say so in the post with "reportedly" or by naming the source, and don't flatten different stories into one claim.
- Link sources inline in the post.
- Brad's own setup makes for stronger material than commentary. Check his repos and machine (Node versions, CI matrices, dependencies) and report what you actually find.

## Building

- Requires Node 24 (see `.nvmrc`). Run `npm install` first, because `node_modules` may be missing `@11ty/eleventy`.
- Build with `npm run build` (Tailwind CSS plus Eleventy) or preview with `npm run dev`.
- **Don't run `npx eleventy`.** It resolves to the old, unrelated `eleventy` npm package, which just throws an error. Use the npm scripts or `./node_modules/.bin/eleventy`.
- `docs/` is committed. Past posts land as one commit that adds the Markdown file, followed by "Build site with ..." commits for the regenerated `docs/` files (blog index, home page, sitemap).
- The GitHub Actions workflow [manual-build-and-commit.yaml](.github/workflows/manual-build-and-commit.yaml) can also import a post from a raw gist URL, build, and commit it.

## Checklist for a new post

1. Create `src/ai/<slug>.md` or `src/blog/<slug>.md` with the frontmatter above.
2. Check for colons in the YAML values and for em-dashes in the body.
3. Make the social image, look at it, and set `art`.
4. Run `npm run build` and confirm `docs/<section>/<slug>/index.html` exists and has the `og:image` tag.
5. Commit only when asked: the source post and image first, then the `docs/` build.
