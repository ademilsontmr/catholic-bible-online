import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Pope Francis - Day 9: Thanksgiving for Life',
  description: 'Pray the Novena for Pope Francis - Day 9 focusing on Thanksgiving for Life. Join in praying the traditional novena to honor Pope Francis.',
  keywords: [
    'novena for pope francis day 9',
    'pope francis novena day 9',
    'pope novena day 9',
    'francis novena day 9',
    'pope francis prayer thanksgiving',
    'day 9 pope francis novena',
    'thanksgiving prayer',
    'pope francis novena thanksgiving',
    'pope novena thanksgiving'
  ],
  openGraph: {
    title: 'Novena for Pope Francis - Day 9: Thanksgiving for Life',
    description: 'Pray the Novena for Pope Francis - Day 9 focusing on Thanksgiving for Life. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/pope-francis/day-9',
  },
  twitter: {
    title: 'Novena for Pope Francis - Day 9: Thanksgiving for Life',
    description: 'Pray the Novena for Pope Francis - Day 9 focusing on Thanksgiving for Life. Join in praying the traditional novena.',
  }
}

export default function PopeFrancisNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Pope Francis – Day 9: Thanksgiving for Life
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Pope Francis to honor and pray for the Holy Father.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/pope-francis" className="hover:text-gray-700">Novena for Pope Francis</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Thanksgiving for Life</h2>
          <p className="text-gray-700 leading-relaxed">
            On this ninth and final day of the Novena for Pope Francis, we pray in thanksgiving for Pope Francis's life.
            We give thanks for his ministry and ask God to welcome him into eternal life.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit, Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O Crucified Lord,</strong> we mourn today the death of the Holy Father. 
                May Your suffering and his bring about repentance and a return to You.
              </p>

              <p className="mb-6">
                <strong>O Risen Lord,</strong> we pray that the Holy Father will come face to face with you 
                and that his prayers for the Church will bring about renewal of faith in You.
              </p>

              <p className="mb-6">
                <strong>We pray today in thanksgiving for Pope Francis's life.</strong>
              </p>

              <p className="mb-6">
                <strong>We pray also for (mention your intentions here).</strong>
              </p>

              <p className="mb-6">
                <strong>For Pope Francis, we pray:</strong>
              </p>

              <p className="mb-6">
                <strong>Eternal rest, grant unto him, O Lord. And let perpetual light shine upon him.</strong>
              </p>

              <p className="mb-6">
                <strong>May the souls of all the faithful departed, through the mercy of God, rest in peace.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit, Amen.</strong>
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
                Today we pray in thanksgiving for Pope Francis's life and ministry.
                We give thanks for all the ways he has served the Church and the world.
              </p>

              <p className="mb-4">
                Pope Francis has been a shepherd who has led with love, compassion, and humility.
                His life has been a witness to the Gospel and an example for all of us.
              </p>

              <p className="mb-4">
                We give thanks for his teachings, his prayers, and his service to the Church.
                May his legacy continue to inspire us to live our faith more deeply.
              </p>

              <p className="mb-4">
                As we conclude this novena, let us give thanks to God for Pope Francis's life.
                Let us pray that he may rest in peace and enjoy the reward of his labors.
              </p>

              <p>
                Remember that death is not the end, but the beginning of eternal life.
                We pray that Pope Francis may now see God face to face and intercede for us from heaven.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Reverence</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with reverence and respect for the Holy Father.
                Honor his memory and his service to the Church.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will hear our prayers for Pope Francis and the Church.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions for the Church and the next Pope.
                Pray for the particular needs of the Church during this time.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for Pope Francis' life and ministry.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Lord, we give thanks for Pope Francis's life and ministry. Thank You for the gift of his leadership
            and his witness to Your love. May he rest in peace and enjoy the reward of his labors in Your kingdom.
            Help us to continue his mission of spreading Your love and mercy in the world. Amen.
          </p>
        </section>

        {/* Congratulations Section */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed">
            You have completed the Novena for Pope Francis! May God bless you for your faithfulness in prayer.
            Continue to pray for the Church and for Pope Francis's successor. Your prayers make a difference!
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Pope Francis - Day 9: Thanksgiving for Life" 
            url="/novenas/pope-francis/day-9"
            excerpt="Join me in praying the Novena for Pope Francis - Day 9 focusing on Thanksgiving for Life." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/pope-francis/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Mercy
          </Link>
          
          <Link 
            href="/novenas/pope-francis"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Novena for Pope Francis" />
    </div>
  )
} 