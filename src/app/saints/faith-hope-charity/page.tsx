import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Sophia and her Daughters - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Sophia and her daughters Faith, Hope, and Charity, Christian martyrs during Hadrian\'s persecution.',
  keywords: [
    'st sophia',
    'saint sophia',
    'faith hope charity',
    'saint faith hope charity',
    'christian martyrs',
    'divine wisdom',
    'hadrian persecution',
    'catholic saints',
    'august 1 feast day'
  ],
  openGraph: {
    title: 'St. Sophia and her Daughters - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Sophia and her daughters Faith, Hope, and Charity, Christian martyrs.',
    url: 'https://catholicbibleonline.com/saints/faith-hope-charity',
  },
  twitter: {
    title: 'St. Sophia and her Daughters - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Sophia and her daughters Faith, Hope, and Charity, Christian martyrs.',
  }
}

export default function FaithHopeCharityPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👩‍👧‍👧‍👧</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Sophia and her Daughters
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Saints Faith, Hope, and Charity - Christian Martyrs, Models of Theological Virtues
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Sophia and her Daughters</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 1</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👩‍👧‍👧‍👧</div>
              <div className="text-sm text-gray-600">Martyr Family</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Sophia and her Daughters</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Sophia was a Christian widow in Rome, known for her wisdom and virtue. 
                She was the mother of three daughters: Faith, Hope, and Charity, who received names inspired by the 
                fundamental theological virtues of Christian life.
              </p>
              
              <p className="mb-6">
                During the persecution of Christians by Emperor Hadrian, the family was arrested for professing 
                the Christian faith. Faith, aged twelve, was scourged and remained unharmed when boiling pitch was 
                poured on her, being finally beheaded.
              </p>
              
              <p className="mb-6">
                Hope, aged ten, and Charity, aged nine, were also beheaded after emerging unharmed from a burning 
                furnace, demonstrating divine protection over their young lives.
              </p>
              
              <p className="mb-6">
                St. Sophia, witnessing the martyrdom of her daughters, died three days later while praying at their 
                graves, thus completing the martyrdom of the entire family for the Christian faith.
              </p>
              
              <p>
                The story of St. Sophia and her daughters symbolizes how divine wisdom manifests itself through 
                theological virtues, and their courage in the face of persecution serves as an inspiring example 
                for all Christian families.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Sophia and her Daughters: Models of Theological Virtues</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                The legacy of St. Sophia and her daughters transcends their martyrdom, representing how divine 
                wisdom manifests itself through theological virtues. Their story teaches that true wisdom comes 
                from God and is expressed through faith, hope, and charity.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Christian Motherhood</h3>
              <p className="mb-6">
                St. Sophia demonstrated how a mother can educate her daughters in faith, preparing them to face 
                even martyrdom. Her maternal wisdom is an example for all Christian mothers who wish to form 
                their children in virtue.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Youthful Courage</h3>
              <p className="mb-6">
                Despite their tender age, the three sisters demonstrated extraordinary courage in the face of 
                persecution. Their steadfastness in faith serves as an example for young people and adults, 
                showing that age is no obstacle to holiness and Christian witness.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Family Unity in Faith</h3>
              <p className="mb-6">
                The story of the family - mother and daughters united in faith until martyrdom - demonstrates the 
                importance of family unity around Christian values. They show how a family can be strengthened 
                and sanctified through shared faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Divine Protection</h3>
              <p>
                The miracles that accompanied their martyrdom - such as remaining unharmed in boiling pitch and 
                the furnace - demonstrate divine protection over those who trust in God, even in the most 
                difficult circumstances.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">August 1</div>
              <p className="text-gray-600">Feast of St. Sophia and her Daughters - Saints Faith, Hope, and Charity</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Sophia and her daughters is celebrated on August 1st, commemorating their martyrdom 
                and honoring their heroic virtues. This date is especially significant for celebrating how divine 
                wisdom manifests itself through theological virtues.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                In many Christian communities, this day is celebrated with special prayers for families and for 
                mothers who educate their children in faith. It is a time to reflect on theological virtues and 
                ask for the intercession of St. Sophia and her daughters.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent opportunity to pray for theological virtues, make a novena to the 
                martyr family, or dedicate time to reflection on how to cultivate Faith, Hope, and Charity in 
                our daily lives.
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
                  <li>• <strong>Christian Families:</strong> Protectors of family unity in faith</li>
                  <li>• <strong>Christian Mothers:</strong> St. Sophia is patron of mothers who educate in faith</li>
                  <li>• <strong>Young Christians:</strong> The daughters are patrons of Christian youth</li>
                  <li>• <strong>Martyrs:</strong> Models for all martyrs</li>
                  <li>• <strong>Theological Virtues:</strong> Patrons of fundamental virtues</li>
                  <li>• <strong>Wisdom:</strong> St. Sophia is patron of divine wisdom</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Strengthening Faith:</strong> Help in moments of doubt</li>
                  <li>• <strong>Maintaining Hope:</strong> Comfort in difficult times</li>
                  <li>• <strong>Growth in Charity:</strong> Development of Christian love</li>
                  <li>• <strong>Christian Education:</strong> St. Sophia helps in forming children</li>
                  <li>• <strong>Maternal Wisdom:</strong> Intercession for Christian mothers</li>
                  <li>• <strong>Perseverance:</strong> Help to remain steadfast in faith</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Sophia and her Daughters</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Sophia, wise and virtuous mother, and your daughters Saints Faith, Hope, and Charity, 
                    who with such courage witnessed your faith in Christ until martyrdom, intercede for us before the Lord.
                  </p>
                  <p className="mb-4">
                    St. Sophia, teach us divine wisdom and help us educate our children in faith. 
                    Saints Faith, Hope, and Charity, help us cultivate the virtues that bear your names: 
                    Faith that unites us to God, Hope that sustains us in trials, and Charity that 
                    makes us love as Christ loved.
                  </p>
                  <p className="mb-4">
                    May your intercession strengthen our families in faith, inspire our young people to follow 
                    Christ with courage, and help us persevere in the Christian life until the end.
                  </p>
                  <p>
                    St. Sophia and Saints Faith, Hope, and Charity, pray for us! Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Sophia and Saints Faith, Hope, and Charity, pray for us!"
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
            <Link href="/saints/st-joan-of-arc" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joan of Arc
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr who led the French army with courage and unshakeable faith.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-agnes" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Agnes
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr who preferred death to renouncing her faith and purity.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-cecilia" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Cecilia
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr, patroness of musicians and sacred music.
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