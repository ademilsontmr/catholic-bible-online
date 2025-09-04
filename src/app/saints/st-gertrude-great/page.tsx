import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Gertrude the Great - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Gertrude the Great, the Benedictine mystic and theologian known for her devotion to the Sacred Heart of Jesus.',
  keywords: [
    'st gertrude the great',
    'saint gertrude',
    'st gertrude biography',
    'st gertrude feast day',
    'st gertrude patron saint',
    'benedictine mystic',
    'sacred heart devotion',
    'november 16 feast day',
    'gertrude of helfta'
  ],
  openGraph: {
    title: 'St. Gertrude the Great - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Gertrude the Great, the Benedictine mystic and theologian known for her devotion to the Sacred Heart of Jesus.',
    url: 'https://catholicbibleonline.com/saints/st-gertrude-great',
  },
  twitter: {
    title: 'St. Gertrude the Great - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Gertrude the Great, the Benedictine mystic and theologian known for her devotion to the Sacred Heart of Jesus.',
  }
}

export default function StGertrudeGreatPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💝</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Gertrude the Great
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Benedictine Mystic, Theologian, Devotee of the Sacred Heart
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Gertrude the Great</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">November 16</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💝</div>
              <div className="text-sm text-gray-600">Mystic</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Gertrude the Great</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Gertrude the Great, or St. Gertrude of Helfta, was born on January 6, 1256 in Germany. She eventually chose to follow the Lord by pursuing a vocation as a Benedictine Nun. Her deep relationship with the Lord in prayer led to her being hailed as a mystic. She was also regarded as a great theologian.
              </p>
              
              <p className="mb-6">
                Although little is known about Gertrude's childhood, it is widely accepted that at just four-years-old, she was enrolled in the <strong>Cistercian monastery school of Helfta</strong> in Saxony, under the governance of Abbess Gertrude of Hackerborn. The Cistercian movement was an effort to bring the Benedictine religious community back to a stricter and more faithful adherence to the original "Rule" or way of life encouraged by St Benedict.
              </p>
              
              <p className="mb-6">
                Some sources speculate that Gertrude's parents offered their child as an oblate, a lay person especially dedicated to God or to God's service, while others believe she may have entered the monastery school as an orphan. St. Mechtilde, the younger sister of the Abbess Gertrude, took care of young Gertrude. Gertrude and Mechtilde had a strong bond that only grew deeper with time, allowing Mechtilde to have a great influence over Gertrude.
              </p>
              
              <p className="mb-6">
                Gertrude, known for being charming and able to win people over, entered the Benedictine Order at Helfta and became a nun. She devoted herself to her studies, and received an education in many different subjects. Gertrude was both fluent in Latin and very familiar with scripture and works from the Fathers of the Church, including Augustine.
              </p>
              
              <p className="mb-6">
                In 1281, 25-year-old Gertrude experienced her first series of visions that would continue until the day she passed away. Her visions altered her life and she saw this moment as her new birth. Her priorities turned away from secular teachings and focuses more on studying Scripture and theology. Her life became full with this awakening and she was an enthusiastic student, writing for the spiritual benefit of others.
              </p>
              
              <p className="mb-6">
                Gertrude once had a vision on the feast of John the Evangelist, described in Gertrude's writings. As she rested her head near Jesus' wound on his side, she could hear the beating of his heart. She asked St. John if he, too, felt the beating of Jesus' Divine Heart on the night of the Last Supper. He told her he was saving this revelation for a time when the world needed it to rekindle its love.
              </p>
              
              <p className="mb-6">
                She went on to become one of the great mystics of the 13th century. Along with St. Mechtilde, she practiced what is known as "nuptial mysticism," seeing herself as the bride of Christ. She embraced charity for both rich and poor, she was a simple woman with a deep solidarity with those not yet ready for the beatific vision, who are still being purified in the state of repose known as purgatory.
              </p>
              
              <p className="mb-6">
                Gertrude assisted at the deathbeds and mourned for the loss of both Abbess Gertrude of Hackeborn in 1291 and her dearly loved St. Mechtilde in 1298. Gertrude's health began to deteriorate, but she continued to only show her love for the Lord.
              </p>
              
              <p className="mb-6">
                "Until the age of 25, I was a blind and insane woman... but you, Jesus, deigned to grant me the priceless familiarity of your friendship by opening to me in every way that most noble casket of your divinity, which is your divine Heart, and offering me in great abundance all your treasures contained in it".
              </p>
              
              <p>
                On November 17, 1301, Gertrude passed away a virgin and joined her Bridegroom forever.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Gertrude the Great: Mystic and Theologian</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Literary Legacy</h3>
              <p className="mb-6">
                Throughout her life, Gertrude produced numerous writings, although only a few still exists today. One of her longest surviving works is <strong>Legatus Memorialis Abundantiae Divinae Pietatis</strong> (The Herald of Divine Love). Her other standing works include her collection of Spiritual Exercises and Preces Gertrudianae (Gertrudian Prayers).
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotion to the Sacred Heart</h3>
              <p className="mb-6">
                St. Gertrude was one of the first to promote devotion to the Sacred Heart of Jesus. Her mystical experiences with the Divine Heart helped lay the foundation for this important devotion that would later be spread by St. Margaret Mary Alacoque. Her writings contain some of the earliest detailed descriptions of the Sacred Heart.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Theological Contributions</h3>
              <p className="mb-6">
                As a theologian, Gertrude made significant contributions to the understanding of mystical theology and the spiritual life. Her works combine deep theological insights with practical spiritual guidance, making her writings valuable for both scholars and ordinary believers seeking to deepen their relationship with God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer for Souls in Purgatory</h3>
              <p>
                St. Gertrude is particularly known for her devotion to the souls in purgatory. She had a deep solidarity with those being purified and developed special prayers for their relief. Her example teaches us the importance of praying for the dead and the power of intercessory prayer.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">November 16</div>
              <p className="text-gray-600">Feast of St. Gertrude the Great, Virgin and Mystic</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Gertrude the Great is celebrated on November 16th, commemorating her life of mystical union with Christ and her contributions to the Church's spiritual tradition. Although she was never formally canonized, Rome approved a liturgical office of prayer and readings in her honor.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">The Title "the Great"</h3>
              <p className="mb-6">
                To separate her from Abbess Gertrude of Hackeborn, Pope Benedict XIV gave her the title, "the Great," making her the only woman saint to be called "the Great." This title recognizes her significant contributions to theology and mysticism.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the souls in purgatory, as St. Gertrude is particularly associated with this devotion. It's also a time to reflect on the Sacred Heart of Jesus and to seek deeper mystical union with Christ through prayer and contemplation.
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
                  <li>• <strong>West Indies:</strong> Patroness of the West Indies</li>
                  <li>• <strong>Souls in Purgatory:</strong> Intercessor for the dead</li>
                  <li>• <strong>Mystics:</strong> Patron of those seeking mystical union</li>
                  <li>• <strong>Theologians:</strong> Patron of theological study</li>
                  <li>• <strong>Benedictine Nuns:</strong> Model for religious women</li>
                  <li>• <strong>Sacred Heart Devotion:</strong> Pioneer of this devotion</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Mystical Prayer:</strong> Those seeking deeper prayer life</li>
                  <li>• <strong>Theological Study:</strong> Students of theology</li>
                  <li>• <strong>Religious Vocation:</strong> Those discerning religious life</li>
                  <li>• <strong>Sacred Heart Devotion:</strong> Practitioners of this devotion</li>
                  <li>• <strong>Prayer for the Dead:</strong> Intercession for souls in purgatory</li>
                  <li>• <strong>Spiritual Writing:</strong> Those who write for spiritual benefit</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Gertrude the Great</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O God, who prepared a delightful dwelling for yourself in the heart of the Virgin Saint Gertrude, graciously bring light, through her intercession, to the darkness of our hearts, that we may joyfully experience this indwelling of yours and delight in the consolation of your presence.
                  </p>
                  <p className="mb-4">
                    Help us to follow her example of mystical union with your Sacred Heart and to grow in love for you through prayer and contemplation. May we, like her, find our true joy in your divine friendship and share your treasures with others.
                  </p>
                  <p>
                    Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Souls in Purgatory</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Eternal Father, I offer you the most precious blood of your Divine Son, Jesus, in union with the Masses said throughout the world today, for all the holy souls in purgatory, for sinners everywhere, for sinners in the universal church, those in my own home and within my family. Amen."
                  </p>
                  <p>
                    (This prayer, attributed to St. Gertrude, is said to release 1,000 souls from purgatory each time it is prayed.)
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Sacred Heart Devotion</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Sacred Heart of Jesus, fountain of eternal life, your Heart is a glowing furnace of Love. You are my refuge and my sanctuary. O my adorable and loving Savior, consume my heart with that burning fire with which yours always burns.
                  </p>
                  <p>
                    Pour down on my soul those graces which flow from your love. Let my heart be so united with yours, that our wills may be one, and mine in all things be conformed to yours. May your divine will be the rule and model of all my desires and actions. Amen."
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
            <Link href="/saints/st-mechtilde" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Mystic Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Mechtilde
                </h3>
                <p className="text-gray-700 text-sm">
                  Benedictine mystic and spiritual companion of St. Gertrude, known for her mystical writings.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-margaret-mary" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Sacred Heart Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Margaret Mary
                </h3>
                <p className="text-gray-700 text-sm">
                  Visionary of the Sacred Heart of Jesus, who spread devotion to the Sacred Heart.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-teresa-avila" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Teresa of Avila
                </h3>
                <p className="text-gray-700 text-sm">
                  Doctor of the Church and great mystic, known for her writings on prayer and contemplation.
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