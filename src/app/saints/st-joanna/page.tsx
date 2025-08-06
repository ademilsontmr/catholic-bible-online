import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Joanna - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Joanna, wife of Chuza and one of the women who discovered the empty tomb of Jesus on Easter morning.',
  keywords: [
    'st joanna',
    'saint joanna',
    'st joanna biography',
    'st joanna feast day',
    'st joanna patron saint',
    'biblical saint',
    'easter women',
    'empty tomb',
    'chuza wife',
    'herod steward',
    'galilee women',
    'catholic saints',
    'may 24 feast day'
  ],
  openGraph: {
    title: 'St. Joanna - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Joanna, wife of Chuza and one of the women who discovered the empty tomb of Jesus on Easter morning.',
    url: 'https://catholicbibleonline.com/saints/st-joanna',
  },
  twitter: {
    title: 'St. Joanna - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Joanna, wife of Chuza and one of the women who discovered the empty tomb of Jesus on Easter morning.',
  }
}

export default function StJoannaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👸</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Joanna
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Wife of Chuza, Disciple of Jesus, Witness of the Resurrection
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Joanna</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">May 24</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👸</div>
              <div className="text-sm text-gray-600">Disciple</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Joanna</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Joanna was the wife of Chuza, steward of King Herod Antipas, tetrarch of 
                Galilee. Her position as the wife of a high-ranking official in Herod's court 
                gave her a privileged status in society, but it was her faith and devotion to 
                Jesus that would define her true legacy. Her connection to the royal court 
                placed her in a unique position to witness the political and religious tensions 
                of the time.
              </p>
              
              <p className="mb-6">
                Despite her high social standing, Joanna was drawn to the message of Jesus 
                Christ and became one of his devoted followers. She was one of the women who 
                helped provide for Jesus and the Apostles during their ministry, using her 
                resources to support the work of spreading the Gospel. This act of generosity 
                and service demonstrated her commitment to the Christian message and her 
                willingness to use her position and wealth for the good of others.
              </p>
              
              <p className="mb-6">
                Joanna's most significant role in the Gospel story came on the morning of 
                the first Easter. She was one of the three women who discovered the empty 
                tomb of Jesus, making her one of the first witnesses to the Resurrection. 
                This extraordinary privilege placed her at the very heart of the Christian 
                mystery and made her a key figure in the foundation of the Christian faith.
              </p>
              
              <p className="mb-6">
                The discovery of the empty tomb by Joanna and the other women marked the 
                beginning of the Christian era and the fulfillment of Jesus' promise of 
                resurrection. Her presence at this pivotal moment in salvation history 
                demonstrates the important role that women played in the early Church and 
                in the spread of the Gospel message.
              </p>
              
              <p>
                Joanna's story shows how God can work through people from all walks of life 
                and social positions. Her conversion from a life of privilege to one of 
                service and discipleship serves as an example of how the Gospel can transform 
                lives and call people to a higher purpose, regardless of their social status 
                or background.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Joanna: Witness of the Resurrection</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Generous Discipleship</h3>
              <p className="mb-6">
                St. Joanna's legacy is most profoundly marked by her generous support of 
                Jesus and his Apostles during their ministry. Her willingness to use her 
                resources and social position to support the work of the Gospel demonstrates 
                the true meaning of Christian discipleship. She shows us that following 
                Christ requires not just belief but active participation in his mission, 
                using whatever gifts and resources we have been given for the glory of God 
                and the service of others. Her example continues to inspire Christians to 
                be generous with their time, talents, and treasure in support of the Church's 
                mission.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness of the Resurrection</h3>
              <p className="mb-6">
                Joanna's role as one of the first witnesses to the empty tomb gives her a 
                unique place in salvation history. Her presence at the Resurrection makes 
                her a direct link to the most important event in Christian history and 
                demonstrates the trust that Jesus placed in women as witnesses to his 
                ministry and resurrection. This aspect of her legacy reminds us of the 
                important role that women have always played in the Church and continues 
                to inspire women to take an active role in the life of the Christian 
                community.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Bridge Between Social Classes</h3>
              <p className="mb-6">
                As the wife of a high-ranking official in Herod's court, Joanna represents 
                the ability of the Gospel to reach people from all social classes and 
                backgrounds. Her conversion and discipleship show that the message of 
                Christ is universal and can transform lives regardless of social status 
                or wealth. This aspect of her legacy continues to remind us that the 
                Church is called to be inclusive and welcoming to people from all walks 
                of life, and that true Christian community transcends social and economic 
                barriers.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Example of Courageous Faith</h3>
              <p>
                Joanna's decision to follow Jesus despite her husband's position in Herod's 
                court required great courage and faith. Her willingness to risk her social 
                standing and potentially her safety to support Jesus demonstrates the depth 
                of her commitment to the Gospel. This aspect of her legacy continues to 
                inspire Christians to be courageous in their faith, even when it requires 
                sacrifice or goes against social expectations. Her story reminds us that 
                true discipleship often requires us to step out of our comfort zones and 
                to be willing to make sacrifices for the sake of the Gospel.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">May 24</div>
              <p className="text-gray-600">Feast of St. Joanna</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Joanna is celebrated on May 24th. This feast day honors her generous 
                discipleship, her witness to the Resurrection, and her courageous faith 
                in following Jesus.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for women in the Church, for generous 
                discipleship, for courage in following Christ, and for a deeper appreciation 
                of the role of women in salvation history. It's also a day to reflect on 
                the importance of using our resources and gifts for the service of God 
                and others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for women in the Church, for 
                generous discipleship, for courage in following Christ, and to ask for 
                St. Joanna's intercession in finding ways to use our gifts and resources 
                for the glory of God.
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
                  <li>• <strong>Women in the Church:</strong> Patron of women's ministry and leadership</li>
                  <li>• <strong>Generous Discipleship:</strong> Patron of generous giving and service</li>
                  <li>• <strong>Witnesses of Faith:</strong> Patron of those who bear witness to Christ</li>
                  <li>• <strong>Social Justice:</strong> Patron of bridging social and economic divides</li>
                  <li>• <strong>Courageous Faith:</strong> Patron of those who take risks for the Gospel</li>
                  <li>• <strong>Easter Joy:</strong> Patron of celebrating the Resurrection</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Women's Ministry:</strong> Helper for women serving in the Church</li>
                  <li>• <strong>Generous Giving:</strong> Patron of those who give generously</li>
                  <li>• <strong>Social Outreach:</strong> Helper for bridging social divides</li>
                  <li>• <strong>Courage in Faith:</strong> Patron of those facing opposition</li>
                  <li>• <strong>Resurrection Faith:</strong> Helper for those seeking hope</li>
                  <li>• <strong>Biblical Women:</strong> Patron of women in Scripture</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Joanna</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Joanna, you who generously supported Jesus and his Apostles with 
                    your resources, help me to be generous with my gifts and talents in 
                    service to God and others.
                  </p>
                  <p>
                    You who witnessed the empty tomb on Easter morning, strengthen my faith 
                    in the Resurrection and help me to be a courageous witness to Christ 
                    in my daily life. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Women in the Church</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Joanna, patron of women in the Church, pray for all women who 
                    serve God and the Church in various ministries.
                  </p>
                  <p>
                    Help us to recognize and celebrate the important role that women have 
                    always played in the life of the Church. May your example inspire 
                    women to be courageous and generous disciples of Christ. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Joanna, pray for us!"
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
            <Link href="/saints/st-mary-magdalene" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Mary Magdalene
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle to the Apostles, first witness of the Resurrection.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-mary" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  Blessed Virgin Mary
                </h3>
                <p className="text-gray-700 text-sm">
                  Mother of God, Queen of Heaven, model of discipleship.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-martha" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Martha
                </h3>
                <p className="text-gray-700 text-sm">
                  Sister of Lazarus, model of hospitality and service.
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