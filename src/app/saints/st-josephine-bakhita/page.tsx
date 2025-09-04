import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Josephine Bakhita - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Josephine Bakhita, former slave who became a saint and patron of Sudan.',
  keywords: [
    'st josephine bakhita',
    'saint josephine bakhita',
    'st josephine bakhita biography',
    'st josephine bakhita feast day',
    'st josephine bakhita patron saint',
    'sudan saint',
    'former slave saint',
    'february 8 feast day',
    'catholic saints'
  ],
  openGraph: {
    title: 'St. Josephine Bakhita - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Josephine Bakhita, former slave who became a saint and patron of Sudan.',
    url: 'https://catholicbibleonline.com/saints/st-josephine-bakhita',
  },
  twitter: {
    title: 'St. Josephine Bakhita - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Josephine Bakhita, former slave who became a saint and patron of Sudan.',
  }
}

export default function StJosephineBakhitaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🕊️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Josephine Bakhita
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron of Sudan, Former Slave, Canossian Sister
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Josephine Bakhita</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">February 8</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🕊️</div>
              <div className="text-sm text-gray-600">Freedom</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Josephine Bakhita</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Josephine Margaret Bakhita was born around 1869 in the village of Olgossa in the Darfur region of Sudan. She was a member of the Daju people and her uncle was a tribal chief. Due to her family lineage, she grew up happy and relatively prosperous, saying that as a child, she did not know suffering.
              </p>
              
              <p className="mb-6">
                Historians believe that sometime in February 1877, Josephine was kidnapped by Arab slave traders. Although she was just a child, she was forced to walk barefoot over 600 miles to a slave market in El Obeid. She was bought and sold at least twice during the grueling journey. For the next 12 years she would be bought, sold and given away over a dozen times. She spent so much time in captivity that she forgot her original name.
              </p>
              
              <p className="mb-6">
                As a slave, her experiences varied from fair treatment to cruel. Her first owner, a wealthy Arab, gave her to his daughters as a maid. The assignment was easy until she offended her owner's son, possibly for the crime of breaking a vase. As punishment, she was beaten so severely she was incapacitated for a month. After that, she was sold.
              </p>
              
              <p className="mb-6">
                One of her owners was a Turkish general who gave her to his wife and mother-in-law who both beat her daily. Josephine wrote that as soon as one wound would heal, they would inflict another. She told about how the general's wife ordered her to be scarred. As her mistress watched, ready with a whip, another woman drew patterns on her skin with flour, then cut into her flesh with a blade. She rubbed the wounds with salt to make the scars permanent. She would suffer a total of 114 scars from this abuse.
              </p>
              
              <p>
                In 1883, the Turkish general sold her to the Italian Vice Consul, Callisto Legani. He was a much kinder master and he did not beat her. When it was time for him to return to Italy, she begged to be taken with him, and he agreed. After a long and dangerous journey across Sudan, the Red Sea, and the Mediterranean, they arrived in Italy.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Josephine Bakhita: Model of Forgiveness</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Journey to Freedom</h3>
              <p className="mb-6">
                She was given away to another family as a gift and she served them as a nanny. Her new family also had dealings in Sudan and when her mistress decided to travel to Sudan without Josephine, she placed her in the custody of the Canossian Sisters in Venice. While she was in the custody of the sisters, she came to learn about God. According to Josephine, she had always known about God, who created all things, but she did not know who He was. The sisters answered her questions. She was deeply moved by her time with the sisters and discerned a call to follow Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Legal Freedom and Baptism</h3>
              <p className="mb-6">
                When her mistress returned from Sudan, Josephine refused to leave. Her mistress spent three days trying to persuade her to leave the sisters, but Josephine remained steadfast. This caused the superior of the institute for baptismal candidates among the sisters to complain to Italian authorities on Josephine's behalf. The case went to court, and the court found that slavery had been outlawed in Sudan before Josephine was born, so she could not be lawfully made slave. She was declared free.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Religious Life</h3>
              <p className="mb-6">
                For the first time in her life, Josephine was free and could choose what to do with her life. She chose to remain with the Canossian Sisters. She was baptized on January 9, 1890 and took the name Josephine Margaret and Fortunata. (Fortunata is the Latin translation for her Arabic name, Bakhita). She also received the sacraments of her first holy communion and confirmation on the same day. The Archbishop who gave her the sacraments was none other than Giuseppe Sarto, the Cardinal Patriarch of Venice, who would later become Pope Pius X.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Service and Forgiveness</h3>
              <p>
                Josephine became a novice with the Canossian Daughters of Charity religious order on December 7, 1893, and took her final vows on December 8, 1896. She was eventually assigned to a convent in Schio, Vicenza. For the next 42 years of her life, she worked as a cook and a doorkeeper at the convent. She also traveled and visited other convents telling her story to other sisters and preparing them for work in Africa. She was known for her gentle voice and smile. She was gentle and charismatic, and was often referred to lovingly as the "little brown sister" or honorably as the "black mother."
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">February 8</div>
              <p className="text-gray-600">Feast of St. Josephine Bakhita, Patron of Sudan</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Josephine Bakhita is celebrated on February 8th, the anniversary of her death in 1947. On the evening of February 8, 1947, Josephine spoke her last words, "Our Lady, Our Lady!" She then died. Her body lay on display for three days afterwards. In 1958, the process of canonization began for Josephine under Pope John XXIII. On December 1st, 1978, Pope John Paul II declared her venerable. She was beatified in 1992 and canonized on October 1, 2000.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. Josephine Bakhita's remarkable journey from slavery to sainthood and her role as a model of forgiveness and resilience. Her feast day serves as a reminder of the dignity of every human person and the power of God's love to transform suffering into grace. Many people pray for an end to human trafficking and for the protection of victims of modern slavery.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. Josephine Bakhita for her intercession in matters of forgiveness, healing from trauma, and for the grace to see God's hand in all circumstances. Many people also pray for victims of human trafficking and for the conversion of those who exploit others.
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
                  <li>• <strong>Sudan:</strong> Patron of her native country</li>
                  <li>• <strong>Victims of Human Trafficking:</strong> Patron of those enslaved</li>
                  <li>• <strong>Former Slaves:</strong> Patron of those who have been freed</li>
                  <li>• <strong>Canossian Sisters:</strong> Patron of her religious order</li>
                  <li>• <strong>Africa:</strong> Patron of the Church in Africa</li>
                  <li>• <strong>Forgiveness:</strong> Model of forgiving one's oppressors</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Healing from Trauma:</strong> Helper in overcoming past suffering</li>
                  <li>• <strong>Conversion of Hearts:</strong> Patron of those seeking God</li>
                  <li>• <strong>Dignity of Human Life:</strong> Protector of human dignity</li>
                  <li>• <strong>Religious Vocations:</strong> Patron of those called to religious life</li>
                  <li>• <strong>Peace and Reconciliation:</strong> Helper in finding peace</li>
                  <li>• <strong>End to Slavery:</strong> Patron of anti-trafficking efforts</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Josephine Bakhita</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Josephine Bakhita, who endured the horrors of slavery with courage and faith, 
                    help us to find God's love even in the midst of suffering. Through your intercession, may we 
                    learn to forgive those who have wronged us and to see every person as a child of God. 
                    Help us to work for the freedom and dignity of all people. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Josephine Bakhita, pray for us!"
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
            <Link href="/saints/st-martin-de-porres" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Martin de Porres
                </h3>
                <p className="text-gray-700 text-sm">
                  Mixed-race Dominican friar known for his humility and care for the poor and sick.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-pius-x" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Pius X
                </h3>
                <p className="text-gray-700 text-sm">
                  Pope who baptized St. Josephine Bakhita when he was Archbishop of Venice.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john-paul-ii" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John Paul II
                </h3>
                <p className="text-gray-700 text-sm">
                  Pope who canonized St. Josephine Bakhita and visited Sudan to honor her.
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