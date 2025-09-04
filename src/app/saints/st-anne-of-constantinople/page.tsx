import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Anne of Constantinople - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Anne of Constantinople, hermitess who fled marriage to live in solitude.',
  keywords: [
    'st anne of constantinople',
    'saint anne',
    'hermitess',
    'st anne of constantinople biography',
    'st anne of constantinople feast day',
    'st anne of constantinople patron saint',
    'constantinople hermitess',
    'leucadia epirus',
    'catholic saints',
    'byzantine saints'
  ],
  openGraph: {
    title: 'St. Anne of Constantinople - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Anne of Constantinople, hermitess who fled marriage to live in solitude.',
    url: 'https://catholicbibleonline.com/saints/st-anne-of-constantinople',
  },
  twitter: {
    title: 'St. Anne of Constantinople - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Anne of Constantinople, hermitess who fled marriage to live in solitude.',
  }
}

export default function StAnneOfConstantinoplePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Anne of Constantinople
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Byzantine Hermitess, Also Known as Susanna, Fled Marriage for Solitude
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Anne of Constantinople</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 23</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏔️</div>
              <div className="text-sm text-gray-600">Hermitess</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Anne of Constantinople</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Anne of Constantinople, also known as Susanna, was born in Constantinople in 840 to aristocratic parents. 
                Growing up in the heart of the Byzantine Empire, she was raised in a world of luxury and privilege, 
                with access to the finest education and opportunities that the imperial capital could offer.
              </p>
              
              <p className="mb-6">
                Despite her privileged upbringing, Anne felt called to a different kind of life. When Emperor Basil the Macedonian 
                supported a marriage proposal from a man named Agarenus, Anne faced a difficult decision. Rather than submit 
                to an arranged marriage that would have secured her position in Byzantine society, she chose to flee the city 
                to preserve her freedom and her calling to a life of prayer and solitude.
              </p>
              
              <p className="mb-6">
                Anne's flight from Constantinople was a dramatic act of courage and faith. She left behind the security of her 
                aristocratic life, her family, and the imperial court to follow her calling. Her journey took her to Leucadia, 
                a region in Epirus, where she arrived around 896.
              </p>
              
              <p className="mb-6">
                In Leucadia, Anne embraced the life of a hermitess, dedicating herself to prayer, fasting, and contemplation. 
                She lived in solitude, far from the political intrigues and social expectations of Constantinople, 
                finding peace and fulfillment in her relationship with God.
              </p>
              
              <p className="mb-6">
                Anne lived as a hermitess in Leucadia until her death, having found the spiritual freedom she had sought. 
                Her life of prayer and solitude in the mountains of Epirus became a testament to the power of following 
                one's spiritual calling, even when it means leaving behind worldly comforts and expectations.
              </p>
              
              <p>
                There is some historical confusion regarding Anne's identity, as she may be the same person as "Maura" 
                who is listed in the Roman Martyrology as having suffered martyrdom in Constantinople. This connection 
                suggests that Anne's story may have involved even greater trials and ultimately martyrdom for her faith.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Anne of Constantinople: Courage and Solitude</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Courageous Choice</h3>
              <p className="mb-6">
                St. Anne's legacy is marked by her extraordinary courage in choosing her spiritual calling over worldly 
                expectations. Her decision to flee Constantinople rather than submit to an arranged marriage demonstrates 
                the depth of her commitment to God and her willingness to sacrifice comfort and security for spiritual freedom.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Solitude and Prayer</h3>
              <p className="mb-6">
                Anne's life as a hermitess in Leucadia serves as a powerful example of the value of solitude and contemplative prayer. 
                Her choice to live in isolation, dedicating herself entirely to God, shows that true fulfillment comes not from 
                worldly success or social position, but from deep communion with the divine.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Byzantine Christian Heritage</h3>
              <p className="mb-6">
                As a Byzantine saint, Anne represents the rich spiritual tradition of the Eastern Christian world. Her story 
                reflects the challenges faced by women in Byzantine society who felt called to religious life, and her example 
                continues to inspire those seeking to live lives of prayer and devotion.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Possible Martyrdom</h3>
              <p>
                The possible connection between Anne and the martyr "Maura" adds another dimension to her legacy. If Anne 
                did indeed suffer martyrdom in Constantinople, her story becomes even more powerful, showing that her 
                commitment to God was so strong that she was willing to give her life for her faith.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">July 23</div>
              <p className="text-gray-600">Feast of St. Anne of Constantinople</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Anne of Constantinople is celebrated on July 23rd. This feast day honors her courageous choice to follow 
                her spiritual calling, her life of solitude and prayer, and her witness to the value of contemplative life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for those discerning religious life, for those facing difficult choices 
                between worldly expectations and spiritual calling, for the Church in the East, and for those seeking 
                solitude and prayer. It's also a day to reflect on the courage needed to follow God's call.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for courage in making difficult choices, for those seeking 
                solitude and prayer, for the Church in the East, and to ask for St. Anne's intercession in following 
                God's call with courage and faith.
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
                  <li>• <strong>Hermitesses:</strong> Patron of women living in solitude</li>
                  <li>• <strong>Women Facing Arranged Marriages:</strong> Patron of those resisting unwanted unions</li>
                  <li>• <strong>Byzantine Christians:</strong> Patron of Eastern Christian tradition</li>
                  <li>• <strong>Contemplative Life:</strong> Patron of those seeking prayer and solitude</li>
                  <li>• <strong>Courageous Choices:</strong> Patron of those making difficult decisions</li>
                  <li>• <strong>Constantinople:</strong> Patron of the ancient imperial city</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Spiritual Freedom:</strong> Helper for those seeking freedom in Christ</li>
                  <li>• <strong>Eastern Church:</strong> Patron of Orthodox and Eastern Catholic traditions</li>
                  <li>• <strong>Women's Vocations:</strong> Helper for women discerning religious life</li>
                  <li>• <strong>Solitude and Prayer:</strong> Patron of contemplative prayer</li>
                  <li>• <strong>Epirus:</strong> Helper for the region where she lived</li>
                  <li>• <strong>Fleeing Persecution:</strong> Patron of those escaping oppression</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Anne of Constantinople</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Anne of Constantinople, you who had the courage to flee from an arranged marriage to follow 
                    your calling to solitude and prayer, help me to have the courage to make difficult choices for God.
                  </p>
                  <p>
                    You who found peace in the mountains of Epirus, teach me to find God in solitude and to value 
                    prayer above worldly comforts. Help me to follow my spiritual calling with courage and faith. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Courageous Choices</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Anne of Constantinople, patron of courageous choices, pray for all those who face difficult 
                    decisions between worldly expectations and spiritual calling.
                  </p>
                  <p>
                    Help them to have the courage to choose God's will, even when it means leaving behind comfort 
                    and security. Give them the strength to follow their vocation with faith and trust. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Anne of Constantinople, pray for us!"
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
            <Link href="/saints/st-mary-of-egypt" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Mary of Egypt
                </h3>
                <p className="text-gray-700 text-sm">
                  Repentant sinner who became a hermitess in the desert, model of conversion.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-sarah" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Desert Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Sarah
                </h3>
                <p className="text-gray-700 text-sm">
                  Desert mother and hermitess, known for her wisdom and ascetic life.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-theodora" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Byzantine Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Theodora
                </h3>
                <p className="text-gray-700 text-sm">
                  Byzantine empress and saint, known for her piety and charitable works.
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