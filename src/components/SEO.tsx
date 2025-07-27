import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  url: string
  image?: string
  type?: 'article' | 'website'
  publishedAt?: string
  author?: string
  category?: string
}

export function generateSEO({
  title,
  description,
  url,
  image = '',
  type = 'website',
  publishedAt,
  author,
  category
}: SEOProps): Metadata {
  const fullTitle = `${title} | Catholic Bible Online`
  const fullUrl = `https://catholicbibleonline.com${url}`

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: [
      'catholic blog',
      'catholic faith',
      'catholic prayers',
      'catholic saints',
      'bible study',
      'catholic living',
      'catholic spirituality'
    ],
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName: 'Catholic Bible Online',
      ...(image && {
        images: [
          {
            url: image.startsWith('http') ? image : `https://catholicbibleonline.com${image}`,
            width: 1200,
            height: 630,
            alt: title
          }
        ]
      }),
      type
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title: fullTitle,
      description,
      ...(image && {
        images: [image.startsWith('http') ? image : `https://catholicbibleonline.com${image}`]
      })
    },
    alternates: {
      canonical: fullUrl
    }
  }

  // Add article-specific metadata
  if (type === 'article' && publishedAt) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime: publishedAt,
      authors: author ? [author] : undefined,
      section: category
    }
  }

  return metadata
}

export function generateStructuredData({
  title,
  description,
  url,
  image,
  publishedAt,
  author,
  category
}: SEOProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image ? (image.startsWith('http') ? image : `https://catholicbibleonline.com${image}`) : undefined,
    url: `https://catholicbibleonline.com${url}`,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      '@type': 'Organization',
      name: author || 'Catholic Bible Online',
      url: 'https://catholicbibleonline.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Catholic Bible Online',
      url: 'https://catholicbibleonline.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://catholicbibleonline.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://catholicbibleonline.com${url}`
    },
    articleSection: category,
    inLanguage: 'en-US'
  }

  return structuredData
} 