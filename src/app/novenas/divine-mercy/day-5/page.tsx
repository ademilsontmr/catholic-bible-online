import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Divine Mercy Novena - Day 5: Heretics and Schismatics',
  description: 'Pray the Divine Mercy Novena - Day 5 focusing on Heretics and Schismatics. Includes complete prayer text, reflection, and tips for a powerful novena.',
  keywords: [
    'divine mercy novena day 5',
    'divine mercy prayer heretics schismatics',
    'day 5 divine mercy prayer',
    'heretics schismatics prayer',
    'catholic novena divine mercy',
    'divine mercy heretics schismatics'
  ],
  openGraph: {
    title: 'Divine Mercy Novena - Day 5: Heretics and Schismatics',
    description: 'Pray the Divine Mercy Novena - Day 5 focusing on Heretics and Schismatics. Complete prayer text and reflection.',
    url: 'https://catholicbibleonline.com/novenas/divine-mercy/day-5',
  },
  twitter: {
    title: 'Divine Mercy Novena - Day 5: Heretics and Schismatics',
    description: 'Pray the Divine Mercy Novena - Day 5 focusing on Heretics and Schismatics. Complete prayer text and reflection.',
  }
}

export default function DivineMercyNovenaDay5Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Divine Mercy Novena – Day 5: Heretics and Schismatics
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for those who have separated themselves from the Church, asking for their return to unity in Christ.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/divine-mercy" className="hover:text-gray-700">Divine Mercy Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 5</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Heretics and Schismatics</h2>
          <p className="text-gray-700 leading-relaxed">
            On this fifth day of the Divine Mercy Novena, we pray for heretics and schismatics - those who have 
            separated themselves from the unity of the Church. We ask Jesus to bring them back to the truth 
            and unity of His Mystical Body, the Church.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 5</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>
              
              <p className="mb-6">
                <strong>Opening Prayer:</strong><br/>
                Most Merciful Jesus, Goodness Itself, You do not refuse light to those who seek it of You. 
                Receive into the abode of Your Most Compassionate Heart the souls of heretics and schismatics. 
                Draw them by Your light into the unity of the Church, and do not let them escape from the abode 
                of Your Most Compassionate Heart; but bring it about that they, too, come to glorify the generosity of Your mercy.
              </p>
              
              <p className="mb-6">
                <strong>Prayer for Heretics and Schismatics:</strong><br/>
                O omnipotence of Divine Mercy, help of those who are falling, raise up all who have fallen, 
                and assist those who rise. Let all who recognize the warmth of Your Heart feel the effects of Your mercy. 
                Do not look upon how many, but upon what love and what repentance they bring with them.
              </p>
              
              <p className="mb-6">
                Eternal Father, turn Your merciful gaze upon the souls of heretics and schismatics, 
                who have squandered Your blessings and misused Your graces by obstinately persisting in their errors. 
                Do not look upon their errors, but upon the love of Your own Son and upon His bitter Passion, 
                which He underwent for their sake, since they, too, are enclosed in His Most Compassionate Heart. 
                Bring it about that they also may glorify Your great mercy for endless ages. Amen.
              </p>
              
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              
              <p className="mb-6">
                <strong>Prayer to the Divine Mercy:</strong><br/>
                Jesus, I trust in You. Help me to pray with love for those who have separated themselves from Your Church. 
                May Your mercy bring them back to unity and truth. Amen.
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
                Today we pray for heretics and schismatics - those who have separated themselves from the unity 
                of the Catholic Church. This prayer is not about judgment or condemnation, but about love and mercy. 
                We pray for their return to the truth and unity of Christ's Church.
              </p>
              
              <p className="mb-4">
                Jesus desires unity among all His followers. In His priestly prayer before His Passion, 
                He prayed "that they may all be one" (John 17:21). When we pray for heretics and schismatics, 
                we are participating in Jesus' own desire for unity and reconciliation.
              </p>
              
              <p className="mb-4">
                This prayer also reminds us to examine our own hearts. Are there ways in which we have separated 
                ourselves from God's truth? Are there areas of our lives where we need to return to God's mercy? 
                Let us pray with humility, recognizing that we too are in constant need of God's mercy and grace.
              </p>
              
              <p>
                As we pray today, let us remember that God's mercy is powerful enough to overcome any division 
                and bring all people back to the truth of His love. Let us trust in His ability to heal and restore.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Love</h3>
              <p className="text-gray-700 text-sm">
                As you pray for others, let your heart be filled with genuine love and concern for their souls. 
                Remember that Jesus died for each person, and He desires their salvation.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God's Mercy</h3>
              <p className="text-gray-700 text-sm">
                Believe that God's mercy is powerful enough to touch even the most hardened hearts. 
                Trust that He can bring about conversion and reconciliation in ways we cannot imagine.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Conversion and reconciliation often take time. Don't become discouraged if you don't see immediate results. 
                Trust that God is working in His own time and way.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Lead by Example</h3>
              <p className="text-gray-700 text-sm">
                The best way to help others return to the Church is to live a holy and loving life yourself. 
                Let your actions speak of God's mercy and love.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Divine Mercy of Jesus bring unity and reconciliation to all who have separated themselves 
            from His Church. May we all be instruments of His mercy, working for unity and peace in the world. 
            Trust in His power to heal divisions and bring all people back to the truth of His love.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Divine Mercy Novena - Day 5: Trust" 
            url="/novenas/divine-mercy/day-5"
            excerpt="Join me in praying the Divine Mercy Novena - Day 5 focusing on Trust." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/divine-mercy/day-4"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 4: Those Who Do Not Believe in God
          </Link>
          
          <Link 
            href="/novenas/divine-mercy/day-6"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 6: Meek and Humble Souls →
          </Link>
        </div>
      </div>
    </div>
  )
} 