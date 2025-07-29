import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Pope Francis - Day 7: Cardinal Electors',
  description: 'Pray the Novena for Pope Francis - Day 7 focusing on Cardinal Electors. Join in praying the traditional novena to honor Pope Francis.',
  keywords: [
    'novena for pope francis day 7',
    'pope francis novena day 7',
    'pope novena day 7',
    'francis novena day 7',
    'pope francis prayer cardinal electors',
    'day 7 pope francis novena',
    'cardinal electors prayer',
    'pope francis novena cardinal electors',
    'pope novena cardinal electors'
  ],
  openGraph: {
    title: 'Novena for Pope Francis - Day 7: Cardinal Electors',
    description: 'Pray the Novena for Pope Francis - Day 7 focusing on Cardinal Electors. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/pope-francis/day-7',
  },
  twitter: {
    title: 'Novena for Pope Francis - Day 7: Cardinal Electors',
    description: 'Pray the Novena for Pope Francis - Day 7 focusing on Cardinal Electors. Join in praying the traditional novena.',
  }
}

export default function PopeFrancisNovenaDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Pope Francis – Day 7: Cardinal Electors
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
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Cardinal Electors</h2>
          <p className="text-gray-700 leading-relaxed">
            On this seventh day of the Novena for Pope Francis, we pray for the Cardinal electors who will choose Pope Francis's successor.
            We ask God to guide them with wisdom and discernment.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 7</h2>

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
                <strong>We pray today for the Cardinal electors who will choose Pope Francis's successor.</strong>
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
                Today we pray for the Cardinal electors who will choose Pope Francis's successor.
                This is one of the most important responsibilities in the Church.
              </p>

              <p className="mb-4">
                The Cardinal electors are called to discern God's will for the Church.
                They need wisdom, courage, and the guidance of the Holy Spirit.
              </p>

              <p className="mb-4">
                The choice of a new Pope affects not just the Church, but the entire world.
                We pray that they will choose someone who will lead with love and truth.
              </p>

              <p className="mb-4">
                As we continue this novena, let us pray for the Cardinal electors.
                Let us ask God to give them the grace to choose the right person for this time.
              </p>

              <p>
                Remember that the Holy Spirit guides the Church, and we trust in His providence
                to lead us to the Pope that God has chosen for us.
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
            O Lord, we pray for the Cardinal electors who will choose Pope Francis's successor.
            Give them wisdom and discernment to choose the right person to lead Your Church.
            May the Holy Spirit guide their hearts and minds in this important decision. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for Pope Francis - Day 7: Cardinal Electors"
          text="Join me in praying the Novena for Pope Francis - Day 7 focusing on Cardinal Electors."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/pope-francis/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Unity
          </Link>
          
          <Link 
            href="/novenas/pope-francis/day-8"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 8: Holy Spirit →
          </Link>
        </div>
      </div>
    </div>
  )
} 