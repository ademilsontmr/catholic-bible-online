import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mother Angelica Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Mother Angelica Novena with daily prayers, reflections, and guidance. Pray for holiness, evangelization, and faithfulness to God\'s will through the intercession of Mother Angelica.',
  keywords: [
    'mother angelica novena',
    'mother angelica prayer novena',
    'ewtn mother angelica novena',
    'mother angelica holiness novena',
    'mother angelica evangelization novena',
    'mother angelica media novena',
    'mother angelica poor clare novena',
    'mother angelica faith novena',
    'mother angelica service novena',
    'catholic mother angelica novena'
  ],
  openGraph: {
    title: 'Mother Angelica Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Mother Angelica Novena with daily prayers, reflections, and guidance for holiness and evangelization.',
    url: 'https://catholicbibleonline.com/novenas/mother-angelica',
  },
  twitter: {
    title: 'Mother Angelica Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Mother Angelica Novena with daily prayers, reflections, and guidance for holiness and evangelization.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Devotion to God',
    description: 'Pray for devotion to God and overcoming hardships through faith.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Embracing Suffering',
    description: 'Pray for strength to embrace trials and sufferings out of love for God.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Perseverance in Faith',
    description: 'Pray for perseverance through trials and devotion to God\'s call.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Religious Vocation',
    description: 'Pray for discernment and faithfulness to God\'s call in religious life.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Openness to God\'s Will',
    description: 'Pray for openness to God\'s will and eagerness to serve Him.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Faithful Service',
    description: 'Pray for faithfulness in serving God and being His willing instrument.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Dedication to Evangelization',
    description: 'Pray for dedication to spreading the Gospel through media and service.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Media Evangelization',
    description: 'Pray for courage and talent in using media to spread the Catholic faith.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Lifelong Dedication',
    description: 'Pray for lifelong dedication to serving God and His Church.',
    slug: 'day-9'
  }
]

export default function MotherAngelicaNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Mother Angelica Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to honor Mother Angelica and seek her intercession for holiness, 
            evangelization, and faithfulness to God\'s will. This traditional novena helps you grow in devotion 
            and service to God.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📺</div>
              <div className="text-sm text-gray-600">EWTN</div>
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
            About Mother Angelica Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Mother Angelica Novena is a profound spiritual practice designed to honor Mother Mary Angelica of the Annunciation, 
              the foundress of EWTN (Eternal Word Television Network). This novena recognizes her extraordinary life of holiness, 
              perseverance through suffering, and dedication to spreading the Gospel through modern media.
            </p>
            
            <p className="mb-4">
              Through nine days of focused prayer, you will learn to turn to Mother Angelica for her powerful intercession 
              in growing in holiness, overcoming hardships, discerning God\'s will, and serving Him faithfully. This novena 
              helps you to understand that Mother Angelica\'s example shows us how to persevere through trials and dedicate 
              our lives to God\'s service.
            </p>
            
            <p>
              Whether you are seeking strength to overcome difficulties, guidance in discerning God\'s will, inspiration 
              for evangelization, or simply want to honor this remarkable servant of God, this novena will help you to 
              grow in devotion and faithfulness through Mother Angelica\'s powerful intercession.
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
                href={`/novenas/mother-angelica/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Be Devoted</h3>
              <p className="text-gray-700 text-sm">
                Show devotion to God like Mother Angelica did throughout her life.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persevering</h3>
              <p className="text-gray-700 text-sm">
                Persevere through trials and hardships with faith and trust in God.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Faithful</h3>
              <p className="text-gray-700 text-sm">
                Be faithful to God\'s will and serve Him wholeheartedly.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Evangelizing</h3>
              <p className="text-gray-700 text-sm">
                Be eager to spread the Gospel and serve God\'s Church.
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
                Believe in God\'s power to help you overcome hardships and serve Him.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God\'s promise to guide you in His will and service.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and serve Him with devotion.
              </p>
            </div>
          </div>
        </section>

        {/* What is Mother Angelica? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Who is Mother Angelica?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Mother Mary Angelica of the Annunciation (1923-2016) was an American Poor Clare nun and the foundress of 
              EWTN (Eternal Word Television Network). Despite a difficult childhood marked by family instability and poverty, 
              she persevered in faith and dedicated her life to serving God.
            </p>
            <p className="mb-4">
              Mother Angelica entered the Poor Clare order and later felt called to use modern media to spread the Gospel. 
              She founded EWTN, which has become the largest Catholic media network in the world, reaching millions of people 
              with the message of Christ and the teachings of the Church.
            </p>
            <p>
              Through this novena, we honor Mother Angelica\'s extraordinary life of holiness, her perseverance through 
              suffering, her faithfulness to God\'s will, and her dedication to evangelization. We seek her intercession 
              to help us grow in devotion, overcome hardships, and serve God faithfully in our own lives.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Journey with Mother Angelica</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you\'re ready to honor Mother Angelica and seek her intercession for holiness and faithfulness to God\'s will, 
            start with Day 1 of this novena. Remember that Mother Angelica\'s example shows us how to persevere through 
            trials and dedicate our lives to God\'s service.
          </p>
          <div className="text-center">
            <Link
              href="/novenas/mother-angelica/day-1"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Start Day 1: Devotion to God →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 