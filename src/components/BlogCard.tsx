import Link from 'next/link'

interface BlogCardProps {
  slug: string
  title: string
  excerpt: string
  category: string
  image: string
  readTime: string
}

export default function BlogCard({ slug, title, excerpt, category, image, readTime }: BlogCardProps) {
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

  return (
    <article className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
      <Link href={`/blog/${slug}`} className="block">
        {image && (
          <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">No Image</span>
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className={`px-4 py-2 rounded-full text-xs font-bold ${getCategoryColor(category)} transform group-hover:scale-105 transition-transform duration-200`}>
              {category}
            </span>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium">{readTime}</span>
          </div>
          <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {excerpt}
          </p>
          <div className="flex items-center justify-end">
            <span className="text-blue-600 font-bold text-sm group-hover:text-blue-700 transition-colors flex items-center gap-1">
              Read More 
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
} 