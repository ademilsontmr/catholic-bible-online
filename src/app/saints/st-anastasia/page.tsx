import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Anastasia - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Anastasia, early Christian martyr and "Deliverer from Potions."',
  keywords: [
    'st anastasia',
    'saint anastasia',
    'st anastasia biography',
    'st anastasia feast day',
    'st anastasia patron saint',
    'deliverer from potions',
    'december 25 feast day',
    'catholic saints',
    'early christian martyr'
  ],
  openGraph: {
    title: 'St. Anastasia - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Anastasia, early Christian martyr and "Deliverer from Potions."',
    url: 'https://catholicbibleonline.com/saints/st-anastasia',
  },
  twitter: {
    title: 'St. Anastasia - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Anastasia, early Christian martyr and "Deliverer from Potions."',
  }
}

export default function StAnastasiaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Anastasia
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Early Christian Martyr, Deliverer from Potions, Healer of the Faithful
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Anastasia</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">December 25</div>
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
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Anastasia</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Anastasia, also known as Anastasia of Sirmium and Anastasia the Pharmakolytria or "Deliverer from Potions," is a Christian saint and martyr who suffered for Christ during the time of Diocletian's Christian persecutions. She is one of the seven women commemorated by name in the Canon of the Mass, a testament to her importance in the early Church.
              </p>
              
              <p className="mb-6">
                The "passio," or suffering of, Anastasia tells that her father was a noble pagan named Praetextatus and her mother was St. Fausta of Sirmium. Because her mother was a Christian, Anastasia was baptized as an infant and secretly raised with Christian values. Following the death of her mother, Anastasia's father gave her in marriage to the pagan Publius, but she preserved her virginity, maintaining her commitment to Christ despite her circumstances.
              </p>
              
              <p className="mb-6">
                During the persecutions of Diocletian, Anastasia visited the prisons and cared for the confessors of faith. She would feed, doctor and ransom suffering captives, showing great courage and compassion in the face of danger. Anastasia's servant informed Publius of her activities; he locked her up and beat her, but her faith remained unshaken.
              </p>
              
              <p className="mb-6">
                Anastasia began secretly corresponding with her adviser, St. Chrysogonus, who had gone to Aquileia. He told her to be brave, be patient and accept the Lord's will. After the death of her husband while he was on embassy to Persia, Anastasia distributed her property to those less fortunate and suffering, demonstrating her complete dedication to serving others.
              </p>
              
              <p>
                She then set off to follow Chrysogonus to Aquileia. Chrysogonus was personally interrogated by Diocletian, but he never renounced his faith. Chrysogonus was ordered to be beheaded and thrown into the sea. After his death, Chrysogonus appeared to Zoilus, a presbyter who found his relics and foretold the martyrdoms of Ss. Agape, Chione and Irene. He asked Zoilus to send Anastasia to the three sisters as encouragement.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Anastasia: Deliverer from Potions</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Ministry to Martyrs</h3>
              <p className="mb-6">
                Nine days later, Anastasia visited the sisters just before they were tortured. After they were martyred, Anastasia buried them, showing her devotion to honoring the memory of those who gave their lives for Christ. Anastasia spent her time traveling from city to city caring for Christian prisoners. She healed their wounds and relieved their pain, earning her the title "Deliverer from Potions," because she would often heal many from the effects of poisons and potions.
              </p>
              
                             <h3 className="text-xl font-semibold text-black mb-4">Courage in the Face of Persecution</h3>
               <p className="mb-6">
                 Anastasia was arrested in Illyricum and taken to the prefect of the district for being Christian. He tried to persuade her to deny her faith and threatened her with torture. Anastasia could not be swayed, so she was given to the pagan priest Ulpian in Rome. He presented her with the choice between riches or suffering, luxuries or torture devices. She chose torture, demonstrating her unwavering commitment to Christ.
               </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Divine Protection and Miracles</h3>
              <p className="mb-6">
                He gave her three days to reconsider. Enamored by her beauty, Ulpian decided he would defile her purity. However, once he went to touch her he was struck blind and his head burst into extreme pain. On his way to his pagan temple, he fell and died. St. Anastasia, now free, set out to care for imprisoned Christians, along with Theodota, a pious young widow and faithful helper. After Theodota was martyred, Anastasia was caught once again.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Final Martyrdom and Legacy</h3>
              <p>
                She was ordered death by starvation and was starved for 60 days. But Anastasia was not harmed. It is said the martyred Theodota visited her and fed her during this time. The judge decided the prisoners, including Anastasia and Eutychianus, would be killed by drowning. They all entered a boat with holes in the base, but St. Theodota appeared to them and steered the boat to shore. Once they landed, Anastasia and Eutychianus baptized 120 men. Following yet another escape, Anastasia was taken to the island of Palmaria. She was staked to the ground with her arms and legs stretched out and burned alive.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">December 25</div>
              <p className="text-gray-600">Feast of St. Anastasia, Martyr and Deliverer from Potions</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Anastasia is celebrated on December 25th, Christmas Day, making her one of the few saints whose feast day coincides with this major liturgical celebration. This unique placement reflects her importance in the early Church, as she is one of the seven women commemorated by name in the Canon of the Mass. Her feast day serves as a reminder of the courage and faith of early Christian martyrs, even as we celebrate the birth of Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. Anastasia's remarkable courage and her role as a healer and protector of the faithful. Her feast day serves as a reminder of the importance of standing firm in faith during times of persecution and the power of divine protection. Many people pray to St. Anastasia for protection from poison and for healing from various ailments. The day also emphasizes the importance of caring for prisoners and those who are suffering, following Anastasia's example of compassionate service.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. Anastasia for her intercession in matters of protection from poison, healing from illness, and courage in the face of persecution. Many people also pray for prisoners, for those who are suffering, and for the grace to serve others with compassion and courage. Her example encourages us to be brave in our faith, to care for those in need, and to trust in God's protection even in the most difficult circumstances.
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
                  <li>• <strong>Martyrs:</strong> Patron of those who suffer for the faith</li>
                  <li>• <strong>Weavers:</strong> Patron of textile workers</li>
                  <li>• <strong>Against Poison:</strong> Protector from toxic substances</li>
                  <li>• <strong>Prisoners:</strong> Patron of those in captivity</li>
                  <li>• <strong>Healers:</strong> Patron of medical workers</li>
                  <li>• <strong>Women:</strong> Patron of female saints</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Protection:</strong> Helper in times of danger</li>
                  <li>• <strong>Healing:</strong> Patron of recovery from illness</li>
                  <li>• <strong>Courage:</strong> Helper in facing persecution</li>
                  <li>• <strong>Purity:</strong> Patron of maintaining virtue</li>
                  <li>• <strong>Charity:</strong> Helper in serving others</li>
                  <li>• <strong>Faithfulness:</strong> Patron of steadfast belief</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Anastasia</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Anastasia, early Christian martyr and Deliverer from Potions, who with 
                    courage and compassion cared for prisoners and healed the suffering, help us to be brave 
                    in our faith and generous in our service to others. Through your intercession, may we 
                    have the strength to face persecution with courage, the compassion to care for those in 
                    need, and the trust in God's protection that you demonstrated throughout your life. 
                    Help us to be faithful witnesses of Christ's love and healing power. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Anastasia, pray for us!"
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
            <Link href="/saints/st-chrysogonus" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Chrysogonus
                </h3>
                <p className="text-gray-700 text-sm">
                  Anastasia's spiritual adviser and fellow martyr.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-fausta" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Fausta
                </h3>
                <p className="text-gray-700 text-sm">
                  Anastasia's mother who raised her in the Christian faith.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-catherine-alexandria" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Catherine of Alexandria
                </h3>
                <p className="text-gray-700 text-sm">
                  Another early Christian martyr and virgin saint.
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