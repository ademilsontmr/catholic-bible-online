import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Barnabas - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Barnabas, apostle and companion of St. Paul, known as the "Son of Encouragement."',
  keywords: [
    'st barnabas',
    'saint barnabas',
    'st barnabas biography',
    'st barnabas feast day',
    'st barnabas patron saint',
    'catholic saints',
    'june 11 feast day'
  ],
  openGraph: {
    title: 'St. Barnabas - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Barnabas, apostle and companion of St. Paul.',
    url: 'https://catholicbibleonline.com/saints/st-barnabas',
  },
  twitter: {
    title: 'St. Barnabas - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Barnabas, apostle and companion of St. Paul.',
  }
}

export default function StBarnabasPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📖</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Barnabas
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Apostle and Companion of St. Paul, Son of Encouragement
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Barnabas</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">June 11</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📖</div>
              <div className="text-sm text-gray-600">Apostle</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Barnabas</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Barnabas, originally named Joseph, was born in Cyprus to Jewish parents. His life is primarily documented 
                in the New Testament, particularly in the Acts of the Apostles, where he emerges as one of the most important 
                figures in the early Christian Church.
              </p>
              
              <p className="mb-6">
                A man of remarkable generosity and faith, Barnabas sold his property and gave the proceeds to the Apostles 
                to support the fledgling Christian community in Jerusalem. This act of selflessness earned him the name 
                "Barnabas," which means "Son of Encouragement" or "Son of Consolation" - a fitting title for one who would 
                become a great encourager and peacemaker in the early Church.
              </p>
              
              <p className="mb-6">
                Barnabas played a crucial role in the acceptance of St. Paul into the Christian community. When Paul, then 
                known as Saul, arrived in Jerusalem after his conversion, the disciples were afraid of him, remembering his 
                previous persecution of Christians. It was Barnabas who took Paul under his wing, vouched for his genuine 
                conversion, and introduced him to the Apostles.
              </p>
              
              <p className="mb-6">
                Together with Paul, Barnabas embarked on the first missionary journey, traveling to Cyprus, Perga, Antioch 
                in Pisidia, Iconium, and Lystra. Their partnership was marked by both great success and intense persecution. 
                In Lystra, they were first mistaken for gods by the pagans, then violently opposed by the Jews who stoned 
                Paul and left him for dead.
              </p>
              
              <p className="mb-6">
                Barnabas and Paul also played a crucial role in the Council of Jerusalem, where they defended the position 
                that Gentile converts did not need to follow Jewish customs like circumcision. This decision was fundamental 
                to the spread of Christianity beyond the Jewish community.
              </p>
              
              <p>
                Despite their close partnership, Barnabas and Paul eventually parted ways over a disagreement regarding John 
                Mark, Barnabas's cousin. Paul objected to taking Mark on another journey because he had deserted them earlier, 
                but Barnabas insisted on giving him a second chance. This disagreement led to their separation, with Barnabas 
                taking Mark to Cyprus while Paul chose Silas as his companion.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Barnabas: Son of Encouragement</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Barnabas exemplifies the virtues of encouragement, generosity, and reconciliation. His willingness to 
                give up his wealth for the sake of the Gospel demonstrates the radical commitment required of Christ's followers. 
                His role as a peacemaker and bridge-builder between Jewish and Gentile Christians was crucial for the unity 
                and growth of the early Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Encouragement</h3>
              <p className="mb-6">
                Barnabas's very name, meaning "Son of Encouragement," reflects his character and ministry. He consistently 
                supported and encouraged others in their faith journey. His defense of Paul and his willingness to give John 
                Mark a second chance show his commitment to seeing the best in others and helping them grow.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Missionary Zeal</h3>
              <p className="mb-6">
                Barnabas's missionary journeys with Paul established the pattern for Christian evangelization that would 
                spread throughout the Roman Empire. His work in Cyprus and his role in the Council of Jerusalem helped 
                establish Christianity as a universal faith open to all peoples.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Unity</h3>
              <p>
                Barnabas's participation in the Council of Jerusalem helped resolve one of the most critical issues facing 
                the early Church. His example continues to inspire Christians to work for unity and reconciliation in the 
                Church and in the world.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">June 11</div>
              <p className="text-gray-600">Feast of St. Barnabas, Apostle</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Barnabas is celebrated on June 11th in the Roman Catholic Church. His feast day is marked by special 
                prayers and readings that highlight his role as an apostle and missionary. The liturgy often emphasizes 
                his generosity, encouragement, and commitment to spreading the Gospel.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                In Cyprus, where Barnabas is considered the founder of the Church, his feast day is celebrated with great 
                solemnity and processions. Many churches dedicated to St. Barnabas hold special services and community 
                gatherings on this day.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                Devotees pray to St. Barnabas for the gifts of encouragement, generosity, and missionary zeal. His 
                intercession is sought by those working for Christian unity and reconciliation.
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
                  <li>• <strong>Missionaries:</strong> For his extensive missionary work with St. Paul</li>
                  <li>• <strong>Cyprus:</strong> As the traditional founder of the Cypriot Church</li>
                  <li>• <strong>Antioch:</strong> For his work in establishing the Christian community there</li>
                  <li>• <strong>Peacemakers:</strong> For his role in resolving conflicts in the early Church</li>
                  <li>• <strong>Encouragers:</strong> For his ministry of encouragement and support</li>
                  <li>• <strong>Generous Givers:</strong> For his willingness to give up his wealth</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Reconciliation:</strong> For his work in bringing people together</li>
                  <li>• <strong>Second Chances:</strong> For his willingness to give John Mark another opportunity</li>
                  <li>• <strong>Christian Unity:</strong> For his role in the Council of Jerusalem</li>
                  <li>• <strong>Evangelization:</strong> For his missionary zeal and commitment</li>
                  <li>• <strong>Bridge Building:</strong> For connecting different communities</li>
                  <li>• <strong>Generosity:</strong> For his selfless giving to the Church</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Barnabas</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Glorious St. Barnabas, Son of Encouragement, you who gave up your wealth for the sake of the Gospel 
                    and dedicated your life to spreading the Good News, intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    Help us to be generous with our time, talents, and treasure in service to Christ and His Church. 
                    Grant us the courage to encourage others in their faith journey and to work for unity and reconciliation 
                    in our communities.
                  </p>
                  <p>
                    May we follow your example of missionary zeal and commitment to the Gospel. Through your intercession, 
                    may we grow in the virtues of generosity, encouragement, and peacemaking. St. Barnabas, pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Barnabas, pray for us!"
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
            <Link href="/saints/st-paul" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Paul
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle to the Gentiles and great missionary, companion of St. Barnabas on his first journey.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-mark" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Mark
                </h3>
                <p className="text-gray-700 text-sm">
                  Evangelist and cousin of St. Barnabas, who gave him a second chance after his desertion.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-peter" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peter
                </h3>
                <p className="text-gray-700 text-sm">
                  Prince of the Apostles and leader of the early Church, with whom Barnabas worked closely.
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