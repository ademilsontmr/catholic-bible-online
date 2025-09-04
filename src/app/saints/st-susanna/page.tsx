import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Susanna - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Susanna, virgin martyr who refused marriage to remain faithful to Christ.',
  keywords: [
    'st susanna',
    'saint susanna',
    'st susanna biography',
    'st susanna feast day',
    'st susanna patron saint',
    'catholic saints',
    'august 11 feast day',
    'virgin martyrs',
    'roman saints',
    'diocletian persecution'
  ],
  openGraph: {
    title: 'St. Susanna - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Susanna, virgin martyr who refused marriage to remain faithful to Christ.',
    url: 'https://catholicbibleonline.com/saints/st-susanna',
  },
  twitter: {
    title: 'St. Susanna - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Susanna, virgin martyr who refused marriage to remain faithful to Christ.',
  }
}

export default function StSusannaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌸</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Susanna
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Virgin Martyr, Defender of Chastity, Witness to Christ
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Susanna</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 11</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌸</div>
              <div className="text-sm text-gray-600">Virgin</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Susanna</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Susanna was a beautiful young woman of noble birth, the daughter of Gabinius, 
                a priest, and niece of Pope Caius. Her story takes place during the reign of 
                Emperor Diocletian, a time of intense persecution against Christians in the Roman 
                Empire. Susanna's life would become a powerful testament to the strength of faith 
                and the courage to remain true to one's convictions even in the face of death.
              </p>
              
              <p className="mb-6">
                Susanna's family background was significant - her father was a priest and her 
                uncle was Pope Caius, placing her in a prominent Christian family in Rome. This 
                upbringing undoubtedly shaped her strong faith and her commitment to Christian 
                values. Her beauty and noble lineage made her an attractive prospect for marriage, 
                but Susanna had dedicated herself to Christ and chose to remain a virgin.
              </p>
              
              <p className="mb-6">
                When Emperor Diocletian learned of Susanna's beauty and noble birth, he decided 
                that she would be the perfect match for his son-in-law, Maximian. This was a 
                great honor in the eyes of the world, as it would have elevated Susanna to the 
                highest levels of Roman society. However, Susanna refused the emperor's request, 
                choosing instead to remain faithful to her vow of chastity and her commitment to Christ.
              </p>
              
              <p className="mb-6">
                Diocletian, not accustomed to being refused, sent two of his court officers, 
                Claudius and Maximus, to persuade Susanna to change her mind. These men were 
                her uncles, and Diocletian likely thought they would be able to convince her. 
                However, instead of persuading Susanna to marry, she converted both of them to 
                Christianity. This remarkable turn of events demonstrates not only Susanna's 
                strong faith but also her ability to witness to Christ even in the most difficult circumstances.
              </p>
              
              <p>
                Diocletian was enraged by what Susanna had done. Not only had she refused his 
                offer of marriage, but she had also converted his court officers to Christianity. 
                In his fury, he sent one of his favorites, Julian, to deal with the matter. Julian 
                had Maximus, Claudius, and Claudius's wife Praepedigna, along with their two sons, 
                burned to death at Cumae. Then, he had Susanna and her father beheaded. Through 
                her martyrdom, Susanna gave the ultimate witness to her faith in Christ.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Susanna: Witness to Chastity and Faith</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Chastity and Virginity</h3>
              <p className="mb-6">
                St. Susanna's most enduring legacy is her example of chastity and dedication to 
                virginity for the sake of Christ. In a world that valued political alliances and 
                social advancement through marriage, Susanna chose to remain faithful to her vow 
                of chastity. Her refusal to marry Maximian, despite the great honor and privilege 
                it would have brought, demonstrates her unwavering commitment to Christ and her 
                understanding that true worth comes from relationship with God, not from worldly 
                status or power.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courage in the Face of Persecution</h3>
              <p className="mb-6">
                Susanna's courage in refusing the emperor's request and accepting martyrdom serves 
                as a powerful example of standing firm in one's faith even when faced with the 
                most severe consequences. Her story shows that true faith requires courage and 
                that following Christ may sometimes mean going against the expectations and demands 
                of the world. Her martyrdom with her father also demonstrates the importance of 
                family unity in faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Evangelical Witness</h3>
              <p className="mb-6">
                One of the most remarkable aspects of Susanna's story is her ability to convert 
                her uncles, Claudius and Maximus, to Christianity. This demonstrates her skill 
                as an evangelist and her ability to witness to Christ even in the most challenging 
                circumstances. Her conversion of these court officers shows that the power of 
                the Gospel can overcome even the strongest opposition and that God can work 
                through anyone who is faithful to Him.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Family Witness to Faith</h3>
              <p>
                Susanna's story is also a testament to the power of family witness to faith. 
                Her father, Gabinius, was a priest, and her uncle was Pope Caius, showing that 
                she came from a family deeply committed to Christ. This family background helped 
                to form her strong faith and her willingness to give everything for Christ. The 
                fact that she and her father were martyred together also shows the unity of 
                faith within families and the importance of passing on the faith from generation to generation.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">August 11</div>
              <p className="text-gray-600">Feast of St. Susanna</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Susanna is celebrated on August 11th. This date commemorates 
                her martyrdom and her witness to chastity and faith. It serves as a reminder 
                of the importance of remaining faithful to Christ even when faced with great 
                pressure to compromise one's values.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                While the details of Susanna's story may be legendary, her feast day and the 
                devotion to her as a saint are very real. The story serves as a powerful 
                allegory of the challenges faced by Christians during the Diocletian persecution 
                and the importance of remaining faithful to Christ in the face of worldly 
                pressures and persecution.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Modern Relevance</h3>
              <p>
                In today's world, St. Susanna's feast day serves as a reminder of the importance 
                of chastity, purity, and faithfulness to Christ. It's a day to reflect on how 
                we can remain true to our Christian values even when faced with pressure to 
                conform to worldly standards. Her example encourages us to be courageous in 
                our witness to Christ and to value our relationship with God above all worldly 
                honors and privileges.
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
                  <li>• <strong>Virgin Martyrs:</strong> Patron of those who die for their chastity</li>
                  <li>• <strong>Young Women:</strong> Patron of young women seeking purity</li>
                  <li>• <strong>Converts:</strong> Patron of those converting others to Christianity</li>
                  <li>• <strong>Rome:</strong> Patron of the city where she was martyred</li>
                  <li>• <strong>Noble Families:</strong> Patron of those from noble backgrounds</li>
                  <li>• <strong>Persecuted Christians:</strong> Patron of those facing persecution</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Chastity:</strong> Help in maintaining purity and chastity</li>
                  <li>• <strong>Courage:</strong> Strength to stand firm in faith</li>
                  <li>• <strong>Evangelization:</strong> Success in converting others to Christ</li>
                  <li>• <strong>Family Unity:</strong> Unity in faith within families</li>
                  <li>• <strong>Persecution:</strong> Strength during religious persecution</li>
                  <li>• <strong>Noble Living:</strong> Living with dignity and grace</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Susanna</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Susanna, virgin martyr and model of chastity, you who 
                    refused the honor of marriage to remain faithful to Christ, intercede 
                    for us that we may have the courage to remain true to our Christian values.
                  </p>
                  <p className="mb-4">
                    Help us to value our relationship with God above all worldly honors and 
                    privileges, and teach us to be courageous witnesses to Christ even when 
                    faced with pressure to compromise our faith. May we, like you, be willing 
                    to give everything for the love of Christ.
                  </p>
                  <p>
                    Help us to be evangelists in our own way, bringing others to Christ through 
                    our example and our words. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Purity</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Susanna, patron of chastity and purity, intercede for all those who 
                    seek to live pure and holy lives.
                  </p>
                  <p>
                    Help them to remain faithful to their commitments to Christ and to resist 
                    the pressures of the world. May they find strength in their relationship 
                    with God and courage in their witness to the Gospel. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Susanna, virgin martyr, pray for us!"
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
            <Link href="/saints/st-agnes" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Agnes
                </h3>
                <p className="text-gray-700 text-sm">
                  Another virgin martyr who refused marriage to remain faithful to Christ.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-cecilia" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Cecilia
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and patron of music, another example of faithfulness to Christ.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-lucy" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Lucy
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr who also refused marriage and gave her life for Christ.
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