import { Metadata } from 'next'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import blogData from '@/data/blog.json'
import type { BlogData, BlogPost } from '@/types/blog'


export const metadata: Metadata = {
  title: 'Bible & Faith - Catholic Bible Study & Fasting Articles',
  description: 'Explore Catholic Bible study, Scripture interpretation, faith teachings, and comprehensive guides on Catholic fasting practices. Deepen your understanding of God\'s Word, Catholic doctrine, and spiritual discipline.',
  keywords: [
    'catholic bible study',
    'bible interpretation',
    'scripture study',
    'catholic faith',
    'bible teachings',
    'catholic doctrine',
    'scripture reflection',
    'catholic fasting',
    'fasting prayer',
    'fasting spiritual discipline',
    'fasting lent',
    'fasting catholic tradition',
    'fasting bible',
    'fasting christian practice',
    'fasting spiritual growth',
    'fasting penance',
    'fasting eucharist',
    'fasting saints',
    'fasting beatitudes',
    'fasting mary',
    'fasting conversion',
    'fasting confession',
    'fasting poor',
    'fasting modern times',
    'fasting spiritual warfare',
    'fasting detachment',
    'fasting ash wednesday',
    'fasting good friday',
    'fasting poverty spirit',
    'fasting obedience',
    'fasting sacrifice'
  ],
  openGraph: {
    title: 'Bible & Faith - Catholic Bible Study & Fasting Articles',
    description: 'Explore Catholic Bible study, Scripture interpretation, faith teachings, and comprehensive guides on Catholic fasting practices.',
    url: 'https://catholicbibleonline.com/blog/Bible-Faith',
  },
  twitter: {
    title: 'Bible & Faith - Catholic Bible Study & Fasting Articles',
    description: 'Explore Catholic Bible study, Scripture interpretation, faith teachings, and comprehensive guides on Catholic fasting practices.',
  },
}

interface BibleFaithPageProps {
  searchParams: Promise<{ page?: string }>
}

// Tipar os dados importados do JSON
const typedBlogData = blogData as BlogData

export default async function BibleFaithPage({ searchParams }: BibleFaithPageProps) {
  const params = await searchParams
  const currentPage = parseInt(params.page || '1')
  const POSTS_PER_PAGE = 9
  
  // Filtrar posts pela categoria "Bible & Faith"
  const bibleFaithPosts: BlogPost[] = (typedBlogData as BlogPost[]).filter((post: BlogPost) => post.category === 'Bible & Faith')
  
  // Ordenar por data (mais recentes primeiro)
  const sortedPosts: BlogPost[] = [...bibleFaithPosts].sort((a: BlogPost, b: BlogPost) => {
    const dateA = new Date(a.publishedAt || a.date || '1970-01-01').getTime()
    const dateB = new Date(b.publishedAt || b.date || '1970-01-01').getTime()
    return dateB - dateA
  })
  
  // Calcular paginação
  const totalPosts = sortedPosts.length
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE)
  const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages))
  const startIndex = (validCurrentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts: BlogPost[] = sortedPosts.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Bible & Faith
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore Catholic Bible study, Scripture interpretation, and faith teachings to deepen your understanding of God's Word.
            </p>
            <div className="mt-6">
              <Link 
                href="/blog"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
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
                      ? '/blog/Bible-Faith'
                      : `/blog/Bible-Faith?page=${validCurrentPage - 1}`
                    }
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    ← Previous
                  </Link>
                )}
                
                <span className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-semibold rounded-lg shadow-sm">
                  Page {validCurrentPage} of {totalPages}
                </span>
                
                {validCurrentPage < totalPages && (
                  <Link
                    href={`/blog/Bible-Faith?page=${validCurrentPage + 1}`}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
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
            <p className="text-gray-600">Check back soon for new Bible study guides and faith teachings.</p>
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
              href="/blog/Saints-Feast-Days"
              className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
            >
              Saints & Feast Days
            </Link>

          </div>
        </div>
      </div>
    </div>
  )
} 