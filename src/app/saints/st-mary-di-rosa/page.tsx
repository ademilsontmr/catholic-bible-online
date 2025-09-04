import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Mary Di Rosa - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Mary Di Rosa, founder of the Handmaids of Charity who served the sick and wounded with courage and faith.',
  keywords: [
    'st mary di rosa',
    'saint mary di rosa',
    'paula di rosa',
    'st mary di rosa biography',
    'st mary di rosa feast day',
    'st mary di rosa patron saint',
    'catholic saints',
    'december 15 feast day',
    'modern saints',
    'handmaids of charity',
    'hospital ministry',
    'war nursing'
  ],
  openGraph: {
    title: 'St. Mary Di Rosa - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Mary Di Rosa, founder of the Handmaids of Charity.',
    url: 'https://catholicbibleonline.com/saints/st-mary-di-rosa',
  },
  twitter: {
    title: 'St. Mary Di Rosa - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Mary Di Rosa, founder of the Handmaids of Charity.',
  }
}

export default function StMaryDiRosaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💙</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Mary Di Rosa
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Foundress of the Handmaids of Charity, Servant of the Sick, Woman of Courage
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Mary Di Rosa</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">December 15</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💙</div>
              <div className="text-sm text-gray-600">Modern</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Mary Di Rosa</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The pounding on the barricaded door of the military hospital sent every heart 
                thudding in terror. In the middle of the war in Brescia (Italy) in 1848, the 
                wounded, sick, and those who cared for them knew what that pounding meant. 
                The shouts from beyond the door came from soldiers, not obeying any command 
                but their inner desire to destroy and plunder. Who could do anything to stop them? 
                The only people here were some Sisters, the Handmaids of Charity, who devoted 
                themselves to helping the sick.
              </p>
              
              <p className="mb-6">
                The doctors had not even wanted them there. The doctors wanted medical people 
                who were secular and military, not nuns. And in the face of this new danger 
                they were even more useless! Worse than useless -- because that Paula (as she 
                was known) di Rosa was actually moving to open the door! When the door swung 
                wide, the soldiers saw their way blocked with a great crucifix held by Paula 
                di Rosa and two candles held by two of the six sisters who stood by her. 
                Suddenly their frenzy to destroy disappeared, and full of shame before this 
                display of courage and faith, they slunk back into the shadows.
              </p>
              
              <p className="mb-6">
                Throughout her life, Paula di Rosa was never afraid to open the door on a new 
                opportunity to serve God, especially when she was unsure of what lay beyond. 
                People who didn't know her well must have thought she was too frail and delicate 
                for these ventures, but she came armed not only with her faith but boundless 
                energy, intelligence, and hunger to serve.
              </p>
              
              <p className="mb-6">
                Born in 1813, she had tackled enormous projects from the time she was seventeen, 
                arranging retreats and special missions for her parish and setting up a women's 
                guild. Because of all she accomplished, when she was only twenty-four she was 
                asked to be supervisor of a workhouse for poor girls. After two years, she became 
                concerned because there was no place for the girls to go at the end of the day. 
                Night held special dangers for these girls and Paula wanted to give them a safe 
                place to stay.
              </p>
              
              <p className="mb-6">
                The trustees refused to provide that place. For Paula the choice was easy -- 
                she once said that she could never go to bed with a clear conscience if she 
                had missed the chance to do some good. So she quit the workhouse to set up a 
                boardinghouse for poor girls while helping her brother with a school for the deaf.
              </p>
              
              <p className="mb-6">
                At 27 she stood before another door. She was appointed superior of the Handmaids 
                of Charity, a religious society whose purpose was to dedicate all their time 
                and attention to the suffering in hospitals. With her friends Gabriela Bornati 
                and Monsignor Pinzoni, she won the respect of those who thought of these 
                "handmaids" as intruders.
              </p>
              
              <p className="mb-6">
                Then in 1848, her whole life seemed to fall apart. First she lost Gabriela and 
                then Monsignor Pinzoni died, leaving her without the support and friendship she 
                had come to depend on. War started in Europe and her homeland was invaded. 
                Facing that kind of grief and turmoil, many others would have crawled into bed 
                and pulled the covers over their head. But Paula had always seen opportunity 
                in everything that came her way.
              </p>
              
              <p>
                War meant that many would be wounded and displaced by the war so she and her 
                sisters went to work at a military hospital and even went out to the battlefield 
                to give spiritual and physical comfort to the wounded and dying. She died in 1855, 
                going through the final door, unafraid and joyful to be joining her Lord forever.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Mary Di Rosa: Servant of the Sick</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Foundress of the Handmaids of Charity</h3>
              <p className="mb-6">
                St. Mary Di Rosa's greatest legacy is the founding of the Handmaids of Charity, 
                a religious society dedicated to serving the suffering in hospitals. This 
                congregation continues to serve the sick and dying around the world, carrying 
                forward her vision of compassionate care for those in need. The Handmaids of 
                Charity represent her commitment to dedicating all their time and attention 
                to the suffering, following her example of selfless service and love for the 
                most vulnerable members of society.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courage in the Face of Danger</h3>
              <p className="mb-6">
                Mary Di Rosa's most famous act of courage occurred during the war in Brescia 
                in 1848, when she faced down armed soldiers with nothing but a crucifix and 
                her faith. This dramatic moment demonstrates her unwavering trust in God and 
                her willingness to risk everything for the sake of those under her care. Her 
                courage in the face of danger serves as an inspiration to all who are called 
                to serve others in difficult or dangerous circumstances.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Pioneer in Hospital Ministry</h3>
              <p className="mb-6">
                At a time when religious sisters were not always welcome in hospitals, Mary 
                Di Rosa and her companions worked to gain acceptance and respect for their 
                ministry. They proved that religious women could provide not only spiritual 
                comfort but also competent medical care. Her work helped to establish the 
                important role that religious orders would play in healthcare throughout the 
                modern era.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Advocate for the Poor and Vulnerable</h3>
              <p className="mb-6">
                From her early work with poor girls to her later ministry with the sick and 
                wounded, Mary Di Rosa consistently showed concern for the most vulnerable 
                members of society. She refused to accept that anyone should be left without 
                care or protection, whether it was young girls in danger at night or wounded 
                soldiers on the battlefield. Her example challenges us to see the face of 
                Christ in every person in need.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Adaptability and Service</h3>
              <p>
                Throughout her life, Mary Di Rosa demonstrated an extraordinary ability to 
                adapt to changing circumstances and find new ways to serve God. Whether it 
                was setting up a boardinghouse for poor girls, founding a religious order, 
                or serving in wartime hospitals, she always found ways to turn challenges 
                into opportunities for service. Her life teaches us that God calls us to 
                serve in many different ways throughout our lives, and we must be ready to 
                respond to new opportunities as they arise.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">December 15</div>
              <p className="text-gray-600">Feast of St. Mary Di Rosa, Foundress of the Handmaids of Charity</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Mary Di Rosa is celebrated on December 15th, commemorating 
                her life as a foundress who dedicated herself to serving the sick and suffering. 
                This feast honors her courage in the face of danger, her compassion for the 
                vulnerable, and her unwavering faith in God's providence. It is a day to remember 
                that serving others, especially the sick and suffering, is one of the highest 
                forms of Christian witness.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. Mary Di Rosa lived during the 19th century, a time of great social change 
                and upheaval in Europe. The Industrial Revolution was transforming society, 
                wars were frequent, and the Church was adapting to new challenges. In this 
                context, Mary Di Rosa's work with the poor and sick was particularly important, 
                as it demonstrated the Church's commitment to serving the most vulnerable 
                members of society. Her ministry helped to establish the important role that 
                religious women would play in healthcare and social services.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On her feast day, Catholics pray for her intercession, especially for those 
                who work in healthcare and serve the sick, for those who are afraid to take 
                on new challenges or opportunities to serve, for the poor and vulnerable, 
                for those facing danger or persecution, for the Handmaids of Charity and 
                their ministry, and for the grace to see opportunities for service in every 
                situation. Her example inspires us to be courageous in serving others and 
                to trust in God's providence.
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
                  <li>• <strong>Nurses:</strong> Patron saint of nurses and healthcare workers</li>
                  <li>• <strong>Hospital Ministry:</strong> Patron of hospital ministry and chaplaincy</li>
                  <li>• <strong>Religious Sisters:</strong> Patron of religious sisters in healthcare</li>
                  <li>• <strong>Courage:</strong> Patron of those facing danger or persecution</li>
                  <li>• <strong>Poor Girls:</strong> Patron of poor and vulnerable young women</li>
                  <li>• <strong>War Victims:</strong> Patron of those wounded in war</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Healthcare Workers:</strong> Helper for those serving the sick</li>
                  <li>• <strong>New Opportunities:</strong> Patron of those facing new challenges</li>
                  <li>• <strong>Compassion:</strong> Helper for developing compassion for others</li>
                  <li>• <strong>Faith in Crisis:</strong> Patron of those facing difficult times</li>
                  <li>• <strong>Service to Others:</strong> Helper for those called to serve</li>
                  <li>• <strong>Protection:</strong> Patron of those in dangerous situations</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Mary Di Rosa</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Mary Di Rosa, foundress of the Handmaids of Charity and servant 
                    of the sick, intercede for us who seek to serve others with courage and compassion.
                  </p>
                  <p className="mb-4">
                    You who were never afraid to open the door on new opportunities to serve God, 
                    help us to embrace each obstacle in our path as a new opportunity to serve.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace to 
                    serve the sick and suffering with love and to face challenges with faith. 
                    Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Healthcare Workers</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Mary Di Rosa, patron of nurses and healthcare workers, intercede 
                    for all who serve the sick and suffering.
                  </p>
                  <p>
                    Help them to see Christ in every patient, to serve with compassion and 
                    skill, and to find strength in their faith when facing difficult situations. 
                    Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Courage</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Mary Di Rosa, who faced armed soldiers with nothing but a crucifix 
                    and your faith, intercede for us when we are afraid.
                  </p>
                  <p>
                    Help us to trust in God's protection, to be courageous in serving others, 
                    and to never let fear prevent us from doing what is right. Through Christ 
                    our Lord. Amen."
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
                         <Link href="/saints/st-catherine-siena" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Catherine of Siena
                </h3>
                <p className="text-gray-700 text-sm">
                  Dominican tertiary who served the sick and counseled popes.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-camillus-de-lellis" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Camillus de Lellis
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Camillians, patron of the sick and healthcare workers.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joseph" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joseph
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron of workers and protector of the Holy Family.
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