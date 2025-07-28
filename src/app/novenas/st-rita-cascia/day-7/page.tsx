import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Rita of Cascia Novena - Day 7: Suffering',
  description: 'Day 7 of the St. Rita of Cascia Novena. Pray for the grace to bear suffering with love and offer it for the salvation of souls.',
  keywords: [
    'st rita novena day 7',
    'st rita suffering prayer',
    'saint rita day 7',
    'st rita of cascia day 7',
    'st rita novena suffering'
  ]
}

export default function StRitaCasciaDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Rita of Cascia Novena – Day 7: Suffering
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
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Suffering</h2>
          <p className="text-gray-700 leading-relaxed">
            On this seventh day of the St. Rita of Cascia Novena, we pray for the grace to bear suffering with love and offer it for the salvation of souls. 
            St. Rita's bearing of the stigmata teaches us to unite our sufferings with those of Jesus Christ.
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
                <strong>O glorious St. Rita,</strong> who didst bear the wounds of the crown of thorns and the stigmata of our Lord Jesus Christ, 
                obtain for me the grace to bear all my sufferings with love and patience, and to offer them for the salvation of souls. 
                Help me to unite my sufferings with those of Jesus Christ and to find meaning and purpose in them.
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
                Today we pray for the grace to bear suffering with love and to offer it for the salvation of souls. 
                May we learn from St. Rita's example to unite our sufferings with those of Jesus Christ 
                and to find meaning and purpose in our trials.
              </p>
              
              <p className="mb-6">
                <strong>O St. Rita,</strong> who didst bear the stigmata with such love and patience, 
                teach us to offer our sufferings for the salvation of souls and to find joy in our crosses.
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
              St. Rita's bearing of the stigmata - the wounds of Christ - shows us how to suffer with love and purpose. 
              She did not seek suffering for its own sake, but accepted it as a way to unite herself more closely with Jesus 
              and to offer her pain for the salvation of souls.
            </p>
            
            <p className="mb-4">
              Today, let us ask St. Rita to help us understand the redemptive value of suffering. Think about the sufferings 
              in your life - physical, emotional, or spiritual. Instead of resenting them, ask God to help you offer them 
              for the salvation of souls and to unite them with the sufferings of Jesus Christ.
            </p>
            
            <p>
              St. Rita teaches us that suffering, when offered with love, can become a powerful prayer and a means of grace 
              for ourselves and others. "In my flesh I complete what is lacking in Christ's afflictions" (Colossians 1:24).
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
            O glorious St. Rita, help us to bear our sufferings with love and patience. 
            Teach us to unite our trials with the sufferings of Jesus Christ and to offer them for the salvation of souls. 
            May we learn from your example to find meaning and purpose in our crosses, 
            knowing that God can use even our sufferings to bring about good. 
            We ask this through Christ our Lord. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="St. Rita of Cascia Novena - Day 7: Intercession"
          text="Join me in praying the St. Rita of Cascia Novena - Day 7 focusing on Intercession."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/novenas/st-rita-cascia/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Impossible Causes
          </Link>
          
          <Link
            href="/novenas/st-rita-cascia/day-8"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Day 8: Miracles →
          </Link>
        </div>
      </div>
    </div>
  )
} 