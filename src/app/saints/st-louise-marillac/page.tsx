import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Louise de Marillac - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Louise de Marillac, French widow and co-founder of the Daughters of Charity with St. Vincent de Paul.',
  keywords: [
    'st louise de marillac',
    'saint louise de marillac',
    'st louise marillac',
    'st louise feast day',
    'st louise patron saint',
    'catholic saints',
    'march 15 feast day',
    'french saints',
    'daughters of charity'
  ],
  openGraph: {
    title: 'St. Louise de Marillac - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Louise de Marillac, French widow and co-founder of the Daughters of Charity.',
    url: 'https://catholicbibleonline.com/saints/st-louise-marillac',
  },
  twitter: {
    title: 'St. Louise de Marillac - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Louise de Marillac, French widow and co-founder of the Daughters of Charity.',
  }
}

export default function StLouiseMarillacPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">❤️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Louise de Marillac
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            French Widow, Co-founder of Daughters of Charity, Patroness of Social Workers
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Louise de Marillac</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">March 15</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">❤️</div>
              <div className="text-sm text-gray-600">Charity</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Louise de Marillac</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Louise de Marillac was born on August 12, 1591, probably at Ferrieres-en-Brie near Meux, France. 
                She was educated by the Dominican nuns at Poissy, where she received a solid foundation in both 
                academic and spiritual formation. From an early age, Louise felt a strong calling to religious life 
                and desired to become a nun.
              </p>
              
              <p className="mb-6">
                However, following the advice of her confessor, she married Antony LeGras, an official in the Queen's 
                service, in 1613. This marriage, though not her first choice, became an important part of her spiritual 
                journey. Louise embraced her role as a wife and mother, learning valuable lessons about love, sacrifice, 
                and service within the context of family life.
              </p>
              
              <p className="mb-6">
                After Antony's death in 1625, Louise found herself a widow with new responsibilities and challenges. 
                It was during this difficult period that she met St. Vincent de Paul, who became her spiritual adviser 
                and would profoundly influence the rest of her life. Under his guidance, Louise discovered her true 
                vocation and devoted herself completely to serving God through works of charity.
              </p>
              
              <p className="mb-6">
                Louise began working closely with St. Vincent de Paul, helping to direct his Ladies of Charity in 
                their work of caring for the sick, the poor, and the neglected. Her organizational skills, compassion, 
                and deep spiritual insight made her an invaluable partner in this ministry. She understood that true 
                charity required both love and practical organization.
              </p>
              
              <p>
                In 1633, Louise set up a training center in her own home for candidates seeking to help in her work. 
                This was the beginning of the Sisters (or Daughters, as Vincent preferred) of Charity of St. Vincent 
                de Paul, though it was not formally approved until 1655. Louise took her vows in 1634 and attracted 
                great numbers of candidates who were drawn to her example of selfless service and deep spirituality.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Louise de Marillac: Patroness of Social Workers and Charity</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Louise's legacy is one of extraordinary charity, organizational genius, and spiritual depth. She 
                exemplifies how lay people, especially widows, can serve God and neighbor through practical works of 
                mercy while maintaining a deep interior life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Organized Charity</h3>
              <p className="mb-6">
                Louise revolutionized the way charity was practiced by combining practical organization with genuine 
                love. She wrote a rule for the community and established systematic approaches to serving the poor, 
                showing that effective charity requires both heart and structure. Her methods became the foundation 
                for modern social work.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Co-founder of Daughters of Charity</h3>
              <p className="mb-6">
                As co-founder of the Daughters of Charity with St. Vincent de Paul, Louise created a new model of 
                religious life that allowed women to serve the poor while living in the world. She traveled all over 
                France establishing her Sisters in hospitals, orphanages, and other institutions, creating a network 
                of charity that continues to this day.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patroness of Social Workers</h3>
              <p>
                Declared Patroness of Social Workers by Pope John XXIII in 1960, St. Louise represents the ideal 
                of professional service combined with Christian love. Her life shows that social work, when done 
                with faith and love, becomes a form of ministry and a path to holiness.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">March 15</div>
              <p className="text-gray-600">Feast of St. Louise de Marillac, Widow and Co-founder</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Louise de Marillac is celebrated on March 15th, commemorating her death in Paris 
                in 1660. This day honors her as a model of Christian widowhood and organized charity, reminding us 
                that every state of life can be a path to holiness when lived in service to God and neighbor.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this feast day, Catholics are encouraged to reflect on how they can serve the poor and marginalized 
                in their communities. It's also a time to pray for social workers, widows, and all those who dedicate 
                their lives to serving others. Many parishes organize service projects or charitable activities.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast of St. Louise reminds us that charity is not just about giving, but about organizing and 
                sustaining works of mercy. It's an excellent time to pray for the intercession of this great saint 
                and to renew our commitment to serving the poor with both love and practical wisdom.
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
                  <li>• <strong>Social Workers:</strong> Patroness of those who serve the poor and marginalized</li>
                  <li>• <strong>Widows:</strong> Protector of women who have lost their spouses</li>
                  <li>• <strong>Orphans:</strong> Guardian of children without parents</li>
                  <li>• <strong>Daughters of Charity:</strong> Patroness of the religious order she co-founded</li>
                  <li>• <strong>Charitable Organizations:</strong> Patroness of institutions serving the poor</li>
                  <li>• <strong>France:</strong> Patron saint of her native country</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Organized Charity:</strong> Helper in structuring works of mercy</li>
                  <li>• <strong>Widowhood:</strong> Patron of those adjusting to life after loss</li>
                  <li>• <strong>Healthcare Ministry:</strong> Guardian of those serving in hospitals</li>
                  <li>• <strong>Orphan Care:</strong> Helper in caring for abandoned children</li>
                  <li>• <strong>Religious Formation:</strong> Patron of spiritual development</li>
                  <li>• <strong>Service Leadership:</strong> Guardian of those leading charitable works</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Louise de Marillac</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Louise de Marillac, you who combined deep spirituality with practical charity, 
                    intercede for us that we may serve the poor and marginalized with both love and organization.
                  </p>
                  <p className="mb-4">
                    Help us to see that every act of service, no matter how small, can be a path to holiness 
                    when done with faith and love. May your example inspire us to organize our charitable works 
                    effectively while maintaining a deep interior life.
                  </p>
                  <p>
                    St. Louise de Marillac, pray for us, that we may be worthy of the promises of Christ. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Louise de Marillac, pray for us!"
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
            <Link href="/saints/st-vincent-de-paul" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Vincent de Paul
                </h3>
                <p className="text-gray-700 text-sm">
                  Co-founder of the Daughters of Charity and patron of charitable societies, known as the Apostle of Charity.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-elizabeth-hungary" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Charity Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Elizabeth of Hungary
                </h3>
                <p className="text-gray-700 text-sm">
                  Princess of charity and patron of the poor, known for her generous service to the needy.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-frances-xavier-cabrini" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Frances Xavier Cabrini
                </h3>
                <p className="text-gray-700 text-sm">
                  First US citizen to be canonized, founder of the Missionary Sisters of the Sacred Heart.
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