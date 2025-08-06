import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Hedwig - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Hedwig, Duchess of Silesia who became a Cistercian nun.',
  keywords: [
    'st hedwig',
    'saint hedwig',
    'st hedwig biography',
    'st hedwig feast day',
    'st hedwig patron saint',
    'catholic saints',
    'silesia patron saint'
  ],
  openGraph: {
    title: 'St. Hedwig - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Hedwig, Duchess of Silesia who became a Cistercian nun.',
    url: 'https://catholicbibleonline.com/saints/st-hedwig',
  },
  twitter: {
    title: 'St. Hedwig - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Hedwig, Duchess of Silesia who became a Cistercian nun.',
  }
}

export default function StHedwigPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Hedwig
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Duchess of Silesia and Model of Charity in Monastic Life
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Hedwig</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 15</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Duchess & Nun</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Hedwig</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Hedwig, also known as Jadwiga in some lists, was a duchess and widow who became 
                the patroness of Silesia, a region of eastern Europe. Her life exemplifies the 
                perfect balance between noble duty and religious devotion, showing how one can serve 
                both God and neighbor in different stages of life.
              </p>
              
              <p className="mb-6">
                Born in Andechs, Bavaria, Germany, St. Hedwig was the daughter of the Duke of Croatia 
                and Dalmatia, giving her a noble lineage that would shape her destiny. She was also 
                the aunt of St. Elizabeth of Hungary, connecting her to another great saint of 
                charity and service. This family connection to holiness suggests that virtue and 
                devotion to God were deeply embedded in her family's values and traditions.
              </p>
              
              <p className="mb-6">
                At the tender age of twelve, Hedwig was married to Duke Henry of Silesia, the head 
                of the Polish Royal family. Despite the political nature of this union, they enjoyed 
                a happy marriage and were blessed with seven children. This large family demonstrates 
                their commitment to life and their openness to God's blessing of children, which was 
                particularly significant in medieval times when infant mortality was high.
              </p>
              
              <p className="mb-6">
                Together with her husband, St. Hedwig engaged in extensive charitable works. Duke 
                Henry founded a Cistercian convent at Trebnitz, as well as hospitals and monasteries 
                throughout their territory. This joint commitment to religious and charitable 
                institutions shows how they used their wealth and power not for personal gain, but 
                for the service of God and the care of the poor and sick. Their partnership in 
                these good works demonstrates the ideal of Christian marriage as a vocation to 
                holiness and service.
              </p>
              
              <p className="mb-6">
                The death of Duke Henry in 1238 marked a turning point in St. Hedwig's life. Rather 
                than seeking another marriage or living a life of luxury as a wealthy widow, she 
                chose to enter the Cistercian convent at Trebnitz that she and her husband had 
                founded. This decision shows her deep spiritual maturity and her desire to dedicate 
                the remainder of her life to prayer and contemplation.
              </p>
              
              <p>
                However, St. Hedwig's monastic life was not one of complete withdrawal from the 
                world. She had to leave her prayers on several occasions to make peace among her 
                offspring, demonstrating that her maternal responsibilities continued even in the 
                convent. She also experienced the profound grief of burying a child who was killed 
                fighting against the Mongols, showing that even saints are not immune to the 
                sufferings of this world. St. Hedwig died in the convent on October 15, leaving 
                behind a legacy of charity, prayer, and service that would inspire generations to come.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Hedwig: Model of Noble Charity</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Patroness of Silesia</h3>
              <p className="mb-6">
                St. Hedwig's most enduring legacy is her role as the patroness of Silesia, a region 
                that spans parts of modern-day Poland, Germany, and the Czech Republic. Her 
                connection to this region through her marriage to Duke Henry of Silesia and her 
                subsequent charitable works there made her a beloved figure among the people. The 
                numerous miracles reported after her death and her canonization in 1266, just 
                twenty years after her death, testify to the deep devotion she inspired and the 
                powerful intercession she continues to provide for the people of Silesia.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Christian Marriage and Widowhood</h3>
              <p className="mb-6">
                St. Hedwig's life provides a beautiful example of how to live the vocation of 
                marriage and the vocation of widowhood with equal holiness. Her happy marriage to 
                Duke Henry, blessed with seven children, shows that holiness is not incompatible 
                with married life and family responsibilities. Her transition to monastic life 
                after her husband's death demonstrates how God can call us to different forms of 
                service at different stages of our lives, and how we should be open to these 
                calls even when they require significant changes in our lifestyle.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Noble Use of Wealth and Power</h3>
              <p className="mb-6">
                As a duchess, St. Hedwig had access to considerable wealth and political power, 
                but she used these gifts not for personal luxury or political advantage, but for 
                the service of God and the care of the poor. The founding of the Cistercian 
                convent at Trebnitz, along with hospitals and monasteries, shows her understanding 
                that wealth and power are gifts from God that should be used for the common good. 
                Her example challenges modern Christians to examine how they use their own 
                resources, whether financial, social, or political, for the service of others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Balance of Prayer and Action</h3>
              <p>
                St. Hedwig's monastic life demonstrates the perfect balance between contemplative 
                prayer and active service. While she entered the convent to dedicate herself to 
                prayer, she did not abandon her responsibilities to her family and her people. 
                Her willingness to leave her prayers to make peace among her offspring shows that 
                even in the religious life, family obligations and the needs of others must take 
                precedence over personal spiritual practices. This balance between prayer and 
                action, between contemplation and service, is a model for all Christians, whether 
                they are called to religious life or to life in the world.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">October 15</div>
              <p className="text-gray-600">Feast of St. Hedwig, Duchess and Religious</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Hedwig's feast day is celebrated on October 15th, commemorating her death and 
                her witness to the Christian life of charity and devotion. This feast is 
                particularly important in Silesia and Poland, where she is deeply venerated as 
                their patroness. Churches dedicated to St. Hedwig hold special services on this 
                day, and many faithful gather to honor her memory and seek her intercession for 
                their families and communities.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                In Silesia and other regions where St. Hedwig is venerated, her feast day is 
                marked by special processions, Masses, and charitable activities. Many families 
                may choose to perform acts of charity in her honor, such as visiting the sick, 
                donating to hospitals, or supporting religious communities. Some may also pray 
                for her intercession for family unity and peace, remembering how she left her 
                prayers to make peace among her children.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                Devotees pray to St. Hedwig for the grace to use their wealth and resources 
                wisely for the service of God and others, for strength in times of family 
                conflict, for guidance in balancing prayer and action, and for the courage to 
                respond to God's call at different stages of life. Her intercession is 
                particularly sought by widows, by those in positions of wealth or power, by 
                families experiencing conflict, and by all who seek to live lives of charity 
                and service while maintaining a deep prayer life.
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
                  <li>• <strong>Silesia:</strong> Region of eastern Europe where she served as duchess</li>
                  <li>• <strong>Poland:</strong> Through her marriage to Duke Henry of the Polish Royal family</li>
                  <li>• <strong>Widows:</strong> For her example of holy widowhood and transition to religious life</li>
                  <li>• <strong>Cistercian Nuns:</strong> As a member of the Cistercian order at Trebnitz</li>
                  <li>• <strong>Noble Families:</strong> For her example of using wealth and power for charity</li>
                  <li>• <strong>Large Families:</strong> As mother of seven children</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Charity:</strong> For the grace to use resources for the service of others</li>
                  <li>• <strong>Family Unity:</strong> For peace and harmony among family members</li>
                  <li>• <strong>Vocational Discernment:</strong> For guidance in life transitions</li>
                  <li>• <strong>Prayer Life:</strong> For balance between contemplation and action</li>
                  <li>• <strong>Noble Service:</strong> For using position and influence for good</li>
                  <li>• <strong>Miracles:</strong> For her powerful intercession and reported miracles</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Hedwig</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed St. Hedwig, duchess of Silesia and model of charity, you who used 
                    your wealth and power for the service of God and the care of the poor, 
                    intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    Help us to follow your example of using our resources, whether great or small, 
                    for the service of others rather than for personal gain. Grant us the wisdom 
                    to balance our responsibilities to family and community with our need for 
                    prayer and spiritual growth.
                  </p>
                  <p className="mb-4">
                    Inspire us with your transition from married life to religious life, showing 
                    us that God can call us to different forms of service at different stages of 
                    our lives. Help us to be open to these calls and to respond with generosity 
                    and courage.
                  </p>
                  <p>
                    Through your powerful intercession, may we learn to use our gifts and 
                    resources for the glory of God and the good of others, and may we find the 
                    perfect balance between prayer and action in our own lives. St. Hedwig, 
                    pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Hedwig, patroness of Silesia and model of charity, pray for us!"
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
                <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Charity Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Elizabeth of Hungary
                </h3>
                <p className="text-gray-700 text-sm">
                  Niece of St. Hedwig and another great model of charity and service to the poor.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-monica" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Monica
                </h3>
                <p className="text-gray-700 text-sm">
                  Another holy widow and mother who prayed for her children's conversion.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-bernard" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Bernard
                </h3>
                <p className="text-gray-700 text-sm">
                  Great Cistercian abbot and Doctor of the Church, founder of the order she joined.
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