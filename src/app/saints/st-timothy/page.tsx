import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Timothy - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Timothy, close companion of St. Paul, first bishop of Ephesus, and recipient of two Pauline epistles.',
  keywords: [
    'st timothy',
    'saint timothy',
    'st timothy biography',
    'st timothy feast day',
    'st timothy patron saint',
    'catholic saints',
    'january 26 feast day',
    'biblical saints',
    'st paul companion',
    'ephesus bishop'
  ],
  openGraph: {
    title: 'St. Timothy - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Timothy, close companion of St. Paul and first bishop of Ephesus.',
    url: 'https://catholicbibleonline.com/saints/st-timothy',
  },
  twitter: {
    title: 'St. Timothy - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Timothy, close companion of St. Paul and first bishop of Ephesus.',
  }
}

export default function StTimothyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📜</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Timothy
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Companion of St. Paul, First Bishop of Ephesus, Martyr for the Faith
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Timothy</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">January 26</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📜</div>
              <div className="text-sm text-gray-600">Biblical</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Timothy</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Born at Lystra in Lycaonia, Timothy was the son of a Greek father and Eunice, a 
                converted Jewess. His mother's faith and the influence of his grandmother Lois 
                played a crucial role in his spiritual formation, as St. Paul later mentioned 
                that Timothy had been taught the Scriptures from infancy.
              </p>
              
              <p className="mb-6">
                Timothy joined St. Paul when the Apostle preached at Lystra, replacing Barnabas 
                as Paul's companion. He quickly became Paul's close friend and confidant, 
                accompanying him on his missionary journeys and serving as his trusted assistant 
                in spreading the Gospel.
              </p>
              
              <p className="mb-6">
                To placate the Jews and facilitate his ministry, Paul allowed Timothy to be 
                circumcised, since he was the son of a Jewess. This act of accommodation 
                demonstrated Paul's pastoral wisdom and Timothy's willingness to make sacrifices 
                for the sake of the Gospel.
              </p>
              
              <p className="mb-6">
                Timothy accompanied Paul on his second missionary journey, becoming an integral 
                part of the Apostle's mission team. When Paul was forced to flee Berea because 
                of the enmity of the Jews there, Timothy remained behind to continue the work, 
                showing his courage and commitment to the mission.
              </p>
              
              <p className="mb-6">
                After a time, Timothy was sent to Thessalonica to report on the condition of 
                the Christians there and to encourage them under persecution. His report was 
                so important that it led to Paul's first letter to the Thessalonians when he 
                joined Timothy at Corinth.
              </p>
              
              <p className="mb-6">
                In 58 AD, Timothy and Erastus were sent to Macedonia, and then went to Corinth 
                to remind the Corinthians of Paul's teaching. They later accompanied Paul into 
                Macedonia and Achaia, continuing their collaborative ministry.
              </p>
              
              <p className="mb-6">
                Timothy was probably with Paul when the Apostle was imprisoned at Caesarea and 
                then Rome. During this time, Timothy himself was imprisoned but then freed, 
                demonstrating the risks he was willing to take for the sake of the Gospel.
              </p>
              
              <p>
                According to tradition, Timothy went to Ephesus, where he became its first bishop. 
                He was stoned to death there when he opposed the pagan festival of Katagogian 
                in honor of Diana, giving his life as a martyr for the faith he had so faithfully 
                proclaimed throughout his ministry.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Timothy: Faithful Companion and Bishop</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Faithful Discipleship</h3>
              <p className="mb-6">
                St. Timothy's life demonstrates what it means to be a faithful disciple and 
                companion in ministry. His willingness to accompany Paul on dangerous missionary 
                journeys, his courage in remaining behind when Paul had to flee, and his 
                dedication to the Gospel even at the cost of his own freedom and life, make 
                him a model for all Christians called to serve the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Recipient of Pauline Epistles</h3>
              <p className="mb-6">
                Timothy is unique among the saints as the recipient of two letters from St. Paul 
                that are now part of the New Testament. The First and Second Letters to Timothy 
                contain invaluable guidance for pastoral ministry, church leadership, and 
                Christian living, making Timothy's legacy central to the Church's understanding 
                of ministry and discipleship.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">First Bishop of Ephesus</h3>
              <p className="mb-6">
                As the first bishop of Ephesus, Timothy played a crucial role in establishing 
                the Church in one of the most important cities of the ancient world. His 
                leadership there helped to establish Christianity in a major center of pagan 
                worship, demonstrating the Church's mission to bring the Gospel to all cultures 
                and societies.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Martyr for the Faith</h3>
              <p>
                Timothy's martyrdom by stoning when he opposed the pagan festival in honor of 
                Diana shows his unwavering commitment to the truth of the Gospel. His willingness 
                to die rather than compromise his faith or remain silent in the face of idolatry 
                makes him a powerful example of Christian courage and fidelity.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">January 26</div>
              <p className="text-gray-600">Memorial of St. Timothy, Bishop and Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Timothy is celebrated on January 26th. This memorial honors 
                his role as a faithful companion of St. Paul, his service as bishop of Ephesus, 
                and his martyrdom for the faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Biblical Significance</h3>
              <p className="mb-6">
                St. Timothy's feast day is particularly significant because of his close 
                association with St. Paul and his role in the early Church. The letters written 
                to him by Paul continue to guide the Church in matters of pastoral ministry 
                and Christian leadership.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On his feast day, Catholics pray for his intercession, especially for those 
                in pastoral ministry, for bishops and priests, for those studying Scripture, 
                and for the courage to remain faithful to the Gospel in the face of opposition.
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
                  <li>• <strong>Bishops and Priests:</strong> Patron of pastoral ministry</li>
                  <li>• <strong>Scripture Study:</strong> Helper for those studying the Bible</li>
                  <li>• <strong>Missionaries:</strong> Patron of evangelization work</li>
                  <li>• <strong>Ephesus:</strong> First bishop of Ephesus</li>
                  <li>• <strong>Young Ministers:</strong> Patron of those beginning ministry</li>
                  <li>• <strong>Church Leadership:</strong> Model for church governance</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Faithful Discipleship:</strong> Helper for those following Christ</li>
                  <li>• <strong>Courage in Ministry:</strong> Patron of those facing opposition</li>
                  <li>• <strong>Pastoral Care:</strong> Helper for those serving others</li>
                  <li>• <strong>Biblical Scholarship:</strong> Patron of theological study</li>
                  <li>• <strong>Church Unity:</strong> Helper for ecumenical efforts</li>
                  <li>• <strong>Martyrdom:</strong> Patron of those persecuted for faith</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Timothy</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Timothy, faithful companion of St. Paul and first bishop of Ephesus, 
                    who dedicated your life to spreading the Gospel and serving the Church, 
                    pray for us who call upon your intercession.
                  </p>
                  <p className="mb-4">
                    Help us to be faithful disciples of Christ, courageous in our witness to 
                    the truth, and dedicated to the service of others. Teach us to study and 
                    proclaim the Scriptures with love and wisdom.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace to 
                    serve God faithfully in whatever ministry He calls us to. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Pastoral Ministry</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Timothy, patron of bishops and priests, intercede for all those 
                    called to pastoral ministry. Help them to be faithful to their calling, 
                    courageous in their witness, and loving in their service to God's people.
                  </p>
                  <p>
                    May they, like you, find strength in the Scriptures and guidance in the 
                    Holy Spirit. Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Scripture Study</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Timothy, who was taught the Scriptures from infancy and became 
                    a faithful minister of the Word, help us to love and study the Bible 
                    with devotion and understanding.
                  </p>
                  <p>
                    May we, like you, find in the Scriptures the wisdom and strength we need 
                    to live as faithful disciples of Christ. Through Christ our Lord. Amen."
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
                  Apostle to the Gentiles and mentor of Timothy, author of the Pauline epistles.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-stephen" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Stephen
                </h3>
                <p className="text-gray-700 text-sm">
                  First deacon and first Christian martyr, known for his powerful preaching.
                </p>
              </div>
            </Link>

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