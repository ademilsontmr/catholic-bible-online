import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'
import RelatedNovenas from '@/components/RelatedNovenas'

export const metadata: Metadata = {
  title: 'St. Rita of Cascia Novena - Day 9: Complete Trust',
  description: 'Day 9 of the St. Rita of Cascia Novena. Complete your trust in St. Rita\'s intercession and receive her final blessing.',
  keywords: [
    'st rita novena day 9',
    'st rita complete trust prayer',
    'saint rita day 9',
    'st rita of cascia day 9',
    'st rita novena complete trust'
  ]
}

export default function StRitaCasciaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Rita of Cascia Novena – Day 9: Complete Trust
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the St. Rita of Cascia Novena to seek help for impossible causes.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/st-rita-cascia" className="hover:text-gray-700">St. Rita of Cascia Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Complete Trust</h2>
          <p className="text-gray-700 leading-relaxed">
            Complete your trust in St. Rita's intercession and receive her final blessing for your impossible causes.
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
                <strong>O glorious St. Rita,</strong> patron saint of impossible causes, 
                I place my complete trust in thy powerful intercession. I believe that thou canst help me 
                in all my needs and that nothing is impossible with God. I consecrate myself to thee 
                and ask for thy final blessing upon all my intentions and impossible causes.
              </p>
              
              <p className="mb-6">
                <strong>Our Father...</strong>
              </p>
              
              <p className="mb-6">
                <strong>Hail Mary...</strong>
              </p>
              
              <p className="mb-6">
                <strong>Glory be to the Father...</strong>
              </p>
              
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we complete our trust in St. Rita's intercession and ask for her final blessing. 
                May we continue to trust in her powerful help and to pray with confidence for all our needs. 
                Help us to remain faithful to prayer and to trust that God will answer our petitions in His perfect time.
              </p>
              
              <p className="mb-6">
                <strong>O St. Rita,</strong> I thank thee for thy intercession during this novena. 
                I place my complete trust in thee and ask for thy continued help in all my needs.
              </p>
              
              <p className="mb-6">
                <strong>Pray for us, O glorious St. Rita, that we may be made worthy of the promises of Christ.</strong>
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
              As we complete this novena to St. Rita, let us reflect on the journey we have taken together. 
              We have prayed for patience, forgiveness, perseverance, conversion, peace, impossible causes, 
              suffering, miracles, and complete trust. Through each day, we have grown closer to St. Rita 
              and learned to trust more deeply in God's power and love.
            </p>
            
            <p className="mb-4">
              St. Rita's life teaches us that with God, nothing is impossible. She faced many trials and difficulties, 
              yet through prayer and trust in God, she overcame them all. Her example shows us that we too can face 
              our impossible situations with confidence, knowing that God is with us and that St. Rita is interceding for us.
            </p>
            
            <p>
              Continue to pray to St. Rita with confidence, and trust that she will help you with all your needs. 
              Remember that the novena may be over, but St. Rita's intercession continues. Keep her close to your heart 
              and turn to her whenever you need help with impossible causes.
            </p>
          </div>
        </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Continuing Your Devotion</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-black mb-3">Keep Praying</h3>
              <p className="text-gray-700 text-sm">
                Continue to pray to St. Rita regularly. You can pray the novena again whenever you need her help, 
                or simply ask for her intercession in your daily prayers.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-black mb-3">Trust in Her Help</h3>
              <p className="text-gray-700 text-sm">
                Trust that St. Rita is interceding for you and that God will answer your prayers 
                in the way that is best for your soul.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-black mb-3">Imitate Her Virtues</h3>
              <p className="text-gray-700 text-sm">
                Continue to grow in the virtues that St. Rita exemplified: patience, forgiveness, 
                perseverance, and complete trust in God.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-black mb-3">Share Her Story</h3>
              <p className="text-gray-700 text-sm">
                Share St. Rita's story with others and encourage them to turn to her for help 
                with their impossible causes.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            O glorious St. Rita, thank you for your powerful intercession during this novena. 
            I place my complete trust in you and ask for your continued help in all my needs and impossible causes. 
            Help me to grow in patience, forgiveness, and trust in God. 
            May I always remember that with God, nothing is impossible, and that you are always ready to help 
            those who turn to you with confidence. 
            We ask this through Christ our Lord. Amen.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the St. Rita of Cascia Novena! As you finish this powerful nine-day prayer, 
            remember that St. Rita is known as the "Saint of the Impossible" and continues to intercede 
            for all those who turn to her with trust and confidence.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="St. Rita of Cascia Novena - Day 9: Miracles"
          text="Join me in praying the St. Rita of Cascia Novena - Day 9 focusing on Miracles."
        />

{/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/st-rita-cascia/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Miracles
          </Link>
          
          <Link
            href="/novenas/st-rita-cascia"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Back to Novena Overview
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="St. Rita" />
    </div>
  )
} 