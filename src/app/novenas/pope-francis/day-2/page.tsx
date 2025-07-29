import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Pope Francis - Day 2: Forgiveness',
  description: 'Pray the Novena for Pope Francis - Day 2 focusing on Forgiveness. Join in praying the traditional novena to honor Pope Francis.',
  keywords: [
    'novena for pope francis day 2',
    'pope francis novena day 2',
    'pope novena day 2',
    'francis novena day 2',
    'pope francis prayer forgiveness',
    'day 2 pope francis novena',
    'forgiveness prayer',
    'pope francis novena forgiveness',
    'pope novena forgiveness'
  ],
  openGraph: {
    title: 'Novena for Pope Francis - Day 2: Forgiveness',
    description: 'Pray the Novena for Pope Francis - Day 2 focusing on Forgiveness. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/pope-francis/day-2',
  },
  twitter: {
    title: 'Novena for Pope Francis - Day 2: Forgiveness',
    description: 'Pray the Novena for Pope Francis - Day 2 focusing on Forgiveness. Join in praying the traditional novena.',
  }
}

export default function PopeFrancisNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Pope Francis – Day 2: Forgiveness
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
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Forgiveness</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of the Novena for Pope Francis, we pray for forgiveness of Pope Francis' sins
            and human failings. We ask God to show him mercy and grant him forgiveness.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>

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
                <strong>We pray today for forgiveness of Pope Francis' sins and human failings.</strong>
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
                Today we pray for forgiveness of Pope Francis' sins and human failings.
                As human beings, we all have weaknesses and imperfections, and Pope Francis was no exception.
              </p>

              <p className="mb-4">
                Pope Francis has been a shepherd of the Church, but like all of us, he was also a sinner in need of God's mercy.
                We pray that God will forgive his sins and human failings, just as we hope for forgiveness for our own.
              </p>

              <p className="mb-4">
                The mercy of God is infinite and His forgiveness is complete.
                We trust that God will show Pope Francis the same mercy He shows to all who turn to Him in repentance.
              </p>

              <p className="mb-4">
                As we continue this novena, let us pray with confidence in God's mercy.
                Let us ask God to forgive Pope Francis' sins and welcome him into the fullness of His love.
              </p>

              <p>
                Remember that forgiveness is not just about God's mercy, but about our own need for forgiveness as well.
                We should always be ready to forgive others as we hope to be forgiven.
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
            O Lord, we pray for forgiveness of Pope Francis' sins and human failings. Show him Your infinite mercy
            and grant him complete forgiveness. May Your mercy remind us of our own need for forgiveness
            and help us to be merciful to others. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for Pope Francis - Day 2: Forgiveness"
          text="Join me in praying the Novena for Pope Francis - Day 2 focusing on Forgiveness."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/pope-francis/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Soul and Purification
          </Link>
          
          <Link 
            href="/novenas/pope-francis/day-3"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 3: Thanksgiving →
          </Link>
        </div>
      </div>
    </div>
  )
} 