import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Jude Thaddeus - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Jude Thaddeus, apostle of Jesus and patron of desperate situations.',
  keywords: [
    'st jude thaddeus',
    'saint jude',
    'st jude biography',
    'st jude feast day',
    'st jude patron saint',
    'october 28 feast day',
    'patron saints',
    'apostle jude'
  ],
  openGraph: {
    title: 'St. Jude Thaddeus - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Jude Thaddeus, apostle of Jesus and patron of desperate situations.',
    url: 'https://catholicbibleonline.com/saints/st-jude',
  },
  twitter: {
    title: 'St. Jude Thaddeus - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Jude Thaddeus, apostle of Jesus and patron of desperate situations.',
  }
}

export default function StJudePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🙏</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Jude Thaddeus
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Apostle of Jesus, Patron of Hopeless Cases
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Jude Thaddeus</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 28</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🙏</div>
              <div className="text-sm text-gray-600">Apostle</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Jude Thaddeus</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Jude Thaddeus was one of the twelve apostles chosen by Jesus Christ. He is often called 
                "Thaddeus" to distinguish him from Judas Iscariot, the apostle who betrayed Jesus. St. Jude 
                was the son of Cleophas and Mary, and was related to Jesus through his mother, who was a 
                cousin of the Blessed Virgin Mary.
              </p>
              
              <p className="mb-6">
                After the Resurrection and Ascension of Jesus, St. Jude traveled extensively to spread the 
                Gospel. He preached in Judea, Samaria, Idumaea, Syria, Mesopotamia, and Libya. He is believed 
                to have been martyred around 65 AD in Beirut, Lebanon, along with St. Simon the Zealot, 
                another apostle.
              </p>
              
              <p className="mb-6">
                St. Jude is the author of the Epistle of Jude in the New Testament, a short but powerful 
                letter that warns against false teachers and encourages Christians to remain faithful to 
                the teachings of the apostles. His letter emphasizes the importance of building up one's 
                faith and praying in the Holy Spirit.
              </p>
              
              <p className="mb-6">
                Throughout his ministry, St. Jude was known for his great faith and his ability to help 
                people in seemingly impossible situations. He became known as the patron of desperate cases 
                because he was often the last resort for people who had tried everything else.
              </p>
              
              <p>
                St. Jude's devotion to Jesus and his willingness to help those in need, even in the most 
                desperate circumstances, has made him one of the most beloved saints in the Catholic Church. 
                His intercession is sought by millions of people around the world who are facing difficult 
                or seemingly hopeless situations.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Jude: Patron of Hopeless Cases</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Hopeless Cases</h3>
              <p className="mb-6">
                St. Jude's most enduring legacy is his role as the patron saint of desperate situations and 
                hopeless cases. This devotion began because St. Jude was often the last resort for people 
                who had tried everything else. His powerful intercession continues to bring hope and help 
                to countless people facing seemingly impossible circumstances.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Apostolic Witness</h3>
              <p className="mb-6">
                As one of the twelve apostles, St. Jude was an eyewitness to the life, death, and resurrection 
                of Jesus Christ. His testimony and his written epistle provide a direct link to the teachings 
                of Jesus and the early Church. His legacy as an apostolic witness continues to inspire 
                Christians to remain faithful to the Gospel.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Perseverance</h3>
              <p className="mb-6">
                St. Jude's willingness to travel to dangerous and difficult places to spread the Gospel 
                shows his great courage and perseverance. He faced persecution, rejection, and ultimately 
                martyrdom for his faith. His example teaches us to persevere in our faith even when faced 
                with great difficulties.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Intercessor for the Desperate</h3>
              <p>
                Throughout history, St. Jude has been a source of hope and comfort for people in desperate 
                situations. His intercession is particularly powerful for those who feel they have nowhere 
                else to turn. He reminds us that with God, nothing is impossible, and that we should never 
                give up hope.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">October 28</div>
              <p className="text-gray-600">Feast of St. Jude and St. Simon the Apostle</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Jude is celebrated on October 28th, along with St. Simon the Zealot, 
                another apostle. This date commemorates their martyrdom and their faithful witness to 
                the Gospel. The feast is celebrated as a solemnity in many places where St. Jude is 
                particularly venerated.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Jude's feast day, many people participate in special novenas and prayers for 
                desperate situations. Some churches hold special Masses and prayer services, and many 
                people make pilgrimages to shrines dedicated to St. Jude. It's also traditional to 
                give thanks for answered prayers and to pray for others in need.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray the Novena to St. Jude, the Prayer to St. Jude, 
                or to make a special petition for a desperate situation. Many people also visit churches 
                dedicated to St. Jude or make pilgrimages to his shrines around the world.
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
                  <li>• <strong>Hopeless Cases and Desperate Situations:</strong> Patron of impossible causes</li>
                  <li>• <strong>Impossible Causes:</strong> Helper when all else fails</li>
                  <li>• <strong>Hospitals and Medical Workers:</strong> Patron of healthcare</li>
                  <li>• <strong>Police Officers:</strong> Protector of law enforcement</li>
                  <li>• <strong>Lost Causes:</strong> Patron of seemingly hopeless situations</li>
                  <li>• <strong>Armenia:</strong> Patron saint of Armenia</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Desperate Situations:</strong> Helper in times of crisis</li>
                  <li>• <strong>Hopeless Cases:</strong> Patron of last resort</li>
                  <li>• <strong>Medical Miracles:</strong> Intercessor for healing</li>
                  <li>• <strong>Financial Difficulties:</strong> Helper in money problems</li>
                  <li>• <strong>Family Problems:</strong> Patron of family reconciliation</li>
                  <li>• <strong>Employment Issues:</strong> Helper in job matters</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Jude</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Most holy Apostle, St. Jude, faithful servant and friend of Jesus, the Church honors 
                    and invokes you universally, as the patron of difficult cases, of things almost despaired 
                    of. Pray for me, I am so helpless and alone. Intercede with God for me that He bring 
                    visible and speedy help where help is almost despaired of.
                  </p>
                  <p className="mb-4">
                    Come to my assistance in this great need that I may receive the consolation and help 
                    of heaven in all my necessities, tribulations, and sufferings, particularly (make your request) 
                    and that I may praise God with you and all the saints forever.
                  </p>
                  <p>
                    I promise, O blessed St. Jude, to be ever mindful of this great favor granted me by God 
                    and to always honor you as my special and powerful patron, and to gratefully encourage 
                    devotion to you. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Jude, pray for us!"
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
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to All Saints
          </Link>
        </div>
      </div>
    </div>
  )
} 