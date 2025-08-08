import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to Our Lady of Hope - Day 9: Fruits of Hope',
  description: "Pray the Novena to Our Lady of Hope - Day 9 focusing on Fruits of Hope. Join in praying the traditional novena for hope and grace.",
  keywords: [
    'novena to our lady of hope day 9',
    'our lady of hope novena day 9',
    'lady of hope novena day 9',
    'hope novena day 9',
    'day 9 novena to our lady of hope',
    'fruits of hope prayer',
    'our lady of hope novena fruits of hope',
    'hope prayer novena fruits of hope'
  ],
  openGraph: {
    title: 'Novena to Our Lady of Hope - Day 9: Fruits of Hope',
    description: 'Pray the Novena to Our Lady of Hope - Day 9 focusing on Fruits of Hope. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-hope/day-9',
  },
  twitter: {
    title: 'Novena to Our Lady of Hope - Day 9: Fruits of Hope',
    description: 'Pray the Novena to Our Lady of Hope - Day 9 focusing on Fruits of Hope. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfHopeNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to Our Lady of Hope – Day 9: Fruits of Hope
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
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Fruits of Hope</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of our novena, we focus on praying to be filled with the fruits of Our Lady's hope. We ask her to fill us with all the spiritual fruits that come from hope.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

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
              The fruits of hope include peace, joy, patience, and trust in God. Our Lady of Hope wants to fill us with these beautiful fruits.
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
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May Our Lady of Hope bless you abundantly through your prayers. 
            May you always remember to turn to her as Mother of Grace and Hope of the world. 
            May your heart be filled with her maternal love and the gift of hope.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Novena to Our Lady of Hope! As you continue your spiritual journey, 
            may your heart be filled with devotion to Our Lady of Hope and trust in her powerful intercession. 
            Remember that she will never abandon you and will be your hope in times of darkness. 
            May Our Lady of Hope continue to bless you and fill you with the fruits of hope.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Novena to Our Lady of Hope - Day 9: Fruits of Hope"
          text="Join me in praying the Novena to Our Lady of Hope - Day 9 focusing on Fruits of Hope."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-hope/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Trust
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-hope"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Our Lady of Hope Novena" />
    </div>
  )
}


