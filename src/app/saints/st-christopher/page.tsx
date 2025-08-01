import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Christopher - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Christopher, patron saint of travelers and children, the Christ-bearer.',
  keywords: [
    'st christopher',
    'saint christopher',
    'patron saint of travelers',
    'july 25 feast day',
    'catholic saints',
    'christ bearer',
    'traveler saints'
  ],
  openGraph: {
    title: 'St. Christopher - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Christopher, patron saint of travelers and children, the Christ-bearer.',
    url: 'https://catholicbibleonline.com/saints/st-christopher',
  },
  twitter: {
    title: 'St. Christopher - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Christopher, patron saint of travelers and children, the Christ-bearer.',
  }
}

export default function StChristopherPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏃</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Christopher
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron Saint of Travelers and Children, The Christ-Bearer
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Christopher</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 25</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏃</div>
              <div className="text-sm text-gray-600">Martyr Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Christopher</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Christopher is one of the most popular Catholic Christian heroes 
                of the Faith. He is a saint, indeed listed as a martyr, and may have 
                also been named Reprobus. He apparently died under the Roman Emperor 
                Decius, in 251 AD. Most Catholics refer to him as Saint Christopher 
                anyway, and his medals and the popular devotions to him are among the 
                most common in Catholic piety. Other than his listing as a martyr, 
                there are no primary sources referring to St. Christopher, only stories 
                and traditions which have been passed down.
              </p>
              
              <p className="mb-6">
                According to these accounts, St. Christopher was extremely tall, and 
                by some accounts he was even a giant! He was surely a man of significant 
                physical stature. But, more importantly, he was a spiritual giant and 
                a sure model and inspiration for the Christian faithful. Christopher 
                decided one day that he wanted to serve the greatest king he could. 
                He presented himself before his local ruler and entered service, until 
                he noticed the king cross himself at the mention of the devil, revealing 
                that the king believed the Devil to have more power.
              </p>
              
              <p className="mb-6">
                St. Christopher then decided to serve the Devil. During his search, 
                he encountered a band of thieves, whose leader referred to himself as 
                the Devil. But when this leader avoided a Christian cross out of fear, 
                St. Christopher learned there was someone even more powerful than the 
                Devil. St. Christopher found a hermit who taught him all about Christ, 
                the King of Kings. The hermit suggested that he spend his life in prayer 
                and fasting, a thing which St. Christopher, a large and probably often 
                hungry man found difficult, he objected.
              </p>
              
              <p className="mb-6">
                The hermit suggested he then find something else that would please 
                Christ. St. Christopher offered to work at a nearby river, and help 
                travelers across. The fording was dangerous and many with less strength 
                people had drowned. The hermit advised St. Christopher this would 
                please Christ. One day, a child approached St. Christopher by the river 
                and asked to be helped across. St. Christopher obliged. However, as 
                he entered midstream, the river rose and the child's weight grew and 
                became extremely heavy. It was only by great exertion that St. Christopher 
                safely delivered the child to the other side.
              </p>
              
              <p>
                When St. Christopher asked the child why he was so heavy, the child 
                explained that He was the Christ and when St. Christopher carried Him, 
                he also carried the weight of the whole world on his shoulders. The 
                child then vanished. Other legends state that St. Christopher traveled 
                after this experience and evangelized thousands of people. Arriving 
                in Lycia in Asia Minor, and witnessing to Christians there who were 
                being martyred. At that time, St. Christopher was detained and ordered 
                to offer a sacrifice to the emperor. When he refused, it was decided 
                to attempt to persuade him with money and women. Two women were sent 
                to seduce him, but instead he converted them to Christianity. After 
                this, it was decided to have him killed, but various attempts to 
                assassinate him failed. Eventually, he was arrested and beheaded.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Christopher: The Christ-Bearer</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">The Christ-Bearer</h3>
              <p className="mb-6">
                St. Christopher's greatest legacy is embodied in his name, which means 
                "Christ-bearer." This name may allude to the legend of the man carrying 
                the Christ Child across the river. The story of St. Christopher carrying 
                the weight of the world on his shoulders while bearing Christ across 
                the river has become a powerful symbol of the Christian's call to carry 
                Christ to others and to bear the burdens of the world with Christ's help.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Universal Patron of Travelers</h3>
              <p className="mb-6">
                St. Christopher's role as patron saint of travelers is one of the most 
                widely recognized patronages in the Catholic Church. His medals and 
                devotions are among the most common in Catholic piety, with millions 
                of people wearing St. Christopher medals for protection during travel. 
                This patronage extends beyond physical travel to include spiritual 
                journeys and the journey of life itself. His story of helping travelers 
                cross dangerous waters has made him a beloved protector of all who journey.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Protector of Children</h3>
              <p>
                St. Christopher's patronage of children stems from his encounter with 
                the Christ Child. His gentle care for the child who turned out to be 
                Christ Himself has made him a powerful intercessor for children and 
                families. Despite the historical uncertainties surrounding his life, 
                St. Christopher continues to be widely venerated and is thought to 
                intercede on behalf of Christians, especially children, today. His 
                popularity in the Church began around the 7th century, when churches 
                and monasteries began to be named after him.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">July 25</div>
              <p className="text-gray-600">Feast of St. Christopher</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Christopher is celebrated on July 25th, during the 
                summer months when many people are traveling. While St. Christopher 
                is not officially recognized by the Church in the current calendar 
                due to the lack of historical documentation, he is still widely venerated 
                and his feast day is celebrated by many Catholics around the world. 
                Because he is not officially recognized, he has no date of beatification 
                or canonization, but his popular devotion remains strong.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Christopher's feast day, many travelers pray for his protection 
                and wear his medal. Churches often hold special Masses for travelers 
                and bless St. Christopher medals. The day is marked by prayers for 
                safe journeys and protection for children. Many people also pray for 
                his intercession when beginning new journeys or when facing difficult 
                challenges in life. The tradition of wearing St. Christopher medals 
                for protection during travel is one of the most enduring Catholic 
                devotions.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for safe travels, protection 
                for children, and strength to carry the burdens of life. Many people 
                pray the Prayer to St. Christopher or make special petitions for 
                journey mercies. The day is also a time to reflect on how we can 
                be "Christ-bearers" in our own lives, carrying Christ's love and 
                message to others through our words and actions.
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
                  <li>• <strong>Travelers:</strong> Patron saint of all who journey</li>
                  <li>• <strong>Children:</strong> Patron of children and youth</li>
                  <li>• <strong>Motorists:</strong> Patron of drivers and road safety</li>
                  <li>• <strong>Pilgrims:</strong> Patron of spiritual journeys</li>
                  <li>• <strong>Mariners:</strong> Patron of sailors and sea travel</li>
                  <li>• <strong>Transportation:</strong> Patron of all forms of travel</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Safe Journeys:</strong> Protection during travel</li>
                  <li>• <strong>New Beginnings:</strong> Patron of fresh starts</li>
                  <li>• <strong>Strength:</strong> Helper in carrying burdens</li>
                  <li>• <strong>Protection:</strong> Guardian against dangers</li>
                  <li>• <strong>Evangelization:</strong> Patron of spreading faith</li>
                  <li>• <strong>Perseverance:</strong> Helper in difficult times</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Christopher</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Christopher, you who carried the Christ Child across the 
                    river and bore the weight of the world on your shoulders, help me 
                    to carry Christ in my heart and to bear the burdens of life with 
                    strength and faith.
                  </p>
                  <p className="mb-4">
                    Protect me in all my journeys, both physical and spiritual. Help 
                    me to be a Christ-bearer to others, sharing His love and message 
                    wherever I go. May your example of service and strength inspire 
                    me to help others cross the difficult waters of life.
                  </p>
                  <p>
                    St. Christopher, pray for me that I may travel safely, protect 
                    children, and always remember that when I carry Christ, I carry 
                    the world with Him. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Travelers</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Christopher, patron saint of travelers, watch over me as I 
                    begin this journey. Protect me from all dangers and guide me safely 
                    to my destination.
                  </p>
                  <p>
                    May your intercession bring me peace and safety, and may I always 
                    remember that Christ travels with me. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Christopher, pray for us!"
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
            <Link href="/saints/st-michael-archangel" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Michael the Archangel
                </h3>
                <p className="text-gray-700 text-sm">
                  Defender of Heaven and protector against evil.
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
                  Wonder worker and patron of lost things.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joseph" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Family Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joseph
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron of the Universal Church and families.
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