import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to Saint Gerard - Day 2: Divine Mercy',
  description: "Pray the Novena to Saint Gerard - Day 2 focusing on Divine Mercy. Join in praying the traditional novena to seek St. Gerard's intercession.",
  keywords: [
    'novena to saint gerard day 2',
    'st gerard novena day 2',
    'gerard novena day 2',
    'st gerard prayer day 2',
    'day 2 st gerard novena',
    'divine mercy prayer',
    'st gerard novena divine mercy',
    'gerard novena divine mercy'
  ],
  openGraph: {
    title: 'Novena to Saint Gerard - Day 2: Divine Mercy',
    description: 'Pray the Novena to Saint Gerard - Day 2 focusing on Divine Mercy. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-gerard/day-2',
  },
  twitter: {
    title: 'Novena to Saint Gerard - Day 2: Divine Mercy',
    description: 'Pray the Novena to Saint Gerard - Day 2 focusing on Divine Mercy. Join in praying the traditional novena.',
  }
}

export default function StGerardNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to Saint Gerard – Day 2: Divine Mercy
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena to Saint Gerard to seek his intercession for motherhood and family needs.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/st-gerard" className="hover:text-gray-700">Novena to Saint Gerard</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Divine Mercy</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we focus on St. Gerard's powerful intercession before the throne of Divine Mercy. He is always so ready to help those who have recourse to him and comes before the throne of Divine Mercy on our behalf.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>First Prayer</strong>
              </p>

              <p className="mb-6">
                Most Blessed Trinity, I, Your child, thank You for all the gifts and privileges which You granted to St. Gerard, especially for those virtues with which You adorned him on earth and the glory which You now impart to him in heaven. Accomplish Your work, Oh Lord, so that Your kingdom may come about on earth. Through his merits, in union with those of Jesus and Mary, grant me the grace for which I ask.... (Mention your request)
              </p>

              <p className="mb-6">
                And you, my powerful intercessor, St. Gerard, always so ready to help those who have recourse to you, pray for me. Come before the throne of Divine Mercy and do not leave without being heard. To you I confide this important and urgent affair.... Graciously take my cause in hand and do not let me end this novena without having experienced in some way the effects of your intercession. Amen.
              </p>

              <p className="mb-6">
                <strong>Second Prayer: For the Gift of Children</strong>
              </p>

              <p className="mb-6">
                O good St. Gerard, powerful intercessor before the throne of God, wonder-worker of our day, I call upon you and seek your help. While on earth, you always fulfilled God's designs; help me, too, always do God's holy will. Beseech the master of life, from whom all parenthood proceeds, to bless me with offspring, that I may raise up children to God in this life and heirs to the kingdom of God's glory in the life to come. Amen.
              </p>

              <p className="mb-6">
                <strong>Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Hail Mary, full of grace, the Lord is with thee; blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Prayer to St. Gerard</strong><br/>
                O good St. Gerard, powerful intercessor before the throne of God, wonder-worker of our day, I call upon you and seek your help. While on earth, you always fulfilled God's designs; help me, too, always do God's holy will. Beseech the master of life, from whom all parenthood proceeds, to bless me with offspring, that I may raise up children to God in this life and heirs to the kingdom of God's glory in the life to come. Amen.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              St. Gerard's intercession before the throne of Divine Mercy shows us that God's mercy is always available to us through the prayers of His saints. We can trust that St. Gerard will not leave without being heard.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of St. Gerard's life and virtues, let us ask ourselves how we can 
              apply these lessons to our own lives and grow in holiness.
            </p>
            <p>
              May St. Gerard's intercession help us to overcome our weaknesses and to grow stronger in our faith 
              and love for God and neighbor.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in St. Gerard</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. Gerard's powerful intercession and his ability to help you.
                Turn to him with confidence in every need, especially for family matters and motherhood.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. St. Gerard will not fail to help 
                those who turn to him with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. Gerard. He wants to help you 
                with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. Gerard for his intercession and for the graces you receive. 
                Gratitude opens our hearts to receive more blessings and miracles.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Saint Gerard, help me to trust in your powerful intercession before the throne of Divine Mercy. May your prayers on my behalf bring me closer to God and His mercy. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena to Saint Gerard - Day 2: Divine Mercy" 
            url="/novenas/st-gerard/day-2"
            excerpt="Join me in praying the Novena to Saint Gerard - Day 2 focusing on Divine Mercy." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/st-gerard/day-1"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 1: Gratitude for Gifts
          </Link>
          
          
          <Link
            href="/novenas/st-gerard/day-3"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 3: God's Will →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
