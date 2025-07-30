import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Cancer - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Cancer with daily prayers, reflections, and guidance. Pray for healing, strength, and divine comfort for cancer patients and their families.',
  keywords: [
    'novena for cancer',
    'cancer novena',
    'prayer for cancer patients',
    'catholic prayer for cancer',
    'novena for healing',
    'prayer for cancer healing',
    'catholic novena for cancer',
    'prayer for cancer patients and families',
    'novena for cancer recovery',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena for Cancer - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Cancer with daily prayers, reflections, and guidance for spiritual healing.',
    url: 'https://catholicbibleonline.com/novenas/cancer',
  },
  twitter: {
    title: 'Novena for Cancer - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Cancer with daily prayers, reflections, and guidance for spiritual healing.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Trust',
    description: 'Pray for trust in God\'s plan and His ability to grant you strength and healing in all situations.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Hope',
    description: 'Pray for hope in God\'s promise to give you strength during long battles with cancer.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Love',
    description: 'Pray for love for God and courage to face cancer recurrence with faith.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Humility',
    description: 'Pray for humility to accept God\'s help and strength to face terminal cancer with grace.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Purity',
    description: 'Pray for purity of heart and strength to endure difficult cancer treatments.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Obedience',
    description: 'Pray for obedience to God\'s will and strength to overcome discouragement in cancer battle.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Perseverance',
    description: 'Pray for perseverance in prayer and strength to endure physical and emotional suffering.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Intercession',
    description: 'Pray for the intercession of saints and for support from medical professionals and loved ones.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Gratitude',
    description: 'Pray with gratitude for God\'s gift of healing and His care through medical professionals.',
    slug: 'day-9'
  }
]

export default function NovenaForCancerPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Cancer
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek God's healing, strength, and divine comfort for cancer patients and their families.
            This traditional novena helps us grow closer to God and experience His healing presence during difficult health challenges.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏥</div>
              <div className="text-sm text-gray-600">Healing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">3</div>
              <div className="text-sm text-gray-600">Virtues</div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">About the Novena for Cancer</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Cancer is a traditional nine-day prayer that helps cancer patients, their families, and caregivers find strength, hope, and divine comfort during the difficult journey of battling cancer. This novena draws on God's infinite power and love to grant us the grace of healing and perseverance in all situations.
            </p>
            <p className="mb-4">
              Each day focuses on a different aspect of the cancer journey - from initial diagnosis to long-term battles, from treatment side effects to terminal care. Through prayer and reflection, we seek God's guidance and strength to face each challenge with faith and courage.
            </p>
            <p>
              This novena reminds us that God is our ultimate healer and that He will always provide us with the strength we need to face any health challenge when we turn to Him with trust and faith.
            </p>
          </div>
        </section>

        {/* Daily Navigation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">Daily Prayers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {novenaDays.map((day) => (
              <Link
                key={day.day}
                href={`/novenas/cancer/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">Trust completely in God's plan for your life and His ability to grant you healing. Believe that He is working for your good, even in illness.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">Pray this novena with persistence and faith. God will not fail to help those who turn to Him with trust, especially in times of illness.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">Present your specific health concerns and challenges to God. He wants to help you with the particular difficulties you face in your cancer journey.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">Thank God for His healing power and the gift of medical care. Gratitude opens our hearts to receive more graces and healing.</p>
            </div>
          </div>
        </section>

        {/* The Three Theological Virtues */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">The Three Theological Virtues</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-lg font-semibold text-black mb-2">Faith</h3>
              <p className="text-gray-700 text-sm">Believe in God's power to heal and grant you strength. Trust that He is always with you in every health challenge.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">Hope in God's promise to give you strength and healing. He is always ready to help you find peace and comfort.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">Love God with all your heart and trust in His love for you, even during the most challenging health times.</p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">What is the Cancer Devotion?</h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Cancer devotion is a way of seeking God's healing power and divine comfort for cancer patients, their families, and caregivers during the difficult journey of battling cancer.
          </p>
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Cancer Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🏥</span>
                <span>Healing</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💪</span>
                <span>Strength</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌟</span>
                <span>Faith</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🔄</span>
                <span>Perseverance</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📅</span>
                <span>Daily Practice</span>
              </span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-700 mb-4">This devotion helps us to:</p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Trust in God's healing plan during cancer treatment</li>
              <li>• Find strength to face physical and emotional suffering</li>
              <li>• Overcome discouragement and maintain hope</li>
              <li>• Accept medical treatment with faith and courage</li>
              <li>• Support cancer patients and their families</li>
            </ul>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <Link
            href="/novenas"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to All Novenas
          </Link>
        </div>
      </div>
    </div>
  )
} 