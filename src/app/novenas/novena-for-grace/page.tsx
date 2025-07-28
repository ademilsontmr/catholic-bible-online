import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Grace - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Grace with daily prayers, reflections, and guidance. Pray for God\'s grace through the intercession of St. Francis Xavier for missions, the Church, and all people.',
  keywords: [
    'novena for grace',
    'grace novena',
    'st francis xavier novena',
    'st francis xavier prayer',
    'missionary novena',
    'grace prayer',
    'divine grace novena',
    'st francis xavier intercession',
    'catholic novena',
    'novena for divine grace'
  ],
  openGraph: {
    title: 'Novena for Grace - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Grace with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/novena-for-grace',
  },
  twitter: {
    title: 'Novena for Grace - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Grace with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Divine Grace',
    description: 'Pray for the inestimable blessing of living and dying in the state of grace.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Missionary Spirit',
    description: 'Pray for the missionary efforts of the Church throughout the world.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Church Renewal',
    description: 'Pray for the Church to be renewed by the Holy Spirit and show forth the mystery of the Lord.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Christian Unity',
    description: 'Pray for the Spirit of Christ to bring us to the fullness of unity that Jesus desires.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Repentance',
    description: 'Pray for the unrepentant to open their hearts to the divine life of grace.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Baptismal Commitment',
    description: 'Pray to be faithful to our baptismal commitment to Christ.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'God\'s Glory',
    description: 'Pray that our requests may be for the glory of God and the good of our souls.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Divine Mercy',
    description: 'Pray for God\'s loving mercy to be revealed in Jesus.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Eternal Salvation',
    description: 'Pray for the grace to live and die in the state of grace.',
    slug: 'day-9'
  }
]

export default function NovenaForGracePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Grace
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek God's grace through the intercession of St. Francis Xavier, 
            the great missionary and Apostle of the Indies and Japan.
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
            About the Novena for Grace
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Grace is a powerful nine-day prayer that helps us seek God's grace through the intercession 
              of St. Francis Xavier. This novena focuses on praying for missions, the Church, Christian unity, 
              repentance, and our own spiritual growth.
            </p>
            
            <p className="mb-4">
              St. Francis Xavier was one of the first companions of St. Ignatius of Loyola and a co-founder of the Society of Jesus. 
              He became known as the "Apostle of the Indies and Japan" for his missionary work in Asia, where he baptized thousands 
              and spread the Gospel with great zeal and love for souls.
            </p>
            
            <p>
              This novena helps us to honor the memory of this great missionary and to seek through his powerful intercession 
              the inestimable blessings of living and dying in the state of grace, as well as the specific favors we need.
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
                href={`/novenas/novena-for-grace/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in St. Francis Xavier</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. Francis Xavier's powerful intercession and his ability to help you obtain God's grace.
                Turn to him with confidence in every need, especially for missionary work and spiritual growth.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. St. Francis Xavier will not fail to help 
                those who turn to him with trust and confidence for God's grace.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. Francis Xavier. He wants to help you 
                obtain the graces you need for your spiritual growth and the good of your soul.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. Francis Xavier for his intercession and for the graces you receive. 
                Gratitude opens our hearts to receive more blessings and divine grace.
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
                Believe in St. Francis Xavier's powerful intercession and in God's ability to grant us grace through His saints. 
                Trust that God hears and answers our prayers through His holy servant.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's mercy and in St. Francis Xavier's ability to obtain the grace we need. 
                Maintain confidence that God will provide what is best for our salvation and spiritual growth.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for God and for others. Include in your intentions the needs of 
                all those who are seeking God's grace and the missionary efforts of the Church.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to St. Francis Xavier? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to St. Francis Xavier?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Saint Francis Xavier</strong> (1506-1552) was a Spanish Jesuit missionary and one of the first companions 
              of St. Ignatius of Loyola. He is known as the "Apostle of the Indies and Japan" for his extensive missionary work 
              in Asia, where he baptized thousands and spread the Gospel with great zeal.
            </p>
            
            <p className="mb-4">
              <strong>Great Missionary</strong> - St. Francis Xavier traveled extensively throughout Asia, including India, 
              Japan, and other countries, preaching the Gospel and converting many to Christianity. His missionary zeal 
              and love for souls inspired countless others to follow in his footsteps.
            </p>
            
            <p className="mb-4">
              <strong>Patron of Missions</strong> - St. Francis Xavier is the patron saint of missions and missionaries. 
              His life of sacrifice, prayer, and tireless work for the salvation of souls serves as an example for all 
              who are called to spread the Gospel.
            </p>
            
            <p className="mb-4">
              <strong>Divine Grace</strong> - St. Francis Xavier's life was marked by his deep trust in God's grace and 
              his ability to obtain miracles through prayer. He often prayed for the grace to live and die in the state of grace.
            </p>
            
            <p>
              <strong>Feast Day</strong> - St. Francis Xavier is celebrated on December 3rd, and his novena is especially 
              popular among missionaries, those praying for missionary vocations, and anyone seeking God's grace.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 