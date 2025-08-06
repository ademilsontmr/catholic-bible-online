import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Teresa Benedicta of the Cross (Edith Stein) - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Teresa Benedicta of the Cross (Edith Stein), Jewish convert, Carmelite nun, and martyr of Auschwitz.',
  keywords: [
    'st teresa benedicta of the cross',
    'edith stein',
    'saint teresa benedicta',
    'edith stein biography',
    'st teresa benedicta feast day',
    'st teresa benedicta patron saint',
    'auschwitz martyr',
    'jewish convert saint',
    'carmelite saints',
    'catholic saints',
    'august 9 feast day'
  ],
  openGraph: {
    title: 'St. Teresa Benedicta of the Cross (Edith Stein) - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Teresa Benedicta of the Cross (Edith Stein), Jewish convert, Carmelite nun, and martyr of Auschwitz.',
    url: 'https://catholicbibleonline.com/saints/st-teresa-benedicta',
  },
  twitter: {
    title: 'St. Teresa Benedicta of the Cross (Edith Stein) - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Teresa Benedicta of the Cross (Edith Stein), Jewish convert, Carmelite nun, and martyr of Auschwitz.',
  }
}

export default function StTeresaBenedictaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Teresa Benedicta of the Cross (Edith Stein)
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Virgin and Martyr, Jewish Convert, Carmelite Nun
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Teresa Benedicta of the Cross</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 9</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Teresa Benedicta of the Cross</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Edith Stein, born in 1891 in Breslau, Poland, was the youngest child of a large Jewish family. 
                She was an outstanding student and was well versed in philosophy with a particular interest in phenomenology. 
                Eventually she became interested in the Catholic Faith, and in 1922, she was baptized at the Cathedral Church in Cologne, Germany.
              </p>
              
              <p className="mb-6">
                Eleven years later Edith entered the Cologne Carmel. Because of the ramifications of politics in Germany, 
                Edith, whose name in religion was Teresa Benedicta of the Cross, was sent to the Carmel at Echt, Holland. 
                When the Nazis conquered Holland, Teresa was arrested, and, with her sister Rose, was sent to the concentration camp at Auschwitz.
              </p>
              
              <p className="mb-6">
                Teresa died in the gas chambers of Auschwitz in 1942 at the age of fifty-one. In 1987, she was beatified in the large 
                outdoor soccer stadium in Cologne by Pope John Paul II.
              </p>
              
              <p>
                St. Teresa Benedicta of the Cross represents the triumph of faith over hatred, of love over evil, 
                and of the human spirit over the darkest forces of history. Her conversion from Judaism to Catholicism, 
                her philosophical work, and her ultimate martyrdom make her a powerful witness to the universal call to holiness.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Teresa Benedicta of the Cross: Martyr of Auschwitz</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                Out of the unspeakable human suffering caused by the Nazis in western Europe in the 1930's and 1940's, 
                there blossomed the beautiful life of dedication, consecration, prayer, fasting, and penance of Saint Teresa.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Truth</h3>
              <p className="mb-6">
                Even though her life was snuffed out by the satanic evil of genocide, her memory stands as a light undimmed 
                in the midst of evil, darkness, and suffering. She was canonized on October 11, 1998.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Bridge Between Faiths</h3>
              <p className="mb-6">
                St. Teresa Benedicta of the Cross represents the triumph of faith over hatred, of love over evil, 
                and of the human spirit over the darkest forces of history. Her conversion from Judaism to Catholicism, 
                her philosophical work, and her ultimate martyrdom make her a powerful witness to the universal call to holiness.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Courage</h3>
              <p>
                Her life teaches us that true courage comes from faith, that love is stronger than hate, 
                and that even in the darkest times, the light of Christ continues to shine through the witness of the saints.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">August 9</div>
              <p className="text-gray-600">Feast of St. Teresa Benedicta of the Cross, Virgin and Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Teresa Benedicta of the Cross is celebrated on August 9th, the day of her martyrdom at Auschwitz. 
                This feast day serves as a powerful reminder of the millions who suffered during the Holocaust.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for peace, remember the victims of the Holocaust, and reflect on 
                the importance of standing up against hatred and discrimination. It's also a day to pray for 
                Jewish-Catholic relations and understanding.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for peace, for the victims of persecution, and to ask 
                for the intercession of St. Teresa Benedicta in our own struggles with faith and courage.
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
                  <li>• <strong>Jewish Converts:</strong> Patron of those who convert from Judaism to Catholicism</li>
                  <li>• <strong>Holocaust Martyrs:</strong> Patron of all who died in the Holocaust</li>
                  <li>• <strong>Philosophers and Scholars:</strong> Patron of those who seek truth through study</li>
                  <li>• <strong>Europe:</strong> Co-patron of Europe proclaimed by Pope John Paul II</li>
                  <li>• <strong>Religious Women:</strong> Patron of women in religious life</li>
                  <li>• <strong>Peace and Reconciliation:</strong> Patron of Jewish-Catholic relations</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Victims of Persecution:</strong> Patron of those suffering discrimination</li>
                  <li>• <strong>Intellectual Conversion:</strong> Helper for those seeking truth</li>
                  <li>• <strong>Courage in Adversity:</strong> Patron of those facing difficult times</li>
                  <li>• <strong>Interfaith Dialogue:</strong> Patron of understanding between faiths</li>
                  <li>• <strong>Academic Pursuits:</strong> Helper for students and scholars</li>
                  <li>• <strong>Holocaust Remembrance:</strong> Patron of remembering the past</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Teresa Benedicta of the Cross</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O God of our fathers, who led the child Edith Stein to the fullness of wisdom and science and revealed to her 
                    in her martyrdom the mysteries of the Cross, grant us, through her intercession, that all men may recognize 
                    Christ as their Savior and through Him come to behold you for eternity. Who live and reign for ever and ever. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Teresa Benedicta of the Cross, pray for us!"
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
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Maximilian Kolbe
                </h3>
                <p className="text-gray-700 text-sm">
                  Franciscan priest who offered his life for another prisoner at Auschwitz, martyr of charity.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john-paul-ii" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John Paul II
                </h3>
                <p className="text-gray-700 text-sm">
                  Pope who beatified and canonized St. Teresa Benedicta, known for his work for peace and reconciliation.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-therese" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thérèse of Lisieux
                </h3>
                <p className="text-gray-700 text-sm">
                  Carmelite nun known for her "Little Way," patron of missionaries and spiritual childhood.
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