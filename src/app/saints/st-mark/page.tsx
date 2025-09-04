import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Mark - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Mark, evangelist and patron of Venice.',
  keywords: [
    'st mark',
    'saint mark',
    'mark the evangelist',
    'april 25 feast day',
    'catholic saints',
    'apostle saints',
    'patron of venice'
  ],
  openGraph: {
    title: 'St. Mark - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Mark, evangelist and patron of Venice.',
    url: 'https://catholicbibleonline.com/saints/st-mark',
  },
  twitter: {
    title: 'St. Mark - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Mark, evangelist and patron of Venice.',
  }
}

export default function StMarkPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🦁</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Mark
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            The Evangelist and Companion of St. Peter
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Mark</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">April 25</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🦁</div>
              <div className="text-sm text-gray-600">Apostle Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Mark</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Mark, also known as John Mark, was one of the four evangelists 
                and the author of the Gospel of Mark. He was born in Jerusalem 
                and was the son of a woman named Mary, whose house was a meeting 
                place for the early Christians. Mark was a cousin of St. Barnabas 
                and was likely introduced to Christianity through his family's 
                connection to the apostles. His mother's house in Jerusalem 
                was where the disciples gathered after the Ascension of Jesus, 
                and it was there that Peter went after his miraculous release 
                from prison.
              </p>
              
              <p className="mb-6">
                Mark's relationship with St. Peter was particularly significant. 
                He became Peter's companion and interpreter, traveling with him 
                to Rome where he served as his secretary and translator. It was 
                during this time that Mark wrote his Gospel, which is considered 
                to be the earliest of the four Gospels. Mark's Gospel is unique 
                in its brevity and directness, focusing on the actions of Jesus 
                rather than his teachings. It emphasizes Jesus as the suffering 
                servant and the Son of God who came to serve and give his life 
                as a ransom for many.
              </p>
              
              <p className="mb-6">
                Mark's missionary work took him to various parts of the Roman 
                Empire. He accompanied St. Paul and St. Barnabas on their first 
                missionary journey to Cyprus, but he left them at Perga in Pamphylia 
                and returned to Jerusalem. This decision caused a disagreement 
                between Paul and Barnabas, as Paul did not want to take Mark 
                on their second journey. However, Mark later reconciled with 
                Paul and became a valuable companion in his ministry. Paul mentions 
                Mark favorably in his letters, calling him a "fellow worker" 
                and asking for him to be sent to him in prison.
              </p>
              
              <p className="mb-6">
                According to tradition, Mark later traveled to Alexandria in 
                Egypt, where he founded the Church and became its first bishop. 
                He is credited with establishing Christianity in Egypt and is 
                considered the founder of the Coptic Church. Mark's ministry 
                in Alexandria was marked by his preaching, teaching, and the 
                performance of miracles. He converted many pagans to Christianity 
                and established a strong Christian community in the city.
              </p>
              
              <p className="mb-6">
                Mark's death is traditionally believed to have occurred in Alexandria 
                around the year 68 AD. According to legend, he was martyred 
                by being dragged through the streets of Alexandria with a rope 
                around his neck. His body was initially buried in Alexandria, 
                but in the 9th century, Venetian merchants stole his remains 
                and brought them to Venice, where they are now enshrined in 
                the magnificent Basilica of St. Mark. This act made Mark the 
                patron saint of Venice, and his symbol, the winged lion, became 
                the symbol of the city.
              </p>
              
              <p className="mb-6">
                Mark's Gospel is characterized by its vivid, action-oriented 
                narrative style. It is the shortest of the four Gospels and 
                focuses on Jesus' deeds rather than his words. Mark emphasizes 
                Jesus' humanity and his suffering, presenting him as the suffering 
                servant who came to serve and give his life for others. The 
                Gospel begins with the ministry of John the Baptist and ends 
                with the discovery of the empty tomb, though the original ending 
                may have been lost. Mark's account is particularly important 
                for its emphasis on the messianic secret and the gradual revelation 
                of Jesus' identity as the Son of God.
              </p>
              
              <p>
                St. Mark's legacy extends beyond his Gospel to his role in 
                establishing the Church in Alexandria and his influence on the 
                development of Christianity in Egypt. He is venerated as a saint 
                in the Catholic, Orthodox, and Anglican Churches, and his feast 
                day is celebrated on April 25th. Mark's symbol, the winged lion, 
                represents his role as an evangelist and his connection to the 
                city of Venice, where his remains are now enshrined. His life 
                and work continue to inspire Christians around the world to 
                follow Jesus' example of service and sacrifice.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Mark: The Evangelist</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Author of the First Gospel</h3>
              <p className="mb-6">
                St. Mark's most profound legacy is his authorship of the Gospel 
                of Mark, which is widely considered to be the earliest of the 
                four canonical Gospels. His Gospel provides a unique perspective 
                on the life and ministry of Jesus, emphasizing action over words 
                and presenting Jesus as the suffering servant who came to serve 
                and give his life as a ransom for many. Mark's narrative style 
                is vivid and direct, focusing on Jesus' deeds and miracles rather 
                than his lengthy discourses. This approach makes his Gospel 
                particularly accessible and engaging for readers who want to 
                understand what Jesus did rather than just what he said. Mark's 
                emphasis on the messianic secret and the gradual revelation 
                of Jesus' identity as the Son of God has influenced Christian 
                theology and understanding of Jesus' ministry for centuries. 
                His Gospel continues to be a primary source for understanding 
                the historical Jesus and his mission.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Founder of the Church in Alexandria</h3>
              <p className="mb-6">
                St. Mark's missionary work in Alexandria, Egypt, established 
                one of the most important centers of early Christianity. As 
                the first bishop of Alexandria, Mark laid the foundation for 
                what would become the Coptic Church, one of the oldest Christian 
                traditions in the world. His ministry in Alexandria was marked 
                by his preaching, teaching, and the performance of miracles, 
                which converted many pagans to Christianity. The Church he 
                founded in Alexandria became a center of learning and theological 
                development, producing many important Christian thinkers and 
                leaders throughout the centuries. Mark's establishment of the 
                Church in Egypt demonstrates the universal nature of Christianity 
                and its ability to take root in diverse cultural contexts. His 
                legacy in Alexandria continues to inspire Christians in Egypt 
                and around the world to maintain their faith despite persecution 
                and challenges.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Service and Sacrifice</h3>
              <p>
                St. Mark's life exemplifies the Christian virtues of service, 
                sacrifice, and perseverance. His willingness to serve as Peter's 
                companion and interpreter, despite the challenges and dangers 
                of missionary work, demonstrates his commitment to spreading 
                the Gospel. Mark's reconciliation with Paul after their initial 
                disagreement shows his humility and willingness to forgive and 
                be forgiven. His martyrdom in Alexandria, where he was dragged 
                through the streets and killed for his faith, exemplifies the 
                ultimate sacrifice that many early Christians made for their 
                belief in Jesus Christ. Mark's example challenges modern Christians 
                to examine their own commitment to the Gospel and their willingness 
                to serve others, even when it involves sacrifice or difficulty. 
                His life reminds us that true discipleship involves not just 
                believing in Jesus, but following his example of service and 
                love for others.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">April 25</div>
              <p className="text-gray-600">Feast of St. Mark the Evangelist</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Mark the Evangelist is celebrated on April 
                25th, during the spring season when nature awakens and new 
                life begins—a fitting time to honor the evangelist who proclaimed 
                the new life found in Christ. This feast is celebrated as a 
                feast in the Roman Catholic Church, recognizing Mark's importance 
                as one of the four evangelists and the author of the earliest 
                Gospel. The feast falls during the Easter season, a time when 
                the Church celebrates the resurrection of Christ and the new 
                life He offers to all believers. This timing makes it an ideal 
                moment to remember Mark's emphasis on Jesus as the suffering 
                servant who gave his life for others and was raised to new 
                life. The feast provides an opportunity to honor Mark's memory 
                and to reflect on how we can better proclaim the Gospel in 
                our own lives and communities.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Mark the Evangelist, many people participate 
                in special prayers and devotions to honor his memory and seek 
                his intercession. Churches, particularly those dedicated to 
                St. Mark or located in Venice, hold special Masses and services. 
                In Venice, the feast is celebrated with great solemnity, as 
                St. Mark is the patron saint of the city. The famous Basilica 
                of St. Mark hosts special services, and the city celebrates 
                with processions and festivities. Many Christians also take 
                time to read from the Gospel of Mark on this day, reflecting 
                on his unique perspective on the life and ministry of Jesus. 
                The day is also marked by prayers for evangelists, missionaries, 
                and all those who work to spread the Gospel, asking for Mark's 
                intercession in helping them to proclaim the Good News effectively. 
                Many people also reflect on their own role in evangelization 
                and pray for the courage and wisdom to share their faith with 
                others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of 
                evangelization and the courage to proclaim the Gospel in word 
                and deed. Many people make special petitions for missionaries 
                and evangelists, asking for St. Mark's intercession in helping 
                them to spread the Good News effectively and courageously. The 
                day is also a time to reflect on the importance of service 
                and sacrifice in the Christian life and to pray for the grace 
                to follow Jesus' example of self-giving love. St. Mark's feast 
                day encourages us to remember that we are all called to be 
                evangelists in our own way, sharing the love of Christ with 
                those around us through our words and actions. It is also a 
                time to pray for the grace to be faithful to our commitments 
                and to persevere in our faith, even when faced with difficulties 
                or opposition. The feast reminds us that the Gospel is meant 
                to be shared and that each of us has a role to play in bringing 
                others to Christ.
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
                  <li>• <strong>Venice:</strong> Patron of Venice, Italy</li>
                  <li>• <strong>Egypt:</strong> Patron of Egypt</li>
                  <li>• <strong>Notaries:</strong> Patron of notaries</li>
                  <li>• <strong>Barristers:</strong> Patron of barristers</li>
                  <li>• <strong>Opticians:</strong> Patron of opticians</li>
                  <li>• <strong>Glassblowers:</strong> Patron of glassblowers</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Evangelization:</strong> Helper in spreading the Gospel</li>
                  <li>• <strong>Missionaries:</strong> Patron of missionaries</li>
                  <li>• <strong>Writers:</strong> Helper of writers</li>
                  <li>• <strong>Translators:</strong> Patron of translators</li>
                  <li>• <strong>Reconciliation:</strong> Helper in forgiveness</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Mark</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Glorious St. Mark, evangelist and companion of St. Peter, 
                    help me to proclaim the Gospel with courage and clarity.
                  </p>
                  <p className="mb-4">
                    Intercede for me that I may be a faithful witness to Christ 
                    in word and deed, serving others with love and humility. 
                    Help me to follow Jesus' example of self-giving love.
                  </p>
                  <p>
                    St. Mark, pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Evangelists</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Mark, patron of evangelists, intercede for all missionaries 
                    and evangelists that they may proclaim the Good News effectively.
                  </p>
                  <p>
                    Help them to be faithful witnesses to Christ and to bring 
                    many souls to the knowledge of God's love. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Mark, evangelist, pray for us!"
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
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peter
                </h3>
                <p className="text-gray-700 text-sm">
                  First Pope and Mark's companion in Rome.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-paul" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Paul
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle to the Gentiles and Mark's missionary companion.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-luke" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Luke
                </h3>
                <p className="text-gray-700 text-sm">
                  Evangelist and beloved physician.
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