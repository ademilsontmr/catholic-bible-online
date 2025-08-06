import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Alexander - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Alexander, Bishop and Martyr who suffered persecution under Severus and Decius, known for his theological library and mildness.',
  keywords: [
    'st alexander',
    'saint alexander',
    'st alexander biography',
    'st alexander feast day',
    'st alexander patron saint',
    'catholic saints',
    'bishop martyr',
    'jerusalem bishop'
  ],
  openGraph: {
    title: 'St. Alexander - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Alexander, Bishop and Martyr who suffered persecution under Severus and Decius, known for his theological library and mildness.',
    url: 'https://catholicbibleonline.com/saints/st-alexander',
  },
  twitter: {
    title: 'St. Alexander - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Alexander, Bishop and Martyr who suffered persecution under Severus and Decius, known for his theological library and mildness.',
  }
}

export default function StAlexanderPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Alexander
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Bishop and Martyr
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Alexander</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">March 18</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📚</div>
              <div className="text-sm text-gray-600">Bishop & Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Alexander</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Alexander was a remarkable figure in the early Church, whose life exemplifies 
                the perfect combination of intellectual brilliance, pastoral leadership, and courageous 
                witness to the faith. His story spans the turbulent period of the late second and 
                early third centuries, when the Church faced multiple waves of persecution and was 
                still establishing its theological and organizational foundations. Alexander's life 
                demonstrates how learning, leadership, and martyrdom can come together in a single 
                person to serve the cause of Christ.
              </p>
              
              <p className="mb-6">
                Alexander's intellectual journey began at the famous Christian school of Alexandria, 
                where he was a student alongside the renowned theologian Origen. This school was one 
                of the most important centers of Christian learning in the ancient world, where the 
                faith was studied systematically and defended against pagan philosophy. Alexander's 
                time at this institution would have exposed him to the highest levels of theological 
                education and prepared him for the intellectual challenges that lay ahead in his 
                ministry. His association with Origen, one of the most brilliant minds in Christian 
                history, would have been particularly formative for his own theological development.
              </p>
              
              <p className="mb-6">
                After completing his studies, Alexander was appointed bishop of Cappadocia, a region 
                in Asia Minor that was home to a significant Christian community. This appointment 
                came during a period of relative peace for the Church, but this peace would be 
                shattered by the persecution initiated by Emperor Severus. In the year 204, Alexander 
                was arrested and imprisoned for his Christian faith, beginning a period of suffering 
                that would last for seven years until 211. This imprisonment was not merely a matter 
                of confinement; it was a time of physical hardship, psychological pressure, and 
                constant threat of execution. Yet Alexander remained steadfast in his faith, using 
                this time of trial to strengthen his spiritual life and prepare for whatever lay ahead.
              </p>
              
              <p className="mb-6">
                Following his release from prison in 211, Alexander made a pilgrimage to Jerusalem, 
                the holy city where Christ had suffered and died. This journey was not merely a 
                personal devotion but a significant step in his ecclesiastical career. In the year 
                212, he was proclaimed coadjutor bishop of Jerusalem, sharing in the pastoral care 
                of the most important see in Christendom. This appointment placed him at the center 
                of the Church's life and gave him a platform to influence the development of Christian 
                theology and practice throughout the Roman Empire.
              </p>
              
              <p className="mb-6">
                However, Alexander's ministry in Jerusalem was not without controversy. His relationship 
                with Origen, his former classmate, became a source of tension with Demetrius, the 
                bishop of Alexandria. Demetrius censured Alexander for participating in the ordination 
                of Origen and for encouraging Origen to teach in churches while still a layman. This 
                controversy reflects the complex nature of ecclesiastical relationships in the early 
                Church, where questions of authority, jurisdiction, and theological orthodoxy were 
                still being worked out. Despite the criticism from Demetrius, Alexander remained 
                loyal to his friend and colleague, receiving Origen in exile and continuing to support 
                his theological work.
              </p>
              
              <p className="mb-6">
                One of Alexander's most significant contributions to the Church was his development 
                of a great theological library in Jerusalem. This library would have contained not 
                only Christian texts but also works of philosophy, history, and other disciplines 
                that were relevant to the defense and explanation of the Christian faith. In an age 
                when books were expensive and rare, such a library was a tremendous resource for 
                the Church and would have attracted scholars and students from throughout the Christian 
                world. This project demonstrates Alexander's commitment to intellectual excellence 
                and his understanding that the Church needed to engage with the broader culture 
                through learning and scholarship.
              </p>
              
              <p>
                Alexander's final trial came during the persecution of Decius, which began in 250. 
                This persecution was particularly severe, as it required all citizens of the empire 
                to offer sacrifice to the pagan gods or face death. Alexander was seized and imprisoned 
                once again, but this time the outcome would be different. After making a public 
                confession of faith, he was condemned and thrown to the wild beasts. However, in 
                a miraculous demonstration of God's protection, the animals refused to attack him. 
                This miracle, similar to those experienced by other early Christian martyrs, was 
                a powerful witness to the truth of the Christian faith and the protection that God 
                provides to His faithful servants. Alexander was then taken to Caesarea, where he 
                died in chains in the year 251, completing his witness to Christ through martyrdom.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Alexander: Scholar, Bishop, and Martyr</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Intellectual Leadership</h3>
              <p className="mb-6">
                St. Alexander's most enduring legacy is his contribution to the intellectual life 
                of the early Church. His education at the Christian school of Alexandria, his 
                development of a theological library in Jerusalem, and his association with Origen 
                all demonstrate his commitment to learning and scholarship as essential components 
                of Christian life. In an age when the Church was still establishing its theological 
                foundations, Alexander understood that intellectual rigor and theological depth were 
                necessary for the faith to survive and thrive in a hostile world. His example continues 
                to inspire Christians to value education and scholarship as means of serving God 
                and defending the faith. His legacy reminds us that the Church has always been 
                called to engage with the broader culture through learning and that intellectual 
                excellence is not opposed to holiness but can be a path to it.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Pastoral Mildness</h3>
              <p className="mb-6">
                Despite his great learning and important ecclesiastical positions, St. Alexander 
                was known for his mildness, especially in his sermons. This quality is particularly 
                significant because it shows that intellectual brilliance and pastoral gentleness 
                are not mutually exclusive but can and should be combined in effective Christian 
                leadership. Alexander's mildness would have been especially important in a time 
                when the Church was facing persecution and internal controversies. His ability to 
                teach and lead with gentleness rather than harshness would have helped to maintain 
                unity and peace within the Christian community. His example continues to inspire 
                Church leaders to combine intellectual rigor with pastoral compassion, showing that 
                true leadership is not about dominating others but about serving them with love 
                and understanding.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courage in Persecution</h3>
              <p className="mb-6">
                St. Alexander's courage in the face of persecution serves as a powerful example 
                for Christians in all ages. He endured imprisonment twice, under two different 
                emperors, and ultimately gave his life for the faith. His willingness to suffer 
                and die rather than renounce Christ demonstrates the depth of his commitment to 
                the Gospel and his understanding that faithfulness to God is worth any sacrifice. 
                His example is particularly relevant in our own time, when Christians around the 
                world continue to face persecution for their beliefs. Alexander's story reminds us 
                that persecution is not a sign of God's absence but can be a means of bearing witness 
                to the truth of the Gospel. His courage inspires all Christians to remain steadfast 
                in their faith, even when it means facing opposition, ridicule, or even death.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model for Modern Christians</h3>
              <p>
                St. Alexander's life provides a particularly relevant model for Christians today 
                who face criticism and ostracism for the moral tenets of their faith. In a world 
                that often rejects Christian moral teaching and ridicules those who hold to traditional 
                values, Alexander's example shows how to stand fast in the face of opposition. His 
                combination of intellectual engagement, pastoral gentleness, and courageous witness 
                provides a comprehensive model for how to live as a Christian in a hostile culture. 
                His legacy teaches us that we can and should engage with the world intellectually, 
                serve others with love and compassion, and remain faithful to our beliefs even when 
                it costs us dearly. His example reminds us that true Christian witness involves 
                both the mind and the heart, both learning and love, both engagement and faithfulness.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">March 18</div>
              <p className="text-gray-600">Feast of St. Alexander, Bishop and Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Alexander's feast day is celebrated on March 18th, commemorating his martyrdom 
                and his witness to the Christian faith. This feast is particularly significant for 
                theologians, scholars, and those involved in Christian education, as St. Alexander 
                is a model of intellectual excellence combined with holiness. The feast serves as 
                a reminder of the importance of learning and scholarship in the life of the Church, 
                and of the courage required to stand up for one's beliefs in the face of opposition. 
                Churches throughout the world may hold special Masses or prayer services on this 
                day, particularly those with connections to theological education or scholarship.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Alexander's feast day, many communities may choose to reflect on the themes 
                of intellectual engagement, pastoral leadership, and courageous witness to the faith. 
                Some may hold special prayer services for theologians, scholars, and those involved 
                in Christian education, asking for St. Alexander's intercession. The day also serves 
                as an opportunity to pray for those who face criticism or persecution for their 
                Christian beliefs, remembering St. Alexander's example of standing fast in the face 
                of opposition. Many may also take time to reflect on the importance of combining 
                intellectual rigor with pastoral compassion in their own lives and ministries.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                Devotees pray to St. Alexander for wisdom in theological study, for courage in 
                the face of persecution, for guidance in pastoral leadership, for strength to stand 
                up for Christian moral teaching, and for help in combining intellectual excellence 
                with pastoral compassion. His intercession is particularly sought by theologians, 
                scholars, Church leaders, and all who face criticism or opposition for their Christian 
                beliefs. His example reminds us that true Christian witness involves both the mind 
                and the heart, and that we are called to engage with the world intellectually while 
                remaining faithful to the Gospel.
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
                  <li>• <strong>Theologians:</strong> For his intellectual contributions and theological library</li>
                  <li>• <strong>Scholars:</strong> For his commitment to learning and education</li>
                  <li>• <strong>Prisoners:</strong> For his experience of imprisonment for the faith</li>
                  <li>• <strong>Jerusalem:</strong> As coadjutor bishop of the holy city</li>
                  <li>• <strong>Cappadocia:</strong> As bishop of that region</li>
                  <li>• <strong>Church Leaders:</strong> For his example of pastoral leadership</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Intellectual Engagement:</strong> For those studying theology and philosophy</li>
                  <li>• <strong>Persecuted Christians:</strong> For those facing opposition for their faith</li>
                  <li>• <strong>Pastoral Care:</strong> For bishops and Church leaders</li>
                  <li>• <strong>Moral Courage:</strong> For strength to stand up for Christian values</li>
                  <li>• <strong>Academic Excellence:</strong> For students and scholars</li>
                  <li>• <strong>Faithful Witness:</strong> For courage in bearing witness to Christ</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Alexander</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed St. Alexander, bishop and martyr, you who combined intellectual 
                    excellence with pastoral compassion and courageous witness to the faith, 
                    intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    Help us to follow your example of learning and holiness. Grant us the wisdom 
                    to engage with the world intellectually while remaining faithful to the Gospel, 
                    the courage to stand up for our beliefs even when it means facing opposition, 
                    and the gentleness to serve others with love and compassion.
                  </p>
                  <p className="mb-4">
                    Inspire us with your commitment to theological study and your development of 
                    a great library for the Church. Help us to understand that intellectual excellence 
                    and pastoral care are not opposed but complementary, and that true Christian 
                    leadership involves both the mind and the heart.
                  </p>
                  <p>
                    Through your powerful intercession, may we find the strength to remain steadfast 
                    in our faith when criticized by friends and society, the wisdom to engage with 
                    the world intellectually, and the courage to bear witness to Christ even unto 
                    death. St. Alexander, pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Alexander, bishop and martyr, model of learning and courage, pray for us!"
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
            <Link href="/saints/st-origen" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Origen
                </h3>
                <p className="text-gray-700 text-sm">
                  Brilliant theologian and teacher, classmate of St. Alexander at Alexandria.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-cyril-jerusalem" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Cyril of Jerusalem
                </h3>
                <p className="text-gray-700 text-sm">
                  Bishop of Jerusalem and Doctor of the Church, known for his catechetical works.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-ignatius-antioch" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Ignatius of Antioch
                </h3>
                <p className="text-gray-700 text-sm">
                  Bishop and martyr who wrote letters while traveling to his martyrdom in Rome.
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