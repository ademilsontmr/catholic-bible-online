import Link from 'next/link'

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  category: string
  image: string
  publishedAt: string
  readTime: string
}

export default function BlogCard({ slug, title, excerpt, category, image, publishedAt, readTime }: BlogCardProps) {
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

  return (
    <article className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <Link href={`/blog/${slug}`} className="block">
        {image && (
          <div className="relative h-48 overflow-hidden bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400 text-sm">No Image</span>
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}>
              {category}
            </span>
            <span className="text-sm text-gray-500">{readTime}</span>
          </div>
          <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {excerpt}
          </p>
          <div className="flex items-center justify-between">
            <time className="text-sm text-gray-500">{formatDate(publishedAt)}</time>
            <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
              Read More →
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
} 