import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Mount Carmel Novena - Day 7: Healing',
  description: 'Pray the Our Lady of Mount Carmel Novena - Day 7 focusing on Healing. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of mount carmel novena day 7',
    'mount carmel novena day 7',
    'mary novena day 7',
    'our lady novena day 7',
    'mount carmel prayer healing',
    'day 7 mount carmel novena',
    'healing mary prayer',
    'mount carmel novena healing',
    'mary novena healing'
  ],
  openGraph: {
    title: 'Our Lady of Mount Carmel Novena - Day 7: Healing',
    description: 'Pray the Our Lady of Mount Carmel Novena - Day 7 focusing on Healing. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-mount-carmel/day-7',
  },
  twitter: {
    title: 'Our Lady of Mount Carmel Novena - Day 7: Healing',
    description: 'Pray the Our Lady of Mount Carmel Novena - Day 7 focusing on Healing. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfMountCarmelNovenaDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Mount Carmel Novena – Day 7: Healing
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
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Healing</h2>
          <p className="text-gray-700 leading-relaxed">
            On this seventh day of the Our Lady of Mount Carmel Novena, we pray for all who are sick, 
            suffering physically, mentally, or spiritually. We ask Mary to embrace them with love 
            and intercede for their healing and peace, remembering her promise of peace and protection to scapular wearers.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 7</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Our Lady of Mount Carmel,</strong> you promised peace and protection to those who wear the scapular.
              </p>

              <p className="mb-6">
                <strong>Today, I bring before you all who are sick,</strong> suffering physically, mentally, or spiritually. 
                Embrace them with love and intercede for their healing and peace.
              </p>

              <p className="mb-6">
                <strong>Please also include my special petitions:</strong> (State your intentions here)
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
                Today we pray for all who are sick, suffering physically, mentally, or spiritually. 
                Mary has promised peace and protection to those who wear the Scapular, and this includes healing.
              </p>

              <p className="mb-4">
                Mary knows what it means to suffer. She stood at the foot of the cross and watched her Son suffer 
                and die. She understands the pain of illness and suffering, both physical and spiritual. 
                This makes her a source of comfort and healing for all who are sick.
              </p>

              <p className="mb-4">
                The Scapular is a sign of Mary's protection and love. When we wear it with faith and devotion, 
                we are placing ourselves under her maternal care. She promises to bring us peace and protection, 
                and this includes healing from our illnesses and sufferings.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to embrace all those who are sick with her love. 
                Let us ask her to intercede for their healing and peace. Let us also remember that healing 
                can come in many forms - physical healing, emotional healing, spiritual healing, or the grace 
                to bear our sufferings with peace and hope.
              </p>

              <p>
                Remember that Mary wants to help us in all our needs, including our health. She is our mother 
                and she cares for us with a mother's love. When we turn to her in our sickness and suffering, 
                she will intercede for us and bring us the healing and peace we need.
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
            Our Lady of Mount Carmel, embrace all those who are sick with your love and intercede for their healing and peace. 
            Help us to remember your promise of peace and protection to scapular wearers. May we always turn to you 
            in our sickness and suffering, knowing that you care for us with a mother's love. 
            Help us to find healing and peace in your intercession. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Mount Carmel Novena - Day 7: Intercession"
          text="Join me in praying the Our Lady of Mount Carmel Novena - Day 7 focusing on Intercession."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-mount-carmel/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Purgatory
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-mount-carmel/day-8"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 8: Surrender →
          </Link>
        </div>
      </div>
    </div>
  )
} 