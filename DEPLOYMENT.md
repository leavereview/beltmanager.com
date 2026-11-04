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

`.github/workflows/deploy.yml` is disabled (30 Oct 2026). Use `./deploy.sh` above. Public site repos
deliberately get no agentbox runner, because they hold the production `DEPLOY_KEY`.

The build no longer needs the parent `multi-site-documentation` checkout. `scripts/sitemap-lastmod.mjs`
and `scripts/verify-seo.js` are vendored copies of that repo's shared `scripts/`, so a standalone clone
builds. Keep them in step with the shared copies. Re-enabling the workflow is a separate decision: it
would deploy on every push to `main`.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

Support: support@beltmanager.com
