import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena of Confidence to the Sacred Heart - Complete 9-Day Prayer Guide',
  description: 'Complete Novena of Confidence to the Sacred Heart with daily prayers, reflections, and guidance. Pray with complete confidence to the Sacred Heart of Jesus for His mercy and grace.',
  keywords: [
    'novena of confidence to the sacred heart',
    'sacred heart confidence novena',
    'sacred heart novena',
    'sacred heart prayer',
    'jesus sacred heart novena',
    'sacred heart trust novena',
    'sacred heart intercession',
    'confidence novena',
    'catholic novena',
    'novena to the sacred heart'
  ],
  openGraph: {
    title: 'Novena of Confidence to the Sacred Heart - Complete 9-Day Prayer Guide',
    description: 'Complete Novena of Confidence to the Sacred Heart with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/sacred-heart-confidence',
  },
  twitter: {
    title: 'Novena of Confidence to the Sacred Heart - Complete 9-Day Prayer Guide',
    description: 'Complete Novena of Confidence to the Sacred Heart with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Confidence in Sacred Heart',
    description: 'Pray with complete confidence to the Sacred Heart of Jesus.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Trust in Sacred Heart',
    description: 'Pray trusting completely in the Sacred Heart of Jesus.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Mercy of Sacred Heart',
    description: 'Pray throwing yourself on the mercy of the Sacred Heart.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Love of Sacred Heart',
    description: 'Pray believing in the love of the Sacred Heart for you.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Kingdom of Sacred Heart',
    description: 'Pray for the Kingdom of the Sacred Heart to come.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Favors from Sacred Heart',
    description: 'Pray earnestly imploring the Sacred Heart for your favor.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Broken Heart of Jesus',
    description: 'Pray placing your intention in the open, broken Heart of Jesus.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Precious Blood',
    description: 'Pray that the Eternal Father may see your prayer covered with Precious Blood.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Complete Trust',
    description: 'Pray placing all your trust in the Sacred Heart of Jesus.',
    slug: 'day-9'
  }
]

export default function SacredHeartConfidenceNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena of Confidence to the Sacred Heart
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer of complete confidence to the Sacred Heart of Jesus, 
            placing all our intentions in His open, broken Heart with absolute trust.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">❤️</div>
              <div className="text-sm text-gray-600">Heart</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🤝</div>
              <div className="text-sm text-gray-600">Trust</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Novena of Confidence to the Sacred Heart
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena of Confidence to the Sacred Heart is a beautiful nine-day prayer that teaches us 
              to place complete confidence in the Sacred Heart of Jesus. This novena helps us entrust all 
              our intentions to His open, broken Heart with absolute trust and confidence.
            </p>
            
            <p className="mb-4">
              Through this novena, we learn to confide our intentions to the Sacred Heart, trusting that 
              He will do what His Sacred Heart inspires. We throw ourselves on His mercy, believing in His 
              love for us and placing all our trust in Him.
            </p>
            
            <p>
              This novena reminds us that when we place our prayers in the Sacred Heart of Jesus, covered 
              with His Precious Blood, the Eternal Father will not refuse them, for they become the prayers of Jesus Himself.
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
                href={`/novenas/sacred-heart-confidence/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Complete Confidence</h3>
              <p className="text-gray-700 text-sm">
                Approach the Sacred Heart of Jesus with complete confidence and trust. 
                Believe that He will hear and answer your prayers according to His will.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. The Sacred Heart of Jesus will not fail 
                to help those who turn to Him with complete confidence and trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions to the Sacred Heart of Jesus. 
                Trust that He will do what His Sacred Heart inspires for your good.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank the Sacred Heart of Jesus for His love and for the graces you receive. 
                Gratitude opens our hearts to receive more spiritual blessings.
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
                Believe in the Sacred Heart of Jesus as the source of all love and mercy. 
                Trust in His power and love to help us in all our needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in the Sacred Heart's promise to help all who trust in Him. 
                Maintain confidence that He will provide the grace you need.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for the Sacred Heart of Jesus and for others. Include in your intentions the needs of 
                all who are suffering and in need of His mercy.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to the Sacred Heart? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to the Sacred Heart?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>The Sacred Heart of Jesus</strong> is the physical heart of Jesus Christ, which represents His infinite love 
              for humanity. This devotion honors His Heart as the symbol of His divine love, mercy, and compassion 
              for all people.
            </p>
            
            <p className="mb-4">
              <strong>Symbol of Love</strong> - The Sacred Heart is the perfect symbol of God's love for us. It represents 
              the burning love that Jesus has for each person, a love that led Him to suffer and die on the Cross 
              for our salvation.
            </p>
            
            <p className="mb-4">
              <strong>Source of Mercy</strong> - The Sacred Heart is the source of all mercy and grace. From this Heart 
              flows the blood and water that cleanse us from sin and give us new life. It is the fountain of 
              all spiritual blessings.
            </p>
            
            <p className="mb-4">
              <strong>Open and Broken</strong> - The Sacred Heart is often depicted as open and wounded, pierced by the lance 
              on the Cross. This represents His willingness to receive all our prayers and intentions, and His 
              suffering love for us.
            </p>
            
            <p>
              <strong>Feast Day</strong> - The Feast of the Sacred Heart of Jesus is celebrated on the Friday after the 
              second Sunday after Pentecost, and this novena is especially popular among those seeking to grow 
              in confidence, trust in God's mercy, and experience the love of the Sacred Heart.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 