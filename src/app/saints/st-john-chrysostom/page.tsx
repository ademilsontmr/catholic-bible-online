import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. John Chrysostom - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. John Chrysostom, the Golden-Mouthed Doctor of the Church and Archbishop of Constantinople.',
  keywords: [
    'st john chrysostom',
    'saint john chrysostom',
    'st john chrysostom biography',
    'st john chrysostom feast day',
    'st john chrysostom patron saint',
    'catholic saints',
    'september 14 feast day',
    'doctor saints',
    'golden-mouthed',
    'constantinople',
    'antioch'
  ],
  openGraph: {
    title: 'St. John Chrysostom - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John Chrysostom, the Golden-Mouthed Doctor of the Church.',
    url: 'https://catholicbibleonline.com/saints/st-john-chrysostom',
  },
  twitter: {
    title: 'St. John Chrysostom - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John Chrysostom, the Golden-Mouthed Doctor of the Church.',
  }
}

export default function StJohnChrysostomPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. John Chrysostom
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Doctor of the Church, Golden-Mouthed Preacher, Archbishop of Constantinople
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. John Chrysostom</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">September 14</div>
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
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. John Chrysostom</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. John Chrysostom, whose name means "Golden-Mouthed" due to his extraordinary 
                eloquence, was born around the year 344 in the city of Antioch to Christian parents. 
                His mother, at the young age of 20, was already a model of virtue, providing him 
                with a strong foundation in the Christian faith from his earliest years.
              </p>
              
              <p className="mb-6">
                From an early age, John showed remarkable intellectual gifts and a deep love for 
                learning. He studied rhetoric under Libanius, a pagan who was the most famous 
                orator of the age. This education in classical rhetoric would later serve him 
                well in his preaching ministry, as he would become one of the most eloquent 
                preachers in the history of the Church.
              </p>
              
              <p className="mb-6">
                In 374, feeling called to a more contemplative life, John began to lead the life 
                of an anchorite in the mountains near Antioch. This period of solitude and prayer 
                deepened his spirituality and prepared him for his future ministry. However, in 
                386, the poor state of his health forced him to return to Antioch, where he was 
                ordained a priest.
              </p>
              
              <p className="mb-6">
                As a priest in Antioch, John's preaching gifts became immediately apparent. His 
                sermons were marked by their clarity, eloquence, and practical application of 
                Scripture to everyday life. He had a unique ability to make the Word of God 
                accessible to all people, from the educated elite to the simple laborers. His 
                preaching earned him the nickname "Chrysostom" - the Golden-Mouthed.
              </p>
              
              <p className="mb-6">
                In 398, John was elevated to the See of Constantinople, becoming the Archbishop 
                of the imperial capital. This was a position of great influence and responsibility, 
                but it also brought him into conflict with powerful figures in both Church and 
                state. As Archbishop, he became one of the greatest lights of the Church, 
                continuing his powerful preaching and working tirelessly for the spiritual 
                welfare of his flock.
              </p>
              
              <p className="mb-6">
                However, John's commitment to truth and his fearless preaching against corruption 
                and injustice made him enemies in high places. Some of his opponents were 
                ecclesiastics, including Theophilus, the Patriarch of Alexandria, who would 
                later repent of his actions before his death. But his most powerful enemy was 
                the empress Eudoxia, who was offended by the apostolic freedom of his discourses 
                and his denunciation of her luxurious lifestyle.
              </p>
              
              <p>
                Several accusations were brought against him in a pseudo-council, and he was 
                sent into exile. In the midst of his sufferings, like the apostle St. Paul whom 
                he so greatly admired, he found the greatest peace and happiness. He had the 
                consolation of knowing that the Pope remained his friend and did for him what 
                lay in his power. His enemies were not satisfied with the sufferings he had 
                already endured, and they banished him still further, to Pythius, at the very 
                extremity of the Empire. He died on his way there on September 14, 407, 
                having given his life for the truth of the Gospel.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. John Chrysostom: Golden-Mouthed Doctor of the Church</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Master of Preaching</h3>
              <p className="mb-6">
                St. John Chrysostom's greatest legacy is his extraordinary gift for preaching 
                and his ability to communicate the Gospel with clarity, eloquence, and power. 
                His sermons, which have been preserved and continue to be studied today, are 
                masterpieces of biblical interpretation and practical application. He had a 
                unique ability to make Scripture come alive for his listeners, applying the 
                timeless truths of the Gospel to the everyday challenges of life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Doctor of the Church</h3>
              <p className="mb-6">
                As one of the great Doctors of the Church, John Chrysostom's theological 
                insights and spiritual wisdom continue to guide and inspire Christians 
                throughout the ages. His writings on Scripture, liturgy, and Christian 
                living are considered among the most important works of early Christian 
                literature. His commentary on the Bible, particularly his homilies on 
                the Gospels and the letters of St. Paul, remain essential reading for 
                anyone seeking to understand the Word of God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courageous Witness</h3>
              <p className="mb-6">
                John Chrysostom's life is a powerful witness to the courage and integrity 
                required of Christian leaders. Despite facing opposition from powerful 
                figures in both Church and state, he never compromised the truth of the 
                Gospel. His willingness to speak truth to power, even at the cost of his 
                own comfort and safety, serves as a model for all Christians called to 
                prophetic witness in the world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Pastoral Care</h3>
              <p>
                As Archbishop of Constantinople, John Chrysostom was deeply committed to 
                the pastoral care of his flock. He worked tirelessly to ensure that the 
                Church served the spiritual and material needs of all people, especially 
                the poor and marginalized. His concern for social justice and his 
                denunciation of corruption and luxury among the wealthy demonstrate his 
                commitment to living out the Gospel values in practical ways.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">September 14</div>
              <p className="text-gray-600">Memorial of St. John Chrysostom, Bishop and Doctor of the Church</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. John Chrysostom is celebrated on September 14th. This memorial 
                honors his life as a bishop, his extraordinary preaching ministry, his theological 
                contributions as a Doctor of the Church, and his courageous witness to the truth 
                of the Gospel.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. John Chrysostom lived during a crucial period in Church history, when 
                Christianity was becoming the dominant religion of the Roman Empire. His 
                ministry took place against the backdrop of theological controversies and 
                political intrigue, making his steadfast commitment to truth and his 
                courageous preaching all the more remarkable. His life and work helped 
                to shape the Church's understanding of Scripture and pastoral ministry.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On his feast day, Catholics pray for his intercession, especially for 
                preachers and teachers of the faith, for those called to prophetic witness, 
                for the courage to speak truth to power, and for the grace to understand 
                and apply Scripture in our daily lives. His example inspires us to be 
                bold in proclaiming the Gospel and faithful in living out our Christian 
                calling.
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
                  <li>• <strong>Preachers:</strong> Patron saint of preachers and orators</li>
                  <li>• <strong>Teachers:</strong> Patron of teachers and educators</li>
                  <li>• <strong>Constantinople:</strong> Patron saint of Constantinople</li>
                  <li>• <strong>Antioch:</strong> One of the patron saints of Antioch</li>
                  <li>• <strong>Bishops:</strong> Patron of bishops and church leaders</li>
                  <li>• <strong>Scripture Study:</strong> Helper for those studying the Bible</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Public Speaking:</strong> Helper for those who speak publicly</li>
                  <li>• <strong>Courage:</strong> Patron of those needing courage to speak truth</li>
                  <li>• <strong>Persecution:</strong> Helper for those suffering for their faith</li>
                  <li>• <strong>Social Justice:</strong> Patron of those working for justice</li>
                  <li>• <strong>Pastoral Care:</strong> Helper for those in pastoral ministry</li>
                  <li>• <strong>Biblical Preaching:</strong> Patron of biblical preachers</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. John Chrysostom</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. John Chrysostom, Golden-Mouthed Doctor of the Church, who proclaimed 
                    the Gospel with such eloquence and courage, pray for us who call upon your 
                    intercession.
                  </p>
                  <p className="mb-4">
                    Help us to speak the truth with boldness and love, following your example 
                    of fearless preaching. Teach us to understand and apply Scripture in our 
                    daily lives, and give us the courage to stand for justice and truth, even 
                    when it costs us dearly.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace to 
                    proclaim the Gospel with clarity and power. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Preachers</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. John Chrysostom, patron of preachers and teachers, intercede for all 
                    those called to proclaim the Word of God. Help them to speak with clarity, 
                    eloquence, and power, making the Gospel accessible to all people.
                  </p>
                  <p>
                    May they, like you, combine deep learning with practical wisdom, and may 
                    their preaching bear abundant fruit for the Kingdom of God. Through Christ 
                    our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Courage</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. John Chrysostom, who faced exile and persecution for speaking the 
                    truth, intercede for all those who suffer for their faith or for standing 
                    up for what is right.
                  </p>
                  <p>
                    Help us to find peace and joy in the midst of suffering, as you did, and 
                    give us the courage to remain faithful to the Gospel, no matter the cost. 
                    Through Christ our Lord. Amen."
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
            <Link href="/saints/st-paul" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Paul
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle to the Gentiles and great missionary, whom Chrysostom greatly admired.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-ambrose" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Ambrose
                </h3>
                <p className="text-gray-700 text-sm">
                  Bishop of Milan and Doctor of the Church, contemporary of Chrysostom.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-augustine" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Augustine
                </h3>
                <p className="text-gray-700 text-sm">
                  Bishop of Hippo and Doctor of the Church, contemporary of Chrysostom.
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