import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Padre Pio - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Padre Pio, stigmatist and miracle worker.',
  keywords: [
    'st padre pio',
    'saint padre pio',
    'stigmata',
    'september 23 feast day',
    'catholic saints',
    'modern saints',
    'patron of civil defense'
  ],
  openGraph: {
    title: 'St. Padre Pio - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Padre Pio, stigmatist and miracle worker.',
    url: 'https://catholicbibleonline.com/saints/st-padre-pio',
  },
  twitter: {
    title: 'St. Padre Pio - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Padre Pio, stigmatist and miracle worker.',
  }
}

export default function StPadrePioPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">✝️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Padre Pio
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Stigmatist and Miracle Worker
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Padre Pio</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">September 23</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">✝️</div>
              <div className="text-sm text-gray-600">Modern Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Padre Pio</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Padre Pio was an Italian priest who was known for his piety and 
                charity, as well as the gift of the stigmata, which has never been 
                explained. St. Padre Pio was born Francesco Forgione, on May 25, 1887, 
                in Pietrelcina, Italy. His parents were peasant farmers. He had an older 
                brother and three younger sisters, as well as two other siblings who 
                died in infancy. As a child, he was very religious and by the age of 
                five he reportedly made the decision to dedicate his life to God. Fortunately, 
                his parents were also very religious and they supported his Catholic 
                development. His family attended daily Mass. Francisco served as an 
                altar boy at his local parish. Francisco was known for taking on penances 
                and his mother once scolded him for sleeping on a stone floor. Francisco's 
                community was also supportive. Saint's days were popular celebrations 
                and commonly celebrated in his town.
              </p>
              
              <p className="mb-6">
                From his tender age, Francisco had a peculiar ability. He could see 
                guardian angels, spoke with Jesus and the Virgin Mary. This was not 
                something taught to him, but occurred so naturally that he assumed 
                other people could see them too. Although Francisco and his family 
                was very religious, they were also very poor, which required that he 
                work. He spent many years as a child tending to a small flock of sheep 
                owned by his family. Unfortunately, the work meant he was unable to 
                attend school regularly, so he quickly fell behind other kids his age. 
                Francisco was sickly as a child. He suffered an attack of gastroenteritis 
                at age six and when he was ten, he had typhoid fever. In 1897, after 
                three years of schooling, Francisco expressed to his parents that he 
                wanted to become a friar. His parents traveled to a nearby community 
                of monks and asked if Francesco could join them. He was evaluated, 
                despite his young age, and was told that he needed more education before 
                he could join.
              </p>
              
              <p className="mb-6">
                To prepare Francesco, his parents decided to hire a private tutor. To 
                pay the cost of the tutor, Francesco's father traveled to America to 
                find work, and sent the money home. At the age of 15, Francisco was 
                finally ready and he entered the novitiate of the Capuchin friars at 
                Morcone. He took the name of "Pio" in honor of Pope Pius I, whose relic 
                he often saw at his local chapel. At the age of 17, Brother Pio became 
                extremely ill and could only digest milk and cheese. He was sent to 
                the mountain for better air, and when this did not work, he was sent 
                home to his family. Amid all this, he continued to study for the priesthood. 
                On one occasion during prayer, a fellow monk astonishingly reported 
                he saw Pio levitate during an episode of ecstasy. Brother Pio became 
                a priest in 1910, but was permitted to remain at home because of his 
                poor health.
              </p>
              
              <p className="mb-6">
                In 1915, with World War I afflicting the world, Padre Pio was summoned 
                for military service. He was compelled to leave a tiny community of 
                monks, with whom he was then housed, and drafted into medical service. 
                However, he was so sickly that he was often sent home, only to then 
                be recalled for service. In March 1916, he was finally dismissed because 
                of his poor health. On September 20, Padre Pio was hearing confessions 
                when he felt pain in his hands and feet. He noticed the stigmata, the 
                wounds of Christ, appearing on his hands and feet. The experience was 
                painful. Bleeding occurred. The wounds smelled of roses, and although 
                they continued to weep, they never became infected. Doctors who later 
                examined the stigmata were amazed at their perfectly round shape.
              </p>
              
              <p className="mb-6">
                By 1919, word began to spread about Padre Pio's stigmata and people 
                came from far away to examine him. Padre Pio became popular with the 
                people he encountered and soon began to attribute supernatural occurrences 
                to him. For example, he was said to levitate, and able to perform miracles. 
                His popularity became a source of concern for the Church and the Vatican 
                began to restrict his activities to minimize public interaction. Padre 
                Pio himself was uncomfortable with his newfound popularity and the 
                attention he received because of his stigmata. A Church investigation 
                into his stigmata concluded that his condition was not faked.
              </p>
              
              <p>
                By 1934, the Vatican began to change its attitude towards Padre Pio 
                and he was again allowed to perform public duties. He could preach, 
                despite never being officially licensed by the Church to do so. Pope 
                Pius XI encouraged people to visit him. In 1947, Fr. Karol Wojtyla 
                visited Padre Pio who prophetically told him he would rise to the highest 
                post in the Church." Fr. Karol Wojtyla became Pope John Paul II in 1978. 
                Padre Pio used his newfound popularity to open a hospital in San Giovanni 
                Rotondo. The facility opened in 1956. Pope Paul VI reviewed the controversies 
                surrounding Padre Pio and dismissed any concerns over his conduct and 
                the authenticity of his stigmata. Padre Pio became internationally famous. 
                He was known for his piety, charity and the quality of his preaching. 
                He famously advised, "Pray, hope and don't worry." He had other illnesses, 
                as well, including cancer which was miraculously healed after just two 
                treatments. Other problems, such as arthritis, which plagued him in 
                his later years, never went away. Padre Pio died on September 23, 1968. 
                His funeral was attended by over 100,000 people. Pope John Paul II 
                recognized Padre Pio as a saint on June 16, 2002. His feast day is 
                September 23. He is the patron of civil defense volunteers, adolescents, 
                and the village of Pietrelcina.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Padre Pio: Stigmatist and Miracle Worker</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Stigmatist and Miracle Worker</h3>
              <p className="mb-6">
                St. Padre Pio's most remarkable legacy is his bearing of the stigmata, 
                the wounds of Christ, which he carried for fifty years until his death. 
                This extraordinary gift, which has never been fully explained by medical 
                science, made him one of the most famous and controversial figures in 
                the Catholic Church during the twentieth century. The stigmata appeared 
                on Padre Pio's hands, feet, and side, exactly corresponding to the wounds 
                of Christ on the cross. These wounds bled continuously, smelled of roses, 
                and never became infected, despite being open for decades. Medical examinations 
                confirmed that the wounds were perfectly round and could not be explained 
                by natural causes. Padre Pio's stigmata served as a powerful witness 
                to the reality of Christ's passion and death, and as a reminder of the 
                redemptive value of suffering. His ability to perform miracles, including 
                healings, bilocation, and the gift of reading souls in confession, further 
                demonstrated his extraordinary spiritual gifts and his close union with 
                Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Prayer and Trust</h3>
              <p className="mb-6">
                St. Padre Pio's famous advice, "Pray, hope and don't worry," encapsulates 
                his spiritual philosophy and continues to inspire millions of people 
                around the world. Despite his extraordinary gifts and the attention 
                they brought him, Padre Pio remained humble and focused on the essentials 
                of the spiritual life. He spent many hours each day in prayer, particularly 
                in the celebration of Mass, which could last for several hours due to 
                his deep devotion and the mystical experiences he often had during the 
                liturgy. Padre Pio's life demonstrates that true holiness is not about 
                extraordinary phenomena, but about a deep and abiding trust in God's 
                providence. His example encourages us to make prayer the center of our 
                lives and to trust in God's plan, even when we don't understand what 
                is happening to us. Padre Pio's legacy reminds us that God can work 
                through anyone, regardless of their background or circumstances, and 
                that the most important thing is to remain faithful to prayer and to 
                trust in God's love and mercy.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Founder of the Hospital of the Relief of Suffering</h3>
              <p>
                One of St. Padre Pio's most lasting contributions was the establishment 
                of the Hospital of the Relief of Suffering in San Giovanni Rotondo, 
                which opened in 1956. This hospital, which Padre Pio called his "greatest 
                work," was built to provide medical care to the poor and to serve as 
                a place where the sick could receive both physical and spiritual healing. 
                The hospital continues to operate today as one of the most advanced 
                medical facilities in southern Italy, serving thousands of patients 
                each year. Padre Pio's vision for the hospital was that it would be 
                a place where the sick could receive not only medical treatment, but 
                also spiritual comfort and prayer. His example encourages us to use 
                our gifts and resources to serve others, particularly the poor and 
                suffering. Padre Pio's legacy reminds us that true charity involves 
                both spiritual and material assistance, and that we are called to serve 
                Christ in the person of the poor and sick. The hospital stands as a 
                lasting testament to Padre Pio's love for the suffering and his desire 
                to bring Christ's healing to all who are in need.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">September 23</div>
              <p className="text-gray-600">Feast of St. Padre Pio</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Padre Pio is celebrated on September 23rd, during 
                the autumn season when the Church reflects on the themes of harvest 
                and thanksgiving. This feast is celebrated as a memorial in the Roman 
                Catholic Church, recognizing Padre Pio's importance as a stigmatist 
                and miracle worker, and his powerful example of prayer and trust in 
                God. The feast falls during a time when many people are reflecting 
                on the fruits of their labor and giving thanks for God's blessings, 
                making it an ideal time to remember Padre Pio's message of "Pray, hope 
                and don't worry." The feast provides an opportunity to honor Padre Pio's 
                memory and to reflect on the importance of prayer, trust, and service 
                to others in our own lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Padre Pio, many people participate in special 
                prayers and devotions to honor his memory and seek his intercession. 
                Churches, particularly those with connections to the Capuchin order 
                or Italian communities, hold special Masses and services. Many people 
                gather to pray for healing and for the strength to trust in God's plan, 
                asking for St. Padre Pio's intercession in helping them to grow in 
                faith and hope. The day is also marked by prayers for those who are 
                suffering from illness or other difficulties, asking for St. Padre Pio's 
                help in bringing them comfort and healing. Many people also take time 
                to reflect on the importance of prayer in their lives and to pray for 
                the grace to trust in God's providence, following Padre Pio's example. 
                The feast is also a time to reflect on how we can incorporate Padre 
                Pio's virtues of prayer, trust, and service to others into our daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of trust and 
                the ability to surrender our worries to God. Many people make special 
                petitions for healing and for the strength to endure suffering with 
                patience and faith, asking for St. Padre Pio's intercession in helping 
                them to grow in holiness. The day is also a time to reflect on the 
                importance of prayer and to pray for the grace to make prayer a priority 
                in our lives. St. Padre Pio's feast day encourages us to remember that 
                we are all called to be saints and that holiness is achieved through 
                prayer, trust, and complete surrender to God's will. It is also a time 
                to pray for the grace to serve others, particularly the poor and suffering, 
                following Padre Pio's example of charity and compassion. The feast reminds 
                us that God can work through anyone, regardless of their background 
                or circumstances, and that the most important thing is to remain faithful 
                to prayer and to trust in God's love and mercy.
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
                  <li>• <strong>Civil Defense:</strong> Patron of civil defense volunteers</li>
                  <li>• <strong>Adolescents:</strong> Patron of adolescents</li>
                  <li>• <strong>Pietrelcina:</strong> Patron of Pietrelcina</li>
                  <li>• <strong>Confessors:</strong> Patron of confessors</li>
                  <li>• <strong>Capuchins:</strong> Patron of Capuchin friars</li>
                  <li>• <strong>Stigmatists:</strong> Patron of stigmatists</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Prayer:</strong> Helper in prayer life</li>
                  <li>• <strong>Trust:</strong> Patron of trust in God</li>
                  <li>• <strong>Healing:</strong> Helper in healing</li>
                  <li>• <strong>Miracles:</strong> Patron of miracles</li>
                  <li>• <strong>Protection:</strong> Helper in protection</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Padre Pio</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Padre Pio, stigmatist and miracle worker, help me to trust 
                    in God's plan and to pray with faith and hope.
                  </p>
                  <p className="mb-4">
                    Teach me to surrender my worries to God and to serve others with 
                    love and compassion. Help me to make prayer the center of my life 
                    and to trust in God's mercy and love.
                  </p>
                  <p>
                    St. Padre Pio, pray for me that I may have the faith to trust in 
                    God's providence, the hope to persevere in difficulties, and the 
                    love to serve others as you did. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Healing</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Padre Pio, patron of healing and miracles, intercede for all 
                    those who are suffering from illness or other difficulties.
                  </p>
                  <p>
                    Help them to find healing and comfort, and to trust in God's love 
                    and mercy. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Padre Pio, pray for us!"
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
            <Link href="/saints/st-francis-assisi" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  First stigmatist and founder of the Franciscans.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john-paul-ii" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John Paul II
                </h3>
                <p className="text-gray-700 text-sm">
                  Pope who canonized Padre Pio.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-faustina" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Faustina
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle of Divine Mercy.
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