import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Evangelization - Day 9: Charity',
  description: 'Day 9 of the Novena for Evangelization focusing on charity. Pray for us to grow in the charity necessary to effectively preach the Gospel.',
  keywords: [
    'novena for evangelization day 9',
    'evangelization charity prayer',
    'evangelization prayer day 9',
    'missionary work novena day 9',
    'evangelization charity blessing prayer'
  ],
  openGraph: {
    title: 'Novena for Evangelization - Day 9: Charity',
    description: 'Day 9 of the Novena for Evangelization focusing on charity for God\'s blessing.',
    url: 'https://catholicbibleonline.com/novenas/evangelization/day-9',
  },
  twitter: {
    title: 'Novena for Evangelization - Day 9: Charity',
    description: 'Day 9 of the Novena for Evangelization focusing on charity for God\'s blessing.',
  }
}

export default function NovenaForEvangelizationDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Evangelization – Day 9: Charity
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for us to grow in the charity necessary to effectively preach the Gospel.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/evangelization" className="hover:text-gray-700">Evangelization</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Charity</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of the Novena for Evangelization, we pray for us to grow in the charity necessary to effectively preach the Gospel.
            We ask God to help us to grow in the charity necessary to effectively preach the Gospel.
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
                Dear Lord, we thank You for the gift of Your Church and for Your loving pursuit of all people. Help all who are working to bring more souls to You and Your Church through the work of evangelization.
              </p>
              <p className="mb-6">
                <strong>Prayer for Charity:</strong><br/>
                The work of evangelization can be a difficult one. It is not always easy to know how to preach the Gospel best to others, but sincere charity and love are always necessary when we seek to bring others to You.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for us to grow in the charity necessary to effectively preach the Gospel. We ask God to help us to grow in the charity necessary to effectively preach the Gospel.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "If I speak in the tongues of men and of angels, but have not love, I am a noisy gong or a clanging cymbal. And if I have prophetic powers, and understand all mysteries and all knowledge, and if I have all faith, so as to remove mountains, but have not love, I am nothing." (1 Corinthians 13:1-2)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Please bless and assist all who work in evangelization, and we particularly ask You today to help us to grow in the charity necessary to effectively preach the Gospel! Help us to make growth in virtue a true priority in our lives. Help us to seek to grow to deeper holiness and unity with You at every opportunity. And I especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
                Today we pray for us to grow in the charity necessary to effectively preach the Gospel. 1 Corinthians 13:1-2 reminds us that without love, all our efforts in evangelization are meaningless.
              </p>
              <p className="mb-4">
                This love, or charity, is the foundation of all effective evangelization. Charity in evangelization means genuinely caring about the people we are trying to reach, not just seeing them as potential converts. It means being willing to serve them, to listen to them, and to meet them where they are in their journey of faith.
              </p>
              <p className="mb-4">
                This charity also means being patient and understanding, recognizing that everyone's journey to Christ is unique and may take time. It means being willing to suffer with others and to share in their joys and sorrows. This charity is not just a feeling, but a choice to act with love toward others, even when it is difficult or inconvenient.
              </p>
              <p>
                It is this charity that makes our evangelization authentic and credible. Let us pray that we will grow in this charity and that it will be the foundation of all our efforts to spread the Gospel.
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
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly through your prayers for evangelization. 
            May you always remember that God has called you to share the Gospel and that He will provide you with the grace you need.
            May you continue to grow in zeal, courage, humility, and charity as you work to bring souls to Christ.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-blue-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Novena for Evangelization! As you continue your journey of faith,
            may your heart be filled with zeal for those discerning the call to evangelization, support for priests in their ministry, appreciation for religious orders, encouragement for lay missionaries, perseverance in overcoming difficulties, openness to God's will, creativity in sharing the Gospel, humility in your approach, and charity in all your evangelization efforts.
            May God continue to pour out His grace upon all who work to spread the Gospel and help them in their mission to bring souls to Christ.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton
          title="Novena for Evangelization - Day 9: Charity"
          text="Join me in praying the Novena for Evangelization - Day 9 focusing on charity."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/evangelization/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Humility
          </Link>
          <Link
            href="/novenas/evangelization"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>
      
      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Evangelization" />
    </div>
  )
}