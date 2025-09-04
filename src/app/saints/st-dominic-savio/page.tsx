import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Dominic Savio - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Dominic Savio, the young saint who died at age 14 and is known for his extraordinary piety and devotion.',
  keywords: [
    'st dominic savio',
    'saint dominic savio',
    'st dominic savio biography',
    'st dominic savio feast day',
    'st dominic savio patron saint',
    'young saints',
    'may 6 feast day',
    'catholic saints',
    'choirboys patron'
  ],
  openGraph: {
    title: 'St. Dominic Savio - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Dominic Savio, the young saint who died at age 14 and is known for his extraordinary piety and devotion.',
    url: 'https://catholicbibleonline.com/saints/st-dominic-savio',
  },
  twitter: {
    title: 'St. Dominic Savio - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Dominic Savio, the young saint who died at age 14 and is known for his extraordinary piety and devotion.',
  }
}

export default function StDominicSavioPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👦</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Dominic Savio
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Young Saint of Extraordinary Piety and Devotion
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Dominic Savio</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">May 6</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👦</div>
              <div className="text-sm text-gray-600">Youth</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Dominic Savio</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Dominic Savio was born on April 2, 1842 in the village of Riva in northern Italy. His father was a blacksmith and his mother a seamstress. He had nine brothers and sisters. His family was poor but hardworking. They were devout and pious Catholics.
              </p>
              
              <p className="mb-6">
                When he was just two years old, Dominic's family returned to their native village of Castlenuovo d'Asti, (Today, Castlenuovo Don Bosco) near the birthplace of John Bosco. Bosco would himself later be canonized as a Saint by the Church and became a major influence on the life of Dominic.
              </p>
              
              <p className="mb-6">
                As a small child, Dominic loved the Lord and His Church. He was very devout in practicing his Catholic faith. For example, he said grace before every meal and refused to eat with those who did not. He was always quick to encourage others to pray.
              </p>
              
              <p className="mb-6">
                Dominic attended Church regularly with his mother and was often seen kneeling before the Tabernacle in prayer. He even prayed outside the Church building. It did not matter to Dominic if the ground was covered with mud or snow, he knelt and prayed anyway.
              </p>
              
              <p className="mb-6">
                Dominic was quickly recognized as an exceptional student who studied hard and performed well in school. He became an altar server. He also attended daily Mass and went to confession regularly. He asked to receive his first communion at the age of seven. This was not the practice in the Church of Italy at the time. Normally, children received their first holy communion at the age of twelve. Dominic's priest was so impressed with his intelligence concerning the faith, his love for the Lord and his piety that he made an exception. Dominic said that the day of his First Communion was the happiest day of his life.
              </p>
              
              <p>
                On the Day he received his first communion, Dominic wrote four promises in a little book. Those promises were: I will go to Confession often, and as frequently to Holy Communion as my confessor allows. I wish to sanctify the Sundays and festivals in a special manner. My friends shall be Jesus and Mary. Death rather than sin.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Dominic Savio: Model of Youthful Holiness</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Meeting with St. John Bosco</h3>
              <p className="mb-6">
                The young Dominic graduated to secondary school and walked three miles to school each day. He undertook this chore gladly. While walking to school on a hot day a farmer asked why he wasn't yet tired. Dominic cheerfully replied, "Nothing seems tiresome or painful when you are working for a master who pays well."
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Exemplary Character</h3>
              <p className="mb-6">
                Although he was young, Dominic was clearly different than his peers. When two boys stuffed a school heating stove with snow and rubbish. The boys were known troublemakers and were likely to face expulsion if caught, so they blamed Dominic for the misdeed. Dominic did not deny the accusation and he was scolded before the class. However, a day later the teacher learned the truth. He asked Dominic why he did not defend himself while being scolded for something he did not do. Dominic mentioned he was imitating Jesus who remained silent when unjustly accused.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Life at the Oratory</h3>
              <p className="mb-6">
                Dominic's teacher spoke well of him and brought him to the attention of Fr. John Bosco, who was renowned for looking after hundreds of boys, many of them orphaned and poor. In October 1854, Dominic was personally introduced to Fr. Bosco - along with his father. At the meeting, Bosco wanted to test Dominic's intelligence and understanding of the Catholic faith. He gave Dominic a copy of The Catholic Readings, which was a pamphlet that dealt with apologetics. He expected Dominic to provide a report the next day, but just ten minutes later Dominic recited the text and provided a full explanation of its significance. This solidified Bosco's high opinion of Dominic.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Path to Sainthood</h3>
              <p className="mb-6">
                Dominic expressed an interest in becoming a priest and asked to go to Turin to attend the Oratory of St. Francis de Sales. Fr. Bosco agreed to take him. At the Oratory, Dominic studied directly under Fr. Bosco. He worked diligently and always asked questions when he did not understand something. He renewed his First Communion promises that he wrote in his little book at the age of seven. After six months at the Oratory, Dominic delivered a speech on the path to sainthood. In his speech, he made three outstanding points; it is God's will that we ALL become saints, it is easy to become a saint, and there are great rewards in heaven for saints.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Final Days</h3>
              <p>
                Dominic's desire to become a saint troubled him however. He wondered to himself how someone as young as he was could become a saint? In his zeal, he tried voluntary mortification and other voluntary penances, hoping that they would help him to grow closer to Jesus and help him to be less concerned with his own needs. He even made his bed uncomfortable and wore thin clothes in winter. When Fr. Bosco observed these practices, he corrected Dominic. He explained that as a child, what he should do instead was to devote himself to his studies and to be cheerful. He discouraged Dominic from any more physical penances. Dominic's happy demeanor quickly returned.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">May 6</div>
              <p className="text-gray-600">Feast of St. Dominic Savio, Patron of Youth</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Dominic Savio is celebrated on May 6th. Originally celebrated on March 9th (the date of his death), it was moved to May 6th to avoid conflicts with Lent. St. Dominic Savio was declared venerable in 1933 by Pope Pius XI, beatified in 1950, then canonized in 1954 by Pope Pius XII. His canonization was significant as he was one of the youngest non-martyr saints in the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. Dominic Savio's remarkable faith and his role as a model of youthful holiness. His feast day serves as a reminder that sanctity is possible at any age and that young people can achieve great spiritual heights. Many schools and youth groups pray for his intercession, especially for young people struggling with their faith or facing difficult circumstances.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. Dominic Savio for his intercession in matters of youth, purity, and academic excellence. Many people also pray for the protection of young people and for the grace to maintain innocence and devotion in a challenging world. His example encourages us to see holiness as attainable and desirable from an early age.
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
                  <li>• <strong>Choirboys:</strong> Patron of young altar servers and choir members</li>
                  <li>• <strong>Falsely Accused:</strong> Helper for those unjustly blamed</li>
                  <li>• <strong>Juvenile Delinquents:</strong> Patron of troubled youth</li>
                  <li>• <strong>Youth:</strong> Model for young people seeking holiness</li>
                  <li>• <strong>Students:</strong> Patron of academic excellence</li>
                  <li>• <strong>Purity:</strong> Model of innocence and virtue</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Academic Success:</strong> Helper in studies and learning</li>
                  <li>• <strong>Youth Ministry:</strong> Patron of youth programs</li>
                  <li>• <strong>Family Life:</strong> Helper for families with children</li>
                  <li>• <strong>Conversion:</strong> Patron of young converts</li>
                  <li>• <strong>Protection:</strong> Guardian of young people</li>
                  <li>• <strong>Vocations:</strong> Helper for those discerning priesthood</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Dominic Savio</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Dominic Savio, model of youthful holiness and patron of young people, 
                    help us to follow your example of piety, purity, and devotion to God. Through your 
                    intercession, may we have the courage to remain faithful to our promises and to seek 
                    holiness in our daily lives. Help us to be cheerful in our service to God and to 
                    encourage others in their faith journey. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Dominic Savio, pray for us!"
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
            <Link href="/saints/st-john-bosco" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John Bosco
                </h3>
                <p className="text-gray-700 text-sm">
                  Dominic's mentor and founder of the Salesian order.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-de-sales" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis de Sales
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron of the oratory where Dominic studied.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-therese-lisieux" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thérèse of Lisieux
                </h3>
                <p className="text-gray-700 text-sm">
                  Another young saint known for her "little way" to holiness.
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