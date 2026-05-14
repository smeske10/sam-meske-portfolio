## Vision Venture Site

Personal/business site for Vision Venture, optimized for:

- SMB owner/operators
- VP/Director of Ops

Primary CTA: **Get an AI Ops audit** (Netlify Forms).

## Local dev

```bash
npm install
npm run dev
```

## Deploy (Netlify)

- Set the site base directory to `vision-venture-site`
- Build command: `npm run build`
- Publish directory: `.next`
- Set env var: `NEXT_PUBLIC_SITE_URL` to your deployed domain (used for SEO + sitemap/robots)

## Form handling

The audit form is a Netlify Form named `ai-ops-audit` on `/` and redirects to `/thanks`.
