import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena in Honor of St. John Bosco - Complete 9-Day Prayer Guide',
  description: 'Complete Novena in Honor of St. John Bosco with daily prayers, reflections, and guidance. Pray for St. John Bosco\'s intercession and protection.',
  keywords: [
    'novena in honor of st john bosco',
    'st john bosco novena',
    'john bosco novena',
    'don bosco novena',
    'st john bosco prayer',
    'youth patron novena',
    'father and teacher novena',
    'st john bosco intercession',
    'catholic novena',
    'youth ministry prayer'
  ],
  openGraph: {
    title: 'Novena in Honor of St. John Bosco - Complete 9-Day Prayer Guide',
    description: 'Complete Novena in Honor of St. John Bosco with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/st-john-bosco',
  },
  twitter: {
    title: 'Novena in Honor of St. John Bosco - Complete 9-Day Prayer Guide',
    description: 'Complete Novena in Honor of St. John Bosco with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Trust and Confidence',
    description: 'Pray for trust and confidence in St. John Bosco\'s powerful intercession.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Spiritual Graces',
    description: 'Pray for spiritual graces and growth in holiness through St. John Bosco\'s help.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Temporal Needs',
    description: 'Pray for temporal needs and material assistance through St. John Bosco\'s intercession.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Devotion to Eucharist',
    description: 'Pray for greater devotion to Jesus in the Blessed Sacrament like St. John Bosco.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Devotion to Mary',
    description: 'Pray for devotion to Mary Help of Christians as St. John Bosco had.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Compassion for Suffering',
    description: 'Pray for compassion for those who are suffering, following St. John Bosco\'s example.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Youth Ministry',
    description: 'Pray for guidance in youth ministry and education like St. John Bosco.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Divine Will',
    description: 'Pray for resignation to God\'s will in all circumstances.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Gratitude and Thanksgiving',
    description: 'Pray with gratitude for St. John Bosco\'s intercession and all graces received.',
    slug: 'day-9'
  }
]

export default function StJohnBoscoNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena in Honor of St. John Bosco
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek the intercession of St. John Bosco, Father and Teacher of the Young.
            This traditional novena helps us grow closer to God and experience St. John Bosco's powerful protection and guidance.
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
            About the Novena in Honor of St. John Bosco
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena in Honor of St. John Bosco is a powerful nine-day prayer that helps us grow closer to God and experience 
              St. John Bosco's powerful intercession. St. John Bosco, known as "Don Bosco," was a priest, educator, and founder 
              of the Salesian Society, dedicated to the care and education of young people.
            </p>
            
            <p className="mb-4">
              St. John Bosco had a great devotion to Jesus in the Blessed Sacrament and to Mary Help of Christians. 
              He always had compassion for those who were suffering and worked tirelessly for the salvation of souls, 
              especially the young.
            </p>
            
            <p>
              This novena helps us to trust in St. John Bosco's powerful intercession and to turn to him with confidence 
              in every need, both spiritual and temporal, knowing that he will always help us and bring our prayers to God.
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
                href={`/novenas/st-john-bosco/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in St. John Bosco</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. John Bosco's powerful intercession and his ability to help you.
                Turn to him with confidence in every need, both spiritual and temporal.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. St. John Bosco will not fail to help 
                those who turn to him with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. John Bosco. He wants to help you 
                with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. John Bosco for his intercession and for the graces you receive. 
                Gratitude opens our hearts to receive more blessings.
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
                Believe in St. John Bosco's powerful intercession and in God's ability to work through his saints. 
                Trust that God hears and answers our prayers through his servants.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's mercy and in St. John Bosco's ability to obtain graces for us. 
                Maintain confidence that God will provide what is best for our salvation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for God and for others. Include in your intentions the needs of 
                young people and all those who are suffering or in need of guidance.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to St. John Bosco? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to St. John Bosco?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>St. John Bosco</strong> was a 19th-century Italian priest, educator, and founder of the Salesian Society. 
              He is known as "Don Bosco" and is the patron saint of young people, apprentices, and Catholic publishers.
            </p>
            
            <p className="mb-4">
              <strong>Father and Teacher</strong> - St. John Bosco dedicated his life to the care and education of young people, 
              especially those who were poor and at risk. He founded schools, orphanages, and youth centers.
            </p>
            
            <p className="mb-4">
              <strong>Eucharistic Devotion</strong> - St. John Bosco had a great devotion to Jesus in the Blessed Sacrament 
              and encouraged others to develop this same love for the Eucharist.
            </p>
            
            <p className="mb-4">
              <strong>Marian Devotion</strong> - He had a special devotion to Mary Help of Christians and attributed 
              many miracles and graces to her intercession.
            </p>
            
            <p>
              <strong>Feast Day</strong> - St. John Bosco's feast day is celebrated on January 31st, and he is 
              particularly venerated by educators, youth workers, and those seeking guidance for young people.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 