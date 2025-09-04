import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Thomas More - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Thomas More, English lawyer, statesman, and martyr who refused to acknowledge Henry VIII as head of the Church.',
  keywords: [
    'st thomas more',
    'saint thomas more',
    'st thomas more biography',
    'st thomas more feast day',
    'st thomas more patron saint',
    'thomas more martyr',
    'june 22 feast day',
    'english saints'
  ],
  openGraph: {
    title: 'St. Thomas More - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Thomas More, English lawyer, statesman, and martyr.',
    url: 'https://catholicbibleonline.com/saints/st-thomas-more',
  },
  twitter: {
    title: 'St. Thomas More - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Thomas More, English lawyer, statesman, and martyr.',
  }
}

export default function StThomasMorePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚖️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Thomas More
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            English Lawyer, Statesman, and Martyr, Patron of Lawyers and Civil Servants
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Thomas More</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">June 22</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚖️</div>
              <div className="text-sm text-gray-600">Law & Justice</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Thomas More</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Thomas More was born in London on February 7, 1478, to Sir John More, a lawyer and judge who rose 
                to prominence during the reign of Edward IV. His father's connections and wealth would help Thomas rise 
                in station as a young man. Thomas' mother was Agnes Graunger, the first wife of John More.
              </p>
              
              <p className="mb-6">
                Thomas attended St. Anthony's School, one of the best schools in London at that time. In 1490, he became 
                a household page to John Morton, the Archbishop of Canterbury and Lord Chancellor of England. Archbishop 
                Morton was a Renaissance man and inspired Thomas to pursue his own education.
              </p>
              
              <p className="mb-6">
                Thomas More entered Oxford in 1492, where he learned Latin, Greek and prepared for his future studies. 
                In 1494, he left Oxford to become a lawyer and trained in London until 1502 when he was finally approved 
                to begin practice.
              </p>
              
              <p className="mb-6">
                Almost as soon as More became a lawyer, he found himself contemplating another path in life. For two years, 
                between 1503 and 1504, More lived next to a Carthusian monastery and found himself called to follow their 
                lifestyle of simple piety. He often joined their spiritual exercises, but by 1504, he had decided to remain 
                in the secular world and stood for election to Parliament.
              </p>
              
              <p>
                Thomas More married his first wife, Jane Colt, in 1505. They had four children together before her death 
                in 1511. After Jane's death, Thomas quickly remarried to Alice Harpur Middleton, a wealthy widow. Thomas 
                was considered a doting father and insisted that his daughters receive the same education as his son.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Thomas More: Martyr for Conscience</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Rise to Power</h3>
              <p className="mb-6">
                In 1504, More was elected to Parliament to represent the region of Great Yarmouth, and in 1510 rose to 
                represent London. During his service to the people of London, he earned a reputation as being honest and 
                effective. He became a Privy Counselor in 1514 and was knighted in 1521, becoming Under-Treasurer of the Exchequer.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Lord Chancellor</h3>
              <p className="mb-6">
                More became Lord Chancellor in 1529 and was immediately effective, working with speed and precision that 
                is admired today. He was likely one of Henry VIII's most effective servants and was fiercely loyal to the king. 
                During his tenure, More prosecuted those accused of heresy and worked tirelessly to defend the Catholic faith in England.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">The Crisis of Conscience</h3>
              <p className="mb-6">
                In 1530, as Henry worked to obtain an annulment from his wife, Catherine, More refused to sign a letter to 
                the Pope requesting an annulment. This was More's first time crossing Henry. The relationship became strained 
                when Henry purged many of the clergy who supported the Pope, making it clear that Henry was prepared to break 
                away from the Church in Rome.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Martyrdom</h3>
              <p>
                In 1532, More found himself unable to work for Henry VIII and offered his resignation, citing failing health. 
                In 1534, More was ordered to take an oath acknowledging Henry as head of the church, which he refused. He was 
                arrested, imprisoned in the Tower of London, and eventually convicted of treason. On July 6, 1535, he ascended 
                the scaffold, proclaiming that he was "the king's good servant, but God's first."
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">June 22</div>
              <p className="text-gray-600">Feast of St. Thomas More</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Thomas More is celebrated on June 22nd, commemorating his martyrdom for the faith. 
                This date falls during the summer months, providing an opportunity to reflect on the courage and integrity 
                required to stand up for one's beliefs, even in the face of persecution.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Canonization</h3>
              <p className="mb-6">
                Pope Leo XIII beatified Thomas More in 1886, and he was canonized by Pope Pius XI on May 19, 1935. 
                His canonization recognized not only his martyrdom but also his exemplary life as a lay person who 
                lived his faith in the secular world while maintaining the highest standards of integrity and morality.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Devotions</h3>
              <p>
                On his feast day, many people pray for the intercession of St. Thomas More, especially for lawyers, 
                civil servants, and politicians. It's also a time to reflect on the importance of conscience and the 
                courage to stand up for what is right, even when it means personal sacrifice.
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
                  <li>• <strong>Lawyers:</strong> Patron of attorneys and legal professionals</li>
                  <li>• <strong>Civil Servants:</strong> Patron of government workers and public servants</li>
                  <li>• <strong>Politicians:</strong> Patron of elected officials and political leaders</li>
                  <li>• <strong>Adopted Children:</strong> Patron of those who are adopted</li>
                  <li>• <strong>Difficult Marriages:</strong> Patron of troubled marriages</li>
                  <li>• <strong>Conscience:</strong> Patron of those facing moral dilemmas</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Integrity:</strong> Help in maintaining moral principles</li>
                  <li>• <strong>Courage:</strong> Assistance in standing up for what is right</li>
                  <li>• <strong>Conscience:</strong> Guidance in moral decision-making</li>
                  <li>• <strong>Family Unity:</strong> Patron of family reconciliation</li>
                  <li>• <strong>Professional Ethics:</strong> Help in maintaining ethical standards</li>
                  <li>• <strong>Martyrdom:</strong> Patron of those persecuted for their faith</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Thomas More</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Thomas More, patron of lawyers and civil servants, you who maintained your integrity and 
                    conscience even in the face of persecution and death, help us to follow your example of courage and faith.
                  </p>
                  <p className="mb-4">
                    Teach us to be "the king's good servant, but God's first" in all our dealings. Help us to stand 
                    firm in our beliefs and to maintain our moral principles, even when it means personal sacrifice.
                  </p>
                  <p>
                    St. Thomas More, pray for us that we may have the courage to follow our conscience and to remain 
                    faithful to God in all circumstances. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Thomas More, help us to be faithful to our conscience and to God. Pray for us!"
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
            <Link href="/saints/st-john-fisher" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John Fisher
                </h3>
                <p className="text-gray-700 text-sm">
                  English bishop and cardinal who was martyred alongside St. Thomas More for refusing to acknowledge Henry VIII as head of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-edmund-campion" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Edmund Campion
                </h3>
                <p className="text-gray-700 text-sm">
                  English Jesuit priest and martyr who was executed during the reign of Queen Elizabeth I for his Catholic faith.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-thomas-becket" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thomas Becket
                </h3>
                <p className="text-gray-700 text-sm">
                  Archbishop of Canterbury who was martyred for defending the rights of the Church against King Henry II.
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