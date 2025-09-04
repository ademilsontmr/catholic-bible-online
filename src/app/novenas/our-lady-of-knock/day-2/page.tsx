import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to Our Lady of Knock - Day 2: Hope in Distress',
  description: "Pray Novena to Our Lady of Knock - Day 2 focusing on Hope in Distress. Join in praying the traditional novena for special intentions.",
  keywords: [
    'novena to our lady of knock day 2',
    'our lady of knock novena day 2',
    'our lady of knock day 2',
    'day 2 our lady of knock novena',
    'hope in distress prayer',
    'knock novena hope in distress',
    'our lady of knock hope in distress',
    'blessed virgin mary novena day 2'
  ],
  openGraph: {
    title: 'Novena to Our Lady of Knock - Day 2: Hope in Distress',
    description: 'Pray Novena to Our Lady of Knock - Day 2 focusing on Hope in Distress. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-knock/day-2',
  },
  twitter: {
    title: 'Novena to Our Lady of Knock - Day 2: Hope in Distress',
    description: 'Pray Novena to Our Lady of Knock - Day 2 focusing on Hope in Distress. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfKnockNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to Our Lady of Knock – Day 2: Hope in Distress
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying Novena to Our Lady of Knock with devotion and trust.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-knock" className="hover:text-gray-700">Novena to Our Lady of Knock</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Hope in Distress</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we focus on praying for hope in times of distress and sorrow. We remember that Our Lady of Knock gave hope to her people in times of distress and comforted them in sorrow.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold mb-4">Our Lady of Knock Novena Prayer</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Opening Prayer</h4>
                <p className="mb-4">
                  In the name of the Father, and of the Son, and of the Holy Spirit. <strong>Amen.</strong>
                </p>
                <p className="mb-4">
                  Give praise to the Father Almighty,<br />
                  To His Son, Jesus Christ the Lord,<br />
                  To the Spirit who lives in our hearts,<br />
                  both now and forever. <strong>Amen.</strong>
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Main Prayer</h4>
                <p className="mb-4">
                  Our Lady of Knock, Queen of Ireland, you gave hope to your people in a time of distress, and comforted them in sorrow. You have inspired countless pilgrims to pray with confidence to your divine Son, remembering His promise, "Ask and you shall receive, seek and you shall find."
                </p>
                <p className="mb-4">
                  Help me to remember that we are all pilgrims on the road to heaven. Fill me with love and concern for my brothers and sisters in Christ, especially those who live with me. Comfort me when I am sick, lonely or depressed.
                </p>
                <p className="mb-4">
                  Teach me how to take part ever more reverently in the Holy Mass. Give me a greater love of Jesus in the Blessed Sacrament. Pray for me now, and at the hour of my death. <strong>Amen.</strong>
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Lamb of God</h4>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="mb-2">
                    <strong>Lamb of God,</strong> you take away the sins of the world;<br />
                    <strong>Have mercy on us.</strong>
                  </p>
                  <p className="mb-2">
                    <strong>Lamb of God,</strong> you take away the sins of the world,<br />
                    <strong>Have mercy of us.</strong>
                  </p>
                  <p>
                    <strong>Lamb of God,</strong> you take away the sins of the world,<br />
                    <strong>Grant us peace.</strong>
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Prayer to St. Joseph</h4>
                <p className="mb-4">
                  <strong>St. Joseph,</strong><br />
                  Chosen by God to be The Husband of Mary,<br />
                  The Protector of the Holy Family,<br />
                  The Guardian of the Church.<br />
                  Protect our families<br />
                  In their work and recreation<br />
                  And Guard us on our journey through life.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="italic">(Repeat - Lamb of God, etc.)</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Prayer to St. John</h4>
                <p className="mb-4">
                  <strong>St. John,</strong><br />
                  Beloved Disciple of the Lord,<br />
                  Faithful priest,<br />
                  Teacher of the Word of God.<br />
                  Help us to hunger for the Word.<br />
                  To be loyal to the Mass<br />
                  And to love one another.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="italic">(Repeat - Lamb of God, etc.)</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Litany to Our Lady of Knock</h4>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="mb-2">
                    <strong>Our Lady of Knock</strong> Pray for us<br />
                    <strong>Refuge of Sinners</strong> Pray for us<br />
                    <strong>Queen Assumed into Heaven</strong> Pray for us<br />
                    <strong>Mother of Nazareth</strong> Pray for us<br />
                    <strong>Queen of Virgins</strong> Pray for us<br />
                    <strong>Help of Christians</strong> Pray for us<br />
                    <strong>Health of the Sick</strong> Pray for us<br />
                    <strong>Queen of Peace</strong> Pray for us<br />
                    <strong>Our Lady, Queen and Mother</strong> Pray for us<br />
                    <strong>Our Lady, Mother of the Church</strong> Pray for us
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Special Intentions</h4>
                <p className="mb-4 italic">
                  <em>(Here mention your own special intentions)</em>
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Closing Prayer</h4>
                <p className="mb-4">
                  With the Angels and Saints let us pray:<br />
                  Give praise to the Father Almighty,<br />
                  To His Son, Jesus Christ the Lord.<br />
                  To the Spirit who lives in our hearts,<br />
                  Both now and forever. <strong>Amen.</strong>
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Important Note</h4>
                <p className="mb-4">
                  <strong>The Rosary or Mass is recommended along with this novena.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Our Lady of Knock is known for giving hope to her people in times of distress. She has inspired countless pilgrims to pray with confidence to her divine Son, remembering His promise.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of Our Lady of Knock devotion, let us ask ourselves how we can 
              better honor her and trust in her power to provide guidance and comfort in all our needs.
            </p>
            <p>
              May Our Lady of Knock continue to bless us with her maternal care and help us grow in our 
              devotion to her and her divine Son.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Confidence</h3>
              <p className="text-gray-700 text-sm">
                Approach Our Lady of Knock with confidence, remembering Jesus' promise: 
                "Ask and you shall receive, seek and you shall find."
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Remember We Are Pilgrims</h3>
              <p className="text-gray-700 text-sm">
                Remember that we are all pilgrims on the road to heaven. 
                Pray with humility and trust in Our Lady's guidance.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Love for Others</h3>
              <p className="text-gray-700 text-sm">
                Pray with love and concern for your brothers and sisters in Christ, 
                especially those who live with you.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Reverent Mass Participation</h3>
              <p className="text-gray-700 text-sm">
                Ask Our Lady to help you participate more reverently in the Holy Mass 
                and develop greater love for Jesus in the Blessed Sacrament.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Lady of Hope, help us to find hope in times of distress and sorrow. May we always turn to you for comfort and guidance. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena to Our Lady of Knock - Day 2: Hope in Distress" 
            url="/novenas/our-lady-of-knock/day-2"
            excerpt="Join me in praying Novena to Our Lady of Knock - Day 2 focusing on Hope in Distress." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/our-lady-of-knock/day-1"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 1: Queen of Ireland
          </Link>
          
          
          <Link
            href="/novenas/our-lady-of-knock/day-3"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 3: Pilgrims on the Road →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
