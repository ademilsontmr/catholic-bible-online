import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Mary Magdalene - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Mary Magdalene, first witness to the Resurrection and patron of converts.',
  keywords: [
    'st mary magdalene',
    'saint mary magdalene',
    'mary magdalene',
    'july 22 feast day',
    'catholic saints',
    'biblical saints',
    'first witness to resurrection'
  ],
  openGraph: {
    title: 'St. Mary Magdalene - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Mary Magdalene, first witness to the Resurrection and patron of converts.',
    url: 'https://catholicbibleonline.com/saints/st-mary-magdalene',
  },
  twitter: {
    title: 'St. Mary Magdalene - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Mary Magdalene, first witness to the Resurrection and patron of converts.',
  }
}

export default function StMaryMagdalenePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌹</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Mary Magdalene
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            First Witness to the Resurrection
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Mary Magdalene</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 22</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌹</div>
              <div className="text-sm text-gray-600">Biblical Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Mary Magdalene</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Mary Magdalene is one of the greatest saints of the Bible and 
                a legendary example of God's mercy and grace. The precise dates 
                of her birth and death are unknown, but we do know she was present 
                with Christ during his public ministry, death and resurrection. 
                She is mentioned at least a dozen times in the Gospels. Mary Magdalene 
                has long been regarded as a prostitute or sexually immoral in western 
                Christianity, but this is not supported in the scriptures. It is 
                believed she was a Jewish woman who lived among Gentiles, living 
                as they did. The Gospels agree that Mary was originally a great 
                sinner. Jesus cast seven demons out of her when he met her. After 
                this, she told several women she associated with and these women 
                also became followers.
              </p>
              
              <p className="mb-6">
                There is also debate over if Mary Magdalene is the same unnamed 
                women, a sinner, who weeps and washes Jesus' feet with her hair 
                in the Gospel of John. Scholars are skeptical this is the same 
                person. Despite the scholarly dispute over her background, what 
                she did in her subsequent life, after meeting Jesus, is much more 
                significant. She was certainly a sinner whom Jesus saved, giving 
                us an example of how no person is beyond the saving grace of God. 
                During Jesus' ministry, it is believed that Mary Magdalene followed 
                him, part of a semi-permanent entourage who served Jesus and his 
                Disciples.
              </p>
              
              <p className="mb-6">
                Mary likely watched the crucifixion from a distance along with 
                the other women who followed Christ during His ministry. Mary 
                was present when Christ rose from the dead, visiting his tomb 
                to anoint his body only to find the stone rolled away and Christ, 
                very much alive, sitting at the place they laid Him. She was 
                the first witness to His resurrection. After the death of Christ, 
                a legend states that she remained among the early Christians. 
                After fourteen years, she was allegedly put into a boat by Jews, 
                along with several other saints of the early Church, and set 
                adrift without sails or oars. The boat landed in southern France, 
                where she spent the remaining years of her life living in solitude, 
                in a cave.
              </p>
              
              <p>
                St. Mary Magdalene's feast day is July 22. She is the patroness 
                of converts, repentant sinners, sexual temptation, pharmacists, 
                tanners and women, and many other places and causes.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Mary Magdalene: Apostle to the Apostles</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Divine Mercy</h3>
              <p className="mb-6">
                St. Mary Magdalene's most enduring legacy is her extraordinary 
                example of God's infinite mercy and the transformative power 
                of His grace. Her story demonstrates that no one is beyond the 
                reach of God's love and forgiveness. From being possessed by 
                seven demons to becoming the first witness to the Resurrection, 
                Mary Magdalene's life shows the complete transformation that 
                is possible through encounter with Christ. Her legacy reminds 
                us that our past sins do not define us and that God can use 
                even the most broken and sinful people for His glory. Mary 
                Magdalene's example challenges us to never give up on anyone, 
                including ourselves, and to always trust in God's power to 
                transform lives. Her story encourages us to be witnesses of 
                God's mercy in our own lives and to share the good news of 
                His love and forgiveness with others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">First Witness to the Resurrection</h3>
              <p className="mb-6">
                St. Mary Magdalene's role as the first witness to the Resurrection 
                makes her one of the most important figures in salvation history. 
                Her encounter with the risen Christ at the empty tomb demonstrates 
                her deep love and devotion to Jesus, as she went to anoint His 
                body even when all seemed lost. Her witness to the Resurrection 
                is the foundation of the Christian faith, as St. Paul writes 
                that if Christ has not been raised, our faith is in vain. Mary 
                Magdalene's legacy teaches us the importance of being witnesses 
                to the truth and of sharing the good news of Christ's victory 
                over death. Her example encourages us to be bold in proclaiming 
                our faith and to never be afraid to share the hope we have in 
                Christ. Mary Magdalene's witness also reminds us that God often 
                chooses the most unexpected people to be His messengers and that 
                He values our faithfulness and love more than our status or 
                background.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Example of True Repentance</h3>
              <p>
                St. Mary Magdalene's life demonstrates the true meaning of repentance 
                and conversion. Her transformation from a life of sin to a life 
                of discipleship shows that repentance is not just about feeling 
                sorry for our sins, but about completely turning our lives around 
                and following Christ. Mary Magdalene's example teaches us that 
                true repentance involves a radical change of heart and a commitment 
                to live differently. Her legacy encourages us to be honest about 
                our own sinfulness and to trust in God's power to heal and transform 
                us. Mary Magdalene's story also reminds us that conversion is 
                an ongoing process and that we should never stop growing in our 
                relationship with Christ. Her example challenges us to be humble 
                about our own need for God's mercy and to extend that same mercy 
                to others who are struggling with sin and brokenness.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">July 22</div>
              <p className="text-gray-600">Feast of St. Mary Magdalene</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Mary Magdalene is celebrated on July 22nd, during 
                the summer season when the Church reflects on the themes of growth 
                and harvest. This feast is celebrated as a memorial in the Roman 
                Catholic Church, recognizing Mary Magdalene's importance as the 
                first witness to the Resurrection and her role in salvation history. 
                The feast falls during a time when many people are enjoying the 
                warmth and beauty of summer, making it an ideal time to remember 
                Mary Magdalene's witness to the light of Christ's Resurrection. 
                The feast provides an opportunity to honor Mary Magdalene's memory 
                and to reflect on how we can be witnesses to God's mercy and love 
                in our own lives. It is also a time to pray for those who are 
                struggling with sin and brokenness, asking for Mary Magdalene's 
                intercession in helping them to experience God's transforming grace.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Mary Magdalene, many people participate 
                in special prayers and devotions to honor her memory and seek 
                her intercession. Churches, particularly those with connections 
                to conversion ministries or healing ministries, hold special 
                Masses and services. Many people gather to pray for those who 
                are struggling with sin and brokenness, asking for St. Mary 
                Magdalene's intercession in helping them to experience God's 
                mercy and transformation. The day is also marked by prayers 
                for all those who work in healing and conversion ministries, 
                asking for Mary Magdalene's guidance in helping others to encounter 
                Christ. Many people also take time to reflect on their own 
                need for God's mercy and to pray for the grace to be witnesses 
                to His love and forgiveness. The feast is also a time to reflect 
                on how we can share the good news of Christ's Resurrection with 
                others and to ensure that our lives reflect the hope and joy 
                that comes from knowing Him.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of repentance 
                and the ability to experience God's transforming grace. Many people 
                make special petitions for those who are struggling with sin and 
                brokenness, asking for St. Mary Magdalene's intercession in helping 
                them to encounter Christ and experience His mercy. The day is also 
                a time to reflect on the importance of being witnesses to the truth 
                and to pray for the grace to boldly proclaim our faith in Christ's 
                Resurrection. St. Mary Magdalene's feast day encourages us to remember 
                that no one is beyond God's mercy and that He can transform even 
                the most broken lives. It is also a time to pray for the grace 
                to be humble about our own need for God's forgiveness and to extend 
                that same forgiveness to others. The feast reminds us that we are 
                all called to be witnesses to God's love and mercy, just as Mary 
                Magdalene was the first witness to Christ's victory over death.
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
                  <li>• <strong>Converts:</strong> Patron of converts and repentance</li>
                  <li>• <strong>Repentant Sinners:</strong> Patron of repentant sinners</li>
                  <li>• <strong>Sexual Temptation:</strong> Patron against sexual temptation</li>
                  <li>• <strong>Pharmacists:</strong> Patron of pharmacists</li>
                  <li>• <strong>Tanners:</strong> Patron of tanners</li>
                  <li>• <strong>Women:</strong> Patron of women</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Mercy:</strong> Helper in experiencing God's mercy</li>
                  <li>• <strong>Conversion:</strong> Patron of conversion and repentance</li>
                  <li>• <strong>Healing:</strong> Helper in spiritual healing</li>
                  <li>• <strong>Witness:</strong> Patron of bearing witness to Christ</li>
                  <li>• <strong>Resurrection:</strong> Helper in understanding the Resurrection</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Mary Magdalene</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Mary Magdalene, first witness to the Resurrection and 
                    model of God's mercy, help me to experience the transforming 
                    power of Christ's love.
                  </p>
                  <p className="mb-4">
                    Teach me to trust in God's infinite mercy and to never give 
                    up hope, no matter how broken or sinful I may be. Guide me 
                    in being a witness to Christ's love and forgiveness in my 
                    own life and in the lives of others.
                  </p>
                  <p>
                    St. Mary Magdalene, pray for me that I may have the courage 
                    to repent of my sins, the faith to trust in God's mercy, 
                    and the love to be a witness to His Resurrection. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Conversion</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Mary Magdalene, patron of converts and repentant sinners, 
                    intercede for all those who are seeking God's mercy and forgiveness.
                  </p>
                  <p>
                    Help us to experience the transforming power of Christ's love 
                    and to be witnesses to His Resurrection in our daily lives. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Mary Magdalene, pray for us!"
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
            <Link href="/saints/st-mary-virgin" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Mary the Virgin
                </h3>
                <p className="text-gray-700 text-sm">
                  Mother of Jesus and Queen of Heaven.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-peter" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peter
                </h3>
                <p className="text-gray-700 text-sm">
                  First Pope and leader of the Apostles.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-augustine-hippo" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Augustine of Hippo
                </h3>
                <p className="text-gray-700 text-sm">
                  Great convert and Doctor of the Church.
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