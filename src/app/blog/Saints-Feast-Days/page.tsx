import { Metadata } from 'next'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import blogData from '@/data/blog.json'


export const metadata: Metadata = {
  title: 'Saints & Feast Days - Catholic Saints',
  description: 'Discover the lives of Catholic saints, their feast days, and how their examples can inspire your spiritual journey today.',
  keywords: [
    'catholic saints',
    'saint feast days',
    'saint biographies',
    'catholic saints lives',
    'saint stories',
    'catholic saints examples',
    'saint devotion'
  ],
  openGraph: {
    title: 'Saints & Feast Days - Catholic Saints | Catholic Bible Online',
    description: 'Discover the lives of Catholic saints and their feast days.',
    url: 'https://catholicbibleonline.com/blog/Saints-Feast-Days',
  },
  twitter: {
    title: 'Saints & Feast Days - Catholic Saints | Catholic Bible Online',
    description: 'Discover the lives of Catholic saints and their feast days.',
  },
}

interface SaintsFeastDaysPageProps {
  searchParams: Promise<{ page?: string }>
}

export default async function SaintsFeastDaysPage({ searchParams }: SaintsFeastDaysPageProps) {
  const params = await searchParams
  const currentPage = parseInt(params.page || '1')
  const POSTS_PER_PAGE = 9
  
  // Filter posts by "Saints & Feast Days" category
  const saintsPosts = blogData.filter(post => post.category === 'Saints & Feast Days')
  
  // Sort by date (newest first)
  const sortedPosts = saintsPosts.sort((a, b) => {
    const dateA = (a as any).date || (a as any).publishedAt || ''
    const dateB = (b as any).date || (b as any).publishedAt || ''
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-violet-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Saints & Feast Days
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the inspiring lives of Catholic saints, their feast days, and how their examples can guide your spiritual journey.
            </p>
            <div className="mt-6">
              <Link 
                href="/blog"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors"
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
              {currentPosts.map((post) => (
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
                    href={`/blog/Saints-Feast-Days?page=${validCurrentPage - 1}`}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-purple-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    ← Previous
                  </Link>
                )}
                
                <span className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-semibold rounded-lg shadow-sm">
                  Page {validCurrentPage} of {totalPages}
                </span>
                
                {validCurrentPage < totalPages && (
                  <Link
                    href={`/blog/Saints-Feast-Days?page=${validCurrentPage + 1}`}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-purple-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
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
            <p className="text-gray-600">Check back soon for new saint biographies and feast day celebrations.</p>
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
              href="/blog/Catholic-Living"
              className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
            >
              Catholic Living
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