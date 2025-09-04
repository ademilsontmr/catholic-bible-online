import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Lydia Purpuraria - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Lydia Purpuraria, the first European convert to Christianity and Paul\'s first convert at Philippi.',
  keywords: [
    'st lydia',
    'saint lydia',
    'st lydia purpuraria',
    'st lydia biography',
    'st lydia feast day',
    'st lydia patron saint',
    'catholic saints',
    'august 3 feast day',
    'biblical saints',
    'philippi',
    'purple seller',
    'first european convert'
  ],
  openGraph: {
    title: 'St. Lydia Purpuraria - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Lydia Purpuraria, the first European convert to Christianity.',
    url: 'https://catholicbibleonline.com/saints/st-lydia',
  },
  twitter: {
    title: 'St. Lydia Purpuraria - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Lydia Purpuraria, the first European convert to Christianity.',
  }
}

export default function StLydiaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📜</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Lydia Purpuraria
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            First European Convert, Purple Seller, Hostess of St. Paul
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Lydia Purpuraria</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 3</div>
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
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Lydia Purpuraria</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Lydia Purpuraria was born in the 1st century in Thyatira (modern-day Ak-Hissar), 
                a town in Asia Minor that was famous for its dye works. Her name "Purpuraria" means 
                "purple seller," indicating her profession as a merchant of purple cloth, which was 
                a luxury item in the ancient world and often associated with royalty and wealth. 
                This suggests that Lydia was a successful businesswoman who had achieved a certain 
                level of prosperity in her trade.
              </p>
              
              <p className="mb-6">
                Lydia's life took a dramatic turn when she encountered the Apostle Paul during his 
                second missionary journey. According to the Acts of the Apostles, Paul and his 
                companions, including Silas and Timothy, arrived in Philippi, a Roman colony in 
                Macedonia. On the Sabbath, they went outside the city gate to the river, where they 
                expected to find a place of prayer, as there was no synagogue in Philippi.
              </p>
              
              <p className="mb-6">
                It was there, by the river, that Paul met a group of women who had gathered for 
                prayer, and among them was Lydia. The Acts of the Apostles describes her as "a 
                worshiper of God," which indicates that she was a Gentile who had been attracted 
                to Judaism and was following Jewish religious practices without being fully converted. 
                This was a common phenomenon in the ancient world, where many Gentiles were drawn 
                to the monotheism and moral teachings of Judaism.
              </p>
              
              <p className="mb-6">
                As Paul spoke to the women gathered by the river, the Lord opened Lydia's heart to 
                respond to Paul's message. This moment marked a significant turning point in the 
                history of Christianity, as Lydia became the first European convert to Christianity. 
                Her conversion was not just a personal spiritual transformation but also a historic 
                event that marked the beginning of the Christian faith's spread into Europe.
              </p>
              
              <p className="mb-6">
                After her conversion, Lydia was baptized along with her entire household, which 
                likely included her family members, servants, and possibly other dependents. This 
                baptism of her household suggests that Lydia was the head of her household, which 
                was unusual for a woman in the ancient world and indicates her independence and 
                authority as a businesswoman.
              </p>
              
              <p className="mb-6">
                Following her baptism, Lydia demonstrated her generosity and hospitality by inviting 
                Paul and his companions to stay at her home. She said to them, "If you consider me 
                a believer in the Lord, come and stay at my house." This invitation was significant 
                not only because it provided Paul with a place to stay but also because it established 
                Lydia's home as the first Christian household in Europe and likely the first meeting 
                place for the Christian community in Philippi.
              </p>
              
              <p>
                Lydia's home became a center for the early Christian community in Philippi. When 
                Paul and Silas were later imprisoned and then released, they returned to Lydia's 
                house to meet with the believers there before leaving the city. This indicates that 
                her home had become the established meeting place for the Christian community, making 
                her not just the first European convert but also the hostess of the first Christian 
                church in Europe.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Lydia Purpuraria: First European Convert</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Pioneer of European Christianity</h3>
              <p className="mb-6">
                St. Lydia's greatest legacy is her role as the first European convert to Christianity. 
                Her conversion marked a pivotal moment in the history of the Church, as it represented 
                the beginning of Christianity's spread into Europe. This was a significant step in 
                the fulfillment of Christ's command to make disciples of all nations, and Lydia's 
                conversion opened the door for the Gospel to reach the European continent and eventually 
                the entire Western world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Hospitality and Generosity</h3>
              <p className="mb-6">
                Lydia's immediate response to her conversion was to offer hospitality to Paul and his 
                companions. Her invitation to stay at her home demonstrates her generosity and her 
                understanding that faith in Christ should be expressed through acts of love and service 
                to others. Her home became not just a place of shelter for the apostles but also the 
                first Christian church in Europe, showing how ordinary homes can become centers of 
                Christian community and worship.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Example of Independent Women in the Early Church</h3>
              <p className="mb-6">
                Lydia's story challenges traditional assumptions about women's roles in the ancient 
                world and in the early Church. As a successful businesswoman who was the head of her 
                household, she represents the important role that women played in the spread of 
                Christianity. Her independence and leadership demonstrate that the Gospel message 
                was inclusive and empowering for women, offering them dignity and purpose beyond 
                traditional societal roles.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to God's Grace</h3>
              <p>
                Lydia's conversion story emphasizes that salvation is a gift of God's grace. The 
                Acts of the Apostles specifically states that "the Lord opened her heart to respond 
                to Paul's message," highlighting that her conversion was not the result of human 
                effort or persuasion but of divine intervention. Her story serves as a reminder 
                that God calls people from all walks of life and that His grace is available to 
                everyone, regardless of their background or circumstances.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">August 3</div>
              <p className="text-gray-600">Feast of St. Lydia Purpuraria, First European Convert</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Lydia Purpuraria is celebrated on August 3rd, commemorating her 
                life as the first European convert to Christianity and her role in establishing 
                the Christian community in Philippi. This feast honors her pioneering role in the 
                spread of Christianity to Europe and her example of hospitality, generosity, and 
                faith. It is a day to remember how God uses ordinary people to accomplish extraordinary 
                things in the history of salvation.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. Lydia lived during the 1st century, a time when the Christian Church was in its 
                infancy and the Gospel was beginning to spread beyond the Jewish community to the 
                Gentile world. Her conversion took place during Paul's second missionary journey, 
                which was a crucial period in the expansion of Christianity. The fact that she was 
                a Gentile convert shows how the Church was beginning to fulfill its universal mission 
                and how the Gospel was breaking down barriers between different peoples and cultures.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On her feast day, Catholics pray for her intercession, especially for those who are 
                seeking to grow in hospitality and generosity, for businesspeople and merchants, for 
                those who are hosting Christian communities in their homes, for women in leadership 
                roles in the Church, and for the grace to be open to God's call in our daily lives. 
                Her example inspires us to be generous with our resources, to offer hospitality to 
                others, and to be open to the working of God's grace in our hearts.
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
                  <li>• <strong>Dyers:</strong> Patron saint of dyers and textile workers</li>
                  <li>• <strong>Merchants:</strong> Patron of merchants and businesspeople</li>
                  <li>• <strong>Philippi:</strong> Patron saint of Philippi</li>
                  <li>• <strong>Thyatira:</strong> Patron of Thyatira and textile industry</li>
                  <li>• <strong>Hospitality:</strong> Patron of hospitality and hostesses</li>
                  <li>• <strong>Women in Business:</strong> Patron of women in business</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Conversion:</strong> Helper for those seeking conversion</li>
                  <li>• <strong>Generosity:</strong> Patron of generosity and giving</li>
                  <li>• <strong>Home Churches:</strong> Helper for home-based Christian communities</li>
                  <li>• <strong>Women's Leadership:</strong> Patron of women in church leadership</li>
                  <li>• <strong>European Christianity:</strong> Helper for the Church in Europe</li>
                  <li>• <strong>Open Hearts:</strong> Patron of those with open hearts to God</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Lydia Purpuraria</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Lydia Purpuraria, first European convert to Christianity and hostess 
                    of St. Paul, pray for us who call upon your intercession.
                  </p>
                  <p className="mb-4">
                    Help us to have the same open heart that you showed when the Lord opened your 
                    heart to respond to Paul's message. Teach us to be generous with our resources 
                    and to offer hospitality to others as you did.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace to be 
                    open to God's call in our daily lives and to serve others with generosity 
                    and love. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Hospitality</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Lydia, who opened your home to St. Paul and made it the first Christian 
                    church in Europe, intercede for all those who offer hospitality and host 
                    Christian communities in their homes.
                  </p>
                  <p>
                    Help them to be generous with their resources, to create welcoming spaces 
                    for others, and to serve the Church through their hospitality. Through 
                    Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Businesspeople</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Lydia, successful merchant and businesswoman who used your resources 
                    to serve the Church, intercede for all those who work in business and commerce.
                  </p>
                  <p>
                    Help them to conduct their business with integrity, to be generous with their 
                    resources, and to use their success to serve God and others. Through Christ 
                    our Lord. Amen."
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
            <Link href="/saints/st-paul" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Paul
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle who converted Lydia and stayed in her home.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-stephen" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Stephen
                </h3>
                <p className="text-gray-700 text-sm">
                  First Christian martyr and deacon.
                </p>
              </div>
            </Link>

                         <Link href="/saints/st-john-the-baptist" className="group block">
               <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                 <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                   Biblical Saints
                 </div>
                 <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                   St. John the Baptist
                 </h3>
                 <p className="text-gray-700 text-sm">
                   Forerunner of Christ who prepared the way for the Messiah.
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