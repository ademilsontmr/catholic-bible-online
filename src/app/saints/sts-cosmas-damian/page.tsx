import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sts. Cosmas & Damian - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of Sts. Cosmas and Damian, twin brothers and physicians who practiced medicine without charge and were martyred for their faith.',
  keywords: [
    'sts cosmas damian',
    'saints cosmas damian',
    'sts cosmas damian biography',
    'sts cosmas damian feast day',
    'sts cosmas damian patron saint',
    'physician saints',
    'pharmacist saints',
    'medical saints',
    'twin saints',
    'arabian martyrs',
    'diocletian persecution',
    'catholic saints',
    'september 26 feast day'
  ],
  openGraph: {
    title: 'Sts. Cosmas & Damian - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of Sts. Cosmas and Damian, twin brothers and physicians who practiced medicine without charge and were martyred for their faith.',
    url: 'https://catholicbibleonline.com/saints/sts-cosmas-damian',
  },
  twitter: {
    title: 'Sts. Cosmas & Damian - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of Sts. Cosmas and Damian, twin brothers and physicians who practiced medicine without charge and were martyred for their faith.',
  }
}

export default function StsCosmasDamianPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💊</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            Sts. Cosmas & Damian
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Twin Brothers, Physicians, Martyrs, Patrons of Pharmacists
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Sts. Cosmas & Damian</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">September 26</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💊</div>
              <div className="text-sm text-gray-600">Martyrs</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of Sts. Cosmas & Damian</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Sts. Cosmas and Damian were brothers, born in Arabia, who had become eminent 
                for their skill in the science of medicine. Their background in Arabia, a 
                region known for its medical knowledge and traditions, provided them with a 
                solid foundation in the healing arts. Their expertise in medicine made them 
                highly respected practitioners in their field.
              </p>
              
              <p className="mb-6">
                Being Christians, they were filled with the spirit of charity and never took 
                money for their services. This remarkable practice of providing medical care 
                without charge was a direct expression of their Christian faith and their 
                understanding of the Gospel call to serve others selflessly. Their refusal to 
                accept payment for their medical services was a radical departure from the 
                common practice of their time and demonstrated their commitment to the 
                Christian virtue of charity.
              </p>
              
              <p className="mb-6">
                At Egaea in Cilicia, where they lived, they enjoyed the highest esteem of the 
                people. Their reputation for both medical skill and Christian charity made them 
                beloved figures in their community. The people of Egaea recognized not only 
                their medical expertise but also their generous spirit and their dedication to 
                helping others regardless of their ability to pay.
              </p>
              
              <p className="mb-6">
                When the persecution under Diocletian broke out, their very prominence rendered 
                them marked objects of persecution. Their high standing in the community and 
                their well-known Christian faith made them obvious targets for the Roman 
                authorities who were seeking to suppress Christianity throughout the empire.
              </p>
              
              <p>
                Being apprehended by order of Lysias, governor of Cilicia, they underwent 
                various torments about the year 283. Despite the brutal tortures they endured, 
                they remained faithful to their Christian beliefs and refused to renounce their 
                faith. Their martyrdom was a testament to their courage and their unwavering 
                commitment to Christ, even in the face of extreme suffering and death.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of Sts. Cosmas & Damian: Healers of Body and Soul</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Christian Charity</h3>
              <p className="mb-6">
                Sts. Cosmas and Damian's legacy is most profoundly marked by their practice of 
                providing medical care without charge. This radical act of charity was a direct 
                expression of their Christian faith and their understanding of the Gospel 
                message. Their refusal to accept payment for their services demonstrated that 
                true Christian charity knows no bounds and that the healing arts should be 
                available to all, regardless of their economic status. This aspect of their 
                legacy continues to inspire healthcare workers today to see their profession 
                as a vocation of service rather than merely a means of earning a living.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Integration of Faith and Science</h3>
              <p className="mb-6">
                As skilled physicians who were also devout Christians, Sts. Cosmas and Damian 
                represent the harmonious integration of faith and science. Their medical 
                expertise was not separate from their Christian faith but was rather an 
                expression of it. They saw their medical practice as a way to serve God by 
                serving their fellow human beings, demonstrating that scientific knowledge and 
                religious faith can work together for the good of humanity. This legacy 
                continues to inspire Christian healthcare workers to see their medical practice 
                as a form of ministry and a way to express their love for God through service 
                to others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness of Brotherly Love</h3>
              <p className="mb-6">
                As brothers who worked together in their medical practice and who suffered 
                martyrdom together, Sts. Cosmas and Damian exemplify the Christian virtue of 
                brotherly love. Their partnership in healing and their shared witness to the 
                faith demonstrate the power of familial bonds strengthened by Christian love. 
                Their story shows how family relationships can be elevated and sanctified when 
                they are centered on Christ and dedicated to serving others. This aspect of 
                their legacy speaks to the importance of family unity in the Christian life 
                and the power of working together for the common good.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patronage of Medical Professions</h3>
              <p>
                Sts. Cosmas and Damian's patronage of pharmacists and other medical 
                professionals is a recognition of the sacred nature of the healing arts. Their 
                intercession is sought by those in the medical field who wish to practice their 
                profession with the same spirit of charity and dedication that characterized 
                the saints' work. Their example reminds healthcare workers that their profession 
                is not just a job but a calling to serve God by serving the sick and suffering. 
                This patronage continues to inspire medical professionals to see their work as 
                a form of Christian ministry and to practice medicine with compassion, skill, 
                and a spirit of selfless service.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">September 26</div>
              <p className="text-gray-600">Feast of Sts. Cosmas & Damian</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                Sts. Cosmas and Damian are celebrated on September 26th. This feast day honors 
                their medical ministry, their practice of charity, and their courageous 
                martyrdom for the faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for healthcare workers, for those who are sick, 
                for the medical profession, and for the spirit of charity in all service 
                professions. It's also a day to reflect on the importance of integrating faith 
                with professional work and the call to serve others selflessly.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for healthcare workers and medical 
                professionals, for those who are ill or suffering, for the spirit of charity 
                in all service professions, and to ask for the intercession of these saints 
                in finding ways to serve others without expecting reward.
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
                  <li>• <strong>Pharmacists:</strong> Patron saints of pharmacists and pharmacy</li>
                  <li>• <strong>Physicians:</strong> Patron of medical doctors and physicians</li>
                  <li>• <strong>Healthcare Workers:</strong> Patron of all medical professionals</li>
                  <li>• <strong>Medical Students:</strong> Patron of those studying medicine</li>
                  <li>• <strong>Hospitals:</strong> Patron of hospitals and medical facilities</li>
                  <li>• <strong>Charitable Service:</strong> Patron of selfless service to others</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Sick and Suffering:</strong> Helper for those who are ill</li>
                  <li>• <strong>Medical Research:</strong> Patron of medical research and discovery</li>
                  <li>• <strong>Brotherly Love:</strong> Helper for family relationships</li>
                  <li>• <strong>Christian Charity:</strong> Patron of selfless giving</li>
                  <li>• <strong>Faith and Science:</strong> Helper for integrating faith with work</li>
                  <li>• <strong>Medical Ethics:</strong> Patron of ethical medical practice</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to Sts. Cosmas & Damian</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Sts. Cosmas and Damian, you who practiced medicine with such charity 
                    and skill, help me to serve others with the same selfless love that 
                    characterized your work.
                  </p>
                  <p>
                    You who never took money for your services, teach me to give freely of 
                    my talents and abilities. Intercede for all healthcare workers and for 
                    those who are sick and suffering. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Healthcare Workers</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Sts. Cosmas and Damian, patrons of medical professionals, watch over 
                    all those who work in healthcare and medicine.
                  </p>
                  <p>
                    Help them to practice their profession with skill, compassion, and 
                    charity. May they see their work as a form of service to God and 
                    to their fellow human beings. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "Sts. Cosmas and Damian, pray for us!"
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
            <Link href="/saints/st-luke" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Luke
                </h3>
                <p className="text-gray-700 text-sm">
                  Evangelist and physician, patron of doctors and artists.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-raphael-archangel" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Archangel Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Raphael Archangel
                </h3>
                <p className="text-gray-700 text-sm">
                  Archangel of healing, patron of travelers and medical workers.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-camillus-de-lellis" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Camillus de Lellis
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Camillians, patron of hospitals and the sick.
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