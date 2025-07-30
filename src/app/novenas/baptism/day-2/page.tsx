import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Baptism - Day 2: Love for the Church',
  description: 'Pray the Novena for Baptism - Day 2 focusing on Love for the Church. Join in praying the traditional novena to seek God\'s grace for baptism preparation.',
  keywords: [
    'novena for baptism day 2',
    'baptism novena day 2',
    'baptism prayer day 2',
    'novena for baptism prayer love for the church',
    'day 2 baptism novena',
    'love for the church baptism prayer',
    'baptism novena love for the church',
    'baptism prayer love for the church'
  ],
  openGraph: {
    title: 'Novena for Baptism - Day 2: Love for the Church',
    description: 'Pray the Novena for Baptism - Day 2 focusing on Love for the Church. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/baptism/day-2',
  },
  twitter: {
    title: 'Novena for Baptism - Day 2: Love for the Church',
    description: 'Pray the Novena for Baptism - Day 2 focusing on Love for the Church. Join in praying the traditional novena.',
  }
}

export default function BaptismNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Baptism – Day 2: Love for the Church
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Baptism to seek God's grace and assistance for all who are preparing for this beautiful sacrament.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/baptism" className="hover:text-gray-700">Novena for Baptism</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-sky-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Love for the Church</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of the Novena for Baptism, we pray for a deep love of the Church. 
            We ask God to help all who are preparing for baptism to understand and embrace their membership in the Church.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong><br/>
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                Dear Lord, we thank You and praise You for allowing us the opportunity to become Your children through baptism. We ask You to help all who are preparing for this beautiful sacrament.
              </p>

              <p className="mb-6">
                When someone is baptized, he or she becomes a member of Your Church. Some people who are baptized do not fully understand their new commitment to Your Church. You can help all who are about to be baptized to grow in true love for Your Church.
              </p>

              <p className="mb-6">
                Please pour out Your grace and assistance on all who are preparing to be baptized, and we especially ask today that You help all preparing for this sacrament to have a deep love of Your Church.
              </p>

              <p className="mb-6">
                Help us to do all we can to advance in holiness and virtue each day. Give us the grace to truly strive to become saints.
              </p>

              <p className="mb-6">
                <strong>And we especially ask in this novena for (mention your intentions here).</strong>
              </p>

              <p className="mb-6">
                <strong>Lord, hear our prayers!</strong>
              </p>

              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong><br/>
                <strong>Amen.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection for Today</h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Today we pray for a deep love of the Church. Through baptism, we become members of the Body of Christ, 
                the Church, which is the community of believers united in faith and love.
              </p>

              <p className="mb-4">
                The Church is not just an institution or organization, but the living Body of Christ on earth. 
                It is through the Church that we receive the sacraments, hear the Word of God, and grow in our faith. 
                The Church is our spiritual family, where we find support, guidance, and love.
              </p>

              <p className="mb-4">
                Loving the Church means more than just attending Mass or participating in Church activities. 
                It means recognizing that the Church is the means through which God continues to work in the world. 
                It means being grateful for the gift of the Church and actively participating in its mission 
                to spread the Gospel and serve others.
              </p>

              <p className="mb-4">
                As we pray for those preparing for baptism, let us ask God to help them understand the beauty 
                and importance of the Church. Let us pray that they will develop a deep love for the Church 
                and embrace their role as active members of the Body of Christ.
              </p>

              <p>
                Remember that the Church is a gift from God, and our love for it should grow as we grow in our faith. 
                With God's grace, we can all become faithful and loving members of His Church.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's providence and His ability to help you.
                Turn to Him with confidence in every need.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will not fail to help those who turn to Him with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to God.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His help and grace.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-sky-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, we thank You for hearing our prayers today. Help all who are preparing for baptism to grow in their love 
            for the Church. Give them the grace to understand the beauty and importance of being members of Your Body 
            and to embrace their role in the Church with joy and dedication. May they become faithful and loving members 
            of Your Church. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for Baptism - Day 2: Love for the Church"
          text="Join me in praying the Novena for Baptism - Day 2 focusing on Love for the Church."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/baptism/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Commitment to Christian Life
          </Link>
          
          <Link 
            href="/novenas/baptism/day-3"
            className="inline-flex items-center px-6 py-3 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors"
          >
            Day 3: Submission to God's Laws →
          </Link>
        </div>
      </div>
    </div>
  )
} 