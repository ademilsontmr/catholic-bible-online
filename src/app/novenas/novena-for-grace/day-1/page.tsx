import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Grace - Day 1: Divine Grace',
  description: "Pray the Novena for Grace - Day 1 focusing on Divine Grace. Join in praying the traditional novena to seek God's grace through St. Francis Xavier's intercession.",
  keywords: [
    'novena for grace day 1',
    'grace novena day 1',
    'st francis xavier novena day 1',
    'st francis xavier prayer day 1',
    'day 1 novena for grace',
    'divine grace prayer',
    'novena for grace divine grace',
    'grace novena divine grace'
  ],
  openGraph: {
    title: 'Novena for Grace - Day 1: Divine Grace',
    description: 'Pray the Novena for Grace - Day 1 focusing on Divine Grace. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/novena-for-grace/day-1',
  },
  twitter: {
    title: 'Novena for Grace - Day 1: Divine Grace',
    description: 'Pray the Novena for Grace - Day 1 focusing on Divine Grace. Join in praying the traditional novena.',
  }
}

export default function NovenaForGraceDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Grace – Day 1: Divine Grace
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Grace to seek God's grace through the intercession of St. Francis Xavier.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/novena-for-grace" className="hover:text-gray-700">Novena for Grace</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Divine Grace</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena for Grace, we focus on seeking the inestimable blessing of living and dying in the state of grace. We honor the memory of St. Francis Xavier and ask for his powerful intercession.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 1</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                We have come together to worship the Lord our God and to honor the memory of His great missionary, St. Francis Xavier. Through his powerful intercession, let us pray for ourselves, for the missionary efforts of the church, and for all the People of God.

For missions and missionaries throughout the world:
that through the proclamation of the Good News of salvation, all people may come to know the one true God and Jesus Christ whom He has sent.

Let us pray to the Lord: Lord, hear our prayer.

For the Church:
that renewed by the Holy Spirit, she may show forth to the world the mystery of the Lord and be an instrument of redemption for all.

Let us pray to the Lord: Lord, hear our prayer.

For Christian unity:
that the Spirit of Christ, dwelling in all who believe, may bring us to that fullness of unity which Jesus desires -- one Lord, one faith, one baptism.

Let us pray to the Lord: Lord, hear our prayer.

For the unrepentant:
that moved by God's loving mercy revealed in Jesus,
they may repent their sins and open their hearts
to the divine life of grace.

Let us pray to the Lord: Lord, hear our prayer.

For ourselves:
that we may be ever faithful to our baptismal commitment to Christ, and bring Christ's word and Christ's love to the world in which we live.

Let us pray to the Lord: Lord, hear our prayer.

Together:
Lord God, our Father, we honor the memory of the Apostle of the Indies and Japan, St. Francis Xavier. The remembrance of the favors with which You blessed him during life and of his glory after death fills us with joy; and we unite with him in offering to You our sincere tribute of thanksgiving and of grace.

We ask You to grant us, through his powerful intercession, the inestimable blessings of living and dying in the state of grace. We also ask You to grant us the favors we seek in this novena.

(Pause)

But if what we ask is not for the glory of God and the good of our souls, grant us, we pray, what is more conducive to both. We ask this through Christ our Lord.

Amen.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              St. Francis Xavier's life was marked by his deep trust in God's grace and his ability to obtain miracles through prayer. His missionary zeal and love for souls remind us of the importance of seeking God's grace in all we do.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of St. Francis Xavier's life and the grace of God, let us ask ourselves how we can 
              apply these lessons to our own lives and grow in holiness.
            </p>
            <p>
              May St. Francis Xavier's intercession help us to obtain the graces we need and to grow stronger in our faith 
              and love for God and neighbor.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in St. Francis Xavier</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. Francis Xavier's powerful intercession and his ability to help you obtain God's grace.
                Turn to him with confidence in every need, especially for missionary work and spiritual growth.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. St. Francis Xavier will not fail to help 
                those who turn to him with trust and confidence for God's grace.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. Francis Xavier. He wants to help you 
                obtain the graces you need for your spiritual growth and the good of your soul.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. Francis Xavier for his intercession and for the graces you receive. 
                Gratitude opens our hearts to receive more blessings and divine grace.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O St. Francis Xavier, help me to seek the inestimable blessing of living and dying in the state of grace. May your powerful intercession help me to grow in holiness and love for God. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Novena for Grace - Day 1: Divine Grace"
          text="Join me in praying the Novena for Grace - Day 1 focusing on Divine Grace."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          <div></div>
          
          <Link
            href="/novenas/novena-for-grace/day-2"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 2: Missionary Spirit →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
