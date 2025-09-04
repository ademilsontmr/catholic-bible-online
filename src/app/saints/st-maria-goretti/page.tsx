import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Maria Goretti - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Maria Goretti, martyr of purity.',
  keywords: [
    'st maria goretti',
    'saint maria goretti',
    'martyr of purity',
    'july 6 feast day',
    'catholic saints',
    'modern saints',
    'patron of youth'
  ],
  openGraph: {
    title: 'St. Maria Goretti - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Maria Goretti, martyr of purity.',
    url: 'https://catholicbibleonline.com/saints/st-maria-goretti',
  },
  twitter: {
    title: 'St. Maria Goretti - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Maria Goretti, martyr of purity.',
  }
}

export default function StMariaGorettiPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌸</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Maria Goretti
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Martyr of Purity and Patron of Youth
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Maria Goretti</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 6</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌸</div>
              <div className="text-sm text-gray-600">Modern Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Maria Goretti</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Born on October 16, 1890 in Corinaldo, in the Ancona Province in Italy, 
                her farmworker father moved his family to Ferrier di Conca, near Anzio. 
                When he died of malaria, Maria's mother had to struggle to feed her children. 
                Maria's mother, brothers, and sisters worked in the fields while she cooked, 
                sewed, kept the house clean, and watched her youngest sister Teresa. Though 
                the family's circumstances were extremely difficult, they were very close 
                and loved God. Despite the poverty and hardship they faced, the Goretti 
                family maintained a strong faith and a deep love for one another, creating 
                a home filled with love and devotion to God even in the midst of their 
                struggles.
              </p>
              
              <p className="mb-6">
                On July 5, 1902, Maria was sitting outside the steps of her home sewing 
                her 18-year-old brother or neighbor - it is unclear which - Alessandro's 
                shirt while he threshed beans in the barnyard. As she concentrated on her 
                sewing, Alessandro surprised her and grabbed her from her steps. When he 
                tried to rape her, Maria cried that it was a mortal sin and warned he would 
                go to hell. When Alessandro persisted, she fought him and screamed, "No! 
                It is a sin! God does not want it!" At her words, Alessandro began to 
                choke her and she said she would rather die than submit. Upon hearing her 
                words, Alessandro pulled out a knife and stabbed her eleven times. When 
                she attempted to reach the door, he stabbed her three more times then fled. 
                Maria's courageous defense of her purity, even at the cost of her life, 
                demonstrated her deep understanding of the sacredness of human dignity 
                and her unwavering commitment to God's law.
              </p>
              
              <p className="mb-6">
                Teresa woke to the sounds of her sister's cries and began to cry. Maria's 
                family returned home and found her bleeding on the floor. They quickly 
                took her to the nearest hospital in Nettuno, where she underwent surgery 
                without anesthesia. Unfortunately, her wounds were beyond the surgeon's 
                ability to help. Halfway through the surgery, the man asked her, "Maria, 
                think of me in Paradise." As she lay on the table, she looked up at him 
                and said, "Well, who knows which of us is going to be there first?" She 
                did not realize how terrible her situation was, and the surgeon replied, 
                "You, Maria." She said, "Then I will think gladly of you." She also mentioned 
                concerns for her mother. The next day, Maria forgave Alessandro and said 
                she wanted to see him in Heaven with her. She died that day while looking 
                upon an image of the Virgin Mary and holding a cross to her chest. Maria's 
                extraordinary act of forgiveness, even in the face of such terrible suffering, 
                demonstrated her deep faith and her understanding of the power of forgiveness 
                and redemption.
              </p>
              
              <p className="mb-6">
                Shortly after Maria's family discovered her, Alessandro was captured and 
                questioned. He admitted Maria was a physical virgin as he was unable to 
                assault her and he was sentenced to thirty years. He also admitted he had 
                attempted to persuade her to accompany him to bed on several occasions 
                in the past and had attempted to rape her before. Alessandro remained 
                unrepentant for his actions until he had a dream that he was in a garden. 
                Maria was there and gave him lilies, which immediately burned in his hands. 
                When he woke, he was a changed man. He repented his crime and lived a reformed 
                life. When he was released 27 years later, he went directly to Maria's 
                mother and begged her forgiveness, which she gave, saying, "If my daughter 
                can forgive him, who am I to withhold forgiveness?" This miraculous conversion 
                of Alessandro, brought about through Maria's forgiveness and intercession, 
                became one of the most powerful testimonies to the transformative power 
                of forgiveness and God's mercy.
              </p>
              
              <p>
                Maria Goretti was beatified by Pope Pius XII in a ceremony at Saint Peter's 
                Basilica on April 27, 1947. Three years later, on June 24, 1950, Maria 
                was declared a saint and Alessandro was present in the St. Peter's crowd 
                to celebrate her canonization. He later became a laybrother of the Order 
                of Friars Minor Capuchin, where he lived in a monastery and worked as 
                its receptionist and gardener until his death. Saint Maria is called a 
                martyr because she fought against Alessandro's attempts at sexual sin; 
                however, the most important aspects of her story are how she forgave her 
                attacker - her concern for her enemy extending even beyond death - and 
                the miracle her forgiveness produced in his life. Saint Maria's body can 
                be found in the crypt of the Basilica of Nostra Signora delle Grazie e 
                Santa Maria Goretti in Nettuno. Images of Saint Maria often represent 
                her with wavy hair dressed in either white or farm clothes and is often 
                depicted holding lilies, symbolizing her purity and the miraculous conversion 
                of her attacker.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Maria Goretti: Martyr of Purity</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Martyr of Purity</h3>
              <p className="mb-6">
                St. Maria Goretti's most enduring legacy is her courageous defense of 
                purity and human dignity, even at the cost of her life. Her martyrdom 
                at the age of eleven demonstrates that holiness and spiritual maturity 
                are not limited by age, and that even the youngest among us can achieve 
                great sanctity through their love for God and their commitment to His 
                law. Maria's willingness to die rather than submit to sin shows her deep 
                understanding of the sacredness of human dignity and the importance of 
                maintaining purity of heart and body. Her example is particularly relevant 
                in today's world, where young people are often pressured to compromise 
                their values and beliefs. Maria's courage in standing up for what is right, 
                even when it meant facing death, shows young people that they too can 
                be strong in their convictions and faithful to God, even when it means 
                going against popular opinion or facing great danger. Maria's legacy 
                encourages young people to take their faith seriously and to be willing 
                to make sacrifices for what they believe in.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Forgiveness</h3>
              <p className="mb-6">
                Perhaps the most remarkable aspect of St. Maria Goretti's story is her 
                extraordinary act of forgiveness toward her attacker. Even as she lay 
                dying from the wounds he inflicted, Maria forgave Alessandro and expressed 
                her desire to see him in Heaven. This act of forgiveness, which extended 
                even beyond death, demonstrates Maria's deep understanding of the power 
                of forgiveness and God's mercy. The miraculous conversion of Alessandro, 
                who went from being an unrepentant criminal to a devout laybrother, is 
                a powerful testimony to the transformative power of forgiveness and the 
                intercession of the saints. Maria's example encourages us to forgive 
                those who have wronged us, even when the wrong is great, and to trust 
                in God's power to bring good out of evil. Her legacy reminds us that 
                forgiveness is not a sign of weakness, but rather a sign of great spiritual 
                strength and trust in God's plan.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Youth and Families</h3>
              <p>
                St. Maria Goretti's designation as the patroness of youth, children, 
                and families recognizes her powerful example of faith and courage at 
                a young age. Her life shows that young people can achieve great holiness 
                and can be powerful witnesses to Christ, even in the most difficult circumstances. 
                Maria's example is particularly inspiring for families who are struggling 
                with poverty or other challenges, as she shows that love for God and 
                one another can flourish even in the most difficult circumstances. Her 
                story also reminds parents of the importance of teaching their children 
                about faith, purity, and the value of human dignity. Maria's legacy encourages 
                families to remain close to God and to one another, even when facing 
                great difficulties, and to trust in God's providence and mercy. Her example 
                also reminds us that every person, regardless of their age or circumstances, 
                is called to holiness and can achieve great things through their love 
                for God.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">July 6</div>
              <p className="text-gray-600">Feast of St. Maria Goretti</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Maria Goretti is celebrated on July 6th, during the 
                summer season when the Church reflects on the themes of growth and harvest. 
                This feast is celebrated as a memorial in the Roman Catholic Church, 
                recognizing Maria's importance as a martyr of purity and her powerful 
                example of forgiveness and courage. The feast falls during a time when 
                many young people are on vacation and may be more open to spiritual 
                reflection, making it an ideal time to remember Maria's example of courage 
                and fidelity to Christ. The feast provides an opportunity to honor Maria's 
                memory and to reflect on the importance of maintaining purity and forgiveness 
                in our own lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Maria Goretti, many people participate in special 
                prayers and devotions to honor her memory and seek her intercession. 
                Churches, particularly those with youth groups or families, hold special 
                Masses and services. Many young people and families gather to pray for 
                the gift of purity and the courage to stand up for what is right. The 
                day is also marked by prayers for forgiveness and reconciliation, asking 
                for St. Maria's intercession in helping us to forgive those who have 
                wronged us and to seek forgiveness for our own sins. Many people also 
                take time to reflect on the importance of protecting human dignity and 
                to pray for the grace to be faithful witnesses to Christ in all circumstances. 
                The feast is also a time to reflect on how we can incorporate Maria's 
                virtues of courage, purity, and forgiveness into our daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of courage and 
                the ability to stand up for what is right, even when it is difficult. 
                Many people make special petitions for young people and for the strength 
                to maintain purity of heart and mind, asking for St. Maria's intercession 
                in helping them to be faithful to God. The day is also a time to reflect 
                on the importance of forgiveness and to pray for the grace to forgive 
                those who have wronged us, following Maria's example. St. Maria's feast 
                day encourages us to remember that we are all called to be saints, regardless 
                of our age, and that we can achieve great holiness through our love for 
                God and our willingness to make sacrifices for Him. It is also a time 
                to pray for the grace to protect human dignity and to be courageous witnesses 
                to Christ in all circumstances.
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
                  <li>• <strong>Youth:</strong> Patroness of youth</li>
                  <li>• <strong>Children:</strong> Patron of children</li>
                  <li>• <strong>Purity:</strong> Patron of purity</li>
                  <li>• <strong>Forgiveness:</strong> Patron of forgiveness</li>
                  <li>• <strong>Families:</strong> Patron of families</li>
                  <li>• <strong>Victims:</strong> Patron of victims of violence</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Prayer:</strong> Helper in prayer life</li>
                  <li>• <strong>Courage:</strong> Patron of courage</li>
                  <li>• <strong>Martyrdom:</strong> Patron of martyrs</li>
                  <li>• <strong>Reconciliation:</strong> Helper in reconciliation</li>
                  <li>• <strong>Protection:</strong> Patron of protection</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Maria Goretti</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Maria Goretti, martyr of purity, help me to have courage 
                    in defending what is right and holy.
                  </p>
                  <p className="mb-4">
                    Teach me to forgive those who have wronged me and to trust in God's 
                    mercy. Help me to maintain purity of heart and mind and to be a 
                    faithful witness to Christ in all circumstances.
                  </p>
                  <p>
                    St. Maria, pray for me that I may have the courage to stand up for 
                    what is right, the grace to forgive others, and the strength to 
                    remain pure in heart and mind. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Youth</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Maria Goretti, patroness of youth, intercede for all young 
                    people who are struggling to remain pure and faithful to Christ.
                  </p>
                  <p>
                    Help them to have the courage to stand up for what is right and 
                    to never compromise their values. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Maria Goretti, pray for us!"
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

            <Link href="/saints/st-philomena" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Philomena
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and patron of youth.
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