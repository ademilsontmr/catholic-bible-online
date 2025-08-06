import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Edmund the Martyr - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Edmund the Martyr, martyred king of the East Angles who was tortured and beheaded by Danish invaders.',
  keywords: [
    'st edmund martyr',
    'saint edmund martyr',
    'st edmund biography',
    'st edmund feast day',
    'st edmund patron saint',
    'catholic saints',
    'east anglia martyr saint'
  ],
  openGraph: {
    title: 'St. Edmund the Martyr - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Edmund the Martyr, martyred king of the East Angles who was tortured and beheaded by Danish invaders.',
    url: 'https://catholicbibleonline.com/saints/st-edmund-martyr',
  },
  twitter: {
    title: 'St. Edmund the Martyr - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Edmund the Martyr, martyred king of the East Angles who was tortured and beheaded by Danish invaders.',
  }
}

export default function StEdmundMartyrPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Edmund the Martyr
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Martyred King of the East Angles
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Edmund the Martyr</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">November 20</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">King & Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Edmund the Martyr</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Edmund the Martyr was a remarkable figure in early English history, whose life 
                exemplifies the perfect balance between temporal leadership and spiritual devotion. 
                His story is one of youthful wisdom, courageous leadership, and ultimate sacrifice 
                for the faith, demonstrating that true kingship is found in service to God and 
                one's people, even unto death.
              </p>
              
              <p className="mb-6">
                Born into a noble family, Edmund was elected king of the East Angles in 855 at the 
                extraordinarily young age of fourteen. This early elevation to kingship speaks not 
                only to his noble lineage but also to the recognition by his people of his inherent 
                qualities of leadership, wisdom, and virtue. Despite his youth, Edmund demonstrated 
                the maturity and judgment necessary to govern effectively, beginning his rule over 
                Suffolk, England, in the following year.
              </p>
              
              <p className="mb-6">
                Edmund's reign was marked by his commitment to justice, his care for his subjects, 
                and his deep Christian faith. As a Christian king, he understood that his authority 
                came from God and that he was called to rule with wisdom, mercy, and justice. His 
                governance reflected the Christian values of charity, humility, and service to others, 
                making him beloved by his people and respected by neighboring kingdoms.
              </p>
              
              <p className="mb-6">
                However, Edmund's peaceful reign was dramatically interrupted in 869 or 870 when 
                the Danes, fierce Viking invaders, launched a devastating invasion of his realm. 
                These pagan warriors, known for their brutality and destruction, swept through 
                East Anglia, leaving death and devastation in their wake. Edmund, as a Christian 
                king, faced an impossible choice: to submit to pagan overlords and renounce his 
                faith, or to resist and face certain death.
              </p>
              
              <p className="mb-6">
                Edmund chose to remain faithful to Christ and his people. He was captured at Hone, 
                in Suffolk, after leading his forces in a valiant but ultimately unsuccessful 
                defense of his kingdom. The Danish invaders, recognizing his importance as both 
                a political and spiritual leader, subjected him to extreme torture in an attempt 
                to break his spirit and force him to renounce his Christian faith.
              </p>
              
              <p>
                Despite the unimaginable suffering inflicted upon him, Edmund remained steadfast 
                in his faith. His final moments were marked by his unwavering devotion to Christ, 
                as he died calling upon the name of Jesus. His martyrdom was not merely a political 
                execution but a spiritual witness to the power of faith over the forces of evil. 
                Through his death, Edmund became a symbol of Christian resistance against pagan 
                oppression and a model of how to face persecution with courage and dignity. His 
                shrine at Bury St. Edmund's became a center of pilgrimage and devotion, giving 
                rise to the town that bears his name and continues to honor his memory to this day.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Edmund the Martyr: Model of Christian Kingship</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Christian Kingship</h3>
              <p className="mb-6">
                St. Edmund's most profound legacy is his example of what it means to be a Christian 
                ruler. His life demonstrates that true leadership is not about power for its own 
                sake, but about service to God and to one's people. Despite being elected king at 
                the young age of fourteen, Edmund ruled with wisdom, justice, and compassion that 
                belied his years. His governance was characterized by Christian values, showing 
                that temporal authority should always be exercised in accordance with divine law 
                and for the common good. His example continues to inspire leaders to understand 
                that their authority is a trust from God and should be used to promote justice, 
                peace, and the welfare of their people.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courage in the Face of Persecution</h3>
              <p className="mb-6">
                St. Edmund's martyrdom serves as a powerful example of how to face persecution 
                and suffering with courage and faith. When confronted with the choice between 
                renouncing his faith and facing torture and death, Edmund chose to remain faithful 
                to Christ. His willingness to endure extreme suffering rather than compromise his 
                beliefs demonstrates the strength that comes from a deep relationship with God. 
                His example is particularly relevant in our own time, when Christians around the 
                world continue to face persecution for their faith. Edmund shows us that faith 
                is worth any sacrifice and that God's grace is sufficient to sustain us even in 
                the darkest moments.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to the Faith</h3>
              <p className="mb-6">
                Through his martyrdom, St. Edmund became a powerful witness to the truth of the 
                Christian faith. His death at the hands of pagan invaders was not a defeat but 
                a victory, as it demonstrated the power of faith over the forces of evil. His 
                final words, calling upon the name of Jesus, serve as a testament to his unwavering 
                belief in Christ and his confidence in the promise of eternal life. This aspect 
                of his legacy reminds all Christians that our ultimate allegiance is to God, not 
                to any temporal power, and that our faith should be the guiding principle of our 
                lives, even when it requires the ultimate sacrifice.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Cultural and Historical Impact</h3>
              <p>
                St. Edmund's legacy extends far beyond his immediate martyrdom. The town of Bury 
                St. Edmund's, which grew up around his shrine, became one of the most important 
                centers of pilgrimage in medieval England. His cult spread throughout the country, 
                making him one of the most popular saints in English history. His story became 
                part of the national consciousness, serving as a symbol of English resistance 
                against foreign oppression and as a model of Christian virtue. His influence on 
                English culture and spirituality continues to this day, as he remains a beloved 
                figure in the religious and cultural heritage of the nation.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">November 20</div>
              <p className="text-gray-600">Feast of St. Edmund the Martyr, King of the East Angles</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Edmund's feast day is celebrated on November 20th, commemorating his martyrdom 
                and his witness to the Christian faith. This feast is particularly significant 
                in England, especially in East Anglia and at Bury St. Edmund's, where special 
                services are held to honor the saint who gave his name to the town. The feast 
                serves as a reminder of the cost of discipleship and the importance of remaining 
                faithful to Christ even in the face of persecution. Churches throughout England 
                may hold special Masses or prayer services on this day, particularly those with 
                historical connections to the saint or to the region he once ruled.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Edmund's feast day, many communities, especially in East Anglia, may 
                choose to reflect on the themes of Christian leadership, courage in the face 
                of persecution, and the importance of standing up for one's faith. Some may 
                hold special prayer services for leaders, asking for St. Edmund's intercession 
                for those in positions of authority. The day also serves as an opportunity to 
                pray for Christians who are currently being persecuted for their faith around 
                the world, remembering that St. Edmund's example of courage and fidelity is 
                as relevant today as it was in the ninth century.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                Devotees pray to St. Edmund for courage in the face of persecution, for wisdom 
                in leadership, for strength to remain faithful to Christ in difficult circumstances, 
                and for protection against oppression. His intercession is particularly sought 
                by those in positions of authority, by those who are facing persecution for 
                their faith, by leaders who need guidance in ruling justly, and by all who 
                need courage to stand up for their beliefs. His example reminds us that true 
                leadership is found in service to God and others, and that faith is worth any 
                sacrifice.
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
                  <li>• <strong>England:</strong> As a national saint and martyr</li>
                  <li>• <strong>Kings and Rulers:</strong> For his example of Christian kingship</li>
                  <li>• <strong>Torture Victims:</strong> For his suffering at the hands of the Danes</li>
                  <li>• <strong>East Anglia:</strong> As the region he ruled as king</li>
                  <li>• <strong>Bury St. Edmund's:</strong> For the town that grew around his shrine</li>
                  <li>• <strong>Martyrs:</strong> For his ultimate sacrifice for the faith</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Christian Leadership:</strong> For rulers who seek to govern justly</li>
                  <li>• <strong>Persecuted Christians:</strong> For those facing religious persecution</li>
                  <li>• <strong>Courage:</strong> For strength to stand up for faith</li>
                  <li>• <strong>Youthful Wisdom:</strong> For young people in positions of responsibility</li>
                  <li>• <strong>National Identity:</strong> For protection of Christian heritage</li>
                  <li>• <strong>Resistance to Oppression:</strong> For those fighting against tyranny</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Edmund the Martyr</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed St. Edmund, martyred king and model of Christian leadership, 
                    you who ruled with wisdom and justice at a young age, intercede for us 
                    before the throne of God.
                  </p>
                  <p className="mb-4">
                    Help us to follow your example of courageous faith and selfless service. 
                    Grant us the wisdom to lead with justice and compassion, the courage to 
                    stand up for our beliefs even in the face of persecution, and the strength 
                    to remain faithful to Christ in all circumstances.
                  </p>
                  <p className="mb-4">
                    Inspire us with your unwavering devotion to God and your people, showing 
                    us that true leadership is found in service and sacrifice. Help us to 
                    understand that our ultimate allegiance is to Christ, and that no temporal 
                    power should ever cause us to compromise our faith.
                  </p>
                  <p>
                    Through your powerful intercession, may we find the courage to face 
                    persecution with dignity and faith, to lead with wisdom and justice, 
                    and to remain steadfast in our commitment to Christ even unto death. 
                    St. Edmund the Martyr, pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Edmund the Martyr, model of Christian kingship and courage, pray for us!"
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
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Warrior Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joan of Arc
                </h3>
                <p className="text-gray-700 text-sm">
                  The Maid of Orléans who led French armies to victory and was martyred for her faith.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-george" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. George
                </h3>
                <p className="text-gray-700 text-sm">
                  Dragon slayer and martyr, patron of soldiers and England.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-thomas-becket" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thomas Becket
                </h3>
                <p className="text-gray-700 text-sm">
                  Archbishop of Canterbury who was martyred for defending the Church's rights.
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