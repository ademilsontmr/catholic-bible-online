import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Albertus Magnus - Doctor of the Church & Patron of Scientists | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Albertus Magnus, Doctor of the Church, teacher of St. Thomas Aquinas, and patron of scientists.',
  keywords: [
    'st albertus magnus',
    'saint albertus magnus',
    'st albertus magnus biography',
    'st albertus magnus feast day',
    'st albertus magnus patron saint',
    'doctor of the church',
    'november 15 feast day',
    'catholic saints',
    'patron of scientists',
    'teacher of thomas aquinas'
  ],
  openGraph: {
    title: 'St. Albertus Magnus - Doctor of the Church & Patron of Scientists',
    description: 'Discover the life, legacy, and feast day of St. Albertus Magnus, Doctor of the Church, teacher of St. Thomas Aquinas, and patron of scientists.',
    url: 'https://catholicbibleonline.com/saints/st-albertus-magnus',
  },
  twitter: {
    title: 'St. Albertus Magnus - Doctor of the Church & Patron of Scientists',
    description: 'Discover the life, legacy, and feast day of St. Albertus Magnus, Doctor of the Church, teacher of St. Thomas Aquinas, and patron of scientists.',
  }
}

export default function StAlbertusMagnusPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔬</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Albertus Magnus
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Doctor of the Church, Teacher of St. Thomas Aquinas, Patron of Scientists
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Albertus Magnus</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">November 15</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🔬</div>
              <div className="text-sm text-gray-600">Doctor</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Albertus Magnus</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The saint and doctor of the Church who would be known as Albertus Magnus was born sometime before the year 1200. He was probably born in Bavaria, a fact we infer because he referred to himself as "Albert of Lauingen," a town which still stands today in southern Germany. We do not know for sure all the details of his family origins, but we know he was well educated. He attended the University of Padua where he learned about Aristotle and his writings. This instruction in philosophy would become the foundation of his later work.
              </p>
              
              <p className="mb-6">
                Sometime around the year 1223 or so, Albert experienced an encounter with the Blessed Virgin Mary. This encounter moved him so much that he chose to become a member of the Dominican Order. He thereafter studied theology. He excelled in his studies and later became a lecturer for the Dominicans at Cologne. He also traveled around the region to lecture gaining regional, then international acclaim. At the same time he started lecturing, Albert produced "Summa de Bono," after collaboration with Phillip the Chancellor, who was a renown theologian from France.
              </p>
              
              <p className="mb-6">
                In 1245, Albert became a master of theology under Gueruc of Saint-Quentin. He was the first German Dominican to achieve the title. He later went on to teach theology at the University of Paris, and became the Chair of Theology at the College of St. James. One of his students was the famous Thomas Aquinas who would also become a doctor of the Church and a saint. Albert was very interested in Aristotle, and he made commentary on nearly all of Aristotle's works. He also studied the teachings of several Muslim scholars. At this time, the Islamic world led Europe in terms of scholarship, science, and medicine.
              </p>
              
              <p className="mb-6">
                In 1254, Albert became the provincial of the Dominican Order. By all accounts, he was a capable and efficient administrator. Five years later, in 1259, Albert participated in the General Chapter of the Dominicans along with Thomas Aquinas and several other contemporary leaders of the Order. They created a program of study for the Dominican order and developed a curriculum for philosophy. From this course of study would later arise the Pontifical University of Saint Thomas Aquinas, in Rome. Today, the university which is known as the "Angelicum," is one of the foremost theological colleges in the world. It is still run by the Dominican order.
              </p>
              
              <p>
                In 1260, impressed with his acumen, Pope Alexander IV appointed Albert as bishop of Regensburg. Although he was a bishop, Albert refused to ride a horse and went everywhere on foot. This seemingly unusual practice was consistent with the rules of his order. The life of a bishop did not agree with Albert and he resigned from his post in 1263. In that same year, Pope Urban IV accepted his resignation and reassigned him to preach about the Eighth Crusade to German-speaking people. The crusade was intended to recapture the city of Tunis in North Africa for Christendom, and was a total failure.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Albertus Magnus: Universal Doctor</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Later Years and Mediation</h3>
              <p className="mb-6">
                In his later years, Albert became renowned as a mediator. He mediated disputes between individuals as well as resolving a dispute between the people of Cologne and their bishop. He also founded Germany's oldest university in that city. Before his death, he mourned the early passing of his great student, Thomas Aquinas, who would later be recognized as a saint and doctor of the Church. Aquinas died in 1274. Albert spent his last years defending the work of Aquinas which is among the most important work in the Church. Albert became ill in 1278 and he died on November 15, 1280.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Scholarly Contributions</h3>
              <p className="mb-6">
                During his life, Albert wrote thirty eight volumes covering topics ranging from philosophy to geography, astronomy, law, friendship and love. His works demonstrate an encyclopedic knowledge and a remarkable ability to synthesize the wisdom of the ancient world with Christian theology. He was one of the first medieval scholars to systematically study and comment on the works of Aristotle, making them accessible to the Christian world. His commentaries on Aristotle's works were instrumental in the development of scholastic philosophy and theology.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Relics and Veneration</h3>
              <p className="mb-6">
                Three years after his death, his grave was opened and his body found to be incorrupt. When his grave was again opened centuries later in 1483, they only found his skeleton. His relics are presently found in the St. Andreas church in Cologne. Albert was beatified in 1622 by Pope Gregory XV. He was canonized and recognized as a doctor of the Church in 1931, by Pope Pius XI. He is the patron saint of scientists. His feast day is November 15.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Impact on Science and Theology</h3>
              <p>
                St. Albertus Magnus's legacy extends far beyond his lifetime. He is considered one of the greatest scholars of the Middle Ages and is often referred to as the "Universal Doctor" because of his vast knowledge across many fields. His work in integrating Aristotelian philosophy with Christian theology laid the groundwork for the scholastic method that would dominate medieval education. His influence on his student, St. Thomas Aquinas, helped shape the development of Catholic theology for centuries to come. Today, he is recognized as a patron of scientists, encouraging the pursuit of knowledge and the integration of faith and reason.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">November 15</div>
              <p className="text-gray-600">Feast of St. Albertus Magnus, Doctor of the Church and Patron of Scientists</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Albertus Magnus is celebrated on November 15th, commemorating the day of his death in 1280. St. Albertus Magnus was beatified by Pope Gregory XV in 1622 and canonized and declared a Doctor of the Church by Pope Pius XI in 1931. His feast day serves as a reminder of the importance of intellectual pursuit, the harmony between faith and reason, and the value of education in the service of God. His life demonstrates that true wisdom comes from the integration of human knowledge with divine revelation, and that the pursuit of scientific knowledge can be a path to holiness.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. Albertus Magnus's remarkable contributions to theology, philosophy, and science. His feast day serves as a reminder of the importance of education, the pursuit of knowledge, and the integration of faith and reason. Many universities, especially Catholic institutions, celebrate this day with special lectures or academic events. The day also emphasizes the importance of scientific inquiry and the compatibility of faith and science. Many people also reflect on their own intellectual pursuits and consider how they can use their knowledge and talents in the service of God and others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. Albertus Magnus for his intercession in matters of education, scientific research, and the integration of faith and reason. Many students, teachers, and scientists pray for his guidance in their academic and professional pursuits. His example encourages us to pursue knowledge with humility, to seek truth in all things, and to use our intellectual gifts for the glory of God. St. Albertus Magnus's legacy reminds us that the pursuit of knowledge and the practice of faith are not opposed but complementary paths to understanding God's creation.
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
                  <li>• <strong>Scientists:</strong> Patron of scientific research</li>
                  <li>• <strong>Medical Technicians:</strong> Patron of medical science</li>
                  <li>• <strong>Philosophers:</strong> Patron of philosophical inquiry</li>
                  <li>• <strong>Students:</strong> Patron of academic pursuits</li>
                  <li>• <strong>Teachers:</strong> Patron of educators</li>
                  <li>• <strong>Theologians:</strong> Patron of theological study</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Education:</strong> Helper for learning</li>
                  <li>• <strong>Research:</strong> Patron of scientific inquiry</li>
                  <li>• <strong>Faith and Reason:</strong> Helper for integration</li>
                  <li>• <strong>Academic Success:</strong> Patron of students</li>
                  <li>• <strong>Intellectual Growth:</strong> Helper for wisdom</li>
                  <li>• <strong>Knowledge:</strong> Patron of understanding</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Albertus Magnus</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Albertus Magnus, Doctor of the Church and Universal Doctor, 
                    who with wisdom and humility pursued knowledge in all fields of human inquiry, 
                    help us to seek truth with open minds and faithful hearts. Through your intercession, 
                    may we have the courage to explore the mysteries of creation, the wisdom to integrate 
                    faith and reason, and the humility to recognize that all knowledge comes from God. 
                    Help us to use our intellectual gifts for the glory of God and the service of others, 
                    following your example of combining deep learning with profound holiness. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Albertus Magnus, pray for us!"
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
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thomas Aquinas
                </h3>
                <p className="text-gray-700 text-sm">
                  His most famous student and fellow Doctor of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-dominic" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Dominic
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Dominican Order to which Albert belonged.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-bonaventure" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Bonaventure
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great Doctor of the Church from the same period.
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