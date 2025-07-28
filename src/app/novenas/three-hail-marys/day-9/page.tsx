import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Three Hail Marys Novena - Day 9: Eyes of Mercy',
  description: "Pray The Three Hail Marys Novena - Day 9 focusing on Eyes of Mercy. Join in praying the traditional novena with daily Hail Marys.",
  keywords: [
    'three hail marys novena day 9',
    'hail mary novena day 9',
    'three hail marys day 9',
    'day 9 three hail marys novena',
    'eyes of mercy prayer',
    'hail mary novena eyes of mercy',
    'three hail marys eyes of mercy',
    'blessed virgin mary novena day 9'
  ],
  openGraph: {
    title: 'The Three Hail Marys Novena - Day 9: Eyes of Mercy',
    description: 'Pray The Three Hail Marys Novena - Day 9 focusing on Eyes of Mercy. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/three-hail-marys/day-9',
  },
  twitter: {
    title: 'The Three Hail Marys Novena - Day 9: Eyes of Mercy',
    description: 'Pray The Three Hail Marys Novena - Day 9 focusing on Eyes of Mercy. Join in praying the traditional novena.',
  }
}

export default function ThreeHailMarysNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            The Three Hail Marys Novena – Day 9: Eyes of Mercy
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying The Three Hail Marys Novena with devotion and trust.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/three-hail-marys" className="hover:text-gray-700">The Three Hail Marys Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Eyes of Mercy</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of our novena, we focus on praying to the merciful eyes of the Virgin Mary. We ask her to turn those eyes of mercy toward us.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold mb-4">The Three Hail Marys Prayer</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">First Hail Mary - For Power</h4>
                <p className="mb-4">
                  Oh, Immaculate Mary, Virgin most Powerful, I beseech you, through that immense Power which you have received from the Eternal Father, obtain for me Purity of heart, - Strength to overcome all the enemies of my soul; -and the special favor I implore in my present necessity.
                </p>
                <p className="mb-4 italic">
                  <em>(Name It)</em>
                </p>
                <p className="mb-4">
                  Mother most pure! Forsake me not, despise not my prayer, graciously hear me for God's glory, your honor, and the welfare of my soul.
                </p>
                <p className="mb-4">
                  To obtain this favor I honor your Power by reciting:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="mb-2">
                    <strong>Hail Mary,</strong> Full of Grace, The Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus.
                  </p>
                  <p>
                    <strong>Holy Mary,</strong> Mother of God, pray for us sinners now, and at the hour of death. <strong>Amen.</strong>
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Second Hail Mary - For Wisdom</h4>
                <p className="mb-4">
                  Oh Virgin Mary, My Mother, through that ineffable Wisdom bestowed upon you by the Incarnate Word of God, I humbly beseech you, obtain for me Meekness and humility of heart; - a perfect knowledge of the divine Will and strength to accomplish it always.
                </p>
                <p className="mb-4">
                  Oh Mary, Seat of Wisdom; as a tender Mother lead me in the path of Christian Virtue and perfection; enlighten and enable me to do what is most pleasing to your beloved Son. and obtain my petition.
                </p>
                <p className="mb-4">
                  To obtain this grace I honor your Wisdom by reciting:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="mb-2">
                    <strong>Hail Mary,</strong> Full of Grace, The Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus.
                  </p>
                  <p>
                    <strong>Holy Mary,</strong> Mother of God, pray for us sinners now, and at the hour of death. <strong>Amen.</strong>
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Third Hail Mary - For Mercy</h4>
                <p className="mb-4">
                  Oh, Mother of Mercy, Mother of penitent sinners, I stand before you sinful and sorrowful, beseeching you through the immense Love given to you by the Holy Spirit for us poor sinners, obtain for me true and perfect contrition for my sins, which I hate and detest with all my heart, because I love God.
                </p>
                <p className="mb-4">
                  Mother most Merciful, help me in my present necessity.
                </p>
                <p className="mb-4">
                  Turn, then those eyes of Mercy toward us, Oh Clement, Oh Loving oh Sweet Virgin Mary!
                </p>
                <p className="mb-4">
                  To obtain this precious gift, I honor Your Loving Mercy by reciting:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="mb-2">
                    <strong>Hail Mary,</strong> Full of Grace, The Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus.
                  </p>
                  <p>
                    <strong>Holy Mary,</strong> Mother of God, pray for us sinners now, and at the hour of death. <strong>Amen.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The merciful eyes of the Virgin Mary are always turned toward us. She is Clement, Loving, and Sweet, and she will help us in our present necessity.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of The Three Hail Marys devotion, let us ask ourselves how we can 
              better honor the Power, Wisdom, and Mercy of the Blessed Virgin Mary through our daily prayers.
            </p>
            <p>
              May the Blessed Virgin Mary continue to bless us with her maternal care and lead us closer to her Son, 
              Jesus Christ, through the devotion of The Three Hail Marys.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Devotion</h3>
              <p className="text-gray-700 text-sm">
                Approach the Blessed Virgin Mary with deep devotion and trust. 
                Honor her Power, Wisdom, and Mercy through your prayers.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Recite the Hail Marys</h3>
              <p className="text-gray-700 text-sm">
                Each day includes the recitation of the Hail Mary to honor 
                the Power, Wisdom, and Mercy of Our Lady.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in Mary</h3>
              <p className="text-gray-700 text-sm">
                Put all your confidence in the Blessed Virgin Mary. Her intercession 
                is powerful and she will not forsake those who turn to her.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Seek Spiritual Graces</h3>
              <p className="text-gray-700 text-sm">
                Ask for purity of heart, meekness, humility, and perfect contrition. 
                Trust that Mary will obtain what is best for your soul.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Blessed Virgin Mary bless you abundantly through The Three Hail Marys devotion. 
            May you always remember to honor her Power, Wisdom, and Mercy through this beautiful prayer. 
            May your heart be filled with her maternal love and the graces of this devotion.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed The Three Hail Marys Novena! As you continue your spiritual journey, 
            may your heart be filled with devotion to the Blessed Virgin Mary and trust in her Power, 
            Wisdom, and Mercy. Remember to continue honoring these three attributes of Our Lady 
            through the daily recitation of The Three Hail Marys. May the Blessed Virgin Mary continue 
            to bless you and guide you to her Son through this beautiful devotion.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="The Three Hail Marys Novena - Day 9: Eyes of Mercy"
          text="Join me in praying The Three Hail Marys Novena - Day 9 focusing on Eyes of Mercy."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          
          <Link
            href="/novenas/three-hail-marys/day-8"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 8: Perfect Contrition
          </Link>
          
          
          <Link 
            href="/novenas/three-hail-marys"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
