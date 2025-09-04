import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Paul - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Paul, Apostle to the Gentiles and great missionary.',
  keywords: [
    'st paul',
    'saint paul',
    'apostle to the gentiles',
    'june 29 feast day',
    'catholic saints',
    'apostle saints',
    'missionary'
  ],
  openGraph: {
    title: 'St. Paul - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Paul, Apostle to the Gentiles and great missionary.',
    url: 'https://catholicbibleonline.com/saints/st-paul',
  },
  twitter: {
    title: 'St. Paul - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Paul, Apostle to the Gentiles and great missionary.',
  }
}

export default function StPaulPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📜</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Paul
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Apostle to the Gentiles and Great Missionary
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Paul</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">June 29</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📜</div>
              <div className="text-sm text-gray-600">Apostle Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Paul</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Paul, originally named Saul, was born in Tarsus, a city in Cilicia (modern-day Turkey), 
                around the year 5 A.D. He was a Roman citizen by birth and belonged to the tribe of Benjamin. 
                Saul was raised in a strict Jewish family and was educated in Jerusalem under the famous 
                rabbi Gamaliel, becoming a Pharisee and a zealous defender of Jewish law and tradition. 
                He was a tentmaker by trade, which would later support his missionary work. Saul was 
                initially a fierce persecutor of the early Christians, believing that the new movement 
                was a threat to Judaism and the Law of Moses.
              </p>
              
              <p className="mb-6">
                Saul's dramatic conversion occurred on the road to Damascus around the year 36 A.D. 
                While traveling to persecute Christians, he was struck down by a blinding light and 
                heard the voice of Jesus asking, "Saul, Saul, why do you persecute me?" This encounter 
                completely transformed his life. Saul was blinded for three days and was baptized by 
                Ananias, taking the name Paul. This conversion marked the beginning of his mission 
                as the Apostle to the Gentiles. Paul's transformation from persecutor to apostle 
                demonstrates the power of God's grace to change even the most hardened hearts.
              </p>
              
              <p className="mb-6">
                After his conversion, Paul spent several years in Arabia and Damascus, where he 
                received revelations from Christ and developed his understanding of the Gospel. 
                He then traveled to Jerusalem to meet with the other apostles, particularly Peter 
                and James. Paul's mission was primarily to the Gentiles, and he undertook three 
                major missionary journeys throughout the Roman Empire, establishing Christian 
                communities in cities such as Antioch, Ephesus, Corinth, Philippi, and Thessalonica. 
                His letters to these communities, which form a significant portion of the New Testament, 
                provide guidance on Christian doctrine, morality, and church organization.
              </p>
              
              <p className="mb-6">
                Paul's missionary work was marked by incredible hardships, including shipwrecks, 
                beatings, imprisonment, and constant opposition from both Jews and Gentiles. He 
                was arrested in Jerusalem and spent several years in prison in Caesarea before 
                being sent to Rome for trial. According to tradition, Paul was martyred in Rome 
                around the year 67 A.D., during the persecution of Emperor Nero. He was beheaded 
                outside the city walls, and his remains were buried in what is now the Basilica 
                of St. Paul Outside the Walls. Paul's death marked the end of his earthly mission, 
                but his influence on Christianity continues to this day through his writings and 
                the example of his life.
              </p>
              
              <p>
                St. Paul's legacy is immense. His thirteen letters in the New Testament - Romans, 
                Corinthians, Galatians, Ephesians, Philippians, Colossians, Thessalonians, Timothy, 
                Titus, and Philemon - form the foundation of Christian theology and provide guidance 
                for Christian living. His teachings on grace, faith, the Church as the Body of Christ, 
                and the universal call to holiness have shaped Christian thought for two millennia. 
                Paul's emphasis on the universality of salvation - that Christ came for all people, 
                Jew and Gentile alike - was revolutionary and helped establish Christianity as a 
                world religion. His feast day is celebrated on June 29th, along with St. Peter, 
                recognizing their joint role as the two great pillars of the early Church.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Paul: Apostle to the Gentiles</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Theologian and Writer</h3>
              <p className="mb-6">
                St. Paul's greatest legacy is his contribution to Christian theology through his 
                letters, which form a significant portion of the New Testament. His writings 
                address fundamental questions about salvation, grace, faith, the Church, and 
                Christian living. Paul's theology of justification by faith, his understanding 
                of the Church as the Body of Christ, and his teachings on the Holy Spirit have 
                profoundly influenced Christian thought throughout the centuries. His letters 
                were written to address specific situations in the early Christian communities, 
                but they contain timeless truths that continue to guide Christians today. Paul's 
                ability to articulate complex theological concepts in accessible language makes 
                his writings valuable for both scholars and ordinary believers.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Missionary and Evangelizer</h3>
              <p className="mb-6">
                St. Paul's missionary work established the pattern for Christian evangelization 
                that continues to this day. His three missionary journeys covered thousands of 
                miles across the Roman Empire, and he established Christian communities in major 
                cities throughout the Mediterranean world. Paul's approach to evangelization - 
                adapting his message to different cultures while remaining faithful to the Gospel 
                - serves as a model for missionaries today. His willingness to become "all things 
                to all people" in order to save some demonstrates his deep commitment to spreading 
                the Gospel. Paul's missionary zeal, despite facing constant opposition and suffering, 
                inspires Christians to be bold in sharing their faith and to persevere in the face 
                of difficulties.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Conversion and Transformation</h3>
              <p>
                St. Paul's dramatic conversion from persecutor to apostle serves as a powerful 
                example of God's ability to transform human lives. His story demonstrates that 
                no one is beyond the reach of God's grace and that God can use even the most 
                unlikely people for His purposes. Paul's transformation shows that true conversion 
                involves not just a change of mind but a complete reorientation of one's life 
                toward God. His willingness to suffer for the Gospel he once persecuted demonstrates 
                the depth of his conversion and his commitment to Christ. Paul's example encourages 
                Christians to be open to God's transforming grace and to trust that God can work 
                through their weaknesses and past mistakes to accomplish His purposes.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">June 29</div>
              <p className="text-gray-600">Feast of St. Peter and St. Paul</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Paul is celebrated on June 29th, along with St. Peter, as 
                the Feast of St. Peter and St. Paul. This joint celebration recognizes their 
                unique roles as the two great pillars of the early Church - Peter as the rock 
                upon which the Church was built, and Paul as the Apostle to the Gentiles. The 
                feast is celebrated as a solemnity in the Roman Catholic Church, making it one 
                of the most important feast days of the liturgical year. The feast falls during 
                the summer season, a time of growth and abundance, which is fitting for saints 
                who were instrumental in the growth and spread of the early Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Paul, many people participate in special prayers and 
                devotions to honor his memory and seek his intercession. Churches hold special 
                Masses and services, often featuring readings from Paul's letters. Many people 
                also take time to read and reflect on Paul's writings, particularly his letters 
                to the various Christian communities. The day is also marked by prayers for 
                missionaries and evangelizers, asking for St. Paul's intercession in helping 
                them to spread the Gospel effectively. Many people also reflect on their own 
                conversion experiences and how they can be more effective witnesses to Christ 
                in their daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of evangelization and 
                the courage to share the Gospel with others. Many people make special petitions 
                for missionaries and those involved in evangelization work, asking for St. Paul's 
                intercession in helping them to be effective witnesses to Christ. The day is 
                also a time to reflect on the importance of studying Scripture, particularly 
                Paul's letters, and to pray for the strength to live according to the Gospel. 
                St. Paul's feast day encourages us to remember that we are all called to be 
                witnesses to Christ and to share the Good News with others, regardless of our 
                background or past mistakes.
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
                  <li>• <strong>Missionaries:</strong> Patron of evangelizers</li>
                  <li>• <strong>Theologians:</strong> Patron of Christian theology</li>
                  <li>• <strong>Writers:</strong> Patron of Christian authors</li>
                  <li>• <strong>Public Speakers:</strong> Patron of preachers</li>
                  <li>• <strong>Gentiles:</strong> Patron of non-Jewish converts</li>
                  <li>• <strong>Rome:</strong> Patron of the city of Rome</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Conversion:</strong> Helper in spiritual transformation</li>
                  <li>• <strong>Evangelization:</strong> Patron of spreading the Gospel</li>
                  <li>• <strong>Perseverance:</strong> Helper in times of difficulty</li>
                  <li>• <strong>Unity:</strong> Patron of Christian unity</li>
                  <li>• <strong>Grace:</strong> Patron of God's grace</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Paul</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Paul, Apostle to the Gentiles and great missionary, help me to 
                    be a bold witness to Christ in my daily life.
                  </p>
                  <p className="mb-4">
                    Teach me to trust in God's grace and to rely on His strength rather 
                    than my own abilities. Help me to be willing to suffer for the Gospel 
                    and to persevere in spreading the Good News to others.
                  </p>
                  <p>
                    St. Paul, pray for me that I may have the courage to share my faith 
                    with others, the wisdom to understand God's Word, and the perseverance 
                    to follow Christ faithfully in all circumstances. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Missionaries</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Paul, patron of missionaries and evangelizers, intercede for all 
                    those who are called to spread the Gospel to others.
                  </p>
                  <p>
                    Help them to be effective witnesses to Christ and to persevere in their 
                    mission despite difficulties and opposition. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Paul, pray for us!"
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
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peter
                </h3>
                <p className="text-gray-700 text-sm">
                  First pope and leader of the apostles.
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
                  First-called apostle and patron of Scotland.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John
                </h3>
                <p className="text-gray-700 text-sm">
                  Beloved disciple and evangelist.
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