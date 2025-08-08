import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Anthony Novena - Day 9: Eternal Rest',
  description: "Pray St. Anthony Novena - Day 9 focusing on Eternal Rest. Join in praying the traditional novena for special intentions.",
  keywords: [
    'st anthony novena day 9',
    'saint anthony novena day 9',
    'st anthony day 9',
    'day 9 st anthony novena',
    'eternal rest prayer',
    'st anthony novena eternal rest',
    'saint anthony eternal rest',
    'blessed virgin mary novena day 9'
  ],
  openGraph: {
    title: 'St. Anthony Novena - Day 9: Eternal Rest',
    description: 'Pray St. Anthony Novena - Day 9 focusing on Eternal Rest. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-anthony/day-9',
  },
  twitter: {
    title: 'St. Anthony Novena - Day 9: Eternal Rest',
    description: 'Pray St. Anthony Novena - Day 9 focusing on Eternal Rest. Join in praying the traditional novena.',
  }
}

export default function StAnthonyNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Anthony Novena – Day 9: Eternal Rest
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying St. Anthony Novena with devotion and trust.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/st-anthony" className="hover:text-gray-700">St. Anthony Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Eternal Rest</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of our novena, we focus on praying for eternal rest with St. Anthony in heaven. We ask him to bring us to eternal rest with him.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold mb-4">St. Anthony Novena Prayer</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Opening Prayer</h4>
                <p className="mb-4">
                  In the name of the Father, and of the Son, and of the Holy Spirit.<br />
                  <strong>Amen.</strong>
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Main Prayer</h4>
                <p className="mb-4">
                  O holy St. Anthony, you are known for the power and abundance of your miracles. Jesus came into your arms as a humble little child. Pray for me to the Child Jesus for my needs and desires…
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="italic">
                    <em>(Mention your intentions)</em>
                  </p>
                </div>
                <p className="mb-4">
                  In imitation of our Lord, you have great mercy and compassion for sinners. Pay no attention to my unworthiness, but instead ask God to show His glory through the answer of my requests.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Prayer to St. Anthony</h4>
                <p className="mb-4">
                  St. Anthony, you cooperated with the grace of God in a radical way with your life. You gave everything to Christ and to your neighbor. Your life glorified God!
                </p>
                <p className="mb-4">
                  You are an example of holiness that I will try to follow.
                </p>
                <p className="mb-4">
                  You are in heaven praising God with a particular closeness to the King of Kings. With your seat of honor, please beg God to both answer my request and bring me to eternal rest with you.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Closing Prayers</h4>
                <p className="mb-4">
                  Pray one Our Father,<br />
                  one Hail Mary, and<br />
                  Glory Be to the Father, in honor of Saint Anthony.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-center font-semibold">
                    <strong>Saint Anthony, pray for us!</strong>
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Final Prayer</h4>
                <p className="mb-4">
                  In the name of the Father, and of the Son, and of the Holy Spirit.<br />
                  <strong>Amen.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              St. Anthony begs God to both answer our requests and bring us to eternal rest with him. This is the ultimate goal of our devotion to him.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of St. Anthony devotion, let us ask ourselves how we can 
              better honor him and trust in his power to provide guidance and miracles in all our needs.
            </p>
            <p>
              May St. Anthony continue to bless us with his powerful intercession and help us grow in our 
              devotion to him and to the Child Jesus.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Confidence</h3>
              <p className="text-gray-700 text-sm">
                Approach St. Anthony with confidence, knowing he is known for the power 
                and abundance of his miracles.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in His Intercession</h3>
              <p className="text-gray-700 text-sm">
                Trust that St. Anthony will pray for you to the Child Jesus for your 
                needs and desires.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Follow His Example</h3>
              <p className="text-gray-700 text-sm">
                Try to follow St. Anthony's example of holiness and cooperation 
                with God's grace.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Give Everything to Christ</h3>
              <p className="text-gray-700 text-sm">
                Ask St. Anthony to help you give everything to Christ and to your neighbor, 
                just as he did.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May St. Anthony bless you abundantly through this devotion. 
            May you always remember to call upon him for his powerful intercession 
            and trust in his ability to work miracles through God's grace.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed St. Anthony Novena! As you continue your spiritual journey, 
            may your heart be filled with devotion to St. Anthony and trust in his power 
            to work miracles. Remember to continue calling upon him for his powerful intercession 
            and to follow his example of holiness. May St. Anthony continue to bless you 
            and help you grow in your love for the Child Jesus.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="St. Anthony Novena - Day 9: Eternal Rest"
          text="Join me in praying St. Anthony Novena - Day 9 focusing on Eternal Rest."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/st-anthony/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Humility
          </Link>
          
          <Link 
            href="/novenas/st-anthony"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Novena to St. Anthony" />
    </div>
  )
}


