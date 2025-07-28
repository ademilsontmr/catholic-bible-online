import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Sorrows Novena - Day 1: Mothers',
  description: 'Pray the Our Lady of Sorrows Novena - Day 1 focusing on Mothers. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of sorrows novena day 1',
    'sorrows novena day 1',
    'mary novena day 1',
    'our lady novena day 1',
    'sorrows prayer mothers',
    'day 1 sorrows novena',
    'mothers mary prayer',
    'sorrows novena mothers',
    'mary novena mothers'
  ],
  openGraph: {
    title: 'Our Lady of Sorrows Novena - Day 1: Mothers',
    description: 'Pray the Our Lady of Sorrows Novena - Day 1 focusing on Mothers. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-sorrows/day-1',
  },
  twitter: {
    title: 'Our Lady of Sorrows Novena - Day 1: Mothers',
    description: 'Pray the Our Lady of Sorrows Novena - Day 1 focusing on Mothers. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfSorrowsNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Sorrows Novena – Day 1: Mothers
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
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Mothers</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Our Lady of Sorrows Novena, we pray that God may bless and protect all mothers in the world 
            with strength, patience, and grace to fulfill their sacred vocation. We ask Mary to intercede for all mothers.
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
                <strong>Dear Lord, we thank You for giving us Our Lady of Sorrows as our loving mother.</strong> 
                We ask You to hear the petitions she brings before Your throne on our behalf.
              </p>

              <p className="mb-6">
                <strong>Our Lady of Sorrows,</strong> your Son gave you to us to be our mother also. Your life is a perfect model of holiness, courage, and virtue. You suffered deeply yet never ceased to trust God. Through your powerful intercession and maternal love, guide us to walk faithfully in Christ's footsteps.
              </p>

              <p className="mb-6">
                <strong>We ask you to bring all of our prayers before the throne of your Son.</strong> Today, we especially pray that God may bless and protect all mothers in the world. May they receive strength, patience, and grace to fulfill their sacred vocation.
              </p>

              <p className="mb-6">
                <strong>Pray for us, that we may imitate your holy example in all that we do.</strong> Pray that we may grow closer to your Son each day of our lives.
              </p>

              <p className="mb-6">
                <strong>Special Intentions:</strong> (Mention your intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Lady of Sorrows, pray for us!</strong>
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
                Today we pray that God may bless and protect all mothers in the world with strength, patience, and grace 
                to fulfill their sacred vocation. We ask Mary to intercede for all mothers.
              </p>

              <p className="mb-4">
                Our Lady of Sorrows is a perfect model of motherhood. Her Son gave her to us to be our mother also, 
                and her life is a perfect example of holiness, courage, and virtue. She suffered deeply yet never ceased to trust God.
              </p>

              <p className="mb-4">
                Through her powerful intercession and maternal love, Mary guides us to walk faithfully in Christ's footsteps. 
                She understands the challenges and joys of motherhood, and she wants to help all mothers fulfill their sacred vocation.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to bring all of our prayers before the throne of her Son. 
                Let us especially pray that God may bless and protect all mothers in the world, 
                giving them strength, patience, and grace to fulfill their sacred vocation.
              </p>

              <p>
                Let us also ask Mary to pray for us, that we may imitate her holy example in all that we do 
                and grow closer to her Son each day of our lives. Mary's maternal care extends to all of us, 
                and she wants to help us become better Christians and better people.
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
            Our Lady of Sorrows, help us to imitate your holy example in all that we do. Pray for us that we may grow closer 
            to your Son each day of our lives. Intercede for all mothers in the world, that they may receive strength, 
            patience, and grace to fulfill their sacred vocation. May we always trust in your maternal care and follow your example of holiness. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Sorrows Novena - Day 1: Faith"
          text="Join me in praying the Our Lady of Sorrows Novena - Day 1 focusing on Faith."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-sorrows"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-sorrows/day-2"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 2: Families →
          </Link>
        </div>
      </div>
    </div>
  )
} 