import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Josaphat - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Josaphat, Eastern Rite bishop and martyr for church unity who died trying to bring the Orthodox Church into union with Rome.',
  keywords: [
    'st josaphat',
    'saint josaphat',
    'st josaphat biography',
    'st josaphat feast day',
    'st josaphat patron saint',
    'catholic saints',
    'november 12 feast day',
    'martyr saints',
    'church unity',
    'eastern rite',
    'orthodox union',
    'vitebsk',
    'polotsk'
  ],
  openGraph: {
    title: 'St. Josaphat - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Josaphat, Eastern Rite bishop and martyr for church unity.',
    url: 'https://catholicbibleonline.com/saints/st-josaphat',
  },
  twitter: {
    title: 'St. Josaphat - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Josaphat, Eastern Rite bishop and martyr for church unity.',
  }
}

export default function StJosaphatPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Josaphat
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Eastern Rite Bishop, Martyr for Church Unity, Defender of the Faith
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Josaphat</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">November 12</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Josaphat</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Josaphat Kunsevich was born in 1580 or 1584 in what is now Belarus, during a time of great 
                religious and political turmoil. The Eastern Church had been formally separated from Rome since 
                the Great Schism of 1054, but in the late 16th century, an Orthodox metropolitan of Kiev and 
                five Orthodox bishops decided to commit the millions of Christians under their pastoral care 
                to reunion with Rome. This historic decision, known as the Union of Brest-Litovsk (1595-96), 
                took place when Josaphat was still a young boy, but he would witness both the positive and 
                negative results of this attempt at church unity.
              </p>
              
              <p className="mb-6">
                The young Josaphat grew up in a world where millions of Christians did not agree with their 
                bishops' decision to return to communion with the Catholic Church. Both sides tried to resolve 
                this disagreement, unfortunately not only with words but with violence. Martyrs died on both 
                sides, and Josaphat emerged as a voice of Christian peace in this dissent. His early experiences 
                with religious conflict would shape his later ministry and his commitment to unity through 
                peaceful means.
              </p>
              
              <p className="mb-6">
                After an apprenticeship to a merchant, Josaphat turned down a partnership in the business and 
                a marriage to enter the monastery of the Holy Trinity at Vilna in 1604. As a teenager, he had 
                found encouragement in his vocation from two Jesuits and a rector who understood his heart. 
                In the monastery, he found another soulmate in Joseph Benjamin Rutsky, who had joined the 
                Byzantine Rite under orders of Pope Clement VIII after converting from Calvinism. Rutsky shared 
                the young Josaphat's passion to work for reunion with Rome, and the two friends spent long 
                hours making plans on how they could bring about that communion and reform monastic life.
              </p>
              
              <p className="mb-6">
                The careers of the two friends parted physically when Josaphat was sent to found new houses 
                in Rome and Rutsky was first made abbot at Vilna. Josaphat replaced Rutsky as abbot when 
                Rutsky became metropolitan of Kiev. Josaphat immediately put into practice his early plans 
                of reform. Because his plans tended to reflect his own extremely austere ascetic tendencies, 
                he was not always met with joy. One community threatened to throw him into the river until 
                his general compassion and his convincing words won them over to a few changes.
              </p>
              
              <p className="mb-6">
                Josaphat faced even more problems when he became first bishop of Vitebsk and then Polotsk 
                in 1617. The church there was literally and figuratively in ruins, with buildings falling 
                apart, clergy marrying two or three times, and monks and clergy everywhere not really 
                interested in pastoral care or model Christian living. Within three years, Josaphat had 
                rebuilt the church by holding synods, publishing a catechism to be used all over, and 
                enforcing rules of conduct for clergy. But his most compelling argument was his own life, 
                which he spent preaching, instructing others in the faith, and visiting the needy of the towns.
              </p>
              
              <p className="mb-6">
                Despite all his work and the respect he had earned, the Orthodox separatists found fertile 
                ground when they set up their own bishops in the exact same area. Meletius Smotritsky was 
                named his rival archbishop of Polotsk. It must have hurt Josaphat to see the people he had 
                served so faithfully break into riots when the King of Poland declared Josaphat the only 
                legitimate archbishop. His former diocese of Vitebsk turned completely against the reunion 
                and him, along with two other cities.
              </p>
              
              <p className="mb-6">
                What probably hurt even more was that the very Catholics he looked to for communion opposed 
                him as well. Catholics who should have been his support didn't like the way he insisted on 
                the use of the Byzantine rite instead of the Roman rite. Out of fear or ignorance, Leo 
                Sapiah, chancellor of Lithuania, chose to believe stories that Josaphat was inciting the 
                people to violence and instead of coming to his aid, condemned him. Actually, his only act 
                of force was when the separatists took over the church at Mogilev and he asked the civil 
                power to help him return it to his authority.
              </p>
              
              <p className="mb-6">
                In October 1623, Josaphat decided to return to Vitebsk to try to calm the troubles himself. 
                He was completely aware of the danger but said, "If I am counted worthy of martyrdom, then 
                I am not afraid to die." The separatists saw their chance to get rid of Josaphat and discredit 
                him if they could only stir Josaphat's party to strike the first blow. Then they would have 
                an excuse to strike back. Their threats were so public that Josaphat preached on the gospel 
                verse John 16:2, "Indeed, an hour is coming when those who kill you will think that by doing 
                so they are offering worship to God."
              </p>
              
              <p>
                On November 12, 1623, Josaphat was martyred by a mob in Vitebsk. He was hit with a stick, 
                then an axe, and finally shot through the head. His bloody body was dragged to the river and 
                thrown in, along with the body of a dog who had tried to protect him. The unsung heroes of 
                this horrible terrorism were the Jewish people of Vitebsk, who risked their own lives to 
                rescue Josaphat's friends and servants from the bloodthirsty mobs. These same Jewish people 
                were the only ones to publicly accuse the killers and mourn the death of Josaphat while the 
                Catholics of the city hid in fear of their lives.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Josaphat: Martyr for Church Unity</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Champion of Church Unity</h3>
              <p className="mb-6">
                St. Josaphat's greatest legacy is his unwavering commitment to church unity and his willingness 
                to die for the cause of bringing the Eastern Orthodox Church back into communion with Rome. 
                His life and death demonstrate that true unity requires both theological understanding and 
                personal sacrifice. His work for the Union of Brest-Litovsk and his subsequent ministry as 
                a bishop showed his deep commitment to healing the centuries-old schism between East and West.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Reformer and Pastor</h3>
              <p className="mb-6">
                Josaphat's legacy as a reformer is equally significant. When he became bishop of Polotsk, 
                he found the church in complete disarray - buildings in ruins, clergy marrying multiple times, 
                and a general lack of pastoral care. Within three years, he had rebuilt the church through 
                synods, published catechisms, and enforced rules of conduct for clergy. His most compelling 
                argument for reform was his own life of preaching, instruction, and care for the needy.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Non-Violence</h3>
              <p className="mb-6">
                Despite facing violent opposition from both Orthodox separatists and some Catholics, Josaphat 
                consistently refused to respond with violence. He insisted that his party show patience and 
                forbearance, even when threatened with death. His peaceful approach to conflict resolution 
                and his willingness to die rather than compromise his principles make him a powerful model 
                for Christian non-violence and peaceful resistance.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Bridge Between Traditions</h3>
              <p>
                Josaphat's insistence on maintaining the Byzantine rite while being in communion with Rome 
                demonstrates his understanding that unity does not require uniformity. His respect for Eastern 
                traditions while working for communion with the West makes him a model for ecumenical dialogue 
                and for respecting the legitimate diversity within the Catholic Church. His canonization in 
                1867 as the first Eastern saint formally canonized by Rome further emphasizes his role as a 
                bridge between Eastern and Western Christianity.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-red-600 mb-2">November 12</div>
              <p className="text-gray-600">Feast of St. Josaphat, Bishop and Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Josaphat is celebrated on November 12th, commemorating the day of his 
                martyrdom in 1623. This feast honors his life as an Eastern Rite bishop, his work for 
                church unity, and his ultimate sacrifice for the faith. It is a day to remember his 
                example of peaceful resistance and his commitment to bringing the Eastern and Western 
                churches together.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. Josaphat lived during a critical period in Church history, when the wounds of the 
                Great Schism of 1054 were still fresh and attempts at reunion were met with both hope 
                and resistance. His ministry took place in the context of the Union of Brest-Litovsk, 
                a significant attempt to heal the division between Eastern Orthodoxy and Roman Catholicism. 
                His martyrdom and subsequent canonization in 1867 represent important milestones in the 
                ongoing work of Christian unity.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On his feast day, Catholics pray for his intercession, especially for those working for 
                Christian unity, for Eastern Rite Catholics, for those facing religious persecution, for 
                bishops and clergy, and for the grace to respond to conflict with peace and patience. 
                His example inspires us to work for unity while respecting legitimate diversity and to 
                be willing to make sacrifices for the cause of Christ.
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
                  <li>• <strong>Ukraine:</strong> Patron saint of Ukraine</li>
                  <li>• <strong>Belarus:</strong> Patron saint of Belarus</li>
                  <li>• <strong>Eastern Rite Catholics:</strong> Patron of Eastern Rite Catholics</li>
                  <li>• <strong>Church Unity:</strong> Patron of ecumenical efforts</li>
                  <li>• <strong>Bishops:</strong> Patron of bishops and church leaders</li>
                  <li>• <strong>Poland:</strong> Patron saint of Poland</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Christian Unity:</strong> Helper for ecumenical dialogue</li>
                  <li>• <strong>Religious Persecution:</strong> Patron of persecuted Christians</li>
                  <li>• <strong>Peaceful Resistance:</strong> Helper for non-violent conflict resolution</li>
                  <li>• <strong>Church Reform:</strong> Patron of church renewal</li>
                  <li>• <strong>Eastern Traditions:</strong> Helper for preserving Eastern rites</li>
                  <li>• <strong>Pastoral Care:</strong> Patron of clergy and pastoral workers</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Josaphat</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Josaphat, Eastern Rite bishop and martyr for church unity, who gave your life 
                    trying to bring the Orthodox Church into union with Rome, pray for us who call upon 
                    your intercession.
                  </p>
                  <p className="mb-4">
                    Help us to have the same commitment to Christian unity that you showed throughout 
                    your life. Teach us to work for reconciliation between different Christian traditions 
                    while respecting the legitimate diversity of rites and customs.
                  </p>
                  <p className="mb-4">
                    Through your powerful intercession, may we be blessed with the grace to respond to 
                    conflict with peace and patience, and to be willing to make sacrifices for the cause 
                    of Christ and the unity of His Church. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Church Unity</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Josaphat, who worked tirelessly for the reunion of Eastern and Western Christianity 
                    and who died as a martyr for this cause, intercede for all those working for Christian unity today.
                  </p>
                  <p>
                    Help them to be bridges between different traditions, to respect legitimate diversity 
                    while working for communion, and to respond to opposition with peace and patience. 
                    Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Eastern Rite Catholics</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Josaphat, who insisted on maintaining the Byzantine rite while being in communion 
                    with Rome, intercede for all Eastern Rite Catholics and those who work to preserve 
                    Eastern Christian traditions.
                  </p>
                  <p>
                    Help them to be faithful to their traditions while remaining in communion with the 
                    universal Church, and to be witnesses to the rich diversity of the Catholic faith. 
                    Through Christ our Lord. Amen."
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
            <Link href="/saints/st-peter" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peter
                </h3>
                <p className="text-gray-700 text-sm">
                  First Pope and Prince of the Apostles, whose successor Josaphat defended.
                </p>
              </div>
            </Link>

                         <Link href="/saints/st-stephen" className="group block">
               <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                 <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                   Biblical Saints
                 </div>
                 <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                   St. Stephen
                 </h3>
                 <p className="text-gray-700 text-sm">
                   First Christian martyr, who like Josaphat died for his faith.
                 </p>
               </div>
             </Link>

            <Link href="/saints/st-john-chrysostom" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John Chrysostom
                </h3>
                <p className="text-gray-700 text-sm">
                  Eastern Church Father and Doctor, whose tradition Josaphat defended.
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