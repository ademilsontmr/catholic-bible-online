import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. John the Baptist - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. John the Baptist, the forerunner of Christ who baptized Jesus.',
  keywords: [
    'st john the baptist',
    'saint john the baptist',
    'st john the baptist biography',
    'st john the baptist feast day',
    'st john the baptist patron saint',
    'forerunner of christ',
    'baptism of jesus',
    'june 24 feast day',
    'catholic saints'
  ],
  openGraph: {
    title: 'St. John the Baptist - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John the Baptist, the forerunner of Christ who baptized Jesus.',
    url: 'https://catholicbibleonline.com/saints/st-john-the-baptist',
  },
  twitter: {
    title: 'St. John the Baptist - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John the Baptist, the forerunner of Christ who baptized Jesus.',
  }
}

export default function StJohnTheBaptistPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🕊️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. John the Baptist
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Forerunner of Christ, Baptizer of Jesus, Voice in the Wilderness
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. John the Baptist</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">June 24</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🕊️</div>
              <div className="text-sm text-gray-600">Forerunner</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. John the Baptist</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                John the Baptist was a contemporary of Christ who was known for evangelization and his baptizing of Jesus Christ. John the Baptist was born through the intercession of God to Zachariah and Elizabeth, who was otherwise too old to bear children. According to scriptures, the Angel Gabriel visited Elizabeth and Zachariah to tell them they would have a son and that they should name him John.
              </p>
              
              <p className="mb-6">
                Zachariah was skeptical and for this he was rendered mute until the time his son was born and named John, in fulfillment of God's will. When Elizabeth was pregnant with John, she was visited by Mary, and John leapt in her womb. This revealed to Elizabeth that the child Mary carried was to be the Son of God.
              </p>
              
              <p className="mb-6">
                John began public ministry around 30 AD, and was known for attracting large crowds across the province of Judaea and around the Jordan River. When Jesus came to him to be baptized, John recognized him and said, "It is I who need baptism from you." Jesus told John to baptize Him anyway, which he did, whereupon the heavens opened, and the Spirit of God was seen like a dove. The voice of God spoke, saying, "This is my beloved Son, in whom I am well pleased."
              </p>
              
              <p>
                John instructed his followers to turn to Christ, calling Him the "Lamb of God" and these people were among the first Christians. Following his baptism of Christ, John's popularity grew so much that he alarmed King Herod. Herod ordered him arrested and imprisoned.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. John the Baptist: Voice in the Wilderness</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Preparation for the Messiah</h3>
              <p className="mb-6">
                John the Baptist's primary mission was to prepare the way for the coming of the Messiah. He preached repentance and baptized people in the Jordan River, calling them to turn away from sin and prepare their hearts for the coming of Christ. His message was simple yet powerful: "Repent, for the kingdom of heaven is at hand."
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Baptism of Jesus</h3>
              <p className="mb-6">
                The most significant moment in John's ministry was the baptism of Jesus Christ. When Jesus came to be baptized, John recognized Him as the Messiah and initially refused, saying he was unworthy. However, Jesus insisted, and at the moment of baptism, the heavens opened, the Holy Spirit descended like a dove, and the voice of God proclaimed Jesus as His beloved Son. This event marked the beginning of Jesus' public ministry.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courageous Witness</h3>
              <p className="mb-6">
                John spoke with Herod on several occasions and condemned his marriage to his half-brother's wife. This condemnation would be his downfall as King Herod promised to grant a wish to his daughter. In revenge for John the Baptist's condemnation of her mother's scandalous marriage to Herod, she asked for John's head. King Herod reluctantly obliged. John the Baptist died sometime between 33 and 36 AD.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Humility</h3>
              <p>
                John the Baptist is remembered for his humility and his willingness to decrease so that Christ might increase. He famously said, "He must increase, but I must decrease." His life serves as a model of selflessness and dedication to God's will, even when it leads to suffering and death. His courage in speaking truth to power, even at the cost of his life, continues to inspire Christians today.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">June 24</div>
              <p className="text-gray-600">Nativity of St. John the Baptist</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. John the Baptist is celebrated on June 24th, commemorating his birth. This date was chosen because it falls six months before Christmas, reflecting the Gospel account that John was born six months before Jesus. The anniversary of his death is August 29 and is sometimes celebrated with a second feast. John the Baptist is one of the few saints whose birth is celebrated liturgically, along with Jesus and the Virgin Mary.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. John the Baptist's role as the forerunner of Christ and his mission to prepare the way for the Messiah. His feast day serves as a reminder of the importance of repentance and preparation for encountering Christ. Many people pray for the grace to recognize Christ in their lives and to have the courage to speak truth to power, as John did.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. John the Baptist for his intercession in matters of repentance, preparation for encountering Christ, and courage in witnessing to the truth. Many people also pray for the grace to decrease so that Christ might increase in their lives.
              </p>
            </div>
          </div>
        </section>

        {/* Patronage Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🛡️ Patronage</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Primary Patronages</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Jordan:</strong> Patron of the country where he baptized</li>
                  <li>• <strong>Puerto Rico:</strong> Patron of the island nation</li>
                  <li>• <strong>French Canada:</strong> Patron of French Canadian regions</li>
                  <li>• <strong>Baptism:</strong> Patron of the sacrament he administered</li>
                  <li>• <strong>Monks and Nuns:</strong> Patron of religious life</li>
                  <li>• <strong>Tailors:</strong> Patron of those who work with cloth</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Repentance:</strong> Helper in turning away from sin</li>
                  <li>• <strong>Preparation:</strong> Patron of preparing for Christ</li>
                  <li>• <strong>Courage:</strong> Helper in speaking truth to power</li>
                  <li>• <strong>Humility:</strong> Patron of decreasing for Christ</li>
                  <li>• <strong>Witness:</strong> Helper in bearing witness to truth</li>
                  <li>• <strong>Conversion:</strong> Patron of turning hearts to God</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Prayers Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🙏 Prayers</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="space-y-8">
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. John the Baptist</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. John the Baptist, forerunner of Christ and voice crying in the wilderness, 
                    help us to prepare our hearts for the coming of the Lord. Through your intercession, may we 
                    have the courage to repent of our sins and the humility to decrease so that Christ might increase. 
                    Help us to be bold witnesses of the truth, even when it costs us dearly. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. John the Baptist, pray for us!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Saints Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">Related Saints</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/saints/st-elizabeth" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Elizabeth
                </h3>
                <p className="text-gray-700 text-sm">
                  Mother of St. John the Baptist and cousin of the Virgin Mary.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-zachariah" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Zachariah
                </h3>
                <p className="text-gray-700 text-sm">
                  Father of St. John the Baptist and husband of St. Elizabeth.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-mary" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Marian Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Mary
                </h3>
                <p className="text-gray-700 text-sm">
                  Mother of Jesus who visited Elizabeth when both were pregnant.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <Link
            href="/saints"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to All Saints
          </Link>
        </div>
      </div>
    </div>
  )
} 