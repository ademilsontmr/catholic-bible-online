import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Anselm - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Anselm, Archbishop of Canterbury and Doctor of the Church, known for his theological writings and defense of the faith.',
  keywords: [
    'st anselm',
    'saint anselm',
    'archbishop anselm',
    'st anselm biography',
    'st anselm feast day',
    'st anselm patron saint',
    'catholic saints',
    'april 21 feast day',
    'medieval saints',
    'canterbury',
    'doctor of the church',
    'theology'
  ],
  openGraph: {
    title: 'St. Anselm - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Anselm, Archbishop of Canterbury and Doctor of the Church.',
    url: 'https://catholicbibleonline.com/saints/st-anselm',
  },
  twitter: {
    title: 'St. Anselm - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Anselm, Archbishop of Canterbury and Doctor of the Church.',
  }
}

export default function StAnselmPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔬</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Anselm
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Archbishop of Canterbury, Doctor of the Church, Theologian and Philosopher
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Anselm</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">April 21</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🔬</div>
              <div className="text-sm text-gray-600">Medieval</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Anselm</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Anselm was born of noble parents at Aosta, in Piedmont, around the year 1033. 
                His pious mother took care to give him an early tincture of piety, and the impressions 
                her instructions made upon him were as lasting as his life. From his earliest years, 
                Anselm showed a deep inclination toward the religious life and a remarkable intellectual 
                capacity that would later make him one of the greatest theologians of the medieval period.
              </p>
              
              <p className="mb-6">
                At the age of fifteen, desirous of serving God in the monastic state, he petitioned 
                an abbot to admit him into his house, but was refused out of apprehension of his 
                father's displeasure. This early setback, combined with the death of his mother, 
                led to a period of spiritual tepidity in his life. He began to walk in the broad 
                way of the world, neglecting the divine seed that had been planted in his heart. 
                The saint, in his genuine meditations, would later express the deepest sentiments 
                of compunction for these disorders, which his perfect spirit of penance exceedingly 
                exaggerated to him, and which, like another David, he never ceased most bitterly 
                to bewail to the end of his days.
              </p>
              
              <p className="mb-6">
                The ill usage he met with from his father, induced him, after his mother's death, 
                to leave his own country, where he had made a successful beginning in his studies. 
                After a diligent application to them for three years in Burgundy and France, 
                invited by the great fame of Lanfranc, prior of Bec in Normandy, he went thither 
                and became his scholar. This marked the beginning of a new chapter in Anselm's 
                life, one that would lead him to the heights of theological and philosophical 
                achievement.
              </p>
              
              <p className="mb-6">
                On his father's death, Anselm advised with Lanfranc about the state of life he 
                was to embrace: whether he should live upon his estate to employ its produce in 
                alms, or should renounce it at once and embrace a monastic and eremitical life. 
                Lanfranc, feeling an overbearing affection for his promising disciple, dared not 
                advise him in his vocation, fearing the bias of his own inclination, but sent 
                him to Maurillus, the holy archbishop of Rouen. By him Anselm, after he had laid 
                open to him his interior, was determined to enter the monastic state at Bec, and 
                accordingly became a member of that house at the age of twenty-seven in 1060.
              </p>
              
              <p className="mb-6">
                Three years after his entrance into the monastery, Lanfranc was made abbot of 
                St. Stephen's at Caen, and Anselm prior of Bec. At this promotion several of the 
                monks murmured on account of his youth, but by patience and sweetness, he won the 
                affections of them all. He had indeed so great a knowledge of the hearts and 
                passions of men, that he seemed to read their interior in their actions, by which 
                he discovered the sources of virtues and vices, and knew how to adapt to each 
                proper advice and instructions, which were rendered most powerful by the mildness 
                and charity with which he applied them.
              </p>
              
              <p className="mb-6">
                St. Anselm applied himself diligently to the study of every part of theology, 
                by the clear light of scripture and tradition. While he was prior at Bec, he 
                wrote his Monologium, so called because in this work he speaks alone, explaining 
                the metaphysical proofs of the existence and nature of God. Also his Proslogium, 
                or contemplation of God's attributes, in which he addresses his discourse to God, 
                or himself. These and other works show the author to have excelled in metaphysics 
                over all the doctors of the church since St. Augustine.
              </p>
              
              <p className="mb-6">
                Anselm's reputation drew to Bec great numbers from all the neighboring kingdoms. 
                When Herluin died in 1078, he was chosen abbot of Bec at the age of forty-five, 
                of which he had been prior fifteen years. The abbey of Bec being possessed at 
                that time of some lands in England, this obliged the abbot to make his appearance 
                there in person at certain times. This occasioned Anselm's first journeys to 
                England, which his tender regard for his old friend Lanfranc, at that time 
                archbishop of Canterbury, made the more agreeable.
              </p>
              
              <p className="mb-6">
                In the year 1092, Hugh, the great earl of Chester, by three pressing messages, 
                entreated Anselm to come again into England to assist him, then dangerously sick, 
                and to give his advice about the foundation of a monastery which that nobleman 
                had undertaken at St. Wereburge's church at Chester. A report that he would be 
                made archbishop of Canterbury, in the room of Lanfranc, deceased, made him stand 
                off for some time, but he could not forsake his old friend in his distress, and 
                at last came over.
              </p>
              
              <p>
                The metropolitan see of Canterbury had been vacant ever since the death of Lanfranc 
                in 1089. The sacrilegious and tyrannical king, William Rufus, who succeeded his 
                father in 1087, by an injustice unknown till his time, usurped the revenues of 
                vacant benefices and deferred his permission, or Conge d'elire, in order to the 
                filling the episcopal sees, that he might the longer enjoy their income. However, 
                after a serious illness that brought him to extremity, the king nominated Anselm 
                to the see of Canterbury, and he was consecrated with great solemnity on the 4th 
                of December, 1093.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Anselm: Doctor of the Church</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Theological and Philosophical Contributions</h3>
              <p className="mb-6">
                St. Anselm's greatest legacy lies in his profound theological and philosophical 
                writings, which have earned him the title of Doctor of the Church. His Monologium 
                and Proslogium represent some of the most sophisticated attempts to prove the 
                existence of God through reason alone. His famous ontological argument, which 
                posits that God is "that than which nothing greater can be conceived," has 
                influenced philosophical and theological thought for centuries. His works on 
                truth, free will, and the fall of the devil demonstrate his deep understanding 
                of both philosophy and theology.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Defender of Church Rights</h3>
              <p className="mb-6">
                As Archbishop of Canterbury, Anselm became a courageous defender of the Church's 
                rights against the encroachments of secular power. He refused to pay the customary 
                fee for his nomination to the archbishopric, insisting that such payments were 
                simoniacal. He also stood firm against King William Rufus's attempts to control 
                the Church, refusing to acknowledge the king's authority over ecclesiastical 
                matters. His steadfast defense of papal authority and Church independence set 
                important precedents for the relationship between Church and state.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Pastoral Leadership and Charity</h3>
              <p className="mb-6">
                Despite his intellectual achievements, Anselm was also a deeply pastoral leader 
                who cared for the spiritual and material needs of his flock. He was known for 
                his gentleness and charity, especially in dealing with difficult situations and 
                people. His approach to discipline was marked by patience and understanding rather 
                than harshness, and he was particularly effective in working with young people. 
                His pastoral care extended beyond his immediate diocese, as he worked to reform 
                the Church throughout England and beyond.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Contemplative Life</h3>
              <p>
                Throughout his life, Anselm maintained a deep contemplative spirit, finding God 
                in all things. Even amidst his busy schedule as archbishop, he would often retire 
                to his devotions and watch long in prayer during the night. His famous saying, 
                "I believe in order to understand," reflects his approach to faith and reason, 
                showing that true understanding comes through faith. His life demonstrates that 
                it is possible to be both a great intellectual and a man of deep prayer and 
                contemplation.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">April 21</div>
              <p className="text-gray-600">Feast of St. Anselm, Archbishop of Canterbury and Doctor of the Church</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Anselm is celebrated on April 21st, commemorating his death 
                in 1109 and his life as one of the greatest theologians and archbishops of the 
                medieval Church. This feast honors his extraordinary contributions to theology 
                and philosophy, his courageous defense of Church rights, and his exemplary 
                pastoral leadership. It is a day to remember that faith and reason are not 
                opposed but complementary, and that true wisdom comes from seeking to understand 
                what we believe.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. Anselm lived during the late 11th and early 12th centuries, a time of great 
                intellectual and spiritual ferment in the Church. The period was marked by the 
                Investiture Controversy, which pitted the Church against secular rulers over 
                the appointment of bishops and abbots. Anselm's life and work were deeply 
                influenced by these conflicts, and his writings and actions helped to establish 
                important principles about the relationship between spiritual and temporal 
                authority. His theological works also contributed to the development of 
                scholasticism, which would dominate medieval thought for centuries.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On his feast day, Catholics pray for his intercession, especially for theologians 
                and philosophers, for those seeking to understand their faith more deeply, for 
                Church leaders facing difficult decisions, for those defending the rights of 
                the Church, and for the grace to combine faith and reason in their spiritual 
                journey. His example inspires us to seek understanding through faith and to 
                defend truth with courage and charity.
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
                  <li>• <strong>Theologians:</strong> Patron saint of theologians and philosophers</li>
                  <li>• <strong>Canterbury:</strong> Patron of Canterbury and its archdiocese</li>
                  <li>• <strong>Scholars:</strong> Patron of scholars and students</li>
                  <li>• <strong>Church Leaders:</strong> Patron of bishops and archbishops</li>
                  <li>• <strong>Monks:</strong> Patron of Benedictine monks</li>
                  <li>• <strong>England:</strong> Patron of England and the English Church</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Faith and Reason:</strong> Helper for those seeking to understand their faith</li>
                  <li>• <strong>Church Rights:</strong> Patron of those defending Church independence</li>
                  <li>• <strong>Pastoral Care:</strong> Helper for those in pastoral ministry</li>
                  <li>• <strong>Contemplation:</strong> Patron of those seeking contemplative prayer</li>
                  <li>• <strong>Academic Excellence:</strong> Helper for students and teachers</li>
                  <li>• <strong>Spiritual Growth:</strong> Patron of those growing in holiness</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Anselm</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Anselm, great Doctor of the Church and Archbishop of Canterbury, 
                    who combined deep faith with profound reason, intercede for us who seek 
                    to understand our faith more deeply.
                  </p>
                  <p className="mb-4">
                    You who defended the rights of the Church against secular power and who 
                    showed us that faith and reason work together, help us to grow in both 
                    understanding and love of God.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace to 
                    believe in order to understand, and to understand in order to believe. 
                    Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Theologians and Scholars</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Anselm, patron of theologians and philosophers, intercede for all 
                    those who study and teach the faith.
                  </p>
                  <p>
                    Help them to combine intellectual rigor with deep faith, to seek truth 
                    with humility, and to use their knowledge for the glory of God and the 
                    good of the Church. Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Church Leaders</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Anselm, courageous defender of Church rights and exemplary pastor, 
                    intercede for all Church leaders and bishops.
                  </p>
                  <p>
                    Help them to defend the independence of the Church, to care for their 
                    flocks with gentleness and charity, and to lead with wisdom and courage. 
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
            <Link href="/saints/st-augustine" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Augustine
                </h3>
                <p className="text-gray-700 text-sm">
                  Doctor of the Church and theological predecessor of Anselm.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-thomas-aquinas" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thomas Aquinas
                </h3>
                <p className="text-gray-700 text-sm">
                  Great theologian who built upon Anselm's philosophical foundations.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-benedict" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Benedict
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Benedictine order to which Anselm belonged.
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