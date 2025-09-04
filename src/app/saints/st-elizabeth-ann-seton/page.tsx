import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Elizabeth Ann Seton - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Elizabeth Ann Seton, first native-born American saint.',
  keywords: [
    'st elizabeth ann seton',
    'saint elizabeth ann seton',
    'elizabeth ann seton',
    'january 4 feast day',
    'catholic saints',
    'modern saints',
    'patron of catholic schools'
  ],
  openGraph: {
    title: 'St. Elizabeth Ann Seton - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Elizabeth Ann Seton, first native-born American saint.',
    url: 'https://catholicbibleonline.com/saints/st-elizabeth-ann-seton',
  },
  twitter: {
    title: 'St. Elizabeth Ann Seton - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Elizabeth Ann Seton, first native-born American saint.',
  }
}

export default function StElizabethAnnSetonPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Elizabeth Ann Seton
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            First Native-Born American Saint and Patron of Catholic Schools
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Elizabeth Ann Seton</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">January 4</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📚</div>
              <div className="text-sm text-gray-600">Modern Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Elizabeth Ann Seton</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Elizabeth Ann Bayley Seton was the first native born American to be 
                canonized by the Catholic Church. Born two years before the American 
                Revolution, Elizabeth grew up in the upper class of New York society. 
                She was a prolific reader, and read everything from the Bible to contemporary 
                novels. In spite of her high society background, Elizabeth's early life 
                was quiet, simple, and often lonely. As she grew a little older, the 
                Bible was to become her continual instruction, support and comfort - 
                and she would continue to love the Scriptures for the rest of her life. 
                In 1794, Elizabeth married the wealthy young William Seton, with whom 
                she was deeply in love. The first years of their marriage were happy 
                and prosperous. Elizabeth wrote in her diary at first autumn, "My own 
                home at twenty-the world-that and heaven too-quite impossible."
              </p>
              
              <p className="mb-6">
                This time of Elizabeth's life was to be a brief moment of earthly happiness 
                before the many deaths and partings she was to suffer. Within four years, 
                William's father died, leaving the young couple in charge of William's 
                seven half brothers and sisters, as well as the family's importing business. 
                Events moved quickly from there with devastating effect. Both William's 
                business and health failed. He was finally forced to file a petition 
                of bankruptcy and, in a final attempt to save William's health, the 
                Setons sailed for Italy, where William had business friends. Unfortunately, 
                William died of tuberculosis while in Italy. Elizabeth's one consolation 
                was that he had recently awakened to the things of God. The many enforced 
                separations from dear ones by death and distance served to draw Elizabeth's 
                heart to God and eternity. The accepting and embracing of God's will 
                - "The Will," as she called it - would be a keynote in her spiritual life.
              </p>
              
              <p className="mb-6">
                Elizabeth's deep concern for the spiritual welfare of her family and 
                friends eventually led her into the Catholic Church. In Italy, Elizabeth 
                captivated everyone by her kindness, patience, good sense, wit, and courtesy. 
                During this time Elizabeth became interested in the Catholic Faith and, 
                over a period of months, her Italian friends guided her in Catholic instruction. 
                Elizabeth's desire for the Bread of Life was to be a strong force leading 
                her to the Catholic Church. Having lost her mother at an early age, 
                Elizabeth felt great comfort in the idea that the Blessed Virgin was 
                truly her mother. She asked the Blessed Virgin to guide her to the True 
                Faith and officially joined the Catholic Church in 1805.
              </p>
              
              <p className="mb-6">
                At the suggestion of the president of St. Mary's College in Baltimore, 
                Maryland, Elizabeth started a school in that city. The school had originally 
                been secular but once news of her entrance to Catholicism spread, several 
                girls were removed from her school. It was then Seton, and two other 
                young women who helped her in her work, began plans for a Sisterhood. 
                They established the first free Catholic school in America. When the 
                young community adopted their rule, they made provisions for Elizabeth 
                to continue raising her children. On March 25, 1809, Elizabeth Seton 
                pronounced her vows of poverty, chastity, and obedience, binding for 
                one year. From that time she was called Mother Seton.
              </p>
              
              <p>
                Although Mother Seton became afflicted with tuberculosis, she continued 
                to guide her children. The Rule of the Sisterhood was formally ratified 
                in 1812. It was based upon the Rule St. Vincent de Paul had written 
                for his Daughters of Charity in France. By 1818, in addition to their 
                first school, the sisters had established two orphanages and another 
                school. Today, six groups of sisters can trace their origins to Mother 
                Seton's initial foundation. Seton's favorite prayer was the 23rd Psalm 
                and she developed a deep devotion to the Eucharist, Sacred Scripture, 
                and the Virgin Mary. For the last three years of her life, Elizabeth 
                felt that God was getting ready to call her, and this gave her great 
                joy. Mother Seton died in 1821 at the age of 46, only sixteen years 
                after becoming a Catholic. She was beatified by Pope John XXIII on 
                March 17, 1963 and was canonized on September 14, 1975 by Pope Paul VI.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Elizabeth Ann Seton: Pioneer of Catholic Education</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Founder of Catholic Education in America</h3>
              <p className="mb-6">
                St. Elizabeth Ann Seton's most enduring legacy is her role as the founder 
                of Catholic education in the United States. Her establishment of the 
                first free Catholic school in America marked the beginning of a vast 
                network of Catholic educational institutions that would serve millions 
                of students across the country. Mother Seton's vision of providing 
                quality education infused with Catholic values and faith has shaped 
                the educational landscape of America for over two centuries. Her Sisters 
                of Charity, founded in 1809, became the first religious community established 
                in the United States and served as a model for countless other religious 
                communities dedicated to education and service. Today, six different 
                religious communities trace their origins to Mother Seton's initial 
                foundation, demonstrating the far-reaching impact of her educational 
                mission. Her legacy reminds us that education is not just about academic 
                achievement, but about forming the whole person - mind, body, and soul 
                - in the light of Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Conversion and Faith</h3>
              <p className="mb-6">
                St. Elizabeth Ann Seton's journey from Episcopalianism to Catholicism 
                serves as a powerful example of how God works in the hearts of those 
                who seek truth with sincerity and openness. Her conversion was not 
                a sudden event but a gradual process of spiritual growth and discernment, 
                marked by her deep love for Scripture, her devotion to the Blessed 
                Virgin Mary, and her desire for the Eucharist. Despite facing social 
                ostracism and financial hardship as a result of her conversion, Elizabeth 
                remained steadfast in her faith and used her experiences to help others 
                who were struggling with their own spiritual journeys. Her example 
                teaches us that true conversion involves not just a change of religious 
                affiliation, but a complete transformation of heart and mind that leads 
                to a deeper relationship with God and a greater commitment to serving 
                others. Her legacy encourages us to be open to God's grace and to 
                trust in His providence, even when the path ahead seems uncertain 
                or difficult.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to God's Will in Suffering</h3>
              <p>
                St. Elizabeth Ann Seton's life demonstrates how God can bring great 
                good out of suffering and loss. Throughout her life, Elizabeth experienced 
                numerous trials - the death of her mother at an early age, the loss 
                of her beloved husband, financial ruin, social rejection, and her 
                own battle with tuberculosis. Yet, instead of allowing these sufferings 
                to embitter her, Elizabeth learned to embrace them as opportunities 
                to grow closer to God and to serve others more effectively. Her famous 
                phrase, "The Will," referring to God's will, became the cornerstone 
                of her spirituality and the source of her strength in difficult times. 
                Elizabeth's example teaches us that suffering is not meaningless, 
                but can be a powerful means of spiritual growth and a way to participate 
                in Christ's redemptive work. Her legacy reminds us that God never 
                abandons us in our suffering, but is always present, offering us His 
                grace and love to help us persevere and grow in holiness.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">January 4</div>
              <p className="text-gray-600">Feast of St. Elizabeth Ann Seton</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Elizabeth Ann Seton is celebrated on January 4th, 
                during the early days of the new year when many people are making 
                resolutions and beginning new projects. This feast is celebrated as 
                a memorial in the Roman Catholic Church, recognizing Elizabeth's importance 
                as the first native-born American saint and her pioneering work in 
                Catholic education. The feast falls during a time when many students 
                are returning to school after the Christmas break, making it an ideal 
                time to remember Elizabeth's dedication to education and her commitment 
                to forming young minds in the Catholic faith. The feast provides an 
                opportunity to honor Elizabeth's memory and to reflect on the importance 
                of Catholic education in our own communities. It is also a time to 
                pray for all those who work in Catholic schools and educational ministries, 
                asking for Elizabeth's intercession in helping them to serve their 
                students with wisdom, love, and faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Elizabeth Ann Seton, many people participate 
                in special prayers and devotions to honor her memory and seek her intercession. 
                Catholic schools, particularly those named after St. Elizabeth Ann 
                Seton or those with connections to the Sisters of Charity, hold special 
                Masses and services. Many people gather to pray for Catholic education 
                and for all those who work in schools and educational ministries, 
                asking for St. Elizabeth's intercession in helping them to serve their 
                students with wisdom and love. The day is also marked by prayers for 
                those who are considering conversion to the Catholic faith, asking 
                for St. Elizabeth's guidance and support. Many people also take time 
                to reflect on their own educational journey and to pray for the grace 
                to be lifelong learners and faithful witnesses to Christ. The feast 
                is also a time to reflect on how we can incorporate Elizabeth's virtues 
                of faith, courage, and service into our daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of wisdom 
                and the ability to serve others with love and dedication. Many people 
                make special petitions for Catholic schools and educational ministries, 
                asking for St. Elizabeth's intercession in helping them to provide 
                quality education infused with Catholic values. The day is also a 
                time to reflect on the importance of education and to pray for the 
                grace to be faithful witnesses to Christ in our own learning and teaching. 
                St. Elizabeth's feast day encourages us to remember that we are all 
                called to be lifelong learners and to use our gifts and talents for 
                the service of others. It is also a time to pray for the grace to 
                trust in God's will, even when we face difficulties or uncertainties. 
                The feast reminds us that education is a sacred calling and that we 
                should approach learning and teaching with reverence, humility, and 
                love for God and neighbor.
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
                  <li>• <strong>Catholic Schools:</strong> Patron of Catholic schools</li>
                  <li>• <strong>Educators:</strong> Patron of educators</li>
                  <li>• <strong>Widows:</strong> Patron of widows</li>
                  <li>• <strong>Converts:</strong> Patron of converts</li>
                  <li>• <strong>Orphans:</strong> Patron of orphans</li>
                  <li>• <strong>America:</strong> Patron of America</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Prayer:</strong> Helper in prayer life</li>
                  <li>• <strong>Education:</strong> Patron of education</li>
                  <li>• <strong>Conversion:</strong> Helper in conversion</li>
                  <li>• <strong>Faith:</strong> Patron of faith</li>
                  <li>• <strong>Service:</strong> Helper in service to others</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Elizabeth Ann Seton</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Lord God, you blessed Elizabeth Seton with gifts of grace as 
                    wife and mother, educator and foundress, so that she might spend 
                    her life in service to your people.
                  </p>
                  <p className="mb-4">
                    Through her example and prayers may we learn to express our love 
                    for you in love for our fellow men and women. Help me to trust 
                    in your will and to serve others with wisdom and love.
                  </p>
                  <p>
                    St. Elizabeth Ann Seton, pray for me that I may have the courage 
                    to follow God's will, the wisdom to serve others, and the faith 
                    to trust in His providence. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Catholic Education</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Elizabeth Ann Seton, patron of Catholic schools and educators, 
                    intercede for all those who work in Catholic education.
                  </p>
                  <p>
                    Help them to serve their students with wisdom, love, and faith, 
                    and guide them in forming young minds in the Catholic tradition. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Elizabeth Ann Seton, pray for us!"
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
            <Link href="/saints/st-vincent-de-paul" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Charity Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Vincent de Paul
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Daughters of Charity, whose rule inspired Mother Seton.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-teresa-calcutta" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Teresa of Calcutta
                </h3>
                <p className="text-gray-700 text-sm">
                  Mother Teresa, another model of service and education for the poor.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john-bosco" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John Bosco
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron of youth and founder of educational institutions.
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