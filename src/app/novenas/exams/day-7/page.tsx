import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Exams - Day 7: Perseverance',
  description: 'Day 7 of the Novena for Exams focusing on perseverance. Pray for all preparing for exams to persevere in their studies.',
  keywords: [
    'novena for exams day 7',
    'exams perseverance prayer',
    'exams prayer day 7',
    'academic success novena day 7',
    'exams perseverance blessing prayer'
  ],
  openGraph: {
    title: 'Novena for Exams - Day 7: Perseverance',
    description: 'Day 7 of the Novena for Exams focusing on perseverance for God\'s blessing.',
    url: 'https://catholicbibleonline.com/novenas/exams/day-7',
  },
  twitter: {
    title: 'Novena for Exams - Day 7: Perseverance',
    description: 'Day 7 of the Novena for Exams focusing on perseverance for God\'s blessing.',
  }
}

export default function NovenaForExamsDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Exams – Day 7: Perseverance
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for all preparing for exams to persevere in their studies.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/exams" className="hover:text-gray-700">Exams</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Perseverance</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we pray for all preparing for exams to persevere in their studies. We ask God to help all preparing for exams to persevere.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 7</h2>
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
                <strong>Prayer for Perseverance:</strong><br/>
                Preparing for exams can be a difficult and at times tedious task. There can be many temptations for us to give up or to become lax in preparations for upcoming exams. We are in great need of perseverance in order to prepare well for exams that we need to take.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for all preparing for exams to persevere in their studies. We ask God to help all preparing for exams to persevere.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "And let us not grow weary of doing good, for in due season we will reap, if we do not give up." (Galatians 6:9)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                We ask You to assist all who must take exams, and we particularly ask You today to help all preparing for exams to persevere! Help us to grow in all virtues necessary for holiness in our lives. Help us to grow in dependence on You more and more at every opportunity we face. And I particularly ask in this novena (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for all preparing for exams to persevere in their studies. Exam preparation can be a long and challenging process that requires sustained effort over time. Galatians 6:9 reminds us not to grow weary of doing good, for in due season we will reap if we do not give up. This promise offers hope to those preparing for exams that their hard work and perseverance will eventually pay off. Studying for exams can be mentally and emotionally exhausting. Students may face distractions, competing priorities, fatigue, and the temptation to procrastinate or give up when the material becomes difficult. They may also struggle with self-doubt or fear of failure, which can make it even harder to maintain focus and motivation. Let us pray that those preparing for exams will find the strength to persevere, that they will not grow weary in their studies, and that they will trust in God's promise that their efforts will bear fruit.</p>
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
            Help us to pray faithfully for those facing exams and to support them with love and encouragement. 
            May this novena help us grow in understanding and empathy for those facing academic stress. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton
          title="Novena for Exams - Day 7: Perseverance"
          text="Join me in praying the Novena for Exams - Day 7 focusing on perseverance for God's blessing."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/exams/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Teachers
          </Link>
          
          <Link
            href="/novenas/exams/day-8"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Day 8: Submission to God's Will →
          </Link>
        </div>
      </div>
      
    </div>
  )
}