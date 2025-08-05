import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Julia of Corsica - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Julia of Corsica, virgin martyr who refused to renounce her faith even under torture.',
  keywords: [
    'st julia corsica',
    'saint julia corsica',
    'st julia carthage',
    'julia biography',
    'julia feast day',
    'julia patron saint',
    'corsica saint',
    'may 23 feast day',
    'martyr saint',
    'torture victims'
  ],
  openGraph: {
    title: 'St. Julia of Corsica - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Julia of Corsica, virgin martyr who refused to renounce her faith even under torture.',
    url: 'https://catholicbibleonline.com/saints/st-julia-corsica',
  },
  twitter: {
    title: 'St. Julia of Corsica - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Julia of Corsica, virgin martyr who refused to renounce her faith even under torture.',
  }
}

export default function StJuliaCorsicaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌴</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Julia of Corsica
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Virgin Martyr, Patron of Corsica and Torture Victims
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Julia of Corsica</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">May 23</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌴</div>
              <div className="text-sm text-gray-600">Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Julia of Corsica</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Julia of Corsica, also known as St. Julia of Carthage or St. Julia of Nonza, was born to noble, aristocratic parents in Carthage. Over time, Carthage was subject to many barbaric attacks, weakening the city's defenses. During an attack by Gaiseric, King of the Vandals, Julia was taken from her family and sold into slavery. She was purchased by a pagan merchant of Syria, named Eusebius.
              </p>
              
              <p className="mb-6">
                Even during the most daunting chores, Julia never complained or felt sorry for herself. By being patient and cheerful, Julia was able to find comfort in her place in the world. Julia passionately loved God. When she was not working under her master's commands, Julia devoted her time toward praying and reading books of piety.
              </p>
              
              <p className="mb-6">
                Eusebius, charmed by Julia's commitment and devotion, felt it was right to bring her along with him during his journey to Gaul, where France now stands. Upon reaching the northern part of an island then called Corsica, he anchored his ship to join a pagan idolatrous festival. Julia was left on her own some distance away from the festival, because she refused to be defiled by the "superstitious ceremonies" she openly hated.
              </p>
              
              <p className="mb-6">
                The governor of the island, Felix, was a narrow-minded pagan who needed to have things his way. He noticed Julia outside of the festival and felt she was "insulting the gods." Eusebius informed Felix that Julia was a Christian and that despite his authority over her, she would not renounce her religion. Eusebius explained he could not bear parting with Julia because she was so diligent and faithful in her work for him.
              </p>
              
              <p className="mb-6">
                Felix would not accept this. He offered Eusebius four of his best female slaves in exchange for Julia. Eusebius replied, "No; all you are worth will not purchase her; for I would freely lose the most valuable thing I have in the world rather than be deprived of her." Not content, Felix prepared a banquet and waited until Eusebius became intoxicated and fell into a deep sleep to make his next move.
              </p>
              
              <p className="mb-6">
                Felix found Julia alone and unprotected. He tried to get her to sacrifice to his gods. He told her he would grant her freedom if she would obey. Julia refused to deny Christ. "My freedom is to serve Christ," she said, "whom I love every day in all the purity of my soul." Enraged by her response, Felix had Julia struck in the face and her hair torn from her head. Still, during her torture, Julia continued to confess her faith. Finally, he had her hanged on a cross until she died.
              </p>
              
              <p>
                Her body was carried off by monks of the isle of Gorgon, but in 763, the King of Lombardy, Desiderius, had her relics moved to Brescia, a city in the northern Italian region of Lombardy where the memory of St. Julia is celebrated with great devotion. St. Julia is often depicted with the palm of martyrdom and the crucifix. She is the patron saint of Corsica, Livorno, torture victims, and pathologies of the hand and the feet. Her feast day is celebrated on May 23.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Julia of Corsica: Model of Faith and Courage</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Unwavering Faith</h3>
              <p className="mb-6">
                St. Julia's greatest legacy is her unwavering faith in Christ, even in the face of extreme suffering and death. Her refusal to renounce her faith, even when offered freedom in exchange, demonstrates the depth of her love for God and her commitment to the truth. Her famous words, "My freedom is to serve Christ," have inspired countless Christians throughout the centuries to remain faithful to their beliefs regardless of the cost.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Christian Virtue in Slavery</h3>
              <p className="mb-6">
                St. Julia's life as a slave demonstrates how Christian virtues can be practiced even in the most difficult circumstances. Her patience, cheerfulness, and devotion to prayer while performing menial tasks show that holiness is not dependent on one's social status or circumstances. Her example teaches us that we can serve God faithfully wherever we find ourselves in life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of the Persecuted</h3>
              <p className="mb-6">
                As the patron saint of torture victims, St. Julia serves as a powerful intercessor for all those who suffer persecution for their faith. Her own experience of torture and martyrdom makes her particularly close to those who endure similar trials. Her story reminds us that God's grace is sufficient even in the most extreme circumstances.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Cultural and Regional Patronage</h3>
              <p>
                St. Julia's connection to Corsica and her relics' journey to Brescia have made her an important figure in the religious and cultural life of these regions. Her feast day is celebrated with great devotion in northern Italy, and she remains a beloved patron of Corsica, representing the island's Christian heritage and the strength of faith in the face of adversity.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">May 23</div>
              <p className="text-gray-600">Feast of St. Julia of Corsica, Virgin and Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Julia of Corsica is celebrated on May 23rd, commemorating her martyrdom and her unwavering faith in Christ. This date falls during the Easter season, a fitting time to remember her sacrifice and the victory of faith over persecution.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Regional Celebrations</h3>
              <p className="mb-6">
                In Corsica and northern Italy, especially in Brescia where her relics are venerated, St. Julia's feast day is celebrated with special Masses, processions, and devotions. The day is marked by prayers for the persecuted and for those suffering from physical ailments, particularly of the hands and feet.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for those suffering persecution for their faith, for torture victims, and for those with physical ailments. Many people also pray for the grace to remain faithful to Christ in difficult circumstances, following St. Julia's example of courage and devotion.
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
                  <li>• <strong>Corsica:</strong> The island where she was martyred</li>
                  <li>• <strong>Livorno:</strong> Italian city under her patronage</li>
                  <li>• <strong>Torture Victims:</strong> Those suffering persecution</li>
                  <li>• <strong>Hand and Foot Ailments:</strong> Pathologies of extremities</li>
                  <li>• <strong>Slaves:</strong> Those in servitude</li>
                  <li>• <strong>Persecuted Christians:</strong> Those suffering for their faith</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Faith Under Persecution:</strong> Remaining faithful in trials</li>
                  <li>• <strong>Christian Virtue:</strong> Practicing virtue in difficult circumstances</li>
                  <li>• <strong>Martyrdom:</strong> Dying for the faith</li>
                  <li>• <strong>Physical Suffering:</strong> Enduring pain with faith</li>
                  <li>• <strong>Refusal to Compromise:</strong> Standing firm in beliefs</li>
                  <li>• <strong>Witness to Truth:</strong> Proclaiming Christ boldly</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Julia of Corsica</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Julia, who remained faithful to Christ even in slavery and under torture, help us to maintain our faith in all circumstances, no matter how difficult they may be.
                  </p>
                  <p className="mb-4">
                    Teach us to find joy and peace in serving God, even when our tasks seem menial or our situation seems hopeless. May we, like you, proclaim that our true freedom is to serve Christ.
                  </p>
                  <p>
                    Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Torture Victims</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Julia, patron of torture victims, intercede for all those who suffer persecution and torture for their faith or for any reason.
                  </p>
                  <p>
                    Help them to find strength in Christ and to know that their suffering is not in vain. May they experience God's comfort and peace even in their darkest moments. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Persecuted Christians</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Julia, who refused to renounce Christ even when offered freedom, pray for all Christians who face persecution today.
                  </p>
                  <p>
                    Give them the courage to remain faithful to their beliefs and the strength to endure whatever trials they may face. May their witness bring others to Christ. Amen."
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
            <Link href="/saints/st-perpetua" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Perpetua
                </h3>
                <p className="text-gray-700 text-sm">
                  Another North African martyr who refused to renounce her faith.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-felicity" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Felicity
                </h3>
                <p className="text-gray-700 text-sm">
                  Companion of St. Perpetua, also martyred in North Africa.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-cyprian" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Cyprian
                </h3>
                <p className="text-gray-700 text-sm">
                  Bishop of Carthage and martyr, from the same region as St. Julia.
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