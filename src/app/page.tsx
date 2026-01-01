import Link from 'next/link'
import type { Metadata } from 'next'
import SearchBox from '@/components/SearchBox'
import BlogCard from '@/components/BlogCard'
import blogData from '@/data/blog.json'

export const metadata: Metadata = {
  title: 'Catholic Bible Online - Read the Complete Catholic Bible Free',
  description: 'Read the complete Catholic Bible online for free. All 73 books with prayers, novenas, saints, devotionals, and daily reflections to strengthen your faith.',
  keywords: [
    'catholic bible online',
    'catholic bible',
    'holy bible',
    'catholic scripture',
    'bible study',
    'catholic faith',
    'catholic prayers',
    'novenas',
    'catholic saints',
    'devotionals',
    'bible reading',
    'free catholic bible'
  ],
  openGraph: {
    title: 'Catholic Bible Online - Read the Complete Catholic Bible Free',
    description: 'Read the complete Catholic Bible online for free. All 73 books with prayers, novenas, saints, and daily devotionals.',
    url: 'https://catholicbibleonline.com',
  },
  twitter: {
    title: 'Catholic Bible Online - Read the Complete Catholic Bible Free',
    description: 'Read the complete Catholic Bible online for free. All 73 books with prayers, novenas, saints, and daily devotionals.',
  }
}

// Função para embaralhar array (Fisher-Yates shuffle)
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function HomePage() {
  // Embaralhar todos os artigos e pegar 9 aleatórios
  const shuffledPosts = shuffleArray(blogData as any[])
  const randomPosts = shuffledPosts.slice(0, 9)
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 gradient-text mb-6">
              Catholic Bible Online
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Read the complete Catholic Bible online for free. All 73 books with easy navigation, prayers, and daily reflections.
            </p>
            
            {/* Search Box */}
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBox />
            </div>
            
            <Link
              href="/bible"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg"
            >
              Read the Bible
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 gradient-text text-center mb-12">
            Popular Books
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <Link href="/bible/genesis" className="book-card">
              <article className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">📖</div>
                <h3 className="font-semibold text-black">Genesis</h3>
                <p className="text-sm text-black">Creation Story</p>
              </article>
            </Link>
            <Link href="/bible/psalms" className="book-card">
              <article className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🙏</div>
                <h3 className="font-semibold text-black">Psalms</h3>
                <p className="text-sm text-black">Prayers & Hymns</p>
              </article>
            </Link>
            <Link href="/bible/matthew" className="book-card">
              <article className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">✝️</div>
                <h3 className="font-semibold text-black">Matthew</h3>
                <p className="text-sm text-black">Gospel of Christ</p>
              </article>
            </Link>
            <Link href="/bible/john" className="book-card">
              <article className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🌟</div>
                <h3 className="font-semibold text-black">John</h3>
                <p className="text-sm text-black">Gospel of Love</p>
              </article>
            </Link>
            <Link href="/bible/revelation" className="book-card">
              <article className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🕊</div>
                <h3 className="font-semibold text-black">Revelation</h3>
                <p className="text-sm text-black">Apocalypse</p>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Faith Section - NEW */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 gradient-text text-center mb-12">
            Explore Your Catholic Faith
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/prayers" className="group">
              <article className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all group-hover:scale-105">
                <div className="text-4xl mb-3">🙏</div>
                <h3 className="font-bold text-gray-900 mb-1">Catholic Prayers</h3>
                <p className="text-sm text-gray-600">Daily prayers & devotions</p>
              </article>
            </Link>
            <Link href="/novenas" className="group">
              <article className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-all group-hover:scale-105">
                <div className="text-4xl mb-3">📿</div>
                <h3 className="font-bold text-gray-900 mb-1">Novenas</h3>
                <p className="text-sm text-gray-600">9-day prayer devotions</p>
              </article>
            </Link>
            <Link href="/saints" className="group">
              <article className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl hover:shadow-lg transition-all group-hover:scale-105">
                <div className="text-4xl mb-3">👼</div>
                <h3 className="font-bold text-gray-900 mb-1">Catholic Saints</h3>
                <p className="text-sm text-gray-600">Lives of holy men & women</p>
              </article>
            </Link>
            <Link href="/devotionals" className="group">
              <article className="text-center p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl hover:shadow-lg transition-all group-hover:scale-105">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="font-bold text-gray-900 mb-1">Devotionals</h3>
                <p className="text-sm text-gray-600">Daily spiritual reading</p>
              </article>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 gradient-text mb-4">
              Latest Articles & Reflections
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover inspiring Catholic teachings, saint stories, and spiritual guidance to deepen your faith journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {randomPosts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                readTime={post.readTime}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-400 to-emerald-500 text-white font-semibold rounded-lg hover:from-emerald-500 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 gradient-text text-center mb-12">
            Why Choose Catholic Bible Online?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-black mb-4">Complete Catholic Bible</h3>
              <p className="text-gray-700">
                Access all 73 books of the Catholic Bible including the deuterocanonical books, 
                completely free online.
              </p>
            </article>
            <article className="text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-black mb-4">Easy Navigation</h3>
              <p className="text-gray-700">
                Navigate easily through over 1,300 chapters with our 
                intuitive interface and powerful search functionality.
              </p>
            </article>
            <article className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-black mb-4">Daily Reflections</h3>
              <p className="text-gray-700">
                Each chapter includes thoughtful Catholic reflections to help you 
                understand and apply God&apos;s Word to your daily life.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 gradient-text mb-6">
            Start Your Bible Journey Today
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Discover the richness of Catholic Scripture with our complete online Bible. 
            Begin reading, reflecting, and growing in your faith.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/bible" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Browse All Books
            </Link>
            <Link 
              href="/prayers" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Catholic Prayers
            </Link>
            <Link 
              href="/devotionals" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Daily Devotionals
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
