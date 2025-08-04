import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Stephen - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Stephen, the first deacon and first Christian martyr.',
  keywords: [
    'st stephen',
    'saint stephen',
    'st stephen biography',
    'st stephen feast day',
    'st stephen patron saint',
    'first martyr',
    'first deacon',
    'december 26 feast day',
    'catholic saints'
  ],
  openGraph: {
    title: 'St. Stephen - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Stephen, the first deacon and first Christian martyr.',
    url: 'https://catholicbibleonline.com/saints/st-stephen',
  },
  twitter: {
    title: 'St. Stephen - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Stephen, the first deacon and first Christian martyr.',
  }
}

export default function StStephenPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⛪</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Stephen
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            First Deacon, First Christian Martyr, Protomartyr
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Stephen</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">December 26</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⛪</div>
              <div className="text-sm text-gray-600">First Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Stephen</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Stephen was one of the first ordained deacons of the Church. He was also the first Christian martyr. The Greek word from which we derive the English word martyr literally means witness. In that sense, every Christian is called to bear witness to Jesus Christ, in both their words and their actions. Not all are asked to shed their blood.
              </p>
              
              <p className="mb-6">
                Those who do shed their blood for the faith are the greatest of witnesses. They have been especially honored since the very beginning of Christianity. Stephen was so conformed to Jesus in his holy life that his martyrdom was both a natural and supernatural sign of his love for the Lord. It also inspired the early believers as they faced the first round of brutal persecution.
              </p>
              
              <p className="mb-6">
                The 6th chapter of the Acts of the Apostles contains an account of the choice of the first seven deacons of the Church. As the Apostles worked to continue the ministry of Jesus Christ as his elders, some of the Greek-speaking widows were being neglected in their practical needs. The Twelve decided to ordain seven deacons to oversee their care. In doing so, the deacons extended the pastoral care of the Apostles, the first Bishops of the early Church, enabling them to attend more to teaching.
              </p>
              
              <p className="mb-6">
                Of the seven ordained, Stephen was the oldest and given the title of "archdeacon," the chief among them. Little is known about him before this account. Like most of the early Christian leaders, he was Jewish, but may have come from among the Greek speaking or Hellenistic believers, the ones feeling slighted in the distribution of alms.
              </p>
              
              <p>
                Great preaching and miracles were attributed to Stephen. The Bible records that Stephen "full of grace and power, did great wonders and signs among the people." Stephen's popularity created enemies among some Jews, members of the Synagogue of Roman Freedmen. They debated with him, to generate evidence against him in furtherance of their persecution of the early Church.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Stephen: First Christian Martyr</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Trial and Defense</h3>
              <p className="mb-6">
                They accused him of blasphemy, of speaking against God and Moses. The charges inflamed the local populace which demanded he be tried and punished. When Stephen was put on trial, several false witnesses were brought forward by the Sanhedrin to testify that he was guilty of blasphemy. He was charged with predicting that Jesus would destroy the Temple and for preaching against Mosaic law.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Powerful Preaching</h3>
              <p className="mb-6">
                Stephen was filled with wisdom from heaven. He responded by detailing the history of Israel and outlining the blessings God had bestowed upon his chosen people. He also explained how disobedient Israel had become, despite the goodness and mercy of the Lord. Stephen explained that Jesus had come to fulfil the law of Moses, not destroy it. He quoted extensively from the Hebrew scriptures to prove his case.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Vision of Christ</h3>
              <p className="mb-6">
                Finally, he admonished the Sanhedrin, saying, "You stubborn people, with uncircumcised hearts and ears. You are always resisting the Holy Spirit, just as your ancestors used to do. Can you name a single prophet your ancestors never persecuted? They killed those who foretold the coming of the Upright One, and now you have become his betrayers, his murderers. In spite of being given the Law through angels, you have not kept it." (Acts 7:51-53)
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Martyrdom and Forgiveness</h3>
              <p>
                As Stephen concluded his defense, he looked up and saw a vision of Jesus standing at the right hand of God. He said, "Look, I can see heaven thrown open and the Son of Man standing at the right hand of God." That vision was taken as the final proof of blasphemy to the Jews who did not believe Jesus was the Messiah or Son of God. The crowd rushed upon Stephen and carried him outside of the city to stone him to death. As Stephen was being brutally stoned, he spoke his last words, "Lord Jesus, receive my spirit. Lord, do not hold this sin against them." Words which echoed the very words of Jesus on the Cross.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">December 26</div>
              <p className="text-gray-600">Feast of St. Stephen, First Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Stephen is celebrated on December 26th, the day after Christmas. This date commemorates his martyrdom and serves as a reminder that following Christ often involves sacrifice and even persecution. Stephen was buried by Christians, but the location of his tomb is not specified in the New Testament and may have been forgotten for a time. In 415 a Christian priest claimed he had a vision of the tomb and located Stephen's remains. A name inside the tomb confirmed the find.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. Stephen's remarkable courage and his role as the first Christian martyr. His feast day serves as a reminder of the cost of discipleship and the call to witness to Christ even in the face of persecution. Many people pray for the courage to stand firm in their faith and to forgive those who persecute them.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. Stephen for his intercession in matters of courage, forgiveness, and faithfulness to the Gospel. Many people also pray for those who are persecuted for their faith and for the grace to be bold witnesses of Christ in their daily lives.
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
                  <li>• <strong>Altar Servers:</strong> Patron of those who serve at the altar</li>
                  <li>• <strong>Bricklayers:</strong> Patron of those who work with stone</li>
                  <li>• <strong>Casket Makers:</strong> Patron of those who prepare for burial</li>
                  <li>• <strong>Deacons:</strong> Patron of the diaconate</li>
                  <li>• <strong>Martyrs:</strong> First and model of all martyrs</li>
                  <li>• <strong>Preachers:</strong> Patron of those who proclaim the Gospel</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Courage in Persecution:</strong> Helper in facing opposition</li>
                  <li>• <strong>Forgiveness:</strong> Model of forgiving one's persecutors</li>
                  <li>• <strong>Faithful Witness:</strong> Patron of bold proclamation</li>
                  <li>• <strong>Diaconal Ministry:</strong> Patron of service to others</li>
                  <li>• <strong>Perseverance:</strong> Helper in remaining faithful</li>
                  <li>• <strong>Vision of Christ:</strong> Patron of spiritual insight</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Stephen</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Lord Jesus, you chose Stephen as the first deacon and martyr of your One, Holy, Catholic and Apostolic Church. 
                    The heroic witness of his holy life and death reveals your continued presence among us. Through following the 
                    example of his living faith, and by his intercession, empower us by your Holy Spirit to live as witnesses to 
                    the faith in this New Missionary Age."
                  </p>
                  <p className="mb-4">
                    "No matter what our state in life, career or vocation, help us to proclaim, in both word and in deed, 
                    the fullness of the Gospel to a world which is waiting to be born anew in Jesus Christ. Pour out upon 
                    your whole Church, the same Holy Spirit which animated St Stephen, Martyr, to be faithful to the end, 
                    which is a beginning of life eternal in the communion of the Trinity."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Stephen, pray for us!"
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
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Paul
                </h3>
                <p className="text-gray-700 text-sm">
                  Witnessed St. Stephen's martyrdom before his conversion on the road to Damascus.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-peter" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peter
                </h3>
                <p className="text-gray-700 text-sm">
                  One of the Apostles who ordained St. Stephen as the first deacon.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle who witnessed the early Church and the ministry of the first deacons.
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