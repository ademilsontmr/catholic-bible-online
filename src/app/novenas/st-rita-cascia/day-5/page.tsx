import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Rita of Cascia Novena - Day 5: Peace',
  description: 'Day 5 of the St. Rita of Cascia Novena. Pray for peace in families and reconciliation between enemies.',
  keywords: [
    'st rita novena day 5',
    'st rita peace prayer',
    'saint rita day 5',
    'st rita of cascia day 5',
    'st rita novena peace'
  ]
}

export default function StRitaCasciaDay5Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Rita of Cascia Novena – Day 5: Peace
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
            <span className="text-gray-800">Day 5</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Peace</h2>
          <p className="text-gray-700 leading-relaxed">
            On this fifth day of the St. Rita of Cascia Novena, we pray for peace in families and reconciliation between enemies. 
            St. Rita's work for peace in her community teaches us to be peacemakers and to bring harmony where there is conflict.
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
                <strong>O glorious St. Rita,</strong> who didst work for peace and reconciliation in thy community, 
                obtain for me the grace to be a peacemaker in my family and among those around me. 
                Help me to bring peace where there is conflict and to reconcile those who are divided.
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
                Today we pray for peace in families and reconciliation between enemies. May we learn from St. Rita's example 
                to be peacemakers and to work for harmony in our relationships. Help us to bring the peace of Christ 
                to all those around us.
              </p>
              
              <p className="mb-6">
                <strong>O St. Rita,</strong> who didst bring peace to divided families and communities, 
                teach us to be instruments of God's peace in the world.
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
              St. Rita was known for her ability to bring peace to divided families and communities. 
              She worked tirelessly to reconcile enemies and to restore harmony where there was conflict. 
              Her life shows us that peace is not just the absence of conflict, but the presence of God's love.
            </p>
            
            <p className="mb-4">
              Today, let us ask St. Rita to help us be peacemakers. Think about the relationships in your life 
              that may need healing or reconciliation. Remember that peace often begins with forgiveness and understanding. 
              Sometimes the greatest peace we can bring is the peace we find within ourselves through prayer and trust in God.
            </p>
            
            <p>
              St. Rita teaches us that true peace comes from God and that we are called to be His instruments 
              in bringing that peace to others. "Blessed are the peacemakers, for they shall be called children of God."
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
            O glorious St. Rita, help us to be peacemakers in our families and communities. 
            Teach us to bring the peace of Christ to all those around us and to work for reconciliation 
            where there is division. May we learn from your example to be instruments of God's peace in the world. 
            We ask this through Christ our Lord. Amen.
          </p>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/novenas/st-rita-cascia/day-4"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 4: Conversion
          </Link>
          
          <Link
            href="/novenas/st-rita-cascia/day-6"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Day 6: Impossible Causes →
          </Link>
        </div>
      </div>
    </div>
  )
} 