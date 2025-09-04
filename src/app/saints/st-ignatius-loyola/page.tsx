import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Ignatius Loyola - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Ignatius Loyola, founder of the Society of Jesus and author of the Spiritual Exercises.',
  keywords: [
    'st ignatius loyola',
    'saint ignatius loyola',
    'st ignatius loyola biography',
    'st ignatius loyola feast day',
    'st ignatius loyola patron saint',
    'founder of jesuits',
    'july 31 feast day',
    'catholic saints',
    'society of jesus',
    'spiritual exercises'
  ],
  openGraph: {
    title: 'St. Ignatius Loyola - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Ignatius Loyola, founder of the Society of Jesus and author of the Spiritual Exercises.',
    url: 'https://catholicbibleonline.com/saints/st-ignatius-loyola',
  },
  twitter: {
    title: 'St. Ignatius Loyola - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Ignatius Loyola, founder of the Society of Jesus and author of the Spiritual Exercises.',
  }
}

export default function StIgnatiusLoyolaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Ignatius Loyola
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Founder of the Society of Jesus, Author of Spiritual Exercises, Patron of Soldiers and Educators
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Ignatius Loyola</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 31</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Founder</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Ignatius Loyola</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Born Inigo Lopez de Loyola in 1491, the man known as Ignatius of Loyola entered the world in Loiola, Spain. At the time, the name of the village was spelled "Loyola," hence the discrepancy. Inigo came of age in Azpeitia, in northern Spain. Loyola is a small village at the southern end of Azpeitia. Inigio was the youngest of thirteen children. His mother died when he was just seven, and he was then raised by Maria de Garin, who was the wife of a blacksmith. His last name, "Loyola" was taken from the village of his birth.
              </p>
              
              <p className="mb-6">
                Despite the misfortune of losing his mother he was still a member of the local aristocracy and was raised accordingly. Inigio was an ambitious young man who had dreams of becoming a great leader. He was influenced by stories such as The Song of Roland and El Cid. At the age of sixteen, he began a short period of employment working for Juan Velazquez, the treasurer of Castile. By the time he was eighteen, he became a soldier and would fight for Antonio Manrique de Lara, Duke of Nájera and Viceroy of Navarre.
              </p>
              
              <p className="mb-6">
                Seeking wider acclaim, he began referring to himself as Ignatius. Ignatius was a variant of Inigio. The young Ignatius also gained a reputation as a duelist. According to one story, he killed a Moor with whom he argued about the divinity of Jesus. Ignatius fought in several battles under the leadership of the Duke of Najera. He had a talent for emerging unscathed, despite participating in many battles. His talent earned him promotions and soon he commanded his own troops.
              </p>
              
              <p className="mb-6">
                In 1521, while defending the town of Pamplona against French attack, Ignatius was struck by a cannonball in the legs. One leg was merely broken, but the other was badly mangled. To save his life and possibly his legs, doctors performed several surgeries. There were no anesthetics during this time, so each surgery was painful. Despite their best efforts, Ignatius' condition deteriorated. After suffering for a month, his doctors warned him to prepare for death.
              </p>
              
              <p>
                On June 29, 1521, on the feast of Saints Peter and Paul, Ignatius began to improve. As soon as he was healthy enough to bear it, part of one leg was amputated which while painful, sped his recovery. During this time of bodily improvement, Ignatius began to read whatever books he could find. Most of the books he obtained were about the lives of the saints and Christ. These stories had a profound impact on him, and he became more devout.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Ignatius Loyola: Founder of the Society of Jesus</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Conversion and Discernment</h3>
              <p className="mb-6">
                One story in particular influenced him, "De Vita Christi" (The life of Christ). The story offers commentary on the life of Christ and suggested a spiritual exercise that required visualizing oneself in the presence of Christ during the episodes of His life. The book would inspire Ignatius' own spiritual exercises. As he lay bedridden, Ignatius developed a desire to become a working servant of Christ. He especially wanted to convert non-Christians. Among his profound realizations, was that some thoughts brought him happiness and others sorrow. When he considered the differences between these thoughts, he recognized that two powerful forces were acting upon him. Evil brought him unpleasant thoughts while God brought him happiness. Ignatius discerned God's call, and began a new way of life, following God instead of men.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Pilgrimage and Spiritual Formation</h3>
              <p className="mb-6">
                By the spring of 1522, Ignatius had recovered enough to leave bed. On March 25, 1522, he entered the Benedictine monastery, Santa Maria de Montserrat. Before an image of the Black Madonna, he laid down his military garments. He gave his other clothes away to a poor man. He then walked to a hospital in the town of Manresa. In exchange for a place to live, he performed work around the hospital. He begged for his food. When he was not working or begging, he would go into a cave and practice spiritual exercises. His time in prayer and contemplation helped him to understand himself better. He also gained a better understanding of God and God's plan for him.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Education and Theological Formation</h3>
              <p className="mb-6">
                The ten months he spent between the hospital and the cavern were difficult for Ignatius. He suffered from doubts, anxiety and depression. But he also recognized that these were not from God. Ignatius began recording his thoughts and experiences in a journal. This journal would be useful later for developing new spiritual exercises for the tens of thousands of people who would follow him. Those exercises remain invaluable today and are still widely practiced by religious and laity alike. The next year, in 1523, Ignatius made a pilgrimage to the Holy Land. His goal was to live there and convert non-believers. However, the Holy Land was a troubled place and Church officials did not want Ignatius to complicate things further. They asked him to return after just a fortnight.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Academic Pursuits and Inquisition</h3>
              <p className="mb-6">
                Ignatius realized he needed to obtain a complete education if he wanted to convert people. Returning to Barcelona, Ignatius attended a grammar school, filled with children, to learn Latin and other beginning subjects. He was blessed with a great teacher during this time, Master Jeronimo Ardevol. After completing his primary education, Ignatius traveled to Alcala, then Salamanca, where he studied at universities. In addition to studying, Ignatius often engaged others in lengthy conversations about spiritual matters. These conversations attracted the attention of the Inquisition. The Inquisition accused Ignatius of preaching without any formal education in theology. Without this training, it was likely that Ignatius could introduce heresy by way of conversation and misunderstanding. Ignatius was questioned three times by the Inquisition, but he was always exonerated.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Foundation of the Society of Jesus</h3>
              <p>
                Ignatius eventually decided he needed more education, so he traveled north, seeking better schools and teachers. He was 38 years old when he entered the College of Saint Barbe of the University of Paris. This education was very structured and formalized. Later, Ignatius would be inspired to copy this model when establishing schools. While at school in Paris, Ignatius roomed with Peter Faber and Francis Xavier. Faber was French and Xavier was Basque. The men became friends and Ignatius led them in his spiritual exercises. Other men soon joined their exercises and became followers of Ignatius. The group began to refer to themselves as "Friends in the Lord," an apt description. Pope Paul III received the group and approved them as an official religious order in 1540. They called themselves the Society of Jesus. Some people who did not appreciate their efforts dubbed them "Jesuits" in an attempt to disparage them. While the name stuck, by virtue of their good work the label lost its negative connotation.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">July 31</div>
              <p className="text-gray-600">Feast of St. Ignatius Loyola, Founder of the Society of Jesus</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Ignatius Loyola is celebrated on July 31st, commemorating the day of his death in 1556 at the age of 64. St. Ignatius Loyola was beatified by Pope Paul V on July 27, 1609 and canonized on March 12, 1622. His feast day serves as a reminder of the importance of spiritual discernment, education, and the power of conversion. His life demonstrates the transformative power of God's grace and the importance of following God's call, even when it requires leaving behind a comfortable life for one of service and sacrifice.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. Ignatius Loyola's remarkable contributions to spiritual formation and education. His feast day serves as a reminder of the importance of the Spiritual Exercises, the value of education, and the courage to follow God's call. Many Jesuit institutions and schools celebrate this day with special Masses and educational programs about Ignatian spirituality. The day also emphasizes the importance of discernment in making life decisions and the value of serving others through education and spiritual guidance. Many people also reflect on their own spiritual journey and consider making the Spiritual Exercises.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. Ignatius Loyola for his intercession in matters of discernment, education, and spiritual formation. Many people also pray for students, teachers, and those seeking God's will in their lives. His example encourages us to be open to God's call, to value education and learning, and to serve others with generosity and compassion. St. Ignatius Loyola's legacy reminds us that God can transform even the most unlikely candidates into powerful instruments of His grace and that education and spiritual formation are essential for effective ministry and service.
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
                  <li>• <strong>Society of Jesus:</strong> Patron of the Jesuit order</li>
                  <li>• <strong>Soldiers:</strong> Patron of military personnel</li>
                  <li>• <strong>Educators:</strong> Patron of teachers and professors</li>
                  <li>• <strong>Education:</strong> Patron of learning and schools</li>
                  <li>• <strong>Spiritual Directors:</strong> Patron of spiritual guidance</li>
                  <li>• <strong>Retreats:</strong> Patron of spiritual exercises</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Discernment:</strong> Helper in making life decisions</li>
                  <li>• <strong>Conversion:</strong> Patron of spiritual transformation</li>
                  <li>• <strong>Military Chaplains:</strong> Helper for armed forces</li>
                  <li>• <strong>Universities:</strong> Patron of higher education</li>
                  <li>• <strong>Missionaries:</strong> Helper for evangelization</li>
                  <li>• <strong>Spiritual Formation:</strong> Patron of personal growth</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Ignatius Loyola</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Ignatius Loyola, founder of the Society of Jesus and author of the Spiritual Exercises, 
                    who with courage and wisdom transformed from a soldier to a servant of Christ, help us to be open to 
                    God's call and to discern His will in our lives. Through your intercession, may we have the strength 
                    to leave behind what holds us back, the wisdom to value education and spiritual formation, and the 
                    generosity to serve others through teaching and guidance. Help us to be faithful instruments of God's 
                    grace and to work for the greater glory of God. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Ignatius Loyola, pray for us!"
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
            <Link href="/saints/st-francis-xavier" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis Xavier
                </h3>
                <p className="text-gray-700 text-sm">
                  Fellow Jesuit and great missionary to Asia.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-charles-borromeo" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Charles Borromeo
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great reformer of the Counter-Reformation period.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-philip-neri" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Philip Neri
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great reformer and founder of the Oratorians.
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