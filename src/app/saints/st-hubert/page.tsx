import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Hubert - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Hubert, Bishop of Maastricht and patron saint of hunters, known for his vision of the crucifix between a stag\'s antlers.',
  keywords: [
    'st hubert',
    'saint hubert',
    'st hubert biography',
    'st hubert feast day',
    'st hubert patron saint',
    'catholic saints',
    'hunters patron saint',
    'maastricht bishop'
  ],
  openGraph: {
    title: 'St. Hubert - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Hubert, Bishop of Maastricht and patron saint of hunters, known for his vision of the crucifix between a stag\'s antlers.',
    url: 'https://catholicbibleonline.com/saints/st-hubert',
  },
  twitter: {
    title: 'St. Hubert - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Hubert, Bishop of Maastricht and patron saint of hunters, known for his vision of the crucifix between a stag\'s antlers.',
  }
}

export default function StHubertPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🦌</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Hubert
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Bishop of Maastricht and Patron Saint of Hunters
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Hubert</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">November 3</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🦌</div>
              <div className="text-sm text-gray-600">Hunter & Bishop</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Hubert</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Hubert was a remarkable figure in the early medieval Church, whose life exemplifies 
                the transformative power of divine grace and the call to conversion that can come in 
                the most unexpected moments. His story is one of dramatic conversion, from a worldly 
                courtier to a holy bishop, and his legacy continues to inspire hunters and Christians 
                alike with its message of God's ability to reach us even in the midst of our daily 
                activities and pursuits.
              </p>
              
              <p className="mb-6">
                Born into a noble family, Hubert began his life as a married courtier serving Pepin 
                of Heristal in France. This position placed him at the center of political and social 
                life, giving him access to power and influence in the Frankish court. Like many of 
                his class and time, Hubert was likely more focused on worldly pursuits than spiritual 
                matters, enjoying the privileges and pleasures that came with his position in society. 
                However, God had other plans for this noble courtier, plans that would transform his 
                life and make him one of the most beloved saints of the medieval period.
              </p>
              
              <p className="mb-6">
                The turning point in Hubert's life came during one of his hunting expeditions. While 
                pursuing game in the forest, he reportedly had a vision of a crucifix between the horns 
                of a magnificent stag. This miraculous vision, which has become one of the most famous 
                conversion stories in Christian history, was a direct call from God to change his life 
                and dedicate himself to the service of the Church. The vision of the crucifix between 
                the stag's antlers was not only a sign of God's presence but also a powerful symbol 
                of the intersection between the natural world and the divine, between human activity 
                and spiritual calling.
              </p>
              
              <p className="mb-6">
                Following this profound spiritual experience, Hubert's life took a dramatic turn. 
                After being widowed, he made the decision to leave behind his worldly life and enter 
                the monastic life at Stavelot Monastery in Belgium. This was a significant change 
                for a man who had been accustomed to the comforts and privileges of court life, 
                demonstrating the depth of his conversion and his commitment to following God's call. 
                At the monastery, Hubert would have been exposed to the spiritual disciplines of prayer, 
                study, and manual labor, all of which would have helped to form him for his future 
                ministry as a bishop.
              </p>
              
              <p className="mb-6">
                Hubert's spiritual formation was further enhanced when he became a disciple of St. Lambert, 
                the bishop of Maastricht. Under St. Lambert's guidance, Hubert was ordained to the 
                priesthood, beginning his formal ministry in the Church. The relationship between 
                Hubert and St. Lambert was significant, as it represented the passing on of spiritual 
                wisdom and ecclesiastical authority from one generation to the next. This mentorship 
                would have been crucial in preparing Hubert for the responsibilities that lay ahead.
              </p>
              
              <p className="mb-6">
                Around the year 705, Hubert succeeded St. Lambert as bishop of Maastricht, taking 
                on the pastoral care of the diocese. As bishop, Hubert was known for his dedication 
                to the spiritual welfare of his flock and for his efforts to promote the veneration 
                of his predecessor. One of his most significant acts as bishop was the erection of 
                a shrine for St. Lambert's relics at Liege, France. This shrine would become an 
                important center of pilgrimage and devotion, helping to spread the cult of St. Lambert 
                and strengthening the faith of the local Christian community.
              </p>
              
              <p>
                Throughout his episcopal ministry, Hubert was noted for his miracles and for converting 
                hundreds of people to the Christian faith. His reputation for holiness and his ability 
                to work wonders in God's name made him a beloved figure among the faithful. Hubert 
                died at Tervueren, near Brussels, Belgium, on May 30, leaving behind a legacy of 
                conversion, pastoral care, and miraculous intercession that would continue to inspire 
                Christians for centuries to come.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Hubert: Patron of Hunters and Model of Conversion</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">The Hunter's Conversion</h3>
              <p className="mb-6">
                St. Hubert's most enduring legacy is his dramatic conversion from a worldly courtier 
                to a holy bishop, symbolized by his vision of the crucifix between the stag's antlers. 
                This conversion story has captured the imagination of Christians for centuries, serving 
                as a powerful reminder that God can reach us at any moment, even in the midst of our 
                daily activities and pursuits. The fact that Hubert was engaged in hunting when he 
                received his divine call shows that God is not limited by our circumstances or our 
                state of life. His example continues to inspire all who feel called to a deeper 
                relationship with God, reminding us that conversion is always possible and that God's 
                grace can transform even the most worldly of hearts.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patronage of Hunters</h3>
              <p className="mb-6">
                St. Hubert's connection to hunting has made him the patron saint of hunters throughout 
                the Christian world. This patronage is particularly significant because it recognizes 
                that even activities like hunting can be sanctified and offered to God. Hubert's 
                example shows that our daily activities, no matter how ordinary they may seem, can 
                become opportunities for encountering God and growing in holiness. For hunters, St. 
                Hubert serves as a reminder to approach their sport with respect for God's creation 
                and with awareness of the spiritual dimension of all human activity. His patronage 
                also extends to forest workers and others who work in natural environments, reminding 
                them that their work can be a form of stewardship of God's creation.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Episcopal Leadership</h3>
              <p className="mb-6">
                As bishop of Maastricht, St. Hubert demonstrated the qualities of effective pastoral 
                leadership. His dedication to the spiritual welfare of his flock, his efforts to 
                promote the veneration of saints, and his reputation for working miracles all point 
                to a bishop who was deeply committed to serving God and his people. His establishment 
                of the shrine for St. Lambert's relics shows his understanding of the importance of 
                maintaining the spiritual heritage of the Church and of providing places where the 
                faithful can gather to pray and seek God's intercession. His example continues to 
                inspire bishops and other Church leaders to prioritize the spiritual needs of their 
                people and to work for the spread of the Gospel.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Miraculous Intercession</h3>
              <p>
                St. Hubert's reputation for working miracles during his lifetime has continued after 
                his death, making him a powerful intercessor for those who seek his help. His ability 
                to convert hundreds of people to the faith demonstrates the power of God's grace 
                working through a holy life. The fact that he continues to be invoked as a patron 
                saint shows that his intercession is still sought and valued by the faithful. His 
                example teaches us that holiness is not just about personal sanctification but about 
                being an instrument of God's grace for the benefit of others. His legacy reminds us 
                that the saints are not just historical figures but active participants in the life 
                of the Church, continuing to intercede for us and to inspire us to greater holiness.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">November 3</div>
              <p className="text-gray-600">Feast of St. Hubert, Patron of Hunters</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Hubert's feast day is celebrated on November 3rd, commemorating his death and 
                his witness to the Christian faith. This feast is particularly significant for hunters, 
                forest workers, and those who work in natural environments, as St. Hubert is their 
                patron saint. The feast serves as a reminder of the possibility of conversion and 
                the importance of recognizing God's presence in all aspects of our lives. Churches 
                throughout the world, especially in Belgium and other European countries with strong 
                hunting traditions, may hold special Masses or prayer services on this day.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Hubert's feast day, many communities, especially those with hunting traditions, 
                may choose to reflect on the themes of conversion, stewardship of creation, and the 
                sanctification of daily activities. Some may hold special prayer services for hunters 
                and forest workers, asking for St. Hubert's intercession for safety and respect for 
                God's creation. The day also serves as an opportunity to pray for those who are seeking 
                conversion or who feel called to a deeper relationship with God. Many may also take 
                time to reflect on how their daily activities can become opportunities for encountering 
                God and growing in holiness.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                Devotees pray to St. Hubert for conversion of heart, for safety in hunting and outdoor 
                activities, for respect for God's creation, for guidance in recognizing God's presence 
                in daily life, and for help in offering all activities to God. His intercession is 
                particularly sought by hunters, forest workers, those seeking conversion, and all who 
                want to sanctify their daily activities. His example reminds us that God can reach 
                us at any moment and that all of our activities can become opportunities for growing 
                in holiness and serving God.
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
                  <li>• <strong>Hunters:</strong> For his connection to hunting and the miraculous vision</li>
                  <li>• <strong>Forest Workers:</strong> For those who work in natural environments</li>
                  <li>• <strong>Mathematicians:</strong> For his intellectual pursuits</li>
                  <li>• <strong>Metal Workers:</strong> For those who work with tools and materials</li>
                  <li>• <strong>Belgium:</strong> As the country where he served and died</li>
                  <li>• <strong>Maastricht:</strong> As the diocese he served as bishop</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Conversion:</strong> For those seeking spiritual transformation</li>
                  <li>• <strong>Outdoor Safety:</strong> For protection during hunting and outdoor activities</li>
                  <li>• <strong>Stewardship:</strong> For respect and care of God's creation</li>
                  <li>• <strong>Daily Sanctification:</strong> For offering all activities to God</li>
                  <li>• <strong>Divine Encounters:</strong> For recognizing God's presence in daily life</li>
                  <li>• <strong>Pastoral Care:</strong> For bishops and Church leaders</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Hubert</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed St. Hubert, patron of hunters and model of conversion, you who 
                    experienced the miraculous vision of the crucifix between the stag's antlers, 
                    intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    Help us to follow your example of openness to God's call. Grant us the grace 
                    to recognize God's presence in our daily activities, the courage to respond 
                    to His call when it comes, and the wisdom to offer all our pursuits to His 
                    service. Help us to understand that no moment is too ordinary for God to reach us.
                  </p>
                  <p className="mb-4">
                    Inspire us with your dramatic conversion and your dedication to pastoral care. 
                    Help us to see that all of our activities, whether work or recreation, can become 
                    opportunities for encountering God and growing in holiness. Show us how to be 
                    good stewards of God's creation and to approach all our pursuits with respect 
                    and reverence.
                  </p>
                  <p>
                    Through your powerful intercession, may we find the courage to respond to God's 
                    call in our lives, the wisdom to recognize His presence in all things, and the 
                    grace to offer everything we do to His glory. St. Hubert, pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Hubert, patron of hunters and model of conversion, pray for us!"
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
            <Link href="/saints/st-lambert" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Bishop Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Lambert
                </h3>
                <p className="text-gray-700 text-sm">
                  Bishop of Maastricht and mentor of St. Hubert, martyred for his faith.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-eustace" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Eustace
                </h3>
                <p className="text-gray-700 text-sm">
                  Roman general who converted after seeing a crucifix between a stag's antlers.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-assisi" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Mendicant Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron of ecology and animals, known for his love of God's creation.
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