import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Sorrows Novena - Day 8: Courage',
  description: 'Pray the Our Lady of Sorrows Novena - Day 8 focusing on Courage. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of sorrows novena day 8',
    'sorrows novena day 8',
    'mary novena day 8',
    'our lady novena day 8',
    'sorrows prayer courage',
    'day 8 sorrows novena',
    'courage mary prayer',
    'sorrows novena courage',
    'mary novena courage'
  ],
  openGraph: {
    title: 'Our Lady of Sorrows Novena - Day 8: Courage',
    description: 'Pray the Our Lady of Sorrows Novena - Day 8 focusing on Courage. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-sorrows/day-8',
  },
  twitter: {
    title: 'Our Lady of Sorrows Novena - Day 8: Courage',
    description: 'Pray the Our Lady of Sorrows Novena - Day 8 focusing on Courage. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfSorrowsNovenaDay8Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Sorrows Novena – Day 8: Courage
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Our Lady of Sorrows Novena to seek Mary's intercession and experience her maternal care.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-sorrows" className="hover:text-gray-700">Our Lady of Sorrows Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 8</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Courage</h2>
          <p className="text-gray-700 leading-relaxed">
            On this eighth day of the Our Lady of Sorrows Novena, we pray to unite our sufferings with those of Christ 
            and to see trials as opportunities to grow in holiness and share in the redemptive work of Jesus.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 8</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Dear Lord, thank You for the courage and fidelity of Our Lady of Sorrows.</strong>
              </p>

              <p className="mb-6">
                <strong>Our Lady,</strong> you endured unimaginable pain as you watched your Son suffer and die, yet you bore it with heroic love and perfect union with God's will.
              </p>

              <p className="mb-6">
                <strong>Today, we ask you to teach us to unite our sufferings with those of Christ.</strong> Help us to see trials as opportunities to grow in holiness and share in the redemptive work of Jesus.
              </p>

              <p className="mb-6">
                <strong>Pray for us, that we may never waste a moment of suffering but offer it all for the glory of God.</strong>
              </p>

              <p className="mb-6">
                <strong>Special Intentions:</strong> (Mention your intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Lady of Sorrows, pray for us!</strong>
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
                Today we pray to unite our sufferings with those of Christ and to see trials as opportunities 
                to grow in holiness and share in the redemptive work of Jesus.
              </p>

              <p className="mb-4">
                Our Lady of Sorrows endured unimaginable pain as she watched her Son suffer and die, yet she bore it 
                with heroic love and perfect union with God's will. She shows us what it means to have courage in the face of suffering.
              </p>

              <p className="mb-4">
                Mary's example teaches us that suffering can be redemptive when we unite it with the sufferings of Christ. 
                She shows us that trials are not punishments but opportunities to grow in holiness and share in the work of salvation. 
                Every moment of suffering offered to God has value.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to teach us to unite our sufferings with those of Christ. 
                Let us ask her to help us see trials as opportunities to grow in holiness and share in the redemptive work of Jesus.
              </p>

              <p>
                Let us also ask Mary to pray for us, that we may never waste a moment of suffering but offer it all 
                for the glory of God. Mary's example shows us that courage in suffering leads to holiness and helps 
                in the salvation of souls.
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
                Turn to her with confidence in every need, especially in times of suffering.
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
            Our Lady of Sorrows, teach us to unite our sufferings with those of Christ. Help us to see trials 
            as opportunities to grow in holiness and share in the redemptive work of Jesus. Pray for us, 
            that we may never waste a moment of suffering but offer it all for the glory of God. May we have the courage 
            to follow your example of heroic love and perfect union with God's will. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Sorrows Novena - Day 8: Grace"
          text="Join me in praying the Our Lady of Sorrows Novena - Day 8 focusing on Grace."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-sorrows/day-7"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 7: Devotion
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-sorrows/day-9"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 9: Church →
          </Link>
        </div>
      </div>
    </div>
  )
} 