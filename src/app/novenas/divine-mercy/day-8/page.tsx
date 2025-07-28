import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Divine Mercy Novena - Day 8: Souls in Purgatory',
  description: 'Pray the Divine Mercy Novena - Day 8 focusing on Souls in Purgatory. Includes complete prayer text, reflection, and tips for a powerful novena.',
  keywords: [
    'divine mercy novena day 8',
    'divine mercy prayer purgatory',
    'day 8 divine mercy prayer',
    'purgatory souls prayer',
    'catholic novena divine mercy',
    'divine mercy purgatory'
  ],
  openGraph: {
    title: 'Divine Mercy Novena - Day 8: Souls in Purgatory',
    description: 'Pray the Divine Mercy Novena - Day 8 focusing on Souls in Purgatory. Complete prayer text and reflection.',
    url: 'https://catholicbibleonline.com/novenas/divine-mercy/day-8',
  },
  twitter: {
    title: 'Divine Mercy Novena - Day 8: Souls in Purgatory',
    description: 'Pray the Divine Mercy Novena - Day 8 focusing on Souls in Purgatory. Complete prayer text and reflection.',
  }
}

export default function DivineMercyNovenaDay8Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Divine Mercy Novena – Day 8: Souls in Purgatory
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for the souls in purgatory, asking God's mercy to bring them to the fullness of His love.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/divine-mercy" className="hover:text-gray-700">Divine Mercy Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 8</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Souls in Purgatory</h2>
          <p className="text-gray-700 leading-relaxed">
            On this eighth day of the Divine Mercy Novena, we pray for the souls in purgatory - those who have died 
            in God's grace but still need purification before entering heaven. We ask Jesus to pour out His mercy 
            upon them and bring them to the fullness of His love.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 8</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>
              
              <p className="mb-6">
                <strong>Opening Prayer:</strong><br/>
                Most Merciful Jesus, You Yourself have said that You desire mercy; so I bring into the abode of Your Most Compassionate Heart 
                the souls in Purgatory, souls who are very dear to You, and yet, who must make retribution to Your justice. 
                May the streams of Blood and Water which gushed forth from Your Heart put out the flames of Purgatory, 
                that there, too, the power of Your mercy may be celebrated.
              </p>
              
              <p className="mb-6">
                <strong>Prayer for Souls in Purgatory:</strong><br/>
                O omnipotence of Divine Mercy, help of those who are falling, raise up all who have fallen, 
                and assist those who rise. Let all who recognize the warmth of Your Heart feel the effects of Your mercy. 
                Do not look upon how many, but upon what love and what repentance they bring with them.
              </p>
              
              <p className="mb-6">
                Eternal Father, turn Your merciful gaze upon the souls suffering in Purgatory, who are enfolded in the Most Compassionate Heart of Jesus. 
                I beg You, by the sorrowful Passion of Jesus Your Son, and by all the bitterness with which His most sacred Soul was flooded: 
                Manifest Your mercy to the souls who are under Your just scrutiny. Look upon them in no other way but only through the Wounds of Jesus, 
                Your dearly beloved Son; for we firmly believe that there is no limit to Your goodness and compassion. Amen.
              </p>
              
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              
              <p className="mb-6">
                <strong>Prayer to the Divine Mercy:</strong><br/>
                Jesus, I trust in You. Help me to pray with love for the souls in purgatory, and may Your mercy bring them quickly to the fullness of Your love. 
                May I also remember to pray for them throughout my life. Amen.
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
                Today we pray for the souls in purgatory - those who have died in God's grace but still need purification 
                before entering heaven. These souls are very dear to Jesus, and yet they must make retribution to His justice.
              </p>
              
              <p className="mb-4">
                Purgatory is not a place of punishment, but a place of purification. It's like a hospital where souls 
                are healed of their imperfections so they can enter heaven completely pure and holy. 
                The souls in purgatory are saved - they will go to heaven - but they need our prayers to help them get there faster.
              </p>
              
              <p className="mb-4">
                When we pray for the souls in purgatory, we are practicing the spiritual work of mercy. 
                We are helping our brothers and sisters who have gone before us. This is a beautiful act of love and charity.
              </p>
              
              <p className="mb-4">
                As we pray today, let us remember that one day we too may need the prayers of others. 
                Let us pray for the souls in purgatory with love and compassion, asking Jesus to pour out His mercy upon them 
                and bring them quickly to the fullness of His love.
              </p>
              
              <p>
                Remember that the souls in purgatory cannot pray for themselves, but they can pray for us. 
                When we pray for them, they become our intercessors in heaven. This is a beautiful exchange of love and prayer.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Love</h3>
              <p className="text-gray-700 text-sm">
                Pray for the souls in purgatory with genuine love and concern. Remember that they are your brothers and sisters in Christ, 
                and they need your prayers to help them reach heaven.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Offer Your Sufferings</h3>
              <p className="text-gray-700 text-sm">
                Offer your daily sufferings, sacrifices, and prayers for the souls in purgatory. 
                This is a powerful way to help them and to grow in holiness yourself.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Attend Mass</h3>
              <p className="text-gray-700 text-sm">
                Have Masses said for the souls in purgatory. The Holy Sacrifice of the Mass is the most powerful prayer 
                we can offer for them.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Live a Holy Life</h3>
              <p className="text-gray-700 text-sm">
                Live a holy life so that when you die, you may need less time in purgatory. 
                This is the best way to help yourself and others.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Divine Mercy of Jesus bring comfort and relief to the souls in purgatory, 
            and may they quickly reach the fullness of His love in heaven. May we always remember to pray for them, 
            and may we live holy lives so that we may one day join them in the eternal joy of heaven. 
            Trust in His mercy and know that He will never abandon you.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Divine Mercy Novena - Day 8: Grace"
          text="Join me in praying the Divine Mercy Novena - Day 8 focusing on Grace."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/divine-mercy/day-7"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 7: Souls Who Especially Venerate Mary
          </Link>
          
          <Link 
            href="/novenas/divine-mercy/day-9"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 9: Lukewarm Souls →
          </Link>
        </div>
      </div>
    </div>
  )
} 