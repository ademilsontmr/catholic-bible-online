import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Divine Mercy Novena - Day 1: All Mankind',
  description: 'Pray the Divine Mercy Novena - Day 1 for All Mankind. Join in praying the traditional Divine Mercy Novena revealed to St. Faustina.',
  keywords: [
    'divine mercy novena day 1',
    'divine mercy prayer',
    'st faustina novena',
    'day 1 divine mercy',
    'divine mercy novena all mankind',
    'divine mercy prayer st faustina',
    'divine mercy novena prayer',
    'divine mercy nine day prayer'
  ],
  openGraph: {
    title: 'Divine Mercy Novena - Day 1: All Mankind',
    description: 'Pray the Divine Mercy Novena - Day 1 for All Mankind. Join in praying the traditional Divine Mercy Novena.',
    url: 'https://catholicbibleonline.com/novenas/divine-mercy/day-1',
  },
  twitter: {
    title: 'Divine Mercy Novena - Day 1: All Mankind',
    description: 'Pray the Divine Mercy Novena - Day 1 for All Mankind. Join in praying the traditional Divine Mercy Novena.',
  }
}

export default function DivineMercyNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Divine Mercy Novena – Day 1: All Mankind
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Divine Mercy Novena revealed to St. Faustina Kowalska.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/divine-mercy" className="hover:text-gray-700">Divine Mercy Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: All Mankind</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Divine Mercy Novena, we pray for all mankind, especially poor sinners. 
            We ask Jesus to have mercy on all humanity and to bring all souls into the abode of His Most Compassionate Heart.
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
                <strong>Most Merciful Jesus, whose very nature it is to have compassion on us and to forgive us, 
                do not look upon our sins but upon our trust which we place in Your infinite goodness. 
                Receive us all into the abode of Your Most Compassionate Heart, and never let us escape from It. 
                We beg this of You by Your love which unites You to the Father and the Holy Spirit.</strong>
              </p>
              
              <p className="mb-6">
                <strong>O omnipotence of Divine Mercy, help of those who are falling, raise up all who have fallen, 
                and assist those who rise. Let all who recognize the warmth of Your Heart feel the effects of Your mercy. 
                Do not look upon how many, but upon what love and what repentance they bring with them.</strong>
              </p>
              
              <p className="mb-6">
                <strong>Eternal Father, turn Your merciful gaze upon all mankind and especially upon poor sinners, 
                all enfolded in the Most Compassionate Heart of Jesus. For the sake of His sorrowful Passion, 
                show us Your mercy, that we may praise the omnipotence of Your mercy for ever and ever. Amen.</strong>
              </p>
              
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for all mankind, especially poor sinners. We ask Jesus to have mercy on all humanity 
                and to bring all souls into the abode of His Most Compassionate Heart.
              </p>
              
              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your intentions here)
              </p>
              
              <p className="mb-6">
                <strong>Jesus, I trust in You!</strong>
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
                Today we begin the Divine Mercy Novena by praying for all mankind, especially poor sinners. 
                This novena was revealed to St. Faustina Kowalska by Jesus Himself, who asked her to pray it 
                for nine days before the Feast of Divine Mercy (the Sunday after Easter).
              </p>
              
              <p className="mb-4">
                Jesus told St. Faustina: "I desire that during these nine days you bring souls to the fountain of My mercy, 
                that they may draw therefrom strength and refreshment and whatever grace they need in the hardships of life, 
                and especially at the hour of death."
              </p>
              
              <p className="mb-4">
                On this first day, we pray for all mankind. Jesus wants us to bring all souls to His mercy, 
                regardless of their sins or their current state in life. His mercy is infinite and available to all.
              </p>
              
              <p>
                As we pray today, let us remember that we are all sinners in need of God's mercy. 
                Let us trust in Jesus' infinite goodness and ask Him to receive all mankind into His Most Compassionate Heart.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in Jesus</h3>
              <p className="text-gray-700 text-sm">
                Begin each prayer with complete trust in Jesus' mercy. Remember that His very nature 
                is to have compassion on us and to forgive us.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray for Others</h3>
              <p className="text-gray-700 text-sm">
                This novena is not just for your own intentions, but for the salvation of all souls. 
                Pray with a heart open to the needs of others.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Focus on Mercy</h3>
              <p className="text-gray-700 text-sm">
                Meditate on the infinite mercy of Jesus. Remember that He does not look upon our sins 
                but upon our trust in His goodness.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Say "Jesus, I Trust in You"</h3>
              <p className="text-gray-700 text-sm">
                End each day's prayer with the words "Jesus, I trust in You." This simple prayer 
                is the foundation of the Divine Mercy devotion.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Most Merciful Jesus, we thank You for Your infinite mercy and love. Help us to trust completely in You 
            and to bring all souls to the fountain of Your mercy. May all mankind come to know and experience 
            Your infinite compassion and forgiveness. Jesus, I trust in You! Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Divine Mercy Novena - Day 1: Faith" 
            url="/novenas/divine-mercy/day-1"
            excerpt="Join me in praying the Divine Mercy Novena - Day 1 focusing on Faith." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/divine-mercy"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/divine-mercy/day-2"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Day 2: The Souls of Priests and Religious →
          </Link>
        </div>
      </div>
    </div>
  )
} 