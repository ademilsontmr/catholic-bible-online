import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to Our Lady of Lourdes - Day 4: Humility',
  description: 'Pray Day 4 of the Novena to Our Lady of Lourdes focusing on Humility. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'novena to our lady of lourdes day 4',
    'lourdes novena day 4',
    'our lady of lourdes day 4',
    'humility lourdes novena',
    'mary novena day 4',
    'lourdes prayer humility',
    'day 4 lourdes novena',
    'humility mary prayer',
    'lourdes novena humility',
    'mary novena humility'
  ],
  openGraph: {
    title: 'Novena to Our Lady of Lourdes - Day 4: Humility',
    description: 'Pray Day 4 of the Novena to Our Lady of Lourdes focusing on Humility. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-lourdes/day-4',
  },
  twitter: {
    title: 'Novena to Our Lady of Lourdes - Day 4: Humility',
    description: 'Pray Day 4 of the Novena to Our Lady of Lourdes focusing on Humility. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfLourdesNovenaDay4Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to Our Lady of Lourdes – Day 4: Humility
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
            <span className="text-gray-800">Day 4</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Humility</h2>
          <p className="text-gray-700 leading-relaxed">
            On this fourth day of the Novena to Our Lady of Lourdes, we pray for humility - the virtue that 
            St. Bernadette so perfectly exemplified. We ask Mary to help us recognize our own nothingness 
            and to trust completely in God's grace and mercy.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 4</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O Most Humble Virgin Mary, Mother of God and our Mother,</strong> 
                you appeared to St. Bernadette, a simple and humble girl, showing us that God chooses 
                the lowly and the poor to confound the wise and the powerful.
              </p>

              <p className="mb-6">
                <strong>On this fourth day of our novena, we pray for the gift of humility.</strong> 
                Help us to recognize our own nothingness and to trust completely in God's grace and mercy. 
                Teach us to be humble like St. Bernadette, who never sought glory for herself but always 
                gave glory to God.
              </p>

              <p className="mb-6">
                <strong>O Mary, you are the most humble of all creatures,</strong> for you called yourself 
                the handmaid of the Lord. You never sought your own glory but always pointed to your Son, 
                Jesus Christ. Help us to imitate your humility and to recognize that all good comes from God.
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
                Today we focus on humility, a virtue that is essential for spiritual growth and for receiving 
                God's graces. Humility is the foundation of all other virtues and is what makes us pleasing to God.
              </p>
              
              <p className="mb-4">
                St. Bernadette was a perfect example of humility. She was a poor, uneducated girl from a 
                simple family, yet God chose her to receive the apparitions of Our Lady. She never sought 
                attention or glory for herself, but always pointed to God and to Mary.
              </p>
              
              <p className="mb-4">
                When Mary appeared to St. Bernadette, she chose someone who was completely humble and 
                who would not seek her own glory. This teaches us that God works through the humble and 
                the lowly, not through the proud and the powerful.
              </p>
              
              <p className="mb-4">
                Mary herself is the perfect example of humility. She called herself the handmaid of the Lord 
                and never sought her own glory. She always pointed to her Son, Jesus Christ, and gave all 
                glory to God.
              </p>
              
              <p>
                As we pray today, let us ask Mary to help us grow in humility. Let us ask her to help us 
                recognize our own nothingness and to trust completely in God's grace and mercy. Let us 
                strive to be humble like St. Bernadette and like Mary, always giving glory to God and 
                never seeking our own glory.
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
            O Most Humble Virgin Mary, Mother of God and our Mother, increase our humility and help us 
            to recognize our own nothingness. Teach us to trust completely in God's grace and mercy, 
            and to always give glory to Him. May our humility make us pleasing to God and help us 
            to grow in holiness. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Lourdes Novena - Day 4: Prayer"
          text="Join me in praying the Our Lady of Lourdes Novena - Day 4 focusing on Prayer."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/novenas/our-lady-of-lourdes/day-3"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 3: Love
          </Link>
          
          <Link
            href="/novenas/our-lady-of-lourdes/day-5"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 5: Purity →
          </Link>
        </div>
      </div>
    </div>
  )
} 