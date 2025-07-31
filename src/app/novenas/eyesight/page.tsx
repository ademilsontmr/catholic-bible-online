import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Eyesight - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Eyesight with daily prayers, reflections, and guidance. Pray for those in danger of losing their sight and seeking God\'s healing.',
  keywords: [
    'novena for eyesight',
    'eyesight novena',
    'vision prayer',
    'eyesight healing prayer',
    'blindness prayer novena',
    'vision loss prayer',
    'eyesight nine day prayer',
    'vision problems novena',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena for Eyesight - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Eyesight with daily prayers, reflections, and guidance for those seeking vision healing.',
    url: 'https://catholicbibleonline.com/novenas/eyesight',
  },
  twitter: {
    title: 'Novena for Eyesight - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Eyesight with daily prayers, reflections, and guidance for those seeking vision healing.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Disease',
    description: 'Pray for those in danger of losing their eyesight from disease and medical conditions.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Injury',
    description: 'Pray for those in danger of losing their eyesight from injury and accidents.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Old Age',
    description: 'Pray for those in danger of losing their eyesight due to aging and age-related conditions.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Young People',
    description: 'Pray for young people who are in danger of losing their eyesight unexpectedly.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Lack of Medical Care',
    description: 'Pray for those unable to obtain the medical help they need to save their vision.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Medical Professionals',
    description: 'Pray for doctors who care for patients in danger of losing eyesight.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Gratitude',
    description: 'Pray for us to grow in gratitude for the gift of our eyesight.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Submission to God\'s Will',
    description: 'Pray for us to grow in submission to God\'s will when facing vision loss.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Offering Suffering',
    description: 'Pray for us to offer our sufferings of eyesight loss in union with Christ.',
    slug: 'day-9'
  }
]

export default function NovenaForEyesightPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Eyesight
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek God's healing for those in danger of losing their precious gift of sight.
            This traditional novena helps us pray for vision healing and grow in gratitude for the gift of eyesight.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👁️</div>
              <div className="text-sm text-gray-600">Eyesight</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">3</div>
              <div className="text-sm text-gray-600">Virtues</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Novena for Eyesight
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Eyesight is a traditional nine-day prayer designed to help those who are in danger 
              of losing their precious gift of sight. This novena acknowledges the deep fear and suffering that 
              comes with the prospect of vision loss while helping us grow in gratitude for this essential gift.
            </p>
            
            <p className="mb-4">
              The title "Eyesight" reminds us of the incredible blessing of vision that God has given to us. 
              We depend on our sight for so many things in daily life - reading, working, appreciating beauty, 
              and connecting with others. The prospect of losing this gift can be overwhelming and terrifying.
            </p>
            
            <p>
              This novena helps us to pray for various aspects of vision health - from medical healing 
              to spiritual acceptance, while always maintaining hope in God's love and healing power.
            </p>
          </div>
        </section>

        {/* Daily Navigation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            Daily Prayers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {novenaDays.map((day) => (
              <Link
                key={day.day}
                href={`/novenas/eyesight/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God daily for the gift of your eyesight. Gratitude opens our hearts 
                to receive more blessings and healing.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Maintain hope in God's healing power and His plan for your vision. 
                Trust that He can work miracles in your life.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's timing for healing. Vision problems often require 
                time and medical treatment to improve.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's will, whether that means physical healing, 
                acceptance of vision loss, or finding new ways to see.
              </p>
            </div>
          </div>
        </section>

        {/* The Three Theological Virtues */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            The Three Theological Virtues
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-lg font-semibold text-black mb-2">Faith</h3>
              <p className="text-gray-700 text-sm">
                Believe in God's power to heal and His plan for your vision. 
                Trust that He knows what is best for you.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promise to help those who trust in Him. 
                Look forward to the healing and peace He will bring.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and trust in His love for you. 
                Show love for others by praying for their vision health.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Eyesight Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Eyesight devotion is a way of praying for and supporting those facing vision problems, 
            seeking God's healing and guidance for eye health and acceptance.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Eyesight Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👁️</span>
                <span>Vision</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>❤️</span>
                <span>Healing</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Peace</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>✨</span>
                <span>Gratitude</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌟</span>
                <span>Hope</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Pray for those in danger of losing their eyesight</li>
              <li>• Seek God's healing for vision problems</li>
              <li>• Grow in gratitude for the gift of sight</li>
              <li>• Support those facing vision loss</li>
              <li>• Maintain hope and faith in God's healing power</li>
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