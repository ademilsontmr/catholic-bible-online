import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Finbar - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Finbar, Irish bishop and founder of Cork who was consecrated from heaven and worked many miracles.',
  keywords: [
    'st finbar',
    'saint finbar',
    'st finbar cork',
    'st finbar biography',
    'st finbar feast day',
    'st finbar patron saint',
    'catholic saints',
    'september 25 feast day',
    'medieval saints',
    'irish bishop',
    'cork ireland',
    'fionnbharr'
  ],
  openGraph: {
    title: 'St. Finbar - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Finbar, Irish bishop and founder of Cork.',
    url: 'https://catholicbibleonline.com/saints/st-finbar',
  },
  twitter: {
    title: 'St. Finbar - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Finbar, Irish bishop and founder of Cork.',
  }
}

export default function StFinbarPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔬</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Finbar
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Irish Bishop, Founder of Cork, Consecrated from Heaven
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Finbar</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">September 25</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🔬</div>
              <div className="text-sm text-gray-600">Medieval</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Finbar</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                He was the son of an artisan and a lady of the Irish royal court, born in 
                Connaught, Ireland, and baptized Lochan. This mixed heritage - combining 
                the practical skills of an artisan with the noble lineage of the Irish 
                royal court - would shape his character and his approach to ministry. His 
                early life in Connaught, a region known for its rich Celtic heritage and 
                strong Christian traditions, provided the foundation for his spiritual journey.
              </p>
              
              <p className="mb-6">
                He was educated at Kilmacahil, Kilkenny, where the monks named him Fionnbharr 
                (white head) because of his light hair; he is also known as Bairre and Barr. 
                This monastic education was crucial in his formation, as the Irish monasteries 
                of this period were centers of learning, spirituality, and missionary zeal. 
                The monks' decision to rename him Fionnbharr reflects their recognition of 
                his distinctive appearance and perhaps his spiritual qualities as well.
              </p>
              
              <p className="mb-6">
                He went on pilgrimage to Rome with some of the monks, visiting St. David 
                in Wales on the way back. This pilgrimage was a significant journey that 
                would have taken months and exposed him to the broader Christian world 
                beyond Ireland. The visit to St. David in Wales was particularly important, 
                as it connected him to the Celtic Christian tradition and the great Welsh 
                saint who was known for his monastic foundations and missionary work.
              </p>
              
              <p className="mb-6">
                Supposedly, on another visit to Rome the Pope wanted to consecrate him a 
                bishop but was deterred by a vision, notifying the pope that God had reserved 
                that honor to Himself, and Finbar was consecrated from heaven and then returned 
                to Ireland. This extraordinary story of heavenly consecration sets Finbar 
                apart from other saints and demonstrates the special favor God showed him. 
                The vision that prevented the Pope from consecrating him personally suggests 
                that God had a unique plan for Finbar's episcopal ministry.
              </p>
              
              <p className="mb-6">
                At any rate, he may have preached in Scotland, definitely did in southern 
                Ireland, lived as a hermit on a small island at Lough Eiroe, and then, on 
                the river Lee, founded a monastery that developed into the city of Cork, 
                of which he was the first bishop. This progression from hermit to monastic 
                founder to bishop shows the natural development of his spiritual journey 
                and his growing influence in the Church.
              </p>
              
              <p className="mb-6">
                His monastery became famous in southern Ireland and attracted numerous 
                disciples. The success of his foundation at Cork demonstrates his ability 
                to create a spiritual center that could serve both the immediate community 
                and the broader region. The fact that it attracted many disciples suggests 
                that his teaching and example were compelling and that he had a gift for 
                spiritual leadership.
              </p>
              
              <p>
                Many extravagant miracles are attributed to him, and supposedly, the sun 
                did not set for two weeks after he died at Cloyne about the year 633. This 
                remarkable sign at his death - the sun not setting for two weeks - is one 
                of the most extraordinary miracles attributed to any saint and suggests 
                the profound impact his life and death had on the natural world. His death 
                at Cloyne marked the end of a life dedicated to spreading the Gospel and 
                establishing the Church in Ireland.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Finbar: Bishop Consecrated from Heaven</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Founder of Cork and First Bishop</h3>
              <p className="mb-6">
                St. Finbar's greatest legacy is the foundation of the city of Cork and 
                his role as its first bishop. His monastery on the river Lee became the 
                nucleus around which the city developed, making him not just a spiritual 
                founder but also a civic founder. This dual role as both religious and 
                secular founder demonstrates how the Church's mission can transform entire 
                communities and regions. His establishment of Cork as a center of Christian 
                life and learning had lasting implications for the spiritual and cultural 
                development of southern Ireland.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Unique Heavenly Consecration</h3>
              <p className="mb-6">
                The story of Finbar's consecration from heaven is unique in the history 
                of the Church and sets him apart from other saints. This extraordinary 
                event suggests that God had a special plan for his episcopal ministry 
                and that his authority came directly from divine appointment rather than 
                human ceremony. This heavenly consecration serves as a powerful reminder 
                that God's ways are not always our ways and that He can choose unexpected 
                means to accomplish His purposes. It also emphasizes the sacred nature 
                of the episcopal office and God's direct involvement in the Church's leadership.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Celtic Spirituality</h3>
              <p className="mb-6">
                Finbar's life embodies the best qualities of Celtic Christianity: a deep 
                connection to nature, a commitment to monastic life, a spirit of pilgrimage, 
                and a missionary zeal. His progression from hermit to monastic founder 
                to bishop reflects the Celtic Christian ideal of spiritual development 
                and the integration of contemplative and active life. His example continues 
                to inspire those who seek to live out their faith in a way that honors 
                both tradition and the call to serve others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to God's Power</h3>
              <p className="mb-6">
                The many extravagant miracles attributed to Finbar, culminating in the 
                extraordinary sign of the sun not setting for two weeks after his death, 
                demonstrate the power of God working through His saints. These miracles 
                were not just displays of supernatural power, but signs pointing to the 
                truth of the Gospel and the reality of God's kingdom. The miracle at his 
                death, in particular, suggests that his life and ministry had cosmic 
                significance and that his passing marked a moment of profound spiritual 
                importance.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Bridge Between Cultures</h3>
              <p>
                Finbar's mixed heritage - the son of an artisan and a lady of the Irish 
                royal court - and his education in both Irish and broader Christian 
                traditions made him a bridge between different cultures and social classes. 
                His ability to move between the monastic world, the royal court, and the 
                broader Christian community demonstrates the Church's mission to unite 
                people from all backgrounds in the love of Christ. His example shows 
                that the Gospel transcends social and cultural boundaries.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">September 25</div>
              <p className="text-gray-600">Feast of St. Finbar, Bishop and Founder of Cork</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Finbar is celebrated on September 25th, commemorating 
                his life as an Irish bishop who was consecrated from heaven and founded 
                the city of Cork. This feast honors his unique consecration, his missionary 
                work in Ireland and Scotland, his foundation of the monastery that became 
                Cork, and the extraordinary miracles that marked his life and death. It 
                is a day to remember that God can work in extraordinary ways through 
                ordinary people and that the Church's mission can transform entire communities.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. Finbar lived during the 7th century, a time when Ireland was becoming 
                a center of Christian learning and missionary activity. The Irish Church 
                was developing its own distinctive traditions while maintaining communion 
                with the broader Christian world. In this context, Finbar's role as a 
                bridge between Irish and broader Christian traditions was particularly 
                important. His foundation of Cork helped to establish the Church more 
                firmly in southern Ireland and contributed to the region's spiritual 
                and cultural development.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On his feast day, Catholics pray for his intercession, especially for 
                the city of Cork and its people, for those seeking to bridge cultural 
                and social divides, for bishops and Church leaders, for those on pilgrimage 
                or spiritual journeys, for the success of missionary work, for those 
                seeking to integrate contemplative and active life, and for the grace 
                to trust in God's unique plans for our lives. His example inspires us 
                to be open to God's unexpected ways of working in our lives.
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
                  <li>• <strong>Cork:</strong> Patron saint of the city of Cork, Ireland</li>
                  <li>• <strong>Irish Bishops:</strong> Patron of Irish bishops and Church leaders</li>
                  <li>• <strong>Pilgrims:</strong> Patron of pilgrims and spiritual travelers</li>
                  <li>• <strong>Monastic Founders:</strong> Patron of those founding religious communities</li>
                  <li>• <strong>Celtic Christianity:</strong> Patron of Celtic Christian traditions</li>
                  <li>• <strong>Bridge Builders:</strong> Patron of those uniting different cultures</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>City Development:</strong> Helper for cities and communities</li>
                  <li>• <strong>Cultural Unity:</strong> Patron of those bridging cultural divides</li>
                  <li>• <strong>Divine Guidance:</strong> Helper for those seeking God's unique plan</li>
                  <li>• <strong>Missionary Work:</strong> Patron of evangelization and outreach</li>
                  <li>• <strong>Spiritual Journeys:</strong> Helper for those on pilgrimage</li>
                  <li>• <strong>Extraordinary Grace:</strong> Patron of those seeking miraculous help</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Finbar</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Finbar, bishop consecrated from heaven and founder of Cork, 
                    intercede for us who seek to follow God's unique plan for our lives.
                  </p>
                  <p className="mb-4">
                    You who were chosen by God for a special mission, help us to be open 
                    to His unexpected ways of working in our lives.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace 
                    to trust in God's providence and to serve Him with courage and faith. 
                    Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Cork</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Finbar, patron of Cork, intercede for the city you founded and 
                    all its people.
                  </p>
                  <p>
                    Help them to grow in faith, to build a community of love and service, 
                    and to honor the Christian heritage you established. Through Christ 
                    our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Pilgrims</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Finbar, who made pilgrimage to Rome and visited St. David, 
                    intercede for all who are on spiritual journeys.
                  </p>
                  <p>
                    Help them to find God in their travels, to grow in faith through 
                    their experiences, and to return home transformed by grace. Through 
                    Christ our Lord. Amen."
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
            <Link href="/saints/st-patrick" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Patrick
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle of Ireland and patron saint of the Irish people.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-bento" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Benedict
                </h3>
                <p className="text-gray-700 text-sm">
                  Father of Western monasticism and patron of Europe.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-david-wales" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. David
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron saint of Wales whom Finbar visited on his pilgrimage.
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