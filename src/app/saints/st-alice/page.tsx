import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Alice - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Alice, Cistercian nun who suffered from leprosy and found consolation in the Eucharist.',
  keywords: [
    'st alice',
    'saint alice',
    'st alice biography',
    'st alice feast day',
    'st alice patron saint',
    'catholic saints',
    'leprosy patron saint'
  ],
  openGraph: {
    title: 'St. Alice - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Alice, Cistercian nun who suffered from leprosy and found consolation in the Eucharist.',
    url: 'https://catholicbibleonline.com/saints/st-alice',
  },
  twitter: {
    title: 'St. Alice - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Alice, Cistercian nun who suffered from leprosy and found consolation in the Eucharist.',
  }
}

export default function StAlicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🕊️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Alice
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Cistercian Nun and Model of Suffering with Grace
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Alice</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">June 15</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🕊️</div>
              <div className="text-sm text-gray-600">Cistercian Nun</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Alice</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Alice, also known as Aleydis, was born at Shaerbeck, near Brussels, Belgium. 
                Her life exemplifies the profound mystery of suffering and how it can be transformed 
                into a path of holiness and spiritual growth. From a very young age, she demonstrated 
                an extraordinary calling to religious life and a remarkable capacity to find God's 
                presence even in the midst of great physical suffering.
              </p>
              
              <p className="mb-6">
                At the tender age of seven, Alice entered the Cistercian convent named Camera Sanctae 
                Mariae, where she would remain for the rest of her life. This early entrance into 
                religious life demonstrates not only her precocious spiritual maturity but also the 
                recognition by her family and the religious community of her special vocation. The 
                Cistercian community was deeply inspired by her spirit of humility, which would 
                become even more evident as she faced the trials that lay ahead.
              </p>
              
              <p className="mb-6">
                However, at an early age, Alice contracted leprosy, a disease that would dramatically 
                change the course of her life. Leprosy was not only physically devastating but also 
                carried significant social stigma in medieval times. The disease caused Alice intense 
                suffering, and as it progressed, she became paralyzed and was afflicted with blindness. 
                These multiple afflictions - leprosy, paralysis, and blindness - would have been 
                overwhelming for most people, but Alice found ways to transform her suffering into 
                spiritual growth and deeper union with Christ.
              </p>
              
              <p className="mb-6">
                Due to the danger of contagion, Alice had to be isolated from the rest of the 
                community. This isolation, combined with her physical limitations, could have led 
                to despair, but instead, it became an opportunity for deeper prayer and mystical 
                experiences. Her greatest consolation came from the reception of the Holy Eucharist, 
                although she was not allowed to drink from the cup because of the danger of contagion. 
                This restriction, which might have seemed like a deprivation, became the occasion 
                for a special mystical experience.
              </p>
              
              <p className="mb-6">
                The Lord appeared to Alice with assurance that to receive under one species (the 
                Host alone) was sufficient. This divine reassurance not only comforted her but also 
                affirmed the Church's teaching about the Real Presence of Christ in the Eucharist. 
                Her mystical experiences and ecstasies became well-known, and she became a source 
                of spiritual inspiration for her community despite her physical isolation.
              </p>
              
              <p>
                St. Alice died in 1250, leaving behind a legacy of courage, faith, and spiritual 
                wisdom. Her devotion was approved in 1907 by Pope Pius X, recognizing her as a 
                model of how to bear suffering with grace and find consolation in the sacraments. 
                Her life continues to inspire those who face illness, disability, or other forms 
                of suffering, showing that even in the darkest moments, God's grace can transform 
                pain into a path of holiness.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Alice: Model of Suffering with Grace</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Transformation of Suffering</h3>
              <p className="mb-6">
                St. Alice's most profound legacy is her example of how to transform suffering into 
                spiritual growth. Rather than allowing her multiple afflictions - leprosy, paralysis, 
                and blindness - to lead to despair, she used them as opportunities for deeper prayer 
                and mystical union with God. Her life demonstrates that suffering, when accepted with 
                faith and offered to God, can become a powerful means of sanctification and a source 
                of grace for others. This transformation of suffering into spiritual fruit is perhaps 
                her greatest gift to the Church and to all who face illness or disability.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Eucharistic Devotion in Adversity</h3>
              <p className="mb-6">
                St. Alice's deep devotion to the Eucharist, even when she could only receive under 
                one species, serves as a powerful reminder of the centrality of the sacraments in 
                the Christian life, especially during times of trial. Her mystical experience, in 
                which the Lord assured her that receiving the Host alone was sufficient, not only 
                comforted her but also affirmed important theological truths about the Real Presence 
                of Christ in the Eucharist. Her example encourages all Christians to find consolation 
                and strength in the sacraments, particularly when facing physical or spiritual 
                challenges.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Humility in Isolation</h3>
              <p className="mb-6">
                Despite being isolated from her community due to her illness, St. Alice maintained 
                a spirit of humility that inspired those around her. Her ability to find God's 
                presence in solitude and to continue growing spiritually despite her physical 
                limitations demonstrates that holiness is not dependent on external circumstances 
                or physical abilities. Her humility in accepting her condition and finding ways 
                to serve God even in isolation serves as a model for all who find themselves 
                physically or socially isolated.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Mystical Life and Visions</h3>
              <p>
                St. Alice's mystical experiences and ecstasies, which became well-known during her 
                lifetime, demonstrate that God can work powerfully in the lives of those who are 
                physically weak or disabled. Her visions and spiritual experiences show that the 
                soul can flourish even when the body is suffering. This aspect of her legacy 
                encourages us to look beyond physical limitations and to recognize the spiritual 
                potential that exists in every person, regardless of their physical condition. 
                Her mystical life also serves as a reminder that God often chooses the weak and 
                suffering to reveal His power and love.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">June 15</div>
              <p className="text-gray-600">Feast of St. Alice, Cistercian Nun and Mystic</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Alice's feast day is celebrated on June 15th, commemorating her death and her 
                witness to the Christian life of suffering and mystical union with God. This feast 
                is particularly meaningful for those who suffer from illness, disability, or other 
                forms of physical or emotional pain, as St. Alice serves as a powerful example of 
                how to bear suffering with grace and find consolation in the sacraments. Churches 
                and communities may hold special prayer services or Masses on this day, particularly 
                those that serve the sick or disabled.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Alice's feast day, many communities, especially those with connections to 
                healthcare, disability services, or Cistercian spirituality, may hold special 
                prayer services or Masses. Some may choose to reflect on the themes of suffering, 
                consolation, and the Eucharist that are so central to St. Alice's story. The day 
                serves as an opportunity to pray for those who are sick or suffering, and to 
                remember that God can work powerfully even in the midst of physical limitations 
                and pain.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                Devotees pray to St. Alice for strength in times of illness and suffering, for 
                the grace to find consolation in the sacraments, for patience in accepting physical 
                limitations, and for the wisdom to transform suffering into spiritual growth. Her 
                intercession is particularly sought by those who are sick or disabled, by those 
                who care for the sick, by those who feel isolated due to illness, and by all who 
                need courage to face physical or emotional challenges. Her example reminds us that 
                even in the darkest moments, God's grace can transform pain into a path of holiness.
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
                  <li>• <strong>Leprosy:</strong> For her suffering from this disease</li>
                  <li>• <strong>Blindness:</strong> For her loss of sight</li>
                  <li>• <strong>Paralysis:</strong> For her physical paralysis</li>
                  <li>• <strong>Cistercian Nuns:</strong> As a member of the Cistercian order</li>
                  <li>• <strong>The Sick:</strong> For her example of bearing illness with grace</li>
                  <li>• <strong>The Disabled:</strong> For her acceptance of physical limitations</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Eucharistic Devotion:</strong> For finding consolation in the sacraments</li>
                  <li>• <strong>Suffering:</strong> For transforming pain into spiritual growth</li>
                  <li>• <strong>Isolation:</strong> For finding God in solitude</li>
                  <li>• <strong>Mystical Life:</strong> For spiritual experiences and visions</li>
                  <li>• <strong>Humility:</strong> For accepting limitations with grace</li>
                  <li>• <strong>Healthcare Workers:</strong> For those who care for the sick</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Alice</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed St. Alice, model of suffering with grace and consolation in the 
                    Eucharist, you who transformed your physical afflictions into spiritual growth, 
                    intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    Help us to follow your example of finding God's presence even in the midst of 
                    suffering and isolation. Grant us the grace to accept our limitations with 
                    humility and to find consolation in the sacraments, especially the Holy Eucharist.
                  </p>
                  <p className="mb-4">
                    Inspire us with your mystical experiences and your deep devotion to prayer, 
                    showing us that the soul can flourish even when the body is weak. Help us to 
                    transform our own sufferings into opportunities for spiritual growth and deeper 
                    union with Christ.
                  </p>
                  <p>
                    Through your powerful intercession, may we learn to bear our crosses with 
                    courage and faith, and may we find in our own trials a path to holiness and 
                    a deeper understanding of God's love. St. Alice, pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Alice, model of suffering with grace and consolation in the Eucharist, pray for us!"
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
            <Link href="/saints/st-bernard" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Bernard
                </h3>
                <p className="text-gray-700 text-sm">
                  Great Cistercian abbot and Doctor of the Church, founder of the order she joined.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-rita-cascia" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Rita of Cascia
                </h3>
                <p className="text-gray-700 text-sm">
                  Another saint who suffered greatly and found consolation in mystical experiences.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-gemma-galgani" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Gemma Galgani
                </h3>
                <p className="text-gray-700 text-sm">
                  Modern mystic who suffered from illness and experienced visions and ecstasies.
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