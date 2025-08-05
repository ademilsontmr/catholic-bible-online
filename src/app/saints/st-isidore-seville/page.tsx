import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Isidore of Seville - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Isidore of Seville, Doctor of the Church and the greatest teacher in Spain, known for his love of learning and forgiveness.',
  keywords: [
    'st isidore seville',
    'saint isidore seville',
    'st isidore biography',
    'st isidore feast day',
    'st isidore patron saint',
    'doctor of the church',
    'greatest teacher spain',
    'catholic saints',
    'april 4 feast day'
  ],
  openGraph: {
    title: 'St. Isidore of Seville - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Isidore of Seville, Doctor of the Church and the greatest teacher in Spain.',
    url: 'https://catholicbibleonline.com/saints/st-isidore-seville',
  },
  twitter: {
    title: 'St. Isidore of Seville - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Isidore of Seville, Doctor of the Church and the greatest teacher in Spain.',
  }
}

export default function StIsidoreSevillePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Isidore of Seville
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Doctor of the Church, Greatest Teacher in Spain, Model of Forgiveness
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Isidore of Seville</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">April 4</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📚</div>
              <div className="text-sm text-gray-600">Doctor of Church</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Isidore of Seville</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Isidore was literally born into a family of saints in sixth century Spain. 
                Two of his brothers, Leander and Fulgentius, and one of his sisters, Florentina, 
                are revered as saints in Spain. It was also a family of leaders and strong minds 
                with Leander and Fulgentius serving as bishops and Florentina as abbess.
              </p>
              
              <p className="mb-6">
                This didn't make life easier for Isidore. To the contrary, Leander may have been 
                holy in many ways, but his treatment of his little brother shocked many even at 
                the time. Leander, who was much older than Isidore, took over Isidore's education 
                and his pedagogical theory involved force and punishment. We know from Isidore's 
                later accomplishments that he was intelligent and hard-working, so it is hard to 
                understand why Leander thought abuse would work instead of patience.
              </p>
              
              <p className="mb-6">
                One day, the young boy couldn't take any more. Frustrated by his inability to learn 
                as fast as his brother wanted and hurt by his brother's treatment, Isidore ran away. 
                But though he could escape his brother's hand and words, he couldn't escape his own 
                feeling of failure and rejection.
              </p>
              
              <p className="mb-6">
                When he finally let the outside world catch his attention, he noticed water dripping 
                on the rock near where he sat. The drops of water that fell repeatedly carried no 
                force and seemed to have no effect on the solid stone. And yet he saw that over time, 
                the water drops had worn holes in the rock.
              </p>
              
              <p className="mb-6">
                Isidore realized that if he kept working at his studies, his seemingly small efforts 
                would eventually pay off in great learning. He also may have hoped that his efforts 
                would also wear down the rock of his brother's heart.
              </p>
              
              <p className="mb-6">
                When he returned home, however, his brother in exasperation confined him to a cell 
                (probably in a monastery) to complete his studies, not believing that he wouldn't 
                run away again. Either there must have been a loving side to this relationship or 
                Isidore was remarkably forgiving even for a saint, because later he would work side 
                by side with his brother and after Leander's death, Isidore would complete many of 
                the projects he began including a missal and breviary.
              </p>
              
              <p className="mb-6">
                In a time where it's fashionable to blame the past for our present and future problems, 
                Isidore was able to separate the abusive way he was taught from the joy of learning. 
                He didn't run from learning after he left his brother but embraced education and made 
                it his life's work. Isidore rose above his past to become known as the greatest teacher in Spain.
              </p>
              
              <p className="mb-6">
                His love of learning made him promote the establishment of a seminary in every diocese 
                of Spain. He didn't limit his own studies and didn't want others to as well. In a unique 
                move, he made sure that all branches of knowledge including the arts and medicine were 
                taught in the seminaries.
              </p>
              
              <p className="mb-6">
                His encyclopedia of knowledge, the Etymologies, was a popular textbook for nine centuries. 
                He also wrote books on grammar, astronomy, geography, history, and biography as well as 
                theology. When the Arabs brought study of Aristotle back to Europe, this was nothing new 
                to Spain because Isidore's open mind had already reintroduced the philosopher to students there.
              </p>
              
              <p className="mb-6">
                As bishop of Seville for 37 years, succeeding Leander, he set a model for representative 
                government in Europe. Under his direction, and perhaps remembering the tyrannies of his 
                brother, he rejected autocratic decision-making and organized synods to discuss government 
                of the Spanish Church.
              </p>
              
              <p className="mb-6">
                Still trying to wear away rock with water, he helped convert the barbarian Visigoths 
                from Arianism to Christianity. He lived until almost 80. As he was dying his house was 
                filled with crowds of poor he was giving aid and alms to. One of his last acts was to 
                give all his possessions to the poor.
              </p>
              
              <p>
                When he died in 636, this Doctor of the Church had done more than his brother had ever 
                hoped; the light of his learning caught fire in Spanish minds and held back the Dark 
                Ages of barbarism from Spain. But even greater than his outstanding mind must have been 
                the genius of his heart that allowed him to see beyond rejection and discouragement to 
                joy and possibility.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Isidore of Seville: Doctor of the Church</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Isidore's legacy is one of extraordinary forgiveness and the triumph of love over 
                abuse. His ability to separate the joy of learning from the painful way he was taught 
                demonstrates the power of grace to transform suffering into wisdom and compassion.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Forgiveness</h3>
              <p className="mb-6">
                Despite the abuse he suffered at the hands of his brother Leander, St. Isidore not only 
                forgave him but worked alongside him and completed his projects after his death. This 
                remarkable forgiveness shows the depth of his holiness and his understanding of Christian love.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Greatest Teacher in Spain</h3>
              <p className="mb-6">
                St. Isidore's love of learning and his comprehensive approach to education established 
                him as the greatest teacher in Spain. His encyclopedia, the Etymologies, was used as 
                a textbook for nine centuries, demonstrating the lasting impact of his scholarship.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Champion of Education</h3>
              <p>
                St. Isidore's promotion of seminaries in every diocese and his insistence on teaching 
                all branches of knowledge, including the arts and medicine, established a model for 
                comprehensive education that influenced the development of learning throughout Europe.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">April 4</div>
              <p className="text-gray-600">Feast of St. Isidore of Seville</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Isidore of Seville is celebrated on April 4th, commemorating his 
                death and honoring his heroic virtues. This date is especially significant for students, 
                teachers, and all who seek wisdom and learning.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                In Spain and throughout the Catholic world, this feast day is celebrated with special 
                prayers for students and teachers. Many educational institutions pray to St. Isidore 
                for guidance in their studies and teaching.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of wisdom, for success in 
                studies, for the grace of forgiveness, and for the strength to overcome past hurts 
                and embrace learning and growth.
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
                  <li>• <strong>Students:</strong> Patron of all students</li>
                  <li>• <strong>Teachers:</strong> Patron of educators</li>
                  <li>• <strong>Schools:</strong> Patron of educational institutions</li>
                  <li>• <strong>Internet:</strong> Patron of the internet and technology</li>
                  <li>• <strong>Computer Users:</strong> Patron of computer programmers</li>
                  <li>• <strong>Spain:</strong> Patron saint of Spain</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Academic Success:</strong> Help in studies and learning</li>
                  <li>• <strong>Forgiveness:</strong> Grace to forgive past hurts</li>
                  <li>• <strong>Wisdom:</strong> Gift of wisdom and understanding</li>
                  <li>• <strong>Educational Work:</strong> Success in teaching</li>
                  <li>• <strong>Technology:</strong> Guidance in using technology well</li>
                  <li>• <strong>Overcoming Abuse:</strong> Healing from past trauma</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Isidore of Seville</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Isidore of Seville, Doctor of the Church and greatest teacher in Spain, 
                    who through your love of learning and remarkable forgiveness became a beacon of 
                    wisdom and grace, intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    You who overcame the abuse of your brother and turned suffering into wisdom, 
                    help us to forgive those who have hurt us and to see beyond our past difficulties 
                    to the joy and possibility that lie ahead.
                  </p>
                  <p className="mb-4">
                    You who dedicated your life to education and the pursuit of knowledge, help us 
                    to love learning and to use our knowledge for the glory of God and the good of others. 
                    Guide students and teachers in their work, and help us to be instruments of wisdom 
                    and truth in the world.
                  </p>
                  <p>
                    St. Isidore of Seville, pray for us! Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Isidore of Seville, pray for us!"
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
            <Link href="/saints/st-jerome" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Jerome
                </h3>
                <p className="text-gray-700 text-sm">
                  Doctor of the Church and translator of the Vulgate Bible.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-augustine-hippo" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Augustine of Hippo
                </h3>
                <p className="text-gray-700 text-sm">
                  Doctor of the Church and great theologian and philosopher.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-thomas-aquinas" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thomas Aquinas
                </h3>
                <p className="text-gray-700 text-sm">
                  Doctor of the Church and greatest theologian of the Middle Ages.
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