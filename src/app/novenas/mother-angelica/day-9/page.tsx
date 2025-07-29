import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'
import RelatedNovenas from '@/components/RelatedNovenas'

export const metadata: Metadata = {
  title: 'Mother Angelica Novena - Day 9: Lifelong Dedication',
  description: 'Pray Mother Angelica Novena - Day 9 focusing on lifelong dedication. Join in praying for holiness, evangelization, and faithfulness to God\'s will.',
  keywords: [
    'mother angelica novena day 9',
    'mother angelica prayer novena day 9',
    'day 9 mother angelica novena',
    'lifelong dedication mother angelica'
  ],
  openGraph: {
    title: 'Mother Angelica Novena - Day 9: Lifelong Dedication',
    description: 'Pray Mother Angelica Novena - Day 9 focusing on Lifelong Dedication.',
    url: 'https://catholicbibleonline.com/novenas/mother-angelica/day-9',
  },
  twitter: {
    title: 'Mother Angelica Novena - Day 9: Lifelong Dedication',
    description: 'Pray Mother Angelica Novena - Day 9 focusing on Lifelong Dedication.',
  }
}

export default function MotherAngelicaNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Mother Angelica Novena – Day 9: Lifelong Dedication
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for lifelong dedication to serving God and His Church.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/mother-angelica" className="hover:text-gray-700">Mother Angelica Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Lifelong Dedication</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day, we pray for lifelong dedication to serving God and His Church.
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

              <p className="mb-4">Dear Lord, we thank You for giving us Your servant, Mother Angelica, as an example of holiness. Help us to imitate the devotion to You she showed in dedicating her life to Your service.</p>

              <p className="mb-4">Mother Angelica, you chose to dedicate your life to God in religious life as a member of the Poor Clares. Throughout your life as a nun, you served God and His Church faithfully.</p>

              <p className="mb-4">You followed God's call to evangelize the laity. You made use of the media and established EWTN to spread the Gospel and to strengthen the Church.</p>

              <p className="mb-4">Pray for me, that I always be ready to serve God and His Church in whatever ways He calls me to in my life. Pray that I may be eager to dedicate my life to serving God.</p>

              <p className="mb-6">
                <strong>Please also pray for (mention your intentions here).</strong>
              </p>

              <p className="mb-6">
                <strong>Mother Angelica, pray for us!</strong>
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
                Today we focus on lifelong dedication. This aspect of honoring Mother Angelica helps you to understand 
                and imitate her extraordinary example of holiness, perseverance, and dedication to God's service.
              </p>
              <p className="mb-4">
                As we continue our Mother Angelica Novena, let us remember that her life shows us how to persevere through 
                trials, remain faithful to God's will, and dedicate ourselves to serving Him and His Church.
              </p>
              <p>
                Let us ask Mother Angelica to help us grow in devotion to God, overcome hardships with faith, and be 
                willing instruments of His will in our own lives, just as she was in hers.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Devoted</h3>
              <p className="text-gray-700 text-sm">
                Show devotion to God like Mother Angelica did throughout her life.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persevering</h3>
              <p className="text-gray-700 text-sm">
                Persevere through trials and hardships with faith and trust in God.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Faithful</h3>
              <p className="text-gray-700 text-sm">
                Be faithful to God's will and serve Him wholeheartedly.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Evangelizing</h3>
              <p className="text-gray-700 text-sm">
                Be eager to spread the Gospel and serve God's Church.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May God bless you abundantly with Mother Angelica's example of holiness and faithfulness. May you always 
            remember her extraordinary life of service and be inspired to dedicate your own life to serving God and His Church.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed Mother Angelica Novena! As you continue to honor Mother Angelica and seek her intercession 
            for holiness and faithfulness to God's will, may your heart be filled with gratitude for her example. May God 
            continue to bless you and provide all the strength you need to serve Him faithfully throughout your life.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Mother Angelica Novena - Day 9: Lifelong Dedication"
          text="Join me in praying Mother Angelica Novena - Day 9 focusing on lifelong dedication."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          
          <Link 
            href="/novenas/mother-angelica/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Media Evangelization
          </Link>
          
          
          
          <Link 
            href="/novenas/mother-angelica"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
          
        </div>
      </div>

      
      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Mother Angelica Novena" />
      
    </div>
  )
}