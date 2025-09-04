import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Catherine of Siena - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Catherine of Siena, Doctor of the Church and mystic who influenced popes and politics.',
  keywords: [
    'st catherine of siena',
    'saint catherine siena',
    'doctor of the church',
    'catholic saints',
    'mystic saints',
    'april 29 feast day',
    'dominican saints'
  ],
  openGraph: {
    title: 'St. Catherine of Siena - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Catherine of Siena, Doctor of the Church and mystic who influenced popes and politics.',
    url: 'https://catholicbibleonline.com/saints/st-catherine-siena',
  },
  twitter: {
    title: 'St. Catherine of Siena - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Catherine of Siena, Doctor of the Church and mystic who influenced popes and politics.',
  }
}

export default function StCatherineSienaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌹</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Catherine of Siena
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Doctor of the Church, Mystic and Political Mediator
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Catherine of Siena</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">April 29</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌹</div>
              <div className="text-sm text-gray-600">Doctor Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Catherine of Siena</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Catherine of Siena was born during the outbreak of the plague in Siena, 
                Italy on March 25, 1347. She was the 25th child born to her mother, although 
                half of her brothers and sisters did not survive childhood. Catherine herself 
                was a twin, but her sister did not survive infancy. Her mother was 40 when 
                she was born, and her father was a cloth dyer. From an early age, Catherine 
                showed signs of deep spirituality and a desire for prayer and contemplation.
              </p>
              
              <p className="mb-6">
                At the age of 16, Catherine's sister, Bonaventura, died, leaving her husband 
                as a widower. Catherine's parents proposed that he marry Catherine as a 
                replacement, but Catherine strongly opposed this arrangement. She began 
                fasting and cut her hair short to mar her appearance, demonstrating her 
                determination to dedicate her life to God. Despite her parents' initial 
                resistance, her fasting and devotion to her family eventually convinced 
                them to allow her to live as she pleased.
              </p>
              
              <p className="mb-6">
                Despite her religious nature, Catherine did not choose to enter a convent 
                and instead joined the Third Order of St. Dominic, which allowed her to 
                associate with a religious society while living at home. Fellow Dominican 
                sisters taught her how to read, and she lived quietly, isolated within her 
                family home. Catherine developed a habit of giving things away, continually 
                giving away her family's food and clothing to people in need without asking 
                permission, and she quietly endured their criticisms.
              </p>
              
              <p className="mb-6">
                At the age of 21, something profound changed in Catherine's life. She 
                described an experience she referred to as her "mystical marriage to Christ." 
                There are debates over whether she was given a ring - some claim it was 
                bejeweled, while others claim it was made of Jesus's skin. Catherine herself 
                wrote that the ring was invisible. This mystical experience transformed her, 
                and she was told to reenter public life and help the poor and sick.
              </p>
              
              <p>
                Catherine immediately rejoined her family and went into public to help 
                people in need. She often visited hospitals and homes where the poor and 
                sick were found. Her activities quickly attracted followers who helped her 
                in her mission. Catherine became involved in politics and was instrumental 
                in working to keep city states loyal to the Pope. She was credited with 
                helping to start a crusade to the Holy Land and was instrumental in 
                persuading the Pope in Avignon to return to Rome. Catherine died on April 29, 
                1380, at the age of 33, following a stroke. Her feast day is celebrated on 
                April 29th.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Catherine of Siena: Doctor of the Church</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Doctor of the Church</h3>
              <p className="mb-6">
                St. Catherine's greatest legacy is her role as a Doctor of the Church, 
                a title she shares with only a few other women. Her writings, including 
                over 400 letters, her Dialogue (her definitive work), and her prayers, 
                are considered among the most important spiritual texts in Christian 
                history. Her theological insights and mystical experiences have influenced 
                countless believers and continue to inspire spiritual seekers today.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Political Mediator and Church Reformer</h3>
              <p className="mb-6">
                Catherine's involvement in the politics of her time was unprecedented 
                for a woman of her era. She was instrumental in restoring the Papacy 
                to Rome from Avignon and in brokering peace deals during a time of 
                factional conflict and war between Italian city states. Her ability 
                to influence popes and political leaders demonstrates her extraordinary 
                charisma and spiritual authority.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Mystical Spirituality</h3>
              <p>
                Catherine's mystical experiences, including her "mystical marriage to 
                Christ" and her invisible stigmata, make her a powerful example of 
                contemplative spirituality. She shows that deep union with God can 
                coexist with active service to others. Her life demonstrates that 
                true holiness involves both prayer and action, contemplation and 
                service to the poor and suffering.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">April 29</div>
              <p className="text-gray-600">Feast of St. Catherine of Siena</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Catherine of Siena is celebrated on April 29th, during 
                the Easter season. This date falls during a time of renewal and joy, 
                which is fitting for a saint whose life was dedicated to the renewal 
                of the Church and the spiritual transformation of society. The feast 
                is celebrated as a memorial throughout the Church, with special devotion 
                in Italy and among Dominicans.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Catherine's feast day, many Dominicans and lay people celebrate 
                with special prayers and Masses. Some churches hold educational programs 
                about her life and writings. Many people pray for her intercession for 
                Church unity, political peace, and spiritual guidance. The day is also 
                marked by celebrations in Siena, Italy, where she was born.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray the Prayer to St. Catherine 
                of Siena or to make a special petition for Church unity, political 
                peace, or spiritual guidance. Many people also read her writings, 
                particularly her Dialogue, or make pilgrimages to her shrine in Siena.
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
                  <li>• <strong>Italy:</strong> Patron saint of Italy</li>
                  <li>• <strong>United States:</strong> Patron saint of the United States</li>
                  <li>• <strong>Nurses:</strong> Patron of nursing profession</li>
                  <li>• <strong>Fire Protection:</strong> Patron against fire</li>
                  <li>• <strong>Illness:</strong> Patron against sickness</li>
                  <li>• <strong>Miscarriages:</strong> Patron against miscarriages</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Church Unity:</strong> Helper for Church reform</li>
                  <li>• <strong>Political Peace:</strong> Patron of peacemakers</li>
                  <li>• <strong>Mystical Prayer:</strong> Guide for contemplatives</li>
                  <li>• <strong>Spiritual Direction:</strong> Patron of spiritual guides</li>
                  <li>• <strong>Faith Under Criticism:</strong> Helper for persecuted believers</li>
                  <li>• <strong>Sexual Purity:</strong> Patron against temptation</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Catherine of Siena</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Catherine of Siena, you who were given the grace to be a 
                    Doctor of the Church and to influence popes and politics, help me 
                    to be bold in my faith and to work for the good of the Church and 
                    society. Teach me to combine deep prayer with active service to others.
                  </p>
                  <p className="mb-4">
                    Help me to have the courage to speak truth to power and to work 
                    for peace and unity. May your example of mystical spirituality 
                    and political engagement inspire me to be a force for good in the world.
                  </p>
                  <p>
                    St. Catherine, pray for me that I may have the wisdom to discern 
                    God's will and the courage to act upon it, even when it requires 
                    great sacrifice. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Church Unity</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Catherine of Siena, you who worked tirelessly for Church unity 
                    and the return of the Pope to Rome, intercede for the Church today. 
                    Help us to work for unity and peace within the Church and in the world.
                  </p>
                  <p>
                    May your example inspire us to be bold in our faith and to work 
                    for the common good. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Catherine of Siena, pray for us!"
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
            <Link href="/saints/st-therese" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thérèse of Lisieux
                </h3>
                <p className="text-gray-700 text-sm">
                  The Little Flower, another Doctor of the Church and mystic.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-augustine" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Augustine of Hippo
                </h3>
                <p className="text-gray-700 text-sm">
                  Bishop and Doctor of the Church, author of Confessions.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-anthony" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anthony of Padua
                </h3>
                <p className="text-gray-700 text-sm">
                  Franciscan friar and Doctor of the Church, powerful preacher.
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