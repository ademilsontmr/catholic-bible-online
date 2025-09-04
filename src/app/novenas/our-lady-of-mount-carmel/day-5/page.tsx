import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Mount Carmel Novena - Day 5: Comfort',
  description: 'Pray the Our Lady of Mount Carmel Novena - Day 5 focusing on Comfort. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of mount carmel novena day 5',
    'mount carmel novena day 5',
    'mary novena day 5',
    'our lady novena day 5',
    'mount carmel prayer comfort',
    'day 5 mount carmel novena',
    'comfort mary prayer',
    'mount carmel novena comfort',
    'mary novena comfort'
  ],
  openGraph: {
    title: 'Our Lady of Mount Carmel Novena - Day 5: Comfort',
    description: 'Pray the Our Lady of Mount Carmel Novena - Day 5 focusing on Comfort. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-mount-carmel/day-5',
  },
  twitter: {
    title: 'Our Lady of Mount Carmel Novena - Day 5: Comfort',
    description: 'Pray the Our Lady of Mount Carmel Novena - Day 5 focusing on Comfort. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfMountCarmelNovenaDay5Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Mount Carmel Novena – Day 5: Comfort
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
            <span className="text-gray-800">Day 5</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Comfort</h2>
          <p className="text-gray-700 leading-relaxed">
            On this fifth day of the Our Lady of Mount Carmel Novena, we pray for the dying and their families, 
            seeking Mary's comfort and peace. We ask her to be present to those near death and to console their families, 
            bringing peace and hope of eternal life.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 5</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Lord, death is the gateway to eternal life,</strong> yet it often brings fear.
              </p>

              <p className="mb-6">
                <strong>Our Lady of Mount Carmel,</strong> you promised to comfort the dying and intercede for their souls. 
                Be present to those near death. Console their families. Bring peace and hope of eternal life.
              </p>

              <p className="mb-6">
                <strong>Remember my departed loved ones</strong> and take my other intentions before your Son: 
                (State your intentions here)
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
                Today we pray for the dying and their families, seeking Mary's comfort and peace. 
                Death is a difficult reality that we all must face, but Mary offers us hope and comfort.
              </p>

              <p className="mb-4">
                Mary knows what it means to suffer the loss of a loved one. She stood at the foot of the cross 
                and watched her Son die. She understands the pain of death and the grief that comes with it. 
                This makes her a source of comfort for those who are dying and for their families.
              </p>

              <p className="mb-4">
                Mary has promised to be present to those who wear the Scapular at the hour of death. 
                She will comfort them and help them to face death with peace and hope. She will also console 
                their families and help them to find strength in their faith.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to be present to all those who are near death. 
                Let us ask her to comfort them and their families, and to help them to find peace and hope 
                in the promise of eternal life.
              </p>

              <p>
                Remember that death is not the end, but the beginning of eternal life. Mary wants to help us 
                to face death with faith and hope, knowing that we will one day be reunited with our loved ones in heaven.
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
            Our Lady of Mount Carmel, be present to all those who are near death and comfort them with your love. 
            Console their families and help them to find strength in their faith. Help us all to face death 
            with peace and hope, knowing that it is the gateway to eternal life. May we always remember 
            your promise to be with us at the hour of death. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of Mount Carmel Novena - Day 5: Devotion" 
            url="/novenas/our-lady-of-mount-carmel/day-5"
            excerpt="Join me in praying the Our Lady of Mount Carmel Novena - Day 5 focusing on Devotion." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-mount-carmel/day-4"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 4: Guidance
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-mount-carmel/day-6"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 6: Purgatory →
          </Link>
        </div>
      </div>
    </div>
  )
} 