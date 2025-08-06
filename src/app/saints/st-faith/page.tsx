import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Faith - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Faith, virgin martyr who suffered death on a red-hot grill.',
  keywords: [
    'st faith',
    'saint faith',
    'st faith biography',
    'st faith feast day',
    'st faith patron saint',
    'catholic saints',
    'virgin martyrs'
  ],
  openGraph: {
    title: 'St. Faith - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Faith, virgin martyr who suffered death on a red-hot grill.',
    url: 'https://catholicbibleonline.com/saints/st-faith',
  },
  twitter: {
    title: 'St. Faith - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Faith, virgin martyr who suffered death on a red-hot grill.',
  }
}

export default function StFaithPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔥</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Faith
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Virgin Martyr and Model of Courageous Faith
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Faith</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 6</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🔥</div>
              <div className="text-sm text-gray-600">Virgin Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Faith</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The maiden named Faith (in Latin, Fides), one of the virgin martyrs to suffer under 
                the ancient Roman persecutions, was a very popular saint in medieval Europe, with 
                miracles reported at her shrine in Conques, France. Her story, though shrouded in 
                the mists of time, continues to inspire Christians with her unwavering courage and 
                steadfast devotion to Christ.
              </p>
              
              <p className="mb-6">
                St. Faith is believed to have suffered martyrdom at Agen, Gaul (France) in the third 
                century, during one of the many waves of persecution that swept through the Roman 
                Empire. While the specifics of her death are available only from much later texts 
                of dubious historical validity, these accounts may contain at least some authentic 
                details of her martyrdom that have been preserved through oral tradition and early 
                Christian devotion.
              </p>
              
              <p className="mb-6">
                According to the traditional accounts, St. Faith was summoned before a Roman 
                procurator who demanded that she renounce her Christian faith and offer sacrifice 
                to the pagan gods. In the face of this terrifying ordeal, Faith fortified herself 
                by making the sign of the cross, drawing strength from this sacred gesture that 
                had become the symbol of Christian identity and divine protection.
              </p>
              
              <p className="mb-6">
                When questioned by the judge about her beliefs, St. Faith courageously declared, 
                "I have served Christ from my infancy, and to him I have consecrated myself." 
                These words reveal not only her lifelong commitment to Christ but also her 
                understanding of the sacred nature of her baptismal vows and her consecration 
                as a virgin dedicated to God.
              </p>
              
              <p className="mb-6">
                When threatened with death for refusing to sacrifice to the pagan gods, St. Faith 
                responded with even greater courage: "I am prepared to suffer everything for Christ. 
                I long to die for him." This remarkable statement demonstrates her complete 
                surrender to God's will and her eagerness to follow in the footsteps of Christ, 
                even to the point of sharing in His passion and death.
              </p>
              
              <p>
                The most dramatic moment of St. Faith's martyrdom occurred as she was being burned 
                to death on a red-hot grill. According to the tradition, heavy snow miraculously 
                filled the air around her, so completely that it modestly veiled her body from the 
                onlookers until she had died. This miraculous intervention is seen as a sign of 
                God's protection and care for His faithful servant, ensuring that even in death, 
                her dignity and modesty were preserved.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Faith: Model of Courageous Witness</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Popular Medieval Devotion</h3>
              <p className="mb-6">
                St. Faith became one of the most popular saints in medieval Europe, with her 
                shrine in Conques, France, becoming a major pilgrimage destination. The numerous 
                miracles reported at her shrine testify to the power of her intercession and the 
                deep devotion she inspired among the faithful. Her popularity extended beyond 
                France, with churches and chapels dedicated to her throughout Europe, particularly 
                in regions that had experienced Roman persecution.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Virgin Martyrdom</h3>
              <p className="mb-6">
                St. Faith stands as a powerful example of virgin martyrdom, combining the virtues 
                of chastity, courage, and unwavering faith. Her consecration to Christ from 
                infancy and her willingness to die rather than renounce her faith make her a 
                model for all Christians, especially young women, who seek to live lives of 
                purity and devotion to God. Her story reminds us that true beauty lies not in 
                physical appearance but in the radiance of a soul united with Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courage in the Face of Persecution</h3>
              <p className="mb-6">
                St. Faith's courage in the face of persecution serves as an inspiration for 
                Christians throughout the ages. Her ability to remain steadfast in her faith, 
                even when threatened with torture and death, demonstrates the power of divine 
                grace and the strength that comes from complete trust in God. Her example 
                encourages modern Christians to stand firm in their beliefs, even when faced 
                with opposition or ridicule.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Divine Protection and Providence</h3>
              <p>
                The miraculous snowfall that veiled St. Faith during her martyrdom serves as a 
                powerful reminder of God's providential care for His faithful servants. This 
                miraculous intervention demonstrates that even in the darkest moments of suffering, 
                God does not abandon those who trust in Him. The story of St. Faith encourages 
                believers to trust in God's protection and to believe that He will provide for 
                their needs, even in the most difficult circumstances.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">October 6</div>
              <p className="text-gray-600">Feast of St. Faith, Virgin and Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Faith's feast day is celebrated on October 6th, commemorating her martyrdom 
                and her witness to the Christian faith. This feast is particularly important in 
                France, especially in the regions of Agen and Conques, where her memory is 
                deeply cherished. Churches dedicated to St. Faith hold special services on this 
                day, and many faithful gather to honor her memory and seek her intercession.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                In medieval times, St. Faith's feast day was marked by special processions and 
                pilgrimages to her shrine in Conques. Even today, some communities maintain 
                traditions of prayer and devotion to St. Faith on her feast day. In areas where 
                she is particularly venerated, churches may hold special Masses or prayer 
                services, and some families may have private devotions to honor her memory.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                Devotees pray to St. Faith for courage in the face of persecution, for strength 
                to remain faithful to Christ in difficult circumstances, for protection from 
                harm, and for the grace to live lives of purity and devotion. Her intercession 
                is particularly sought by those facing persecution for their faith, by young 
                people striving to live virtuous lives, and by all who need courage to stand 
                firm in their Christian convictions.
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
                  <li>• <strong>Agen, France:</strong> City where she suffered martyrdom</li>
                  <li>• <strong>Conques, France:</strong> Site of her famous shrine</li>
                  <li>• <strong>Pilgrims:</strong> For her shrine's importance in medieval pilgrimage</li>
                  <li>• <strong>Virgin Martyrs:</strong> As a model of virgin martyrdom</li>
                  <li>• <strong>Young Women:</strong> For her example of purity and courage</li>
                  <li>• <strong>Persecuted Christians:</strong> For her steadfastness under persecution</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Courage:</strong> For strength in the face of persecution</li>
                  <li>• <strong>Purity:</strong> For lives of chastity and virtue</li>
                  <li>• <strong>Faithfulness:</strong> For steadfastness in Christian beliefs</li>
                  <li>• <strong>Divine Protection:</strong> For God's care in difficult times</li>
                  <li>• <strong>Miracles:</strong> For her powerful intercession</li>
                  <li>• <strong>Pilgrimage:</strong> For safe journeys to holy places</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Faith</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed St. Faith, virgin martyr and model of courageous witness, 
                    you who served Christ from your infancy and consecrated yourself to Him, 
                    intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    Help us to remain steadfast in our faith, even when faced with persecution 
                    or opposition. Grant us the courage to declare our love for Christ boldly 
                    and to be prepared to suffer everything for Him.
                  </p>
                  <p className="mb-4">
                    Inspire us with your example of purity and devotion, showing us that true 
                    beauty lies in the radiance of a soul united with Christ. Help us to live 
                    lives of virtue and to remain faithful to our baptismal promises.
                  </p>
                  <p>
                    Through your powerful intercession, may we experience God's protection in 
                    times of trial and may we grow in courage, purity, and unwavering faith. 
                    St. Faith, pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Faith, virgin martyr and model of courage, pray for us!"
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
                  Virgin martyr and patron saint of young girls, another model of purity and courage.
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
                  Virgin martyr and patron saint of musicians, who also suffered for her faith.
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
                  Virgin martyr of Syracuse, patron of the blind, who showed great courage in persecution.
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