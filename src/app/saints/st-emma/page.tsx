import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Emma - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Emma of Lesum, the first female inhabitant of Bremen known by name and a great benefactor of the poor.',
  keywords: [
    'st emma',
    'saint emma',
    'st emma biography',
    'st emma feast day',
    'st emma patron saint',
    'emma of lesum',
    'emma of stiepel',
    'bremen saint',
    'december 3 feast day',
    'april 19 feast day'
  ],
  openGraph: {
    title: 'St. Emma - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Emma of Lesum, the first female inhabitant of Bremen known by name and a great benefactor of the poor.',
    url: 'https://catholicbibleonline.com/saints/st-emma',
  },
  twitter: {
    title: 'St. Emma - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Emma of Lesum, the first female inhabitant of Bremen known by name and a great benefactor of the poor.',
  }
}

export default function StEmmaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Emma
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Emma of Lesum, First Lady of Bremen, Benefactor of the Poor
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Emma</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">December 3</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Noble</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Emma</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Emma, also known as Emma of Lesum, or Emma of Stiepel, lived in the city that is Bremen today. She is the first female inhabitant of the city to be known by name.
              </p>
              
              <p className="mb-6">
                Emma lived in the early 11th century, and was born into the <strong>Immedinger family</strong>. The Immedingers were Saxon nobility descended from the legendary King Widuking, who fought against Charlemagne. Emma's father was a count, and her brother a bishop (Meinwerk of Paderborn). She married Liudger, the son of a Saxon duke. Their marriage resulted in one child, a boy named Imad. He would become bishop of Paderborn in 1051.
              </p>
              
              <p className="mb-6">
                Little specific information about St. Emma survives. Legend states that she had a violent temper when she was young. Emma's husband made a visit to Russia in 1011, fell ill and died. Following this tragedy, Emma withdrew into her faith. Her temperament became mild. She was a great benefactor of churches, establishing many small parishes. She donated to the Bremen Cathedral. Her concern for the poor was legendary.
              </p>
              
              <p className="mb-6">
                After her death, she was buried in a tomb in Bremen Cathedral. Her tomb was opened and her body had turned to dust except for her right hand, which she used to give gifts. Her intact hand was sent to the abbey of St. Ludger at Werden.
              </p>
              
              <p>
                She was venerated as a saint following her death, but there are no official dates for her beatification or canonization. She has two known feast days, December 3, which is the recorded date of her death in 1038, and April 19.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Emma: First Lady of Bremen</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Transformation of Character</h3>
              <p className="mb-6">
                St. Emma's legacy is marked by a remarkable transformation from a person with a violent temper to a gentle and charitable benefactor. Her conversion following the death of her husband demonstrates the power of faith to transform one's character and redirect one's life toward service to others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Benefactor of the Church</h3>
              <p className="mb-6">
                Emma's generosity toward the Church was extraordinary. She established many small parishes and made significant donations to the Bremen Cathedral, helping to build up the Church in her region. Her patronage of religious institutions helped ensure the spread of Christianity in northern Germany.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Champion of the Poor</h3>
              <p className="mb-6">
                Her legendary concern for the poor set an example for other nobles of her time. In an era when the gap between rich and poor was vast, Emma used her wealth and position to help those in need, showing that true nobility lies in service to others rather than in birth or wealth.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Miraculous Hand</h3>
              <p>
                The preservation of her right hand, which she used for giving gifts, serves as a powerful symbol of her charitable works. This miracle underscores the importance of her acts of charity and suggests that her giving hand was preserved as a testament to her generosity and as a relic for veneration.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">December 3</div>
              <p className="text-gray-600">Feast of St. Emma of Lesum, Benefactor of the Poor</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Emma is celebrated on December 3rd, which is the recorded date of her death in 1038. This date commemorates her life of charity and her dedication to serving the poor and the Church. She also has a secondary feast day on April 19th.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Significance</h3>
              <p className="mb-6">
                As the first female inhabitant of Bremen known by name, St. Emma holds a special place in the history of the city. Her feast day is particularly significant in the Bremen region, where she is remembered for her contributions to the local Church and her care for the poor.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the poor and to ask for St. Emma's intercession in developing a more generous and charitable heart. It's also a time to reflect on how we can use our resources to help others and support the Church.
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
                  <li>• <strong>Bremen:</strong> Patroness of the city of Bremen</li>
                  <li>• <strong>The Poor:</strong> Intercessor for those in need</li>
                  <li>• <strong>Widows:</strong> Patron of widows and those who have lost spouses</li>
                  <li>• <strong>Noble Women:</strong> Model for women of noble birth</li>
                  <li>• <strong>Church Benefactors:</strong> Patron of those who support the Church</li>
                  <li>• <strong>Charitable Giving:</strong> Model of generosity and charity</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Character Transformation:</strong> Those seeking to change their temperament</li>
                  <li>• <strong>Grief and Loss:</strong> Those dealing with the death of a spouse</li>
                  <li>• <strong>Generosity:</strong> Developing a more giving heart</li>
                  <li>• <strong>Church Support:</strong> Those who wish to support religious institutions</li>
                  <li>• <strong>Noble Service:</strong> Using one's position to help others</li>
                  <li>• <strong>German Heritage:</strong> Those of Saxon or German descent</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Emma</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O God, who called Saint Emma to transform her life through faith and to become a great benefactor of the poor, grant us the grace to follow her example of charity and generosity.
                  </p>
                  <p className="mb-4">
                    Help us to use our resources, whether great or small, to serve others and support the Church. May we, like St. Emma, find our true nobility in service to the poor and in devotion to you.
                  </p>
                  <p>
                    Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for the Poor</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Emma, whose concern for the poor was legendary, intercede for all those who are in need today. Help us to see Christ in the poor and to respond with the same generosity that you showed.
                  </p>
                  <p>
                    May we be inspired by your example to use our resources to help others and to build up the Church through our charitable giving. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Character Transformation</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Emma, who transformed from a person with a violent temper to a gentle benefactor, pray for us who struggle with our own character flaws.
                  </p>
                  <p>
                    Help us to allow faith to transform our hearts and to redirect our lives toward service to others. May we find peace and purpose in serving God and neighbor. Amen."
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
            <Link href="/saints/st-elizabeth-hungary" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Charity Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Elizabeth of Hungary
                </h3>
                <p className="text-gray-700 text-sm">
                  Queen and patron of the poor, known for her extraordinary charity and care for the sick.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-margaret-scotland" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Royal Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Margaret of Scotland
                </h3>
                <p className="text-gray-700 text-sm">
                  Queen of Scotland known for her piety and care for the poor and orphans.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-anne" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Family Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anne
                </h3>
                <p className="text-gray-700 text-sm">
                  Mother of the Blessed Virgin Mary and grandmother of Jesus, patron of mothers.
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