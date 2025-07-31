import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Evangelization - Day 2: Priests',
  description: 'Day 2 of the Novena for Evangelization focusing on priests. Pray for priests in their work of bringing souls to Christ.',
  keywords: [
    'novena for evangelization day 2',
    'evangelization priests prayer',
    'evangelization prayer day 2',
    'missionary work novena day 2',
    'evangelization priests blessing prayer'
  ],
  openGraph: {
    title: 'Novena for Evangelization - Day 2: Priests',
    description: 'Day 2 of the Novena for Evangelization focusing on priests for God\'s blessing.',
    url: 'https://catholicbibleonline.com/novenas/evangelization/day-2',
  },
  twitter: {
    title: 'Novena for Evangelization - Day 2: Priests',
    description: 'Day 2 of the Novena for Evangelization focusing on priests for God\'s blessing.',
  }
}

export default function NovenaForEvangelizationDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Evangelization – Day 2: Priests
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for priests in their work of bringing souls to Christ.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/evangelization" className="hover:text-gray-700">Evangelization</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Priests</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we pray for priests in their work of bringing souls to Christ. We ask God to bless and assist all priests in their work of bringing souls to You.
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
                Dear Lord, we thank You for the gift of Your Church and for Your loving pursuit of all people. Help all who are working to bring more souls to You and Your Church through the work of evangelization.
              </p>
              <p className="mb-6">
                <strong>Prayer for Priests:</strong><br/>
                You have blessed us with many holy priests who work to bring souls to You. Led by the guidance and example of holy priests, we can grow to a deeper fervor and zeal for the task of bringing souls to You.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for priests in their work of bringing souls to Christ. We ask God to bless and assist all priests in their work of bringing souls to You.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "Tend the flock of God that is your charge, not by constraint but willingly, not for shameful gain but eagerly, not as domineering over those in your charge but being examples to the flock." (1 Peter 5:2-3)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Please bless and assist all who work in evangelization, and we particularly ask You today to bless and assist all priests in their work of bringing souls to You! Help us to grow to a more intimate relationship with You each day of our lives. Help us to make growth in holiness our highest priority in life. And I especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for priests in their work of bringing souls to Christ. Priests have a unique and sacred role in the Church as spiritual fathers who guide and nurture the faith of their parishioners. 1 Peter 5:2-3 reminds us that priests are called to tend the flock of God willingly and eagerly, serving as examples to the faithful. This passage emphasizes the importance of priests leading by example and serving with love rather than seeking personal gain or exercising authority in a domineering way. Priests face many challenges in their ministry - they must balance the demands of parish administration with their primary role as spiritual leaders, they often work long hours, and they may face criticism or misunderstanding from those they serve. Despite these challenges, priests continue to faithfully carry out their mission of bringing souls to Christ through their preaching, sacramental ministry, and personal witness. Let us pray that priests will be strengthened in their vocation and that they will continue to be effective instruments of God's grace in the work of evangelization.</p>
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
            Help us to pray faithfully for those working in evangelization and to support them with love and encouragement. 
            May this novena help us grow in understanding and zeal for the work of evangelization. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton
          title="Novena for Evangelization - Day 2: Priests"
          text="Join me in praying the Novena for Evangelization - Day 2 focusing on priests for God's blessing."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/evangelization/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Discerning the Call
          </Link>
          
          <Link
            href="/novenas/evangelization/day-3"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 3: Religious Orders →
          </Link>
        </div>
      </div>
      
    </div>
  )
}