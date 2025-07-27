# Catholic Bible Online

A modern, SEO-optimized Catholic Bible website built with Next.js 14, featuring the complete Douay-Rheims translation with easy navigation through all 73 books and 1,300+ chapters.

## 🚀 Features

- **Complete Catholic Bible**: All 73 books with Douay-Rheims translation
- **SEO Optimized**: Dynamic meta tags, Open Graph, Twitter cards, and JSON-LD structured data
- **Static Site Generation**: Pre-rendered pages for optimal performance
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Fast Navigation**: Easy browsing through books and chapters
- **Breadcrumbs**: Clear navigation hierarchy
- **Chapter Navigation**: Previous/Next chapter navigation
- **Automatic Sitemap**: Generated sitemap for search engines

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Hosting**: Cloudflare Pages ready
- **SEO**: next-sitemap for automatic sitemap generation

## 📁 Project Structure

```
src/
├── app/
│   ├── bible/
│   │   ├── [book]/
│   │   │   ├── [chapter]/
│   │   │   │   └── page.tsx          # Chapter page
│   │   │   └── page.tsx              # Book page
│   │   └── page.tsx                  # Bible index
│   ├── prayers/
│   │   └── page.tsx                  # Prayers page
│   ├── novenas/
│   │   └── page.tsx                  # Novenas page
│   ├── saints/
│   │   └── page.tsx                  # Saints page
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Home page
│   └── globals.css                   # Global styles
├── data/
│   └── bible.json                    # Bible data
└── ...
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/catholic-bible-online.git
cd catholic-bible-online
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This will:
- Build the Next.js application
- Generate static pages for all Bible chapters
- Create a sitemap.xml file
- Create a robots.txt file

## 📖 Bible Data Structure

The Bible data is stored in `src/data/bible.json` with the following structure:

```json
{
  "genesis": {
    "name": "Genesis",
    "testament": "old",
    "chapters": [
      ["Verse 1", "Verse 2", "..."],
      ["Verse 1", "Verse 2", "..."]
    ]
  }
}
```

## 🔍 SEO Features

- **Dynamic Meta Tags**: Each page has optimized title and description
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **JSON-LD**: Structured data for search engines
- **Canonical URLs**: Proper canonical URL structure
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions

## 📱 Responsive Design

The website is fully responsive with:
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly navigation
- Readable typography on all devices

## 🚀 Deployment

### Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Set build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
   - Node.js version: 18

### Environment Variables

Set the following environment variable:
```
SITE_URL=https://yourdomain.com
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For support, please open an issue on GitHub or contact us at support@catholicbibleonline.com

---

**Catholic Bible Online** - Bringing the Word of God to the digital age.
