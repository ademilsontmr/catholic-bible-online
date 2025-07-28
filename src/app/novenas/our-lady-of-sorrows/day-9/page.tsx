import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Sorrows Novena - Day 9: Church',
  description: 'Pray the Our Lady of Sorrows Novena - Day 9 focusing on Church. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of sorrows novena day 9',
    'sorrows novena day 9',
    'mary novena day 9',
    'our lady novena day 9',
    'sorrows prayer church',
    'day 9 sorrows novena',
    'church mary prayer',
    'sorrows novena church',
    'mary novena church'
  ],
  openGraph: {
    title: 'Our Lady of Sorrows Novena - Day 9: Church',
    description: 'Pray the Our Lady of Sorrows Novena - Day 9 focusing on Church. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-sorrows/day-9',
  },
  twitter: {
    title: 'Our Lady of Sorrows Novena - Day 9: Church',
    description: 'Pray the Our Lady of Sorrows Novena - Day 9 focusing on Church. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfSorrowsNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Sorrows Novena – Day 9: Church
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
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Church</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of the Our Lady of Sorrows Novena, we pray for the Church's holiness, unity, and mission in the world, 
            and to be faithful members of the Church working for the salvation of souls.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Dear Lord, thank You for giving us Our Lady of Sorrows as the tender mother of the Church.</strong>
              </p>

              <p className="mb-6">
                <strong>Our Lady,</strong> your intercession has brought strength and renewal to the Church throughout the centuries. Today, as we conclude this novena, we ask you to pray for the Church's holiness, unity, and mission in the world.
              </p>

              <p className="mb-6">
                <strong>Pray for us, that we may be faithful members of the Church and work for the salvation of souls.</strong> Help us strive for sanctity so that we may one day rejoice with you in Heaven.
              </p>

              <p className="mb-6">
                <strong>Final Intentions:</strong> (Mention your intentions here)
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
                Today we pray for the Church's holiness, unity, and mission in the world, and to be faithful members 
                of the Church working for the salvation of souls.
              </p>

              <p className="mb-4">
                Our Lady of Sorrows is the tender mother of the Church. Her intercession has brought strength and renewal 
                to the Church throughout the centuries. She has always been there to help the Church in times of difficulty 
                and to guide her children to holiness.
              </p>

              <p className="mb-4">
                Mary's example teaches us what it means to be a faithful member of the Church. She shows us how to work 
                for the salvation of souls and how to strive for sanctity. She reminds us that our ultimate goal 
                is to rejoice with her in Heaven.
              </p>

              <p className="mb-4">
                As we conclude this novena today, let us ask Mary to pray for the Church's holiness, unity, and mission in the world. 
                Let us ask her to help us be faithful members of the Church and to work for the salvation of souls.
              </p>

              <p>
                Let us also ask Mary to help us strive for sanctity so that we may one day rejoice with her in Heaven. 
                Mary's example shows us that being a faithful member of the Church means working for the salvation of souls 
                and growing in holiness each day.
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
            Our Lady of Sorrows, pray for the Church's holiness, unity, and mission in the world. Help us to be faithful members 
            of the Church and to work for the salvation of souls. Guide us to strive for sanctity so that we may one day 
            rejoice with you in Heaven. Thank you for your powerful intercession throughout this novena. Amen.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Our Lady of Sorrows Novena! As you continue your spiritual journey, 
            may your heart be filled with love for mothers, families, trust in God, courage in suffering, devotion to Mary, 
            and faithfulness to the Church. May Our Lady of Sorrows continue to watch over you and help you in all your needs.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Sorrows Novena - Day 9: Mercy"
          text="Join me in praying the Our Lady of Sorrows Novena - Day 9 focusing on Mercy."
        />

{/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link 
            href="/novenas/our-lady-of-sorrows/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Courage
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-sorrows"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>
    </div>
  )
} 