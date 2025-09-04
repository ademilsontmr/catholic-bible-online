import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Anne (Euphemianus) - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Anne (Euphemianus), the widow who disguised herself as a man to enter monastic life.',
  keywords: [
    'st anne euphemianus',
    'saint anne euphemianus',
    'st anne biography',
    'anne feast day',
    'anne patron saint',
    'euphemianus',
    'constantinople saint',
    'monastic disguise',
    'mount olympus',
    'widow saint'
  ],
  openGraph: {
    title: 'St. Anne (Euphemianus) - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Anne (Euphemianus), the widow who disguised herself as a man to enter monastic life.',
    url: 'https://catholicbibleonline.com/saints/st-anne-euphemianus',
  },
  twitter: {
    title: 'St. Anne (Euphemianus) - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Anne (Euphemianus), the widow who disguised herself as a man to enter monastic life.',
  }
}

export default function StAnneEuphemianusPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🕊️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Anne (Euphemianus)
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Widow Who Disguised Herself as a Man to Enter Monastic Life
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Anne (Euphemianus)</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">Unknown</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🕊️</div>
              <div className="text-sm text-gray-600">Monastic</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Anne (Euphemianus)</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Anne, also called Euphemianus, was born in Constantinople to a good family. From her earliest years, she demonstrated a deep piety and a desire to dedicate her life to God. However, in the society of her time, women were often forced into arranged marriages, and Anne was no exception. Despite her desire for a religious life, she was compelled to marry against her will.
              </p>
              
              <p className="mb-6">
                After her marriage, Anne lived as a dutiful wife, but her heart remained focused on God and spiritual matters. When her husband died, leaving her a widow, Anne saw this as an opportunity to finally pursue her true vocation. However, in the Byzantine society of the time, women had limited options for entering religious life, especially if they were widows from good families.
              </p>
              
              <p className="mb-6">
                Determined to live a monastic life, Anne made a bold and unconventional decision. She assumed a male disguise and took the name Euphemianus. This disguise allowed her to enter an abbey on Mount Olympus, where she could live the monastic life she had always desired. Her decision to disguise herself as a man was not motivated by deception but by her deep longing to serve God in a monastic community.
              </p>
              
              <p className="mb-6">
                As Euphemianus, Anne lived a life of great holiness and devotion. She embraced the monastic disciplines with fervor, spending long hours in prayer, fasting, and manual labor. Her humility, obedience, and spiritual wisdom quickly became evident to her fellow monks, who held her in high esteem for her exemplary life.
              </p>
              
              <p className="mb-6">
                Such was her reputation for holiness that the community asked her to become their abbess. However, Anne, in her humility and desire to remain hidden, declined this honor. She preferred to remain in an obscure monastery, living a quiet life of prayer and service, content to be unknown to the world but known to God.
              </p>
              
              <p>
                St. Anne's life demonstrates the extraordinary lengths to which some women went to pursue their religious vocation in times when such opportunities were severely limited. Her story is a testament to the power of faith and the determination to follow God's call, even when it requires great sacrifice and unconventional means.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Anne (Euphemianus): Model of Determination and Humility</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Religious Vocation</h3>
              <p className="mb-6">
                St. Anne's extraordinary story serves as a powerful witness to the strength of religious vocation and the lengths to which some are called to go to fulfill God's plan for their lives. Her determination to enter monastic life, despite the social barriers of her time, demonstrates that God's call cannot be easily thwarted by human limitations or societal constraints.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Humility and Hiddenness</h3>
              <p className="mb-6">
                Despite being offered the position of abbess due to her holiness, St. Anne chose to remain in obscurity. This choice reflects her deep humility and her understanding that true holiness often flourishes best in hidden places. Her example teaches us that seeking recognition and honor is not the path to spiritual growth.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Champion of Women's Religious Aspirations</h3>
              <p className="mb-6">
                St. Anne's story highlights the historical challenges faced by women who desired to enter religious life. Her unconventional solution, while not to be imitated literally, serves as a reminder of the importance of creating opportunities for women to pursue their religious vocations freely and openly.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Example of Perseverance in Faith</h3>
              <p>
                Throughout her life, from her forced marriage to her widowhood and her eventual entry into monastic life, St. Anne maintained her faith and her desire to serve God. Her perseverance in the face of adversity serves as an inspiration to all who face obstacles in pursuing their spiritual goals.
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
              <p className="text-gray-600">Feast of St. Anne (Euphemianus)</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The exact feast day of St. Anne (Euphemianus) is not recorded in the traditional liturgical calendar, but her memory is honored by those who know her story. Her life serves as a reminder of the many hidden saints whose stories may not be widely known but whose holiness has touched the lives of those around them.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. Anne lived during the Byzantine period, a time when women's religious vocations were often constrained by social and cultural limitations. Her story reflects the broader historical context of women's struggle to pursue religious life in societies that did not always provide adequate opportunities for their spiritual aspirations.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                While there may not be a specific feast day, St. Anne's story can inspire us to pray for the courage to follow God's call, even when it requires great sacrifice. Her example encourages us to seek humility and to value hidden service over public recognition.
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
                  <li>• <strong>Widows:</strong> Those who have lost their spouses</li>
                  <li>• <strong>Women Religious:</strong> Those seeking religious vocations</li>
                  <li>• <strong>Hidden Saints:</strong> Those who serve in obscurity</li>
                  <li>• <strong>Constantinople:</strong> Her birthplace</li>
                  <li>• <strong>Mount Olympus:</strong> Where she lived as a monk</li>
                  <li>• <strong>Forced Marriages:</strong> Those in unwanted unions</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Religious Vocations:</strong> Those discerning God's call</li>
                  <li>• <strong>Humility:</strong> Seeking hidden service</li>
                  <li>• <strong>Perseverance:</strong> Overcoming obstacles to faith</li>
                  <li>• <strong>Women's Rights:</strong> Freedom to choose religious life</li>
                  <li>• <strong>Hidden Holiness:</strong> Serving God in obscurity</li>
                  <li>• <strong>Determination:</strong> Following God's call despite barriers</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Anne (Euphemianus)</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Anne, who showed such determination in pursuing your religious vocation, help us to persevere in following God's call for our lives, even when faced with obstacles and challenges.
                  </p>
                  <p className="mb-4">
                    Teach us to value humility and hidden service over recognition and honor. May we, like you, find joy in serving God in obscurity and in putting others before ourselves.
                  </p>
                  <p>
                    Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Religious Vocations</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Anne, who went to extraordinary lengths to enter religious life, intercede for all those discerning a religious vocation.
                  </p>
                  <p>
                    Help them to hear God's call clearly and to have the courage to follow it, even when it requires great sacrifice. May they find the support and opportunities they need to pursue their calling. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Humility</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Anne, who chose obscurity over recognition, help us to cultivate true humility in our lives.
                  </p>
                  <p>
                    Teach us to find joy in hidden service and to value God's approval over human recognition. May we serve others with love and humility, following your example. Amen."
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
            <Link href="/saints/st-marina" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Monastic Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Marina
                </h3>
                <p className="text-gray-700 text-sm">
                  Another saint who disguised herself as a man to enter monastic life.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-pelagia" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Penitent Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Pelagia
                </h3>
                <p className="text-gray-700 text-sm">
                  Penitent who also disguised herself as a monk to live in solitude.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-theodora" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Monastic Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Theodora
                </h3>
                <p className="text-gray-700 text-sm">
                  Byzantine saint who also lived as a monk in disguise.
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