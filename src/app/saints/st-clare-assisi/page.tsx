import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Clare of Assisi - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Clare of Assisi, founder of the Poor Clares.',
  keywords: [
    'st clare of assisi',
    'saint clare',
    'poor clares',
    'august 11 feast day',
    'catholic saints',
    'modern saints',
    'patron of television'
  ],
  openGraph: {
    title: 'St. Clare of Assisi - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Clare of Assisi, founder of the Poor Clares.',
    url: 'https://catholicbibleonline.com/saints/st-clare-assisi',
  },
  twitter: {
    title: 'St. Clare of Assisi - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Clare of Assisi, founder of the Poor Clares.',
  }
}

export default function StClareAssisiPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🕊️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Clare of Assisi
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Founder of the Poor Clares and Patron of Television
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Clare of Assisi</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 11</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🕊️</div>
              <div className="text-sm text-gray-600">Modern Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Clare of Assisi</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Clare of Assisi was born in Assisi on July 16, 1194, as Chiara Offreduccio, 
                the beautiful eldest daughter of Favorino Sciffi, Count of Sasso-Rosso and his 
                wife Ortolana. Tradition says her father was a wealthy representative of an 
                ancient Roman family and her mother was a very devout woman belonging to the 
                noble family of Fiumi. Clare grew up in a privileged environment, surrounded 
                by wealth and nobility, but from an early age, she showed a deep spiritual 
                sensitivity and a desire for a life of prayer and devotion. As a young girl, 
                Clare dedicated herself to prayer, spending long hours in contemplation and 
                seeking to understand the deeper meaning of life beyond the material comforts 
                that surrounded her.
              </p>
              
              <p className="mb-6">
                At the age of eighteen, Clare heard St. Francis of Assisi preach during a 
                Lenten service in the church of San Giorgio and was deeply moved by his 
                message of poverty, simplicity, and complete trust in God. Francis's radical 
                approach to living the Gospel resonated with Clare's own spiritual longings, 
                and she asked him to help her live according to the Gospel. On Palm Sunday 
                in 1212, Clare made the courageous decision to leave her father's home and 
                went to the chapel of the Porziuncula to meet with Francis. This was a dramatic 
                moment in her life, as she was leaving behind everything she had known - her 
                family, her wealth, and her social position - to follow a completely different 
                path. While there, Clare's hair was cut off and she was given a plain robe 
                and veil in exchange for her rich gown, symbolizing her complete renunciation 
                of worldly wealth and her commitment to a life of poverty and simplicity.
              </p>
              
              <p className="mb-6">
                Clare joined the convent of the Benedictine nuns of San Paulo, near Bastia, 
                under Francis's orders. When her father found her and attempted to force her 
                back into his home, she refused and professed that she would have no other 
                husband than Jesus Christ. This was a powerful declaration of her commitment 
                to Christ and her rejection of the traditional path of marriage and family 
                that was expected of a noblewoman of her time. In order to give her the 
                greater solitude she desired, Francis sent Clare to Sant' Angelo in Panzo, 
                another Benedictine nuns monastery. Clare's sister Catarina, who took the 
                name Agnes, joined her at this monastery, showing that Clare's example had 
                inspired others in her family to follow the same path. The two remained there 
                until a separate dwelling was built for them next to the church of San Damiano.
              </p>
              
              <p className="mb-6">
                Over time, other women joined them, wanting to also be brides of Jesus and 
                live with no money. They became known as the "Poor Ladies of San Damiano." 
                They all lived a simple life of austerity, seclusion from the world, and 
                poverty, according to a Rule which Francis gave them as a Second Order. St. 
                Clare and her sisters wore no shoes, ate no meat, lived in a poor house, 
                and kept silent most of the time. Their lives consisted of manual labor and 
                prayer. Yet, they were very happy, because Our Lord was close to them all 
                the time. This radical way of life was a direct challenge to the materialism 
                and wealth of the society around them, and it attracted many women who were 
                seeking a deeper spiritual life.
              </p>
              
              <p className="mb-6">
                San Damiano became the center of Clare's new order, which was then known as 
                the "Order of Poor Ladies of San Damiano." For a brief period of time, the 
                order was directed by St. Francis himself and by 1216, Clare became the abbess 
                of San Damiano. Ten years after Clare's death, the order became known as the 
                Order of Saint Clare. While serving as the leader of her order, Clare defended 
                them from the attempts of prelates to impose a rule on them that more closely 
                followed the Rule of Saint Benedict than Francis. Clare was so devoted and 
                dedicated to Francis that she was often referred to as "alter Franciscus," 
                or another Francis. She encouraged and aided the man she saw as a spiritual 
                father figure, and took care of him as he grew old, showing her deep love 
                and respect for the one who had guided her to her vocation.
              </p>
              
              <p className="mb-6">
                Following Francis's death, Clare continued to promote her order, fighting 
                off every attempt from each pope trying to impose a rule on her order that 
                would water down their "radical commitment to corporate poverty." This was 
                a constant struggle throughout her life, as Church authorities often tried 
                to modify the strict poverty that Clare and her sisters had embraced. Clare 
                was determined to maintain the radical simplicity and poverty that Francis 
                had taught them, believing that this was essential to their spiritual life 
                and their witness to the world.
              </p>
              
              <p className="mb-6">
                In 1224, an army of rough soldiers from Frederick II came to attack Assisi. 
                Although very sick, Clare went out to meet them with the Blessed Sacrament 
                on her hands. She had the Blessed Sacrament placed at the wall where the 
                enemies could see it. Then on her knees, she begged God to save the Sisters. 
                "O Lord, protect these Sisters whom I cannot protect now," she prayed. A 
                voice seemed to answer: "I will keep them always in My care." In that moment, 
                a sudden fright struck the attackers and they fled as fast as they could 
                without harming anyone in Assisi. This miraculous event became one of the 
                most famous stories about St. Clare and demonstrated her deep faith and trust 
                in God's protection.
              </p>
              
              <p>
                St. Clare became sick and suffered great pains for many years, but she expressed 
                that no pain could trouble her. So great was her joy in serving the Lord that 
                she once exclaimed: "They say that we are too poor, but can a heart which 
                possesses the infinite God be truly called poor?" On August 9, 1253, Pope 
                Innocent IV declared Clare's rule would serve as the governing rule for Clare's 
                Order of Poor Ladies. Two days later, Clare died at 59-years-old. Her remains 
                were placed in the chapel of San Giorgio while the church dedicated to her 
                remains was being built. At Pope Innocent's request, the canonization process 
                for Clare began immediately, and two years later in 1255, Pope Alexander IV 
                canonized Clare as Saint Clare of Assisi. The construction of the Basilica 
                of Saint Clare was finished in 1260, and on October 3, 1260 Clare's remains 
                were transferred there and buried beneath the high altar. Nearly 600 years 
                later, her remains were transferred once again to a newly constructed shrine 
                in the crypt of the Basilica of Saint Clare. The Order of Poor Ladies was 
                officially changed to the Order of Saint Clare in 1263 by Pope Urban IV.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Clare of Assisi: Founder of the Poor Clares</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Founder of the Poor Clares</h3>
              <p className="mb-6">
                St. Clare's most enduring legacy is the foundation of the Order of Poor 
                Clares, which continues to thrive today with thousands of sisters around 
                the world. The order represents a radical commitment to poverty, prayer, 
                and contemplation that has inspired countless women over the centuries. 
                Clare's vision of a life completely dedicated to God through poverty and 
                prayer was revolutionary in her time and continues to be a powerful witness 
                in our materialistic world. The Poor Clares live in strict enclosure, 
                dedicating their lives to prayer, manual labor, and contemplation, following 
                the same principles that Clare established. Their way of life serves as 
                a reminder that true wealth lies not in material possessions but in our 
                relationship with God. Clare's order has spread throughout the world, 
                with monasteries in nearly every country, continuing her mission of prayer 
                and penance for the Church and the world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Television</h3>
              <p className="mb-6">
                St. Clare was designated as the patron saint of television in 1958 by Pope 
                Pius XII, because when St. Clare was very ill, she could not attend mass 
                and was reportedly able to see and hear it on the wall in her room. This 
                miraculous event, where Clare was able to participate in the Mass from 
                her sickbed, has been interpreted as a precursor to modern television technology. 
                Clare's patronage of television reminds us that modern technology can be 
                used for spiritual purposes and that even in our digital age, we can find 
                ways to connect with our faith. Her example encourages us to use technology 
                responsibly and to ensure that it serves our spiritual growth rather than 
                becoming a distraction from what truly matters. Clare's patronage also 
                reminds us that prayer and spiritual connection can transcend physical 
                limitations and technological barriers.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Courage and Faith</h3>
              <p>
                St. Clare's life serves as a powerful example of courage and faith in the 
                face of opposition. Her decision to leave her wealthy family and embrace 
                a life of poverty was a radical act of faith that required tremendous courage. 
                Throughout her life, she faced opposition from her family, from Church authorities, 
                and from the society around her, but she remained steadfast in her commitment 
                to Christ and to the way of life she had chosen. Clare's courage in defending 
                her order's commitment to poverty, even against papal pressure, shows her 
                deep conviction and her willingness to stand up for what she believed was 
                right. Her example encourages us to have the courage to follow our own 
                calling, even when it means going against societal expectations or facing 
                opposition from those around us. Clare's life reminds us that true happiness 
                comes from living in accordance with God's will, regardless of the challenges 
                we may face.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">August 11</div>
              <p className="text-gray-600">Feast of St. Clare of Assisi</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Clare of Assisi is celebrated on August 11th, during 
                the summer season when the Church reflects on the themes of growth and 
                harvest. This feast is celebrated as a memorial in the Roman Catholic 
                Church, recognizing Clare's importance as the founder of the Poor Clares 
                and her powerful example of poverty and prayer. The feast falls during 
                a time when many people are enjoying the fruits of their labor, making 
                it an ideal time to remember Clare's message about the true nature of 
                wealth and the importance of spiritual riches over material possessions. 
                The feast provides an opportunity to honor Clare's memory and to reflect 
                on the importance of simplicity, prayer, and trust in God in our own lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Clare of Assisi, many people participate in special 
                prayers and devotions to honor her memory and seek her intercession. Churches, 
                particularly those with Poor Clare communities, hold special Masses and 
                services. Many people gather to pray for the gift of simplicity and to 
                ask for Clare's help in living a more prayerful life. The day is also 
                marked by prayers for those who work in television and media, asking for 
                St. Clare's intercession in helping them to use their talents for good 
                and to promote positive values. Many people also take time to reflect 
                on their own relationship with material possessions and to pray for the 
                grace to live more simply and to focus on what truly matters in life. 
                The feast is also a time to reflect on how we can incorporate Clare's 
                virtues of poverty, prayer, and courage into our daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of simplicity 
                and the ability to focus on what truly matters in life. Many people make 
                special petitions for those who work in media and television, asking for 
                St. Clare's intercession in helping them to use their platforms for good 
                and to promote positive values. The day is also a time to reflect on the 
                importance of prayer in our lives and to pray for the grace to make prayer 
                a priority. St. Clare's feast day encourages us to remember that true 
                wealth comes from our relationship with God and that we are called to 
                live lives of simplicity and trust. It is also a time to pray for the 
                courage to follow our own calling, even when it means going against societal 
                expectations or facing opposition from others. The feast reminds us that 
                we are all called to be saints and that holiness is achieved through 
                prayer, sacrifice, and complete trust in God.
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
                  <li>• <strong>Television:</strong> Patron saint of television</li>
                  <li>• <strong>Eye Disease:</strong> Patron of eye disease</li>
                  <li>• <strong>Goldsmiths:</strong> Patron of goldsmiths</li>
                  <li>• <strong>Laundry:</strong> Patron of laundry</li>
                  <li>• <strong>Poor Clares:</strong> Patron of Poor Clares</li>
                  <li>• <strong>Media:</strong> Patron of media workers</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Prayer:</strong> Helper in prayer life</li>
                  <li>• <strong>Poverty:</strong> Patron of voluntary poverty</li>
                  <li>• <strong>Simplicity:</strong> Helper in living simply</li>
                  <li>• <strong>Courage:</strong> Patron of courage</li>
                  <li>• <strong>Contemplation:</strong> Helper in contemplation</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Clare of Assisi</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Clare of Assisi, founder of the Poor Clares, help me to live 
                    a life of simplicity and prayer.
                  </p>
                  <p className="mb-4">
                    Teach me to find true wealth in my relationship with God and to have 
                    the courage to follow my calling, even when it means going against 
                    societal expectations. Help me to use modern technology responsibly 
                    and to ensure that it serves my spiritual growth.
                  </p>
                  <p>
                    St. Clare, pray for me that I may have the courage to live simply, 
                    the wisdom to focus on what truly matters, and the grace to trust 
                    completely in God's providence. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Media Workers</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Clare, patron saint of television and media, intercede for all 
                    those who work in media and communications.
                  </p>
                  <p>
                    Help them to use their talents for good and to promote positive values 
                    in their work. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Clare of Assisi, pray for us!"
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
                  Spiritual father and founder of the Franciscans.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-agnes" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Agnes
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and patron of young girls.
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
                  Dominican saint and Doctor of the Church.
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