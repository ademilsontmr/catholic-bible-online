import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Laura - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Laura, martyr of Cordova who died for her faith during the Moorish persecution in Spain.',
  keywords: [
    'st laura',
    'saint laura',
    'st laura biography',
    'st laura feast day',
    'st laura patron saint',
    'catholic saints',
    'october 19 feast day',
    'martyr saints',
    'cordova spain',
    'moorish persecution'
  ],
  openGraph: {
    title: 'St. Laura - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Laura, martyr of Cordova who died for her faith.',
    url: 'https://catholicbibleonline.com/saints/st-laura',
  },
  twitter: {
    title: 'St. Laura - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Laura, martyr of Cordova who died for her faith.',
  }
}

export default function StLauraPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Laura
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Martyr of Cordova, Victim of Moorish Persecution, Model of Faith and Courage
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Laura</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 19</div>
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
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Laura</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Laura was born in Cordova, Spain, during a time when the Iberian Peninsula was under 
                Moorish rule. Her life unfolded during the ninth century, a period marked by religious 
                persecution and the struggle between Christian and Islamic forces for control of the region.
              </p>
              
              <p className="mb-6">
                As a young woman, Laura was married, but her husband died, leaving her a widow. Rather 
                than remarrying or seeking worldly comforts, Laura felt called to dedicate her life 
                entirely to God. She entered the convent at Cuteclara, where she embraced the religious 
                life with great devotion and fervor.
              </p>
              
              <p className="mb-6">
                At Cuteclara, Laura lived a life of prayer, penance, and service to her community. 
                She became known for her deep faith, her kindness to others, and her unwavering 
                commitment to her Christian beliefs. Her religious life was a source of strength 
                and inspiration to her fellow nuns and to the local Christian community.
              </p>
              
              <p className="mb-6">
                However, the peaceful life of the convent was shattered when Moorish forces captured 
                the area. The Moors, who were Muslim rulers, often persecuted Christians who refused 
                to convert to Islam. Laura and her fellow nuns were taken captive by the Moorish 
                authorities.
              </p>
              
              <p className="mb-6">
                When the Moorish captors demanded that Laura renounce her Christian faith and convert 
                to Islam, she steadfastly refused. Her captors tried various methods to break her 
                resolve, but Laura remained firm in her commitment to Christ. She declared that she 
                would rather die than abandon her faith.
              </p>
              
              <p>
                In 864, St. Laura was martyred by being scalded to death by her Moorish captors. 
                This brutal form of execution was meant to be both painful and humiliating, but 
                Laura faced her death with extraordinary courage and faith. Her martyrdom became 
                a powerful witness to the strength of Christian faith in the face of persecution.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Laura: Martyr of Cordova</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Faithful Witness</h3>
              <p className="mb-6">
                St. Laura's martyrdom stands as a powerful example of what it means to remain faithful 
                to Christ even in the face of death. Her refusal to renounce her faith, even under 
                the most brutal torture, demonstrates the depth of her love for God and her commitment 
                to the Gospel.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Religious Freedom</h3>
              <p className="mb-6">
                Laura's story is particularly relevant in today's world, where religious persecution 
                continues to exist in many parts of the world. Her example reminds us of the importance 
                of religious freedom and the courage needed to defend one's faith when it is under attack.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Inspiration for Consecrated Life</h3>
              <p className="mb-6">
                Laura's decision to enter religious life after being widowed shows her deep spiritual 
                calling and her desire to serve God with her whole heart. Her life as a nun at Cuteclara 
                demonstrates the beauty and value of consecrated life, even in times of persecution.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patroness of Persecuted Christians</h3>
              <p>
                St. Laura has become a powerful intercessor for Christians who face persecution, 
                discrimination, or pressure to abandon their faith. Her prayers are sought by those 
                who need strength and courage to remain faithful to Christ in difficult circumstances.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">October 19</div>
              <p className="text-gray-600">Memorial of St. Laura, Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Laura is celebrated on October 19th. This memorial honors her martyrdom 
                and her courageous witness to the Christian faith during the Moorish persecution in Spain.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. Laura's martyrdom took place during a period of significant religious and cultural 
                conflict in medieval Spain. The Moorish conquest of the Iberian Peninsula created a 
                complex society where Christians, Muslims, and Jews lived together, often under 
                difficult circumstances for religious minorities.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On her feast day, Catholics pray for her intercession, especially for those facing 
                religious persecution, for the strength to remain faithful to Christ in difficult 
                circumstances, and for the protection of religious freedom around the world.
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
                  <li>• <strong>Persecuted Christians:</strong> Patroness of those facing religious persecution</li>
                  <li>• <strong>Widows:</strong> Helper for those who have lost their spouses</li>
                  <li>• <strong>Religious Sisters:</strong> Patroness of consecrated women</li>
                  <li>• <strong>Cordova:</strong> One of the patron saints of Cordova, Spain</li>
                  <li>• <strong>Religious Freedom:</strong> Protector of religious liberty</li>
                  <li>• <strong>Martyrs:</strong> Model for those who die for their faith</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Courage in Faith:</strong> Helper for those facing pressure to abandon beliefs</li>
                  <li>• <strong>Religious Conversion:</strong> Patroness of those seeking deeper faith</li>
                  <li>• <strong>Protection from Persecution:</strong> Guardian against religious discrimination</li>
                  <li>• <strong>Strength in Suffering:</strong> Helper for those enduring trials</li>
                  <li>• <strong>Witness to Christ:</strong> Patroness of evangelization</li>
                  <li>• <strong>Peaceful Coexistence:</strong> Helper for interfaith dialogue</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Laura</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Laura, martyr of Cordova, who courageously faced death rather than abandon 
                    your faith in Christ, pray for us who call upon your intercession.
                  </p>
                  <p className="mb-4">
                    Help us to remain steadfast in our Christian beliefs, even when faced with pressure 
                    or persecution. Give us the strength to witness to our faith with courage and love, 
                    following your example of faithfulness to the end.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace to remain 
                    faithful to Christ in all circumstances. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Persecuted Christians</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Laura, who suffered martyrdom for your faith, intercede for all Christians 
                    who face persecution, discrimination, or pressure to abandon their beliefs. 
                    Give them the courage and strength to remain faithful to Christ.
                  </p>
                  <p>
                    May they find comfort in knowing that their suffering is united with Christ's 
                    passion and that their witness brings glory to God. Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Religious Freedom</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Laura, who died defending your right to practice your faith, pray for 
                    religious freedom throughout the world. Help us to work for a world where all 
                    people can worship God according to their conscience.
                  </p>
                  <p>
                    Inspire us to stand up for the rights of religious minorities and to promote 
                    understanding and respect between people of different faiths. Through Christ our Lord. Amen."
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
            <Link href="/saints/st-agnes" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Agnes
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr who refused marriage to remain faithful to Christ, patroness of young girls.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-stephen" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Stephen
                </h3>
                <p className="text-gray-700 text-sm">
                  First deacon and first Christian martyr, known for his powerful preaching and forgiveness.
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