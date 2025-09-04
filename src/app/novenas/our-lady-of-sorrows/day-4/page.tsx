import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Sorrows Novena - Day 4: Grief',
  description: 'Pray the Our Lady of Sorrows Novena - Day 4 focusing on Grief. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of sorrows novena day 4',
    'sorrows novena day 4',
    'mary novena day 4',
    'our lady novena day 4',
    'sorrows prayer grief',
    'day 4 sorrows novena',
    'grief mary prayer',
    'sorrows novena grief',
    'mary novena grief'
  ],
  openGraph: {
    title: 'Our Lady of Sorrows Novena - Day 4: Grief',
    description: 'Pray the Our Lady of Sorrows Novena - Day 4 focusing on Grief. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-sorrows/day-4',
  },
  twitter: {
    title: 'Our Lady of Sorrows Novena - Day 4: Grief',
    description: 'Pray the Our Lady of Sorrows Novena - Day 4 focusing on Grief. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfSorrowsNovenaDay4Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Sorrows Novena – Day 4: Grief
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
            <span className="text-gray-800">Day 4</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Grief</h2>
          <p className="text-gray-700 leading-relaxed">
            On this fourth day of the Our Lady of Sorrows Novena, we pray for all those grieving the loss of a loved one 
            to find consolation and strength through Mary's example and maternal care.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 4</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Dear Lord, we thank You for giving us Our Lady of Sorrows to be our loving mother.</strong>
              </p>

              <p className="mb-6">
                <strong>Our Lady of Sorrows,</strong> you bore witness to the brutal torture and crucifixion of your Son. You stood faithfully at the foot of the Cross, sharing in His agony and offering your own sufferings to the Father. No grief compares to the pain you endured as you held His lifeless body in your arms.
              </p>

              <p className="mb-6">
                <strong>Today, we ask you to intercede for all those grieving the loss of a loved one.</strong> May they find consolation and strength through your example and maternal care.
              </p>

              <p className="mb-6">
                <strong>Pray for us, that we may never allow any sufferings to lead us away from God.</strong> Pray that we may hold fast to Christ in every trial we face.
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
                Today we pray for all those grieving the loss of a loved one to find consolation and strength 
                through Mary's example and maternal care.
              </p>

              <p className="mb-4">
                Our Lady of Sorrows bore witness to the brutal torture and crucifixion of her Son. She stood faithfully 
                at the foot of the Cross, sharing in His agony and offering her own sufferings to the Father. 
                No grief compares to the pain she endured as she held His lifeless body in her arms.
              </p>

              <p className="mb-4">
                Mary's grief was unimaginable, yet she remained faithful to God. She shows us that even in the depths 
                of sorrow, we can find strength in our faith. She teaches us that grief can be offered to God 
                and united with the sufferings of Jesus for the salvation of souls.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to intercede for all those grieving the loss of a loved one. 
                May they find consolation and strength through her example and maternal care. 
                Let us ask her to help them hold fast to Christ in their time of trial.
              </p>

              <p>
                Let us also ask Mary to pray for us, that we may never allow any sufferings to lead us away from God 
                and that we may hold fast to Christ in every trial we face. Mary's example shows us that even in grief, 
                we can find hope and strength in our faith.
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
            Our Lady of Sorrows, intercede for all those grieving the loss of a loved one. May they find consolation 
            and strength through your example and maternal care. Help us to never allow any sufferings to lead us away from God 
            and to hold fast to Christ in every trial we face. May we always find hope and strength in our faith, even in times of grief. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of Sorrows Novena - Day 4: Prayer" 
            url="/novenas/our-lady-of-sorrows/day-4"
            excerpt="Join me in praying the Our Lady of Sorrows Novena - Day 4 focusing on Prayer." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-sorrows/day-3"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 3: Suffering
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-sorrows/day-5"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 5: Emotional Pain →
          </Link>
        </div>
      </div>
    </div>
  )
} 