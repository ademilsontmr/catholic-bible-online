import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Firefighters - Day 1: New Firefighters',
  description: 'Day 1 of the Novena for Firefighters focusing on new firefighters. Pray for new firefighters who are beginning their demanding work.',
  keywords: [
    'novena for firefighters day 1',
    'new firefighters prayer',
    'firefighter prayer day 1',
    'firefighter protection novena day 1',
    'new firefighter blessing prayer'
  ],
  openGraph: {
    title: 'Novena for Firefighters - Day 1: New Firefighters',
    description: 'Day 1 of the Novena for Firefighters focusing on new firefighters for protection and guidance.',
    url: 'https://catholicbibleonline.com/novenas/firefighters/day-1',
  },
  twitter: {
    title: 'Novena for Firefighters - Day 1: New Firefighters',
    description: 'Day 1 of the Novena for Firefighters focusing on new firefighters for protection and guidance.',
  }
}

export default function NovenaForFirefightersDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Firefighters – Day 1: New Firefighters
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for new firefighters who are beginning their demanding work and need God's grace and assistance.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/firefighters" className="hover:text-gray-700">Firefighters</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-orange-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: New Firefighters</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena for Firefighters, we pray for new firefighters who are beginning their demanding work. 
            We ask God to bless all new firefighters and provide them with His grace and assistance to carry out their challenging duties.
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
                <strong>Opening Prayer:</strong><br/>
                Dear Lord, we thank You for the many ways You bless and protect our world. We ask You today to take care of all firefighters.
              </p>
              <p className="mb-6">
                <strong>Prayer for New Firefighters:</strong><br/>
                Working as a firefighter is not an easy job. Firefighters face many dangers and difficulties as they work to put out fires. 
                Sometimes their lives are even in danger as they fight fires. Those who are just beginning work as firefighters are in need 
                of Your grace and assistance to carry out their demanding work.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for new firefighters who are beginning their demanding work and need God's grace and assistance. 
                We ask God to bless all new firefighters and provide them with the strength, courage, and wisdom they need for their work.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go." (Joshua 1:9)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Please pour out Your grace and assistance on all firefighters, and we particularly ask today that You bless all new firefighters! 
                Help us to always rely on You for all that we need in our lives. Give us the grace to strive to grow to a deeper friendship 
                with You each day of our lives. And we especially ask in this novena for (mention your intentions here). Lord, hear our prayers!
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
                Today we pray for new firefighters who are beginning their demanding work. Being a new firefighter is both exciting and challenging. 
                New recruits must learn not only the technical skills of firefighting but also develop the mental and emotional resilience needed for this work.
              </p>
              <p className="mb-4">
                Joshua 1:9 reminds us that God is with us wherever we go. This promise is especially important for new firefighters 
                who are entering a profession that involves danger and uncertainty. They need to know that God is with them, 
                providing strength and courage for their work.
              </p>
              <p className="mb-4">
                New firefighters face many challenges - learning complex procedures, building physical endurance, 
                developing teamwork skills, and coping with the emotional demands of emergency situations. 
                They need our prayers for wisdom, strength, and protection.
              </p>
              <p className="mb-4">
                As we begin this novena, let us remember that every experienced firefighter was once a new recruit. 
                They all started with the same hopes, fears, and determination to serve others. 
                Our prayers can help new firefighters find the grace and strength they need to grow into their calling.
              </p>
              <p>
                Let us pray that new firefighters will be blessed with good mentors, supportive colleagues, 
                and the grace to develop the skills and character needed for their important work.
              </p>
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
            Help us to pray faithfully for their protection and strength, especially for new firefighters 
            who are beginning their demanding work. May this novena help us grow in gratitude and compassion 
            for those who risk their lives to protect others. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton
          title="Novena for Firefighters - Day 1: New Firefighters"
          text="Join me in praying the Novena for Firefighters - Day 1 focusing on new firefighters for protection and guidance."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/firefighters"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          <Link
            href="/novenas/firefighters/day-2"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
          >
            Day 2: Exhaustion →
          </Link>
        </div>
      </div>
      
      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Firefighters" />
    </div>
  )
} 