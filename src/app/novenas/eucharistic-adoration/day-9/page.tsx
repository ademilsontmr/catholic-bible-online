import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'
import RelatedNovenas from '@/components/RelatedNovenas'

export const metadata: Metadata = {
  title: 'Novena for Adoration of the Eucharist - Day 9: Blessing and Assistance for the Church',
  description: 'Pray the Novena for Adoration of the Eucharist - Day 9 focusing on blessing and assistance for the church. Join in praying for deeper devotion to the Eucharist.',
  keywords: [
    'novena for adoration of the eucharist day 9',
    'eucharistic adoration prayer day 9',
    'day 9 eucharist novena',
    'blessing and assistance for the church eucharist adoration'
  ],
  openGraph: {
    title: 'Novena for Adoration of the Eucharist - Day 9: Blessing and Assistance for the Church',
    description: 'Pray the Novena for Adoration of the Eucharist - Day 9 focusing on Blessing and Assistance for the Church.',
    url: 'https://catholicbibleonline.com/novenas/eucharistic-adoration/day-9',
  },
  twitter: {
    title: 'Novena for Adoration of the Eucharist - Day 9: Blessing and Assistance for the Church',
    description: 'Pray the Novena for Adoration of the Eucharist - Day 9 focusing on Blessing and Assistance for the Church.',
  }
}

export default function NovenaForEucharisticAdorationDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Adoration of the Eucharist – Day 9: Blessing and Assistance for the Church
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for God's blessing and assistance for His Church and all its members.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/eucharistic-adoration" className="hover:text-gray-700">Novena for Adoration of the Eucharist</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Blessing and Assistance for the Church</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day, we pray for God's blessing and assistance for His Church and all its members.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-4">Dear Lord, we thank You and praise You for the truly amazing gift You have given us in the Eucharist. May You always be adored properly in the Eucharist!</p>

              <p className="mb-4">You have blessed us with many gifts and helps for our salvation. You instituted Your Church to bring the sacraments to us and to keep us close to You as we travel through this world. Your Church is in need of Your constant grace and guidance.</p>

              <p className="mb-4">Please pour Your grace on the whole world so that all people may adore You in the Eucharist, and we particularly ask You today to bless and assist Your Church!</p>

              <p className="mb-4">Help us to grow in love for You and Your Church each day of our lives. Help us to more fully appreciate the many gifts You have given to us for our salvation.</p>

              <p className="mb-6">
                <strong>And I especially ask in this novena (mention your intentions here).</strong>
              </p>

              <p className="mb-6">
                <strong>Lord, hear our prayers!</strong>
              </p>

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
                Today we focus on blessing and assistance for the church. This aspect of Eucharistic Adoration helps us to grow in faith 
                and to become more like Christ in our daily lives as we deepen our devotion to the Eucharist.
              </p>
              <p className="mb-4">
                As we continue our Novena for Adoration of the Eucharist, let us remember that Jesus is truly present 
                in the Eucharist and longs for us to spend time with Him in adoration.
              </p>
              <p>
                Let us ask God to help us live according to His will and to be witnesses of His love in the Eucharist.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Reverent</h3>
              <p className="text-gray-700 text-sm">
                Approach the Eucharist with deep reverence and respect, recognizing the Real Presence of Jesus.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Faithful</h3>
              <p className="text-gray-700 text-sm">
                Believe completely in the Real Presence and trust in Jesus' power to transform your heart.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. Jesus will not fail to bless those who adore Him.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Express gratitude for the gift of the Eucharist and for the opportunity to adore Jesus.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly with deeper devotion to the Eucharist. May you always remember 
            Jesus' Real Presence in the Blessed Sacrament and grow in love for Him each day.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Novena for Adoration of the Eucharist! As you continue your journey of 
            Eucharistic devotion, may your heart be filled with faith, reverence, and love for Jesus in the 
            Blessed Sacrament. May God continue to bless you and draw you closer to Him through the Eucharist.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Novena for Adoration of the Eucharist - Day 9: Blessing and Assistance for the Church"
          text="Join me in praying the Novena for Adoration of the Eucharist - Day 9 focusing on blessing and assistance for the church."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          
          <Link 
            href="/novenas/eucharistic-adoration/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Conversion of Those Who Disrespect the Eucharist
          </Link>
          
          
          
          <Link 
            href="/novenas/eucharistic-adoration"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
          
        </div>
      </div>

      
      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Novena for Adoration of the Eucharist" />
      
    </div>
  )
}