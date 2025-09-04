import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Hilary of Poitiers - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Hilary of Poitiers, Doctor of the Church and defender of the Trinity against Arianism.',
  keywords: [
    'st hilary poitiers',
    'saint hilary poitiers',
    'st hilary poitiers biography',
    'st hilary poitiers feast day',
    'st hilary poitiers patron saint',
    'catholic saints',
    'january 13 feast day',
    'doctor of the church',
    'arian controversy',
    'trinity defender'
  ],
  openGraph: {
    title: 'St. Hilary of Poitiers - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Hilary of Poitiers, Doctor of the Church and defender of the Trinity against Arianism.',
    url: 'https://catholicbibleonline.com/saints/st-hilary-poitiers',
  },
  twitter: {
    title: 'St. Hilary of Poitiers - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Hilary of Poitiers, Doctor of the Church and defender of the Trinity against Arianism.',
  }
}

export default function StHilaryPoitiersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Hilary of Poitiers
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Doctor of the Church, Defender of the Trinity, Bishop and Theologian
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Hilary of Poitiers</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">January 13</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📚</div>
              <div className="text-sm text-gray-600">Doctor</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Hilary of Poitiers</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Hilary of Poitiers, one of the great Doctors of the Church, was born in the 
                early fourth century in what is now France. His journey to Christianity was marked 
                by deep philosophical inquiry and a sincere search for truth. "They didn't know who 
                they were," Hilary would later say of the Arian heretics, but he knew very well who 
                he was - a child of a loving God who had inherited eternal life through belief in 
                the Son of God.
              </p>
              
              <p className="mb-6">
                Hilary hadn't been raised as a Christian, but he felt a wonder at the gift of life 
                and a desire to find out the meaning of that gift. He first discarded the approach 
                of many people around him, who believed the purpose of life was only to satisfy 
                desires. He knew he wasn't a beast grazing in a pasture. The philosophers agreed 
                with him that human beings should rise above desires and live a life of virtue, 
                but Hilary could see in his own heart that humans were meant for even more than 
                living a good life.
              </p>
              
              <p className="mb-6">
                His soul seemed to cry out that virtue alone wasn't enough to justify the enormous 
                gift of life. So Hilary went looking for the gift-giver. He was told many things 
                about the divine - that there were many gods, that God didn't exist but all creation 
                was the result of random acts of nature, that God existed but didn't really care for 
                his creation. One look in his own soul told him these images of the divine were wrong. 
                God had to be one because no creation could be as great as God. God had to be concerned 
                with God's creation - otherwise why create it?
              </p>
              
              <p className="mb-6">
                At that point, Hilary tells us, he "chanced upon" the Hebrew and Christian Scriptures. 
                When he read the verse where God tells Moses "I AM WHO I AM" (Exodus 3:14), Hilary 
                said, "I was frankly amazed at such a clear definition of God, which expressed the 
                incomprehensible knowledge of the divine nature in words most suited to human intelligence." 
                In the Psalms and the Prophets he found descriptions of God's power, concern, and beauty.
              </p>
              
              <p>
                Then he found the Gospels and read John's words: "In the beginning was the Word, and 
                the Word was with God, and the Word was God" (John 1:1). From John he learned of the 
                Son of God and how Jesus had been sent to bring eternal life to those who believed. 
                Finally his soul was at rest. After becoming a Christian, he was elected bishop of 
                Poitiers by the laity and clergy, despite being married with one daughter named Apra.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Hilary of Poitiers: Defender of the Trinity</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Defender Against Arianism</h3>
              <p className="mb-6">
                St. Hilary's most enduring legacy is his courageous defense of the Trinity against 
                the Arian heresy. When the Arians, who denied the divinity of Christ, gained power 
                with the support of Emperor Constantius, Hilary refused to support their condemnation 
                of Saint Athanasius. For this, he was exiled from Poitiers to the East in 356. 
                However, this exile became a blessing in disguise, as it gave him time to study and 
                write extensively about the Arian controversy.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Doctor of the Church</h3>
              <p className="mb-6">
                Hilary's theological writings, particularly "On the Trinity," established him as one 
                of the most important theologians of the early Church. He was proclaimed a Doctor of 
                the Church in 1851, recognizing his significant contributions to Christian doctrine. 
                His writings helped to clarify and defend the orthodox understanding of the Trinity 
                during a critical period in Church history.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Pioneer of Western Hymnody</h3>
              <p className="mb-6">
                During his exile in the East, Hilary heard hymns used by both Arians and orthodox 
                Christians as propaganda. These hymns were not based on Scripture as Western hymns 
                but were full of beliefs about God. Back at home, Hilary started writing hymns of 
                propaganda himself to spread the faith. His hymns are the first in the West with a 
                known writer, making him a pioneer of Western Christian hymnody.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Intellectual Conversion</h3>
              <p>
                Hilary's journey from paganism to Christianity through philosophical inquiry serves 
                as a model for intellectual conversion. His methodical approach to understanding God, 
                his rejection of false conceptions of the divine, and his ultimate discovery of truth 
                in Scripture demonstrate how reason and faith can work together to lead one to God. 
                His writings continue to inspire those who seek to understand the relationship between 
                philosophy and theology.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">January 13</div>
              <p className="text-gray-600">Feast of St. Hilary of Poitiers</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Hilary of Poitiers is celebrated on January 13th. This date 
                commemorates his life and work as a defender of the faith and his contributions 
                to Christian theology and doctrine.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Recognition as Doctor of the Church</h3>
              <p className="mb-6">
                Hilary was proclaimed a Doctor of the Church in 1851 by Pope Pius IX. This 
                recognition affirmed his significant contributions to Christian theology, particularly 
                his defense of the Trinity and his writings against Arianism. His title as Doctor 
                of the Church places him among the most important theologians and teachers in the 
                history of Christianity.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Modern Relevance</h3>
              <p>
                In today's world, St. Hilary's feast day serves as a reminder of the importance of 
                defending orthodox Christian doctrine and the value of intellectual inquiry in the 
                service of faith. It's a day to reflect on the relationship between reason and faith, 
                and to remember that truth must be defended with both courage and charity.
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
                  <li>• <strong>Theologians:</strong> Patron of theologians and scholars</li>
                  <li>• <strong>Converts:</strong> Patron of those converting to Christianity</li>
                  <li>• <strong>France:</strong> Patron of French theologians</li>
                  <li>• <strong>Poitiers:</strong> Patron of the diocese of Poitiers</li>
                  <li>• <strong>Hymn Writers:</strong> Patron of Christian hymn writers</li>
                  <li>• <strong>Intellectuals:</strong> Patron of intellectual seekers of truth</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Doctrinal Clarity:</strong> Help in understanding Church teaching</li>
                  <li>• <strong>Intellectual Conversion:</strong> Guidance for seekers of truth</li>
                  <li>• <strong>Defense of Faith:</strong> Courage to defend Christian doctrine</li>
                  <li>• <strong>Theological Study:</strong> Success in theological education</li>
                  <li>• <strong>Persecution:</strong> Strength during religious persecution</li>
                  <li>• <strong>Exile:</strong> Help for those forced to leave their homes</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Hilary of Poitiers</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Hilary of Poitiers, Doctor of the Church and defender of the 
                    Trinity, you who searched for truth with an open heart and found it in the 
                    revelation of God, intercede for us that we may have the courage to seek truth 
                    wherever it may lead us.
                  </p>
                  <p className="mb-4">
                    Help us to defend our faith with both wisdom and charity, to study the mysteries 
                    of God with reverence, and to use our intellectual gifts in service of the 
                    Church. Teach us to see adversity, even exile, as an opportunity to grow in 
                    knowledge and love of God.
                  </p>
                  <p>
                    May we, like you, find our true identity as children of God and use our talents 
                    to build up the Kingdom of Christ. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Theologians</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Hilary, patron of theologians, intercede for all those who study and teach 
                    the mysteries of our faith.
                  </p>
                  <p>
                    Help them to seek truth with humility, to defend orthodoxy with courage, and to 
                    communicate the Gospel with clarity and love. May their work bring glory to God 
                    and help others to know and love Him. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Hilary of Poitiers, Doctor of the Church, pray for us!"
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
            <Link href="/saints/st-athanasius" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Athanasius
                </h3>
                <p className="text-gray-700 text-sm">
                  Another Doctor of the Church who defended the Trinity against Arianism, whom Hilary supported.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-augustine" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Augustine
                </h3>
                <p className="text-gray-700 text-sm">
                  Another Doctor of the Church who, like Hilary, was a convert and great theologian.
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
                  Another Doctor of the Church and biblical scholar who, like Hilary, was a great writer and theologian.
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