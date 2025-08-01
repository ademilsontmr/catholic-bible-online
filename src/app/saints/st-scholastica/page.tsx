import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Scholastica - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Scholastica, twin sister of St. Benedict and founder of Benedictine nuns.',
  keywords: [
    'st scholastica',
    'saint scholastica',
    'benedictine nuns',
    'february 10 feast day',
    'catholic saints',
    'doctor saints',
    'twin sister of st benedict'
  ],
  openGraph: {
    title: 'St. Scholastica - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Scholastica, twin sister of St. Benedict and founder of Benedictine nuns.',
    url: 'https://catholicbibleonline.com/saints/st-scholastica',
  },
  twitter: {
    title: 'St. Scholastica - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Scholastica, twin sister of St. Benedict and founder of Benedictine nuns.',
  }
}

export default function StScholasticaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🕊️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Scholastica
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Twin Sister of St. Benedict and Founder of Benedictine Nuns
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Scholastica</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">February 10</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🕊️</div>
              <div className="text-sm text-gray-600">Doctor Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Scholastica</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Scholastica was born around 480 A.D. in Nursia, Italy, to a noble Roman 
                family. She was the twin sister of St. Benedict, who would later become the 
                Father of Western Monasticism. From an early age, both twins showed a deep 
                devotion to God and a desire for the religious life. Scholastica and Benedict 
                were raised in a Christian household where they learned the importance of 
                prayer, charity, and service to others. Their parents, who were devout Christians, 
                provided them with a solid foundation in the faith and encouraged their spiritual 
                development. The twins shared a special bond that would last throughout their 
                lives, united by their common love for God and their desire to serve Him.
              </p>
              
              <p className="mb-6">
                As they grew older, both Scholastica and Benedict felt called to dedicate 
                their lives completely to God. While Benedict left home to pursue his studies 
                in Rome and later became a hermit, Scholastica chose to remain closer to home 
                and began living a life of prayer and devotion. She established a small community 
                of women who shared her desire for a life of prayer and service. Scholastica's 
                community was located near her brother's monastery at Monte Cassino, allowing 
                the twins to maintain their close relationship while each pursued their respective 
                vocations. Scholastica's community followed a similar pattern of prayer and 
                work as her brother's monks, adapting the Benedictine way of life for women.
              </p>
              
              <p className="mb-6">
                Scholastica's community grew as more women were drawn to her example of holiness 
                and her gentle but firm leadership. She established what would become the first 
                Benedictine convent for women, creating a model for female monasticism that 
                would spread throughout Europe. Scholastica's nuns followed a rule of life 
                that emphasized prayer, work, and community living, similar to the Rule that 
                her brother Benedict would write for his monks. The community lived in simple 
                dwellings near the monastery, maintaining their own chapel and common areas 
                while sharing in the spiritual life of the larger Benedictine family. Scholastica 
                was known for her wisdom, her gentle spirit, and her ability to guide her 
                sisters with love and understanding.
              </p>
              
              <p className="mb-6">
                One of the most famous stories about St. Scholastica involves her annual 
                visit with her brother Benedict. Each year, Scholastica would travel to 
                meet Benedict at a house near his monastery for a day of spiritual conversation 
                and prayer. During one of these visits, as evening approached, Benedict 
                prepared to return to his monastery, following the monastic custom of spending 
                the night in his own cell. However, Scholastica, sensing that this might 
                be their last meeting on earth, begged her brother to stay longer so they 
                could continue their spiritual conversation. Benedict, following the strict 
                monastic rule, refused to spend the night outside his monastery. Scholastica 
                then prayed to God, and immediately a violent storm broke out, making it 
                impossible for Benedict to leave. When Benedict asked his sister what she 
                had done, she replied that she had asked God for this favor, and since he 
                would not listen to her, God had listened to her instead. Benedict, recognizing 
                the power of his sister's prayer, stayed with her, and they spent the night 
                in spiritual conversation and prayer.
              </p>
              
              <p>
                Three days after this meeting, St. Scholastica died peacefully in her convent. 
                According to tradition, Benedict, who was in his monastery at the time, 
                saw his sister's soul ascending to heaven in the form of a dove. This vision 
                confirmed to him that his beloved sister had entered into eternal life. 
                Benedict had Scholastica's body brought to his monastery and buried her 
                in the tomb he had prepared for himself, so that in death as in life, they 
                would not be separated. St. Scholastica's death marked the end of a life 
                that had profoundly influenced the development of female monasticism in 
                the Church. Her example of prayer, community living, and spiritual leadership 
                continues to inspire women religious and lay people today. St. Scholastica 
                was canonized by the Church, and her feast day is celebrated on February 
                10th, the day after the feast of St. Benedict's sister, St. Scholastica, 
                in the traditional calendar.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Scholastica: Founder of Benedictine Nuns</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Founder of Benedictine Nuns</h3>
              <p className="mb-6">
                St. Scholastica's greatest legacy is her establishment of the first Benedictine 
                convent for women, creating a model for female monasticism that would spread 
                throughout Europe and the world. Scholastica's community was the first to 
                adapt the Benedictine way of life specifically for women, demonstrating that 
                the monastic ideal of prayer, work, and community living was not limited 
                to men. Her nuns followed a rule of life that emphasized the same values 
                as her brother's monks: stability, obedience, and conversion of life. Scholastica's 
                community provided women with an opportunity to dedicate their lives completely 
                to God while living in community with others who shared their spiritual 
                goals. The Benedictine nuns who followed in Scholastica's footsteps would 
                become important centers of learning, culture, and spiritual formation throughout 
                the Middle Ages and beyond.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Spiritual Friendship</h3>
              <p className="mb-6">
                St. Scholastica's relationship with her brother Benedict serves as a powerful 
                example of spiritual friendship and the importance of family bonds in the 
                spiritual life. Their annual meetings for spiritual conversation and prayer 
                demonstrate the value of sharing one's spiritual journey with others, especially 
                with family members. Scholastica's famous prayer during their last meeting, 
                which brought about a storm to keep her brother with her longer, shows the 
                power of prayer and the importance of spending time with loved ones. Her 
                example reminds us that spiritual growth often happens in the context of 
                relationships and that we should cherish the time we have with those we love. 
                Scholastica's legacy encourages us to maintain strong family bonds while 
                pursuing our spiritual goals and to support one another in our journey toward 
                God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Example of Women's Leadership</h3>
              <p>
                St. Scholastica's life serves as an important example of women's leadership 
                in the Church and in religious communities. As the founder and leader of 
                her Benedictine community, Scholastica demonstrated that women could exercise 
                spiritual authority and guide others in their spiritual development. Her 
                gentle but firm leadership style, characterized by wisdom, understanding, 
                and love, provides a model for effective spiritual leadership that is based 
                on service rather than power. Scholastica's example challenges the traditional 
                view that religious leadership was exclusively the domain of men and shows 
                that women have always played important roles in the spiritual life of the 
                Church. Her legacy continues to inspire women religious and lay women today 
                to take on leadership roles in their communities and to use their gifts 
                for the service of God and others.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">February 10</div>
              <p className="text-gray-600">Feast of St. Scholastica</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Scholastica is celebrated on February 10th, during the 
                winter season when the Church reflects on the themes of preparation and 
                waiting. This feast is celebrated as a memorial in the Roman Catholic Church, 
                recognizing Scholastica's importance as the founder of Benedictine nuns 
                and the twin sister of St. Benedict. The feast falls during a time when 
                many people are seeking warmth and comfort, making it an ideal time to 
                remember Scholastica's example of spiritual friendship and community living. 
                The feast provides an opportunity to honor Scholastica's memory and to 
                reflect on the importance of relationships and community in our spiritual 
                lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Scholastica, many people participate in special 
                prayers and devotions to honor her memory and seek her intercession. Churches, 
                particularly those associated with the Benedictine Order, hold special Masses 
                and services. Many Benedictine convents hold processions and special celebrations 
                to honor their foundress. The day is also marked by prayers for women religious 
                and for the strengthening of family bonds, asking for St. Scholastica's 
                intercession in helping to build stronger relationships and communities. 
                Many people also take time to reflect on their own family relationships 
                and to pray for the grace to strengthen their bonds with loved ones. The 
                feast is also a time to reflect on how we can incorporate Benedictine values 
                of prayer, work, and community into our daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of spiritual friendship 
                and the ability to maintain strong family bonds while pursuing our spiritual 
                goals. Many people make special petitions for women religious and for the 
                strengthening of family relationships, asking for St. Scholastica's intercession 
                in helping to build stronger communities. The day is also a time to reflect 
                on the importance of spending quality time with loved ones and to pray 
                for the wisdom to balance our spiritual and family commitments. St. Scholastica's 
                feast day encourages us to remember that we are all called to support one 
                another in our spiritual journey and to cherish the relationships that God 
                has given us. It is also a time to pray for the courage to take on leadership 
                roles in our communities and to use our gifts for the service of others.
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
                  <li>• <strong>Nuns:</strong> Patron of Benedictine nuns</li>
                  <li>• <strong>Women Religious:</strong> Patron of women religious</li>
                  <li>• <strong>Twins:</strong> Patron of twins</li>
                  <li>• <strong>Families:</strong> Patron of family relationships</li>
                  <li>• <strong>Convents:</strong> Patron of convents</li>
                  <li>• <strong>Monastic Life:</strong> Patron of monastic life</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Prayer:</strong> Helper in prayer life</li>
                  <li>• <strong>Community:</strong> Helper in building community</li>
                  <li>• <strong>Family Bonds:</strong> Patron of family relationships</li>
                  <li>• <strong>Spiritual Friendship:</strong> Helper in spiritual friendships</li>
                  <li>• <strong>Women's Leadership:</strong> Patron of women's leadership</li>
                  <li>• <strong>Intercession:</strong> Powerful advocate in heaven</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Scholastica</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Scholastica, founder of Benedictine nuns and twin sister of St. Benedict, 
                    help me to strengthen my family bonds and spiritual friendships.
                  </p>
                  <p className="mb-4">
                    Teach me to balance my spiritual goals with my family commitments and 
                    to support others in their journey toward God. Help me to build community 
                    and to use my gifts for the service of others.
                  </p>
                  <p>
                    St. Scholastica, pray for me that I may have the wisdom to maintain 
                    strong relationships, the courage to take on leadership roles, and the 
                    love to build community in the spirit of your example. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Family Bonds</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Scholastica, patron of family relationships, intercede for my family 
                    and all families.
                  </p>
                  <p>
                    Help us to strengthen our bonds of love and to support one another 
                    in our spiritual journey. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Scholastica, pray for us!"
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
            <Link href="/saints/st-benedict" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Benedict
                </h3>
                <p className="text-gray-700 text-sm">
                  Twin brother of St. Scholastica and Father of Western Monasticism.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-gregory-great" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Gregory the Great
                </h3>
                <p className="text-gray-700 text-sm">
                  Pope and biographer of St. Benedict and St. Scholastica.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-bernard" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Bernard of Clairvaux
                </h3>
                <p className="text-gray-700 text-sm">
                  Cistercian monk and Doctor of the Church.
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