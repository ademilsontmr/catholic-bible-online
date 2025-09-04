import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Mary the Virgin - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Mary the Virgin, Mother of God and Queen of Heaven.',
  keywords: [
    'st mary virgin',
    'blessed virgin mary',
    'mother of god',
    'queen of heaven',
    'catholic saints',
    'marian saints',
    'assumption feast day'
  ],
  openGraph: {
    title: 'St. Mary the Virgin - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Mary the Virgin, Mother of God and Queen of Heaven.',
    url: 'https://catholicbibleonline.com/saints/st-mary-virgin',
  },
  twitter: {
    title: 'St. Mary the Virgin - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Mary the Virgin, Mother of God and Queen of Heaven.',
  }
}

export default function StMaryVirginPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Mary the Virgin
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Mother of God and Queen of Heaven
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Mary the Virgin</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 15</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Marian Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Mary the Virgin</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Mary the Virgin, also known as the Blessed Virgin Mary, Saint Mary, 
                Mary Mother of God, or the Virgin Mary, is believed by many to be the 
                greatest of all Christian saints. The Virgin Mother "was, after her Son, 
                exalted by divine grace above all angels and men." Mary is venerated with 
                a special cult, called by St. Thomas Aquinas, hyperdulia, as the holiest 
                of all creatures. The main events of her life are celebrated as liturgical 
                feasts of the universal Church. Mary's life and role in the history of 
                salvation is foreshadowed in the Old Testament, while the events of her 
                life are recorded in the New Testament. Traditionally, she was declared 
                the daughter of Sts. Joachim and Anne, born in Jerusalem, where she was 
                presented in the Temple and took a vow of virginity.
              </p>
              
              <p className="mb-6">
                Living in Nazareth, Mary was visited by the archangel Gabriel, who announced 
                to her that she would become the Mother of Jesus, by the Holy Spirit. 
                This momentous event, known as the Annunciation, marked the beginning 
                of Mary's unique role in salvation history. She became betrothed to St. 
                Joseph and went to visit her cousin, Elizabeth, who was bearing St. John 
                the Baptist. Acknowledged by Elizabeth as the Mother of God, Mary intoned 
                the Magnificat, her beautiful hymn of praise to God. When Emperor Augustus 
                declared a census throughout the vast Roman Empire, Mary and St. Joseph 
                went to Bethlehem, his city of lineage, as he belonged to the House of 
                David. There Mary gave birth to Jesus in a humble stable, and was visited 
                by the Three Kings, who recognized the divine nature of her child.
              </p>
              
              <p className="mb-6">
                Mary and Joseph presented Jesus in the Temple, where St. Simeon rejoiced 
                and Mary received word of sorrows to come later. Warned to flee, St. Joseph 
                and Mary went to Egypt to escape the wrath of King Herod. They remained 
                in Egypt until King Herod died and then returned to Nazareth. Nothing 
                is known of Mary's life during the next years except for a visit to the 
                Temple of Jerusalem, at which time Mary and Joseph sought the young Jesus, 
                who was in the Temple with the learned elders. The first recorded miracle 
                of Jesus was performed at a wedding in Cana, and Mary was instrumental 
                in calling Christ's attention to the need, demonstrating her role as 
                intercessor for humanity.
              </p>
              
              <p className="mb-6">
                Mary was present at the Crucifixion in Jerusalem, and there she was given 
                into John the Apostle's care. She was also with the disciples in the 
                days before the Pentecost, and it is believed that she was present at 
                the resurrection and Ascension. No scriptural reference concerns Mary's 
                last years on earth. According to tradition, she went to Ephesus, where 
                she experienced her "dormition." Another tradition states that she remained 
                in Jerusalem. The belief that Mary's body was assumed into heaven is 
                one of the oldest traditions of the Catholic Church. Pope Pius XII declared 
                this belief Catholic dogma in 1950, proclaiming that "the Virgin Mary 
                having completed the course of her earthly life, was assumed body and 
                soul into heavenly glory."
              </p>
              
              <p>
                The four Catholic dogmas concerning Mary are: Mother of God, Perpetual 
                virginity of Mary, the Immaculate Conception and Assumption of Mary. 
                In 1854, Pope Pius IX proclaimed the dogma of the Immaculate Conception 
                - that Mary, as the Mother of the Second Person of the Holy Trinity, 
                was free of original sin at the moment of her conception. The feast of 
                the Immaculate Conception is celebrated on December 8, while the feast 
                of the Assumption is celebrated on August 15. The birthday of Mary is 
                an old feast in the Church, celebrated on September 8, since the seventh 
                century. Pope Pius XII dedicated the entire human race to Mary in 1944, 
                recognizing her as the spiritual mother of all humanity and the Mediatrix 
                of All Graces.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Mary the Virgin: Queen of Heaven</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Mother of God and Queen of Heaven</h3>
              <p className="mb-6">
                St. Mary's designation as the Mother of God and Queen of Heaven recognizes 
                her unique role in salvation history and her exalted position in the 
                heavenly hierarchy. As Pope Pius XII expressed it in a 1946 radio speech, 
                "Jesus is King throughout all eternity by nature and by right of conquest: 
                through him, with him, and subordinate to him, Mary is Queen by grace, 
                by divine relationship, by right of conquest, and by singular election." 
                Mary possesses a unique relationship with all three Persons of the Trinity, 
                thereby giving her a claim to the title of Queenship. She was chosen by 
                God the Father to be the Mother of his Son; God the Holy Spirit chose 
                her to be his virginal spouse for the Incarnation of the Son; and God 
                the Son chose her to be his mother, the means of incarnating into the 
                world for the purposes of the redemption of humanity. This Queen is also 
                our Mother, conceiving, giving birth, and nurturing the spiritual lives 
                of grace for each person.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Mediatrix of All Graces</h3>
              <p className="mb-6">
                Mary's role as Mediatrix of All Graces is central to her legacy and 
                her ongoing intercession for humanity. As Pope Pius IX expressed in 
                the encyclical Ubipriinum: "The foundation of all our confidence. . . 
                is found in the Blessed Virgin Mary. For God has committed to Mary the 
                treasury of all good things, in order that everyone may know that through 
                her are obtained every hope, every grace, and all salvation. For this 
                is his will, that we obtain everything through Mary." Mary is ever present 
                at the side of each person, giving nourishment and hope, from the moment 
                of spiritual birth at Baptism to the moment of death. Her role as intercessor 
                was demonstrated at the wedding at Cana, where she brought the needs 
                of the people to her Son, and continues to this day as she brings our 
                prayers and petitions before the throne of God. Mary's confidence in 
                God's mercy and her willingness to intercede for us make her a powerful 
                advocate and a source of hope for all who turn to her in prayer.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Faith and Obedience</h3>
              <p>
                St. Mary's life serves as a powerful example of faith, obedience, and 
                complete surrender to God's will. Her response to the angel Gabriel, 
                "Behold, I am the handmaid of the Lord; let it be done to me according 
                to your word," demonstrates her perfect obedience and trust in God's 
                plan. Mary's acceptance of Christ into her womb, her offering of him 
                to God at the Temple, her urging him to perform his first miracle, and 
                her standing at the foot of the Cross at Calvary show her complete participation 
                in Christ's salvific mission. As Pope Benedict XV wrote in 1918: "To 
                such an extent did Mary suffer and almost die with her suffering and 
                dying Son; to such extent did she surrender her maternal rights over 
                her Son for man's salvation, and immolated him - insofar as she could 
                in order to appease the justice of God, that we might rightly say she 
                redeemed the human race together with Christ." Mary's example encourages 
                us to trust in God's plan for our lives and to be willing to make sacrifices 
                for the good of others, following her example of selfless love and service.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">August 15</div>
              <p className="text-gray-600">Feast of the Assumption of the Blessed Virgin Mary</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of the Assumption of the Blessed Virgin Mary is celebrated 
                on August 15th, during the summer season when the Church reflects on 
                the themes of harvest and fulfillment. This feast is celebrated as a 
                solemnity in the Roman Catholic Church, recognizing Mary's importance 
                as the Mother of God and her unique role in salvation history. The feast 
                commemorates the bodily taking up of the Virgin Mary into Heaven at 
                the end of her earthly life, as proclaimed by Pope Pius XII in 1950. 
                The feast falls during a time when many people are enjoying the fruits 
                of summer, making it an ideal time to remember Mary's role as the first 
                fruits of the resurrection and her example of complete trust in God's 
                promises. The feast provides an opportunity to honor Mary's memory and 
                to reflect on our own hope for eternal life with God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of the Assumption, many people participate in special 
                prayers and devotions to honor Mary and seek her intercession. Churches 
                hold special Masses and services, with many parishes holding processions 
                and special celebrations. Many people gather to pray the Rosary and 
                other Marian devotions, asking for Mary's intercession in their lives. 
                The day is also marked by prayers for the Church and for all humanity, 
                asking for Mary's protection and guidance. Many people also take time 
                to reflect on their own relationship with Mary and to pray for the 
                grace to follow her example of faith and obedience. The feast is also 
                a time to reflect on how we can incorporate Mary's virtues of humility, 
                obedience, and love into our daily lives, following her example as the 
                perfect disciple of Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of trust in 
                God's plan and the ability to surrender our will to His divine purpose. 
                Many people make special petitions for Mary's intercession in their 
                lives and for the grace to follow her example of faith and obedience. 
                The day is also a time to reflect on our own hope for eternal life and 
                to pray for the grace to live our lives in a way that prepares us for 
                heaven. Mary's feast day encourages us to remember that we are all called 
                to be saints and that we have a powerful advocate in heaven who is always 
                ready to intercede for us. It is also a time to pray for the grace to 
                be more like Mary in our daily lives, showing the same trust, obedience, 
                and love that she demonstrated throughout her life.
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
                  <li>• <strong>All Humanity:</strong> Patroness of all humanity</li>
                  <li>• <strong>Mothers:</strong> Patron of mothers</li>
                  <li>• <strong>Families:</strong> Patron of families</li>
                  <li>• <strong>Purity:</strong> Patron of purity</li>
                  <li>• <strong>Obedience:</strong> Patron of obedience</li>
                  <li>• <strong>Faith:</strong> Patron of faith</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Prayer:</strong> Helper in prayer life</li>
                  <li>• <strong>Intercession:</strong> Mediatrix of all graces</li>
                  <li>• <strong>Protection:</strong> Helper in protection</li>
                  <li>• <strong>Conversion:</strong> Patron of conversion</li>
                  <li>• <strong>Peace:</strong> Queen of Peace</li>
                  <li>• <strong>Salvation:</strong> Helper in salvation</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Hail Mary</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Hail Mary, full of grace, the Lord is with thee.
                  </p>
                  <p className="mb-4">
                    Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus.
                  </p>
                  <p>
                    Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to Our Lady</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed Virgin Mary, Mother of God and Queen of Heaven, intercede 
                    for us with your Son, Jesus Christ.
                  </p>
                  <p>
                    Help us to follow your example of faith, obedience, and love. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "Mary, Mother of God, pray for us!"
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
            <Link href="/saints/st-joseph" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joseph
                </h3>
                <p className="text-gray-700 text-sm">
                  Husband of Mary and foster father of Jesus.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-anne" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anne
                </h3>
                <p className="text-gray-700 text-sm">
                  Mother of the Blessed Virgin Mary.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joachim" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joachim
                </h3>
                <p className="text-gray-700 text-sm">
                  Father of the Blessed Virgin Mary.
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