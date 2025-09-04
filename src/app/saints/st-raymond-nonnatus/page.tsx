import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Raymond Nonnatus - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Raymond Nonnatus, patron saint of expectant mothers and midwives, known for his miraculous birth and missionary work.',
  keywords: [
    'st raymond nonnatus',
    'saint raymond nonnatus',
    'st raymond biography',
    'st raymond feast day',
    'st raymond patron saint',
    'expectant mothers patron',
    'midwives patron saint',
    'catholic saints',
    'august 31 feast day'
  ],
  openGraph: {
    title: 'St. Raymond Nonnatus - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Raymond Nonnatus, patron saint of expectant mothers and midwives.',
    url: 'https://catholicbibleonline.com/saints/st-raymond-nonnatus',
  },
  twitter: {
    title: 'St. Raymond Nonnatus - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Raymond Nonnatus, patron saint of expectant mothers and midwives.',
  }
}

export default function StRaymondNonnatusPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👶</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Raymond Nonnatus
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron of Expectant Mothers and Midwives, Mercedarian Missionary
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Raymond Nonnatus</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 31</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👶</div>
              <div className="text-sm text-gray-600">Miraculous Birth</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Raymond Nonnatus</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Raymond Nonnatus was born at Portella, Catalonia, Spain, in the early 13th century. 
                His birth was truly miraculous - he was delivered by caesarean operation when his mother 
                died in childbirth, hence his name "Nonnatus" which means "not born" in Latin.
              </p>
              
              <p className="mb-6">
                Despite the tragic circumstances of his birth, Raymond miraculously survived the ordeal. 
                This extraordinary beginning marked the start of a life dedicated to God and the service 
                of others, particularly those in need of liberation and protection.
              </p>
              
              <p className="mb-6">
                Raymond joined the Mercedarians under St. Peter Nolasco at Barcelona, dedicating himself 
                to the order's mission of ransoming Christian slaves from Muslim captivity. He succeeded 
                Peter as chief ransomer and traveled to Algeria to ransom slaves, demonstrating great 
                courage and compassion in his missionary work.
              </p>
              
              <p className="mb-6">
                During his mission in Algeria, Raymond remained as a hostage for several slaves when his 
                money ran out. He was sentenced to be impaled when the governor learned that he had 
                converted several Muslims to Christianity. He escaped the death sentence because of the 
                ransom he would bring, but was forced to run the gauntlet and was tortured for continuing 
                his evangelizing activities.
              </p>
              
              <p className="mb-6">
                After eight months of captivity and torture, Raymond was finally ransomed by Peter Nolasco. 
                On his return to Barcelona in 1239, he was appointed Cardinal by Pope Gregory IX, but died 
                at Cardona, a short distance from Barcelona, the next year while on his way to Rome. 
                He was canonized in 1657.
              </p>
              
              <p>
                St. Raymond Nonnatus is remembered not only for his miraculous birth and missionary zeal, 
                but also for his unwavering faith and dedication to the liberation of others, both 
                physically and spiritually.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Raymond Nonnatus: Patron of Expectant Mothers</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Raymond's legacy is one of miraculous survival, missionary courage, and compassionate 
                service. His life demonstrates that even the most difficult beginnings can lead to great 
                holiness and service to God and others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Missionary Zeal</h3>
              <p className="mb-6">
                As a Mercedarian missionary, St. Raymond exemplified the courage and dedication needed 
                to serve in dangerous territories. His willingness to risk his life for the liberation 
                of others shows the depth of his love for Christ and his neighbor.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Childbirth</h3>
              <p className="mb-6">
                Due to the miraculous nature of his own birth, St. Raymond became the patron saint of 
                expectant mothers and midwives. His intercession is sought by women during pregnancy 
                and childbirth, as well as by those who assist in the birthing process.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Liberator of Captives</h3>
              <p>
                St. Raymond's work with the Mercedarians established him as a powerful intercessor for 
                those who are captive, whether physically, spiritually, or emotionally. His example 
                inspires us to work for the liberation of all who are oppressed.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">August 31</div>
              <p className="text-gray-600">Feast of St. Raymond Nonnatus</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Raymond Nonnatus is celebrated on August 31st, commemorating his death 
                and honoring his heroic virtues. This date is especially significant for expectant mothers 
                and those involved in childbirth, who turn to him for protection and assistance.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                In many Catholic communities, especially in Spain and Latin America, this feast day is 
                celebrated with special prayers for pregnant women and midwives. Many expectant mothers 
                pray novenas to St. Raymond during their pregnancy, seeking his intercession for a safe 
                delivery.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for expectant mothers, midwives, and all those 
                involved in childbirth. Many people also pray for the liberation of captives and for 
                missionary work, following St. Raymond's example.
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
                  <li>• <strong>Expectant Mothers:</strong> Patron of pregnant women</li>
                  <li>• <strong>Midwives:</strong> Patron of those who assist in childbirth</li>
                  <li>• <strong>Childbirth:</strong> Protector of safe deliveries</li>
                  <li>• <strong>Captives:</strong> Patron of those who are imprisoned</li>
                  <li>• <strong>Missionaries:</strong> Patron of missionary work</li>
                  <li>• <strong>Mercedarians:</strong> Patron of the Order of Mercy</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Safe Pregnancy:</strong> Protection during pregnancy</li>
                  <li>• <strong>Easy Labor:</strong> Help during childbirth</li>
                  <li>• <strong>Liberation:</strong> Freedom from captivity</li>
                  <li>• <strong>Missionary Work:</strong> Success in evangelization</li>
                  <li>• <strong>Medical Professionals:</strong> Guidance for healthcare workers</li>
                  <li>• <strong>Persecuted Christians:</strong> Protection for the oppressed</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Raymond Nonnatus</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Raymond Nonnatus, who by your miraculous birth and holy life have become the 
                    special patron of expectant mothers and midwives, intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    You who were delivered by caesarean section when your mother died in childbirth, 
                    and who miraculously survived this ordeal, help all expectant mothers to have safe 
                    pregnancies and deliveries.
                  </p>
                  <p className="mb-4">
                    You who dedicated your life to ransoming captives and spreading the Gospel, 
                    help us to be instruments of God's mercy and love in our daily lives.
                  </p>
                  <p>
                    St. Raymond Nonnatus, pray for us! Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Raymond Nonnatus, pray for us!"
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
            <Link href="/saints/st-peter-nolasco" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Mendicant Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peter Nolasco
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Mercedarian Order and mentor to St. Raymond Nonnatus.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-gerard" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Healing Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Gerard Majella
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron of expectant mothers and childbirth, known for his miraculous interventions.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-xavier" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Missionary Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis Xavier
                </h3>
                <p className="text-gray-700 text-sm">
                  Great missionary who spread the Gospel in Asia, patron of missionaries.
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