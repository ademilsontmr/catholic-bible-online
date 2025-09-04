import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Alphonsus Liguori - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Alphonsus Liguori, Bishop, Doctor of the Church, and founder of the Redemptorist Congregation.',
  keywords: [
    'st alphonsus liguori',
    'saint alphonsus liguori',
    'st alphonsus biography',
    'st alphonsus feast day',
    'st alphonsus patron saint',
    'catholic saints',
    'redemptorist founder',
    'doctor of the church'
  ],
  openGraph: {
    title: 'St. Alphonsus Liguori - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Alphonsus Liguori, Bishop, Doctor of the Church, and founder of the Redemptorist Congregation.',
    url: 'https://catholicbibleonline.com/saints/st-alphonsus-liguori',
  },
  twitter: {
    title: 'St. Alphonsus Liguori - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Alphonsus Liguori, Bishop, Doctor of the Church, and founder of the Redemptorist Congregation.',
  }
}

export default function StAlphonsusLiguoriPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Alphonsus Liguori
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Bishop, Doctor of the Church, and Founder of the Redemptorist Congregation
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Alphonsus Liguori</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 1</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📚</div>
              <div className="text-sm text-gray-600">Doctor of the Church</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Alphonsus Liguori</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Alphonsus Marie Antony John Cosmos Damien Michael Gaspard de Liguori was born on September 27, 1696, 
                at Marianella, near Naples, Italy. He was the oldest of seven children, raised in a pious home by his 
                devout mother of Spanish descent and his father, Don Joseph, who was a naval officer and captain of the 
                Royal Galleys. From an early age, Alphonsus showed remarkable intellectual gifts and spiritual sensitivity, 
                going on retreats with his father and developing a deep love for God and the Church.
              </p>
              
              <p className="mb-6">
                Educated at the University of Naples, Alphonsus received his doctorate at the extraordinarily young age 
                of sixteen, demonstrating his exceptional intellectual abilities. By age nineteen, he was practicing law 
                and had achieved considerable fame in the legal profession. However, he soon began to see the transitory 
                nature of the secular world and felt called to a higher purpose. After a brief but successful career in 
                law, he retreated from the law courts and his worldly fame, seeking a more meaningful path.
              </p>
              
              <p className="mb-6">
                On August 28, 1723, while visiting the local Hospital for Incurables, Alphonsus had a profound vision 
                and was told to consecrate his life solely to God. This divine encounter marked a turning point in his 
                life. Despite facing persecution from his family, who had high hopes for his legal career, Alphonsus 
                dedicated himself to the religious life. He finally agreed to become a priest but to live at home as a 
                member of a group of secular missionaries, allowing him to serve God while maintaining some connection 
                to his family.
              </p>
              
              <p className="mb-6">
                Ordained on December 21, 1726, Alphonsus spent six years giving missions throughout Naples, preaching 
                with great fervor and effectiveness. In April 1729, he went to live at the "Chiflese College," founded 
                in Naples by Father Matthew Ripa, the Apostle of China. There he met Bishop Thomas Falcoia, founder of 
                the Congregation of Pious Workers, and Sister Mary Celeste, a mystic. These friendships would prove 
                crucial to his future work and spiritual development.
              </p>
              
              <p className="mb-6">
                With their aid, Alphonsus founded the Congregation of the Most Holy Redeemer (the Redemptorists) on 
                November 9, 1732. The foundation faced immediate problems, and after just one year, Alphonsus found 
                himself with only one lay brother, his other companions having left to form their own religious group. 
                Undeterred, he started again, recruited new members, and in 1743 became the prior of two new congregations, 
                one for men and one for women. Pope Benedict XIV gave his approval for the men's congregation in 1749 
                and for the women's in 1750.
              </p>
              
              <p className="mb-6">
                Alphonsus continued preaching missions in rural areas and writing extensively. He refused to become the 
                bishop of Palermo, but in 1762 had to accept the papal command to accept the see of St. Agatha of the 
                Goths near Naples. Here he discovered more than thirty thousand uninstructed men and women and four 
                hundred indifferent priests. For thirteen years, Alphonsus fed the poor, instructed families, reorganized 
                the seminary and religious houses, taught theology, and wrote prolifically.
              </p>
              
              <p className="mb-6">
                His austerities were rigorous, and he suffered daily the pain from rheumatism that was beginning to 
                deform his body. He spent several years having to drink from tubes because his head was so bent forward. 
                An attack of rheumatic fever from May 1768 to June 1769 left him paralyzed. He was not allowed to resign 
                his see until 1775, despite his physical suffering.
              </p>
              
              <p>
                In 1780, Alphonsus was tricked into signing a submission for royal approval of his congregation. This 
                submission altered the original rule, and as a result, Alphonsus was denied any authority among the 
                Redemptorists. Deposed and excluded from his own congregation, Alphonsus suffered great anguish. But 
                he overcame his depression, and he experienced visions, performed miracles, and gave prophecies. He 
                died peacefully on August 1, 1787, at Nocera di Pagani, near Naples, as the Angelus was ringing. He 
                was beatified in 1816, canonized in 1839, and declared a Doctor of the Church by Pope Pius IX in 1871.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Alphonsus Liguori: Doctor of the Church and Redemptorist Founder</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Theological Contributions</h3>
              <p className="mb-6">
                St. Alphonsus Liguori's most enduring legacy is his vast theological and spiritual writings, which 
                earned him the title of Doctor of the Church. His writings on moral, theological, and ascetic matters 
                had great impact and have survived through the years, especially his Moral Theology and his Glories of 
                Mary. His approach to moral theology was characterized by a balanced and compassionate understanding 
                of human weakness, emphasizing God's mercy and the importance of pastoral care in the confessional. 
                His works continue to be studied and respected by theologians and spiritual directors today.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">The Redemptorist Congregation</h3>
              <p className="mb-6">
                St. Alphonsus's founding of the Congregation of the Most Holy Redeemer (the Redemptorists) represents 
                one of the most significant contributions to the Church's missionary and pastoral work. The Redemptorists 
                were established to preach the Gospel to the poor and most abandoned, particularly in rural areas where 
                the Church's presence was weak. The congregation has spread throughout the world, continuing Alphonsus's 
                mission of bringing God's love and mercy to all people, especially those most in need of spiritual care 
                and guidance.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Pastoral Care</h3>
              <p className="mb-6">
                As a bishop, St. Alphonsus demonstrated exceptional pastoral care and administrative skill. When he 
                took over the diocese of St. Agatha of the Goths, he found a diocese in disarray with thousands of 
                uninstructed faithful and hundreds of indifferent priests. Through his tireless work over thirteen 
                years, he transformed the diocese, reorganizing seminaries, religious houses, and providing proper 
                instruction to the faithful. His example continues to inspire bishops and priests in their pastoral 
                ministry, showing that effective leadership requires both administrative skill and deep spiritual 
                commitment.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Resilience</h3>
              <p>
                St. Alphonsus's life is a powerful example of spiritual resilience in the face of suffering and 
                adversity. Despite being paralyzed by rheumatism and eventually being deposed from his own congregation, 
                he never lost his faith or his commitment to God's work. His ability to overcome depression and continue 
                to experience visions, perform miracles, and give prophecies demonstrates the power of grace to sustain 
                us even in our darkest moments. His example teaches us that true holiness is not about avoiding suffering 
                but about finding God's presence and purpose even in the midst of pain and disappointment.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">August 1</div>
              <p className="text-gray-600">Feast of St. Alphonsus Liguori, Doctor of the Church</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Alphonsus's feast day is celebrated on August 1st, commemorating the day of his death in 1787. 
                This feast is particularly significant for the Redemptorist order, which he founded, and for the 
                Church as a whole, as it honors one of its greatest theologians and spiritual writers. The feast 
                serves as a reminder of the importance of theological study, pastoral care, and the missionary 
                spirit in the life of the Church. Churches throughout the world, especially those served by 
                Redemptorists, hold special Masses and prayer services on this day.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Alphonsus's feast day, many communities, especially those with Redemptorist connections, 
                may choose to reflect on the themes of theological study, pastoral care, and missionary work. 
                Some may hold special prayer services for theologians, confessors, and those involved in the 
                lay apostolate, asking for St. Alphonsus's intercession. The day also serves as an opportunity 
                to pray for the Redemptorist order and all those who work to bring God's mercy to the poor and 
                abandoned. Many may also take time to study his writings, particularly his Moral Theology or 
                his Glories of Mary.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                Devotees pray to St. Alphonsus for wisdom in theological study, for guidance in pastoral care, 
                for strength in missionary work, and for help in understanding moral theology. His intercession 
                is particularly sought by confessors, moral theologians, those involved in the lay apostolate, 
                and members of the Redemptorist order. His example reminds us that true learning should always 
                be directed toward the service of God and others, and that the greatest wisdom comes from a 
                deep relationship with Christ.
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
                  <li>• <strong>Confessors:</strong> For his expertise in moral theology</li>
                  <li>• <strong>Moral Theologians:</strong> For his extensive writings on moral theology</li>
                  <li>• <strong>Lay Apostolate:</strong> For his work with secular missionaries</li>
                  <li>• <strong>Redemptorist Order:</strong> As the founder of the congregation</li>
                  <li>• <strong>Theologians:</strong> As a Doctor of the Church</li>
                  <li>• <strong>Bishops:</strong> For his exemplary pastoral leadership</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Pastoral Care:</strong> For those serving in parish ministry</li>
                  <li>• <strong>Missionary Work:</strong> For those preaching to the poor</li>
                  <li>• <strong>Spiritual Writing:</strong> For authors of religious works</li>
                  <li>• <strong>Rheumatism Sufferers:</strong> For those with chronic pain</li>
                  <li>• <strong>Religious Orders:</strong> For new foundations and communities</li>
                  <li>• <strong>Academic Study:</strong> For students of theology</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Alphonsus Liguori</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed St. Alphonsus, Doctor of the Church and founder of the Redemptorists, 
                    you who dedicated your life to preaching God's mercy and writing about His love, 
                    intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    Help us to follow your example of tireless service to the poor and abandoned. 
                    Grant us the wisdom to understand moral theology with compassion, the courage 
                    to preach the Gospel with fervor, and the humility to serve others with love.
                  </p>
                  <p className="mb-4">
                    Inspire us with your dedication to pastoral care and your commitment to bringing 
                    God's mercy to all people. Help us to understand that true learning should always 
                    be directed toward the service of God and others, and that the greatest wisdom 
                    comes from a deep relationship with Christ.
                  </p>
                  <p>
                    Through your powerful intercession, may we find the strength to overcome adversity, 
                    the wisdom to guide others in their spiritual journey, and the love to serve the 
                    poor and abandoned with the same dedication you showed throughout your life. 
                    St. Alphonsus Liguori, pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Alphonsus Liguori, Doctor of the Church and founder of the Redemptorists, pray for us!"
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
            <Link href="/saints/st-thomas-aquinas" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thomas Aquinas
                </h3>
                <p className="text-gray-700 text-sm">
                  The Angelic Doctor, master of theology and philosophy.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-de-sales" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis de Sales
                </h3>
                <p className="text-gray-700 text-sm">
                  Doctor of the Church and patron of writers and journalists.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-ignatius-loyola" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Founder Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Ignatius Loyola
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Society of Jesus and author of the Spiritual Exercises.
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