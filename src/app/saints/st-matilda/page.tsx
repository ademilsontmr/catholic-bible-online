import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Matilda - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Matilda, Queen of Germany known for her piety, charity, and founding of convents and monasteries.',
  keywords: [
    'st matilda',
    'saint matilda',
    'st matilda biography',
    'st matilda feast day',
    'st matilda patron saint',
    'queen saint',
    'german queen',
    'henry the fowler',
    'otto the great',
    'holy roman empire',
    'catholic saints',
    'march 14 feast day'
  ],
  openGraph: {
    title: 'St. Matilda - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Matilda, Queen of Germany known for her piety, charity, and founding of convents and monasteries.',
    url: 'https://catholicbibleonline.com/saints/st-matilda',
  },
  twitter: {
    title: 'St. Matilda - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Matilda, Queen of Germany known for her piety, charity, and founding of convents and monasteries.',
  }
}

export default function StMatildaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Matilda
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Queen of Germany, Mother of Emperors, Patron of Charity
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Matilda</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">March 14</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Queen</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Matilda</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Matilda was the daughter of Count Dietrich of Westphalia and Reinhild of Denmark, born into 
                noble lineage during the early medieval period. She was also known as Mechtildis and Maud, 
                reflecting the various linguistic traditions of her time. From an early age, she was raised 
                by her grandmother, the Abbess of Eufurt convent, who instilled in her a deep love for God 
                and the religious life.
              </p>
              
              <p className="mb-6">
                In the year 909, Matilda married Henry the Fowler, son of Duke Otto of Saxony, beginning a 
                royal marriage that would shape the course of German history. Henry succeeded his father as 
                Duke in 912 and in 919 succeeded King Conrad I to the German throne, making Matilda the 
                Queen of Germany. Throughout her time as queen, she was noted for her exceptional piety and 
                extensive charitable works, earning the love and respect of her subjects.
              </p>
              
              <p className="mb-6">
                Matilda was widowed in the year 936, and she actively supported her son Henry's claim to his 
                father's throne. When her son Otto (later known as Otto the Great) was elected king, she 
                persuaded him to name Henry Duke of Bavaria after he had led an unsuccessful revolt, 
                demonstrating her wisdom and diplomatic skills in managing family conflicts.
              </p>
              
              <p className="mb-6">
                Despite her noble intentions, Matilda was severely criticized by both Otto and Henry for what 
                they considered her extravagant charities. Her generous giving to the poor and religious 
                institutions was seen by her sons as excessive, leading to family tensions. In response, 
                she resigned her inheritance to her sons and retired to her country home, showing her 
                humility and willingness to sacrifice for peace.
              </p>
              
              <p className="mb-6">
                Matilda was eventually called back to the court through the intercession of Otto's wife, 
                Edith, who recognized her mother-in-law's wisdom and value. When Henry again revolted, Otto 
                put down the insurrection in 941 with great cruelty. Matilda censored Henry when he began 
                another revolt against Otto in 953 and for his ruthlessness in suppressing a revolt by his 
                own subjects. At that time, she prophesized his imminent death, and when he did die in 955, 
                her prediction was fulfilled.
              </p>
              
              <p>
                After Henry's death, Matilda devoted herself to building three convents and a monastery, 
                using her resources to serve God and the Church. She was left in charge of the kingdom when 
                Otto went to Rome in 962 to be crowned Emperor, an event often regarded as the beginning of 
                the Holy Roman Empire. In her declining years, she spent most of her time at the convent at 
                Nordhausen she had built, living a life of prayer and service. She died at the monastery at 
                Quedlinburg on March 14 and was buried there with Henry. Her feast day is celebrated on 
                March 14th.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Matilda: Queen of Charity and Wisdom</h2>
          
          <div className="bg-purple-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Exemplar of Royal Charity</h3>
              <p className="mb-6">
                St. Matilda's legacy is marked by her extraordinary example of how to use royal power and 
                wealth for the service of God and the poor. Her charitable works were so extensive that they 
                were considered extravagant by her own sons, demonstrating her complete commitment to 
                Christian charity and her willingness to prioritize the needs of others over family wealth.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Mother of Emperors</h3>
              <p className="mb-6">
                As the mother of Otto the Great, who became the first Holy Roman Emperor, Matilda played a 
                crucial role in the foundation of the Holy Roman Empire. Her wisdom and diplomatic skills 
                helped manage the complex family dynamics and political tensions that arose during the 
                transition of power, showing that true leadership involves both strength and compassion.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Foundress of Religious Houses</h3>
              <p className="mb-6">
                Matilda's devotion to God led her to found three convents and a monastery, contributing 
                significantly to the religious life of medieval Germany. Her commitment to building these 
                institutions shows her understanding that true wealth lies in serving God and supporting 
                religious communities that pray for the world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Humility and Sacrifice</h3>
              <p>
                When criticized for her charity, Matilda chose to resign her inheritance and retire rather 
                than compromise her principles. This act of humility and sacrifice demonstrates that true 
                nobility comes from serving God and others, even when it means giving up personal comfort 
                and wealth. Her example continues to inspire those in positions of power and wealth to use 
                their resources for the greater good.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">March 14</div>
              <p className="text-gray-600">Feast of St. Matilda</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Matilda is celebrated on March 14th. This feast day honors her life of royal charity, 
                her wisdom in managing family and political affairs, and her dedication to founding religious 
                communities that continue to serve the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for those in positions of power and wealth, for families 
                dealing with conflicts, for religious communities, and for the Church in Germany. It's also 
                a day to reflect on how to use our resources and influence for the service of God and others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for political leaders, for families in conflict, 
                for religious communities, for the Church in Germany, and to ask for St. Matilda's 
                intercession in using our resources wisely and charitably.
              </p>
            </div>
          </div>
        </section>

        {/* Patronage Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🛡️ Patronage</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Primary Patronages</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Queens:</strong> Patron of royal women and queens</li>
                  <li>• <strong>Charity:</strong> Patron of charitable works and giving</li>
                  <li>• <strong>Germany:</strong> Patron of the Church in Germany</li>
                  <li>• <strong>Religious Communities:</strong> Patron of convents and monasteries</li>
                  <li>• <strong>Family Reconciliation:</strong> Patron of family peace</li>
                  <li>• <strong>Widows:</strong> Patron of widowed queens and noblewomen</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Political Leaders:</strong> Helper for those in government</li>
                  <li>• <strong>Wealthy Families:</strong> Patron of using wealth for good</li>
                  <li>• <strong>Family Conflicts:</strong> Helper for family reconciliation</li>
                  <li>• <strong>Monastic Life:</strong> Patron of religious communities</li>
                  <li>• <strong>Holy Roman Empire:</strong> Patron of European unity</li>
                  <li>• <strong>Christian Leadership:</strong> Patron of wise governance</li>
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
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Matilda</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Matilda, you who used your royal position and wealth for the service of God and 
                    the poor, help me to use whatever resources and influence I have for the greater good.
                  </p>
                  <p>
                    You who showed wisdom in managing family conflicts and political affairs, teach me to 
                    seek peace and reconciliation in my relationships. Help me to be generous in charity 
                    and humble in service. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-pink-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Family Peace</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Matilda, patron of family reconciliation, pray for families experiencing conflicts 
                    and divisions.
                  </p>
                  <p>
                    Help them to find wisdom and patience in resolving their differences, and may your 
                    intercession bring peace and unity to all families. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Matilda, pray for us!"
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
            <Link href="/saints/st-king-louis-ix" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  King Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Louis IX
                </h3>
                <p className="text-gray-700 text-sm">
                  King of France, model of Christian kingship, led crusades, founded Sorbonne.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-adele" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Widow Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Adele
                </h3>
                <p className="text-gray-700 text-sm">
                  Widow and abbess, founded convent near Trier, disciple of St. Boniface.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-rita-of-cascia" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Widow Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Rita of Cascia
                </h3>
                <p className="text-gray-700 text-sm">
                  Widow and nun, patron of impossible causes and difficult marriages.
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