import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Grandchildren - Day 1: Healing and Strength',
  description: 'Pray the Novena for Grandchildren - Day 1 focusing on Healing and Strength. Join in praying the traditional novena to seek God\'s grace for grandchildren.',
  keywords: [
    'novena for grandchildren day 1',
    'grandchildren novena day 1',
    'grandchildren prayer day 1',
    'novena for grandchildren prayer healing and strength',
    'day 1 grandchildren novena',
    'healing and strength grandchildren prayer',
    'grandchildren novena healing and strength',
    'grandchildren prayer healing and strength'
  ],
  openGraph: {
    title: 'Novena for Grandchildren - Day 1: Healing and Strength',
    description: 'Pray the Novena for Grandchildren - Day 1 focusing on Healing and Strength. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/grandchildren/day-1',
  },
  twitter: {
    title: 'Novena for Grandchildren - Day 1: Healing and Strength',
    description: 'Pray the Novena for Grandchildren - Day 1 focusing on Healing and Strength. Join in praying the traditional novena.',
  }
}

export default function GrandchildrenNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Grandchildren – Day 1: Healing and Strength
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Grandchildren to seek God's grace and assistance for all our beloved grandchildren.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/grandchildren" className="hover:text-gray-700">Novena for Grandchildren</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-rose-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Healing and Strength</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena for Grandchildren, we pray for strength and healing for all grandchildren 
            who are sick or suffering in any way. We ask God to bring them comfort and restoration.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 1</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong><br/>
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                Dear Lord, we thank You and praise You for giving us the gift of grandchildren. We ask You to pour out Your grace upon them.
              </p>

              <p className="mb-6">
                There are many sources of suffering in our fallen world. The sufferings from sickness, injury, mental illness, and emotional ailments can be very great. We love our grandchildren very much, and we place them into Your loving care whenever they are suffering from such things.
              </p>

              <p className="mb-6">
                Please bless and assist our grandchildren in every circumstance, and we particularly ask today that You bring strength and healing to our grandchildren who are sick or suffering in any way.
              </p>

              <p className="mb-6">
                Help us to always do all that we can to bring Your love to our grandchildren's lives. Give us the grace to help our grandchildren to live saintly lives each day.
              </p>

              <p className="mb-6">
                <strong>And we especially ask in this novena for (mention your intentions here).</strong>
              </p>

              <p className="mb-6">
                <strong>Lord, hear our prayers!</strong>
              </p>

              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong><br/>
                <strong>Amen.</strong>
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
                Today we pray for all grandchildren who are sick or suffering in any way. This day reminds us of the 
                deep love we have for our grandchildren and our desire to see them healthy and happy.
              </p>

              <p className="mb-4">
                In our fallen world, suffering comes in many forms - physical illness, emotional pain, mental health 
                challenges, and various other difficulties. When our grandchildren are suffering, it can be heartbreaking 
                for us as grandparents. We want to protect them from all harm and see them thrive.
              </p>

              <p className="mb-4">
                However, we know that God loves our grandchildren even more than we do. He sees their suffering and 
                wants to bring them healing and strength. Through our prayers, we can place our grandchildren into 
                His loving care, trusting that He will provide the grace they need to overcome their difficulties.
              </p>

              <p className="mb-4">
                As we begin this novena, let us ask God to bring strength and healing to all grandchildren who are 
                suffering. Let us pray that they will find comfort in His love and that their faith will grow stronger 
                through their trials. Let us also pray for the grace to be instruments of God's love in their lives.
              </p>

              <p>
                Remember that God can bring good out of suffering. Through our prayers and our example, we can help 
                our grandchildren to understand that God is always with them, even in their darkest moments.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's providence and His ability to help you.
                Turn to Him with confidence in every need.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will not fail to help those who turn to Him with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to God.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His help and grace.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-rose-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, we thank You for hearing our prayers today. Help all grandchildren who are sick or suffering 
            to find strength and healing in Your love. Give us the grace to be instruments of Your love in their lives 
            and to help them grow in faith and holiness. May they always know that You are with them in every moment. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for Grandchildren - Day 1: Healing and Strength"
          text="Join me in praying the Novena for Grandchildren - Day 1 focusing on Healing and Strength."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/grandchildren"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/grandchildren/day-2"
            className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors"
          >
            Day 2: Submission to God's Will →
          </Link>
        </div>
      </div>
    </div>
  )
} 