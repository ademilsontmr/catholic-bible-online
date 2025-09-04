import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'St. John Paul II Novena - Day 7: Giving Hope',
  description: 'Pray St. John Paul II Novena - Day 7 focusing on giving hope. Join in praying for youth, mercy, and evangelization.',
  keywords: [
    'st john paul ii novena day 7',
    'st john paul ii prayer novena day 7',
    'day 7 st john paul ii novena',
    'giving hope st john paul ii'
  ],
  openGraph: {
    title: 'St. John Paul II Novena - Day 7: Giving Hope',
    description: 'Pray St. John Paul II Novena - Day 7 focusing on Giving Hope.',
    url: 'https://catholicbibleonline.com/novenas/st-john-paul-ii/day-7',
  },
  twitter: {
    title: 'St. John Paul II Novena - Day 7: Giving Hope',
    description: 'Pray St. John Paul II Novena - Day 7 focusing on Giving Hope.',
  }
}

export default function StJohnPaulIINovenaDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. John Paul II Novena – Day 7: Giving Hope
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Continue praying St. John Paul II Novena to honor the Great Pope and seek his powerful intercession for youth and evangelization.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/st-john-paul-ii" className="hover:text-gray-700">St. John Paul II Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-yellow-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Giving Hope</h2>
          <p className="text-gray-700 leading-relaxed">
            On this seventh day, we pray that we may give hope to those who are discouraged.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 7</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-4">Most holy servant of God, Pope St. John Paul II, we pray today for the youth and for World Youth Day.</p>

              <p className="mb-4">We ask you to grant us your blessing from heaven! God gave you the grace of His fatherly tenderness and the spirit of His love from which we can all learn. We humbly implore you to intercede for us:</p>

              <p className="mb-6">
                <strong>(State your intentions)</strong>
              </p>

              <p className="mb-4">Most holy St. John Paul II, you were a witness of Jesus Christ for the whole world. You lit the world on fire with your passion for Christ and the Church. Trusting in God's infinite mercy and in the intercession of Mary, you have shown us the path to reach eternal communion with God. And we ask that you pray for us…</p>

              <p className="mb-4">Pray for us, that we may give hope to those who are discouraged.</p>

              <p className="mb-4">St. John Paul II, we know that you are a powerful intercessor because of your great example of how to live the faith. Grant us, through your intercession, the grace to also happily glorify God in our lives.</p>

              <p className="mb-4">Hail Mary…</p>

              <p className="mb-4">Glory be…</p>

              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
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
                Today we focus on giving hope. This aspect of honoring St. John Paul II helps you to understand 
                and imitate his extraordinary example of being a witness of Jesus Christ for the whole world.
              </p>
              <p className="mb-4">
                As we continue our St. John Paul II Novena, let us remember that his example shows us how to light 
                the world on fire with our passion for Christ and the Church, just as he did throughout his remarkable pontificate.
              </p>
              <p>
                Let us ask St. John Paul II to help us grow in faith, hope, and love, just as he did as the Great Pope 
                and witness of Jesus Christ for the whole world.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be a Witness</h3>
              <p className="text-gray-700 text-sm">
                Follow St. John Paul II's example of being a witness of Jesus Christ.
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
                Give hope to others and trust in God's infinite mercy.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-yellow-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            St. John Paul II, Great Pope and witness of Jesus Christ, I thank you for this day of prayer and reflection. 
            Help me to imitate your passion for Christ and the Church. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="St. John Paul II Novena - Day 7: Giving Hope" 
            url="/novenas/st-john-paul-ii/day-7"
            excerpt="Join me in praying St. John Paul II Novena - Day 7 focusing on giving hope." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/st-john-paul-ii/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Sharing Faith
          </Link>
          
          
          
          <Link 
            href="/novenas/st-john-paul-ii/day-8"
            className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
          >
            Day 8: Loving the Indifferent →
          </Link>
          
        </div>
      </div>

      
    </div>
  )
}