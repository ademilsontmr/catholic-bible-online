import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Gemma Galgani - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Gemma Galgani, the Flower of Lucca and patron of students.',
  keywords: [
    'st gemma galgani',
    'saint gemma galgani',
    'gemma galgani',
    'april 11 feast day',
    'catholic saints',
    'modern saints',
    'patron of students'
  ],
  openGraph: {
    title: 'St. Gemma Galgani - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Gemma Galgani, the Flower of Lucca and patron of students.',
    url: 'https://catholicbibleonline.com/saints/st-gemma-galgani',
  },
  twitter: {
    title: 'St. Gemma Galgani - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Gemma Galgani, the Flower of Lucca and patron of students.',
  }
}

export default function StGemmaGalganiPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌸</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Gemma Galgani
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            The Flower of Lucca
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Gemma Galgani</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">April 11</div>
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
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Gemma Galgani</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Gemma Galgani, also known as the Flower of Lucca, was an 
                Italian mystic often referred to as the "Daughter of Passion," 
                for her intense replication of the Passion of Christ. She was 
                born on March 12, 1878, in a small Italian town near Lucca. 
                At a very young age, Gemma developed a love for prayer. She 
                made her First Communion on June 17, 1887. Gemma was loved by 
                her teachers and her fellow students, as a student at a school 
                run by the Sisters of St. Zita. Though quiet and reserved, she 
                always had a smile for everyone. Unfortunately, Gemma had to 
                quit school due to her chronic ill health before completing 
                the course of study.
              </p>
              
              <p className="mb-6">
                Throughout her life, Gemma was to be chosen with many mystical 
                experiences and special graces. These were often misunderstood 
                by others, causing ridicule. Gemma suffered heartaches in reparation, 
                remembering that Our Lord Himself had been misunderstood and ridiculed. 
                Gemma had an immense love for the poor and helped them in any 
                way she could. After her father's death, the 19-year-old Gemma 
                became the mother-figure for her seven brothers and sisters. 
                When some of her siblings became old enough to share the responsibility, 
                Gemma went to live briefly with a married aunt.
              </p>
              
              <p className="mb-6">
                At this time, two young men proposed marriage to her. However, 
                Gemma refused because she wanted silence, retirement, and more 
                than ever, she desired to pray and speak only to God. Gemma 
                returned home and almost immediately became very ill with meningitis. 
                Throughout this illness, her one regret was the trouble she 
                caused her relatives who took care of her. Feeling herself tempted 
                by the devil, Gemma prayed for help to the Venerable Passionist, 
                Gabriel Possenti. Through his intercession, Gemma was miraculously cured.
              </p>
              
              <p className="mb-6">
                Gemma wished to become a nun, but her poor health prevented 
                her from being accepted. She offered this disappointment to 
                God as a sacrifice. Gemma predicted that the Passionists would 
                establish a monastery at Lucca; this came to pass two years 
                after her death. Today, Gemma's relics remain at the Passionist 
                monastery in Lucca.
              </p>
              
              <p className="mb-6">
                On June 8, 1899, Gemma had an internal warning that some unusual 
                grace was to be granted to her. She felt pain and blood coming 
                from her hands, feet and heart. These were the marks of the 
                stigmata. Each Thursday evening, Gemma would fall into rapture 
                and the marks would appear. Such marks, called the stigmata 
                in the language of the Catholic Church, refers to the appearance 
                of the wounds of the crucified Jesus Christ appearing on the 
                bodies of some men and women whose lives are so conformed to 
                His that they reflect those wounds of redemptive love for others.
              </p>
              
              <p className="mb-6">
                The stigmata remained until Friday afternoon or Saturday morning. 
                When the bleeding would stop, the wounds would close, and only 
                white marks would remain in place of the deep gashes. Gemma's 
                stigmata would continue to appear until her confessor, Reverend 
                Germanus Ruoppolo, advised her to pray for their disappearance 
                due to her declining health. Through her prayers, the phenomenon 
                ceased, but the white marks remained on her skin until her death.
              </p>
              
              <p className="mb-6">
                Through the help of her confessor, Gemma went off to live with 
                another family where she was allowed more freedom for her spiritual 
                life than she was at home. She was frequently found in a state 
                of ecstasy and on one occasion she was believed to have levitated. 
                Her words spoken during her ecstasies, were recorded by her 
                confessor and a relative from her adoptive family. At the end 
                of her ecstasies, she returned to normal and carried on quietly 
                and serenely. Gemma often saw her guardian angel. She sent her 
                guardian angel on errands, usually to deliver a letter or oral 
                message to her confessor in Rome.
              </p>
              
              <p className="mb-6">
                During the apostolic investigations into her life, all witnesses 
                testified that there was no artfulness in Gemma's manner. Most 
                of her severe penances and sacrifices were hidden from most 
                who knew her. In January of 1903, Gemma was diagnosed with 
                tuberculosis. At the start of Holy Week in 1903, Gemma began 
                suffering greatly. She died at age 25 on Holy Saturday, April 11. 
                The Parish Priest in her company said, "She died with a smile 
                which remained upon her lips, so that I could not convince 
                myself that she was really dead."
              </p>
              
              <p>
                St. Gemma Galgani was beatified on May 14, 1933 by Pope Pius 
                XI and canonized on May 2, 1940, only 37 years after her death, 
                by Pope Pius XII. She is the patron saint against temptations, 
                against the death of parents, against tuberculosis, of students 
                and of pharmacists. Her feast day is celebrated on April 11.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Gemma Galgani: The Flower of Lucca</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Mystical Union</h3>
              <p className="mb-6">
                St. Gemma Galgani's most profound legacy is her extraordinary 
                mystical union with Christ, particularly through the stigmata 
                and her intense participation in His Passion. Her life demonstrates 
                that God can choose the most unlikely candidates—a young, sickly 
                woman from a small Italian town—to bear witness to His love 
                and suffering. Gemma's stigmata, which appeared every Thursday 
                evening and lasted until Friday afternoon or Saturday morning, 
                was a visible sign of her deep spiritual union with Christ's 
                redemptive suffering. Her legacy teaches us that true holiness 
                involves not just external acts of piety, but a profound interior 
                transformation that can manifest in extraordinary ways. Gemma's 
                example challenges us to examine our own relationship with Christ 
                and to ask ourselves whether we are truly willing to share in 
                His sufferings and to be conformed to His image. Her story reminds 
                us that God's grace is not limited by our human limitations 
                and that He can work extraordinary miracles through those who 
                are completely surrendered to Him.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Students and the Sick</h3>
              <p className="mb-6">
                St. Gemma Galgani's patronage of students stems from her own 
                experience as a student who had to leave school due to chronic 
                ill health. Her story gives hope to all students who face difficulties 
                in their studies, whether due to illness, learning challenges, 
                or other obstacles. Gemma's legacy teaches us that academic 
                success is not the only measure of a person's worth or potential, 
                and that God can work through our weaknesses and limitations 
                to accomplish great things. Her example encourages students 
                to persevere in their studies despite difficulties and to trust 
                in God's help during challenging times. Gemma's patronage of 
                those suffering from tuberculosis and other illnesses also stems 
                from her own experience with chronic illness throughout her 
                life. Her story reminds us that suffering can be a path to 
                holiness and that God can use our physical and emotional pain 
                to draw us closer to Him. Gemma's example teaches us to offer 
                our sufferings to God and to trust in His providence, even 
                when we don't understand why we must suffer.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Divine Providence</h3>
              <p>
                St. Gemma Galgani's life is a powerful witness to God's providence 
                and His ability to work through the most unlikely circumstances. 
                Despite being rejected by religious orders due to her poor health, 
                Gemma was able to live a deeply spiritual life and become a 
                saint. Her prediction that the Passionists would establish 
                a monastery in Lucca, which came true two years after her death, 
                demonstrates her close connection to God and her ability to 
                discern His will. Gemma's legacy teaches us that God's plans 
                for us are often different from our own plans, and that we 
                must trust in His providence even when our dreams seem impossible. 
                Her example challenges us to surrender our own plans and desires 
                to God and to trust that He will lead us to the path He has 
                chosen for us. Gemma's story also reminds us that God can work 
                through our disappointments and failures to bring about His 
                greater plan, and that we should never give up hope, even when 
                our circumstances seem impossible.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">April 11</div>
              <p className="text-gray-600">Feast of St. Gemma Galgani</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Gemma Galgani is celebrated on April 11th, 
                during the spring season when nature awakens and flowers begin 
                to bloom—a fitting time to honor the "Flower of Lucca." This 
                feast is celebrated as a memorial in the Roman Catholic Church, 
                recognizing Gemma's importance as a model of mystical union 
                with Christ and patron of students and the sick. The feast 
                falls during the Easter season, a time when the Church celebrates 
                Christ's resurrection and victory over death, making it an 
                ideal time to remember Gemma's own participation in Christ's 
                Passion through the stigmata and her ultimate victory over 
                suffering through her union with Him. The feast provides an 
                opportunity to honor Gemma's memory and to reflect on how we 
                can deepen our own relationship with Christ and participate 
                more fully in His redemptive work. It is also a time to pray 
                for students, especially those who face difficulties in their 
                studies, and for those suffering from illness, asking for 
                Gemma's intercession in helping them to persevere and to find 
                meaning in their suffering.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Gemma Galgani, many people participate 
                in special prayers and devotions to honor her memory and seek 
                her intercession. Churches, particularly those with connections 
                to educational institutions or healthcare ministries, hold 
                special Masses and services. Many students gather to pray for 
                success in their studies and for the strength to persevere 
                through difficulties, asking for St. Gemma's intercession 
                in helping them to overcome obstacles and achieve their academic 
                goals. The day is also marked by prayers for those suffering 
                from illness, especially tuberculosis and other chronic conditions, 
                asking for Gemma's help in finding healing and meaning in their 
                suffering. Many people also take time to reflect on their own 
                relationship with Christ and to pray for the grace to deepen 
                their spiritual life and to be more open to God's will. The 
                feast is also a time to reflect on how we can better support 
                and encourage those who face difficulties in their studies 
                or health challenges.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of 
                deeper union with Christ and the ability to find meaning in 
                suffering. Many people make special petitions for students 
                and those suffering from illness, asking for St. Gemma's 
                intercession in helping them to persevere through their difficulties 
                and to find God's presence in their struggles. The day is also 
                a time to reflect on the importance of surrendering our own 
                plans and desires to God and to pray for the grace to trust 
                in His providence, even when our circumstances seem impossible. 
                St. Gemma's feast day encourages us to remember that we are 
                all called to participate in Christ's redemptive work and that 
                our sufferings can be offered up for the salvation of souls. 
                It is also a time to pray for the grace to be more open to 
                God's will and to be willing to accept the crosses that He 
                sends us. The feast reminds us that true holiness involves 
                not just avoiding sin, but actively participating in Christ's 
                mission of love and redemption through our own sufferings and 
                sacrifices.
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
                  <li>• <strong>Students:</strong> Patron of students</li>
                  <li>• <strong>Pharmacists:</strong> Patron of pharmacists</li>
                  <li>• <strong>Tuberculosis:</strong> Patron against tuberculosis</li>
                  <li>• <strong>Temptations:</strong> Patron against temptations</li>
                  <li>• <strong>Death of Parents:</strong> Patron against death of parents</li>
                  <li>• <strong>Mystics:</strong> Patron of mystics</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Stigmata:</strong> Helper for those with stigmata</li>
                  <li>• <strong>Ecstasy:</strong> Patron of mystical experiences</li>
                  <li>• <strong>Guardian Angels:</strong> Helper in angelic communication</li>
                  <li>• <strong>Passionists:</strong> Patron of Passionist order</li>
                  <li>• <strong>Lucca:</strong> Patron of Lucca, Italy</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Gemma Galgani</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Gemma, who was chosen by God to bear the wounds 
                    of His Son, help me to understand the mystery of suffering 
                    and to offer my own sufferings in union with Christ's 
                    Passion for the salvation of souls.
                  </p>
                  <p className="mb-4">
                    Intercede for me that I may grow in love for Jesus and 
                    be willing to accept whatever crosses He sends me. Help 
                    me to trust in God's providence and to surrender my will 
                    to His divine plan.
                  </p>
                  <p>
                    St. Gemma Galgani, pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Students</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Gemma Galgani, patron of students, intercede for 
                    all those who struggle with their studies.
                  </p>
                  <p>
                    Help us to persevere through difficulties and to trust 
                    in God's help during challenging times. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Gemma Galgani, Flower of Lucca, pray for us!"
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
            <Link href="/saints/st-padre-pio" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Padre Pio
                </h3>
                <p className="text-gray-700 text-sm">
                  Another saint who bore the stigmata and mystical gifts.
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
                  Little Flower and model of spiritual childhood.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-assisi" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Mendicant Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  First saint to receive the stigmata.
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