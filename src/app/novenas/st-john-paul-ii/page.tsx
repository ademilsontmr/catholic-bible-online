import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. John Paul II Novena - Complete 9-Day Prayer Guide',
  description: 'Complete St. John Paul II Novena with daily prayers, reflections, and guidance. Pray for youth, mercy, and evangelization through the intercession of the Great Pope.',
  keywords: [
    'st john paul ii novena',
    'st john paul ii prayer novena',
    'pope john paul ii novena',
    'st john paul ii youth novena',
    'st john paul ii mercy novena',
    'st john paul ii evangelization novena',
    'st john paul ii witness novena',
    'st john paul ii faith novena',
    'st john paul ii hope novena',
    'catholic st john paul ii novena'
  ],
  openGraph: {
    title: 'St. John Paul II Novena - Complete 9-Day Prayer Guide',
    description: 'Complete St. John Paul II Novena with daily prayers, reflections, and guidance for youth and evangelization.',
    url: 'https://catholicbibleonline.com/novenas/st-john-paul-ii',
  },
  twitter: {
    title: 'St. John Paul II Novena - Complete 9-Day Prayer Guide',
    description: 'Complete St. John Paul II Novena with daily prayers, reflections, and guidance for youth and evangelization.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Joy for the Unhappy',
    description: 'Pray that those who are unhappy will be filled with great joy.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Forgiveness and Mercy',
    description: 'Pray that we can convey forgiveness to those who have done wrong.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Guidance and Protection',
    description: 'Pray that we will be guided and protected on difficult paths.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Seeing Goodness',
    description: 'Pray for grace to see the goodness in our experiences every day.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Witness to Mercy',
    description: 'Pray that we may bear witness to God\'s mercy.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Sharing Faith',
    description: 'Pray that we may share the faith with those in doubt.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Giving Hope',
    description: 'Pray that we may give hope to those who are discouraged.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Loving the Indifferent',
    description: 'Pray that we may love those who feel indifferent.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Transforming Hearts',
    description: 'Pray that love transforms hearts and renews the face of the earth.',
    slug: 'day-9'
  }
]

export default function StJohnPaulIINovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. John Paul II Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to honor St. John Paul II, the Great Pope and witness of Jesus Christ for the whole world.
            This traditional novena helps you grow in faith, hope, and love through his powerful intercession.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Pope</div>
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
            About St. John Paul II Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The St. John Paul II Novena is a profound spiritual practice designed to honor the Great Pope, 
              who was a witness of Jesus Christ for the whole world. This novena recognizes St. John Paul II\'s 
              extraordinary passion for Christ and the Church, and his tireless work for youth and evangelization.
            </p>
            
            <p className="mb-4">
              Through nine days of focused prayer, you will learn to turn to St. John Paul II for his powerful intercession 
              in growing in faith, hope, and love. This novena helps you to understand that St. John Paul II\'s example 
              shows us how to light the world on fire with our passion for Christ and the Church, just as he did 
              throughout his remarkable pontificate.
            </p>
            
            <p>
              Whether you are seeking guidance for youth, strength for evangelization, hope for the discouraged, or simply 
              want to honor this great saint, this novena will help you to grow in virtue and receive St. John Paul II\'s 
              powerful intercession in your spiritual journey.
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
                href={`/novenas/st-john-paul-ii/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-yellow-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be a Witness</h3>
              <p className="text-gray-700 text-sm">
                Follow St. John Paul II\'s example of being a witness of Jesus Christ.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Passionate</h3>
              <p className="text-gray-700 text-sm">
                Show passion for Christ and the Church like St. John Paul II.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Merciful</h3>
              <p className="text-gray-700 text-sm">
                Practice mercy and forgiveness as St. John Paul II taught.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Give hope to others and trust in God\'s infinite mercy.
              </p>
            </div>
          </div>
        </section>

        {/* The Three Theological Virtues */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            The Three Theological Virtues
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Faith</h3>
              <p className="text-gray-700 text-sm">
                Believe in God\'s infinite mercy and love as St. John Paul II did.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in eternal communion with God through Christ\'s love.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love others with the fatherly tenderness that God gave St. John Paul II.
              </p>
            </div>
          </div>
        </section>

        {/* What is St. John Paul II? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Who is St. John Paul II?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              St. John Paul II (1920-2005) was one of the most beloved popes in history, serving as the head of the Catholic 
              Church from 1978 to 2005. Known as the "Great Pope," he was a witness of Jesus Christ for the whole world, 
              traveling extensively to spread the Gospel and bring hope to millions.
            </p>
            <p className="mb-4">
              St. John Paul II had a special love for youth, creating World Youth Day and inspiring young people worldwide 
              with his message of hope and love. He was a tireless advocate for human dignity, peace, and the sanctity of life. 
              His teachings on mercy, forgiveness, and the theology of the body continue to guide the Church today.
            </p>
            <p>
              Through this novena, we honor St. John Paul II\'s extraordinary legacy and seek his powerful intercession 
              for youth, families, and all who need hope and guidance. We ask him to help us become witnesses of Christ 
              and to light the world on fire with our passion for the Gospel.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-yellow-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Journey with St. John Paul II</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you\'re ready to honor St. John Paul II and seek his powerful intercession for youth and evangelization, 
            start with Day 1 of this novena. Remember that St. John Paul II\'s example shows us how to be witnesses 
            of Jesus Christ and to light the world on fire with our passion for the Church.
          </p>
          <div className="text-center">
            <Link
              href="/novenas/st-john-paul-ii/day-1"
              className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
            >
              Start Day 1: Joy for the Unhappy →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 