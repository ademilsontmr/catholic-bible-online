import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Andrew - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Andrew, the first-called apostle and brother of St. Peter.',
  keywords: [
    'st andrew',
    'saint andrew',
    'first called apostle',
    'st andrew biography',
    'st andrew feast day',
    'st andrew patron saint',
    'twelve apostles',
    'catholic saints',
    'november 30 feast day'
  ],
  openGraph: {
    title: 'St. Andrew - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Andrew, the first-called apostle and brother of St. Peter.',
    url: 'https://catholicbibleonline.com/saints/st-andrew',
  },
  twitter: {
    title: 'St. Andrew - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Andrew, the first-called apostle and brother of St. Peter.',
  }
}

export default function StAndrewPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">✝️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Andrew
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            The First-Called Apostle and Brother of St. Peter
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Andrew</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">November 30</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">✝️</div>
              <div className="text-sm text-gray-600">Apostle Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Andrew</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Andrew, the first-called apostle, was a Galilean fisherman and 
                the brother of St. Peter. Before becoming a disciple of Jesus, he 
                was a follower of John the Baptist, demonstrating his spiritual 
                seeking and preparation for the coming of the Messiah. When John 
                the Baptist pointed to Jesus and said, "Behold the Lamb of God," 
                Andrew immediately followed Jesus and became one of His first disciples.
              </p>
              
              <p className="mb-6">
                After spending time with Jesus, Andrew's first act as an apostle 
                was to bring his brother Simon (Peter) to Christ, saying, "We have 
                found the Messiah." This act of evangelization, bringing his own 
                brother to Jesus, demonstrates Andrew's missionary zeal and his 
                understanding of the importance of sharing the Good News with those 
                closest to him.
              </p>
              
              <p className="mb-6">
                St. Andrew is often referred to as the "first-called" because he 
                was among the first disciples to be called by Jesus. His immediate 
                response to Jesus' call and his eagerness to bring others to Christ 
                set the pattern for all future apostles and evangelizers.
              </p>
              
              <p className="mb-6">
                After the Resurrection and Ascension of Jesus, St. Andrew preached 
                the Gospel in Asia Minor and then in Greece. His missionary work 
                took him to various regions, where he tirelessly proclaimed the 
                message of Christ and established Christian communities.
              </p>
              
              <p>
                St. Andrew's missionary journey ended in Greece, where he was crucified 
                on a transverse cross (X-shaped), which has become his distinctive 
                symbol. According to tradition, he was crucified in Patras, Greece, 
                and his martyrdom was marked by his continued preaching from the cross, 
                encouraging the people to remain faithful to Christ even as he faced 
                his own death.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Andrew: The First-Called Apostle</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">The First-Called</h3>
              <p className="mb-6">
                St. Andrew's legacy begins with his unique title as the "first-called" 
                apostle. His immediate response to Jesus' call and his eagerness to 
                follow Christ set the standard for all future disciples. His example 
                teaches us the importance of being ready to respond to God's call 
                and the willingness to leave everything behind to follow Jesus.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Evangelization</h3>
              <p className="mb-6">
                St. Andrew's first act after meeting Jesus was to bring his brother 
                Peter to Christ. This simple but profound act of evangelization 
                demonstrates that sharing the Good News often begins with those closest 
                to us. His example shows that evangelization doesn't require complex 
                arguments or extensive training, but simply the desire to share the 
                joy of encountering Christ with others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Missionary Zeal</h3>
              <p className="mb-6">
                St. Andrew's missionary work in Asia Minor and Greece demonstrates 
                his commitment to spreading the Gospel to distant lands. His willingness 
                to travel far from home and face the challenges of preaching in foreign 
                cultures shows his dedication to the Great Commission and his love 
                for souls.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Martyr's Witness</h3>
              <p>
                St. Andrew's martyrdom on the transverse cross in Greece represents 
                the ultimate witness to Christ. His willingness to die for his faith 
                and his continued preaching even from the cross demonstrate the depth 
                of his commitment to Christ and his desire to bring others to salvation. 
                His martyrdom has inspired countless Christians throughout history 
                to remain faithful even in the face of persecution and death.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-red-600 mb-2">November 30</div>
              <p className="text-gray-600">Feast of St. Andrew</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Andrew is celebrated on November 30th, commemorating 
                the day of his martyrdom. This feast is celebrated as a solemnity 
                in the Roman Catholic Church, recognizing his importance as one of 
                the twelve apostles and the first-called disciple of Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Andrew, many people pray for the gift of 
                evangelization and the courage to share their faith with others. 
                Churches may hold special services focusing on the call to discipleship 
                and the importance of bringing others to Christ. Many also pray for 
                missionaries and for the spread of the Gospel throughout the world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of evangelization, 
                for the courage to share one's faith, and for the grace to respond 
                immediately to God's call. Many also pray for missionaries and for 
                all those engaged in spreading the Gospel, asking for St. Andrew's 
                intercession in their work.
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
                  <li>• <strong>Scotland:</strong> Patron saint of Scotland</li>
                  <li>• <strong>Russia:</strong> Patron of Russia</li>
                  <li>• <strong>Greece:</strong> Patron of Greece</li>
                  <li>• <strong>Fishermen:</strong> Patron of fishermen</li>
                  <li>• <strong>Fishmongers:</strong> Patron of fishmongers</li>
                  <li>• <strong>Rope Makers:</strong> Patron of rope makers</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Evangelization:</strong> Help in sharing the faith</li>
                  <li>• <strong>First Responders:</strong> Protection for emergency workers</li>
                  <li>• <strong>Brotherhood:</strong> Unity among brothers and families</li>
                  <li>• <strong>Missionary Work:</strong> Success in spreading the Gospel</li>
                  <li>• <strong>Immediate Response:</strong> Grace to respond quickly to God's call</li>
                  <li>• <strong>Martyrdom:</strong> Courage to remain faithful unto death</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Andrew</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Andrew, first-called apostle of Christ and brother of 
                    St. Peter, who immediately responded to Jesus' call and brought 
                    your brother to Him, intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    You who were among the first to recognize Jesus as the Messiah 
                    and who eagerly shared this Good News with others, help us to 
                    have the same missionary zeal and the courage to share our faith 
                    with those around us.
                  </p>
                  <p className="mb-4">
                    You who preached the Gospel in distant lands and who gave your 
                    life as a martyr for Christ, help us to be willing to make sacrifices 
                    for our faith and to remain faithful even in the face of persecution.
                  </p>
                  <p>
                    St. Andrew, pray for us that we may respond immediately to God's 
                    call and have the courage to bring others to Christ. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Evangelization</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Andrew, patron of evangelization, intercede for all those 
                    who are called to share the Gospel with others.
                  </p>
                  <p>
                    Help them to have the same eagerness and simplicity that you 
                    showed when you brought your brother Peter to Christ. Give them 
                    the courage to speak about Jesus and the wisdom to know how to 
                    share their faith effectively. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Andrew, pray for us!"
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
                  Brother of St. Andrew and Prince of the Apostles.
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
                  Beloved disciple and author of the Fourth Gospel.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-philip" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Philip
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle who brought Nathanael to Christ.
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