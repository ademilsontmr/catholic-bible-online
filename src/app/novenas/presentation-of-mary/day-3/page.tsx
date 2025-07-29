import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'The Presentation of Mary Novena - Day 3: Infertility Suffering',
  description: 'Pray The Presentation of Mary Novena - Day 3 focusing on infertility suffering. Join in praying for dedication to God and service to priests.',
  keywords: [
    'presentation of mary novena day 3',
    'presentation mary novena day 3',
    'day 3 presentation of mary novena',
    'infertility suffering mary presentation'
  ],
  openGraph: {
    title: 'The Presentation of Mary Novena - Day 3: Infertility Suffering',
    description: 'Pray The Presentation of Mary Novena - Day 3 focusing on Infertility Suffering.',
    url: 'https://catholicbibleonline.com/novenas/presentation-of-mary/day-3',
  },
  twitter: {
    title: 'The Presentation of Mary Novena - Day 3: Infertility Suffering',
    description: 'Pray The Presentation of Mary Novena - Day 3 focusing on Infertility Suffering.',
  }
}

export default function PresentationOfMaryNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            The Presentation of Mary Novena – Day 3: Infertility Suffering
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Continue praying The Presentation of Mary Novena to honor Mary's dedication to God and grow in service to Him.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/presentation-of-mary" className="hover:text-gray-700">The Presentation of Mary Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-amber-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Infertility Suffering</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day, we pray for those suffering from infertility.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 3</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-4">O Mary, I beg of you to be close to all those who are suffering from infertility.</p>

              <p className="mb-4">Your mother knew the sting of infertility, Mary. As she waited for a child, she prayed. Just like Hannah with Samuel in the Old Testament! She prayed that if she received a child, she would offer him or her to the Lord.</p>

              <p className="mb-4">Eventually, her prayers were answered positively. But this isn't always the case for everyone.</p>

              <p className="mb-4">Mary, please be close to those who suffer this burden. Help them to know that there is nothing wrong with them or their marriage that this is happening. Guide them to get the medical help they need. Also offer them comfort in this heartache. Give their friends and family prudence to know what to say. And help them to be open to whatever God's will is for their family - adoption, spiritual parenthood, or some other ministry.</p>

              <p className="mb-6">
                <strong>Please also ask that you keep in mind my intentions:</strong>
              </p>

              <p className="mb-6">
                <strong>(State your intentions here)</strong>
              </p>

              
              <p className="mb-6">
                <strong>Mary, Mother of God, pray for us!</strong>
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
                Today we focus on infertility suffering. This aspect of honoring The Presentation of Mary helps us to grow in dedication to God 
                and to become more like Christ in our daily lives as we seek to serve Him and His priests.
              </p>
              <p className="mb-4">
                As we continue our Presentation of Mary Novena, let us remember that Mary's presentation in the Temple marked the beginning 
                of her dedicated service to God, and she can help us do the same.
              </p>
              <p>
                Let us ask Mary to help us be instruments of her love and grace in serving God, imitating her perfect example of dedication 
                and willingness to say yes to God's will.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Dedicated</h3>
              <p className="text-gray-700 text-sm">
                Dedicate yourself to God as Mary was dedicated in the Temple.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's will even when it seems challenging or scary.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Supportive</h3>
              <p className="text-gray-700 text-sm">
                Support and pray for priests who serve God and His people.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Studious</h3>
              <p className="text-gray-700 text-sm">
                Study God's word and allow it to change your heart and mind.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-amber-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Mary, most holy daughter of Saints Joachim and Anne, we thank You for this day of prayer and reflection. Help us to carry 
            Your grace and love into our service to God and to trust completely in Your powerful intercession. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="The Presentation of Mary Novena - Day 3: Infertility Suffering"
          text="Join me in praying The Presentation of Mary Novena - Day 3 focusing on infertility suffering."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/presentation-of-mary/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Children of the World
          </Link>
          
          
          
          <Link 
            href="/novenas/presentation-of-mary/day-4"
            className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
          >
            Day 4: Support for Priests →
          </Link>
          
        </div>
      </div>

      
    </div>
  )
}