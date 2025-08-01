import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Ambrose - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Ambrose, Bishop of Milan and Doctor of the Church.',
  keywords: [
    'st ambrose',
    'saint ambrose',
    'bishop of milan',
    'december 7 feast day',
    'catholic saints',
    'doctor saints',
    'doctor of the church'
  ],
  openGraph: {
    title: 'St. Ambrose - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Ambrose, Bishop of Milan and Doctor of the Church.',
    url: 'https://catholicbibleonline.com/saints/st-ambrose',
  },
  twitter: {
    title: 'St. Ambrose - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Ambrose, Bishop of Milan and Doctor of the Church.',
  }
}

export default function StAmbrosePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🐝</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Ambrose
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Bishop of Milan and Doctor of the Church
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Ambrose</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">December 7</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🐝</div>
              <div className="text-sm text-gray-600">Doctor Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Ambrose</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Ambrose was born around 340 A.D. in Trier, Germany, to a noble Roman 
                family. His father, Aurelius Ambrosius, was the prefect of Gaul, a high-ranking 
                position in the Roman Empire. Ambrose received an excellent education 
                in Rome, where he studied rhetoric, law, and Greek literature. His education 
                would later serve him well in his role as bishop, as he became known for 
                his eloquence and his ability to communicate complex theological ideas 
                in a way that was accessible to ordinary people. Ambrose's early life 
                was marked by his preparation for a career in civil service, following 
                in his father's footsteps. He was appointed as governor of the provinces 
                of Liguria and Emilia, with his capital at Milan, which was then the 
                imperial capital of the Western Roman Empire.
              </p>
              
              <p className="mb-6">
                In 374, when Ambrose was serving as governor, the bishop of Milan, Auxentius, 
                died. The city was deeply divided between Catholics and Arians, and there 
                was great tension over who would succeed him as bishop. Ambrose, who was 
                not yet baptized but was sympathetic to the Catholic cause, went to the 
                cathedral to maintain order during the election. While he was speaking 
                to the crowd, a child's voice was heard to cry out, "Ambrose for bishop!" 
                The cry was taken up by the entire assembly, and Ambrose was unanimously 
                elected bishop, despite his protests that he was not worthy of such an 
                honor. Ambrose was baptized, ordained, and consecrated bishop all within 
                a week, beginning his remarkable career as one of the most important 
                figures in the early Church.
              </p>
              
              <p className="mb-6">
                As bishop of Milan, Ambrose quickly established himself as a powerful 
                and effective leader. He was known for his eloquence in preaching, his 
                deep knowledge of Scripture, and his ability to defend the Catholic faith 
                against heresy. Ambrose was particularly effective in combating Arianism, 
                which denied the divinity of Christ. His sermons and writings helped 
                to strengthen the Catholic community in Milan and to convert many Arians 
                to the true faith. Ambrose was also known for his generosity to the 
                poor and his care for the sick and needy. He sold the Church's gold and 
                silver vessels to ransom captives and help the poor, famously saying, 
                "The Church has gold not to hoard but to give to those in need." His 
                example of charity and service to others became a model for future bishops.
              </p>
              
              <p className="mb-6">
                One of Ambrose's most famous confrontations was with the Emperor Theodosius 
                I, who had ordered a massacre of civilians in Thessalonica as punishment 
                for the murder of a Roman official. Ambrose refused to give the emperor 
                communion until he had done public penance for his crime. Theodosius 
                eventually submitted to Ambrose's demand and performed public penance 
                in the cathedral of Milan, demonstrating the bishop's moral authority 
                and his willingness to stand up to secular power when necessary. This 
                incident established an important precedent for the relationship between 
                Church and State, showing that even emperors were subject to the moral 
                law of God. Ambrose's courage in confronting the emperor earned him 
                great respect and established the principle that the Church has the 
                right and duty to speak out against injustice, even when it comes from 
                the highest levels of government.
              </p>
              
              <p>
                Ambrose was also instrumental in the conversion of St. Augustine, who 
                came to Milan as a professor of rhetoric and was deeply influenced by 
                the bishop's preaching and example. Ambrose's sermons on the Old Testament 
                helped Augustine to overcome his objections to Christianity and eventually 
                led to his conversion and baptism. The relationship between Ambrose and 
                Augustine is one of the most important in the history of the Church, 
                as it brought together two of the greatest minds of the early Church. 
                Ambrose died on April 4, 397, after a life of service to the Church 
                and to the people of Milan. He was buried in the basilica that now 
                bears his name, and his tomb became a popular pilgrimage site. Ambrose's 
                death marked the end of a life that had profoundly influenced the development 
                of Western Christianity. His writings, which include sermons, treatises, 
                and letters, continue to be studied and admired for their theological 
                depth and spiritual insight. Ambrose was canonized by the Church, and 
                in 1298, Pope Boniface VIII declared him a Doctor of the Church, recognizing 
                his important contributions to Christian theology and spirituality. His 
                feast day is celebrated on December 7th, the anniversary of his ordination 
                as bishop, and he is remembered as one of the greatest bishops and theologians 
                in the history of the Church.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Ambrose: Doctor of the Church</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Doctor of the Church</h3>
              <p className="mb-6">
                St. Ambrose's designation as a Doctor of the Church recognizes his profound 
                contributions to Christian theology and spirituality. His writings, which 
                include sermons, treatises, and letters, are considered among the most 
                important works in the history of Christian theology. Ambrose's most 
                famous work, "On the Duties of Ministers," provides a comprehensive 
                guide for clergy on how to live and serve as Christian leaders. His 
                writings on the sacraments, particularly baptism and the Eucharist, 
                helped to shape the Church's understanding of these central mysteries 
                of the faith. Ambrose's theology is characterized by its emphasis on 
                the importance of Scripture, the centrality of Christ, and the role 
                of the Church in salvation. His ability to combine deep theological 
                insight with practical pastoral guidance made his works accessible to 
                both scholars and ordinary believers, ensuring their continued relevance 
                throughout the centuries.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Episcopal Leadership</h3>
              <p className="mb-6">
                St. Ambrose's leadership of the Church of Milan established a model 
                for episcopal ministry that continues to influence the Church today. 
                His courage in confronting the Emperor Theodosius over the massacre 
                at Thessalonica demonstrated the bishop's duty to speak truth to power 
                and to defend the moral law of God, even when it means challenging 
                secular authority. Ambrose's example established the principle that 
                the Church has the right and duty to speak out against injustice and 
                to hold even the most powerful people accountable to moral standards. 
                His emphasis on charity and service to the poor, his care for the sick 
                and needy, and his willingness to use the Church's resources to help 
                those in need established a model of pastoral care that continues to 
                inspire bishops and priests today. Ambrose's leadership showed that 
                a bishop must be both a spiritual father and a moral leader, willing 
                to stand up for what is right even when it is difficult or dangerous.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Influence on Church-State Relations</h3>
              <p>
                St. Ambrose's confrontation with Emperor Theodosius established important 
                principles for the relationship between Church and State that continue 
                to be relevant today. His refusal to give communion to the emperor 
                until he had done public penance for his crime demonstrated that even 
                the highest secular authority is subject to the moral law of God. This 
                incident established the principle of the independence of the Church 
                from secular control and the Church's right to speak out on moral issues, 
                even when they involve political matters. Ambrose's example showed that 
                the Church must be free to exercise its moral authority without interference 
                from the State, and that bishops have a duty to speak truth to power 
                when necessary. His legacy continues to inspire the Church's engagement 
                with political and social issues, reminding us that the Church must 
                always be guided by the Gospel and the moral law of God, regardless 
                of political considerations.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">December 7</div>
              <p className="text-gray-600">Feast of St. Ambrose</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Ambrose is celebrated on December 7th, during the 
                Advent season when the Church prepares for the coming of Christ. This 
                feast is celebrated as a memorial in the Roman Catholic Church, recognizing 
                Ambrose's importance as a Doctor of the Church and one of the greatest 
                bishops in Christian history. The feast falls during a time when the 
                Church reflects on the themes of preparation and waiting, making it 
                an ideal time to remember Ambrose's example of faithful service and 
                courageous leadership. The feast provides an opportunity to honor Ambrose's 
                memory and to reflect on the importance of strong leadership and moral 
                courage in the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Ambrose, many people participate in special 
                prayers and devotions to honor his memory and seek his intercession. 
                Churches, particularly the Cathedral of Milan, hold special Masses 
                and services. Many dioceses and parishes hold celebrations to honor 
                their patron saint and to reflect on the importance of strong episcopal 
                leadership. The day is also marked by prayers for bishops and priests, 
                asking for St. Ambrose's intercession in helping them to be faithful 
                shepherds of their flocks. Many people also take time to read and reflect 
                on Ambrose's writings, particularly his works on the duties of ministers 
                and his sermons on the sacraments. The feast is also a time to reflect 
                on how we can incorporate Ambrose's virtues of courage, charity, and 
                faithfulness into our daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of courage 
                and the ability to stand up for what is right, even when it is difficult. 
                Many people make special petitions for bishops and priests, asking for 
                St. Ambrose's intercession in helping them to be faithful leaders and 
                shepherds of their flocks. The day is also a time to reflect on the 
                importance of speaking truth to power and to pray for the grace to 
                defend the moral law of God in all circumstances. St. Ambrose's feast 
                day encourages us to remember that we are all called to be witnesses 
                to Christ and to stand up for justice and truth, even when it means 
                challenging those in authority. It is also a time to pray for the wisdom 
                to balance our spiritual and civic responsibilities and to seek God's 
                will in all things.
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
                  <li>• <strong>Beekeepers:</strong> Patron of beekeepers</li>
                  <li>• <strong>Candlemakers:</strong> Patron of candlemakers</li>
                  <li>• <strong>Domestic Animals:</strong> Patron of domestic animals</li>
                  <li>• <strong>Learning:</strong> Patron of learning</li>
                  <li>• <strong>Milan:</strong> Patron of Milan</li>
                  <li>• <strong>Students:</strong> Patron of students</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Prayer:</strong> Helper in prayer life</li>
                  <li>• <strong>Courage:</strong> Patron of moral courage</li>
                  <li>• <strong>Leadership:</strong> Helper in leadership</li>
                  <li>• <strong>Justice:</strong> Patron of justice</li>
                  <li>• <strong>Charity:</strong> Helper in acts of charity</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Ambrose</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Ambrose, Doctor of the Church and great bishop of Milan, 
                    help me to be courageous in defending the truth and justice.
                  </p>
                  <p className="mb-4">
                    Teach me to speak truth to power when necessary and to serve others 
                    with charity and love. Help me to be a faithful witness to Christ 
                    and to stand up for what is right, even when it is difficult.
                  </p>
                  <p>
                    St. Ambrose, pray for me that I may have the courage to defend 
                    the moral law of God, the wisdom to lead others with love, and 
                    the grace to serve others with charity and compassion. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Bishops</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Ambrose, patron of bishops and moral courage, intercede for 
                    all bishops and priests.
                  </p>
                  <p>
                    Help them to be faithful shepherds of their flocks and to speak 
                    truth to power when necessary. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Ambrose, pray for us!"
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
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Augustine
                </h3>
                <p className="text-gray-700 text-sm">
                  Converted by St. Ambrose and Doctor of the Church.
                </p>
              </div>
            </Link>

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