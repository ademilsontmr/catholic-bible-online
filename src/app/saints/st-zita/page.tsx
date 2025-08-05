import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Zita - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Zita, patroness of domestic workers and model of humble service.',
  keywords: [
    'st zita',
    'saint zita',
    'zita biography',
    'zita feast day',
    'zita patron saint',
    'domestic workers patron saint',
    'housekeepers patron saint',
    'servants patron saint',
    'lucca saint',
    'april 27 feast day'
  ],
  openGraph: {
    title: 'St. Zita - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Zita, patroness of domestic workers and model of humble service.',
    url: 'https://catholicbibleonline.com/saints/st-zita',
  },
  twitter: {
    title: 'St. Zita - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Zita, patroness of domestic workers and model of humble service.',
  }
}

export default function StZitaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🧹</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Zita
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patroness of Domestic Workers, Model of Humble Service
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Zita</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">April 27</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🧹</div>
              <div className="text-sm text-gray-600">Domestic Worker</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Zita</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Zita was born into a poor but holy Christian family. Her older sister became a Cistercian nun and her uncle Graziano was a hermit whom the local people regarded as a saint. Zita herself always tried to do God's will obediently whenever it was pointed out to her by her mother.
              </p>
              
              <p className="mb-6">
                At the age of twelve Zita became a housekeeper in the house of a rich weaver in Lucca, Italy, eight miles from her home at Monte Sagrati. As things turned out, she stayed with that family for the last forty-eight years of her life. She found time every day to attend Mass and to recite many prayers, as well as to carry out her household duties so perfectly that the other servants were jealous of her.
              </p>
              
              <p className="mb-6">
                Indeed, her work was part of her religion! She used to say: "a servant is not holy if she is not busy; lazy people of our position is fake holiness." At first, her employers were upset by her generous gifts of food to the poor, but in time, they were completely won over by her patience and goodness and she became a very close friend.
              </p>
              
              <p className="mb-6">
                St. Zita was given a free reign over her working schedule and busied herself with visits to the sick and those in prison. Word spread rapidly in Lucca of her good deeds and the heavenly visions that appeared to her. She was sought out by the important people, and at her death in 1278 the people acclaimed her as a saint.
              </p>
              
              <p>
                She is the patroness of domestic workers. Her feast day is April 27.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Zita: Sanctity in Ordinary Work</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Domestic Sanctity</h3>
              <p className="mb-6">
                St. Zita's legacy demonstrates that holiness can be achieved in the most ordinary of circumstances. Her life as a domestic worker shows that God calls people to sanctity in every walk of life, not just in religious vocations. She teaches us that our daily work, no matter how humble, can be a path to holiness when done with love and dedication to God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patroness of Domestic Workers</h3>
              <p className="mb-6">
                As the patroness of domestic workers, St. Zita continues to inspire millions of people who work in homes and service industries around the world. Her example reminds us that all honest work has dignity and value in God's eyes. She shows that service to others, even in the most menial tasks, can be a form of worship and a way to serve Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Balance of Work and Prayer</h3>
              <p className="mb-6">
                St. Zita's ability to balance her demanding work schedule with her spiritual life serves as a model for all Christians. She found time every day for Mass and prayer while still performing her duties perfectly. Her famous saying about busy servants being holy teaches us that idleness is not a virtue and that God calls us to be productive and diligent in our work.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Charity and Generosity</h3>
              <p>
                St. Zita's generosity to the poor, even when it initially upset her employers, demonstrates the importance of charity in the Christian life. Her patience and goodness eventually won over those around her, showing that living the Gospel authentically can convert hearts. Her ministry to the sick and imprisoned shows that love of neighbor extends beyond our immediate family and workplace.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">April 27</div>
              <p className="text-gray-600">Feast of St. Zita, Patroness of Domestic Workers</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Zita is celebrated on April 27th, commemorating her death and her lifelong dedication to serving God through her work as a domestic servant. This date falls during the Easter season, a fitting time to remember how ordinary work can be transformed by the light of Christ's resurrection.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Cultural Celebrations</h3>
              <p className="mb-6">
                In Lucca, Italy, where St. Zita lived and worked, her feast day is celebrated with special devotion. Domestic workers and service industry employees often pray for her intercession and seek her example in their daily work. The day is marked by prayers for all those who work in service to others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for domestic workers, for all those in service industries, and to ask for St. Zita's intercession in helping us to find holiness in our daily work. Many people also pray for the grace to balance work and prayer as she did.
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
                  <li>• <strong>Domestic Workers:</strong> Housekeepers and servants</li>
                  <li>• <strong>Housekeepers:</strong> Those who maintain homes</li>
                  <li>• <strong>Servants:</strong> All who work in service</li>
                  <li>• <strong>Maids:</strong> Domestic service workers</li>
                  <li>• <strong>Lucca:</strong> Her adopted city in Italy</li>
                  <li>• <strong>Working Women:</strong> Women in the workforce</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Humble Work:</strong> Finding dignity in simple tasks</li>
                  <li>• <strong>Work-Life Balance:</strong> Balancing work and prayer</li>
                  <li>• <strong>Charity:</strong> Serving the poor and needy</li>
                  <li>• <strong>Obedience:</strong> Following God's will in daily life</li>
                  <li>• <strong>Patience:</strong> Enduring difficulties with grace</li>
                  <li>• <strong>Service:</strong> Serving others with love</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Zita</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Zita, patroness of domestic workers, help us to find holiness in our daily work and to serve God through our service to others.
                  </p>
                  <p className="mb-4">
                    Teach us to balance our work with prayer and to perform all our duties with love and dedication. May we, like you, find time for God while serving others faithfully.
                  </p>
                  <p>
                    Help us to be generous to the poor and to see Christ in all those we serve. Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Domestic Workers</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Zita, who served faithfully as a domestic worker for forty-eight years, intercede for all those who work in homes and service industries.
                  </p>
                  <p>
                    Help them to find dignity and purpose in their work, and to serve with the same patience and goodness that characterized your life. May their work be a path to holiness. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Work-Life Balance</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Zita, who found time for Mass and prayer while performing your duties perfectly, help us to balance our work and spiritual life.
                  </p>
                  <p>
                    Teach us to make time for God in our busy schedules and to see our work as a form of worship. May we serve others with love while growing closer to Christ. Amen."
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
            <Link href="/saints/st-martha" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Service Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Martha
                </h3>
                <p className="text-gray-700 text-sm">
                  Biblical saint known for her service and hospitality to Jesus.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-therese-lisieux" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Little Way Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thérèse of Lisieux
                </h3>
                <p className="text-gray-700 text-sm">
                  Known for finding holiness in ordinary, everyday tasks.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joseph" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Worker Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joseph
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron of workers and model of humble, faithful service.
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