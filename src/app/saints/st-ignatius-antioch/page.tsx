import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Ignatius of Antioch - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Ignatius of Antioch, second bishop of Antioch and martyr who wrote seven famous letters.',
  keywords: [
    'st ignatius of antioch',
    'saint ignatius of antioch',
    'st ignatius of antioch biography',
    'st ignatius of antioch feast day',
    'st ignatius of antioch patron saint',
    'catholic saints',
    'early church martyrs'
  ],
  openGraph: {
    title: 'St. Ignatius of Antioch - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Ignatius of Antioch, second bishop of Antioch and martyr.',
    url: 'https://catholicbibleonline.com/saints/st-ignatius-antioch',
  },
  twitter: {
    title: 'St. Ignatius of Antioch - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Ignatius of Antioch, second bishop of Antioch and martyr.',
  }
}

export default function StIgnatiusAntiochPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Ignatius of Antioch
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Second Bishop of Antioch and Martyr of the Early Church
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Ignatius of Antioch</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 17</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Ignatius of Antioch</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Ignatius of Antioch was the second Bishop of Antioch, Syria, and a disciple of the beloved 
                Disciple John. He was consecrated Bishop around the year 69 by the Apostle Peter, the first Pope. 
                A holy man who was deeply loved by the Christian faithful, he always made it his special care to 
                defend "orthodoxy" (right teaching) and "orthopraxy" (right practice) among the early Christians.
              </p>
              
              <p className="mb-6">
                In 107, during the reign of the brutal Emperor Trajan, this holy Bishop was wrongfully sentenced 
                to death because he refused to renounce the Christian faith. He was taken under guard to Rome 
                where he was to be brutally devoured by wild beasts in a public spectacle. During his journey, 
                his travels took him through Asia Minor and Greece. He made good use of the time by writing 
                seven letters of encouragement, instruction and inspiration to the Christians in those communities. 
                We still have these letters as a great treasure of the Church today.
              </p>
              
              <p className="mb-6">
                The content of the letters addressed the hierarchy and structure of the Church as well as the 
                content of the orthodox Christian faith. It was Bishop Ignatius who first used the term "catholic" 
                to describe the whole Church. These letters connect us to the early Church and the unbroken, 
                clear teaching of the Apostles which was given to them directly by Jesus Christ. They also reveal 
                the holiness of a man of God who became himself a living letter of Christ.
              </p>
              
              <p className="mb-6">
                The shedding of his blood in the witness of holy martyrdom was the culmination of a life lived 
                conformed to Jesus Christ. Ignatius sought to offer himself, in Christ, for the sake of the 
                Church which he loved. His holy martyrdom occurred in the year 107.
              </p>
              
              <p className="mb-6">
                In his pastoral letters he regularly thanked his brother and sister Christians for their concern 
                for his well being but insisted on following through in his final witness of fidelity: "I know 
                what is to my advantage. At last I am becoming his disciple. May nothing entice me till I happily 
                make my way to Jesus Christ! Fire, cross, struggles with wild beasts, wrenching of bones, 
                mangling of limbs-let them come to me, provided only I make my way to Jesus Christ. I would 
                rather die and come to Jesus Christ than be king over the entire earth. Him I seek who died for 
                us; him I love who rose again because of us."
              </p>
              
              <p className="mb-6">
                Bishop Ignatius was not afraid of death. He knew that it had been defeated by the Master. He 
                followed the Lord Jesus into his Passion, knowing that he would rise with Him in his Resurrection. 
                He wrote to the disciples in Rome: "Permit me to imitate my suffering God ... I am God's wheat 
                and I shall be ground by the teeth of beasts, that I may become the pure bread of Christ." The 
                beauty of this Eucharistic symbolism in these words reflects the deep theology of a mystic.
              </p>
              
              <p>
                He was dedicated to defending the true teaching handed down by the Apostles so that the brothers 
                and sisters in the early Christian communities, and we who stand on their shoulders, would never 
                be led astray by false teaching. He urged them to always listen to their Bishops because they 
                were the successors of the Apostles. He died a Martyr's death in Rome, devoured by two lions in 
                one of the cruel demonstrations of Roman excess and animosity toward the true faith.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Ignatius of Antioch: Father of Church Unity</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">First Use of "Catholic"</h3>
              <p className="mb-6">
                St. Ignatius's most significant contribution to the Church was his introduction of the term 
                "catholic" to describe the universal Church. In his letter to the Smyrnaeans, he wrote: "Where 
                the bishop is present, there let the congregation gather, just as where Jesus Christ is, there 
                is the Catholic Church." This term, meaning "universal" or "according to the whole," became 
                the defining characteristic of the Church's nature and mission.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Seven Famous Letters</h3>
              <p className="mb-6">
                Ignatius's seven letters, written during his journey to martyrdom, are among the most important 
                documents of the early Church. These letters to the Ephesians, Magnesians, Trallians, Romans, 
                Philadelphians, Smyrnaeans, and to St. Polycarp provide invaluable insights into the structure, 
                beliefs, and practices of the early Christian communities. They establish the threefold ministry 
                of bishop, priest, and deacon, and emphasize the importance of unity and obedience to Church authority.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Eucharistic Devotion</h3>
              <p className="mb-6">
                Ignatius's writings reveal a deep understanding of the Eucharist and its central place in 
                Christian life. His famous metaphor of being "ground like wheat" to become "pure bread of Christ" 
                demonstrates his profound grasp of Eucharistic theology and his desire to be completely united 
                with Christ through his martyrdom. This imagery continues to inspire Christians to this day.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Defender of Orthodoxy</h3>
              <p>
                As bishop of Antioch, Ignatius was a staunch defender of orthodox teaching against various 
                heresies that threatened the early Church. He emphasized the importance of maintaining the 
                true faith handed down by the Apostles and warned against false teachers. His commitment to 
                preserving the integrity of Christian doctrine set a standard for all subsequent bishops and 
                theologians.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">October 17</div>
              <p className="text-gray-600">Feast of St. Ignatius of Antioch, Bishop and Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Ignatius's feast day is celebrated on October 17th, commemorating his martyrdom and his 
                contributions to the early Church. This feast is particularly important in the Eastern Orthodox 
                Churches, where he is venerated as one of the most important early Church Fathers and martyrs.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                In many Christian traditions, St. Ignatius's feast is celebrated with special readings from 
                his letters, particularly his famous letter to the Romans. Many churches hold special services 
                focusing on Church unity and the importance of maintaining orthodox teaching. His icon often 
                depicts him as a bishop with a lion, symbolizing his martyrdom.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                Devotees pray to St. Ignatius for strength in defending the faith, for Church unity, for 
                courage in the face of persecution, and for a deeper understanding of the Eucharist. His 
                intercession is particularly sought by bishops, theologians, and those involved in ecumenical 
                work.
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
                  <li>• <strong>Martyrs:</strong> For his courageous death for the faith</li>
                  <li>• <strong>Church Unity:</strong> For his emphasis on catholicity</li>
                  <li>• <strong>Throat Diseases:</strong> For his martyrdom by wild beasts</li>
                  <li>• <strong>Bishops:</strong> As a model of episcopal ministry</li>
                  <li>• <strong>Theologians:</strong> For his theological writings</li>
                  <li>• <strong>Antioch:</strong> As its second bishop</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Orthodoxy:</strong> For defense of true teaching</li>
                  <li>• <strong>Eucharistic Devotion:</strong> For deeper love of the Eucharist</li>
                  <li>• <strong>Courage:</strong> For strength in persecution</li>
                  <li>• <strong>Church Authority:</strong> For respect for bishops</li>
                  <li>• <strong>Unity:</strong> For reconciliation in the Church</li>
                  <li>• <strong>Martyrdom:</strong> For willingness to die for Christ</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Ignatius of Antioch</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed St. Ignatius of Antioch, Bishop and Martyr, you who were the first to use the 
                    term 'catholic' to describe the universal Church, intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    Help us to defend the true faith with the same courage and conviction that characterized 
                    your ministry. Grant us the grace to remain faithful to the teachings of the Apostles and 
                    to maintain unity in the Church.
                  </p>
                  <p className="mb-4">
                    Inspire us with your deep love for the Eucharist and your willingness to be 'ground like 
                    wheat' to become the pure bread of Christ. Help us to understand that true life comes 
                    through dying to ourselves and living for Christ.
                  </p>
                  <p>
                    Through your intercession, may we grow in courage, faith, and love for the Church, and may 
                    we always be ready to defend the truth and unity of the Catholic faith. St. Ignatius of 
                    Antioch, pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Ignatius of Antioch, defender of the faith and martyr for Christ, pray for us!"
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
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peter
                </h3>
                <p className="text-gray-700 text-sm">
                  The first Pope who consecrated Ignatius as bishop of Antioch.
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
                  The beloved disciple who was Ignatius's spiritual mentor.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-polycarp" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Polycarp
                </h3>
                <p className="text-gray-700 text-sm">
                  Bishop of Smyrna to whom Ignatius wrote one of his famous letters.
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