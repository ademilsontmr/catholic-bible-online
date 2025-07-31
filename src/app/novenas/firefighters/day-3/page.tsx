import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Firefighters - Day 3: Forest Fires',
  description: 'Day 3 of the Novena for Firefighters focusing on forest fires. Pray for firefighters who work to fight forest fires and face the great destruction these fires can bring.',
  keywords: [
    'novena for firefighters day 3',
    'firefighter forest fires prayer',
    'firefighter prayer day 3',
    'firefighter protection novena day 3',
    'firefighter forest fires blessing prayer'
  ],
  openGraph: {
    title: 'Novena for Firefighters - Day 3: Forest Fires',
    description: 'Day 3 of the Novena for Firefighters focusing on forest fires for protection and guidance.',
    url: 'https://catholicbibleonline.com/novenas/firefighters/day-3',
  },
  twitter: {
    title: 'Novena for Firefighters - Day 3: Forest Fires',
    description: 'Day 3 of the Novena for Firefighters focusing on forest fires for protection and guidance.',
  }
}

export default function NovenaForFirefightersDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Firefighters – Day 3: Forest Fires
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for firefighters who work to fight forest fires and face the great destruction these fires can bring.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/firefighters" className="hover:text-gray-700">Firefighters</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-orange-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Forest Fires</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we pray for firefighters who work to fight forest fires and face the great destruction these fires can bring. We ask God to help all firefighters who work to fight forest fires and to protect them from the dangers they face.
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
                <strong>Opening Prayer:</strong><br/>
                Dear Lord, we thank You for the many ways You bless and protect our world. We ask You today to take care of all firefighters.
              </p>
              <p className="mb-6">
                <strong>Prayer for Forest Fires:</strong><br/>
                There are many occasions when we are in need of help from firefighters. The work that firefighters do for our world is a great gift. Sometimes fires can even rage in forests and can bring great destruction. The work of fighting forest fires is very important, and it can be very difficult as well.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for firefighters who work to fight forest fires and face the great destruction these fires can bring. We ask God to help all firefighters who work to fight forest fires and to protect them from the dangers they face.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "God is our refuge and strength, an ever-present help in trouble. Therefore we will not fear, though the earth give way and the mountains fall into the heart of the sea." (Psalm 46:1-2)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Please pour out Your grace and assistance on all firefighters, and we particularly ask today that You help all firefighters who work to fight forest fires. Help us to offer all work that we do to You for our sanctification and Your glory. Give us the grace to strive to grow in virtue at all times. And we especially ask in this novena for (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for firefighters who work to fight forest fires. Forest fires are among the most challenging and dangerous types of fires to fight. They can spread rapidly, change direction unexpectedly, and create their own weather conditions. Firefighters fighting forest fires often work in remote areas, face extreme heat and smoke, and may be away from their families for extended periods. Psalm 46:1-2 reminds us that God is our refuge and strength, even when the earth seems to be giving way. For firefighters fighting forest fires, this promise takes on literal meaning as they face the destructive power of nature. They need to know that God is their refuge and strength, providing them with the courage and protection they need. Let us pray that forest fire fighters will find strength in God and that they will be protected from the many dangers they face.</p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the service of firefighters and their dedication to protecting others. 
                Express gratitude for their courage and sacrifice.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Pray for specific needs of firefighters - protection, strength, healing from trauma, 
                and grace to continue their difficult work.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. 
                God will not fail to bless those who pray for others with love.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Compassionate</h3>
              <p className="text-gray-700 text-sm">
                Show compassion for the difficulties firefighters face. 
                Pray with empathy for their physical and emotional challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-orange-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, we thank You for the gift of firefighters and for calling them to serve others. 
            Help us to pray faithfully for their protection and strength, especially for firefighters 
            who are dealing with forest fires. May this novena help us grow in gratitude and compassion 
            for those who risk their lives to protect others. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton
          title="Novena for Firefighters - Day 3: Forest Fires"
          text="Join me in praying the Novena for Firefighters - Day 3 focusing on forest fires for protection and guidance."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/firefighters/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Exhaustion
          </Link>
          
          <Link
            href="/novenas/firefighters/day-4"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
          >
            Day 4: Protection →
          </Link>
        </div>
      </div>
      
    </div>
  )
}