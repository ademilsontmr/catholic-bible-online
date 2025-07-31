import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Fertility - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Fertility with daily prayers, reflections, and guidance. Pray for couples struggling with infertility and seeking God\'s blessing for conception.',
  keywords: [
    'novena for fertility',
    'fertility novena',
    'infertility prayer',
    'fertility blessing prayer',
    'conception prayer novena',
    'pregnancy prayer',
    'fertility nine day prayer',
    'infertility novena',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena for Fertility - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Fertility with daily prayers, reflections, and guidance for couples seeking conception.',
    url: 'https://catholicbibleonline.com/novenas/fertility',
  },
  twitter: {
    title: 'Novena for Fertility - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Fertility with daily prayers, reflections, and guidance for couples seeking conception.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Women with Infertility',
    description: 'Pray for women who have been diagnosed as infertile and suffer great pain and anguish over their inability to conceive.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Men with Infertility',
    description: 'Pray for men who have been diagnosed infertile and struggle with the cross of infertility in their marriage.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Seeking Answers',
    description: 'Pray for married couples seeking answers to understand their fertility problems and find solutions.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Secondary Infertility',
    description: 'Pray for couples struggling with secondary infertility after already having children in the past.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Medical Professionals',
    description: 'Pray for medical professionals who treat infertility and help couples struggling to conceive.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Respect for Life',
    description: 'Pray for increased respect for life and sexual morality within fertility medicine.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Fertility Education',
    description: 'Pray for better fertility education in society to help people understand their fertility.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Submission to God\'s Will',
    description: 'Pray for couples to grow in submission to God\'s will, even when facing the cross of infertility.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Offering Suffering',
    description: 'Pray for couples to offer their sufferings in union with Christ and use them for good.',
    slug: 'day-9'
  }
]

export default function NovenaForFertilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Fertility
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek God's blessing for couples struggling with infertility.
            This traditional novena helps couples pray for the gift of conception and grow in trust in God's plan.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👶</div>
              <div className="text-sm text-gray-600">Fertility</div>
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
            About the Novena for Fertility
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Fertility is a traditional nine-day prayer designed to help couples struggling with infertility 
              to seek God's blessing and guidance. This novena acknowledges the deep pain and suffering that infertility 
              can bring while helping couples grow in trust in God's plan for their family.
            </p>
            
            <p className="mb-4">
              The title "Fertility" reminds us of the great blessing of procreation that God has given to married couples. 
              When couples face infertility, they often experience profound grief, confusion, and a sense of loss. 
              This novena helps them turn to God with their pain and seek His guidance and blessing.
            </p>
            
            <p>
              This novena helps couples to pray for various aspects of fertility - from medical understanding 
              to spiritual acceptance of God's will, while always maintaining hope in God's love and plan.
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
                href={`/novenas/fertility/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Pray with hope and trust in God's plan for your family. 
                Remember that God loves you and has a plan for your marriage.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's timing and be patient with His plan. 
                God's ways are not our ways, and His timing is perfect.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Open</h3>
              <p className="text-gray-700 text-sm">
                Be open to God's will, whether that means biological children, 
                adoption, or other ways of building your family.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of your marriage and for His love. 
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
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-lg font-semibold text-black mb-2">Faith</h3>
              <p className="text-gray-700 text-sm">
                Believe in God's love and His plan for your family. 
                Trust that He knows what is best for you and your marriage.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promise to bless your marriage. 
                Look forward to the ways God will build your family.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and trust in His love for you. 
                Show love for each other and for the children God may give you.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Fertility Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Fertility devotion is a way of praying for and supporting couples struggling with infertility, 
            seeking God's blessing and guidance for their family life.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Fertility Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👶</span>
                <span>Life</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>❤️</span>
                <span>Love</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Hope</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👨‍👩‍👧‍👦</span>
                <span>Family</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>✨</span>
                <span>Blessing</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Pray for couples struggling with infertility</li>
              <li>• Seek God's blessing for conception and pregnancy</li>
              <li>• Grow in trust in God's plan for our family</li>
              <li>• Support couples in their journey to parenthood</li>
              <li>• Maintain hope and faith in God's love</li>
            </ul>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <Link
            href="/novenas"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to All Novenas
          </Link>
        </div>
      </div>
    </div>
  )
} 