import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Chronic Illness - Day 9: Perseverance',
  description: 'Pray the Novena for Chronic Illness - Day 9 focusing on Perseverance. Join in praying the traditional novena to seek God\'s grace for those with chronic illness.',
  keywords: [
    'novena for chronic illness day 9',
    'chronic illness novena day 9',
    'chronic illness prayer day 9',
    'novena for chronic illness prayer perseverance',
    'day 9 chronic illness novena',
    'perseverance chronic illness prayer',
    'chronic illness novena perseverance',
    'chronic illness prayer perseverance'
  ],
  openGraph: {
    title: 'Novena for Chronic Illness - Day 9: Perseverance',
    description: 'Pray the Novena for Chronic Illness - Day 9 focusing on Perseverance. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/chronic-illness/day-9',
  },
  twitter: {
    title: 'Novena for Chronic Illness - Day 9: Perseverance',
    description: 'Pray the Novena for Chronic Illness - Day 9 focusing on Perseverance. Join in praying the traditional novena.',
  }
}

export default function ChronicIllnessNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Chronic Illness – Day 9: Perseverance
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Chronic Illness to seek God's grace and assistance for those suffering from chronic illness.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/chronic-illness" className="hover:text-gray-700">Novena for Chronic Illness</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-teal-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Perseverance</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray for perseverance and trust for those with chronic illness.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">In the name of the Father, and of the Son, and of the Holy Spirit.<br/>Amen.</p>
              <p className="mb-6">Dear Lord, we thank You and praise You for the many ways You have assisted us throughout the trials and sufferings of our lives. We humbly ask You to pour out Your grace and assistance on all those who suffer from a chronic illness.</p>
              <p className="mb-6">Those who suffer from chronic illness endure many sufferings, and they often face many temptations to despair and to turn away from God. Those who suffer from chronic illness are in great need of the grace of perseverance.</p>
              <p className="mb-6">Please bless and assist all people who suffer from chronic illness, and we especially ask You today to help all those suffering from chronic illness to persevere!</p>
              <p className="mb-6">Help us to rely on You in all the sufferings and trials we face in our lives. Help us to grow closer to You each day.</p>
              <p className="mb-6">And I especially ask in this novena (mention your intentions here).</p>
              <p className="mb-6">Lord, hear our prayers!</p>
              <p className="mb-6">In the name of the Father, and of the Son, and of the Holy Spirit.<br/>Amen.</p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection for Today</h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">Today we pray for perseverance for those who suffer from chronic illness. Perseverance is perhaps the most important virtue for those who face long-term suffering.</p>
              <p className="mb-4">Those who suffer from chronic illness must persevere day after day, month after month, year after year. They must continue to fight, to hope, to trust, and to love even when the suffering seems endless and the future uncertain.</p>
              <p className="mb-4">Perseverance is not just about enduring suffering, but about continuing to grow in faith, hope, and love despite the suffering. It's about refusing to give up on God, on others, or on oneself.</p>
              <p className="mb-4">As we pray for them today, let us remember that perseverance is a gift from God. He wants to give those who suffer the grace they need to continue fighting and to continue growing in holiness.</p>
              <p className="mb-4">Let us ask God to help all those who suffer from chronic illness to persevere in their faith, their hope, and their love. May they find the strength they need to continue their journey with courage and trust.</p>
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
        <section className="bg-teal-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly and give you strength, comfort, and peace in your journey with chronic illness. 
            May you always remember His love and care for you, and may you continue to grow in faith, hope, and love 
            through your sufferings, uniting them with Christ's redemptive work.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Novena for Chronic Illness! As you continue your spiritual journey, 
            may your heart be filled with trust, hope, love, humility, courage, and perseverance. 
            May God continue to watch over you and help you in all your needs, giving you the grace 
            to find meaning and purpose in your suffering and to grow closer to Him each day.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for Chronic Illness - Day 9: Perseverance"
          text="Join me in praying the Novena for Chronic Illness - Day 9 focusing on Perseverance."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/chronic-illness/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Hope
          </Link>
          
          <Link 
            href="/novenas/chronic-illness"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Novena for Chronic Illness" />
    </div>
  )
}