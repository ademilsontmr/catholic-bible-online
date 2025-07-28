import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of the Rosary Novena - Day 9: Church',
  description: 'Pray the Our Lady of the Rosary Novena - Day 9 focusing on Church. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of the rosary novena day 9',
    'rosary novena day 9',
    'mary novena day 9',
    'our lady novena day 9',
    'rosary prayer church',
    'day 9 rosary novena',
    'church mary prayer',
    'rosary novena church',
    'mary novena church'
  ],
  openGraph: {
    title: 'Our Lady of the Rosary Novena - Day 9: Church',
    description: 'Pray the Our Lady of the Rosary Novena - Day 9 focusing on Church. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-the-rosary/day-9',
  },
  twitter: {
    title: 'Our Lady of the Rosary Novena - Day 9: Church',
    description: 'Pray the Our Lady of the Rosary Novena - Day 9 focusing on Church. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfTheRosaryNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of the Rosary Novena – Day 9: Church
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Our Lady of the Rosary Novena to seek Mary's intercession and experience her maternal care.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-the-rosary" className="hover:text-gray-700">Our Lady of the Rosary Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Church</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of the Our Lady of the Rosary Novena, we pray for the Church and to always carry out God's will in our lives. 
            We remember how Pope Pius V urged all to pray the Rosary for the Church and the world.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Dear Lord, we thank You for giving us Your Mother as Our Lady of the Rosary.</strong> 
                Help us to turn to her as our mother in all our needs!
              </p>

              <p className="mb-6">
                <strong>Our Lady of the Rosary,</strong> the Christians faced grave danger from Muslim aggression when Pope Pius V sought your intercession during the Battle of Lepanto. He urged all to pray the Rosary for the Church and the world.
              </p>

              <p className="mb-6">
                <strong>Please bring all our needs before your Divine Son's throne.</strong> Today, we especially ask you to pray for the Church.
              </p>

              <p className="mb-6">
                <strong>Pray for us too, that we may always carry out God's will in our lives.</strong> Pray that we may grow in holiness and every virtue each day of our lives.
              </p>

              <p className="mb-6">
                <strong>We also ask in this novena for:</strong> (Mention your intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Lady of the Rosary, pray for us!</strong>
              </p>

              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
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
                Today we pray for the Church and to always carry out God's will in our lives. 
                We remember how Pope Pius V urged all to pray the Rosary for the Church and the world.
              </p>

              <p className="mb-4">
                The Christians faced grave danger from Muslim aggression when Pope Pius V sought Mary's intercession during the Battle of Lepanto. 
                He recognized that the Church was under threat and urged all Christians to pray the Rosary for the Church and the world.
              </p>

              <p className="mb-4">
                This teaches us the importance of praying for the Church and of carrying out God's will in our lives. 
                The Church is the Body of Christ on earth, and we are all called to be faithful members of this body. 
                When we carry out God's will in our lives, we are helping to build up the Church and bring glory to God.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to pray for the Church and for all its members. 
                Let us ask her to help us always carry out God's will in our lives and to grow in holiness and every virtue each day of our lives.
              </p>

              <p>
                Remember that we are all called to be saints and to grow in holiness. When we carry out God's will in our lives, 
                we are cooperating with His grace and growing closer to Him. Let us always strive to do God's will 
                and to grow in holiness and every virtue each day of our lives.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in Mary</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in Mary's maternal care and her ability to help you.
                Turn to her with confidence in every need.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                Mary will not fail to help those who turn to her with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to Mary.
                She wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Mary for her help and intercession.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Our Lady of the Rosary, pray for the Church and for all its members. Help us to always carry out God's will in our lives 
            and to grow in holiness and every virtue each day of our lives. Thank you for your powerful intercession 
            that helped protect the Church during the Battle of Lepanto. May we always be faithful members of the Church 
            and strive to grow in holiness each day. Amen.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Our Lady of the Rosary Novena! As you continue your spiritual journey, 
            may your heart be filled with devotion, faith, perseverance, prayer, courage, freedom, peace, conversion, and love for the Church. 
            May Our Lady of the Rosary continue to watch over you and help you in all your needs.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of the Rosary Novena - Day 9: Victory"
          text="Join me in praying the Our Lady of the Rosary Novena - Day 9 focusing on Victory."
        />

{/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link 
            href="/novenas/our-lady-of-the-rosary/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Conversion
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-the-rosary"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>
    </div>
  )
} 