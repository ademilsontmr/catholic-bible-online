import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Pius X - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Pius X, Pope who inaugurated liturgical renewal and restored frequent communion from childhood.',
  keywords: [
    'st pius x',
    'saint pius x',
    'st pius x biography',
    'st pius x feast day',
    'st pius x patron saint',
    'catholic saints',
    'pope saints'
  ],
  openGraph: {
    title: 'St. Pius X - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Pius X, Pope who inaugurated liturgical renewal.',
    url: 'https://catholicbibleonline.com/saints/st-pius-x',
  },
  twitter: {
    title: 'St. Pius X - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Pius X, Pope who inaugurated liturgical renewal.',
  }
}

export default function StPiusXPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Pius X
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pope of the Liturgical Renewal and Restorer of Frequent Communion
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Pius X</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 21</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Pope</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Pius X</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                On June 2, 1835, Giuseppe Melchiorre Sarto saw the light of earth at Riesi, Province of Treviso, 
                in Venice. Born into a poor family, he would rise from humble beginnings to become one of the 
                most influential popes in the history of the Church. His journey from a simple parish priest to 
                the Chair of St. Peter is a testament to God's grace working through human humility and dedication.
              </p>
              
              <p className="mb-6">
                Giuseppe Sarto was ordained a priest in 1858 and served in various pastoral roles, always 
                demonstrating a deep love for the Eucharist and a commitment to the spiritual welfare of his 
                flock. His reputation for holiness and pastoral zeal grew, leading to his appointment as bishop 
                of Mantua in 1884, and later as patriarch of Venice in 1893. Throughout his episcopal ministry, 
                he maintained the simplicity and humility that would characterize his papacy.
              </p>
              
              <p className="mb-6">
                In 1903, following the death of Pope Leo XIII, Cardinal Sarto was elected pope, taking the name 
                Pius X. His election came as a surprise to many, as he was not considered a leading candidate. 
                However, his deep spirituality and pastoral experience made him the ideal choice for a Church 
                facing the challenges of the modern world. From the moment of his election, he made it clear 
                that his mission was to "renew all things in Christ."
              </p>
              
              <p className="mb-6">
                As pope, St. Pius X inaugurated a liturgical renewal that would have far-reaching effects on 
                the Church's worship. He promoted the active participation of the faithful in the liturgy and 
                worked to restore the beauty and dignity of Catholic worship. His most significant liturgical 
                reform was the restoration of frequent communion from childhood, making the Eucharist more 
                accessible to all Catholics, especially children.
              </p>
              
              <p className="mb-6">
                St. Pius X waged an unwavering war against the heresy and evils of Modernism, which threatened 
                to undermine the foundations of Catholic faith. He issued the encyclical "Pascendi Dominici 
                Gregis" in 1907, which systematically refuted Modernist errors and provided clear guidance for 
                the faithful. His defense of orthodoxy was not motivated by fear, but by love for the truth and 
                concern for the salvation of souls.
              </p>
              
              <p className="mb-6">
                The saintly pope also gave great impetus to biblical studies, encouraging Catholics to read and 
                study Sacred Scripture while ensuring that such study remained faithful to Church teaching. He 
                brought about the codification of Canon Law, which was promulgated in 1917, providing the Church 
                with a clear and systematic legal framework.
              </p>
              
              <p>
                On August 20, 1914, St. Pius X saw the light of heaven, having served the Church with 
                extraordinary dedication and holiness. His last will and testament bears the striking sentence: 
                "I was born poor, I have lived in poverty, and I wish to die poor." On May 29, 1954, he who 
                had become the two hundred fifty-ninth pope was canonized, confirming what the faithful had 
                long recognized: that he was truly a saint.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Pius X: Pope of the Eucharist</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Restorer of Frequent Communion</h3>
              <p className="mb-6">
                St. Pius X's most enduring legacy is his restoration of frequent communion from childhood. 
                Before his pontificate, it was common practice to delay First Communion until adolescence or 
                even later. Pius X, recognizing the importance of early and frequent reception of the Eucharist, 
                lowered the age for First Communion to seven years (the age of reason) and encouraged daily 
                communion for all Catholics. This reform had a profound impact on Catholic spirituality and 
                remains one of his most beloved contributions to the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Renewal Pioneer</h3>
              <p className="mb-6">
                St. Pius X inaugurated the liturgical renewal that would later be fully implemented by the 
                Second Vatican Council. He promoted the active participation of the faithful in the liturgy, 
                encouraged the singing of Gregorian chant, and worked to restore the beauty and dignity of 
                Catholic worship. His motu proprio "Tra le Sollecitudini" (1903) laid the foundation for 
                modern liturgical reform, emphasizing the importance of music in worship and the need for 
                congregational participation.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Defender of Orthodoxy</h3>
              <p className="mb-6">
                In an age when Modernism threatened to undermine the foundations of Catholic faith, St. Pius X 
                stood as a bulwark of orthodoxy. His encyclical "Pascendi Dominici Gregis" (1907) systematically 
                refuted Modernist errors and provided clear guidance for the faithful. He also established the 
                Anti-Modernist Oath for clergy and teachers, ensuring that those entrusted with the formation 
                of others remained faithful to Catholic doctrine. His defense of truth was always motivated by 
                love for souls and concern for their salvation.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Papal Holiness</h3>
              <p>
                Above all, St. Pius X's holiness shone forth conspicuously. From him we learn that "the folly 
                of the Cross," simplicity of life, and humility of heart are still the highest wisdom and the 
                indispensable conditions of a perfect Christian life. His life demonstrates that true apostolic 
                fruitfulness comes not from worldly power or influence, but from deep union with Christ through 
                prayer, sacrifice, and humble service. His example continues to inspire popes, bishops, priests, 
                and all the faithful to live lives of authentic holiness.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">August 21</div>
              <p className="text-gray-600">Feast of St. Pius X, Pope</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Pius X's feast day is celebrated on August 21st, commemorating his death and his 
                contributions to the Church as pope, reformer, and saint. This feast is particularly important 
                for those involved in liturgical ministry, catechesis, and the formation of children, as St. 
                Pius X is the patron of these important areas of Church life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On his feast day, many parishes and schools hold special celebrations for children receiving 
                their First Communion, as St. Pius X is the patron of First Communicants. Some communities 
                also hold Eucharistic processions or special Masses focusing on the importance of frequent 
                communion. His example of simplicity and humility is often highlighted in homilies and 
                catechetical materials.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                Devotees pray to St. Pius X for guidance in liturgical matters, for the protection of children 
                preparing for First Communion, for strength in defending the faith against error, and for the 
                grace to live lives of simplicity and humility. His intercession is particularly sought by 
                popes, bishops, priests, catechists, and all those involved in the formation of children in 
                the faith.
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
                  <li>• <strong>Popes:</strong> As a model of papal holiness and leadership</li>
                  <li>• <strong>First Communicants:</strong> For his restoration of early communion</li>
                  <li>• <strong>Pilgrims:</strong> For his care of the faithful</li>
                  <li>• <strong>Catechists:</strong> For his emphasis on religious education</li>
                  <li>• <strong>Liturgical Ministers:</strong> For his liturgical reforms</li>
                  <li>• <strong>Children:</strong> For his love and care for young people</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Eucharistic Devotion:</strong> For deeper love of the Eucharist</li>
                  <li>• <strong>Liturgical Renewal:</strong> For authentic worship</li>
                  <li>• <strong>Orthodoxy:</strong> For defense of the faith</li>
                  <li>• <strong>Simplicity:</strong> For lives of humility and poverty</li>
                  <li>• <strong>Religious Education:</strong> For effective catechesis</li>
                  <li>• <strong>Papal Ministry:</strong> For guidance of the Church</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Pius X</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed St. Pius X, Pope of the Eucharist and defender of the faith, you who dedicated 
                    your life to renewing all things in Christ, intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    Help us to love the Eucharist as you did, and to receive Holy Communion frequently and 
                    worthily. Grant us the grace to participate actively in the liturgy and to find in the 
                    Mass the source of our strength and joy.
                  </p>
                  <p className="mb-4">
                    Inspire us with your example of simplicity and humility, showing us that true greatness 
                    comes from serving others and living in poverty of spirit. Help us to defend the faith 
                    against error and to remain faithful to the teachings of the Church.
                  </p>
                  <p>
                    Through your intercession, may we grow in holiness and become true disciples of Christ, 
                    always ready to serve the Church and our neighbor with love and dedication. St. Pius X, 
                    pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Pius X, Pope of the Eucharist and model of humility, pray for us!"
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
                  The first Pope and foundation of the Church, whose successor St. Pius X became.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john-bosco" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John Bosco
                </h3>
                <p className="text-gray-700 text-sm">
                  Educator and founder of the Salesians, who also worked for the welfare of children.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-teresa-lisieux" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thérèse of Lisieux
                </h3>
                <p className="text-gray-700 text-sm">
                  The Little Flower, whose "little way" of spiritual childhood resonated with Pius X's love for children.
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