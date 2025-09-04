import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Mount Carmel Novena - Day 9: Devotion',
  description: 'Pray the Our Lady of Mount Carmel Novena - Day 9 focusing on Devotion. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of mount carmel novena day 9',
    'mount carmel novena day 9',
    'mary novena day 9',
    'our lady novena day 9',
    'mount carmel prayer devotion',
    'day 9 mount carmel novena',
    'devotion mary prayer',
    'mount carmel novena devotion',
    'mary novena devotion'
  ],
  openGraph: {
    title: 'Our Lady of Mount Carmel Novena - Day 9: Devotion',
    description: 'Pray the Our Lady of Mount Carmel Novena - Day 9 focusing on Devotion. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-mount-carmel/day-9',
  },
  twitter: {
    title: 'Our Lady of Mount Carmel Novena - Day 9: Devotion',
    description: 'Pray the Our Lady of Mount Carmel Novena - Day 9 focusing on Devotion. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfMountCarmelNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Mount Carmel Novena – Day 9: Devotion
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
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Devotion</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of the Our Lady of Mount Carmel Novena, we pray for deeper devotion to Christ 
            through the Scapular and Mary's intercession. We ask her to lead us to Christ and draw us near 
            to His Sacred Heart as we honor hers.
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
                <strong>Why did you give us the scapular, Our Lady?</strong> To draw us closer to Jesus. 
                Every time it touches us, it reminds us of our devotion to God.
              </p>

              <p className="mb-6">
                <strong>Lead me to Christ through this devotion.</strong> Draw me near to His Sacred Heart 
                as I honor yours.
              </p>

              <p className="mb-6">
                <strong>Present my petitions before your Son:</strong> (State your intentions here)
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
                Today we pray for deeper devotion to Christ through the Scapular and Mary's intercession. 
                This is the final day of our novena, and we focus on the ultimate purpose of the Scapular: 
                to draw us closer to Jesus.
              </p>

              <p className="mb-4">
                The Scapular is not just a piece of cloth or a religious symbol. It is a sign of our devotion 
                to God and our desire to live a holy life. Every time we touch it or see it, it reminds us 
                of our commitment to follow Christ and to honor Mary as our mother.
              </p>

              <p className="mb-4">
                Mary gave us the Scapular to help us grow closer to Jesus. She wants us to honor her, 
                but her greatest desire is to lead us to her Son. The Scapular is a way for us to show 
                our love for Mary and to ask for her intercession, but it is also a way for us to grow 
                in our love for Jesus.
              </p>

              <p className="mb-4">
                As we complete this novena, let us ask Mary to lead us to Christ through this devotion. 
                Let us ask her to draw us near to His Sacred Heart as we honor hers. Let us also ask her 
                to help us to wear the Scapular with devotion and love, always remembering that it is 
                a sign of our commitment to follow Christ.
              </p>

              <p>
                Remember that the Scapular is a gift from Mary to help us on our journey to heaven. 
                When we wear it with faith and devotion, we are placing ourselves under her maternal care 
                and asking for her help to grow closer to Jesus.
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
            Our Lady of Mount Carmel, lead us to Christ through this devotion. Draw us near to His Sacred Heart 
            as we honor yours. Help us to wear the Scapular with devotion and love, always remembering 
            that it is a sign of our commitment to follow Christ. May we always remember that you gave us 
            the Scapular to draw us closer to Jesus, and may we use it as a way to grow in our love for Him. Amen.
          </p>
        </section>

        {/* Congratulations */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Our Lady of Mount Carmel Novena! As you continue your spiritual journey, 
            may your heart be filled with protection, vocations, charity, guidance, comfort, purgatory, healing, surrender, and devotion. 
            May Our Lady of Mount Carmel continue to watch over you and help you in all your needs through the protection of the Scapular.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of Mount Carmel Novena - Day 9: Salvation" 
            url="/novenas/our-lady-of-mount-carmel/day-9"
            excerpt="Join me in praying the Our Lady of Mount Carmel Novena - Day 9 focusing on Salvation." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-mount-carmel/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Protection
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-mount-carmel"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Our Lady of Mount Carmel Novena" />
    </div>
  )
} 