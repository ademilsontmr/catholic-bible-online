import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Mount Carmel Novena - Day 3: Charity',
  description: 'Pray the Our Lady of Mount Carmel Novena - Day 3 focusing on Charity. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of mount carmel novena day 3',
    'mount carmel novena day 3',
    'mary novena day 3',
    'our lady novena day 3',
    'mount carmel prayer charity',
    'day 3 mount carmel novena',
    'charity mary prayer',
    'mount carmel novena charity',
    'mary novena charity'
  ],
  openGraph: {
    title: 'Our Lady of Mount Carmel Novena - Day 3: Charity',
    description: 'Pray the Our Lady of Mount Carmel Novena - Day 3 focusing on Charity. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-mount-carmel/day-3',
  },
  twitter: {
    title: 'Our Lady of Mount Carmel Novena - Day 3: Charity',
    description: 'Pray the Our Lady of Mount Carmel Novena - Day 3 focusing on Charity. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfMountCarmelNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Mount Carmel Novena – Day 3: Charity
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
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Charity</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day of the Our Lady of Mount Carmel Novena, we pray for those suffering in poverty, 
            hunger, and lack of shelter. We ask Mary to embrace the poor and marginalized with her love 
            and bring them relief through her powerful intercession.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 3</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Heavenly Father, I pray for those suffering in poverty, hunger, and lack of shelter.</strong> 
                Protect them and provide for their needs.
              </p>

              <p className="mb-6">
                <strong>Our Lady of Mount Carmel,</strong> you have always interceded for God's people, even before Christ's birth. 
                Pray for the poor and marginalized. Embrace them with Your love and bring them relief through Your powerful intercession.
              </p>

              <p className="mb-6">
                <strong>Help me and my community find ways to serve those in need,</strong> following Christ's example.
              </p>

              <p className="mb-6">
                <strong>I also present my intentions:</strong> (State your intentions here)
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
                Today we pray for those suffering in poverty, hunger, and lack of shelter. 
                Mary has always had a special love for the poor and marginalized.
              </p>

              <p className="mb-4">
                Even before Christ's birth, Mary showed her concern for the poor. When she visited her cousin Elizabeth, 
                she proclaimed the Magnificat, praising God for lifting up the lowly and filling the hungry with good things. 
                This shows her deep understanding of God's love for the poor.
              </p>

              <p className="mb-4">
                Throughout her life, Mary continued to intercede for God's people. She was present at the wedding at Cana, 
                where she noticed the need for wine and asked Jesus to help. This shows her attentiveness to the needs of others 
                and her willingness to intercede for them.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to help us see the needs of the poor and marginalized around us. 
                Let us ask her to inspire us to serve those in need, following Christ's example of love and compassion.
              </p>

              <p>
                Remember that serving the poor is not just about giving material things, but about showing love and respect 
                for every person, recognizing that they are made in the image and likeness of God.
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
            Our Lady of Mount Carmel, help us to see the needs of the poor and marginalized around us. 
            Inspire us to serve those in need with love and compassion, following Christ's example. 
            May we always remember that every person is made in the image and likeness of God and deserves 
            our love and respect. Help us to be instruments of your love and care for all those who suffer. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Mount Carmel Novena - Day 3: Love"
          text="Join me in praying the Our Lady of Mount Carmel Novena - Day 3 focusing on Love."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-mount-carmel/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Vocations
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-mount-carmel/day-4"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 4: Guidance →
          </Link>
        </div>
      </div>
    </div>
  )
} 