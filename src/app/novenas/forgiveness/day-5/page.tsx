import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forgiveness Novena - Day 5: Humility',
  description: 'Pray the Forgiveness Novena - Day 5 focusing on Humility. Join in praying the traditional novena to seek God\'s grace in growing in humility for forgiveness.',
  keywords: [
    'forgiveness novena day 5',
    'humility prayer',
    'forgiveness humility',
    'forgiveness prayer day 5',
    'humility novena',
    'day 5 forgiveness novena',
    'humility prayer',
    'humility novena day 5',
    'catholic forgiveness prayer'
  ],
  openGraph: {
    title: 'Forgiveness Novena - Day 5: Humility',
    description: 'Pray the Forgiveness Novena - Day 5 focusing on Humility. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/forgiveness/day-5',
  },
  twitter: {
    title: 'Forgiveness Novena - Day 5: Humility',
    description: 'Pray the Forgiveness Novena - Day 5 focusing on Humility. Join in praying the traditional novena.',
  }
}

export default function ForgivenessNovenaDay5Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Forgiveness Novena – Day 5: Humility
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Forgiveness Novena to seek God's grace in forgiving others and growing in the virtue of forgiveness.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/special" className="hover:text-gray-700">Special Intentions</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/forgiveness" className="hover:text-gray-700">Forgiveness Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 5</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Humility</h2>
          <p className="text-gray-700 leading-relaxed">
            On this fifth day of the Forgiveness Novena, we pray for the grace to grow in the humility needed to forgive those who have wronged us.
            We ask God to help us understand His plan and to grow in humility.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 5</h2>

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
                <strong>Please help us and all people to grow in the ability to forgive,</strong> and we particularly ask today that You help all who are struggling to grow in humility to forgive those who have wronged them.
              </p>

              <p className="mb-6">
                <strong>Help us to do all we can to grow in holiness in our lives.</strong> Give us the grace to seek deeper friendship with You at every opportunity.
              </p>

              <p className="mb-6">
                <strong>And we especially ask in this novena for…</strong> (State your intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>

              <p className="mb-6">
                <strong>Lord, hear our prayers!</strong>
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
                Today we pray for the grace to grow in the humility needed to forgive those who have wronged us. 
                Humility is essential for forgiveness because it helps us recognize our own need for God's mercy.
              </p>

              <p className="mb-4">
                Jesus teaches us in Matthew 5:5 that "Blessed are the meek, for they shall inherit the earth." 
                This reminds us that humility is a key virtue that opens our hearts to God's grace and helps us forgive others.
              </p>

              <p className="mb-4">
                The title "Forgiveness Novena" reminds us that God is our ultimate model of forgiveness.
                He is always ready to help us forgive as He has forgiven us, and to grow in the virtue of forgiveness.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask God to help us grow in humility.
                Let us ask Him to help us recognize our own need for forgiveness and to extend that same mercy to others.
              </p>

              <p>
                Remember that true humility is not about thinking less of ourselves, but about thinking of ourselves less and focusing more on God and others.
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
            Dear Lord, help us to grow in humility as You call us to. Give us the grace to recognize our own need for forgiveness and to extend that same mercy to others, 
            and to seek deeper friendship with You. May we always choose humility over pride in our relationships. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Forgiveness Novena - Day 5: Humility"
          text="Join me in praying the Forgiveness Novena - Day 5 focusing on Humility."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/forgiveness/day-4"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 4: Family Healing
          </Link>
          
          <Link 
            href="/novenas/forgiveness/day-6"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 6: Trust in God →
          </Link>
        </div>
      </div>
    </div>
  )
} 