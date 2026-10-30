# BeltManager Static Site - Deployment

Live site: https://beltmanager.com (formerly mydojo.software; the old domain 301s here).

## Deploy (primary path)

From the parent `Front-end-sites` repo:

```bash
./deploy.sh beltmanager.com
```

This does a clean build (which runs `verify-seo.js`), shows an rsync `--delete` dry-run, deploys to
`lightsail:/var/www/beltmanager.com/`, then checks the live sitemap URL count matches the build.

## GitHub Actions

`.github/workflows/deploy.yml` also builds and rsyncs `dist/` to `/var/www/beltmanager.com/` on push to
`main`, every Monday 09:00 UTC, and on manual dispatch. It needs the repo secrets `DEPLOY_KEY` and
`SERVER_IP`.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

Support: support@beltmanager.com
