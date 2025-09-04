import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
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
    'catholic saints',
    'may 24 feast day',
    'biblical saints',
    'empty tomb',
    'easter morning'
  ],
  openGraph: {
    title: 'St. Joanna - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Joanna, one of the women who discovered the empty tomb of Jesus.',
    url: 'https://catholicbibleonline.com/saints/st-joanna',
  },
  twitter: {
    title: 'St. Joanna - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Joanna, one of the women who discovered the empty tomb of Jesus.',
  }
}

export default function StJoannaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📜</div>
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
              <div className="text-2xl font-bold text-gray-800">📜</div>
              <div className="text-sm text-gray-600">Biblical</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Joanna</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Joanna was the wife of Chuza, who served as the steward of King Herod Antipas, 
                the tetrarch of Galilee. Her position in the royal household gave her access to 
                resources and influence that she would later use to support the ministry of Jesus 
                and His Apostles.
              </p>
              
              <p className="mb-6">
                Joanna's name is derived from the Hebrew name "Yohannah," which means "God is gracious." 
                This name would prove prophetic, as she would become a recipient of God's grace 
                through her encounter with Jesus Christ and her subsequent discipleship.
              </p>
              
              <p className="mb-6">
                As a woman of means and social standing, Joanna was able to provide material support 
                for Jesus and His Apostles during their ministry. Along with other faithful women 
                like Mary Magdalene and Susanna, she helped to ensure that the basic needs of Jesus 
                and His followers were met, allowing them to focus on their mission of preaching 
                the Gospel.
              </p>
              
              <p className="mb-6">
                Joanna's support of Jesus' ministry was particularly significant because it came 
                from within the household of Herod Antipas, the same ruler who would later play 
                a role in the trial and execution of Jesus. Her willingness to support Jesus, 
                despite the potential risks to her social position and safety, demonstrates her 
                courage and commitment to the truth.
              </p>
              
              <p className="mb-6">
                Joanna's most significant role in the Gospel story came on the morning of the 
                Resurrection. She was one of the three women who went to the tomb of Jesus to 
                anoint His body with spices, only to discover that the tomb was empty. This 
                discovery would change the course of human history and become the foundation 
                of the Christian faith.
              </p>
              
              <p>
                The Gospel of Luke specifically mentions Joanna as one of the women who discovered 
                the empty tomb and who later reported this miraculous event to the Apostles. 
                Her witness to the Resurrection makes her one of the first evangelists of the 
                Christian faith, as she helped to spread the news of Jesus' victory over death.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Joanna: Witness of the Resurrection</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">First Witness of the Resurrection</h3>
              <p className="mb-6">
                St. Joanna's role as one of the first witnesses of the Resurrection gives her 
                a unique place in salvation history. Her discovery of the empty tomb and her 
                subsequent testimony to the Apostles makes her one of the foundational witnesses 
                of the Christian faith. Her courage in going to the tomb despite the danger 
                and her faithfulness in reporting what she had seen demonstrate the qualities 
                of a true disciple.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Generous Discipleship</h3>
              <p className="mb-6">
                Joanna's willingness to use her resources and social position to support Jesus' 
                ministry serves as a powerful example of what it means to be a generous disciple. 
                She did not let her wealth or status prevent her from serving Christ, but rather 
                used these gifts to further His mission. Her example reminds us that all our 
                resources, whether material, social, or spiritual, should be used in service 
                to God and His Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courage in the Face of Opposition</h3>
              <p className="mb-6">
                Joanna's support of Jesus came from within the household of Herod Antipas, 
                making her actions particularly courageous. She risked her social position, 
                her husband's career, and possibly her safety to support a man who was viewed 
                as a threat by the ruling authorities. Her courage in the face of potential 
                opposition serves as an example for all Christians who must choose between 
                worldly security and faithfulness to Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patroness of Women's Ministry</h3>
              <p>
                St. Joanna has become a powerful patroness for women in ministry and for all 
                those who serve the Church through their resources and talents. Her example 
                shows that women have always played crucial roles in the life of the Church, 
                from providing material support to being witnesses of the most important events 
                in salvation history.
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
              <p className="text-gray-600">Memorial of St. Joanna, Disciple of Jesus</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Joanna is celebrated on May 24th. This memorial honors her 
                role as a faithful disciple of Jesus, her generous support of His ministry, 
                and her witness to the Resurrection.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Biblical Significance</h3>
              <p className="mb-6">
                St. Joanna's feast day is particularly significant because of her unique role 
                in the Gospel story. As one of the first witnesses of the Resurrection, she 
                holds a special place in the history of salvation and in the foundation of 
                the Christian faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On her feast day, Catholics pray for her intercession, especially for those 
                called to support the Church through their resources, for women in ministry, 
                for those seeking to be faithful witnesses to Christ, and for the grace to 
                use our gifts generously in service to God.
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
                  <li>• <strong>Women in Ministry:</strong> Patroness of women serving the Church</li>
                  <li>• <strong>Generous Discipleship:</strong> Helper for those supporting ministry</li>
                  <li>• <strong>Witnesses of Faith:</strong> Patroness of those testifying to Christ</li>
                  <li>• <strong>Resurrection Witnesses:</strong> Helper for those proclaiming the Gospel</li>
                  <li>• <strong>Women of Means:</strong> Patroness of those using resources for God</li>
                  <li>• <strong>Biblical Women:</strong> Model for women in Scripture</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Generous Giving:</strong> Helper for those supporting Church ministries</li>
                  <li>• <strong>Courage in Witness:</strong> Patroness of those facing opposition</li>
                  <li>• <strong>Faithful Discipleship:</strong> Helper for those following Christ</li>
                  <li>• <strong>Women's Leadership:</strong> Patroness of women in Church leadership</li>
                  <li>• <strong>Resurrection Faith:</strong> Helper for those proclaiming the Gospel</li>
                  <li>• <strong>Material Support:</strong> Patroness of those funding ministry</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Joanna</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Joanna, faithful disciple of Jesus and witness of the Resurrection, 
                    who generously supported the ministry of Christ with your resources and 
                    courage, pray for us who call upon your intercession.
                  </p>
                  <p className="mb-4">
                    Help us to be generous in our support of the Church and its ministries, 
                    to be courageous witnesses to the truth of the Resurrection, and to use 
                    our gifts and resources in service to God and His people.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace to 
                    be faithful disciples of Christ and generous stewards of His gifts. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Generous Discipleship</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Joanna, who used your resources and social position to support 
                    Jesus' ministry, intercede for all those who are called to support the 
                    Church through their material gifts and talents.
                  </p>
                  <p>
                    Help them to be generous and faithful stewards of God's gifts, using 
                    their resources to further the mission of Christ in the world. Through 
                    Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Women in Ministry</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Joanna, patroness of women in ministry, intercede for all women 
                    who serve the Church in various capacities. Help them to be faithful 
                    witnesses to Christ and to use their gifts generously in His service.
                  </p>
                  <p>
                    May they, like you, find courage and strength in their discipleship 
                    and be blessed in their ministry. Through Christ our Lord. Amen."
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
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Mary Magdalene
                </h3>
                <p className="text-gray-700 text-sm">
                  First witness to the Resurrection and model of God's mercy.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-martha" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Martha
                </h3>
                <p className="text-gray-700 text-sm">
                  Sister of Mary and Lazarus, known for her hospitality and service to Jesus.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joseph" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Marian Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joseph
                </h3>
                <p className="text-gray-700 text-sm">
                  The foster father of Jesus and husband of Mary, patron of fathers and workers.
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