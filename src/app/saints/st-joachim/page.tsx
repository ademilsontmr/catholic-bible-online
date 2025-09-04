import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Joachim - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Joachim, father of the Blessed Virgin Mary.',
  keywords: [
    'st joachim',
    'saint joachim',
    'father of mary',
    'july 26 feast day',
    'catholic saints',
    'modern saints',
    'patron of fathers'
  ],
  openGraph: {
    title: 'St. Joachim - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Joachim, father of the Blessed Virgin Mary.',
    url: 'https://catholicbibleonline.com/saints/st-joachim',
  },
  twitter: {
    title: 'St. Joachim - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Joachim, father of the Blessed Virgin Mary.',
  }
}

export default function StJoachimPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌿</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Joachim
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Father of the Blessed Virgin Mary
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Joachim</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 26</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌿</div>
              <div className="text-sm text-gray-600">Modern Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Joachim</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Joachim was the father of the Blessed Virgin Mary and the grandfather 
                of Jesus Christ. According to Christian tradition, he was married to St. 
                Anne, and together they lived a life of piety and devotion to God in Jerusalem. 
                The story of St. Joachim comes primarily from the apocryphal Gospel of James, 
                which, while not part of the canonical Scriptures, has been influential 
                in Christian tradition and devotion. St. Joachim and St. Anne were both 
                descendants of the House of David, making them part of the royal lineage 
                that would eventually lead to the birth of the Messiah. They were known 
                for their righteousness and their deep faith in God, despite the fact 
                that they were childless for many years, which was considered a great 
                sorrow in their time.
              </p>
              
              <p className="mb-6">
                According to tradition, St. Joachim was a wealthy and respected man in 
                Jerusalem, known for his generosity to the poor and his devotion to God. 
                He and his wife Anne were married for many years but remained childless, 
                which was a source of great sorrow and even shame in their society. In 
                the Jewish culture of their time, having children was considered a blessing 
                from God, and childlessness was often seen as a sign of divine disfavor. 
                Despite this, Joachim and Anne remained faithful to God and continued 
                to pray for a child. They were both advanced in years when they received 
                the miraculous news that they would become parents. The story tells that 
                an angel appeared to both Joachim and Anne separately, announcing that 
                they would conceive a child who would be special in the eyes of God.
              </p>
              
              <p className="mb-6">
                When Mary was born, St. Joachim and St. Anne were filled with joy and 
                gratitude to God for this precious gift. They raised Mary in the Jewish 
                faith, teaching her the Scriptures and the traditions of their people. 
                According to tradition, when Mary was three years old, Joachim and Anne 
                presented her to the Temple in Jerusalem, where she would be dedicated 
                to God's service. This event, known as the Presentation of Mary in the 
                Temple, is celebrated in the Church as a feast day on November 21st. 
                St. Joachim's role in raising Mary was crucial, as he helped to prepare 
                his daughter to become the Mother of God. His faith, piety, and devotion 
                to God would have had a profound influence on Mary's spiritual development 
                and her readiness to accept the role that God had planned for her.
              </p>
              
              <p className="mb-6">
                St. Joachim's life was marked by his deep faith in God and his willingness 
                to accept God's will, even when it seemed impossible. His patience and 
                perseverance in prayer, despite years of childlessness, demonstrate his 
                trust in God's timing and His plan for his life. When he finally conceived 
                Mary with Anne, he recognized this as a gift from God and dedicated his 
                daughter to His service. Joachim's role as a father was not just biological 
                but spiritual, as he helped to form Mary's character and faith. His example 
                of faithfulness, patience, and trust in God serves as a model for all 
                fathers, especially those who may be struggling with infertility or other 
                challenges in their family life. St. Joachim's legacy reminds us that 
                God's timing is perfect and that He has a plan for each of us, even when 
                we cannot see it.
              </p>
              
              <p>
                The exact details of St. Joachim's later life and death are not known 
                with certainty, but according to tradition, he died in Jerusalem and 
                was buried near the Temple. His feast day is celebrated on July 26th, 
                the same day as his wife St. Anne, and he is venerated as the patron 
                saint of fathers and grandfathers. St. Joachim's intercession is particularly 
                sought by those who are struggling with infertility, as he understands 
                the pain and longing of wanting to have children. He is also invoked 
                by fathers and grandfathers who are praying for their children and grandchildren, 
                asking for his guidance and protection. St. Joachim's example of faith, 
                patience, and trust in God continues to inspire Christians today, reminding 
                us that God's plans are always for our good and that He hears our prayers, 
                even when the answer seems long in coming.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Joachim: Father of the Blessed Virgin Mary</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Father of the Blessed Virgin Mary</h3>
              <p className="mb-6">
                St. Joachim's greatest legacy is his role as the father of the Blessed 
                Virgin Mary, making him the grandfather of Jesus Christ. This unique 
                position in salvation history gives him a special place in the Christian 
                tradition and makes him a powerful intercessor for families. Joachim's 
                role in raising Mary was crucial to the fulfillment of God's plan for 
                salvation, as he helped to prepare his daughter to become the Mother 
                of God. His influence on Mary's spiritual development, his teaching of 
                the Jewish faith and traditions, and his example of piety and devotion 
                to God all contributed to Mary's readiness to accept the angel Gabriel's 
                message and to become the Mother of the Savior. Joachim's legacy reminds 
                us of the importance of family in God's plan and of the crucial role 
                that parents and grandparents play in the spiritual formation of their 
                children and grandchildren.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron Saint of Fathers and Grandfathers</h3>
              <p className="mb-6">
                St. Joachim's designation as the patron saint of fathers and grandfathers 
                recognizes his powerful example of paternal love and his intercession 
                for families. His experience of infertility and his eventual joy in becoming 
                a father makes him a particularly powerful advocate for those who are 
                struggling to conceive children. Joachim's patience and trust in God 
                during his years of childlessness, and his gratitude when his prayers 
                were finally answered, provide hope and encouragement for couples who 
                are experiencing similar challenges. His role as a grandfather to Jesus 
                also makes him a special patron for grandfathers, who often play a crucial 
                role in the spiritual formation of their grandchildren. Joachim's legacy 
                encourages all fathers and grandfathers to trust in God's plan for their 
                families and to continue praying for their children and grandchildren, 
                even when the answers to their prayers seem long in coming.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Faith and Patience</h3>
              <p>
                St. Joachim's life serves as a powerful example of faith, patience, and 
                trust in God's timing. His years of childlessness, which would have been 
                a source of great sorrow and even shame in his society, did not cause 
                him to lose faith in God. Instead, he continued to pray and to trust 
                in God's plan for his life. When he finally conceived Mary with Anne, 
                he recognized this as a gift from God and dedicated his daughter to His 
                service. Joachim's example teaches us that God's timing is perfect and 
                that He has a plan for each of us, even when we cannot see it. His patience 
                and perseverance in prayer, despite years of waiting, demonstrate the 
                importance of trusting in God's will and His timing. Joachim's legacy 
                reminds us that our struggles and challenges can be part of God's plan 
                to prepare us for the blessings He has in store for us, and that our 
                faithfulness during difficult times can lead to great joy and fulfillment.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">July 26</div>
              <p className="text-gray-600">Feast of St. Joachim</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Joachim is celebrated on July 26th, during the summer 
                season when the Church reflects on the themes of growth and harvest. 
                This feast is celebrated as a memorial in the Roman Catholic Church, 
                recognizing Joachim's importance as the father of the Blessed Virgin 
                Mary and his role in salvation history. The feast falls during a time 
                when many families are together on vacation, making it an ideal time 
                to remember Joachim's example of paternal love and his powerful intercession 
                for families. The feast provides an opportunity to honor Joachim's memory 
                and to reflect on the importance of family, faith, and trust in God's 
                plan for our lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Joachim, many people participate in special 
                prayers and devotions to honor his memory and seek his intercession. 
                Churches hold special Masses and services, particularly those dedicated 
                to St. Joachim. Many fathers and grandfathers gather to pray for their 
                families, asking for St. Joachim's intercession in helping them to be 
                better parents and grandparents. The day is also marked by prayers for 
                those struggling with infertility, asking for St. Joachim's help in 
                their journey toward parenthood. Many people also take time to reflect 
                on their own family relationships and to pray for the grace to be more 
                patient and trusting in God's plan for their lives. The feast is also 
                a time to reflect on how we can incorporate Joachim's virtues of faith, 
                patience, and trust into our daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of patience 
                and the ability to trust in God's plan for our lives, even when it 
                seems difficult or unclear. Many people make special petitions for their 
                families and for those struggling with infertility, asking for St. Joachim's 
                intercession in helping them to find peace and hope. The day is also 
                a time to reflect on the importance of family prayer and to pray for 
                the grace to be more faithful and patient in our relationships. St. Joachim's 
                feast day encourages us to remember that we are all part of God's family 
                and that He has a plan for each of us, even when we cannot see it. It 
                is also a time to pray for the grace to be more trusting in God's timing 
                and to be more patient with ourselves and others as we wait for God's 
                promises to be fulfilled.
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
                  <li>• <strong>Fathers:</strong> Patron saint of fathers</li>
                  <li>• <strong>Grandfathers:</strong> Patron of grandfathers</li>
                  <li>• <strong>Infertility:</strong> Patron of infertility</li>
                  <li>• <strong>Families:</strong> Patron of families</li>
                  <li>• <strong>Parenthood:</strong> Patron of parenthood</li>
                  <li>• <strong>Marriage:</strong> Patron of marriage</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Prayer:</strong> Helper in prayer life</li>
                  <li>• <strong>Patience:</strong> Patron of patience</li>
                  <li>• <strong>Faith:</strong> Helper in faith</li>
                  <li>• <strong>Family Unity:</strong> Patron of family unity</li>
                  <li>• <strong>Trust:</strong> Helper in trusting God</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Joachim</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Joachim, father of the Blessed Virgin Mary and grandfather 
                    of Jesus Christ, help me to trust in God's plan for my life.
                  </p>
                  <p className="mb-4">
                    Teach me to be patient in prayer and to have faith that God hears 
                    my petitions. Help me to be a good father and to raise my children 
                    in the faith.
                  </p>
                  <p>
                    St. Joachim, pray for me that I may have the patience to wait for God's 
                    timing, the faith to trust in His plan, and the love to care for 
                    my family as you cared for Mary. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Fathers</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Joachim, patron saint of fathers, intercede for all fathers 
                    who are praying for their children.
                  </p>
                  <p>
                    Help us to be patient, faithful, and trusting in God's plan for 
                    our families. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Joachim, pray for us!"
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
            <Link href="/saints/st-anne" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anne
                </h3>
                <p className="text-gray-700 text-sm">
                  Wife of St. Joachim and mother of Mary.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-mary-virgin" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Marian Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Mary the Virgin
                </h3>
                <p className="text-gray-700 text-sm">
                  Daughter of St. Joachim and Mother of God.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joseph" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joseph
                </h3>
                <p className="text-gray-700 text-sm">
                  Husband of Mary and foster father of Jesus.
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