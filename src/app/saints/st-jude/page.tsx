import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Jude - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Jude, the apostle of hopeless causes and brother of St. James the Less.',
  keywords: [
    'st jude',
    'saint jude',
    'apostle jude',
    'st jude biography',
    'st jude feast day',
    'st jude patron saint',
    'hopeless causes',
    'twelve apostles',
    'catholic saints',
    'october 28 feast day'
  ],
  openGraph: {
    title: 'St. Jude - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Jude, the apostle of hopeless causes and brother of St. James the Less.',
    url: 'https://catholicbibleonline.com/saints/st-jude',
  },
  twitter: {
    title: 'St. Jude - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Jude, the apostle of hopeless causes and brother of St. James the Less.',
  }
}

export default function StJudePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Jude
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Apostle of Hopeless Causes and Brother of St. James the Less
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Jude</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 28</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Apostle Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Jude</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Jude, also known as Jude Thaddeus, was one of the twelve apostles 
                chosen by Jesus Christ. He was the brother of St. James the Less and 
                a cousin of Jesus, being the son of Mary of Cleophas, who was a relative 
                of the Blessed Virgin Mary. This family connection to Jesus gave him 
                a unique perspective on the ministry and teachings of Christ.
              </p>
              
              <p className="mb-6">
                St. Jude is often confused with Judas Iscariot, the apostle who betrayed 
                Jesus, which may have contributed to the relative obscurity of his 
                cult in the early Church. However, St. Jude was a faithful disciple 
                who remained loyal to Christ throughout His ministry and after His 
                Resurrection and Ascension.
              </p>
              
              <p className="mb-6">
                St. Jude is the author of one of the Catholic Epistles in the New 
                Testament, the Letter of Jude. This short but powerful letter addresses 
                the early Christian community and warns against false teachers and 
                immoral behavior. In his letter, Jude encourages the faithful to 
                "contend earnestly for the faith that was once for all delivered 
                to the saints" and to build themselves up in the most holy faith.
              </p>
              
              <p className="mb-6">
                After the Resurrection and Ascension of Jesus, St. Jude preached 
                the Gospel in various regions, including Judea, Samaria, Idumea, 
                Syria, Mesopotamia, and Libya. According to tradition, he and St. 
                Simon the Zealot worked together as missionary partners, spreading 
                the Good News to distant lands and establishing Christian communities.
              </p>
              
              <p className="mb-6">
                St. Jude's missionary work took him to Egypt and Persia, where he 
                faced significant challenges and persecution. Despite the difficulties, 
                he remained faithful to his mission and continued to proclaim the 
                Gospel with courage and determination.
              </p>
              
              <p>
                According to tradition, St. Jude suffered martyrdom in Persia, where 
                he was killed with a halberd, a long-handled weapon with an ax-like 
                blade. This instrument of his death has become his distinctive symbol. 
                His martyrdom demonstrates his complete commitment to Christ and his 
                willingness to give his life for the faith he had preached so faithfully.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Jude: Apostle of Hopeless Causes</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Apostle of Hopeless Causes</h3>
              <p className="mb-6">
                St. Jude's most distinctive legacy is his role as the patron saint 
                of hopeless causes and desperate situations. This patronage developed 
                because St. Jude was often confused with Judas Iscariot, leading 
                many to avoid praying to him. As a result, only those in the most 
                desperate situations would turn to him, and when their prayers were 
                answered, they attributed the miracles to St. Jude's powerful intercession. 
                This has made him one of the most beloved saints for those facing 
                seemingly impossible situations.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Defender of the Faith</h3>
              <p className="mb-6">
                St. Jude's Epistle in the New Testament demonstrates his role as 
                a defender of the faith against false teachings and immoral behavior. 
                His exhortation to "contend earnestly for the faith" has made him 
                a model for all Christians who must defend the truth of the Gospel 
                in the face of error and corruption. His legacy teaches us the importance 
                of standing firm in our faith and protecting the deposit of truth 
                handed down from the apostles.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Missionary Zeal</h3>
              <p className="mb-6">
                St. Jude's extensive missionary work throughout the Middle East and 
                North Africa demonstrates his commitment to spreading the Gospel 
                to all nations. His willingness to travel to distant and dangerous 
                lands shows his dedication to the Great Commission and his love for 
                souls. His partnership with St. Simon the Zealot also demonstrates 
                the importance of collaboration in missionary work.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Martyr's Witness</h3>
              <p>
                St. Jude's martyrdom in Persia represents the ultimate witness to 
                Christ and the cost of discipleship. His willingness to die for his 
                faith demonstrates his complete commitment to Christ and his understanding 
                that the Gospel is worth any sacrifice. His martyrdom has inspired 
                countless Christians throughout history to remain faithful even in 
                the face of persecution and death.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-red-600 mb-2">October 28</div>
              <p className="text-gray-600">Feast of St. Jude</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Jude is celebrated on October 28th, commemorating 
                the day of his martyrdom. This feast is celebrated as a memorial 
                in the Roman Catholic Church, recognizing his importance as one of 
                the twelve apostles and his special role as the patron of hopeless causes.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Jude, many people pray for seemingly impossible 
                situations and for those who are in desperate need. Churches may 
                hold special services focusing on the power of prayer and the importance 
                of never losing hope. Many also pray for missionaries and for the 
                spread of the Gospel throughout the world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for hopeless causes, 
                for those in desperate situations, and for the grace to never lose 
                hope in God's mercy. Many also pray for missionaries and for all 
                those engaged in defending the faith, asking for St. Jude's intercession 
                in their work.
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
                  <li>• <strong>Hopeless Causes:</strong> Patron of desperate situations</li>
                  <li>• <strong>Desperate Cases:</strong> Patron of impossible situations</li>
                  <li>• <strong>Hospitals:</strong> Patron of hospitals</li>
                  <li>• <strong>Armenia:</strong> Patron of Armenia</li>
                  <li>• <strong>Chicago:</strong> Patron of Chicago</li>
                  <li>• <strong>Police Officers:</strong> Patron of police officers</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Hope:</strong> Help in maintaining hope in difficult times</li>
                  <li>• <strong>Desperate Situations:</strong> Intercession for impossible cases</li>
                  <li>• <strong>Faith Defense:</strong> Strength to defend the faith</li>
                  <li>• <strong>Missionary Work:</strong> Success in spreading the Gospel</li>
                  <li>• <strong>Perseverance:</strong> Grace to remain faithful in trials</li>
                  <li>• <strong>Miracles:</strong> Special intercession for miracles</li>
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
                    "O St. Jude, faithful servant and friend of Jesus, the Church 
                    honors and invokes you universally as the patron of hopeless 
                    cases, of things almost despaired of. Pray for me, I am so helpless 
                    and alone.
                  </p>
                  <p className="mb-4">
                    Make use, I implore you, of that particular privilege given to 
                    you, to bring visible and speedy help where help is almost despaired 
                    of. Come to my assistance in this great need that I may receive 
                    the consolation and help of heaven in all my necessities, tribulations, 
                    and sufferings, particularly [mention your request here] and that 
                    I may praise God with you and all the saints forever.
                  </p>
                  <p className="mb-4">
                    You who were a cousin of Jesus and who wrote the Epistle that 
                    calls us to contend earnestly for the faith, help us to remain 
                    faithful to Christ even in the most difficult circumstances. 
                    Teach us to trust in God's mercy and to never lose hope.
                  </p>
                  <p>
                    St. Jude, pray for us that we may receive the help we need and 
                    that we may always remain faithful to Christ. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Hopeless Causes</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Jude, patron of hopeless causes, intercede for all those 
                    who are facing seemingly impossible situations.
                  </p>
                  <p>
                    Help them to maintain hope in God's mercy and to trust that 
                    nothing is impossible with God. Give them the strength to persevere 
                    and the faith to believe in miracles. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
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
            <Link href="/saints/st-james-the-less" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. James the Less
                </h3>
                <p className="text-gray-700 text-sm">
                  Brother of St. Jude and fellow apostle.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-simon" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Simon
                </h3>
                <p className="text-gray-700 text-sm">
                  Missionary partner of St. Jude.
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
                  Prince of the Apostles and leader of the twelve.
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