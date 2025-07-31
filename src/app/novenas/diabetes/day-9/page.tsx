import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Diabetes - Day 9: Gratitude',
  description: 'Pray the Novena for Diabetes - Day 9 focusing on Gratitude. Join in praying for healing and strength.',
}

export default function Day9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Novena for Diabetes – Day 9: Gratitude</h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Diabetes to seek God's intercession and guidance in managing diabetes.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/diabetes" className="hover:text-gray-700">Novena for Diabetes</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Gratitude</h2>
          <p className="text-gray-700 leading-relaxed">
            On this ninth day of the Novena for Diabetes, we pray with gratitude for God\'s help and care in managing diabetes. We thank God for His guidance and His love for us.</p>
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
                <strong>O Lord Jesus Christ,</strong> you are the source of all healing and strength.
You are always ready to help us in our needs and to guide us in our journey.
We come to you today with trust in your healing power.
              </p>
              <p className="mb-6">
                <strong>Your plan is perfect and your guidance is sure.</strong>
              </p>
              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>
              <p className="mb-6">
                <strong>Amen.</strong>
              </p>
              <p className="mb-6">
                <strong>O Lord Jesus Christ, heal us and guide us in managing diabetes!</strong>
              </p>
              <p className="mb-6">
                <strong>We also pray for these intentions… (State your intentions here)</strong>
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>O Mother of Perpetual Help, help us to surrender and trust!</strong>
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
                Today we pray for surrender and trust in managing health.
                Surrender and Trust are gifts from God that help us face life's challenges.
              </p>

              <p className="mb-4">
                The Bible tells us that "I can do all things through Christ who strengthens me" (Philippians 4:13).
                This powerful verse reminds us that our strength comes from God, not from ourselves.
                When we feel weak or overwhelmed, we can turn to Him for the help we need.
              </p>

              <p className="mb-4">
                God is our creator and our healer. He knows every aspect of our health and every challenge we face.
                As our loving Father, He wants what is best for us and is always ready to help us.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask God to give us the surrender and trust we need
                to manage our health well and to face each day with hope and confidence.
              </p>

              <p>
                Remember that God's help is available to us every day, and His love
                can help us overcome any obstacle we face in our health journey.
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
                Cultivate an attitude of gratitude. Thank God for His help and intercession. 
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Continue to Trust</h3>
              <p className="text-gray-700 text-sm">
                Continue to trust in God's intercession. He will always be there for you 
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
                and let Him be your source of strength in all things.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly with healing and strength. 
            May you always remember His care and His perfect plan for your health. 
            May you continue to grow in faith, hope, and love as you trust in His intercession.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Novena for Diabetes! As you continue your spiritual journey, 
            may your heart be filled with faith, trust, strength, courage, wisdom, understanding, patience, perseverance, hope, healing, gratitude, acceptance, peace, serenity, love, self-care, surrender, and trust. 
            May God continue to watch over you and help you in managing your health.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for Diabetes - Day 9: Surrender and Trust"
          text="Join me in praying the Novena for Diabetes - Day 9 focusing on Surrender and Trust."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/diabetes/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Love and Self-Care
          </Link>
          
          <Link 
            href="/novenas/diabetes"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Novena for Diabetes" />
    </div>
  )
}