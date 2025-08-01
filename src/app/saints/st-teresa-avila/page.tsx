import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Teresa of Avila - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Teresa of Avila, Doctor of the Church and founder of the Discalced Carmelites.',
  keywords: [
    'st teresa of avila',
    'saint teresa avila',
    'doctor of the church',
    'october 15 feast day',
    'catholic saints',
    'discalced carmelites',
    'mystic saints'
  ],
  openGraph: {
    title: 'St. Teresa of Avila - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Teresa of Avila, Doctor of the Church and founder of the Discalced Carmelites.',
    url: 'https://catholicbibleonline.com/saints/st-teresa-avila',
  },
  twitter: {
    title: 'St. Teresa of Avila - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Teresa of Avila, Doctor of the Church and founder of the Discalced Carmelites.',
  }
}

export default function StTeresaAvilaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💜</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Teresa of Avila
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Doctor of the Church and Founder of the Discalced Carmelites
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Teresa of Avila</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 15</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💜</div>
              <div className="text-sm text-gray-600">Doctor Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Teresa of Avila</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Teresa of Avila was born Teresa Ali Fatim Corella Sanchez de Capeda y 
                Ahumada in Avila, Spain. Less than twenty years before Teresa was born 
                in 1515, Columbus opened up the Western Hemisphere to European colonization. 
                Two years after she was born, Luther started the Protestant Reformation. 
                Out of all of this change came Teresa pointing the way from outer turmoil 
                to inner peace. Teresa's father was rigidly honest and pious, but he may 
                have carried his strictness to extremes. Teresa's mother loved romance 
                novels but because her husband objected to these fanciful books, she hid 
                the books from him. This put Teresa in the middle -- especially since she 
                liked the romances too. Her father told her never to lie but her mother 
                told her not to tell her father. Later she said she was always afraid that 
                no matter what she did she was going to do everything wrong.
              </p>
              
              <p className="mb-6">
                When she was seven-years-old, she convinced her older brother that they 
                should "go off to the land of the Moors and beg them, out of love of God, 
                to cut off our heads there." They got as far as the road from the city 
                before an uncle found them and brought them back. After this incident she 
                led a fairly ordinary life, though she was convinced that she was a horrible 
                sinner. As a teenager, she cared only about boys, clothes, flirting, and 
                rebelling. When she was 16, her father decided she was out of control and 
                sent her to a convent. At first she hated it but eventually she began to 
                enjoy it -- partly because of her growing love for God, and partly because 
                the convent was a lot less strict than her father.
              </p>
              
              <p className="mb-6">
                Once installed at the Carmelite convent permanently, she started to learn 
                and practice mental prayer, in which she "tried as hard as I could to keep 
                Jesus Christ present within me....My imagination is so dull that I had no 
                talent for imagining or coming up with great theological thoughts." Teresa 
                prayed this way off and on for eighteen years without feeling that she was 
                getting results. Part of the reason for her trouble was that the convent 
                was not the safe place she assumed it would be. Many women who had no place 
                else to go wound up at the convent, whether they had vocations or not. 
                They were encouraged to stay away from the convents for long period of time 
                to cut down on expenses. Nuns would arrange their veils attractively and 
                wear jewelry. Prestige depended not on piety but on money.
              </p>
              
              <p className="mb-6">
                Then Teresa fell ill with malaria. When she had a seizure, people were so 
                sure she was dead that after she woke up four days later she learned they 
                had dug a grave for her. Afterwards she was paralyzed for three years and 
                was never completely well. Yet instead of helping her spiritually, her 
                sickness became an excuse to stop her prayer completely. For years she 
                hardly prayed at all "under the guise of humility." She thought as a wicked 
                sinner she didn't deserve to get favors from God. But turning away from 
                prayer was like "a baby turning from its mother's breasts, what can be 
                expected but death?"
              </p>
              
              <p>
                When she was 41, a priest convinced her to go back to her prayer, but she 
                still found it difficult. Yet her experience gives us wonderful descriptions 
                of mental prayer: "For mental prayer in my opinion is nothing else than an 
                intimate sharing between friends; it means taking time frequently to be 
                alone with him who we know loves us. The important thing is not to think 
                much but to love much and so do that which best stirs you to love. Love is 
                not great delight but desire to please God in everything." At the age of 43, 
                she became determined to found a new convent that went back to the basics 
                of a contemplative order: a simple life of poverty devoted to prayer. She 
                braved burning sun, ice and snow, thieves, and rat-infested inns to found 
                more convents. She died on October 4, 1582, at the age of 67. She is the 
                founder of the Discalced Carmelites and was declared a Doctor of the Church 
                in 1970 for her writing and teaching on prayer.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Teresa of Avila: Doctor of the Church</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Doctor of the Church</h3>
              <p className="mb-6">
                St. Teresa's greatest legacy is her role as a Doctor of the Church, a 
                title she shares with only one other woman, St. Catherine of Siena. Her 
                writings on prayer and the spiritual life have influenced countless 
                Christians throughout the centuries. Her most famous works include "The 
                Interior Castle," "The Way of Perfection," and her autobiography "The Life 
                of Teresa of Jesus." These writings provide profound insights into the 
                nature of prayer, the stages of spiritual development, and the mystical 
                experiences that can occur in the life of prayer. Her teachings continue 
                to guide spiritual seekers today.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Founder of the Discalced Carmelites</h3>
              <p className="mb-6">
                St. Teresa's reform of the Carmelite order led to the foundation of the 
                Discalced (Barefoot) Carmelites, a religious order that emphasizes poverty, 
                prayer, and contemplation. Despite facing opposition from religious authorities, 
                civil authorities, and even the Inquisition, Teresa persevered in her mission 
                to restore the original spirit of the Carmelite order. She founded 17 
                convents throughout Spain, establishing a new way of religious life that 
                combined deep prayer with practical service. Her reform movement spread 
                throughout Europe and continues to influence religious life today.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Prayer and Contemplation</h3>
              <p>
                St. Teresa's personal journey from a worldly life to deep mystical union 
                with God serves as a powerful example for all Christians. Her descriptions 
                of the stages of prayer - from vocal prayer to mental prayer, from the 
                prayer of quiet to the prayer of union - provide a roadmap for spiritual 
                growth. Her famous quote, "Prayer is an act of love, words are not needed. 
                Even if sickness distracts from thoughts, all that is needed is the will 
                to love," captures the essence of her teaching on prayer. Teresa's life 
                demonstrates that holiness is not about being perfect but about being 
                faithful to God's call, even in the midst of difficulties and opposition.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">October 15</div>
              <p className="text-gray-600">Feast of St. Teresa of Avila</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Teresa of Avila is celebrated on October 15th, the 
                traditional date commemorating her death in 1582. This feast is celebrated 
                as a memorial in the Roman Catholic Church, and it is a particularly 
                important day for Carmelites and those devoted to contemplative prayer. 
                The feast falls during the autumn season, a time of harvest and reflection, 
                which is fitting for a saint whose life was dedicated to harvesting the 
                fruits of prayer and contemplation. St. Teresa's feast day is also 
                celebrated by the Discalced Carmelites as a solemnity.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Teresa's feast day, many people participate in special devotions 
                and prayers to seek her intercession for spiritual growth and guidance 
                in prayer. Churches often hold special Masses and prayer services focused 
                on contemplative prayer. Many people read her writings, particularly "The 
                Interior Castle" or "The Way of Perfection," as a way to honor her memory 
                and learn from her wisdom. The day is marked by prayers for the gift of 
                prayer itself, for spiritual direction, and for the courage to persevere 
                in the spiritual life despite difficulties.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of prayer, for 
                spiritual guidance, and for the courage to reform one's life according 
                to God's will. Many people make special petitions for help in developing 
                a deeper prayer life or for the grace to persevere in difficult spiritual 
                circumstances. The day is also a time to reflect on St. Teresa's example 
                of courage, perseverance, and trust in God. St. Teresa's feast day 
                encourages us to seek God in prayer and to trust that He will guide us 
                through the difficulties of life.
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
                  <li>• <strong>Headache Sufferers:</strong> Patron against headaches</li>
                  <li>• <strong>Spain:</strong> Patron saint of Spain</li>
                  <li>• <strong>Carmelites:</strong> Patron of Carmelite order</li>
                  <li>• <strong>Prayer:</strong> Patron of contemplative prayer</li>
                  <li>• <strong>Spiritual Writers:</strong> Patron of religious authors</li>
                  <li>• <strong>Religious Reform:</strong> Patron of Church renewal</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Mystical Prayer:</strong> Guide for contemplatives</li>
                  <li>• <strong>Spiritual Direction:</strong> Patron of spiritual guides</li>
                  <li>• <strong>Perseverance:</strong> Helper in difficult times</li>
                  <li>• <strong>Interior Life:</strong> Patron of inner peace</li>
                  <li>• <strong>Religious Life:</strong> Patron of nuns and monks</li>
                  <li>• <strong>Church Reform:</strong> Patron of renewal movements</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Teresa of Avila</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Teresa of Avila, Doctor of the Church and mistress of prayer, 
                    you who taught us that prayer is nothing else than an intimate sharing 
                    between friends, help me to develop a deeper relationship with God 
                    through prayer.
                  </p>
                  <p className="mb-4">
                    Teach me to persevere in prayer even when it seems difficult or 
                    unfruitful. Help me to understand that the important thing is not 
                    to think much but to love much. May your example of courage and 
                    trust in God inspire me to seek Him with all my heart.
                  </p>
                  <p>
                    St. Teresa, pray for me that I may grow in prayer, find inner peace, 
                    and have the courage to follow God's will in my life. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Contemplation</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Teresa of Avila, you who experienced the heights of mystical 
                    prayer and the depths of spiritual dryness, intercede for me in my 
                    journey of prayer.
                  </p>
                  <p>
                    Help me to find time for God in the midst of my busy life, and to 
                    trust that He is always present, even when I cannot feel Him. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Teresa of Avila, pray for us!"
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
            <Link href="/saints/st-catherine-siena" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Catherine of Siena
                </h3>
                <p className="text-gray-700 text-sm">
                  Doctor of the Church and mystic, patron of Italy.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-therese" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thérèse of Lisieux
                </h3>
                <p className="text-gray-700 text-sm">
                  The Little Flower, Doctor of the Church and Carmelite.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john-cross" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John of the Cross
                </h3>
                <p className="text-gray-700 text-sm">
                  Doctor of the Church and co-founder of Discalced Carmelites.
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