import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to St. Philomena - Complete 9-Day Prayer Guide',
  description: 'Complete Novena to St. Philomena with daily prayers, reflections, and guidance. Pray for St. Philomena\'s intercession and miraculous help.',
  keywords: [
    'novena to st philomena',
    'st philomena novena',
    'philomena novena',
    'st philomena prayer',
    'virgin martyr novena',
    'st philomena intercession',
    'philomena virgin martyr',
    'st philomena of padua',
    'catholic novena',
    'saint philomena novena'
  ],
  openGraph: {
    title: 'Novena to St. Philomena - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to St. Philomena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/st-philomena',
  },
  twitter: {
    title: 'Novena to St. Philomena - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to St. Philomena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Virgin and Martyr',
    description: 'Pray for purity and courage like St. Philomena, virgin and martyr.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Eminent Chastity',
    description: 'Pray for the virtue of chastity and purity of heart.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Profession of Virtue',
    description: 'Pray for the grace to profess and live every virtue.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Divine Protection',
    description: 'Pray for St. Philomena\'s protection in all dangers.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Suffering and Fortitude',
    description: 'Pray for strength in suffering and temptation.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Heavenly Intercession',
    description: 'Pray for St. Philomena\'s powerful intercession with God.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Spouse of Christ',
    description: 'Pray for the grace to be a faithful spouse of Christ.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Divine Mercy',
    description: 'Pray for God\'s mercy through St. Philomena\'s intercession.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Holy Trinity',
    description: 'Pray for the graces of the Most Holy Trinity.',
    slug: 'day-9'
  }
]

export default function StPhilomenaNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to St. Philomena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek the intercession of St. Philomena, virgin and martyr.
            This traditional novena helps us grow closer to God and experience St. Philomena's miraculous help and protection.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🙏</div>
              <div className="text-sm text-gray-600">Saints</div>
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
            About the Novena to St. Philomena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena to St. Philomena is a powerful nine-day prayer that helps us grow closer to God and experience 
              St. Philomena's miraculous intercession. St. Philomena was a young virgin and martyr who was always pleasing 
              in God's sight by her eminent chastity and the profession of every virtue.
            </p>
            
            <p className="mb-4">
              St. Philomena's life was marked by her unwavering faith, purity, and courage in the face of persecution. 
              She is known for her powerful intercession and miraculous help, especially for those who seek her protection 
              in times of danger and need.
            </p>
            
            <p>
              This novena helps us to trust in St. Philomena's powerful intercession and to turn to her with confidence 
              in every need, knowing that she will never refuse to help those who have recourse to her.
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
                href={`/novenas/st-philomena/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in St. Philomena</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. Philomena's miraculous powers and her ability to help you.
                Turn to her with confidence in every need, especially for protection and purity.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. St. Philomena will not fail to help 
                those who turn to her with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. Philomena. She wants to help you 
                with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. Philomena for her intercession and for the graces you receive. 
                Gratitude opens our hearts to receive more blessings and miracles.
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
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Faith</h3>
              <p className="text-gray-700 text-sm">
                Believe in St. Philomena's miraculous powers and in God's ability to work through his saints. 
                Trust that God hears and answers our prayers through his servants.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's mercy and in St. Philomena's ability to obtain miracles for us. 
                Maintain confidence that God will provide what is best for our salvation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for God and for others. Include in your intentions the needs of 
                all those who are suffering or in need of St. Philomena's help.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to St. Philomena? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to St. Philomena?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>St. Philomena</strong> was a young virgin and martyr who lived in the early days of the Church. 
              She is known for her eminent chastity and the profession of every virtue, making her always pleasing in God's sight.
            </p>
            
            <p className="mb-4">
              <strong>Virgin and Martyr</strong> - St. Philomena's life was marked by her unwavering commitment to purity 
              and her courage in the face of persecution. She chose to remain faithful to Christ even unto death.
            </p>
            
            <p className="mb-4">
              <strong>Powerful Intercessor</strong> - St. Philomena is known for her powerful intercession with God. 
              She is particularly invoked for protection, purity, and miraculous help in times of need.
            </p>
            
            <p className="mb-4">
              <strong>Spouse of Christ</strong> - St. Philomena is honored as a spouse of Christ, having given her life 
              completely to Him through her virginity and martyrdom.
            </p>
            
            <p>
              <strong>Feast Day</strong> - St. Philomena's feast day is celebrated on August 11th, and she is 
              particularly venerated by those seeking protection, purity, and miraculous help.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 