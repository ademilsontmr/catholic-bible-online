import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Matthias - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Matthias, the apostle chosen to replace Judas and complete the twelve apostles.',
  keywords: [
    'st matthias',
    'saint matthias',
    'apostle matthias',
    'st matthias biography',
    'st matthias feast day',
    'st matthias patron saint',
    'twelve apostles',
    'replacement for judas',
    'catholic saints',
    'may 14 feast day'
  ],
  openGraph: {
    title: 'St. Matthias - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Matthias, the apostle chosen to replace Judas and complete the twelve apostles.',
    url: 'https://catholicbibleonline.com/saints/st-matthias',
  },
  twitter: {
    title: 'St. Matthias - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Matthias, the apostle chosen to replace Judas and complete the twelve apostles.',
  }
}

export default function StMatthiasPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Matthias
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Apostle, Witness to the Resurrection, Chosen to Complete the Twelve
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Matthias</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">May 14</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Apostle</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Matthias</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The first act of the apostles after the Ascension of Jesus was to find a replacement for Judas. With all the questions, 
                doubts, and dangers facing them, they chose to focus their attention on finding a twelfth apostle. Twelve was a very 
                important number to the Chosen People: twelve was the number of the twelve tribes of Israel. If the new Israel was 
                to come from the disciples of Jesus, a twelfth apostle was needed.
              </p>
              
              <p className="mb-6">
                Peter had one criterion: that, like Andrew, James, John, and himself, the new apostle be someone who had been a disciple 
                from the very beginning, from his baptism by John until the Ascension. The reason for this was simple - the new apostle 
                would must become a witness to Jesus' resurrection. He must have followed Jesus before anyone knew him, stayed with him 
                when he made enemies, and believed in him when he spoke of the cross and of eating his body.
              </p>
              
              <p className="mb-6">
                Two men fit this description -- Matthias and Joseph called Barsabbas. They knew that both these men had been with them 
                and with Jesus through his whole ministry. But which one had the heart to become a witness to his resurrection? 
                The apostles knew that only the Lord could know what was in the heart of each. They cast lots in order to discover 
                God's will and Matthias was chosen.
              </p>
              
              <p>
                That's the first we hear of Matthias in Scripture, and the last. Legends like the Acts of Andrew and Matthias testify 
                to Matthias' enthusiastic embrace of all that being an apostle meant including evangelization, persecution, and death 
                in the service of the Lord.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Matthias: The Chosen Apostle</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                Clement of Alexandria says that Matthias, like all the other apostles, was not chosen by Jesus for what he already was, 
                but for what Jesus foresaw he would become. He was elected not because he was worthy but because he would become worthy. 
                Jesus chooses all of us in the same way.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Divine Election</h3>
              <p className="mb-6">
                St. Matthias represents the mystery of divine election and the completion of God's plan. His selection through the 
                casting of lots shows that God's will can be discerned through prayer and trust in divine providence, even when 
                human reasoning cannot determine the best choice.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to the Resurrection</h3>
              <p className="mb-6">
                As one who had been with Jesus from the beginning of his ministry, Matthias was uniquely qualified to be a witness 
                to the resurrection. His life reminds us that true apostleship requires not just knowledge of Jesus, but intimate 
                experience of his life, death, and resurrection.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Symbol of Completeness</h3>
              <p>
                Matthias completed the twelve apostles, symbolizing the completeness of the new Israel. His addition to the apostolic 
                college shows that God's plan is never incomplete, and that He always provides what is needed for the fulfillment 
                of His divine purposes.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">May 14</div>
              <p className="text-gray-600">Feast of St. Matthias, Apostle</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Matthias is celebrated on May 14th, a date that falls during the Easter season, fitting for one who was chosen 
                to be a witness to the resurrection. This feast day reminds us of the importance of apostolic witness and the 
                call to evangelization.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics reflect on their own call to be witnesses to Christ and to complete whatever mission 
                God has given them. It's also a day to pray for the grace to be chosen by God for His purposes, even when 
                we feel unworthy or like latecomers.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the grace to become worthy of God's call, to be witnesses to 
                the resurrection, and to embrace our role in completing God's plan for the Church.
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
                  <li>• <strong>Apostolic Witness:</strong> Patron of those called to witness to Christ</li>
                  <li>• <strong>Divine Election:</strong> Patron of those chosen by God</li>
                  <li>• <strong>Completion of Missions:</strong> Helper for finishing God's work</li>
                  <li>• <strong>Latecomers:</strong> Patron of those who feel like afterthoughts</li>
                  <li>• <strong>Community Integration:</strong> Helper for welcoming newcomers</li>
                  <li>• <strong>Resurrection Witnesses:</strong> Patron of those who testify to new life</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Feeling Unworthy:</strong> Helper for those who doubt their calling</li>
                  <li>• <strong>Group Acceptance:</strong> Patron of those seeking to belong</li>
                  <li>• <strong>Divine Providence:</strong> Helper for trusting God's choices</li>
                  <li>• <strong>Evangelization:</strong> Patron of spreading the Gospel</li>
                  <li>• <strong>Perseverance:</strong> Helper for staying faithful through difficulties</li>
                  <li>• <strong>Completing God's Plan:</strong> Patron of fulfilling divine purposes</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Matthias</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Saint Matthias, pray that we may become worthy witnesses to the resurrection of Jesus in the way we live 
                    the eternal life we have right now. Help us to embrace our calling, even when we feel unworthy or like latecomers, 
                    and to trust in God's divine election for our lives.
                  </p>
                  <p>
                    Just as you were chosen to complete the twelve apostles, help us to complete whatever mission God has given us, 
                    and to be faithful witnesses to Christ's resurrection in our daily lives. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Matthias, pray for us!"
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
            <Link href="/saints/st-peter" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peter
                </h3>
                <p className="text-gray-700 text-sm">
                  Prince of the Apostles who led the selection of Matthias to replace Judas among the twelve.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-andrew" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Andrew
                </h3>
                <p className="text-gray-700 text-sm">
                  One of the original apostles who was present when Matthias was chosen to complete the twelve.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John
                </h3>
                <p className="text-gray-700 text-sm">
                  Beloved apostle who witnessed the selection of Matthias and the completion of the apostolic college.
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