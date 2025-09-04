import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Adele - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Adele, widow and abbess who founded a convent and was a disciple of St. Boniface.',
  keywords: [
    'st adele',
    'saint adele',
    'st adele biography',
    'st adele feast day',
    'st adele patron saint',
    'widow saint',
    'abbess saint',
    'german saint',
    'st boniface disciple',
    'catholic saints',
    'december 24 feast day'
  ],
  openGraph: {
    title: 'St. Adele - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Adele, widow and abbess who founded a convent and was a disciple of St. Boniface.',
    url: 'https://catholicbibleonline.com/saints/st-adele',
  },
  twitter: {
    title: 'St. Adele - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Adele, widow and abbess who founded a convent and was a disciple of St. Boniface.',
  }
}

export default function StAdelePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👸</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Adele
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Widow, Abbess, Disciple of St. Boniface
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Adele</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">December 24</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👸</div>
              <div className="text-sm text-gray-600">Widow</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Adele</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Adele was a daughter of King Dagobert II of Germany, born into royal lineage during a time 
                when Christianity was spreading throughout the Germanic territories. Her noble birth provided her 
                with education and resources, but it was her deep faith and commitment to God that would define 
                her life's purpose.
              </p>
              
              <p className="mb-6">
                After the death of her husband, St. Adele made the courageous decision to dedicate her life 
                entirely to God. She carefully made provisions for her son, ensuring his future was secure, 
                as he would later become the father of St. Gregory of Utrecht, continuing the family's legacy 
                of holiness and service to the Church.
              </p>
              
              <p className="mb-6">
                Following her husband's death, St. Adele became a nun, embracing the religious life with 
                complete devotion. Her royal background and spiritual maturity made her a natural leader, 
                and she was called to found a convent at Palatiolum near Trier, an important center of 
                Christianity in the region.
              </p>
              
              <p className="mb-6">
                As the first Abbess of the convent she founded, St. Adele ruled with holiness, prudence, 
                and compassion. Her leadership was marked by wisdom and gentleness, qualities that endeared 
                her to her sisters and made the convent a flourishing center of prayer and good works.
              </p>
              
              <p className="mb-6">
                St. Adele seems to have been among the disciples of St. Boniface, the Apostle of Germany, 
                who was instrumental in the Christianization of the Germanic peoples. A letter in his 
                correspondence is addressed to her, indicating the close spiritual relationship they shared 
                and the important role she played in the missionary work of the Church in Germany.
              </p>
              
              <p>
                After a devout life filled with good works and communion with God, St. Adele passed on to 
                her heavenly reward in 730. Her life serves as a testament to the power of faith to transform 
                personal tragedy into spiritual opportunity, and her example continues to inspire widows and 
                religious women throughout the centuries.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Adele: Model of Widowhood and Religious Leadership</h2>
          
          <div className="bg-purple-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Exemplar of Christian Widowhood</h3>
              <p className="mb-6">
                St. Adele's legacy is marked by her extraordinary example of how to transform personal loss 
                into spiritual opportunity. Her decision to become a nun after her husband's death shows that 
                widowhood, while difficult, can be a time of deepening faith and service to God. She demonstrates 
                that even in grief, one can find new purpose and meaning through religious vocation.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Foundress and Abbess</h3>
              <p className="mb-6">
                As the foundress of a convent at Palatiolum near Trier, St. Adele contributed significantly 
                to the religious life of the Church in Germany. Her leadership as abbess, characterized by 
                holiness, prudence, and compassion, created a model for religious communities that would 
                influence monastic life for generations to come.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Disciple of St. Boniface</h3>
              <p className="mb-6">
                St. Adele's connection to St. Boniface, the Apostle of Germany, places her at the heart of 
                the missionary work that brought Christianity to the Germanic peoples. Her correspondence 
                with this great saint indicates her important role in the evangelization of Germany and her 
                commitment to the spread of the Gospel.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Royal Sanctity</h3>
              <p>
                As a daughter of King Dagobert II of Germany, St. Adele shows that holiness is not limited 
                to any particular social class. Her royal background, combined with her deep faith and 
                religious vocation, demonstrates that true nobility comes from serving God and others with 
                love and humility.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">December 24</div>
              <p className="text-gray-600">Feast of St. Adele</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Adele is celebrated on December 24th, the day before Christmas. This timing is particularly 
                meaningful as it reminds us of the hope and new life that can come from difficult circumstances, 
                just as the birth of Christ brought light to a world in darkness.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for widows, for those who have lost loved ones, for religious 
                communities, and for the Church in Germany. It's also a day to reflect on how God can bring 
                new purpose and meaning out of personal tragedy.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for widows and widowers, for religious communities, 
                for the Church in Germany, and to ask for St. Adele's intercession in finding new purpose 
                after loss.
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
                  <li>• <strong>Widows:</strong> Patron of those who have lost their spouses</li>
                  <li>• <strong>Religious Communities:</strong> Patron of nuns and abbesses</li>
                  <li>• <strong>Germany:</strong> Patron of the Church in Germany</li>
                  <li>• <strong>Convents:</strong> Patron of women's religious houses</li>
                  <li>• <strong>Royal Women:</strong> Patron of noble women in religious life</li>
                  <li>• <strong>Spiritual Direction:</strong> Patron of spiritual guidance</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Grief and Loss:</strong> Helper for those mourning loved ones</li>
                  <li>• <strong>Religious Vocations:</strong> Patron of those discerning religious life</li>
                  <li>• <strong>Missionary Work:</strong> Helper for evangelization efforts</li>
                  <li>• <strong>Monastic Life:</strong> Patron of contemplative communities</li>
                  <li>• <strong>Family Sanctity:</strong> Helper for holy families</li>
                  <li>• <strong>Christian Leadership:</strong> Patron of women leaders in the Church</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Adele</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Adele, you who transformed your widowhood into a life of service to God, help me 
                    to find new purpose and meaning in times of loss and difficulty.
                  </p>
                  <p>
                    You who founded a convent and led with holiness and compassion, teach me to serve others 
                    with love and wisdom. Help me to be open to God's call in my life, whatever form it may take. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-pink-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Widows</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Adele, patron of widows, pray for all those who have lost their spouses.
                  </p>
                  <p>
                    Help them to find comfort in God's love and to discover new ways to serve Him and others. 
                    May your intercession bring them peace and hope for the future. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Adele, pray for us!"
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
            <Link href="/saints/st-boniface" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Missionary Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Boniface
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle of Germany, missionary bishop, spiritual mentor of St. Adele.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-gregory-of-utrecht" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Bishop Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Gregory of Utrecht
                </h3>
                <p className="text-gray-700 text-sm">
                  Grandson of St. Adele, bishop and missionary in the Netherlands.
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