import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to Saint Maximilian Kolbe - Complete 9-Day Prayer Guide',
  description: 'Complete Novena to Saint Maximilian Kolbe with daily prayers, reflections, and guidance. Pray for St. Maximilian\'s intercession for love, sacrifice, and devotion to Our Lady.',
  keywords: [
    'novena to saint maximilian kolbe',
    'st maximilian kolbe novena',
    'maximilian kolbe novena',
    'st maximilian kolbe prayer',
    'militia immaculata novena',
    'st maximilian kolbe intercession',
    'love and sacrifice novena',
    'st maximilian kolbe martyr',
    'catholic novena',
    'saint maximilian kolbe novena'
  ],
  openGraph: {
    title: 'Novena to Saint Maximilian Kolbe - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to Saint Maximilian Kolbe with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/st-maximilian-kolbe',
  },
  twitter: {
    title: 'Novena to Saint Maximilian Kolbe - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to Saint Maximilian Kolbe with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Greater Love',
    description: 'Pray for the grace to love as St. Maximilian did, laying down our lives for others.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Devotion to Our Lady',
    description: 'Pray for St. Maximilian\'s intercession to grow in devotion to the Blessed Virgin Mary.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Militia Immaculata',
    description: 'Pray for the grace to spread devotion to Our Lady as St. Maximilian did.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Selfless Sacrifice',
    description: 'Pray for the courage to make sacrifices for others as St. Maximilian did.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Love for Persecutors',
    description: 'Pray for the grace to love even those who persecute us, following St. Maximilian\'s example.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Unselfish Love',
    description: 'Pray for the gift of unselfish love for all people, inspired by devotion to Mary.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Service to Others',
    description: 'Pray for the grace to serve others generously as St. Maximilian served.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Humble Service',
    description: 'Pray for the virtue of humility in serving God and neighbor.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Complete Consecration',
    description: 'Complete your consecration to Our Lady through St. Maximilian\'s intercession.',
    slug: 'day-9'
  }
]

export default function StMaximilianKolbeNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to Saint Maximilian Kolbe
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek the intercession of St. Maximilian Kolbe, 
            the martyr of charity who gave his life for another in Auschwitz.
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
            About the Novena to Saint Maximilian Kolbe
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena to Saint Maximilian Kolbe is a powerful nine-day prayer that helps us grow closer to God 
              through the intercession of this great saint and martyr. St. Maximilian Kolbe was a Polish Franciscan 
              friar who gave his life for a stranger in Auschwitz concentration camp.
            </p>
            
            <p className="mb-4">
              St. Maximilian's life was marked by his deep devotion to the Blessed Virgin Mary, his founding of 
              the Militia Immaculata movement, and his ultimate sacrifice of love. He exemplified the words of 
              Jesus: "Greater love than this no man has that a man lay down his life for his friends."
            </p>
            
            <p>
              This novena helps us to trust in St. Maximilian's powerful intercession and to turn to him with 
              confidence in every need, especially for the grace to love God and neighbor more generously.
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
                href={`/novenas/st-maximilian-kolbe/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in St. Maximilian</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. Maximilian's powerful intercession and his ability to help you.
                Turn to him with confidence in every need, especially for the grace to love more generously.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. St. Maximilian will not fail to help 
                those who turn to him with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. Maximilian. He wants to help you 
                with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. Maximilian for his intercession and for the graces you receive. 
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
                Believe in St. Maximilian's powerful intercession and in God's ability to work through His saints. 
                Trust that God hears and answers our prayers through His holy servant.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's mercy and in St. Maximilian's ability to obtain miracles for us. 
                Maintain confidence that God will provide what is best for our salvation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for God and for others. Include in your intentions the needs of 
                all those who are suffering or in need of St. Maximilian's help.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to St. Maximilian Kolbe? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to Saint Maximilian Kolbe?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Saint Maximilian Kolbe</strong> (1894-1941) was a Polish Franciscan friar, priest, and martyr. 
              He is known as the "Martyr of Charity" for giving his life for a fellow prisoner in Auschwitz.
            </p>
            
            <p className="mb-4">
              <strong>Militia Immaculata</strong> - St. Maximilian founded the Militia Immaculata (Knights of the Immaculata) 
              movement in 1917, dedicated to spreading devotion to the Blessed Virgin Mary and converting sinners 
              through her intercession.
            </p>
            
            <p className="mb-4">
              <strong>Martyr of Charity</strong> - In Auschwitz, when a prisoner was selected for execution, 
              St. Maximilian volunteered to take his place, saying "I am a Catholic priest. Let me take his place. 
              I am old. He has a wife and children."
            </p>
            
            <p className="mb-4">
              <strong>Devotion to Our Lady</strong> - St. Maximilian had an intense devotion to the Immaculate 
              Conception and spread this devotion throughout the world through his writings and missionary work.
            </p>
            
            <p>
              <strong>Feast Day</strong> - St. Maximilian Kolbe is celebrated on August 14th, the day before 
              the Solemnity of the Assumption of the Blessed Virgin Mary, to whom he was so devoted.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 