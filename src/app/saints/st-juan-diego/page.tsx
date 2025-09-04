import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Juan Diego - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Juan Diego, first indigenous saint of the Americas and witness to Our Lady of Guadalupe.',
  keywords: [
    'st juan diego',
    'saint juan diego',
    'st juan diego biography',
    'st juan diego feast day',
    'st juan diego patron saint',
    'our lady of guadalupe',
    'indigenous saint',
    'december 9 feast day',
    'catholic saints'
  ],
  openGraph: {
    title: 'St. Juan Diego - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Juan Diego, first indigenous saint of the Americas and witness to Our Lady of Guadalupe.',
    url: 'https://catholicbibleonline.com/saints/st-juan-diego',
  },
  twitter: {
    title: 'St. Juan Diego - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Juan Diego, first indigenous saint of the Americas and witness to Our Lady of Guadalupe.',
  }
}

export default function StJuanDiegoPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌹</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Juan Diego
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            First Indigenous Saint of the Americas, Witness to Our Lady of Guadalupe
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Juan Diego</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">December 9</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌹</div>
              <div className="text-sm text-gray-600">Guadalupe</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Juan Diego</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Juan Diego was born in 1474 as Cuauhtlatoatzin, a native to Mexico. He became the first Roman Catholic indigenous saint from the Americas. Following the early death of his father, Juan Diego was taken to live with his uncle. From the age of three, he was raised in line with the Aztec pagan religion, but always showed signs of having a mystical sense of life.
              </p>
              
              <p className="mb-6">
                He was recognized for his religious fervor, his respectful and gracious attitude toward the Virgin Mary and his Bishop Juan de Zumarraga, and his undying love for his ill uncle. When a group of 12 Franciscan missionaries arrived in Mexico in 1524, he and his wife, Maria Lucia, converted to Catholicism and were among the first to be baptized in the region. Juan Diego was very committed to his new life and would walk long distances to receive religious instruction at the Franciscan mission station at Tlatelolco.
              </p>
              
              <p className="mb-6">
                On December 9, 1531, Juan Diego was in a hurry to make it to Mass and celebrate the Feast of the Immaculate Conception. However, he was stopped by the beautiful sight of a radiant woman who introduced herself, in his native tongue, as the "ever-perfect holy Mary, who has the honor to be the mother of the true God." Mary told Juan Diego she was the mother of all those who lived in his land and asked him to make a request to the local bishop. She wanted them to build a chapel in her honor there on Tepeyac Hill, which was the site of a former pagan temple.
              </p>
              
              <p>
                When Juan Diego approached Bishop Juan de Zumarraga telling of what happened, he was presented with doubts and was told to give the Bishop time to reflect on the news. Later, the same day, Juan Diego encountered the Virgin Mary a second time and told her he failed in granting her request. He tried to explain to her he was not an important person, and therefore not the one for the task, but she insisted he was the man she wanted.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Juan Diego: Witness to Our Lady of Guadalupe</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">The Miraculous Sign</h3>
              <p className="mb-6">
                Juan Diego returned to the Bishop the next day and repeated his request, but now the Bishop asked for proof or a sign the apparition was real and truly of heaven. Juan Diego went straight to Tepeyac and, once again, encountered the Virgin Mary. After explaining to her what the Bishop asked, she agreed and told him she'd provide him with proof on the next day, December 11.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">The Miracle of the Flowers</h3>
              <p className="mb-6">
                However, on the next day, Juan Diego's uncle became very sick and he was obligated to stay and care for him. Juan Diego set out the next to find a priest for his uncle. He was determined to get there quickly and didn't want to face the Virgin Mary with shame for missing the previous day's meeting. But the Virgin Mary intercepted him and asked what was wrong. He explained his situation and promised to return after he found his uncle a priest. She looked at him and asked "No estoy yo aqui que soy tu madre?" (Am I not here, I who am your mother?) She promised him his uncle would be cured and asked him to climb to the hill and collect the flowers growing there. He obeyed and found many flowers blooming in December on the rocky land. He filled his tilma (cloak) with flowers and returned to Mary.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">The Miraculous Image</h3>
              <p className="mb-6">
                The Virgin Mary arranged the flowers within his cloak and told him this would be the sign he is to present to the bishop. Once Juan Diego found the bishop, he opened his cloak and the bishop was presented with a miraculous imprinted image of the Virgin Mary on the flower-filled cloak. The next day, Juan Diego found his uncle fully healed from his illness. His uncle explained he, too, saw the Virgin Mary. She also instructed him on her desires to have a church built on Tepeyac Hill, but she also told him she wanted to be known with the title of Guadalupe.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Conversion and Devotion</h3>
              <p>
                News of Juan Diego's miracle quickly spread, and he became very well-known. However, Juan Diego always remained a humble man. The bishop first kept Juan Diego's imprinted cloak in his private chapel, but then placed it on public display in the church built on Tepeyac Hill the next year. News of Our Lady's apparitions caused a wave of nearly 3,000 Indians a day to convert to the Christian faith. Details of Juan Diego's experience and Mary's words moved them deeply. Juan Diego moved into a little hermitage on Tepeyac Hill, and lived a solitary life of prayer and work. He remained there until his death on December 9, 1548, 17 years after the first apparition.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">December 9</div>
              <p className="text-gray-600">Feast of St. Juan Diego, Witness to Our Lady of Guadalupe</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Juan Diego is celebrated on December 9th, the anniversary of the first apparition of Our Lady of Guadalupe in 1531. This date also commemorates his death in 1548. St. Juan Diego was beatified on May 6, 1990 by Pope John Paul II and canonized on July 31, 2002. His canonization made him the first indigenous saint from the Americas, a significant milestone in the history of the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. Juan Diego's remarkable faith and his role as the chosen messenger of Our Lady of Guadalupe. His feast day serves as a reminder of the importance of humility, obedience, and trust in God's plan. Many people pray for the intercession of St. Juan Diego for the conversion of hearts and for the grace to be faithful witnesses of the Gospel.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. Juan Diego for his intercession in matters of humility, obedience to God's will, and for the grace to be faithful witnesses of the Gospel. Many people also pray for the conversion of indigenous peoples and for the protection of the miraculous image of Our Lady of Guadalupe.
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
                  <li>• <strong>Indigenous People:</strong> Patron of native peoples of the Americas</li>
                  <li>• <strong>Mexico:</strong> Patron of his native country</li>
                  <li>• <strong>Humility:</strong> Model of humble service to God</li>
                  <li>• <strong>Our Lady of Guadalupe:</strong> Patron of devotion to Guadalupe</li>
                  <li>• <strong>Converts:</strong> Patron of those who convert to Catholicism</li>
                  <li>• <strong>Miracles:</strong> Patron of miraculous interventions</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Obedience:</strong> Helper in following God's will</li>
                  <li>• <strong>Trust in God:</strong> Patron of trusting in divine providence</li>
                  <li>• <strong>Witness:</strong> Helper in bearing witness to the Gospel</li>
                  <li>• <strong>Conversion:</strong> Patron of turning hearts to Christ</li>
                  <li>• <strong>Healing:</strong> Helper in physical and spiritual healing</li>
                  <li>• <strong>Protection:</strong> Patron of protecting sacred images</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Juan Diego</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Juan Diego, chosen messenger of Our Lady of Guadalupe and first indigenous saint 
                    of the Americas, help us to follow your example of humility and obedience to God's will. 
                    Through your intercession, may we have the courage to be faithful witnesses of the Gospel 
                    and to trust in the loving care of our Blessed Mother. Help us to bring others to Christ 
                    through our words and actions. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Juan Diego, pray for us!"
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
            <Link href="/saints/our-lady-of-guadalupe" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Marian Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  Our Lady of Guadalupe
                </h3>
                <p className="text-gray-700 text-sm">
                  The Virgin Mary who appeared to St. Juan Diego on Tepeyac Hill.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-xavier" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis Xavier
                </h3>
                <p className="text-gray-700 text-sm">
                  Jesuit missionary who spread Christianity throughout Asia.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-josephine-bakhita" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Josephine Bakhita
                </h3>
                <p className="text-gray-700 text-sm">
                  Another saint who converted from paganism to Christianity.
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