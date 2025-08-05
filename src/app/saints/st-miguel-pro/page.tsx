import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Miguel Pro - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Miguel Pro, Jesuit priest and martyr who died proclaiming "Viva Cristo Rey".',
  keywords: [
    'st miguel pro',
    'saint miguel pro',
    'st miguel pro juarez',
    'miguel pro biography',
    'miguel pro feast day',
    'miguel pro patron saint',
    'jesuit martyr',
    'viva cristo rey',
    'mexico martyr',
    'november 23 feast day'
  ],
  openGraph: {
    title: 'St. Miguel Pro - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Miguel Pro, Jesuit priest and martyr who died proclaiming "Viva Cristo Rey".',
    url: 'https://catholicbibleonline.com/saints/st-miguel-pro',
  },
  twitter: {
    title: 'St. Miguel Pro - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Miguel Pro, Jesuit priest and martyr who died proclaiming "Viva Cristo Rey".',
  }
}

export default function StMiguelProPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">✝️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Miguel Pro
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Jesuit Priest and Martyr, "Viva Cristo Rey"
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Miguel Pro</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">November 23</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">✝️</div>
              <div className="text-sm text-gray-600">Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Miguel Pro</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Born on January 13, 1891 in Guadalupe, Mexico, Miguel Agustin Pro Juarez was the eldest son of Miguel Pro and Josefa Juarez. Miguelito, as his doting family called him, was, from an early age, intensely spiritual and equally intense in his mischievousness, frequently exasperating his family with his humor and practical jokes. As a child, he had a daring precociousness that sometimes went too far, tossing him into near-death accidents and illnesses.
              </p>
              
              <p className="mb-6">
                On regaining consciousness after one of these episodes, young Miguel opened his eyes and blurted out to his frantic parents, "I want some cocol!" (a colloquial term for his favorite sweet bread). "Cocol" became his nickname, which he would later adopt as a code name during his clandestine ministry. Miguel was particularly close to his older sister and after she entered a cloistered convent, he came to recognize his own vocation to the priesthood.
              </p>
              
              <p className="mb-6">
                Although he was popular with the senoritas and had prospects of a lucrative career managing his father's thriving business concerns, Miguel renounced everything for Christ his King and entered the Jesuit novitiate in El Llano, Michoacan in 1911. He studied in Mexico until 1914, when a tidal wave of anti-Catholicism crashed down upon Mexico, forcing the novitiate to disband and flee to the United States, where Miguel and his brother seminarians trekked through Texas and New Mexico before arriving at the Jesuit house in Los Gatos, California.
              </p>
              
              <p className="mb-6">
                In 1915, Miguel was sent to a seminary in Spain, where he remained until 1924, when he went to Belgium for his ordination to the priesthood in 1925. Miguel suffered from a severe stomach problem and after three operations, when his health did not improve, his superiors, in 1926, allowed him to return to Mexico in spite of the grave religious persecution in that country.
              </p>
              
              <p className="mb-6">
                The churches were closed and priests went into hiding. Miguel spent the rest of his life in a secret ministry to the sturdy Mexican Catholics. In addition to fulfilling their spiritual needs, he also carried out the works of mercy by assisting the poor in Mexico City with their temporal needs. He adopted many interesting disguises in carrying out his secret ministry. He would come in the middle of the night dressed as a beggar to baptize infants, bless marriages and celebrate Mass. He would appear in jail dressed as a police officer to bring Holy Viaticum to condemned Catholics. When going to fashionable neighborhoods to procure for the poor, he would show up at the doorstep dressed as a fashionable businessman with a fresh flower on his lapel.
              </p>
              
              <p className="mb-6">
                His many exploits could rival those of the most daring spies. In all that he did, however, Fr. Pro remained obedient to his superiors and was filled with the joy of serving Christ, his King. Falsely accused in the bombing attempt on a former Mexican president, Miguel became a wanted man. Betrayed to the police, he was sentenced to death without the benefit of any legal process.
              </p>
              
              <p>
                On the day of his execution, Fr. Pro forgave his executioners, prayed, bravely refused the blindfold and died proclaiming, "Viva Cristo Rey", "Long live Christ the King!"
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Miguel Pro: Joyful Witness to Christ the King</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">"Viva Cristo Rey"</h3>
              <p className="mb-6">
                St. Miguel Pro's final words, "Viva Cristo Rey" (Long live Christ the King), have become a rallying cry for Christians around the world, especially in Latin America. His martyrdom demonstrated that true joy and courage come from complete surrender to Christ. His witness continues to inspire those who face persecution for their faith, reminding them that Christ is truly King over all earthly powers.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Clandestine Ministry</h3>
              <p className="mb-6">
                St. Miguel Pro's creative and daring approach to clandestine ministry during the Mexican persecution serves as a model for how to serve God in difficult circumstances. His use of disguises and code names, while maintaining his priestly identity and mission, shows that God can work through us even when we must adapt to challenging situations. His ministry to the poor and imprisoned demonstrates the importance of serving those most in need.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Joy in Suffering</h3>
              <p className="mb-6">
                Throughout his life, from his mischievous childhood to his final moments, St. Miguel Pro maintained a spirit of joy and humor. Even in the face of persecution, torture, and death, he refused to lose his sense of joy in serving Christ. His example teaches us that Christian joy is not dependent on circumstances but flows from a deep relationship with God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Obedience and Courage</h3>
              <p>
                St. Miguel Pro's obedience to his superiors, even when it meant returning to a dangerous situation in Mexico, demonstrates the importance of obedience in religious life. His courage in facing death without a blindfold, forgiving his executioners, and proclaiming his faith shows the strength that comes from complete trust in God. His life serves as an example of how to live and die for Christ.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">November 23</div>
              <p className="text-gray-600">Feast of St. Miguel Pro, Jesuit Priest and Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Miguel Pro is celebrated on November 23rd, commemorating his martyrdom and his joyful witness to Christ the King. This date falls near the end of the liturgical year, a fitting time to remember his ultimate sacrifice and his proclamation of Christ's kingship.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Cultural Celebrations</h3>
              <p className="mb-6">
                In Mexico and among Mexican communities worldwide, St. Miguel Pro's feast day is celebrated with special devotion. Many people wear red clothing or accessories in his honor, and his famous phrase "Viva Cristo Rey" is often proclaimed during celebrations. The day is marked by prayers for persecuted Christians and for the Church in Mexico.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for persecuted Christians, for the Church in Mexico, and to ask for St. Miguel Pro's intercession in helping us to proclaim Christ as King in our daily lives. Many people also pray for the grace to maintain joy and courage in difficult circumstances.
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
                  <li>• <strong>Mexico:</strong> His homeland and place of martyrdom</li>
                  <li>• <strong>Jesuits:</strong> Members of the Society of Jesus</li>
                  <li>• <strong>Persecuted Christians:</strong> Those suffering for their faith</li>
                  <li>• <strong>Mexican Catholics:</strong> Catholics in Mexico</li>
                  <li>• <strong>Youth:</strong> Young people discerning vocations</li>
                  <li>• <strong>Humor and Joy:</strong> Those seeking joy in faith</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Religious Persecution:</strong> Those facing persecution</li>
                  <li>• <strong>Priestly Vocations:</strong> Those discerning priesthood</li>
                  <li>• <strong>Joy in Suffering:</strong> Finding joy in trials</li>
                  <li>• <strong>Obedience:</strong> Following God's will through authority</li>
                  <li>• <strong>Courage:</strong> Standing firm in faith</li>
                  <li>• <strong>Christ the King:</strong> Proclaiming Christ's kingship</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Miguel Pro</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Miguel Pro, who died proclaiming 'Viva Cristo Rey', help us to proclaim Christ as King in our daily lives and to serve Him with the same joy and courage that characterized your life.
                  </p>
                  <p className="mb-4">
                    Teach us to find joy in serving God, even in difficult circumstances, and to remain obedient to His will through the authority of the Church. May we, like you, be willing to give everything for Christ our King.
                  </p>
                  <p>
                    Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Persecuted Christians</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Miguel Pro, who suffered persecution and martyrdom for your faith, intercede for all Christians who face persecution today.
                  </p>
                  <p>
                    Help them to remain faithful to Christ and to find the courage and joy to proclaim 'Viva Cristo Rey' even in the face of death. May their witness bring others to Christ. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Joy</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Miguel Pro, who maintained your sense of humor and joy even in the most difficult circumstances, help us to find joy in serving Christ.
                  </p>
                  <p>
                    Teach us to laugh in the face of adversity and to trust in God's love and care. May we spread the joy of the Gospel to all we meet. Amen."
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
            <Link href="/saints/st-ignatius-loyola" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Jesuit Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Ignatius Loyola
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Society of Jesus, the order to which St. Miguel Pro belonged.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-xavier" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Jesuit Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis Xavier
                </h3>
                <p className="text-gray-700 text-sm">
                  Jesuit missionary and patron of missions, known for his zeal for souls.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-juan-diego" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Mexican Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Juan Diego
                </h3>
                <p className="text-gray-700 text-sm">
                  Mexican saint who witnessed the apparitions of Our Lady of Guadalupe.
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