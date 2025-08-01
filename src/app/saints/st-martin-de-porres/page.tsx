import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Martin de Porres - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Martin de Porres, patron of people of mixed race.',
  keywords: [
    'st martin de porres',
    'saint martin de porres',
    'martin de porres',
    'november 3 feast day',
    'catholic saints',
    'modern saints',
    'patron of mixed race'
  ],
  openGraph: {
    title: 'St. Martin de Porres - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Martin de Porres, patron of people of mixed race.',
    url: 'https://catholicbibleonline.com/saints/st-martin-de-porres',
  },
  twitter: {
    title: 'St. Martin de Porres - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Martin de Porres, patron of people of mixed race.',
  }
}

export default function StMartinDePorresPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏥</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Martin de Porres
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron of People of Mixed Race and Healer of the Sick
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Martin de Porres</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">November 3</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏥</div>
              <div className="text-sm text-gray-600">Modern Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Martin de Porres</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Martin de Porres was born in Lima, Peru on December 9, 1579. Martin 
                was the illegitimate son to a Spanish gentlemen and a freed slave from 
                Panama, of African or possibly Native American descent. At a young age, 
                Martin's father abandoned him, his mother and his younger sister, leaving 
                Martin to grow up in deep poverty. After spending just two years in primary 
                school, Martin was placed with a barber/surgeon where he would learn to 
                cut hair and the medical arts. As Martin grew older, he experienced a 
                great deal of ridicule for being of mixed-race. In Peru, by law, all 
                descendants of African or Indians were not allowed to become full members 
                of religious orders. Martin, who spent long hours in prayer, found his 
                only way into the community he longed for was to ask the Dominicans of 
                Holy Rosary Priory in Lima to accept him as a volunteer who performed 
                the most menial tasks in the monastery. In return, he would be allowed 
                to wear the habit and live within the religious community.
              </p>
              
              <p className="mb-6">
                When Martin was 15, he asked for admission into the Dominican Convent 
                of the Rosary in Lima and was received as a servant boy and eventually 
                was moved up to the church officer in charge of distributing money to 
                deserving poor. During his time in the Convent, Martin took on his old 
                trades of barbering and healing. He also worked in the kitchen, did 
                laundry and cleaned. After eight more years with the Holy Rosary, Martin 
                was granted the privilege to take his vows as a member of the Third Order 
                of Saint Dominic by the prior Juan de Lorenzana who decided to disregard 
                the law restricting Martin based on race. However, not all of the members 
                in the Holy Rosary were as open-minded as Lorenzana; Martin was called 
                horrible names and mocked for being illegitimate and descending from slaves.
              </p>
              
              <p className="mb-6">
                Martin grew to become a Dominican lay brother in 1603 at the age of 24. 
                Ten years later, after he had been presented with the religious habit 
                of a lay brother, Martin was assigned to the infirmary where he would 
                remain in charge until his death. He became known for encompassing the 
                virtues need to carefully and patiently care for the sick, even in the 
                most difficult situations. Martin was praised for his unconditional care 
                of all people, regardless of race or wealth. He took care of everyone 
                from the Spanish nobles to the African slaves. Martin didn't care if 
                the person was diseased or dirty, he would welcome them into his own home.
              </p>
              
              <p className="mb-6">
                Martin's life reflected his great love for God and all of God's gifts. 
                It is said he had many extraordinary abilities, including aerial flights, 
                bilocation, instant cures, miraculous knowledge, spiritual knowledge 
                and an excellent relationship with animals. Martin also founded an orphanage 
                for abandoned children and slaves and is known for raising dowry for 
                young girls in short amounts of time. During an epidemic in Lima, many 
                of the friars in the Convent of the Rosary became very ill. Locked away 
                in a distant section of the convent, they were kept away from the professed. 
                However, on more than one occasion, Martin passed through the locked 
                doors to care for the sick. However, he became disciplined for not following 
                the rules of the Convent, but after replying, "Forgive my error, and 
                please instruct me, for I did not know that the precept of obedience 
                took precedence over that of charity," he was given full liberty to 
                follow his heart in mercy.
              </p>
              
              <p>
                Martin was great friends with both St. Juan Macías, a fellow Dominican 
                lay brother, and St. Rose of Lima, a lay Dominican. In January of 1639, 
                when Martin was 60-years-old, he became very ill with chills, fevers 
                and tremors causing him agonizing pain. He would experience almost a 
                year full of illness until he passed away on November 3, 1639. By the 
                time he died, he was widely known and accepted. Talks of his miracles 
                in medicine and caring for the sick were everywhere. After his death, 
                the miracles received when he was invoked in such greatness that when 
                he was exhumed 25 years later, his body exhaled a splendid fragrance 
                and he was still intact. St. Martin de Porres was beatified by Pope 
                Gregory XVI on October 29, 1837 and canonized by Pope John XXIII on 
                May 6, 1962.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Martin de Porres: Healer of the Sick</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Universal Charity</h3>
              <p className="mb-6">
                St. Martin de Porres's most enduring legacy is his extraordinary example 
                of universal charity and his ability to see Christ in every person, 
                regardless of their race, social status, or condition. Despite facing 
                discrimination and prejudice throughout his life due to his mixed-race 
                heritage, Martin never allowed these experiences to harden his heart 
                or diminish his love for others. Instead, he used his own suffering 
                to develop a deeper compassion for all who were marginalized or suffering. 
                His care for everyone from Spanish nobles to African slaves demonstrates 
                his understanding that all people are equal in God's eyes and deserving 
                of love and respect. Martin's legacy reminds us that true charity knows 
                no boundaries and that we are called to serve all people with the same 
                love and compassion that Christ showed to everyone He encountered. His 
                example challenges us to overcome our own prejudices and to see the 
                dignity and worth of every human being.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Racial Harmony</h3>
              <p className="mb-6">
                St. Martin de Porres's life serves as a powerful witness to the importance 
                of racial harmony and the dignity of all people. As a person of mixed 
                race who faced discrimination and legal barriers, Martin's eventual 
                acceptance and canonization by the Church demonstrates that holiness 
                transcends racial and social boundaries. His patronage of people of 
                mixed race and his work to overcome racial prejudice make him a powerful 
                intercessor for all who work for racial justice and harmony. Martin's 
                example teaches us that diversity is a gift from God and that we should 
                celebrate the unique contributions that people of all races and backgrounds 
                bring to the Church and society. His legacy encourages us to work against 
                racism and discrimination in all its forms and to build communities 
                that reflect the unity and diversity of God's kingdom. Martin's life 
                reminds us that we are all children of God and that our differences 
                should be sources of strength and enrichment rather than division.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to the Power of Humility</h3>
              <p>
                St. Martin de Porres's life demonstrates the transformative power of 
                humility and the importance of serving others with love and dedication. 
                Despite his many gifts and abilities, including miraculous healing powers, 
                Martin always remained humble and focused on serving others rather than 
                seeking recognition or praise. His willingness to perform the most menial 
                tasks in the monastery, his patient care for the sick, and his gentle 
                response to criticism and discrimination all reflect his deep humility 
                and trust in God's providence. Martin's example teaches us that true 
                greatness comes not from worldly success or recognition, but from serving 
                others with love and humility. His legacy encourages us to embrace our 
                own gifts and talents while remaining humble and focused on using them 
                for the service of others. Martin's life reminds us that God often 
                works through the most humble and seemingly insignificant people to 
                accomplish great things and that our worth comes not from what we achieve, 
                but from how we love and serve others.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">November 3</div>
              <p className="text-gray-600">Feast of St. Martin de Porres</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Martin de Porres is celebrated on November 3rd, the 
                anniversary of his death, during the autumn season when the Church 
                reflects on the themes of harvest and thanksgiving. This feast is celebrated 
                as a memorial in the Roman Catholic Church, recognizing Martin's importance 
                as a model of universal charity and racial harmony. The feast falls 
                during a time when many people are reflecting on the blessings of the 
                year and preparing for the winter months, making it an ideal time to 
                remember Martin's example of serving others with love and compassion. 
                The feast provides an opportunity to honor Martin's memory and to reflect 
                on how we can serve those who are sick, marginalized, or in need in 
                our own communities. It is also a time to pray for racial harmony and 
                to work against discrimination and prejudice in all its forms.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Martin de Porres, many people participate in 
                special prayers and devotions to honor his memory and seek his intercession. 
                Churches, particularly those with connections to healthcare ministries 
                or racial justice work, hold special Masses and services. Many people 
                gather to pray for the sick and for those who work in healthcare, asking 
                for St. Martin's intercession in helping them to serve with compassion 
                and skill. The day is also marked by prayers for racial harmony and 
                for an end to discrimination and prejudice. Many people also take time 
                to reflect on their own attitudes toward people of different races 
                and backgrounds and to pray for the grace to see Christ in every person. 
                The feast is also a time to reflect on how we can incorporate Martin's 
                virtues of humility, charity, and service into our daily lives. Some 
                people also volunteer at hospitals or healthcare facilities in honor 
                of Martin's dedication to caring for the sick.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of charity 
                and the ability to serve others with humility and love. Many people 
                make special petitions for the sick and for those who work in healthcare, 
                asking for St. Martin's intercession in helping them to provide compassionate 
                and effective care. The day is also a time to reflect on the importance 
                of racial harmony and to pray for the grace to overcome prejudice and 
                discrimination in our own hearts and in society. St. Martin's feast 
                day encourages us to remember that we are all called to serve others 
                with love and that our differences should be sources of strength and 
                enrichment. It is also a time to pray for the grace to be humble and 
                to use our gifts and talents for the service of others. The feast reminds 
                us that true holiness comes from loving and serving others, especially 
                those who are most in need, and that we should strive to see Christ 
                in every person we encounter.
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
                  <li>• <strong>Mixed Race:</strong> Patron of people of mixed race</li>
                  <li>• <strong>Innkeepers:</strong> Patron of innkeepers</li>
                  <li>• <strong>Barbers:</strong> Patron of barbers</li>
                  <li>• <strong>Public Health:</strong> Patron of public health workers</li>
                  <li>• <strong>Racial Harmony:</strong> Patron of racial harmony</li>
                  <li>• <strong>Social Justice:</strong> Patron of social justice</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Prayer:</strong> Helper in prayer life</li>
                  <li>• <strong>Healing:</strong> Patron of healing</li>
                  <li>• <strong>Humility:</strong> Helper in humility</li>
                  <li>• <strong>Charity:</strong> Patron of charity</li>
                  <li>• <strong>Animals:</strong> Helper with animals</li>
                  <li>• <strong>Intercession:</strong> Powerful advocate in heaven</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Martin de Porres</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Martin de Porres, patron of people of mixed race and healer 
                    of the sick, help me to see Christ in every person I encounter.
                  </p>
                  <p className="mb-4">
                    Teach me to serve others with humility and love, regardless of 
                    their race, social status, or condition. Help me to overcome prejudice 
                    and to work for racial harmony and social justice.
                  </p>
                  <p>
                    St. Martin, pray for me that I may have the humility to serve others, 
                    the charity to love all people, and the courage to work against 
                    discrimination and injustice. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Racial Harmony</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Martin de Porres, patron of racial harmony and social justice, 
                    intercede for all those who work for unity and peace.
                  </p>
                  <p>
                    Help us to overcome prejudice and discrimination, and guide us 
                    in building communities that reflect God's love for all people. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Martin de Porres, pray for us!"
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
            <Link href="/saints/st-rose-lima" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Rose of Lima
                </h3>
                <p className="text-gray-700 text-sm">
                  First saint of the Americas and friend of St. Martin.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-dominic" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Dominic
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Dominican Order to which St. Martin belonged.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-assisi" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Mendicant Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron of animals and model of humility and charity.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <Link
            href="/saints"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Saints
          </Link>
        </div>
      </div>
    </div>
  )
} 