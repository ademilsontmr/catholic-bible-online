import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import blogData from '@/data/blog.json'
import { generateSEO, generateStructuredData } from '@/components/SEO'
import ShareButton from '@/components/ShareButton'
import { getRelatedBlogArticles } from '@/lib/relatedArticles'
import { addInternalLinks } from '@/lib/contentInterlinking'
import type { BlogData, BlogPost } from '@/types/blog'

const typedBlogData = blogData as BlogData

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return typedBlogData.map((post: BlogPost) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = typedBlogData.find((p: BlogPost) => p.slug === slug)

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
    author: post.author,
    category: post.category
  })
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = typedBlogData.find((p: BlogPost) => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Get intelligently related posts based on content similarity
  const relatedPosts = getRelatedBlogArticles(slug, 3)

  // Process content to add internal links
  const processedContent = addInternalLinks(post.content, slug)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'How to Pray':
        return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
      case 'Catholic Living':
        return 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg'
      case 'Saints & Feast Days':
        return 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg'
      case 'Bible & Faith':
        return 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white shadow-lg'
    }
  }

  // Generate structured data
  const structuredData = generateStructuredData({
    title: post.title,
    description: post.excerpt,
    url: `/blog/${slug}`,
    image: post.image,
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
              <li><span className="text-gray-600">{post.category}</span></li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-800 font-medium">{post.title}</li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-8 bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 rounded-2xl p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-4 py-2 rounded-full text-sm font-bold ${getCategoryColor(post.category)} shadow-lg`}>
                {post.category}
              </span>
              <span className="text-gray-600 text-sm bg-white px-3 py-2 rounded-full font-medium shadow-sm">{post.readTime}</span>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-600 text-sm">
              <span className="bg-white px-4 py-2 rounded-full shadow-sm font-medium">By {post.author}</span>
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
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
          </article>

          {/* Share Section */}
          <section className="border-t border-gray-200 pt-8 mb-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                Share This Article
              </h2>
              <ShareButton 
                title={post.title}
                url={`/blog/${slug}`}
                excerpt={post.excerpt}
              />
            </div>
          </section>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <section className="border-t border-gray-200 pt-8 mb-8">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-2 text-center">
                📚 Related Articles
              </h2>
              <p className="text-center text-gray-600 mb-6 text-sm">
                Continue exploring topics related to this article
              </p>
              <div className="space-y-4">
                {relatedPosts.map((relatedPost: BlogPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="block bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 rounded-xl p-4 md:p-5 hover:shadow-md transition-all duration-300 group border border-gray-100 hover:border-blue-200"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap self-start ${getCategoryColor(relatedPost.category)}`}>
                        {relatedPost.category}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-base leading-snug">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {relatedPost.readTime}
                          <span className="ml-auto text-blue-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                            Read article
                            <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Call to Action */}
          <div className="mt-12 text-center bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 rounded-2xl p-8 border border-gray-100">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-4">
              Continue Your Journey
            </h2>
            <p className="text-gray-700 mb-8">
              Explore more Catholic articles and deepen your faith with our collection of prayers, Bible studies, and spiritual guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Browse All Articles
              </Link>
              <Link
                href="/prayers"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
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