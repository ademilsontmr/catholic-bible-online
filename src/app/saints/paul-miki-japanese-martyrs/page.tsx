import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Paul Miki & Japanese Martyrs - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Paul Miki and the Japanese Martyrs, who were crucified for their faith during the persecution under Toyotomi Hideyoshi.',
  keywords: [
    'st paul miki',
    'saint paul miki',
    'japanese martyrs',
    'st paul miki biography',
    'st paul miki feast day',
    'st paul miki patron saint',
    'japan martyrs',
    'toyotomi hideyoshi persecution',
    'jesuit martyr',
    'japanese christian persecution',
    'catholic saints',
    'february 6 feast day'
  ],
  openGraph: {
    title: 'St. Paul Miki & Japanese Martyrs - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Paul Miki and the Japanese Martyrs, who were crucified for their faith during the persecution under Toyotomi Hideyoshi.',
    url: 'https://catholicbibleonline.com/saints/paul-miki-japanese-martyrs',
  },
  twitter: {
    title: 'St. Paul Miki & Japanese Martyrs - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Paul Miki and the Japanese Martyrs, who were crucified for their faith during the persecution under Toyotomi Hideyoshi.',
  }
}

export default function PaulMikiJapaneseMartyrsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⛩️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Paul Miki & Japanese Martyrs
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Jesuit Priest and 25 Companions, Martyrs of Japan
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Paul Miki & Japanese Martyrs</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">February 6</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⛩️</div>
              <div className="text-sm text-gray-600">Martyrs</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Paul Miki & Japanese Martyrs</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Paul Miki was the son of a Japanese military leader, born at Tounucumada, Japan. 
                He was educated at the Jesuit college of Anziquiama, joined the Jesuits in 1580, 
                and became known for his eloquent preaching. His background as the son of a 
                military leader and his Jesuit education prepared him for a life of service to 
                the Church in Japan.
              </p>
              
              <p className="mb-6">
                During the persecution of Christians under the Taiko, Toyotomi Hideyoshi, ruler 
                of Japan in the name of the emperor, Paul Miki was crucified on February 5 with 
                twenty-five other Catholics. This brutal persecution was part of a larger effort 
                to suppress Christianity in Japan, which had been growing through the missionary 
                work of the Jesuits and Franciscans.
              </p>
              
              <p className="mb-6">
                Among the Japanese laymen who suffered the same fate were several remarkable 
                individuals whose stories demonstrate the diverse ways people came to faith and 
                the courage they showed in defending it. Francis was a carpenter who was arrested 
                while watching the executions and then crucified, showing how even bystanders 
                could be drawn into the persecution.
              </p>
              
              <p className="mb-6">
                Gabriel was the nineteen-year-old son of the Franciscan's porter, demonstrating 
                how the faith could spread through families and how young people could show 
                extraordinary courage. Leo Kinuya was a twenty-eight-year-old carpenter from 
                Miyako, showing that the faith had reached ordinary working people.
              </p>
              
              <p className="mb-6">
                Diego Kisai (or Kizayemon) was a temporal coadjutor of the Jesuits, Joachim 
                Sakakibara was a cook for the Franciscans at Osaka, and Peter Sukejiro was sent 
                by a Jesuit priest to help the prisoners before being arrested himself. These 
                individuals show the various roles that lay people played in supporting the 
                missionary work of the Church.
              </p>
              
              <p className="mb-6">
                Cosmas Takeya from Owari had preached in Osaka, showing how lay people could 
                become evangelizers themselves. Ventura from Miyako had been baptized by the 
                Jesuits, gave up his Catholicism on the death of his father, became a bonze 
                (Buddhist monk), and was brought back to the Church by the Franciscans. His 
                story shows the challenges of maintaining faith in a hostile environment and 
                the power of conversion and reconversion.
              </p>
              
              <p>
                They were all canonized as the Martyrs of Japan in 1862, recognizing their 
                heroic witness to the faith and their willingness to die rather than renounce 
                Christ. Their martyrdom helped to establish the Church in Japan and continues 
                to inspire Christians around the world.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Paul Miki & Japanese Martyrs: Seeds of the Church in Japan</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Witness of Cultural Integration</h3>
              <p className="mb-6">
                St. Paul Miki and the Japanese Martyrs represent a unique moment in Church 
                history where Christianity was taking root in a completely different cultural 
                context. Paul Miki, as a native Japanese Jesuit, shows how the faith could be 
                embraced and lived by people from non-Christian cultures. His eloquent preaching 
                and his ability to communicate the Gospel in a way that resonated with Japanese 
                people demonstrate the universal nature of the Christian message and its ability 
                to transcend cultural boundaries.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Diversity of Witness</h3>
              <p className="mb-6">
                The group of martyrs included people from various walks of life - priests, 
                lay people, young and old, men from different social classes and professions. 
                This diversity shows that the Christian faith can touch people from all 
                backgrounds and that martyrdom is not limited to any particular group. From 
                the young Gabriel to the carpenter Leo Kinuya, from the cook Joachim to the 
                preacher Cosmas, each person's story adds to the rich tapestry of Christian 
                witness in Japan.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Perseverance</h3>
              <p className="mb-6">
                The story of Ventura, who was baptized, fell away from the faith, became a 
                Buddhist monk, and then returned to Christianity, shows the power of God's 
                mercy and the possibility of conversion and reconversion. His journey reminds 
                us that the path to holiness is not always straight and that God can work 
                through our weaknesses and failures to bring us back to Him. This aspect of 
                their legacy speaks to all who have struggled with their faith or who have 
                wandered away from the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Foundation of Japanese Christianity</h3>
              <p>
                The martyrdom of St. Paul Miki and his companions helped to establish the 
                Church in Japan, even though the persecution that followed would drive 
                Christianity underground for centuries. Their blood became the seed of the 
                Church, and their witness continues to inspire Japanese Christians today. 
                The fact that they were canonized in 1862, during a period when Christianity 
                was still officially banned in Japan, shows the enduring power of their 
                witness and the Church's recognition of their importance in the history of 
                salvation.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">February 6</div>
              <p className="text-gray-600">Feast of St. Paul Miki & Japanese Martyrs</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Paul Miki and the Japanese Martyrs are celebrated on February 6th. This 
                feast day honors their courageous witness to the faith and their willingness 
                to die rather than renounce Christ during the persecution under Toyotomi Hideyoshi.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for the Church in Japan, for missionaries 
                working in Asia, for those facing religious persecution, and for the courage 
                to remain faithful in the face of cultural opposition. It's also a day to 
                reflect on the importance of cultural sensitivity in evangelization and the 
                universal nature of the Christian call to holiness.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the Church in Japan and Asia, 
                for missionaries working in non-Christian cultures, for those facing religious 
                persecution, and to ask for the intercession of these martyrs in finding 
                courage to witness to the faith in challenging circumstances.
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
                  <li>• <strong>Japan:</strong> Patron of the Church in Japan</li>
                  <li>• <strong>Asian Missions:</strong> Patron of missionary work in Asia</li>
                  <li>• <strong>Cultural Evangelization:</strong> Patron of cross-cultural ministry</li>
                  <li>• <strong>Persecuted Christians:</strong> Patron of those facing religious persecution</li>
                  <li>• <strong>Jesuit Missions:</strong> Patron of Jesuit missionary work</li>
                  <li>• <strong>Lay Evangelizers:</strong> Patron of lay people who spread the faith</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Missionaries:</strong> Helper for those working in non-Christian cultures</li>
                  <li>• <strong>Cultural Sensitivity:</strong> Patron of respectful evangelization</li>
                  <li>• <strong>Religious Freedom:</strong> Helper for those denied religious liberty</li>
                  <li>• <strong>Young Converts:</strong> Patron of young people embracing the faith</li>
              <li>• <strong>Returning Catholics:</strong> Helper for those returning to the Church</li>
                  <li>• <strong>Asian Christians:</strong> Patron of Christians in Asia</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Paul Miki & Japanese Martyrs</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Paul Miki and Japanese Martyrs, you who gave your lives for Christ 
                    in a land where Christianity was persecuted, help me to have the courage 
                    to witness to my faith even when it is difficult or dangerous.
                  </p>
                  <p>
                    You who came from different backgrounds and walks of life, teach me to 
                    see the universal call to holiness in all people. Intercede for the Church 
                    in Japan and throughout Asia, and for all who face persecution for their faith. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Missionaries</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Paul Miki and companions, patrons of missionary work, pray for all 
                    those who bring the Gospel to new cultures and lands.
                  </p>
                  <p>
                    Help them to be sensitive to different cultures while remaining faithful 
                    to the truth of Christ. May their work bear fruit as yours did in Japan. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Paul Miki and Japanese Martyrs, pray for us!"
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
            <Link href="/saints/st-francis-xavier" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Missionary Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis Xavier
                </h3>
                <p className="text-gray-700 text-sm">
                  Jesuit missionary to Asia, patron of missionaries and foreign missions.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-ignatius-loyola" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Founder Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Ignatius Loyola
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Society of Jesus, patron of Jesuits and spiritual exercises.
                </p>
              </div>
            </Link>

            <Link href="/saints/uganda-martyrs" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  Uganda Martyrs
                </h3>
                <p className="text-gray-700 text-sm">
                  Group of martyrs in Uganda, showing faith under persecution in Africa.
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