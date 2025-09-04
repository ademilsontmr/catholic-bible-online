import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Mary MacKillop - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Mary MacKillop, Australia\'s first saint and founder of the Sisters of St. Joseph.',
  keywords: [
    'st mary mackillop',
    'saint mary mackillop',
    'mary mackillop biography',
    'mary mackillop feast day',
    'mary mackillop patron saint',
    'australia first saint',
    'sisters of st joseph',
    'mary of the cross',
    'august 8 feast day',
    'australian saint'
  ],
  openGraph: {
    title: 'St. Mary MacKillop - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Mary MacKillop, Australia\'s first saint and founder of the Sisters of St. Joseph.',
    url: 'https://catholicbibleonline.com/saints/st-mary-mackillop',
  },
  twitter: {
    title: 'St. Mary MacKillop - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Mary MacKillop, Australia\'s first saint and founder of the Sisters of St. Joseph.',
  }
}

export default function StMaryMacKillopPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🇦🇺</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Mary MacKillop
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Australia's First Saint, Founder of the Sisters of St. Joseph
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Mary MacKillop</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 8</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🇦🇺</div>
              <div className="text-sm text-gray-600">Australian Saint</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Mary MacKillop</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Mary MacKillop, also known as St. Mary of the Cross, was an Australian nun declared a saint by the Catholic Church. She was born in Melbourne, on January 15, 1842, as the eldest of their eight children. MacKillop was educated in private schools and at home by her father. She received her First Holy Communion at the age of nine.
              </p>
              
              <p className="mb-6">
                Growing up, MacKillop and her family struggled financially. The family farm never had much success. During most times, the family had to survive on the small wages the children were able to bring home. When she was 14, MacKillop started working as a clerk in Melbourne. To provide for her needy family, she took a job as governess at her aunt and uncle, Alexander and Margaret Cameron's property at Penola, South Australia in 1860. While there, Mary MacKillop was tasked with looking after their children and teaching them. MacKillop, determined to help the poor, included the other farm children on the Cameron estate in her care.
              </p>
              
              <p className="mb-6">
                Her work as a governess and with the children brought her into contact with Father Woods, the parish priest in the south east. MacKillop stayed with the Cameron's for two years before accepting a job teaching the children of Portland, Victoria in 1862. Two years later, MacKillop opened her own boarding school called, Bay View House Seminary for Young Ladies, now known as Bayview College and was joined by the rest of her family.
              </p>
              
              <p className="mb-6">
                Father Woods, concerned about the lack of Catholic education in South Australia, invited MacKillop and her sisters to open a Catholic school in Penola. Together, they successfully opened the school in a stable. Woods was appointed director of education and he and MacKillop were named founders of the school. Following renovations completed by their brother, the MacKillops started teaching more than 50 children. At this time, MacKillop formally declared her dedication to God and began wearing black.
              </p>
              
              <p className="mb-6">
                In November 1866, Mary MacKillop and her sisters were joined by several other women. MacKillop, who now took on the religious name "Sister Mary of the Cross," began wearing simple religious habits. The group of women began calling themselves the Sisters of St. Joseph of the Sacred Heart and moved to a new house in Adelaide. While there, the Sisters of St. Joseph of the Sacred Heart founded a new school, at the request of the bishop, Laurence Bonaventure Sheil. Their school was dedicated to the education of the children of the poor and became the first religious institute to be founded by an Australian.
              </p>
              
              <p className="mb-6">
                Father Woods and MacKillop developed the "Rule of Life" for the community. Their rules, approved by Bishop Sheil, emphasized poverty, a dependence on divine providence, no ownership of personal belongings, faith that God would provide and willingness to go where needed. By the end of 1867, ten more women joined the Josephites. Due to their plain brown habits and name, the Josephite nuns became informally known as the "Brown Joeys."
              </p>
              
              <p className="mb-6">
                In an attempt to bring education to all the poor, the Sisters of St. Joseph opened another school in South Australia in 1867. By the end of 1869, more than 70 of the Josephites were educating children in 21 different schools around Australia. MacKillop and her Josephites also worked within an orphanage; with neglected children; girls in danger; the aged poor; a prison; and with the incurably ill.
              </p>
              
              <p className="mb-6">
                In December 1869, MacKillop and several other nuns travelled to Brisbane to establish their order in Queensland. Two years later, MacKillop travelled to Port Augusta, South Australia for the same purpose. The Sisters of St. Joseph of the Sacred Heart expanded rapidly and, by 1871, 130 sisters were working in more than 40 schools and charitable institutions across South Australia and Queensland.
              </p>
              
              <p className="mb-6">
                After the founding of the Josephites, Bishop Sheil appointed Father Woods as director general of Catholic education. Father Woods came into conflict with some of the clergy over educational matters and local clergy began a campaign to discredit the Josephites. In early 1870, McKillop and fellow nuns of the Josephites heard of allegations that Father Keating, of Kapunda parish to Adelaide's north, had been criminally misbehaving. The Josephites informed Father Woods, who in turn shared the information with the vicar general, Fr. John Smyth, who ultimately sent Fr. Keating back to Ireland. The reason for Keating's dismissal was publicly thought to be alcohol abuse.
              </p>
              
              <p className="mb-6">
                Keating's former colleague, Father Charles Horan, was enraged by Keating's removal, and it is believed he sought vengeance against Fr. Woods by attacking the Josephites. After the death of Fr. Smyth in June 1870, Fr. Horan became acting vicar general. He used this position to influence Bishop Sheil. Horan met with Sheil in September 1871 and convinced him that the Josephites' constitution should be changed, which could ultimately leave the Josephite nuns homeless. Mary MacKillop did not comply to the changes requested. Bishop Sheil excommunicated her, citing insubordination as the reason.
              </p>
              
              <p className="mb-6">
                Though the Josephites were not disbanded, most of their schools were closed. Forbidden to have contact with anyone in the church, MacKillop left to live with a Jewish family and was sheltered by Jesuit priests. Some of the order's nuns chose to remain under diocesan control and became popularly known as "Black Joeys." On his deathbed, Bishop Sheil instructed Father Horan to lift the excommunication on MacKillop. In February 1872, Fr. Horan met her on his way to Willunga and absolved her in the Morphett Vale church. Later, an Episcopal Commission completely exonerated her.
              </p>
              
              <p className="mb-6">
                After the acquisition of the Mother House in Kensington, MacKillop set out for Rome to have the "Rule of Life" of the Sisters of St Joseph officially approved. In 1873, Mary MacKillop sought papal approval for the religious congregation. Pope Pius IX encouraged her with the congregation. The authorities in Rome did make changes to the way Josephites lived in poverty and declared the Superior General and her council were the authorities in charge of the order. MacKillop was assured the congregation and their rule of life would receive final approval after a trial period.
              </p>
              
              <p className="mb-6">
                The Josephites began expanding their operations into New South Wales and New Zealand, but in 1883, MacKillop relocated to Sydney on the instruction of Bishop Reynolds of Adelaide. When she returned to Australia, in January 1875, MacKillop brought with her the approval from Rome for her nuns and the work they did, materials for her school, books for the convent library, several priests and 15 new Josephites from Ireland.
              </p>
              
              <p className="mb-6">
                Although MacKillop was unanimously elected Superior General in March 1875, she still had to struggle with the opposition of priests and several bishops. The Josephites were very different than other Catholic church ministries. The sisters lived in a community rather than in convents. The order's constitution required administration by a Superior General, rather than a diocese headed by the bishop. However, the issues that caused the most frequent friction and eventually led the congregation to being forced to leave Bathurst and Queensland were their unwillingness to accept government funding, teach instrumental music, and refusal to teach girls from wealthy families.
              </p>
              
              <p className="mb-6">
                Despite all the trouble, the congregation continued to expand. By 1877, it operated more than 40 schools in and around Adelaide, with many others in Queensland and New South Wales. With the help from many people, both Catholic and non-Catholic, the Josephites were able to continue their good work in religion, education and with prisons. After the appointment of Archbishop Roger Vaughan of Sydney, in 1877, life became a little easier for MacKillop and her fellow nuns. He gave them his full support.
              </p>
              
              <p className="mb-6">
                However, the death of Vaughan in 1883, Patrick Francis Moran became the new archbishop. Although he had a positive outlook on the Josephites, he did remove MacKillop as superior general and replaced her with Sister Bernard Walsh. Pope Leo XIII gave his approval to the Josephites, making them an official congregation in 1885, with its headquarters in Sydney. Even though MacKillop was no longer superior general of the congregation, she full-heartedly supported and assisted Mother Bernard with the management of the Sisters of St. Joseph. She would write letters to give support, advice or just to keep in touch.
              </p>
              
              <p className="mb-6">
                Mary MacKillop continued her work in creating more schools all over the country with the Josephites. In January 1897, she founded a convent and base for the Sisters of St Joseph in Petersburg. After the death of Mother Bernard, in 1899, MacKillop was re-elected as Mother Superior-General, a position she held until her own death. During the later years of her life, MacKillop suffered from many health problems. She lived with rheumatism, and after a stroke in Auckland, New Zealand in 1902, she became paralyzed on her right side.
              </p>
              
              <p className="mb-6">
                For seven years, MacKillop relied on a wheelchair to move around. However, her speech and mind were as good as ever and her letter writing had continued after she learned to write with her left hand. Even after suffering the stroke, the Josephite nuns had enough confidence in MacKillop to re-elect her as superior general in 1905. MacKillop passed away on August 8, 1909 in the Josephite convent in North Sydney. She was laid to rest at the Gore Hill cemetery, up the Pacific Highway from North Sydney.
              </p>
              
              <p className="mb-6">
                After MacKillop's burial, people continually took earth from around her grave. As a result, her remains were exhumed and transferred on 27 January 1914 to a vault before the altar of the Virgin Mary in the newly built memorial chapel in Mount Street, Sydney. In 1925, the Mother Superior of the Sisters of St Joseph, Mother Laurence, began the process to have MacKillop declared a saint. After several years of hearings, close examination of MacKillop's writings and a 23-year delay, the initial phase of investigations was completed in 1973. After further investigations, MacKillop's "heroic virtue" was declared in 1992.
              </p>
              
              <p>
                That same year, the church endorsed the belief that Veronica Hopson, apparently dying of leukemia in 1961, was cured by praying for MacKillop's intercession; MacKillop was beatified on January 19, 1995 by Pope John Paul II and she was canonized on October 17, 2010 by Pope Benedict XVI, making her the first Australian saint. St. Mary MacKillop is the patron saint of Australia, Archdiocese of Brisbane, and the Knights of the Southern Cross. Her feast day is celebrated on August 8.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Mary MacKillop: Australia's First Saint</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">First Australian Saint</h3>
              <p className="mb-6">
                St. Mary MacKillop's canonization in 2010 made her Australia's first saint, a historic moment for the Catholic Church in Australia and for the entire nation. Her elevation to sainthood recognizes not only her personal holiness but also the contribution of Australian Catholics to the universal Church. Her example continues to inspire Australians and people around the world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Founder of the Sisters of St. Joseph</h3>
              <p className="mb-6">
                St. Mary MacKillop's establishment of the Sisters of St. Joseph of the Sacred Heart created the first religious institute founded by an Australian. The order's emphasis on poverty, dependence on divine providence, and service to the poor has had a lasting impact on Catholic education and social services in Australia. The "Brown Joeys" continue their work today, serving communities across Australia and New Zealand.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Perseverance</h3>
              <p className="mb-6">
                St. Mary MacKillop's life demonstrates extraordinary perseverance in the face of opposition, excommunication, and health challenges. Her ability to continue her mission despite these obstacles shows her deep faith and commitment to God's will. Her famous words "Never see a need without doing something about it" continue to inspire people to take action for the good of others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Pioneer of Catholic Education</h3>
              <p>
                St. Mary MacKillop's work in establishing schools for the poor, especially in rural areas, revolutionized Catholic education in Australia. Her insistence on providing education to all children, regardless of their social or economic status, helped establish the principle of accessible Catholic education that continues to this day. Her schools served as models for Catholic education throughout Australia.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">August 8</div>
              <p className="text-gray-600">Feast of St. Mary MacKillop, Australia's First Saint</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Mary MacKillop is celebrated on August 8th, commemorating her death and her lifelong dedication to serving God and the poor. This date is particularly significant in Australia, where she is celebrated as the nation's first saint and a model of Australian Catholic identity.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Australian Celebrations</h3>
              <p className="mb-6">
                In Australia, St. Mary MacKillop's feast day is celebrated with special devotion, particularly in schools and institutions founded by the Sisters of St. Joseph. Many Australians, both Catholic and non-Catholic, honor her as a national figure who represents the best of Australian values: compassion, determination, and service to others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for Australia, for Catholic education, and to ask for St. Mary MacKillop's intercession in helping us to see and respond to the needs of others. Many people also pray for the grace to persevere in doing good despite obstacles and opposition.
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
                  <li>• <strong>Australia:</strong> Her homeland and nation</li>
                  <li>• <strong>Archdiocese of Brisbane:</strong> The diocese she served</li>
                  <li>• <strong>Knights of the Southern Cross:</strong> Catholic men's organization</li>
                  <li>• <strong>Catholic Education:</strong> Schools and educational institutions</li>
                  <li>• <strong>Rural Communities:</strong> Country areas and small towns</li>
                  <li>• <strong>Teachers:</strong> Educators and school staff</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Perseverance:</strong> Overcoming obstacles and opposition</li>
                  <li>• <strong>Service to Poor:</strong> Helping those in need</li>
                  <li>• <strong>Divine Providence:</strong> Trusting in God's care</li>
                  <li>• <strong>Rural Ministry:</strong> Serving country communities</li>
                  <li>• <strong>Women Religious:</strong> Sisters and nuns</li>
                  <li>• <strong>Australian Catholics:</strong> Catholic community in Australia</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Mary MacKillop</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Mary MacKillop, Australia's first saint, help us to see the needs of others and to respond with compassion and action.
                  </p>
                  <p className="mb-4">
                    Teach us to persevere in doing good despite obstacles and opposition, and to trust in God's providence in all circumstances. May we, like you, be willing to serve the poor and marginalized.
                  </p>
                  <p>
                    Help us to be pioneers of faith and service in our own communities. Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Australia</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Mary MacKillop, patron saint of Australia, intercede for our nation and its people.
                  </p>
                  <p>
                    Help us to build a society that values compassion, education, and service to others. May we follow your example of caring for the poor and working for the common good. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Catholic Education</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Mary MacKillop, pioneer of Catholic education, intercede for all Catholic schools and educators.
                  </p>
                  <p>
                    Help them to provide quality education that serves the poor and marginalized, and to instill in students a love for God and neighbor. May they follow your example of dedication and service. Amen."
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
            <Link href="/saints/st-joseph" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Josephite Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joseph
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron of the Sisters of St. Joseph, the order she founded.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-ignatius-loyola" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Founder Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Ignatius Loyola
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great founder of religious orders and educational institutions.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-xavier" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Missionary Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis Xavier
                </h3>
                <p className="text-gray-700 text-sm">
                  Missionary saint who brought Christianity to new lands.
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