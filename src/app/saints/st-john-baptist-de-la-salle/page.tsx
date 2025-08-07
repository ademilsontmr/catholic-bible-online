import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. John Baptist de La Salle - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. John Baptist de La Salle, founder of the Brothers of the Christian Schools and patron saint of all educators.',
  keywords: [
    'st john baptist de la salle',
    'saint john baptist de la salle',
    'st john baptist de la salle biography',
    'st john baptist de la salle feast day',
    'st john baptist de la salle patron saint',
    'catholic saints',
    'april 7 feast day',
    'educators patron saint'
  ],
  openGraph: {
    title: 'St. John Baptist de La Salle - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John Baptist de La Salle, founder of the Brothers of the Christian Schools.',
    url: 'https://catholicbibleonline.com/saints/st-john-baptist-de-la-salle',
  },
  twitter: {
    title: 'St. John Baptist de La Salle - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John Baptist de La Salle, founder of the Brothers of the Christian Schools.',
  }
}

export default function StJohnBaptistDeLaSallePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. John Baptist de La Salle
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Founder of the Brothers of the Christian Schools, Patron of All Educators
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. John Baptist de La Salle</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">April 7</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📚</div>
              <div className="text-sm text-gray-600">Education</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. John Baptist de La Salle</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. John Baptist de La Salle was born in 1651, in Reims, France. He was the eldest son of wealthy parents. 
                At the age of eleven, La Salle was committed to becoming a priest. At the age of sixteen, he was named 
                Canon of Reims Cathedral. At the age of eighteen, he received a master's degree in classical literature 
                and arts, as well as philosophy.
              </p>
              
              <p className="mb-6">
                Sadly, La Salle's parents died within a year of each other in 1671 and 1672. La Salle had to manage his 
                parent's estate which included educating his four brothers and two sisters. Once this was done, he was 
                ordained to the priesthood on April 9, 1678. He was 26 years old. He continued his studies until he 
                received his doctorate in theology.
              </p>
              
              <p className="mb-6">
                During this time, La Salle also worked with the Sisters of the Child Jesus to educate girls, serving as 
                chaplain and confessor for their school. While performing this work, he met Adrian Nyel, who was himself 
                a supervisor of teachers at a boys school in Reims. Through Nyel, a wealthy woman asked La Salle to be 
                involved with the endowment of a new school for poor children. She provided the money, as long as La Salle 
                agreed to help run the school.
              </p>
              
              <p className="mb-6">
                La Salle gradually became preoccupied with work at the new school. He was aware that teachers needed 
                training and direction, and that the children had few opportunities for success. He calculated that if 
                he lent his talents to the school, and worked with both teachers and students, he could improve their lives.
              </p>
              
              <p className="mb-6">
                La Salle worked with the teachers to educate them and teach them manners. He invited them to live in his 
                home where he provided them with direction. This made them more effective with the students, and in turn 
                improved outcomes for them.
              </p>
              
              <p className="mb-6">
                There was a larger problem. Poverty was widespread in France during this time, and few families could 
                afford to educate their children. La Salle felt the best way to approach this problem would be to establish 
                a community devoted to the education of children, regardless of their ability to pay. He resigned his post 
                as Canon at the Cathedral, left his comfortable family home to live with the teachers, and established 
                the Brothers of the Christian Schools.
              </p>
              
              <p className="mb-6">
                Surprisingly, this approach brought resistance from both the secular education system and the Church. 
                The Church was initially opposed to the foundation of an order committed to education, and the secular 
                educators were opposed to the elimination of tuition. They felt it would reduce the prices people would 
                be willing to pay them.
              </p>
              
              <p className="mb-6">
                Nonetheless, La Salle was successful. He even expanded his school to offer teaching to young men.
              </p>
              
              <p className="mb-6">
                In 1685, La Salle established the first school for the training of educators in Reims.
              </p>
              
              <p className="mb-6">
                La Salle worked as an educator all his life. He lived until 1719, when he died on April 7, which happened 
                to be Good Friday.
              </p>
              
              <p>
                La Salle was beatified by Pope Leo XIII on February 19, 1888 and canonized by him on May 24, 1900. 
                His feast day is April 7. He is the patron saint of all educators.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. John Baptist de La Salle: Patron of All Educators</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Revolution in Education</h3>
              <p className="mb-6">
                St. John Baptist de La Salle revolutionized the educational system by establishing free schools for poor 
                children, democratizing access to quality education. His vision of education as a right for all, regardless 
                of social status, transformed the educational landscape of his time and continues to inspire modern 
                educational reforms.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Formation of Teachers</h3>
              <p className="mb-6">
                La Salle created the first school for teacher training, establishing professional standards for teaching 
                and pedagogy. His innovative approach to teacher formation emphasized not only academic knowledge but also 
                moral character and spiritual development, creating a holistic model of educator preparation.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Brothers of the Christian Schools</h3>
              <p className="mb-6">
                The religious order he founded, the Brothers of the Christian Schools, continues to serve in educational 
                institutions worldwide. Their commitment to Christian education, combined with academic excellence, has 
                influenced millions of students and educators across generations.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Christian Education Model</h3>
              <p>
                La Salle's integration of Christian values into the educational curriculum created a model that forms 
                not only the mind but also the character of students. His approach to education as a means of spiritual 
                and intellectual formation continues to guide Catholic education today.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">April 7</div>
              <p className="text-gray-600">Memorial of St. John Baptist de La Salle, Priest</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. John Baptist de La Salle is celebrated on April 7th, the date of his death in 1719, 
                which coincidentally fell on Good Friday that year. This memorial is particularly significant for 
                educators, teachers, and all those involved in the ministry of Christian education.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Educational Significance</h3>
              <p className="mb-6">
                This feast day serves as a reminder of the sacred vocation of teaching and the importance of education 
                in the mission of the Church. It's a day to pray for all educators and to reflect on the Christian 
                values that should guide educational practice.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for educators, to seek St. John Baptist de La Salle's 
                intercession for educational institutions, and to reflect on how we can better serve the educational 
                needs of our communities, especially the poor and marginalized.
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
                  <li>• <strong>All Educators:</strong> Patron of teachers and educational professionals</li>
                  <li>• <strong>Christian Schools:</strong> Protector of Catholic educational institutions</li>
                  <li>• <strong>Students:</strong> Patron of those seeking knowledge and academic formation</li>
                  <li>• <strong>Teacher Training:</strong> Patron of teacher education programs</li>
                  <li>• <strong>Educational Reform:</strong> Patron of educational innovation and improvement</li>
                  <li>• <strong>Poor Students:</strong> Protector of underprivileged children seeking education</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Educational Success:</strong> Helper in academic achievements</li>
                  <li>• <strong>Teaching Vocation:</strong> Patron of those called to teach</li>
                  <li>• <strong>School Administration:</strong> Helper in educational leadership</li>
                  <li>• <strong>Learning Difficulties:</strong> Patron of students with special needs</li>
                  <li>• <strong>Educational Funding:</strong> Helper in securing resources for schools</li>
                  <li>• <strong>Academic Excellence:</strong> Patron of high educational standards</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. John Baptist de La Salle</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. John Baptist de La Salle, who dedicated your life to the education of youth, especially 
                    the poor and needy, pray for us who work in the field of education. Help us to be patient, 
                    dedicated, and loving with our students, as you were.
                  </p>
                  <p className="mb-4">
                    May we always seek not only to teach knowledge but to form character and cultivate faith in our 
                    students. Grant us the wisdom to see each student as a precious soul to be formed and guided.
                  </p>
                  <p>
                    Through your intercession, may we be blessed with the grace to fulfill our noble mission of 
                    education. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Educators</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Almighty God, who chose St. John Baptist de La Salle to be the patron of educators, grant us 
                    the grace to follow his example of dedication and love for education. May we, like him, see in 
                    each student a precious soul to be formed and guided.
                  </p>
                  <p>
                    Bless all teachers and educators, giving them wisdom, patience, and strength to fulfill their 
                    noble mission. Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Students</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. John Baptist de La Salle, who so loved students and dedicated your life so that they might 
                    have access to education, intercede for all students who today seek knowledge. May they value 
                    the gift of education, strive in their studies, and grow not only in wisdom but also in virtue 
                    and piety.
                  </p>
                  <p>
                    May they find in their teachers true guides and mentors. Through Christ our Lord. Amen."
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
            <Link href="/saints/st-jerome-emiliani" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Charity Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Jerome Emiliani
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Somascan Fathers, dedicated to the care of orphans and abandoned children.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john-bosco" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John Bosco
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Salesians, dedicated to the education and formation of youth.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joseph" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Marian Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joseph
                </h3>
                <p className="text-gray-700 text-sm">
                  The foster father of Jesus and husband of Mary, patron of fathers and workers.
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