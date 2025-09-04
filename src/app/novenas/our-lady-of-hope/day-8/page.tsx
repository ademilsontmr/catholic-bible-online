import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to Our Lady of Hope - Day 8: Hope of Virtue',
  description: "Pray the Novena to Our Lady of Hope - Day 8 focusing on Hope of Virtue. Join in praying the traditional novena for hope and grace.",
  keywords: [
    'novena to our lady of hope day 8',
    'our lady of hope novena day 8',
    'lady of hope novena day 8',
    'hope novena day 8',
    'day 8 novena to our lady of hope',
    'hope of virtue prayer',
    'our lady of hope novena hope of virtue',
    'hope prayer novena hope of virtue'
  ],
  openGraph: {
    title: 'Novena to Our Lady of Hope - Day 8: Hope of Virtue',
    description: 'Pray the Novena to Our Lady of Hope - Day 8 focusing on Hope of Virtue. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-hope/day-8',
  },
  twitter: {
    title: 'Novena to Our Lady of Hope - Day 8: Hope of Virtue',
    description: 'Pray the Novena to Our Lady of Hope - Day 8 focusing on Hope of Virtue. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfHopeNovenaDay8Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to Our Lady of Hope – Day 8: Hope of Virtue
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena to Our Lady of Hope with devotion and trust.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-hope" className="hover:text-gray-700">Novena to Our Lady of Hope</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 8</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Hope of Virtue</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we focus on praying for the hope of virtue through Our Lady. We ask her to help us grow in virtue and become more like her Son, Jesus Christ.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 8</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold mb-4">Scripture Reading</h3>
              <p className="mb-4 italic">
                I am the mother of fair love, and of fear, and of knowledge, and of holy hope. In me is all grace of the way and of the truth; in me is all hope of life and of virtue. Come to me all that desire me and be filled with my fruits (Sirach 24: 24-26).
              </p>

              <h3 className="text-xl font-semibold mb-4">Invocation</h3>
              <p className="mb-4">
                O Blessed Virgin Mary, Mother of Grace, Hope of the world.<br />
                Hear us, your children, who cry to you
              </p>

              <h3 className="text-xl font-semibold mb-4">Let Us Pray</h3>
              <p className="mb-4">
                O God, who by the marvelous protection of the Blessed Virgin Mary has strengthened us firmly in hope, grant we beseech You, that by persevering in prayer at her admonition, we may obtain the favors we devoutly implore. Through Christ Our Lord. Amen.
              </p>

              <h3 className="text-xl font-semibold mb-4">Prayer to Our Lady of Hope</h3>
              <p className="mb-4">
                O Mary, my Mother, I kneel before you with heavy heart. The burden of my sins oppresses me. The knowledge of my weakness discourages me. I am beset by fears and temptations of every sort. Yet I am so attached to the things of this world that instead of longing for Heaven I am filled with dread at the thought of death.
              </p>

              <p className="mb-4">
                O Mother of Mercy, have pity on me in my distress. You are all-powerful with your Divine Son. He can refuse no request of your Immaculate Heart. Show yourself a true Mother to me by being my advocate before His throne. O Refuge of Sinners and Hope of the Hopeless, to whom shall I turn if not you?
              </p>

              <p className="mb-4">
                Obtain for me, then, O Mother of Hope, the grace of true sorrow for my sins, the gift of perfect resignation to God's Holy Will, and the courage to take up my cross and follow Jesus. Beg of His Sacred Heart the special favor that I ask in this novena.
              </p>

              <p className="mb-4">
                <em>(Make your request.)</em>
              </p>

              <p className="mb-4">
                But above all I pray, O dearest Mother, that through your most powerful intercession my heart may be filled with Holy Hope, so that in life's darkest hour I may never fail to trust in God my Savior, but by walking in the way of His commandments I may merit to be united with Him, and with you in the eternal joys of Heaven. Amen.
              </p>

              <p className="mb-2 text-center font-semibold">Mary, our Hope, have pity on us.</p>
              <p className="mb-4 text-center font-semibold">Hope of the Hopeless, pray for us.</p>

              <h3 className="text-xl font-semibold mb-4">3 Hail Marys</h3>
              <p className="mb-4">
                Hail Mary, full of grace, the Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.
              </p>
              <p className="mb-4">
                Hail Mary, full of grace, the Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.
              </p>
              <p>
                Hail Mary, full of grace, the Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The hope of virtue helps us believe that we can grow in holiness and become better people. Our Lady of Hope encourages us in this journey.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of our devotion to Our Lady of Hope, let us ask ourselves how we can 
              better honor her as Mother of Grace and Hope of the world and seek her powerful intercession.
            </p>
            <p>
              May Our Lady of Hope continue to bless us with her maternal care and lead us closer to her Son, 
              Jesus Christ, through the gift of hope.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Hope</h3>
              <p className="text-gray-700 text-sm">
                Approach Our Lady of Hope with confidence and trust. 
                Believe that she will intercede for you and bring you hope in times of darkness.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. Our Lady of Hope will not fail 
                to help those who turn to her with trust and devotion.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Focus on Intentions</h3>
              <p className="text-gray-700 text-sm">
                Keep in mind your specific intentions and needs. Trust that Our Lady will 
                present them to her Son and obtain the graces you need.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Our Lady of Hope for her love and for the graces you receive. 
                Gratitude opens our hearts to receive more spiritual blessings.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Blessed Virgin Mary, Mother of Hope, increase our hope of virtue. Help us to grow in holiness and become more like your Son, Jesus Christ. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena to Our Lady of Hope - Day 8: Hope of Virtue" 
            url="/novenas/our-lady-of-hope/day-8"
            excerpt="Join me in praying the Novena to Our Lady of Hope - Day 8 focusing on Hope of Virtue." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/our-lady-of-hope/day-7"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 7: Hope of Life
          </Link>
          
          
          <Link
            href="/novenas/our-lady-of-hope/day-9"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 9: Fruits of Hope →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
