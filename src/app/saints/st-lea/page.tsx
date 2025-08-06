import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Lea - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Lea, fourth century widow who became Superior of a Roman monastery.',
  keywords: [
    'st lea',
    'saint lea',
    'st lea biography',
    'st lea feast day',
    'st lea patron saint',
    'catholic saints',
    'widow saints'
  ],
  openGraph: {
    title: 'St. Lea - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Lea, fourth century widow who became Superior of a Roman monastery.',
    url: 'https://catholicbibleonline.com/saints/st-lea',
  },
  twitter: {
    title: 'St. Lea - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Lea, fourth century widow who became Superior of a Roman monastery.',
  }
}

export default function StLeaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🕊️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Lea
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Model of Renunciation and Humility in Monastic Life
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Lea</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">March 22</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🕊️</div>
              <div className="text-sm text-gray-600">Widow & Superior</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Lea</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                A letter which St. Jerome wrote to St. Marcella provides the only information we have 
                about St. Lea, a devout fourth century widow. This precious correspondence offers us 
                a glimpse into the life of a remarkable woman who transformed her grief into a 
                powerful witness of Christian renunciation and monastic dedication.
              </p>
              
              <p className="mb-6">
                Upon the death of her husband, St. Lea made the courageous decision to retire to a 
                Roman monastery, leaving behind the comforts and privileges of her former life. 
                This transition from a life of wealth and social prominence to one of poverty and 
                obscurity demonstrates her deep understanding of the Gospel call to renunciation 
                and her desire to follow Christ more closely.
              </p>
              
              <p className="mb-6">
                Through her exemplary life of prayer, humility, and service, St. Lea ultimately 
                became the Superior of the monastery. This remarkable progression from widow to 
                monastic leader speaks to her spiritual maturity and the respect she earned from 
                her sisters through her virtuous example rather than through worldly authority.
              </p>
              
              <p className="mb-6">
                Since his correspondence was acquainted with the details of St. Lea's life, St. Jerome 
                omitted these in his letter. He concentrated instead on the fate of St. Lea in 
                comparison with that of a consul who had recently died, using this contrast to 
                illustrate the eternal consequences of our earthly choices and the true value of 
                spiritual riches over material wealth.
              </p>
              
              <p className="mb-6">
                St. Jerome's eloquent description captures the essence of St. Lea's transformation: 
                "Who will praise the blessed Lea as she deserves? She renounced painting her face 
                and adorning her head with shining pearls. She exchanged her rich attire for sackcloth, 
                and ceased to command others in order to obey all. She dwelt in a corner with a few 
                bits of furniture; she spent her nights in prayer, and instructed her companions 
                through her example rather than through protests and speeches."
              </p>
              
              <p>
                This powerful testimony reveals St. Lea's complete embrace of the monastic ideal: 
                renunciation of worldly beauty and luxury, adoption of simple and humble living, 
                transformation from commanding to serving, and instruction through example rather 
                than words. Her life became a living parable of the Gospel's call to die to self 
                and live for Christ.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Lea: Model of Christian Renunciation</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Contrast with Worldly Values</h3>
              <p className="mb-6">
                St. Jerome's letter provides a powerful contrast between St. Lea's eternal reward 
                and the fate of a wealthy consul who had recently died. "So it is that thence forth 
                she enjoyed perfect happiness. From Abraham's bosom, where she resides with Lazarus, 
                she sees our consul who was once decked out in purple, now vested in a shameful robe, 
                vainly begging for a drop of water to quench his thirst." This vivid imagery serves 
                as a stark reminder of the transitory nature of worldly success and the eternal 
                value of spiritual riches.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Monastic Leadership</h3>
              <p className="mb-6">
                St. Lea's rise to become Superior of the monastery demonstrates that true leadership 
                in the Christian life comes not through worldly authority or social status, but 
                through humility, prayer, and virtuous example. Her leadership was characterized 
                by service rather than domination, instruction through example rather than commands, 
                and a focus on eternal rather than temporal rewards. This model of servant leadership 
                continues to inspire monastic communities and Christian leaders today.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to the Power of Conversion</h3>
              <p className="mb-6">
                St. Lea's transformation from a wealthy widow to a humble monastic superior serves 
                as a powerful witness to the transformative power of grace and the possibility of 
                radical conversion at any stage of life. Her story reminds us that it is never too 
                late to respond to God's call and that the most profound changes often come through 
                the most difficult circumstances, such as the loss of a loved one.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Call to Renunciation</h3>
              <p>
                Through St. Jerome's letter, St. Lea continues to speak to us today: "Hence, I 
                tearfully beg you to refrain from seeking the favors of the world and to renounce 
                all that is carnal. It is impossible to follow both the world and Jesus. Let us 
                live a life of renunciation, for our bodies will soon be dust and nothing else 
                will last any longer." Her life and legacy challenge us to examine our own 
                attachments to worldly comforts and to consider what we are willing to renounce 
                for the sake of following Christ more closely.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">March 22</div>
              <p className="text-gray-600">Feast of St. Lea, Widow and Religious</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Lea's feast day is celebrated on March 22nd, commemorating her death and her 
                witness to the Christian life of renunciation and monastic dedication. This feast 
                is particularly meaningful for widows, converts, and those in monastic life, as 
                St. Lea serves as a powerful example of how God can transform loss and grief into 
                a path of spiritual growth and service to others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Lea's feast day, many communities, especially those with connections to 
                monastic life or serving widows, may hold special prayer services or Masses. 
                Some may choose to reflect on the themes of renunciation, conversion, and the 
                contrast between worldly and spiritual values that are so central to St. Lea's 
                story. The day serves as an opportunity to examine our own attachments and 
                consider what we might need to renounce to follow Christ more closely.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                Devotees pray to St. Lea for strength in times of loss and grief, for the grace 
                to embrace renunciation and simplicity, for guidance in monastic or religious 
                vocations, and for the wisdom to lead through example rather than authority. 
                Her intercession is particularly sought by widows seeking to find new meaning 
                in their lives, by those considering religious life, and by all who need courage 
                to let go of worldly attachments and embrace a life of greater spiritual depth.
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
                  <li>• <strong>Widows:</strong> For her example of finding new purpose after loss</li>
                  <li>• <strong>Converts:</strong> For her radical transformation of life</li>
                  <li>• <strong>Monastic Life:</strong> As Superior of a Roman monastery</li>
                  <li>• <strong>Religious Women:</strong> For her leadership and example</li>
                  <li>• <strong>Those in Grief:</strong> For her response to widowhood</li>
                  <li>• <strong>Servant Leaders:</strong> For her model of leading through service</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Renunciation:</strong> For strength to let go of worldly attachments</li>
                  <li>• <strong>Humility:</strong> For the grace to serve rather than be served</li>
                  <li>• <strong>Conversion:</strong> For radical transformation of life</li>
                  <li>• <strong>Monastic Vocation:</strong> For guidance in religious life</li>
                  <li>• <strong>Eternal Perspective:</strong> For focus on heavenly rewards</li>
                  <li>• <strong>Example:</strong> For ability to lead through virtuous living</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Lea</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed St. Lea, model of Christian renunciation and humility, you who 
                    exchanged worldly riches for spiritual poverty and leadership for service, 
                    intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    Help us to follow your example of letting go of worldly attachments and 
                    embracing a life of simplicity and prayer. Grant us the courage to renounce 
                    what is carnal and to seek only what is eternal.
                  </p>
                  <p className="mb-4">
                    Inspire us with your transformation from widow to monastic superior, showing 
                    us that God can bring new life and purpose from our deepest losses. Help us 
                    to lead through example rather than authority, and to serve rather than be served.
                  </p>
                  <p>
                    Through your powerful intercession, may we learn to value spiritual riches 
                    over material wealth, and may we look forward with hope to our eternal reward 
                    in the house of the Father. St. Lea, pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Lea, model of renunciation and humility, pray for us!"
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
            <Link href="/saints/st-marcella" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Marcella
                </h3>
                <p className="text-gray-700 text-sm">
                  Roman noblewoman and friend of St. Jerome, to whom he wrote about St. Lea.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-jerome" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Jerome
                </h3>
                <p className="text-gray-700 text-sm">
                  Doctor of the Church who wrote the letter describing St. Lea's life and virtues.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-monica" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Monica
                </h3>
                <p className="text-gray-700 text-sm">
                  Another holy widow and mother of St. Augustine, model of prayer and patience.
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