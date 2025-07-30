import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'
import RelatedNovenas from '@/components/RelatedNovenas'

export const metadata: Metadata = {
  title: 'Homeschool Novena - Day 9: Gratitude',
  description: 'Pray the Homeschool Novena - Day 9 focusing on Gratitude. Includes complete prayer text, reflection, and thanksgiving for God\'s guidance in homeschooling.',
  keywords: [
    'homeschool novena day 9',
    'homeschooling gratitude prayer',
    'family education gratitude prayer',
    'homeschool novena gratitude',
    'day 9 homeschool novena',
    'gratitude homeschooling prayer',
    'homeschool novena gratitude',
    'family education novena gratitude'
  ],
  openGraph: {
    title: 'Homeschool Novena - Day 9: Gratitude',
    description: 'Pray the Homeschool Novena - Day 9 focusing on Gratitude. Complete prayer text and reflection.',
    url: 'https://catholicbibleonline.com/novenas/homeschool/day-9',
  },
  twitter: {
    title: 'Homeschool Novena - Day 9: Gratitude',
    description: 'Pray the Homeschool Novena - Day 9 focusing on Gratitude. Complete prayer text and reflection.',
  }
}

export default function HomeschoolNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Homeschool Novena – Day 9: Gratitude
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray with gratitude for God's guidance and grace in our homeschooling journey.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/homeschool" className="hover:text-gray-700">Homeschool Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Gratitude</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of the Homeschool Novena, we pray with gratitude for God's guidance and grace 
            in our homeschooling journey. We thank Him for His wisdom and for always being ready to help us in our educational mission.
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
              
              <p className="mb-6">
                <strong>Opening Prayer:</strong><br/>
                O Heavenly Father, as we complete this novena in your honor, we come to you with hearts full of gratitude. 
                Thank you for your constant guidance and your perfect help in all our homeschooling needs. 
                Thank you for being our loving Father and for always being ready to guide us.
              </p>
              
              <p className="mb-6">
                <strong>Prayer of Gratitude:</strong><br/>
                Most loving Heavenly Father, we thank you for your endless love and care for us. 
                Thank you for listening to our prayers and for providing wisdom for our homeschooling journey. 
                Thank you for your paternal protection and for always being our refuge in times of need.
              </p>
              
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray with gratitude for God's guidance and grace in our homeschooling journey. We thank Him for His wisdom 
                and for always being ready to help us in our educational mission. We ask Him to continue to watch over us and to help us grow in holiness.
              </p>
              
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "Give thanks in all circumstances; for this is the will of God in Christ Jesus for you." (1 Thessalonians 5:18)
              </p>
              
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>

              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your intentions here)
              </p>

              <p className="mb-6">
                <strong>O Heavenly Father, guide us in our homeschooling journey!</strong>
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
                Today we pray with gratitude for God's guidance and grace in our homeschooling journey.
                Gratitude is a virtue that helps us recognize and appreciate all the blessings we receive.
              </p>

              <p className="mb-4">
                God is our Father, and He has been with us throughout this novena, guiding us and providing for our needs.
                As our Father, He has shown us how to trust, hope, love, and grow in all the virtues we have prayed for.
              </p>

              <p className="mb-4">
                The title "Homeschool" reminds us that education is a gift from God and that we can be grateful
                for the opportunity to educate our children at home. He is always available to us, always ready to provide wisdom,
                and always ready to help us in our educational mission.
              </p>

              <p className="mb-4">
                As we complete this novena, let us ask God to increase our gratitude.
                Let us ask Him to help us cultivate this virtue in our homeschooling journey,
                knowing that He will always guide us and help us grow in holiness.
              </p>
              
              <p>
                Remember that gratitude is not just about saying "thank you" but about living with a grateful heart. 
                Let us ask God to help us cultivate this virtue and to always be thankful for His guidance and grace.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Cultivate an attitude of gratitude. Thank God for His guidance and grace. 
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Continue to Trust</h3>
              <p className="text-gray-700 text-sm">
                Continue to trust in God's guidance. He will always be there for you 
                and will never fail to help those who turn to Him.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Share Your Gratitude</h3>
              <p className="text-gray-700 text-sm">
                Share your gratitude with others. Let them know about God's help 
                and encourage them to turn to Him in their needs.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Keep Praying</h3>
              <p className="text-gray-700 text-sm">
                Continue to pray to God regularly. Develop a daily devotion to Him 
                and let Him be your guide in all things.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly in your homeschooling journey. 
            May you always remember His guidance and His perfect help in all your educational needs. 
            May you continue to grow in love for Him and through Him, for your family and children.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Homeschool Novena! As you continue your homeschooling journey, 
            may your heart be filled with trust, hope, love, humility, patience, obedience, perseverance, wisdom, and gratitude. 
            May God continue to watch over you and guide you in all your educational decisions.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Homeschool Novena - Day 9: Gratitude"
          text="Join me in praying the Homeschool Novena - Day 9 focusing on Gratitude."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link 
            href="/novenas/homeschool/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Wisdom
          </Link>
          
          <Link 
            href="/novenas/homeschool"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="homeschool" />
    </div>
  )
}