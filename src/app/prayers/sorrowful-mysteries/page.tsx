import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sorrowful Mysteries – Rosary Prayers | Catholic Bible Online",
  description: "Pray the Sorrowful Mysteries of the Rosary: The Agony in the Garden, Scourging, Crowning with Thorns, Carrying of the Cross, and Crucifixion. Complete guide with meditations.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/sorrowful-mysteries",
  },
  openGraph: {
    title: "Sorrowful Mysteries – Rosary Prayers",
    description: "Pray the Sorrowful Mysteries of the Rosary with complete meditations and biblical references.",
    url: "https://www.catholicbibleonline.com/prayers/sorrowful-mysteries",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sorrowful Mysteries – Rosary Prayers",
    description: "Pray the Sorrowful Mysteries of the Rosary with complete meditations and biblical references.",
  },
};

export default function SorrowfulMysteriesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/rosary" className="hover:underline">Rosary Prayers</Link> &gt; 
        Sorrowful Mysteries
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">💔 Sorrowful Mysteries – Rosary Prayers</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Sorrowful Mysteries of the Rosary focus on the Passion and death of Jesus Christ. These mysteries 
        help us meditate on the great love Jesus showed for us through His suffering and sacrifice. They are 
        prayed on Tuesdays and Fridays, and they invite us to unite our own sufferings with Christ's Passion.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Sorrowful Mysteries</h2>
      
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Tuesdays</strong> - Traditional day for the Sorrowful Mysteries</li>
          <li>• <strong>Fridays</strong> - Also dedicated to the Sorrowful Mysteries (day of Christ's death)</li>
          <li>• <strong>During Lent</strong> - Especially appropriate during the season of penance</li>
          <li>• <strong>On Good Friday</strong> - To commemorate Christ's Passion</li>
          <li>• <strong>When facing suffering</strong> - To unite our pain with Christ's</li>
          <li>• <strong>For repentance</strong> - To reflect on the cost of our sins</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Five Sorrowful Mysteries</h2>
      
      <div className="space-y-8 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">1. The Agony in the Garden</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Biblical Reference</h4>
              <p className="text-gray-700 text-sm mb-4">Matthew 26:36-46, Mark 14:32-42, Luke 22:39-46</p>
              <h4 className="font-semibold text-gray-800 mb-2">Meditation</h4>
              <p className="text-gray-700 text-sm">
                Jesus prays in the Garden of Gethsemane, experiencing intense sorrow and fear. He asks His Father 
                to take the cup of suffering away, but submits to God's will. His disciples fall asleep while He suffers alone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fruit of the Mystery</h4>
              <p className="text-gray-700 text-sm mb-4"><strong>Sorrow for Sin</strong></p>
              <h4 className="font-semibold text-gray-800 mb-2">Prayer Intention</h4>
              <p className="text-gray-700 text-sm">
                Pray for the grace to accept God's will in difficult times and to stay awake in prayer.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">2. The Scourging at the Pillar</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Biblical Reference</h4>
              <p className="text-gray-700 text-sm mb-4">Matthew 27:26, Mark 15:15, John 19:1</p>
              <h4 className="font-semibold text-gray-800 mb-2">Meditation</h4>
              <p className="text-gray-700 text-sm">
                Jesus is tied to a pillar and brutally scourged with whips. His body is torn and bleeding, 
                taking upon Himself the punishment for our sins. He endures this torture silently and with love.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fruit of the Mystery</h4>
              <p className="text-gray-700 text-sm mb-4"><strong>Purity</strong></p>
              <h4 className="font-semibold text-gray-800 mb-2">Prayer Intention</h4>
              <p className="text-gray-700 text-sm">
                Pray for the grace to practice self-discipline and to offer up your sufferings for the conversion of sinners.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">3. The Crowning with Thorns</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Biblical Reference</h4>
              <p className="text-gray-700 text-sm mb-4">Matthew 27:27-31, Mark 15:16-20, John 19:2-3</p>
              <h4 className="font-semibold text-gray-800 mb-2">Meditation</h4>
              <p className="text-gray-700 text-sm">
                Jesus is mocked as a king with a crown of thorns pressed into His head. The soldiers bow before 
                Him in mockery, spitting on Him and striking Him. He accepts this humiliation for our pride.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fruit of the Mystery</h4>
              <p className="text-gray-700 text-sm mb-4"><strong>Courage</strong></p>
              <h4 className="font-semibold text-gray-800 mb-2">Prayer Intention</h4>
              <p className="text-gray-700 text-sm">
                Pray for the grace to bear insults and mockery with patience and to overcome pride.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">4. The Carrying of the Cross</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Biblical Reference</h4>
              <p className="text-gray-700 text-sm mb-4">Matthew 27:32, Mark 15:21, Luke 23:26-32, John 19:17</p>
              <h4 className="font-semibold text-gray-800 mb-2">Meditation</h4>
              <p className="text-gray-700 text-sm">
                Jesus carries His cross through the streets of Jerusalem, falling three times under its weight. 
                He meets His mother and the women of Jerusalem. Simon of Cyrene helps Him carry the cross.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fruit of the Mystery</h4>
              <p className="text-gray-700 text-sm mb-4"><strong>Patience</strong></p>
              <h4 className="font-semibold text-gray-800 mb-2">Prayer Intention</h4>
              <p className="text-gray-700 text-sm">
                Pray for the grace to carry your daily crosses with love and to help others in their difficulties.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">5. The Crucifixion</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Biblical Reference</h4>
              <p className="text-gray-700 text-sm mb-4">Matthew 27:33-56, Mark 15:22-41, Luke 23:33-49, John 19:17-37</p>
              <h4 className="font-semibold text-gray-800 mb-2">Meditation</h4>
              <p className="text-gray-700 text-sm">
                Jesus is nailed to the cross and dies for our sins. He forgives His executioners, promises 
                paradise to the good thief, entrusts His mother to John, and gives up His spirit. The earth 
                trembles and the veil of the temple is torn.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fruit of the Mystery</h4>
              <p className="text-gray-700 text-sm mb-4"><strong>Perseverance</strong></p>
              <h4 className="font-semibold text-gray-800 mb-2">Prayer Intention</h4>
              <p className="text-gray-700 text-sm">
                Pray for the grace to persevere in faith until death and to forgive those who hurt you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray the Sorrowful Mysteries</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">Begin with the opening prayers of the Rosary:</p>
          <ul className="mb-4 space-y-2">
            <li>• Sign of the Cross</li>
            <li>• Apostles' Creed</li>
            <li>• Our Father</li>
            <li>• 3 Hail Marys (for faith, hope, and charity)</li>
            <li>• Glory Be</li>
          </ul>
          <p className="mb-4">Then pray each mystery:</p>
          <ul className="space-y-2">
            <li>• Announce the mystery</li>
            <li>• Pray 1 Our Father</li>
            <li>• Pray 10 Hail Marys (meditating on the mystery)</li>
            <li>• Pray 1 Glory Be</li>
            <li>• Pray the Fatima Prayer (optional)</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Understanding of Suffering</h3>
          <p className="text-gray-700 text-sm">
            The Sorrowful Mysteries help us understand the redemptive value of suffering and unite our pain with Christ's.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Repentance</h3>
          <p className="text-gray-700 text-sm">
            Meditating on Christ's Passion helps us recognize the gravity of sin and the need for repentance.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Love and Gratitude</h3>
          <p className="text-gray-700 text-sm">
            We grow in love and gratitude for Jesus, who suffered so much for our salvation.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Strength in Trials</h3>
          <p className="text-gray-700 text-sm">
            We find strength to endure our own sufferings by contemplating Christ's example.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Meditation</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Use your imagination</strong> - Picture yourself present at each scene of the Passion</li>
          <li>• <strong>Reflect on the emotions</strong> - Consider Jesus' love, pain, and determination</li>
          <li>• <strong>Apply to your life</strong> - Think about how each mystery relates to your own sufferings</li>
          <li>• <strong>Pray for specific graces</strong> - Ask for the fruit of each mystery</li>
          <li>• <strong>Be reverent</strong> - Approach these mysteries with deep respect and love</li>
          <li>• <strong>Use visual aids</strong> - Icons or Stations of the Cross can help you focus</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/joyful-mysteries" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Rosary Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Joyful Mysteries
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The five Joyful Mysteries of the Rosary, prayed on Monday and Saturday.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/glorious-mysteries" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Rosary Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Glorious Mysteries
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The five Glorious Mysteries of the Rosary, prayed on Wednesday and Sunday.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/luminous-mysteries" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Rosary Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Luminous Mysteries
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The five Luminous Mysteries of the Rosary, prayed on Thursday.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/prayers/rosary"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          ← Back to Rosary Prayers
        </Link>
      </div>
    </main>
  );
} 