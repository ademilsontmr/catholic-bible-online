import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to the Holy Family - Day 4: Family Charity',
  description: "Pray the Novena to the Holy Family - Day 4 focusing on Family Charity. Join in praying the traditional novena to seek the intercession of Jesus, Mary, and Joseph.",
  keywords: [
    'novena to the holy family day 4',
    'holy family novena day 4',
    'jesus mary joseph novena day 4',
    'holy family prayer day 4',
    'day 4 holy family novena',
    'family charity prayer',
    'holy family novena family charity',
    'jesus mary joseph novena family charity'
  ],
  openGraph: {
    title: 'Novena to the Holy Family - Day 4: Family Charity',
    description: 'Pray the Novena to the Holy Family - Day 4 focusing on Family Charity. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/holy-family/day-4',
  },
  twitter: {
    title: 'Novena to the Holy Family - Day 4: Family Charity',
    description: 'Pray the Novena to the Holy Family - Day 4 focusing on Family Charity. Join in praying the traditional novena.',
  }
}

export default function HolyFamilyNovenaDay4Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to the Holy Family – Day 4: Family Charity
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena to the Holy Family to seek the intercession of Jesus, Mary, and Joseph.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/holy-family" className="hover:text-gray-700">Novena to the Holy Family</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 4</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-indigo-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Family Charity</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we focus on praying for the grace to love our family and others in mutual charity. We ask the Holy Family to help us establish perfect harmony in our relationships.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 4</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold mb-4">Novena Prayer:</h3>
              
              <p className="mb-4">
                Jesus, Mary, and Joseph, bless me and grant me the grace of loving Holy Church as I should, above every earthly thing, and of ever showing my love by deeds.
              </p>

              <p className="mb-4">
                Jesus, Mary, and Joseph, bless me and grant me the grace of openly professing as I should, with courage and without human respect, the faith that I received as your gift in holy Baptism.
              </p>

              <p className="mb-4">
                Jesus, Mary, and Joseph, bless me and grant me the grace of sharing as I should in the defense and propagation of the Faith when duty calls, whether by word or by the sacrifice of my possessions and my life.
              </p>

              <p className="mb-4">
                Jesus, Mary, and Joseph, bless me and grant me the grace of loving my family and others in mutual charity as I should, and establish us in perfect harmony of thought, will, and action, under the rule and guidance of the shepherds of the Church.
              </p>

              <p className="mb-4">
                Jesus, Mary, and Joseph, bless me and grant me the grace of conforming my life fully as I should to the commandments of God's law and those of His Holy Church, so as to live always in that charity which they set forth.
              </p>

              <p className="mb-6">
                Jesus, Mary, and Joseph, I ask in particular this special favor:<br />
                <em>(Mention your favor).</em>
              </p>

              <h3 className="text-xl font-semibold mb-4">Dedication of One's Family:</h3>
              
              <p className="mb-4">
                Most loving Jesus, by Your sublime and beautiful virtues of humility, obedience, poverty, modesty, charity, patience, and gentleness, You blessed with peace and happiness the family which You chose on earth. In Your mercy look upon my family. We belong to You, for we have received Your many blessings over many years and we entrust ourselves to Your loving care.
              </p>

              <p className="mb-4">
                Look upon my family in Your loving kindness, preserve us from danger, give us help in time of need, and grant us the grace to persevere to the end in imitation of Your holy Family, so that having revered You and loved You faithfully on earth, we may praise You eternally in heaven.
              </p>

              <p className="mb-6">
                Mary, dearest Mother, to your intercession we have recourse, knowing that your Divine Son will hear your prayers. Glorious patriarch, Saint Joseph, help us by your powerful prayers and offer our prayers to Jesus through Mary's hands. Amen.
              </p>

              <h3 className="text-xl font-semibold mb-4">Prayer:</h3>
              
              <p className="mb-4">
                Lord Jesus Christ, being subject to Mary and Joseph, You sanctified family life by Your beautiful virtues. Grant that we, with the help of Mary and Joseph, may be taught by the example of Your holy Family, and may after death enjoy its everlasting companionship.
              </p>

              <p>
                Lord Jesus, help us ever to follow the example of Your holy Family, that in the hour of our death Your glorious Virgin Mother together with Saint Joseph may come to meet us, and we may be worthy to be received by You into the everlasting joys of heaven. You live and reign forever. Amen.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Holy Family is the perfect model of mutual charity. Jesus, Mary, and Joseph loved each other completely and selflessly. Their love extended beyond their family to all those they encountered.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of the Holy Family's life and virtues, let us ask ourselves how we can 
              apply these lessons to our own families and grow in holiness.
            </p>
            <p>
              May the Holy Family continue to be our model and intercessor, helping us to build strong, 
              faith-filled families that reflect their love and harmony.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-indigo-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in the Holy Family</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in the intercession of Jesus, Mary, and Joseph.
                Turn to the Holy Family with confidence for all family needs and spiritual growth.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. The Holy Family will not fail to help 
                those who turn to them with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific family needs and intentions to the Holy Family. They want to help you 
                with the particular difficulties your family faces.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank the Holy Family for their intercession and for the graces you receive. 
                Gratitude opens our hearts to receive more blessings and family harmony.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-indigo-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Holy Family, teach me to love my family and others in mutual charity. May perfect harmony reign in all my relationships. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena to the Holy Family - Day 4: Family Charity" 
            url="/novenas/holy-family/day-4"
            excerpt="Join me in praying the Novena to the Holy Family - Day 4 focusing on Family Charity." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/holy-family/day-3"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 3: Defense of Faith
          </Link>
          
          
          <Link
            href="/novenas/holy-family/day-5"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 5: Harmony and Unity →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
