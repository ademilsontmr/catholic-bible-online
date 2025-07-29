import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Novena for Students - Day 3: University Students',
  description: 'Pray the Novena for Students - Day 3 focusing on university students. Join in praying for academic success and spiritual growth.',
  keywords: [
    'novena for students day 3',
    'student prayer day 3',
    'day 3 student novena',
    'university students student prayer'
  ],
  openGraph: {
    title: 'Novena for Students - Day 3: University Students',
    description: 'Pray the Novena for Students - Day 3 focusing on University Students.',
    url: 'https://catholic-bible-online.com/novenas/students/day-3',
  },
  twitter: {
    title: 'Novena for Students - Day 3: University Students',
    description: 'Pray the Novena for Students - Day 3 focusing on University Students.',
  },
}

export default function NovenaForStudentsDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Students – Day 3: University Students
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Continue praying the Novena for Students to seek God's guidance and wisdom.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/students" className="hover:text-gray-700">Novena for Students</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: University Students</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day, we pray for university students and their academic and spiritual growth.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 3</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. 
Amen.</strong>
              </p>

              <p className="mb-4">Dear Lord, we thank You and praise You for the ability to learn. Help us to always grow in love for You as we grow in knowledge!</p>

              <p className="mb-4">You know that the years we spend as students can be very difficult for us in many ways. During the time spent as students at universities, many people face temptations and other hardships. You can help all who are studying at universities to always make holy use of their time and to offer all of their work in union with You.</p>

<p className="mb-4">Please bless and assist all students. And we particularly ask today that You pour out Your grace upon all university students!</p>

<p className="mb-4">Help us to always turn to You for all of our needs each day. Give us the grace to grow in devotion and holiness in every circumstance.</p>

<p className="mb-4">And we especially ask in this novena for (mention your intentions here).</p>

<p className="mb-4">Lord, hear our prayers!</p>

<p className="mb-4">In the name of the Father, and of the Son, and of the Holy Spirit. 
Amen.</p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection for Today</h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Today we focus on university students. This aspect of student life helps us to grow spiritually 
                and to become more like Christ in our daily lives as we pursue knowledge and wisdom.
              </p>
              <p className="mb-4">
                As we continue our Novena for Students, let us remember that each day brings us closer to God 
                and helps us to deepen our trust in His guidance for our academic journey.
              </p>
              <p>
                Let us ask God to help us live according to His will and to be witnesses of His love in our studies.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Faith</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with unwavering faith in God's power to guide and bless your academic journey.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present specific academic needs and challenges to God. Be clear about what you're studying and why.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust that God loves you and will answer your prayers for academic success according to His perfect will.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of education and for the opportunities to learn and grow in knowledge.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Lord, we thank You for this day of prayer and reflection for students. Help us to carry Your wisdom 
            and guidance into our academic pursuits and to trust completely in Your plan for our education. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Novena for Students - Day 3: University Students"
          text="Join me in praying the Novena for Students - Day 3 focusing on university students."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/students/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Teenage Students
          </Link>
          
          
          
          <Link 
            href="/novenas/students/day-4"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 4: Adult Students →
          </Link>
          
        </div>
      </div>

      
    </div>
  )
}