import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Robert Bellarmine - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Robert Bellarmine, Jesuit cardinal and Doctor of the Church, defender of Catholic doctrine.',
  keywords: [
    'st robert bellarmine',
    'saint robert bellarmine',
    'st robert bellarmine biography',
    'st robert bellarmine feast day',
    'st robert bellarmine patron saint',
    'catholic saints',
    'jesuit saints'
  ],
  openGraph: {
    title: 'St. Robert Bellarmine - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Robert Bellarmine, Jesuit cardinal and Doctor of the Church.',
    url: 'https://catholicbibleonline.com/saints/st-robert-bellarmine',
  },
  twitter: {
    title: 'St. Robert Bellarmine - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Robert Bellarmine, Jesuit cardinal and Doctor of the Church.',
  }
}

export default function StRobertBellarminePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Robert Bellarmine
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Jesuit Cardinal and Doctor of the Church
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Robert Bellarmine</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">September 17</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📚</div>
              <div className="text-sm text-gray-600">Doctor</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Robert Bellarmine</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Born at Montepulciano, Italy, on October 4, 1542, St. Robert Bellarmine was the third of ten 
                children in a family deeply rooted in faith and piety. His mother, Cinzia Cervini, a niece of 
                Pope Marcellus II, was a model of Christian virtue, dedicated to almsgiving, prayer, meditation, 
                fasting, and mortification of the body. This holy environment would shape the future saint's 
                spiritual formation and commitment to the Church.
              </p>
              
              <p className="mb-6">
                Robert entered the newly formed Society of Jesus in 1560, joining the Jesuits at a time when 
                the order was still in its infancy but rapidly growing in influence and mission. After his 
                ordination, he went on to teach at Louvain from 1570 to 1576, where he became famous for his 
                eloquent Latin sermons. His time in Louvain marked the beginning of his reputation as a 
                brilliant theologian and preacher, capable of defending Catholic doctrine with clarity and 
                intellectual rigor.
              </p>
              
              <p className="mb-6">
                In 1576, he was appointed to the prestigious chair of controversial theology at the Roman 
                College, a position that would define his life's work. He became Rector of the college in 
                1592, demonstrating his leadership abilities and commitment to education. His administrative 
                skills were further recognized when he was appointed Provincial of Naples in 1594, and his 
                service to the Church was honored with the cardinalate in 1598.
              </p>
              
              <p className="mb-6">
                This outstanding scholar and devoted servant of God became one of the most important defenders 
                of the Apostolic See during a tumultuous period in Church history. He defended the Church 
                against the anti-clericals in Venice and against the political tenets of James I of England, 
                demonstrating his ability to engage with both theological and political challenges to the 
                Catholic faith.
              </p>
              
              <p className="mb-6">
                Bellarmine composed an exhaustive apologetic work against the prevailing heretics of his day, 
                establishing himself as one of the foremost Catholic theologians of the Counter-Reformation. 
                His writings were characterized by their thoroughness, clarity, and fidelity to Catholic 
                teaching, making them essential resources for defending the faith against Protestant 
                challenges.
              </p>
              
              <p className="mb-6">
                In the field of church-state relations, he took a position based on principles now regarded 
                as fundamentally democratic - authority originates with God, but is vested in the people, 
                who entrust it to fit rulers. This balanced approach to political theology would influence 
                Catholic social teaching for centuries to come.
              </p>
              
              <p>
                This saint was the spiritual father of St. Aloysius Gonzaga, helping to guide the young 
                Jesuit in his path to holiness. He also helped St. Francis de Sales obtain formal approval 
                of the Visitation Order, demonstrating his influence in supporting new religious movements. 
                In his prudence, he opposed severe action in the case of Galileo, showing his commitment to 
                both truth and charity in dealing with scientific controversies. He has left us a host of 
                important writings, including works of devotion and instruction, as well as controversy. 
                He died in 1621, leaving behind a legacy of scholarship, holiness, and service to the Church.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Robert Bellarmine: Doctor of the Church</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Defender of Catholic Doctrine</h3>
              <p className="mb-6">
                St. Robert Bellarmine's legacy as a defender of Catholic doctrine is unparalleled. His 
                comprehensive apologetic works against the Protestant reformers established him as one of 
                the most important theologians of the Counter-Reformation. His writings provided the Church 
                with intellectual tools to defend the faith against heresy while maintaining the highest 
                standards of scholarship and theological rigor.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Doctor of the Church</h3>
              <p className="mb-6">
                Recognized as a Doctor of the Church, Bellarmine's theological contributions have been 
                officially acknowledged as having universal significance for the Church. His works continue 
                to be studied by theologians, canon lawyers, and catechists, providing timeless insights 
                into Catholic doctrine and practice. His elevation to this highest honor reflects the 
                enduring value of his theological and spiritual writings.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Father and Mentor</h3>
              <p className="mb-6">
                As the spiritual father of St. Aloysius Gonzaga, Bellarmine demonstrated his gift for 
                spiritual direction and formation. His guidance helped shape one of the Church's most 
                beloved saints, showing his ability to nurture holiness in others. His support for St. 
                Francis de Sales and the Visitation Order further demonstrates his commitment to fostering 
                new expressions of religious life in the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Balanced Approach to Church-State Relations</h3>
              <p>
                Bellarmine's writings on church-state relations established important principles that would 
                influence Catholic social teaching for centuries. His balanced approach, recognizing both 
                divine authority and human dignity, provided a foundation for understanding the proper 
                relationship between religious and civil authority. His democratic principles, though 
                expressed in the context of his time, continue to resonate in modern discussions of 
                religious freedom and political theology.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">September 17</div>
              <p className="text-gray-600">Feast of St. Robert Bellarmine, Bishop and Doctor of the Church</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Robert Bellarmine's feast day is celebrated on September 17th, commemorating his 
                death and his contributions to the Church as a theologian, cardinal, and Doctor of the 
                Church. This feast is particularly important for Jesuits, theologians, and those involved 
                in Catholic education and catechesis.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On his feast day, many Catholic institutions, especially Jesuit schools and universities, 
                hold special celebrations honoring his contributions to education and theology. Students 
                and faculty may participate in Mass, academic lectures on his writings, or service 
                activities that reflect his commitment to truth and charity.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                Devotees pray to St. Robert Bellarmine for guidance in theological studies, for the 
                courage to defend the faith, for wisdom in church-state relations, and for the grace to 
                balance intellectual rigor with spiritual charity. His intercession is particularly 
                sought by catechists, canon lawyers, theologians, and those involved in Catholic education.
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
                  <li>• <strong>Catechists:</strong> For his role in teaching and defending the faith</li>
                  <li>• <strong>Canon Lawyers:</strong> For his expertise in Church law and governance</li>
                  <li>• <strong>Theologians:</strong> For his contributions to Catholic theology</li>
                  <li>• <strong>Jesuits:</strong> As a prominent member of the Society of Jesus</li>
                  <li>• <strong>Students:</strong> For his dedication to education and learning</li>
                  <li>• <strong>Apologists:</strong> For his defense of Catholic doctrine</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Intellectual Formation:</strong> For growth in knowledge and wisdom</li>
                  <li>• <strong>Faith Defense:</strong> For courage in defending Catholic teaching</li>
                  <li>• <strong>Church Leadership:</strong> For guidance in ecclesiastical matters</li>
                  <li>• <strong>Academic Excellence:</strong> For success in theological studies</li>
                  <li>• <strong>Spiritual Direction:</strong> For wisdom in guiding others</li>
                  <li>• <strong>Church-State Relations:</strong> For balanced approaches to political theology</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Robert Bellarmine</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed St. Robert Bellarmine, Doctor of the Church and defender of Catholic truth, 
                    you who combined profound learning with deep humility, intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    Help us to grow in knowledge of our faith and to defend it with courage and charity. 
                    Grant us the wisdom to balance intellectual rigor with spiritual charity, as you did 
                    in your own life and writings.
                  </p>
                  <p className="mb-4">
                    Guide all catechists, theologians, and students in their pursuit of truth. Help us to 
                    understand the proper relationship between faith and reason, and to serve the Church 
                    with the same dedication and humility that characterized your life.
                  </p>
                  <p>
                    Through your intercession, may we grow in wisdom, knowledge, and love of God, and may 
                    we always be ready to give an account of the hope that is within us. St. Robert 
                    Bellarmine, pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Robert Bellarmine, Doctor of the Church, pray for us!"
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
            <Link href="/saints/st-aloysius-gonzaga" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Jesuit Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Aloysius Gonzaga
                </h3>
                <p className="text-gray-700 text-sm">
                  His spiritual son and fellow Jesuit, known for his purity and devotion to God.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-de-sales" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis de Sales
                </h3>
                <p className="text-gray-700 text-sm">
                  Whom he helped obtain approval for the Visitation Order.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-thomas-aquinas" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thomas Aquinas
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great Doctor of the Church and theological giant.
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