import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Family Difficulties - Day 2: Grief and Loss',
  description: 'Day 2 of the Novena for Family Difficulties focusing on grief and loss. Pray for families dealing with grief over the loss of a loved one and other heavy trials.',
  keywords: [
    'novena for family difficulties day 2',
    'family grief and loss prayer',
    'family difficulties prayer day 2',
    'family problems novena day 2',
    'family grief and loss blessing prayer'
  ],
  openGraph: {
    title: 'Novena for Family Difficulties - Day 2: Grief and Loss',
    description: 'Day 2 of the Novena for Family Difficulties focusing on grief and loss for God\'s blessing.',
    url: 'https://catholicbibleonline.com/novenas/family-difficulties/day-2',
  },
  twitter: {
    title: 'Novena for Family Difficulties - Day 2: Grief and Loss',
    description: 'Day 2 of the Novena for Family Difficulties focusing on grief and loss for God\'s blessing.',
  }
}

export default function NovenaForFamilyDifficultiesDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Family Difficulties – Day 2: Grief and Loss
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for families dealing with grief over the loss of a loved one and other heavy trials.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/family-difficulties" className="hover:text-gray-700">Family Difficulties</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today\'s Focus: Grief and Loss</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we pray for families dealing with grief over the loss of a loved one and other heavy trials. We ask God to help all families struggling with grief over the loss of a loved one.
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
                Dear Lord, we thank You and praise You for the many ways You have blessed us in our lives. We humbly ask You to pour out Your grace and assistance on all families struggling with difficulties.
              </p>
              <p className="mb-6">
                <strong>Prayer for Grief and Loss:</strong><br/>
                Holy family life can bring great blessings to our individual lives and to our world. Many families do their best to serve You well, but suffering can make holy family life difficult at times. Grief at the loss of a loved one and other heavy trials can cause great disruption and difficulty in family life.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for families dealing with grief over the loss of a loved one and other heavy trials. We ask God to help all families struggling with grief over the loss of a loved one.
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
                Please give all families who are struggling with difficulty the assistance they need, and we particularly ask today that You help all families struggling with grief over the loss of a loved one. Help us to rely on You in all moments of difficulty. Give us the grace to advance in holiness in all circumstances. And we especially ask in this novena for (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for families dealing with grief and loss. The death of a loved one can shatter a family\'s sense of security and leave them feeling lost and alone. Grief affects every member of the family differently, and it can strain relationships as family members struggle to support each other while dealing with their own pain. Matthew 5:4 reminds us that those who mourn are blessed and will be comforted. This beatitude offers hope to grieving families that their pain is not meaningless and that God will provide comfort. The process of grieving is different for everyone, and families may need time to heal and adjust to life without their loved one. Let us pray that families experiencing grief will find comfort in God\'s love and that they will be able to support each other through their shared loss.</p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be United</h3>
              <p className="text-gray-700 text-sm">
                Pray together as a family when possible. Unity in prayer strengthens 
                family bonds and brings greater grace.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Trust in God\'s timing for healing and resolution. 
                Family difficulties often require time and grace to overcome.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Maintain hope in God\'s love and His plan for your family. 
                Every difficulty can become a path to greater holiness.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of your family and for His presence in your difficulties. 
                Gratitude opens hearts to receive more blessings.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, we thank You for the gift of family life and for Your presence in our difficulties. 
            Help us to pray faithfully for families struggling with various difficulties and to support them with love and compassion. 
            May this novena help us grow in understanding and empathy for those facing family difficulties. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton
          title="Novena for Family Difficulties - Day 2: Grief and Loss"
          text="Join me in praying the Novena for Family Difficulties - Day 2 focusing on grief and loss for God\'s blessing."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/family-difficulties/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Health Problems
          </Link>
          
          <Link
            href="/novenas/family-difficulties/day-3"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 3: Financial Difficulties →
          </Link>
        </div>
      </div>
      
    </div>
  )
}