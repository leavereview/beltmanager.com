# BeltManager Static Website

A fast, SEO-optimized static website built with Astro for BeltManager - the martial arts management platform.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
beltmanager.com/
├── public/
│   ├── images/         # Static images
│   ├── logo.svg        # Site logo
│   └── favicon.svg     # Favicon
├── src/
│   ├── components/     # Reusable components
│   │   ├── Navigation.astro
│   │   └── Footer.astro
│   ├── content/
│   │   └── blog/       # Blog posts (Markdown)
│   ├── layouts/        # Page layouts
│   │   ├── BaseLayout.astro
│   │   └── PillarPageLayout.astro
│   ├── pages/          # All website pages
│   │   ├── index.astro
│   │   ├── blog/
│   │   └── *.astro     # Pillar pages
│   ├── styles/
│   │   └── global.css  # Tailwind + custom styles
│   └── utils/
│       └── internalLinks.ts
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🎨 Design System

### Colors
- **Primary Navy**: `#1A1A2E`
- **Accent Red**: `#E94560`
- **Light Red**: `#FFE7EC`

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold (700)
- Body: Regular (400)

### Components
- `.btn-primary` - Red button
- `.btn-secondary` - White outlined button
- `.card` - White card with shadow
- `.badge-primary` - Red badge
- `.container-custom` - Max-width container

## 📝 Adding Content

### New Blog Post
Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Meta description"
date: "2025-01-15"
image: "/images/your-image.jpg"
tags: ["karate", "belts"]
author: "BeltManager Team"
---

Your markdown content here...
```

### New Page
Create a new `.astro` file in `src/pages/`:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Page Title" description="Page description">
  <!-- Your content -->
</BaseLayout>
```

## 🚀 Deployment

### Cloudflare Pages (Recommended)

1. Push to GitHub
2. Connect to Cloudflare Pages
3. Set build command: `npm run build`
4. Set output directory: `dist`

Or use GitHub Actions (see `.github/workflows/deploy.yml`)

### Manual Deploy

```bash
npm run build
# Upload 'dist' folder to your hosting
```

## 🔧 Configuration

### Site URL
Update `site` in `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://yourdomain.com',
  // ...
});
```

### Colors
Edit `tailwind.config.mjs` to change brand colors.

### Navigation
Edit `src/components/Navigation.astro` to update menu items.

## 📊 SEO Features

- ✅ Semantic HTML
- ✅ Meta tags (title, description, OG, Twitter)
- ✅ Schema.org JSON-LD
- ✅ Automatic sitemap generation
- ✅ Clean URLs
- ✅ Internal linking structure
- ✅ Mobile responsive
- ✅ Fast page loads (static HTML)

## 🛠️ Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [TypeScript](https://typescriptlang.org) - Type safety

## 📄 License

Proprietary - BeltManager
