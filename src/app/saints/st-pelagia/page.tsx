import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Pelagia (Margaret) - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Pelagia (Margaret), former actress of Antioch who converted and became a hermitess in Jerusalem.',
  keywords: [
    'st pelagia',
    'saint pelagia',
    'st margaret',
    'saint margaret',
    'st pelagia biography',
    'st pelagia feast day',
    'st pelagia patron saint',
    'catholic saints',
    'october 8 feast day',
    'virgin saints',
    'antioch actress'
  ],
  openGraph: {
    title: 'St. Pelagia (Margaret) - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Pelagia (Margaret), former actress of Antioch who converted and became a hermitess.',
    url: 'https://catholicbibleonline.com/saints/st-pelagia',
  },
  twitter: {
    title: 'St. Pelagia (Margaret) - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Pelagia (Margaret), former actress of Antioch who converted and became a hermitess.',
  }
}

export default function StPelagiaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌸</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Pelagia (Margaret)
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Converted Actress of Antioch, Hermitess of Jerusalem, Model of Repentance
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Pelagia (Margaret)</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 8</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌸</div>
              <div className="text-sm text-gray-600">Virgin</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Pelagia (Margaret)</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Pelagia, more often called Margaret on account of the magnificence of the pearls 
                for which she had so often sold herself, was an actress of Antioch, equally 
                celebrated for her beauty, her wealth, and the disorder of her life. She lived 
                in a time when Antioch was one of the most important cities of the Roman Empire, 
                a center of culture, commerce, and entertainment.
              </p>
              
              <p className="mb-6">
                As a prominent actress, Pelagia enjoyed great wealth and fame, but her life was 
                marked by moral disorder and spiritual emptiness. Her beauty and talent brought 
                her material success, but left her soul searching for something deeper and more 
                meaningful.
              </p>
              
              <p className="mb-6">
                During a synod at Antioch, Pelagia passed Bishop St. Nonnus of Edessa, who was 
                struck by her beauty. However, instead of being drawn to her physical appearance, 
                St. Nonnus was moved to compassion for her soul. He prayed for her conversion, 
                recognizing that behind her outward beauty lay a soul in need of God's mercy.
              </p>
              
              <p className="mb-6">
                The next day, Pelagia went to hear St. Nonnus preach, perhaps out of curiosity 
                or perhaps drawn by some inner prompting. His sermon touched her heart deeply, 
                and she was so moved by his words about God's mercy and the possibility of 
                redemption that she asked him to baptize her.
              </p>
              
              <p className="mb-6">
                St. Nonnus, recognizing the sincerity of her conversion, baptized her. This 
                marked the beginning of a radical transformation in Pelagia's life. She gave 
                all her wealth to St. Nonnus to aid the poor, demonstrating her complete 
                detachment from the material possessions that had once defined her.
              </p>
              
              <p className="mb-6">
                To protect herself from the temptations of her former life and to begin her 
                new life in Christ, Pelagia left Antioch dressed in men's clothing. She 
                traveled to Jerusalem, where she became a hermitess in a cave on the Mount 
                of Olives.
              </p>
              
              <p>
                In her new life as a hermitess, Pelagia lived in great austerity, performing 
                penances and dedicating herself entirely to prayer and contemplation. She became 
                known as "the beardless monk" because of her disguise and her ascetic lifestyle. 
                Her true identity as a woman was only discovered at her death, revealing the 
                extraordinary sacrifice she had made for her faith.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Pelagia (Margaret): Model of Conversion and Repentance</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Power of Conversion</h3>
              <p className="mb-6">
                St. Pelagia's story demonstrates the incredible power of God's grace to transform 
                even the most unlikely souls. Her conversion from a life of moral disorder to one 
                of deep holiness shows that no one is beyond the reach of God's mercy and love. 
                Her example continues to inspire those who feel trapped in sinful patterns or 
                believe they are beyond redemption.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Radical Detachment</h3>
              <p className="mb-6">
                Pelagia's decision to give away all her wealth and leave behind her former life 
                of luxury and fame demonstrates the radical detachment that true conversion 
                requires. Her willingness to abandon everything for the sake of Christ serves 
                as a powerful example of what it means to "leave everything and follow Him."
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Hidden Sanctity</h3>
              <p className="mb-6">
                By living as a hermitess disguised as a man, Pelagia embraced a life of hidden 
                sanctity. Her choice to live in obscurity and austerity, known only as "the 
                beardless monk," shows her desire to serve God purely for His sake, without 
                seeking recognition or praise from others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Repentance</h3>
              <p>
                St. Pelagia has become a powerful patroness for those seeking repentance and 
                conversion. Her story reminds us that God's mercy is always available to those 
                who sincerely seek it, and that true repentance involves not only turning away 
                from sin but also embracing a new way of life in Christ.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">October 8</div>
              <p className="text-gray-600">Memorial of St. Pelagia (Margaret), Virgin</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Pelagia (Margaret) is celebrated on October 8th. This memorial 
                honors her conversion, her life of penance and prayer, and her witness to the 
                power of God's mercy and grace.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                While the story of St. Pelagia as told is considered a pious fiction, it is 
                based on the historical reality of a young girl who did exist and suffer 
                martyrdom at Antioch in the fourth century. The legend that developed around 
                her story gave rise to a whole set of similar stories under different names, 
                demonstrating the power of her example to inspire others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On her feast day, Catholics pray for her intercession, especially for those 
                seeking conversion and repentance, for those struggling with moral disorders, 
                for actresses and performers, and for the grace to embrace radical detachment 
                from worldly pleasures for the sake of Christ.
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
                  <li>• <strong>Conversion and Repentance:</strong> Patroness of those seeking to change their lives</li>
                  <li>• <strong>Actresses and Performers:</strong> Helper for those in the entertainment industry</li>
                  <li>• <strong>Hermits and Recluses:</strong> Patroness of those living in solitude</li>
                  <li>• <strong>Antioch:</strong> One of the patron saints of Antioch</li>
                  <li>• <strong>Penitents:</strong> Helper for those doing penance</li>
                  <li>• <strong>Hidden Sanctity:</strong> Patroness of those serving God in obscurity</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Moral Conversion:</strong> Helper for those leaving sinful lifestyles</li>
                  <li>• <strong>Radical Detachment:</strong> Patroness of those renouncing worldly pleasures</li>
                  <li>• <strong>Spiritual Transformation:</strong> Helper for those seeking deeper holiness</li>
                  <li>• <strong>Protection from Temptation:</strong> Guardian against returning to sin</li>
                  <li>• <strong>Hidden Ministry:</strong> Patroness of those serving God secretly</li>
                  <li>• <strong>Second Chances:</strong> Helper for those seeking redemption</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Pelagia (Margaret)</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Pelagia (Margaret), who experienced the transforming power of God's 
                    mercy and grace, pray for us who call upon your intercession. Help us to 
                    recognize that no one is beyond the reach of God's love and forgiveness.
                  </p>
                  <p className="mb-4">
                    Teach us to embrace radical conversion and to be willing to leave behind 
                    everything that separates us from God. Help us to find the courage to 
                    begin anew in Christ, no matter how difficult the path may be.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace to 
                    turn away from sin and embrace a life of holiness and prayer. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Conversion</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Pelagia (Margaret), who was so moved by the preaching of St. Nonnus 
                    that you asked for baptism, intercede for all those who are seeking conversion 
                    and repentance. Help them to hear God's call in their hearts and to respond 
                    with courage and faith.
                  </p>
                  <p>
                    May they, like you, find the strength to leave behind their former lives 
                    and embrace the new life that Christ offers. Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Hidden Sanctity</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Pelagia (Margaret), who lived as 'the beardless monk' in hidden 
                    sanctity, help us to serve God purely for His sake, without seeking 
                    recognition or praise from others.
                  </p>
                  <p>
                    Teach us to find joy in serving God in obscurity and to embrace the 
                    hidden life of prayer and penance. Through Christ our Lord. Amen."
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
                  Converted sinner who became a devoted follower of Christ, first witness of the Resurrection.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-margaret-antioch" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Virgin Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Margaret of Antioch
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and one of the Fourteen Holy Helpers, patroness of childbirth.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joseph" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Marian Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joseph
                </h3>
                <p className="text-gray-700 text-sm">
                  The foster father of Jesus and husband of Mary, patron of fathers and workers.
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