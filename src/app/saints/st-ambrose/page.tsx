import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Ambrose - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Ambrose, Bishop of Milan and Doctor of the Church.',
  keywords: [
    'st ambrose',
    'saint ambrose',
    'st ambrose biography',
    'st ambrose feast day',
    'st ambrose patron saint',
    'doctor of the church',
    'december 7 feast day',
    'catholic saints',
    'bishop of milan'
  ],
  openGraph: {
    title: 'St. Ambrose - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Ambrose, Bishop of Milan and Doctor of the Church.',
    url: 'https://catholicbibleonline.com/saints/st-ambrose',
  },
  twitter: {
    title: 'St. Ambrose - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Ambrose, Bishop of Milan and Doctor of the Church.',
  }
}

export default function StAmbrosePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🐝</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Ambrose
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Bishop of Milan, Doctor of the Church, Convertor of St. Augustine
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Ambrose</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">December 7</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🐝</div>
              <div className="text-sm text-gray-600">Learning</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Ambrose</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Ambrose, also known as Aurelius Ambrosius, is one of the four original doctors of the Church. He was the Bishop of Milan and became one of the most important theological figure of the 4th century. Ambrose was born around 340 AD to a Roman Christian family. He grew up with his siblings, Satyrus and Marcellina, in Trier, Belgic Gaul (present-day Germany).
              </p>
              
              <p className="mb-6">
                It is believed by many that when Ambrose was just an infant, a swarm of bees landed on his face and left behind a drop of honey. To his father, this was a sign that Ambrose would become someone great with a wonderful sense for speaking. After Ambrose's father passed away, he was educated in Rome, where he studied law, literature and rhetoric. Ambrose received a place on the council, like his father, and was made consular prefect, or the Governor, of Liguria and Emilia around 372. Ambrose's headquarters were in Milan, the then second capital of Italy.
              </p>
              
              <p className="mb-6">
                Ambrose remained Governor until 374 when he became the Bishop of Milan. After the former Bishop of Milan died, Ambrose attended the election to prevent any uproars between the Nicene Church and the Arians. While giving an address, the assembly began calling for him to become the next bishop. Ambrose was known for his Nicene beliefs, but Arians also favored him because he had previously shown charity in theological matters. However, being neither baptized or trained in theology, Ambrose refused to become the next bishop.
              </p>
              
              <p className="mb-6">
                He ran and attempted to hide, but his colleague gave him up. Within a week's time, Ambrose was baptized, ordained and duly consecrated bishop of Milan on December 7, 374. As bishop, he donated all of his land and gave his money to the poor. This made him widely popular and often times more politically powerful than even the emperor.
              </p>
              
              <p>
                He studied theology with Simplician, a presbyter of Rome. Using his new education, along with his knowledge of Greek, he took the time to study the Old Testament and Greek authors. He used all of this while preaching; his abilities impressed Augustine of Hippo, who previously thought poorly of Christian preachers.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Ambrose: Doctor of the Church</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Conversion of St. Augustine</h3>
              <p className="mb-6">
                After meeting Ambrose, Augustine reevaluated himself and was forever changed. In 387, Ambrose baptized Augustine, who he had a great influence on. St. Monica, Augustine's mother, loved Ambrose "as an angel of God who uprooted her son from his former ways and led him to his convictions of Christ." This conversion of one of the Church's greatest theologians stands as one of Ambrose's most significant contributions to Christianity.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Defender Against Arianism</h3>
              <p className="mb-6">
                According to legend, Ambrose tried to put an end to Arianism in Milan. He often attempted to theologically dispute their propositions. The Arians appealed to many high position leaders, but Ambrose was able to stay one step ahead. Around 386, the Emperor Valentinian II and his mother, Justine, along with many other people, including clergy, laypersons, and military, professed Arianism. They demanded some of the churches in Milan be dedicated to them, one in the city and one in the suburbs. Ambrose refused and was ordered to appear in front of the council, where he then spoke eloquently in defense of the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courageous Stand for the Faith</h3>
              <p className="mb-6">
                Ambrose is quoted with stating: "If you demand my person, I am ready to submit: carry me to prison or to death, I will not resist; but I will never betray the church of Christ. I will not call upon the people to succour me; I will die at the foot of the altar rather than desert it. The tumult of the people I will not encourage: but God alone can appease it." The imperial court did not like Ambrose's religious principles, but he was sought out to help and speak to Magnus Maximus to prevent him from descending upon Italy. Ambrose was successful.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical and Musical Contributions</h3>
              <p className="mb-6">
                Ambrose introduced reforms in the order and manner of public worship. He was known for his "liturgical flexibility that kept in mind that liturgy was a tool to serve people in worshiping God, and ought not to become a rigid entity that is invariable from place to place." Ambrose is credited with advising Augustine of Hippo to follow local liturgical customs. "When I am at Rome, I fast on a Saturday; when I am at Milan, I do not. Follow the custom of the church where you are," he stated. This advice remains today, and is translated in English as the saying, "When in Rome, do as the Romans do."
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Theological Writings and Hymns</h3>
              <p>
                Ambrose authored many of the Church's important writings and hymns. He is credited with composing the repertory Ambrosian chant, also known as the Antiphonal Chant. He is also credited with composing the hymn "Te Deum," which is believed to have been written when he baptized Augustine of Hippo. Ambrose studied largely on the virginity of Mary and her role as Mother of God. He viewed celibacy as superior to marriage and saw Mary as virginity's model.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">December 7</div>
              <p className="text-gray-600">Feast of St. Ambrose, Bishop and Doctor of the Church</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Ambrose is celebrated on December 7th, commemorating the day of his ordination as Bishop of Milan in 374. St. Ambrose was one of the four original Doctors of the Church, a title that recognizes his significant contributions to Christian theology and doctrine. His feast day falls during the Advent season, making it a fitting time to reflect on his role in preparing the way for Christ through his teaching and pastoral care.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. Ambrose's remarkable contributions to theology, liturgy, and pastoral care. His feast day serves as a reminder of the importance of strong leadership in the Church and the courage to stand firm in defense of the faith. Many dioceses and parishes named after St. Ambrose celebrate this day with special Masses and educational programs about his life and teachings. The day also emphasizes the importance of learning and theological study in the Christian life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. Ambrose for his intercession in matters of learning, courage in defending the faith, and pastoral leadership. Many people also pray for bishops, theologians, and those involved in education and formation. His example encourages us to be courageous in standing up for what is right, to be generous to the poor, and to use our gifts and education to serve God and His Church.
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
                  <li>• <strong>Bee Keepers:</strong> Patron of those who work with bees</li>
                  <li>• <strong>Beggars:</strong> Patron of the poor and needy</li>
                  <li>• <strong>Learning:</strong> Patron of students and education</li>
                  <li>• <strong>Milan:</strong> Patron of his episcopal city</li>
                  <li>• <strong>Bishops:</strong> Patron of episcopal ministry</li>
                  <li>• <strong>Theologians:</strong> Patron of theological study</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Courage:</strong> Helper in defending the faith</li>
                  <li>• <strong>Charity:</strong> Patron of generosity to the poor</li>
                  <li>• <strong>Liturgy:</strong> Helper in worship and prayer</li>
                  <li>• <strong>Conversion:</strong> Patron of those seeking faith</li>
                  <li>• <strong>Church Leadership:</strong> Helper for bishops and priests</li>
                  <li>• <strong>Music Ministry:</strong> Patron of sacred music</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Ambrose</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Ambrose, Bishop and Doctor of the Church, who with courage and wisdom 
                    defended the faith against heresy and guided the great St. Augustine to conversion, 
                    help us to be strong in our faith and generous in our charity. Through your intercession, 
                    may we have the courage to stand firm in defense of truth and the wisdom to guide others 
                    to Christ. Help us to use our gifts and education to serve God and His Church. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Ambrose, pray for us!"
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
            <Link href="/saints/st-augustine" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Augustine
                </h3>
                <p className="text-gray-700 text-sm">
                  The great theologian whom Ambrose converted and baptized.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-monica" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Monica
                </h3>
                <p className="text-gray-700 text-sm">
                  Augustine's mother who loved Ambrose as an angel of God.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-jerome" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Jerome
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great Doctor of the Church and contemporary of Ambrose.
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