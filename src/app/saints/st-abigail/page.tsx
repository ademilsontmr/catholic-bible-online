import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Abigail (St. Gobnait) - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Abigail, patron of honeybees and beekeepers.',
  keywords: [
    'st abigail',
    'saint abigail',
    'st gobnait',
    'saint gobnait',
    'february 11 feast day',
    'catholic saints',
    'early saints',
    'patron of honeybees'
  ],
  openGraph: {
    title: 'St. Abigail (St. Gobnait) - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Abigail, patron of honeybees and beekeepers.',
    url: 'https://catholicbibleonline.com/saints/st-abigail',
  },
  twitter: {
    title: 'St. Abigail (St. Gobnait) - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Abigail, patron of honeybees and beekeepers.',
  }
}

export default function StAbigailPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🐝</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Abigail
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron of Honeybees and Beekeepers
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Abigail</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">February 11</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🐝</div>
              <div className="text-sm text-gray-600">Early Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Abigail</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Abigail, more commonly known as St. Gobnait or Deborah, was 
                a medieval Irish saint born around the 6th century in County Clare, 
                Ireland. According to tradition, Abigail's family was always feuding. 
                This caused her to run away from home to settle on Inis Oirr in 
                the Aran Islands. After some time, an angel appeared to Abigail 
                and told her this was not her place of resurrection. She was to 
                head inland to find the place she would spend the rest of her life. 
                The angel told Abigail this place would be marked with the presence 
                of nine white deer. Abigail set off in search for the deer throughout 
                the southern coastal counties. Her journey is now marked by churches 
                and holy wells which are dedicated to her along the way.
              </p>
              
              <p className="mb-6">
                She finally found the herd of deer in Ballyvourney, County Cork, 
                now known as St. Gobnet's Wood. Abigail would spend the rest of 
                her earthly life dedicated to pastoral service and Christian charitable 
                work. Her brother, St. Abban is believed to have joined her to 
                help set the foundation for a convent, placing Abigail as its 
                abbess, or mother superior of the community of women religious. 
                Abigail also went on to spend much of her time caring for the sick. 
                According to early Celtic folklore and religious symbolism, the 
                soul departs from the body in the form of a bee or butterfly. 
                So, it is not surprising that, given her deep Christian faith 
                and belief in the Resurrection, Abigail also became a beekeeper.
              </p>
              
              <p className="mb-6">
                It is said that she developed a powerful relationship with the 
                bees and would use their honey to treat illnesses and heal wounds. 
                She became known for her miracles in rousting bees from their 
                hives and using them to chase off evil. Some pious legend even 
                claim that the bees transformed into soldiers, with their hives 
                becoming helmets. Abigail is also credited with saving Ballyvourney 
                from the plague. She remained settled in Ballyvourney until her 
                death where she was then buried "to await her resurrection."
              </p>
              
              <p>
                St. Abigail is the patron saint of honeybees and beekeepers. She 
                is often featured surrounded by bees or carrying a honeycomb. 
                Her feast day is celebrated on February 11.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Abigail: Guardian of the Bees</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Divine Guidance</h3>
              <p className="mb-6">
                St. Abigail's most enduring legacy is her extraordinary example 
                of listening to divine guidance and following God's call with 
                trust and obedience. Her journey from Inis Oirr to Ballyvourney, 
                guided by an angel who told her to seek the place marked by nine 
                white deer, demonstrates her deep faith and willingness to follow 
                God's plan even when it required leaving behind what was familiar 
                and comfortable. Abigail's legacy reminds us that God often calls 
                us to unexpected places and that we should be open to His guidance 
                in our own lives. Her example teaches us that true peace and fulfillment 
                come from being in the place where God wants us to be, even if 
                it requires a journey of faith and trust. Abigail's story challenges 
                us to ask ourselves whether we are truly listening to God's voice 
                and whether we are willing to follow His guidance, even when it 
                leads us to unexpected destinations.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Creation and Healing</h3>
              <p className="mb-6">
                St. Abigail's special relationship with bees and her use of honey 
                for healing make her a powerful example of how we should care 
                for God's creation and use its gifts for the good of others. Her 
                understanding that bees and butterflies represent the soul's journey 
                reflects the deep spiritual wisdom of Celtic Christianity and 
                its connection to the natural world. Abigail's legacy teaches 
                us that we are called to be stewards of God's creation and to 
                use the gifts of nature responsibly and lovingly. Her example 
                encourages us to develop a deeper appreciation for the natural 
                world and to recognize that all of creation is a gift from God 
                that should be treated with respect and care. Abigail's patronage 
                of beekeepers also reminds us of the importance of sustainable 
                practices and the vital role that bees play in our ecosystem.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Christian Charity</h3>
              <p>
                St. Abigail's dedication to caring for the sick and her establishment 
                of a convent for women religious demonstrate her commitment to 
                Christian charity and service. Her life as an abbess shows that 
                women have always played crucial roles in the Church's mission 
                of caring for others and spreading the Gospel. Abigail's legacy 
                teaches us that true holiness involves not just personal piety, 
                but active service to others, especially those who are sick or 
                in need. Her example challenges us to examine our own commitment 
                to serving others and to ask ourselves whether we are using our 
                gifts and resources to help those around us. Abigail's story also 
                reminds us that the Church's mission of charity and service is 
                not limited to any particular time or place, but is a universal 
                call that continues to this day.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">February 11</div>
              <p className="text-gray-600">Feast of St. Abigail</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Abigail is celebrated on February 11th, during 
                the winter season when the Church reflects on the themes of light 
                and hope. This feast is celebrated as a memorial in the Roman 
                Catholic Church, recognizing Abigail's importance as the patron 
                of honeybees and beekeepers and a model of divine guidance and 
                Christian charity. The feast falls during a time when many people 
                are looking forward to the coming of spring and the renewal of 
                life, making it an ideal time to remember Abigail's connection 
                to nature and her role in caring for God's creation. The feast 
                provides an opportunity to honor Abigail's memory and to reflect 
                on how we can better care for the natural world and serve others 
                in our own lives. It is also a time to pray for beekeepers and 
                all those who work to protect and preserve the environment.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Abigail, many people participate in special 
                prayers and devotions to honor her memory and seek her intercession. 
                Churches, particularly those with connections to environmental 
                ministries or Celtic Christian heritage, hold special Masses and 
                services. Many beekeepers and environmentalists gather to pray 
                for the protection of bees and the preservation of the natural 
                world, asking for St. Abigail's intercession in helping them 
                to be good stewards of God's creation. The day is also marked 
                by prayers for all those who work in healthcare and healing ministries, 
                asking for Abigail's guidance in helping them to serve with compassion 
                and skill. Many people also take time to reflect on their own 
                relationship with the natural world and to pray for the grace 
                to be better stewards of God's creation. The feast is also a 
                time to reflect on how we can better serve others and to ensure 
                that we are using our gifts and resources for the good of those 
                around us.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of discernment 
                and the ability to hear and follow God's guidance in our lives. 
                Many people make special petitions for beekeepers and environmentalists, 
                asking for St. Abigail's intercession in helping them to be good 
                stewards of God's creation. The day is also a time to reflect 
                on the importance of caring for the natural world and to pray 
                for the grace to be better stewards of the environment. St. Abigail's 
                feast day encourages us to remember that we are all called to 
                care for God's creation and to use the gifts of nature responsibly 
                and lovingly. It is also a time to pray for the grace to be more 
                attentive to God's voice and to be willing to follow His guidance, 
                even when it leads us to unexpected places. The feast reminds 
                us that true holiness involves not just personal piety, but active 
                service to others and care for God's creation.
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
                  <li>• <strong>Honeybees:</strong> Patron of honeybees</li>
                  <li>• <strong>Beekeepers:</strong> Patron of beekeepers</li>
                  <li>• <strong>Healing:</strong> Patron of healing</li>
                  <li>• <strong>Environment:</strong> Patron of environmental protection</li>
                  <li>• <strong>Ireland:</strong> Patron of Ireland</li>
                  <li>• <strong>Women Religious:</strong> Patron of women religious</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Guidance:</strong> Helper in divine guidance</li>
                  <li>• <strong>Discernment:</strong> Patron of discernment</li>
                  <li>• <strong>Protection:</strong> Helper in protection</li>
                  <li>• <strong>Charity:</strong> Patron of Christian charity</li>
                  <li>• <strong>Nature:</strong> Helper in caring for creation</li>
                  <li>• <strong>Intercession:</strong> Powerful advocate in heaven</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Abigail</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Abigail, patron of honeybees and beekeepers, help me 
                    to listen to God's guidance and follow His will in my life.
                  </p>
                  <p className="mb-4">
                    Teach me to care for God's creation with love and respect, 
                    and guide me in serving others with the same charity and 
                    compassion that you showed to the sick and needy.
                  </p>
                  <p>
                    St. Abigail, pray for me that I may have the wisdom to discern 
                    God's will, the courage to follow His guidance, and the love 
                    to care for His creation. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Beekeepers</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Abigail, patron of beekeepers and honeybees, intercede 
                    for all those who care for these precious creatures.
                  </p>
                  <p>
                    Help us to be good stewards of God's creation and to protect 
                    the bees that are so vital to our ecosystem. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Abigail, pray for us!"
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
            <Link href="/saints/st-brigid" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Brigid
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron of Ireland and keeper of the hearth.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-patrick" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Patrick
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle of Ireland and patron of Ireland.
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
                  Patron of animals and ecology.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <Link
            href="/saints"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Saints
          </Link>
        </div>
      </div>
    </div>
  )
} 