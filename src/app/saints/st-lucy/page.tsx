import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Lucy - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Lucy, patron saint of the blind and courageous martyr of Syracuse.',
  keywords: [
    'st lucy',
    'saint lucy',
    'patron saint of blind',
    'december 13 feast day',
    'catholic saints',
    'syracuse martyr',
    'light of christ'
  ],
  openGraph: {
    title: 'St. Lucy - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Lucy, patron saint of the blind and courageous martyr of Syracuse.',
    url: 'https://catholicbibleonline.com/saints/st-lucy',
  },
  twitter: {
    title: 'St. Lucy - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Lucy, patron saint of the blind and courageous martyr of Syracuse.',
  }
}

export default function StLucyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👁️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Lucy
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron Saint of the Blind and Light of Christ
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Lucy</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">December 13</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👁️</div>
              <div className="text-sm text-gray-600">Early Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Lucy</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Lucy's history has been lost and all we really know for certain is that 
                this brave woman who lived in Syracuse lost her life during the persecution 
                of Christians in the early fourth century. Her veneration spread to Rome 
                so that by the sixth century the whole Church recognized her courage in 
                defense of the faith. Because people wanted to shed light on Lucy's bravery, 
                legends began to crop up. The one that has passed the test of time tells 
                the story of a young Christian woman who vowed to live her life in service 
                of Christ.
              </p>
              
              <p className="mb-6">
                Her mother tried to arrange a marriage for her with a pagan and Lucy knew 
                her mother could not be swayed by a young girl's vow, so she devised a 
                plan to convince her mother that Christ was the better partner for life. 
                After several prayers at the tomb of Saint Agatha, Lucy saw the saint in 
                a dream. St. Agatha told Lucy her mother's illness would be cured through 
                faith, which Lucy used to persuade her mother to give the dowry money to 
                the poor and allow her to commit her life to God.
              </p>
              
              <p className="mb-6">
                While Lucy and her mother were grateful to God, the rejected bridegroom 
                was deeply angered and betrayed Lucy's faith to the governor Paschasius. 
                The governor attempted to force her into defilement at a brothel, but the 
                guards who came to take her away were unable to move her, even after 
                hitching her to a team of oxen. The guards heaped bundles of wood around 
                her but it wouldn't burn so they finally resorted to their swords, and 
                Lucy met her death.
              </p>
              
              <p className="mb-6">
                Though details of her life remain unknown, it is widely known that during 
                her lifetime Christians were persecuted for their faith. They were forced 
                to endure horrific torture and often met painful ends during Diocletian's 
                reign. Though the details surrounding her death remain only as legends, 
                it is all modern-day Christians can rely on. Lucy's legend did not end 
                with her death. According to later accounts, Lucy warned Paschasius he 
                would be punished. When the governor heard this he ordered the guards 
                to gouge out her eyes; however, in another telling, it was Lucy who 
                removed her eyes in an attempt to discourage a persistent suitor who 
                greatly admired them.
              </p>
              
              <p>
                When her body was being prepared for burial, they discovered her eyes 
                had been restored. Sigebert (1030-1112), a monk of Gembloux, wrote 
                sermo de Sancta Lucia, in which he described Lucy's body as remaining 
                undisturbed in Sicily for 400 years until Faroald II, Duke of Spoleto, 
                seized the island and transferred Lucy's remains to Abruzzo, Italy. 
                It was later removed by Emperor Otho I in 972 to Metz and left in the 
                church of St. Vincent. There is much confusion about what happened to 
                her body after its stay at St. Vincent's, but it is believed that several 
                pieces of her body can be found in Rome, Naples, Verona, Lisbon, Milan, 
                Germany, France and Sweden. In 1981, thieves stole all but her head but 
                police were able to recover them on her feast day.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Lucy: Light of Christ</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Symbol of Light and Vision</h3>
              <p className="mb-6">
                St. Lucy's greatest legacy is her symbolic representation of light and 
                spiritual vision. Her name, which means "light" or "lucid," perfectly 
                captures her role as a beacon of faith in a dark world. She is often 
                depicted with the emblem of eyes on a cup or plate, and in paintings, 
                she is frequently shown with a golden plate holding her eyes and a palm 
                branch, symbolizing victory over evil. This imagery has made her a powerful 
                symbol of spiritual enlightenment and the triumph of faith over darkness.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of the Blind and Visually Impaired</h3>
              <p className="mb-6">
                St. Lucy's association with eyes and vision has made her the patron saint 
                of the blind and those with visual impairments. Her story of having her 
                eyes restored after death has provided hope and comfort to countless 
                people suffering from blindness or vision problems. Her intercession 
                is sought by those seeking physical healing of eye conditions, as well 
                as spiritual enlightenment and clarity of vision in matters of faith. 
                Her patronage extends beyond physical sight to include the ability to 
                see God's will and to recognize His presence in our daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Courage and Devotion</h3>
              <p>
                St. Lucy's courage in defending her faith and her commitment to Christ 
                serve as an inspiration to Christians throughout the ages. Her willingness 
                to sacrifice everything, including her life, for her faith demonstrates 
                the depth of her love for Christ. Her story of miraculous strength, 
                where guards could not move her even with oxen, symbolizes the power 
                that comes from unwavering faith. St. Lucy's legacy encourages us to 
                let our light shine in the world, to be courageous in our witness to 
                Christ, and to trust in God's protection even in the face of persecution 
                or difficulty.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">December 13</div>
              <p className="text-gray-600">Feast of St. Lucy</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Lucy is celebrated on December 13th, during the Advent 
                season when Christians prepare for the coming of Christ, the Light of 
                the World. This timing is particularly significant as it falls during 
                the darkest time of the year in the Northern Hemisphere, making St. Lucy's 
                association with light especially meaningful. The feast is celebrated 
                as a memorial in the Roman Catholic Church, and it provides an opportunity 
                to honor the memory of this courageous martyr and to reflect on the 
                importance of being a light in the world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Lucy, many people participate in special prayers 
                and devotions to honor her memory and seek her intercession. Churches 
                may hold special Masses or prayer services focused on the themes of 
                light, vision, and courage. In some countries, particularly in Scandinavia, 
                the feast is marked by the tradition of the "Lucia Bride," where a young 
                girl dressed in white with a crown of candles leads a procession, symbolizing 
                the bringing of light into the darkness. The day is also marked by prayers 
                for those with visual impairments and for spiritual enlightenment.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for spiritual vision and 
                the courage to let our light shine in the world. Many people make special 
                petitions for help in seeing God's will clearly and for the strength 
                to be witnesses to Christ in their daily lives. The day is also a time 
                to reflect on the importance of being a light to others and to pray 
                for those who are physically or spiritually blind. St. Lucy's feast 
                day encourages us to remember that we are called to be lights in the 
                world, illuminating the path to Christ for others.
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
                  <li>• <strong>Blind:</strong> Patron of the visually impaired</li>
                  <li>• <strong>Eye Diseases:</strong> Patron of eye health</li>
                  <li>• <strong>Light:</strong> Patron of spiritual enlightenment</li>
                  <li>• <strong>Vision:</strong> Patron of clarity of sight</li>
                  <li>• <strong>Courage:</strong> Patron of bravery in faith</li>
                  <li>• <strong>Syracuse:</strong> Patron of her native city</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Spiritual Vision:</strong> Helper in seeing God's will</li>
                  <li>• <strong>Protection:</strong> Guardian against spiritual blindness</li>
                  <li>• <strong>Healing:</strong> Patron of eye healing</li>
                  <li>• <strong>Witness:</strong> Helper in being light to others</li>
                  <li>• <strong>Faith:</strong> Patron of unwavering devotion</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Lucy</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Saint Lucy, you did not hide your light under a basket, but let 
                    it shine for the whole world, for all the centuries to see. We may 
                    not suffer torture in our lives the way you did, but we are still 
                    called to let the light of our Christianity illumine our daily lives.
                  </p>
                  <p className="mb-4">
                    Please help us to have the courage to bring our Christianity into 
                    our work, our recreation, our relationships, our conversation -- 
                    every corner of our day. Help us to be witnesses to Christ in all 
                    that we do and say.
                  </p>
                  <p>
                    St. Lucy, pray for us that we may have the spiritual vision to see 
                    God's will clearly and the courage to follow it faithfully. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for the Blind</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Lucy, patron saint of the blind and those with visual impairments, 
                    intercede for all those who cannot see with their physical eyes.
                  </p>
                  <p>
                    Help them to see with the eyes of faith and to recognize God's 
                    presence in their lives. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Lucy, pray for us!"
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
            <Link href="/saints/st-agatha" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Agatha
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr who appeared to St. Lucy in a dream.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-cecilia" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Cecilia
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and patron saint of musicians.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-agnes" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Agnes
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and patron saint of young girls.
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