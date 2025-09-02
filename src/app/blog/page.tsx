import { Metadata } from 'next'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import blogData from '@/data/blog.json'
import { BlogPost } from '@/types/blog'


export const metadata: Metadata = {
  title: 'Catholic Blog',
  description: 'Discover inspiring Catholic articles, prayers, and spiritual guidance. Read about saints, Catholic living, Bible study, and how to pray.',
  keywords: [
    'catholic blog',
    'catholic articles',
    'catholic prayers',
    'catholic saints',
    'bible study',
    'catholic living',
    'catholic spirituality'
  ],
  openGraph: {
    title: 'Catholic Blog',
    description: 'Discover inspiring Catholic articles, prayers, and spiritual guidance.',
    url: 'https://catholicbibleonline.com/blog',
  },
  twitter: {
    title: 'Catholic Blog',
    description: 'Discover inspiring Catholic articles, prayers, and spiritual guidance.',
  }
}

const POSTS_PER_PAGE = 9
const categories = ['All', 'How to Pray', 'Catholic Living', 'Saints & Feast Days', 'Bible & Faith']

interface BlogPageProps {
  searchParams: Promise<{ category?: string; page?: string }>
}

// Force dynamic rendering
export const dynamic = 'force-dynamic'

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const currentCategory = params.category === 'All' || !params.category ? 'All' : params.category
  const currentPage = parseInt(params.page || '1')
  

  
  // Filter posts by category
  const filteredPosts = currentCategory === 'All' || !currentCategory
    ? (blogData as BlogPost[])
    : (blogData as BlogPost[]).filter((post: BlogPost) => post.category === currentCategory)
  
  // Shuffle posts randomly
  const shuffledPosts = [...filteredPosts].sort(() => Math.random() - 0.5)
  

  
  // Pagination
  const totalPosts = shuffledPosts.length
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE)
  
  // Ensure current page is within valid range
  const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages))
  const startIndex = (validCurrentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = shuffledPosts.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12 bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 rounded-2xl p-8 border border-gray-100">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 gradient-text mb-4">
            Catholic Blog
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover inspiring articles, prayers, and spiritual guidance to deepen your Catholic faith and grow closer to God.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const getCategoryLink = (cat: string) => {
                switch (cat) {
                  case 'How to Pray':
                    return '/blog/How-to-Pray'
                  case 'Catholic Living':
                    return '/blog/Catholic-Living'
                  case 'Saints & Feast Days':
                    return '/blog/Saints-Feast-Days'
                  case 'Bible & Faith':
                    return '/blog/Bible-Faith'

                  default:
                    return cat === 'All' ? '/blog' : `/blog?category=${cat}`
                }
              }
              
              return (
                <Link
                  key={category}
                  href={getCategoryLink(category)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    currentCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                      : category === 'How to Pray'
                      ? 'bg-gradient-to-r from-blue-400 to-blue-500 text-white hover:from-blue-500 hover:to-blue-600'
                      : category === 'Catholic Living'
                      ? 'bg-gradient-to-r from-emerald-400 to-emerald-500 text-white hover:from-emerald-500 hover:to-emerald-600'
                      : category === 'Saints & Feast Days'
                      ? 'bg-gradient-to-r from-purple-400 to-purple-500 text-white hover:from-purple-500 hover:to-purple-600'
                      : category === 'Bible & Faith'
                      ? 'bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600'

                      : 'bg-gradient-to-r from-gray-400 to-gray-500 text-white hover:from-gray-500 hover:to-gray-600'
                  }`}
                >
                  {category}
                </Link>
              )
            })}
          </div>
        </div>

        {/* Blog Posts Grid */}
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
                      ? (currentCategory === 'All' ? '/blog' : `/blog?category=${currentCategory}`)
                      : (currentCategory === 'All' 
                          ? `/blog?page=${validCurrentPage - 1}`
                          : `/blog?category=${currentCategory}&page=${validCurrentPage - 1}`
                        )
                    }
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    ← Previous
                  </Link>
                )}
                
                <span className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-semibold rounded-lg shadow-sm">
                  Page {validCurrentPage} of {totalPages}
                </span>
                
                {validCurrentPage < totalPages && (
                  <Link
                    href={currentCategory === 'All' 
                      ? `/blog?page=${validCurrentPage + 1}`
                      : `/blog?category=${currentCategory}&page=${validCurrentPage + 1}`
                    }
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
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No posts found
            </h3>
            <p className="text-gray-500">
              No posts found in the "{currentCategory}" category.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 rounded-2xl p-8 border border-gray-100">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 gradient-text mb-4">
            Stay Connected
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter to receive the latest Catholic articles, prayers, and spiritual insights directly in your inbox.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
} 