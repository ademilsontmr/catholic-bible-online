import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Simeon - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Simeon, cousin of Jesus and second bishop of Jerusalem who was martyred at age 120.',
  keywords: [
    'st simeon',
    'saint simeon',
    'st simeon biography',
    'st simeon feast day',
    'st simeon patron saint',
    'bishop saint',
    'jerusalem bishop',
    'jesus cousin',
    'martyr saint',
    'roman martyr',
    'catholic saints',
    'february 18 feast day'
  ],
  openGraph: {
    title: 'St. Simeon - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Simeon, cousin of Jesus and second bishop of Jerusalem who was martyred at age 120.',
    url: 'https://catholicbibleonline.com/saints/st-simeon',
  },
  twitter: {
    title: 'St. Simeon - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Simeon, cousin of Jesus and second bishop of Jerusalem who was martyred at age 120.',
  }
}

export default function StSimeonPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👨‍🦳</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Simeon
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Cousin of Jesus, Bishop of Jerusalem, Martyr at Age 120
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Simeon</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">February 18</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👨‍🦳</div>
              <div className="text-sm text-gray-600">Bishop</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Simeon</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                In St. Matthew's Gospel, we read of St. Simon or Simeon who is described as one of our 
                Lord's brethren or kinsmen. His father was Cleophas, St. Joseph's brother, and his 
                mother, according to some writers, was our Lady's sister. He would therefore be our 
                Lord's first cousin and is supposed to have been about eight years older than Jesus. 
                This close family connection to the Holy Family gives St. Simeon a unique place in 
                Christian history.
              </p>
              
              <p className="mb-6">
                No doubt he is one of those brethren of Christ who are mentioned in the Acts of the 
                Apostles as having received the Holy Spirit on Pentecost. This experience of the 
                outpouring of the Holy Spirit would have been a transformative moment in his life, 
                equipping him for the ministry that lay ahead. St. Epiphanius tells us that when the 
                Jews massacred St. James the Lesser, his brother Simeon upbraided them for their 
                cruelty, showing his courage and commitment to justice.
              </p>
              
              <p className="mb-6">
                The apostles and disciples afterwards met together to appoint a successor to James as 
                bishop of Jerusalem, and they unanimously chose Simeon, who had probably assisted his 
                brother in the government of that church. This appointment as the second bishop of 
                Jerusalem placed St. Simeon in a position of great responsibility during a critical 
                period in the early Church's history.
              </p>
              
              <p className="mb-6">
                In the year 66, civil war broke out in Palestine as a consequence of Jewish opposition 
                to the Romans. The Christians in Jerusalem were warned of the impending destruction of 
                the city and appear to have been divinely ordered to leave it. Accordingly, that same 
                year, before Vespasian entered Judaea, they retired with St. Simeon at their head to 
                the other side of the Jordan, occupying a small city called Pella. This strategic 
                decision saved the Christian community from the destruction that would soon befall 
                Jerusalem.
              </p>
              
              <p className="mb-6">
                After the capture and burning of Jerusalem, the Christians returned and settled among 
                the ruins until the Emperor Hadrian afterwards entirely razed it. We are told by St. 
                Epiphanius and by Eusebius that the church here flourished greatly, and that many Jews 
                were converted by the miracles wrought by the saints. This period of rebuilding and 
                evangelization was a testament to the resilience and faith of the early Christian 
                community under St. Simeon's leadership.
              </p>
              
              <p className="mb-6">
                When Vespasian and Domitian had ordered the destruction of all who were of the race of 
                David, St. Simeon had escaped their search. However, when Trajan gave a similar 
                injunction, he was denounced as being not only one of David's descendants but also a 
                Christian, and he was brought before Atticus, the Roman governor. This double 
                identification - as both a descendant of David and a Christian - made him a particular 
                target for persecution.
              </p>
              
              <p>
                He was condemned to death and, after being tortured, was crucified. Although he was 
                extremely old - tradition reports him to have attained the age of 120 - Simeon endured 
                his sufferings with a degree of fortitude which roused the admiration of Atticus 
                himself. His martyrdom at such an advanced age is a remarkable testament to his faith 
                and courage, making him one of the most venerable martyrs in Christian history.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Simeon: Cousin of Jesus and Martyr Bishop</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Exemplar of Family Faith</h3>
              <p className="mb-6">
                St. Simeon's legacy is marked by his unique position as a close relative of Jesus 
                Christ and his unwavering commitment to the faith that his cousin preached. His 
                relationship to the Holy Family gives him a special place in Christian history, 
                demonstrating that the call to discipleship extends to all members of the family of 
                God. His life shows that being related to Jesus was not just a privilege but also a 
                responsibility to live and die for the Gospel.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Episcopal Leadership</h3>
              <p className="mb-6">
                As the second bishop of Jerusalem, St. Simeon provided crucial leadership during one 
                of the most turbulent periods in the early Church's history. His decision to lead the 
                Christian community to safety in Pella before the destruction of Jerusalem shows his 
                wisdom and pastoral care. His ability to rebuild the Church after the devastation and 
                to lead many Jews to conversion through the witness of the saints demonstrates his 
                effectiveness as a spiritual leader.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness of Courageous Martyrdom</h3>
              <p className="mb-6">
                St. Simeon's martyrdom at the age of 120 is one of the most remarkable examples of 
                Christian courage in the face of persecution. His willingness to endure torture and 
                crucifixion at such an advanced age, and his fortitude in suffering, which even 
                impressed his Roman persecutor, Atticus, shows the depth of his faith and his 
                complete commitment to Christ. His martyrdom serves as an inspiration for Christians 
                of all ages to remain faithful even in the face of extreme suffering.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Bridge Between Old and New</h3>
              <p>
                As a descendant of David and a Christian, St. Simeon represents the bridge between the 
                Old Testament promises and their fulfillment in Christ. His life demonstrates how the 
                Jewish heritage and Christian faith can be united in one person, and how the promises 
                made to David's line find their ultimate fulfillment in the Church. His witness helped 
                many Jews to recognize Jesus as the Messiah and to embrace the Christian faith.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">February 18</div>
              <p className="text-gray-600">Feast of St. Simeon</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Simeon is celebrated on February 18th. This feast day honors his unique position 
                as cousin of Jesus, his leadership as bishop of Jerusalem, and his courageous 
                martyrdom at the age of 120.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for family unity, for bishops and church leaders, 
                for the Church in Jerusalem, and for the courage to remain faithful in old age. It's 
                also a day to reflect on the importance of family ties and the call to discipleship 
                that extends to all members of the family of God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for family unity, for church leaders, for 
                the Church in the Holy Land, and to ask for St. Simeon's intercession in finding 
                courage to remain faithful throughout our entire lives.
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
                  <li>• <strong>Family Unity:</strong> Patron of family relationships and unity</li>
                  <li>• <strong>Bishops:</strong> Patron of episcopal leadership</li>
                  <li>• <strong>Jerusalem:</strong> Patron of the Church in the Holy Land</li>
                  <li>• <strong>Elderly Faithful:</strong> Patron of those who remain faithful in old age</li>
                  <li>• <strong>Jewish Converts:</strong> Patron of Jews converting to Christianity</li>
                  <li>• <strong>Family of Jesus:</strong> Patron of the Holy Family's extended relatives</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Courage in Old Age:</strong> Helper for elderly Christians</li>
                  <li>• <strong>Church Leadership:</strong> Patron of bishops and pastors</li>
                  <li>• <strong>Holy Land:</strong> Helper for Christians in the Middle East</li>
                  <li>• <strong>Family Discipleship:</strong> Patron of families following Christ</li>
                  <li>• <strong>Persecution:</strong> Helper for those facing religious persecution</li>
                  <li>• <strong>Jewish-Christian Relations:</strong> Patron of dialogue and conversion</li>
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
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Simeon</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Simeon, you who were so closely related to our Lord Jesus Christ and who 
                    led the Church of Jerusalem with wisdom and courage, help me to remain faithful 
                    to my family and to my faith throughout my life.
                  </p>
                  <p>
                    You who endured martyrdom at the age of 120, teach me to have the courage to 
                    stand firm in my beliefs even in old age and in the face of persecution. Help me 
                    to be a bridge of unity and love in my family and community. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Family Unity</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Simeon, patron of family unity and cousin of Jesus, pray for all families 
                    that they may be united in faith and love.
                  </p>
                  <p>
                    Help us to follow the example of the Holy Family and to support one another in 
                    our journey of faith. May your intercession bring peace and unity to all families. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Simeon, pray for us!"
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
            <Link href="/saints/st-james-the-lesser" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. James the Lesser
                </h3>
                <p className="text-gray-700 text-sm">
                  Brother of St. Simeon, first bishop of Jerusalem, one of the twelve apostles.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joseph" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joseph
                </h3>
                <p className="text-gray-700 text-sm">
                  Foster father of Jesus, uncle of St. Simeon, patron of workers and families.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-peter" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peter
                </h3>
                <p className="text-gray-700 text-sm">
                  Prince of the Apostles, first Pope, leader of the early Church.
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