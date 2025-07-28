import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Rita of Cascia Novena - Day 2: Forgiveness',
  description: 'Day 2 of the St. Rita of Cascia Novena. Pray for the grace to forgive others, as St. Rita forgave those who harmed her family.',
  keywords: [
    'st rita novena day 2',
    'st rita forgiveness prayer',
    'saint rita day 2',
    'st rita of cascia day 2',
    'st rita novena forgiveness'
  ]
}

export default function StRitaCasciaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Rita of Cascia Novena – Day 2: Forgiveness
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
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Forgiveness</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray for the grace to forgive others, as St. Rita forgave those who harmed her family and prayed for their conversion.
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
                <strong>O glorious St. Rita,</strong> who didst forgive thy husband's murderers and pray for their conversion, 
                obtain for me the grace to forgive all those who have offended me, and to pray for their salvation. 
                Help me to overcome all feelings of hatred and revenge, and to love my enemies as Jesus commanded.
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
                Today we pray for the gift of forgiveness. May we learn from St. Rita's example to forgive those who have hurt us 
                and to pray for their conversion. Help us to overcome bitterness and to show the same mercy 
                that God has shown to us.
              </p>
              
              <p className="mb-6">
                <strong>O St. Rita,</strong> who didst show such great mercy to thy enemies, teach us to forgive 
                as we have been forgiven, and to pray for those who persecute us.
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
              St. Rita's forgiveness of her husband's murderers is one of the most remarkable examples of Christian forgiveness. 
              Not only did she forgive them, but she also prayed for their conversion and salvation. 
              This shows us the true meaning of forgiveness - it is not just about letting go of anger, 
              but about wishing the good of those who have harmed us.
            </p>
            
            <p className="mb-4">
              Today, let us ask St. Rita to help us grow in forgiveness. Think about the people in your life 
              whom you need to forgive, or who need to forgive you. Remember that forgiveness is a gift we give to ourselves 
              as much as to others - it frees us from the burden of hatred and bitterness.
            </p>
            
            <p>
              St. Rita teaches us that forgiveness is possible, even in the most difficult circumstances. 
              When we forgive, we imitate Christ on the cross, who said, "Father, forgive them, for they know not what they do."
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
            O glorious St. Rita, help us to grow in forgiveness and to show mercy to those who have hurt us. 
            Teach us to pray for our enemies and to wish them well, just as you did. 
            May we learn from your example to forgive as we have been forgiven by God. 
            We ask this through Christ our Lord. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="St. Rita of Cascia Novena - Day 2: Hope"
          text="Join me in praying the St. Rita of Cascia Novena - Day 2 focusing on Hope."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/novenas/st-rita-cascia/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Patience
          </Link>
          
          <Link
            href="/novenas/st-rita-cascia/day-3"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Day 3: Perseverance →
          </Link>
        </div>
      </div>
    </div>
  )
} 