import { Metadata } from 'next'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import blogData from '@/data/blog.json'

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
    title: 'Catholic Blog | Catholic Bible Online',
    description: 'Discover inspiring Catholic articles, prayers, and spiritual guidance.',
    url: 'https://catholicbibleonline.com/blog',
  },
  twitter: {
    title: 'Catholic Blog | Catholic Bible Online',
    description: 'Discover inspiring Catholic articles, prayers, and spiritual guidance.',
  }
}

const POSTS_PER_PAGE = 9
const categories = ['All', 'How to Pray', 'Catholic Living', 'Saints & Feast Days', 'Bible & Faith']

interface BlogPageProps {
  searchParams: Promise<{ category?: string; page?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams
  const currentCategory = params.category || 'All'
  const currentPage = parseInt(params.page || '1')
  
  // Filter posts by category
  const filteredPosts = currentCategory === 'All' 
    ? blogData 
    : blogData.filter(post => post.category === currentCategory)
  
  // Pagination
  const totalPosts = filteredPosts.length
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE)
  
  // Ensure current page is within valid range
  const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages))
  const startIndex = (validCurrentPage - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Catholic Blog
          </h1>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Discover inspiring articles, prayers, and spiritual guidance to deepen your Catholic faith and grow closer to God.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog?category=${category === 'All' ? '' : category}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  currentCategory === category
                    ? 'bg-gray-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </Link>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
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
                  publishedAt={post.publishedAt}
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
              <div className="flex justify-center items-center space-x-2">
                {validCurrentPage > 1 && (
                  <Link
                    href={`/blog?category=${currentCategory === 'All' ? '' : currentCategory}&page=${validCurrentPage - 1}`}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Previous
                  </Link>
                )}
                
                <span className="px-4 py-2 text-gray-600">
                  Page {validCurrentPage} of {totalPages}
                </span>
                
                {validCurrentPage < totalPages && (
                  <Link
                    href={`/blog?category=${currentCategory === 'All' ? '' : currentCategory}&page=${validCurrentPage + 1}`}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Next
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
        <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4">
            Stay Connected
          </h2>
          <p className="text-black mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest Catholic articles, prayers, and spiritual insights directly in your inbox.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
} 