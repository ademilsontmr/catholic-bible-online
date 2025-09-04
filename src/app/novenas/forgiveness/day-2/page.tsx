import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forgiveness Novena - Day 2: Friend Forgiveness',
  description: 'Pray the Forgiveness Novena - Day 2 focusing on Friend Forgiveness. Join in praying the traditional novena to seek God\'s grace in forgiving friends.',
  keywords: [
    'forgiveness novena day 2',
    'friend forgiveness prayer',
    'forgive friends',
    'forgiveness prayer day 2',
    'friend forgiveness novena',
    'day 2 forgiveness novena',
    'forgive friends prayer',
    'friend forgiveness novena day 2',
    'catholic forgiveness prayer'
  ],
  openGraph: {
    title: 'Forgiveness Novena - Day 2: Friend Forgiveness',
    description: 'Pray the Forgiveness Novena - Day 2 focusing on Friend Forgiveness. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/forgiveness/day-2',
  },
  twitter: {
    title: 'Forgiveness Novena - Day 2: Friend Forgiveness',
    description: 'Pray the Forgiveness Novena - Day 2 focusing on Friend Forgiveness. Join in praying the traditional novena.',
  }
}

export default function ForgivenessNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Forgiveness Novena – Day 2: Friend Forgiveness
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Forgiveness Novena to seek God's grace in forgiving others and growing in the virtue of forgiveness.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/forgiveness" className="hover:text-gray-700">Forgiveness Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Friend Forgiveness</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of the Forgiveness Novena, we pray for the grace to forgive close friends when they fail us.
            We ask God to help us understand that even our closest friends are human and can make mistakes.
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
                <strong>O God of Mercy and Love,</strong> you are the most loving and caring Father.
                You are always ready to help us in our needs and to give us the grace to forgive others.
                We come to you today with trust in your mercy and love.
              </p>

              <p className="mb-6">
                <strong>Your love for us is endless and your mercy is perpetual.</strong>
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O God of Mercy and Love, increase our ability to forgive friends!</strong> Help us to forgive completely
                those who are close to us, even when they have disappointed or hurt us. Teach us to turn to you
                with confidence in every difficulty of forgiveness.
              </p>

              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>

              <p className="mb-6">
                <strong>O God of Mercy and Love, help us to forgive!</strong>
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
                Today we pray for the grace to forgive close friends when they fail us.
                Friendship is a precious gift from God, but even the best friendships can be tested by human weakness and sin.
              </p>

              <p className="mb-4">
                Jesus teaches us in Luke 17:3-4 to forgive our brothers and sisters "seven times in the day" if they repent.
                This reminds us that forgiveness is not just a one-time act, but a continuous choice we must make.
              </p>

              <p className="mb-4">
                The title "Forgiveness Novena" reminds us that God is our ultimate model of forgiveness.
                He is always ready to help us forgive as He has forgiven us, and to grow in the virtue of forgiveness.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask God to help us forgive our friends.
                Let us ask Him to help us understand that everyone makes mistakes and that true friendship requires forgiveness.
              </p>

              <p>
                Remember that forgiving a friend does not mean we ignore the wrong, but that we choose to love them despite their imperfections, just as God loves us despite ours.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's ability to help you forgive.
                Turn to Him with confidence in every situation that requires forgiveness.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will not fail to help those who turn to Him with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific forgiveness needs and intentions to God.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Forgiveness is a process that takes time.
                Be patient with yourself and trust in God's timing.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O God of Mercy and Love, increase our ability to forgive friends. Help us to turn to you with confidence
            in every need for forgiveness, knowing that you will always help us and give us the grace to forgive others.
            May we always trust in your mercy and love. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Forgiveness Novena - Day 2: Friend Forgiveness" 
            url="/novenas/forgiveness/day-2"
            excerpt="Join me in praying the Forgiveness Novena - Day 2 focusing on Friend Forgiveness." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/forgiveness/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Family Forgiveness
          </Link>
          
          <Link 
            href="/novenas/forgiveness/day-3"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 3: Stranger Forgiveness →
          </Link>
        </div>
      </div>
    </div>
  )
} 