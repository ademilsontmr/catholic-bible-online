import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Thomas Aquinas - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Thomas Aquinas, Doctor of the Church and Angelic Doctor.',
  keywords: [
    'st thomas aquinas',
    'saint thomas aquinas',
    'doctor of the church',
    'january 28 feast day',
    'catholic saints',
    'doctor saints',
    'angelic doctor'
  ],
  openGraph: {
    title: 'St. Thomas Aquinas - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Thomas Aquinas, Doctor of the Church and Angelic Doctor.',
    url: 'https://catholicbibleonline.com/saints/st-thomas-aquinas',
  },
  twitter: {
    title: 'St. Thomas Aquinas - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Thomas Aquinas, Doctor of the Church and Angelic Doctor.',
  }
}

export default function StThomasAquinasPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Thomas Aquinas
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Doctor of the Church and Angelic Doctor
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Thomas Aquinas</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">January 28</div>
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
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Thomas Aquinas</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Thomas Aquinas was born around 1225 in the castle of Roccasecca, near Aquino, 
                Italy, to Count Landulf of Aquino and Theodora of Teano. He was the youngest 
                of several children in a noble family. From an early age, Thomas showed exceptional 
                intelligence and a deep desire for learning. At the age of five, he was sent to 
                the Benedictine monastery of Monte Cassino for his education, where he remained 
                until he was about thirteen years old. During this time, he developed a love for 
                prayer and study, and the monks recognized his potential for greatness.
              </p>
              
              <p className="mb-6">
                In 1239, Thomas was sent to the University of Naples to continue his studies. 
                It was there that he first encountered the Dominican friars and was deeply 
                impressed by their way of life, particularly their commitment to poverty, 
                preaching, and study. Despite strong opposition from his family, who wanted 
                him to become a Benedictine abbot, Thomas joined the Dominican Order in 1244 
                at the age of nineteen. His family was so opposed to this decision that they 
                had him kidnapped and held prisoner in the family castle for over a year, 
                hoping to change his mind. However, Thomas remained steadfast in his vocation, 
                and eventually his family relented and allowed him to continue his studies.
              </p>
              
              <p className="mb-6">
                After his release, Thomas was sent to Paris to study under St. Albert the Great, 
                one of the most brilliant minds of the time. Albert quickly recognized Thomas's 
                extraordinary intellectual abilities and became his mentor. Thomas's studies 
                included philosophy, theology, and the newly rediscovered works of Aristotle, 
                which were having a profound impact on medieval thought. Thomas's ability to 
                integrate Aristotelian philosophy with Christian theology would become one of 
                his greatest contributions to the Church. He was ordained a priest in 1250 
                and began teaching at the University of Paris in 1252.
              </p>
              
              <p className="mb-6">
                Thomas's teaching career was marked by controversy, as some theologians were 
                suspicious of his use of Aristotelian philosophy. However, his brilliance and 
                orthodoxy eventually won him widespread recognition and respect. In 1256, he 
                received his doctorate in theology and was appointed a professor at the University 
                of Paris. Over the next twenty years, Thomas would write some of the most important 
                works in the history of Christian theology, including the "Summa Theologica," 
                his masterpiece, which remains one of the most comprehensive and systematic 
                presentations of Catholic doctrine ever written. He also wrote commentaries 
                on Scripture, philosophical works, and numerous other theological treatises.
              </p>
              
              <p>
                In 1272, Thomas was called to Naples to establish a new Dominican house of 
                studies. It was during this time that he experienced a profound mystical 
                experience while celebrating Mass on December 6, 1273. After this experience, 
                he stopped writing, saying that all he had written seemed like "straw" compared 
                to what he had seen. Thomas died on March 7, 1274, at the age of forty-nine, 
                while traveling to the Second Council of Lyon. His last words were a commentary 
                on the Song of Songs. Thomas was canonized in 1323 by Pope John XXII and declared 
                a Doctor of the Church in 1567 by Pope Pius V. He is known as the "Angelic Doctor" 
                for his purity of life and the clarity of his teaching, and his feast day is 
                celebrated on January 28th.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Thomas Aquinas: Angelic Doctor</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Theologian and Philosopher</h3>
              <p className="mb-6">
                St. Thomas Aquinas's greatest legacy is his monumental contribution to Christian 
                theology and philosophy. His "Summa Theologica," though unfinished, remains one 
                of the most comprehensive and systematic presentations of Catholic doctrine ever 
                written. Thomas's ability to integrate Aristotelian philosophy with Christian 
                theology created a synthesis that has influenced Catholic thought for over seven 
                centuries. His method of using reason to explore and explain the truths of faith 
                has become the standard approach in Catholic theology. Thomas's writings cover 
                virtually every aspect of Christian doctrine, from the nature of God and the 
                Trinity to moral theology and the sacraments. His clarity of thought and precision 
                of expression have earned him the title "Angelic Doctor," and his works continue 
                to be studied and referenced by theologians, philosophers, and students of religion 
                throughout the world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Doctor of the Church</h3>
              <p className="mb-6">
                St. Thomas Aquinas's declaration as a Doctor of the Church recognizes his 
                exceptional contribution to the understanding and teaching of the Catholic faith. 
                His theological insights have been officially endorsed by the Church and continue 
                to guide Catholic teaching and practice. Thomas's emphasis on the harmony between 
                faith and reason has been particularly important in the Church's engagement with 
                modern science and philosophy. His understanding of natural law and moral theology 
                has influenced Catholic social teaching and ethical reflection. Thomas's method 
                of theological inquiry, which combines careful analysis with deep reverence for 
                the mysteries of faith, serves as a model for all who seek to understand and 
                explain the Catholic faith. His legacy as a Doctor of the Church ensures that 
                his insights will continue to guide the Church's teaching and mission for generations 
                to come.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Holiness and Learning</h3>
              <p>
                St. Thomas Aquinas's life serves as a powerful example of how intellectual 
                pursuit and spiritual growth can be perfectly integrated. His deep prayer life 
                and mystical experiences show that true wisdom comes not only from study but 
                also from union with God. Thomas's humility, evident in his famous statement 
                that his writings were like "straw" compared to his mystical vision, demonstrates 
                the proper attitude toward human knowledge in relation to divine revelation. 
                His commitment to poverty, chastity, and obedience as a Dominican friar shows 
                that holiness is not incompatible with intellectual achievement. Thomas's example 
                encourages all Christians to pursue both knowledge and virtue, to use their 
                intellectual gifts in service of the Church and the world, and to remain humble 
                in the face of the mysteries of God. His life reminds us that true wisdom comes 
                from God and that all human knowledge should ultimately lead us closer to Him.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">January 28</div>
              <p className="text-gray-600">Feast of St. Thomas Aquinas</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Thomas Aquinas is celebrated on January 28th, during the 
                winter season when the Church reflects on the themes of wisdom and learning. 
                This feast is celebrated as a memorial in the Roman Catholic Church, recognizing 
                Thomas's importance as a Doctor of the Church and his contribution to Catholic 
                theology and philosophy. The feast falls during a time when many students are 
                beginning new academic terms, making it an ideal time to reflect on the importance 
                of education and the pursuit of truth. The feast provides an opportunity to 
                honor Thomas's memory and to reflect on the relationship between faith and reason, 
                and the importance of using our intellectual gifts in service of God and others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Thomas Aquinas, many people participate in special prayers 
                and devotions to honor his memory and seek his intercession. Churches, particularly 
                those associated with the Dominican Order, hold special Masses and services. 
                Many educational institutions, especially Catholic schools and universities, 
                hold special events to honor Thomas's contribution to education and learning. 
                The day is also marked by prayers for students, teachers, and all those involved 
                in education, asking for St. Thomas's intercession in helping them to pursue 
                truth and wisdom. Many people also take time to read and reflect on Thomas's 
                writings, particularly his prayers and spiritual reflections. The feast is 
                also a time to reflect on the importance of integrating faith and reason in 
                our lives and in our educational pursuits.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of wisdom and the 
                ability to integrate faith and reason in our lives. Many people make special 
                petitions for students and teachers, asking for St. Thomas's intercession 
                in helping them to pursue truth and to use their knowledge for the glory of 
                God. The day is also a time to reflect on the importance of study and learning 
                as a form of prayer and service to God. St. Thomas's feast day encourages 
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
                  <li>• <strong>Students:</strong> Patron of all students</li>
                  <li>• <strong>Teachers:</strong> Patron of educators</li>
                  <li>• <strong>Theologians:</strong> Patron of theologians</li>
                  <li>• <strong>Philosophers:</strong> Patron of philosophers</li>
                  <li>• <strong>Universities:</strong> Patron of academic institutions</li>
                  <li>• <strong>Booksellers:</strong> Patron of those who sell books</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Wisdom:</strong> Helper in seeking wisdom</li>
                  <li>• <strong>Learning:</strong> Patron of education</li>
                  <li>• <strong>Truth:</strong> Helper in finding truth</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Thomas Aquinas</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Thomas Aquinas, Angelic Doctor and patron of students, help me 
                    to seek wisdom and truth with humility and love.
                  </p>
                  <p className="mb-4">
                    Teach me to integrate faith and reason in my studies and in my life. 
                    Help me to use my knowledge for the glory of God and the service of others.
                  </p>
                  <p>
                    St. Thomas Aquinas, pray for me that I may have the wisdom to understand 
                    God's ways, the humility to recognize my limitations, and the love to 
                    use my gifts in service of the truth. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Students</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Thomas Aquinas, patron of students and teachers, intercede for all 
                    those who are engaged in the pursuit of knowledge and truth.
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
                    "St. Thomas Aquinas, pray for us!"
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
            <Link href="/saints/st-albert-great" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Albert the Great
                </h3>
                <p className="text-gray-700 text-sm">
                  Dominican teacher and mentor of St. Thomas Aquinas.
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

            <Link href="/saints/st-augustine" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Augustine
                </h3>
                <p className="text-gray-700 text-sm">
                  Doctor of the Church and great theologian.
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