import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Philomena - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Philomena, virgin martyr and patron saint of youth.',
  keywords: [
    'st philomena',
    'saint philomena',
    'virgin martyr',
    'august 11 feast day',
    'catholic saints',
    'martyr saints',
    'patron of youth'
  ],
  openGraph: {
    title: 'St. Philomena - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Philomena, virgin martyr and patron saint of youth.',
    url: 'https://catholicbibleonline.com/saints/st-philomena',
  },
  twitter: {
    title: 'St. Philomena - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Philomena, virgin martyr and patron saint of youth.',
  }
}

export default function StPhilomenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏹</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Philomena
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Virgin Martyr and Patron Saint of Youth
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Philomena</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 11</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏹</div>
              <div className="text-sm text-gray-600">Martyr Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Philomena</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Little is known about the life of St. Philomena, but it is believed she 
                was a Greek princess who became a virgin martyr and died at the age of 
                thirteen. According to tradition, Philomena was the daughter of a Greek 
                king who had converted to Christianity. She was born on January 10th 
                and from an early age showed a deep devotion to God and a desire to 
                dedicate her life to Him. When Philomena was thirteen years old, she 
                took a vow of consecrated virginity, promising to remain pure and devoted 
                to Christ for the rest of her life. This vow would later become the 
                source of her martyrdom, as it conflicted with the desires of the Roman 
                Emperor Diocletian, who would become infatuated with the young princess.
              </p>
              
              <p className="mb-6">
                After her father took his family to Rome to make peace with the Roman 
                Empire, Emperor Diocletian fell in love with Philomena and desired to 
                marry her. However, Philomena, faithful to her vow of virginity and 
                her commitment to Christ, refused the emperor's proposal. This refusal 
                enraged Diocletian, who was not used to being denied anything he wanted. 
                The emperor subjected Philomena to various forms of torture in an attempt 
                to break her will and force her to renounce her Christian faith and 
                her vow of virginity. Despite the intense suffering she endured, Philomena 
                remained steadfast in her faith and her commitment to Christ.
              </p>
              
              <p className="mb-6">
                St. Philomena was first scourged, a brutal form of torture that involved 
                being whipped with leather straps embedded with metal or bone. When 
                this failed to break her spirit, she was thrown into the Tiber River 
                with an anchor attached to her body, in an attempt to drown her. However, 
                angels came to her side and miraculously saved her from drowning. Next, 
                the emperor ordered her to be shot with arrows, but again, angels intervened 
                and healed her wounds through prayer. Each time Philomena was attacked, 
                divine intervention protected her and restored her to health, demonstrating 
                God's power and Philomena's special relationship with heaven.
              </p>
              
              <p className="mb-6">
                Finally, when all other attempts to break her will had failed, Emperor 
                Diocletian ordered Philomena to be decapitated. According to the story, 
                her death came on a Friday at three in the afternoon, the same time 
                as Jesus' death on the cross, symbolizing her complete identification 
                with Christ in his passion and death. Philomena's martyrdom at such 
                a young age and her unwavering faith in the face of such brutal torture 
                made her a powerful example of courage and fidelity to Christ. Her death 
                on August 10th marked the end of her earthly life but the beginning 
                of her heavenly glory and her powerful intercession for those who would 
                later call upon her help.
              </p>
              
              <p>
                Philomena's body was buried in the Catacombs of Priscilla on the Via 
                Salaria Nova in Rome. In May 1802, the remains of a young lady were 
                discovered with three tiles reading "Peace be to you, Philomena." The 
                tiles also contained symbols that were interpreted as representing her 
                martyrdom: two anchors, three arrows, a palm symbol of martyrdom, and 
                a flower. These symbols would later become important elements in the 
                iconography of St. Philomena, helping to tell the story of her life 
                and martyrdom. The discovery of her remains and the subsequent spread 
                of devotion to her would lead to numerous miracles and the establishment 
                of her cult throughout the Catholic world.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Philomena: Patron Saint of Youth</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Patron Saint of Youth</h3>
              <p className="mb-6">
                St. Philomena's designation as the patron saint of youth recognizes 
                her powerful example of faith and courage at a young age. Her martyrdom 
                at the age of thirteen demonstrates that holiness and spiritual maturity 
                are not limited by age, and that even the youngest among us can achieve 
                great sanctity through their love for God. Philomena's example is particularly 
                inspiring for young people who are struggling to remain faithful to 
                their Christian values in a world that often opposes them. Her courage 
                in standing up to the most powerful man in the Roman Empire, refusing 
                to compromise her faith and her vow of virginity, shows young people 
                that they too can be strong in their convictions and faithful to God, 
                even when it means going against popular opinion or facing opposition. 
                Philomena's legacy encourages young people to take their faith seriously 
                and to be willing to make sacrifices for what they believe in.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Powerful Intercessor</h3>
              <p className="mb-6">
                St. Philomena's reputation as a powerful intercessor began soon after 
                her relics were discovered and enshrined. Canon Francesco De Lucia 
                of Mugnano del Cardinale received relics of St. Philomena and had them 
                placed in the Church of Our Lady of Grace in Mugnano, Italy. Soon after 
                her relics were enshrined, numerous miracles began to occur, including 
                the curing of cancers, the healing of wounds, and the famous Miracle 
                of Mugnano, when Venerable Pauline Jaricot was cured of a severe heart 
                issue overnight. Other saints began to venerate Philomena and attribute 
                miracles in their lives to the young martyr, including St. John Marie 
                Vianney, the Curé of Ars, and St. Peter Louis Marie Chanel. These miracles 
                and the testimony of such holy people helped to establish Philomena's 
                reputation as a powerful advocate in heaven, particularly for those 
                who are suffering or in need of healing.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Purity and Courage</h3>
              <p>
                St. Philomena's life serves as a powerful example of purity and courage 
                in the face of temptation and persecution. Her vow of consecrated virginity 
                and her refusal to compromise her commitment to Christ, even when faced 
                with the most powerful man in the world, demonstrates the importance 
                of remaining faithful to one's principles and values. Philomena's example 
                is particularly relevant in today's world, where young people are often 
                pressured to compromise their values and beliefs. Her courage in standing 
                up to Emperor Diocletian shows that it is possible to remain faithful 
                to God even when it means facing ridicule, persecution, or even death. 
                Philomena's legacy reminds us that true strength comes from our relationship 
                with God and that we are called to be witnesses to Christ in all circumstances, 
                regardless of the cost.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">August 11</div>
              <p className="text-gray-600">Feast of St. Philomena</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Philomena is celebrated on August 11th, during the 
                summer season when the Church reflects on the themes of growth and 
                harvest. This feast is celebrated as a memorial in the Roman Catholic 
                Church, recognizing Philomena's importance as a virgin martyr and patron 
                saint of youth. The feast falls during a time when many young people 
                are on vacation and may be more open to spiritual reflection, making 
                it an ideal time to remember Philomena's example of courage and fidelity 
                to Christ. The feast provides an opportunity to honor Philomena's memory 
                and to reflect on the importance of remaining faithful to our Christian 
                values, even when it is difficult.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Philomena, many people participate in special 
                prayers and devotions to honor her memory and seek her intercession. 
                Churches, particularly those dedicated to St. Philomena, hold special 
                Masses and services. Many young people and families gather to pray 
                for the youth and for the strength to remain faithful to Christian 
                values in a secular world. The day is also marked by prayers for healing 
                and miracles, asking for St. Philomena's intercession in helping those 
                who are suffering or in need of God's grace. Many people also take 
                time to reflect on the importance of purity and courage in their own 
                lives and to pray for the grace to be faithful witnesses to Christ. 
                The feast is also a time to reflect on how we can incorporate Philomena's 
                virtues of courage, purity, and faithfulness into our daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of courage 
                and the ability to remain faithful to our Christian values, even when 
                it is difficult. Many people make special petitions for young people 
                and for the strength to resist temptation and remain pure in heart 
                and mind, asking for St. Philomena's intercession in helping them 
                to be faithful to God. The day is also a time to reflect on the importance 
                of standing up for what is right and to pray for the grace to be courageous 
                witnesses to Christ in all circumstances. St. Philomena's feast day 
                encourages us to remember that we are all called to be saints, regardless 
                of our age, and that we can achieve great holiness through our love 
                for God and our willingness to make sacrifices for Him. It is also 
                a time to pray for the grace to be pure of heart and to remain faithful 
                to our commitments to God.
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
                  <li>• <strong>Youth:</strong> Patron saint of youth</li>
                  <li>• <strong>Infants:</strong> Patron of infants</li>
                  <li>• <strong>Babies:</strong> Patron of babies</li>
                  <li>• <strong>Children:</strong> Patron of children</li>
                  <li>• <strong>Purity:</strong> Patron of purity</li>
                  <li>• <strong>Virginity:</strong> Patron of consecrated virginity</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Prayer:</strong> Helper in prayer life</li>
                  <li>• <strong>Courage:</strong> Patron of courage</li>
                  <li>• <strong>Healing:</strong> Helper in healing</li>
                  <li>• <strong>Miracles:</strong> Patron of miracles</li>
                  <li>• <strong>Protection:</strong> Helper in protection</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Philomena</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Philomena, virgin martyr and patron saint of youth, help 
                    me to remain pure and faithful to Christ.
                  </p>
                  <p className="mb-4">
                    Teach me to be courageous in standing up for what is right and 
                    to never compromise my Christian values. Help me to be a faithful 
                    witness to Christ and to trust in God's protection in all circumstances.
                  </p>
                  <p>
                    St. Philomena, pray for me that I may have the courage to remain 
                    faithful to God, the purity to resist temptation, and the grace 
                    to be a witness to Christ in all things. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Youth</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Philomena, patron saint of youth, intercede for all young 
                    people who are struggling to remain faithful to Christ.
                  </p>
                  <p>
                    Help them to be courageous in their faith and to never compromise 
                    their values. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Philomena, pray for us!"
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
            <Link href="/saints/st-joan-arc" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joan of Arc
                </h3>
                <p className="text-gray-700 text-sm">
                  Young martyr and patron saint of France.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-agnes" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Agnes
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and patron saint of young girls.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-lucy" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Lucy
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and patron saint of the blind.
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