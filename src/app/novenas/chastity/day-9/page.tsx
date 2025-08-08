import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Chastity - Day 9: Society',
  description: 'Pray the Novena for Chastity - Day 9 focusing on Society. Join in praying the traditional novena to seek God\'s grace for chastity.',
  keywords: [
    'novena for chastity day 9',
    'chastity novena day 9',
    'chastity prayer day 9',
    'novena for chastity prayer society',
    'day 9 chastity novena',
    'society chastity prayer',
    'chastity novena society',
    'chastity prayer society'
  ],
  openGraph: {
    title: 'Novena for Chastity - Day 9: Society',
    description: 'Pray the Novena for Chastity - Day 9 focusing on Society. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/chastity/day-9',
  },
  twitter: {
    title: 'Novena for Chastity - Day 9: Society',
    description: 'Pray the Novena for Chastity - Day 9 focusing on Society. Join in praying the traditional novena.',
  }
}

export default function ChastityNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Chastity – Day 9: Society
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
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-pink-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Society</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray for our society to practice and respect chastity.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6"><strong>In the name of the Father, and of the Son, and of the Holy Spirit. <br/>Amen.</strong></p>
              <p className="mb-6">Dear Lord, we thank You and praise You for the many ways You assist us. We ask You today to help us live truly chaste lives.</p>
              <p className="mb-6">The evil one often attacks such things as chastity in our modern world. You know how many people fail to practice chastity and even disdain it. You want each one of us to be holy and to follow Your laws. You can bring our world back to a widespread practice of chastity.</p>
              <p className="mb-6">Please pour out Your grace and assistance on our efforts to grow in chastity, and we particularly ask today that You help our society to practice and respect chastity.</p>
              <p className="mb-6">Help us to always do all we can to lead others to You in our lives. Give us the grace to serve You wholeheartedly in every circumstance we face.</p>
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
              <p className="mb-4">Today we pray for our society to practice and respect chastity. The evil one often attacks chastity in our modern world, and many people fail to practice it or even disdain it.</p>
              <p className="mb-4">But God wants each one of us to be holy and to follow His laws. He can bring our world back to a widespread practice of chastity. His power is greater than any cultural trends or societal pressures.</p>
              <p className="mb-4">When we pray for our society, we are praying for the common good. A society that practices and respects chastity is a society that is healthier, happier, and more stable. Families are stronger, relationships are more meaningful, and people are more fulfilled.</p>
              <p className="mb-4">We should also remember that we have a role to play in bringing about this change. By living chaste lives ourselves and by being witnesses to the truth and beauty of this virtue, we can help to transform our society.</p>
              <p className="mb-4">Let us ask God today to help our society to practice and respect chastity. Let us ask Him to help us be instruments of this transformation, so that our world may become a place where chastity is valued and practiced.</p>
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
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly and give you strength, comfort, and peace in your journey toward chastity. 
            May you always remember His love and care for you, and may you continue to grow in faith, hope, and love 
            through your efforts to live virtuously, uniting your struggles with Christ's redemptive work.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Novena for Chastity! As you continue your spiritual journey, 
            may your heart be filled with trust, hope, love, humility, courage, and perseverance. 
            May God continue to watch over you and help you in all your needs, giving you the grace 
            to live truly chaste lives and to grow in holiness each day.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for Chastity - Day 9: Society"
          text="Join me in praying the Novena for Chastity - Day 9 focusing on Society."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/chastity/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Purity
          </Link>
          
          <Link 
            href="/novenas/chastity"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Chastity Novena" />
    </div>
  )
}