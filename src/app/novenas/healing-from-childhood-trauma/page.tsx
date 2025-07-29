import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healing from Childhood Trauma Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Healing from Childhood Trauma Novena with daily prayers, reflections, and guidance. Pray for healing, restoration, and peace from childhood wounds.',
  keywords: [
    'healing from childhood trauma novena',
    'childhood trauma novena',
    'trauma healing novena',
    'childhood wounds novena',
    'trauma recovery novena',
    'emotional healing novena',
    'childhood abuse healing',
    'trauma prayer novena',
    'healing prayer novena',
    'catholic trauma healing',
    'childhood trauma prayer'
  ],
  openGraph: {
    title: 'Healing from Childhood Trauma Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Healing from Childhood Trauma Novena with daily prayers, reflections, and guidance for emotional and spiritual healing.',
    url: 'https://catholicbibleonline.com/novenas/healing-from-childhood-trauma',
  },
  twitter: {
    title: 'Healing from Childhood Trauma Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Healing from Childhood Trauma Novena with daily prayers, reflections, and guidance for emotional and spiritual healing.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Healing from Abuse',
    description: 'Pray for healing from childhood trauma caused by abuse and mistreatment.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Healing from Accidents',
    description: 'Pray for healing from childhood trauma caused by accidents and disasters.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Healing from Neglect',
    description: 'Pray for healing from childhood trauma caused by neglect and abandonment.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Recognition of Trauma',
    description: 'Pray for those who do not recognize that their suffering stems from childhood trauma.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Perseverance in Recovery',
    description: 'Pray for perseverance and strength in the journey of recovery from childhood trauma.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Humility to Seek Help',
    description: 'Pray for humility to seek professional help and support in healing from trauma.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Self-Knowledge',
    description: 'Pray for self-knowledge to understand the roots of emotional suffering and trauma.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Trust in God',
    description: 'Pray for trust in God\'s healing power and plan for our restoration.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Offering Suffering',
    description: 'Pray for the grace to offer our suffering to God for the good of souls.',
    slug: 'day-9'
  }
]

export default function HealingFromChildhoodTraumaNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Healing from Childhood Trauma Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek God's healing grace for those suffering from childhood trauma.
            This traditional novena helps individuals find restoration, peace, and emotional healing through God's infinite mercy and love.
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
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Healing from Childhood Trauma</span>
          </nav>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Healing from Childhood Trauma Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Healing from Childhood Trauma Novena is a powerful nine-day prayer that helps us seek God's healing grace 
              for those suffering from childhood trauma. This traditional novena helps individuals find restoration, peace, 
              and emotional healing through God's infinite mercy and love.
            </p>
            
            <p className="mb-4">
              Childhood trauma can leave deep emotional wounds that affect us throughout our lives. This novena is designed 
              to help those who have experienced trauma in their early years find healing, peace, and restoration through God's grace.
            </p>
            
            <p>
              Each day focuses on a different aspect of healing, from recognizing the trauma to offering our suffering to God. 
              Through prayer and reflection, we can find the strength to overcome the effects of childhood trauma and grow closer to God.
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
                href={`/novenas/healing-from-childhood-trauma/${day.slug}`}
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
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's healing power and His ability to restore you.
                Turn to Him with confidence in every need.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will not fail to help those who turn to Him with trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to God.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His help and healing grace.
                Gratitude opens our hearts to receive more graces.
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
                Believe in God's healing power and His ability to restore us.
                Trust that He can bring healing to even the deepest wounds.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's mercy and His plan for our healing and restoration.
                He is always ready to help us in our journey to wholeness.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God with all our heart and trust in His love for us.
                Show our love through prayer and surrender to His will.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Healing from Childhood Trauma Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Healing from Childhood Trauma devotion is a way of seeking God's healing grace and restoration 
            for those who have suffered from childhood trauma and its lasting effects.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Healing Devotion</h3>
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
                <span>⏰</span>
                <span>Nine Days</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🆘</span>
                <span>Restoration</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🖼️</span>
                <span>Grace</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📅</span>
                <span>Daily</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Trust in God's healing power and His ability to restore us</li>
              <li>• Find peace and healing from childhood wounds</li>
              <li>• Experience God's mercy and love in our suffering</li>
              <li>• Grow closer to God through prayer and surrender</li>
              <li>• Offer our suffering to God for the good of souls</li>
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