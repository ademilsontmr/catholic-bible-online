import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corpus Christi Novena - Day 3: Divine Food',
  description: "Pray the Corpus Christi Novena - Day 3 focusing on Divine Food. Join in praying the traditional novena to honor the Body and Blood of Christ.",
  keywords: [
    'corpus christi novena day 3',
    'body and blood of christ novena day 3',
    'eucharist novena day 3',
    'corpus christi prayer day 3',
    'day 3 corpus christi novena',
    'divine food prayer',
    'corpus christi novena divine food',
    'eucharist novena divine food'
  ],
  openGraph: {
    title: 'Corpus Christi Novena - Day 3: Divine Food',
    description: 'Pray the Corpus Christi Novena - Day 3 focusing on Divine Food. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/corpus-christi/day-3',
  },
  twitter: {
    title: 'Corpus Christi Novena - Day 3: Divine Food',
    description: 'Pray the Corpus Christi Novena - Day 3 focusing on Divine Food. Join in praying the traditional novena.',
  }
}

export default function CorpusChristiNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Corpus Christi Novena – Day 3: Divine Food
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Corpus Christi Novena to honor the Body and Blood of Christ.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/corpus-christi" className="hover:text-gray-700">Corpus Christi Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Divine Food</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day, we focus on thanking Jesus for having made Himself our food and for uniting us to Himself with so much love in this wonderful Sacrament that we may live in Him.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 3</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold mb-4">Novena Honoring the Body and Blood of Christ</h3>
              
              <p className="mb-4">
                I thank You, Jesus, my Divine Redeemer, for coming upon the earth for our sake, and for instituting the adorable Sacrament of the Holy Eucharist in order to remain with us until the end of the world.
              </p>

              <p className="mb-4">
                I thank You for hiding beneath the Eucharistic species Your infinite majesty and beauty, which Your Angels delight to behold, so that I might have courage to approach the throne of Your Mercy.
              </p>

              <p className="mb-4">
                I thank You, most loving Jesus, for having made Yourself my food, and for uniting me to Yourself with so much love in this wonderful Sacrament that I may live in You.
              </p>

              <p className="mb-4">
                I thank You, my Jesus, for giving Yourself to me in this Blessed Sacrament, and so enriching it with the treasures of Your love that You have no greater gift to give me.
              </p>

              <p className="mb-4">
                I thank You not only for becoming my food but also for offering Yourself as a continual sacrifice to Your Eternal Father for my salvation.
              </p>

              <p className="mb-4">
                I thank You, Divine Priest, for offering Yourself as a Sacrifice daily upon our altars in adoration and homage to the Most Blessed Trinity, and for making amends for our poor and miserable adorations.
              </p>

              <p className="mb-4">
                I thank You for renewing in this daily Sacrifice the actual Sacrifice of the Cross offered on Calvary, in which You satisfy Divine justice for us poor sinners.
              </p>

              <p className="mb-4">
                I thank You, dear Jesus, for having become the priceless Victim to merit for me the fullness of heavenly favors. Awaken in me such confidence in You that their fullness may descend ever more fruitfully upon my soul.
              </p>

              <p className="mb-4">
                I thank You for offering Yourself in thanksgiving to God for all His benefits, spiritual and temporal, which He has bestowed upon me.
              </p>

              <p className="mb-6">
                In union with Your offering of Yourself to Your Father in the Holy Sacrifice of the Mass, I ask for this special favor: <em>(Mention your request).</em>
              </p>

              <p className="mb-6">
                If it be Your holy Will, grant my request. Through You I also hope to receive the grace of perseverance in Your love and faithful service, a holy death, and a happy eternity with You in Heaven. Amen.
              </p>

              <h3 className="text-xl font-semibold mb-4">Prayer</h3>
              
              <p className="mb-4">
                O Lord, You have given us this Sacred Banquet, in which Christ is received, the memory of His Passion is renewed, the mind is filled with grace, and a pledge of future glory is given to us.
                You have given them bread from Heaven.
                Having all sweetness within.
              </p>

              <p className="mb-4">
                Let us pray. God our Father, for Your glory and our salvation You appointed Jesus Christ eternal High Priest. May the people He gained for You by His Blood come to share in the power of His Cross and Resurrection by celebrating His Memorial in this Eucharist, for He lives and reigns with You and the Holy Spirit, one God, forever. Amen.
              </p>

              <p>
                O Jesus, since You have left us a remembrance of Your Passion beneath the veils of this Sacrament, grant us, we pray, so to venerate the sacred mysteries of Your Body and Blood that we may always enjoy the fruits of Your Redemption, for You live and reign forever. Amen.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Eucharist is our spiritual food, nourishing our souls and uniting us intimately with Christ. Through this sacrament, we become one with Him, sharing in His divine life and receiving the strength we need to live as His disciples.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of the Eucharist and its meaning for our lives, let us ask ourselves how we can 
              deepen our devotion to the Body and Blood of Christ and grow in Eucharistic love.
            </p>
            <p>
              May Jesus in the Eucharist continue to be our source of strength and grace, helping us to live as faithful 
              disciples and to prepare for eternal life with Him in heaven.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in the Eucharist</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in the power of the Eucharist and in Jesus' presence in the Blessed Sacrament.
                Turn to Him with confidence for all your spiritual needs and Eucharistic grace.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. Jesus in the Eucharist will not fail to help 
                those who turn to Him with trust and confidence for Eucharistic grace.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions to Jesus in the Eucharist, especially those related to your 
                spiritual growth and Eucharistic devotion.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Jesus for the gift of the Eucharist and for the graces you receive. 
                Gratitude opens our hearts to receive more Eucharistic blessings.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Jesus in the Eucharist, thank You for becoming my food and uniting me to Yourself. Help me to live in You and to be transformed by Your love. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Corpus Christi Novena - Day 3: Divine Food" 
            url="/novenas/corpus-christi/day-3"
            excerpt="Join me in praying the Corpus Christi Novena - Day 3 focusing on Divine Food." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/corpus-christi/day-2"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 2: Hidden Majesty
          </Link>
          
          
          <Link
            href="/novenas/corpus-christi/day-4"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 4: Greatest Gift →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
