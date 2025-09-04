import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Julie Billiart - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Julie Billiart, founder of the Sisters of Notre Dame de Namur and patron of educators.',
  keywords: [
    'st julie billiart',
    'saint julie billiart',
    'st julie billiart biography',
    'st julie billiart feast day',
    'st julie billiart patron saint',
    'catholic saints',
    'april 8 feast day',
    'sisters of notre dame',
    'educator saints',
    'french saints'
  ],
  openGraph: {
    title: 'St. Julie Billiart - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Julie Billiart, founder of the Sisters of Notre Dame de Namur and patron of educators.',
    url: 'https://catholicbibleonline.com/saints/st-julie-billiart',
  },
  twitter: {
    title: 'St. Julie Billiart - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Julie Billiart, founder of the Sisters of Notre Dame de Namur and patron of educators.',
  }
}

export default function StJulieBilliartPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👩‍🏫</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Julie Billiart
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Founder of the Sisters of Notre Dame de Namur, Educator, Witness of Faith
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Julie Billiart</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">April 8</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👩‍🏫</div>
              <div className="text-sm text-gray-600">Educator</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Julie Billiart</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Julie Billiart was born in 1751 in Cuvilly, France, the fifth of seven children. 
                From an early age, she showed a deep love for God and a natural gift for teaching. 
                Her life would become a remarkable journey of faith, suffering, and service that would 
                inspire generations of educators and religious women.
              </p>
              
              <p className="mb-6">
                As a child, playing "school" was Julie's favorite game, and this passion for education 
                would define her entire life. She attended a little one-room school in Cuvilly, where 
                she enjoyed all her studies but was particularly drawn to the religion lessons taught 
                by the parish priest. Recognizing something special in Julie, the priest secretly 
                allowed her to make her First Communion at the age of nine, when the normal age at 
                that time was thirteen.
              </p>
              
              <p className="mb-6">
                When she was sixteen, Julie began teaching to help support her family. She would sit 
                on a haystack during the noon recess and tell biblical parables to the workers, 
                demonstrating her natural ability to communicate the Gospel message in simple, 
                accessible ways. She learned to make short mental prayers and developed a great love 
                for Jesus in the Eucharist.
              </p>
              
              <p className="mb-6">
                A tragic event occurred when Julie was in her twenties - a murder attempt on her 
                father shocked her nervous system badly. This began a period of extremely poor health 
                that would last for thirty years. For twenty-two of these years, she was completely 
                paralyzed. Throughout all her sufferings and pain, Julie offered everything up to God, 
                finding meaning in her suffering through her deep faith.
              </p>
              
              <p>
                When the French Revolution broke out, Julie offered her home as a hiding place for 
                loyal priests, making her a hunted target. Five times in three years, she was forced 
                to flee in secret to avoid compromising her friends who were hiding her. During this 
                time, she received a privileged vision of her crucified Lord surrounded by a large 
                group of religious women dressed in a habit she had never seen before. An inner voice 
                told her that these would be her daughters and that she would begin an institute for 
                the Christian education of young girls.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Julie Billiart: Educator and Founder</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Founder of the Sisters of Notre Dame</h3>
              <p className="mb-6">
                St. Julie's most enduring legacy is the founding of the Sisters of Notre Dame de 
                Namur in 1804. Together with a rich young woman, she established this religious 
                congregation dedicated to the Christian education of young girls. The order continues 
                her work today, serving in schools and educational institutions around the world, 
                carrying forward her vision of quality education rooted in Christian values.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Perseverance in Suffering</h3>
              <p className="mb-6">
                Julie's thirty years of poor health, including twenty-two years of complete paralysis, 
                serve as a powerful example of how to offer suffering to God. She never lost her faith 
                or her sense of purpose, continuing to serve others even from her sickbed. Her 
                miraculous cure in 1804, when she walked for the first time in twenty-two years, 
                was seen as a sign of God's approval of her mission and work.
              </p>
              
                             <h3 className="text-xl font-semibold text-black mb-4">Pioneer in Christian Education</h3>
               <p className="mb-6">
                 Julie's approach to education was innovative for her time. She believed in making 
                 religious instruction accessible and engaging, using parables and simple language 
                 to reach people of all backgrounds. Her method of teaching from a haystack during 
                 lunch breaks showed her commitment to reaching people where they were, a principle 
                 that continues to guide Catholic education today.
               </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness During Persecution</h3>
              <p>
                During the French Revolution, Julie demonstrated extraordinary courage by hiding 
                priests and maintaining her faith despite the danger. Her willingness to risk her 
                own safety for the sake of the Church and her faith serves as an example of 
                Christian witness in times of persecution. Her vision during this difficult period 
                shows how God can use even the most challenging circumstances to reveal His plans.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">April 8</div>
              <p className="text-gray-600">Feast of St. Julie Billiart</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Julie Billiart is celebrated on April 8th, the anniversary of her 
                death in 1816. This date commemorates her life of service, her founding of the 
                Sisters of Notre Dame, and her witness to faith through suffering.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Beatification and Canonization</h3>
              <p className="mb-6">
                Julie was beatified on May 13, 1906, and was canonized by Pope Paul VI in 1969. 
                Her canonization recognized not only her founding of a religious order but also her 
                exemplary life of faith, her perseverance through suffering, and her dedication to 
                Christian education. Her canonization affirmed the importance of education in the 
                Church's mission.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Modern Relevance</h3>
              <p>
                In today's world, St. Julie's feast day serves as a reminder of the importance of 
                Christian education and the role of teachers in forming young minds and hearts. 
                It's a day to pray for educators, for those who suffer from illness or disability, 
                and to remember that God can use our weaknesses and sufferings for His greater glory.
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
                  <li>• <strong>Educators:</strong> Patron of teachers and educators</li>
                  <li>• <strong>Christian Education:</strong> Patron of Catholic schools</li>
                  <li>• <strong>The Disabled:</strong> Patron of those with physical disabilities</li>
                  <li>• <strong>Religious Sisters:</strong> Patron of women religious</li>
                  <li>• <strong>France:</strong> Patron of French educators</li>
                  <li>• <strong>Perseverance:</strong> Patron of those facing long-term illness</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Education:</strong> Success for Catholic schools and teachers</li>
                  <li>• <strong>Healing:</strong> Help for those suffering from illness</li>
                  <li>• <strong>Perseverance:</strong> Strength for those facing long-term challenges</li>
                  <li>• <strong>Religious Life:</strong> Guidance for those considering religious vocation</li>
                  <li>• <strong>Faith Under Pressure:</strong> Courage during persecution</li>
                  <li>• <strong>Teaching Ministry:</strong> Help for educators in their mission</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Julie Billiart</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Julie Billiart, founder of the Sisters of Notre Dame and patron 
                    of educators, you who endured thirty years of suffering with patience and faith, 
                    intercede for us that we may learn to offer our difficulties to God.
                  </p>
                  <p className="mb-4">
                    Help us to be faithful teachers and witnesses of Christ, to persevere in our 
                    mission despite obstacles, and to trust in God's providence even in times of 
                    trial. Teach us to serve others with love and dedication, just as you served 
                    the poor and educated the young.
                  </p>
                  <p>
                    May we, like you, find strength in our weaknesses and use our gifts to build 
                    up the Kingdom of God through education and service. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Educators</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Julie Billiart, patron of educators, intercede for all teachers and 
                    those involved in Christian education.
                  </p>
                  <p>
                    Help them to be patient and loving with their students, to persevere in their 
                    mission despite challenges, and to always teach with the love of Christ. May 
                    they inspire their students to grow in faith and knowledge. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Julie Billiart, educator and founder, pray for us!"
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
            <Link href="/saints/st-elizabeth-ann-seton" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Elizabeth Ann Seton
                </h3>
                <p className="text-gray-700 text-sm">
                  Another educator saint who founded a religious order dedicated to Catholic education.
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
                  Educator and founder of the Salesians, known as the "Father and Teacher of Youth."
                </p>
              </div>
            </Link>

            <Link href="/saints/st-katharine-drexel" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Katharine Drexel
                </h3>
                <p className="text-gray-700 text-sm">
                  Educator and founder who dedicated her life to serving the poor and marginalized through education.
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