import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Evangelization - Day 1: Discerning the Call',
  description: 'Day 1 of the Novena for Evangelization focusing on discerning the call. Pray for those who are discerning the call to devote their whole life to evangelization.',
  keywords: [
    'novena for evangelization day 1',
    'evangelization discerning call prayer',
    'evangelization prayer day 1',
    'missionary work novena day 1',
    'evangelization discerning call blessing prayer'
  ],
  openGraph: {
    title: 'Novena for Evangelization - Day 1: Discerning the Call',
    description: 'Day 1 of the Novena for Evangelization focusing on discerning the call for God\'s blessing.',
    url: 'https://catholicbibleonline.com/novenas/evangelization/day-1',
  },
  twitter: {
    title: 'Novena for Evangelization - Day 1: Discerning the Call',
    description: 'Day 1 of the Novena for Evangelization focusing on discerning the call for God\'s blessing.',
  }
}

export default function NovenaForEvangelizationDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Evangelization – Day 1: Discerning the Call
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for those who are discerning the call to devote their whole life to evangelization.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/evangelization" className="hover:text-gray-700">Evangelization</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Discerning the Call</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena for Evangelization, we pray for those who are discerning the call to devote their whole life to evangelization. 
            We ask God to help all those who are discerning the call to devote their whole life to evangelization.
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
                Dear Lord, we thank You for the gift of Your Church and for Your loving pursuit of all people. Help all who are working to bring more souls to You and Your Church through the work of evangelization.
              </p>
              <p className="mb-6">
                <strong>Prayer for Discerning the Call:</strong><br/>
                You call all of us to preach the Gospel to those around us throughout our lives. It pleases You when we seek to bring others to You. And You call some of us to devote our whole lives to this noble work of evangelizing others.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for those who are discerning the call to devote their whole life to evangelization. We ask God to help all those who are discerning the call to devote their whole life to evangelization.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit." (Matthew 28:19)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Please bless and assist all who work in evangelization, and we particularly ask You today to help all those who are discerning the call to devote their whole life to evangelization! Help us to grow in zeal for Your glory each day. Help us to become more and more devoted to You and Your Church. And I especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
                Today we pray for those who are discerning the call to devote their whole life to evangelization. 
                This is a profound and life-changing decision that requires deep prayer, reflection, and guidance from the Holy Spirit.
              </p>
              <p className="mb-4">
                Matthew 28:19 reminds us of the Great Commission given by Jesus to His disciples. This command is not just for the apostles, 
                but for all of us as members of the Church. However, some are called to make evangelization their primary vocation, 
                dedicating their entire lives to this mission.
              </p>
              <p className="mb-4">
                Discerning such a call requires careful consideration of one's gifts, talents, and circumstances. 
                It involves listening to the voice of God in prayer, seeking spiritual direction, and being open to 
                the guidance of the Holy Spirit. This process can be both exciting and challenging, as it may involve 
                significant changes in one's life.
              </p>
              <p className="mb-4">
                As we begin this novena, let us remember that God calls each of us to evangelization in different ways. 
                Some may be called to full-time missionary work, while others may be called to evangelize in their daily lives 
                through their words and actions.
              </p>
              <p>
                Let us pray that those discerning the call to full-time evangelization will receive clarity and courage 
                to follow God's will for their lives.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Zealous</h3>
              <p className="text-gray-700 text-sm">
                Approach evangelization with zeal and enthusiasm for God's glory. 
                Let your love for Christ shine through in all you do.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Courageous</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's strength and be courageous in sharing the Gospel. 
                Do not fear rejection or difficulty.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Humble</h3>
              <p className="text-gray-700 text-sm">
                Approach evangelization with humility, recognizing that it is God 
                who converts hearts, not our own efforts.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Loving</h3>
              <p className="text-gray-700 text-sm">
                Let charity and love be the foundation of all your evangelization efforts. 
                Love others as Christ loves them.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, we thank You for the gift of Your Church and for calling us to share the Gospel with others. 
            Help us to pray faithfully for those discerning the call to evangelization and to support them with love and encouragement. 
            May this novena help us grow in understanding and zeal for the work of evangelization. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton
          title="Novena for Evangelization - Day 1: Discerning the Call"
          text="Join me in praying the Novena for Evangelization - Day 1 focusing on discerning the call for God's blessing."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/evangelization"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          <Link
            href="/novenas/evangelization/day-2"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 2: Priests →
          </Link>
        </div>
      </div>
      
      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Evangelization" />
    </div>
  )
} 