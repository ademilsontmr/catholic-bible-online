import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Courage - Day 5: Purity',
  description: 'Pray the Novena for Courage - Day 5 focusing on Purity. Join in praying the traditional novena to seek God\'s strength and courage.',
  keywords: [
    'novena for courage day 5',
    'courage novena day 5',
    'purity prayer courage',
    'catholic prayer for purity',
    'novena for courage prayer',
    'day 5 courage novena',
    'purity god courage',
    'catholic novena prayer'
  ],
  openGraph: {
    title: 'Novena for Courage - Day 5: Purity',
    description: 'Pray the Novena for Courage - Day 5 focusing on Purity. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/courage/day-5',
  },
  twitter: {
    title: 'Novena for Courage - Day 5: Purity',
    description: 'Pray the Novena for Courage - Day 5 focusing on Purity. Join in praying the traditional novena.',
  }
}

export default function NovenaForCourageDay5Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Courage – Day 5: Purity
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Courage to seek God's strength and divine courage to face life's challenges.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/courage" className="hover:text-gray-700">Novena for Courage</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 5</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Purity</h2>
          <p className="text-gray-700 leading-relaxed">
            On this fifth day of the Novena for Courage, we pray for purity in God's plan and His ability
            to grant us courage. We focus particularly on speaking out against evil and ask God to help us grow in purity and to trust in His divine wisdom
            and His promise to always provide us with the courage we need.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 5</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">In the name of the Father, and of the Son, and of the Holy Spirit. </p>
              <p className="mb-6">Amen.</p>
              <p className="mb-6">Lord God, we thank You and praise You for the many ways You bless us and sustain us in our lives. We ask You to grant the grace of courage to all who are in need of it.</p>
              <p className="mb-6">There are many evils present in our fallen world. You call us to do all we can to fight that evil, but it is not always easy to do so. You know how much we are often in need of courage to speak out against evil.</p>
              <p className="mb-6">We ask You to bless and assist all who are in need of courage, and we particularly ask You today to grant courage to all who are being called to speak out against evil!</p>
              <p className="mb-6">Help us to grow in virtue at every opportunity. Help us to love You more and more each day.</p>
              <p className="mb-6">And I especially ask in this novena (mention your intentions here).</p>
              <p className="mb-6">Lord, hear our prayers!</p>
              <p className="mb-6">In the name of the Father, and of the Son, and of the Holy Spirit. </p>
              <p className="mb-6">Amen.</p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection for Today</h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Today we pray for purity in God's plan and His ability to grant us courage in all situations.
                Purity is the foundation of our relationship with God and the key to finding strength in challenging circumstances.
              </p>

              <p className="mb-4">
                God is our Father, who loves us with a perfect love and is always ready to help us.
                As our Father, He knows exactly what we need and when we need it, especially when it comes to courage.
              </p>

              <p className="mb-4">
                The focus on speaking out against evil reminds us that courage is not just about physical bravery, but about 
                moral and spiritual strength. God calls us to be courageous in many different ways throughout our lives.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask God to increase our purity in Him.
                Let us ask Him to help us turn to Him with confidence in every need,
                knowing that He will always help us and provide us with the courage we need.
              </p>

              <p>
                Remember that God's courage is not limited by time or circumstance.
                He is perpetually ready to help us, and we can trust completely in His divine care.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's plan for your life and His ability to grant you courage. Believe that He is working for your good.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. God will not fail to help those who turn to Him with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific fears and challenges to God. He wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His strength and the gift of courage. Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O God of all courage, increase our purity in you. Help us to turn to you with confidence
            in every need, knowing that you will always help us and provide us with the courage we need.
            May we always trust in your divine care and your perpetual help. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Novena for Courage - Day 5: Purity"
          text="Join me in praying the Novena for Courage - Day 5 focusing on Purity."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          <Link 
            href="/novenas/courage/day-4"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 4: Humility
          </Link>
          
          <Link 
            href="/novenas/courage/day-6"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 6: Obedience →
          </Link>
        </div>
      </div>

      
    </div>
  )
}