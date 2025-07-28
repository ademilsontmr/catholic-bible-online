import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to Saint Gerard - Complete 9-Day Prayer Guide',
  description: 'Complete Novena to Saint Gerard with daily prayers, reflections, and guidance. Pray for St. Gerard\'s intercession for motherhood, childbirth, and family needs.',
  keywords: [
    'novena to saint gerard',
    'st gerard novena',
    'gerard novena',
    'st gerard prayer',
    'motherhood novena',
    'st gerard intercession',
    'childbirth novena',
    'st gerard majella',
    'catholic novena',
    'saint gerard novena'
  ],
  openGraph: {
    title: 'Novena to Saint Gerard - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to Saint Gerard with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/st-gerard',
  },
  twitter: {
    title: 'Novena to Saint Gerard - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to Saint Gerard with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Gratitude for Gifts',
    description: 'Thank God for the gifts and privileges granted to St. Gerard.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Divine Mercy',
    description: 'Pray for St. Gerard\'s intercession before the throne of Divine Mercy.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'God\'s Will',
    description: 'Pray for the grace to always fulfill God\'s holy will as St. Gerard did.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Master of Life',
    description: 'Pray for the blessing of offspring and children to raise up to God.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Parenthood',
    description: 'Pray for the gift of parenthood and raising children in faith.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Heirs of Heaven',
    description: 'Pray for children who will be heirs to the kingdom of God\'s glory.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Powerful Intercession',
    description: 'Pray for St. Gerard\'s powerful intercession in all our needs.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Wonder Worker',
    description: 'Pray for St. Gerard\'s miraculous help as the wonder-worker of our day.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Complete Trust',
    description: 'Complete your trust in St. Gerard\'s intercession and experience his help.',
    slug: 'day-9'
  }
]

export default function StGerardNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to Saint Gerard
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek the intercession of St. Gerard Majella, 
            the patron saint of mothers, expectant mothers, and childbirth.
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
            About the Novena to Saint Gerard
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena to Saint Gerard is a powerful nine-day prayer that helps us grow closer to God 
              through the intercession of this great saint. St. Gerard Majella was a Redemptorist lay brother 
              known for his holiness, miracles, and special care for mothers and families.
            </p>
            
            <p className="mb-4">
              St. Gerard's life was marked by his deep trust in God, his obedience to God's will, and his 
              powerful intercession for those in need, especially mothers and families. He is known as the 
              "Wonder Worker of Our Day" for the many miracles attributed to his intercession.
            </p>
            
            <p>
              This novena helps us to trust in St. Gerard's powerful intercession and to turn to him with 
              confidence in every need, especially for the blessing of children and family matters.
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
                href={`/novenas/st-gerard/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in St. Gerard</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. Gerard's powerful intercession and his ability to help you.
                Turn to him with confidence in every need, especially for family matters and motherhood.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. St. Gerard will not fail to help 
                those who turn to him with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. Gerard. He wants to help you 
                with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. Gerard for his intercession and for the graces you receive. 
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
                Believe in St. Gerard's powerful intercession and in God's ability to work through His saints. 
                Trust that God hears and answers our prayers through His holy servant.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's mercy and in St. Gerard's ability to obtain miracles for us. 
                Maintain confidence that God will provide what is best for our salvation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for God and for others. Include in your intentions the needs of 
                all those who are suffering or in need of St. Gerard's help.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to St. Gerard? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to Saint Gerard?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Saint Gerard Majella</strong> (1726-1755) was an Italian Redemptorist lay brother known for 
              his holiness, miracles, and special care for mothers and families. He is the patron saint of mothers, 
              expectant mothers, and childbirth.
            </p>
            
            <p className="mb-4">
              <strong>Patron of Mothers</strong> - St. Gerard is especially invoked by mothers and expectant mothers 
              for safe childbirth and the blessing of children. His intercession is powerful for all family matters.
            </p>
            
            <p className="mb-4">
              <strong>Wonder Worker</strong> - St. Gerard is known as the "Wonder Worker of Our Day" for the many 
              miracles attributed to his intercession, both during his life and after his death.
            </p>
            
            <p className="mb-4">
              <strong>Obedience to God's Will</strong> - St. Gerard always fulfilled God's designs and taught others 
              to do God's holy will. His life was marked by complete trust in Divine Providence.
            </p>
            
            <p>
              <strong>Feast Day</strong> - St. Gerard Majella is celebrated on October 16th, and his novena is 
              especially popular among families seeking the blessing of children or help with family matters.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 