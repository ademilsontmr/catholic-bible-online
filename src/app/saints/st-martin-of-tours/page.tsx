import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Martin of Tours - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Martin of Tours, Bishop of Tours known for sharing his cloak with a beggar.',
  keywords: [
    'st martin of tours',
    'saint martin of tours',
    'st martin of tours biography',
    'st martin of tours feast day',
    'st martin of tours patron saint',
    'bishop of tours',
    'november 11 feast day',
    'catholic saints',
    'sharing cloak with beggar',
    'conscientious objector'
  ],
  openGraph: {
    title: 'St. Martin of Tours - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Martin of Tours, Bishop of Tours known for sharing his cloak with a beggar.',
    url: 'https://catholicbibleonline.com/saints/st-martin-of-tours',
  },
  twitter: {
    title: 'St. Martin of Tours - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Martin of Tours, Bishop of Tours known for sharing his cloak with a beggar.',
  }
}

export default function StMartinOfToursPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🛡️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Martin of Tours
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Bishop of Tours, Soldier of Christ, Patron of the Poor and Soldiers
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Martin of Tours</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">November 11</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🛡️</div>
              <div className="text-sm text-gray-600">Bishop</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Martin of Tours</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Martin of Tours was born in Savaria, Pannonia in either the year 316 or 336 AD. That region is what is today the nation of Hungary. His father was a tribune, which is a high-ranking officer in the Imperial Horse Guard. Martin and his family went with his father when he was assigned to a post at Ticinum, in Northern Italy. It is here that Martin would grow up. Just before Martin was born, Christianity was legalized in the Roman Empire and the bloody persecution of Christians soon came to an end. It was not the official religion of the State, but it could be practiced and proclaimed openly.
              </p>
              
              <p className="mb-6">
                The Gospel message soon flourished in ancient Rome, transforming the empire. Martin's parents were pagans, but at the age of 10, Martin chose to respond to the call of the Gospel and become a Christian. At the age of fifteen, Martin was required to follow his father into the cavalry corps of the Roman military. By the time he was 18, Martin is believed to have served in Gaul, and also eventually Milan and Treves. Scholars think he served as part of the emperor's guard.
              </p>
              
              <p className="mb-6">
                As a young soldier, Martin encountered a beggar in Amiens. The beggar was unclothed and it was very cold. Martin removed his cloak and with his sword, he cut it in half. He gave this half to the beggar and dressed himself in the remnant. That night, Martin had a vision in which Christ appeared to him. The vision spoke to him, "Martin, a mere catechumen has clothed me." A catechumen is one who is being instructed in the Christian faith. In the early centuries of Christianity, that was a long process of instruction - and Martin was deeply dedicated to it.
              </p>
              
              <p className="mb-6">
                About the age of 20, Martin made clear to his superiors that he would no longer fight, following his formed Christian conscience. He refused his pay prior to a battle and announced he would not join in the combat. He became the first recognized conscientious objector in recorded history. His proclamation occurred before a battle near the modern German city of Worms. His superiors accused him of cowardice and ordered that he be imprisoned. Martin offered to demonstrate his sincerity by going into battle unarmed. This was seen as an acceptable alternative to jailing him, but before the battle could occur, the opposing army agreed to a truce and no conflict took place. Martin was subsequently released from military service.
              </p>
              
              <p>
                Now out of the military service, Martin could fully dedicate himself to service of Jesus Christ and the Church. He traveled to Tours where he began studying under Hilary of Poitiers, who is now recognized as a doctor of the Church. Martin's studies lasted until Hilary was forced into temporary exile, likely because of his refusal to participate in a political dispute. Martin then traveled to Italy. According to one account, Martin was confronted by a highwayman and led him to faith in Jesus Christ. Another account tells of Martin confronting the Devil. While on this journey, Martin had a vision which compelled him to return to his mother in Pannonia. He did so and led his own mother to faith in Jesus Christ. Martin attempted to persuade his father to embrace faith in Jesus Christ, but as far as we know, his father refused.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Martin of Tours: Bishop and Evangelist</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Confronting Heresy and Evangelization</h3>
              <p className="mb-6">
                After bringing his mother to the Church, Martin then turned to confronting a growing heresy which was afflicting the faithful and sowing confusion. He became involved in countering the Arian heresy, which denied the divinity of Jesus Christ. The reaction against him was so violent from the Arian leaders that he was compelled to flee. Martin took up residence on an island in the Adriatic where he lived as a hermit for a time. Martin's teacher Hilary returned to Tours from temporary exile in 361 so Martin traveled there to work and study. Hilary gave Martin a small grant of land where he and his disciples lived.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Monastic Foundation and Evangelization</h3>
              <p className="mb-6">
                Martin established a monastery which would be inhabited by the Benedictines. Established in 361, the Liguge Abbey was destroyed during the French Revolution, then reestablished in 1853. The abbey remains to this day. From the site of his abbey, Martin worked to bring people to faith in Jesus Christ and Baptism into His Church in the surrounding areas. He was an extraordinary evangelist. In 371, the city of Tours needed a new bishop and the people decided to call Martin to the office. Martin did not want the job so the people decided to trick him into the office. The people insisted he was needed to administer to someone sick, so he came out as quickly as he could. He did not even bother to improve his appearance. When he learned it was a trick to make him a bishop, Martin actually tried to hide. He was quickly discovered and the people called him forward to be ordained to the office of Bishop. Even though he did not really want the office, he was ordained - and he became a holy and hardworking Bishop.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Episcopal Ministry and Pastoral Care</h3>
              <p className="mb-6">
                As a Bishop Martin established a system of parishes to manage his diocese. He made a point to visit each parish at least once per year. In addition to his appointed rounds, Martin combated paganism, particularly the Druid religion which was still prevalent at the time. He passionately and faithfully proclaimed the Gospel of Jesus Christ and won many to the Christian faith. Yet, he longed for more prayer and wanted to pursue a monastic life. In the year 372 Martin established an abbey at Marmoutier so he could retreat there and live as a monk with the many disciples he had attracted.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Defending the Innocent and Final Years</h3>
              <p className="mb-6">
                In the following years, a heresy broke out in the church. An aesthetic sect called the Priscillianists after their leader, Priscillian, had developed in Spain and Gaul. The First Council of Saragossa condemned the heresy, but the Priscillians did not change they practices. This prompted one bishop, Ithacius of Ossonoba to petition the Roman Emperor Magnus Maximus to put him to death. Martin was opposed to the sentence of death, and was joined by Bishop Ambrose of Milan in his opposition. Martin traveled to Trier where the Emperor held court. Martin was able to persuade the Emperor to refrain from putting Priscillian and his followers to death. However, after Martin left, Ithacius persuaded the Emperor to change his mind again and Priscillian and his followers were executed in 385. Martin was so upset by Ithacius, he refused to communicate with his fellow bishop until the Emperor pressured him to resume communicating with his colleague. Martin died in Candes-Saint-Martin, Gaul in 397.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Miracles and Veneration</h3>
              <p>
                The Hagiographer Sulpicius Severus, knew Martin personally and wrote about his life. Many miracles and the casting out of demons were attributed to Martin during his lifetime. According to one account, Martin, while trying to win Druids to follow Jesus Christ and renounce their pagan beliefs, was dared to stand in the path of a sacred tree that was being felled. Martin agreed and was missed by the falling pine, although standing right in its path. This was widely seen as miraculous and a symbol that the message he proclaimed about Jesus Christ was true. Many were converted to the Christian faith. Veneration of St. Martin became popular in the Middle Ages, and was popular with the Frankish kings.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">November 11</div>
              <p className="text-gray-600">Feast of St. Martin of Tours, Bishop and Confessor</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Martin of Tours is celebrated on November 11th, commemorating the day of his death in 397. St. Martin of Tours is one of the most popular saints in the Western Church, and his feast day has been celebrated since the early Middle Ages. His feast day serves as a reminder of the importance of charity, courage in following one's conscience, and the power of evangelization. His life demonstrates the transformative power of Christian charity and the importance of standing up for one's beliefs, even in the face of opposition.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. Martin of Tours' remarkable contributions to charity and evangelization. His feast day serves as a reminder of the importance of sharing with the poor, the courage to follow one's conscience, and the value of pastoral care. Many churches and communities celebrate this day with special Masses and acts of charity, often collecting warm clothing for the poor in memory of his famous act of sharing his cloak. The day also emphasizes the importance of bishops and priests leading exemplary lives and the value of monastic life in the Church. Many people also reflect on their own acts of charity and consider how they can better serve the poor and marginalized.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. Martin of Tours for his intercession in matters of charity, courage, and evangelization. Many people also pray for soldiers, the poor, and those who work with the marginalized. His example encourages us to be generous with our possessions, to have the courage to follow our conscience, and to serve others with compassion and love. St. Martin of Tours' legacy reminds us that even small acts of charity can have profound spiritual significance and that God calls us to be witnesses of His love in the world.
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
                  <li>• <strong>Poor:</strong> Patron of the impoverished</li>
                  <li>• <strong>Soldiers:</strong> Patron of military personnel</li>
                  <li>• <strong>Conscientious Objectors:</strong> Patron of those who refuse to fight</li>
                  <li>• <strong>Tailors:</strong> Patron of clothing makers</li>
                  <li>• <strong>Winemakers:</strong> Patron of wine producers</li>
                  <li>• <strong>Beggars:</strong> Patron of the homeless</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Charity:</strong> Helper in acts of generosity</li>
                  <li>• <strong>Courage:</strong> Patron of moral bravery</li>
                  <li>• <strong>Evangelization:</strong> Helper for spreading the Gospel</li>
                  <li>• <strong>Monastic Life:</strong> Patron of religious communities</li>
                  <li>• <strong>Pastoral Care:</strong> Helper for bishops and priests</li>
                  <li>• <strong>Conversion:</strong> Patron of those seeking faith</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Martin of Tours</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Martin of Tours, Bishop and Confessor, who with courage and charity shared your cloak 
                    with a beggar and became the first conscientious objector in history, help us to be generous with our 
                    possessions and courageous in following our conscience. Through your intercession, may we have the strength 
                    to stand up for what is right, the generosity to share with those in need, and the wisdom to proclaim 
                    the Gospel with love and compassion. Help us to be faithful witnesses of Christ's love and to serve others 
                    with the same charity you showed to the poor. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Martin of Tours, pray for us!"
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
            <Link href="/saints/st-ambrose" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Ambrose
                </h3>
                <p className="text-gray-700 text-sm">
                  Fellow bishop who joined Martin in opposing the death penalty.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-hilary-of-poitiers" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Hilary of Poitiers
                </h3>
                <p className="text-gray-700 text-sm">
                  Martin's teacher and mentor in the Christian faith.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-benedict" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Benedict
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great monastic founder and patron of Europe.
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