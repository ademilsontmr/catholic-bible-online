import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Baptism - Day 4: Personal Relationship with God',
  description: 'Pray the Novena for Baptism - Day 4 focusing on Personal Relationship with God. Join in praying the traditional novena to seek God\'s grace for baptism preparation.',
  keywords: [
    'novena for baptism day 4',
    'baptism novena day 4',
    'baptism prayer day 4',
    'novena for baptism prayer personal relationship with god',
    'day 4 baptism novena',
    'personal relationship with god baptism prayer',
    'baptism novena personal relationship with god',
    'baptism prayer personal relationship with god'
  ],
  openGraph: {
    title: 'Novena for Baptism - Day 4: Personal Relationship with God',
    description: 'Pray the Novena for Baptism - Day 4 focusing on Personal Relationship with God. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/baptism/day-4',
  },
  twitter: {
    title: 'Novena for Baptism - Day 4: Personal Relationship with God',
    description: 'Pray the Novena for Baptism - Day 4 focusing on Personal Relationship with God. Join in praying the traditional novena.',
  }
}

export default function BaptismNovenaDay4Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Baptism – Day 4: Personal Relationship with God
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
            <span className="text-gray-800">Day 4</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-sky-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Personal Relationship with God</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray to grow to an intimate personal relationship with God.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 4</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong><br/>
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">Dear Lord, we thank You and praise You for allowing us the opportunity to become Your children through baptism. We ask You to help all who are preparing for this sacrament.</p>
              <p className="mb-6">You want each one of us to have a personal relationship with You in our lives. Through baptism, You make us Your children in a very special way. As Your children, we should strive to grow in greater intimacy with You at every opportunity.</p>
              <p className="mb-6">Please pour out Your grace and assistance on all who are preparing to be baptized, and we especially ask today that You help all preparing for baptism to grow to an intimate personal relationship with You.</p>
              <p className="mb-6">Help us to make use of every grace You give us to grow in holiness. Give us the grace to rely on You for all things in our lives.</p>

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
              <p className="mb-4">Today we pray to grow to an intimate personal relationship with God. This day reminds us that God wants each of us to have a close, personal relationship with Him, not just a distant, formal connection.</p>
              <p className="mb-4">Through baptism, we become children of God in a very special way. This is not just a title or a status, but a real relationship that we are called to nurture and grow throughout our lives. As God's children, we should strive to grow in greater intimacy with Him at every opportunity.</p>
              <p className="mb-4">An intimate relationship with God means more than just praying occasionally or attending church services. It means developing a deep, personal connection with God through prayer, reading Scripture, participating in the sacraments, and living according to His will. It means talking to God as we would talk to a close friend, sharing our joys, sorrows, hopes, and fears.</p>
              <p className="mb-4">As we pray for those preparing for baptism, let us ask God to help them develop this intimate relationship with Him. Let us pray that they will come to know God not just as a distant deity, but as a loving Father who wants to be close to them and guide them in their lives.</p>
              <p className="mb-4">Remember that God desires this intimate relationship with each of us. He is always ready to draw us closer to Him and to help us grow in our love for Him. With His grace, we can all develop this beautiful relationship and find the peace and joy that comes from being close to God.</p>
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
            Dear Lord, we thank You for hearing our prayers today. Help all who are preparing for baptism to grow in the virtue of personal relationship with god and to continue striving for holiness in their preparation. Give us the grace to trust in Your help and to remain faithful to You. May we grow in holiness and virtue through Your grace. Amen.
          </p>
        </section>

        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Baptism - Day 4: Personal Relationship with God" 
            url="/novenas/baptism/day-4"
            excerpt="Join me in praying the Novena for Baptism - Day 4 focusing on Personal Relationship with God." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/baptism/day-3"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 3: Submission to God's Laws
          </Link>
          
          
          <Link 
            href="/novenas/baptism/day-5"
            className="inline-flex items-center px-6 py-3 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors"
          >
            Day 5: Gratitude for Sacramental Grace →
          </Link>
          
        </div>
      </div>
    </div>
  )
}