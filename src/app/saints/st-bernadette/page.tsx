import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Bernadette - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Bernadette, visionary of Lourdes.',
  keywords: [
    'st bernadette',
    'saint bernadette',
    'lourdes apparitions',
    'april 16 feast day',
    'catholic saints',
    'modern saints',
    'patron of illness'
  ],
  openGraph: {
    title: 'St. Bernadette - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Bernadette, visionary of Lourdes.',
    url: 'https://catholicbibleonline.com/saints/st-bernadette',
  },
  twitter: {
    title: 'St. Bernadette - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Bernadette, visionary of Lourdes.',
  }
}

export default function StBernadettePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌹</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Bernadette
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Visionary of Lourdes and Patron of Illness
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Bernadette</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">April 16</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌹</div>
              <div className="text-sm text-gray-600">Modern Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Bernadette</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Bernadette was born in Lourdes, France on January 7, 1844. Her parents 
                were very poor and she was the first of nine children. She was baptized 
                at St. Pierre's, the local parish church, on January 9. As a toddler, 
                Bernadette contracted cholera and suffered extreme asthma. Unfortunately, 
                she lived the rest of her life in poor health, which would become a defining 
                characteristic of her life and her spiritual journey. Despite her physical 
                suffering, Bernadette maintained a deep faith and a simple, humble disposition 
                that would later endear her to millions of people around the world.
              </p>
              
              <p className="mb-6">
                On Thursday, February 11, 1858, fourteen-year-old Bernadette was sent with 
                her younger sister and a friend to gather firewood, when a very beautiful 
                lady appeared to her above a rose bush in a grotto called Massabielle (Tuta 
                de Massavielha). The woman wore blue and white and smiled at Bernadette 
                before making the sign of the cross with a rosary of ivory and gold. Bernadette 
                fell to her knees, took out her own rosary and began to pray. Bernadette 
                later described the woman as "uo petito damizelo," meaning "a small young 
                lady." Though her sister and friend claimed they were unable to see her, 
                Bernadette knew what she saw was real. This was the beginning of a series 
                of extraordinary events that would transform not only Bernadette's life 
                but also the small town of Lourdes and the entire Catholic world.
              </p>
              
              <p className="mb-6">
                Three days later, Bernadette, her sister Marie, and other girls returned 
                to the grotto, where Bernadette immediately knelt, saying she could see 
                "aquero" again. She fell into a trance and one girl threw holy water at 
                the niche and another threw a rock that shattered on the ground. It was 
                then that the apparition disappeared. On February 18, Bernadette said "the 
                vision" asked her to return to the grotto each day for a fortnight. With 
                each visit, Bernadette saw the Virgin Mary and the period of daily visions 
                became known as "la Quinzaine sacrée," meaning "holy fortnight." When Bernadette 
                began to visit the grotto, her parents were embarrassed and attempted to 
                stop her, but were unable to do so. The apparitions had such a profound 
                effect on Bernadette that she could not be dissuaded from returning to 
                the grotto, despite the opposition and skepticism she faced from her family 
                and the community.
              </p>
              
              <p className="mb-6">
                On February 25, Bernadette claimed to have had a life-changing vision. 
                The vision had told her "to drink of the water of the spring, to wash 
                in it and to eat the herb that grew there" as an act of penance. The 
                next day, the grotto's muddy waters had been cleared and fresh clear 
                water flowed. This miraculous spring would become the source of countless 
                healings and miracles in the years to come. On March 2, at the thirteenth 
                of the apparitions, Bernadette told her family the lady said "a chapel 
                should be built and a procession formed." During her sixteenth vision, 
                which Bernadette claims to have experienced for over an hour, was on March 
                25. Bernadette claimed she had asked the woman her name, but her question 
                was only met with a smile. Bernadette asked again, three more times, and 
                finally the woman said, "I am the Immaculate Conception." This revelation 
                was particularly significant because it confirmed the dogma of the Immaculate 
                Conception, which had been proclaimed by Pope Pius IX just four years earlier.
              </p>
              
              <p className="mb-6">
                Though many townspeople believed she had indeed been seeing the Holy Virgin, 
                Bernadette's story created a division in her town. Many believed she was 
                telling the truth, while others believed she had a mental illness and 
                demanded she be put in a mental asylum. Some believed Bernadette's visions 
                meant she needed to pray for penance. Church authorities and the French 
                government rigorously interviewed the girl, and by 1862 they confirmed 
                she spoke truth. Since Bernadette first caused the spring to produce clean 
                water, 69 cures have been verified by the Lourdes Medical Bureau, and 
                after what the Church claimed were "extremely rigorous scientific and 
                medical examinations," no one was able to explain what caused the cures. 
                The Lourdes Commission that initially examined Bernadette, ran an analysis 
                on the water but were only able to determine it contained a high mineral 
                content. Bernadette believed it was faith and prayer that was responsible 
                for curing the sick.
              </p>
              
              <p className="mb-6">
                Bernadette asked the local priest to build a chapel at the site of her 
                visions and the Sanctuary of Our Lady of Lourdes is now one of the major 
                Catholic pilgrimage sites in the world. Many other chapels and churches 
                has been built around it, including the Basilica of St. Pius X, which 
                can accommodate 25,000 people and was dedicated by the future Pope John 
                XXIII when he was the Papal Nuncio to France. Following the miracles 
                and constructions, Bernadette decided she did not like the attention 
                she was getting and went to the hospice school run by the Sisters of 
                Charity of Nevers, where she was taught to read and write. Though she 
                considered joining the Carmelites, her health was too fragile.
              </p>
              
              <p className="mb-6">
                On July 29, 1866, Bernadette took the religious habit of a postulant 
                and joined the Sisters of Charity at their motherhouse at Nevers. Her 
                Mistress of Novices was Sister Marie Therese Vauzou and the Mother Superior 
                at the time named her Marie-Bernarde, in honor of her grandmother. Bernadette 
                spent the rest of her life there working as an infirmary assistant, and 
                later a sacristan. People admired her humility and spirit of sacrifice. 
                Once a nun asked her if she had temptations of pride because she was 
                favored by the Blessed Mother. "How can I?" she answered quickly. "The 
                Blessed Virgin chose me only because I was the most ignorant." This response 
                perfectly captures Bernadette's humility and her understanding that her 
                role in the apparitions was not due to any merit of her own, but rather 
                to God's mysterious ways.
              </p>
              
              <p>
                Unfortunately, she was diagnosed with tuberculosis of the bone in her 
                right knee and was unable to take part in convent life. She died in the 
                Sainte Croix (Holy Cross) Infirmary of the Convent of Saint-Gildard at 
                the age of 35 on April 16, 1879, while praying the holy rosary. Even 
                on her deathbed Bernadette suffered severe pain and, keeping with the 
                Virgin Mary's admonition of "Penance, Penance, Penance," she proclaimed 
                "all this is good for Heaven!" Bernadette's last words were, "Blessed 
                Mary, Mother of God, pray for me. A poor sinner, a poor sinner." These 
                final words reflect her lifelong humility and her complete trust in God's 
                mercy. Thirty years later, on September 22, two doctors and a sister 
                of the community exhumed her body. They claimed the crucifix and rosary 
                she carried had been oxidized but her body remained incorrupt. The incorruption 
                was cited as one of the miracles supporting her canonization. Saint Bernadette 
                is often depicted in prayer with a rosary or appealing to the Holy Virgin. 
                She was beatified in 1925 and canonized by Pope Pius XI in December 1933.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Bernadette: Visionary of Lourdes</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Visionary of Lourdes</h3>
              <p className="mb-6">
                St. Bernadette's most enduring legacy is her role as the visionary of 
                Lourdes, one of the most important Marian apparition sites in the Catholic 
                world. The apparitions she experienced in 1858 have transformed the small 
                French town into a major pilgrimage destination that attracts millions 
                of visitors each year. The Sanctuary of Our Lady of Lourdes, built at 
                the site of her visions, has become a place of healing, prayer, and spiritual 
                renewal for people from all over the world. The miraculous spring that 
                Bernadette discovered has been the source of countless healings and miracles, 
                with 69 cures officially recognized by the Lourdes Medical Bureau. Bernadette's 
                visions confirmed the dogma of the Immaculate Conception, which had been 
                proclaimed by Pope Pius IX just four years earlier, providing divine 
                confirmation of this important Catholic teaching. Her legacy continues 
                to inspire millions of people to deepen their faith and to seek healing 
                and spiritual renewal through prayer and devotion to the Blessed Virgin Mary.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Humility and Suffering</h3>
              <p className="mb-6">
                St. Bernadette's life serves as a powerful example of humility and the 
                redemptive value of suffering. Despite being chosen by the Blessed Virgin 
                Mary for such extraordinary experiences, Bernadette remained remarkably 
                humble throughout her life. Her famous response when asked about pride 
                - "The Blessed Virgin chose me only because I was the most ignorant" 
                - perfectly captures her understanding that her role in the apparitions 
                was not due to any merit of her own, but rather to God's mysterious ways. 
                Bernadette's life was marked by physical suffering from childhood, including 
                cholera, asthma, and eventually tuberculosis, yet she embraced her suffering 
                as a means of penance and spiritual growth. Her final words, "all this 
                is good for Heaven!" and her repeated acknowledgment of being "a poor 
                sinner" demonstrate her deep understanding of the redemptive value of 
                suffering and her complete trust in God's mercy. Bernadette's example 
                encourages us to accept our own sufferings with patience and to see them 
                as opportunities for spiritual growth and purification.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of the Sick and Marginalized</h3>
              <p>
                St. Bernadette's designation as the patroness of illness, people ridiculed 
                for their piety, poverty, shepherds, shepherdesses, and Lourdes, France, 
                reflects her deep connection to the suffering and marginalized. Her own 
                experience of poverty, illness, and being misunderstood and ridiculed 
                for her visions makes her a powerful advocate for those who are suffering 
                or marginalized in society. Bernadette's life shows that God often chooses 
                the most unlikely people - the poor, the sick, the uneducated - to carry 
                out His most important work. Her example encourages us to see the dignity 
                and value in every person, regardless of their social status, health, 
                or education. Bernadette's patronage of illness is particularly significant 
                given her own lifelong health struggles and the miraculous healings associated 
                with the spring she discovered. Her legacy reminds us that suffering 
                can be a path to holiness and that God's grace is available to all, especially 
                those who are most in need of His mercy and love.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">April 16</div>
              <p className="text-gray-600">Feast of St. Bernadette</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Bernadette is celebrated on April 16th, during the 
                spring season when the Church reflects on the themes of renewal and resurrection. 
                This feast is celebrated as a memorial in the Roman Catholic Church, 
                recognizing Bernadette's importance as the visionary of Lourdes and her 
                powerful example of humility and faith. The feast falls during the Easter 
                season, making it an ideal time to remember Bernadette's message of hope 
                and healing, which is so closely associated with the resurrection of 
                Christ. The feast provides an opportunity to honor Bernadette's memory 
                and to reflect on the importance of humility, trust in God, and the redemptive 
                value of suffering in our own lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Bernadette, many people participate in special 
                prayers and devotions to honor her memory and seek her intercession. 
                Churches, particularly those with connections to Lourdes or Marian devotion, 
                hold special Masses and services. Many people gather to pray for the 
                sick and for those who are suffering, asking for St. Bernadette's intercession 
                in helping them to find healing and comfort. The day is also marked by 
                prayers for those who are marginalized or ridiculed for their faith, 
                asking for St. Bernadette's help in giving them strength and courage. 
                Many people also take time to reflect on their own humility and to pray 
                for the grace to accept suffering with patience and trust in God's plan. 
                The feast is also a time to reflect on how we can incorporate Bernadette's 
                virtues of humility, trust, and acceptance of suffering into our daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of humility 
                and the ability to accept suffering with patience and trust. Many people 
                make special petitions for the sick and for those who are suffering, 
                asking for St. Bernadette's intercession in helping them to find healing 
                and comfort. The day is also a time to reflect on the importance of 
                trusting in God's plan and to pray for the grace to accept whatever 
                challenges come our way with faith and hope. St. Bernadette's feast 
                day encourages us to remember that God often chooses the most unlikely 
                people to carry out His work and that true greatness lies in humility 
                and trust in God. It is also a time to pray for the grace to be more 
                compassionate toward those who are suffering or marginalized, following 
                Bernadette's example of love and care for others. The feast reminds us 
                that we are all called to be saints and that holiness is achieved through 
                humility, trust, and complete surrender to God's will.
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
                  <li>• <strong>Illness:</strong> Patroness of illness</li>
                  <li>• <strong>Lourdes:</strong> Patron of Lourdes, France</li>
                  <li>• <strong>Poverty:</strong> Patron of poverty</li>
                  <li>• <strong>Shepherds:</strong> Patron of shepherds</li>
                  <li>• <strong>Shepherdesses:</strong> Patron of shepherdesses</li>
                  <li>• <strong>Marian Apparitions:</strong> Patron of Marian apparitions</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Prayer:</strong> Helper in prayer life</li>
                  <li>• <strong>Humility:</strong> Patron of humility</li>
                  <li>• <strong>Healing:</strong> Helper in healing</li>
                  <li>• <strong>Trust:</strong> Patron of trust in God</li>
                  <li>• <strong>Suffering:</strong> Helper in accepting suffering</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Bernadette</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Bernadette, visionary of Lourdes, help me to have humility 
                    and trust in God's plan for my life.
                  </p>
                  <p className="mb-4">
                    Teach me to accept suffering with patience and to see it as a means 
                    of spiritual growth. Help me to be humble like you and to recognize 
                    that all good things come from God's grace, not from my own merit.
                  </p>
                  <p>
                    St. Bernadette, pray for me that I may have the humility to accept 
                    God's will, the trust to believe in His plan, and the courage to 
                    follow Him even when it is difficult. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for the Sick</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Bernadette, patroness of illness, intercede for all those who 
                    are suffering from sickness or pain.
                  </p>
                  <p>
                    Help them to find healing and comfort, and to accept their suffering 
                    with patience and trust in God. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Bernadette, pray for us!"
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
            <Link href="/saints/st-mary-virgin" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Marian Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Mary the Virgin
                </h3>
                <p className="text-gray-700 text-sm">
                  Blessed Virgin Mary who appeared to St. Bernadette.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-assisi" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Saint of poverty and founder of the Franciscans.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-therese-lisieux" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thérèse of Lisieux
                </h3>
                <p className="text-gray-700 text-sm">
                  Little Flower and Doctor of the Church.
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