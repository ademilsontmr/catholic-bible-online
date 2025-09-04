import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Dorothy - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Dorothy, virgin martyr of Caesarea who sent miraculous fruits from Paradise to convert her persecutor.',
  keywords: [
    'st dorothy',
    'saint dorothy',
    'st dorothy martyr',
    'st dorothy feast day',
    'st dorothy patron saint',
    'catholic saints',
    'february 6 feast day',
    'early saints',
    'virgin martyrs'
  ],
  openGraph: {
    title: 'St. Dorothy - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Dorothy, virgin martyr of Caesarea who sent miraculous fruits from Paradise.',
    url: 'https://catholicbibleonline.com/saints/st-dorothy',
  },
  twitter: {
    title: 'St. Dorothy - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Dorothy, virgin martyr of Caesarea who sent miraculous fruits from Paradise.',
  }
}

export default function StDorothyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌹</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Dorothy
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Virgin Martyr, Patron of Gardeners, Model of Faith and Joy
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Dorothy</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">February 6</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌹</div>
              <div className="text-sm text-gray-600">Virgin Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Dorothy</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Dorothy was a resident of Caesarea in Cappadocia during the reign of Emperor Diocletian, 
                a time of intense persecution against Christians. Her story is one of unwavering faith, 
                miraculous intervention, and the power of joy even in the face of death. Though her 
                historical details are preserved in apocryphal tradition, her witness to Christ has 
                inspired generations of believers.
              </p>
              
              <p className="mb-6">
                When the persecution reached Caesarea, Dorothy was arrested for her Christian faith. 
                The governor of the region demanded that she sacrifice to the pagan gods, but Dorothy 
                steadfastly refused, declaring her allegiance to Christ alone. Despite being tortured 
                and threatened with death, she remained firm in her faith, finding strength in her 
                relationship with God.
              </p>
              
              <p className="mb-6">
                As she was being led to her execution, Dorothy encountered a young lawyer named Theophilus, 
                who was present to witness the proceedings. Mocking her faith and her apparent joy in 
                the face of death, Theophilus sarcastically asked her to send him fruits from "the garden" 
                she had so joyously announced she would soon be entering. Dorothy, with remarkable 
                serenity and faith, promised to do so.
              </p>
              
              <p className="mb-6">
                When Dorothy knelt for her execution, she prayed fervently to God. In response to her 
                prayer, an angel appeared with a basket containing three beautiful roses and three 
                apples. Dorothy sent this miraculous gift to Theophilus with the message that she 
                would meet him in the garden of Paradise. This extraordinary sign of God's power 
                and Dorothy's faith had a profound impact on Theophilus.
              </p>
              
              <p>
                The miraculous fruits from Paradise served as a powerful witness to the reality of 
                the Christian faith and the promise of eternal life. Theophilus was converted to 
                Christianity and later suffered martyrdom himself, following in the footsteps of 
                the saint who had brought him to faith through her witness and the miraculous 
                sign from heaven.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Dorothy: Model of Joyful Faith and Divine Providence</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Dorothy's legacy is one of joyful faith in the face of persecution and the 
                power of God's miraculous intervention. Her story teaches us that even in our 
                darkest moments, God can work wonders to bring others to faith and to glorify 
                His name. She exemplifies the truth that our witness to Christ can have 
                eternal consequences.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Joyful Martyrdom</h3>
              <p className="mb-6">
                Dorothy's remarkable joy in the face of death stands as a powerful testament to 
                the Christian hope in eternal life. Her ability to maintain her faith and even 
                find joy in her suffering demonstrates the transformative power of God's grace 
                and the reality of the heavenly reward that awaits the faithful.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Divine Providence</h3>
              <p className="mb-6">
                The miraculous appearance of the angel with fruits from Paradise shows how God 
                can use even the most difficult circumstances to bring about conversion and 
                glorify His name. Dorothy's story reminds us that God's ways are mysterious 
                and that He can bring good out of even the most terrible situations.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Gardeners and New Beginnings</h3>
              <p>
                As the patron saint of gardeners, florists, brides, and newlyweds, St. Dorothy 
                represents the beauty of creation, the promise of new life, and the hope of 
                eternal joy. Her association with flowers and fruits symbolizes the spiritual 
                fruits that come from a life lived in faith and the beauty of the heavenly 
                garden that awaits the faithful.
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
              <p className="text-gray-600">Feast of St. Dorothy, Virgin Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Dorothy is celebrated on February 6th, commemorating her 
                martyrdom and her miraculous witness to the faith. This day serves as a 
                reminder of the power of faith, the reality of God's miraculous intervention, 
                and the joy that can be found even in suffering when we trust in God's promises.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this feast day, Catholics are encouraged to reflect on the power of witness 
                and the miraculous ways God can work in our lives. It's a time to pray for 
                the courage to stand firm in our faith, even when faced with opposition, and 
                to trust in God's providence. Many parishes emphasize the importance of 
                joyful witness and the hope of eternal life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast of St. Dorothy reminds us that our faith can have a profound impact 
                on others, even in ways we might not expect. It's an excellent time to pray 
                for the intercession of this great saint and to renew our commitment to 
                living our faith with joy and courage, trusting in God's miraculous power.
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
                  <li>• <strong>Gardeners:</strong> Patron of those who cultivate plants and flowers</li>
                  <li>• <strong>Florists:</strong> Protector of those who work with flowers</li>
                  <li>• <strong>Brides:</strong> Guardian of women preparing for marriage</li>
                  <li>• <strong>Newlyweds:</strong> Patron of newly married couples</li>
                  <li>• <strong>Horticulturists:</strong> Protector of those who study plants</li>
                  <li>• <strong>Flower Arrangers:</strong> Patron of those who create floral designs</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Joy in Suffering:</strong> Helper in finding joy during difficult times</li>
                  <li>• <strong>Faithful Witness:</strong> Patron of those called to witness to their faith</li>
                  <li>• <strong>Miraculous Intervention:</strong> Guardian of those seeking divine help</li>
                  <li>• <strong>Conversion of Others:</strong> Helper in bringing others to faith</li>
                  <li>• <strong>New Beginnings:</strong> Patron of those starting new phases in life</li>
                  <li>• <strong>Beauty and Creation:</strong> Guardian of those who appreciate God's creation</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Dorothy</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Dorothy, you who found joy even in the face of martyrdom and whose 
                    faith brought about miraculous signs from heaven, intercede for us that we 
                    may always find joy in our faith, no matter what trials we may face.
                  </p>
                  <p className="mb-4">
                    Help us to be faithful witnesses to Christ, trusting in God's miraculous 
                    power to work through our lives. May your example of joyful faith inspire 
                    us to bring others to Christ through our witness and our love.
                  </p>
                  <p>
                    St. Dorothy, pray for us, that we may be worthy of the promises of Christ. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Dorothy, pray for us!"
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
            <Link href="/saints/st-agnes" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Agnes
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and patron of young girls, known for her purity and courage in the face of persecution.
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
                  Virgin martyr and patron of musicians, known for her beautiful witness to the faith.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-lucy" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Lucy
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and patron of the blind, known for her courage and miraculous interventions.
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