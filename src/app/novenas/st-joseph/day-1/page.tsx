import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to St. Joseph - Day 1: Foster Father of Jesus',
  description: "Pray the Novena to St. Joseph - Day 1 focusing on Foster Father of Jesus. Join in praying the traditional novena to seek St. Joseph's intercession.",
  keywords: [
    'novena to st joseph day 1',
    'st joseph novena day 1',
    'joseph novena day 1',
    'st joseph prayer day 1',
    'day 1 st joseph novena',
    'foster father of jesus prayer',
    'st joseph novena foster father of jesus',
    'joseph novena foster father of jesus'
  ],
  openGraph: {
    title: 'Novena to St. Joseph - Day 1: Foster Father of Jesus',
    description: 'Pray the Novena to St. Joseph - Day 1 focusing on Foster Father of Jesus. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-joseph/day-1',
  },
  twitter: {
    title: 'Novena to St. Joseph - Day 1: Foster Father of Jesus',
    description: 'Pray the Novena to St. Joseph - Day 1 focusing on Foster Father of Jesus. Join in praying the traditional novena.',
  }
}

export default function StJosephNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to St. Joseph – Day 1: Foster Father of Jesus
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena to St. Joseph to seek his intercession and protection.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/st-joseph" className="hover:text-gray-700">Novena to St. Joseph</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Foster Father of Jesus</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena to St. Joseph, we focus on his role as the foster father of Jesus. St. Joseph was privileged to share in the mystery of the Incarnation as the foster-father of Jesus, providing protection, support, and upbringing for the Divine Child.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 1</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              
              <p className="mb-6">
                <strong>Saint Joseph, you were privileged to share in the mystery of the Incarnation as the foster-father of Jesus.</strong> Mary alone was directly connected with the fulfillment of the mystery, in that she gave her consent to Christ's conception and allowed the Holy Spirit to form the sacred humanity of Jesus from her blood. You had a part in this mystery in an indirect manner, by fulfilling the condition necessary for the Incarnation -- the protection of Mary's virginity before and during your married life with her. You made the virginal marriage possible, and this was a part of God's plan, foreseen, willed, and decreed from all eternity.
              </p>
              

              <p className="mb-6">
                <strong>Saint Joseph, I thank God for your privilege of having been chosen by God to be the foster-father of His Divine Son.</strong> As a token of your own gratitude to God for this your greatest privilege, obtain for me the grace of a very devoted love for Jesus Christ, my God and my Savior. Help me to serve Him with some of the self-sacrificing love and devotion which you had while on this earth with Him.
              </p>

              <p className="mb-6">
                <strong>Saint Joseph, I, your unworthy child, greet you.</strong> You are the faithful protector and intercessor of all who love and venerate you. You know that I have special confidence in you and that, after Jesus and Mary, I place all my hope of salvation in you, for you are especially powerful with God and will never abandon your faithful servants.
              </p>

              <p className="mb-6">
                <strong>Glorious Saint Joseph, spouse of the Immaculate Virgin,</strong> obtain for me a pure, humble, charitable mind, and perfect resignation to the divine Will. Be my guide, my father, and my model through life that I may merit to die as you did in the arms of Jesus and Mary.
              </p>

              <p className="mb-6">
                <strong>Loving Saint Joseph, faithful follower of Jesus Christ,</strong> I raise my heart to you to implore your powerful intercession in obtaining from the Divine Heart of Jesus all the graces necessary for my spiritual and temporal welfare, particularly the grace of a happy death, and the special grace I now implore:
              </p>

              <p className="mb-6">
                <strong>(Mention your request).</strong>
              </p>

              <p className="mb-6">
                <strong>Guardian of the Word Incarnate, I feel confident that your prayers in my behalf will be graciously heard before the throne of God. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>MEMORARE</strong>
              </p>

              <p className="mb-6">
                <strong>Remember, most pure spouse of Mary, ever Virgin, my loving protector, Saint Joseph,</strong> that no one ever had recourse to your protection or asked for your aid without obtaining relief. Confiding, therefore, in your goodness, I come before you and humbly implore you. Despise not my petitions, foster-father of the Redeemer, but graciously receive them. Amen.
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
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              St. Joseph's role as foster father of Jesus shows us the importance of fatherhood and the sacred duty of protecting and providing for children. His love for Jesus was a reflection of God's love for us.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of St. Joseph's life and teaching, let us ask ourselves how we can 
              apply these lessons to our own lives and grow in holiness.
            </p>
            <p>
              May St. Joseph's intercession help us to overcome our weaknesses and to grow stronger in our faith 
              and love for God and neighbor.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in St. Joseph</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. Joseph's powerful intercession and his ability to help you.
                Turn to him with confidence in every need, especially for family and work matters.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. St. Joseph will not fail to help 
                those who turn to him with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. Joseph. He wants to help you 
                with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. Joseph for his intercession and for the graces you receive. 
                Gratitude opens our hearts to receive more blessings and miracles.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O St. Joseph, foster father of Jesus, help me to imitate your love and devotion to the Divine Child. May your example of protecting and providing for Jesus inspire me to care for others with the same love. Guide me through these nine days of prayer, that I may grow closer to God and experience His grace in my life. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Novena to St. Joseph - Day 1: Foster Father of Jesus"
          text="Join me in praying the Novena to St. Joseph - Day 1 focusing on Foster Father of Jesus."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          <div></div>
          
          <Link
            href="/novenas/st-joseph/day-2"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 2: Virginal Husband of Mary →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
