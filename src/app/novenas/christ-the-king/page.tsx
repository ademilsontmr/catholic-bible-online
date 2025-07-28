import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to Christ the King - Complete 9-Day Prayer Guide',
  description: 'Complete Novena to Christ the King with daily prayers, reflections, and guidance. Pray for the recognition of Christ\'s kingship and the establishment of His kingdom on earth.',
  keywords: [
    'novena to christ the king',
    'christ the king novena',
    'jesus christ king novena',
    'christ the king prayer',
    'king of the universe novena',
    'divine king novena',
    'christ the king intercession',
    'kingdom of christ novena',
    'catholic novena',
    'novena to jesus christ king'
  ],
  openGraph: {
    title: 'Novena to Christ the King - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to Christ the King with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/christ-the-king',
  },
  twitter: {
    title: 'Novena to Christ the King - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to Christ the King with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Divine Kingship',
    description: 'Pray for recognition of Christ as the Most Holy King and Ruler of all nations.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Divine Mercy',
    description: 'Pray for mercy, peace, justice and all good things from the Divine King.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Divine Protection',
    description: 'Pray for protection of families and the land of our birth.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Faithful Guardian',
    description: 'Pray for the Most Faithful One to guard us and protect us from enemies.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Just Judgment',
    description: 'Pray for protection from God\'s Just Judgment and forgiveness of sins.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'King of Mercy',
    description: 'Pray for mercy and forgiveness from Jesus, the King of Mercy.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Great Trust',
    description: 'Pray for the grace to trust in Christ\'s Great Mercy.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Awe-Inspiring King',
    description: 'Pray for the grace to bow before the most awe-inspiring King.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Kingdom Recognition',
    description: 'Pray for Christ\'s reign and kingdom to be recognized on earth.',
    slug: 'day-9'
  }
]

export default function ChristTheKingNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to Christ the King
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to honor Jesus Christ as King of the Universe and pray for 
            the recognition of His divine kingship on earth.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">King</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌍</div>
              <div className="text-sm text-gray-600">Universe</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Novena to Christ the King
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena to Christ the King is a beautiful nine-day prayer that honors Jesus Christ as King of the Universe 
              and prays for the recognition of His divine kingship on earth. This novena helps us acknowledge Christ's 
              sovereignty over all creation and seek His mercy and protection.
            </p>
            
            <p className="mb-4">
              Through this novena, we pray for recognition of Christ's divine kingship, for mercy and peace, for protection 
              of families and nations, for forgiveness of sins, for trust in His mercy, and for the establishment of His 
              kingdom on earth.
            </p>
            
            <p>
              This novena reminds us that Christ is not only our Savior but also our King, who reigns over all nations 
              and whose kingdom is eternal and universal.
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
                href={`/novenas/christ-the-king/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in Christ's Kingship</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in Christ's power as King of the Universe and in His ability to reign over all creation.
                Turn to Him with confidence for all your spiritual needs and royal grace.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. Christ the King will not fail to help 
                those who turn to Him with trust and confidence for royal grace.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions to Christ the King, especially those related to your 
                spiritual growth and the recognition of His kingship.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Christ the King for His reign and for the graces you receive. 
                Gratitude opens our hearts to receive more royal blessings.
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
                Believe in Christ's kingship over all creation and in His power to reign over all nations. 
                Trust that He is truly the King of the Universe.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in Christ's ability to establish His kingdom on earth and to provide what is best for all nations. 
                Maintain confidence that His reign will bring peace and justice.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for God and for Christ the King. Include in your intentions the needs of 
                all nations and peoples who are seeking His kingship and mercy.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to Christ the King? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to Christ the King?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Christ the King</strong> is the title given to Jesus Christ as the sovereign ruler of all creation. 
              This devotion acknowledges that Jesus is not only our Savior and Redeemer but also our King, 
              who has authority over heaven and earth.
            </p>
            
            <p className="mb-4">
              <strong>King of the Universe</strong> - Christ's kingship extends over all creation, all nations, 
              and all peoples. His reign is universal and eternal, transcending all earthly kingdoms and powers. 
              He is the Alpha and Omega, the beginning and the end.
            </p>
            
            <p className="mb-4">
              <strong>Kingdom of God</strong> - Christ's kingdom is not of this world but is a spiritual kingdom 
              of truth, justice, peace, and love. It is established in the hearts of those who accept Him as their King 
              and strive to live according to His teachings.
            </p>
            
            <p className="mb-4">
              <strong>Social Kingship</strong> - Christ's kingship also has a social dimension, calling for the 
              recognition of His authority in all aspects of human life - family, society, culture, and politics. 
              His reign brings true peace and justice to the world.
            </p>
            
            <p>
              <strong>Feast Day</strong> - The Feast of Christ the King is celebrated on the last Sunday of the liturgical year, 
              and this novena is especially popular among those seeking to acknowledge Christ's kingship and to pray 
              for the establishment of His kingdom on earth.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 