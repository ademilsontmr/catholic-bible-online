import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Casimir - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Casimir, Prince of Poland who chose God over royal luxury and became a model of purity and devotion.',
  keywords: [
    'st casimir',
    'saint casimir',
    'st casimir biography',
    'st casimir feast day',
    'st casimir patron saint',
    'catholic saints',
    'march 4 feast day',
    'medieval saints',
    'poland',
    'lithuania',
    'prince',
    'purity'
  ],
  openGraph: {
    title: 'St. Casimir - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Casimir, Prince of Poland who chose God over royal luxury.',
    url: 'https://catholicbibleonline.com/saints/st-casimir',
  },
  twitter: {
    title: 'St. Casimir - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Casimir, Prince of Poland who chose God over royal luxury.',
  }
}

export default function StCasimirPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔬</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Casimir
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Prince of Poland, Model of Purity, Defender of the Poor
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Casimir</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">March 4</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🔬</div>
              <div className="text-sm text-gray-600">Medieval</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Casimir</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Casimir was born in 1461 as the third of thirteen children to King Casimir IV 
                of Poland and Elizabeth of Austria. From the moment of his birth, he was destined 
                for a life of royal privilege and political responsibility. As a prince of Poland, 
                his life was scheduled to cement his father's authority and increase Poland's power 
                through strategic alliances and military campaigns.
              </p>
              
              <p className="mb-6">
                However, Casimir realized from an early age that his life belonged to someone else, 
                but to a much higher King than his father. Despite the pressure, humiliation, and 
                rejection that often came with his choices, he stood by that loyalty through his 
                whole life. His commitment to God was evident from childhood, and much of that 
                commitment was the result of his tutor, John Dlugosz, whose holiness encouraged 
                Casimir on his own spiritual journey.
              </p>
              
              <p className="mb-6">
                It may be hard for us to imagine royal luxury as a pressure, but for Casimir, the 
                riches around him were temptations to forget his true loyalties. He rebelled against 
                the rich, fashionable clothes he was expected to enjoy, choosing instead to wear the 
                plainest of clothes. This rejection of luxury was not just a personal preference but 
                a deliberate choice to identify with the poor and to avoid the spiritual dangers of 
                materialism.
              </p>
              
              <p className="mb-6">
                Casimir's asceticism extended beyond his clothing choices. He rejected even ordinary 
                comforts, sleeping little and spending his nights in prayer. When he did sleep, he 
                lay on the floor rather than on a royal bed. Even though he was a prince, many of 
                those around him must have laughed and joked at his choices. Yet, in the face of 
                any pressure or mockery, Casimir was always friendly and calm, demonstrating the 
                peace that comes from living in accordance with one's deepest convictions.
              </p>
              
              <p className="mb-6">
                Though his father must have wondered about him, he must have seen and admired 
                Casimir's strength. However, he showed that he misunderstood this strength when 
                he sent Casimir as head of an army to take over the throne of Hungary at the request 
                of some nobles there. Casimir felt the whole expedition was wrong but was convinced 
                to go out of obedience to his father. He could not help but feel at every step that 
                it was disobedient to his other Father in heaven.
              </p>
              
              <p className="mb-6">
                When soldiers started deserting, Casimir was only too glad to listen to the advice 
                of his officers and turn back home. His feelings were confirmed when he discovered 
                that Pope Sixtus IV had opposed the move. This incident demonstrated Casimir's 
                ability to discern God's will and his courage to act accordingly, even when it 
                meant going against his father's plans.
              </p>
              
              <p className="mb-6">
                His father, however, was furious at being deterred from his plans and banished 
                Casimir to a castle in Dobzki, hoping that imprisonment would change Casimir's mind. 
                Instead, Casimir's commitment to what he believed was right only grew stronger in 
                his exile, and he refused to cooperate with his father's plans any more despite 
                the pressure to give in. He even rejected a marriage alliance his father tried to 
                form, choosing instead to remain celibate and dedicated to God.
              </p>
              
              <p>
                During his exile, Casimir participated in his true King's plans wholeheartedly by 
                praying, studying, and helping the poor. He died at the age of 23 in 1484 from 
                lung disease, having lived a life of extraordinary holiness despite his youth. 
                He was buried with his favorite song, a Latin hymn to Mary called "Omni die dic 
                Mariae" which we know as "Daily, Daily Sing to Mary." Because of his love for 
                the song, it is known as the Hymn of St. Casimir, though he didn't write it.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Casimir: Prince of Purity</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Loyalty to God</h3>
              <p className="mb-6">
                St. Casimir's greatest legacy is his unwavering loyalty to God in the face of 
                tremendous pressure to conform to worldly expectations. As a prince, he had every 
                opportunity to enjoy the luxuries and privileges of his position, but he chose 
                instead to live a life of simplicity and devotion to God. His example shows that 
                true nobility comes not from birth or wealth, but from the quality of one's 
                character and commitment to God's will.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Example of Purity and Chastity</h3>
              <p className="mb-6">
                Casimir's rejection of the marriage alliance his father tried to arrange for him 
                demonstrates his commitment to chastity and his desire to remain dedicated to God. 
                In a world where political marriages were the norm for royalty, his choice to 
                remain celibate was both radical and inspiring. His example continues to encourage 
                young people to value purity and to make choices that honor God rather than 
                conforming to societal expectations.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Defender of the Poor</h3>
              <p className="mb-6">
                Despite his royal status, Casimir identified with the poor and used his resources 
                to help them. His choice to wear plain clothes and sleep on the floor was not 
                just an act of personal penance, but a way of showing solidarity with those who 
                had no choice but to live in poverty. His example teaches us that true Christian 
                charity involves not just giving to the poor, but identifying with them and 
                sharing in their struggles.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Poland and Lithuania</h3>
              <p>
                St. Casimir is the patron saint of Poland and Lithuania, two nations that have 
                faced many challenges throughout their history. His example of faithfulness to 
                God in the face of political pressure and his commitment to peace rather than 
                military conquest make him an appropriate patron for these nations. His legacy 
                continues to inspire the people of Poland and Lithuania to remain faithful to 
                their Christian heritage and to work for peace and justice in their region.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">March 4</div>
              <p className="text-gray-600">Feast of St. Casimir, Prince of Poland</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Casimir is celebrated on March 4th, commemorating his life as 
                a prince who chose God over royal luxury and became a model of purity and devotion. 
                This feast honors his extraordinary commitment to God at such a young age and his 
                willingness to stand against pressure and temptation. It is a day to remember that 
                holiness is possible at any age and in any station of life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. Casimir lived during the late medieval period, a time when the Church was 
                deeply involved in the political and social life of Europe. His life demonstrates 
                how the Gospel can transform even the most privileged members of society and how 
                Christian values can influence political decisions. His example of choosing peace 
                over war and God over political ambition was particularly relevant in a time when 
                many rulers were focused on expanding their territories through military conquest.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On his feast day, Catholics pray for his intercession, especially for young people, 
                for those facing pressure to conform to worldly values, for those called to a life 
                of chastity, for the poor and marginalized, and for the nations of Poland and 
                Lithuania. His example inspires us to examine our own loyalties and to choose 
                what serves Christ the King rather than worldly commitments.
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
                  <li>• <strong>Poland:</strong> Patron saint of Poland</li>
                  <li>• <strong>Lithuania:</strong> Patron saint of Lithuania</li>
                  <li>• <strong>Youth:</strong> Patron of young people</li>
                  <li>• <strong>Princes:</strong> Patron of princes and royalty</li>
                  <li>• <strong>Purity:</strong> Patron of purity and chastity</li>
                  <li>• <strong>Peace:</strong> Patron of peace and non-violence</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Loyalty to God:</strong> Helper for those choosing God over worldly values</li>
                  <li>• <strong>Resistance to Pressure:</strong> Patron of those facing peer pressure</li>
                  <li>• <strong>Celibacy:</strong> Helper for those called to chastity</li>
                  <li>• <strong>Simplicity:</strong> Patron of those choosing simple living</li>
                  <li>• <strong>Political Integrity:</strong> Helper for those in positions of power</li>
                  <li>• <strong>Prayer Life:</strong> Patron of those seeking deeper prayer</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Casimir</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Saint Casimir, help us to remember that our true King is Jesus Christ and 
                    always serve him with joy and love. Help us to turn to our true Father for 
                    guidance and protection.
                  </p>
                  <p className="mb-4">
                    You who chose God over royal luxury and stood firm in your faith despite 
                    pressure and mockery, intercede for us that we may have the same courage 
                    to remain loyal to God in all circumstances.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace to 
                    choose what serves Christ the King rather than worldly commitments. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Youth</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Casimir, who achieved great holiness at such a young age, intercede 
                    for all young people who are facing pressure to conform to worldly values.
                  </p>
                  <p>
                    Help them to remain pure and faithful to God, to resist peer pressure, and 
                    to choose what is right even when it is difficult. Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Poland and Lithuania</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Casimir, patron of Poland and Lithuania, intercede for these nations 
                    and their people.
                  </p>
                  <p>
                    Help them to remain faithful to their Christian heritage, to work for peace 
                    and justice, and to be examples of faith and virtue in the world. Through 
                    Christ our Lord. Amen."
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
                         <Link href="/saints/st-pope-john-paul-ii" className="group block">
               <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                 <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                   Modern Saints
                 </div>
                 <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                   St. John Paul II
                 </h3>
                 <p className="text-gray-700 text-sm">
                   Beloved Polish pope and saint of the modern era.
                 </p>
               </div>
             </Link>

            <Link href="/saints/st-francis" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Lover of poverty and simplicity, patron of ecology.
                </p>
              </div>
            </Link>

                         <Link href="/saints/st-king-louis-ix" className="group block">
               <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                 <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                   Medieval Saints
                 </div>
                 <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                   St. Louis IX
                 </h3>
                 <p className="text-gray-700 text-sm">
                   King of France who ruled with justice and piety.
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