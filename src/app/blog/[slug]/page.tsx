import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import blogData from '@/data/blog.json'
import { generateSEO, generateStructuredData } from '@/components/SEO'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogData.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Post Not Found | Catholic Bible Online'
    }
  }

  return generateSEO({
    title: post.title,
    description: post.excerpt,
    url: `/blog/${slug}`,
    image: post.image,
    type: 'article',
    publishedAt: post.publishedAt,
    author: post.author,
    category: post.category
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogData.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Find related posts (same category, excluding current post)
  const relatedPosts = blogData
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'How to Pray':
        return 'bg-blue-100 text-blue-800'
      case 'Catholic Living':
        return 'bg-green-100 text-green-800'
      case 'Saints & Feast Days':
        return 'bg-purple-100 text-purple-800'
      case 'Bible & Faith':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  // Generate structured data
  const structuredData = generateStructuredData({
    title: post.title,
    description: post.excerpt,
    url: `/blog/${slug}`,
    image: post.image,
    publishedAt: post.publishedAt,
    author: post.author,
    category: post.category
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href="/blog" className="text-gray-600 hover:text-gray-800">Blog</Link></li>
              <li className="text-gray-400">/</li>
              <li><Link href={`/blog?category=${post.category}`} className="text-gray-600 hover:text-gray-800">{post.category}</Link></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-800 font-medium">{post.title}</li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.readTime}</span>
            </div>
            <h1 className="text-4xl font-bold text-black mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-600 text-sm">
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-lg">No Image</span>
            </div>
          )}

          {/* Article Content */}
          <article className="prose prose-lg max-w-none mb-12">
            <div 
              className="blog-content text-black leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-black mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block"
                  >
                    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                      {relatedPost.image && (
                        <div className="relative h-32 overflow-hidden bg-gray-100 flex items-center justify-center">
                          <span className="text-gray-400 text-xs">No Image</span>
                        </div>
                      )}
                      <div className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(relatedPost.category)}`}>
                          {relatedPost.category}
                        </span>
                        <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Call to Action */}
          <div className="mt-12 text-center bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-black mb-4">
              Continue Your Journey
            </h2>
            <p className="text-black mb-6">
              Explore more Catholic articles and deepen your faith with our collection of prayers, Bible studies, and spiritual guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
              >
                Browse All Articles
              </Link>
              <Link
                href="/prayers"
                className="inline-flex items-center px-6 py-3 border border-gray-600 text-gray-600 font-semibold rounded-lg hover:bg-gray-600 hover:text-white transition-colors"
              >
                Catholic Prayers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 