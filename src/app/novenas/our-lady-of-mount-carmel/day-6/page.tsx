import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Mount Carmel Novena - Day 6: Purgatory',
  description: 'Pray the Our Lady of Mount Carmel Novena - Day 6 focusing on Purgatory. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of mount carmel novena day 6',
    'mount carmel novena day 6',
    'mary novena day 6',
    'our lady novena day 6',
    'mount carmel prayer purgatory',
    'day 6 mount carmel novena',
    'purgatory mary prayer',
    'mount carmel novena purgatory',
    'mary novena purgatory'
  ],
  openGraph: {
    title: 'Our Lady of Mount Carmel Novena - Day 6: Purgatory',
    description: 'Pray the Our Lady of Mount Carmel Novena - Day 6 focusing on Purgatory. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-mount-carmel/day-6',
  },
  twitter: {
    title: 'Our Lady of Mount Carmel Novena - Day 6: Purgatory',
    description: 'Pray the Our Lady of Mount Carmel Novena - Day 6 focusing on Purgatory. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfMountCarmelNovenaDay6Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Mount Carmel Novena – Day 6: Purgatory
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Our Lady of Mount Carmel Novena to seek Mary's intercession and experience her maternal care.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-mount-carmel" className="hover:text-gray-700">Our Lady of Mount Carmel Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 6</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Purgatory</h2>
          <p className="text-gray-700 leading-relaxed">
            On this sixth day of the Our Lady of Mount Carmel Novena, we pray for all souls in purgatory, 
            especially those we love. We ask Mary to beg her Son to bring them swiftly to His presence in heaven, 
            remembering her promise to free scapular wearers from purgatory.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 6</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Merciful God, thank You for Your justice and mercy in purgatory.</strong>
              </p>

              <p className="mb-6">
                <strong>Our Lady of Mount Carmel,</strong> you promised to free the souls wearing the scapular from purgatory. 
                Pray for all souls in purgatory, especially those I love. Beg your Son to bring them swiftly 
                to His presence in heaven.
              </p>

              <p className="mb-6">
                <strong>I also ask you to present these intentions:</strong> (State your intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Lady of Mount Carmel, pray for us!</strong>
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
                Today we pray for all souls in purgatory, especially those we love. Purgatory is a place of purification 
                where souls are prepared for heaven, and Mary has a special role in helping them.
              </p>

              <p className="mb-4">
                Mary has promised to free the souls wearing the Scapular from purgatory. This is one of the great promises 
                of the Brown Scapular. Those who wear it faithfully and with devotion will be freed from purgatory 
                on the first Saturday after their death.
              </p>

              <p className="mb-4">
                This promise shows Mary's great love for us and her desire to help us reach heaven. She knows that purgatory 
                is a place of suffering, and she wants to help us avoid it or be freed from it quickly. 
                This is why she gave us the Scapular as a sign of her protection and love.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to pray for all souls in purgatory, especially those we love. 
                Let us ask her to beg her Son to bring them swiftly to His presence in heaven. 
                Let us also remember to pray for the souls in purgatory every day, not just during this novena.
              </p>

              <p>
                Remember that the souls in purgatory cannot help themselves, but they can help us through their prayers. 
                When we pray for them, we are also helping ourselves, as they will remember us when they reach heaven.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in Mary</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in Mary's maternal care and her ability to help you.
                Turn to her with confidence in every need.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                Mary will not fail to help those who turn to her with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to Mary.
                She wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Mary for her help and intercession.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Our Lady of Mount Carmel, pray for all souls in purgatory, especially those we love. 
            Beg your Son to bring them swiftly to His presence in heaven. Help us to remember 
            your promise to free scapular wearers from purgatory, and may we always wear the Scapular 
            with devotion and love. May we also remember to pray for the souls in purgatory every day. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Mount Carmel Novena - Day 6: Protection"
          text="Join me in praying the Our Lady of Mount Carmel Novena - Day 6 focusing on Protection."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-mount-carmel/day-5"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 5: Comfort
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-mount-carmel/day-7"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 7: Healing →
          </Link>
        </div>
      </div>
    </div>
  )
} 