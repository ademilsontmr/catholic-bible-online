import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Jude Novena - Complete 9-Day Prayer Guide',
  description: 'Complete St. Jude Novena with daily prayers, reflections, and guidance. Pray for impossible causes through the intercession of St. Jude Thaddeus.',
  keywords: [
    'st jude novena',
    'saint jude novena',
    'st jude prayer',
    'saint jude prayer',
    'st jude devotion',
    'saint jude devotion',
    'st jude intercession',
    'catholic novena',
    'novena to st jude',
    'st jude thaddeus novena',
    'impossible causes',
    'lost causes'
  ],
  openGraph: {
    title: 'St. Jude Novena - Complete 9-Day Prayer Guide',
    description: 'Complete St. Jude Novena with daily prayers, reflections, and guidance for impossible causes.',
    url: 'https://catholicbibleonline.com/novenas/st-jude',
  },
  twitter: {
    title: 'St. Jude Novena - Complete 9-Day Prayer Guide',
    description: 'Complete St. Jude Novena with daily prayers, reflections, and guidance for impossible causes.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Patron of the Impossible',
    description: 'Pray for impossible causes through St. Jude\'s intercession.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Zeal for the Gospel',
    description: 'Ask for St. Jude\'s zeal to preach the Gospel.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Patience in Struggles',
    description: 'Pray for patience in your struggles like St. Jude.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Lost Causes',
    description: 'Seek St. Jude\'s help for your most impossible needs.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Sacrifice for the Kingdom',
    description: 'Ask St. Jude to help you sacrifice for God\'s Kingdom.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Knowing God\'s Will',
    description: 'Pray to know God\'s will in your life.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Trust in God',
    description: 'Learn to trust that God knows your needs better than you.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Never Lose Hope',
    description: 'Ask St. Jude to help you never lose hope.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Never Lose Faith',
    description: 'Pray to never lose faith in God\'s love.',
    slug: 'day-9'
  }
]

export default function StJudeNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Jude Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to St. Jude Thaddeus, patron of impossible causes,
            seeking his intercession for lost causes and desperate situations.
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🕯️</div>
              <div className="text-sm text-gray-600">Impossible</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">✨</div>
              <div className="text-sm text-gray-600">Miracles</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About St. Jude Novena
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The St. Jude Novena is a powerful nine-day prayer to St. Jude Thaddeus,
              one of the twelve apostles of Jesus Christ. St. Jude is known as the
              patron saint of impossible causes and lost causes.
            </p>

            <p className="mb-4">
              Through this novena, we seek St. Jude's powerful intercession for our
              most desperate needs and impossible situations. St. Jude was a close
              friend of Jesus and is known for his zeal in preaching the Gospel
              and his willingness to help those in desperate need.
            </p>

            <p>
              This novena helps us grow in faith, hope, and love while seeking
              St. Jude's help for our impossible causes. It reminds us to trust
              in God's will and to never lose hope, even in the most difficult
              circumstances.
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
                href={`/novenas/st-jude/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Pray with Confidence</h3>
              <p className="text-gray-700 text-sm">
                Approach St. Jude with confidence, knowing he is the patron
                of impossible causes and lost causes.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in His Intercession</h3>
              <p className="text-gray-700 text-sm">
                Trust that St. Jude will pray for your intentions and bring
                them before God with his powerful intercession.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Accept God's Will</h3>
              <p className="text-gray-700 text-sm">
                Pray for the grace to accept God's holy will even if it is
                painful and difficult for you.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Never Lose Hope</h3>
              <p className="text-gray-700 text-sm">
                Ask St. Jude to help you never lose hope and to grow in
                faith, hope, and love.
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
                Believe in St. Jude's power and love. Trust in his intercession
                and his ability to help with impossible causes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in St. Jude's promise to pray for you. Maintain confidence
                that he will bring your requests to God.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love St. Jude with filial devotion and pray with love for others.
                Include in your intentions the needs of all who are suffering.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to St. Jude? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to St. Jude Thaddeus?
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>St. Jude Thaddeus</strong> was one of the twelve apostles of Jesus Christ
              and is known as the patron saint of impossible causes and lost causes.
              He was a cousin of Jesus and a brother of St. James the Less.
            </p>

            <p className="mb-4">
              <strong>Patron of the Impossible</strong> - St. Jude is known for his powerful
              intercession in seemingly impossible situations. He helps those who are
              desperate and have nowhere else to turn, earning him the title of
              "patron of lost causes."
            </p>

            <p className="mb-4">
              <strong>Zeal for the Gospel</strong> - St. Jude was known for his great zeal
              in preaching the Gospel. He traveled extensively to spread the Good News
              and was willing to make great sacrifices for the Kingdom of God.
            </p>

            <p className="mb-4">
              <strong>Friend of Jesus</strong> - As one of the twelve apostles, St. Jude
              had a close relationship with Jesus. This special friendship gives him
              great power in interceding for us before God.
            </p>

            <p>
              <strong>Never Lose Hope</strong> - St. Jude's devotion teaches us to never
              lose hope, even in the most desperate situations. He reminds us that
              with God, all things are possible and that we should always trust
              in His love and mercy.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 