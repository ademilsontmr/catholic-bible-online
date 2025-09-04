import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Nicholas - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Nicholas, the fourth-century bishop of Myra known for his generosity and miracles.',
  keywords: [
    'st nicholas',
    'saint nicholas',
    'st nicholas biography',
    'st nicholas feast day',
    'st nicholas patron saint',
    'santa claus',
    'december 6 feast day',
    'catholic saints',
    'bishop of myra'
  ],
  openGraph: {
    title: 'St. Nicholas - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Nicholas, the fourth-century bishop of Myra known for his generosity and miracles.',
    url: 'https://catholicbibleonline.com/saints/st-nicholas',
  },
  twitter: {
    title: 'St. Nicholas - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Nicholas, the fourth-century bishop of Myra known for his generosity and miracles.',
  }
}

export default function StNicholasPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎅</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Nicholas
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Bishop of Myra, Patron of Children and Sailors, Inspiration for Santa Claus
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Nicholas</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">December 6</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🎅</div>
              <div className="text-sm text-gray-600">Generosity</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Nicholas</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Nicholas, also known as "Nikolaos of Myra," was a fourth century saint and Greek bishop of Myra. Nicholas was born in Asia Minor in the Roman Empire as an only child to Christian parents. Nicholas would take nourishment only once on Wednesdays and Fridays, and that in the evening according to the canons. "He was exceedingly well brought up by his parents and trod piously in their footsteps. The child, watched over by the church, enlightened his mind and encouraged his thirst for sincere and true religion."
              </p>
              
              <p className="mb-6">
                Both of his parents tragically died during an epidemic when he was a young man, leaving him well off, but to be raised by his uncle – the Bishop of Patara. Nicholas was determined to devote his inheritance to works of charity, and his uncle mentored him as a reader and later ordained him as a presbyter (priest).
              </p>
              
              <p className="mb-6">
                An opportunity soon arose for St. Nicholas and his inheritance. A citizen of Patara had lost all his money, and needed to support his three daughters who could not find husbands because of their poverty; so the wretched man was going to give them over to prostitution. Nicholas became informed of this, and thus took a bag of gold and threw it into an open window of the man's house in the night. Here was a dowry for the eldest girl and she was soon duly married. At intervals Nicholas did the same for the second and the third; at the last time the father was on the watch, recognized his benefactor and overwhelmed Nicholas with his gratitude.
              </p>
              
              <p className="mb-6">
                Coming to the city of Myra when the clergy and people of the province were in session to elect a new bishop, St. Nicholas was indicated by God as the man they should choose. This was during the time of persecutions in the beginning of the fourth century and "as he [Nicholas] was the chief priest of the Christians of this town and preached the truths of faith with a holy liberty, the divine Nicholas was seized by the magistrates, tortured, then chained and thrown into prison with many other Christians. But when the great and religious Constantine, chosen by God, assumed the imperial diadem of the Romans, the prisoners were released from their bonds and with them the illustrious Nicholas, who when he was set at liberty returned to Myra."
              </p>
              
              <p>
                St. Methodius asserts that "thanks to the teaching of St. Nicholas the metropolis of Myra alone was untouched by the filth of the Arian heresy, which it firmly rejected as death-dealing poison," but says nothing of his presence at the Council of Nicaea in 325.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Nicholas: Universal Patron of Generosity</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Defender of the Faith</h3>
              <p className="mb-6">
                According to other traditions St. Nicholas was not only there during the Council of Nicaea in 325, but so far forgot himself as to give the heresiarch Arius a slap in the face. The conciliar fathers deprived him of his episcopal insignia and committed him to prison; but our Lord and His Mother appeared there and restored to him both his liberty and his office.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Protector of the Innocent</h3>
              <p className="mb-6">
                As against Arianism so against paganism, St. Nicholas was tireless and often took strong measures: among other temples he destroyed was that of Artemis, the principal in the district, and the evil spirits fled howling before him. He was the guardian of his people as well in temporal affairs. The governor Eustathius had taken a bribe to condemn to death three innocent men. At the time fixed for their execution Nicholas came to the place, stayed the hands of the executioner, and released the prisoners. Then he turned to Eustathius and did not cease to reproach him until he admitted his crime and expressed his penitence.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Miraculous Intercessor</h3>
              <p className="mb-6">
                St. Nicholas' presence was found in a separate occasion involving three imperial officers simply on their way to duty in Phrygia. When the men were back again in Constantinople, the jealousy of the prefect Ablavius caused them to be imprisoned on false charges and an order for their death was procured from the Emperor Constantine. When the officers heard this they remembered the example they had witnessed of the powerful love of justice of the Bishop of Myra and they prayed to God that through his merits and by his instrumentality they might yet be saved. That night St. Nicholas appeared in a dream to Constantine, and told him with threats to release the three innocent men, and Ablavius experienced the same thing. In the morning the Emperor and the prefect compared notes, and the condemned men were sent for and questioned. When he heard they had called on the name of the Nicholas of Myra who appeared to him, Constantine set them free and sent them to the bishop with a letter asking him not to threaten him any more, but to pray for the peace of the world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Universal Veneration</h3>
              <p>
                An anonymous Greek wrote in the tenth century that, "the West as well as the East acclaims and glorifies him. Wherever there are people, in the country and the town, in the villages, in the isles, in the furthest parts of the earth, his name is revered and churches are built in his honor. Images of him are set up, panegyrics preached and festivals celebrated. All Christians, young and old, men and women, boys and girls, reverence his memory and call upon his protection. And his favors, which know no limit of time and continue from age to age, are poured out over all the earth; the Scythians know them, as do the Indians and the barbarians, the Africans as well as the Italians."
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">December 6</div>
              <p className="text-gray-600">Feast of St. Nicholas, Bishop of Myra</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Nicholas is celebrated on December 6th, commemorating the day of his death. St. Nicholas became recognized as a saint long before the Roman Catholic Church began the regular canonizing procedures in the late 10th century. Therefore, he does not have a specific date of canonization, rather records of him exist in a gradual spread until his stories became widely known and celebrated.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                The legend of the "three children" is credited to his patronage of children and various observances, ecclesiastical and secular, connected therewith; such were the boy bishop and especially in Germany, Switzerland and the Netherlands, the giving of presents in his name at Christmas time. This custom in England is not a survival from Catholic times. It was popularized in America by the Dutch Protestants of New Amsterdam who converted the popish saint into a Nordic magician (Santa Claus = Sint Klaes = Saint Nicholas).
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. Nicholas for his intercession in matters of generosity, protection of children, and help for those in need. Many people also pray for sailors, prisoners, and merchants, as well as for the grace to be more generous and charitable in their daily lives. His example encourages us to give freely to those in need and to protect the innocent and vulnerable.
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
                  <li>• <strong>Children:</strong> Patron of young people and their protection</li>
                  <li>• <strong>Sailors:</strong> Patron of mariners and safe voyages</li>
                  <li>• <strong>Prisoners:</strong> Helper for those unjustly imprisoned</li>
                  <li>• <strong>Merchants:</strong> Patron of business and commerce</li>
                  <li>• <strong>Greece:</strong> Patron of his native country</li>
                  <li>• <strong>Russia:</strong> Patron of the Russian people</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Generosity:</strong> Helper in charitable giving</li>
                  <li>• <strong>Justice:</strong> Patron of fair judgment</li>
                  <li>• <strong>Protection:</strong> Guardian of the innocent</li>
                  <li>• <strong>Travel:</strong> Helper for safe journeys</li>
                  <li>• <strong>Marriage:</strong> Patron of finding suitable spouses</li>
                  <li>• <strong>Miracles:</strong> Helper in impossible situations</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Nicholas</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Nicholas, my special patron, from that bright throne where you enjoy the 
                    presence of God, obtain for me that powerful assistance which has never failed those who 
                    have recourse to you. Obtain for me that my present danger may be turned into a happy 
                    success, and that I may join you in heaven, there to thank you forever for your glorious 
                    protection. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Nicholas, pray for us!"
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
            <Link href="/saints/st-michael-archangel" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Marian Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Michael the Archangel
                </h3>
                <p className="text-gray-700 text-sm">
                  Another powerful protector and defender of the faith.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-anthony" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anthony of Padua
                </h3>
                <p className="text-gray-700 text-sm">
                  Franciscan friar known for his powerful preaching and miracles.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joseph" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Marian Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joseph
                </h3>
                <p className="text-gray-700 text-sm">
                  The foster father of Jesus and husband of Mary, patron of fathers.
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