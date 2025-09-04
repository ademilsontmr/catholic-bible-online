import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Chastity - Day 5: Love for God\'s Laws',
  description: 'Pray the Novena for Chastity - Day 5 focusing on Love for God\'s Laws. Join in praying the traditional novena to seek God\'s grace for chastity.',
  keywords: [
    'novena for chastity day 5',
    'chastity novena day 5',
    'chastity prayer day 5',
    'novena for chastity prayer love for god\'s laws',
    'day 5 chastity novena',
    'love for god\'s laws chastity prayer',
    'chastity novena love for god\'s laws',
    'chastity prayer love for god\'s laws'
  ],
  openGraph: {
    title: 'Novena for Chastity - Day 5: Love for God\'s Laws',
    description: 'Pray the Novena for Chastity - Day 5 focusing on Love for God\'s Laws. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/chastity/day-5',
  },
  twitter: {
    title: 'Novena for Chastity - Day 5: Love for God\'s Laws',
    description: 'Pray the Novena for Chastity - Day 5 focusing on Love for God\'s Laws. Join in praying the traditional novena.',
  }
}

export default function ChastityNovenaDay5Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Chastity – Day 5: Love for God's Laws
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Chastity to seek God's grace and assistance to live truly chaste lives.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/chastity" className="hover:text-gray-700">Novena for Chastity</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 5</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-pink-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Love for God's Laws</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray to grow in sincere love for God's moral laws and commandments.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 5</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6"><strong>In the name of the Father, and of the Son, and of the Holy Spirit. <br/>Amen.</strong></p>
              <p className="mb-6">Dear Lord, we thank You and praise You for the many ways You assist us. We ask You today to help us live truly chaste lives.</p>
              <p className="mb-6">You have given us moral laws and commandments for our own good. Through Your laws, You guide us toward happiness and union with You. But in our fallen world, it is not always easy for us to understand Your laws or to follow them as lovingly as You wish us to.</p>
              <p className="mb-6">Please pour out Your grace and assistance on our efforts to grow in chastity, and we particularly ask today that You help us to grow in sincere love for Your laws.</p>
              <p className="mb-6">Help us to always do all we can to advance in holiness and virtue each day. Give us the grace to grow closer to You at every opportunity.</p>
              <p className="mb-6"><strong>And we especially ask in this novena for (mention your intentions here).</strong></p>
              <p className="mb-6"><strong>Lord, hear our prayers!</strong></p>
              <p className="mb-6"><strong>In the name of the Father, and of the Son, and of the Holy Spirit. <br/>Amen.</strong></p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection for Today</h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">Today we pray to grow in sincere love for God's moral laws and commandments. God has given us these laws for our own good, to guide us toward happiness and union with Him.</p>
              <p className="mb-4">In our fallen world, it can be difficult to understand and appreciate God's laws. The world often presents them as restrictive or outdated, but they are actually gifts from God designed to help us live happy and fulfilling lives.</p>
              <p className="mb-4">God's laws are not arbitrary rules, but expressions of His love for us. They are designed to protect us from harm and to guide us toward what is truly good for us. When we follow them out of love for God, we experience the freedom and joy that comes from living in accordance with His will.</p>
              <p className="mb-4">Growing in love for God's laws means understanding that they are given to us out of love, not to restrict us, but to free us from the slavery of sin and to guide us toward true happiness.</p>
              <p className="mb-4">Let us ask God today to help us grow in sincere love for His laws. Let us ask Him to help us see His commandments as expressions of His love for us and to follow them joyfully out of love for Him.</p>
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
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, we thank You for hearing our prayers today. Help us to grow in the virtue of love for god's laws 
            and to continue striving for chastity in all areas of our lives. Give us the grace to trust in Your help 
            and to remain faithful to You. May we grow in holiness and virtue through Your grace. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Chastity - Day 5: Love for God's Laws" 
            url="/novenas/chastity/day-5"
            excerpt="Join me in praying the Novena for Chastity - Day 5 focusing on Love for God's Laws." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/chastity/day-4"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 4: Patience
          </Link>
          
          
          <Link 
            href="/novenas/chastity/day-6"
            className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
          >
            Day 6: Charity →
          </Link>
          
        </div>
      </div>
    </div>
  )
}