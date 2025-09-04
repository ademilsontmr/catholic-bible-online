import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Family Difficulties - Day 1: Health Problems',
  description: 'Day 1 of the Novena for Family Difficulties focusing on health problems. Pray for families struggling with health problems and medical difficulties.',
  keywords: [
    'novena for family difficulties day 1',
    'family health problems prayer',
    'family difficulties prayer day 1',
    'family problems novena day 1',
    'family health difficulties blessing prayer'
  ],
  openGraph: {
    title: 'Novena for Family Difficulties - Day 1: Health Problems',
    description: 'Day 1 of the Novena for Family Difficulties focusing on health problems for God\'s blessing.',
    url: 'https://catholicbibleonline.com/novenas/family-difficulties/day-1',
  },
  twitter: {
    title: 'Novena for Family Difficulties - Day 1: Health Problems',
    description: 'Day 1 of the Novena for Family Difficulties focusing on health problems for God\'s blessing.',
  }
}

export default function NovenaForFamilyDifficultiesDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Family Difficulties – Day 1: Health Problems
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for families struggling with health problems and medical difficulties that affect family life.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/family-difficulties" className="hover:text-gray-700">Family Difficulties</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Health Problems</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena for Family Difficulties, we pray for families struggling with health problems. 
            We ask God to help all families struggling with health problems and to provide them with His grace and healing.
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
                Dear Lord, we thank You and praise You for the many ways You have blessed us in our lives. 
                We humbly ask You to pour out Your grace and assistance on all families struggling with difficulties.
              </p>
              <p className="mb-6">
                <strong>Prayer for Health Problems:</strong><br/>
                Family life is a great gift from You and can bless us in many ways. But many families encounter difficulties at times. 
                Health problems or many other kinds of suffering can afflict families and make life troublesome. 
                You can bring help to all families who are facing difficulty.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for families struggling with health problems and medical difficulties that affect family life. 
                We ask God to help all families struggling with health problems.
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
                Please give all families who are struggling with difficulty the assistance they need, and we particularly ask today that You help all families struggling with health problems. 
                Help us to always turn to You for all of our needs each day. Give us the grace to trust in You in every circumstance. 
                And we especially ask in this novena for (mention your intentions here). Lord, hear our prayers!
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
                Today we pray for families struggling with health problems. When a family member becomes ill, 
                it affects the entire family unit. The stress of medical appointments, treatments, and uncertainty 
                can strain relationships and test the family's faith.
              </p>
              <p className="mb-4">
                Matthew 11:28 reminds us that Jesus invites all who are weary and burdened to come to Him for rest. 
                This invitation extends to families dealing with health problems. Jesus understands the physical, 
                emotional, and spiritual toll that illness takes on families.
              </p>
              <p className="mb-4">
                Health problems can make family life feel overwhelming and hopeless. Parents may worry about their 
                children's health, children may fear for their parents' well-being, and spouses may struggle to 
                support each other while dealing with their own concerns.
              </p>
              <p className="mb-4">
                As we begin this novena, let us remember that God sees the suffering of these families and wants to help them. 
                Our prayers can help these families find strength, peace, and hope in the midst of their health challenges.
              </p>
              <p>
                Let us pray that families facing health problems will find comfort in God's love and that they will 
                come to trust in His healing power and His plan for their family.
              </p>
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
                Trust in God's timing for healing and resolution. 
                Family difficulties often require time and grace to overcome.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Maintain hope in God's love and His plan for your family. 
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
            Help us to pray faithfully for families struggling with health problems and to support them with love and compassion. 
            May this novena help us grow in understanding and empathy for those facing family difficulties. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Family Difficulties - Day 1: Health Problems" 
            url="/novenas/family-difficulties/day-1"
            excerpt="Join me in praying the Novena for Family Difficulties - Day 1 focusing on health problems for God's blessing." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/family-difficulties"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          <Link
            href="/novenas/family-difficulties/day-2"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 2: Grief and Loss →
          </Link>
        </div>
      </div>
      
      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Family Difficulties" />
    </div>
  )
} 