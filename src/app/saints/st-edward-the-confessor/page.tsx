import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Edward the Confessor - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Edward the Confessor, last Anglo-Saxon king of England and patron of difficult marriages.',
  keywords: [
    'st edward the confessor',
    'saint edward',
    'anglo-saxon king',
    'st edward the confessor biography',
    'st edward the confessor feast day',
    'st edward the confessor patron saint',
    'westminster abbey',
    'english saints',
    'catholic saints',
    'october 13 feast day'
  ],
  openGraph: {
    title: 'St. Edward the Confessor - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Edward the Confessor, last Anglo-Saxon king of England and patron of difficult marriages.',
    url: 'https://catholicbibleonline.com/saints/st-edward-the-confessor',
  },
  twitter: {
    title: 'St. Edward the Confessor - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Edward the Confessor, last Anglo-Saxon king of England and patron of difficult marriages.',
  }
}

export default function StEdwardTheConfessorPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Edward the Confessor
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Last Anglo-Saxon King of England, Patron of Difficult Marriages
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Edward the Confessor</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 13</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">King</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Edward the Confessor</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Edward the Confessor was the son of King Ethelred III and his Norman wife, Emma, daughter of Duke Richard I of Normandy. 
                He was born at Islip, England, and sent to Normandy with his mother in the year 1013 when the Danes under Sweyn and 
                his son Canute invaded England.
              </p>
              
              <p className="mb-6">
                Canute remained in England and the year after Ethelred's death in 1016, married Emma, who had returned to England, 
                and became King of England. Edward remained in Normandy, was brought up a Norman, and in 1042, on the death of his 
                half-brother, Hardicanute, son of Canute and Emma, and largely through the support of the powerful Earl Godwin, 
                he was acclaimed king of England.
              </p>
              
              <p className="mb-6">
                In 1044, he married Godwin's daughter Edith. His reign was a peaceful one characterized by his good rule and 
                remission of odious taxes, but also by the struggle, partly caused by his natural inclination to favor the Normans, 
                between Godwin and his Saxon supporters and the Norman barons, including Robert of Jumieges, whom Edward had brought 
                with him when he returned to England and whom he named Archbishop of Canterbury in 1051.
              </p>
              
              <p className="mb-6">
                In the same year, Edward banished Godwin, who took refuge in Flanders but returned the following year with a fleet 
                ready to lead a rebellion. Armed revolt was avoided when the two men met and settled their differences; among them 
                was the Archbishop of Canterbury, which was resolved when Edward replaced Robert with Stigand, and Robert returned to Normandy.
              </p>
              
              <p className="mb-6">
                Edward's difficulties continued after Godwin's death in 1053 with Godwin's two sons: Harold who had his eye on the throne 
                since Edward was childless, and Tostig, Earl of Northumbria. Tostig was driven from Northumbria by a revolt in 1065 
                and banished to Europe by Edward, who named Harold his successor.
              </p>
              
              <p>
                After this Edward became more interested in religious affairs and built St. Peter's Abbey at Westminster, the site 
                of the present Abbey, where he is buried. His piety gained him the surname "the Confessor". He died in London on January 5, 
                and he was canonized in 1161 by Pope Alexander III.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Edward the Confessor: King and Saint</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Last Anglo-Saxon King</h3>
              <p className="mb-6">
                St. Edward the Confessor holds a unique place in English history as the last Anglo-Saxon king before the Norman Conquest. 
                His reign marked the end of an era and the transition to Norman rule. Despite the political challenges he faced, 
                he is remembered for his peaceful rule and his efforts to govern justly.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Founder of Westminster Abbey</h3>
              <p className="mb-6">
                Perhaps Edward's most lasting legacy is the foundation of St. Peter's Abbey at Westminster, which would become 
                Westminster Abbey. This magnificent church, where he is buried, has served as the site of English coronations 
                and royal weddings for centuries, making it one of the most important religious and historical sites in England.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Piety and Justice</h3>
              <p className="mb-6">
                Edward's piety earned him the title "the Confessor," distinguishing him from other kings named Edward. His commitment 
                to religious life, his remission of unjust taxes, and his efforts to govern with justice and mercy set an example 
                for Christian rulers throughout history.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Difficult Marriages</h3>
              <p>
                Edward's childless marriage to Edith, which was marked by political tensions and family conflicts, has led to his 
                patronage of difficult marriages. His ability to navigate the complexities of his marital situation while maintaining 
                his faith and his duties as king serves as an inspiration for those facing marital challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">October 13</div>
              <p className="text-gray-600">Feast of St. Edward the Confessor</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Edward the Confessor is celebrated on October 13th. This feast day honors his reign as king, his piety, 
                and his foundation of Westminster Abbey, as well as his canonization by Pope Alexander III in 1161.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for rulers and leaders, for those in difficult marriages, for England and its people, 
                and for the Church in England. It's also a day to reflect on the balance between political power and religious devotion.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for political leaders, for those facing marital difficulties, 
                for England and its monarchy, and to ask for St. Edward's intercession in governing with justice and piety.
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
                  <li>• <strong>Difficult Marriages:</strong> Patron of troubled marriages</li>
                  <li>• <strong>England:</strong> Patron of England and its people</li>
                  <li>• <strong>Kings and Rulers:</strong> Patron of political leaders</li>
                  <li>• <strong>Westminster Abbey:</strong> Patron of the abbey he founded</li>
                  <li>• <strong>Anglo-Saxons:</strong> Patron of Anglo-Saxon heritage</li>
                  <li>• <strong>Childless Couples:</strong> Patron of those without children</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Political Harmony:</strong> Helper for resolving political conflicts</li>
                  <li>• <strong>Religious Leaders:</strong> Patron of bishops and clergy</li>
                  <li>• <strong>Justice in Government:</strong> Helper for just rule</li>
                  <li>• <strong>Family Conflicts:</strong> Patron of resolving family disputes</li>
                  <li>• <strong>Monastic Life:</strong> Helper for religious communities</li>
                  <li>• <strong>Peaceful Rule:</strong> Patron of peaceful governance</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Edward the Confessor</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Edward the Confessor, you who ruled England with justice and piety, help me to govern my life 
                    with wisdom and faith.
                  </p>
                  <p>
                    You who faced the challenges of a difficult marriage and political conflicts, help me to navigate 
                    the difficulties in my relationships with patience and grace. Guide me to seek peace and justice in all my dealings. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for England</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Edward the Confessor, patron of England, pray for the people of England and their leaders.
                  </p>
                  <p>
                    Help them to govern with justice and mercy, to seek peace and harmony, and to remember their 
                    Christian heritage. May your intercession bring blessing to the land you once ruled. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Edward the Confessor, pray for us!"
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
            <Link href="/saints/st-thomas-becket" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thomas Becket
                </h3>
                <p className="text-gray-700 text-sm">
                  Archbishop of Canterbury, martyred for defending Church rights against King Henry II.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-king-louis-ix" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  King Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Louis IX
                </h3>
                <p className="text-gray-700 text-sm">
                  King of France, known for his piety and justice, patron of France.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-charlemagne" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Emperor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Charlemagne
                </h3>
                <p className="text-gray-700 text-sm">
                  Holy Roman Emperor, patron of education and Christian Europe.
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