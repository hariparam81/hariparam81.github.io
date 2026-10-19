# Harish Parameswaran — Portfolio Site

Astro static site for Harish Parameswaran, focused on data and AI platform leadership.

## Run it

```bash
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # static output in dist/
```

## Content and assets

- Profile content and project descriptions live in `src/data/site.ts`.
- GitHub repository: [hariparam81/hariparam81.github.io](https://github.com/hariparam81/hariparam81.github.io).
- Add a resume PDF at `public/resume.pdf` to show the homepage download button. The button is omitted when the file is absent.
- Add verified benchmark results to the workbench page only after measured runs are available. The results TODO is intentional.
- The canonical domain is `https://harishparam.com` (registered at Cloudflare). `public/CNAME` keeps the custom domain set on every deploy.

## Deploy (free)

A GitHub Actions workflow (`.github/workflows/deploy.yml`) is included — every
push to `main` builds the site and deploys it to GitHub Pages automatically.

1. Use the **user-site repository** `hariparam81.github.io` on the `hariparam81` GitHub account. This matches the current root deployment config: `site` is set and `base` is not.
2. Push this project to the repository's `main` branch.
3. In repository Settings → Pages, set Source to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds `dist/` and deploys it on every push to `main`.

**Custom domain (harishparam.com):**
1. In repository Settings → Pages → Custom domain, enter `harishparam.com`.
2. In Cloudflare DNS, add these records, all **DNS only** (grey cloud):
   - `A` `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` `@` → `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `CNAME` `www` → `hariparam81.github.io`
3. Once GitHub's DNS check passes, tick **Enforce HTTPS**.

## Adding a project drill-down page

1. Copy `src/pages/projects/inference-economics-workbench.astro` → `src/pages/projects/<slug>.astro`
2. Add the entry to `projects` in `src/data/site.ts` with `slug: "<slug>"`
3. The homepage card links to it automatically

The static build generates a sitemap at `sitemap-index.xml`. Each page includes a page-specific title and description, canonical URL, and Open Graph metadata.
