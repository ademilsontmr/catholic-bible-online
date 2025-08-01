import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Maximilian Kolbe - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Maximilian Kolbe, the Franciscan priest who sacrificed his life for another prisoner at Auschwitz.',
  keywords: [
    'st maximilian kolbe',
    'saint maximilian kolbe',
    'auschwitz martyr',
    'franciscan priest',
    'modern saints',
    'catholic saints',
    'august 14 feast day'
  ],
  openGraph: {
    title: 'St. Maximilian Kolbe - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Maximilian Kolbe, the Franciscan priest who sacrificed his life for another prisoner at Auschwitz.',
    url: 'https://catholicbibleonline.com/saints/st-maximilian-kolbe',
  },
  twitter: {
    title: 'St. Maximilian Kolbe - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Maximilian Kolbe, the Franciscan priest who sacrificed his life for another prisoner at Auschwitz.',
  }
}

export default function StMaximilianKolbePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🕊️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Maximilian Kolbe
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Franciscan Priest, Martyr of Charity
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Maximilian Kolbe</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 14</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🕊️</div>
              <div className="text-sm text-gray-600">Modern Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Maximilian Kolbe</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Maximilian Kolbe was born Raymond Kolbe on January 8, 1894, in Zdunska Wola, Poland, 
                to a poor but devout Catholic family. From an early age, he showed a deep love for the 
                Blessed Virgin Mary and a desire to serve God. At the age of 12, he had a vision of the 
                Virgin Mary offering him two crowns - one white for purity and one red for martyrdom - 
                and he chose both.
              </p>
              
              <p className="mb-6">
                In 1907, Raymond entered the Franciscan Order and took the name Maximilian. He was ordained 
                a priest in 1918 and became known for his deep devotion to the Immaculate Conception and 
                his missionary zeal. He founded the Militia Immaculatae (Army of the Immaculate) and 
                established the monastery of Niepokalanów near Warsaw, which became a center for Catholic 
                publishing and evangelization.
              </p>
              
              <p className="mb-6">
                In 1930, Maximilian traveled to Japan where he founded another monastery and began publishing 
                a Japanese version of his magazine. He returned to Poland in 1936 and continued his work 
                at Niepokalanów, which grew to become the largest Franciscan monastery in the world, 
                housing over 700 friars.
              </p>
              
              <p>
                During World War II, Maximilian was arrested by the Nazis and sent to Auschwitz concentration 
                camp. In July 1941, when a prisoner escaped, the Nazis selected ten men to be starved to death 
                as punishment. When one of the selected men, Franciszek Gajowniczek, cried out for his family, 
                Maximilian stepped forward and offered to take his place. He was starved for two weeks and 
                then killed by lethal injection on August 14, 1941. He was canonized by Pope John Paul II 
                on October 10, 1982, and his feast day is celebrated on August 14th.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Maximilian Kolbe: Martyr of Charity</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Martyr of Charity</h3>
              <p className="mb-6">
                St. Maximilian Kolbe's greatest legacy is his ultimate sacrifice of love - giving his life 
                for another person. His act of volunteering to die in place of Franciszek Gajowniczek 
                exemplifies the Gospel teaching that "greater love has no one than this, that someone lay 
                down his life for his friends." He is often called the "Martyr of Charity" because he 
                died not for his faith, but for love of his neighbor.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotion to the Immaculate Conception</h3>
              <p className="mb-6">
                Maximilian's deep devotion to the Blessed Virgin Mary and his promotion of the Immaculate 
                Conception continue to inspire Catholics today. He founded the Militia Immaculatae, which 
                has spread throughout the world, and his writings on Marian devotion remain influential. 
                His example shows how devotion to Mary can lead to greater love for Christ and others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Evangelization</h3>
              <p>
                Maximilian's use of modern media for evangelization - through his magazines and radio 
                broadcasts - was ahead of his time. He showed that the Church can and should use every 
                available means to spread the Gospel. His work at Niepokalanów demonstrated how a 
                community dedicated to Mary can become a powerful force for good in the world.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">August 14</div>
              <p className="text-gray-600">Feast of St. Maximilian Kolbe</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Maximilian Kolbe is celebrated on August 14th, the anniversary of his 
                martyrdom at Auschwitz. This date falls during the summer season, a time of warmth and 
                light, which is fitting for a saint whose life was a beacon of hope and love in the 
                darkness of war and hatred. The feast is celebrated as a memorial throughout the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Maximilian's feast day, many people pray the Novena to St. Maximilian Kolbe, 
                visit shrines dedicated to him, or make pilgrimages to Auschwitz where he died. Some 
                churches hold special Masses and prayer services, and many people pray for his 
                intercession for families, prisoners, and those facing difficult choices.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray the Novena to St. Maximilian Kolbe, the Prayer 
                to St. Maximilian Kolbe, or to make a special petition for courage in difficult situations. 
                Many people also visit churches dedicated to St. Maximilian or make pilgrimages to his 
                shrine in Auschwitz.
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
                  <li>• <strong>Journalists:</strong> Patron of media professionals</li>
                  <li>• <strong>Prisoners:</strong> Patron of those in captivity</li>
                  <li>• <strong>Families:</strong> Patron of family life</li>
                  <li>• <strong>Poland:</strong> Patron saint of Poland</li>
                  <li>• <strong>Drug Addicts:</strong> Patron of those struggling with addiction</li>
                  <li>• <strong>Pro-Life Movement:</strong> Patron of life advocates</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Courage in Suffering:</strong> Helper in difficult times</li>
                  <li>• <strong>Self-Sacrifice:</strong> Patron of those who give for others</li>
                  <li>• <strong>Marian Devotion:</strong> Guide for devotion to Mary</li>
                  <li>• <strong>Evangelization:</strong> Patron of spreading the Gospel</li>
                  <li>• <strong>Forgiveness:</strong> Helper in forgiving enemies</li>
                  <li>• <strong>Hope in Despair:</strong> Patron of hope in darkness</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Maximilian Kolbe</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Maximilian Kolbe, you who gave your life for another in the concentration camp 
                    of Auschwitz, help me to understand the meaning of true charity and self-sacrifice. 
                    Teach me to love others as Christ loved us, even to the point of giving my life for them.
                  </p>
                  <p className="mb-4">
                    Help me to be courageous in the face of suffering and to trust in God's providence 
                    even in the darkest moments. May your example of love and sacrifice inspire me to 
                    serve others with greater generosity and compassion.
                  </p>
                  <p>
                    St. Maximilian, pray for me that I may have the courage to stand up for what is right 
                    and to love others as Christ has loved me. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Courage</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Maximilian Kolbe, you who faced the horrors of Auschwitz with faith and courage, 
                    intercede for me in my time of trial. Help me to find strength in my faith and to 
                    trust in God's love even when life seems unbearable.
                  </p>
                  <p>
                    May your example of self-sacrifice and love inspire me to be more generous and 
                    compassionate toward others. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Maximilian Kolbe, pray for us!"
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

            <Link href="/saints/st-michael-archangel" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Warrior Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Michael the Archangel
                </h3>
                <p className="text-gray-700 text-sm">
                  The great archangel who defeated Satan and leads the heavenly armies, protector of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-anthony" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anthony of Padua
                </h3>
                <p className="text-gray-700 text-sm">
                  Franciscan friar known for his powerful preaching and miracles, patron of lost items.
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