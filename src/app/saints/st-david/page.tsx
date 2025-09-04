import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. David - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. David, patron saint of Wales and founder of monastic communities.',
  keywords: [
    'st david',
    'saint david',
    'patron saint of wales',
    'march 1 feast day',
    'catholic saints',
    'welsh saint',
    'monastic founder'
  ],
  openGraph: {
    title: 'St. David - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. David, patron saint of Wales and founder of monastic communities.',
    url: 'https://catholicbibleonline.com/saints/st-david',
  },
  twitter: {
    title: 'St. David - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. David, patron saint of Wales and founder of monastic communities.',
  }
}

export default function StDavidPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌿</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. David
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron Saint of Wales and Founder of Monastic Communities
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. David</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">March 1</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌿</div>
              <div className="text-sm text-gray-600">Early Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. David</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. David, also known as Dewi Sant in Welsh, was born around the year 500 
                A.D. in Wales, during a time when the Roman Empire was in decline and 
                Christianity was spreading throughout the British Isles. He was the son 
                of a Welsh chieftain named Sant and a noblewoman named Non, who was also 
                later canonized as St. Non. According to tradition, David was born during 
                a violent storm, and his birth was accompanied by miraculous signs, including 
                a spring of water that appeared where his mother knelt in prayer. From an 
                early age, David showed signs of holiness and a deep love for God.
              </p>
              
              <p className="mb-6">
                As a young man, David was educated by St. Paulinus, a blind monk who had 
                his sight miraculously restored. Under Paulinus's guidance, David learned 
                the Scriptures and developed a deep understanding of the Christian faith. 
                He also learned the importance of prayer, fasting, and living a simple, 
                ascetic life. After completing his education, David felt called to spread 
                the Gospel and establish monastic communities throughout Wales. He traveled 
                extensively throughout the country, preaching the Gospel and converting 
                many people to Christianity.
              </p>
              
              <p className="mb-6">
                David's most famous foundation was the monastery at Mynyw, which later 
                became known as St. David's. This monastery became the center of his 
                missionary work and the seat of the bishopric that still bears his name. 
                The community at St. David's was known for its strict discipline and 
                simple way of life. The monks lived in individual cells, worked the land, 
                and spent much of their time in prayer and study. They were also known 
                for their hospitality to travelers and their care for the poor and sick. 
                David himself lived a very austere life, eating only bread and vegetables 
                and drinking only water.
              </p>
              
              <p className="mb-6">
                One of the most famous stories about St. David involves a miracle that 
                occurred during a sermon he was preaching at the Synod of Brefi. As he 
                spoke, the ground beneath him rose up to form a hill, making it easier 
                for everyone to see and hear him. A white dove also descended from heaven 
                and rested on his shoulder, symbolizing the Holy Spirit's presence. This 
                miracle helped to establish David's reputation as a holy man and a powerful 
                preacher. He was known for his simple but effective preaching style, often 
                using the phrase "Be joyful, keep the faith, and do the little things" 
                as his motto.
              </p>
              
              <p>
                St. David died on March 1, around the year 589 A.D., at the age of approximately 
                89. According to tradition, he knew the date of his death in advance and 
                prepared for it by giving his final instructions to his monks. He was buried 
                in the church at St. David's, and his tomb became a place of pilgrimage 
                for Christians throughout Wales and beyond. His influence on the Church 
                in Wales was profound, and he is credited with establishing many churches 
                and monastic communities throughout the country. His legacy continues to 
                inspire Christians today, particularly in Wales, where he is celebrated 
                as the national patron saint.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. David: Patron of Wales</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Wales and Welsh Culture</h3>
              <p className="mb-6">
                St. David's greatest legacy is his role as the patron saint of Wales and 
                his profound influence on Welsh culture and identity. His establishment 
                of monastic communities throughout Wales helped to spread Christianity 
                and create centers of learning and culture in a region that was still 
                largely pagan. The city of St. David's, which grew around his monastery, 
                became an important religious and cultural center, and the cathedral that 
                now stands there is one of the most significant religious sites in Wales. 
                St. David's Day, celebrated on March 1st, is a national holiday in Wales 
                and is marked by parades, concerts, and other cultural events that celebrate 
                Welsh heritage and identity.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Simple Living and Faith</h3>
              <p className="mb-6">
                St. David's life of simplicity and austerity serves as a powerful example 
                of how to live a life focused on God rather than material possessions. 
                His famous motto, "Be joyful, keep the faith, and do the little things," 
                encapsulates his approach to life and has become a guiding principle for 
                many Christians. He showed that true happiness comes from serving God 
                and others, not from accumulating wealth or seeking worldly success. His 
                emphasis on hospitality, care for the poor, and simple living continues 
                to inspire people today to live more meaningful and purposeful lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Founder of Monastic Tradition</h3>
              <p>
                St. David's establishment of monastic communities throughout Wales helped 
                to create a strong foundation for the Church in the region. His monasteries 
                became centers of learning, prayer, and service to the community. They 
                also played an important role in preserving Welsh culture and language 
                during times of political and social upheaval. The monastic tradition 
                that St. David established continues to influence the Church in Wales 
                today, and his example of combining prayer, work, and service to others 
                remains a model for Christian communities everywhere. His legacy reminds 
                us of the importance of creating spaces where people can grow in faith, 
                learn, and serve God and their neighbors.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">March 1</div>
              <p className="text-gray-600">Feast of St. David</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. David is celebrated on March 1st, during the early spring 
                season when new life is beginning to emerge after the winter months. This 
                timing is particularly significant as it symbolizes the new life and growth 
                that St. David brought to Wales through his missionary work. The feast 
                is celebrated as a memorial in the Roman Catholic Church and as a major 
                feast in the Anglican Communion. In Wales, it is a national holiday and 
                is marked by special church services, parades, and cultural celebrations 
                that honor both the saint and Welsh heritage.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. David's Day, many people participate in special prayers and devotions 
                to honor his memory and seek his intercession. Churches throughout Wales 
                hold special Masses and services, often featuring Welsh hymns and prayers. 
                Many people wear daffodils or leeks, which are traditional symbols of Wales, 
                and participate in parades and cultural events. Schools and communities 
                often hold concerts, poetry readings, and other cultural activities that 
                celebrate Welsh language and heritage. The day is also marked by prayers 
                for Wales, for those working to preserve Welsh culture, and for all those 
                who seek to live simple, faithful lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of simplicity 
                and the courage to live a life focused on God. Many people make special 
                petitions for Wales and for those working to preserve Welsh culture and 
                language. The day is also a time to reflect on St. David's motto and 
                to pray for the strength to be joyful, keep the faith, and do the little 
                things that make a difference in the lives of others. St. David's feast 
                day encourages us to remember that we are all called to be witnesses to 
                Christ in our daily lives and to serve God and others with joy and faithfulness.
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
                  <li>• <strong>Wales:</strong> Patron saint of Wales</li>
                  <li>• <strong>Poets:</strong> Patron of Welsh poets</li>
                  <li>• <strong>Vegetarians:</strong> Patron of those who eat simply</li>
                  <li>• <strong>Doves:</strong> Patron of doves and peace</li>
                  <li>• <strong>Springs:</strong> Patron of natural springs</li>
                  <li>• <strong>Monks:</strong> Patron of monastic communities</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Simplicity:</strong> Helper in living simply</li>
                  <li>• <strong>Joy:</strong> Patron of finding joy in faith</li>
                  <li>• <strong>Hospitality:</strong> Helper in welcoming others</li>
                  <li>• <strong>Preaching:</strong> Patron of effective preaching</li>
                  <li>• <strong>Faith:</strong> Patron of unwavering devotion</li>
                  <li>• <strong>Intercession:</strong> Powerful advocate in heaven</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. David</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. David, patron saint of Wales and model of simple living, help 
                    me to follow your example of joy, faith, and service to others.
                  </p>
                  <p className="mb-4">
                    Teach me to be content with little and to find happiness in serving 
                    God and my neighbor. Help me to be joyful in all circumstances and 
                    to keep the faith even when times are difficult.
                  </p>
                  <p>
                    St. David, pray for me that I may have the courage to do the little 
                    things that make a difference and to live a life that glorifies God. 
                    Help me to be a witness to Christ in all that I do and say. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Wales</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. David, patron saint of Wales, intercede for the people of Wales 
                    and for all who love and cherish Welsh culture and heritage.
                  </p>
                  <p>
                    Help us to preserve the traditions and values that you established, 
                    and to continue your work of spreading the Gospel and serving others. 
                    Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. David, pray for us!"
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
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Missionary Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Patrick
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron saint of Ireland and missionary.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-george" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. George
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron saint of England and soldiers.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-andrew" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Andrew
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron saint of Scotland and fishermen.
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