import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Anne - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Anne, mother of the Blessed Virgin Mary.',
  keywords: [
    'st anne',
    'saint anne',
    'mother of mary',
    'july 26 feast day',
    'catholic saints',
    'modern saints',
    'patron of mothers'
  ],
  openGraph: {
    title: 'St. Anne - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Anne, mother of the Blessed Virgin Mary.',
    url: 'https://catholicbibleonline.com/saints/st-anne',
  },
  twitter: {
    title: 'St. Anne - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Anne, mother of the Blessed Virgin Mary.',
  }
}

export default function StAnnePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌹</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Anne
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Mother of the Blessed Virgin Mary
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Anne</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 26</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌹</div>
              <div className="text-sm text-gray-600">Modern Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Anne</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Anne, also known as Anna, was the mother of the Blessed Virgin Mary 
                and the grandmother of Jesus Christ. According to Christian tradition, 
                she was married to St. Joachim, and together they lived a life of piety 
                and devotion to God in Jerusalem. The story of St. Anne comes primarily 
                from the apocryphal Gospel of James, which, while not part of the canonical 
                Scriptures, has been influential in Christian tradition and devotion. 
                St. Anne and St. Joachim were both descendants of the House of David, 
                making them part of the royal lineage that would eventually lead to the 
                birth of the Messiah. They were known for their righteousness and their 
                deep faith in God, despite the fact that they were childless for many 
                years, which was considered a great sorrow in their time.
              </p>
              
              <p className="mb-6">
                According to tradition, St. Anne and St. Joachim were married for many 
                years but remained childless, which was a source of great sorrow and 
                even shame in their society. In the Jewish culture of their time, having 
                children was considered a blessing from God, and childlessness was often 
                seen as a sign of divine disfavor. Despite this, Anne and Joachim remained 
                faithful to God and continued to pray for a child. They were both advanced 
                in years when they received the miraculous news that they would become 
                parents. The story tells that an angel appeared to both Anne and Joachim 
                separately, announcing that they would conceive a child who would be 
                special in the eyes of God. This child would be Mary, who would later 
                become the Mother of God.
              </p>
              
              <p className="mb-6">
                When Mary was born, St. Anne and St. Joachim were filled with joy and 
                gratitude to God for this precious gift. They raised Mary in the Jewish 
                faith, teaching her the Scriptures and the traditions of their people. 
                According to tradition, when Mary was three years old, Anne and Joachim 
                presented her to the Temple in Jerusalem, where she would be dedicated 
                to God's service. This event, known as the Presentation of Mary in the 
                Temple, is celebrated in the Church as a feast day on November 21st. 
                St. Anne's role in raising Mary was crucial, as she prepared her daughter 
                to become the Mother of God. Anne's faith, piety, and devotion to God 
                would have had a profound influence on Mary's spiritual development and 
                her readiness to accept the role that God had planned for her.
              </p>
              
              <p className="mb-6">
                St. Anne's life was marked by her deep faith in God and her willingness 
                to accept God's will, even when it seemed impossible. Her patience and 
                perseverance in prayer, despite years of childlessness, demonstrate her 
                trust in God's timing and His plan for her life. When she finally conceived 
                Mary, she recognized this as a gift from God and dedicated her daughter 
                to His service. Anne's role as a mother was not just biological but spiritual, 
                as she helped to form Mary's character and faith. Her example of faithfulness, 
                patience, and trust in God serves as a model for all parents, especially 
                those who may be struggling with infertility or other challenges in their 
                family life. St. Anne's legacy reminds us that God's timing is perfect 
                and that He has a plan for each of us, even when we cannot see it.
              </p>
              
              <p>
                The exact details of St. Anne's later life and death are not known with 
                certainty, but according to tradition, she died in Jerusalem and was 
                buried near the Temple. Her feast day is celebrated on July 26th, and 
                she is venerated as the patron saint of mothers, grandmothers, and women 
                in labor. St. Anne's intercession is particularly sought by those who 
                are struggling with infertility, as she understands the pain and longing 
                of wanting to have children. She is also invoked by mothers and grandmothers 
                who are praying for their children and grandchildren, asking for her 
                guidance and protection. St. Anne's example of faith, patience, and trust 
                in God continues to inspire Christians today, reminding us that God's 
                plans are always for our good and that He hears our prayers, even when 
                the answer seems long in coming.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Anne: Mother of the Blessed Virgin Mary</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Mother of the Blessed Virgin Mary</h3>
              <p className="mb-6">
                St. Anne's greatest legacy is her role as the mother of the Blessed Virgin 
                Mary, making her the grandmother of Jesus Christ. This unique position 
                in salvation history gives her a special place in the Christian tradition 
                and makes her a powerful intercessor for families. Anne's role in raising 
                Mary was crucial to the fulfillment of God's plan for salvation, as she 
                helped to prepare her daughter to become the Mother of God. Her influence 
                on Mary's spiritual development, her teaching of the Jewish faith and 
                traditions, and her example of piety and devotion to God all contributed 
                to Mary's readiness to accept the angel Gabriel's message and to become 
                the Mother of the Savior. Anne's legacy reminds us of the importance 
                of family in God's plan and of the crucial role that parents and grandparents 
                play in the spiritual formation of their children and grandchildren.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron Saint of Mothers and Grandmothers</h3>
              <p className="mb-6">
                St. Anne's designation as the patron saint of mothers and grandmothers 
                recognizes her powerful example of maternal love and her intercession 
                for families. Her experience of infertility and her eventual joy in becoming 
                a mother makes her a particularly powerful advocate for those who are 
                struggling to conceive children. Anne's patience and trust in God during 
                her years of childlessness, and her gratitude when her prayers were finally 
                answered, provide hope and encouragement for couples who are experiencing 
                similar challenges. Her role as a grandmother to Jesus also makes her 
                a special patron for grandmothers, who often play a crucial role in the 
                spiritual formation of their grandchildren. Anne's legacy encourages all 
                mothers and grandmothers to trust in God's plan for their families and 
                to continue praying for their children and grandchildren, even when the 
                answers to their prayers seem long in coming.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Faith and Patience</h3>
              <p>
                St. Anne's life serves as a powerful example of faith, patience, and 
                trust in God's timing. Her years of childlessness, which would have been 
                a source of great sorrow and even shame in her society, did not cause 
                her to lose faith in God. Instead, she continued to pray and to trust 
                in God's plan for her life. When she finally conceived Mary, she recognized 
                this as a gift from God and dedicated her daughter to His service. Anne's 
                example teaches us that God's timing is perfect and that He has a plan 
                for each of us, even when we cannot see it. Her patience and perseverance 
                in prayer, despite years of waiting, demonstrate the importance of trusting 
                in God's will and His timing. Anne's legacy reminds us that our struggles 
                and challenges can be part of God's plan to prepare us for the blessings 
                He has in store for us, and that our faithfulness during difficult times 
                can lead to great joy and fulfillment.
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
              <p className="text-gray-600">Feast of St. Anne</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Anne is celebrated on July 26th, during the summer 
                season when the Church reflects on the themes of growth and harvest. 
                This feast is celebrated as a memorial in the Roman Catholic Church, 
                recognizing Anne's importance as the mother of the Blessed Virgin Mary 
                and her role in salvation history. The feast falls during a time when 
                many families are together on vacation, making it an ideal time to remember 
                Anne's example of maternal love and her powerful intercession for families. 
                The feast provides an opportunity to honor Anne's memory and to reflect 
                on the importance of family, faith, and trust in God's plan for our lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Anne, many people participate in special prayers 
                and devotions to honor her memory and seek her intercession. Churches 
                hold special Masses and services, particularly those dedicated to St. 
                Anne. Many mothers and grandmothers gather to pray for their families, 
                asking for St. Anne's intercession in helping them to be better parents 
                and grandparents. The day is also marked by prayers for those struggling 
                with infertility, asking for St. Anne's help in their journey toward 
                parenthood. Many people also take time to reflect on their own family 
                relationships and to pray for the grace to be more patient and trusting 
                in God's plan for their lives. The feast is also a time to reflect on 
                how we can incorporate Anne's virtues of faith, patience, and trust into 
                our daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of patience 
                and the ability to trust in God's plan for our lives, even when it 
                seems difficult or unclear. Many people make special petitions for their 
                families and for those struggling with infertility, asking for St. Anne's 
                intercession in helping them to find peace and hope. The day is also 
                a time to reflect on the importance of family prayer and to pray for 
                the grace to be more faithful and patient in our relationships. St. Anne's 
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
                  <li>• <strong>Mothers:</strong> Patron saint of mothers</li>
                  <li>• <strong>Grandmothers:</strong> Patron of grandmothers</li>
                  <li>• <strong>Women in Labor:</strong> Patron of women in labor</li>
                  <li>• <strong>Infertility:</strong> Patron of infertility</li>
                  <li>• <strong>Families:</strong> Patron of families</li>
                  <li>• <strong>Childbirth:</strong> Patron of childbirth</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Anne</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Anne, mother of the Blessed Virgin Mary and grandmother of 
                    Jesus Christ, help me to trust in God's plan for my life.
                  </p>
                  <p className="mb-4">
                    Teach me to be patient in prayer and to have faith that God hears 
                    my petitions. Help me to be a good parent and to raise my children 
                    in the faith.
                  </p>
                  <p>
                    St. Anne, pray for me that I may have the patience to wait for God's 
                    timing, the faith to trust in His plan, and the love to care for 
                    my family as you cared for Mary. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Mothers</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Anne, patron saint of mothers, intercede for all mothers who 
                    are praying for their children.
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
                    "St. Anne, pray for us!"
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
            <Link href="/saints/st-mary-virgin" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Marian Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Mary the Virgin
                </h3>
                <p className="text-gray-700 text-sm">
                  Daughter of St. Anne and Mother of God.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joachim" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joachim
                </h3>
                <p className="text-gray-700 text-sm">
                  Husband of St. Anne and father of Mary.
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