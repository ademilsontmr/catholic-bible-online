import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for the Pope - Day 2: Right Judgment',
  description: "Pray the Novena for the Pope - Day 2 focusing on Right Judgment. Join in praying the traditional novena to support the Holy Father.",
  keywords: [
    'novena for the pope day 2',
    'pope novena day 2',
    'holy father novena day 2',
    'vicar of christ novena day 2',
    'day 2 pope novena',
    'right judgment prayer',
    'pope novena right judgment',
    'holy father novena right judgment'
  ],
  openGraph: {
    title: 'Novena for the Pope - Day 2: Right Judgment',
    description: 'Pray the Novena for the Pope - Day 2 focusing on Right Judgment. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/pope/day-2',
  },
  twitter: {
    title: 'Novena for the Pope - Day 2: Right Judgment',
    description: 'Pray the Novena for the Pope - Day 2 focusing on Right Judgment. Join in praying the traditional novena.',
  }
}

export default function PopeNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for the Pope – Day 2: Right Judgment
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for the Pope to support the Holy Father in his ministry.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/pope" className="hover:text-gray-700">Novena for the Pope</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Right Judgment</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we focus on praying for the Pope to have right judgment in all his decisions. We ask that he may be guided by divine wisdom in governing the Church and making important choices.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Lord, source of eternal life and truth,
                give to your shepherd a spirit
                of courage and right judgment, a spirit
                of knowledge and love. By governing
                with fidelity those entrusted to his care,
                may he, as successor to the Apostle
                Peter and Vicar of Christ, build your
                Church into a sacrament of unity, love
                and peace for all the world. 
                Amen.
              </p>

              <p className="mb-4">
                V/ Let us pray for the Pope.<br />
                R/ May the Lord preserve him, give him a long life, make him blessed upon the earth, and not hand him over to the power of his enemies.
              </p>

              <p className="mb-4">
                V/ May your hand be upon your holy servant.<br />
                R/ And upon your son, whom you have anointed.
              </p>

              <p>
                Our Father… <br />
                Hail Mary… <br />
                Glory Be
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Pope must make many important decisions that affect the entire Church. He needs the gift of right judgment to discern what is truly good and to choose the best course of action for the salvation of souls.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of the Pope's ministry and our duty to pray for him, let us ask ourselves how we can 
              better support the Holy Father through our prayers, fidelity to Church teaching, and love for the universal Church.
            </p>
            <p>
              May the Lord continue to bless and protect the Pope, and may we always remain united with him in prayer and fidelity.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Fidelity</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with fidelity to the Church and love for the Holy Father.
                Offer your prayers for his intentions and the good of the universal Church.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. The Lord will hear our prayers 
                for the Pope and bless his ministry for the good of all souls.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Include Specific Intentions</h3>
              <p className="text-gray-700 text-sm">
                Present specific intentions for the Pope's ministry, the Church's unity, 
                and the spread of the Gospel throughout the world.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of the papacy and for the Holy Father's service to the Church. 
                Gratitude opens our hearts to receive more spiritual blessings.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Lord, give the Pope the gift of right judgment in all his decisions. May he be guided by Your wisdom and choose what is truly best for the Church and all souls. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for the Pope - Day 2: Right Judgment" 
            url="/novenas/pope/day-2"
            excerpt="Join me in praying the Novena for the Pope - Day 2 focusing on Right Judgment." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/pope/day-1"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 1: Spirit of Courage
          </Link>
          
          
          <Link
            href="/novenas/pope/day-3"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 3: Spirit of Knowledge →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
