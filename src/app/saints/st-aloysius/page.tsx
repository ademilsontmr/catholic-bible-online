import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Aloysius Gonzaga - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Aloysius Gonzaga, patron saint of youth and students, known for his purity and devotion.',
  keywords: [
    'st aloysius',
    'saint aloysius',
    'st aloysius gonzaga',
    'st aloysius biography',
    'st aloysius feast day',
    'st aloysius patron saint',
    'youth saint',
    'students saint',
    'jesuit saint',
    'catholic saints',
    'june 21 feast day'
  ],
  openGraph: {
    title: 'St. Aloysius Gonzaga - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Aloysius Gonzaga, patron saint of youth and students, known for his purity and devotion.',
    url: 'https://catholicbibleonline.com/saints/st-aloysius',
  },
  twitter: {
    title: 'St. Aloysius Gonzaga - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Aloysius Gonzaga, patron saint of youth and students, known for his purity and devotion.',
  }
}

export default function StAloysiusPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⛪</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Aloysius Gonzaga
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron Saint of Youth, Students, and Jesuit Novices
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Aloysius Gonzaga</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">June 21</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⛪</div>
              <div className="text-sm text-gray-600">Jesuit</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Aloysius Gonzaga</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Aloysius was born in Castiglione, Italy. The first words St. Aloysius spoke were the Holy Names of Jesus and Mary. 
                He was destined for the military by his father (who was in service to Philip II), but by the age of 9 Aloysius had decided 
                on a religious life, and made a vow of perpetual virginity.
              </p>
              
              <p className="mb-6">
                To safeguard himself from possible temptation, he would keep his eyes persistently downcast in the presence of women. 
                St. Charles Borromeo gave him his first Holy Communion. A kidney disease prevented St. Aloysius from a full social life 
                for a while, so he spent his time in prayer and reading the lives of the saints.
              </p>
              
              <p className="mb-6">
                Although he was appointed a page in Spain, St. Aloysius kept up his many devotions and austerities, and was quite resolved 
                to become a Jesuit. His family eventually moved back to Italy, where he taught catechism to the poor.
              </p>
              
              <p className="mb-6">
                When he was 18, he joined the Jesuits, after finally breaking down his father, who had refused his entrance into the order. 
                He served in a hospital during the plague of 1587 in Milan, and died from it at the age of 23, after receiving the last rites 
                from St. Robert Bellarmine.
              </p>
              
              <p>
                The last word he spoke was the Holy Name of Jesus. St. Robert wrote the Life of St. Aloysius.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Aloysius Gonzaga: Model of Youthful Holiness</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Aloysius Gonzaga represents the possibility of achieving great holiness even at a young age. His life demonstrates 
                that youth is not a barrier to sanctity, and that young people can make profound spiritual commitments and live them 
                with extraordinary dedication.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Purity and Chastity</h3>
              <p className="mb-6">
                St. Aloysius's vow of perpetual virginity at the age of 9 and his practice of keeping his eyes downcast in the presence 
                of women show his extraordinary commitment to purity. His example continues to inspire young people to live chaste lives 
                in a world that often challenges these values.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Jesuit Spirituality</h3>
              <p className="mb-6">
                As a Jesuit, St. Aloysius embodied the Society of Jesus's commitment to education, service, and spiritual formation. 
                His dedication to prayer, his service to the poor through catechism, and his willingness to serve during the plague 
                demonstrate the Jesuit ideal of being "contemplatives in action."
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Youth and Students</h3>
              <p>
                St. Aloysius's patronage of youth and students stems from his own experience as a young person seeking holiness 
                and his dedication to education and formation. His life teaches young people that they can make a difference 
                in the world through their faith and commitment to God.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">June 21</div>
              <p className="text-gray-600">Feast of St. Aloysius Gonzaga, Religious</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Aloysius Gonzaga is celebrated on June 21st, the date of his death in 1591. This feast day is particularly 
                significant for young people, students, and Jesuit communities worldwide.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholic schools and youth groups pray for purity, for academic success, and for the courage 
                to live virtuous lives. It's also a day to celebrate the contributions of young people to the Church 
                and to encourage them in their faith journey.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for young people, for students facing academic challenges, 
                and to ask for St. Aloysius's intercession in living a life of purity and devotion.
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
                  <li>• <strong>Youth:</strong> Patron of young people and adolescents</li>
                  <li>• <strong>Students:</strong> Patron of students and academic success</li>
                  <li>• <strong>Jesuit Novices:</strong> Patron of those entering religious life</li>
                  <li>• <strong>Catholic Schools:</strong> Patron of Catholic education</li>
                  <li>• <strong>Purity:</strong> Patron of chastity and moral virtue</li>
                  <li>• <strong>Teenagers:</strong> Patron of teenage spirituality</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Academic Success:</strong> Helper for students in their studies</li>
                  <li>• <strong>Moral Purity:</strong> Patron of those seeking to live chaste lives</li>
                  <li>• <strong>Religious Vocations:</strong> Helper for those discerning priesthood</li>
                  <li>• <strong>Youth Ministry:</strong> Patron of youth group leaders</li>
                  <li>• <strong>Overcoming Temptation:</strong> Helper for those struggling with purity</li>
                  <li>• <strong>Young Catholics:</strong> Patron of young people's faith formation</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Aloysius Gonzaga</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Aloysius Gonzaga, you who achieved great holiness at such a young age, help us to understand that youth 
                    is not a barrier to sanctity. Intercede for all young people, especially students, that they may find strength 
                    in their faith and courage to live virtuous lives.
                  </p>
                  <p>
                    As a model of purity and chastity, help us to guard our hearts and minds from impurity and to seek holiness 
                    in all our actions. Inspire young people to make good choices and to dedicate their lives to serving God 
                    and others. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Aloysius Gonzaga, pray for us!"
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
            <Link href="/saints/st-charles-borromeo" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Charles Borromeo
                </h3>
                <p className="text-gray-700 text-sm">
                  Archbishop who gave St. Aloysius his first Holy Communion, great reformer of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-robert-bellarmine" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Robert Bellarmine
                </h3>
                <p className="text-gray-700 text-sm">
                  Jesuit theologian who gave St. Aloysius his last rites and wrote his biography.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-ignatius-loyola" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Ignatius Loyola
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Society of Jesus, the order that St. Aloysius joined.
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