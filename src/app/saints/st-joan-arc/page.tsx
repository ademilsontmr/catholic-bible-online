import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Joan of Arc - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Joan of Arc, The Maid of Orléans, who led French armies to victory and was martyred for her faith.',
  keywords: [
    'st joan of arc',
    'saint joan of arc',
    'st joan of arc biography',
    'st joan of arc feast day',
    'st joan of arc patron saint',
    'may 30 feast day',
    'warrior saints',
    'maid of orleans'
  ],
  openGraph: {
    title: 'St. Joan of Arc - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Joan of Arc, The Maid of Orléans, who led French armies to victory.',
    url: 'https://catholicbibleonline.com/saints/st-joan-arc',
  },
  twitter: {
    title: 'St. Joan of Arc - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Joan of Arc, The Maid of Orléans, who led French armies to victory.',
  }
}

export default function StJoanArcPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Joan of Arc
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            The Maid of Orléans, Patron of France and Soldiers
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Joan of Arc</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">May 30</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Warrior</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Joan of Arc</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Joan of Arc was born around 1412 in Domrémy, a small village in northeastern France. 
                She was the daughter of Jacques d'Arc, a farmer, and Isabelle Romée. From an early age, 
                Joan was deeply religious and spent much of her time in prayer and attending Mass.
              </p>
              
              <p className="mb-6">
                At the age of 13, Joan began to experience visions and hear voices that she believed 
                came from God. These heavenly messengers, including St. Michael the Archangel, St. 
                Catherine of Alexandria, and St. Margaret of Antioch, told her that she had been chosen 
                to help save France from English domination during the Hundred Years' War.
              </p>
              
              <p className="mb-6">
                In 1429, at the age of 17, Joan convinced the local commander to provide her with an 
                escort to the French court at Chinon. There, she met with the Dauphin (future King 
                Charles VII) and convinced him of her divine mission. After being examined by theologians 
                who found no fault in her, she was given command of French troops.
              </p>
              
              <p className="mb-6">
                Joan led the French army to several victories, including the liberation of Orléans, 
                which earned her the title "The Maid of Orléans." She was instrumental in the 
                coronation of Charles VII at Reims Cathedral, fulfilling her mission to restore 
                the rightful king to the throne.
              </p>
              
              <p>
                However, Joan's military success was short-lived. In 1430, she was captured by 
                Burgundian forces and sold to the English. She was put on trial for heresy and 
                witchcraft, charges that were politically motivated. Despite her courageous defense, 
                she was found guilty and burned at the stake in Rouen on May 30, 1431, at the age of 19.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Joan: Patron of France</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Joan of Arc's legacy extends far beyond her military achievements. She represents 
                the power of faith, courage, and divine guidance in the face of seemingly impossible 
                odds. Her story has inspired countless people throughout history, both within and 
                outside the Catholic Church.
              </p>
              
              <p className="mb-6">
                Joan's unwavering faith in God and her willingness to follow divine guidance, even 
                when it meant challenging social norms and facing persecution, serves as a powerful 
                example of spiritual courage. She demonstrated that God can work through anyone, 
                regardless of age, gender, or social status.
              </p>
              
              <p className="mb-6">
                Her military leadership and strategic insight were remarkable for someone so young 
                and inexperienced. Joan's ability to inspire and lead troops, combined with her 
                deep faith, shows how spiritual conviction can translate into practical action and 
                positive change in the world.
              </p>
              
              <p>
                St. Joan's martyrdom and the subsequent rehabilitation of her reputation demonstrate 
                the triumph of truth over false accusations and political manipulation. Her canonization 
                in 1920 by Pope Benedict XV affirmed her sanctity and recognized her as a model of 
                Christian virtue and courage.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🎉 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Joan of Arc's feast day is celebrated on May 30, the anniversary of her martyrdom 
                in 1431. This day commemorates not only her death but also her life of faith, courage, 
                and service to God and country.
              </p>
              
              <p className="mb-6">
                In France, St. Joan of Arc is celebrated as a national heroine and patron saint. 
                Her feast day is marked with special Masses, processions, and cultural events, 
                particularly in Orléans, where she liberated the city from English siege.
              </p>
              
              <p className="mb-6">
                The feast day serves as a reminder of the importance of following God's call, 
                even when it requires great sacrifice. It also highlights the Church's recognition 
                of Joan's sanctity and her example of Christian virtue in the face of persecution.
              </p>
              
              <p>
                St. Joan's feast day is an opportunity to reflect on the themes of courage, 
                faith, divine guidance, and the willingness to stand up for truth and justice, 
                even when it means facing opposition and suffering.
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
                  <li>• <strong>France:</strong> National patron saint</li>
                  <li>• <strong>Soldiers:</strong> Military personnel and veterans</li>
                  <li>• <strong>Captives:</strong> Prisoners and those in captivity</li>
                  <li>• <strong>Teenagers:</strong> Young people facing difficult decisions</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Additional Patronages</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Women in the Military:</strong> Female service members</li>
                  <li>• <strong>Orléans:</strong> The city she liberated</li>
                  <li>• <strong>Radio Operators:</strong> Modern communication</li>
                  <li>• <strong>Those Falsely Accused:</strong> Victims of injustice</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Joan of Arc</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Joan of Arc, you who heard the voice of God and followed it with courage, 
                    help me to listen to God's call in my own life. Give me the strength to stand 
                    up for what is right, even when it is difficult.
                  </p>
                  <p className="mb-4">
                    Help me to trust in God's guidance and to have faith that He will provide 
                    what I need to fulfill His will. May your example of courage and devotion 
                    inspire me to be a better follower of Christ.
                  </p>
                  <p>
                    St. Joan, pray for me that I may have the courage to face my challenges 
                    with faith and determination, always trusting in God's love and protection. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Courage</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Joan of Arc, you who faced impossible odds with unwavering faith, 
                    intercede for me in my time of need. Help me to find the courage to face 
                    my challenges and to trust in God's plan for my life.
                  </p>
                  <p>
                    May your example of bravery and devotion inspire me to be strong in my faith 
                    and to follow God's will with confidence and love. Amen."
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
            <Link href="/saints/st-michael-archangel" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Warrior Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Michael the Archangel
                </h3>
                <p className="text-gray-700 text-sm">
                  The great archangel who appeared to Joan and led the heavenly armies, protector of the Church.
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

            <Link href="/saints/st-anthony" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anthony of Padua
                </h3>
                <p className="text-gray-700 text-sm">
                  Franciscan friar known for his powerful preaching and miracles, patron of lost items.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-center mt-12">
          <Link 
            href="/saints" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Saints
          </Link>
        </div>
      </div>
    </div>
  )
} 