import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Eyesight - Day 9: Offering Suffering',
  description: 'Day 9 of the Novena for Eyesight focusing on offering suffering. Pray for us to offer our sufferings of eyesight loss in union with Christ.',
  keywords: [
    'novena for eyesight day 9',
    'eyesight offering suffering prayer',
    'eyesight prayer day 9',
    'vision problems novena day 9',
    'eyesight offering suffering blessing prayer'
  ],
  openGraph: {
    title: 'Novena for Eyesight - Day 9: Offering Suffering',
    description: 'Day 9 of the Novena for Eyesight focusing on offering suffering for God\'s blessing.',
    url: 'https://catholicbibleonline.com/novenas/eyesight/day-9',
  },
  twitter: {
    title: 'Novena for Eyesight - Day 9: Offering Suffering',
    description: 'Day 9 of the Novena for Eyesight focusing on offering suffering for God\'s blessing.',
  }
}

export default function NovenaForEyesightDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Eyesight – Day 9: Offering Suffering
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for us to offer our sufferings of eyesight loss in union with Christ.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/eyesight" className="hover:text-gray-700">Eyesight</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Offering Suffering</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of the Novena for Eyesight, we pray for us to offer our sufferings of eyesight loss in union with Christ.
            We ask God to help us to offer our sufferings of eyesight loss in union with His sufferings.
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
                Dear Lord, we thank You and praise You for the many gifts You have given us, especially the gift of our sight. 
                Please help all who are in danger of losing the precious gift of sight.
              </p>
              <p className="mb-6">
                <strong>Prayer for Offering Suffering:</strong><br/>
                Losing our eyesight can be a very heavy cross for us to bear. It is rarely easy to accept heavy sufferings, but we must always strive to grow in holiness through the offering of our sufferings in union with Yours.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for us to offer our sufferings of eyesight loss in union with Christ. We ask God to help us to offer our sufferings of eyesight loss in union with His sufferings.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "Now I rejoice in what I am suffering for you, and I fill up in my flesh what is still lacking in regard to Christ's afflictions, for the sake of his body, which is the church." (Colossians 1:24)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                We ask You to bless, strengthen and heal all who are in danger of losing their eyesight, and we particularly ask You today to help us to offer our sufferings of eyesight loss in union with Your sufferings! Help us to strive for true imitation of You each day. Help us to grow in union with You at every opportunity in our lives. And I especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
                Today we pray for us to offer our sufferings of eyesight loss in union with Christ. When we face vision loss, our suffering can feel overwhelming and meaningless. However, when offered to God, this suffering can become a powerful means of grace and redemption.
              </p>
              <p className="mb-4">
                Colossians 1:24 shows us that our sufferings can be united with Christ's sufferings for the good of the Church. We can offer our pain for the conversion of sinners, for other people facing vision loss, for the souls in purgatory, or for any other intention.
              </p>
              <p className="mb-4">
                This offering transforms our suffering from something that seems meaningless into something that has great spiritual value. It also helps us grow closer to Christ, who understands suffering and who can give meaning to our pain.
              </p>
              <p className="mb-4">
                Let us pray that we will find the grace to offer our sufferings to God and that we will find meaning and purpose even in our pain.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God daily for the gift of your eyesight. Gratitude opens our hearts 
                to receive more blessings and healing.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Maintain hope in God's healing power and His plan for your vision. 
                Trust that He can work miracles in your life.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's timing for healing. Vision problems often require 
                time and medical treatment to improve.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's will, whether that means physical healing, 
                acceptance of vision loss, or finding new ways to see.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly through your prayers for eyesight. 
            May you always remember that God has a plan for your vision and that He loves you deeply.
            May you continue to grow in trust and hope in God's will for your eyesight.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-green-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Novena for Eyesight! As you continue your spiritual journey,
            may your heart be filled with compassion for those with vision loss from disease, understanding for those with eye injuries, wisdom for those facing age-related vision problems, support for young people with vision issues, assistance for those without medical care, gratitude for medical professionals, appreciation for the gift of sight, acceptance of God's will, and offering suffering to God.
            May God continue to pour out His grace upon those in danger of losing their eyesight and help them in all their needs.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Eyesight - Day 9: Offering Suffering" 
            url="/novenas/eyesight/day-9"
            excerpt="Join me in praying the Novena for Eyesight - Day 9 focusing on Offering Suffering." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/eyesight/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Submission to God's Will
          </Link>
          <Link
            href="/novenas/eyesight"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>
      
      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Eyesight" />
    </div>
  )
}