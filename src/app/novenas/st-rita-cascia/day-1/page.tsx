import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Rita of Cascia Novena - Day 1: Patience',
  description: 'Day 1 of the St. Rita of Cascia Novena. Pray for patience in suffering and difficulties, following St. Rita\'s example.',
  keywords: [
    'st rita novena day 1',
    'st rita patience prayer',
    'saint rita day 1',
    'st rita of cascia day 1',
    'st rita novena patience'
  ]
}

export default function StRitaCasciaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Rita of Cascia Novena – Day 1: Patience
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the St. Rita of Cascia Novena to seek help for impossible causes.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/st-rita-cascia" className="hover:text-gray-700">St. Rita of Cascia Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Patience</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the St. Rita of Cascia Novena, we pray for patience in suffering and difficulties, 
            following St. Rita's example of enduring trials with love and trust in God.
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
                <strong>O glorious St. Rita,</strong> who didst bear the wounds of the crown of thorns and the stigmata of our Lord Jesus Christ, 
                obtain for me the grace to bear with patience all the trials and sufferings of this life, 
                and to accept them as a means of purification and sanctification.
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
                Today we pray for the gift of patience. May we learn from St. Rita's example to endure trials 
                with love and trust in God's providence. Help us to see our sufferings as opportunities 
                to grow closer to Jesus and to offer them for the salvation of souls.
              </p>
              
              <p className="mb-6">
                <strong>O St. Rita,</strong> who didst suffer so much in thy life, teach us to bear our crosses 
                with patience and love, knowing that God never abandons those who trust in Him.
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
              St. Rita's life was marked by extraordinary patience in the face of great suffering. 
              She endured a difficult marriage, the loss of her husband and sons, and many other trials. 
              Yet through it all, she never lost her trust in God or her love for others.
            </p>
            
            <p className="mb-4">
              Today, let us ask St. Rita to help us grow in patience. When we face difficulties, 
              let us remember that God is with us and that our sufferings can be offered up for the good of others. 
              St. Rita shows us that patience is not passive resignation, but active trust in God's love and providence.
            </p>
            
            <p>
              Think about the areas in your life where you need more patience. Ask St. Rita to intercede for you, 
              that you may bear your trials with the same love and trust that she showed throughout her life.
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
            O glorious St. Rita, help us to grow in patience and to trust in God's providence. 
            Teach us to bear our sufferings with love and to offer them for the salvation of souls. 
            May we learn from your example to never lose hope, even in the most difficult circumstances. 
            We ask this through Christ our Lord. Amen.
          </p>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/novenas/st-rita-cascia"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link
            href="/novenas/st-rita-cascia/day-2"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Day 2: Forgiveness →
          </Link>
        </div>
      </div>
    </div>
  )
} 