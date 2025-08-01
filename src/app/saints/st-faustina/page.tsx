import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Faustina Kowalska - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Faustina Kowalska, the Apostle of Divine Mercy who received revelations from Jesus about His mercy.',
  keywords: [
    'st faustina kowalska',
    'saint faustina',
    'divine mercy',
    'apostle of divine mercy',
    'modern saints',
    'catholic saints',
    'october 5 feast day'
  ],
  openGraph: {
    title: 'St. Faustina Kowalska - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Faustina Kowalska, the Apostle of Divine Mercy.',
    url: 'https://catholicbibleonline.com/saints/st-faustina',
  },
  twitter: {
    title: 'St. Faustina Kowalska - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Faustina Kowalska, the Apostle of Divine Mercy.',
  }
}

export default function StFaustinaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💙</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Faustina Kowalska
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Apostle of Divine Mercy, Messenger of God's Love
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Faustina Kowalska</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 5</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💙</div>
              <div className="text-sm text-gray-600">Modern Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Faustina Kowalska</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Faustina Kowalska was born Helena Kowalska on August 25, 1905, in Głogowiec, Poland, 
                to a poor but devout Catholic family. From an early age, she showed a deep love for prayer 
                and a desire to serve God. At the age of seven, she first heard the call to religious life 
                during Eucharistic adoration.
              </p>
              
              <p className="mb-6">
                Despite her family's poverty and initial objections, Faustina entered the Congregation of 
                the Sisters of Our Lady of Mercy in Warsaw in 1925, taking the name Sister Maria Faustina 
                of the Most Blessed Sacrament. She worked in various convents as a cook, gardener, and porter, 
                always maintaining a spirit of humility and obedience.
              </p>
              
              <p className="mb-6">
                In 1931, Faustina began receiving extraordinary revelations from Jesus, who appeared to her 
                as the "King of Divine Mercy" and asked her to paint an image of Him with the inscription 
                "Jesus, I trust in You." He also revealed to her the Chaplet of Divine Mercy and the 
                Divine Mercy Novena, promising great graces to those who would practice these devotions.
              </p>
              
              <p>
                Faustina recorded all her mystical experiences in her "Diary: Divine Mercy in My Soul," 
                which has become a spiritual classic. She died of tuberculosis on October 5, 1938, at the 
                age of 33. She was canonized by Pope John Paul II on April 30, 2000, and her feast day 
                is celebrated on October 5th.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Faustina: Apostle of Divine Mercy</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Apostle of Divine Mercy</h3>
              <p className="mb-6">
                St. Faustina's greatest legacy is her role as the Apostle of Divine Mercy. Through her 
                revelations, she brought to the world the message of God's infinite mercy and love for 
                all humanity. Her mission was to remind people that God's mercy is greater than any sin 
                and that trust in His mercy is the path to salvation.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Divine Mercy Devotion</h3>
              <p className="mb-6">
                Faustina introduced several powerful devotions that have spread throughout the world: 
                the Divine Mercy Image, the Chaplet of Divine Mercy, the Divine Mercy Novena, and the 
                Hour of Mercy (3:00 PM). These devotions have brought countless souls closer to God 
                and have been a source of comfort and hope for millions of people.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Trust and Obedience</h3>
              <p>
                St. Faustina's life exemplifies complete trust in God and obedience to His will. Despite 
                her mystical experiences, she remained humble and obedient to her superiors. Her example 
                teaches us that true holiness comes from trusting in God's mercy and doing His will with 
                love and humility.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">October 5</div>
              <p className="text-gray-600">Feast of St. Faustina Kowalska</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Faustina is celebrated on October 5th, the anniversary of her death. 
                This date falls during the autumn season, a time of harvest and thanksgiving, which is 
                fitting for a saint who brought such abundant spiritual fruits to the Church. The feast 
                is celebrated as a memorial throughout the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Faustina's feast day, many people pray the Chaplet of Divine Mercy, participate 
                in the Divine Mercy Novena, or visit shrines dedicated to Divine Mercy. Some churches 
                hold special Masses and prayer services, and many people make pilgrimages to the Divine 
                Mercy Shrine in Kraków, Poland, where her relics are venerated.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray the Chaplet of Divine Mercy, the Divine Mercy 
                Novena, or to read passages from her "Diary." Many people also make a special effort to 
                practice the Hour of Mercy at 3:00 PM, the hour of Jesus' death on the cross.
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
                  <li>• <strong>Mercy and Divine Mercy:</strong> Patron of God's mercy</li>
                  <li>• <strong>Divine Mercy Devotion:</strong> Patron of mercy devotion</li>
                  <li>• <strong>Trust in God:</strong> Patron of those who trust in God</li>
                  <li>• <strong>Poland:</strong> Patron saint of Poland</li>
                  <li>• <strong>Mystics:</strong> Patron of mystical experiences</li>
                  <li>• <strong>Religious Sisters:</strong> Patron of consecrated women</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Divine Mercy:</strong> Helper in receiving God's mercy</li>
                  <li>• <strong>Trust in God:</strong> Patron of faith and trust</li>
                  <li>• <strong>Conversion of Sinners:</strong> Helper in repentance</li>
                  <li>• <strong>Spiritual Growth:</strong> Patron of holiness</li>
                  <li>• <strong>Mystical Experiences:</strong> Guide for spiritual life</li>
                  <li>• <strong>Religious Vocations:</strong> Patron of consecrated life</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Faustina</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Faustina, you who were chosen by Jesus to be the Apostle of Divine Mercy, 
                    help me to understand and trust in God's infinite mercy. Teach me to say with confidence, 
                    'Jesus, I trust in You.'
                  </p>
                  <p className="mb-4">
                    Help me to spread the message of Divine Mercy to others and to practice the works of mercy 
                    in my daily life. May your example of trust and obedience inspire me to surrender completely 
                    to God's will.
                  </p>
                  <p>
                    St. Faustina, pray for me that I may grow in trust and love for Jesus, and that I may 
                    become an instrument of His mercy in the world. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Divine Mercy Prayer</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blood and Water, which gushed forth from the Heart of Jesus as a fount of mercy for us, 
                    I trust in You!"
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Faustina Kowalska, pray for us!"
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
            <Link href="/saints/st-joseph" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Marian Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joseph
                </h3>
                <p className="text-gray-700 text-sm">
                  The foster father of Jesus and husband of Mary, patron of fathers and workers.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-michael-archangel" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Warrior Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Michael the Archangel
                </h3>
                <p className="text-gray-700 text-sm">
                  The great archangel who defeated Satan and leads the heavenly armies, protector of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-anthony" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anthony of Padua
                </h3>
                <p className="text-gray-700 text-sm">
                  Franciscan friar known for his powerful preaching and miracles, patron of lost items.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <Link
            href="/saints"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Saints
          </Link>
        </div>
      </div>
    </div>
  )
} 