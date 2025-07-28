import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to Our Lady of Lourdes - Day 7: Perseverance',
  description: 'Pray Day 7 of the Novena to Our Lady of Lourdes focusing on Perseverance. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'novena to our lady of lourdes day 7',
    'lourdes novena day 7',
    'our lady of lourdes day 7',
    'perseverance lourdes novena',
    'mary novena day 7',
    'lourdes prayer perseverance',
    'day 7 lourdes novena',
    'perseverance mary prayer',
    'lourdes novena perseverance',
    'mary novena perseverance'
  ],
  openGraph: {
    title: 'Novena to Our Lady of Lourdes - Day 7: Perseverance',
    description: 'Pray Day 7 of the Novena to Our Lady of Lourdes focusing on Perseverance. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-lourdes/day-7',
  },
  twitter: {
    title: 'Novena to Our Lady of Lourdes - Day 7: Perseverance',
    description: 'Pray Day 7 of the Novena to Our Lady of Lourdes focusing on Perseverance. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfLourdesNovenaDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to Our Lady of Lourdes – Day 7: Perseverance
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena to Our Lady of Lourdes to seek Mary's miraculous intercession and healing grace.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-lourdes" className="hover:text-gray-700">Our Lady of Lourdes Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Perseverance</h2>
          <p className="text-gray-700 leading-relaxed">
            On this seventh day of the Novena to Our Lady of Lourdes, we pray for perseverance - perseverance in prayer, 
            perseverance in faith, and perseverance in following God's will. We ask Mary to help us remain steadfast 
            in our spiritual journey and to never give up hope.
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

              <p className="mb-6">
                <strong>O Most Persevering Virgin Mary, Mother of God and our Mother,</strong> 
                you appeared to St. Bernadette eighteen times at Lourdes, showing us the importance 
                of perseverance in prayer and in following God's will.
              </p>

              <p className="mb-6">
                <strong>On this seventh day of our novena, we pray for the gift of perseverance.</strong> 
                Help us to remain steadfast in our faith and to never give up hope, even in the face 
                of difficulties and trials. Teach us to persevere in prayer and to trust in God's timing.
              </p>

              <p className="mb-6">
                <strong>O Mary, you are the perfect example of perseverance,</strong> for you remained 
                faithful to God throughout your life, even when you had to stand at the foot of the cross 
                and watch your Son suffer and die. Help us to imitate your perseverance and to remain 
                faithful to God no matter what challenges we face.
              </p>

              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>

              <p className="mb-6">
                <strong>O Mary, conceived without sin, pray for us who have recourse to thee!</strong>
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
                Today we focus on perseverance, a virtue that is essential for spiritual growth and for 
                achieving our goals. Perseverance is the ability to continue in a course of action despite 
                difficulties, obstacles, or discouragement.
              </p>
              
              <p className="mb-4">
                St. Bernadette's perseverance was remarkable. She returned to the grotto eighteen times 
                to see Mary, even when others doubted her and when she faced ridicule and persecution. 
                She persevered in prayer and in following Mary's instructions, and her perseverance was 
                rewarded with the miraculous spring at Lourdes.
              </p>
              
              <p className="mb-4">
                Mary's own perseverance is evident in her life. She remained faithful to God throughout 
                her life, even when she had to stand at the foot of the cross and watch her Son suffer 
                and die. She never gave up hope and never lost faith in God's plan.
              </p>
              
              <p className="mb-4">
                The miraculous spring at Lourdes is a symbol of the fruits that come from perseverance. 
                Just as the spring continues to flow and bring healing to millions of people, our 
                perseverance in prayer and faith can bring great blessings to ourselves and to others.
              </p>
              
              <p>
                As we pray today, let us ask Mary to help us grow in perseverance. Let us ask her to help us 
                remain steadfast in our faith and to never give up hope, even in the face of difficulties. 
                Let us strive to persevere like St. Bernadette and like Mary, always trusting in God's plan.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Begin with Faith</h3>
              <p className="text-gray-700 text-sm">
                Start each day with complete trust in Mary's intercession. Believe that she will help you 
                and bring your prayers to her Son, Jesus Christ.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Consistent</h3>
              <p className="text-gray-700 text-sm">
                Pray the novena for nine consecutive days without interruption. Consistency shows your 
                commitment and trust in Mary's help.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Offer Your Intentions</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to Mary. Be honest about your struggles 
                and trust that she understands your situation.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Practice Penance</h3>
              <p className="text-gray-700 text-sm">
                As Mary requested at Lourdes, offer small sacrifices and penances during the novena. 
                This can include fasting, acts of charity, or giving up something you enjoy.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Most Persevering Virgin Mary, Mother of God and our Mother, increase our perseverance in faith 
            and help us to never give up hope, even in the face of difficulties and trials. Teach us to remain 
            steadfast in prayer and to trust in God's timing. May our perseverance make us more pleasing to God 
            and help us to achieve the spiritual goals He has set for us. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Lourdes Novena - Day 7: Peace"
          text="Join me in praying the Our Lady of Lourdes Novena - Day 7 focusing on Peace."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/novenas/our-lady-of-lourdes/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Obedience
          </Link>
          
          <Link
            href="/novenas/our-lady-of-lourdes/day-8"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 8: Intercession →
          </Link>
        </div>
      </div>
    </div>
  )
} 