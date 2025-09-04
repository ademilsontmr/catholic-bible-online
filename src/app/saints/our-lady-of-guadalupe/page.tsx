import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Guadalupe - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of Our Lady of Guadalupe, Patroness of the Americas who appeared to St. Juan Diego in 1531, leading to the conversion of millions.',
  keywords: [
    'our lady of guadalupe',
    'virgin of guadalupe',
    'our lady of guadalupe feast day',
    'our lady of guadalupe patron saint',
    'december 12 feast day',
    'mexican virgin mary',
    'guadalupe apparition',
    'patroness of the americas'
  ],
  openGraph: {
    title: 'Our Lady of Guadalupe - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of Our Lady of Guadalupe, Patroness of the Americas who appeared to St. Juan Diego in 1531.',
    url: 'https://catholicbibleonline.com/saints/our-lady-of-guadalupe',
  },
  twitter: {
    title: 'Our Lady of Guadalupe - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of Our Lady of Guadalupe, Patroness of the Americas who appeared to St. Juan Diego in 1531.',
  }
}

export default function OurLadyOfGuadalupePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌹</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Guadalupe
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patroness of the Americas, Mother of the Mexican People, Queen of Heaven
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Our Lady of Guadalupe</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">December 12</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌹</div>
              <div className="text-sm text-gray-600">Miraculous Roses</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 The Apparition of Our Lady of Guadalupe</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                On the morning of December 9, 1531, a humble Mexican peasant named Juan Diego was making his way to Mass 
                in the early morning twilight when he heard strange music that he would later describe as the beautiful 
                sound of birds. Diverting his path to investigate the sound, he came face to face with a radiant 
                apparition of the Virgin Mary on Tepeyac Hill, the site of a former Aztec Temple.
              </p>
              
              <p className="mb-6">
                Our Lady appeared to Juan Diego as a native princess, and her words sounded more beautiful than the 
                sweetest music ever made. She instructed him to visit his bishop and ask that a temple be built on 
                the site of her appearance, so that she would have a place to hear petitions and to heal the suffering 
                of the Mexican people.
              </p>
              
              <p className="mb-6">
                The Bishop was initially very skeptical of Juan Diego's account, questioning whether this peasant truly 
                wanted attention, notoriety, money, or if he was possessed by demons. Juan Diego was dismissed, but 
                Our Lady appeared to him again, instructing him to return the next morning and ask again.
              </p>
              
              <p className="mb-6">
                When Juan Diego's uncle fell gravely ill, he was unable to keep his promise to return to the Bishop 
                with a sign from Our Lady. However, Our Lady appeared to him again, assuring him with the words, 
                "Am I not your mother? ... Are you not in the crossing of my arms?" She instructed him to climb to 
                the top of Tepeyac Hill where he would find flowers unlike any he had seen before.
              </p>
              
              <p>
                Juan Diego found roses blooming in December on the summit of the hill. When he opened his tilma before 
                the Bishop, the roses cascaded to the floor, revealing an exquisite image of Our Lady painted on his 
                humble tilma - the miraculous image of Our Lady of Guadalupe.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of Our Lady of Guadalupe: Patroness of the Americas</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">The Miraculous Image</h3>
              <p className="mb-6">
                The image on Juan Diego's tilma shows Our Lady as a native princess with high cheekbones, her head bowed 
                and hands folded in prayer, with stars arranged on her blue cloak as they appeared in the morning darkness. 
                Under her feet is a great crescent moon, a symbol of the old Aztec religion, showing that she is more 
                powerful than the Aztec gods, yet she herself is not God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Conversion of Millions</h3>
              <p className="mb-6">
                The apparition of Our Lady of Guadalupe led to the conversion of millions of Native Mexicans. The symbolism 
                of Our Lady's dress was obvious to over eight million Native Mexicans who spoke different languages. 
                She appeared brighter than the sun, more powerful than any Aztec god, yet she prayed to one greater than 
                herself, leading millions to embrace the Catholic faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patroness of the Americas</h3>
              <p className="mb-6">
                On October 12, 1945, Pope Pius XII decreed Our Lady of Guadalupe to be "Patroness of all the Americas." 
                Her feast day is December 12, and it is a Holy Day of Obligation in Mexico. She continues to be a powerful 
                intercessor for all who turn to her in prayer.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Miraculous Preservation</h3>
              <p>
                Juan Diego's tilma, woven from cactus fibers with a shelf-life of just 30 years at best, remains miraculously 
                preserved to this day. The temple was built and remains there today, in what is now a suburb of Mexico City, 
                where millions of pilgrims continue to visit and honor Our Lady of Guadalupe.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">December 12</div>
              <p className="text-gray-600">Feast of Our Lady of Guadalupe</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of Our Lady of Guadalupe is celebrated on December 12th, commemorating the final apparition 
                and the miraculous image. This date falls during the Advent season, making it a special time to reflect 
                on the coming of Christ and the role of Mary in salvation history.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Holy Day of Obligation</h3>
              <p className="mb-6">
                In Mexico, December 12th is a Holy Day of Obligation, and millions of people make pilgrimages to the 
                Basilica of Our Lady of Guadalupe in Mexico City. The celebration includes Mass, processions, and 
                special devotions to honor the Patroness of the Americas.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Devotions</h3>
              <p>
                On her feast day, many people pray the Novena to Our Lady of Guadalupe, participate in processions, 
                and offer flowers and prayers. It's a time to reflect on her message of love and compassion for all 
                people, especially the poor and marginalized.
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
                  <li>• <strong>The Americas:</strong> Patroness of all the Americas</li>
                  <li>• <strong>Mexico:</strong> Patroness of the Mexican people and nation</li>
                  <li>• <strong>Indigenous Peoples:</strong> Patroness of Native Americans</li>
                  <li>• <strong>Pro-Life Movement:</strong> Patroness of the unborn and pro-life causes</li>
                  <li>• <strong>Families:</strong> Patroness of families and family life</li>
                  <li>• <strong>Pilgrims:</strong> Patroness of travelers and pilgrims</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Protection:</strong> Help in times of danger and difficulty</li>
                  <li>• <strong>Healing:</strong> Intercession for physical and spiritual healing</li>
                  <li>• <strong>Conversion:</strong> Patroness of evangelization efforts</li>
                  <li>• <strong>Unity:</strong> Patroness of unity among peoples and cultures</li>
                  <li>• <strong>Peace:</strong> Patroness of peace and reconciliation</li>
                  <li>• <strong>Miracles:</strong> Patroness of miraculous interventions</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to Our Lady of Guadalupe</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Virgin of Guadalupe, Mother of the Americas, grant to our homes the grace of loving and respecting 
                    life in its beginnings, with the same love with which you conceived in your womb the life of the Son of God.
                  </p>
                  <p className="mb-4">
                    Blessed Virgin Mary, Mother of Fair Love, protect our families so that they may always be united 
                    and bless the upbringing of our children. Our hope, look upon us with compassion, teach us to go 
                    continually to Jesus and, if we fall, help us to rise again, to return to Him, by means of the 
                    confession of our faults and sins in the Sacrament of Penance, which gives peace to the soul.
                  </p>
                  <p>
                    We beg you to grant us a great love for all the holy Sacraments, which are, as it were, the signs 
                    that your Son left us on earth. Thus, Most Holy Mother, with the peace of God in our conscience, 
                    with our hearts free from evil and hatred, we will be able to bring to all true joy and true peace, 
                    which come to us from your Son, our Lord Jesus Christ, who with God the Father and the Holy Spirit, 
                    lives and reigns for ever and ever. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "Our Lady of Guadalupe, Patroness of the Americas, pray for us!"
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
            <Link href="/saints/st-juan-diego" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Juan Diego
                </h3>
                <p className="text-gray-700 text-sm">
                  Humble Mexican peasant who witnessed the apparition of Our Lady of Guadalupe.
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

            <Link href="/saints/st-bernadette" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Bernadette
                </h3>
                <p className="text-gray-700 text-sm">
                  French peasant girl who witnessed the apparitions of Our Lady of Lourdes.
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