import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Christmas Novena - Day 2: Hope',
  description: 'Pray the Christmas Novena - Day 2 focusing on Hope. Join in praying the traditional Christmas Novena to prepare for the birth of Jesus Christ.',
  keywords: [
    'christmas novena day 2',
    'advent novena day 2',
    'christmas prayer hope',
    'day 2 christmas novena',
    'hope advent prayer',
    'christmas novena hope',
    'advent novena hope',
    'infant jesus prayer'
  ],
  openGraph: {
    title: 'Christmas Novena - Day 2: Hope',
    description: 'Pray the Christmas Novena - Day 2 focusing on Hope. Join in praying the traditional Christmas Novena.',
    url: 'https://catholicbibleonline.com/novenas/christmas-advent/day-2',
  },
  twitter: {
    title: 'Christmas Novena - Day 2: Hope',
    description: 'Pray the Christmas Novena - Day 2 focusing on Hope. Join in praying the traditional Christmas Novena.',
  }
}

export default function ChristmasAdventNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Christmas Novena – Day 2: Hope
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Christmas Novena to prepare for the birth of our Savior.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/christmas-advent" className="hover:text-gray-700">Christmas Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Hope</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of the Christmas Novena, we pray for hope in God's promises and His plan for salvation. 
            The birth of Jesus brings hope to all humanity, for through Him we have the hope of eternal life.
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
                <strong>Hail and blessed be the hour and moment in which the Son of God was born of the most pure Virgin Mary, at midnight, in Bethlehem, in piercing cold. In that hour, vouchsafe, O my God! to hear my prayer and grant my desires, through the merits of Our Savior Jesus Christ, and of His Blessed Mother. Amen.</strong>
              </p>
              
              <p className="mb-6">
                <strong>Our Father...</strong>
              </p>
              
              <p className="mb-6">
                <strong>Hail Mary...</strong>
              </p>
              
              <p className="mb-6">
                <strong>Glory be to the Father...</strong>
              </p>
              
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for the gift of hope. May the birth of Jesus fill our hearts with hope in God's promises 
                and His plan for our salvation. We pray for hope in times of difficulty and uncertainty.
              </p>
              
              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your intentions here)
              </p>
              
              <p className="mb-6">
                <strong>O Divine Infant Jesus, grant us the gift of hope!</strong>
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
                Today we pray for hope in God's promises and His plan for salvation. The birth of Jesus Christ brings hope to all humanity, 
                for through Him we have the hope of eternal life and the promise of God's love and mercy.
              </p>
              
              <p className="mb-4">
                The prophet Isaiah foretold the coming of the Messiah, saying, "For to us a child is born, to us a son is given, 
                and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, 
                Everlasting Father, Prince of Peace" (Isaiah 9:6).
              </p>
              
              <p className="mb-4">
                This prophecy gives us hope that God keeps His promises. The birth of Jesus fulfilled this prophecy 
                and gives us hope that all of God's promises will be fulfilled in our lives as well.
              </p>
              
              <p>
                As we pray today, let us ask God to fill our hearts with hope. Let us remember that no matter what difficulties 
                we face, we have hope in Jesus Christ, who came to save us and give us eternal life.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Hope</h3>
              <p className="text-gray-700 text-sm">
                Approach this novena with hope in your heart. Trust that God will answer your prayers 
                according to His perfect will and timing.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Remember God's Promises</h3>
              <p className="text-gray-700 text-sm">
                Reflect on God's promises throughout Scripture. Remember that He is faithful 
                and will fulfill all His promises in your life.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God's Plan</h3>
              <p className="text-gray-700 text-sm">
                Trust that God has a perfect plan for your life. Even when things don't go as expected, 
                have hope that God is working for your good.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Share Your Hope</h3>
              <p className="text-gray-700 text-sm">
                Share the hope you have in Jesus Christ with others. Your hope can be a light 
                to those who are struggling or feeling hopeless.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Divine Infant Jesus, grant us the gift of hope as we prepare for Your birth. Help us to trust in God's promises 
            and His perfect plan for our lives. May our hearts be filled with hope in You, our Savior and Redeemer. 
            We pray in union with Your Blessed Mother, Mary. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Christmas Advent Novena - Day 2: Hope"
          text="Join me in praying the Christmas Advent Novena - Day 2 focusing on Hope."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/christmas-advent/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Joy
          </Link>
          
          <Link 
            href="/novenas/christmas-advent/day-3"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Day 3: Peace →
          </Link>
        </div>
      </div>
    </div>
  )
} 