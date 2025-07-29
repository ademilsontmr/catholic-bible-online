import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'
import RelatedNovenas from '@/components/RelatedNovenas'

export const metadata: Metadata = {
  title: 'Novena for Students - Day 9: Offering Studies to God',
  description: 'Pray the Novena for Students - Day 9 focusing on offering studies to god. Join in praying for academic success and spiritual growth.',
  keywords: [
    'novena for students day 9',
    'student prayer day 9',
    'day 9 student novena',
    'offering studies to god student prayer'
  ],
  openGraph: {
    title: 'Novena for Students - Day 9: Offering Studies to God',
    description: 'Pray the Novena for Students - Day 9 focusing on Offering Studies to God.',
    url: 'https://catholic-bible-online.com/novenas/students/day-9',
  },
  twitter: {
    title: 'Novena for Students - Day 9: Offering Studies to God',
    description: 'Pray the Novena for Students - Day 9 focusing on Offering Studies to God.',
  },
}

export default function NovenaForStudentsDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Students – Day 9: Offering Studies to God
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray with gratitude for God's guidance in our academic journey.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/students" className="hover:text-gray-700">Novena for Students</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Offering Studies to God</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day, we pray for the ability to offer all academic efforts to God.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. 
Amen.</strong>
              </p>

              <p className="mb-4">Dear Lord, we thank You and praise You for the ability to learn. Help us to always grow in love for You as we grow in knowledge!</p>

              <p className="mb-4">Being a student can be a lot of work. Throughout the many difficulties that come with being a student, they can grow in holiness by offering all of their efforts up to You. You can help us to grow in holiness through all that we do.</p>

<p className="mb-4">Please bless and assist all students. And we particularly ask today that You help us and all students to grow in the ability to offer up to God all that we do!</p>

<p className="mb-4">Help us to do all that we can to become saints. Give us the grace to grow in friendship with You each day, throughout both good times and difficult times.</p>

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
                Today we focus on offering studies to god. This aspect of student life helps us to grow spiritually 
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
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly in your academic pursuits. May you always remember God's guidance 
            and wisdom in all your studies. May you continue to grow in knowledge and holiness through your educational journey.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Novena for Students! As you continue your academic journey, 
            may your heart be filled with gratitude, perseverance, trust, and wisdom. 
            May God continue to guide you in your studies and help you grow in both knowledge and holiness.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Novena for Students - Day 9: Offering Studies to God"
          text="Join me in praying the Novena for Students - Day 9 focusing on offering studies to god."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          
          <Link 
            href="/novenas/students/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Desire for Holy Knowledge
          </Link>
          
          
          
          <Link 
            href="/novenas/students"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
          
        </div>
      </div>

      
      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Novena for Students" />
      
    </div>
  )
}