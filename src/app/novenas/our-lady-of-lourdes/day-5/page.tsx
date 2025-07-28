import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to Our Lady of Lourdes - Day 5: Purity',
  description: 'Pray Day 5 of the Novena to Our Lady of Lourdes focusing on Purity. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'novena to our lady of lourdes day 5',
    'lourdes novena day 5',
    'our lady of lourdes day 5',
    'purity lourdes novena',
    'mary novena day 5',
    'lourdes prayer purity',
    'day 5 lourdes novena',
    'purity mary prayer',
    'lourdes novena purity',
    'mary novena purity'
  ],
  openGraph: {
    title: 'Novena to Our Lady of Lourdes - Day 5: Purity',
    description: 'Pray Day 5 of the Novena to Our Lady of Lourdes focusing on Purity. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-lourdes/day-5',
  },
  twitter: {
    title: 'Novena to Our Lady of Lourdes - Day 5: Purity',
    description: 'Pray Day 5 of the Novena to Our Lady of Lourdes focusing on Purity. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfLourdesNovenaDay5Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to Our Lady of Lourdes – Day 5: Purity
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
            <span className="text-gray-800">Day 5</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Purity</h2>
          <p className="text-gray-700 leading-relaxed">
            On this fifth day of the Novena to Our Lady of Lourdes, we pray for purity - purity of heart, 
            mind, and soul. We ask Mary, the Immaculate Conception, to help us grow in purity and to 
            imitate her perfect example of holiness.
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
                <strong>O Immaculate Virgin Mary, Mother of God and our Mother,</strong> 
                you revealed yourself at Lourdes as the Immaculate Conception, the one preserved from all sin 
                from the moment of your conception. You are the most pure and beautiful of all God's creatures.
              </p>

              <p className="mb-6">
                <strong>On this fifth day of our novena, we pray for the gift of purity.</strong> 
                Help us to grow in purity of heart, mind, and soul. Teach us to avoid sin and to strive 
                for holiness in all our thoughts, words, and actions.
              </p>

              <p className="mb-6">
                <strong>O Mary, you are the perfect example of purity,</strong> for you were conceived 
                without sin and remained sinless throughout your life. Help us to imitate your purity 
                and to keep our hearts and minds focused on God and His holy will.
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
                Today we focus on purity, a virtue that is essential for spiritual growth and for drawing 
                closer to God. Purity of heart, mind, and soul allows us to see God more clearly and to 
                receive His graces more abundantly.
              </p>
              
              <p className="mb-4">
                When Mary appeared at Lourdes, she revealed herself as the Immaculate Conception, 
                emphasizing her perfect purity. This title refers to the Catholic dogma that Mary was 
                preserved from all sin, including original sin, from the moment of her conception.
              </p>
              
              <p className="mb-4">
                Mary's purity is not just physical, but spiritual as well. She was pure in her thoughts, 
                words, and actions. She always kept her mind and heart focused on God and His will. 
                This purity made her the perfect vessel to bear the Son of God.
              </p>
              
              <p className="mb-4">
                The miraculous spring at Lourdes is a symbol of the purifying grace that flows from Mary. 
                Just as water cleanses the body, Mary's intercession cleanses our souls and helps us 
                to grow in purity and holiness.
              </p>
              
              <p>
                As we pray today, let us ask Mary to help us grow in purity. Let us ask her to help us 
                avoid sin and to keep our hearts and minds focused on God. Let us strive to imitate 
                her purity and to become more like her in our thoughts, words, and actions.
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
            O Immaculate Virgin Mary, Mother of God and our Mother, increase our purity of heart, mind, and soul. 
            Help us to avoid sin and to strive for holiness in all our thoughts, words, and actions. 
            May our purity make us more pleasing to God and help us to grow closer to you and to your Son, Jesus Christ. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Lourdes Novena - Day 5: Penance"
          text="Join me in praying the Our Lady of Lourdes Novena - Day 5 focusing on Penance."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/novenas/our-lady-of-lourdes/day-4"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 4: Humility
          </Link>
          
          <Link
            href="/novenas/our-lady-of-lourdes/day-6"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 6: Obedience →
          </Link>
        </div>
      </div>
    </div>
  )
} 