import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Longinus - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Longinus, the centurion who pierced the side of Christ and was converted by His blood.',
  keywords: [
    'st longinus',
    'saint longinus',
    'centurion cross',
    'st longinus biography',
    'st longinus feast day',
    'st longinus patron saint',
    'holy lance',
    'catholic saints',
    'march 15 feast day'
  ],
  openGraph: {
    title: 'St. Longinus - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Longinus, the centurion who pierced the side of Christ and was converted by His blood.',
    url: 'https://catholicbibleonline.com/saints/st-longinus',
  },
  twitter: {
    title: 'St. Longinus - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Longinus, the centurion who pierced the side of Christ and was converted by His blood.',
  }
}

export default function StLonginusPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Longinus
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            The Centurion Who Pierced Christ's Side, Convert and Martyr
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Longinus</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">March 15</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Martyr Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Longinus</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Longinus is the centurion who pierced the side of Our Lord while 
                He was hanging on the Cross. This momentous event, recorded in the 
                Gospel of John, marked the beginning of a remarkable journey of conversion 
                and faith that would transform this Roman soldier into a saint.
              </p>
              
              <p className="mb-6">
                St. Longinus, who was nearly blind, was healed when some of the blood 
                and water from Jesus fell into his eyes. This miraculous healing was 
                not only physical but spiritual, as it opened his eyes to the truth 
                of who Jesus truly was. It was then he exclaimed "Indeed, this was 
                the Son of God!" [Mark 15:39], becoming one of the first to publicly 
                acknowledge the divinity of Christ.
              </p>
              
              <p className="mb-6">
                St. Longinus then converted, left the army, took instruction from 
                the apostles and became a monk in Cappadocia. His conversion was complete 
                and radical - from a Roman centurion who had participated in the crucifixion 
                of Christ to a devoted follower who would give his life for the faith.
              </p>
              
              <p className="mb-6">
                There he was arrested for his faith, his teeth forced out and tongue 
                cut off. However, St. Longinus miraculously continued to speak clearly 
                and managed to destroy several idols in the presence of the governor. 
                This miracle demonstrated the power of God working through him and 
                his unwavering faith despite the brutal torture he endured.
              </p>
              
              <p>
                The governor, who was made blind by the demons that came from the 
                idols, had his sight restored when St. Longinus was being beheaded, 
                because his blood came in contact with the governor's eyes. This final 
                miracle, echoing the healing that Longinus himself had received from 
                Christ's blood, completed the circle of divine grace and mercy.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Longinus: Witness to the Cross</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Witness to the Crucifixion</h3>
              <p className="mb-6">
                St. Longinus's legacy begins with his unique role as the centurion 
                who pierced the side of Christ, fulfilling the prophecy of Zechariah 
                and confirming the death of Jesus. His testimony, "Indeed, this was 
                the Son of God!" recorded in the Gospel of Mark, stands as one of 
                the most powerful confessions of Christ's divinity in the New Testament.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Conversion</h3>
              <p className="mb-6">
                St. Longinus's conversion story is a powerful example of God's grace 
                transforming even those who have participated in the greatest of sins. 
                From being nearly blind and spiritually blind, he received both physical 
                and spiritual sight through the blood of Christ, demonstrating that 
                no one is beyond the reach of God's mercy and love.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courageous Martyr</h3>
              <p className="mb-6">
                St. Longinus's martyrdom shows the depth of his conversion and the 
                strength of his faith. Despite being tortured and mutilated, he continued 
                to speak clearly and destroy idols, showing that the power of God 
                working through him was greater than any human suffering or obstacle.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Keeper of the Holy Lance</h3>
              <p>
                St. Longinus's connection to the Holy Lance (the Spear of Destiny) 
                has made him a significant figure in Christian tradition. The lance 
                he used to pierce Christ's side has become one of the most revered 
                relics of the Passion, symbolizing the moment when blood and water 
                flowed from the side of Christ, representing the sacraments of Baptism 
                and the Eucharist.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-red-600 mb-2">March 15</div>
              <p className="text-gray-600">Feast of St. Longinus</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Longinus is celebrated on March 15th, during the 
                season of Lent when the Church prepares for the commemoration of 
                Christ's Passion and Death. This timing is particularly appropriate 
                as it connects us to the events of Good Friday and the crucifixion 
                of Our Lord.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Longinus, many people reflect on the power 
                of conversion and the mercy of God. Churches may hold special services 
                focusing on the Passion of Christ and the role of St. Longinus as 
                a witness to the crucifixion. Many pray for the grace of conversion 
                and the courage to bear witness to Christ in their own lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of spiritual 
                sight, for the courage to bear witness to Christ, and for the grace 
                to recognize God's presence in our lives. Many also pray for those 
                who are spiritually blind or who have participated in acts of violence 
                or sin, asking for St. Longinus's intercession in their conversion.
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
                  <li>• <strong>Soldiers:</strong> Patron of military personnel</li>
                  <li>• <strong>Eye Problems:</strong> Patron of those with vision issues</li>
                  <li>• <strong>Conversion:</strong> Patron of converts to the faith</li>
                  <li>• <strong>Witnesses:</strong> Patron of those who bear witness</li>
                  <li>• <strong>Mantua:</strong> Patron of Mantua, Italy</li>
                  <li>• <strong>Good Friday:</strong> Patron of Passion devotion</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Spiritual Sight:</strong> Help in recognizing God's presence</li>
                  <li>• <strong>Courage:</strong> Strength to bear witness to Christ</li>
                  <li>• <strong>Conversion:</strong> Grace for those seeking the truth</li>
                  <li>• <strong>Healing:</strong> Physical and spiritual healing</li>
                  <li>• <strong>Repentance:</strong> Help in turning away from sin</li>
                  <li>• <strong>Martyrdom:</strong> Courage to suffer for the faith</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Longinus</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Longinus, centurion who pierced the side of Christ and 
                    was converted by His precious blood, intercede for us before 
                    the throne of God.
                  </p>
                  <p className="mb-4">
                    You who received both physical and spiritual sight through the 
                    blood of Christ, help us to see with the eyes of faith and to 
                    recognize God's presence in our lives. You who courageously bore 
                    witness to Christ even in the face of torture and death, give 
                    us the strength to bear witness to our faith in our daily lives.
                  </p>
                  <p className="mb-4">
                    Help us to be instruments of God's mercy and love, and to bring 
                    others to the knowledge of Christ through our words and actions. 
                    Pray for all those who are spiritually blind, that they may come 
                    to see the light of Christ.
                  </p>
                  <p>
                    St. Longinus, pray for us that we may have the courage to proclaim 
                    with you, 'Indeed, this was the Son of God!' Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Conversion</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Longinus, patron of converts, pray for all those who are 
                    seeking the truth and for those who have participated in acts 
                    of violence or sin.
                  </p>
                  <p>
                    Help them to experience the same grace of conversion that you 
                    received, and to find healing and peace in the love of Christ. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Longinus, pray for us!"
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
            <Link href="/saints/st-stephen" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Stephen
                </h3>
                <p className="text-gray-700 text-sm">
                  First martyr and patron of deacons.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-peter" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peter
                </h3>
                <p className="text-gray-700 text-sm">
                  Prince of the Apostles and first Pope.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John
                </h3>
                <p className="text-gray-700 text-sm">
                  Beloved disciple and evangelist.
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