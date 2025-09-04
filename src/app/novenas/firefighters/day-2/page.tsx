import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Firefighters - Day 2: Exhaustion',
  description: 'Day 2 of the Novena for Firefighters focusing on exhaustion. Pray for firefighters who are struggling with exhaustion from long hours of physical labor and emotional toll.',
  keywords: [
    'novena for firefighters day 2',
    'firefighter exhaustion prayer',
    'firefighter prayer day 2',
    'firefighter protection novena day 2',
    'firefighter exhaustion blessing prayer'
  ],
  openGraph: {
    title: 'Novena for Firefighters - Day 2: Exhaustion',
    description: 'Day 2 of the Novena for Firefighters focusing on exhaustion for protection and guidance.',
    url: 'https://catholicbibleonline.com/novenas/firefighters/day-2',
  },
  twitter: {
    title: 'Novena for Firefighters - Day 2: Exhaustion',
    description: 'Day 2 of the Novena for Firefighters focusing on exhaustion for protection and guidance.',
  }
}

export default function NovenaForFirefightersDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Firefighters – Day 2: Exhaustion
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for firefighters who are struggling with exhaustion from long hours of physical labor and emotional toll.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/firefighters" className="hover:text-gray-700">Firefighters</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-orange-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Exhaustion</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we pray for firefighters who are struggling with exhaustion from long hours of physical labor and emotional toll. We ask God to help all firefighters who are struggling with exhaustion and to provide them with strength and renewal.
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
                <strong>Opening Prayer:</strong><br/>
                Dear Lord, we thank You for the many ways You bless and protect our world. We ask You today to take care of all firefighters.
              </p>
              <p className="mb-6">
                <strong>Prayer for Exhaustion:</strong><br/>
                The work that firefighters do to put out fires and protect people from injury can be very demanding at times. Many firefighters might struggle with exhaustion after long hours of physical labor and the emotional toll that can occur. You can help all firefighters who feel exhausted in their work.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for firefighters who are struggling with exhaustion from long hours of physical labor and emotional toll. We ask God to help all firefighters who are struggling with exhaustion and to provide them with strength and renewal.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "Come to me, all you who are weary and burdened, and I will give you rest." (Matthew 11:28)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Please pour out Your grace and assistance on all firefighters, and we particularly ask today that You help all firefighters who are struggling with exhaustion. Help us to always offer all of the sufferings we endure in union with Yours. Give us the grace to grow in holiness in every circumstance we face in our lives, even in the midst of suffering. And we especially ask in this novena for (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for firefighters who are struggling with exhaustion. The work of firefighting is physically demanding and emotionally draining. Firefighters often work long shifts, face dangerous situations, and deal with traumatic experiences that can leave them physically and emotionally exhausted. Jesus' invitation in Matthew 11:28 is especially relevant for exhausted firefighters. He calls all who are weary and burdened to come to Him for rest. This rest is not just physical rest, but spiritual rest - the peace that comes from knowing that God is with us and will give us the strength we need. Firefighters need this spiritual rest as much as they need physical rest. They need to know that God understands their exhaustion and is ready to help them. Let us pray that exhausted firefighters will turn to God for the rest and renewal they need, and that they will find the strength to continue their important work.</p>
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
            who are dealing with exhaustion. May this novena help us grow in gratitude and compassion 
            for those who risk their lives to protect others. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Firefighters - Day 2: Exhaustion" 
            url="/novenas/firefighters/day-2"
            excerpt="Join me in praying the Novena for Firefighters - Day 2 focusing on exhaustion for protection and guidance." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/firefighters/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: New Firefighters
          </Link>
          
          <Link
            href="/novenas/firefighters/day-3"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
          >
            Day 3: Forest Fires →
          </Link>
        </div>
      </div>
      
    </div>
  )
}