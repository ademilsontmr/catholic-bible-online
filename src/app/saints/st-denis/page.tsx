import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Denis - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Denis, first bishop of Paris and Apostle of France, martyred with companions Rusticus and Eleutherius.',
  keywords: [
    'st denis',
    'saint denis',
    'st denis biography',
    'st denis feast day',
    'st denis patron saint',
    'catholic saints',
    'french martyrs'
  ],
  openGraph: {
    title: 'St. Denis - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Denis, first bishop of Paris and Apostle of France.',
    url: 'https://catholicbibleonline.com/saints/st-denis',
  },
  twitter: {
    title: 'St. Denis - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Denis, first bishop of Paris and Apostle of France.',
  }
}

export default function StDenisPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Denis
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            First Bishop of Paris and Apostle of France
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Denis</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 9</div>
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
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Denis</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The first mention we have of these three martyrs who died around 258 A.D. comes in the sixth 
                century in the writings of Saint Gregory of Tours. St. Denis, also known as Dionysius, is 
                the most famous of the three and holds a special place in the history of Christianity in France.
              </p>
              
              <p className="mb-6">
                Born and raised in Italy, Denis was sent as a missionary to Gaul (now France) circa 250 A.D. 
                by Pope St. Clement along with five other bishops. This mission marked the beginning of 
                organized Christian evangelization in what would become modern France, making Denis one of 
                the most important figures in the early Church's expansion into Western Europe.
              </p>
              
              <p className="mb-6">
                Denis made his base of missionary activity an island in the Seine near the city of Lutetia 
                Parisorium -- what would become Paris. For this reason he is known as the first bishop of 
                Paris and the Apostle of France. His strategic choice of location in the heart of what would 
                become the French capital demonstrates his vision for establishing Christianity in the most 
                important centers of Roman Gaul.
              </p>
              
              <p className="mb-6">
                There he was captured by the Parisians along with his companions Rusticus and Eleutherius. 
                Later writers have referred to these as Denis' priest and deacon, or his deacon and subdeacon, 
                but we have no further information on them. What is clear is that they shared in Denis' 
                missionary work and ultimately in his martyrdom.
              </p>
              
              <p className="mb-6">
                After a long imprisonment and several aborted executions, the three martyrs were beheaded 
                with a sword and their bodies were thrown into the river. This brutal execution reflects 
                the intense persecution that Christians faced during this period of Roman rule in Gaul.
              </p>
              
              <p className="mb-6">
                Denis' body was retrieved from the Seine by his converts and buried. The chapel that was 
                built over his tomb grew into the famous abbey of Saint-Denis, which would become the 
                burial place of French kings and one of the most important religious sites in France.
              </p>
              
              <p>
                In the ninth century, Denis' story and identity became fused and confused with Dionysius 
                the Areopagite and Pseudo-Dionysius, but later scholarship has re-established his identity 
                as a separate saint. Denis is pictured as he was martyred -- headless (with a vine growing 
                over the neck) and carrying his own mitred head, a powerful symbol of his unwavering faith 
                even in death.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Denis: Apostle of France</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Foundation of French Christianity</h3>
              <p className="mb-6">
                St. Denis's legacy is nothing short of foundational for Christianity in France. As the 
                first bishop of Paris and the Apostle of France, he established the Christian faith in 
                what would become the heart of French civilization. His missionary work laid the groundwork 
                for the Christianization of the entire region.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron Saint of France</h3>
              <p className="mb-6">
                Recognized since the time of St. Gregory as a special saint of Paris, Denis is the patron 
                saint of France. His intercession has been sought by French kings, soldiers, and citizens 
                throughout the centuries, making him one of the most important national saints in Christian 
                history.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Symbol of Unwavering Faith</h3>
              <p className="mb-6">
                The iconic image of St. Denis carrying his own head represents the ultimate sacrifice for 
                the faith. This powerful symbol has inspired countless Christians to remain steadfast in 
                their beliefs, even in the face of persecution and death. His martyrdom demonstrates that 
                true faith cannot be severed, even by the sword.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Cultural and Religious Center</h3>
              <p>
                The Abbey of Saint-Denis, built over his tomb, became not only a religious center but also 
                a cultural and political landmark in French history. As the burial place of French monarchs, 
                it symbolizes the deep connection between the Catholic faith and French national identity 
                that Denis helped establish.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">October 9</div>
              <p className="text-gray-600">Feast of St. Denis, Bishop and Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Denis's feast day is celebrated on October 9th, commemorating his martyrdom along with 
                his companions Rusticus and Eleutherius. This feast is particularly important in France, 
                where he is honored as the patron saint of the nation and the city of Paris.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                In France, especially in Paris and the surrounding regions, St. Denis's feast is celebrated 
                with special devotion. Pilgrims visit the Basilica of Saint-Denis, his burial place, and 
                pray for his intercession. The feast is also marked by processions and special liturgical 
                celebrations throughout the country.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                Devotees pray to St. Denis for the protection of France, for relief from headaches (due to 
                his beheading), for deliverance from demonic possession, and for the courage to remain 
                faithful to Christ even in the face of persecution. His intercession is particularly 
                sought by those facing trials of faith or physical suffering.
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
                  <li>• <strong>France:</strong> As the patron saint of the entire nation</li>
                  <li>• <strong>Paris:</strong> As the first bishop and patron of the capital</li>
                  <li>• <strong>Headaches:</strong> Due to his beheading and carrying his head</li>
                  <li>• <strong>Possessed People:</strong> For deliverance from demonic influence</li>
                  <li>• <strong>Martyrs:</strong> For his courageous death for the faith</li>
                  <li>• <strong>Missionaries:</strong> For his evangelization of Gaul</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>National Protection:</strong> For the safety and well-being of France</li>
                  <li>• <strong>Faithful Witness:</strong> For courage in professing the faith</li>
                  <li>• <strong>Missionary Zeal:</strong> For the spread of the Gospel</li>
                  <li>• <strong>Perseverance:</strong> For strength in times of trial</li>
                  <li>• <strong>Healing:</strong> For relief from head pain and suffering</li>
                  <li>• <strong>Spiritual Warfare:</strong> For protection against evil</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Denis</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed St. Denis, first bishop of Paris and Apostle of France, you who carried 
                    your own head as a witness to your unwavering faith, intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    Help us to remain steadfast in our faith, even when faced with persecution or trials. 
                    Grant us the courage to carry the cross of Christ with the same determination you showed 
                    in carrying your own head.
                  </p>
                  <p className="mb-4">
                    Protect France and all who call upon your intercession. Heal those who suffer from 
                    headaches and deliver those who are oppressed by evil spirits. May your example of 
                    missionary zeal inspire us to spread the Gospel with courage and love.
                  </p>
                  <p>
                    Through your intercession, may we grow in faith, hope, and charity, and may we have 
                    the strength to witness to Christ in all circumstances. St. Denis, pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Denis, Apostle of France, pray for us!"
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
            <Link href="/saints/st-joan-arc" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Warrior Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joan of Arc
                </h3>
                <p className="text-gray-700 text-sm">
                  The Maid of Orléans, another great patron saint of France who defended the nation.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-martin-tours" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Martin of Tours
                </h3>
                <p className="text-gray-700 text-sm">
                  Bishop of Tours and another important early Christian figure in Gaul.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-remigius" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Remigius
                </h3>
                <p className="text-gray-700 text-sm">
                  Bishop of Reims who baptized Clovis, the first Christian king of the Franks.
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