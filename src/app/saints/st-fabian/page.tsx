import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Fabian - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Fabian, Pope and martyr who was chosen by a miraculous dove and led the Church during a time of peace and persecution.',
  keywords: [
    'st fabian',
    'saint fabian',
    'pope fabian',
    'st fabian biography',
    'st fabian feast day',
    'st fabian patron saint',
    'catholic saints',
    'january 20 feast day',
    'early saints',
    'pope',
    'martyr',
    'dove miracle'
  ],
  openGraph: {
    title: 'St. Fabian - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Fabian, Pope and martyr chosen by a miraculous dove.',
    url: 'https://catholicbibleonline.com/saints/st-fabian',
  },
  twitter: {
    title: 'St. Fabian - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Fabian, Pope and martyr chosen by a miraculous dove.',
  }
}

export default function StFabianPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Fabian
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pope and Martyr, Chosen by the Holy Spirit, Defender of the Faith
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Fabian</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">January 20</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏔️</div>
              <div className="text-sm text-gray-600">Early</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Fabian</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Fabian was born just a few years after the death of Pope Fabian, and his 
                remarkable story of election to the papacy has been preserved for us by the 
                early Church historian Eusebius. In 236, after Pope Anteros died, Fabian came 
                to Rome as a layperson, and not a very important one at that. He may have come 
                for the same reason many still come to Rome today during a papal election: 
                concern for the future of the faith, curiosity about the new pope, and a desire 
                to grieve for the pope who had passed.
              </p>
              
              <p className="mb-6">
                Seeing all the important people gathered to make this momentous decision must 
                have been overwhelming for this humble layman. Which one would be the new pope? 
                Someone known for power? Someone known for eloquence? Someone known for courage? 
                The gathering included many distinguished candidates, each with their own 
                qualifications and supporters.
              </p>
              
              <p className="mb-6">
                Suddenly, during the discussion, a miraculous event occurred that would change 
                the course of Church history. A dove descended from the ceiling of the assembly 
                hall. But it didn't settle on "someone known" for anything at all. According to 
                Eusebius, the dove "settled on [Fabian's] head as clear imitation of the descent 
                of the Holy Spirit in the form of a dove upon the Savior." This miraculous sign 
                was unmistakable to all present.
              </p>
              
              <p className="mb-6">
                There must have been something of the Holy Spirit working because everyone 
                suddenly proclaimed Fabian as "worthy" to be pope, and this stranger was elected 
                to the highest office in the Church. This extraordinary election demonstrated 
                that God's ways are not our ways, and that He often chooses the humble and 
                unexpected to accomplish His purposes.
              </p>
              
              <p className="mb-6">
                To us, the dove signifies peace, and this dove was indeed prophetic. Starting 
                close to Fabian's election, the suffering and persecuted Church began a time 
                of peace. The emperor, Philip, was friendly to Christians, and not only was 
                the persecution stopped, but Christians experienced acceptance and even 
                favor in the Roman Empire.
              </p>
              
              <p className="mb-6">
                In this era of peace, Fabian was able to build up the structure of the Church 
                of Rome, appointing seven deacons and helping to collect the acts of the martyrs. 
                He worked diligently to organize the Church and preserve the memory of those 
                who had given their lives for the faith. This period of relative calm allowed 
                the Church to grow and strengthen its internal structures.
              </p>
              
              <p className="mb-6">
                However, in a timeless story that repeats throughout history, the people who 
                had always been in power were not happy to see the newcomers growing and thriving. 
                There were many incidents of pagans attacking Christians, and when Philip died, 
                so died the time of peace. The new emperor, Decius, ordered all Christians to 
                deny Christ by offering incense to idols or through some other pagan ritual.
              </p>
              
              <p>
                In the few years of peace, the Church had grown soft, and many didn't have 
                the courage to stand up to martyrdom. But Fabian, singled out by the symbol 
                of peace, stood as a courageous example for everyone in his flock. He refused 
                to deny Christ and died a martyr in 250. He is buried in the Cemetery of 
                Calixtus that he helped rebuild and beautify, and a stone slab with his name 
                can still be found there today.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Fabian: Pope of Divine Election</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Divine Election and Humility</h3>
              <p className="mb-6">
                St. Fabian's greatest legacy is his extraordinary election to the papacy, 
                which demonstrates that God often chooses the humble and unexpected to accomplish 
                His purposes. As a layperson with no apparent qualifications for the papacy, 
                Fabian's election through the miraculous sign of the dove shows that God's 
                ways are not our ways. His example teaches us that true leadership in the 
                Church comes not from human qualifications or worldly power, but from God's 
                choice and the guidance of the Holy Spirit.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Builder of Church Structure</h3>
              <p className="mb-6">
                During the peaceful years of his papacy, Fabian worked diligently to build up 
                the structure of the Church of Rome. He appointed seven deacons and helped to 
                collect the acts of the martyrs, preserving the memory of those who had given 
                their lives for the faith. His organizational work helped to strengthen the 
                Church and prepare it for the challenges that would come. His example shows 
                the importance of using times of peace to build up the Church and strengthen 
                its foundations.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courageous Martyr</h3>
              <p className="mb-6">
                When persecution returned under Emperor Decius, Fabian stood as a courageous 
                example for his flock. Despite the fact that many Christians had grown soft 
                during the years of peace, Fabian refused to deny Christ and chose martyrdom 
                instead. His courage in the face of death demonstrated that true peace comes 
                not from avoiding conflict, but from remaining faithful to Christ regardless 
                of the consequences. His martyrdom inspired countless others to remain faithful 
                during the persecution.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Symbol of True Peace</h3>
              <p>
                The dove that settled on Fabian's head was not just a sign of his election, 
                but also a symbol of the true peace that Christ brings. Fabian's life teaches 
                us that true peace is not the absence of conflict or suffering, but the presence 
                of Christ in our hearts. Even in times of persecution and martyrdom, the peace 
                of Christ can sustain us and give us the courage to remain faithful to Him.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">January 20</div>
              <p className="text-gray-600">Feast of St. Fabian, Pope and Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Fabian is celebrated on January 20th, commemorating his life 
                as a pope chosen by divine intervention and his martyrdom for the faith. This 
                feast honors his extraordinary election through the miraculous sign of the dove 
                and his courageous witness to Christ even unto death. It is a day to remember 
                that God often chooses the humble and unexpected to accomplish His purposes, 
                and that true peace comes from remaining faithful to Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. Fabian lived during the 3rd century, a time when the Church was experiencing 
                both periods of peace and intense persecution. His papacy coincided with the 
                reign of Emperor Philip, who was friendly to Christians, allowing the Church 
                to grow and organize itself. However, this period of peace was followed by the 
                persecution of Emperor Decius, which tested the faith of many Christians who 
                had grown accustomed to acceptance and favor.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On his feast day, Catholics pray for his intercession, especially for the 
                Church in times of persecution, for those facing pressure to deny their faith, 
                for the election of Church leaders, for the preservation of Church history and 
                tradition, and for the grace to remain faithful to Christ in all circumstances. 
                His example inspires us to trust in God's guidance and to remain courageous 
                in our witness to the faith.
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
                  <li>• <strong>Popes:</strong> Patron saint of popes and papal elections</li>
                  <li>• <strong>Church Leaders:</strong> Patron of Church leaders and bishops</li>
                  <li>• <strong>Martyrs:</strong> Patron of martyrs and those persecuted for faith</li>
                  <li>• <strong>Peace:</strong> Patron of peace and reconciliation</li>
                  <li>• <strong>Humility:</strong> Patron of humility and divine election</li>
                  <li>• <strong>Church History:</strong> Patron of Church historians and archivists</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Divine Guidance:</strong> Helper for those seeking God's will</li>
                  <li>• <strong>Persecution:</strong> Patron of those facing persecution</li>
                  <li>• <strong>Church Growth:</strong> Helper for Church building and organization</li>
                  <li>• <strong>Faithful Witness:</strong> Patron of those called to witness to Christ</li>
                  <li>• <strong>Peace in Trials:</strong> Helper for finding peace in difficult times</li>
                  <li>• <strong>Preservation of Faith:</strong> Patron of those preserving Church tradition</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Fabian</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Pope Saint Fabian, it's so easy to believe that peace means a life without 
                    conflict or suffering. Help us to see that the only true peace is the peace 
                    Christ brings.
                  </p>
                  <p className="mb-4">
                    You who were chosen by the Holy Spirit through the sign of the dove and 
                    who remained faithful even unto martyrdom, intercede for us that we may 
                    have the same courage to remain loyal to Christ in all circumstances.
                  </p>
                  <p>
                    Never let us as a Church or as individual Christians choose to deny our 
                    beliefs simply to avoid an unpleasant situation. Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for the Persecuted Church</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Fabian, who faced persecution and martyrdom for the faith, intercede 
                    for all places where the Church suffers persecution and for all who face 
                    death, danger, or isolation for their faith.
                  </p>
                  <p>
                    Help them to remain courageous and faithful to Christ, and give them the 
                    strength to witness to the truth even in the face of suffering. Through 
                    Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Peace and Faith</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Fabian, patron of peace and faithful witness, pray especially for 
                    all who live where the Church is accepted and thrives in peace.
                  </p>
                  <p>
                    Help them that this peace will not make their faith flabby and weak, but 
                    that they may use times of peace to strengthen their faith and prepare 
                    for whatever challenges may come. Through Christ our Lord. Amen."
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
            <Link href="/saints/st-peter" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peter
                </h3>
                <p className="text-gray-700 text-sm">
                  First pope and prince of the apostles.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-stephen" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Stephen
                </h3>
                <p className="text-gray-700 text-sm">
                  First deacon and first Christian martyr.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-lawrence" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Lawrence
                </h3>
                <p className="text-gray-700 text-sm">
                  Deacon and martyr who served the poor.
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