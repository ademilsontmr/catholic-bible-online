import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Catherine de Ricci - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Catherine de Ricci, Dominican nun known for her mystical experiences and the "Ecstasy of the Passion".',
  keywords: [
    'st catherine de ricci',
    'saint catherine de ricci',
    'st catherine ricci',
    'st catherine de ricci biography',
    'st catherine de ricci feast day',
    'st catherine de ricci patron saint',
    'catholic saints',
    'february 13 feast day',
    'modern saints',
    'dominican nun',
    'ecstasy of the passion',
    'mystic'
  ],
  openGraph: {
    title: 'St. Catherine de Ricci - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Catherine de Ricci, Dominican nun known for her mystical experiences.',
    url: 'https://catholicbibleonline.com/saints/st-catherine-ricci',
  },
  twitter: {
    title: 'St. Catherine de Ricci - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Catherine de Ricci, Dominican nun known for her mystical experiences.',
  }
}

export default function StCatherineRicciPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💙</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Catherine de Ricci
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Dominican Nun, Mystic, Witness of the Passion of Christ
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Catherine de Ricci</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">February 13</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💙</div>
              <div className="text-sm text-gray-600">Modern</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Catherine de Ricci</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Catherine de Ricci was born in Florence, Italy, in 1522. Her baptismal name 
                was Alexandrina, but she took the name of Catherine upon entering religious life. 
                From her earliest infancy, she manifested a great love of prayer, showing signs 
                of a deep spiritual calling that would mark her entire life. Even as a very young 
                child, she demonstrated an unusual devotion to God and a desire for the religious life.
              </p>
              
              <p className="mb-6">
                In her sixth year, her father, recognizing her spiritual inclinations, placed her 
                in the convent of Monticelli in Florence, where her aunt, Louisa de Ricci, was a nun. 
                This early exposure to religious life allowed Catherine to develop her spiritual 
                gifts in a supportive environment. After a brief return home, she entered the convent 
                of the Dominican nuns at Prat in Tuscany in her fourteenth year, beginning her 
                formal religious formation.
              </p>
              
              <p className="mb-6">
                While still very young, Catherine was chosen as Mistress of Novices, a position 
                of great responsibility that demonstrated the trust her superiors had in her 
                spiritual maturity and leadership abilities. She was then appointed subprioress, 
                and at the remarkably young age of twenty-five, she became perpetual prioress of 
                the convent. This rapid advancement in religious leadership was unusual for someone 
                so young, but it reflected her exceptional spiritual gifts and administrative abilities.
              </p>
              
              <p className="mb-6">
                The reputation of her sanctity drew to her side many illustrious personages, 
                including several who would later become popes. Among her correspondents and 
                visitors were three future pontiffs: Cerveni (who would become Marcellus II), 
                Alexander de Medicis (who would become Clement VIII), and Aldo Brandini (who 
                would become Leo XI). These high-ranking Church officials sought her counsel 
                and spiritual guidance, recognizing her as a person of exceptional holiness.
              </p>
              
              <p className="mb-6">
                Catherine corresponded with St. Philip Neri, another great saint of the period, 
                and while still living, she appeared to him in Rome in a miraculous manner. 
                This bilocation, or the ability to be in two places at once, was one of the 
                extraordinary mystical gifts that God granted to her. This miraculous appearance 
                to St. Philip Neri demonstrated the depth of her spiritual union with God and 
                her ability to transcend normal physical limitations through divine grace.
              </p>
              
              <p className="mb-6">
                St. Catherine is most famous for the "Ecstasy of the Passion" which she experienced 
                every Thursday from noon until Friday at 4:00 p.m. for twelve years. During these 
                weekly ecstasies, she would relive the Passion of Christ, experiencing in her own 
                body the sufferings that Our Lord endured during His crucifixion. These mystical 
                experiences were so profound and visible that they attracted the attention of 
                Church authorities and were carefully documented by witnesses.
              </p>
              
              <p>
                After a long illness, St. Catherine de Ricci passed away in 1589, having lived 
                a life of extraordinary holiness and mystical union with God. Her death marked 
                the end of an earthly life that had been completely dedicated to God and the 
                service of others. Her feast day is celebrated on February 13th, commemorating 
                her life as a model of Dominican spirituality and mystical prayer.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Catherine de Ricci: Mystic of the Passion</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Witness to the Passion of Christ</h3>
              <p className="mb-6">
                St. Catherine's greatest legacy is her extraordinary mystical participation in 
                the Passion of Christ. Her weekly "Ecstasy of the Passion" for twelve years 
                represents one of the most remarkable mystical phenomena in the history of the 
                Church. Through these experiences, she not only witnessed the sufferings of 
                Christ but participated in them in a deeply personal way. Her example teaches 
                us that the Passion of Christ is not just a historical event but a living reality 
                that can be experienced through prayer and contemplation.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Dominican Spirituality</h3>
              <p className="mb-6">
                As a Dominican nun, Catherine embodied the best of Dominican spirituality, 
                combining contemplative prayer with active service. Her role as perpetual 
                prioress at such a young age demonstrates her ability to balance mystical 
                experiences with practical leadership. She showed that deep prayer and 
                effective administration are not mutually exclusive but can complement each 
                other in the service of God and the Church. Her example continues to inspire 
                Dominicans and all religious to seek this balance in their own lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Counselor to Popes</h3>
              <p className="mb-6">
                Catherine's reputation for holiness was so great that she was sought out by 
                some of the highest-ranking Church officials of her time, including three 
                future popes. This demonstrates that true spiritual authority comes not from 
                worldly position but from holiness of life. Her ability to counsel popes 
                shows that God often chooses the humble and simple to confound the wise and 
                powerful. Her example teaches us that spiritual wisdom is available to all 
                who seek it with a pure heart.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Example of Mystical Prayer</h3>
              <p>
                Catherine's life demonstrates the power and reality of mystical prayer. Her 
                bilocation to Rome to visit St. Philip Neri and her weekly ecstasies show 
                that God can work extraordinary miracles through those who are completely 
                surrendered to Him. Her example encourages us to open ourselves to the 
                possibility of deeper prayer and mystical experiences, while always remaining 
                grounded in the teachings of the Church and the guidance of spiritual directors.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">February 13</div>
              <p className="text-gray-600">Feast of St. Catherine de Ricci, Dominican Nun and Mystic</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Catherine de Ricci is celebrated on February 13th, commemorating 
                her life as a Dominican nun and mystic who experienced extraordinary mystical 
                phenomena. This feast honors her deep union with Christ through the Passion, 
                her leadership in religious life, and her role as a spiritual counselor to 
                Church leaders. It is a day to remember that God continues to work extraordinary 
                wonders through those who are completely surrendered to His will.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. Catherine lived during the 16th century, a time of great religious and 
                social change in Europe. The Protestant Reformation was challenging the Church, 
                and the Catholic Counter-Reformation was responding with renewed emphasis on 
                holiness and reform. Catherine's mystical experiences and her role as a spiritual 
                counselor to Church leaders were part of this broader movement of spiritual 
                renewal. Her life demonstrates that even in times of great change and challenge, 
                God continues to raise up saints to guide and inspire His people.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On her feast day, Catholics pray for her intercession, especially for those 
                seeking deeper prayer and mystical experiences, for religious sisters and nuns, 
                for those suffering from illness or pain, for Church leaders seeking spiritual 
                guidance, and for the grace to participate more deeply in the Passion of Christ. 
                Her example inspires us to seek union with Christ through prayer and to be open 
                to the extraordinary ways in which God can work in our lives.
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
                  <li>• <strong>Dominican Nuns:</strong> Patron saint of Dominican nuns and sisters</li>
                  <li>• <strong>Mystics:</strong> Patron of mystics and contemplatives</li>
                  <li>• <strong>Florence:</strong> Patron of Florence, Italy</li>
                  <li>• <strong>Religious Leaders:</strong> Patron of religious superiors and prioresses</li>
                  <li>• <strong>Spiritual Counselors:</strong> Patron of spiritual directors and counselors</li>
                  <li>• <strong>Those in Pain:</strong> Patron of those suffering from illness or pain</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Mystical Prayer:</strong> Helper for those seeking deeper prayer</li>
                  <li>• <strong>Passion Devotion:</strong> Patron of those devoted to the Passion</li>
                  <li>• <strong>Religious Life:</strong> Helper for those in religious communities</li>
                  <li>• <strong>Spiritual Guidance:</strong> Patron of those seeking spiritual direction</li>
                  <li>• <strong>Bilocation:</strong> Helper for those experiencing mystical phenomena</li>
                  <li>• <strong>Church Leaders:</strong> Patron of Church leaders seeking wisdom</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Catherine de Ricci</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Catherine de Ricci, mystic and witness of the Passion of Christ, 
                    intercede for us who seek to deepen our prayer life and draw closer to Jesus.
                  </p>
                  <p className="mb-4">
                    You who experienced the sufferings of Christ in your weekly ecstasies and 
                    who counseled popes and saints, help us to open our hearts to the mysteries 
                    of God's love.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace to 
                    participate more deeply in the Passion of Christ and to grow in mystical 
                    prayer. Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Religious Sisters</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Catherine de Ricci, who served as perpetual prioress and spiritual 
                    guide, intercede for all religious sisters and nuns.
                  </p>
                  <p>
                    Help them to balance contemplative prayer with active service, to lead 
                    with wisdom and charity, and to grow in union with Christ. Through Christ 
                    our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Those in Pain</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Catherine, who experienced the Passion of Christ in your own body, 
                    intercede for all those who are suffering from illness, pain, or hardship.
                  </p>
                  <p>
                    Help them to unite their sufferings with those of Christ, to find meaning 
                    in their pain, and to grow closer to God through their trials. Through 
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
            <Link href="/saints/st-philip-neri" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Philip Neri
                </h3>
                <p className="text-gray-700 text-sm">
                  Saint to whom Catherine appeared miraculously in Rome.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-dominic" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Dominic
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Dominican order to which Catherine belonged.
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
                  Another great Dominican mystic and Doctor of the Church.
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