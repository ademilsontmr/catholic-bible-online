import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Albert the Great - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Albert the Great, Dominican friar and Universal Doctor of the Church.',
  keywords: [
    'st albert the great',
    'saint albert the great',
    'universal doctor of the church',
    'november 15 feast day',
    'catholic saints',
    'doctor saints',
    'dominican friar'
  ],
  openGraph: {
    title: 'St. Albert the Great - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Albert the Great, Dominican friar and Universal Doctor of the Church.',
    url: 'https://catholicbibleonline.com/saints/st-albert-great',
  },
  twitter: {
    title: 'St. Albert the Great - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Albert the Great, Dominican friar and Universal Doctor of the Church.',
  }
}

export default function StAlbertGreatPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔬</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Albert the Great
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Dominican Friar and Universal Doctor of the Church
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Albert the Great</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">November 15</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🔬</div>
              <div className="text-sm text-gray-600">Doctor Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Albert the Great</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Albert the Great was born around 1200 in Lauingen, Bavaria (modern-day Germany), 
                to a noble family. Little is known about his early life, but he showed exceptional 
                intellectual abilities from a young age. Albert received his early education in 
                Germany and later traveled to Italy to study at the University of Padua, one of 
                the most prestigious universities of the time. It was during his studies in Padua 
                that Albert first encountered the Dominican friars and was deeply impressed by 
                their way of life, particularly their commitment to poverty, study, and preaching. 
                Despite his noble background and the expectations of his family, Albert chose 
                to join the Dominican Order around 1223, taking the religious name Albert.
              </p>
              
              <p className="mb-6">
                After joining the Dominicans, Albert continued his studies in theology and philosophy, 
                becoming one of the most brilliant minds of his generation. He was sent to various 
                Dominican houses throughout Germany to teach and study. Albert's intellectual 
                curiosity was boundless, and he became interested in virtually every field of 
                knowledge available at the time, including theology, philosophy, natural science, 
                mathematics, astronomy, botany, zoology, and alchemy. His encyclopedic knowledge 
                and his ability to integrate different fields of study earned him the title "the 
                Great" even during his lifetime. Albert's approach to learning was characterized 
                by his belief that all truth comes from God and that the study of nature can lead 
                to a deeper understanding of the Creator.
              </p>
              
              <p className="mb-6">
                In 1248, Albert was sent to Paris to establish a Dominican house of studies, 
                where he would become the teacher of one of the most brilliant students in history: 
                St. Thomas Aquinas. Albert quickly recognized Thomas's extraordinary abilities 
                and became his mentor and friend. The relationship between Albert and Thomas 
                was one of mutual respect and intellectual collaboration. Albert's influence 
                on Thomas was profound, particularly in his approach to integrating Aristotelian 
                philosophy with Christian theology. Albert's own writings, which covered virtually 
                every field of knowledge, provided a foundation for Thomas's later work. Albert 
                was known for his humility and his willingness to learn from his students, 
                including Thomas, whom he often referred to as "the dumb ox" due to Thomas's 
                quiet nature, but whom he recognized as having greater intellectual gifts than 
                himself.
              </p>
              
              <p className="mb-6">
                Albert's academic career was marked by his appointment as a professor at the 
                University of Paris and later at the University of Cologne. He was also called 
                upon to serve in various administrative positions within the Dominican Order 
                and the Church. In 1260, Albert was appointed Bishop of Regensburg, a position 
                he accepted reluctantly and held for only three years before resigning to return 
                to his beloved studies and teaching. Albert's tenure as bishop was marked by 
                his efforts to reform the diocese and his continued commitment to learning and 
                teaching. After resigning as bishop, Albert returned to Cologne, where he continued 
                to teach and write until his death.
              </p>
              
              <p>
                St. Albert the Great died on November 15, 1280, in Cologne, Germany, at the 
                age of about eighty. His death marked the end of one of the most remarkable 
                intellectual careers in the history of the Church. Albert's writings, which 
                fill over 40 volumes in modern editions, cover virtually every field of knowledge 
                available in the thirteenth century. His work in natural science was particularly 
                important, as he was one of the first medieval scholars to conduct systematic 
                observations and experiments. Albert was beatified in 1622 and canonized in 
                1931 by Pope Pius XI, who also declared him a Doctor of the Church with the 
                title "Universal Doctor" in recognition of his encyclopedic knowledge and his 
                contribution to virtually every field of learning. His feast day is celebrated 
                on November 15th.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Albert the Great: Universal Doctor</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Universal Scholar and Scientist</h3>
              <p className="mb-6">
                St. Albert the Great's greatest legacy is his contribution to virtually every 
                field of knowledge available in the thirteenth century. His encyclopedic writings 
                covered theology, philosophy, natural science, mathematics, astronomy, botany, 
                zoology, alchemy, and many other disciplines. Albert's approach to learning 
                was characterized by his belief that all truth comes from God and that the 
                study of nature can lead to a deeper understanding of the Creator. His work 
                in natural science was particularly important, as he was one of the first 
                medieval scholars to conduct systematic observations and experiments. Albert's 
                writings on plants, animals, and minerals were based on careful observation 
                and were remarkably accurate for their time. His work helped to establish 
                the foundation for modern scientific inquiry and demonstrated that faith and 
                reason are not opposed but complementary.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Mentor of St. Thomas Aquinas</h3>
              <p className="mb-6">
                St. Albert the Great's role as the teacher and mentor of St. Thomas Aquinas 
                is one of his most important contributions to the Church. Albert recognized 
                Thomas's extraordinary intellectual abilities and provided him with the foundation 
                and guidance he needed to become one of the greatest theologians in the history 
                of the Church. Albert's influence on Thomas was profound, particularly in his 
                approach to integrating Aristotelian philosophy with Christian theology. The 
                relationship between Albert and Thomas demonstrates the importance of good 
                teaching and mentorship in the development of intellectual and spiritual gifts. 
                Albert's humility in recognizing Thomas's greater abilities and his willingness 
                to learn from his student serve as a model for all teachers and mentors. His 
                legacy as a teacher continues to inspire educators to recognize and nurture 
                the gifts of their students.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Intellectual and Spiritual Integration</h3>
              <p>
                St. Albert the Great's life serves as a powerful example of how intellectual 
                pursuit and spiritual growth can be perfectly integrated. His deep faith and 
                his commitment to the Dominican way of life did not prevent him from pursuing 
                knowledge in all its forms. Albert's belief that all truth comes from God 
                and that the study of nature can lead to a deeper understanding of the Creator 
                demonstrates the harmony between faith and reason. His work as a scientist, 
                philosopher, and theologian shows that these different fields of inquiry can 
                complement and enrich each other. Albert's example encourages all Christians 
                to pursue knowledge and understanding in all areas of life, recognizing that 
                such pursuit can deepen their relationship with God. His legacy reminds us 
                that true wisdom comes from God and that all human knowledge should ultimately 
                lead us closer to Him.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">November 15</div>
              <p className="text-gray-600">Feast of St. Albert the Great</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Albert the Great is celebrated on November 15th, during 
                the autumn season when the Church reflects on the themes of wisdom and the 
                harvest of knowledge. This feast is celebrated as a memorial in the Roman 
                Catholic Church, recognizing Albert's importance as a Doctor of the Church 
                and his contribution to virtually every field of learning. The feast falls 
                during a time when many students are in the middle of their academic terms, 
                making it an ideal time to reflect on the importance of education and the 
                pursuit of knowledge. The feast provides an opportunity to honor Albert's 
                memory and to reflect on the relationship between faith and reason, and the 
                importance of using our intellectual gifts in service of God and others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Albert the Great, many people participate in special 
                prayers and devotions to honor his memory and seek his intercession. Churches, 
                particularly those associated with the Dominican Order, hold special Masses 
                and services. Many educational institutions, especially Catholic schools and 
                universities, hold special events to honor Albert's contribution to education 
                and learning. The day is also marked by prayers for students, teachers, and 
                all those involved in education, asking for St. Albert's intercession in helping 
                them to pursue truth and wisdom. Many people also take time to read and reflect 
                on Albert's writings, particularly his works on natural science and philosophy. 
                The feast is also a time to reflect on the importance of integrating faith 
                and reason in our lives and in our educational pursuits.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of wisdom and the 
                ability to integrate faith and reason in our lives. Many people make special 
                petitions for students and teachers, asking for St. Albert's intercession 
                in helping them to pursue truth and to use their knowledge for the glory of 
                God. The day is also a time to reflect on the importance of study and learning 
                as a form of prayer and service to God. St. Albert's feast day encourages 
                us to remember that all truth comes from God and that the pursuit of knowledge 
                can be a path to holiness. It is also a time to pray for the humility to recognize 
                the limits of human knowledge and to remain open to the mysteries of faith.
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
                  <li>• <strong>Scientists:</strong> Patron of natural scientists</li>
                  <li>• <strong>Students:</strong> Patron of all students</li>
                  <li>• <strong>Teachers:</strong> Patron of educators</li>
                  <li>• <strong>Philosophers:</strong> Patron of philosophers</li>
                  <li>• <strong>Medical Students:</strong> Patron of medical students</li>
                  <li>• <strong>Universities:</strong> Patron of academic institutions</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Wisdom:</strong> Helper in seeking wisdom</li>
                  <li>• <strong>Learning:</strong> Patron of education</li>
                  <li>• <strong>Research:</strong> Helper in scientific inquiry</li>
                  <li>• <strong>Understanding:</strong> Patron of comprehension</li>
                  <li>• <strong>Humility:</strong> Helper in remaining humble</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Albert the Great</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Albert the Great, Universal Doctor and patron of scientists, help 
                    me to seek truth and wisdom in all areas of knowledge.
                  </p>
                  <p className="mb-4">
                    Teach me to integrate faith and reason in my studies and in my life. 
                    Help me to use my knowledge for the glory of God and the service of others.
                  </p>
                  <p>
                    St. Albert the Great, pray for me that I may have the wisdom to understand 
                    God's creation, the humility to recognize my limitations, and the love to 
                    use my gifts in service of the truth. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Scientists</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Albert the Great, patron of scientists and scholars, intercede for 
                    all those who are engaged in the pursuit of knowledge and truth.
                  </p>
                  <p>
                    Help them to study with diligence, to seek wisdom with humility, and 
                    to use their learning for the greater glory of God. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Albert the Great, pray for us!"
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
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thomas Aquinas
                </h3>
                <p className="text-gray-700 text-sm">
                  Student of St. Albert and Angelic Doctor of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-dominic" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Dominic
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Dominican Order and patron of preachers.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-catherine-siena" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Catherine of Siena
                </h3>
                <p className="text-gray-700 text-sm">
                  Dominican tertiary and Doctor of the Church.
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