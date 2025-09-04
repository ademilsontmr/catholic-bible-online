import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. John Paul II - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. John Paul II, Pope John Paul the Great, known for his extensive travels and love for youth.',
  keywords: [
    'st john paul ii',
    'pope john paul ii',
    'john paul the great',
    'modern saints',
    'catholic saints',
    'october 22 feast day',
    'world youth day'
  ],
  openGraph: {
    title: 'St. John Paul II - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John Paul II, Pope John Paul the Great, known for his extensive travels and love for youth.',
    url: 'https://catholicbibleonline.com/saints/st-john-paul-ii',
  },
  twitter: {
    title: 'St. John Paul II - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John Paul II, Pope John Paul the Great, known for his extensive travels and love for youth.',
  }
}

export default function StJohnPaulIIPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌎</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. John Paul II
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pope John Paul the Great, Shepherd of the World
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. John Paul II</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 22</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌎</div>
              <div className="text-sm text-gray-600">Modern Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. John Paul II</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. John Paul II, born Karol Józef Wojtyła on May 18, 1920, in Wadowice, Poland, 
                was the youngest of three children in a devout Catholic family. His early life was 
                marked by tragedy - his mother died when he was 9, and his older brother died when 
                he was 12. Despite these losses, Karol developed a deep faith and love for the Church. 
                He was an excellent student and had a passion for literature, theater, and sports.
              </p>
              
              <p className="mb-6">
                During World War II, Karol worked in a quarry and chemical factory while secretly 
                studying for the priesthood. He was ordained a priest in 1946 and continued his 
                studies in Rome. He returned to Poland where he served as a parish priest and 
                university chaplain, earning a reputation as a brilliant theologian and compassionate 
                pastor. In 1958, he was consecrated a bishop and in 1964 became Archbishop of Kraków.
              </p>
              
              <p className="mb-6">
                In 1967, Karol was created a cardinal by Pope Paul VI. He participated in the Second 
                Vatican Council and became known for his theological insights and pastoral care. On 
                October 16, 1978, at the age of 58, he was elected Pope, taking the name John Paul II. 
                He was the first non-Italian pope in 455 years and the first Polish pope in history.
              </p>
              
              <p>
                Pope John Paul II's pontificate lasted nearly 27 years, making him one of the longest-serving 
                popes in history. He traveled extensively, visiting 129 countries and becoming known as 
                the "Pilgrim Pope." He played a crucial role in the fall of communism in Eastern Europe, 
                established World Youth Day, and wrote extensively on theology and philosophy. He died 
                on April 2, 2005, and was canonized by Pope Francis on April 27, 2014. His feast day 
                is celebrated on October 22nd, the anniversary of his papal inauguration.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. John Paul II: Shepherd of the World</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Shepherd of the World</h3>
              <p className="mb-6">
                St. John Paul II's greatest legacy is his role as a global shepherd who brought the 
                Gospel to every corner of the world. His extensive travels - visiting 129 countries 
                and covering over 1.1 million kilometers - earned him the title "Pilgrim Pope." He 
                showed that the papacy could be a powerful force for peace, justice, and human dignity 
                on the world stage. His presence in countries around the world brought hope and 
                encouragement to millions of Catholics and non-Catholics alike.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Champion of Human Dignity</h3>
              <p className="mb-6">
                John Paul II was a tireless advocate for human dignity and the sanctity of life. His 
                encyclicals, such as "Evangelium Vitae" (The Gospel of Life) and "Veritatis Splendor" 
                (The Splendor of Truth), provided profound theological foundations for the Church's 
                teachings on life, family, and morality. He consistently spoke out against abortion, 
                euthanasia, and other threats to human life, while also advocating for social justice 
                and the rights of workers and the poor.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Bridge Builder and Peacemaker</h3>
              <p>
                John Paul II played a crucial role in the fall of communism in Eastern Europe, 
                particularly in his native Poland. His support for the Solidarity movement and his 
                visits to Poland helped inspire the peaceful revolution that led to the fall of the 
                Iron Curtain. He also worked tirelessly to build bridges between different religions, 
                meeting with leaders of other faiths and promoting interreligious dialogue. His 
                famous prayer meeting in Assisi in 1986 brought together leaders of the world's 
                major religions to pray for peace.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">October 22</div>
              <p className="text-gray-600">Feast of St. John Paul II</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. John Paul II is celebrated on October 22nd, the anniversary of his 
                papal inauguration in 1978. This date falls during the autumn season, a time of 
                harvest and reflection, which is fitting for a saint whose life was a harvest of 
                faith, hope, and love for the entire world. The feast is celebrated as an optional 
                memorial throughout the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. John Paul II's feast day, many people participate in World Youth Day events, 
                attend special Masses, or make pilgrimages to his tomb in St. Peter's Basilica. Some 
                churches hold prayer services and educational programs about his life and teachings. 
                Many people pray for his intercession for young people, families, and world peace. 
                The day is also marked by celebrations in Poland and other countries where he had 
                special significance.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray the Novena to St. John Paul II, the Prayer 
                to St. John Paul II, or to make a special petition for young people, families, or 
                world peace. Many people also visit churches dedicated to St. John Paul II or make 
                pilgrimages to his shrine in Kraków, Poland.
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
                  <li>• <strong>Young People:</strong> Patron of youth and World Youth Day</li>
                  <li>• <strong>Families:</strong> Patron of family life and values</li>
                  <li>• <strong>World Youth Day:</strong> Patron of the international youth event</li>
                  <li>• <strong>Poland:</strong> Patron saint of Poland</li>
                  <li>• <strong>Human Life:</strong> Patron of the pro-life movement</li>
                  <li>• <strong>World Peace:</strong> Patron of peacemakers</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Evangelization:</strong> Helper for spreading the Gospel</li>
                  <li>• <strong>Interreligious Dialogue:</strong> Patron of religious unity</li>
                  <li>• <strong>Social Justice:</strong> Guide for workers' rights</li>
                  <li>• <strong>Cultural Renewal:</strong> Patron of Christian culture</li>
                  <li>• <strong>Marian Devotion:</strong> Helper for devotion to Mary</li>
                  <li>• <strong>Priestly Vocations:</strong> Patron of seminarians</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. John Paul II</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. John Paul II, you who traveled the world as a pilgrim of peace and love, 
                    help me to be a witness to Christ in my daily life. Teach me to have the same 
                    courage and faith that you showed in facing the challenges of our time.
                  </p>
                  <p className="mb-4">
                    Help me to love young people as you did and to work for the dignity of every 
                    human person. May your example of prayer, sacrifice, and service inspire me to 
                    be more generous in my love for God and neighbor.
                  </p>
                  <p>
                    St. John Paul II, pray for me that I may have the strength to say 'Be not afraid' 
                    and to follow Christ with the same joy and enthusiasm that you showed to the world. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Young People</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. John Paul II, you who had such a special love for young people and founded 
                    World Youth Day, intercede for all the youth of the world. Help them to discover 
                    their vocation and to follow Christ with courage and joy.
                  </p>
                  <p>
                    May your example inspire them to be saints and to build a better world based on 
                    the values of the Gospel. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. John Paul II, pray for us!"
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
            <Link href="/saints/st-maximilian-kolbe" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Maximilian Kolbe
                </h3>
                <p className="text-gray-700 text-sm">
                  Polish Franciscan priest and martyr who inspired John Paul II's love for Poland.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-teresa-calcutta" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Teresa of Calcutta
                </h3>
                <p className="text-gray-700 text-sm">
                  Mother Teresa, whom John Paul II greatly admired for her service to the poor.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-faustina" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Faustina Kowalska
                </h3>
                <p className="text-gray-700 text-sm">
                  Polish mystic whose Divine Mercy devotion was promoted by John Paul II.
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