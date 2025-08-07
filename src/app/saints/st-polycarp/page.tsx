import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Polycarp - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Polycarp, disciple of St. John the Evangelist and bishop of Smyrna, who was martyred for his faith.',
  keywords: [
    'st polycarp',
    'saint polycarp',
    'st polycarp biography',
    'st polycarp feast day',
    'st polycarp patron saint',
    'catholic saints',
    'february 23 feast day',
    'bishop of smyrna',
    'martyr saints',
    'apostolic fathers'
  ],
  openGraph: {
    title: 'St. Polycarp - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Polycarp, disciple of St. John the Evangelist and bishop of Smyrna.',
    url: 'https://catholicbibleonline.com/saints/st-polycarp',
  },
  twitter: {
    title: 'St. Polycarp - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Polycarp, disciple of St. John the Evangelist and bishop of Smyrna.',
  }
}

export default function StPolycarpPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔥</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Polycarp
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Bishop of Smyrna, Disciple of St. John the Evangelist, Martyr for the Faith
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Polycarp</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">February 23</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🔥</div>
              <div className="text-sm text-gray-600">Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Polycarp</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Polycarp was blessed with the extraordinary privilege of being a disciple of St. John 
                the Evangelist, one of the original apostles who had walked with Jesus, seen Him, and 
                touched Him. This direct connection to the apostolic tradition made Polycarp a living 
                bridge between the first generation of Christians and the Church that would follow.
              </p>
              
              <p className="mb-6">
                As bishop of Smyrna, Polycarp faced the unique challenges of the second generation of 
                Church leaders. With the apostles gone, heresies sprang up pretending to be true teaching, 
                persecution was strong, and controversies arose over liturgical practices that Jesus had 
                never laid down specific rules for. Polycarp found the answer in being true to the life 
                of Jesus and imitating that life in all things.
              </p>
              
              <p className="mb-6">
                St. Ignatius of Antioch, who knew Polycarp well, told him that "your mind is grounded in 
                God as on an immovable rock." This firm foundation was evident in how Polycarp handled 
                both heresy and Christian disagreements. When faced with Marcion, the leader of the 
                Marcionites who followed a dualistic heresy, Polycarp showed the "candid face" that 
                imitated Jesus' response to the Pharisees. When Marcion demanded respect by saying, 
                "Recognize us, Polycarp," Polycarp responded, "I recognize you, yes, I recognize the son of Satan."
              </p>
              
              <p className="mb-6">
                On the other hand, when faced with Christian disagreements, Polycarp was all forgiveness 
                and respect. One of the major controversies of the time was over the celebration of Easter. 
                The East celebrated the Passover as the Passion of Christ followed by Eucharist the next day, 
                while the West celebrated Easter on the Sunday following Passover. When Polycarp went to Rome 
                to discuss this with Pope Anicetus, they could not agree on the issue, but they found no 
                difference in their Christian beliefs. Anicetus even asked Polycarp to celebrate the Eucharist 
                in his own papal chapel.
              </p>
              
              <p>
                Polycarp faced persecution the way Christ did—not chasing after martyrdom, but avoiding it 
                until it was God's will. His church admired him for following the "gospel model," considering 
                it "a sign of love to desire not to save oneself alone, but to save also all the Christian 
                brothers and sisters." When the time finally came for his martyrdom at the age of 86, 
                Polycarp faced it with the same courage and faith that had characterized his entire life.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Polycarp: Bridge to the Apostles</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Apostolic Succession</h3>
              <p className="mb-6">
                St. Polycarp's most significant legacy is his role as a direct link to the apostolic 
                tradition. As a disciple of St. John the Evangelist, he was able to pass on the authentic 
                teachings and practices of the apostles to the next generation of Christians. This 
                apostolic succession ensured that the Church remained faithful to the original message 
                of Christ.
              </p>
              
                             <h3 className="text-xl font-semibold text-black mb-4">Model of Episcopal Leadership</h3>
               <p className="mb-6">
                 As bishop of Smyrna, Polycarp demonstrated how to lead the Church with wisdom, courage, 
                 and love. He showed that true leadership means being grounded in God like an immovable 
                 rock, while also being flexible enough to handle disagreements with charity and respect. 
                 His approach to the Easter controversy with Pope Anicetus set a model for how bishops 
                 should work together in unity despite differences in practice.
               </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Defender of Orthodoxy</h3>
              <p className="mb-6">
                Polycarp's firm stand against heresy, particularly his confrontation with Marcion, 
                established the pattern for how the Church should respond to false teachings. He showed 
                that defending the truth requires both courage and clarity, while always maintaining 
                the charity that should characterize Christian witness.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Martyrdom as Witness</h3>
              <p>
                Polycarp's martyrdom at the age of 86 became one of the most famous and well-documented 
                martyrdoms of the early Church. His calm acceptance of death, his prayer during execution, 
                and the miraculous nature of his death—where the fire formed an arch around him without 
                burning him—all served to strengthen the faith of Christians and demonstrate the power 
                of God in the lives of His saints.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">February 23</div>
              <p className="text-gray-600">Feast of St. Polycarp</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Polycarp is celebrated on February 23rd, the traditional date of his 
                martyrdom in 156 AD. This date commemorates his entrance into eternal life and his 
                witness to the faith that continues to inspire Christians today.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Significance</h3>
              <p className="mb-6">
                St. Polycarp's feast day is particularly significant because it connects us to the 
                very beginnings of the Church. As one of the Apostolic Fathers, his life and death 
                help us understand how the early Church maintained fidelity to Christ's teachings 
                while adapting to new challenges and circumstances.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Modern Relevance</h3>
              <p>
                In today's world, St. Polycarp's feast day serves as a reminder of the importance 
                of staying grounded in the apostolic tradition while facing new challenges. It's a 
                day to pray for bishops and Church leaders, and to remember the courage needed to 
                stand firm in the faith when faced with opposition or persecution.
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
                  <li>• <strong>Bishops:</strong> Patron of episcopal leadership</li>
                  <li>• <strong>Ear Infections:</strong> Patron of those suffering from ear problems</li>
                  <li>• <strong>Dysentery:</strong> Patron of those with intestinal disorders</li>
                  <li>• <strong>Turkey:</strong> Patron of the country where he served</li>
                  <li>• <strong>Orthodoxy:</strong> Defender of true Christian teaching</li>
                  <li>• <strong>Apostolic Succession:</strong> Guardian of apostolic tradition</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Church Unity:</strong> Help in resolving Christian disagreements</li>
                  <li>• <strong>Heresy Resistance:</strong> Strength to stand against false teachings</li>
                  <li>• <strong>Episcopal Ministry:</strong> Guidance for bishops and Church leaders</li>
                  <li>• <strong>Persecution:</strong> Courage for those facing religious persecution</li>
                  <li>• <strong>Faithful Witness:</strong> Help in living authentic Christian life</li>
                  <li>• <strong>Apostolic Tradition:</strong> Preservation of true Christian teaching</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Polycarp</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Saint Polycarp, sometimes Christ seems so far away from us. Centuries have passed 
                    since he and the apostles walked the earth. Help us to see that he is close to us 
                    always and that we can keep him near by imitating his life as you did.
                  </p>
                  <p className="mb-4">
                    Teach us to be grounded in God as on an immovable rock, to stand firm against 
                    heresy with courage and clarity, and to handle disagreements with charity and respect.
                  </p>
                  <p>
                    May we, like you, be faithful witnesses to the apostolic tradition and courageous 
                    defenders of the true faith. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Polycarp's Prayer of Martyrdom</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Lord God Almighty, Father of your beloved and blessed Son Jesus Christ, through 
                    whom we have received knowledge of you, God of angels and powers, of the whole 
                    creation and of the whole race of the righteous who live in your sight, I bless you, 
                    for having made me worthy of this day and hour, I bless you, because I may have a part, 
                    along with the martyrs, in the chalice of your Christ, to resurrection in eternal life, 
                    resurrection both of soul and body in the incorruptibility of the Holy Spirit.
                  </p>
                  <p className="mb-4">
                    May I be received today, as a rich and acceptable sacrifice, among those who are in 
                    your presence, as you have prepared and foretold and fulfilled, God who is faithful 
                    and true. For this and for all benefits I praise you, I bless you, I glorify you, 
                    through the eternal and heavenly High Priest, Jesus Christ, your beloved Son, through 
                    whom be to you with him and the Holy Spirit glory, now and for all the ages to come. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Polycarp, pray for us to be grounded in God as on an immovable rock!"
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
            <Link href="/saints/st-john" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John the Evangelist
                </h3>
                <p className="text-gray-700 text-sm">
                  Polycarp's teacher and mentor, the beloved disciple who wrote the Gospel of John and the Book of Revelation.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-ignatius-antioch" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Ignatius of Antioch
                </h3>
                <p className="text-gray-700 text-sm">
                  Bishop of Antioch and fellow martyr, who praised Polycarp's mind as "grounded in God as on an immovable rock."
                </p>
              </div>
            </Link>

            <Link href="/saints/st-stephen" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Stephen
                </h3>
                <p className="text-gray-700 text-sm">
                  First Christian martyr, whose example inspired Polycarp and other early martyrs in their witness to Christ.
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