import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Diana d\'Andalo - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Diana d\'Andalo, Dominican nun who founded a convent in Bologna and remained faithful to her vocation despite family opposition.',
  keywords: [
    'st diana dandalo',
    'saint diana dandalo',
    'diana d\'andalo',
    'st diana dandalo biography',
    'st diana dandalo feast day',
    'st diana dandalo patron saint',
    'catholic saints',
    'june 9 feast day',
    'medieval saints',
    'dominican nun',
    'bologna',
    'virginity vow'
  ],
  openGraph: {
    title: 'St. Diana d\'Andalo - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Diana d\'Andalo, Dominican nun who founded a convent in Bologna.',
    url: 'https://catholicbibleonline.com/saints/st-diana-dandalo',
  },
  twitter: {
    title: 'St. Diana d\'Andalo - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Diana d\'Andalo, Dominican nun who founded a convent in Bologna.',
  }
}

export default function StDianaDandaloPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔬</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Diana d'Andalo
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Dominican Nun, Foundress of Bologna Convent, Model of Perseverance
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Diana d'Andalo</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">June 9</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🔬</div>
              <div className="text-sm text-gray-600">Medieval</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Diana d'Andalo</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                A member of the d'Andalo family, Diana was born near Bologna, Italy, into a 
                noble and influential family. From an early age, she felt drawn to religious 
                life and had a deep desire to serve God through the Dominican Order. Her 
                spiritual journey would be marked by both great determination and significant 
                obstacles, as her family initially opposed her religious vocation.
              </p>
              
              <p className="mb-6">
                Diana's first major achievement was convincing her father to withdraw his 
                opposition to the founding of a Dominican priory on land he owned in Bologna. 
                This was no small feat, as the d'Andalo family was prominent in the city and 
                her father's approval was crucial for the establishment of the new religious 
                community. Her persuasive efforts demonstrated both her diplomatic skills and 
                her unwavering commitment to the Dominican cause.
              </p>
              
              <p className="mb-6">
                Dominic himself, the founder of the Dominican Order, received her vow of 
                virginity, recognizing her deep spiritual calling and her commitment to a 
                life of prayer and service. This was a significant moment in her life, as 
                it marked her formal commitment to religious life under the guidance of the 
                great saint himself. However, despite this important step, her family's 
                opposition continued, and she was forced to remain at home rather than 
                entering a convent immediately.
              </p>
              
              <p className="mb-6">
                Later, Diana joined the Augustinians at Roxana, seeking to live her religious 
                vocation even if not with the Dominicans. However, her family's opposition 
                was so strong that they forcibly removed her from the convent. This violent 
                act resulted in her being injured in the struggle, a testament to the fierce 
                resistance she faced from her own family. Despite this traumatic experience, 
                her determination remained unshaken.
              </p>
              
              <p className="mb-6">
                After recovering from her injuries, Diana escaped from her family and returned 
                to Roxana, demonstrating her extraordinary courage and commitment to her 
                religious calling. This act of defiance against her family's wishes showed 
                her willingness to risk everything for the sake of her vocation. Her escape 
                and return to the convent marked a turning point in her spiritual journey.
              </p>
              
              <p className="mb-6">
                Sometime later, Blessed Jordan of Saxony, who succeeded St. Dominic as Master 
                General of the Dominican Order, intervened on her behalf. His influence and 
                persuasion were crucial in convincing Diana's family to found a Dominican 
                convent in 1222 specifically for her. This was a remarkable achievement, as 
                it represented not just permission to enter religious life, but the actual 
                establishment of a new religious community.
              </p>
              
              <p>
                The new convent was staffed with Diana and four companions, along with four 
                nuns brought from Rome, including Cecilia and Amata. This community would 
                become a center of Dominican spirituality and learning in Bologna. Diana 
                died on January 9, and when Cecilia and Amata died, they were buried with 
                her, symbolizing their shared commitment to the Dominican life. All three 
                were beatified in 1891, recognizing their holiness and their contribution 
                to the Dominican Order.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Diana d'Andalo: Woman of Perseverance</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Foundress of Dominican Convent in Bologna</h3>
              <p className="mb-6">
                St. Diana d'Andalo's greatest legacy is the founding of the Dominican convent 
                in Bologna, which she achieved through persistent prayer, diplomacy, and 
                unwavering faith. This convent became a center of Dominican spirituality and 
                learning, serving as a model for other religious communities in the region. 
                Her success in establishing this foundation despite significant family opposition 
                demonstrates the power of faith and determination in achieving God's will.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Perseverance in Vocation</h3>
              <p className="mb-6">
                Diana's life serves as a powerful example of perseverance in following one's 
                religious vocation despite opposition and obstacles. Her story shows that 
                God's call is sometimes met with resistance, even from those closest to us, 
                but that faithfulness to this call can ultimately lead to great fruitfulness. 
                Her determination to live her vocation, even when it meant escaping from her 
                family and facing physical injury, inspires all who face obstacles in following 
                their calling.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Family Reconciliation</h3>
              <p className="mb-6">
                Diana's story demonstrates that even the most difficult family situations can 
                be transformed through prayer and the intervention of holy people. The fact 
                that her family eventually not only accepted her vocation but actually founded 
                a convent for her shows the power of God's grace to change hearts. This aspect 
                of her legacy offers hope to those who face family opposition to their religious 
                calling or other important life decisions.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Connection to Dominican Founders</h3>
              <p className="mb-6">
                Diana's direct connection to St. Dominic and Blessed Jordan of Saxony gives 
                her a unique place in Dominican history. She received her vow of virginity 
                from St. Dominic himself, and it was Blessed Jordan who helped secure her 
                family's cooperation in founding the convent. This connection to the early 
                Dominican saints makes her an important link in the chain of Dominican 
                tradition and spirituality.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Example of Courage and Faith</h3>
              <p>
                Throughout her life, Diana demonstrated extraordinary courage in the face of 
                opposition and physical danger. Her willingness to risk injury and family 
                rejection for the sake of her vocation shows the depth of her faith and her 
                commitment to God's will. Her example teaches us that true faith sometimes 
                requires us to make difficult choices and to trust in God's providence even 
                when the path ahead seems uncertain or dangerous.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">June 9</div>
              <p className="text-gray-600">Feast of St. Diana d'Andalo, Dominican Nun and Foundress</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Diana d'Andalo is celebrated on June 9th, commemorating 
                her life as a Dominican nun who overcame significant obstacles to follow 
                her religious vocation. This feast honors her perseverance in the face of 
                family opposition, her courage in defending her calling, and her contribution 
                to the Dominican Order through the foundation of the Bologna convent. It is 
                a day to remember that God's call sometimes requires great sacrifice and 
                determination to fulfill.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. Diana d'Andalo lived during the early 13th century, a time when the 
                Dominican Order was in its formative years and religious life for women 
                was often subject to family and social constraints. Her story reflects the 
                challenges that many women of noble birth faced when seeking to enter religious 
                life, as families often had other plans for their daughters, including 
                advantageous marriages. Diana's success in establishing a Dominican convent 
                helped to pave the way for other women seeking religious life in the medieval period.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On her feast day, Catholics pray for her intercession, especially for those 
                facing family opposition to their religious vocation, for those struggling 
                to persevere in their calling, for families dealing with difficult decisions 
                about their children's futures, for the Dominican Order and its members, 
                for those seeking courage to follow God's will, and for the grace to trust 
                in God's providence when facing obstacles. Her example inspires us to be 
                faithful to our calling even when it requires great sacrifice.
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
                  <li>• <strong>Religious Vocations:</strong> Patron saint of those discerning religious life</li>
                  <li>• <strong>Family Opposition:</strong> Patron of those facing family resistance to their calling</li>
                  <li>• <strong>Dominican Nuns:</strong> Patron of Dominican sisters and nuns</li>
                  <li>• <strong>Perseverance:</strong> Patron of those struggling to persevere in their vocation</li>
                  <li>• <strong>Noble Women:</strong> Patron of women from noble families seeking religious life</li>
                  <li>• <strong>Bologna:</strong> Patron of the city of Bologna and its religious communities</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Vocation Discernment:</strong> Helper for those discerning their calling</li>
                  <li>• <strong>Family Reconciliation:</strong> Patron of families dealing with difficult decisions</li>
                  <li>• <strong>Courage:</strong> Helper for those needing courage to follow God's will</li>
                  <li>• <strong>Trust in God:</strong> Patron of those learning to trust in divine providence</li>
                  <li>• <strong>Religious Communities:</strong> Helper for the foundation of new religious houses</li>
                  <li>• <strong>Healing:</strong> Patron of those recovering from family conflicts</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Diana d'Andalo</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Diana d'Andalo, model of perseverance and courage in following 
                    your religious vocation, intercede for us who face obstacles in our calling.
                  </p>
                  <p className="mb-4">
                    You who overcame family opposition and physical injury to serve God, 
                    help us to remain faithful to our vocation even when it requires great sacrifice.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace to 
                    persevere in following God's will and to trust in His providence. Through 
                    Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Religious Vocations</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Diana d'Andalo, patron of religious vocations, intercede for all 
                    who are discerning their calling to religious life.
                  </p>
                  <p>
                    Help them to hear God's voice clearly, to have the courage to follow 
                    His will, and to persevere despite any obstacles they may face. Through 
                    Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Family Reconciliation</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Diana d'Andalo, who experienced family opposition but eventually 
                    achieved reconciliation, intercede for families dealing with difficult decisions.
                  </p>
                  <p>
                    Help families to understand and support each other's vocations, to find 
                    common ground, and to trust in God's plan for their loved ones. Through 
                    Christ our Lord. Amen."
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
            <Link href="/saints/st-dominic" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Dominic
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Dominican Order who received Diana's vow of virginity.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-catherine-siena" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Catherine of Siena
                </h3>
                <p className="text-gray-700 text-sm">
                  Dominican tertiary who also faced family opposition to her vocation.
                </p>
              </div>
            </Link>

                         <Link href="/saints/st-clare-assisi" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Clare
                </h3>
                <p className="text-gray-700 text-sm">
                  Foundress of the Poor Clares who also escaped family to follow her calling.
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