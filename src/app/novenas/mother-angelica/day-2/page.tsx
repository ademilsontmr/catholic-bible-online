import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Mother Angelica Novena - Day 2: Embracing Suffering',
  description: 'Pray Mother Angelica Novena - Day 2 focusing on embracing suffering. Join in praying for holiness, evangelization, and faithfulness to God\'s will.',
  keywords: [
    'mother angelica novena day 2',
    'mother angelica prayer novena day 2',
    'day 2 mother angelica novena',
    'embracing suffering mother angelica'
  ],
  openGraph: {
    title: 'Mother Angelica Novena - Day 2: Embracing Suffering',
    description: 'Pray Mother Angelica Novena - Day 2 focusing on Embracing Suffering.',
    url: 'https://catholicbibleonline.com/novenas/mother-angelica/day-2',
  },
  twitter: {
    title: 'Mother Angelica Novena - Day 2: Embracing Suffering',
    description: 'Pray Mother Angelica Novena - Day 2 focusing on Embracing Suffering.',
  }
}

export default function MotherAngelicaNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Mother Angelica Novena – Day 2: Embracing Suffering
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
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Embracing Suffering</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day, we pray for strength to embrace trials and sufferings out of love for God.
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

              <p className="mb-4">Dear Lord, we thank You for giving us Your servant, Mother Angelica, as an example of holiness. Help us to imitate the virtue she grew in despite the many sufferings of her early life.</p>

              <p className="mb-4">Mother Angelica, your childhood was full of sufferings and trials. Your mother's fragile mental health and your parents' divorce led to great sufferings from poverty. Despite your difficult past, you chose to serve God as a Poor Clare.</p>

              <p className="mb-4">You willingly embraced a life of poverty and sacrifice as a member of the Poor Clare religious order. You embarked on a life of self-denial and service to God.</p>

              <p className="mb-4">Pray for me, that I may always embrace trials and sufferings out of love for God. Pray that I may do all I can to serve God wholeheartedly.</p>

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
                Today we focus on embracing suffering. This aspect of honoring Mother Angelica helps you to understand 
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
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Mother Angelica Novena - Day 2: Embracing Suffering" 
            url="/novenas/mother-angelica/day-2"
            excerpt="Join me in praying Mother Angelica Novena - Day 2 focusing on embracing suffering." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/mother-angelica/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Devotion to God
          </Link>
          
          
          
          <Link 
            href="/novenas/mother-angelica/day-3"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Day 3: Perseverance in Faith →
          </Link>
          
        </div>
      </div>

      
    </div>
  )
}