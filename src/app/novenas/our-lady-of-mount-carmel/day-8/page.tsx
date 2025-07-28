import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Mount Carmel Novena - Day 8: Surrender',
  description: 'Pray the Our Lady of Mount Carmel Novena - Day 8 focusing on Surrender. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of mount carmel novena day 8',
    'mount carmel novena day 8',
    'mary novena day 8',
    'our lady novena day 8',
    'mount carmel prayer surrender',
    'day 8 mount carmel novena',
    'surrender mary prayer',
    'mount carmel novena surrender',
    'mary novena surrender'
  ],
  openGraph: {
    title: 'Our Lady of Mount Carmel Novena - Day 8: Surrender',
    description: 'Pray the Our Lady of Mount Carmel Novena - Day 8 focusing on Surrender. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-mount-carmel/day-8',
  },
  twitter: {
    title: 'Our Lady of Mount Carmel Novena - Day 8: Surrender',
    description: 'Pray the Our Lady of Mount Carmel Novena - Day 8 focusing on Surrender. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfMountCarmelNovenaDay8Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Mount Carmel Novena – Day 8: Surrender
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Our Lady of Mount Carmel Novena to seek Mary's intercession and experience her maternal care.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-mount-carmel" className="hover:text-gray-700">Our Lady of Mount Carmel Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 8</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Surrender</h2>
          <p className="text-gray-700 leading-relaxed">
            On this eighth day of the Our Lady of Mount Carmel Novena, we pray for the grace to surrender to God's will like Mary did. 
            We ask her to teach us to say yes in every moment, no matter the uncertainty, following her example of perfect surrender.
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
                <strong>Lord, Mary's yes brought salvation to the world.</strong> Help me trust Your will as she did.
              </p>

              <p className="mb-6">
                <strong>Our Lady of Mount Carmel,</strong> teach me to surrender to God's plan. Give me courage to say yes 
                in every moment, no matter the uncertainty.
              </p>

              <p className="mb-6">
                <strong>Please pray for these intentions:</strong> (State your intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Lady of Mount Carmel, pray for us!</strong>
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
                Today we pray for the grace to surrender to God's will like Mary did. Mary's yes to God's plan 
                brought salvation to the world, and we are called to follow her example.
              </p>

              <p className="mb-4">
                When the angel Gabriel appeared to Mary and told her that she would be the mother of the Son of God, 
                she could have said no. She could have been afraid or uncertain about what this would mean for her life. 
                But instead, she said yes: "Behold, I am the handmaid of the Lord; let it be done to me according to your word."
              </p>

              <p className="mb-4">
                Mary's yes was not just a one-time event. Throughout her life, she continued to say yes to God's will, 
                even when it meant suffering and pain. She said yes when she had to flee to Egypt with Joseph and the baby Jesus. 
                She said yes when she stood at the foot of the cross and watched her Son die.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to teach us to surrender to God's plan like she did. 
                Let us ask her to give us the courage to say yes to God's will, even when we don't understand 
                what it means or when it seems difficult or uncertain.
              </p>

              <p>
                Remember that God's plan for us is always good, even when we don't understand it. 
                Mary trusted in God's plan, and we are called to do the same. When we surrender to God's will, 
                we open ourselves to His grace and His love.
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
            Our Lady of Mount Carmel, teach us to surrender to God's will like you did. Give us the courage 
            to say yes to God's plan, even when we don't understand it or when it seems difficult. 
            Help us to trust that God's plan for us is always good and that He will give us the grace 
            we need to follow it. May we always remember that your yes brought salvation to the world, 
            and may we follow your example of perfect surrender. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Mount Carmel Novena - Day 8: Grace"
          text="Join me in praying the Our Lady of Mount Carmel Novena - Day 8 focusing on Grace."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-mount-carmel/day-7"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 7: Healing
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-mount-carmel/day-9"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 9: Devotion →
          </Link>
        </div>
      </div>
    </div>
  )
} 