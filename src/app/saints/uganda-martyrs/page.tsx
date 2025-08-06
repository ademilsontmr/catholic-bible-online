import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uganda Martyrs - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of the Uganda Martyrs, 22 Catholic martyrs who died for their faith in 1886.',
  keywords: [
    'uganda martyrs',
    'saint charles lwanga',
    'saint joseph mkasa',
    'uganda martyrs biography',
    'uganda martyrs feast day',
    'uganda martyrs patron saint',
    'african martyrs',
    'modern martyrs',
    'catholic saints',
    'june 3 feast day'
  ],
  openGraph: {
    title: 'Uganda Martyrs - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of the Uganda Martyrs, 22 Catholic martyrs who died for their faith in 1886.',
    url: 'https://catholicbibleonline.com/saints/uganda-martyrs',
  },
  twitter: {
    title: 'Uganda Martyrs - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of the Uganda Martyrs, 22 Catholic martyrs who died for their faith in 1886.',
  }
}

export default function UgandaMartyrsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            Uganda Martyrs
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Twenty-Two Catholic Martyrs of Uganda, Witnesses to Faith in Modern Times
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Uganda Martyrs</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">June 3</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Martyrs</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of the Uganda Martyrs</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                For those of us who think that the faith and zeal of the early Christians died out as the Church grew more safe and powerful 
                through the centuries, the martyrs of Uganda are a reminder that persecution of Christians continues in modern times, 
                even to the present day.
              </p>
              
              <p className="mb-6">
                The Society of Missionaries of Africa (known as the White Fathers) had only been in Uganda for 6 years and yet they had built up 
                a community of converts whose faith would outshine their own. The earliest converts were soon instructing and leading new converts 
                that the White Fathers couldn't reach. Many of these converts lived and taught at King Mwanga's court.
              </p>
              
              <p className="mb-6">
                King Mwanga was a violent ruler and pedophile who forced himself on the young boys and men who served him as pages and attendants. 
                The Christians at Mwanga's court tried to protect the pages from King Mwanga.
              </p>
              
              <p className="mb-6">
                The leader of the small community of 200 Christians was the chief steward of Mwanga's court, a twenty-five-year-old Catholic 
                named Joseph Mkasa (or Mukasa). When Mwanga killed a Protestant missionary and his companions, Joseph Mkasa confronted Mwanga 
                and condemned his action. Mwanga had always liked Joseph but when Joseph dared to demand that Mwanga change his lifestyle, 
                Mwanga forgot their long friendship.
              </p>
              
              <p className="mb-6">
                After striking Joseph with a spear, Mwanga ordered him killed. When the executioners tried to tie Joseph's hands, he told them, 
                "A Christian who gives his life for God is not afraid to die." He forgave Mwanga with all his heart but made one final plea 
                for his repentance before he was beheaded and then burned on November 15, 1885.
              </p>
              
              <p>
                Charles Lwanga took over the instruction and leadership of the Christian community at court and the charge of keeping the young 
                boys and men out of Mwanga's hands. The persecution continued, culminating in the martyrdom of 22 Catholics and 11 Protestants 
                on June 3, 1886, at Namugongo.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of the Uganda Martyrs: Modern Witnesses to Faith</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                The Uganda Martyrs represent the continuation of Christian witness in modern times. Their martyrdom in 1886 proves that 
                the faith and courage of the early Christians did not die out, but continues to inspire believers even in the face of 
                contemporary persecution.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Courage and Joy</h3>
              <p className="mb-6">
                The martyrs' courage and joy in the face of death is remarkable. Thirteen-year-old Kizito was described as laughing and chattering 
                on the way to execution. James Buzabaliawo said, "Goodbye, then. I am going to Heaven, and I will pray to God for you." 
                Their faith was so strong that they could face death with peace and even joy.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Growth of the Church</h3>
              <p className="mb-6">
                When the White Fathers were expelled from the country, the new Christians carried on their work, translating and printing 
                the catechism into their native language and giving secret instruction on the faith. Without priests, liturgy, and sacraments 
                their faith, intelligence, courage, and wisdom kept the Catholic Church alive and growing in Uganda.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Modern Persecution</h3>
              <p>
                When the White Fathers returned after King Mwanga's death, they found five hundred Christians and one thousand catechumens 
                waiting for them. The martyrdom of the twenty-two Catholics had not destroyed the Church but had strengthened it, 
                showing that the blood of martyrs is truly the seed of the Church.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">June 3</div>
              <p className="text-gray-600">Feast of the Uganda Martyrs</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The Uganda Martyrs are celebrated on June 3rd, the date of their martyrdom in 1886. This feast day is particularly 
                significant in Uganda and throughout Africa, where their witness continues to inspire Christians.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for persecuted Christians around the world, for the Church in Africa, and for the courage 
                to remain faithful in the face of opposition. It's also a day to remember that persecution continues in modern times.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for persecuted Christians, for the Church in Africa, and to ask for the intercession 
                of the Uganda Martyrs in remaining faithful to Christ.
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
                  <li>• <strong>Persecuted Christians:</strong> Patron of those suffering for their faith</li>
                  <li>• <strong>African Church:</strong> Patron of the Church in Africa</li>
                  <li>• <strong>Youth and Children:</strong> Patron of young Christians</li>
                  <li>• <strong>Modern Martyrs:</strong> Patron of contemporary witnesses</li>
                  <li>• <strong>Uganda:</strong> Patron of the country where they died</li>
                  <li>• <strong>Courage in Faith:</strong> Patron of those facing persecution</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Protection of the Innocent:</strong> Helper for those protecting children</li>
                  <li>• <strong>Conversion of Persecutors:</strong> Patron of praying for enemies</li>
                  <li>• <strong>Faith Under Pressure:</strong> Helper for those facing opposition</li>
                  <li>• <strong>Joy in Suffering:</strong> Patron of finding joy in trials</li>
                  <li>• <strong>Forgiveness:</strong> Helper for forgiving persecutors</li>
                  <li>• <strong>Church Growth:</strong> Patron of evangelization in difficult circumstances</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to the Uganda Martyrs</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Martyrs of Uganda, pray for the faith where it is in danger and for Christians who must suffer because of their faith. 
                    Give them the same courage, zeal, and joy you showed.
                  </p>
                  <p>
                    And help those of us who live in places where Christianity is accepted to remain aware of the persecution in other parts 
                    of the world. Help us to be grateful for our religious freedom and to pray for those who do not have it. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "Uganda Martyrs, pray for us!"
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
            <Link href="/saints/st-charles-lwanga" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Charles Lwanga
                </h3>
                <p className="text-gray-700 text-sm">
                  Leader of the Uganda Martyrs, baptized catechumens before martyrdom.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joseph-mkasa" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joseph Mkasa
                </h3>
                <p className="text-gray-700 text-sm">
                  First martyr of Uganda, confronted King Mwanga for his immoral behavior.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-kizito" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Kizito
                </h3>
                <p className="text-gray-700 text-sm">
                  Youngest martyr at age 13, baptized on the night before his death.
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