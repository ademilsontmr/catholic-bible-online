import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Mount Carmel Novena - Day 2: Vocations',
  description: 'Pray the Our Lady of Mount Carmel Novena - Day 2 focusing on Vocations. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of mount carmel novena day 2',
    'mount carmel novena day 2',
    'mary novena day 2',
    'our lady novena day 2',
    'mount carmel prayer vocations',
    'day 2 mount carmel novena',
    'vocations mary prayer',
    'mount carmel novena vocations',
    'mary novena vocations'
  ],
  openGraph: {
    title: 'Our Lady of Mount Carmel Novena - Day 2: Vocations',
    description: 'Pray the Our Lady of Mount Carmel Novena - Day 2 focusing on Vocations. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-mount-carmel/day-2',
  },
  twitter: {
    title: 'Our Lady of Mount Carmel Novena - Day 2: Vocations',
    description: 'Pray the Our Lady of Mount Carmel Novena - Day 2 focusing on Vocations. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfMountCarmelNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Mount Carmel Novena – Day 2: Vocations
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
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Vocations</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of the Our Lady of Mount Carmel Novena, we pray for religious vocations
            and the Carmelite Order's spirit of contemplation. We ask Mary to bless the Carmelite Order
            and inspire vocations to religious life.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Lord, You call all people to holiness,</strong> especially those in religious life. 
                Thank You for the witness of priests, sisters, and all consecrated souls.
              </p>

              <p className="mb-6">
                <strong>Our Lady of Mount Carmel, bless the Carmelite Order.</strong> Deepen their spirit of contemplation 
                and love for God's Word. Inspire vocations to religious life and third orders among the laity, 
                so all may help spread holiness in the world.
              </p>

              <p className="mb-6">
                <strong>Please also take my petitions to Your Son:</strong> (State your intentions here)
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
                Today we pray for religious vocations and the Carmelite Order's spirit of contemplation.
                The Carmelite Order has a rich tradition of prayer, contemplation, and devotion to Mary.
              </p>

              <p className="mb-4">
                The Carmelite Order traces its origins to Mount Carmel in the Holy Land, where hermits 
                lived in prayer and contemplation. They were devoted to Mary and sought to follow her example 
                of perfect love for God.
              </p>

              <p className="mb-4">
                St. Simon Stock, who received the Scapular from Mary, was a Carmelite friar. Through his devotion 
                and the gift of the Scapular, the Carmelite Order has spread throughout the world, 
                bringing Mary's protection and grace to countless souls.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to bless the Carmelite Order and all religious communities. 
                Let us pray for vocations to religious life and for the laity to be inspired to live holy lives 
                through third orders and other forms of consecration.
              </p>

              <p>
                Remember that we are all called to holiness, whether in religious life or in the world. 
                Mary wants to help us grow in our vocation and to spread holiness wherever we are.
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
            Our Lady of Mount Carmel, bless the Carmelite Order and all religious communities. Inspire vocations 
            to religious life and help all people to grow in holiness. May we all be inspired by the example 
            of consecrated souls and seek to spread holiness in the world. Help us to understand our own vocation 
            and to live it with love and dedication. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Mount Carmel Novena - Day 2: Hope"
          text="Join me in praying the Our Lady of Mount Carmel Novena - Day 2 focusing on Hope."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-mount-carmel/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Protection
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-mount-carmel/day-3"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 3: Charity →
          </Link>
        </div>
      </div>
    </div>
  )
} 