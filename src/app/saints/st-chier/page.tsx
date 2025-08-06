import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Chier - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Chier, Irish virgin and disciple of St. Fintan Munnu Kiara who lived near Nenagh, Tipperary.',
  keywords: [
    'st chier',
    'saint chier',
    'st chier biography',
    'st chier feast day',
    'st chier patron saint',
    'irish saint',
    'virgin saint',
    'st fintan munnu kiara',
    'nenagh tipperary',
    'irish virgin saint',
    'catholic saints',
    'ireland saints'
  ],
  openGraph: {
    title: 'St. Chier - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Chier, Irish virgin and disciple of St. Fintan Munnu Kiara who lived near Nenagh, Tipperary.',
    url: 'https://catholicbibleonline.com/saints/st-chier',
  },
  twitter: {
    title: 'St. Chier - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Chier, Irish virgin and disciple of St. Fintan Munnu Kiara who lived near Nenagh, Tipperary.',
  }
}

export default function StChierPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">☘️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Chier
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Irish Virgin, Disciple of St. Fintan Munnu Kiara, Patron of Tipperary
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Chier</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">Unknown</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">☘️</div>
              <div className="text-sm text-gray-600">Virgin</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Chier</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Chier was an Irish virgin and a disciple of St. Fintan Munnu Kiara, 
                who is also listed as Chier in some sources. She lived near Nenagh, in 
                Tipperary, Ireland, during a period when the Christian faith was taking 
                root in the Emerald Isle. Her life represents the early flowering of 
                Christianity in Ireland and the important role that women played in 
                spreading and preserving the faith.
              </p>
              
              <p className="mb-6">
                As a disciple of St. Fintan Munnu Kiara, St. Chier was part of the 
                spiritual lineage that helped establish Christianity in Ireland. St. 
                Fintan was a prominent Irish saint who founded several monasteries and 
                was known for his strict ascetic practices and his commitment to the 
                monastic life. Under his guidance, St. Chier would have learned the 
                ways of prayer, penance, and Christian living that characterized the 
                early Irish Church.
              </p>
              
              <p className="mb-6">
                Her choice to live as a virgin dedicated to God was a significant 
                commitment in the early Christian community. This vow of chastity 
                represented a complete dedication to Christ and a rejection of worldly 
                concerns in favor of spiritual pursuits. Her virginity was not just a 
                physical state but a symbol of her total consecration to God and her 
                desire to live a life of prayer and service.
              </p>
              
              <p className="mb-6">
                Living near Nenagh in Tipperary, St. Chier would have been part of a 
                local Christian community that was growing and developing in the region. 
                Tipperary, with its rich agricultural land and strategic location, was 
                an important area for the spread of Christianity in Ireland. Her presence 
                there would have contributed to the Christianization of the local people 
                and the establishment of Christian practices in the area.
              </p>
              
              <p>
                Though little is known about the specific details of her life, St. 
                Chier's legacy lives on as an example of the many holy women who 
                contributed to the establishment of Christianity in Ireland. Her 
                dedication to virginity, her discipleship under a great saint, and 
                her life of prayer and service represent the ideals of early Irish 
                Christianity and continue to inspire those who seek to live a life 
                of holiness and dedication to God.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Chier: Irish Virgin and Disciple</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Irish Virginity</h3>
              <p className="mb-6">
                St. Chier's legacy is most profoundly marked by her commitment to 
                virginity as a way of life dedicated to God. In the early Irish Church, 
                virginity was highly valued as a sign of complete dedication to Christ 
                and as a rejection of worldly concerns. Her choice to live as a virgin 
                represents the ideal of total consecration to God that was central to 
                early Irish spirituality. This aspect of her legacy continues to inspire 
                those who are called to a life of celibacy and total dedication to God, 
                whether in religious life or in other forms of consecrated service.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Disciple of a Great Saint</h3>
              <p className="mb-6">
                As a disciple of St. Fintan Munnu Kiara, St. Chier represents the 
                importance of spiritual mentorship and the transmission of faith from 
                one generation to the next. Her relationship with St. Fintan shows 
                how the Christian faith was passed down through personal relationships 
                and spiritual guidance. This aspect of her legacy reminds us of the 
                importance of spiritual direction and the role that holy men and women 
                play in forming others in the faith. Her example continues to inspire 
                those who seek spiritual guidance and those who are called to guide 
                others in their spiritual journey.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Early Irish Christianity</h3>
              <p className="mb-6">
                St. Chier's life represents the early flowering of Christianity in 
                Ireland and the important role that women played in establishing and 
                preserving the faith. Her presence in Tipperary during this formative 
                period of Irish Christianity shows how the faith spread through the 
                dedication and witness of ordinary people who were committed to living 
                the Gospel. This aspect of her legacy continues to remind us of the 
                important role that lay people, especially women, have always played 
                in the life of the Church and in the spread of the Gospel.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Tipperary</h3>
              <p>
                As a saint associated with Tipperary, St. Chier serves as a patron 
                and intercessor for the people of that region. Her connection to 
                Nenagh and the surrounding area makes her a local saint who continues 
                to watch over and pray for the people of Tipperary. This aspect of 
                her legacy shows how saints can become protectors and intercessors 
                for specific places and communities, and how the holiness of one 
                person can benefit an entire region. Her patronage continues to 
                inspire devotion and prayer among the people of Tipperary and serves 
                as a reminder of the rich spiritual heritage of the region.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">Unknown</div>
              <p className="text-gray-600">Feast of St. Chier</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The exact feast day of St. Chier is not known, but she is remembered 
                and honored for her virginity, her discipleship under St. Fintan, and 
                her contribution to early Irish Christianity.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On days when St. Chier is remembered, many Catholics pray for the 
                people of Tipperary, for those called to virginity and consecrated 
                life, for spiritual mentorship, and for the preservation of Irish 
                Christian heritage. It's also a day to reflect on the importance 
                of spiritual discipleship and the role of women in the early Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                This is an excellent time to pray for the people of Tipperary and 
                Ireland, for those called to virginity and consecrated life, for 
                spiritual mentors and disciples, and to ask for St. Chier's 
                intercession in finding spiritual guidance and living a life of 
                total dedication to God.
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
                  <li>• <strong>Tipperary:</strong> Patron saint of Tipperary, Ireland</li>
                  <li>• <strong>Nenagh:</strong> Patron of the town of Nenagh</li>
                  <li>• <strong>Irish Virgins:</strong> Patron of Irish virgin saints</li>
                  <li>• <strong>Spiritual Discipleship:</strong> Patron of spiritual mentorship</li>
                  <li>• <strong>Consecrated Virginity:</strong> Patron of those called to virginity</li>
                  <li>• <strong>Irish Heritage:</strong> Patron of Irish Christian heritage</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Ireland:</strong> Helper for the people of Ireland</li>
                  <li>• <strong>Spiritual Guidance:</strong> Patron of those seeking spiritual direction</li>
                  <li>• <strong>Women's Ministry:</strong> Helper for women in the Church</li>
                  <li>• <strong>Monastic Life:</strong> Patron of monastic and religious vocations</li>
                  <li>• <strong>Irish Culture:</strong> Helper for preserving Irish traditions</li>
                  <li>• <strong>Early Christianity:</strong> Patron of early Christian communities</li>
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
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Chier</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Chier, you who lived as a virgin dedicated to God and were 
                    a disciple of St. Fintan, help me to be open to spiritual guidance 
                    and to live a life of total dedication to Christ.
                  </p>
                  <p>
                    You who lived near Nenagh in Tipperary, watch over the people of 
                    Ireland and help them to preserve their rich Christian heritage. 
                    Intercede for me in my spiritual journey. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Ireland</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Chier, patron of Tipperary and Ireland, pray for the people 
                    of your homeland and for the preservation of Irish Christian heritage.
                  </p>
                  <p>
                    Help us to remember and honor the many saints who have contributed 
                    to the faith in Ireland. May your example inspire us to be faithful 
                    disciples of Christ. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Chier, pray for us!"
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
            <Link href="/saints/st-fintan-munnu-kiara" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Irish Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Fintan Munnu Kiara
                </h3>
                <p className="text-gray-700 text-sm">
                  Irish saint and spiritual mentor of St. Chier.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-brigid" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Irish Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Brigid
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron saint of Ireland, founder of Kildare monastery.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-patrick" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Irish Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Patrick
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle of Ireland, patron saint of Ireland.
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