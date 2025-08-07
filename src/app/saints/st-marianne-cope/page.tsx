import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Marianne Cope - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Marianne Cope, Franciscan sister who dedicated her life to serving leprosy patients in Hawaii.',
  keywords: [
    'st marianne cope',
    'saint marianne cope',
    'st marianne cope biography',
    'st marianne cope feast day',
    'st marianne cope patron saint',
    'catholic saints',
    'january 23 feast day',
    'hawaii saints',
    'leprosy ministry',
    'franciscan sisters'
  ],
  openGraph: {
    title: 'St. Marianne Cope - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Marianne Cope, Franciscan sister who dedicated her life to serving leprosy patients in Hawaii.',
    url: 'https://catholicbibleonline.com/saints/st-marianne-cope',
  },
  twitter: {
    title: 'St. Marianne Cope - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Marianne Cope, Franciscan sister who dedicated her life to serving leprosy patients in Hawaii.',
  }
}

export default function StMarianneCopePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏥</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Marianne Cope
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Franciscan Sister, Servant of Leprosy Patients, Saint of Moloka'i
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Marianne Cope</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">January 23</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏥</div>
              <div className="text-sm text-gray-600">Healthcare</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Marianne Cope</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Marianne Cope, also known as Saint Marianne of Moloka'i, was born on January 23, 
                1838, in Heppenheim, in what was then the Grand Duchy of Hesse (now part of Germany). 
                She was baptized Maria Anna Barbara Koob, which was later changed to Cope. Her life 
                would become a remarkable journey of service and compassion, particularly to those 
                suffering from leprosy in Hawaii.
              </p>
              
              <p className="mb-6">
                Just a year after her birth, her family emigrated to the United States, settling in 
                Utica, New York. Cope attended a parish school until she reached the eighth grade. 
                By that time, her father had become an invalid and she went to work in a factory to 
                support the family. This early experience of caring for others would shape her future 
                vocation.
              </p>
              
              <p className="mb-6">
                Her father died in 1862, and this, along with her siblings' maturity, permitted her 
                to leave the factory to pursue a religious life. She became a novitiate of the Sisters 
                of the Third Order Regular of Saint Francis based in Syracuse, New York, taking the 
                name Marianne when she completed her formation. German-speaking immigrants settled in 
                large numbers in her area of New York state, so she became a teacher and later a 
                principal at a school for immigrant children.
              </p>
              
              <p className="mb-6">
                Cope also helped direct the opening of the first two Catholic hospitals in central 
                New York. She arranged for students from the Geneva Medical College in New York to 
                work at the hospital, but also stipulated that patients should be able to refuse 
                treatment by them. It was one of the first times in history that the right of a 
                patient to refuse treatment was recognized, showing her commitment to patient dignity 
                and autonomy.
              </p>
              
              <p>
                By 1883, Cope had become the Superior General of her congregation. It was at this 
                time she received a plea for help from leprosy sufferers in Hawaii. King Kalakaua 
                himself sent the letter asking for aid in treating patients who were isolated on the 
                island of Moloka'i. The King had already been declined by more than 50 other religious 
                institutes. Mother Marianne, as she was then known, left Syracuse with six sisters 
                to attend to the sick, arriving on November 8, 1883.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Marianne Cope: Servant of the Outcasts</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Pioneer of Healthcare in Hawaii</h3>
              <p className="mb-6">
                St. Marianne's most enduring legacy is her pioneering work in healthcare in Hawaii. 
                She managed a hospital on the island of O'ahu where victims of leprosy were sent for 
                triage, and helped establish the Malulani hospital on the island of Maui. Her work 
                established the foundation for Catholic healthcare in the Hawaiian Islands and set 
                standards for compassionate care that continue to influence healthcare today.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Advocate for Patient Rights</h3>
              <p className="mb-6">
                Marianne was ahead of her time in recognizing and advocating for patient rights. Her 
                insistence that patients should be able to refuse treatment was revolutionary for the 
                19th century and demonstrated her deep respect for human dignity. This principle of 
                patient autonomy has become a cornerstone of modern medical ethics and patient care.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Servant of the Most Marginalized</h3>
              <p className="mb-6">
                Marianne's willingness to serve leprosy patients when more than 50 other religious 
                institutes had declined demonstrates her extraordinary courage and compassion. She 
                served not only the patients but also their orphaned children and clergy who had 
                contracted the disease. Her work with the most marginalized members of society 
                exemplifies the Gospel call to serve "the least of these."
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Perseverance</h3>
              <p>
                Despite being confined to a wheelchair in her later years, Marianne continued to 
                work tirelessly for those in need. Her frail body did not prevent her from serving 
                others, and many noticed that despite all her years of work with leprosy patients, 
                she never contracted the disease herself, which many regarded as a miracle. Her 
                perseverance in the face of physical limitations serves as an inspiration for all 
                who face challenges in their service to others.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">January 23</div>
              <p className="text-gray-600">Feast of St. Marianne Cope</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Marianne Cope is celebrated on January 23rd, her birthday. This 
                date commemorates her life of service and her dedication to caring for the most 
                marginalized members of society, particularly those suffering from leprosy.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Beatification and Canonization</h3>
              <p className="mb-6">
                Marianne was beatified by Pope Benedict XVI on May 14, 2005, after a miraculous 
                cure from multiple organ failure was attributed to her intercession. On October 21, 
                2012, she was officially canonized by Pope Benedict XVI, becoming the first 
                Franciscan woman from North America to be canonized. Her canonization recognized 
                her extraordinary service to the poor and sick.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Modern Relevance</h3>
              <p>
                In today's world, St. Marianne's feast day serves as a reminder of the importance 
                of serving the most vulnerable members of society. It's a day to reflect on how we 
                can reach out to those who are marginalized or suffering, and to remember that 
                every person, regardless of their condition, deserves dignity and compassionate care.
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
                  <li>• <strong>Hawaii:</strong> Patron of the Hawaiian Islands</li>
                  <li>• <strong>Leprosy Patients:</strong> Patron of those with Hansen's disease</li>
                  <li>• <strong>Healthcare Workers:</strong> Patron of medical professionals</li>
                  <li>• <strong>Immigrants:</strong> Patron of immigrant communities</li>
                  <li>• <strong>Franciscan Sisters:</strong> Patron of Franciscan women religious</li>
                  <li>• <strong>Patient Rights:</strong> Patron of patient advocacy</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Healthcare:</strong> Success for healthcare workers</li>
                  <li>• <strong>Patient Care:</strong> Compassionate treatment for the sick</li>
                  <li>• <strong>Marginalized People:</strong> Help for those who are outcast</li>
                  <li>• <strong>Immigrant Rights:</strong> Protection for immigrant communities</li>
                  <li>• <strong>Religious Life:</strong> Guidance for those in religious service</li>
                  <li>• <strong>Perseverance:</strong> Strength for those facing physical limitations</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Marianne Cope</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Marianne Cope, servant of the outcasts and patron of Hawaii, 
                    you who left your homeland to serve the leprosy patients of Moloka'i, intercede 
                    for us that we may have the courage to serve those who are most in need.
                  </p>
                  <p className="mb-4">
                    Help us to see Christ in every person we encounter, especially those who are 
                    marginalized or suffering. Teach us to advocate for the rights and dignity of 
                    all people, and to persevere in our service even when faced with physical 
                    limitations or challenges.
                  </p>
                  <p>
                    May we, like you, be willing to leave our comfort zones to serve others and 
                    to recognize that every person, regardless of their condition, is a beloved 
                    child of God. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Healthcare Workers</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Marianne Cope, patron of healthcare workers, intercede for all those who 
                    work in healthcare and serve the sick.
                  </p>
                  <p>
                    Help them to provide compassionate care, to respect patient rights and dignity, 
                    and to persevere in their service even when faced with challenges. May they 
                    always see Christ in those they serve. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Marianne Cope, servant of the outcasts, pray for us!"
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
            <Link href="/saints/st-damien-molokai" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Missionary Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Damien of Moloka'i
                </h3>
                <p className="text-gray-700 text-sm">
                  Belgian priest who also served leprosy patients on Moloka'i, working alongside Marianne.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Mendicant Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Franciscan order, whose spirituality and ideals Marianne followed.
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
                  Another modern saint who dedicated her life to serving the poorest of the poor.
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