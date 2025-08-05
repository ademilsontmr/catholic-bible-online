import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Athanasius - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Athanasius, Father of Orthodoxy and champion of Christ\'s divinity.',
  keywords: [
    'st athanasius',
    'saint athanasius',
    'athanasius the great',
    'athanasius biography',
    'athanasius feast day',
    'athanasius patron saint',
    'father of orthodoxy',
    'arianism opponent',
    'nicene creed',
    'may 2 feast day'
  ],
  openGraph: {
    title: 'St. Athanasius - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Athanasius, Father of Orthodoxy and champion of Christ\'s divinity.',
    url: 'https://catholicbibleonline.com/saints/st-athanasius',
  },
  twitter: {
    title: 'St. Athanasius - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Athanasius, Father of Orthodoxy and champion of Christ\'s divinity.',
  }
}

export default function StAthanasiusPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Athanasius
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Father of Orthodoxy, Champion of Christ's Divinity
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Athanasius</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">May 2</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Doctor of Church</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Athanasius</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Athanasius, also known as Athanasius the Great and Athanasius the Confessor, was a bishop and doctor of the church. He is called the "Father of Orthodoxy," the "Pillar of the Church" and "Champion of Christ's Divinity." Athanasius became one of the most dedicated opponents of the heresy of Arianism. Much of his life was a testimony to the divinity of Jesus Christ.
              </p>
              
              <p className="mb-6">
                Born in either 296 or 298 in Alexandria, Egypt to a prominent Christian family, Athanasius received a wonderful education in Christian doctrine, Greek literature, philosophy, rhetoric and jurisprudence. He was well studied in the Hebrew Scriptures and the Gospel accounts and the Christian texts which would later be recognized by the Church as the canon of the New Testament. He credited the confessors during the Christian persecution under the Roman Emperor Maximian as his teachers of theology.
              </p>
              
              <p className="mb-6">
                Bishop Alexander of Alexandria became a strong influence in Athanasius' life after Alexander witnessed him playing at administering Baptism as a young boy, with other children. Alexander called the boys over and after questioning them, he determined the baptisms were valid and decided to train them for priesthood. As he grew up, Athanasius befriended many monks and hermits of the desert, including St. Antony. He later wrote the biography of Antony.
              </p>
              
              <p className="mb-6">
                Athanasius became Alexander's secretary in 318 after being ordained a deacon. Around this time, Athanasius wrote his first work, a theological treatise on the Incarnation which is still quoted extensively in Christian theological studies and spiritual literature.
              </p>
              
              <p className="mb-6">
                Around 323, Arius, an ambitious priest of the Alexandrian Church, denied the Divinity of Christ, and began spreading word that Jesus Christ was not truly divine, but merely created in time by the Eternal Father. Alexander demanded Arius produce a written statement on the false doctrine. It was condemned as heresy after two dissenting Bishops came forward. Arius and 11 other priests and deacons were deposed, or removed from their office, for teaching false doctrine.
              </p>
              
              <p className="mb-6">
                Arius left for Caesarea, but continued to teach his false doctrine and enlisted support from the Bishop of Nicomedia, Eusebius and other Syrian prelates. Athanasius, as Alexander's secretary, was present during the great Church debate. He may have even composed the letter that announced Arius' condemnation. Athanasius stood alongside Alexander during the famous Council of Nicaea to determine the matters of dogma.
              </p>
              
              <p className="mb-6">
                It was during this meeting, summoned by Emperor Constantine, that Arius' sentencing was officially confirmed and the Nicene Creed was adopted as the Creed of the Church and a worthy symbol of the orthodox Christian faith. The early Christian Church, still undivided, rejoiced at the defense of the true nature of Jesus Christ. To this day, Athanasius is considered the great defender of the Faith in both the Orthodox and Catholic Churches.
              </p>
              
              <p className="mb-6">
                Just five months later, Alexander died and Athanasius succeeded him after being unanimously elected. He was consecrated as the new Bishop of Alexandria in 328 and continued the fight against Arianism. In 330, Eusebius approached Emperor Constantine and convinced him to command Athanasius to allow Arians back into communion. Athanasius refused, noting the Catholic Church could not hold communion with heretics who attacked the divinity of Christ.
              </p>
              
              <p className="mb-6">
                However, Eusebius did not give up on his cause. He wrote to Athanasius trying to justify Arius and he wrote to the Egyptian Meletians in efforts to have Athanasius impeached. The Meletians charged Athanasius with the crimes of exacting a tribute of linen for use in his church, sending gold to Philomenus, treason against the emperor and authorizing one of his deputies to destroy a chalice being used at the altar by a Meletian priest. He was tried and proved his innocence on all accusations.
              </p>
              
              <p className="mb-6">
                The Arians didn't stop there though; they came forward with another charge, claiming he murdered a Meletian bishop. Athanasius was ordered to attend a council at Caesarea, but knowing the bishop was alive and in hiding, Athanasius ignored the summons. In 335, Emperor Constantine commanded Athanasius to go to the Council of Tyre, Lebanon. The council was full of Athanasius' opponents and was led by an Arian. Athanasius realized his condemnation was already pre-decided.
              </p>
              
              <p className="mb-6">
                Athanasius was exiled for the first time to Trier, Germany. While there, he kept in touch with his flock by letter. Athanasius' exile lasted for two and a half years. He returned to Alexandria in 338 to find both Emperor Constantine and Arius had died. Constantine's empire was divided between his three sons, Constantine II, Constantius and Constans.
              </p>
              
              <p className="mb-6">
                After he returned to Alexandria, his enemies continued to try to bring him to exile. They accused him of raising sedition, of promoting bloodshed, and detaining his own use of corn. Eusebius was able to obtain a second sentence of deposition against Athanasius and get the election of an Arian bishop for Alexandria approved. After this, a letter was written to Pope St. Julius asking for his intervention and a condemnation of Athanasius. The case for Athanasius was set forth, and the pope accepted the suggestion offered by Eusebius for a synod to discuss the situation.
              </p>
              
              <p className="mb-6">
                Meanwhile, a Cappadocian named Gregory was installed in Alexandria, and Athanasius went to Rome to await his hearing. Athanasius was completely vindicated by the synod, but was unable to return home to Alexandria until the death of the Cappadocian Gregory in 345. Athanasius returned to Alexandria to scenes of people rejoicing after he had been absent for eight years.
              </p>
              
              <p className="mb-6">
                However, in 353 Athanasius would face more condemnations by the Arians in the councils at Arles, France and again in 355 in Milan, Italy. Persecution continued against Athanasius and escalated to physical attacks against him. While he was celebrating a vigil Liturgy in a church in Egypt, soldiers forced their way in and killed some of the congregation. Athanasius managed to escape and hid in the desert, where a group of monks kept him safe for six years.
              </p>
              
              <p className="mb-6">
                During his years as a hermit, he wrote his Apology to Constantius, the Apology for His Flight, the Letter to the Monks, and the History of the Arians. Athanasius returned to Alexandria after the death of Constantius in 361 and the new emperor, Julian, revoked all sentences of exile enacted by his predecessor. This lasted only a few months though. Emperor Julian's plan for paganizing the Christian world couldn't get very far so long as Athanasius, the champion for Catholic faith, was around. Therefore, Julian exiled Athanasius and he once again sought refuge in the desert.
              </p>
              
              <p className="mb-6">
                He stayed there until 363 when Julian died and the next emperor, Emperor Jovian reinstalled him. Jovian's reign was a short one, and Athanasius was again banished just eight months later. Jovian's successor, Valens issued an order banning all Orthodox bishops who were exiled by Constantius. Four months later, Valens revoked his own order and Athanasius was restored permanently.
              </p>
              
              <p>
                Over the course of his life, Athanasius was banished five times and spent 17 years of his life in exile for the defense of the doctrine of Christ's divinity. However, the last years of his life were peaceful and he died on May 2, 373 in Alexandria. His body was transferred, first to Constantinople, then to Venice. St. Athanasius is often shown as a bishop arguing with a pagan, a bishop holding an open book or a bishop standing over a defeated heretic. He is a patron saint of theologians, and faithful Orthodox and Roman Catholic Christians and hailed to this day as a great Defender of the Faith. His feast day is celebrated on May 2.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Athanasius: Defender of the Faith</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Father of Orthodoxy</h3>
              <p className="mb-6">
                St. Athanasius's legacy as the "Father of Orthodoxy" stems from his unwavering defense of the true nature of Jesus Christ. His tireless opposition to Arianism, which denied Christ's divinity, preserved the fundamental Christian doctrine that Jesus is truly God. His theological writings continue to be foundational for both Catholic and Orthodox Christianity, earning him the title of Doctor of the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Champion of the Nicene Creed</h3>
              <p className="mb-6">
                St. Athanasius's role in the Council of Nicaea and his defense of the Nicene Creed established the doctrinal foundation of Christianity. His insistence on the phrase "consubstantial with the Father" (homoousios) ensured that the Church would maintain the true understanding of Christ's divinity. The Nicene Creed, which he helped formulate, remains the standard of orthodox Christian belief to this day.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Perseverance</h3>
              <p className="mb-6">
                St. Athanasius's five exiles totaling 17 years demonstrate his extraordinary perseverance in defending the truth. Despite facing persecution, false accusations, and political pressure from multiple emperors, he never compromised on matters of faith. His famous saying "Athanasius contra mundum" (Athanasius against the world) captures his solitary but steadfast defense of orthodoxy.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Theological Legacy</h3>
              <p>
                St. Athanasius's theological writings, particularly his treatise on the Incarnation, continue to influence Christian thought. His understanding of the relationship between God and humanity through Christ has shaped Christian theology for nearly 1,700 years. His biography of St. Antony also helped establish the monastic tradition in the Church.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">May 2</div>
              <p className="text-gray-600">Feast of St. Athanasius, Doctor of the Church</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Athanasius is celebrated on May 2nd, commemorating his death and his lifelong dedication to defending the true faith. This date falls during the Easter season, a fitting time to remember his defense of Christ's divinity and his role in establishing the Nicene Creed.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Ecumenical Celebrations</h3>
              <p className="mb-6">
                St. Athanasius is venerated by both the Catholic and Orthodox Churches, making his feast day a celebration of Christian unity in the truth. Theologians and scholars often mark this day with special studies of his writings and the Nicene Creed.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for theologians, for the unity of Christians, and to ask for St. Athanasius's intercession in helping us to defend the truth of our faith. Many people also pray for the grace to persevere in defending what is right, even when facing opposition.
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
                  <li>• <strong>Theologians:</strong> Those who study and teach theology</li>
                  <li>• <strong>Alexandria:</strong> The city where he served as bishop</li>
                  <li>• <strong>Orthodox Christians:</strong> Eastern Orthodox believers</li>
                  <li>• <strong>Catholic Christians:</strong> Roman Catholic believers</li>
                  <li>• <strong>Defenders of Faith:</strong> Those who defend Christian truth</li>
                  <li>• <strong>Exiles:</strong> Those forced to leave their homes</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Orthodoxy:</strong> Maintaining true Christian doctrine</li>
                  <li>• <strong>Perseverance:</strong> Standing firm in the face of opposition</li>
                  <li>• <strong>Church Unity:</strong> Working for Christian unity</li>
                  <li>• <strong>Truth:</strong> Defending what is true and right</li>
                  <li>• <strong>Heresy Opposition:</strong> Fighting against false teachings</li>
                  <li>• <strong>Bishops:</strong> Church leaders and pastors</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Athanasius</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Athanasius, Father of Orthodoxy and champion of Christ's divinity, help us to defend the true faith with courage and perseverance.
                  </p>
                  <p className="mb-4">
                    Teach us to stand firm in the face of opposition and to never compromise on matters of faith. May we, like you, be willing to suffer exile and persecution for the truth.
                  </p>
                  <p>
                    Help us to understand and proclaim the true nature of Jesus Christ, and to work for the unity of all Christians in the truth. Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Theologians</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Athanasius, patron of theologians, intercede for all those who study and teach the faith.
                  </p>
                  <p>
                    Help them to understand the truth deeply and to communicate it clearly. May they follow your example of defending orthodoxy with wisdom and courage. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Perseverance</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Athanasius, who endured five exiles for the truth, help us to persevere in defending what is right.
                  </p>
                  <p>
                    Teach us to remain steadfast in our faith even when facing opposition or persecution. May we never compromise on matters of truth and justice. Amen."
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
            <Link href="/saints/st-anthony" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Desert Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anthony
                </h3>
                <p className="text-gray-700 text-sm">
                  The desert monk whose biography was written by St. Athanasius.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-nicholas" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Council Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Nicholas
                </h3>
                <p className="text-gray-700 text-sm">
                  Another defender of orthodoxy at the Council of Nicaea.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-hilary" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Hilary
                </h3>
                <p className="text-gray-700 text-sm">
                  Another Doctor of the Church who fought against Arianism.
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