# Groove - Deployment Guide

## Pre-deployment Checklist

### 1. Update Configuration
- [ ] Update URLs in `index.html` (og:url, twitter:url)
- [ ] Add actual domain in `robots.txt`
- [ ] Update manifest.json with correct URLs
- [ ] Configure environment variables (.env)

### 2. Assets
- [ ] Add favicon.svg to `/public`
- [ ] Add apple-touch-icon.png (180x180) to `/public`
- [ ] Add og-image.jpg (1200x630) to `/public`
- [ ] Optimize all images

### 3. Build and Test
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### 4. Hosting Options

#### Option A: Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

#### Option B: Netlify
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy --prod`
3. Set build command: `npm run build`
4. Set publish directory: `dist`

#### Option C: Manual (any static host)
1. Run `npm run build`
2. Upload the `dist` folder to your hosting
3. Configure redirects for SPA:
   - All routes should serve index.html

### 5. Post-deployment
- [ ] Test all routes
- [ ] Verify SEO meta tags
- [ ] Run Lighthouse audit
- [ ] Test 404 page
- [ ] Verify forms work
- [ ] Check console for errors

## Performance Optimizations Included

✅ Lazy loading for all routes
✅ Code splitting (React, UI, Animation vendors)
✅ Minification and tree-shaking
✅ Optimized font loading
✅ Asset organization and caching
✅ Console logs removed in production
✅ Error boundaries for graceful failure
✅ SEO meta tags and Open Graph

## Bundle Size Tips

To analyze bundle size:
```bash
npm run build:analyze
```

## Environment Variables

Create a `.env` file based on `.env.example` if needed.

## Support

For issues or questions, refer to:
- Vite docs: https://vitejs.dev
- React Router: https://reactrouter.com
