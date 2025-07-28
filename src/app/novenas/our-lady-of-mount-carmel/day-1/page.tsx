import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Mount Carmel Novena - Day 1: Protection',
  description: 'Pray the Our Lady of Mount Carmel Novena - Day 1 focusing on Protection. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of mount carmel novena day 1',
    'mount carmel novena day 1',
    'mary novena day 1',
    'our lady novena day 1',
    'mount carmel prayer protection',
    'day 1 mount carmel novena',
    'protection mary prayer',
    'mount carmel novena protection',
    'mary novena protection'
  ],
  openGraph: {
    title: 'Our Lady of Mount Carmel Novena - Day 1: Protection',
    description: 'Pray the Our Lady of Mount Carmel Novena - Day 1 focusing on Protection. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-mount-carmel/day-1',
  },
  twitter: {
    title: 'Our Lady of Mount Carmel Novena - Day 1: Protection',
    description: 'Pray the Our Lady of Mount Carmel Novena - Day 1 focusing on Protection. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfMountCarmelNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Mount Carmel Novena – Day 1: Protection
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
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Protection</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Our Lady of Mount Carmel Novena, we pray for the gift of the Scapular
            and Mary's promise of protection and grace. We ask Mary to help us understand the power of the Scapular
            and to reveal if we are called to this devotion.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 1</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>God, thank You for the gift of the Blessed Mother.</strong> Her presence has brought peace 
                and helped countless souls come closer to You.
              </p>

              <p className="mb-6">
                <strong>Our Lady of Mount Carmel,</strong> when You appeared to St. Simon Stock in the 1200s, 
                You gave the Scapular with promises of protection and grace. You promised to be with those 
                who wear it faithfully, especially at their death, and to help free them from the pains of purgatory.
              </p>

              <p className="mb-6">
                <strong>Watch over all who wear the scapular.</strong> Intercede before Your Son for their needs. 
                Strengthen their devotion and faithfulness. If I am called to this devotion, reveal it to me during this novena.
              </p>

              <p className="mb-6">
                <strong>I now place before you my intentions:</strong> (State your intentions here)
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
                Today we pray for the gift of the Scapular and Mary's promise of protection and grace.
                The Scapular is a powerful sacramental that connects us to Mary and her promises.
              </p>

              <p className="mb-4">
                When Mary appeared to St. Simon Stock in the 13th century, she gave him the Brown Scapular 
                as a sign of her protection and love. She promised that those who wear it faithfully 
                would receive her special protection in life and at the hour of death.
              </p>

              <p className="mb-4">
                The Scapular is not a magical charm, but a sign of our devotion to Mary and our desire 
                to live a holy life. It reminds us of Mary's maternal care and her promise to help us 
                on our journey to heaven.
              </p>

              <p className="mb-4">
                As we begin this novena, let us ask Mary to reveal to us if we are called to wear the Scapular. 
                Let us ask her to help us understand the power of this devotion and to strengthen our faith in her promises.
              </p>

              <p>
                Remember that the Scapular is a sign of Mary's love and protection. When we wear it with faith and devotion, 
                we are placing ourselves under her maternal care and trusting in her intercession.
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
            Our Lady of Mount Carmel, help us to understand the power of the Scapular and your promise of protection. 
            If we are called to this devotion, reveal it to us during this novena. Help us to trust in your maternal care 
            and to seek your intercession in all our needs. May we always remember your promise to be with us 
            especially at the hour of death. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Mount Carmel Novena - Day 1: Faith"
          text="Join me in praying the Our Lady of Mount Carmel Novena - Day 1 focusing on Faith."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-mount-carmel"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-mount-carmel/day-2"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 2: Vocations →
          </Link>
        </div>
      </div>
    </div>
  )
} 