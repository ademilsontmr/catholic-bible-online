import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Firefighters - Day 6: Perseverance',
  description: 'Day 6 of the Novena for Firefighters focusing on perseverance. Pray for firefighters to grow in the virtue of perseverance amidst the many difficulties they face.',
  keywords: [
    'novena for firefighters day 6',
    'firefighter perseverance prayer',
    'firefighter prayer day 6',
    'firefighter protection novena day 6',
    'firefighter perseverance blessing prayer'
  ],
  openGraph: {
    title: 'Novena for Firefighters - Day 6: Perseverance',
    description: 'Day 6 of the Novena for Firefighters focusing on perseverance for protection and guidance.',
    url: 'https://catholicbibleonline.com/novenas/firefighters/day-6',
  },
  twitter: {
    title: 'Novena for Firefighters - Day 6: Perseverance',
    description: 'Day 6 of the Novena for Firefighters focusing on perseverance for protection and guidance.',
  }
}

export default function NovenaForFirefightersDay6Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Firefighters – Day 6: Perseverance
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for firefighters to grow in the virtue of perseverance amidst the many difficulties they face.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/firefighters" className="hover:text-gray-700">Firefighters</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 6</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-orange-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Perseverance</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we pray for firefighters to grow in the virtue of perseverance amidst the many difficulties they face. We ask God to help all firefighters to grow in the virtue of perseverance and to continue their important work.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 6</h2>
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
                <strong>Prayer for Perseverance:</strong><br/>
                Those who work as firefighters face many difficulties over the course of their professional lives. From the time they begin training to be firefighters, they endure suffering in many ways. Fighting fires can be both physically demanding and emotionally taxing. Firefighters are in great need of perseverance to continue their work amidst the many difficulties.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for firefighters to grow in the virtue of perseverance amidst the many difficulties they face. We ask God to help all firefighters to grow in the virtue of perseverance and to continue their important work.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "Blessed is the one who perseveres under trial, because having stood the test, that person will receive the crown of life that the Lord has promised to those who love him." (James 1:12)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Please pour out Your grace and assistance on all firefighters, and we particularly ask today that You help all firefighters to grow in the virtue of perseverance. Help us to grow in all virtues we need for holiness each day. Give us the grace to make our relationship with You our top priority in life. And we especially ask in this novena for (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for firefighters to grow in the virtue of perseverance. Firefighting is a career that requires tremendous perseverance. From the rigorous training to the daily challenges of the job, firefighters must persevere through physical exhaustion, emotional trauma, and the constant risk of injury or death. James 1:12 reminds us that those who persevere under trial will receive the crown of life. This promise is especially meaningful for firefighters who face trials every day in their work. Their perseverance is not just about enduring difficulties, but about continuing to serve others despite the challenges. Let us pray that firefighters will find the strength to persevere and that they will be rewarded for their faithful service.</p>
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
            who are dealing with perseverance. May this novena help us grow in gratitude and compassion 
            for those who risk their lives to protect others. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton
          title="Novena for Firefighters - Day 6: Perseverance"
          text="Join me in praying the Novena for Firefighters - Day 6 focusing on perseverance for protection and guidance."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/firefighters/day-5"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 5: Grief
          </Link>
          
          <Link
            href="/novenas/firefighters/day-7"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
          >
            Day 7: Trust →
          </Link>
        </div>
      </div>
      
    </div>
  )
}