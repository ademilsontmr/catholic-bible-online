import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Paul of the Cross - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Paul of the Cross, founder of the Passionists and missionary of Italy.',
  keywords: [
    'st paul of the cross',
    'saint paul of the cross',
    'st paul of the cross biography',
    'st paul of the cross feast day',
    'st paul of the cross patron saint',
    'catholic saints',
    'october 20 feast day',
    'modern saints',
    'passionists',
    'italy',
    'genoa'
  ],
  openGraph: {
    title: 'St. Paul of the Cross - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Paul of the Cross, founder of the Passionists and missionary of Italy.',
    url: 'https://catholicbibleonline.com/saints/st-paul-of-the-cross',
  },
  twitter: {
    title: 'St. Paul of the Cross - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Paul of the Cross, founder of the Passionists and missionary of Italy.',
  }
}

export default function StPaulOfTheCrossPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💙</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Paul of the Cross
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Founder of the Passionists, Missionary of Italy, Devotee of the Passion of Christ
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Paul of the Cross</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 20</div>
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
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Paul of the Cross</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Paul of the Cross was born at Ovada in the Republic of Genoa on January 3, 1694. 
                His infancy and youth were spent in great innocence and piety, showing from an early 
                age a deep love for God and a desire to serve Him. His early years were marked by 
                a strong spiritual foundation that would prepare him for his future mission.
              </p>
              
              <p className="mb-6">
                From a young age, Paul was inspired from on high to found a congregation. In an 
                ecstasy, he beheld the habit which he and his companions were to wear - a vision 
                that would guide the foundation of the Passionist Order. This mystical experience 
                was a clear sign of God's plan for his life and the mission he was called to undertake.
              </p>
              
              <p className="mb-6">
                After consulting his spiritual director, Bishop Gastinara of Alexandria in Piedmont, 
                Paul reached the conclusion that God wished him to establish a congregation in honor 
                of the Passion of Jesus Christ. This was a bold and visionary undertaking that would 
                require great faith and perseverance. The bishop's approval and guidance were crucial 
                in helping Paul discern God's will for his life.
              </p>
              
              <p className="mb-6">
                On November 22, 1720, Bishop Gastinara vested Paul with the habit that had been 
                shown to him in a vision, the same that the Passionists wear at the present time. 
                This moment marked the official beginning of the Passionist Order and was a 
                fulfillment of the divine vision that had guided Paul's spiritual journey.
              </p>
              
              <p className="mb-6">
                From that moment, the saint applied himself to preparing the Rules of his institute. 
                In 1721, he went to Rome to obtain the approbation of the Holy See. At first, he 
                faced rejection and disappointment, but his perseverance and faith in God's plan 
                never wavered. Finally, after years of effort, he succeeded when Pope Benedict XIV 
                approved the Rules in 1741 and 1746, officially recognizing the Passionist Order.
              </p>
              
              <p className="mb-6">
                Meanwhile, St. Paul built his first monastery near Obitello, establishing a foundation 
                for the new order. Sometime later, he established a larger community at the Church 
                of St. John and Paul in Rome, which would become the motherhouse of the Passionists. 
                These foundations provided the physical and spiritual homes for the growing order.
              </p>
              
              <p className="mb-6">
                For fifty years, St. Paul remained the indefatigable missionary of Italy, traveling 
                throughout the country to preach the Gospel and spread devotion to the Passion of 
                Christ. His preaching was marked by great fervor and effectiveness, drawing many 
                people to conversion and deeper faith. Despite his great success as a missionary, 
                he maintained a profound sense of humility.
              </p>
              
              <p>
                God lavished upon him the greatest gifts in the supernatural order, including 
                mystical experiences and the gift of miracles, but he treated himself with the 
                greatest rigor and believed that he was a useless servant and a great sinner. 
                This profound humility was a hallmark of his sanctity. His saintly death occurred 
                at Rome in the year 1775, at the age of eighty-one. He was canonized by Pope Pius 
                IX in 1867, recognizing his extraordinary holiness and the impact of his life and 
                work on the Church.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Paul of the Cross: Founder of the Passionists and Missionary of Italy</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Founder of the Passionists</h3>
              <p className="mb-6">
                St. Paul of the Cross's greatest legacy is the foundation of the Passionist Order, 
                a religious congregation dedicated to preaching the Passion of Jesus Christ and 
                promoting devotion to His sufferings. The order continues to serve the Church 
                today, with communities throughout the world dedicated to prayer, preaching, and 
                service. The distinctive black habit with the Passionist emblem serves as a 
                constant reminder of Christ's sufferings and the call to share in His cross.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Missionary Zeal</h3>
              <p className="mb-6">
                For fifty years, St. Paul was the indefatigable missionary of Italy, traveling 
                throughout the country to preach the Gospel and bring people closer to Christ. 
                His preaching was marked by great fervor and effectiveness, drawing many people 
                to conversion and deeper faith. His missionary zeal continues to inspire those 
                called to evangelization and the proclamation of the Gospel.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotion to the Passion</h3>
              <p className="mb-6">
                St. Paul's deep devotion to the Passion of Christ is perhaps his most distinctive 
                spiritual characteristic. He saw in Christ's sufferings not only the means of 
                our redemption but also a model for how we should live our lives. His emphasis 
                on the Passion helped to renew and deepen the Church's appreciation for this 
                central mystery of our faith, inspiring countless people to greater devotion 
                to the sufferings of Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Humility and Self-Denial</h3>
              <p>
                Despite receiving great gifts from God and achieving remarkable success in his 
                mission, St. Paul maintained a profound sense of humility and treated himself 
                with great rigor. He believed himself to be a useless servant and a great sinner, 
                demonstrating the true humility that is characteristic of the saints. His example 
                reminds us that true holiness is always accompanied by humility and self-denial.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">October 20</div>
              <p className="text-gray-600">Memorial of St. Paul of the Cross, Priest</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Paul of the Cross is celebrated on October 20th. This memorial 
                honors his life as the founder of the Passionists, his missionary work in Italy, 
                and his deep devotion to the Passion of Christ. It is a day to remember his 
                extraordinary contributions to the Church and to seek his intercession.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. Paul of the Cross lived during the 18th century, a time of great change and 
                challenge for the Church. His life and work took place against the backdrop of 
                the Enlightenment and various social and political upheavals. His foundation of 
                the Passionists and his missionary work helped to renew the Church's spiritual 
                life and to bring many people back to the faith during a difficult period.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On his feast day, Catholics pray for his intercession, especially for those 
                called to religious life, for missionaries and preachers, for those seeking 
                to grow in devotion to the Passion of Christ, and for the grace to embrace 
                the cross in our daily lives. His example inspires us to be bold in proclaiming 
                the Gospel and to maintain a deep devotion to the sufferings of Christ.
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
                  <li>• <strong>Passionists:</strong> Patron saint of the Passionist Order</li>
                  <li>• <strong>Missionaries:</strong> Patron of missionaries and preachers</li>
                  <li>• <strong>Italy:</strong> Patron saint of Italy</li>
                  <li>• <strong>Genoa:</strong> One of the patron saints of Genoa</li>
                  <li>• <strong>Religious Founders:</strong> Helper for those founding religious orders</li>
                  <li>• <strong>Passion Devotion:</strong> Patron of devotion to Christ's Passion</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Humility:</strong> Helper for those seeking true humility</li>
                  <li>• <strong>Perseverance:</strong> Patron of those facing obstacles</li>
                  <li>• <strong>Mystical Experiences:</strong> Helper for those with mystical gifts</li>
                  <li>• <strong>Preaching:</strong> Patron of preachers and evangelizers</li>
                  <li>• <strong>Self-Denial:</strong> Helper for those practicing penance</li>
                  <li>• <strong>Religious Life:</strong> Patron of those discerning religious vocations</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Paul of the Cross</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Paul of the Cross, founder of the Passionists and indefatigable 
                    missionary of Italy, who dedicated your life to preaching the Passion 
                    of Jesus Christ, pray for us who call upon your intercession.
                  </p>
                  <p className="mb-4">
                    Help us to grow in devotion to the Passion of Christ and to embrace 
                    the cross in our daily lives. Teach us to be humble servants of God 
                    and to persevere in our mission despite obstacles and difficulties.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace 
                    to proclaim the Gospel with fervor and to serve God with humility. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Missionaries</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Paul of the Cross, who traveled throughout Italy for fifty years 
                    preaching the Gospel, intercede for all missionaries and preachers 
                    throughout the world.
                  </p>
                  <p>
                    Help them to proclaim the Word of God with the same fervor and 
                    effectiveness that characterized your ministry. May they, like you, 
                    bring many souls to Christ through their preaching and example. 
                    Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Devotion to the Passion</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Paul of the Cross, who had such deep devotion to the Passion 
                    of Christ, intercede for all those who seek to grow in their love 
                    for the sufferings of Jesus.
                  </p>
                  <p>
                    Help us to meditate on the Passion with the same intensity and love 
                    that you did, and to find in Christ's sufferings the strength to 
                    carry our own crosses. Through Christ our Lord. Amen."
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
            <Link href="/saints/st-francis-xavier" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis Xavier
                </h3>
                <p className="text-gray-700 text-sm">
                  Great missionary and patron of missionaries, known for his zeal for souls.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-ignatius-loyola" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Ignatius Loyola
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Jesuits and great spiritual director.
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