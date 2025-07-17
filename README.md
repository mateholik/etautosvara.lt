# ET Auto Švara - Static Site Generation (SSG) Setup

This project has been configured for **Static Site Generation (SSG)** using Next.js 15.4.1. The entire website is pre-rendered at build time and can be deployed to any static hosting service.

## 🚀 Quick Start

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the development server.

### Production Build (SSG)

```bash
npm run build
```

This will generate a static version of your site in the `out/` directory.

### Preview Static Build

```bash
# After building, you can serve the static files locally
npx serve out
```

## 📦 What's Included

### SSG Configuration

- **Next.js Config**: Configured with `output: 'export'` for static generation
- **Image Optimization**: Enabled with `unoptimized: true` for static hosting
- **Trailing Slashes**: Configured for better static hosting compatibility
- **Static Routes**: All pages are statically generated at build time

### Project Structure

```
etautosvara.lt/
├── out/                    # Generated static files (after build)
│   ├── index.html         # Main page
│   ├── sitemap.xml        # SEO sitemap
│   ├── robots.txt         # Search engine instructions
│   └── _next/             # Next.js assets
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout with metadata
│   │   ├── page.tsx       # Home page
│   │   ├── sitemap.ts     # Dynamic sitemap generation
│   │   └── robots.ts      # Dynamic robots.txt
│   └── components/        # React components
└── public/                # Static assets
```

## 🛠 SSG Features

### ✅ Optimized for Static Hosting

- **No Server Required**: All content is pre-rendered
- **Fast Loading**: Static HTML, CSS, and JS files
- **SEO Friendly**: Pre-rendered content for search engines
- **CDN Ready**: Can be served from any CDN

### ✅ Performance Optimizations

- **Image Optimization**: Using Next.js Image component
- **Code Splitting**: Automatic chunk splitting
- **CSS Optimization**: Tailwind CSS purging
- **Bundle Analysis**: Optimized JavaScript bundles

### ✅ SEO Features

- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Search engine instructions
- **Meta Tags**: Complete OpenGraph and Twitter Cards
- **Structured Data**: LocalBusiness schema markup
- **Lithuanian SEO**: Optimized for Lithuanian search

## 🌐 Deployment Options

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `out`

### GitHub Pages

1. Build the project: `npm run build`
2. Upload the `out/` directory to your GitHub Pages repository

### Any Static Hosting

Upload the contents of the `out/` directory to your static hosting service:

- AWS S3 + CloudFront
- Cloudflare Pages
- Firebase Hosting
- Surge.sh
- And many more...

## 📋 Build Scripts

| Script                 | Description                                  |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Start development server                     |
| `npm run build`        | Build static site for production             |
| `npm run build:static` | Alias for build (same as above)              |
| `npm run start`        | Start production server (not needed for SSG) |
| `npm run lint`         | Run ESLint                                   |

## 🔧 Configuration Details

### Next.js Configuration (`next.config.ts`)

```typescript
const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  trailingSlash: true, // Add trailing slashes to URLs
  images: {
    unoptimized: true, // Disable image optimization for static hosting
  },
};
```

### Static Routes Configuration

Both `sitemap.ts` and `robots.ts` include:

```typescript
export const dynamic = 'force-static';
```

This ensures these routes are statically generated.

## 🎨 Components & Features

### Client-Side Components

All interactive components are marked with `'use client'`:

- **Header**: Navigation with scroll effects
- **Contact Form**: Form handling with validation
- **Image Comparison**: Before/after slider
- **Testimonials**: Carousel functionality

### Static Content

- **Hero Section**: Company introduction
- **Services**: Service listings with pricing
- **Why Choose Us**: Company benefits
- **Before/After Gallery**: Work examples
- **Contact Information**: Business details

## 🔍 SEO Configuration

### Metadata (in `layout.tsx`)

- Title: "ET Auto Švara - Profesionalus automobilio valymas"
- Description: Lithuanian car cleaning service
- Keywords: Lithuanian automotive keywords
- OpenGraph and Twitter Cards
- Canonical URLs

### Structured Data

- LocalBusiness schema
- Service schema
- Organization schema
- Contact information

## 🚨 Important Notes

### Static Limitations

- **No Server-Side Rendering**: All content is pre-rendered
- **No API Routes**: Cannot use Next.js API routes
- **No Dynamic Routes**: All routes must be known at build time
- **Form Handling**: Contact form uses client-side logic

### Image Handling

- Images are optimized using Next.js Image component
- `unoptimized: true` allows deployment to static hosts
- All images in `public/` are copied to `out/`

### Contact Form

The contact form is simplified to essential fields:

- Name
- Email
- Message

Phone contact is handled via direct call buttons throughout the site.

## 📱 Mobile Optimization

- **Responsive Design**: Mobile-first approach
- **Touch-Friendly**: Optimized for mobile interactions
- **Performance**: Lightweight for mobile networks
- **Accessibility**: WCAG 2.1 AA compliant

## 🔧 Troubleshooting

### Build Errors

If you encounter build errors:

1. Check that all components use `'use client'` for client-side features
2. Ensure no server-side code in components
3. Verify all images exist in `public/` directory

### Deployment Issues

1. Make sure to upload the `out/` directory contents
2. Configure your hosting for single-page applications
3. Set up proper redirects for 404 handling

## 📊 Performance

The static build achieves:

- **Fast Loading**: Pre-rendered HTML
- **Small Bundle Size**: ~135KB First Load JS
- **Optimized Images**: WebP format with fallbacks
- **Efficient Caching**: Static assets with long cache headers

## 🎯 Business Features

### Contact Options

- **Primary**: Phone calls (+370 6 06 47 967)
- **Secondary**: Contact form
- **Location**: Saulėtoji g. 8, Ližiškės, Vilnius
- **Hours**: I-V 9:00-18:00, VI 10:00-15:00

### Services Offered

- Automobilio vaškavimas (from 80€)
- Žibintų poliravimas (from 25€)
- Nano dangos dengimas (from 200€)
- Kėbulo poliravimas (from 250€)
- Interjero valymas (from 150€)
- And more...

---

## 🚀 Ready to Deploy!

Your ET Auto Švara website is now optimized for static hosting. Simply run `npm run build` and deploy the `out/` directory to your preferred hosting service.
