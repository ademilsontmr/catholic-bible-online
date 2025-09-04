import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Exams - Day 9: Gratitude',
  description: 'Day 9 of the Novena for Exams focusing on gratitude. Pray for all preparing for exams to grow in gratitude for the gift of education.',
  keywords: [
    'novena for exams day 9',
    'exams gratitude prayer',
    'exams prayer day 9',
    'academic success novena day 9',
    'exams gratitude blessing prayer'
  ],
  openGraph: {
    title: 'Novena for Exams - Day 9: Gratitude',
    description: 'Day 9 of the Novena for Exams focusing on gratitude for God\'s blessing.',
    url: 'https://catholicbibleonline.com/novenas/exams/day-9',
  },
  twitter: {
    title: 'Novena for Exams - Day 9: Gratitude',
    description: 'Day 9 of the Novena for Exams focusing on gratitude for God\'s blessing.',
  }
}

export default function NovenaForExamsDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Exams – Day 9: Gratitude
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for all preparing for exams to grow in gratitude for the gift of education.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/exams" className="hover:text-gray-700">Exams</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Gratitude</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of the Novena for Exams, we pray for all preparing for exams to grow in gratitude for the gift of education.
            We ask God to help all preparing for exams to grow in gratitude for the gift of education.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>
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
                <strong>Prayer for Gratitude:</strong><br/>
                The ability to learn is a great gift You have given us. We often lose sight of the great blessing that education can be for us in the midst of stress and anxiety as we prepare for exams. We must always strive to be grateful to You for giving us the ability to grow in knowledge.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for all preparing for exams to grow in gratitude for the gift of education. We ask God to help all preparing for exams to grow in gratitude for the gift of education.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "Give thanks in all circumstances; for this is the will of God in Christ Jesus for you." (1 Thessalonians 5:18)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                We ask You to assist all who must take exams, and we particularly ask You today to help all preparing for exams to grow in gratitude for the gift of education! Help us to grow in love for You and in appreciation for Your blessings each day. Help us to truly strive to become Your faithful servants in all things. And I particularly ask in this novena (mention your intentions here). Lord, hear our prayers!
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
                Today we pray for all preparing for exams to grow in gratitude for the gift of education. When we are stressed about exams, it can be easy to lose sight of the incredible blessing that education represents.
              </p>
              <p className="mb-4">
                1 Thessalonians 5:18 calls us to give thanks in all circumstances, including when we are facing academic challenges. This reminder encourages us to be grateful for the opportunity to learn, grow, and develop our minds and skills.
              </p>
              <p className="mb-4">
                Education is a gift that many people around the world do not have access to. It opens doors to opportunities, helps us understand the world better, and enables us to serve others more effectively. Even the stress of exams can be seen as a blessing, as it helps us develop important life skills like discipline, time management, and resilience.
              </p>
              <p className="mb-4">
                Let us pray that those preparing for exams will develop a heart of gratitude for their educational opportunities and that this gratitude will help them approach their studies with joy and purpose.
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
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly through your prayers for academic success. 
            May you always remember that God has a plan for your education and that He loves you deeply.
            May you continue to grow in gratitude and trust in God's will for your studies.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-purple-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Novena for Exams! As you continue your academic journey,
            may your heart be filled with compassion for young children facing exams, understanding for college students, support for those taking professional exams, relief for those with anxiety, encouragement for those retaking exams, appreciation for teachers, perseverance in your studies, submission to God's will, and gratitude for the gift of education.
            May God continue to pour out His grace upon those preparing for exams and help them in all their academic needs.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Exams - Day 9: Gratitude" 
            url="/novenas/exams/day-9"
            excerpt="Join me in praying the Novena for Exams - Day 9 focusing on gratitude." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/exams/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Submission to God's Will
          </Link>
          <Link
            href="/novenas/exams"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>
      
      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Exams" />
    </div>
  )
}