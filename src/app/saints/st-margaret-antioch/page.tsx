import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Margaret of Antioch - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Margaret of Antioch, virgin martyr and one of the Fourteen Holy Helpers, patroness of childbirth.',
  keywords: [
    'st margaret of antioch',
    'saint margaret of antioch',
    'st margaret of antioch biography',
    'st margaret of antioch feast day',
    'st margaret of antioch patron saint',
    'catholic saints',
    'july 20 feast day',
    'virgin martyrs',
    'fourteen holy helpers'
  ],
  openGraph: {
    title: 'St. Margaret of Antioch - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Margaret of Antioch, virgin martyr and one of the Fourteen Holy Helpers.',
    url: 'https://catholicbibleonline.com/saints/st-margaret-antioch',
  },
  twitter: {
    title: 'St. Margaret of Antioch - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Margaret of Antioch, virgin martyr and one of the Fourteen Holy Helpers.',
  }
}

export default function StMargaretAntiochPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌸</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Margaret of Antioch
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Virgin Martyr, One of the Fourteen Holy Helpers, Patroness of Childbirth
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Margaret of Antioch</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 20</div>
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
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Margaret of Antioch</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Margaret of Antioch, also known as Marina, was born in Antioch in Pisidia. According to her legend, 
                she was the daughter of a pagan priest named Theodosius. Her mother died when she was very young, and 
                she was placed in the care of a Christian nurse who secretly baptized her and raised her in the Christian faith.
              </p>
              
              <p className="mb-6">
                When Margaret was fifteen years old, her beauty attracted the attention of Olybrius, the Roman prefect 
                of Antioch. He was infatuated with her and wanted to marry her, but when he discovered that she was a 
                Christian, he ordered her to renounce her faith and worship the pagan gods.
              </p>
              
              <p className="mb-6">
                Margaret steadfastly refused to abandon her Christian faith, declaring that she would rather die than 
                deny Christ. Enraged by her refusal, Olybrius had her arrested and brought before him for trial. 
                He tried various methods to persuade her to renounce Christianity, but she remained firm in her faith.
              </p>
              
              <p className="mb-6">
                The prefect then ordered her to be tortured. She was beaten, scourged, and her flesh was torn with 
                iron combs. Despite the terrible pain, Margaret continued to profess her faith in Christ. She was 
                then thrown into prison, where she was visited by the devil in the form of a dragon.
              </p>
              
              <p className="mb-6">
                According to the legend, the dragon swallowed Margaret whole, but the cross she carried in her hand 
                so irritated the dragon's throat that it was forced to disgorge her unharmed. This miraculous escape 
                from the dragon's belly is why she became the patroness of childbirth.
              </p>
              
              <p className="mb-6">
                The next day, Olybrius ordered her to be executed by fire, but the flames miraculously did not harm her. 
                He then ordered her to be drowned, but again she was miraculously saved. During these ordeals, thousands 
                of spectators witnessed her faith and were converted to Christianity. All of these converts were promptly 
                executed for their new faith.
              </p>
              
              <p>
                Finally, St. Margaret was beheaded on July 20, around the year 304, during the persecution of Emperor 
                Diocletian. Her courage and steadfast faith in the face of such terrible tortures made her one of the 
                most popular saints of the Middle Ages.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Margaret of Antioch: Virgin Martyr and Holy Helper</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Virginity and Purity</h3>
              <p className="mb-6">
                St. Margaret's unwavering commitment to her virginity and her refusal to compromise her faith for 
                worldly advancement serves as a powerful example of purity and dedication to Christ. Her story 
                inspires young people to remain faithful to their Christian values even in the face of pressure 
                and temptation.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courage in Persecution</h3>
              <p className="mb-6">
                St. Margaret's extraordinary courage in the face of brutal torture and certain death demonstrates 
                the strength that comes from faith in Christ. Her willingness to endure unimaginable suffering 
                rather than deny her Lord continues to inspire Christians facing persecution and trials today.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">One of the Fourteen Holy Helpers</h3>
              <p className="mb-6">
                St. Margaret is one of the Fourteen Holy Helpers, a group of saints venerated together in the 
                Catholic Church for their powerful intercession. These saints were particularly popular in the 
                Middle Ages and are still invoked for their special protection and assistance in various needs.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patroness of Childbirth</h3>
              <p>
                Her miraculous escape from the dragon's belly made St. Margaret the patroness of childbirth and 
                pregnant women. She is invoked by expectant mothers for safe delivery and protection during 
                pregnancy. Her intercession is also sought for those facing difficult or dangerous pregnancies.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">July 20</div>
              <p className="text-gray-600">Memorial of St. Margaret of Antioch, Virgin and Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Margaret of Antioch is celebrated on July 20th, the traditional date of her martyrdom 
                around the year 304. This memorial honors her courage, virginity, and steadfast faith in the face of 
                persecution.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Significance</h3>
              <p className="mb-6">
                St. Margaret's story was immensely popular throughout the Middle Ages, spreading from the East to 
                Western Europe. Her legend inspired countless works of art, literature, and devotion, making her 
                one of the most beloved saints of medieval Christianity.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On her feast day, many Catholics pray for her intercession, especially for pregnant women and those 
                facing difficult childbirth. She is also invoked for courage in times of trial and for protection 
                against evil influences.
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
                  <li>• <strong>Childbirth:</strong> Patroness of pregnant women and safe delivery</li>
                  <li>• <strong>Pregnant Women:</strong> Protector during pregnancy and labor</li>
                  <li>• <strong>Virgin Martyrs:</strong> Model of purity and courage</li>
                  <li>• <strong>Young Women:</strong> Patroness of chastity and virtue</li>
                  <li>• <strong>Against Evil:</strong> Protector from demonic influences</li>
                  <li>• <strong>Fourteen Holy Helpers:</strong> One of the powerful intercessors</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Difficult Pregnancies:</strong> Helper in high-risk pregnancies</li>
                  <li>• <strong>Protection from Evil:</strong> Guardian against demonic attacks</li>
                  <li>• <strong>Courage in Trials:</strong> Patroness of those facing persecution</li>
                  <li>• <strong>Purity and Chastity:</strong> Helper in maintaining virtue</li>
                  <li>• <strong>Safe Delivery:</strong> Patroness of obstetricians and midwives</li>
                  <li>• <strong>Conversion of Sinners:</strong> Helper in bringing others to Christ</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Margaret of Antioch</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Margaret of Antioch, virgin martyr and patroness of childbirth, who withstood the 
                    most terrible tortures for the love of Christ, pray for us who call upon your intercession.
                  </p>
                  <p className="mb-4">
                    Help us to remain steadfast in our faith, pure in our hearts, and courageous in the face 
                    of trials. Protect all pregnant women and grant them safe delivery of their children.
                  </p>
                  <p>
                    Through your powerful intercession, may we be delivered from all evil and strengthened in 
                    our commitment to Christ. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Pregnant Women</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Margaret of Antioch, who miraculously escaped from the dragon's belly, we ask for 
                    your protection over all expectant mothers. Watch over them during their pregnancy and 
                    labor, keeping them and their unborn children safe from all harm.
                  </p>
                  <p>
                    Grant them strength, peace, and confidence as they prepare to bring new life into the world. 
                    Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Courage</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Margaret, who faced torture and death with such courage and faith, help us to 
                    be strong in our Christian convictions. When we are tempted to compromise our faith 
                    or values, give us the strength to remain faithful to Christ.
                  </p>
                  <p>
                    Protect us from all evil influences and help us to live pure and virtuous lives. 
                    Through Christ our Lord. Amen."
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
                  Virgin martyr who refused marriage to remain faithful to Christ, patroness of young girls.
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
                  Virgin martyr who gave her eyes to her suitor, patroness of the blind and eye problems.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-catherine-alexandria" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                    Early Saints
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                    St. Catherine of Alexandria
                  </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and philosopher, patroness of students, teachers, and philosophers.
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