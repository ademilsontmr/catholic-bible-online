import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Rose of Lima - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Rose of Lima, patroness of the Americas.',
  keywords: [
    'st rose of lima',
    'saint rose of lima',
    'patroness of americas',
    'august 23 feast day',
    'catholic saints',
    'modern saints',
    'patron of gardeners'
  ],
  openGraph: {
    title: 'St. Rose of Lima - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Rose of Lima, patroness of the Americas.',
    url: 'https://catholicbibleonline.com/saints/st-rose-lima',
  },
  twitter: {
    title: 'St. Rose of Lima - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Rose of Lima, patroness of the Americas.',
  }
}

export default function StRoseLimaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌺</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Rose of Lima
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patroness of the Americas and Patron of Gardeners
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Rose of Lima</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 23</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌺</div>
              <div className="text-sm text-gray-600">Modern Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Rose of Lima</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Historians remember St. Rose of Lima for her piety and chastity. Born 
                in 1586 in Lima, Peru to Spanish colonists, and named Isabel Flores de 
                Olivia, she was exceptionally beautiful. Her beauty was so great that 
                she was nicknamed "Rose," a name that remains with her to this day. 
                According to legend, a servant had a vision where her face turned into 
                a rose. At her confirmation in 1597, she officially took the name of 
                Rose. From an early age, Rose wanted to become a nun. She often prayed 
                and fasted in secret. She performed secret penances, some of which were 
                painful and severe. She performed daily adoration of the Blessed Sacrament 
                and took daily communion. Rose's deep spiritual life began at a very 
                young age, and she showed an extraordinary commitment to prayer and 
                penance that would characterize her entire life.
              </p>
              
              <p className="mb-6">
                As a young woman, her beauty began to attract suitors. To deter these 
                men, St. Rose marred her face, rubbing it with pepper to make it blister. 
                She cropped her hair short. Her parents opposed her plan to take a vow 
                of chastity. This resulted in a clash of wills, because her parents 
                wanted her to marry. Her father eventually relented and gave her a room 
                to herself. St. Rose kept herself cloistered in her room, spending long 
                periods in prayer. It was said she slept only two hours per night so 
                as to have more time for prayer. She quit eating meat altogether, an 
                extreme dietary restriction for that time. Rose's determination to live 
                a life of prayer and penance was so strong that she was willing to make 
                extreme sacrifices, including damaging her own beauty, to avoid the 
                distractions of worldly life and to focus entirely on her relationship 
                with God.
              </p>
              
              <p className="mb-6">
                When she turned 20, she was permitted to join the Third Order of St. 
                Dominic. She continued a life of extreme prayer, fasting and penance. 
                On one occasion she burned her hands as a self-imposed act of penance. 
                She was known to wear a heavy silver crown, with spikes that could pierce 
                her flesh. The spikes reminded her of the Crown of Thorns. At one point, 
                one of the spikes become so lodged in her skull that the crown was removed 
                with great difficulty. These extreme acts of penance were not motivated 
                by self-hatred, but rather by her deep love for Christ and her desire 
                to share in His sufferings. Rose saw her penances as a way to unite 
                herself more closely with Christ and to offer her sufferings for the 
                salvation of souls. Her life of extreme austerity was a powerful witness 
                to the value of spiritual things over material comforts.
              </p>
              
              <p className="mb-6">
                St. Rose died on August 25, 1617, at the age of 31. According to legend, 
                she accurately predicted the date of her death. Her funeral was a major 
                event attended by all the city's authorities. Pope Clement IX beatified 
                her in 1667 and Pope Clement X recognized her as a saint, canonizing 
                her in 1671. Her feast day is August 23 around the world, although some 
                countries, like Peru, celebrate her on August 30. St. Rose is the patroness 
                of embroiderers, gardeners, florists, those who suffer ridicule for 
                their piety, and people who suffer family problems. Her canonization 
                was particularly significant because she was the first person born in 
                the Americas to be canonized, making her the patroness of the Americas 
                and a powerful symbol of the universality of the Catholic Church.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Rose of Lima: Patroness of the Americas</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Patroness of the Americas</h3>
              <p className="mb-6">
                St. Rose of Lima's most significant legacy is her role as the patroness 
                of the Americas, being the first person born in the New World to be 
                canonized. This designation recognizes her importance as a symbol of 
                the universality of the Catholic Church and the fact that holiness 
                can flourish in any culture or region. Rose's canonization was a powerful 
                statement that the Catholic faith had taken root in the Americas and 
                that the people of the New World were capable of producing saints. Her 
                example has inspired countless people throughout the Americas to pursue 
                holiness and to see their own cultural heritage as compatible with the 
                Catholic faith. Rose's legacy continues to remind us that the Church 
                is truly universal and that God calls people from every nation and culture 
                to holiness. Her life shows that the Gospel can be lived authentically 
                in any cultural context and that the call to sanctity is universal.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Prayer and Penance</h3>
              <p className="mb-6">
                St. Rose's life serves as a powerful example of the importance of prayer 
                and penance in the spiritual life. Her extreme dedication to prayer, 
                including sleeping only two hours per night to have more time for prayer, 
                shows her deep understanding of the centrality of prayer in the Christian 
                life. Rose's various acts of penance, including wearing a spiked crown 
                and burning her hands, demonstrate her desire to share in Christ's sufferings 
                and to offer her own sufferings for the salvation of souls. While her 
                particular penances may seem extreme to modern sensibilities, they reflect 
                her deep love for Christ and her understanding that following Him requires 
                sacrifice and self-denial. Rose's example encourages us to make prayer 
                a priority in our lives and to be willing to make sacrifices for our 
                faith. Her legacy reminds us that true spiritual growth requires discipline 
                and that we are called to offer our sufferings in union with Christ's 
                passion for the good of others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Various Professions</h3>
              <p>
                St. Rose's designation as the patroness of embroiderers, gardeners, 
                florists, those who suffer ridicule for their piety, and people who 
                suffer family problems reflects the various aspects of her life and 
                the challenges she faced. Her patronage of embroiderers and gardeners 
                recognizes her connection to beauty and creation, while her patronage 
                of those who suffer ridicule for their piety reflects her own experience 
                of being misunderstood and opposed by her family for her religious 
                practices. Rose's patronage of people who suffer family problems is 
                particularly relevant, as she experienced significant conflict with 
                her parents over her desire to live a religious life. Her example shows 
                that it is possible to remain faithful to God's call even when it means 
                going against family expectations or facing opposition from loved ones. 
                Rose's legacy encourages us to be faithful to our vocation, whatever 
                it may be, and to trust in God's guidance even when it means facing 
                misunderstanding or opposition from others.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">August 23</div>
              <p className="text-gray-600">Feast of St. Rose of Lima</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Rose of Lima is celebrated on August 23rd, during 
                the summer season when the Church reflects on the themes of growth and 
                harvest. This feast is celebrated as a memorial in the Roman Catholic 
                Church, recognizing Rose's importance as the patroness of the Americas 
                and her powerful example of prayer and penance. The feast falls during 
                a time when many people are enjoying the beauty of nature, making it 
                an ideal time to remember Rose's connection to beauty and creation 
                and her role as patroness of gardeners and florists. The feast provides 
                an opportunity to honor Rose's memory and to reflect on the importance 
                of prayer, penance, and faithfulness to God's call in our own lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Rose of Lima, many people participate in special 
                prayers and devotions to honor her memory and seek her intercession. 
                Churches, particularly those in the Americas, hold special Masses and 
                services. Many people gather to pray for the Americas and for the Church 
                throughout the New World. The day is also marked by prayers for those 
                who work with flowers and gardens, asking for St. Rose's intercession 
                in helping them to see the beauty of God's creation in their work. Many 
                people also take time to reflect on the importance of prayer in their 
                lives and to pray for the grace to be more faithful to their vocation, 
                whatever it may be. The feast is also a time to reflect on how we can 
                incorporate Rose's virtues of prayer, penance, and faithfulness into 
                our daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of prayer and 
                the ability to make time for God in our busy lives. Many people make 
                special petitions for the Americas and for the Church throughout the 
                New World, asking for St. Rose's intercession in helping the Church 
                to flourish in these regions. The day is also a time to reflect on the 
                importance of being faithful to our vocation and to pray for the grace 
                to follow God's call, even when it means facing opposition or misunderstanding. 
                St. Rose's feast day encourages us to remember that we are all called 
                to be saints and that holiness is achieved through prayer, penance, 
                and complete trust in God. It is also a time to pray for the grace to 
                be more prayerful and to make sacrifices for our faith, following Rose's 
                example of dedication to God.
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
                  <li>• <strong>Americas:</strong> Patroness of the Americas</li>
                  <li>• <strong>Gardeners:</strong> Patron of gardeners</li>
                  <li>• <strong>Florists:</strong> Patron of florists</li>
                  <li>• <strong>Embroiderers:</strong> Patron of embroiderers</li>
                  <li>• <strong>Peru:</strong> Patron of Peru</li>
                  <li>• <strong>Lima:</strong> Patron of Lima</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Prayer:</strong> Helper in prayer life</li>
                  <li>• <strong>Penance:</strong> Patron of penance</li>
                  <li>• <strong>Family Problems:</strong> Helper with family issues</li>
                  <li>• <strong>Ridicule:</strong> Patron of those ridiculed for piety</li>
                  <li>• <strong>Beauty:</strong> Helper in seeing God's beauty</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Rose of Lima</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Rose of Lima, patroness of the Americas, help me to have 
                    a deep love for prayer and penance.
                  </p>
                  <p className="mb-4">
                    Teach me to be faithful to God's call in my life and to be willing 
                    to make sacrifices for my faith. Help me to see the beauty of God's 
                    creation and to offer my sufferings in union with Christ.
                  </p>
                  <p>
                    St. Rose, pray for me that I may have the courage to follow God's 
                    will, the discipline to pray regularly, and the grace to offer my 
                    sufferings for the good of others. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for the Americas</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Rose of Lima, patroness of the Americas, intercede for all 
                    the people of the New World.
                  </p>
                  <p>
                    Help us to grow in faith and holiness, and to be faithful witnesses 
                    to Christ in our lands. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Rose of Lima, pray for us!"
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
            <Link href="/saints/st-dominic" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Dominic
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Dominican Order.
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