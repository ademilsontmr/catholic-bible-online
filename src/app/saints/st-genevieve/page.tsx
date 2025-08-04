import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Genevieve - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Genevieve, patron saint of Paris who saved the city from Attila the Hun.',
  keywords: [
    'st genevieve',
    'saint genevieve',
    'st genevieve biography',
    'st genevieve feast day',
    'st genevieve patron saint',
    'patron saint of paris',
    'january 3 feast day',
    'catholic saints',
    'attila the hun'
  ],
  openGraph: {
    title: 'St. Genevieve - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Genevieve, patron saint of Paris who saved the city from Attila the Hun.',
    url: 'https://catholicbibleonline.com/saints/st-genevieve',
  },
  twitter: {
    title: 'St. Genevieve - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Genevieve, patron saint of Paris who saved the city from Attila the Hun.',
  }
}

export default function StGenevievePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏛️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Genevieve
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron Saint of Paris, Defender of the City, Virgin and Visionary
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Genevieve</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">January 3</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏛️</div>
              <div className="text-sm text-gray-600">Paris</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Genevieve</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Genevieve was a fair and courageous peasant girl who was born around 422 in Nanterre, France, to a man named Severus and a woman named Gerontia. When Genevieve was only seven-years-old, St. Germanus, Bishop of Auxerre visited Nanterre on his way to Britain. While he was there, many people flocked to receive his blessing. The young Genevieve stood amid a crowd which had gathered around the man of God who singled her out and foretold her future sanctity.
              </p>
              
              <p className="mb-6">
                At her request, the holy Bishop led her to a church, accompanied by all the faithful, and consecrated her to God as a virgin. The next day, Germanus asked Genevieve if she had remembered the promise she made to God. She did and proclaimed she would always fulfill it faithfully. He presented her with a cross engraved brass medal to always wear around her neck, as a reminder of the consecration she made of herself to God. He ordered her to never wear any other bracelets, necklaces or jewelry, to avoid falling into vanity.
              </p>
              
              <p className="mb-6">
                Encouraged by Germanus, Genevieve dedicated her life to prayer, practices of devotion and acts of penance. When she was only 15-years-old, she met with the Bishop of Paris and asked to become a nun. From this moment, she also began praying continuously and fasting, eating only twice a week, as a sign of her complete dedication to the Lord.
              </p>
              
              <p className="mb-6">
                Following the death of her parents, Genevieve went on to live with her grandmother in Paris and traveled, sharing the faith, performing acts of charity, praying for the sick and prophesying. Her dedicated Christian way of life was filled with the signs of the Holy Spirit working through her. The signs of the working of the Holy Spirit accompanying this holy young woman included miracles and spiritually inspired predictions. She frequently had visions of heavenly angels and saints.
              </p>
              
              <p>
                However, when she shared those visions and experiences of the Lord, people began to turn against her. They called her a hypocrite and accused her of being a false visionary. In fact, they were determined to drown her in a lake of fire. However, the Bishop Germanus intervened and silenced those who were accusing her of false statements, and persecuting her. Genevieve was appointed by the Bishop to look after the welfare of the consecrated virgins. She did so faithfully and helped to lead them into a greater degree of holiness as they grew closer to the Lord Jesus.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Genevieve: Defender of Paris</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Influence on Kings</h3>
              <p className="mb-6">
                Genevieve had a great influence over Childeric, the King of Gaul who overtook Paris. During a time when Paris suffered with great famine, Genevieve traveled by boat to Troyes and brought back several boats full of corn. Although he was a pagan, Childeric respected her and spared the lives of several prisoners on her behalf. She also had an effect on King Clovis. He listened to her advice and under her request, he granted freedom to several of his prisoners.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">The Miracle of Attila the Hun</h3>
              <p className="mb-6">
                When Attila and his army of Huns came upon Paris, the Parisian Christians were prepared to run, but Genevieve spoke to them and convinced them to stay within their homes, fast and pray to the Lord. She assured them they would have the protection of Heaven. Her prediction came true as Attila suddenly changed his path and turned away from Paris. This miraculous intervention saved the city and established Genevieve as its heavenly protector.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Posthumous Miracles</h3>
              <p className="mb-6">
                Shortly after she was buried, the people built a small church over her tomb, asking for the intercession of Saints Peter and Paul. Her relics were encased by St. Eligius in a handmade gold and silver shrine around 630. Over the years, the Normans destroyed the church several times. Once it was rebuilt around 856, St. Genevieve's relics were returned and miracles began happening, making this church famous all throughout France.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">The Miracle of Des Ardens</h3>
              <p>
                Paris experienced proof of Genevieve's intercession on many occasions. The most famous occurrence was the miracle of Des Ardens, or the burning fever. In 1129, a violent fever swept through the city, and doctors couldn't stop the people from dying. The shrine of Genevieve was carried in a procession to the cathedral, and during the ceremony, those who touched her shrine were healed by the power of the Lord. Throughout the whole town, no one else became sick, all the ill recovered and only three people died. Pope Innocent visited the city the following year and asked that an annual festival be held in commemoration of the miracle every year on November 26.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">January 3</div>
              <p className="text-gray-600">Feast of St. Genevieve, Patron Saint of Paris</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Genevieve is celebrated on January 3rd, commemorating the day of her death in 512. St. Genevieve lived to the remarkable age of 89, dedicating her entire life to prayer, fasting, and service to the people of Paris. Her feast day falls during the Christmas season, making it a fitting time to reflect on her role as a protector and intercessor for the city she loved so dearly.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. Genevieve's remarkable courage and her role as the patron saint of Paris. Her feast day serves as a reminder of the power of prayer and fasting, and the importance of trusting in God's protection. Many parishes in France, especially in Paris, celebrate this day with special Masses and processions. The day also emphasizes the importance of consecrated virginity and the special role of women in the Church's mission of prayer and intercession.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. Genevieve for her intercession in matters of protection from disasters, for the city of Paris, and for young girls seeking to live a life of consecrated virginity. Many people also pray for the grace to trust in God's protection during times of danger and uncertainty. Her example encourages us to be courageous in our faith, to dedicate ourselves to prayer and fasting, and to trust in God's miraculous intervention in our lives.
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
                  <li>• <strong>Paris:</strong> Patron saint of the French capital</li>
                  <li>• <strong>France:</strong> Patron of the French nation</li>
                  <li>• <strong>Young Girls:</strong> Patron of young women</li>
                  <li>• <strong>Against Disasters:</strong> Protector from calamities</li>
                  <li>• <strong>Consecrated Virgins:</strong> Patron of virginity</li>
                  <li>• <strong>Visionaries:</strong> Patron of those with spiritual gifts</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Protection:</strong> Helper in times of danger</li>
                  <li>• <strong>Prayer Life:</strong> Patron of deep prayer</li>
                  <li>• <strong>Fasting:</strong> Helper in spiritual discipline</li>
                  <li>• <strong>Charity:</strong> Patron of acts of mercy</li>
                  <li>• <strong>Prophecy:</strong> Helper for spiritual discernment</li>
                  <li>• <strong>City Protection:</strong> Patron of urban safety</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Genevieve</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Genevieve, patron saint of Paris and courageous virgin, who through prayer 
                    and fasting saved your beloved city from the invasion of Attila the Hun, help us to trust 
                    in God's protection in times of danger and uncertainty. Through your intercession, may we 
                    have the courage to stand firm in our faith, the discipline to dedicate ourselves to prayer 
                    and fasting, and the generosity to serve others in charity. Help us to be faithful witnesses 
                    of Christ's love and protection. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Genevieve, pray for us!"
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
            <Link href="/saints/st-germanus" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Germanus
                </h3>
                <p className="text-gray-700 text-sm">
                  Bishop of Auxerre who consecrated Genevieve to God as a virgin.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joan-of-arc" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joan of Arc
                </h3>
                <p className="text-gray-700 text-sm">
                  Another French saint who defended her country through divine guidance.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-brigid" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Brigid
                </h3>
                <p className="text-gray-700 text-sm">
                  Another early female saint known for her charity and miracles.
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