import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Elizabeth of Portugal - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Elizabeth of Portugal, queen and peacemaker, known for her charity and devotion to daily Mass.',
  keywords: [
    'st elizabeth portugal',
    'saint elizabeth portugal',
    'st elizabeth biography',
    'st elizabeth feast day',
    'st elizabeth patron saint',
    'queen saint',
    'peacemaker saint',
    'catholic saints',
    'july 4 feast day'
  ],
  openGraph: {
    title: 'St. Elizabeth of Portugal - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Elizabeth of Portugal, queen and peacemaker.',
    url: 'https://catholicbibleonline.com/saints/st-elizabeth-portugal',
  },
  twitter: {
    title: 'St. Elizabeth of Portugal - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Elizabeth of Portugal, queen and peacemaker.',
  }
}

export default function StElizabethPortugalPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Elizabeth of Portugal
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Queen, Peacemaker, and Model of Charity and Devotion
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Elizabeth of Portugal</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 4</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Queen Saint</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Elizabeth of Portugal</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Elizabeth was a Spanish princess who was given in marriage to King Denis of Portugal 
                at the age of twelve. She was very beautiful and very lovable, but most importantly, 
                she was deeply devout and attended Mass every day, a practice that would sustain her 
                throughout her life.
              </p>
              
              <p className="mb-6">
                Elizabeth was a holy wife, but although her husband was fond of her at first, he soon 
                began to cause her great suffering. Though a good ruler, he did not imitate his wife's 
                love of prayer and other virtues. In fact, his sins of impurity gave great scandal to 
                the people, causing Elizabeth much pain and sorrow.
              </p>
              
              <p className="mb-6">
                Later, to make matters worse, the King believed a lie told about Elizabeth and one of 
                her pages by another page, who was jealous of his companion. In great anger, the King 
                ordered the one he believed guilty to be sent to a lime-burner, with instructions to 
                throw the first page who came into the furnace.
              </p>
              
              <p className="mb-6">
                The good page set out obediently, not knowing death was waiting for him. On his way, 
                he stopped for Mass, since he had the habit of going daily. The first Mass had begun, 
                so he stayed for a second one. In the meantime, the King sent the wicked page to the 
                lime-burner to find out if the other had been killed. And so it was this page who was 
                thrown into the furnace!
              </p>
              
              <p className="mb-6">
                When the King learned what had happened, he realized that God had saved the good page, 
                punished the liar, and proven Queen Elizabeth to be innocent. This amazing event helped 
                greatly to make the King live better. He apologized to his wife in front of everyone 
                and began to have a great respect for her.
              </p>
              
              <p className="mb-6">
                In his last sickness, Elizabeth never left his side, except for Mass, until he died 
                a holy death. St. Elizabeth lived for eleven more years, doing even greater charity 
                and penance. She was a wonderful model of kindness toward the poor and a successful 
                peacemaker between members of her own family and between nations.
              </p>
              
              <p>
                Because St. Elizabeth was faithful to daily Mass, she found strength to carry her many 
                great crosses. And because her page was faithful to daily Mass, he escaped death. 
                Her life teaches us the importance of making daily Mass a habit.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Elizabeth of Portugal: Queen and Peacemaker</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Elizabeth's legacy is one of royal holiness, demonstrating that sanctity can be 
                achieved in any state of life, even as a queen. Her unwavering devotion to daily Mass 
                and prayer sustained her through great trials and made her a powerful intercessor.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Christian Marriage</h3>
              <p className="mb-6">
                Despite her husband's failings and the suffering he caused her, St. Elizabeth remained 
                faithful and loving. She showed that true Christian marriage involves patience, prayer, 
                and the power to transform hearts through God's grace.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Peacemaker and Diplomat</h3>
              <p className="mb-6">
                St. Elizabeth's role as a peacemaker extended beyond her family to the realm of 
                international diplomacy. She successfully mediated conflicts between nations, showing 
                that Christian charity can bring peace even in the most difficult circumstances.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Charity and Service</h3>
              <p>
                St. Elizabeth's dedication to the poor and her works of charity established her as a 
                model of Christian service. She used her royal position not for personal gain, but to 
                serve God and her neighbor, especially those most in need.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">July 4</div>
              <p className="text-gray-600">Feast of St. Elizabeth of Portugal</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Elizabeth of Portugal is celebrated on July 4th, commemorating her 
                death and honoring her heroic virtues. This date is especially significant for those 
                seeking her intercession for peace, reconciliation, and strength in difficult marriages.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                In Portugal and Spain, this feast day is celebrated with special prayers for peace and 
                reconciliation. Many people pray novenas to St. Elizabeth for help in family conflicts 
                and for the grace to attend daily Mass more faithfully.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for peace in families and nations, for 
                strength in difficult marriages, and for the grace to be more faithful to daily Mass. 
                St. Elizabeth's example encourages us to use our positions and resources for the good of others.
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
                  <li>• <strong>Peacemakers:</strong> Patron of those who work for peace</li>
                  <li>• <strong>Difficult Marriages:</strong> Patron of troubled marriages</li>
                  <li>• <strong>Queens and Royalty:</strong> Patron of Christian rulers</li>
                  <li>• <strong>Charity Workers:</strong> Patron of those who serve the poor</li>
                  <li>• <strong>Daily Mass Goers:</strong> Patron of faithful Mass attendance</li>
                  <li>• <strong>Portugal:</strong> Patron saint of Portugal</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Family Reconciliation:</strong> Help in resolving conflicts</li>
                  <li>• <strong>Marital Problems:</strong> Strength in difficult marriages</li>
                  <li>• <strong>Peace in Nations:</strong> Intercession for world peace</li>
                  <li>• <strong>Charity Work:</strong> Guidance in serving the poor</li>
                  <li>• <strong>Faithful Mass Attendance:</strong> Help in daily devotion</li>
                  <li>• <strong>Royal Duties:</strong> Guidance for Christian rulers</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Elizabeth of Portugal</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Elizabeth of Portugal, holy queen and peacemaker, who through your devotion 
                    to daily Mass found strength to carry your many crosses, intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    You who remained faithful and loving despite great suffering in your marriage, 
                    help all who are experiencing difficulties in their relationships. Teach us to 
                    trust in God's providence and to find strength in prayer and the sacraments.
                  </p>
                  <p className="mb-4">
                    You who were a successful peacemaker between nations and families, help us to 
                    work for peace in our own lives and in the world. Guide us to use our positions 
                    and resources for the good of others, especially the poor and suffering.
                  </p>
                  <p>
                    St. Elizabeth of Portugal, pray for us! Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Elizabeth of Portugal, pray for us!"
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
            <Link href="/saints/st-elizabeth-hungary" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Charity Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Elizabeth of Hungary
                </h3>
                <p className="text-gray-700 text-sm">
                  Another holy queen known for her charity and devotion to the poor.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-margaret" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Charity Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Margaret of Scotland
                </h3>
                <p className="text-gray-700 text-sm">
                  Queen and saint known for her piety and works of charity.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-helena" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Helena
                </h3>
                <p className="text-gray-700 text-sm">
                  Empress and mother of Constantine, known for her piety and charity.
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