import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Rita of Cascia Novena - Day 3: Perseverance',
  description: 'Day 3 of the St. Rita of Cascia Novena. Pray for perseverance in prayer and in seeking God\'s will.',
  keywords: [
    'st rita novena day 3',
    'st rita perseverance prayer',
    'saint rita day 3',
    'st rita of cascia day 3',
    'st rita novena perseverance'
  ]
}

export default function StRitaCasciaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Rita of Cascia Novena – Day 3: Perseverance
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
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Perseverance</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day of the St. Rita of Cascia Novena, we pray for perseverance in prayer and in seeking God's will. 
            St. Rita's determination to follow her vocation teaches us to never give up, even when the way seems difficult.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 3</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>
              
              <p className="mb-6">
                <strong>O glorious St. Rita,</strong> who didst persevere in prayer and in seeking to enter the convent, 
                obtain for me the grace to persevere in my prayers and in seeking God's will for my life. 
                Help me to never give up, even when the way seems difficult or impossible.
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
                Today we pray for the gift of perseverance. May we learn from St. Rita's example to never give up 
                in our prayers and in seeking God's will. Help us to remain faithful even when we face obstacles 
                and difficulties in our spiritual journey.
              </p>
              
              <p className="mb-6">
                <strong>O St. Rita,</strong> who didst show such great determination in following thy vocation, 
                teach us to persevere in our prayers and to trust that God will answer them in His own time.
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
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection for Today</h2>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              St. Rita's perseverance in seeking to enter the convent is a powerful example of determination in prayer. 
              Despite being initially refused entry, she continued to pray and trust in God's will. 
              Her perseverance was eventually rewarded when she was miraculously transported into the convent.
            </p>
            
            <p className="mb-4">
              Today, let us ask St. Rita to help us grow in perseverance. Think about the prayers or intentions 
              that you may have given up on because they seemed impossible. Remember that God's timing is not our timing, 
              and that He often asks us to persevere in prayer to strengthen our faith and trust in Him.
            </p>
            
            <p>
              St. Rita teaches us that perseverance in prayer is not about getting what we want, 
              but about growing closer to God and learning to trust in His perfect plan for our lives.
            </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
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
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            O glorious St. Rita, help us to persevere in our prayers and to trust in God's timing. 
            Teach us to never give up, even when the way seems difficult or impossible. 
            May we learn from your example to remain faithful to God's will, 
            knowing that He will answer our prayers in His own perfect time. 
            We ask this through Christ our Lord. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="St. Rita of Cascia Novena - Day 3: Love" 
            url="/novenas/st-rita-cascia/day-3"
            excerpt="Join me in praying the St. Rita of Cascia Novena - Day 3 focusing on Love." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/novenas/st-rita-cascia/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Forgiveness
          </Link>
          
          <Link
            href="/novenas/st-rita-cascia/day-4"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Day 4: Conversion →
          </Link>
        </div>
      </div>
    </div>
  )
} 