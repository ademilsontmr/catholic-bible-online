import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Firefighters - Day 5: Grief',
  description: 'Day 5 of the Novena for Firefighters focusing on grief. Pray for firefighters who are struggling with grief after encountering victims who perished in fires.',
  keywords: [
    'novena for firefighters day 5',
    'firefighter grief prayer',
    'firefighter prayer day 5',
    'firefighter protection novena day 5',
    'firefighter grief blessing prayer'
  ],
  openGraph: {
    title: 'Novena for Firefighters - Day 5: Grief',
    description: 'Day 5 of the Novena for Firefighters focusing on grief for protection and guidance.',
    url: 'https://catholicbibleonline.com/novenas/firefighters/day-5',
  },
  twitter: {
    title: 'Novena for Firefighters - Day 5: Grief',
    description: 'Day 5 of the Novena for Firefighters focusing on grief for protection and guidance.',
  }
}

export default function NovenaForFirefightersDay5Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Firefighters – Day 5: Grief
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for firefighters who are struggling with grief after encountering victims who perished in fires.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/firefighters" className="hover:text-gray-700">Firefighters</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 5</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-orange-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Grief</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we pray for firefighters who are struggling with grief after encountering victims who perished in fires. We ask God to help all firefighters who are struggling with grief and to provide them with comfort and healing.
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
                <strong>Opening Prayer:</strong><br/>
                Dear Lord, we thank You for the many ways You bless and protect our world. We ask You today to take care of all firefighters.
              </p>
              <p className="mb-6">
                <strong>Prayer for Grief:</strong><br/>
                The work of fighting fires can be difficult in many ways. Firefighters must put forth a lot of physical effort, but their work can also be emotionally exhausting. Firefighters must often encounter the dead who have perished in fires, and at times firefighters must even grapple with their own inability to save victims.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for firefighters who are struggling with grief after encountering victims who perished in fires. We ask God to help all firefighters who are struggling with grief and to provide them with comfort and healing.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "Blessed are those who mourn, for they will be comforted." (Matthew 5:4)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Please pour out Your grace and assistance on all firefighters, and we particularly ask today that You help all firefighters who are struggling with grief. Help us to always turn to You when we are suffering in our lives. Give us the grace to grow in friendship with You even in the midst of great difficulties. And we especially ask in this novena for (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for firefighters who are struggling with grief. Firefighters often encounter death in their work - people who have perished in fires, sometimes including children. They may also experience survivor guilt when they are unable to save everyone. This grief can be overwhelming and can lead to depression, post-traumatic stress disorder, and other mental health challenges. Jesus' words in Matthew 5:4 offer hope to grieving firefighters. He promises that those who mourn will be comforted. This comfort comes from God's love and from the support of others. Firefighters need to know that it is okay to grieve and that God is ready to comfort them. Let us pray that grieving firefighters will find comfort in God and that they will receive the support they need to heal from their emotional wounds.</p>
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
            who are dealing with grief. May this novena help us grow in gratitude and compassion 
            for those who risk their lives to protect others. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Firefighters - Day 5: Grief" 
            url="/novenas/firefighters/day-5"
            excerpt="Join me in praying the Novena for Firefighters - Day 5 focusing on grief for protection and guidance." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/firefighters/day-4"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 4: Protection
          </Link>
          
          <Link
            href="/novenas/firefighters/day-6"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
          >
            Day 6: Perseverance →
          </Link>
        </div>
      </div>
      
    </div>
  )
}