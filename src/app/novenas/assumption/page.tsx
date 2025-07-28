import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Assumption Novena - Complete 9-Day Prayer Guide',
  description: 'Complete The Assumption Novena with daily prayers, reflections, and guidance. Pray for Mary\'s intercession and prepare for the glory of heaven.',
  keywords: [
    'the assumption novena',
    'assumption novena',
    'mary assumption novena',
    'assumption prayer',
    'mary queen assumed into heaven',
    'assumption of mary novena',
    'heavenly assumption novena',
    'mary assumption intercession',
    'catholic novena',
    'novena to mary assumption'
  ],
  openGraph: {
    title: 'The Assumption Novena - Complete 9-Day Prayer Guide',
    description: 'Complete The Assumption Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/assumption',
  },
  twitter: {
    title: 'The Assumption Novena - Complete 9-Day Prayer Guide',
    description: 'Complete The Assumption Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Heavenly Glory',
    description: 'Pray for the grace to rejoice in Mary\'s Assumption into heaven.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Heroic Martyrdom',
    description: 'Pray for strength to endure trials as Mary did on earth.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Throne in Heaven',
    description: 'Pray for the grace to be prepared for our heavenly throne.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Freedom from Sin',
    description: 'Pray for deliverance from sin and impurity.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Heavenly Perspective',
    description: 'Pray for the grace to see earth from heaven\'s perspective.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Triumphant Death',
    description: 'Pray for courage to face death as the gate to heaven.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Body and Soul',
    description: 'Pray for the hope of body and soul reunited in heaven.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Pilgrim Journey',
    description: 'Pray for guidance on our earthly pilgrimage.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Eternal Vision',
    description: 'Pray for the grace to enjoy the vision of God for eternity.',
    slug: 'day-9'
  }
]

export default function AssumptionNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            The Assumption Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to honor Mary's Assumption into heaven and seek her intercession 
            for our own journey to eternal glory.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Queen</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⭐</div>
              <div className="text-sm text-gray-600">Heaven</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About The Assumption Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Assumption Novena is a beautiful nine-day prayer that honors Mary's glorious Assumption 
              into heaven. This novena helps us reflect on Mary's journey from earthly martyrdom to heavenly 
              glory and prepares us for our own eternal destiny.
            </p>
            
            <p className="mb-4">
              Through this novena, we pray for heavenly glory, strength in trials, preparation for heaven, 
              freedom from sin, heavenly perspective, courage in death, hope of resurrection, guidance on 
              our pilgrimage, and the eternal vision of God.
            </p>
            
            <p>
              This novena reminds us that Mary, as Queen Assumed into Heaven, intercedes for us and helps 
              us prepare for the day when we too will be called to eternal glory.
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
                href={`/novenas/assumption/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in Mary's Intercession</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in Mary's powerful intercession as Queen of Heaven.
                Turn to her with confidence for all your spiritual needs and heavenly preparation.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. Mary will not fail to help 
                those who turn to her with trust and confidence for heavenly grace.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions to Mary, especially those related to your 
                spiritual growth and preparation for heaven.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Mary for her intercession and for the graces you receive. 
                Gratitude opens our hearts to receive more heavenly blessings.
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
                Believe in Mary's Assumption and in her power to intercede for us. 
                Trust that God hears and answers our prayers through Mary's mediation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in Mary's ability to help us prepare for heaven. 
                Maintain confidence that she will provide what is best for our salvation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for God and for Mary. Include in your intentions the needs of 
                all souls who are preparing for their heavenly destiny.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to the Assumption? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to the Assumption?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>The Assumption of Mary</strong> is the Catholic dogma that teaches that Mary, the Mother of God, 
              was taken body and soul into heaven at the end of her earthly life. This glorious event 
              is a sign of hope for all Christians, showing us our own destiny.
            </p>
            
            <p className="mb-4">
              <strong>Queen of Heaven</strong> - Mary, as Queen Assumed into Heaven, reigns with her Son Jesus Christ. 
              She intercedes for us before the throne of God and helps us prepare for our own heavenly 
              destiny. Her Assumption is a promise of our own resurrection.
            </p>
            
            <p className="mb-4">
              <strong>Source of Hope</strong> - The Assumption gives us hope that our bodies too will one day 
              be glorified and reunited with our souls in heaven. Mary's Assumption is a preview of 
              what awaits all the faithful.
            </p>
            
            <p className="mb-4">
              <strong>Model of Perseverance</strong> - Mary's Assumption shows us the reward for a life of 
              faithfulness to God. After years of heroic martyrdom on earth, she was taken to the 
              throne prepared for her in heaven.
            </p>
            
            <p>
              <strong>Feast Day</strong> - The Feast of the Assumption is celebrated on August 15th, and this 
              novena is especially popular among those seeking Mary's intercession for heavenly grace 
              and preparation for eternal life.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 