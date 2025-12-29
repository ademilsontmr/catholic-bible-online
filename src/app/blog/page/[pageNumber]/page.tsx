import { Metadata } from 'next'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import blogData from '@/data/blog.json'
import { BlogPost } from '@/types/blog'
import { notFound } from 'next/navigation'

const POSTS_PER_PAGE = 9
const categories = ['All', 'How to Pray', 'Catholic Living', 'Saints & Feast Days', 'Bible & Faith']

type Props = {
  params: Promise<{ pageNumber: string }>
}

export async function generateStaticParams() {
  const allPosts = blogData as BlogPost[]
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)
  
  return Array.from({ length: totalPages }, (_, i) => ({
    pageNumber: String(i + 1),
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { pageNumber: pageNumberStr } = await params
  const pageNumber = parseInt(pageNumberStr)
  
  return {
    title: `Catholic Blog - Page ${pageNumber}`,
    description: 'Discover inspiring Catholic articles, prayers, and spiritual guidance. Read about saints, Catholic living, Bible study, and how to pray.',
    openGraph: {
      title: `Catholic Blog - Page ${pageNumber}`,
      description: 'Discover inspiring Catholic articles, prayers, and spiritual guidance.',
      url: `https://catholicbibleonline.com/blog/page/${pageNumber}`,
    },
  }
}

export default async function BlogPaginationPage({ params }: Props) {
  const { pageNumber: pageNumberStr } = await params
  const pageNumber = parseInt(pageNumberStr)
  
  // Validate page number
  if (isNaN(pageNumber) || pageNumber < 1) {
    notFound()
  }
  
  const allPosts = blogData as BlogPost[]
  const sortedPosts = [...allPosts].sort((a, b) => a.slug.localeCompare(b.slug))
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE)
  
  // Check if page exists
  if (pageNumber > totalPages) {
    notFound()
  }
  
  // Calculate pagination
  const startIndex = (pageNumber - 1) * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE
  const currentPosts = sortedPosts.slice(startIndex, endIndex)

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
                    return '/blog'
                }
              }
              
              return (
                <Link
                  key={category}
                  href={getCategoryLink(category)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    category === 'All'
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
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4">
          {pageNumber > 1 && (
            <Link
              href={pageNumber === 2 ? '/blog' : `/blog/page/${pageNumber - 1}`}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-purple-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              ← Previous
            </Link>
          )}
          
          <span className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 font-semibold rounded-lg shadow-sm">
            Page {pageNumber} of {totalPages}
          </span>
          
          {pageNumber < totalPages && (
            <Link
              href={`/blog/page/${pageNumber + 1}`}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-purple-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Next →
            </Link>
          )}
        </div>

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
