# Cloudflare Pages Setup

This repository hosts three static sites, each deployed to its own Cloudflare Pages project (Direct Upload via GitHub Actions).

## Projects & Directories

| Domain | Source / Output Dir | CF Pages Project | Local Preview |
| --- | --- | --- | --- |
| `www.bradoyler.com` | `src/` → `public/` | `bradoyler` | `npm start` (`:8080`) |
| `elect.bradoyler.com` | `sites/elect/` | `electbradoylerv2` | `npm run start:elect` (`:8081`) |
| `airtraffic.bradoyler.com` | `sites/airtraffic/` | `airtraffic` | `npm run start:airtraffic` (`:8082`) |

Run all three local dev servers together with `npm run start:all`.

## GitHub Actions Deployment

[.github/workflows/deploy-pages.yaml](../.github/workflows/deploy-pages.yaml) runs on pushes to `main` (and manual `workflow_dispatch`) using `dorny/paths-filter@v3` so only changed sites deploy:

- `public/**` → `deploy-www` (`pages deploy public --project-name=bradoyler --branch=main`)
- `sites/elect/**` → `deploy-elect` (`pages deploy sites/elect --project-name=electbradoylerv2 --branch=main`)
- `sites/airtraffic/**` → `deploy-airtraffic` (`pages deploy sites/airtraffic --project-name=airtraffic --branch=main`)

> Note: `public/` is built locally via `npm run build` and committed; CI deploys `public/` directly without running Eleventy.

### Required GitHub Secrets

Set under **Settings → Secrets and variables → Actions**:

- `CLOUDFLARE_API_TOKEN` (API token with **Cloudflare Pages: Edit** permission)
- `CLOUDFLARE_ACCOUNT_ID`

### Manual Deploy (CLI)

```sh
npm run deploy:bradoyler
npm run deploy:elect
npm run deploy:airtraffic
```

## DNS & Apex Redirect (`bradoyler.com` → `www.bradoyler.com`)

1. Attach `www.bradoyler.com` as the custom domain on the `bradoyler` Pages project.
2. Ensure the apex `@` (`bradoyler.com`) has a **proxied** (orange-cloud) DNS record (e.g., `A` `@` → `192.0.2.1`, Proxied).
3. In Cloudflare **Rules → Redirect Rules**, add a rule:
   - **When:** `Hostname` `equals` `bradoyler.com`
   - **Type:** `Dynamic`
   - **Expression:** `concat("https://www.bradoyler.com", http.request.uri.path)`
   - **Status code:** `301`
   - **Preserve query string:** enabled

## Disabling GitHub Pages

In GitHub **Settings → Pages**, set **Build and deployment → Source** to **None** (or click **⋯ → Unpublish site**).
