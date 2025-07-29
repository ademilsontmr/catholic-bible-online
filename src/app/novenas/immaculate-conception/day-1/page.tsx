import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Immaculate Conception Novena - Day 1: Immaculate Conception',
  description: 'Pray the Immaculate Conception Novena - Day 1 focusing on immaculate conception. Join in praying for holiness and submission to God\'s will.',
  keywords: [
    'immaculate conception novena day 1',
    'immaculate conception prayer day 1',
    'day 1 immaculate conception novena',
    'immaculate conception mary immaculate'
  ],
  openGraph: {
    title: 'Immaculate Conception Novena - Day 1: Immaculate Conception',
    description: 'Pray the Immaculate Conception Novena - Day 1 focusing on Immaculate Conception.',
    url: 'https://catholicbibleonline.com/novenas/immaculate-conception/day-1',
  },
  twitter: {
    title: 'Immaculate Conception Novena - Day 1: Immaculate Conception',
    description: 'Pray the Immaculate Conception Novena - Day 1 focusing on Immaculate Conception.',
  }
}

export default function ImmaculateConceptionNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Immaculate Conception Novena – Day 1: Immaculate Conception
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Immaculate Conception Novena to honor Mary and grow in holiness.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/immaculate-conception" className="hover:text-gray-700">Immaculate Conception Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Immaculate Conception</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Immaculate Conception Novena, we honor Mary's Immaculate Conception and pray for holiness and submission to Jesus and the Divine Will.
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

              <p className="mb-4">O most pure Virgin Mary conceived without sin, from the very first instant, you were entirely immaculate. O glorious Mary full of grace, you are the mother of my God – the Queen of Angels and of men. I humbly venerate you as the chosen mother of my Savior, Jesus Christ.</p>

              <p className="mb-4">The Prince of Peace and the Lord of Lords chose you for the singular grace and honor of being His beloved mother. By the power of His Cross, He preserved you from all sin. Therefore, by His power and love, I have hope and bold confidence in your prayers for my holiness and salvation.</p>

              <p className="mb-4">I pray that your prayers will bring me to imitate your holiness and submission to Jesus and the Divine Will.</p>

              <p className="mb-4">Queen of Heaven, I beg you to beg my Savior to grant me these requests…</p>

              <p className="mb-6">
                <strong>(Mention your intentions)</strong>
              </p>

              <p className="mb-4">
                My holy Mother, I know that you were obedient to the will of God. In making this petition, I know that God\'s will is more perfect than mine. So, grant that I may receive God\'s grace with humility as you did.
              </p>

              <p className="mb-4">
                As my final request, I ask that you pray for me to increase in faith in our risen Lord; I ask that you pray for me to increase in hope in our risen Lord; I ask that you pray for me to increase in love for the risen Jesus!
              </p>

              <p className="mb-6">
                <strong>Hail Mary, full of Grace, the Lord is with thee. Blessed art thou among women and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners now and at the hour of our death. Amen.</strong>
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
                Today we focus on immaculate conception. This aspect of honoring the Immaculate Conception helps us to grow in faith 
                and to become more like Christ in our daily lives as we seek holiness and submission to God\'s will.
              </p>
              <p className="mb-4">
                As we continue our Immaculate Conception Novena, let us remember that Mary, the most pure Virgin conceived without sin, 
                was entirely immaculate and full of grace, chosen by God to be the mother of our Savior, Jesus Christ.
              </p>
              <p>
                Let us ask Mary to help us be instruments of her love and grace in our daily lives, imitating her perfect obedience to the Divine Will.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Humble</h3>
              <p className="text-gray-700 text-sm">
                Approach Mary with humility, recognizing her as the chosen mother of our Savior.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Obedient</h3>
              <p className="text-gray-700 text-sm">
                Follow Mary's example of obedience to God\'s will in all things.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust in Mary's powerful intercession and her love for all her children.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Devoted</h3>
              <p className="text-gray-700 text-sm">
                Show devotion to Mary and seek to imitate her holiness and submission.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Mary, most pure Virgin conceived without sin, we thank You for this day of prayer and reflection. Help us to carry 
            Your grace and love into our daily lives and to trust completely in Your powerful intercession. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Immaculate Conception Novena - Day 1: Immaculate Conception"
          text="Join me in praying the Immaculate Conception Novena - Day 1 focusing on immaculate conception."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/immaculate-conception"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          
          
          <Link 
            href="/novenas/immaculate-conception/day-2"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Day 2: Queen of Heaven →
          </Link>
          
        </div>
      </div>

      
    </div>
  )
}