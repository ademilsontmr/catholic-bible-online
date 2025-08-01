import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Catherine of Alexandria - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Catherine of Alexandria, patron of students and philosophers.',
  keywords: [
    'st catherine of alexandria',
    'saint catherine of alexandria',
    'catherine of alexandria',
    'november 25 feast day',
    'catholic saints',
    'early saints',
    'patron of students'
  ],
  openGraph: {
    title: 'St. Catherine of Alexandria - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Catherine of Alexandria, patron of students and philosophers.',
    url: 'https://catholicbibleonline.com/saints/st-catherine-alexandria',
  },
  twitter: {
    title: 'St. Catherine of Alexandria - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Catherine of Alexandria, patron of students and philosophers.',
  }
}

export default function StCatherineAlexandriaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Catherine of Alexandria
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron of Students and Philosophers
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Catherine of Alexandria</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">November 25</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Early Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Catherine of Alexandria</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Catherine of Alexandria is a canonized saint in the Catholic Church 
                who, per Christian tradition, was martyred around 305 in Alexandria, Egypt. 
                Of course, the Church of the first Millennium was undivided. She is also 
                recognized as the Great Martyr and Saint by the Orthodox Church. There 
                are no surviving primary sources attesting to her existence, but the 
                fact that her memory, and the stories about her, have been kept alive 
                - and handed down in the tradition - certainly confirm her existence, 
                and her life of heroic virtue and holiness. The young saint was born 
                around 287 in Alexandria, Egypt. At that time, Alexandria was one of 
                the finest cities in the world, and a center of learning and culture 
                as well as faith.
              </p>
              
              <p className="mb-6">
                Christian tradition states she was of noble birth, possibly a princess. 
                As a member of the nobility, she was also educated and was an avid 
                scholar. Around the age of fourteen, she experienced a moving vision 
                of Mary and the infant Jesus, and she decided to become a Christian. 
                Although she was a teenager, she was very intelligent and gifted. When 
                the emperor Maxentius began persecuting Christians, Catherine visited 
                him to denounce his cruelty. Rather than order her execution, Maxentius 
                summoned fifty orators and philosophers to debate her. However, Catherine 
                was moved by the power of the Holy Spirit and spoke eloquently in defense 
                of her faith. Her words were so moving that several of the pagans converted 
                to Christianity and were immediately executed.
              </p>
              
              <p className="mb-6">
                Unable to defeat her rhetorically or to intimidate her into giving 
                up her belief, the emperor ordered her to be tortured and imprisoned. 
                Catherine was arrested and scourged. Despite the torture, she did not 
                abandon her faith. Word of her arrest and the power of her faith quickly 
                spread and over 200 people visited her. According to some legends, 
                the emperor's own wife, Valeria Maximilla was converted by Catherine. 
                The emperor eventually executed his own wife over her conversion. However, 
                this is not mentioned in the historical record and may be a legend. 
                It is believed that Maximilla was alive and with her husband at the 
                Battle of the Milvian Bridge in 312, seven years after the death of Catherina.
              </p>
              
              <p className="mb-6">
                Following her imprisonment, Maxentius made a final attempt to persuade 
                the beautiful Catherine to abandon her faith by proposing marriage 
                to her. This would have made her a powerful empress. Catherine refused, 
                saying she was married to Jesus Christ and that her virginity was 
                dedicated to him. The emperor angrily ordered her to be executed on 
                a breaking wheel. The breaking wheel is an ancient form of torture 
                where a person's limbs are threaded among the spokes and their bones 
                are shattered by an executioner with a heavy rod. It is a brutal punishment 
                that results in a slow and painful death, normally reserved for the 
                worst criminals. When Catherine was presented before the wheel, she 
                touched it and a miracle occurred that caused the wheel to shatter.
              </p>
              
              <p>
                Unable to torture her to death, the emperor simply ordered her beheaded. 
                One account claimed that angels took her body to Mt. Sinai. In the 
                sixth century, the Emperor Justinian ordered a monastery established 
                in her name. The monastery, Saint Catherine's, remains to this day 
                and is one of the oldest in the world. Around the year 800, a legend 
                spread that her body has been found with her hair still growing and 
                a constant stream of oil coming from her body. Nothing exists to this 
                day of her remains, and her very existence has been called into question. 
                Despite these questions, and the possibility that her story may be 
                confused with that of one or more other saints, she is still venerated 
                in the Eastern Orthodox Church as a Martyr. Many Roman Catholics also 
                venerate her to this day as one of the great virgin saints of the 
                early Church. During the medieval period, St. Catherine was one of 
                the most famous saints of the Church. She has was a popular subject 
                in renaissance art and many paintings from the period are dedicated 
                to her. Catherine is still a very popular Catholic name. The spiked 
                wheel is a popular symbol often associated with St. Catherine.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Catherine of Alexandria: Patron of Students and Philosophers</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Intellectual Courage</h3>
              <p className="mb-6">
                St. Catherine of Alexandria's most enduring legacy is her extraordinary 
                example of intellectual courage and her ability to defend her faith 
                through reason and eloquence. Despite being a young woman in a male-dominated 
                society, Catherine fearlessly confronted the emperor and engaged in 
                theological debates with the most learned philosophers of her time. 
                Her ability to speak eloquently in defense of Christianity, even when 
                facing torture and death, demonstrates the power of faith combined 
                with education and intelligence. Catherine's legacy reminds us that 
                faith and reason are not opposed but complementary, and that we should 
                use our God-given intellect to understand and defend our beliefs. Her 
                example challenges us to be well-educated in our faith and to be prepared 
                to give an account of our beliefs with gentleness and respect. Catherine's 
                legacy encourages us to pursue both spiritual and intellectual growth, 
                recognizing that true wisdom comes from God and that our minds are 
                gifts to be used in His service.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Students and Scholars</h3>
              <p className="mb-6">
                St. Catherine of Alexandria's patronage of students, scholars, and 
                philosophers reflects her own dedication to learning and her recognition 
                of the importance of education in the Christian life. As a young woman 
                who was well-educated and an avid scholar, Catherine understood that 
                knowledge and wisdom are gifts from God that should be used for His 
                glory. Her patronage of students reminds us that education is a sacred 
                calling and that we should approach our studies with diligence and 
                prayer. Catherine's example teaches us that learning is not just about 
                acquiring information but about growing in wisdom and understanding. 
                Her legacy encourages students to pursue their studies with excellence, 
                to ask questions, to think critically, and to integrate their faith 
                with their learning. Catherine's patronage also reminds us that education 
                should be accessible to all people, regardless of gender or social 
                status, and that everyone has the right to develop their God-given 
                talents and abilities.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Virginity and Purity</h3>
              <p>
                St. Catherine of Alexandria's commitment to virginity and her refusal 
                to marry the emperor, even when it would have given her great power 
                and wealth, demonstrates her deep love for Christ and her understanding 
                of the sacredness of the human person. Her choice to remain a virgin 
                for Christ was not a rejection of love or beauty, but rather a recognition 
                that the highest form of love is the love of God. Catherine's example 
                teaches us that our bodies are temples of the Holy Spirit and that 
                we should treat them with respect and dignity. Her legacy encourages 
                us to live lives of purity and chastity, recognizing that these virtues 
                are not restrictions but pathways to true freedom and joy. Catherine's 
                witness also reminds us that we are called to love God above all things 
                and that nothing in this world should take precedence over our relationship 
                with Him. Her example challenges us to examine our own priorities 
                and to ensure that God is truly first in our lives.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">November 25</div>
              <p className="text-gray-600">Feast of St. Catherine of Alexandria</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Catherine of Alexandria is celebrated on November 
                25th, during the autumn season when the Church reflects on the themes 
                of harvest and thanksgiving. This feast is celebrated as a memorial 
                in the Roman Catholic Church, recognizing Catherine's importance as 
                a model of intellectual courage and faith. The feast falls during 
                a time when many students are in the midst of their academic year, 
                making it an ideal time to remember Catherine's example of using 
                education and intelligence in the service of God. The feast provides 
                an opportunity to honor Catherine's memory and to reflect on how 
                we can use our God-given talents and abilities to serve others and 
                glorify God. It is also a time to pray for students, scholars, and 
                all those who work in the field of education, asking for Catherine's 
                intercession in helping them to pursue knowledge with wisdom and 
                to use their learning for the good of others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Catherine of Alexandria, many people participate 
                in special prayers and devotions to honor her memory and seek her 
                intercession. Churches, particularly those with connections to educational 
                institutions or academic communities, hold special Masses and services. 
                Many students and scholars gather to pray for wisdom and guidance 
                in their studies, asking for St. Catherine's intercession in helping 
                them to learn with diligence and to use their knowledge for the 
                glory of God. The day is also marked by prayers for all those who 
                work in education, from teachers and professors to librarians and 
                researchers. Many people also take time to reflect on their own 
                intellectual growth and to pray for the grace to use their minds 
                and talents in service to God and others. The feast is also a time 
                to reflect on how we can integrate our faith with our learning and 
                to ensure that our pursuit of knowledge is guided by wisdom and 
                love. Some people also visit libraries or educational institutions 
                in honor of Catherine's dedication to learning and scholarship.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of wisdom 
                and the ability to use our intellect in the service of God. Many 
                people make special petitions for students and scholars, asking for 
                St. Catherine's intercession in helping them to learn with excellence 
                and to use their knowledge for the good of others. The day is also 
                a time to reflect on the importance of education and to pray for 
                the grace to pursue learning with humility and wisdom. St. Catherine's 
                feast day encourages us to remember that our minds are gifts from 
                God and that we should use them to grow in understanding and to 
                serve others. It is also a time to pray for the grace to defend 
                our faith with courage and eloquence, following Catherine's example 
                of intellectual witness. The feast reminds us that true education 
                should lead us closer to God and help us to better understand and 
                serve His creation.
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
                  <li>• <strong>Students:</strong> Patron of students and scholars</li>
                  <li>• <strong>Philosophers:</strong> Patron of philosophers and apologists</li>
                  <li>• <strong>Unmarried Girls:</strong> Patron of unmarried girls</li>
                  <li>• <strong>Libraries:</strong> Patron of libraries and librarians</li>
                  <li>• <strong>Wheelwrights:</strong> Patron of wheelwrights</li>
                  <li>• <strong>Spinners:</strong> Patron of spinners</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Education:</strong> Helper in educational pursuits</li>
                  <li>• <strong>Intellectual Courage:</strong> Patron of intellectual courage</li>
                  <li>• <strong>Virginity:</strong> Helper in maintaining purity</li>
                  <li>• <strong>Debate:</strong> Patron of theological debate</li>
                  <li>• <strong>Conversion:</strong> Helper in converting others</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Catherine of Alexandria</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Catherine of Alexandria, patron of students and philosophers, 
                    help me to use my intellect and education in the service of God.
                  </p>
                  <p className="mb-4">
                    Teach me to defend my faith with courage and eloquence, and guide 
                    me in pursuing knowledge with wisdom and humility. Help me to 
                    integrate my learning with my faith and to use my talents for 
                    the glory of God.
                  </p>
                  <p>
                    St. Catherine, pray for me that I may have the courage to stand 
                    for truth, the wisdom to use my mind well, and the purity to 
                    remain faithful to Christ in all things. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Students</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Catherine of Alexandria, patron of students and scholars, 
                    intercede for all those who pursue knowledge and wisdom.
                  </p>
                  <p>
                    Help us to learn with diligence, to think with clarity, and 
                    to use our education for the good of others and the glory of God. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Catherine of Alexandria, pray for us!"
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
            <Link href="/saints/st-joan-arc" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Warrior Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joan of Arc
                </h3>
                <p className="text-gray-700 text-sm">
                  Another young woman who defended her faith with courage.
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
                  Great theologian and philosopher of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-rita" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Rita of Cascia
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron of impossible cases and model of patience.
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