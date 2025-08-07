import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Isidore - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Isidore, the holy farmer from Madrid who worked miracles in the fields and is patron of farmers.',
  keywords: [
    'st isidore',
    'saint isidore',
    'st isidore farmer',
    'st isidore biography',
    'st isidore feast day',
    'st isidore patron saint',
    'catholic saints',
    'may 15 feast day',
    'medieval saints',
    'farmer saint',
    'madrid spain',
    'rural conference'
  ],
  openGraph: {
    title: 'St. Isidore - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Isidore, the holy farmer from Madrid.',
    url: 'https://catholicbibleonline.com/saints/st-isidore',
  },
  twitter: {
    title: 'St. Isidore - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Isidore, the holy farmer from Madrid.',
  }
}

export default function StIsidorePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔬</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Isidore
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            The Holy Farmer, Worker of Miracles, Patron of Farmers
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Isidore</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">May 15</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🔬</div>
              <div className="text-sm text-gray-600">Medieval</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Isidore</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Isidore was born at Madrid, Spain, in the latter half of the 12th century, 
                during a time when the Iberian Peninsula was still partially under Muslim rule 
                and the Christian kingdoms were engaged in the Reconquista. His birth into a 
                humble farming family would shape his entire life and ministry, as he would 
                become one of the most beloved saints of the working class.
              </p>
              
              <p className="mb-6">
                For the greater part of his life, Isidore was employed as a laborer on a farm 
                outside the city of Madrid. This was not an easy life - farming in medieval 
                Spain required backbreaking work from dawn to dusk, with little reward and 
                constant uncertainty about weather, crops, and survival. Yet Isidore approached 
                his work with a spirit of prayer and dedication that would make him famous 
                throughout the region.
              </p>
              
              <p className="mb-6">
                Many marvelous happenings accompanied his lifelong work in the fields and 
                continued long after his holy death. These miracles were not grand spectacles 
                but practical demonstrations of God's care for the working poor. Stories 
                abound of Isidore's supernatural assistance in his daily labors, showing how 
                God honors those who work with integrity and faith.
              </p>
              
              <p className="mb-6">
                He was favored with celestial visions, experiencing direct encounters with 
                the divine while engaged in the most ordinary of tasks. These visions were 
                not given to make him famous or powerful, but to strengthen his faith and 
                encourage him in his daily struggles. They served as reminders that God is 
                present in every aspect of human life, even the most mundane.
              </p>
              
              <p className="mb-6">
                It is said that the angels sometimes helped him in his work in the fields, 
                a beautiful example of how heaven and earth can work together in harmony. 
                These angelic interventions were not meant to replace Isidore's own labor, 
                but to supplement it and show that God provides for those who trust in Him. 
                The angels' assistance was a sign of God's approval of honest work and His 
                care for those who labor with dignity.
              </p>
              
              <p>
                St. Isidore was canonized in 1622, recognizing his holiness and the power 
                of his intercession. His canonization was particularly significant because 
                it affirmed the sanctity of ordinary labor and showed that holiness is 
                achievable in the most common of circumstances. In 1947, he was proclaimed 
                the patron of the National Rural Conference in the United States, extending 
                his patronage to farmers and rural communities across the world.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Isidore: Saint of the Working Class</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Farmers and Rural Workers</h3>
              <p className="mb-6">
                St. Isidore's greatest legacy is his role as the patron saint of farmers 
                and all those who work the land. His life demonstrates that agricultural 
                work is not just a means of survival, but a sacred vocation that can lead 
                to holiness. His patronage extends beyond just farmers to include all rural 
                workers, agricultural communities, and those who depend on the land for 
                their livelihood. His example shows that God values and blesses honest 
                labor, regardless of how humble it may seem.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Humility and Hard Work</h3>
              <p className="mb-6">
                Isidore's life serves as a powerful example of how humility and hard work 
                can lead to sanctity. He never sought fame or recognition, but simply 
                worked faithfully at his assigned tasks, trusting in God's providence. 
                His approach to work - doing it well, doing it prayerfully, and doing it 
                for God's glory - provides a model for all workers, regardless of their 
                profession. His example teaches us that any work, when done with love and 
                dedication, can be a path to holiness.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to God's Care for the Poor</h3>
              <p className="mb-6">
                The miracles associated with Isidore's life demonstrate God's special care 
                for the poor and working class. His supernatural assistance in the fields 
                shows that God does not abandon those who work hard but struggle to make 
                ends meet. These miracles were practical and immediate - helping with 
                crops, providing for basic needs, and ensuring that honest work was 
                rewarded. His life is a testament to God's promise to provide for those 
                who trust in Him.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Example of Prayer in Daily Work</h3>
              <p className="mb-6">
                Isidore's ability to combine prayer with physical labor shows that 
                spirituality and work are not separate, but can be integrated into a 
                unified life of service to God. His practice of praying while working 
                demonstrates that every moment can be an opportunity for communion with 
                God. This integration of prayer and work provides a model for all 
                Christians who seek to live their faith in the midst of their daily 
                responsibilities.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Inspiration for Rural Communities</h3>
              <p>
                As patron of the National Rural Conference in the United States, Isidore 
                continues to inspire rural communities and agricultural workers around 
                the world. His legacy reminds us that rural life and farming are not 
                just economic activities, but ways of life that can be deeply spiritual 
                and meaningful. His example encourages rural communities to see their 
                work as a vocation and their way of life as a path to holiness.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">May 15</div>
              <p className="text-gray-600">Feast of St. Isidore, the Holy Farmer</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Isidore is celebrated on May 15th, commemorating his life 
                as a holy farmer who worked miracles in the fields and served God through 
                his daily labor. This feast honors his humility, his dedication to honest 
                work, and his example of how ordinary people can achieve extraordinary 
                holiness. It is a day to remember that God calls people from all walks 
                of life to sanctity and that honest work is a path to heaven.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. Isidore lived during the 12th century, a time when the Iberian Peninsula 
                was still partially under Muslim rule and the Christian kingdoms were 
                engaged in the Reconquista. In this context, his simple life as a farmer 
                took on special significance, as it demonstrated that holiness was not 
                limited to the clergy or nobility, but was accessible to ordinary working 
                people. His canonization in 1622 and his proclamation as patron of the 
                National Rural Conference in 1947 show his enduring relevance to rural 
                communities and agricultural workers.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On his feast day, Catholics pray for his intercession, especially for 
                farmers and agricultural workers, for those who work with their hands, 
                for rural communities and their needs, for those struggling with poverty 
                and hard work, for the success of crops and agricultural endeavors, and 
                for the grace to work with humility and dedication. His example inspires 
                us to see our daily work as a form of prayer and service to God.
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
                  <li>• <strong>Farmers:</strong> Patron saint of farmers and agricultural workers</li>
                  <li>• <strong>Rural Communities:</strong> Patron of rural areas and farming communities</li>
                  <li>• <strong>Manual Laborers:</strong> Patron of those who work with their hands</li>
                  <li>• <strong>Humility:</strong> Patron of those seeking to overcome pride</li>
                  <li>• <strong>Agricultural Success:</strong> Patron of crops and farming endeavors</li>
                  <li>• <strong>Working Class:</strong> Patron of laborers and workers</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Good Harvests:</strong> Helper for successful farming seasons</li>
                  <li>• <strong>Weather Protection:</strong> Patron of protection from natural disasters</li>
                  <li>• <strong>Rural Prosperity:</strong> Helper for rural community development</li>
                  <li>• <strong>Work Ethics:</strong> Patron of those seeking to work with integrity</li>
                  <li>• <strong>Poverty Relief:</strong> Helper for those struggling financially</li>
                  <li>• <strong>Agricultural Innovation:</strong> Patron of farming technology and methods</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Isidore</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "God, through the intercession of St. Isidore, the holy Farmer, grant 
                    that we may overcome all feelings of pride.
                  </p>
                  <p>
                    May we always serve You with that humility which pleases You, through 
                    his merits and example. Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Farmers</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Isidore, patron of farmers, intercede for all who work the land 
                    and depend on agriculture for their livelihood.
                  </p>
                  <p>
                    Help them to work with faith and dedication, to trust in God's providence, 
                    and to find holiness in their daily labor. Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Rural Communities</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Isidore, who worked miracles in the fields, intercede for rural 
                    communities and agricultural workers.
                  </p>
                  <p>
                    Help them to prosper, to be protected from natural disasters, and to 
                    find strength in their faith and community. Through Christ our Lord. Amen."
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
            <Link href="/saints/st-joseph" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joseph
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron of workers and protector of the Holy Family.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron of animals and lover of God's creation.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-benedict" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Benedict
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of Western monasticism and patron of Europe.
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