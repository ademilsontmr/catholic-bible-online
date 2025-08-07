import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Cornelius - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Cornelius, Pope and martyr who defended the Church\'s power to forgive repentant sinners.',
  keywords: [
    'st cornelius',
    'saint cornelius',
    'pope cornelius',
    'st cornelius biography',
    'st cornelius feast day',
    'st cornelius patron saint',
    'catholic saints',
    'september 16 feast day',
    'early saints',
    'pope',
    'martyr',
    'lapsi controversy'
  ],
  openGraph: {
    title: 'St. Cornelius - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Cornelius, Pope and martyr who defended the Church\'s power to forgive.',
    url: 'https://catholicbibleonline.com/saints/st-cornelius',
  },
  twitter: {
    title: 'St. Cornelius - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Cornelius, Pope and martyr who defended the Church\'s power to forgive.',
  }
}

export default function StCorneliusPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Cornelius
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pope and Martyr, Defender of Mercy, Shepherd of the Lapsed
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Cornelius</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">September 16</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏔️</div>
              <div className="text-sm text-gray-600">Early</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Cornelius</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Cornelius was a Roman priest who was elected Pope to succeed St. Fabian in 
                an election that had been delayed for fourteen months due to the persecution 
                of Christians under Emperor Decius. This delay in the papal election was 
                unprecedented and reflected the intense persecution that the Church was 
                experiencing during this period. The Christian community in Rome was in a 
                state of crisis, with many having apostatized under pressure and others 
                struggling to maintain their faith.
              </p>
              
              <p className="mb-6">
                The main issue of Cornelius's pontificate was the treatment to be accorded 
                to Christians who had apostatized during the persecution. These "lapsi" 
                (the lapsed) had denied their faith under threat of torture or death, 
                but now sought to return to the Church. This created a major theological 
                and pastoral crisis that would test the Church's understanding of mercy, 
                forgiveness, and the power of the keys given to Peter and his successors.
              </p>
              
              <p className="mb-6">
                Cornelius took a balanced and merciful approach to this crisis. He condemned 
                those confessors who were lax in not demanding penance of these Christians, 
                recognizing that true repentance required appropriate penance. However, he 
                also supported St. Cyprian, Bishop of Carthage, against Novatus and his 
                dupe, Felicissimus, whom he had set up as an antibishop to Cyprian when 
                Novatus came to Rome. This support demonstrated Cornelius's commitment to 
                Church unity and proper ecclesiastical authority.
              </p>
              
              <p className="mb-6">
                On the other hand, Cornelius also denounced the Rigorists, headed by Novatian, 
                a Roman priest, who declared that the Church could not pardon the lapsi and 
                declared himself Pope. However, his declaration was illegitimate, making him 
                an antipope. The two extremes eventually joined forces, and the Novatian 
                movement had quite a vogue in the East, creating a schism that would last 
                for several centuries.
              </p>
              
              <p className="mb-6">
                Meanwhile, Cornelius proclaimed that the Church had the authority and the 
                power to forgive repentant lapsi and could readmit them to the sacraments 
                and the Church after they had performed proper penances. This declaration 
                was crucial in establishing the Church's understanding of its power to 
                forgive sins and reconcile sinners. It affirmed that the mercy of God 
                is greater than human weakness and that the Church, as the instrument of 
                God's mercy, has the power to forgive even the most serious sins.
              </p>
              
              <p className="mb-6">
                A synod of Western bishops in Rome in October 251 upheld Cornelius, condemned 
                the teachings of Novatian, and excommunicated him and his followers. This 
                synod was a crucial moment in Church history, as it established the principle 
                that the Church has the power to forgive all sins, including apostasy, and 
                that this power is exercised through the successors of Peter. The synod's 
                decision would have lasting implications for the Church's understanding of 
                the sacrament of penance and the power of the keys.
              </p>
              
              <p>
                When persecutions of the Christians started up again in 253 under Emperor 
                Gallus, Cornelius was exiled to Centum Cellae (Civita Vecchia), where he 
                died a martyr, probably of the hardships he was forced to endure. His 
                martyrdom was the final witness to his faith and his commitment to the 
                Church he had served so faithfully. His death marked the end of a pontificate 
                that had been marked by both mercy and firmness in defending the faith and 
                the unity of the Church.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Cornelius: Pope of Mercy</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Defender of the Church's Power to Forgive</h3>
              <p className="mb-6">
                St. Cornelius's greatest legacy is his defense of the Church's power to forgive 
                repentant sinners, even those who had committed the serious sin of apostasy. 
                His proclamation that the Church had the authority and power to forgive repentant 
                lapsi and readmit them to the sacraments established a crucial principle of 
                Catholic theology. This teaching affirmed that God's mercy is infinite and that 
                the Church, as the instrument of that mercy, has the power to forgive all sins 
                through the sacrament of penance.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Balanced Approach to Pastoral Care</h3>
              <p className="mb-6">
                Cornelius demonstrated a balanced approach to pastoral care that avoided both 
                laxity and rigorism. He condemned those who were too lenient with the lapsi, 
                recognizing that true repentance requires appropriate penance. At the same time, 
                he rejected the rigorist position that denied the possibility of forgiveness 
                for certain sins. This balanced approach continues to guide the Church's 
                pastoral practice today, emphasizing both the need for genuine repentance 
                and the availability of God's mercy.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Defender of Church Unity</h3>
              <p className="mb-6">
                Cornelius's pontificate was marked by his commitment to Church unity in the 
                face of schism and heresy. He supported legitimate bishops like St. Cyprian 
                against false claimants and condemned the Novatian schism. His leadership 
                helped to preserve the unity of the Church during a time of great crisis 
                and established important precedents for dealing with schism and heresy. 
                His example teaches us that Church unity is a precious gift that must be 
                defended and preserved.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Martyr for the Faith</h3>
              <p>
                Cornelius's martyrdom was the final witness to his faith and his commitment 
                to the Church. His death in exile, probably from the hardships he endured, 
                demonstrates that following Christ often requires great sacrifice. His 
                martyrdom, combined with his pastoral leadership, makes him a model for 
                all Church leaders who are called to serve with both mercy and courage. 
                His example reminds us that true leadership in the Church requires both 
                the heart of a shepherd and the courage of a martyr.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">September 16</div>
              <p className="text-gray-600">Feast of St. Cornelius, Pope and Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Cornelius is celebrated on September 16th, commemorating 
                his life as a pope who defended the Church's power to forgive and his 
                martyrdom for the faith. This feast honors his balanced approach to pastoral 
                care, his defense of Church unity, and his courageous witness to Christ. 
                It is a day to remember that the Church's mission is to be both a pillar 
                of truth and a haven of mercy for all sinners.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. Cornelius lived during the mid-3rd century, a time of intense persecution 
                and theological crisis in the Church. The Decian persecution had forced many 
                Christians to choose between apostasy and martyrdom, creating a pastoral crisis 
                that tested the Church's understanding of forgiveness and reconciliation. 
                Cornelius's pontificate helped to establish important principles about the 
                Church's power to forgive sins and the need for balanced pastoral care that 
                would guide the Church for centuries to come.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On his feast day, Catholics pray for his intercession, especially for those 
                who have fallen away from the faith and seek to return, for Church leaders 
                facing difficult pastoral decisions, for those struggling with the sacrament 
                of penance, for the unity of the Church, and for the grace to show mercy 
                while maintaining fidelity to truth. His example inspires us to be both 
                merciful and firm in our witness to the faith.
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
                  <li>• <strong>Popes:</strong> Patron saint of popes and papal authority</li>
                  <li>• <strong>Penitents:</strong> Patron of those seeking forgiveness</li>
                  <li>• <strong>Church Unity:</strong> Patron of Church unity and reconciliation</li>
                  <li>• <strong>Pastoral Care:</strong> Patron of pastors and spiritual directors</li>
                  <li>• <strong>Lapsed Catholics:</strong> Patron of those who have fallen away</li>
                  <li>• <strong>Martyrs:</strong> Patron of martyrs and confessors</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Returning to Faith:</strong> Helper for those returning to the Church</li>
                  <li>• <strong>Forgiveness:</strong> Patron of those seeking or offering forgiveness</li>
                  <li>• <strong>Church Leadership:</strong> Helper for Church leaders and bishops</li>
                  <li>• <strong>Penance:</strong> Patron of those making penance</li>
                  <li>• <strong>Schism Healing:</strong> Helper for healing divisions in the Church</li>
                  <li>• <strong>Persecution:</strong> Patron of those facing persecution</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Cornelius</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Cornelius, Pope and martyr who defended the Church's power to forgive, 
                    intercede for us who seek to understand and practice God's mercy.
                  </p>
                  <p className="mb-4">
                    You who balanced firmness with compassion in dealing with the lapsed, 
                    help us to be both merciful and faithful in our relationships with others.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace to 
                    forgive as we have been forgiven and to defend the truth with love. 
                    Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Returning Catholics</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Cornelius, patron of those who have fallen away from the faith, 
                    intercede for all who seek to return to the Church.
                  </p>
                  <p>
                    Help them to find the courage to seek forgiveness, to trust in God's 
                    mercy, and to be welcomed back into the community of believers. Through 
                    Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Church Unity</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Cornelius, defender of Church unity against schism and heresy, 
                    intercede for the unity of the Church today.
                  </p>
                  <p>
                    Help us to overcome divisions, to seek reconciliation, and to work for 
                    the unity that Christ desires for His Church. Through Christ our Lord. Amen."
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
            <Link href="/saints/st-fabian" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Fabian
                </h3>
                <p className="text-gray-700 text-sm">
                  Pope whom Cornelius succeeded, chosen by a miraculous dove.
                </p>
              </div>
            </Link>

                         <Link href="/saints/st-stephen" className="group block">
               <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                 <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                   Biblical Saints
                 </div>
                 <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                   St. Stephen
                 </h3>
                 <p className="text-gray-700 text-sm">
                   First deacon and first Christian martyr.
                 </p>
               </div>
             </Link>

            <Link href="/saints/st-peter" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peter
                </h3>
                <p className="text-gray-700 text-sm">
                  First pope and prince of the apostles, source of papal authority.
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