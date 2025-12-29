import { Metadata } from 'next'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import blogData from '@/data/blog.json'
import { BlogPost } from '@/types/blog'


export const metadata: Metadata = {
  title: 'Catholic Living - Daily Catholic Life',
  description: 'Discover how to live your Catholic faith in the modern world. Find guidance on family life, work, relationships, and daily spiritual practices.',
  keywords: [
    'catholic living',
    'catholic family life',
    'catholic marriage',
    'catholic parenting',
    'catholic work life',
    'daily catholic practices',
    'catholic lifestyle'
  ],
  openGraph: {
    title: 'Catholic Living - Daily Catholic Life',
    description: 'Discover how to live your Catholic faith in the modern world.',
    url: 'https://catholicbibleonline.com/blog/Catholic-Living',
  },
  twitter: {
    title: 'Catholic Living - Daily Catholic Life',
    description: 'Discover how to live your Catholic faith in the modern world.',
  },
}

const POSTS_PER_PAGE = 9

export default function CatholicLivingPage() {
  const currentPage = 1
  
  // Filter posts by "Catholic Living" category
  const catholicLivingPosts = (blogData as BlogPost[]).filter((post: BlogPost) => post.category === 'Catholic Living')
  
  // Sort by date (newest first)
  const sortedPosts = catholicLivingPosts.sort((a: BlogPost, b: BlogPost) => {
    const dateA = a.date || a.publishedAt || ''
    const dateB = b.date || b.publishedAt || ''
    return new Date(dateB).getTime() - new Date(dateA).getTime()
  })
  
  // Calculate pagination
  const totalPosts = sortedPosts.length
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE)
  const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages))
  const startIndex = (validCurrentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = sortedPosts.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Catholic Living
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how to live your Catholic faith in the modern world through family life, work, relationships, and daily spiritual practices.
            </p>
            <div className="mt-6">
              <Link 
                href="/blog"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition-colors"
              >
                ← Back to All Articles
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {currentPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentPosts.map((post: BlogPost) => (
                <BlogCard 
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  image={post.image}
                  readTime={post.readTime}
                />
              ))}
              {/* Fill empty grid spaces on the last page */}
              {validCurrentPage === totalPages && currentPosts.length % 3 !== 0 && 
                Array.from({ length: 3 - (currentPosts.length % 3) }).map((_, index) => (
                  <div key={`empty-${index}`} className="hidden lg:block" />
                ))
              }
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-4">
                {validCurrentPage > 1 && (
                  <Link
                    href={validCurrentPage === 2 
                      ? '/blog/Catholic-Living'
                      : `/blog/Catholic-Living?page=${validCurrentPage - 1}`
                    }
                    className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-emerald-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    ← Previous
                  </Link>
                )}
                
                <span className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-semibold rounded-lg shadow-sm">
                  Page {validCurrentPage} of {totalPages}
                </span>
                
                {validCurrentPage < totalPages && (
                  <Link
                    href={`/blog/Catholic-Living?page=${validCurrentPage + 1}`}
                    className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-emerald-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Next →
                  </Link>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600">Check back soon for new Catholic living guides and family practices.</p>
          </div>
        )}
      </div>

      {/* Category Navigation */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Explore Other Categories</h3>
          <div className="flex flex-wrap gap-3">
            <Link 
              href="/blog/How-to-Pray"
              className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
            >
              How to Pray
            </Link>
            <Link 
              href="/blog/Saints-Feast-Days"
              className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
            >
              Saints & Feast Days
            </Link>
            <Link 
              href="/blog/Bible-Faith"
              className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors"
            >
              Bible & Faith
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
} 