import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to St. Anne - Complete 9-Day Prayer Guide',
  description: 'Complete Novena to St. Anne with daily prayers, reflections, and guidance. Pray for St. Anne\'s intercession and motherly care.',
  keywords: [
    'novena to st anne',
    'st anne novena',
    'anne novena',
    'st anne prayer',
    'mother of mary novena',
    'st anne intercession',
    'grandmother of jesus',
    'st anne of nazareth',
    'catholic novena',
    'saint anne novena'
  ],
  openGraph: {
    title: 'Novena to St. Anne - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to St. Anne with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/st-anne',
  },
  twitter: {
    title: 'Novena to St. Anne - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to St. Anne with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Motherly Care',
    description: 'Pray for St. Anne\'s motherly care and protection.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Compassion and Love',
    description: 'Pray for St. Anne\'s compassion and love for those who suffer.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Mother of Mary',
    description: 'Pray for St. Anne\'s role as the mother of the Blessed Virgin Mary.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Temple Presentation',
    description: 'Pray for St. Anne\'s faith in presenting Mary to the temple.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'All-Powerful Lady',
    description: 'Pray for St. Anne\'s powerful intercession and grace.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Purity and Simplicity',
    description: 'Pray for St. Anne\'s help in achieving purity of heart.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Advocate and Helper',
    description: 'Pray for St. Anne\'s advocacy before the throne of God.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Exalted Glory',
    description: 'Pray for St. Anne\'s exalted glory and heavenly intercession.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Eternal Praise',
    description: 'Pray for the grace to praise God with St. Anne forever.',
    slug: 'day-9'
  }
]

export default function StAnneNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to St. Anne
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek the intercession of St. Anne, mother of the Blessed Virgin Mary and grandmother of Jesus.
            This traditional novena helps us grow closer to God and experience St. Anne's motherly care and protection.
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
            About the Novena to St. Anne
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena to St. Anne is a powerful nine-day prayer that helps us grow closer to God and experience 
              St. Anne's miraculous intercession. St. Anne was the mother of the Blessed Virgin Mary and the grandmother 
              of Jesus Christ, making her a central figure in salvation history.
            </p>
            
            <p className="mb-4">
              St. Anne's life was marked by her deep faith, her motherly care for Mary, and her willingness to 
              help all those who turn to her in need. She is particularly invoked for motherly protection, 
              family matters, and for her powerful intercession with her daughter Mary and grandson Jesus.
            </p>
            
            <p>
              This novena helps us to trust in St. Anne's motherly care and to turn to her with confidence 
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
                href={`/novenas/st-anne/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in St. Anne</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. Anne's motherly care and her ability to help you.
                Turn to her with confidence in every need, especially family matters.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. St. Anne will not fail to help 
                those who turn to her with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. Anne. She wants to help you 
                with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. Anne for her intercession and for the graces you receive. 
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
                Believe in St. Anne's powerful intercession and in God's ability to work through his saints. 
                Trust that God hears and answers our prayers through his servants.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's mercy and in St. Anne's ability to obtain miracles for us. 
                Maintain confidence that God will provide what is best for our salvation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for God and for others. Include in your intentions the needs of 
                all those who are suffering or in need of St. Anne's help.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to St. Anne? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to St. Anne?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>St. Anne</strong> was the mother of the Blessed Virgin Mary and the grandmother of Jesus Christ. 
              She is honored as the patron saint of mothers, grandmothers, and women in labor.
            </p>
            
            <p className="mb-4">
              <strong>Mother of Mary</strong> - St. Anne was privileged to be the mother of the Immaculate Conception, 
              the Blessed Virgin Mary. She raised Mary with perfect love and devotion, preparing her for her 
              unique role in salvation history.
            </p>
            
            <p className="mb-4">
              <strong>Grandmother of Jesus</strong> - St. Anne is the grandmother of Jesus Christ, making her 
              part of the Holy Family. Her influence extends through her daughter Mary to her divine grandson.
            </p>
            
            <p className="mb-4">
              <strong>Powerful Intercessor</strong> - St. Anne's intercession is particularly powerful because 
              of her close relationship with Mary and Jesus. She brings our petitions to her daughter, who 
              presents them to her divine Son.
            </p>
            
            <p>
              <strong>Feast Day</strong> - St. Anne's feast day is celebrated on July 26th, and she is 
              particularly venerated by those seeking motherly protection and family blessings.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 