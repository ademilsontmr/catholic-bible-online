import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. John Vianney - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. John Vianney, the Curé of Ars and patron of parish priests.',
  keywords: [
    'st john vianney',
    'saint john vianney',
    'st john vianney biography',
    'st john vianney feast day',
    'st john vianney patron saint',
    'cure of ars',
    'august 4 feast day',
    'catholic saints',
    'parish priests',
    'confessors'
  ],
  openGraph: {
    title: 'St. John Vianney - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John Vianney, the Curé of Ars and patron of parish priests.',
    url: 'https://catholicbibleonline.com/saints/st-john-vianney',
  },
  twitter: {
    title: 'St. John Vianney - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John Vianney, the Curé of Ars and patron of parish priests.',
  }
}

export default function StJohnVianneyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⛪</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. John Vianney
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Curé of Ars, Patron of Parish Priests, Model of Confessional Ministry
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. John Vianney</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 4</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⛪</div>
              <div className="text-sm text-gray-600">Priest</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. John Vianney</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Jean-Baptiste-Marie Vianney, known as John in English, was born May 8, 1786 in Dardilly, France and was baptized the same day. He was the fourth of six children born to Matthieu and Marie Vianney. John was raised in a Catholic home and the family often helped the poor and housed St. Benedict Joseph Labre when he made his pilgrimage to Rome. In 1790, when the anticlerical Terror phase of the French Revolution forced priests to work in secrecy or face execution, young Vianney believed the priests were heroes.
              </p>
              
              <p className="mb-6">
                He continued to believe in the bravery of priests and received his First Communion catechism instructions in private by two nuns who lost their convents to the Revolution. At 13-years-old, John made his first communion and prepared for his confirmation in secrecy. When he was 20-years-old, John was allowed to leave the family farm to learn at a "presbytery-school" in Écully. There he learned math, history, geography and Latin. As his education had been disrupted by the French Revolution, he struggled in his studies, particularly with Latin, but worked hard to learn.
              </p>
              
              <p className="mb-6">
                In 1802, the Catholic Church was reestablished in France and religious freedom and peace spread throughout the country. Unfortunately, in 1809, John was drafted into Napoleon Bonaparte's armies. He had been studying as an ecclesiastical student, which was a protected title and would normally have excepted him from military services, but Napoleon had withdrawn the exemption in some dioceses as he required more soldiers. Two days into his service, John fell ill and required hospitalization. As his troop continued, he stopped in at a church where he prayed. There he met a young man who volunteered to return him to his group, but instead led him deep into the mountains where military deserters met.
              </p>
              
              <p className="mb-6">
                John lived with them for one year and two months. He used the name Jerome Vincent and opened a school for the nearby village of Les Noes' children. John remained in Les Noes and hid when gendarmes came in search of deserters until 1810, when deserters were granted amnesty. Now free, John returned to Écully and resumed his ecclesiastic studies. He attended a minor seminary, Abbe Balley, in 1812 and was eventually ordained a deacon in June 1815.
              </p>
              
              <p>
                He joined his heroes as a priest August 12, 1815 in the Couvent des Minimes de Grenoble. His first Mass was celebrated the next day and he was appointed assistant to Balley in Écully. Three years later, when Balley passed away, Fr. John Vianney was appointed parish priest of the Ars parish. With help from Catherine Lassagne and Benedicta Lerdet, La Providence, a home for girls, was established in Ars.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. John Vianney: Curé of Ars</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Ministry in Ars and Pastoral Challenges</h3>
              <p className="mb-6">
                When he began his priestly duties, Fr. Vianney realized many were either ignorant or indifferent to religion as a result of the French Revolution. Many danced and drank on Sundays or worked in their fields. Fr. Vianney spent much time in confession and often delivered homilies against blasphemy and dancing. Finally, if parishioners did not give up dancing, he refused them absolution. He spent 11 to twelve hours each day working to reconcile people with God. In the summer months, he often worked 16-hour days and refused to retire.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Extraordinary Confessional Ministry</h3>
              <p className="mb-6">
                His fame spread until people began to travel to him in 1827. Within thirty years, it is said he received up to 20,000 pilgrims each year. He was deeply devoted to St. Philomena and erected a chapel and shrine in her honor. When he later became deathly ill but miraculously recovered, he attributed his health to St. Philomena's intercession. By 1853, Fr. Vianney had attempted to run away from Ars four times, each attempt with the intention of becoming a monk but decided after the final time that it was not to be.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Wisdom and Teachings</h3>
              <p className="mb-6">
                St. John Vianney would often say: "Private prayer is like straw scattered here and there: If you set it on fire, it makes a lot of little flames. But gather these straws into a bundle and light them, and you get a mighty fire, rising like a column into the sky; public prayer is like that." His teachings emphasized the importance of prayer, penance, and the sacraments, particularly the sacrament of reconciliation. He was known for his ability to read hearts and provide spiritual guidance that transformed lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Canonization and Final Years</h3>
              <p>
                Six years later, he passed away and left behind a legacy of faith and was viewed as the champion of the poor. On October 3, 1873, Pope Pius IX proclaimed Fr. Vianney as "venerable" and on January 8, 1905, Pope Pius X beatified him. St. John Vianney was canonized on May 31, 1925. His feast day was declared August 9 but it was changed twice before it fell to August 4. His legacy continues to inspire priests and laypeople alike, particularly in the importance of the confessional ministry and pastoral care.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">August 4</div>
              <p className="text-gray-600">Feast of St. John Vianney, Curé of Ars</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. John Vianney is celebrated on August 4th, commemorating the day of his death in 1859. St. John Vianney was proclaimed venerable by Pope Pius IX on October 3, 1873, beatified by Pope Pius X on January 8, 1905, and canonized by Pope Pius XI on May 31, 1925. His feast day serves as a reminder of the importance of the priesthood, the sacrament of reconciliation, and the power of prayer and penance. His life demonstrates the transformative power of pastoral ministry and the importance of the confessional in the life of the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. John Vianney's remarkable contributions to pastoral ministry and the sacrament of reconciliation. His feast day serves as a reminder of the importance of priests spending time in the confessional, the value of prayer and penance, and the power of spiritual guidance. Many parishes and dioceses celebrate this day with special Masses and encourage priests to spend extra time in the confessional. The day also emphasizes the importance of parish priests leading exemplary lives and the value of the sacramental ministry. Many people also reflect on their own spiritual life and consider making a good confession.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. John Vianney for his intercession in matters of spiritual growth, the priesthood, and the sacrament of reconciliation. Many people also pray for priests, particularly parish priests, asking for his guidance in their ministry. His example encourages us to value the sacraments, to spend time in prayer, and to seek spiritual guidance when needed. St. John Vianney's legacy reminds us that even the most humble and seemingly unqualified individuals can become powerful instruments of God's grace through prayer, penance, and faithful service.
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
                  <li>• <strong>Parish Priests:</strong> Patron of parish ministry</li>
                  <li>• <strong>Confessors:</strong> Patron of the sacrament of reconciliation</li>
                  <li>• <strong>Priests:</strong> Patron of all priests</li>
                  <li>• <strong>Pastors:</strong> Patron of pastoral ministry</li>
                  <li>• <strong>Spiritual Directors:</strong> Patron of spiritual guidance</li>
                  <li>• <strong>Penitents:</strong> Patron of those seeking forgiveness</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Confession:</strong> Helper in the sacrament of reconciliation</li>
                  <li>• <strong>Prayer:</strong> Patron of spiritual life</li>
                  <li>• <strong>Penance:</strong> Helper for repentance</li>
                  <li>• <strong>Pastoral Care:</strong> Patron of parish ministry</li>
                  <li>• <strong>Spiritual Growth:</strong> Helper for personal holiness</li>
                  <li>• <strong>Priestly Vocations:</strong> Patron of priestly formation</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. John Vianney</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. John Vianney, Curé of Ars and patron of parish priests, who with extraordinary 
                    dedication spent countless hours in the confessional reconciling sinners with God, help us to 
                    value the sacrament of reconciliation and to seek spiritual guidance. Through your intercession, 
                    may we have the courage to examine our consciences, the humility to confess our sins, and the 
                    wisdom to grow in holiness. Help us to be faithful to prayer and penance, and to serve others 
                    with the same love and dedication you showed to your parishioners. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer of St. John Vianney</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "I love You, O my God, and my only desire is to love You until the last breath of my life. 
                    I love You, O my infinitely lovable God, and I would rather die loving You, than live without 
                    loving You. I love You, Lord and the only grace I ask is to love You eternally... My God, if 
                    my tongue cannot say in every moment that I love You, I want my heart to repeat it to You as 
                    often as I draw breath."
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. John Vianney, pray for us!"
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
            <Link href="/saints/st-philomena" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Philomena
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr to whom Vianney was deeply devoted.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-benedict-joseph-labre" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Benedict Joseph Labre
                </h3>
                <p className="text-gray-700 text-sm">
                  Pilgrim who stayed with Vianney's family.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-de-sales" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis de Sales
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great French saint and spiritual director.
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