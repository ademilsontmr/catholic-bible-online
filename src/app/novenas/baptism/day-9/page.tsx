import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Baptism - Day 9: Response to Grace',
  description: 'Pray the Novena for Baptism - Day 9 focusing on Response to Grace. Join in praying the traditional novena to seek God\'s grace for baptism preparation.',
  keywords: [
    'novena for baptism day 9',
    'baptism novena day 9',
    'baptism prayer day 9',
    'novena for baptism prayer response to grace',
    'day 9 baptism novena',
    'response to grace baptism prayer',
    'baptism novena response to grace',
    'baptism prayer response to grace'
  ],
  openGraph: {
    title: 'Novena for Baptism - Day 9: Response to Grace',
    description: 'Pray the Novena for Baptism - Day 9 focusing on Response to Grace. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/baptism/day-9',
  },
  twitter: {
    title: 'Novena for Baptism - Day 9: Response to Grace',
    description: 'Pray the Novena for Baptism - Day 9 focusing on Response to Grace. Join in praying the traditional novena.',
  }
}

export default function BaptismNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Baptism – Day 9: Response to Grace
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Baptism to seek God's grace and assistance for all who are preparing for this beautiful sacrament.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/baptism" className="hover:text-gray-700">Novena for Baptism</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-sky-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Response to Grace</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray for all who are considering being baptized.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong><br/>
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">Dear Lord, we thank You and praise You for allowing us the opportunity to become Your children through baptism. We ask You to help all who are preparing for this sacrament.</p>
              <p className="mb-6">You want each one of us to be saved and to spend eternity with You in heaven. But not all people in our fallen world respond to Your grace. All who are considering responding to the promptings of Your grace to be baptized are in great need of Your help.</p>
              <p className="mb-6">Please pour out Your grace and assistance on all who are preparing to be baptized, and we especially ask today that You help all who are considering being baptized.</p>
              <p className="mb-6">Help us to always do all things out of love for You in our lives. Give us the grace to grow in devotion to You at every opportunity.</p>

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
              <p className="mb-4">Today we pray for all who are considering being baptized. This final day of our novena reminds us that God wants each of us to be saved and to spend eternity with Him in heaven, but not all people respond to His grace.</p>
              <p className="mb-4">God is constantly calling people to Himself and offering them the grace to respond to His love. Many people feel this call in their hearts and are considering being baptized, but they may be hesitant or uncertain about taking this step. They need our prayers and God's grace to help them respond to His call.</p>
              <p className="mb-4">Responding to God's grace is not always easy. It may require courage to take the step of being baptized, especially if family or friends do not understand or support this decision. It may require faith to trust in God's love and to believe that He will help us in our spiritual journey.</p>
              <p className="mb-4">As we conclude this novena, let us pray for all who are considering being baptized. Let us ask God to help them respond to His grace and to give them the courage and faith they need to take this important step in their spiritual journey.</p>
              <p className="mb-4">Remember that we all have a role to play in helping others respond to God's grace. Whether through our prayers, our example, or our words, we can all help others come to know God and respond to His love. With God's grace, we can all be instruments of His mercy and help bring others to Him.</p>
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
        <section className="bg-sky-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly and give you strength, comfort, and peace in your journey toward baptism. May you always remember His love and care for you, and may you continue to grow in faith, hope, and love through your preparation for this beautiful sacrament, uniting your journey with Christ's redemptive work.
          </p>
        </section>

        
        {/* Final Message */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Novena for Baptism! As you continue your spiritual journey, 
            may your heart be filled with trust, hope, love, humility, courage, and perseverance. 
            May God continue to watch over you and help you in all your needs, giving you the grace 
            to prepare well for baptism and to grow in holiness each day.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Novena for Baptism - Day 9: Response to Grace"
          text="Join me in praying the Novena for Baptism - Day 9 focusing on Response to Grace."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/baptism/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Grace
          </Link>
          
          <Link 
            href="/novenas/baptism"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Baptism Novena" />
    </div>
  )
}