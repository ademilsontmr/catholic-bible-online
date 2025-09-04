import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Margaret Clitherow - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Margaret Clitherow, English martyr who was pressed to death for harboring Catholic priests during the Reformation.',
  keywords: [
    'st margaret clitherow',
    'saint margaret clitherow',
    'st margaret clitherow biography',
    'st margaret clitherow feast day',
    'st margaret clitherow patron saint',
    'catholic saints',
    'english martyrs'
  ],
  openGraph: {
    title: 'St. Margaret Clitherow - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Margaret Clitherow, English martyr who was pressed to death for harboring Catholic priests.',
    url: 'https://catholicbibleonline.com/saints/st-margaret-clitherow',
  },
  twitter: {
    title: 'St. Margaret Clitherow - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Margaret Clitherow, English martyr who was pressed to death for harboring Catholic priests.',
  }
}

export default function StMargaretClitherowPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Margaret Clitherow
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            English Martyr and Pearl of York
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Margaret Clitherow</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">March 26</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Margaret Clitherow</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Margaret Clitherow was born in Middleton, England, in 1555, to Protestant parents. 
                Possessed of good looks and full of wit and merriment, she was a charming personality 
                who brought joy to all who knew her. Her natural charisma and warm disposition made 
                her beloved in her community.
              </p>
              
              <p className="mb-6">
                In 1571, she married John Clitherow, a well-to-do grazier and butcher, and together 
                they had two children. Margaret was a devoted wife and mother, managing their household 
                with love and care. A few years after her marriage, she experienced a profound conversion 
                and entered the Catholic Church, embracing the faith with great zeal and devotion.
              </p>
              
              <p className="mb-6">
                Her newfound faith led her to harbor fugitive Catholic priests in her home, providing 
                them with safe haven during the dangerous times of the English Reformation. This act 
                of charity and courage put her at great risk, as the authorities were actively 
                persecuting Catholics and those who aided them.
              </p>
              
              <p className="mb-6">
                Eventually, Margaret was arrested and imprisoned by hostile authorities. They used 
                every means possible to make her deny her faith, including threats, intimidation, 
                and psychological pressure. However, the holy woman stood firm in her convictions, 
                refusing to renounce her Catholic faith despite the severe consequences.
              </p>
              
              <p className="mb-6">
                Finally, she was condemned to be pressed to death on March 25, 1586. This brutal 
                form of execution involved stretching her out on the ground with a sharp rock on 
                her back and crushing her under a door overladen with unbearable weights. Her bones 
                were broken and she died within fifteen minutes, offering her life as a witness to 
                the truth of the Catholic faith.
              </p>
              
              <p>
                The humanity and holiness of this servant of God can be readily glimpsed in her 
                words to a friend when she learned of her condemnation: "The sheriffs have said 
                that I am going to die this coming Friday; and I feel the weakness of my flesh 
                which is troubled at this news, but my spirit rejoices greatly. For the love of 
                God, pray for me and ask all good people to do likewise." Her feast day is 
                celebrated on March 26th.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Margaret Clitherow: Pearl of York</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Courageous Witness</h3>
              <p className="mb-6">
                St. Margaret Clitherow's legacy is one of extraordinary courage and fidelity to 
                the Catholic faith. Her willingness to face the most brutal form of execution 
                rather than deny her beliefs stands as a powerful witness to the strength of 
                religious conviction and the grace of God working in human hearts.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Conversion</h3>
              <p className="mb-6">
                As a convert from Protestantism to Catholicism, Margaret shows us the power of 
                God's grace to transform hearts and lead people to truth. Her story demonstrates 
                that authentic conversion is not merely intellectual but involves a complete 
                transformation of life and priorities.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Charity and Hospitality</h3>
              <p className="mb-6">
                Margaret's willingness to risk her own safety to harbor Catholic priests 
                demonstrates the virtue of charity in its highest form. She put the needs of 
                others before her own security, showing us what it means to love our neighbor 
                as ourselves, even at great personal cost.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Strength in Weakness</h3>
              <p>
                Her honest admission of her flesh's weakness while rejoicing in her spirit 
                shows the human reality of martyrdom. She teaches us that holiness does not 
                mean the absence of fear or human weakness, but rather the grace to overcome 
                these natural reactions through trust in God and love for Him.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">March 26</div>
              <p className="text-gray-600">Feast of St. Margaret Clitherow, Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Margaret Clitherow's feast day is celebrated on March 26th, the day after 
                her martyrdom. She is honored as one of the Forty Martyrs of England and Wales, 
                a group of Catholic men and women who gave their lives for the faith during 
                the English Reformation.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                In England, particularly in York where she lived and died, St. Margaret's feast 
                is celebrated with special devotion. Pilgrims visit the site of her martyrdom 
                and pray for her intercession. Her example is particularly meaningful for converts 
                and those facing persecution for their faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                Devotees pray to St. Margaret Clitherow for courage in the face of persecution, 
                for the grace of conversion, for strength to remain faithful to the Church, and 
                for the gift of charity toward those in need. Her intercession is especially 
                sought by converts and those facing religious discrimination.
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
                  <li>• <strong>Martyrs:</strong> For her courageous death for the faith</li>
                  <li>• <strong>Converts:</strong> For her conversion from Protestantism to Catholicism</li>
                  <li>• <strong>England:</strong> As one of the Forty Martyrs of England and Wales</li>
                  <li>• <strong>Businesswomen:</strong> For her role in managing family business</li>
                  <li>• <strong>Mothers:</strong> For her devotion to her children</li>
                  <li>• <strong>Persecuted Christians:</strong> For her witness under persecution</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Courage:</strong> For strength in the face of persecution</li>
                  <li>• <strong>Conversion:</strong> For those seeking the truth</li>
                  <li>• <strong>Charity:</strong> For the grace to help others at personal cost</li>
                  <li>• <strong>Fidelity:</strong> For faithfulness to the Church</li>
                  <li>• <strong>Hospitality:</strong> For welcoming those in need</li>
                  <li>• <strong>Religious Freedom:</strong> For those denied religious liberty</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Margaret Clitherow</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed St. Margaret Clitherow, Pearl of York and courageous martyr, 
                    you who gave your life rather than deny your Catholic faith, intercede 
                    for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    Help us to have the courage to stand firm in our beliefs, even when 
                    faced with persecution or opposition. Grant us the grace of conversion 
                    and the strength to remain faithful to the Church in all circumstances.
                  </p>
                  <p className="mb-4">
                    Teach us to practice charity toward others, especially those in need, 
                    even when it requires personal sacrifice. May we learn from your example 
                    of hospitality and your willingness to help those who were persecuted.
                  </p>
                  <p>
                    Through your intercession, may we grow in faith, hope, and charity, 
                    and may we have the courage to witness to the truth of the Gospel 
                    in our daily lives. St. Margaret Clitherow, pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Margaret Clitherow, Pearl of York, pray for us!"
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
            <Link href="/saints/st-thomas-more" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thomas More
                </h3>
                <p className="text-gray-700 text-sm">
                  English martyr and statesman who refused to acknowledge Henry VIII as head of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john-fisher" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John Fisher
                </h3>
                <p className="text-gray-700 text-sm">
                  Bishop and martyr who defended the Catholic faith against Henry VIII's reforms.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-edmund-campion" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Edmund Campion
                </h3>
                <p className="text-gray-700 text-sm">
                  Jesuit priest and martyr who was one of the priests Margaret may have harbored.
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