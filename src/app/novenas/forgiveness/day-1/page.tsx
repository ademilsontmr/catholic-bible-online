import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forgiveness Novena - Day 1: Family Forgiveness',
  description: 'Pray the Forgiveness Novena - Day 1 focusing on Family Forgiveness. Join in praying the traditional novena to seek God\'s grace in forgiving family members.',
  keywords: [
    'forgiveness novena day 1',
    'family forgiveness prayer',
    'forgive family',
    'forgiveness prayer day 1',
    'family forgiveness novena',
    'day 1 forgiveness novena',
    'forgive family prayer',
    'family forgiveness novena day 1',
    'catholic forgiveness prayer'
  ],
  openGraph: {
    title: 'Forgiveness Novena - Day 1: Family Forgiveness',
    description: 'Pray the Forgiveness Novena - Day 1 focusing on Family Forgiveness. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/forgiveness/day-1',
  },
  twitter: {
    title: 'Forgiveness Novena - Day 1: Family Forgiveness',
    description: 'Pray the Forgiveness Novena - Day 1 focusing on Family Forgiveness. Join in praying the traditional novena.',
  }
}

export default function ForgivenessNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Forgiveness Novena – Day 1: Family Forgiveness
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
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Family Forgiveness</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Forgiveness Novena, we pray for the grace to forgive family members who have hurt us.
            We ask God to help us understand that family relationships are precious gifts that require forgiveness and love.
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
                <strong>O God of Mercy and Love, increase our ability to forgive family members!</strong> Help us to forgive completely
                those who are closest to us, even when they have disappointed or hurt us deeply. Teach us to turn to you
                with confidence in every difficulty of forgiveness within our families.
              </p>

              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>

              <p className="mb-6">
                <strong>O God of Mercy and Love, help us to forgive our families!</strong>
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
                Today we pray for the grace to forgive family members who have hurt us.
                Family relationships are often the most challenging to forgive because they are the closest to our hearts.
              </p>

              <p className="mb-4">
                Jesus teaches us in Matthew 18:21-22 that we must forgive "not seven times, but seventy-seven times."
                This reminds us that forgiveness is not a one-time act, but a continuous choice we must make, especially within our families.
              </p>

              <p className="mb-4">
                The title "Forgiveness Novena" reminds us that God is our ultimate model of forgiveness.
                He is always ready to help us forgive as He has forgiven us, and to grow in the virtue of forgiveness.
              </p>

              <p className="mb-4">
                As we begin this novena, let us ask God to help us forgive our family members.
                Let us ask Him to help us understand that everyone makes mistakes and that true love requires forgiveness.
              </p>

              <p>
                Remember that forgiving a family member does not mean we ignore the wrong, but that we choose to love them despite their imperfections, just as God loves us despite ours.
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
            O God of Mercy and Love, increase our ability to forgive family members. Help us to turn to you with confidence
            in every need for forgiveness, knowing that you will always help us and give us the grace to forgive others.
            May we always trust in your mercy and love. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Forgiveness Novena - Day 1: Family Forgiveness"
          text="Join me in praying the Forgiveness Novena - Day 1 focusing on Family Forgiveness."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/forgiveness"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena
          </Link>
          
          <Link 
            href="/novenas/forgiveness/day-2"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 2: Friend Forgiveness →
          </Link>
        </div>
      </div>
    </div>
  )
} 