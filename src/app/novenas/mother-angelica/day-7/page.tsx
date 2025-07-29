import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Mother Angelica Novena - Day 7: Dedication to Evangelization',
  description: 'Pray Mother Angelica Novena - Day 7 focusing on dedication to evangelization. Join in praying for holiness, evangelization, and faithfulness to God\'s will.',
  keywords: [
    'mother angelica novena day 7',
    'mother angelica prayer novena day 7',
    'day 7 mother angelica novena',
    'dedication to evangelization mother angelica'
  ],
  openGraph: {
    title: 'Mother Angelica Novena - Day 7: Dedication to Evangelization',
    description: 'Pray Mother Angelica Novena - Day 7 focusing on Dedication to Evangelization.',
    url: 'https://catholicbibleonline.com/novenas/mother-angelica/day-7',
  },
  twitter: {
    title: 'Mother Angelica Novena - Day 7: Dedication to Evangelization',
    description: 'Pray Mother Angelica Novena - Day 7 focusing on Dedication to Evangelization.',
  }
}

export default function MotherAngelicaNovenaDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Mother Angelica Novena – Day 7: Dedication to Evangelization
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Continue praying Mother Angelica Novena to honor this remarkable servant of God and seek her intercession for holiness.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/mother-angelica" className="hover:text-gray-700">Mother Angelica Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Dedication to Evangelization</h2>
          <p className="text-gray-700 leading-relaxed">
            On this seventh day, we pray for dedication to spreading the Gospel through media and service.
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

              <p className="mb-4">Dear Lord, we thank You for giving us Your servant, Mother Angelica, as an example of holiness. Help us to imitate the virtue she showed through her dedicated work in Catholic media.</p>

              <p className="mb-4">Mother Angelica, you saw the great influence that the faithful can have on the world by making use of the media. You dedicated yourself to making use of the media to spread the Gospel.</p>

              <p className="mb-4">Your work in establishing EWTN was not easy. But you persevered and worked hard to make sure that the Faith could reach as many people as possible.</p>

              <p className="mb-4">Pray for me, that I may always work hard to carry out God's will in my life. Pray that I may always be as dedicated a servant of God as you were.</p>

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
                Today we focus on dedication to evangelization. This aspect of honoring Mother Angelica helps you to understand 
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
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Mother Angelica, faithful servant of God and foundress of EWTN, I thank you for this day of prayer and reflection. 
            Help me to imitate your devotion to God, your perseverance through trials, and your dedication to serving Him. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Mother Angelica Novena - Day 7: Dedication to Evangelization"
          text="Join me in praying Mother Angelica Novena - Day 7 focusing on dedication to evangelization."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/mother-angelica/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Faithful Service
          </Link>
          
          
          
          <Link 
            href="/novenas/mother-angelica/day-8"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Day 8: Media Evangelization →
          </Link>
          
        </div>
      </div>

      
    </div>
  )
}