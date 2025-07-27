# Deploy Instructions

## 🚀 Cloudflare Pages Deployment

### 1. Prepare the Repository

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial Catholic Bible Online website"
git push origin main
```

### 2. Deploy to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** → **Create a project**
3. Connect your GitHub repository
4. Configure build settings:
   - **Project name**: `catholic-bible-online`
   - **Production branch**: `main`
   - **Framework preset**: `Next.js`
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Root directory**: `/` (leave empty)

### 3. Environment Variables

Add the following environment variable:
- **SITE_URL**: `https://your-domain.pages.dev` (replace with your actual domain)

### 4. Custom Domain (Optional)

1. In your Cloudflare Pages project, go to **Custom domains**
2. Add your custom domain (e.g., `catholicbibleonline.com`)
3. Update the `SITE_URL` environment variable to match your custom domain

## 🔧 Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📊 Performance Optimization

The website is optimized for:
- **Lighthouse Score**: >95
- **Core Web Vitals**: All green
- **SEO**: Perfect score
- **Accessibility**: WCAG 2.1 compliant

## 🔍 SEO Features

- ✅ Dynamic meta tags for all pages
- ✅ Open Graph and Twitter Cards
- ✅ JSON-LD structured data
- ✅ Automatic sitemap generation
- ✅ Robots.txt optimization
- ✅ Canonical URLs
- ✅ Breadcrumb navigation

## 📱 Responsive Design

- ✅ Mobile-first approach
- ✅ Tablet optimization
- ✅ Desktop optimization
- ✅ Touch-friendly navigation

## 🚀 Performance Features

- ✅ Static Site Generation (SSG)
- ✅ Image optimization
- ✅ Font optimization
- ✅ Code splitting
- ✅ Lazy loading

## 📈 Analytics Setup

### Google Analytics 4
1. Create a GA4 property
2. Add the measurement ID to environment variables
3. Update the tracking code in `layout.tsx`

### Google Search Console
1. Add your domain to Search Console
2. Submit the sitemap: `https://yourdomain.com/sitemap.xml`
3. Monitor indexing status

## 🔒 Security

- ✅ HTTPS enforced
- ✅ Security headers
- ✅ Content Security Policy
- ✅ XSS protection

## 📞 Support

For deployment issues:
1. Check Cloudflare Pages logs
2. Verify build settings
3. Ensure all dependencies are installed
4. Check environment variables

---

**Catholic Bible Online** - Ready for production deployment! 🎉 