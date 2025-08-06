import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Basil the Great - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Basil the Great, Doctor of the Church and Father of Eastern Monasticism.',
  keywords: [
    'st basil the great',
    'saint basil the great',
    'st basil the great biography',
    'st basil the great feast day',
    'st basil the great patron saint',
    'catholic saints',
    'doctor of the church'
  ],
  openGraph: {
    title: 'St. Basil the Great - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Basil the Great, Doctor of the Church and Father of Eastern Monasticism.',
    url: 'https://catholicbibleonline.com/saints/st-basil-great',
  },
  twitter: {
    title: 'St. Basil the Great - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Basil the Great, Doctor of the Church and Father of Eastern Monasticism.',
  }
}

export default function StBasilGreatPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Basil the Great
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Doctor of the Church and Father of Eastern Monasticism
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Basil the Great</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">January 2</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📚</div>
              <div className="text-sm text-gray-600">Doctor</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Basil the Great</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Basil the Great was born at Caesarea of Cappadocia in 330, into a family of remarkable 
                holiness and distinction. He was one of ten children of St. Basil the Elder and St. Emmelia, 
                and several of his brothers and sisters are honored among the saints, including St. Gregory 
                of Nyssa and St. Macrina the Younger. This holy family environment would profoundly shape 
                his spiritual formation and commitment to the Church.
              </p>
              
              <p className="mb-6">
                Basil received an excellent education, attending school in Caesarea, as well as Constantinople 
                and Athens, where he became acquainted with St. Gregory Nazianzen in 352. This friendship 
                would become one of the most important relationships in the early Church, as both men would 
                become leading figures in the defense of orthodoxy. In Athens, Basil excelled in rhetoric 
                and philosophy, laying the foundation for his future theological and pastoral work.
              </p>
              
              <p className="mb-6">
                A little later, he opened a school of oratory in Caesarea and practiced law, demonstrating 
                his intellectual abilities and practical skills. However, his heart was drawn to a deeper 
                spiritual life, and eventually he decided to become a monk. He found a monastery in Pontus 
                which he directed for five years, establishing the foundation for what would become Eastern 
                monasticism.
              </p>
              
              <p className="mb-6">
                Basil wrote a famous monastic rule which has proved the most lasting of those in the East, 
                known as the "Basilian Rule." This rule emphasized community life, manual labor, and 
                liturgical prayer, and it continues to influence monastic life in the Eastern Church to 
                this day. His monastic foundations would become centers of learning, prayer, and service 
                to the poor.
              </p>
              
              <p className="mb-6">
                After founding several other monasteries, he was ordained and, in 370, made bishop of 
                Caesarea. In this post until his death in 379, he continued to be a man of vast learning 
                and constant activity, genuine eloquence and immense charity. This earned for him the 
                title of "Great" during his life and Doctor of the Church after his death.
              </p>
              
              <p className="mb-6">
                Basil was one of the giants of the early Church. He was responsible for the victory of 
                Nicene orthodoxy over Arianism in the Byzantine East, and the denunciation of Arianism 
                at the Council of Constantinople in 381-82 was in large measure due to his efforts. His 
                theological writings, particularly his work on the Holy Spirit, provided the intellectual 
                foundation for the Church's understanding of the Trinity.
              </p>
              
              <p>
                As bishop, Basil fought simony, aided the victims of drought and famine, strove for a 
                better clergy, insisted on a rigid clerical discipline, fearlessly denounced evil wherever 
                he detected it, and excommunicated those involved in the widespread prostitution traffic 
                in Cappadocia. He was learned, accomplished in statesmanship, a man of great personal 
                holiness, and one of the great orators of Christianity. His feast day is January 2.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Basil the Great: Father of Eastern Monasticism</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Father of Eastern Monasticism</h3>
              <p className="mb-6">
                St. Basil's most enduring legacy is his establishment of Eastern monasticism. His monastic 
                rule, which emphasized community life, manual labor, and liturgical prayer, became the 
                foundation for all subsequent Eastern monastic communities. The Basilian Rule continues 
                to guide monastic life in the Eastern Orthodox and Eastern Catholic Churches, making him 
                truly the "Father of Eastern Monasticism."
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Defender of Orthodoxy</h3>
              <p className="mb-6">
                Basil's theological writings and pastoral leadership were instrumental in defending 
                Nicene orthodoxy against the Arian heresy. His work on the Holy Spirit, particularly 
                his treatise "On the Holy Spirit," provided the theological foundation for the Church's 
                understanding of the Trinity. His efforts at the Council of Constantinople ensured the 
                victory of orthodox teaching in the Byzantine East.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Pastoral Care</h3>
              <p className="mb-6">
                As bishop of Caesarea, Basil established a comprehensive system of pastoral care that 
                included hospitals, orphanages, and schools. His commitment to serving the poor and 
                marginalized set a standard for episcopal ministry that continues to inspire bishops 
                today. His fearless denunciation of social evils, including simony and prostitution, 
                demonstrated his commitment to both spiritual and moral reform.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Doctor of the Church</h3>
              <p>
                Recognized as a Doctor of the Church, Basil's theological and spiritual writings have 
                had a profound impact on Christian thought and practice. His homilies, letters, and 
                theological treatises continue to be studied and revered for their depth, clarity, and 
                spiritual insight. His title "the Great" reflects the universal recognition of his 
                contributions to the Church and his personal holiness.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">January 2</div>
              <p className="text-gray-600">Feast of St. Basil the Great, Bishop and Doctor of the Church</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Basil's feast day is celebrated on January 2nd, commemorating his death and his 
                contributions to the Church as a bishop, theologian, and founder of Eastern monasticism. 
                This feast is particularly important in the Eastern Churches, where he is venerated as 
                one of the Three Hierarchs along with St. Gregory Nazianzen and St. John Chrysostom.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                In the Eastern Orthodox tradition, St. Basil's feast is celebrated with special solemnity. 
                Many Eastern Catholic and Orthodox churches hold special services, and his icon is 
                prominently displayed. In some traditions, a special bread called "Vasilopita" (St. Basil's 
                bread) is blessed and shared on his feast day, symbolizing his care for the poor.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                Devotees pray to St. Basil for guidance in monastic life, for the defense of orthodoxy, 
                for wisdom in pastoral ministry, and for the courage to serve the poor and marginalized. 
                His intercession is particularly sought by monks, bishops, theologians, and those involved 
                in social justice ministries.
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
                  <li>• <strong>Monks:</strong> As the Father of Eastern Monasticism</li>
                  <li>• <strong>Hospital Administrators:</strong> For his establishment of hospitals</li>
                  <li>• <strong>Reformers:</strong> For his work in Church reform</li>
                  <li>• <strong>Bishops:</strong> As a model of episcopal ministry</li>
                  <li>• <strong>Theologians:</strong> For his theological contributions</li>
                  <li>• <strong>Social Workers:</strong> For his care of the poor</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Monastic Life:</strong> For guidance in religious life</li>
                  <li>• <strong>Orthodoxy:</strong> For defense of the faith</li>
                  <li>• <strong>Pastoral Care:</strong> For wisdom in ministry</li>
                  <li>• <strong>Social Justice:</strong> For courage to serve the poor</li>
                  <li>• <strong>Church Unity:</strong> For reconciliation between East and West</li>
                  <li>• <strong>Education:</strong> For success in theological studies</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Basil the Great</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed St. Basil the Great, Doctor of the Church and Father of Eastern Monasticism, 
                    you who combined profound learning with deep humility and immense charity, intercede for 
                    us before the throne of God.
                  </p>
                  <p className="mb-4">
                    Help us to grow in knowledge of our faith and to defend it with courage and wisdom. 
                    Grant us the grace to serve the poor and marginalized with the same love and dedication 
                    that characterized your ministry.
                  </p>
                  <p className="mb-4">
                    Guide all monks, bishops, and theologians in their pursuit of holiness and truth. Help 
                    us to understand the importance of community life and liturgical prayer, and to work 
                    for the unity of the Church.
                  </p>
                  <p>
                    Through your intercession, may we grow in wisdom, charity, and holiness, and may we 
                    always be ready to defend the faith and serve others. St. Basil the Great, pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Basil the Great, Father of Eastern Monasticism, pray for us!"
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
            <Link href="/saints/st-gregory-nazianzen" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Gregory Nazianzen
                </h3>
                <p className="text-gray-700 text-sm">
                  His close friend and fellow Doctor of the Church, one of the Three Hierarchs.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-gregory-nyssa" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Gregory of Nyssa
                </h3>
                <p className="text-gray-700 text-sm">
                  His younger brother and fellow theologian of the early Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john-chrysostom" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John Chrysostom
                </h3>
                <p className="text-gray-700 text-sm">
                  Another of the Three Hierarchs and great preacher of the early Church.
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