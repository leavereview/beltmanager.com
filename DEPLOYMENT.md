# BeltManager Static Site - Deployment

Live site: https://beltmanager.com (formerly mydojo.software; the old domain 301s here).

## Deploy (primary path)

From the parent `Front-end-sites` repo:

```bash
./deploy.sh beltmanager.com
```

This does a clean build (which runs `verify-seo.js`), shows an rsync `--delete` dry-run, deploys to
`lightsail:/var/www/beltmanager.com/`, then checks the live sitemap URL count matches the build.

## GitHub Actions (disabled)

`.github/workflows/deploy.yml` is disabled (30 Oct 2026). It cannot build on a GitHub-hosted runner
because `astro.config.mjs` imports `../scripts/sitemap-lastmod.mjs` from the parent
`multi-site-documentation` checkout, and public site repos deliberately get no agentbox runner (they
hold the production `DEPLOY_KEY`). Use `./deploy.sh` above.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

Support: support@beltmanager.com
