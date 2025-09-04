import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Jerome Emiliani - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Jerome Emiliani, patron saint of abandoned children and orphans, founder of the Clerks Regular of Somascha.',
  keywords: [
    'st jerome emiliani',
    'saint jerome emiliani',
    'st jerome emiliani biography',
    'st jerome emiliani feast day',
    'st jerome emiliani patron saint',
    'catholic saints',
    'february 8 feast day',
    'patron of orphans',
    'clerks regular of somascha'
  ],
  openGraph: {
    title: 'St. Jerome Emiliani - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Jerome Emiliani, patron saint of abandoned children and orphans.',
    url: 'https://catholicbibleonline.com/saints/st-jerome-emiliani',
  },
  twitter: {
    title: 'St. Jerome Emiliani - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Jerome Emiliani, patron saint of abandoned children and orphans.',
  }
}

export default function StJeromeEmilianiPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👶</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Jerome Emiliani
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron Saint of Abandoned Children and Orphans, Founder of the Clerks Regular of Somascha
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Jerome Emiliani</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">February 8</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👶</div>
              <div className="text-sm text-gray-600">Orphans</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Jerome Emiliani</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Jerome Emiliani was born in Venice, Italy, in 1486. His early life was marked by military service 
                and worldly ambitions. He served as a military commander for Venice, in charge of a fortress, and 
                lived a life focused on his own strength and the power of his soldiers and weapons, with little 
                regard for God.
              </p>
              
              <p className="mb-6">
                In 1511, during the war against the League of Cambrai, Jerome's fortress was captured and he was 
                imprisoned in a dark, dirty dungeon. It was in this moment of complete helplessness that Jerome 
                experienced a profound spiritual conversion. Chained and powerless, he realized the futility of 
                relying on worldly strength and turned to God for deliverance.
              </p>
              
              <p className="mb-6">
                When he finally escaped from prison, Jerome hung his metal chains in the nearby church of Treviso 
                as a symbol of gratitude—not only for being freed from physical imprisonment, but also from the 
                spiritual chains that had bound his soul. This act marked the beginning of his new life dedicated 
                to God and service to others.
              </p>
              
              <p className="mb-6">
                After serving briefly as mayor of Treviso, Jerome returned to Venice where he studied for the 
                priesthood. The war had left devastation in its wake, bringing famine and plague that caused 
                thousands to suffer. Jerome devoted himself to serving the poor and suffering, with a special 
                call to help orphans who had lost their families to sickness and starvation.
              </p>
              
              <p className="mb-6">
                Using his own money, Jerome rented a house for the orphans, providing them with food, clothing, 
                and education. He developed the first known catechetical teaching method using questions and 
                answers, ensuring the children received both practical care and spiritual formation. His constant 
                devotion to the suffering put him in danger, and he himself fell ill from the plague.
              </p>
              
              <p>
                When he recovered, Jerome could have used his illness as an excuse to step back from his work, 
                but instead it seemed to remove the last chains from his soul. He interpreted his suffering as 
                a sign of how little worldly ambitions mattered. He committed his entire life and all his 
                possessions to helping others, founding orphanages in other cities, a hospital, and a shelter 
                for prostitutes. This work grew into the Clerks Regular of Somascha, named after the place where 
                they had their house. Jerome died in 1537 at the age of 56 while caring for the sick.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Jerome Emiliani: Father to the Fatherless</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Conversion and Transformation</h3>
              <p className="mb-6">
                St. Jerome Emiliani's life demonstrates the power of conversion and transformation. From a 
                military commander focused on worldly power to a saint dedicated to serving the most vulnerable, 
                his journey shows how God can use our darkest moments to bring about the greatest good.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Champion of Orphans</h3>
              <p className="mb-6">
                Jerome's most enduring legacy is his work with abandoned children and orphans. He recognized 
                that these children, who had lost everything, needed not just material assistance but also 
                love, education, and spiritual formation. His approach to caring for orphans became a model 
                for Catholic social work.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Innovative Education</h3>
              <p className="mb-6">
                Jerome pioneered the use of question-and-answer catechetical teaching, making religious 
                education more accessible and engaging for children. This method continues to influence 
                Catholic education today, showing his commitment to both the spiritual and intellectual 
                development of the young.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Comprehensive Care</h3>
              <p>
                Jerome's ministry extended beyond just caring for orphans. He founded hospitals, shelters 
                for prostitutes, and other institutions to address the various needs of the suffering. 
                His holistic approach to charity work established a foundation for comprehensive Catholic 
                social services.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">February 8</div>
              <p className="text-gray-600">Feast of St. Jerome Emiliani</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Jerome Emiliani is celebrated on February 8th. This date commemorates his 
                death and his entrance into eternal life, where he continues to intercede for all abandoned 
                children and those who care for them.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Canonization</h3>
              <p className="mb-6">
                St. Jerome was canonized in 1767 by Pope Clement XIII. His canonization recognized not only 
                his personal holiness but also the importance of his work in establishing care for orphans 
                and abandoned children as a vital part of the Church's mission.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Modern Relevance</h3>
              <p>
                In today's world, St. Jerome's feast day serves as a reminder of the dignity of every child 
                and the importance of caring for the most vulnerable members of society. It's a day to pray 
                for all abandoned children and to remember those who work in orphanages and foster care.
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
                  <li>• <strong>Abandoned Children:</strong> Patron of children who have been left without care</li>
                  <li>• <strong>Orphans:</strong> Patron of children who have lost their parents</li>
                  <li>• <strong>Foster Parents:</strong> Patron of those who care for children in need</li>
                  <li>• <strong>Orphanages:</strong> Protector of institutions caring for children</li>
                  <li>• <strong>Military Converts:</strong> Patron of those who convert from military life</li>
                  <li>• <strong>Prisoners:</strong> Helper for those in physical or spiritual bondage</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Foster Care:</strong> Success for foster families and adoption</li>
                  <li>• <strong>Child Welfare:</strong> Protection and care for vulnerable children</li>
                  <li>• <strong>Conversion:</strong> Help for those seeking spiritual transformation</li>
                  <li>• <strong>Prison Ministry:</strong> Support for those working with prisoners</li>
                  <li>• <strong>Social Services:</strong> Success for Catholic charitable organizations</li>
                  <li>• <strong>Education:</strong> Help for children's educational needs</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Jerome Emiliani</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Saint Jerome Emiliani, watch over all children who are abandoned or unloved. Give us 
                    the courage to show them God's love through our care.
                  </p>
                  <p className="mb-4">
                    Help us to lose the chains that keep us from living the life God intended for us. 
                    Teach us to see Christ in every child and to serve them with the same love and 
                    dedication that characterized your ministry.
                  </p>
                  <p>
                    May we, like you, be willing to give everything for the love of Christ and the care 
                    of His little ones. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Foster Parents</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Jerome Emiliani, patron of foster parents and abandoned children, intercede for 
                    all families who open their hearts and homes to children in need.
                  </p>
                  <p>
                    Help them to provide love, stability, and care to children who have experienced loss 
                    and abandonment. May they be instruments of God's healing love. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Jerome Emiliani, pray for all abandoned children and those who care for them!"
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
                  Charity Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John Bosco
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Salesians, known as Father and Teacher of Youth, dedicated to educating and caring for young people.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-vincent-de-paul" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Charity Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Vincent de Paul
                </h3>
                <p className="text-gray-700 text-sm">
                  Known for his work with the poor and founder of the Vincentians, dedicated to serving the most vulnerable.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-elizabeth-ann-seton" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Charity Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Elizabeth Ann Seton
                </h3>
                <p className="text-gray-700 text-sm">
                  First native-born American saint, patron of Catholic schools and educators, dedicated to children's education.
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