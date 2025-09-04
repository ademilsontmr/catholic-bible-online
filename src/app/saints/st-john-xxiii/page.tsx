import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. John XXIII - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. John XXIII, the "Good Pope" who convened Vatican II and changed the Church forever.',
  keywords: [
    'st john xxiii',
    'saint john xxiii',
    'pope john xxiii',
    'st john xxiii biography',
    'st john xxiii feast day',
    'st john xxiii patron saint',
    'catholic saints',
    'vatican ii',
    'modern saints',
    'good pope',
    'sotto il monte',
    'italy'
  ],
  openGraph: {
    title: 'St. John XXIII - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John XXIII, the "Good Pope" who convened Vatican II.',
    url: 'https://catholicbibleonline.com/saints/st-john-xxiii',
  },
  twitter: {
    title: 'St. John XXIII - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John XXIII, the "Good Pope" who convened Vatican II.',
  }
}

export default function StJohnXXIIIPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💙</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. John XXIII
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            The "Good Pope", Convocador do Vaticano II, Modelo de Misericórdia e Reforma
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. John XXIII</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 11</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💙</div>
              <div className="text-sm text-gray-600">Modern</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. John XXIII</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Angelo Giuseppe Roncalli, who would become Pope John XXIII, was born on November 25, 1881, 
                in the small village of Sotto il Monte, Italy. He was the fourth of fourteen children 
                born to poor parents who made their living by sharecropping. Despite his humble origins, 
                this baby would eventually become one of the most influential popes in recent history, 
                changing the Church forever through his vision, mercy, and courage.
              </p>
              
              <p className="mb-6">
                Roncalli's career within the Church began in 1904 when he graduated from university with 
                a doctorate in theology. He was ordained a priest thereafter and soon met Pope Pius X in 
                Rome, an encounter that would shape his understanding of the papacy and the Church's 
                mission in the modern world. His early years as a priest were marked by a deep commitment 
                to pastoral care and a growing awareness of the Church's role in addressing the needs of 
                contemporary society.
              </p>
              
              <p className="mb-6">
                By 1905, Roncalli was appointed to act as secretary for his bishop, Giacomo Radini-Tedeschi. 
                He continued working as the bishop's secretary until the bishop died in August 1914. The 
                bishop's last words to Roncalli were, "Pray for peace." These words would prove prophetic 
                as the world teetered on the brink of World War I. Italy was eventually drawn into the war 
                and Roncalli was drafted into the Italian Army as a stretcher bearer and chaplain, serving 
                with distinction until his discharge in 1919.
              </p>
              
              <p className="mb-6">
                After the war, Roncalli was appointed to be the Italian president of the Society for the 
                Propagation of the Faith, handpicked by Pope Benedict XV. This position gave him valuable 
                experience in the Church's missionary work and international relations. In February 1925, 
                Roncalli was summoned to the Vatican and given a new mission as Apostolic Visitor to Bulgaria. 
                Later, he was appointed apostolic delegate to Turkey and Greece and made archbishop of Mesembria.
              </p>
              
              <p className="mb-6">
                During his time in Turkey and Greece, beginning in 1935, racial tensions and anti-Jewish 
                sentiment began to explode into actual acts of violence against Jews and other ethnic 
                minorities. Roncalli started using his influence to save as many people as he could from 
                the depredation of both local authorities and later the Nazis. During his tenure as 
                archbishop, Roncalli saved thousands of Jews, enough that he was named a "Righteous Gentile" 
                following the war, a testament to his courage and compassion in the face of evil.
              </p>
              
              <p className="mb-6">
                In late 1944, the Church was anxious to remove clergy in France that had collaborated with 
                the Nazis in various forms. Roncalli was appointed as the new papal Nuncio and sent to 
                France to negotiate the retirement of bishops who were involved with the Nazis. This 
                delicate diplomatic mission required both tact and firmness, qualities that Roncalli 
                possessed in abundance.
              </p>
              
              <p className="mb-6">
                In 1952, Roncalli was offered a new position as Patriarch of Venice. At the same time he 
                assumed his new title, Roncalli became the Cardinal-Priest of Santa Prisca. He assumed his 
                new responsibilities on March 15, 1953. His time in Venice was marked by his characteristic 
                warmth and accessibility, earning him the affection of the Venetian people and preparing 
                him for the even greater responsibilities that lay ahead.
              </p>
              
              <p className="mb-6">
                Roncalli's papal predecessor died on October 9, 1958, and he was soon summoned to Rome 
                where he was to participate in the process of selecting a new pope. The College of Cardinals 
                eventually settled on Roncalli for election and he accepted, saying "I will be called John," 
                a surprising choice because of that name's association with schism, but one that would 
                prove prophetic of his role in bringing renewal to the Church.
              </p>
              
              <p className="mb-6">
                As Pope John XXIII, he immediately began to change the culture in the Vatican. On Christmas 
                1958, he resumed the papal practice of making visits to the community within the official 
                Diocese of Rome. He visited the sick, the poor, and prisoners, showing the world that the 
                Pope was not a distant figure but a shepherd who cared for his flock. He also apologized 
                for episodes of anti-Semitism within the Church carried on by some of his predecessors, 
                demonstrating his commitment to truth and reconciliation.
              </p>
              
              <p className="mb-6">
                It was originally expected that Pope John XXIII would only serve a short time before 
                passing away and that he would make no significant changes to Church practice. However, 
                Pope John XXIII was a man of great mercy and kindness and much like Pope Francis of today, 
                he did many things that created sensation in the streets and pews. His warmth, humor, and 
                accessibility endeared him to people around the world, earning him the affectionate title 
                "the Good Pope."
              </p>
              
              <p className="mb-6">
                Perhaps his most influential decision was the call for an ecumenical council which would 
                be known as Vatican II. This council, which opened on October 11, 1962, would become one 
                of the most significant events in the history of the Catholic Church. As a result of this 
                council, many practices of the classic Church would be altered with a new emphasis on 
                ecumenism and a new liturgy, marking the beginning of a new era in the Church's relationship 
                with the modern world.
              </p>
              
              <p className="mb-6">
                Pope John XXIII addressed several topics of importance to Catholics around the world. He 
                prohibited the use of contraceptives which interfere with the procreative will of God. He 
                upheld the traditional view that married couples may not divorce. He also moved to protect 
                the Church from scandal, ordering confidentiality when dealing with matters of clergy 
                accused of the sexual abuse of children. How his request to the bishops of his time was 
                interpreted remains subject to debate, but his intention was clearly to protect the Church 
                and its faithful.
              </p>
              
              <p className="mb-6">
                By late 1962, Pope John XXIII had executed most of the work for which he would be known. 
                He was, like his own sister before him, diagnosed with stomach cancer, which was a terminal 
                diagnosis for that time. In his last months, he offered to negotiate peace between the 
                Soviet Union and the United States, then at the height of the Cold War. The offer, although 
                declined, was popular in both countries and demonstrated his commitment to peace and 
                dialogue. In the wake of the news, John XXIII was the first pope to be honored as the Time 
                Magazine Man of the Year.
              </p>
              
              <p>
                Pope John XXIII did the best he could although his health and doctors were failing. On 
                June 3, 1963, Pope John XXIII died in his bed at age 81. The world mourned John XXIII 
                and he was posthumously awarded the Presidential Medal of Freedom by President Johnson 
                in December 1963. Pope John XXIII generally maintained a good reputation among those who 
                remembered him and he was often titled "the Good." On September 3, 2000, Pope John Paul II 
                beatified him, and Pope Francis approved John XXIII for canonization on June 3, 2013, the 
                50th anniversary of his death. He was canonized on April 27, 2014, alongside St. John Paul II.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. John XXIII: The Good Pope</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Convocador do Vaticano II</h3>
              <p className="mb-6">
                St. John XXIII's greatest legacy is undoubtedly his decision to convene the Second Vatican 
                Council, which opened on October 11, 1962. This council, which he called "aggiornamento" 
                (updating), marked a turning point in the history of the Catholic Church. Vatican II 
                brought the Church into dialogue with the modern world, emphasizing the importance of 
                ecumenism, religious freedom, and the role of the laity in the Church. The council's 
                documents continue to guide the Church's mission in the contemporary world, making John 
                XXIII one of the most influential popes in recent history.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Modelo de Misericórdia e Acessibilidade</h3>
              <p className="mb-6">
                John XXIII's papacy was marked by an unprecedented level of accessibility and warmth. 
                He broke with many papal traditions, visiting prisons, hospitals, and the poor, showing 
                that the Pope was not a distant figure but a shepherd who cared for his flock. His 
                famous "moon speech" to children, where he told them to go home and give their mothers 
                and fathers a hug, endeared him to people around the world. His approachability and 
                genuine concern for people earned him the affectionate title "the Good Pope" and set 
                a new standard for papal ministry.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Defensor dos Perseguidos</h3>
              <p className="mb-6">
                During his time as apostolic delegate in Turkey and Greece, John XXIII demonstrated 
                extraordinary courage and compassion in saving thousands of Jews from the Holocaust. 
                His efforts to rescue Jews from Nazi persecution earned him the title "Righteous Gentile" 
                and showed his commitment to human dignity and the protection of the vulnerable. This 
                aspect of his legacy continues to inspire the Church's work for justice and human rights.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Promotor da Paz e Diálogo</h3>
              <p>
                John XXIII's commitment to peace and dialogue was evident throughout his papacy. His 
                encyclical "Pacem in Terris" (Peace on Earth) addressed not only Catholics but all 
                people of good will, calling for peace, justice, and respect for human rights. His 
                offer to mediate between the United States and the Soviet Union during the Cold War 
                demonstrated his belief in the power of dialogue and his commitment to world peace. 
                His approach to international relations and his emphasis on the common good continue 
                to guide the Church's engagement with the world.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">October 11</div>
              <p className="text-gray-600">Feast of St. John XXIII, Pope and Reformer</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. John XXIII is celebrated on October 11th, commemorating the opening 
                of the Second Vatican Council on October 11, 1962. This special feast day is intended 
                as a commemoration of the council's opening rather than the day of his death (June 3), 
                emphasizing the significance of Vatican II in his legacy. This feast honors his life 
                as a reformer, his commitment to the Church's renewal, and his role in bringing the 
                Church into dialogue with the modern world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. John XXIII lived during a period of tremendous change in the world, including two 
                world wars, the Cold War, and the beginning of the modern era. His papacy (1958-1963) 
                came at a time when the Church was seeking to respond to the challenges of the modern 
                world while remaining faithful to its traditions. His decision to convene Vatican II 
                was a response to what he called "the signs of the times," recognizing that the Church 
                needed to engage with contemporary society in new ways.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On his feast day, Catholics pray for his intercession, especially for popes and church 
                leaders, for those working for Church renewal and reform, for peace and dialogue in the 
                world, for the protection of human rights, and for the success of ecumenical efforts. 
                His example inspires us to be open to the Holy Spirit's guidance, to show mercy and 
                compassion to others, and to work for the renewal of the Church and society.
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
                  <li>• <strong>Popes:</strong> Patron saint of popes and church leaders</li>
                  <li>• <strong>Italy:</strong> Patron saint of Italy</li>
                  <li>• <strong>Vatican II:</strong> Patron of the Second Vatican Council</li>
                  <li>• <strong>Church Renewal:</strong> Patron of church reform and renewal</li>
                  <li>• <strong>Diplomats:</strong> Patron of diplomats and peacemakers</li>
                  <li>• <strong>Ecumenism:</strong> Patron of ecumenical dialogue</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Peace:</strong> Helper for world peace and reconciliation</li>
                  <li>• <strong>Human Rights:</strong> Patron of human rights and dignity</li>
                  <li>• <strong>Dialogue:</strong> Helper for interfaith and intercultural dialogue</li>
                  <li>• <strong>Mercy:</strong> Patron of mercy and compassion</li>
                  <li>• <strong>Accessibility:</strong> Helper for making the Church more accessible</li>
                  <li>• <strong>Reform:</strong> Patron of those working for Church reform</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. John XXIII</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. John XXIII, the Good Pope who convened Vatican II and brought renewal to 
                    the Church, pray for us who call upon your intercession.
                  </p>
                  <p className="mb-4">
                    Help us to have the same openness to the Holy Spirit that you showed throughout 
                    your papacy. Teach us to be merciful and accessible to others, and to work for 
                    peace and dialogue in our world.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace to be agents 
                    of renewal in the Church and to show the same compassion and courage that you 
                    demonstrated. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Church Renewal</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. John XXIII, who had the courage to call Vatican II and begin the process 
                    of Church renewal, intercede for all those working for the reform and renewal 
                    of the Church today.
                  </p>
                  <p>
                    Help them to be open to the signs of the times, to listen to the Holy Spirit, 
                    and to work for the good of the Church and the world. Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Peace</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. John XXIII, who worked tirelessly for peace and offered to mediate 
                    between nations during the Cold War, intercede for all those working for peace 
                    and reconciliation in our world today.
                  </p>
                  <p>
                    Help them to promote dialogue, to respect human dignity, and to work for the 
                    common good. Through Christ our Lord. Amen."
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
            <Link href="/saints/st-pope-john-paul-ii" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John Paul II
                </h3>
                <p className="text-gray-700 text-sm">
                  Beloved pontiff who continued the work of Vatican II.
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
                  First Pope and Prince of the Apostles.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Lover of poverty and peace, patron of ecology.
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