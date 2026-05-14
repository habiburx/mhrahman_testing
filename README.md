# Md Habibur Rahman Portfolio

A personal portfolio built with Next.js, Once UI, MDX, and TypeScript. It is ready to deploy on Vercel after pushing this repository to GitHub.

## Requirements

- Node.js 18.17 or newer
- npm

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. If port `3000` is busy, Next.js will print the available local URL.

## Production Check

Run this before pushing to GitHub or deploying to Vercel:

```bash
npm run build
```

## What To Edit

Most content changes happen in a small set of files:

```text
src/
  resources/
    content.tsx              # Name, profile info, Home text, About data, education, services, gallery image list
    once-ui.config.ts        # Domain/baseURL, enabled nav routes, theme, SEO defaults
    custom.css               # Brand colors, card width, shared page styling

  app/
    about/page.tsx           # About biography paragraph and research interest tags

  features/
    publications/data/
      publications.data.ts   # Publications shown in the Publications nav item
    latest/data/
      news.data.tsx          # Timeline items shown in the Latest nav item
    credentials/data/
      credentials.data.ts    # Awards and certifications shown in the Credentials nav item

  content/
    blogs/*.mdx              # Long-form blog posts shown under Blogs
    publications/*.mdx       # MDX publication/article pages

public/
  images/
    avatar.jpg               # Profile photo
    og/home.jpg              # Social share image
    gallery/*                # Gallery images referenced from content.tsx
```

You usually do not need to edit `src/components`, `src/types`, API routes, or build config unless you are changing behavior.

## Nav Item Editing Guide

### Home

Edit `src/resources/content.tsx`.

Update:

- `person`: name, role, email, location, avatar path
- `social`: GitHub, LinkedIn, email, Instagram, and other profile links
- `home.headline`: main homepage headline
- `home.subline`: short intro under the headline
- `home.title` and `home.description`: SEO text

### About

Edit `src/app/about/page.tsx` for the visible biography paragraph and research interest tags.

Also edit `src/resources/content.tsx` if you want to update the About page metadata:

- `about.title`
- `about.description`
- `about.label`

### Experiences

Edit `src/resources/content.tsx`.

Update:

- `about.studies.institutions`: education entries
- `about.work.experiences`: research or work experience entries
- `about.services.items`: service, teaching, or professional activity entries

### Publications

Edit `src/features/publications/data/publications.data.ts`.

Update:

- `myName`: your name exactly as it appears in author lists
- `publications`: year, title, authors, venue, type, and links

For MDX-style publication pages, add or edit files in `src/content/publications/`.

### Latest

Edit `src/features/latest/data/news.data.tsx`.

Update `newsItems` with date, category, and content. Supported categories are documented at the top of that file.

### Credentials

Edit `src/features/credentials/data/credentials.data.ts`.

Update:

- `awards`
- `certifications`

### Blogs

Add or edit MDX files in `src/content/blogs/`.

Each blog file becomes a blog post. Keep frontmatter fields such as title, date, summary, and image consistent with the existing example.

### Gallery

Add image files under `public/images/gallery/`, then edit `gallery.images` in `src/resources/content.tsx`.

Each gallery item should include:

- `src`
- `alt`
- `orientation`
- `caption`
- `location`

## Site Settings

Edit `src/resources/once-ui.config.ts`.

Important fields:

- `baseURL`: set this to your final Vercel or custom domain
- `routes`: turn nav items on or off
- `style`: theme, brand color, accent color, border style
- `schema` and `sameAs`: SEO identity and social profile data

Example:

```ts
const baseURL = "https://yourdomain.com";
```

## Styling

Edit `src/resources/custom.css`.

Start with:

- `--brand-primary`
- `--brand-primary-dark`
- `--brand-text-on`
- `.page-card`

These control the main brand color, button hover color, text on brand backgrounds, and shared page card layout.

## Images

Replace these files when personalizing:

- `public/images/avatar.jpg`
- `public/images/og/home.jpg`
- files inside `public/images/gallery/`

If you change filenames, update the matching paths in `src/resources/content.tsx`.

## Environment Variables

Copy `.env.example` only if you need password-protected pages:

```bash
PAGE_ACCESS_PASSWORD=your-secret-password
```

Then add protected routes in `src/resources/once-ui.config.ts`.

For Vercel, add the same variable in Project Settings -> Environment Variables.

## Deploy To Vercel

1. Push this project to GitHub.
2. Import the GitHub repository in Vercel.
3. Keep the default Next.js settings:

```text
Install Command: npm install
Build Command: npm run build
Output Directory: default
```

4. After deployment, update `baseURL` in `src/resources/once-ui.config.ts`.
5. Add your custom domain in Vercel Project Settings -> Domains.

## GitHub Upload Notes

The `.gitignore` is set up to exclude dependencies, local builds, environment secrets, Vercel state, TypeScript cache files, and local assistant/tooling files.

Safe files to commit include:

- `package.json`
- `package-lock.json`
- `next-env.d.ts`
- `src/**`
- `public/**`
- `.env.example`

Do not commit real `.env` files.

## License

This project is based on Magic Portfolio and Once UI. Check `LICENSE` before commercial use.
