import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Catholic Bible Online\'s mission to provide free access to the Douay-Rheims Catholic Bible with reflections, prayers, and spiritual resources for Catholics worldwide.',
  keywords: 'about catholic bible online, douay rheims bible, catholic resources, bible study, catholic faith, spiritual growth',
  openGraph: {
    title: 'About Us | Catholic Bible Online',
    description: 'Discover our mission to bring the Word of God to Catholics around the world through free online Bible access and spiritual resources.',
    type: 'website',
    url: 'https://catholicbibleonline.com/about',
    siteName: 'Catholic Bible Online'
  },
  twitter: {
    card: 'summary',
    title: 'About Us | Catholic Bible Online',
    description: 'Discover our mission to bring the Word of God to Catholics around the world through free online Bible access and spiritual resources.'
  }
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            About Catholic Bible Online
          </h1>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Bringing the Word of God to Catholics around the world through accessible, 
            beautiful, and spiritually enriching online Bible study.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">Our Mission</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-lg text-black text-justify leading-relaxed mb-6">
              Catholic Bible Online was created with a simple yet profound mission: to make the Sacred Scriptures 
              accessible to every Catholic, anywhere in the world, completely free of charge. We believe that God's 
              Word should be available to all who seek it, without barriers of cost, location, or technology.
            </p>
            <p className="text-lg text-black text-justify leading-relaxed">
              Our platform provides the complete Douay-Rheims Catholic Bible with thoughtful reflections, 
              traditional prayers, and spiritual resources designed to deepen your relationship with Christ 
              and enhance your understanding of the Faith.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 p-3 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black">Sacred Scripture</h3>
              </div>
              <p className="text-black">
                We honor the Sacred Scriptures as the inspired Word of God, presenting the Douay-Rheims Bible 
                with reverence and accuracy, maintaining the traditional Catholic translation that has nourished 
                souls for centuries.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 p-3 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0 9c-1.657 0-3-4.03-3-9s1.343-9 3-9m0 9c1.657 0 3-4.03 3-9s-1.343-9-3-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black">Universal Access</h3>
              </div>
              <p className="text-black">
                Every Catholic deserves free access to the Bible. We are committed to keeping our resources 
                completely free, ensuring that financial constraints never prevent anyone from accessing 
                God's Word.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 p-3 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black">Spiritual Growth</h3>
              </div>
              <p className="text-black">
                Beyond providing Scripture, we offer thoughtful Catholic reflections and spiritual insights 
                to help deepen your understanding and grow in your relationship with God through His Word.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 p-3 rounded-lg mr-4">
                  <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black">Catholic Tradition</h3>
              </div>
              <p className="text-black">
                We remain faithful to Catholic teaching and tradition, presenting Scripture within the context 
                of the Church's wisdom and magisterium, helping readers understand the Bible as Catholics 
                have for centuries.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">What We Offer</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-gray-600 text-white rounded-full p-2 mt-1">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Complete Douay-Rheims Bible</h3>
                <p className="text-black">
                  Access all 73 books of the Catholic Bible in the traditional Douay-Rheims translation, 
                  formatted beautifully for easy reading and study.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gray-600 text-white rounded-full p-2 mt-1">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Catholic Reflections</h3>
                <p className="text-black">
                  Every chapter includes thoughtful Catholic reflections to help you understand and apply 
                  God's Word to your daily life and spiritual journey.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gray-600 text-white rounded-full p-2 mt-1">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Traditional Prayers</h3>
                <p className="text-black">
                  Discover a collection of traditional Catholic prayers, novenas, and devotions to enrich 
                  your prayer life and deepen your faith.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gray-600 text-white rounded-full p-2 mt-1">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Saints & Inspiration</h3>
                <p className="text-black">
                  Learn from the lives of Catholic saints and find inspiration for your own journey of faith 
                  through their examples of holiness and devotion.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-gray-600 text-white rounded-full p-2 mt-1">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">Mobile-Friendly Design</h3>
                <p className="text-black">
                  Read Scripture comfortably on any device - desktop, tablet, or smartphone - with our 
                  responsive design that adapts to your screen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="mb-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-black mb-6 text-center">Our Commitment</h2>
            <div className="text-center">
              <p className="text-lg text-black text-justify leading-relaxed mb-6">
                We are committed to maintaining this resource as a completely free service to the Catholic 
                community worldwide. Our goal is not profit, but the greater glory of God and the spiritual 
                benefit of His people. We believe that the Word of God should be freely given, just as it 
                was freely received.
              </p>
              <p className="text-lg text-black text-justify leading-relaxed mb-6">
                As we continue to grow and develop this platform, we remain dedicated to preserving the 
                accuracy, beauty, and reverence that the Sacred Scriptures deserve. We invite you to join 
                us in this mission by sharing our resources with fellow Catholics and supporting us through 
                your prayers.
              </p>
              <div className="text-center">
                <p className="text-xl font-bold text-black italic">
                  "The Word of God is living and effective, sharper than any two-edged sword." - Hebrews 4:12
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mb-12">
          <div className="text-center bg-white border border-gray-200 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-black mb-4">Get Involved</h2>
            <p className="text-black mb-6">
              Have questions, suggestions, or want to contribute to our mission? We'd love to hear from you.
            </p>
            <div className="space-x-4">
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                href="/bible"
                className="inline-flex items-center px-6 py-3 border border-gray-600 text-gray-600 rounded-md hover:bg-gray-50 transition-colors"
              >
                Start Reading
              </Link>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center">
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 