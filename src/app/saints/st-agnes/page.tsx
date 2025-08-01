import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Agnes - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Agnes, virgin martyr and patron saint of young girls.',
  keywords: [
    'st agnes',
    'saint agnes',
    'patron saint of young girls',
    'january 21 feast day',
    'catholic saints',
    'virgin martyr',
    'chastity'
  ],
  openGraph: {
    title: 'St. Agnes - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Agnes, virgin martyr and patron saint of young girls.',
    url: 'https://catholicbibleonline.com/saints/st-agnes',
  },
  twitter: {
    title: 'St. Agnes - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Agnes, virgin martyr and patron saint of young girls.',
  }
}

export default function StAgnesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🐑</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Agnes
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Virgin Martyr and Patron Saint of Young Girls
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Agnes</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">January 21</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🐑</div>
              <div className="text-sm text-gray-600">Early Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Agnes</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Agnes was a young Roman girl who lived during the early fourth century, 
                during the reign of the Emperor Diocletian. She was born into a wealthy 
                Christian family and was raised in the faith from an early age. Agnes was 
                known for her exceptional beauty, purity, and devotion to Christ. Even as 
                a young girl, she had made a vow of virginity, dedicating her life entirely 
                to God. Her name "Agnes" comes from the Latin word "agnus," meaning lamb, 
                which is why she is often depicted with a lamb, symbolizing her innocence 
                and purity.
              </p>
              
              <p className="mb-6">
                When Agnes was about twelve or thirteen years old, many young men from 
                noble families sought her hand in marriage due to her beauty and wealth. 
                However, Agnes refused all marriage proposals, declaring that she was 
                already betrothed to Christ and that her virginity was dedicated to Him. 
                This angered many of the suitors, particularly the son of a Roman prefect, 
                who was determined to have her as his wife. When Agnes continued to refuse 
                his advances, he reported her to the authorities as a Christian, which 
                was a crime punishable by death during the Diocletian persecution.
              </p>
              
              <p className="mb-6">
                Agnes was brought before the Roman governor, who tried to persuade her 
                to renounce her faith and marry the young man. He offered her many gifts 
                and threatened her with torture, but Agnes remained steadfast in her 
                commitment to Christ. She declared that she would never deny her Lord 
                and that she preferred death to losing her virginity and her faith. The 
                governor, frustrated by her refusal, ordered her to be stripped naked 
                and taken to a brothel to be defiled. However, when the guards tried 
                to carry out this order, Agnes's hair miraculously grew long enough to 
                cover her body, preserving her modesty.
              </p>
              
              <p className="mb-6">
                The governor then ordered Agnes to be burned at the stake, but the flames 
                refused to touch her. Finally, he ordered her to be beheaded, which was 
                carried out by a soldier. According to tradition, Agnes was only about 
                thirteen years old when she died for her faith. Her martyrdom took place 
                around the year 304 A.D. Agnes was buried in a catacomb on the Via Nomentana, 
                and her tomb became a place of pilgrimage for early Christians. Her relics 
                were later moved to the church of Sant'Agnese fuori le mura in Rome, 
                which was built over her tomb.
              </p>
              
              <p>
                St. Agnes's martyrdom had a profound impact on the early Church. Her 
                courage and purity inspired many other young Christians to remain faithful 
                to Christ even in the face of persecution. Her story spread throughout 
                the Roman Empire, and she quickly became one of the most venerated saints 
                of the early Church. Pope Damasus I wrote an epitaph for her tomb, praising 
                her courage and virginity. St. Ambrose, St. Jerome, and other Church 
                Fathers also wrote about her life and martyrdom, helping to establish 
                her as a model of Christian virtue and courage.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Agnes: Model of Purity and Courage</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Symbol of Purity and Virginity</h3>
              <p className="mb-6">
                St. Agnes's greatest legacy is her example of purity and virginity in 
                a world that often values physical beauty and worldly pleasures above 
                spiritual virtues. Her unwavering commitment to remain pure for Christ, 
                even at the cost of her life, has made her a powerful symbol of chastity 
                and spiritual beauty. The lamb that is often associated with her represents 
                not only her innocence but also her identification with Christ, the Lamb 
                of God. Her story teaches us that true beauty comes from within, from 
                a heart that is pure and devoted to God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Young Girls and Children</h3>
              <p className="mb-6">
                St. Agnes's youth and her courageous defense of her faith have made her 
                the patron saint of young girls, children, and those who are pure of heart. 
                Her example is particularly powerful for young people who are navigating 
                the challenges of growing up in a world that often promotes values contrary 
                to Christian teaching. She shows that even the youngest among us can be 
                strong in faith and can make choices that honor God. Her patronage extends 
                to all who seek to live pure and virtuous lives, regardless of their age.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Courage and Faith</h3>
              <p>
                St. Agnes's courage in the face of persecution and death serves as an 
                inspiration to Christians of all ages. Her willingness to sacrifice everything 
                for her faith demonstrates the depth of her love for Christ and her trust 
                in His protection. The miracles associated with her martyrdom - her hair 
                growing to cover her nakedness and the flames refusing to burn her - show 
                that God protects those who remain faithful to Him. St. Agnes's legacy 
                encourages us to be courageous in our witness to Christ, to stand firm 
                in our beliefs even when faced with opposition, and to trust in God's 
                providence in all circumstances.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">January 21</div>
              <p className="text-gray-600">Feast of St. Agnes</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Agnes is celebrated on January 21st, during the winter 
                season when the Church reflects on the themes of new beginnings and spiritual 
                renewal. This feast is celebrated as a memorial in the Roman Catholic Church, 
                and it provides an opportunity to honor the memory of this young martyr 
                and to reflect on the importance of purity and courage in the Christian 
                life. The feast falls during a time when many people make New Year's 
                resolutions, making it an ideal time to reflect on our own commitment 
                to living virtuous lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Agnes, many people participate in special prayers 
                and devotions to honor her memory and seek her intercession. Churches 
                may hold special Masses or prayer services focused on the themes of purity, 
                courage, and youth ministry. In some countries, particularly in Italy, 
                the feast is marked by the blessing of lambs, which are then shorn to 
                provide wool for the palliums worn by archbishops. The day is also marked 
                by prayers for young people, for those seeking to live pure lives, and 
                for the protection of children and youth.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for purity of heart and the 
                courage to stand firm in our faith. Many people make special petitions 
                for young people, asking for St. Agnes's intercession in helping them 
                to make good choices and to remain faithful to Christ. The day is also 
                a time to reflect on the importance of protecting the innocence of children 
                and youth, and to pray for the strength to be good role models for the 
                young people in our lives. St. Agnes's feast day encourages us to remember 
                that we are all called to be pure of heart and courageous in our witness 
                to Christ.
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
                  <li>• <strong>Young Girls:</strong> Patron of children and youth</li>
                  <li>• <strong>Chastity:</strong> Patron of purity and virginity</li>
                  <li>• <strong>Engaged Couples:</strong> Patron of betrothed couples</li>
                  <li>• <strong>Rape Victims:</strong> Patron of those who have suffered abuse</li>
                  <li>• <strong>Gardeners:</strong> Patron of those who work with plants</li>
                  <li>• <strong>Girl Scouts:</strong> Patron of youth organizations</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Purity:</strong> Helper in maintaining chastity</li>
                  <li>• <strong>Protection:</strong> Guardian of young people</li>
                  <li>• <strong>Courage:</strong> Patron of bravery in faith</li>
                  <li>• <strong>Innocence:</strong> Helper in preserving virtue</li>
                  <li>• <strong>Faith:</strong> Patron of unwavering devotion</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Agnes</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Agnes, you who at such a tender age offered your life for 
                    the love of Christ and preserved your virginity, help me to have 
                    the courage to remain pure and faithful to God in all circumstances.
                  </p>
                  <p className="mb-4">
                    Teach me to value spiritual beauty above physical beauty and to 
                    seek God's will above all else. Help me to be strong in my faith 
                    and to stand firm against the temptations of the world.
                  </p>
                  <p>
                    St. Agnes, pray for me that I may have the purity of heart and 
                    the courage to follow Christ faithfully, even when it is difficult. 
                    Help me to be a light to others and to inspire them to live virtuous 
                    lives. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Young People</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Agnes, patron saint of young girls and children, intercede 
                    for all young people who are growing up in today's world.
                  </p>
                  <p>
                    Help them to make good choices, to remain pure of heart, and to 
                    be courageous in their faith. Protect them from harm and guide 
                    them in the ways of virtue. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Agnes, pray for us!"
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
            <Link href="/saints/st-lucy" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Lucy
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and patron saint of the blind.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-cecilia" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Cecilia
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and patron saint of musicians.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-therese" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thérèse of Lisieux
                </h3>
                <p className="text-gray-700 text-sm">
                  The Little Flower and Doctor of the Church.
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