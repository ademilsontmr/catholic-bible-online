import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Mount Carmel Novena - Day 4: Guidance',
  description: 'Pray the Our Lady of Mount Carmel Novena - Day 4 focusing on Guidance. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of mount carmel novena day 4',
    'mount carmel novena day 4',
    'mary novena day 4',
    'our lady novena day 4',
    'mount carmel prayer guidance',
    'day 4 mount carmel novena',
    'guidance mary prayer',
    'mount carmel novena guidance',
    'mary novena guidance'
  ],
  openGraph: {
    title: 'Our Lady of Mount Carmel Novena - Day 4: Guidance',
    description: 'Pray the Our Lady of Mount Carmel Novena - Day 4 focusing on Guidance. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-mount-carmel/day-4',
  },
  twitter: {
    title: 'Our Lady of Mount Carmel Novena - Day 4: Guidance',
    description: 'Pray the Our Lady of Mount Carmel Novena - Day 4 focusing on Guidance. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfMountCarmelNovenaDay4Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Mount Carmel Novena – Day 4: Guidance
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
            <span className="text-gray-800">Day 4</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Guidance</h2>
          <p className="text-gray-700 leading-relaxed">
            On this fourth day of the Our Lady of Mount Carmel Novena, we pray for Mary's guidance to lead us closer to Christ 
            and to help those who misunderstand her role. We ask her to draw us closer to Jesus through her guidance 
            and comfort us with her motherly love.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 4</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>God, thank You for giving us Mary as our mother and example of perfect love and faith.</strong>
              </p>

              <p className="mb-6">
                <strong>Our Lady of Mount Carmel,</strong> help those who misunderstand your role. You always lead us closer to Christ, 
                never away from Him. Your human experience makes you relatable, a true mother who understands our struggles.
              </p>

              <p className="mb-6">
                <strong>Draw me closer to Jesus through your guidance.</strong> Comfort me with your motherly love 
                and take my petitions to your Son: (State your intentions here)
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
                Today we pray for Mary's guidance to lead us closer to Christ and to help those who misunderstand her role. 
                Mary is our mother and guide, always pointing us toward her Son.
              </p>

              <p className="mb-4">
                Some people misunderstand Mary's role in our spiritual life. They think that devotion to Mary 
                takes away from our relationship with Jesus. But this is not true. Mary always leads us closer to Christ, 
                never away from Him. She is like a mother who takes her children by the hand and leads them to Jesus.
              </p>

              <p className="mb-4">
                Mary's human experience makes her relatable to us. She knows what it means to struggle, to suffer, 
                to have faith tested. She understands our human condition because she lived it. This makes her 
                a true mother who can comfort us and guide us with understanding and love.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to help us understand her role better. Let us ask her to guide us 
                closer to Jesus and to comfort us with her motherly love. Let us also pray for those who misunderstand 
                her role, that they may come to know her as the loving mother she is.
              </p>

              <p>
                Remember that Mary's greatest desire is to lead us to Jesus. She wants us to know and love her Son 
                as she does. When we turn to Mary, we are not turning away from Jesus, but allowing her to guide us 
                to a deeper relationship with Him.
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
            Our Lady of Mount Carmel, help us to understand your role as our mother and guide. Lead us closer to Jesus 
            through your guidance and comfort us with your motherly love. Help those who misunderstand your role 
            to see you as the loving mother you are. May we always remember that you always lead us to Christ, 
            never away from Him. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of Mount Carmel Novena - Day 4: Prayer" 
            url="/novenas/our-lady-of-mount-carmel/day-4"
            excerpt="Join me in praying the Our Lady of Mount Carmel Novena - Day 4 focusing on Prayer." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-mount-carmel/day-3"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 3: Charity
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-mount-carmel/day-5"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 5: Comfort →
          </Link>
        </div>
      </div>
    </div>
  )
} 