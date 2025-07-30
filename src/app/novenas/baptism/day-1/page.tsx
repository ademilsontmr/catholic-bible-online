import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Baptism - Day 1: Commitment to Christian Life',
  description: 'Pray the Novena for Baptism - Day 1 focusing on Commitment to Christian Life. Join in praying the traditional novena to seek God\'s grace for baptism preparation.',
  keywords: [
    'novena for baptism day 1',
    'baptism novena day 1',
    'baptism prayer day 1',
    'novena for baptism prayer commitment to christian life',
    'day 1 baptism novena',
    'commitment to christian life baptism prayer',
    'baptism novena commitment to christian life',
    'baptism prayer commitment to christian life'
  ],
  openGraph: {
    title: 'Novena for Baptism - Day 1: Commitment to Christian Life',
    description: 'Pray the Novena for Baptism - Day 1 focusing on Commitment to Christian Life. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/baptism/day-1',
  },
  twitter: {
    title: 'Novena for Baptism - Day 1: Commitment to Christian Life',
    description: 'Pray the Novena for Baptism - Day 1 focusing on Commitment to Christian Life. Join in praying the traditional novena.',
  }
}

export default function BaptismNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Baptism – Day 1: Commitment to Christian Life
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
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-sky-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Commitment to Christian Life</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena for Baptism, we pray for a deep commitment to living a faithful Christian life. 
            We ask God to help all who are preparing for baptism to understand the importance of this commitment.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 1</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong><br/>
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                Dear Lord, we thank You and praise You for allowing us the opportunity to become Your children through baptism. We ask You to help all who are preparing for this sacrament.
              </p>

              <p className="mb-6">
                You call each person to commit themselves to You during their lives. Through the sacrament of baptism, you make us Your children and give us the opportunity to one day join You in heaven. In baptism, You call us to live as faithful Christians.
              </p>

              <p className="mb-6">
                Please pour out Your grace and assistance on all who are preparing to be baptized, and we especially ask today that You help all preparing for baptism to have a deep commitment to living a faithful Christian life.
              </p>

              <p className="mb-6">
                Help us to do all we can to serve You worthily each day. Give us the grace to grow in intimacy with You at every opportunity.
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
                Today we pray for a deep commitment to living a faithful Christian life. This is the foundation of our spiritual journey 
                and the first step in preparing for baptism.
              </p>

              <p className="mb-4">
                Baptism is not just a ceremony or tradition, but a profound commitment to follow Christ and live according to His teachings. 
                Through baptism, we become children of God and members of His Church. This is a sacred calling that requires our wholehearted 
                commitment and dedication.
              </p>

              <p className="mb-4">
                Living a faithful Christian life means more than just attending church services. It means striving to follow Christ's example 
                in everything we do - in our thoughts, words, and actions. It means loving God above all things and loving our neighbor as ourselves. 
                It means seeking to grow in virtue and holiness each day.
              </p>

              <p className="mb-4">
                As we begin this novena, let us ask God to help all who are preparing for baptism to understand the depth of this commitment 
                and to embrace it with joy and determination. Let us pray that they will be inspired to live as faithful Christians 
                and to grow in their relationship with God.
              </p>

              <p>
                Remember that baptism is the beginning of a lifelong journey of faith. With God's grace and our commitment, 
                we can grow in holiness and become the people He created us to be.
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
            Dear Lord, we thank You for hearing our prayers today. Help all who are preparing for baptism to grow in their commitment 
            to living a faithful Christian life. Give them the grace to understand the importance of this calling and to embrace it 
            with joy and determination. May they grow in holiness and become faithful members of Your Church. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for Baptism - Day 1: Commitment to Christian Life"
          text="Join me in praying the Novena for Baptism - Day 1 focusing on Commitment to Christian Life."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/baptism"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/baptism/day-2"
            className="inline-flex items-center px-6 py-3 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors"
          >
            Day 2: Love for the Church →
          </Link>
        </div>
      </div>
    </div>
  )
} 