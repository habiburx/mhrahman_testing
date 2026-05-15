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
    profile-card.ts          # Name, profile photo, profile details, Scholar link, social buttons
    about-page.tsx           # About page text, research interests, and metadata
    latest-page.tsx          # Latest/news page labels and timeline items
    publications-page.ts     # Publications page labels and publications list
    experiences-page.tsx     # Experiences page labels, education, research, services
    credentials-page.ts      # Credentials page labels, awards, certifications
    blogs-page.ts            # Blogs page labels and listing text
    content.tsx              # Home text, gallery image list, and resource exports
    once-ui.config.ts        # Domain/baseURL, enabled nav routes, theme, SEO defaults
    custom.css               # Brand colors, card width, shared page styling

  content/
    blogs/*.mdx              # Long-form blog posts shown under Blogs
    publications/*.mdx       # MDX publication/article pages

public/
  images/
    mhrahman.webp            # Profile photo
    gallery/*                # Gallery images referenced from content.tsx
```

You usually do not need to edit `src/components`, `src/types`, API routes, or build config unless you are changing behavior.

## Nav Item Editing Guide

### Home

Edit `src/resources/content.tsx` for home page copy.

Edit `src/resources/profile-card.ts` for identity and social profile data.

Update:

- `person`: name, role, email, location, avatar path
- `social`: GitHub, LinkedIn, email, Instagram, and other profile links
- `home.headline`: main homepage headline
- `home.subline`: short intro under the headline
- `home.title` and `home.description`: SEO text

### About

Edit `src/resources/about-page.tsx`.

Update:

- `about.title`
- `about.description`
- `about.label`
- `aboutPageContent.bio`
- `aboutPageContent.researchInterests`

### Experiences

Edit `src/resources/experiences-page.tsx`.

Update:

- `work`: page label, title, and SEO description
- `experiencesPageContent.studies.institutions`: education entries
- `experiencesPageContent.research.experiences`: research or work experience entries
- `experiencesPageContent.services.items`: service, teaching, or professional activity entries

### Publications

Edit `src/resources/publications-page.ts`.

Update:

- `blog`: page label, title, and SEO description
- `publicationsPageContent`: heading, empty message, and search placeholder
- `myName`: your name exactly as it appears in author lists
- `publications`: year, title, authors, venue, type, and links

For MDX-style publication pages, add or edit files in `src/content/publications/`.

### Latest

Edit `src/resources/latest-page.tsx`.

Update `latest`, `latestPageContent`, and `newsItems`. Supported categories are documented in that file.

### Credentials

Edit `src/resources/credentials-page.ts`.

Update:

- `credentials`: page label, title, and SEO description
- `credentialsPageContent`: section titles and empty messages
- `awards`
- `certifications`

### Blogs

Edit `src/resources/blogs-page.ts` for the Blogs page label, heading, and empty-state text.

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

- `public/images/mhrahman.webp`
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
