import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novenas For Marriage - Complete 9-Day Prayer Guide',
  description: 'Complete Novenas For Marriage with daily prayers, reflections, and guidance. Pray for marriage blessings, unity, and God\'s grace in relationships.',
  keywords: [
    'marriage novena',
    'novenas for marriage',
    'marriage prayer',
    'marriage blessing prayer',
    'marriage unity prayer',
    'marriage devotion',
    'catholic marriage novena',
    'marriage nine day prayer',
    'marriage protection novena',
    'marriage love prayer',
    'marriage faith prayer'
  ],
  openGraph: {
    title: 'Novenas For Marriage - Complete 9-Day Prayer Guide',
    description: 'Complete Novenas For Marriage with daily prayers, reflections, and guidance for marriage blessings and unity.',
    url: 'https://catholic-bible-online.com/novenas/marriage',
  },
  twitter: {
    title: 'Novenas For Marriage - Complete 9-Day Prayer Guide',
    description: 'Complete Novenas For Marriage with daily prayers, reflections, and guidance for marriage blessings and unity.',
  },
}

const novenaDays = [
  {
    day: 1,
    theme: 'Marriage Unity',
    description: 'Pray for unity and oneness in marriage, that couples may become one flesh as God intended.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Marriage Love',
    description: 'Pray for God\'s love to fill marriages, helping couples to love each other as Christ loves the Church.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Marriage Communication',
    description: 'Pray for open and honest communication between spouses, fostering understanding and trust.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Marriage Faith',
    description: 'Pray for couples to grow together in faith and to put God at the center of their marriage.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Marriage Patience',
    description: 'Pray for patience and understanding in marriage, helping couples to bear with one another in love.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Marriage Forgiveness',
    description: 'Pray for the grace of forgiveness in marriage, that couples may forgive as God forgives us.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Marriage Fidelity',
    description: 'Pray for faithfulness and loyalty in marriage, that couples may remain true to their vows.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Marriage Blessings',
    description: 'Pray for God\'s abundant blessings upon marriages and for the fruitfulness of love.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Marriage Eternity',
    description: 'Pray for marriages to reflect the eternal love of God and to prepare couples for heaven.',
    slug: 'day-9'
  }
]

export default function NovenasForMarriagePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novenas For Marriage
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer for marriage, seeking God's blessings, unity, and grace for couples. 
            Pray for love, communication, faith, and the sacred bond of marriage.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💒</div>
              <div className="text-sm text-gray-600">Marriage</div>
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
            About the Novenas For Marriage
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novenas For Marriage is a powerful nine-day prayer that focuses on seeking God's blessings, 
              guidance, and grace for marriages. This novena addresses the most important aspects of a holy marriage: 
              unity, love, communication, faith, patience, forgiveness, fidelity, blessings, and eternity.
            </p>
            
            <p className="mb-4">
              Each day of this novena focuses on a specific aspect of marriage, helping couples, engaged couples, 
              and those praying for marriages to seek God's intervention and blessing. Whether you're praying for 
              your own marriage, preparing for marriage, or praying for other couples, this novena will guide you 
              through meaningful prayers for the sacred institution of marriage.
            </p>
            
            <p>
              Marriage is a sacred covenant blessed by God, and through this novena, we can entrust our relationships 
              to His loving care and ask for His guidance in building strong, holy marriages that reflect His love.
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
                href={`/novenas/marriage/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Pray with Love</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with deep love for marriage and concern for the sacred bond between spouses. 
                Let your love for the institution of marriage fuel your prayers.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present specific marriages and their particular needs to God. Whether it's unity, communication, 
                or faith, be clear about what you're asking for.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust that God loves marriage even more than we do and will answer our prayers 
                according to His perfect will for couples.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of marriage and for the blessings it brings to our lives. 
                Gratitude opens our hearts to receive more graces.
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
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Faith</h3>
              <p className="text-gray-700 text-sm">
                Believe in God's plan for marriage and His power to strengthen and bless couples. 
                Trust that He has a special purpose for each marriage.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🕊️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promises for marriage and His ability to work all things for the good of couples. 
                Trust in His perfect timing and plan.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love marriage with God's love, showing respect, honor, and commitment to the sacred bond. 
                Let love be the foundation of all our prayers for marriage.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Marriage Prayer Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Marriage prayer is a powerful devotion that recognizes marriage as a sacred covenant blessed by God, 
            deserving of our prayers, protection, and guidance.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Marriage Prayer Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💒</span>
                <span>Unity</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💕</span>
                <span>Love</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🗣️</span>
                <span>Communication</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Faith</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>⏳</span>
                <span>Patience</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🤝</span>
                <span>Forgiveness</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Entrust marriages to God's loving care and protection</li>
              <li>• Pray for couples' spiritual, emotional, and relational well-being</li>
              <li>• Seek God's guidance in building strong, holy marriages</li>
              <li>• Ask for wisdom and grace in our role as spouses</li>
              <li>• Thank God for the precious gift of marriage in our lives</li>
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