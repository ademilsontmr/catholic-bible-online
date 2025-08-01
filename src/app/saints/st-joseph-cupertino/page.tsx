import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Joseph of Cupertino - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Joseph of Cupertino, patron of students and air travelers.',
  keywords: [
    'st joseph of cupertino',
    'saint joseph of cupertino',
    'joseph of cupertino',
    'september 18 feast day',
    'catholic saints',
    'modern saints',
    'patron of students'
  ],
  openGraph: {
    title: 'St. Joseph of Cupertino - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Joseph of Cupertino, patron of students and air travelers.',
    url: 'https://catholicbibleonline.com/saints/st-joseph-cupertino',
  },
  twitter: {
    title: 'St. Joseph of Cupertino - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Joseph of Cupertino, patron of students and air travelers.',
  }
}

export default function StJosephCupertinoPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">✈️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Joseph of Cupertino
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron of Students and Air Travelers
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Joseph of Cupertino</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">September 18</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">✈️</div>
              <div className="text-sm text-gray-600">Modern Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Joseph of Cupertino</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Joseph was born in 1603 at Cupertino, in the diocese of Nardo 
                in the Kingdom of Naples. After spending his childhood and adolescence 
                in simplicity and innocence, he finally joined the Franciscan Friars 
                Minor Conventual. After his ordination to the holy priesthood, he 
                gave himself up entirely to a life of devotion to the Lord and 
                his church. His deep devotional life led him to the kind of holiness 
                which is forged through humility, voluntary mortification, and obedience. 
                He was consecrated to the Blessed Virgin Mary and promoted devotion 
                to her among all classes of people as wonderful path to a deeper 
                Christian life and love for Jesus Christ.
              </p>
              
              <p className="mb-6">
                It is said that his mother often considered him a nuisance and 
                treated him harshly. Joseph was purported to be slow to learn 
                and absent-minded. He was said to frequently wander aimlessly, 
                with his mouth gaping open. And, he had a bad temper, so, he 
                was not at all popular. He tried to learn the trade of shoemaking, 
                but failed. He asked to become a Franciscan, but they initially 
                would not accept him. Finally he did join the Capuchins. However, 
                for a very short period of time. Eight months later, they sent 
                him away. Sources say it was because he could not seem to do 
                anything right. He dropped piles of dishes and kept forgetting 
                to do what he was told. His mother was not at all pleased to 
                have the eighteen-year-old Joseph back home again, so she finally 
                got him accepted as a servant at the Franciscan monastery. He 
                was given the friars habit and put to hard work taking care of 
                the horses.
              </p>
              
              <p className="mb-6">
                About this time, Joseph began to change. He grew in humility 
                and gentleness, fruits of the Holy Spirit at work in a person. 
                He became more careful and successful at his work. He also began 
                to pray more do more voluntary acts of penance. Finally, he was 
                able to enter the Franciscan order and, eventually, study for 
                the priesthood. Although he was a good and holy friar, he had 
                a very hard time with studies. During his seminary exams, the 
                examiner happened to ask him to explain the only thing he knew 
                well, and so he was ordained a deacon, and later a priest.
              </p>
              
              <p className="mb-6">
                After this, the Holy Spirit began to work many amazing miracles 
                through St. Joseph. Over seventy times, people say they saw him 
                rise from the ground while offering mass or praying. Often he 
                went into ecstasy and would be caught up in talking with God. 
                He fell so deeply in love with God that everything he saw only 
                drew him into a deeper union. He said that all the troubles of 
                this world were nothing but the "play" battles children have 
                with popguns. St. Joseph became so famous for the miracles that 
                he was finally kept hidden from the public, but he was happy 
                for the chance to be alone with his beloved Lord. On His part, 
                Jesus never left him alone and one day came to bring him to Heaven. 
                Pope Clement XIII canonized him in 1767. He is the patron saint 
                of air travelers, pilots and learning disabled.
              </p>
              
              <p>
                The life of this saint was marked by ecstasies and levitations. 
                The mere mention of God or a spiritual matter was enough to take 
                him out of his senses; at Mass he is said to have frequently 
                floated in the air in rapture. Once as Christmas carols were 
                being sung, he soared to the high altar and knelt in the air, 
                in ecstatic prayer. The people flocked to him in droves seeking 
                help and advice in the confessional, and he assisted many in 
                living a truly devout Christian life. However, this humble man 
                had to endure many severe trials and terrible temptations throughout 
                his life. He died on September 18, 1663.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Joseph of Cupertino: Patron of Students</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Divine Providence</h3>
              <p className="mb-6">
                St. Joseph of Cupertino's most enduring legacy is his extraordinary 
                example of how God can work through our weaknesses and limitations 
                to accomplish great things. Despite being considered slow to learn, 
                absent-minded, and having difficulty with studies, Joseph was 
                miraculously ordained to the priesthood when his examiner happened 
                to ask him about the only topic he knew well. This demonstrates 
                that God's grace is not limited by our human limitations and that 
                He can use even our weaknesses for His glory. Joseph's legacy 
                reminds us that we should never give up on our dreams or our 
                calling, even when we face obstacles or when others doubt our 
                abilities. His example teaches us that God's timing is perfect 
                and that He often works in unexpected ways to bring about His 
                plans. Joseph's story challenges us to trust in God's providence 
                and to believe that He can accomplish great things through us, 
                even when we feel inadequate or unprepared.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Students and Learning</h3>
              <p className="mb-6">
                St. Joseph of Cupertino's patronage of students and those with 
                learning disabilities stems from his own struggles with education 
                and his miraculous success in his seminary exams. His story gives 
                hope to all students who struggle with their studies, reminding 
                them that God can help them overcome their difficulties and achieve 
                their goals. Joseph's legacy teaches us that intelligence and 
                academic success are not the only measures of a person's worth 
                or potential, and that God values qualities like humility, perseverance, 
                and love more than intellectual achievements. His example encourages 
                students to trust in God's help during their studies and to remember 
                that their worth comes not from their grades or academic performance, 
                but from their relationship with God and their willingness to 
                serve others. Joseph's patronage also reminds us of the importance 
                of supporting and encouraging students who face learning challenges, 
                helping them to recognize their unique gifts and potential.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Mystical Union</h3>
              <p>
                St. Joseph of Cupertino's extraordinary mystical experiences, 
                including his frequent levitations and ecstasies, make him a 
                powerful witness to the reality of God's presence and the possibility 
                of deep union with Him. His ability to levitate during Mass and 
                his frequent ecstasies demonstrate that God can work extraordinary 
                miracles through those who are completely surrendered to Him. 
                Joseph's legacy teaches us that true holiness involves not just 
                external acts of piety, but a deep, personal relationship with 
                God that transforms every aspect of our lives. His example challenges 
                us to examine our own relationship with God and to ask ourselves 
                whether we are truly seeking union with Him or just going through 
                the motions of religious practice. Joseph's story also reminds 
                us that God's love for us is so great that He can lift us up 
                from our earthly concerns and draw us into His presence, even 
                in this life.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">September 18</div>
              <p className="text-gray-600">Feast of St. Joseph of Cupertino</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Joseph of Cupertino is celebrated on September 
                18th, during the autumn season when the Church reflects on the 
                themes of harvest and thanksgiving. This feast is celebrated 
                as a memorial in the Roman Catholic Church, recognizing Joseph's 
                importance as the patron of students and air travelers and a 
                model of trust in divine providence. The feast falls during 
                a time when many students are beginning a new academic year, 
                making it an ideal time to remember Joseph's special care for 
                students and his miraculous help during his own studies. The 
                feast provides an opportunity to honor Joseph's memory and to 
                reflect on how we can trust in God's help during difficult times. 
                It is also a time to pray for students, especially those who 
                struggle with learning, and for all those who travel by air, 
                asking for Joseph's intercession in helping them to overcome 
                their challenges and reach their destinations safely.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Joseph of Cupertino, many people participate 
                in special prayers and devotions to honor his memory and seek 
                his intercession. Churches, particularly those with connections 
                to educational institutions or aviation ministries, hold special 
                Masses and services. Many students gather to pray for success 
                in their studies, asking for St. Joseph's intercession in helping 
                them to overcome learning difficulties and achieve their academic 
                goals. The day is also marked by prayers for air travelers and 
                pilots, asking for Joseph's protection during flights. Many people 
                also take time to reflect on their own struggles and difficulties 
                and to pray for the grace to trust in God's providence, following 
                Joseph's example of perseverance and faith. The feast is also 
                a time to reflect on how we can better support and encourage 
                those who face learning challenges or other difficulties in their 
                lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of trust 
                in God's providence and the ability to persevere through difficulties. 
                Many people make special petitions for students and those with 
                learning disabilities, asking for St. Joseph's intercession in 
                helping them to overcome their challenges and achieve their goals. 
                The day is also a time to reflect on the importance of trusting 
                in God's timing and to pray for the grace to believe that God 
                can work through our weaknesses and limitations. St. Joseph's 
                feast day encourages us to remember that we are all called to 
                trust in God's help and that He can accomplish great things through 
                us, even when we feel inadequate or unprepared. It is also a 
                time to pray for the grace to seek deeper union with God and 
                to be open to the extraordinary ways in which He can work in 
                our lives. The feast reminds us that true success comes not 
                from our own abilities, but from our trust in God and our willingness 
                to surrender to His will.
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
                  <li>• <strong>Students:</strong> Patron of students</li>
                  <li>• <strong>Air Travelers:</strong> Patron of air travelers</li>
                  <li>• <strong>Pilots:</strong> Patron of pilots</li>
                  <li>• <strong>Learning Disabled:</strong> Patron of learning disabled</li>
                  <li>• <strong>Examinations:</strong> Patron of examinations</li>
                  <li>• <strong>Mental Health:</strong> Patron of mental health</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Providence:</strong> Helper in trusting divine providence</li>
                  <li>• <strong>Perseverance:</strong> Patron of perseverance</li>
                  <li>• <strong>Humility:</strong> Helper in practicing humility</li>
                  <li>• <strong>Protection:</strong> Patron of protection</li>
                  <li>• <strong>Mystical Union:</strong> Helper in seeking union with God</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer of St. Joseph of Cupertino</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Great St. Joseph of Cupertino who while on earth did obtain 
                    from God the grace to be asked at your examination only the 
                    questions you knew, obtain for me a like favour in the examinations 
                    for which I am now preparing.
                  </p>
                  <p className="mb-4">
                    In return I promise to make you known and cause you to be invoked. 
                    I will also imitate your life of prayer and devotion.
                  </p>
                  <p>
                    Through Jesus Christ our Lord. St. Joseph of Cupertino, Pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Students</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Joseph of Cupertino, patron of students and learning, 
                    intercede for all those who struggle with their studies.
                  </p>
                  <p>
                    Help us to trust in God's providence and to persevere through 
                    our difficulties, knowing that He can work through our weaknesses. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Joseph of Cupertino, pray for us!"
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
                  Mendicant Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Franciscan order and lover of poverty.
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
                  Great theologian and patron of students.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joseph" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Marian Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joseph
                </h3>
                <p className="text-gray-700 text-sm">
                  Foster father of Jesus and patron of workers.
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