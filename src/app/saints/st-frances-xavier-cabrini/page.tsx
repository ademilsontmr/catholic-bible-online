import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Frances Xavier Cabrini - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Frances Xavier Cabrini, first US citizen to be canonized and patron of immigrants.',
  keywords: [
    'st frances xavier cabrini',
    'saint frances xavier cabrini',
    'st frances xavier cabrini biography',
    'st frances xavier cabrini feast day',
    'st frances xavier cabrini patron saint',
    'first us citizen canonized',
    'november 13 feast day',
    'catholic saints',
    'missionary sisters of the sacred heart',
    'patron of immigrants'
  ],
  openGraph: {
    title: 'St. Frances Xavier Cabrini - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Frances Xavier Cabrini, first US citizen to be canonized and patron of immigrants.',
    url: 'https://catholicbibleonline.com/saints/st-frances-xavier-cabrini',
  },
  twitter: {
    title: 'St. Frances Xavier Cabrini - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Frances Xavier Cabrini, first US citizen to be canonized and patron of immigrants.',
  }
}

export default function StFrancesXavierCabriniPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏥</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Frances Xavier Cabrini
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            First US Citizen Canonized, Patron of Immigrants, Founder of Missionary Sisters
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Frances Xavier Cabrini</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">November 13</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏥</div>
              <div className="text-sm text-gray-600">Founder</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Frances Xavier Cabrini</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Frances Xavier Cabrini was born as Maria Francesca Cabrini on July 15, 1850 in Sant' Angelo Lodigiano, Lombardy, Italy. She was born two months premature and the youngest of thirteen children. Unfortunately, only three of her siblings survived past adolescence and Frances would live most of her life in a fragile and delicate state of health. Frances became dedicated to living a life for religious work from a young age and received a convent education at a school ran by the Daughters of the Sacred Heart. She graduated with high honors and a teaching certificate.
              </p>
              
              <p className="mb-6">
                When Frances was 18, she applied for admission to the religious congregation of the Daughters of the Sacred Heart, but was turned down because of her poor health. Instead, a priest asked her to teach at the House of Providence Orphanage in Cadagono, Italy. She taught at the girls' school for six years and drew a community of women in to live the religious way of life. In 1877, she became Mother Cabrini after she finally made her vows and took the religious habit, also adding Xavier to her name in honor of St. Francis Xavier.
              </p>
              
              <p className="mb-6">
                When the House of Providence Orphanage closed, her bishop asked her, along with six other women from her orphanage in Cadagono, to found the Missionary Sisters of the Sacred Heart to care for the poor children in both schools and hospitals. Frances composed the Rule and Constitution for the religious institute. In its first five years, the institute established seven homes and a free school and nursery. Frances wanted to continue her mission in China, but Pope Leo XIII urged her to go to the United States, a nation that was becoming flooded with Italian immigrants who needed her help. "Not to the East, but the West," was his advice to her.
              </p>
              
              <p className="mb-6">
                On March 31, 1889, Frances arrived in New York City along with six other sisters ready to begin her new journey. However, right from the beginning she encountered many disappointments and hardships. The house originally attended for her new orphanage was no longer available, but Frances did not give up, even though the archbishop insisted she return to Italy. After she refused, Archbishop Michael Corrigan found them housing with the convent of the Sisters of Charity. Frances then received permission to found an orphanage in what is now West Park, New York and now known as Saint Cabrini Home.
              </p>
              
              <p>
                Filled with a deep trust in God and endowed with a wonderful administrative ability, Frances founded 67 institutions, including orphanages, schools, and hospitals, within 35 years dedicated to caring for the poor, uneducated, sick, abandoned, and especially for the Italian immigrants. Her institutions were spread out in places all over the United States, including New York, Colorado, and Illinois. Frances was known for being as resourceful as she was prayerful. She was always able to find people to donate their money, time, and support for her institutions.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Frances Xavier Cabrini: Mother of Immigrants</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Naturalization and Final Years</h3>
              <p className="mb-6">
                In 1909, Frances became a naturalized citizen of the United States. Eight years later, on December 22, 1917, Frances passed at the age of 67, due to complications from dysentery at the Columbus Hospital, one of her own hospitals, in Chicago, Illinois. Frances' body was originally placed at the Saint Cabrini Home, but was exhumed in 1931 as part of her canonization process. Her head is preserved in Rome at the chapel of the congregation's international motherhouse. One of her arms is at the national shrine in Chicago, and the rest of her body rests at a shrine in New York.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Miracles and Canonization</h3>
              <p className="mb-6">
                Frances has two miracles attributed to her. She restored sight to a child who was believed to have been blinded by excess silver nitrate, and she healed a terminally ill member of her congregation. St. Frances Xavier Cabrini was beatified on November 13, 1938, by Pope Pius XI and canonized by Pope Pius XII on July 7, 1946, making her the first United States citizen to be canonized. Her feast day is celebrated on November 13 and she is the patron saint of immigrants.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Impact on American Catholicism</h3>
              <p className="mb-6">
                St. Frances Xavier Cabrini's legacy extends far beyond her lifetime. She established a network of institutions that served as a foundation for Catholic social services in the United States. Her work with Italian immigrants helped to integrate them into American society while preserving their Catholic faith and cultural heritage. The Missionary Sisters of the Sacred Heart continue her work today, serving in schools, hospitals, and social service agencies throughout the world. Her example of courage, perseverance, and trust in God's providence continues to inspire those who work with immigrants and the poor.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p>
                Frances Xavier Cabrini's spiritual legacy is marked by her deep trust in God's providence, her tireless work for the poor and marginalized, and her ability to overcome seemingly insurmountable obstacles through prayer and determination. She demonstrated that one person, even with fragile health, can make an enormous difference in the world when guided by faith and love. Her life serves as a model for all who seek to serve God by serving others, especially those who are most in need of care and compassion.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">November 13</div>
              <p className="text-gray-600">Feast of St. Frances Xavier Cabrini, Patron of Immigrants</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Frances Xavier Cabrini is celebrated on November 13th, commemorating the day of her beatification in 1938. St. Frances Xavier Cabrini was beatified by Pope Pius XI on November 13, 1938, and canonized by Pope Pius XII on July 7, 1946, making her the first United States citizen to be canonized. Her feast day serves as a reminder of the importance of serving immigrants and the poor, the power of trust in God's providence, and the value of Catholic social services. Her life demonstrates the transformative power of faith and the importance of welcoming and caring for newcomers to our communities.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. Frances Xavier Cabrini's remarkable contributions to the care of immigrants and the establishment of Catholic social services. Her feast day serves as a reminder of the importance of welcoming immigrants, caring for the poor and sick, and providing education and healthcare to those in need. Many parishes and communities celebrate this day with special Masses and encourage works of charity, particularly for immigrants and refugees. The day also emphasizes the importance of Catholic social services and the value of education and healthcare as ministries of the Church. Many people also reflect on their own call to serve others and consider how they can help immigrants and the poor in their communities.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. Frances Xavier Cabrini for her intercession in matters of immigration, healthcare, education, and service to the poor. Many people also pray for immigrants, refugees, and those who work in Catholic social services. Her example encourages us to trust in God's providence, to serve others with courage and determination, and to welcome newcomers to our communities with love and compassion. St. Frances Xavier Cabrini's legacy reminds us that even the most fragile among us can accomplish great things when guided by faith and love.
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
                  <li>• <strong>Immigrants:</strong> Patron of newcomers</li>
                  <li>• <strong>Hospital Administrators:</strong> Patron of healthcare management</li>
                  <li>• <strong>Orphans:</strong> Patron of orphaned children</li>
                  <li>• <strong>Italian Americans:</strong> Patron of Italian immigrants</li>
                  <li>• <strong>Teachers:</strong> Patron of educators</li>
                  <li>• <strong>Nurses:</strong> Patron of healthcare workers</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Immigration:</strong> Helper for newcomers</li>
                  <li>• <strong>Healthcare:</strong> Patron of medical care</li>
                  <li>• <strong>Education:</strong> Helper for learning</li>
                  <li>• <strong>Social Services:</strong> Patron of charity work</li>
                  <li>• <strong>Trust in God:</strong> Helper for faith</li>
                  <li>• <strong>Perseverance:</strong> Patron of determination</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Frances Xavier Cabrini</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Frances Xavier Cabrini, first United States citizen to be canonized and patron of immigrants, 
                    who with courage and trust in God's providence founded 67 institutions to serve the poor and immigrants, 
                    help us to welcome newcomers to our communities with love and compassion. Through your intercession, 
                    may we have the strength to serve others with determination, the wisdom to trust in God's plan, and the 
                    generosity to care for those who are poor, sick, and abandoned. Help us to be faithful servants of God 
                    and to work for the betterment of society through education, healthcare, and charity. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Frances Xavier Cabrini, pray for us!"
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
            <Link href="/saints/st-francis-xavier" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis Xavier
                </h3>
                <p className="text-gray-700 text-sm">
                  Jesuit missionary after whom Frances took her name.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-vincent-de-paul" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Vincent de Paul
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great saint dedicated to serving the poor.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-elizabeth-ann-seton" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Elizabeth Ann Seton
                </h3>
                <p className="text-gray-700 text-sm">
                  First native-born US citizen to be canonized.
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