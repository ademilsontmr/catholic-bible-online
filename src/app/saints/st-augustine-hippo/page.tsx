import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Augustine of Hippo - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Augustine of Hippo, Doctor of the Church.',
  keywords: [
    'st augustine of hippo',
    'saint augustine',
    'doctor of the church',
    'august 28 feast day',
    'catholic saints',
    'doctor saints',
    'patron of brewers'
  ],
  openGraph: {
    title: 'St. Augustine of Hippo - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Augustine of Hippo, Doctor of the Church.',
    url: 'https://catholicbibleonline.com/saints/st-augustine-hippo',
  },
  twitter: {
    title: 'St. Augustine of Hippo - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Augustine of Hippo, Doctor of the Church.',
  }
}

export default function StAugustineHippoPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Augustine of Hippo
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Doctor of the Church and Patron of Brewers
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Augustine of Hippo</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 28</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📚</div>
              <div className="text-sm text-gray-600">Doctor Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Augustine of Hippo</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Augustine of Hippo is the patron of brewers because of his conversion 
                from a former life of loose living, which included parties, entertainment, 
                and worldly ambitions. His complete turnaround and conversion has been 
                an inspiration to many who struggle with a particular vice or habit they 
                long to break. This famous son of St. Monica was born in Africa and spent 
                many years of his life in wicked living and in false beliefs. Though he 
                was one of the most intelligent men who ever lived and though he had been 
                brought up a Christian, his sins of impurity and his pride darkened his 
                mind so much, that he could not see or understand the Divine Truth anymore. 
                Through the prayers of his holy mother and the marvelous preaching of St. 
                Ambrose, Augustine finally became convinced that Christianity was the one 
                true religion. Yet he did not become a Christian then, because he thought 
                he could never live a pure life.
              </p>
              
              <p className="mb-6">
                One day, however, he heard about two men who had suddenly been converted 
                on reading the life of St. Antony, and he felt terrible ashamed of himself. 
                "What are we doing?" he cried to his friend Alipius. "Unlearned people 
                are taking Heaven by force, while we, with all our knowledge, are so 
                cowardly that we keep rolling around in the mud of our sins!" Full of 
                bitter sorrow, Augustine flung himself out into the garden and cried 
                out to God, "How long more, O Lord? Why does not this hour put an end 
                to my sins?" Just then he heard a child singing, "Take up and read!" 
                Thinking that God intended him to hear those words, he picked up the 
                book of the Letters of St. Paul, and read the first passage his gaze 
                fell on. It was just what Augustine needed, for in it, St. Paul says 
                to put away all impurity and to live in imitation of Jesus. That did 
                it! From then on, Augustine began a new life.
              </p>
              
              <p className="mb-6">
                He was baptized, became a priest, a bishop, a famous Catholic writer, 
                Founder of religious priests, and one of the greatest saints that ever 
                lived. He became very devout and charitable, too. On the wall of his 
                room he had the following sentence written in large letters: "Here we 
                do not speak evil of anyone." St. Augustine overcame strong heresies, 
                practiced great poverty and supported the poor, preached very often and 
                prayed with great fervor right up until his death. "Too late have I 
                loved You!" he once cried to God, but with his holy life he certainly 
                made up for the sins he committed before his conversion. His feast day 
                is August 28th.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Augustine of Hippo: Doctor of the Church</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Doctor of the Church</h3>
              <p className="mb-6">
                St. Augustine of Hippo's most enduring legacy is his designation as 
                one of the greatest Doctors of the Church, a title that recognizes his 
                profound contributions to Christian theology and philosophy. His writings, 
                including "Confessions," "City of God," and numerous theological treatises, 
                have shaped Christian thought for over 1,600 years and continue to be 
                studied and revered by theologians, philosophers, and spiritual seekers 
                around the world. Augustine's theological insights on topics such as 
                grace, free will, original sin, and the nature of God have been foundational 
                to Catholic doctrine and have influenced countless generations of Christians. 
                His ability to synthesize classical philosophy with Christian revelation 
                created a theological framework that has endured through the centuries 
                and continues to provide guidance for understanding the relationship 
                between faith and reason. Augustine's legacy as a Doctor of the Church 
                reminds us that intellectual inquiry and spiritual devotion can and should 
                go hand in hand, and that the pursuit of truth is ultimately a path to God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Conversion and Repentance</h3>
              <p className="mb-6">
                St. Augustine's dramatic conversion from a life of sin and intellectual 
                pride to one of holiness and service to God serves as one of the most 
                powerful examples of God's mercy and the possibility of radical transformation. 
                His famous prayer, "Lord, make me chaste, but not yet," and his eventual 
                complete surrender to God's will demonstrate the struggle that many people 
                face in overcoming their vices and embracing a life of virtue. Augustine's 
                conversion story, particularly the famous scene in the garden where he 
                heard the child's voice saying "Take up and read," shows how God can 
                work through ordinary circumstances to bring about extraordinary change. 
                His subsequent life of penance, prayer, and service to the Church demonstrates 
                that conversion is not just a one-time event, but an ongoing process 
                of growing in holiness. Augustine's example encourages us to never give 
                up hope in God's mercy, no matter how far we may have strayed, and to 
                trust that God can transform even the most hardened heart.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Brewers and Intellectuals</h3>
              <p>
                St. Augustine's designation as the patron of brewers is particularly 
                significant given his past life of indulgence and his subsequent conversion. 
                This patronage recognizes that God can work through anyone, regardless 
                of their past, and that conversion is always possible. Augustine's example 
                is particularly relevant for those who work in industries associated 
                with alcohol or other potential vices, reminding them that their work 
                can be done with integrity and that they too can be instruments of God's 
                grace. Augustine is also considered a patron of intellectuals and scholars, 
                recognizing his profound contributions to philosophy and theology. His 
                life demonstrates that intellectual pursuits, when properly ordered, 
                can lead to a deeper understanding of God and His creation. Augustine's 
                patronage of brewers and intellectuals reminds us that holiness is not 
                limited to any particular profession or social class, and that God calls 
                people from all walks of life to serve Him in their own unique way. His 
                legacy encourages us to use our gifts and talents, whatever they may be, 
                for the glory of God and the service of others.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">August 28</div>
              <p className="text-gray-600">Feast of St. Augustine of Hippo</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Augustine of Hippo is celebrated on August 28th, during 
                the summer season when the Church reflects on the themes of growth and 
                harvest. This feast is celebrated as a memorial in the Roman Catholic 
                Church, recognizing Augustine's importance as a Doctor of the Church 
                and his powerful example of conversion and intellectual pursuit of truth. 
                The feast falls during a time when many people are enjoying the fruits 
                of their labor, making it an ideal time to remember Augustine's message 
                about the importance of using our gifts and talents for the glory of 
                God. The feast provides an opportunity to honor Augustine's memory and 
                to reflect on the importance of conversion, repentance, and the pursuit 
                of truth in our own lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Augustine of Hippo, many people participate 
                in special prayers and devotions to honor his memory and seek his intercession. 
                Churches, particularly those with connections to Augustinian communities 
                or academic institutions, hold special Masses and services. Many people 
                gather to pray for the gift of conversion and for the strength to overcome 
                their vices and grow in virtue. The day is also marked by prayers for 
                intellectuals and scholars, asking for St. Augustine's intercession in 
                helping them to use their knowledge and talents for the glory of God. 
                Many people also take time to reflect on their own conversion stories 
                and to pray for the grace to continue growing in holiness. The feast 
                is also a time to reflect on how we can incorporate Augustine's virtues 
                of intellectual pursuit, conversion, and service to others into our daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of conversion 
                and the ability to overcome our vices and grow in virtue. Many people 
                make special petitions for those who are struggling with particular 
                sins or addictions, asking for St. Augustine's intercession in helping 
                them to find freedom and peace. The day is also a time to reflect on 
                the importance of intellectual pursuit and to pray for the grace to 
                use our knowledge and talents for the glory of God. St. Augustine's 
                feast day encourages us to remember that we are all called to be saints 
                and that holiness is achieved through conversion, repentance, and the 
                pursuit of truth. It is also a time to pray for the grace to be more 
                charitable and to avoid speaking evil of others, following Augustine's 
                example of love and kindness. The feast reminds us that God's mercy 
                is always available to us, no matter how far we may have strayed, and 
                that conversion is always possible through His grace.
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
                  <li>• <strong>Brewers:</strong> Patron of brewers</li>
                  <li>• <strong>Theologians:</strong> Patron of theologians</li>
                  <li>• <strong>Printers:</strong> Patron of printers</li>
                  <li>• <strong>Scholars:</strong> Patron of scholars</li>
                  <li>• <strong>Augustinians:</strong> Patron of Augustinians</li>
                  <li>• <strong>Bridge Builders:</strong> Patron of bridge builders</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Prayer:</strong> Helper in prayer life</li>
                  <li>• <strong>Conversion:</strong> Patron of conversion</li>
                  <li>• <strong>Repentance:</strong> Helper in repentance</li>
                  <li>• <strong>Intellectual Pursuit:</strong> Patron of learning</li>
                  <li>• <strong>Charity:</strong> Helper in charity</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Augustine of Hippo</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Augustine of Hippo, Doctor of the Church, help me to grow 
                    in knowledge and love of God.
                  </p>
                  <p className="mb-4">
                    Teach me to use my intellect and talents for the glory of God and 
                    to overcome my vices through prayer and penance. Help me to be charitable 
                    and to avoid speaking evil of others.
                  </p>
                  <p>
                    St. Augustine, pray for me that I may have the courage to convert 
                    from my sins, the wisdom to pursue truth, and the love to serve 
                    God and others with all my heart. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Conversion</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Augustine, patron of conversion and repentance, intercede for 
                    all those who are struggling with sin and vice.
                  </p>
                  <p>
                    Help them to find the strength to turn away from evil and to embrace 
                    a life of virtue and holiness. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Augustine of Hippo, pray for us!"
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
            <Link href="/saints/st-monica" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Monica
                </h3>
                <p className="text-gray-700 text-sm">
                  Mother of St. Augustine and patron of mothers.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-ambrose" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Ambrose
                </h3>
                <p className="text-gray-700 text-sm">
                  Bishop who influenced Augustine's conversion.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-thomas-aquinas" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thomas Aquinas
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great Doctor of the Church.
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