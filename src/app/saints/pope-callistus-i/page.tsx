import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pope Callistus I - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of Pope Callistus I, the 16th Pope who showed mercy to sinners and promoted equality in the early Church.',
  keywords: [
    'pope callistus i',
    'saint callistus',
    'pope callistus i biography',
    'pope callistus i feast day',
    'pope callistus i patron saint',
    'catholic saints',
    'october 14 feast day',
    'popes',
    'early church'
  ],
  openGraph: {
    title: 'Pope Callistus I - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of Pope Callistus I, the 16th Pope who showed mercy to sinners.',
    url: 'https://catholicbibleonline.com/saints/pope-callistus-i',
  },
  twitter: {
    title: 'Pope Callistus I - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of Pope Callistus I, the 16th Pope who showed mercy to sinners.',
  }
}

export default function PopeCallistusIPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            Pope Callistus I
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            16th Pope of the Catholic Church, Martyr, Model of Mercy and Equality
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Pope Callistus I</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 14</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Pope</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of Pope Callistus I</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Pope Callistus I, who died around 222, faced a unique challenge in history: the only account of his 
                life comes from his enemy, Saint Hippolytus, a rival candidate for the chair of Peter. This hostile 
                biography has shaped how we understand this remarkable pope, but careful analysis reveals a man of 
                extraordinary mercy and vision.
              </p>
              
              <p className="mb-6">
                Callistus himself was a slave, which likely did not endear him to the class-conscious Hippolytus. 
                His master, Carporphorus, made him manager of a bank in the Publica Piscina sector of Rome where 
                Callistus took in the money of other Christians. When the bank failed, Callistus fled the city by 
                ship to escape punishment.
              </p>
              
              <p className="mb-6">
                When his master caught up with him, Callistus jumped into the sea. After being rescued, he was 
                brought back to Rome, put on trial, and sentenced to forced labor on the treadmill. Carporphorus 
                took pity on his former slave and manager, and Callistus won his release by convincing him he could 
                get some of the money back from investors.
              </p>
              
              <p className="mb-6">
                Callistus' methods had not improved with desperation, and when he disrupted a synagogue by shouting 
                for money, he was arrested and sentenced again. This time he was sent to the mines. Other Christians 
                who had been sentenced there because of their religion were released by negotiations between the 
                emperor and the Pope. Callistus accidentally wound up on the same list with the persecuted brothers 
                and sisters.
              </p>
              
              <p className="mb-6">
                Apparently, everyone, including the Pope, realized Callistus did not deserve his new freedom, but 
                unwilling to carry the case further, the Pope gave Callistus an income and situation away from Rome. 
                About nine or ten years later, the new Pope Zephyrinus recalled Callistus to Rome.
              </p>
              
              <p className="mb-6">
                Zephyrinus was good-hearted and well-meaning but had no understanding of theology. This was disastrous 
                in a time when heretical beliefs were springing up everywhere. Callistus soon made his value known, 
                guiding Zephyrinus through theology to what he saw as orthodoxy. To a certain extent, Callistus was 
                the power behind the Church before he even assumed the bishopric of Rome.
              </p>
              
              <p className="mb-6">
                When Zephyrinus died in 219, Callistus was proclaimed pope over the protests of his rival candidate 
                Hippolytus. He seemed to have as strong a hatred of heresy as Hippolytus, however, because he banished 
                one of the heretics named Sabellius.
              </p>
              
              <p>
                Pope Callistus is listed as a martyr, but we have no record of how he was martyred or by whom. 
                There were no official persecutions at the time, but he may well have been killed in riots against 
                Christians.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of Pope Callistus I: Mercy and Equality in the Church</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Champion of Mercy</h3>
              <p className="mb-6">
                Pope Callistus I's most significant legacy was his revolutionary approach to sinners in the Church. 
                At a time when the early Church was very strict with those who committed sins of adultery, murder, 
                and fornication, Callistus showed extraordinary mercy by allowing repentant sinners back into 
                communion after they had performed public penance.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Promoter of Equality</h3>
              <p className="mb-6">
                Callistus' mercy was matched by his desire for equality among Church members, manifested by his 
                acceptance of marriages between free people and slaves. This was a radical departure from the 
                rigid class structures of Roman society and demonstrated the Church's universal mission.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Theological Guidance</h3>
              <p className="mb-6">
                During Pope Zephyrinus' pontificate, Callistus provided crucial theological guidance to a pope 
                who was well-meaning but lacked theological understanding. His influence helped steer the Church 
                through a time when heretical beliefs were springing up everywhere.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Redemption</h3>
              <p>
                Callistus' own life story—from slave to pope—demonstrates the Church's capacity for redemption 
                and the power of God's mercy. His election as pope shows that the Church is large enough to embrace 
                both sinners and saints, and to proclaim as saints people who hold opposing views.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">October 14</div>
              <p className="text-gray-600">Memorial of Pope Callistus I, Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of Pope Callistus I is celebrated on October 14th. This memorial honors his martyrdom 
                and his significant contributions to the early Church, particularly his emphasis on mercy and 
                equality among believers.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Significance</h3>
              <p className="mb-6">
                Pope Callistus I's pontificate marked a crucial turning point in the Church's history. He faced 
                the fundamental question: Was the Church going to hang on to rigid rules and limit itself to those 
                who were already saints, or was it going to embrace sinners as Christ commanded?
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On his feast day, Catholics pray for his intercession, especially for those seeking mercy and 
                forgiveness, for the Church's mission to sinners, and for the promotion of equality and justice 
                in society.
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
                  <li>• <strong>Mercy and Forgiveness:</strong> Patron of those seeking God's mercy</li>
                  <li>• <strong>Repentant Sinners:</strong> Helper for those returning to the Church</li>
                  <li>• <strong>Social Equality:</strong> Patron of justice and equality</li>
                  <li>• <strong>Former Slaves:</strong> Protector of those seeking freedom</li>
                  <li>• <strong>Church Unity:</strong> Patron of reconciliation in the Church</li>
                  <li>• <strong>Popes and Bishops:</strong> Model for Church leadership</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Second Chances:</strong> Helper for those seeking redemption</li>
                  <li>• <strong>Church Reform:</strong> Patron of positive change in the Church</li>
                  <li>• <strong>Overcoming Prejudice:</strong> Helper against discrimination</li>
                  <li>• <strong>Theological Clarity:</strong> Patron of sound doctrine</li>
                  <li>• <strong>Persecuted Christians:</strong> Protector of the faithful</li>
                  <li>• <strong>Reconciliation:</strong> Helper in healing divisions</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to Pope Callistus I</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Pope Callistus I, who showed such mercy to sinners and promoted equality in the Church, 
                    pray for us who call upon your intercession. Help us to embrace God's mercy and to extend 
                    it to others as you did.
                  </p>
                  <p className="mb-4">
                    Teach us to see beyond social barriers and to recognize the dignity of every person. 
                    Guide us in promoting justice and equality in our communities and in the Church.
                  </p>
                  <p>
                    Through your powerful intercession, may we be instruments of God's mercy and love. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Mercy</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Pope Callistus I, who opened the doors of the Church to repentant sinners, intercede for 
                    all those who seek God's mercy and forgiveness. Help us to trust in God's love and to 
                    believe in the possibility of redemption.
                  </p>
                  <p>
                    May we, like you, be channels of God's mercy to others, never giving up on anyone who 
                    seeks to return to the Lord. Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Equality</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Pope Callistus I, who promoted equality among Church members and accepted marriages 
                    between free people and slaves, help us to break down barriers of prejudice and discrimination.
                  </p>
                  <p>
                    Inspire us to work for justice and equality in our society, recognizing the dignity of 
                    every human person. Through Christ our Lord. Amen."
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
                  First Pope and Prince of the Apostles, foundation of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-paul" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Paul
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle to the Gentiles and great missionary, model of conversion and mercy.
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