import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Patricia - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Patricia, noble virgin who fled Constantinople to escape marriage and dedicated her life to God in Rome.',
  keywords: [
    'st patricia',
    'saint patricia',
    'st patricia biography',
    'st patricia feast day',
    'st patricia patron saint',
    'catholic saints',
    'naples patron saint'
  ],
  openGraph: {
    title: 'St. Patricia - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Patricia, noble virgin who fled Constantinople to escape marriage and dedicated her life to God in Rome.',
    url: 'https://catholicbibleonline.com/saints/st-patricia',
  },
  twitter: {
    title: 'St. Patricia - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Patricia, noble virgin who fled Constantinople to escape marriage and dedicated her life to God in Rome.',
  }
}

export default function StPatriciaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Patricia
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Noble Virgin and Patroness of Naples
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Patricia</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 25</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Virgin & Noble</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Patricia</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Patricia's story is one of remarkable courage, unwavering faith, and complete 
                dedication to God. Her life exemplifies the perfect balance between noble birth 
                and spiritual humility, demonstrating that true nobility is found not in earthly 
                status but in service to God and others. Her journey from the heights of Byzantine 
                society to a life of consecrated virginity serves as an inspiring example of how 
                to follow God's call regardless of the sacrifices it may require.
              </p>
              
              <p className="mb-6">
                According to legend, St. Patricia was born into a noble and perhaps royal family 
                in Constantinople, the magnificent capital of the Byzantine Empire. Growing up in 
                the splendor of the imperial court, she would have been surrounded by wealth, 
                power, and the highest levels of society. As a member of the nobility, she would 
                have been expected to make a prestigious marriage that would strengthen political 
                alliances and maintain the family's social standing. However, from an early age, 
                Patricia felt a different calling in her heart - a call to dedicate her life 
                entirely to God.
              </p>
              
              <p className="mb-6">
                When the time came for her to be married, Patricia faced an impossible choice: 
                to submit to the expectations of her family and society, or to follow the 
                deeper calling of her heart. Rather than compromise her spiritual vocation, 
                she made the courageous decision to flee Constantinople and seek refuge in 
                Italy, where she could live as a virgin consecrated to God. This act of 
                defiance against social expectations required immense courage, as it meant 
                leaving behind not only her family and homeland but also the security and 
                comfort of her noble status.
              </p>
              
              <p className="mb-6">
                In Rome, the heart of Christianity, Patricia found the spiritual home she 
                had been seeking. She was able to live as a consecrated virgin, dedicating 
                her life to prayer, penance, and service to God. This period in Rome would 
                have been marked by deep spiritual growth and a profound sense of peace, 
                as she was finally able to live according to her true calling. However, 
                her journey was not yet complete, as God had further plans for her life 
                and her wealth.
              </p>
              
              <p className="mb-6">
                After some time in Rome, Patricia felt called to return to Constantinople, 
                not to resume her former life of privilege, but to use her wealth for the 
                benefit of others. This return to her homeland was marked by a complete 
                transformation in how she used her resources. Rather than hoarding her 
                wealth or using it for personal comfort, she distributed it generously to 
                the poor and needy. This act of charity demonstrated her understanding 
                that true wealth is found not in material possessions but in the love 
                and service we show to others.
              </p>
              
              <p>
                Having fulfilled her mission of charity in Constantinople, Patricia 
                returned to Italy, this time settling in Naples. It was there that 
                she spent her final days, living a life of prayer and devotion until 
                her death. Her connection to Naples became so strong that she is now 
                considered one of the city's patron saints, alongside the famous 
                St. Januarius. Like St. Januarius, St. Patricia is associated with 
                a miraculous vial of blood that is said to liquefy periodically, 
                serving as a sign of her continued intercession and the power of 
                her prayers. This miraculous phenomenon, occurring thirteen hundred 
                years after her death, continues to draw pilgrims and inspire faith 
                in the power of God's saints.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Patricia: Model of Courageous Consecration</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Courageous Consecration</h3>
              <p className="mb-6">
                St. Patricia's most profound legacy is her example of courageous consecration 
                to God. Her willingness to flee from a life of privilege and comfort in order 
                to follow her spiritual calling demonstrates the depth of her faith and the 
                strength of her character. In a world where social status and family expectations 
                often dictate life choices, Patricia's story reminds us that God's call is 
                more important than any earthly consideration. Her example continues to inspire 
                those who feel called to religious life or other forms of consecration, showing 
                that true happiness is found in following God's will, even when it requires 
                leaving behind comfort and security.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Generous Charity</h3>
              <p className="mb-6">
                St. Patricia's return to Constantinople to distribute her wealth to the poor 
                serves as a powerful example of how to use material resources for spiritual 
                purposes. Her actions demonstrate that wealth is not meant to be hoarded but 
                to be shared with those in need. This aspect of her legacy is particularly 
                relevant in our own time, when the gap between rich and poor continues to 
                widen. Patricia shows us that true nobility is found not in accumulating 
                wealth but in using it to serve others. Her example encourages all Christians 
                to examine how they use their resources and to consider how they might better 
                serve the poor and needy in their communities.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Pilgrimage</h3>
              <p className="mb-6">
                St. Patricia's journey from Constantinople to Rome and then to Naples 
                represents a spiritual pilgrimage that many Christians can relate to. 
                Her story shows that the spiritual life is often a journey that requires 
                leaving behind familiar places and comfortable situations in order to 
                grow closer to God. This aspect of her legacy reminds us that spiritual 
                growth often requires change and that we must be willing to step out 
                in faith when God calls us to new places or new ways of living. Her 
                example encourages all believers to be open to the ways in which God 
                might be calling them to change and grow.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Miraculous Intercession</h3>
              <p>
                The miraculous liquefaction of St. Patricia's blood, similar to that 
                of St. Januarius, serves as a powerful testament to her continued 
                intercession and the reality of the communion of saints. This miraculous 
                phenomenon, occurring thirteen hundred years after her death, demonstrates 
                that the saints are not merely historical figures but active participants 
                in the life of the Church. The fact that this miracle continues to occur 
                in Naples, where she spent her final days, shows the special connection 
                between the saint and the city she came to love. This aspect of her 
                legacy reminds all Christians of the power of prayer and the reality 
                that the saints in heaven continue to intercede for us on earth.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">August 25</div>
              <p className="text-gray-600">Feast of St. Patricia, Virgin and Patroness of Naples</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Patricia's feast day is celebrated on August 25th, commemorating her 
                life of consecrated virginity and her special connection to the city of 
                Naples. This feast is particularly significant in Naples, where she is 
                honored as one of the city's patron saints alongside St. Januarius. 
                Churches throughout Naples may hold special Masses and prayer services 
                on this day, and many devotees may visit her relics or the sites associated 
                with her life in the city. The feast serves as a reminder of the importance 
                of following God's call, even when it requires sacrifice and change.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Patricia's feast day, many communities, especially in Naples, 
                may choose to reflect on the themes of consecrated virginity, courageous 
                faith, and generous charity. Some may hold special prayer services for 
                those considering religious life or other forms of consecration, asking 
                for St. Patricia's intercession for guidance and courage. The day also 
                serves as an opportunity to pray for the poor and needy, remembering 
                St. Patricia's example of using wealth to serve others. Many may also 
                pray for the city of Naples and its people, asking for St. Patricia's 
                continued protection and intercession.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                Devotees pray to St. Patricia for courage in following God's call, 
                for guidance in making difficult life decisions, for strength to 
                resist social pressures that conflict with spiritual values, and 
                for generosity in using their resources to help others. Her intercession 
                is particularly sought by those considering religious life or consecrated 
                virginity, by those who need courage to make significant life changes, 
                by those who want to use their wealth more generously for charity, 
                and by all who need strength to follow God's will despite opposition 
                or difficulty. Her example reminds us that true happiness is found 
                in following God's call and that material wealth should be used to 
                serve others rather than to accumulate personal comfort.
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
                  <li>• <strong>Naples:</strong> As one of the city's patron saints</li>
                  <li>• <strong>Italy:</strong> For her connection to Rome and Naples</li>
                  <li>• <strong>Consecrated Virgins:</strong> For her life of virginity dedicated to God</li>
                  <li>• <strong>Wealth Distribution:</strong> For her generous charity to the poor</li>
                  <li>• <strong>Noble Families:</strong> For her example of spiritual nobility</li>
                  <li>• <strong>Spiritual Pilgrims:</strong> For her journey of faith</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Religious Vocations:</strong> For those considering consecrated life</li>
                  <li>• <strong>Courageous Decisions:</strong> For strength to follow God's call</li>
                  <li>• <strong>Charitable Giving:</strong> For generosity with material resources</li>
                  <li>• <strong>Family Opposition:</strong> For those facing resistance to their faith</li>
                  <li>• <strong>Spiritual Growth:</strong> For openness to God's guidance</li>
                  <li>• <strong>Miraculous Intercession:</strong> For special graces and favors</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Patricia</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed St. Patricia, courageous virgin and patroness of Naples, 
                    you who left behind the comforts of noble life to follow God's call, 
                    intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    Help us to follow your example of courageous faith and complete dedication 
                    to God. Grant us the strength to make difficult decisions when God calls 
                    us to change, the wisdom to use our resources generously for the benefit 
                    of others, and the courage to resist social pressures that conflict with 
                    our spiritual values.
                  </p>
                  <p className="mb-4">
                    Inspire us with your example of spiritual pilgrimage, showing us that 
                    true happiness is found in following God's will, even when it requires 
                    leaving behind comfort and security. Help us to understand that our 
                    wealth and resources are gifts from God meant to be shared with those 
                    in need.
                  </p>
                  <p>
                    Through your powerful intercession, may we find the courage to follow 
                    God's call in our own lives, the generosity to use our resources for 
                    charity, and the faith to trust in God's guidance even when the path 
                    ahead is uncertain. St. Patricia, pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Patricia, courageous virgin and patroness of Naples, pray for us!"
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
            <Link href="/saints/st-januarius" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Januarius
                </h3>
                <p className="text-gray-700 text-sm">
                  Bishop and martyr, patron of Naples, known for the miraculous liquefaction of his blood.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-cecilia" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Cecilia
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr who consecrated her virginity to God and converted her husband.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-agnes" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Agnes
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr who chose death over marriage, patron of young girls and chastity.
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