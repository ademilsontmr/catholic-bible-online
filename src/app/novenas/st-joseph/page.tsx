import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to St. Joseph - Complete 9-Day Prayer Guide',
  description: 'Complete Novena to St. Joseph with daily prayers, reflections, and guidance. Pray for St. Joseph\'s intercession and protection.',
  keywords: [
    'novena to st joseph',
    'st joseph novena',
    'joseph novena',
    'st joseph prayer',
    'foster father novena',
    'st joseph intercession',
    'joseph husband of mary',
    'st joseph of nazareth',
    'catholic novena',
    'saint joseph novena'
  ],
  openGraph: {
    title: 'Novena to St. Joseph - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to St. Joseph with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/st-joseph',
  },
  twitter: {
    title: 'Novena to St. Joseph - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to St. Joseph with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Foster Father of Jesus',
    description: 'Pray for St. Joseph\'s role as the foster father of Jesus and his protection of the Holy Family.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Virginal Husband of Mary',
    description: 'Pray for St. Joseph\'s pure and holy marriage to the Blessed Virgin Mary.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Man Chosen by the Blessed Trinity',
    description: 'Pray for St. Joseph\'s special selection by God the Father, Son, and Holy Spirit.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Faithful Servant',
    description: 'Pray for St. Joseph\'s perfect obedience and service to God.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Patron of the Church',
    description: 'Pray for St. Joseph\'s protection and guidance of the Catholic Church.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Patron of Families',
    description: 'Pray for St. Joseph\'s intercession for all families and homes.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Patron of Workers',
    description: 'Pray for St. Joseph\'s blessing on all who labor and work.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Friend in Suffering',
    description: 'Pray for St. Joseph\'s comfort and support in times of trial.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Patron of a Happy Death',
    description: 'Pray for St. Joseph\'s intercession for a holy and peaceful death.',
    slug: 'day-9'
  }
]

export default function StJosephNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to St. Joseph
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek the intercession of St. Joseph, foster father of Jesus and husband of Mary.
            This traditional novena helps us grow closer to God and experience St. Joseph's protection and guidance.
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
            About the Novena to St. Joseph
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena to St. Joseph is a powerful nine-day prayer that helps us grow closer to God and experience 
              St. Joseph's miraculous intercession. St. Joseph was the foster father of Jesus and the virginal husband 
              of Mary, chosen by God to protect and care for the Holy Family.
            </p>
            
            <p className="mb-4">
              St. Joseph's life was marked by his perfect obedience to God's will, his humble service, and his 
              unwavering faith. He is known as the patron of the Church, families, workers, and a happy death, 
              and is particularly invoked for protection and guidance in all aspects of life.
            </p>
            
            <p>
              This novena helps us to trust in St. Joseph's powerful intercession and to turn to him with confidence 
              in every need, knowing that he will never refuse to help those who have recourse to him.
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
                href={`/novenas/st-joseph/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in St. Joseph</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. Joseph's powerful intercession and his ability to help you.
                Turn to him with confidence in every need, especially for family and work matters.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. St. Joseph will not fail to help 
                those who turn to him with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. Joseph. He wants to help you 
                with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. Joseph for his intercession and for the graces you receive. 
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
                Believe in St. Joseph's powerful intercession and in God's ability to work through his saints. 
                Trust that God hears and answers our prayers through his servants.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's mercy and in St. Joseph's ability to obtain miracles for us. 
                Maintain confidence that God will provide what is best for our salvation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for God and for others. Include in your intentions the needs of 
                all those who are suffering or in need of St. Joseph's help.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to St. Joseph? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to St. Joseph?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>St. Joseph</strong> was the foster father of Jesus and the virginal husband of Mary. 
              He was chosen by God to protect and care for the Holy Family, making him a central figure in salvation history.
            </p>
            
            <p className="mb-4">
              <strong>Foster Father of Jesus</strong> - St. Joseph was privileged to share in the mystery of the Incarnation 
              as the foster father of Jesus. He provided for, protected, and raised the Son of God with perfect love and devotion.
            </p>
            
            <p className="mb-4">
              <strong>Patron of the Church</strong> - St. Joseph is the patron of the Catholic Church, having been the head 
              of the Holy Family, which was the starting point of the Church on earth.
            </p>
            
            <p className="mb-4">
              <strong>Patron of Families</strong> - St. Joseph is the patron of families, having been the head of the Holy Family 
              and providing a model of fatherhood, work, and family life.
            </p>
            
            <p>
              <strong>Feast Day</strong> - St. Joseph's feast day is celebrated on March 19th, and he is 
              particularly venerated by those seeking protection, guidance, and help in family matters.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 