import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Luke - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Luke, evangelist and patron of physicians.',
  keywords: [
    'st luke',
    'saint luke',
    'luke the evangelist',
    'october 18 feast day',
    'catholic saints',
    'apostle saints',
    'patron of physicians'
  ],
  openGraph: {
    title: 'St. Luke - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Luke, evangelist and patron of physicians.',
    url: 'https://catholicbibleonline.com/saints/st-luke',
  },
  twitter: {
    title: 'St. Luke - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Luke, evangelist and patron of physicians.',
  }
}

export default function StLukePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🐂</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Luke
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            The Beloved Physician and Evangelist
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Luke</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 18</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🐂</div>
              <div className="text-sm text-gray-600">Apostle Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Luke</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Luke, the writer of the Gospel and the Acts of the Apostles, 
                has been identified with St. Paul's "Luke, the beloved physician" 
                (Colossians 4:14). We know few other facts about Luke's life 
                from Scripture and from early Church historians. It is believed 
                that Luke was born a Greek and a Gentile. In Colossians 10-14 
                speaks of those friends who are with him. He first mentions 
                all those "of the circumcision" -- in other words, Jews -- 
                and he does not include Luke in this group. Luke's gospel shows 
                special sensitivity to evangelizing Gentiles. It is only in 
                his gospel that we hear the parable of the Good Samaritan, 
                that we hear Jesus praising the faith of Gentiles such as 
                the widow of Zarephath and Naaman the Syrian (Lk.4:25-27), 
                and that we hear the story of the one grateful leper who is 
                a Samaritan (Lk.17:11-19). According to the early Church historian 
                Eusebius Luke was born at Antioch in Syria.
              </p>
              
              <p className="mb-6">
                In our day, it would be easy to assume that someone who was 
                a doctor was rich, but scholars have argued that Luke might 
                have been born a slave. It was not uncommon for families to 
                educate slaves in medicine so that they would have a resident 
                family physician. Not only do we have Paul's word, but Eusebius, 
                Saint Jerome, Saint Irenaeus and Caius, a second-century writer, 
                all refer to Luke as a physician. We have to go to Acts to 
                follow the trail of Luke's Christian ministry. We know nothing 
                about his conversion but looking at the language of Acts we 
                can see where he joined Saint Paul. The story of the Acts is 
                written in the third person, as an historian recording facts, 
                up until the sixteenth chapter.
              </p>
              
              <p className="mb-6">
                In Acts 16:8-9 we hear of Paul's company "So, passing by Mysia, 
                they went down to Troas. During the night Paul had a vision: 
                there stood a man of Macedonia pleading with him and saying, 
                'Come over to Macedonia and help us.' " Then suddenly in 16:10 
                "they" becomes "we": "When he had seen the vision, we immediately 
                tried to cross over to Macedonia, being convinced that God had 
                called us to proclaim the good news to them." So Luke first 
                joined Paul's company at Troas at about the year 51 and accompanied 
                him into Macedonia where they traveled first to Samothrace, 
                Neapolis, and finally Philippi. Luke then switches back to 
                the third person which seems to indicate he was not thrown 
                into prison with Paul and that when Paul left Philippi Luke 
                stayed behind to encourage the Church there.
              </p>
              
              <p className="mb-6">
                Seven years passed before Paul returned to the area on his 
                third missionary journey. In Acts 20:5, the switch to "we" 
                tells us that Luke has left Philippi to rejoin Paul in Troas 
                in 58 where they first met up. They traveled together through 
                Miletus, Tyre, Caesarea, to Jerusalem. Luke is the loyal comrade 
                who stays with Paul when he is imprisoned in Rome about the 
                year 61: "Epaphras, my fellow prisoner in Christ Jesus, sends 
                greetings to you, and so do Mark, Aristarchus, Demas, and Luke, 
                my fellow workers" (Philemon 24). And after everyone else deserts 
                Paul in his final imprisonment and sufferings, it is Luke who 
                remains with Paul to the end: "Only Luke is with me" (2 Timothy 4:11).
              </p>
              
              <p className="mb-6">
                Luke's inspiration and information for his Gospel and Acts 
                came from his close association with Paul and his companions 
                as he explains in his introduction to the Gospel: "Since many 
                have undertaken to set down an orderly account of the events 
                that have been fulfilled among us, just as they were handed 
                on to us by those who from the beginning were eyewitnesses 
                and servants of the word, I too decided, after investigating 
                everything carefully from the very first, to write an orderly 
                account for you, most excellent Theophilus" (Luke 1:1-3).
              </p>
              
              <p className="mb-6">
                Luke's unique perspective on Jesus can be seen in the six miracles 
                and eighteen parables not found in the other gospels. Luke's 
                is the gospel of the poor and of social justice. He is the 
                one who tells the story of Lazarus and the Rich Man who ignored 
                him. Luke is the one who uses "Blessed are the poor" instead 
                of "Blessed are the poor in spirit" in the beatitudes. Only 
                in Luke's gospel do we hear Mary's Magnificat where she proclaims 
                that God "has brought down the powerful from their thrones, 
                and lifted up the lowly; he has filled the hungry with good 
                things, and sent the rich away empty" (Luke 1:52-53).
              </p>
              
              <p className="mb-6">
                Luke also has a special connection with the women in Jesus' 
                life, especially Mary. It is only in Luke's gospel that we 
                hear the story of the Annunciation, Mary's visit to Elizabeth 
                including the Magnificat, the Presentation, and the story of 
                Jesus' disappearance in Jerusalem. It is Luke that we have 
                to thank for the Scriptural parts of the Hail Mary: "Hail 
                Mary full of grace" spoken at the Annunciation and "Blessed 
                are you and blessed is the fruit of your womb Jesus" spoken 
                by her cousin Elizabeth. Forgiveness and God's mercy to sinners 
                is also of first importance to Luke. Only in Luke do we hear 
                the story of the Prodigal Son welcomed back by the overjoyed 
                father. Only in Luke do we hear the story of the forgiven 
                woman disrupting the feast by washing Jesus' feet with her 
                tears. Throughout Luke's gospel, Jesus takes the side of the 
                sinner who wants to return to God's mercy.
              </p>
              
              <p className="mb-6">
                Reading Luke's gospel gives a good idea of his character as 
                one who loved the poor, who wanted the door to God's kingdom 
                opened to all, who respected women, and who saw hope in God's 
                mercy for everyone. The reports of Luke's life after Paul's 
                death are conflicting. Some early writers claim he was martyred, 
                others say he lived a long life. Some say he preached in Greece, 
                others in Gaul. The earliest tradition we have says that he 
                died at 84 Boeotia after settling in Greece to write his Gospel.
              </p>
              
              <p>
                A tradition that Luke was a painter seems to have no basis 
                in fact. Several images of Mary appeared in later centuries 
                claiming him as a painter but these claims were proved false. 
                Because of this tradition, however, he is considered a patron 
                of painters of pictures and is often portrayed as painting 
                pictures of Mary. He is often shown with an ox or a calf because 
                these are the symbols of sacrifice -- the sacrifice Jesus made 
                for all the world. Luke is the patron of physicians and surgeons.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Luke: The Beloved Physician</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Evangelist of the Poor and Marginalized</h3>
              <p className="mb-6">
                St. Luke's most profound legacy is his unique perspective on 
                Jesus as the champion of the poor, the marginalized, and the 
                outcast. His gospel, often called the "Gospel of the Poor," 
                emphasizes Jesus' special concern for those on the fringes 
                of society. Luke's account includes the Magnificat, where 
                Mary proclaims that God "has brought down the powerful from 
                their thrones, and lifted up the lowly; he has filled the 
                hungry with good things, and sent the rich away empty" (Luke 1:52-53). 
                This emphasis on social justice and God's preferential option 
                for the poor has inspired countless Christians throughout history 
                to work for justice and to serve the marginalized. Luke's 
                legacy teaches us that the Gospel is not just about personal 
                salvation, but about God's desire to transform society and 
                to lift up those who are oppressed and forgotten. His example 
                challenges us to examine our own attitudes toward the poor 
                and to ask ourselves whether we are truly following Jesus' 
                example of reaching out to those in need.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Physicians and Healers</h3>
              <p className="mb-6">
                St. Luke's patronage of physicians and surgeons stems from 
                his own background as a medical professional. As "the beloved 
                physician" mentioned by St. Paul, Luke brought his medical 
                knowledge and compassionate care to his ministry. His legacy 
                teaches us that our professional skills and knowledge can 
                be used to serve God and others, and that there is no separation 
                between our secular work and our spiritual life. Luke's example 
                encourages healthcare professionals to see their work as a 
                vocation and to bring Christ's healing presence to their patients. 
                His patronage also reminds us of the importance of caring 
                for both the physical and spiritual needs of those we serve. 
                Luke's story demonstrates that God can use our professional 
                expertise to advance His kingdom and to bring healing and 
                hope to a broken world. His example challenges us to integrate 
                our faith with our work and to see every opportunity as a 
                chance to serve God and others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Loyal Friendship</h3>
              <p>
                St. Luke's unwavering loyalty to St. Paul, even in the face 
                of imprisonment and suffering, is a powerful example of true 
                friendship and discipleship. When everyone else deserted Paul 
                in his final imprisonment, Luke remained faithful: "Only Luke 
                is with me" (2 Timothy 4:11). This loyalty was not based on 
                convenience or personal gain, but on a deep commitment to 
                Christ and to his friend. Luke's legacy teaches us the importance 
                of standing by our friends and loved ones during difficult 
                times, and of remaining faithful to our commitments even when 
                it costs us something. His example challenges us to examine 
                our own relationships and to ask ourselves whether we are 
                truly loyal to those we love, even when it's difficult or 
                inconvenient. Luke's story reminds us that true friendship 
                involves sacrifice and that the greatest gift we can give 
                to others is our presence and support during their darkest 
                moments.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">October 18</div>
              <p className="text-gray-600">Feast of St. Luke the Evangelist</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Luke the Evangelist is celebrated on October 
                18th, during the autumn season when the Church reflects on 
                the themes of harvest and thanksgiving. This feast is celebrated 
                as a feast in the Roman Catholic Church, recognizing Luke's 
                importance as one of the four evangelists and the author of 
                both the Gospel of Luke and the Acts of the Apostles. The 
                feast falls during a time when the Church is preparing for 
                the end of the liturgical year and the celebration of Christ 
                the King, making it an ideal time to remember Luke's emphasis 
                on Jesus as the Savior of all people, especially the poor 
                and marginalized. The feast provides an opportunity to honor 
                Luke's memory and to reflect on how we can better serve the 
                poor and marginalized in our own communities. It is also a 
                time to pray for physicians, healthcare workers, and all those 
                who care for the sick, asking for Luke's intercession in helping 
                them to bring both physical and spiritual healing to their patients.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Luke the Evangelist, many people participate 
                in special prayers and devotions to honor his memory and seek 
                his intercession. Churches, particularly those with connections 
                to healthcare ministries or medical schools, hold special Masses 
                and services. Many physicians and healthcare workers gather 
                to pray for guidance in their medical practice and for the 
                grace to bring both physical and spiritual healing to their 
                patients. The day is also marked by prayers for the poor and 
                marginalized, asking for Luke's intercession in helping us 
                to better serve those in need. Many people also take time 
                to reflect on their own attitudes toward the poor and to 
                pray for the grace to see Christ in every person, especially 
                those who are suffering or marginalized. The feast is also 
                a time to reflect on how we can better integrate our faith 
                with our work and to pray for the grace to use our professional 
                skills to serve God and others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of 
                compassion for the poor and marginalized and the ability to 
                see Christ in every person. Many people make special petitions 
                for physicians and healthcare workers, asking for St. Luke's 
                intercession in helping them to bring both physical and spiritual 
                healing to their patients. The day is also a time to reflect 
                on the importance of loyalty in friendship and to pray for 
                the grace to remain faithful to our commitments, even when 
                it's difficult. St. Luke's feast day encourages us to remember 
                that we are all called to serve the poor and marginalized 
                and to use our gifts and talents to advance God's kingdom. 
                It is also a time to pray for the grace to integrate our 
                faith with our work and to see every opportunity as a chance 
                to serve God and others. The feast reminds us that true discipleship 
                involves both personal holiness and social justice, and that 
                we cannot separate our love for God from our love for our neighbor.
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
                  <li>• <strong>Physicians:</strong> Patron of physicians</li>
                  <li>• <strong>Surgeons:</strong> Patron of surgeons</li>
                  <li>• <strong>Painters:</strong> Patron of painters</li>
                  <li>• <strong>Artists:</strong> Patron of artists</li>
                  <li>• <strong>Notaries:</strong> Patron of notaries</li>
                  <li>• <strong>Brewers:</strong> Patron of brewers</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Healthcare:</strong> Helper in medical care</li>
                  <li>• <strong>Poor:</strong> Patron of the poor</li>
                  <li>• <strong>Marginalized:</strong> Helper of marginalized</li>
                  <li>• <strong>Social Justice:</strong> Patron of social justice</li>
                  <li>• <strong>Friendship:</strong> Helper in loyalty</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Luke</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Glorious St. Luke, beloved physician and evangelist, 
                    help me to see Christ in every person, especially those 
                    who are poor, sick, or marginalized.
                  </p>
                  <p className="mb-4">
                    Intercede for me that I may have the compassion and courage 
                    to serve others with love and dedication. Help me to use 
                    my gifts and talents to bring healing and hope to a broken world.
                  </p>
                  <p>
                    St. Luke, pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Physicians</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Luke, patron of physicians, intercede for all healthcare 
                    workers that they may bring both physical and spiritual 
                    healing to their patients.
                  </p>
                  <p>
                    Help them to see their work as a vocation and to serve 
                    with compassion and dedication. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Luke, beloved physician, pray for us!"
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
            <Link href="/saints/st-paul" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Paul
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle to the Gentiles and Luke's companion.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-mark" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Mark
                </h3>
                <p className="text-gray-700 text-sm">
                  Evangelist and companion of St. Peter.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John
                </h3>
                <p className="text-gray-700 text-sm">
                  Beloved disciple and evangelist.
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