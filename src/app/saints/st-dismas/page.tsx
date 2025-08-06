import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Dismas - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Dismas, the Good Thief crucified with Christ on Calvary who repented and was promised Paradise.',
  keywords: [
    'st dismas',
    'saint dismas',
    'st dismas good thief',
    'st dismas feast day',
    'st dismas patron saint',
    'catholic saints',
    'march 25 feast day',
    'biblical saints',
    'good thief'
  ],
  openGraph: {
    title: 'St. Dismas - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Dismas, the Good Thief crucified with Christ on Calvary.',
    url: 'https://catholicbibleonline.com/saints/st-dismas',
  },
  twitter: {
    title: 'St. Dismas - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Dismas, the Good Thief crucified with Christ on Calvary.',
  }
}

export default function StDismasPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">✝️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Dismas
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            The Good Thief, Biblical Saint, Model of Last-Minute Repentance
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Dismas</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">March 25</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">✝️</div>
              <div className="text-sm text-gray-600">Penitent</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Dismas</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Dismas is known as the "Good Thief" who was crucified alongside Jesus Christ on Calvary. 
                His story is one of the most powerful examples of God's mercy and the possibility of redemption 
                even at the very last moment of life. While little is known about his early life, his final 
                moments have become a testament to the boundless mercy of God.
              </p>
              
              <p className="mb-6">
                According to the Gospel accounts, two thieves were crucified with Jesus - one on His right 
                and one on His left. The other thief, known as Gestas, joined the crowd in mocking Jesus, 
                saying, "If you are the Christ, save yourself and us!" But Dismas, recognizing the innocence 
                and divinity of Jesus, rebuked his companion, saying, "Do you not fear God, since you are 
                under the same sentence of condemnation?"
              </p>
              
              <p className="mb-6">
                In a moment of profound humility and faith, Dismas acknowledged his own guilt and the 
                innocence of Jesus, saying, "And we indeed justly, for we are receiving the due reward 
                of our deeds; but this man has done nothing wrong." Then, turning to Jesus, he made his 
                famous plea: "Jesus, remember me when you come into your kingdom."
              </p>
              
              <p className="mb-6">
                Jesus' response to Dismas is one of the most beautiful promises in all of Scripture: 
                "Truly, I say to you, today you will be with me in Paradise." This promise, given to 
                a man who had lived a life of crime and was dying as a condemned criminal, demonstrates 
                that God's mercy is available to anyone who sincerely repents and turns to Him, no matter 
                how late in life.
              </p>
              
              <p>
                While the historical details of Dismas's life are scarce, a medieval tradition from the 
                Arabic Gospel of the Infancy tells a story of two thieves who encountered the Holy Family 
                on their flight to Egypt. According to this tradition, Dismas paid Gestas forty drachmas 
                to leave the Holy Family unharmed, and the Infant Jesus predicted that they would be 
                crucified with Him in Jerusalem, with Dismas accompanying Him to Paradise.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Dismas: Model of Last-Minute Repentance and God's Mercy</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Dismas's legacy is one of hope, mercy, and the power of last-minute repentance. His 
                story reminds us that it is never too late to turn to God, no matter how sinful our past 
                may have been. He exemplifies the truth that God's mercy is greater than any sin.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of True Repentance</h3>
              <p className="mb-6">
                Dismas shows us what true repentance looks like: acknowledging our guilt, recognizing 
                the innocence of others, and humbly asking for mercy. His repentance was not motivated 
                by fear of punishment, but by genuine recognition of Jesus's divinity and his own need 
                for salvation.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to God's Mercy</h3>
              <p className="mb-6">
                As the first person to enter Paradise with Jesus, Dismas became a living testament to 
                God's boundless mercy. His story gives hope to all sinners that God's love and forgiveness 
                are available to anyone who sincerely seeks them, regardless of their past actions or 
                the timing of their conversion.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Penitents</h3>
              <p>
                St. Dismas serves as a powerful patron for all who struggle with sin, especially those 
                who fear it may be too late for them. His example teaches us that God's mercy is not 
                limited by time, circumstances, or the gravity of our sins - it is limited only by our 
                willingness to ask for it.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">March 25</div>
              <p className="text-gray-600">Feast of St. Dismas, the Good Thief</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Dismas is celebrated on March 25th, commemorating the day when he 
                received the promise of Paradise from Jesus Christ. This day serves as a powerful 
                reminder of God's mercy and the possibility of redemption for all sinners, no matter 
                how late in life they may turn to Him.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this feast day, Catholics are encouraged to reflect on the sacrament of reconciliation 
                and the mercy of God. It's a time to pray for those who may be struggling with sin or 
                feel that it's too late for them to change. Many parishes emphasize the importance of 
                confession and God's willingness to forgive.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast of St. Dismas reminds us that God's mercy is boundless and that no one is 
                beyond redemption. It's an excellent time to pray for the intercession of this great 
                saint and to renew our commitment to seeking God's forgiveness and showing mercy to others.
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
                  <li>• <strong>Penitents:</strong> Patron of those seeking forgiveness and conversion</li>
                  <li>• <strong>Thieves:</strong> Protector of those who have committed theft</li>
                  <li>• <strong>Last-Minute Conversions:</strong> Patron of deathbed conversions</li>
                  <li>• <strong>Criminals:</strong> Guardian of those who have broken the law</li>
                  <li>• <strong>Prisoners:</strong> Patron of those in prison</li>
                  <li>• <strong>Death Row Inmates:</strong> Protector of those facing execution</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Repentance:</strong> Helper in turning away from sin</li>
                  <li>• <strong>God's Mercy:</strong> Patron of those seeking divine forgiveness</li>
                  <li>• <strong>Hope in Despair:</strong> Guardian of those who feel hopeless</li>
                  <li>• <strong>Late Conversions:</strong> Helper for those who convert late in life</li>
                  <li>• <strong>Forgiveness:</strong> Patron of those seeking to forgive others</li>
                  <li>• <strong>Salvation:</strong> Guardian of those concerned about their eternal fate</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Dismas</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Dismas, you who received the promise of Paradise from Jesus Himself, 
                    intercede for us that we may never despair of God's mercy, no matter how great 
                    our sins may be.
                  </p>
                  <p className="mb-4">
                    Help us to follow your example of true repentance and to recognize our need 
                    for God's forgiveness. May your story remind us that it is never too late to 
                    turn to God and that His mercy is boundless.
                  </p>
                  <p>
                    St. Dismas, pray for us, that we may be worthy of the promises of Christ. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Dismas, pray for us!"
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
            <Link href="/saints/st-mary-magdalene" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Mary Magdalene
                </h3>
                <p className="text-gray-700 text-sm">
                  First witness to the Resurrection and model of God's mercy, like St. Dismas a penitent saint.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-augustine" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Augustine
                </h3>
                <p className="text-gray-700 text-sm">
                  Doctor of the Church who converted from a sinful life, known for his famous prayer "Late have I loved you."
                </p>
              </div>
            </Link>

            <Link href="/saints/st-margaret-cortona" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Margaret of Cortona
                </h3>
                <p className="text-gray-700 text-sm">
                  Italian penitent who overcame a sinful past to become a model of repentance and charity.
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