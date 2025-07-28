import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Rita of Cascia Novena - Day 6: Impossible Causes',
  description: 'Day 6 of the St. Rita of Cascia Novena. Pray for impossible causes and situations that seem beyond hope.',
  keywords: [
    'st rita novena day 6',
    'st rita impossible causes prayer',
    'saint rita day 6',
    'st rita of cascia day 6',
    'st rita novena impossible causes'
  ]
}

export default function StRitaCasciaDay6Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Rita of Cascia Novena – Day 6: Impossible Causes
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the St. Rita of Cascia Novena to seek her powerful intercession.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/st-rita-cascia" className="hover:text-gray-700">St. Rita of Cascia Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 6</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Impossible Causes</h2>
          <p className="text-gray-700 leading-relaxed">
            On this sixth day of the St. Rita of Cascia Novena, we pray for impossible causes and situations that seem beyond hope. 
            St. Rita, known as the "Saint of the Impossible," teaches us to trust in God's power to work miracles in our lives.
          </p>
        </section>

        {/* Main Prayer */}
        <section className="mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>
              
              <p className="mb-6">
                <strong>O glorious St. Rita,</strong> patron saint of impossible causes, 
                obtain for me the grace to trust in God's power to work miracles in my life. 
                Help me to bring before thee all those situations that seem hopeless and impossible, 
                knowing that with God, nothing is impossible.
              </p>
              
              <p className="mb-6">
                <strong>Our Father...</strong>
              </p>
              
              <p className="mb-6">
                <strong>Hail Mary...</strong>
              </p>
              
              <p className="mb-6">
                <strong>Glory be to the Father...</strong>
              </p>
              
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for impossible causes and situations that seem beyond hope. May we learn from St. Rita's example 
                to trust in God's power to work miracles. Help us to bring all our impossible situations to God 
                through St. Rita's intercession, knowing that He can do all things.
              </p>
              
              <p className="mb-6">
                <strong>O St. Rita,</strong> who art known as the "Saint of the Impossible," 
                intercede for us in all our desperate situations and impossible causes.
              </p>
              
              <p className="mb-6">
                <strong>Pray for us, O glorious St. Rita, that we may be made worthy of the promises of Christ.</strong>
              </p>
              
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Today's Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              St. Rita is known as the "Saint of the Impossible" because of her powerful intercession in seemingly hopeless situations. 
              Throughout her life, she faced many impossible circumstances - a difficult marriage, the loss of her family, 
              and her desire to enter the convent. Yet through prayer and trust in God, she overcame all these obstacles.
            </p>
            
            <p className="mb-4">
              Today, let us bring all our impossible causes to St. Rita. Think about the situations in your life 
              that seem hopeless or beyond resolution. Remember that with God, nothing is impossible. 
              St. Rita teaches us that when we trust in God and pray with faith, He can work miracles in our lives.
            </p>
            
            <p>
              St. Rita's life shows us that God often works through our sufferings and difficulties to bring about 
              His perfect plan. What seems impossible to us is possible with God.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-black mb-3">Pray with Confidence</h3>
              <p className="text-gray-700 text-sm">
                Trust in St. Rita's powerful intercession. She is known as the "Saint of the Impossible" 
                and has helped countless people in desperate situations.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-black mb-3">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and impossible causes to St. Rita. 
                She wants to help you with the particular difficulties you face.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-black mb-3">Imitate Her Virtues</h3>
              <p className="text-gray-700 text-sm">
                Ask St. Rita to help you grow in patience, forgiveness, and trust in God. 
                Try to imitate her virtues in your daily life.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-black mb-3">Trust in God's Will</h3>
              <p className="text-gray-700 text-sm">
                Remember that God knows what is best for you. Trust that He will answer your prayers 
                in the way that is most beneficial for your soul.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O glorious St. Rita, patron saint of impossible causes, help us to trust in God's power to work miracles in our lives. 
            Intercede for us in all our desperate situations and impossible causes. 
            Teach us to believe that with God, nothing is impossible, and to trust in His perfect plan for our lives. 
            We ask this through Christ our Lord. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="St. Rita of Cascia Novena - Day 6: Suffering"
          text="Join me in praying the St. Rita of Cascia Novena - Day 6 focusing on Suffering."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/novenas/st-rita-cascia/day-5"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 5: Peace
          </Link>
          
          <Link
            href="/novenas/st-rita-cascia/day-7"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Day 7: Suffering →
          </Link>
        </div>
      </div>
    </div>
  )
} 