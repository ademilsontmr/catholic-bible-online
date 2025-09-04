import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Exams - Day 1: Young Children',
  description: 'Day 1 of the Novena for Exams focusing on young children. Pray for young children who are preparing to take exams for school.',
  keywords: [
    'novena for exams day 1',
    'exams young children prayer',
    'exams prayer day 1',
    'academic success novena day 1',
    'exams young children blessing prayer'
  ],
  openGraph: {
    title: 'Novena for Exams - Day 1: Young Children',
    description: 'Day 1 of the Novena for Exams focusing on young children for God\'s blessing.',
    url: 'https://catholicbibleonline.com/novenas/exams/day-1',
  },
  twitter: {
    title: 'Novena for Exams - Day 1: Young Children',
    description: 'Day 1 of the Novena for Exams focusing on young children for God\'s blessing.',
  }
}

export default function NovenaForExamsDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Exams – Day 1: Young Children
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for young children who are preparing to take exams for school.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/exams" className="hover:text-gray-700">Exams</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Young Children</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena for Exams, we pray for young children who are preparing to take exams for school. 
            We ask God to help all young children who are preparing to take exams for school.
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
                Lord God, we thank You for the gift of education and for the ability to learn. We ask You to bless all people who must take exams for their education or professional life.
              </p>
              <p className="mb-6">
                <strong>Prayer for Young Children:</strong><br/>
                Exams can be a very stressful part of education. Though the ability to learn is a blessing and a gift from You, many of us have difficulty with exams. And many children must navigate the stress of taking exams from the time when they are very young.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for young children who are preparing to take exams for school. We ask God to help all young children who are preparing to take exams for school.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "Train up a child in the way he should go, and when he is old he will not depart from it." (Proverbs 22:6)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                We ask You to assist all who must take exams, and we particularly ask You today to help all young children who are preparing to take exams for school! Help us to appreciate all of the gifts You have given us in our lives. Help us to grow in love for You and in gratitude for all You have given us each day. And I particularly ask in this novena (mention your intentions here). Lord, hear our prayers!
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
                Today we pray for young children who are preparing to take exams for school. Even at a very young age, 
                children can experience significant stress and anxiety when faced with academic testing.
              </p>
              <p className="mb-4">
                Proverbs 22:6 reminds us of the importance of training children in the right way. This includes 
                not only academic preparation but also helping them develop healthy attitudes toward learning and testing. 
                Young children need support, encouragement, and guidance as they navigate their first experiences with exams.
              </p>
              <p className="mb-4">
                The stress of exams can be particularly challenging for young children who may not yet have 
                developed the coping mechanisms that older students and adults have. They may feel overwhelmed 
                by the pressure to perform well and may not understand that their worth is not determined by their test scores.
              </p>
              <p className="mb-4">
                As we begin this novena, let us remember that God sees the anxiety and stress that young children 
                face and wants to help them. Our prayers can help these children find peace, confidence, and joy in learning.
              </p>
              <p>
                Let us pray that young children preparing for exams will find comfort in God's love and that 
                they will develop a healthy relationship with learning and testing.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Prepared</h3>
              <p className="text-gray-700 text-sm">
                Study diligently and prepare well for your exams. God helps those who help themselves 
                by putting in the necessary effort.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Calm</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's guidance and remain calm during exam preparation. 
                Anxiety can interfere with your ability to learn and perform well.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Continue studying even when it's difficult. Perseverance is key to 
                academic success and spiritual growth.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of education and the opportunity to learn. 
                Gratitude opens our hearts to receive more blessings.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, we thank You for the gift of education and for Your presence in our academic challenges. 
            Help us to pray faithfully for young children facing exams and to support them with love and encouragement. 
            May this novena help us grow in understanding and empathy for those facing academic stress. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Exams - Day 1: Young Children" 
            url="/novenas/exams/day-1"
            excerpt="Join me in praying the Novena for Exams - Day 1 focusing on young children for God's blessing." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/exams"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          <Link
            href="/novenas/exams/day-2"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Day 2: College Students →
          </Link>
        </div>
      </div>
      
      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Exams" />
    </div>
  )
} 