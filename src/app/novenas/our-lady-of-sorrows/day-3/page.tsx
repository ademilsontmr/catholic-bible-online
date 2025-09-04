import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Sorrows Novena - Day 3: Suffering',
  description: 'Pray the Our Lady of Sorrows Novena - Day 3 focusing on Suffering. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of sorrows novena day 3',
    'sorrows novena day 3',
    'mary novena day 3',
    'our lady novena day 3',
    'sorrows prayer suffering',
    'day 3 sorrows novena',
    'suffering mary prayer',
    'sorrows novena suffering',
    'mary novena suffering'
  ],
  openGraph: {
    title: 'Our Lady of Sorrows Novena - Day 3: Suffering',
    description: 'Pray the Our Lady of Sorrows Novena - Day 3 focusing on Suffering. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-sorrows/day-3',
  },
  twitter: {
    title: 'Our Lady of Sorrows Novena - Day 3: Suffering',
    description: 'Pray the Our Lady of Sorrows Novena - Day 3 focusing on Suffering. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfSorrowsNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Sorrows Novena – Day 3: Suffering
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
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Suffering</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day of the Our Lady of Sorrows Novena, we pray for all parents who witness the suffering of their children 
            and to offer trials to God with patience and faith, uniting them to the Passion of Jesus.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 3</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Dear Lord, thank You for giving us Our Lady of Sorrows as our mother and advocate.</strong>
              </p>

              <p className="mb-6">
                <strong>Our Lady of Sorrows,</strong> when Simeon foretold that a sword would pierce your heart, you accepted this prophecy with unwavering faith. Later, you endured the agony of watching your beloved Son suffer and die for the salvation of the world. Your maternal heart was crushed with sorrow, yet your trust in God never failed.
              </p>

              <p className="mb-6">
                <strong>We pray today for all parents who witness the suffering of their children.</strong> May they be strengthened and comforted by your example. Teach us to offer our trials to God with patience and faith, uniting them to the Passion of Jesus.
              </p>

              <p className="mb-6">
                <strong>Pray for us, that we may always offer to God every suffering we endure.</strong> Pray that we may grow in deeper union with your Son each day of our lives.
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
                Today we pray for all parents who witness the suffering of their children and to offer trials to God 
                with patience and faith, uniting them to the Passion of Jesus.
              </p>

              <p className="mb-4">
                When Simeon foretold that a sword would pierce Mary's heart, she accepted this prophecy with unwavering faith. 
                Later, she endured the agony of watching her beloved Son suffer and die for the salvation of the world. 
                Her maternal heart was crushed with sorrow, yet her trust in God never failed.
              </p>

              <p className="mb-4">
                Mary's example teaches us how to handle suffering with faith and trust. She shows us that even in the darkest moments, 
                we can maintain our faith in God and offer our sufferings to Him. She teaches us to unite our trials 
                to the Passion of Jesus, giving them redemptive value.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to pray for all parents who witness the suffering of their children. 
                May they be strengthened and comforted by her example. Let us ask her to teach us to offer our trials 
                to God with patience and faith, uniting them to the Passion of Jesus.
              </p>

              <p>
                Let us also ask Mary to pray for us, that we may always offer to God every suffering we endure 
                and grow in deeper union with her Son each day of our lives. Mary's example shows us that suffering 
                can be a path to holiness when we offer it to God with love and trust.
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
            Our Lady of Sorrows, pray for all parents who witness the suffering of their children. Strengthen and comfort them 
            with your example. Teach us to offer our trials to God with patience and faith, uniting them to the Passion of Jesus. 
            Help us to always offer to God every suffering we endure and to grow in deeper union with your Son each day of our lives. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of Sorrows Novena - Day 3: Love" 
            url="/novenas/our-lady-of-sorrows/day-3"
            excerpt="Join me in praying the Our Lady of Sorrows Novena - Day 3 focusing on Love." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-sorrows/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Families
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-sorrows/day-4"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 4: Grief →
          </Link>
        </div>
      </div>
    </div>
  )
} 