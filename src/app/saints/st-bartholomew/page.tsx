import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Bartholomew - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Bartholomew, one of the twelve apostles and martyr for the faith.',
  keywords: [
    'st bartholomew',
    'saint bartholomew',
    'apostle bartholomew',
    'st bartholomew biography',
    'st bartholomew feast day',
    'st bartholomew patron saint',
    'twelve apostles',
    'catholic saints',
    'august 24 feast day'
  ],
  openGraph: {
    title: 'St. Bartholomew - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Bartholomew, one of the twelve apostles and martyr for the faith.',
    url: 'https://catholicbibleonline.com/saints/st-bartholomew',
  },
  twitter: {
    title: 'St. Bartholomew - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Bartholomew, one of the twelve apostles and martyr for the faith.',
  }
}

export default function StBartholomewPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Bartholomew
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            One of the Twelve Apostles and Martyr for the Faith
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Bartholomew</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 24</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Apostle Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Bartholomew</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Bartholomew, one of the twelve apostles chosen by Jesus Christ, 
                lived in the 1st century and played a crucial role in the early spread 
                of Christianity. All that is known of him with certainty is that he 
                is mentioned in the synoptic gospels and Acts as one of the twelve apostles.
              </p>
              
              <p className="mb-6">
                His name, a patronymic, means "son of Tolomai" and scholars believe 
                he is the same as Nathanael mentioned in the Gospel of John, who says 
                he is from Cana and that Jesus called him an "Israelite...incapable 
                of deceit." This identification suggests that St. Bartholomew was 
                a man of great integrity and honesty, qualities that would serve him 
                well in his apostolic mission.
              </p>
              
              <p className="mb-6">
                The Roman Martyrology says he preached in India and Greater Armenia, 
                where he was flayed and beheaded by King Astyages. This brutal martyrdom 
                reflects the extreme persecution that the early apostles faced as they 
                carried the Gospel to distant lands. Tradition has the place of his 
                martyrdom as Abanopolis on the west coast of the Caspian Sea.
              </p>
              
              <p className="mb-6">
                According to tradition, St. Bartholomew also preached in Mesopotamia, 
                Persia, and Egypt, demonstrating the far-reaching nature of his missionary 
                work. His travels took him to some of the most challenging regions 
                of the ancient world, where he faced not only physical danger but 
                also the challenge of communicating the Gospel to people of different 
                cultures and languages.
              </p>
              
              <p>
                The Gospel of Bartholomew is apocryphal and was condemned in the decree 
                of Pseudo-Gelasius, indicating that while there were many stories 
                and legends about the apostle, the Church carefully distinguished 
                between authentic apostolic tradition and later additions. This careful 
                discernment helps to preserve the integrity of the apostolic witness.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Bartholomew: Apostle and Martyr</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Apostolic Witness</h3>
              <p className="mb-6">
                St. Bartholomew's legacy begins with his unique role as one of the 
                twelve apostles chosen by Jesus Christ Himself. As an eyewitness to 
                the life, death, and resurrection of Jesus, St. Bartholomew carried 
                the authentic Gospel message to distant lands. His apostolic authority 
                and direct connection to Christ make him a foundational figure in the 
                establishment of the Christian Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Integrity</h3>
              <p className="mb-6">
                Jesus's description of St. Bartholomew as an "Israelite...incapable 
                of deceit" highlights his character of honesty and integrity. This 
                quality was essential for an apostle who would be entrusted with spreading 
                the truth of the Gospel. His example teaches us the importance of 
                truthfulness and authenticity in our Christian witness.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courageous Missionary</h3>
              <p className="mb-6">
                St. Bartholomew's missionary journeys to India, Armenia, Mesopotamia, 
                Persia, and Egypt demonstrate extraordinary courage and dedication. 
                He traveled to some of the most dangerous and challenging regions 
                of the ancient world, facing not only the physical hardships of travel 
                but also the constant threat of persecution and death for his faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Martyr for the Faith</h3>
              <p>
                St. Bartholomew's martyrdom by flaying and beheading at the hands 
                of King Astyages in Armenia represents the ultimate sacrifice for 
                the faith. His willingness to endure such a brutal death rather than 
                renounce Christ serves as a powerful example of the cost of discipleship 
                and the depth of commitment required of those who follow Jesus. His 
                martyrdom has inspired countless Christians throughout history to 
                remain faithful even in the face of extreme persecution.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-red-600 mb-2">August 24</div>
              <p className="text-gray-600">Feast of St. Bartholomew</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Bartholomew is celebrated on August 24th, commemorating 
                the day of his martyrdom. This feast is celebrated as a solemnity 
                in the Roman Catholic Church, recognizing his importance as one of 
                the twelve apostles and his ultimate sacrifice for the faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Bartholomew, many people pray for the courage 
                to bear witness to their faith and for the strength to remain faithful 
                in the face of persecution. Churches may hold special services focusing 
                on the apostolic mission and the importance of spreading the Gospel 
                to all nations.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of courage, 
                for the strength to bear witness to Christ, and for the grace to remain 
                faithful even in difficult circumstances. Many also pray for missionaries 
                and for the spread of the Gospel throughout the world, asking for 
                St. Bartholomew's intercession in their work.
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
                  <li>• <strong>Armenia:</strong> Patron of Armenia</li>
                  <li>• <strong>Leather Workers:</strong> Patron of tanners and leather workers</li>
                  <li>• <strong>Bookbinders:</strong> Patron of bookbinders</li>
                  <li>• <strong>Plasterers:</strong> Patron of plasterers</li>
                  <li>• <strong>Neurological Diseases:</strong> Patron of those with nervous disorders</li>
                  <li>• <strong>Missionaries:</strong> Patron of missionaries</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Courage:</strong> Strength to bear witness to Christ</li>
                  <li>• <strong>Integrity:</strong> Help in living with honesty and truth</li>
                  <li>• <strong>Missionary Work:</strong> Success in spreading the Gospel</li>
                  <li>• <strong>Perseverance:</strong> Endurance in times of trial</li>
                  <li>• <strong>Martyrdom:</strong> Courage to remain faithful unto death</li>
                  <li>• <strong>Apostolic Zeal:</strong> Passion for evangelization</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Bartholomew</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Bartholomew, apostle of Christ and martyr for the faith, 
                    who traveled to distant lands to spread the Gospel and who gave 
                    your life rather than renounce Christ, intercede for us before 
                    the throne of God.
                  </p>
                  <p className="mb-4">
                    You who were called by Jesus as an "Israelite...incapable of deceit," 
                    help us to live with the same integrity and honesty that characterized 
                    your life. Give us the courage to bear witness to our faith and 
                    the strength to remain faithful even in the face of persecution.
                  </p>
                  <p className="mb-4">
                    You who endured the brutal martyrdom of flaying and beheading, 
                    help us to understand the cost of discipleship and to be willing 
                    to sacrifice everything for the love of Christ. Pray for all missionaries 
                    and for the spread of the Gospel throughout the world.
                  </p>
                  <p>
                    St. Bartholomew, pray for us that we may have the courage to proclaim 
                    the truth of Christ and the strength to remain faithful unto death. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Missionaries</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Bartholomew, patron of missionaries, intercede for all those 
                    who are spreading the Gospel in distant lands.
                  </p>
                  <p>
                    Help them to have the same courage and dedication that you showed 
                    in your missionary journeys. Protect them from harm and give them 
                    success in their work. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Bartholomew, pray for us!"
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
                  Prince of the Apostles and first Pope.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-thomas" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thomas
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle who preached in India.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-james-the-greater" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. James the Greater
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle and first martyr among the twelve.
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