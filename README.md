# Connie Trinh: portfolio site

A static site built with Astro and deployed with Cloudflare Pages.

## Run it on your computer

You need Node.js 20 or newer (https://nodejs.org).

```bash
npm install
npm run dev
```

Open http://localhost:4321 in your browser. Changes appear when you save.

## Publish to GitHub

```bash
git clone https://github.com/its-connie/portfolio.git
# copy everything from this zip into the portfolio folder, then:
cd portfolio
npm install
git add .
git commit -m "Initial site"
git push -u origin main
```

Commit `package-lock.json` as well. It is created by `npm install`.

## Deploy with Cloudflare Pages

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
2. Select the `portfolio` repository.
3. Use these build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Click **Save and Deploy**. Each push to `main` redeploys automatically.
5. In the Pages project, open **Custom domains**, add your domain, and confirm. Because the domain is already on Cloudflare, DNS is set up for you.
6. Update `site` in `astro.config.mjs` to your domain so the sitemap and canonical links are correct.

## Updating content

| What | Where |
|---|---|
| Home, About, CV text | `src/pages/index.astro`, `src/pages/about.astro`, `src/pages/cv.astro` |
| Projects (Work page and pop-ups) | `src/data/projects.js` |
| Project images | Put files in `public/images/projects/`, then set `cover` in `src/data/projects.js`, e.g. `cover: "/images/projects/lawn-and-order.jpg"` |
| Substack posts | The `posts` list at the top of `src/pages/writing.astro` (free posts only) |
| Resume PDF | Replace `public/documents/Connie-Trinh-Resume.pdf` with a new file of the same name |
| Contact address | The `action` on the form in `src/pages/contact.astro` |
| Navigation | `navItems` in `src/layouts/Base.astro` |
| Colors and spacing | `:root` at the top of `src/styles/global.css` |

Image tips: export at about 2000px on the long edge, use lowercase file names with hyphens, and always write alt text for images (set `coverAlt` in `src/data/projects.js`).

## Before launch

- Replace all placeholder text marked "Lorem ipsum" and the placeholder posts.
- Check the Work pop-up on a real phone.
- Run Lighthouse in Chrome DevTools and check the accessibility score.
