import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Holy Cross Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Holy Cross Novena with daily prayers, reflections, and guidance. Pray for God\'s mercy, grace, and peace through the intercession of the Holy Cross.',
  keywords: [
    'holy cross novena',
    'cross novena',
    'jesus crucified novena',
    'holy cross prayer',
    'crucifixion novena',
    'precious blood novena',
    'divine mercy novena',
    'holy cross intercession',
    'catholic novena',
    'novena to the holy cross'
  ],
  openGraph: {
    title: 'Holy Cross Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Holy Cross Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/holy-cross',
  },
  twitter: {
    title: 'Holy Cross Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Holy Cross Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Divine Mercy',
    description: 'Pray for God\'s mercy and trust completely in His love.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Grace and Sanctification',
    description: 'Pray for God\'s grace to cleanse us from sin and sanctify our work.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Daily Bread',
    description: 'Pray for our daily bread and the needs of those who are dear to us.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Suffering and Comfort',
    description: 'Pray for God to lighten the burden of our sufferings.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Family Blessings',
    description: 'Pray for God\'s blessings upon our families.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'World Peace',
    description: 'Pray for peace among nations and the true peace that comes from God.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Obedience to Commandments',
    description: 'Pray for the grace to obey God\'s commandments faithfully.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Eternal Glory',
    description: 'Pray for the grace to come at last to the glory of Heaven.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Complete Trust',
    description: 'Pray for complete trust in God\'s mercy and love.',
    slug: 'day-9'
  }
]

export default function HolyCrossNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Holy Cross Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek God's mercy, grace, and peace through the intercession of the Holy Cross, 
            where Jesus shed His Most Precious Blood for our redemption and salvation.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">✝️</div>
              <div className="text-sm text-gray-600">Cross</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">3</div>
              <div className="text-sm text-gray-600">Virtues</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Holy Cross Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Holy Cross Novena is a powerful nine-day prayer that helps us seek God's mercy, grace, and peace 
              through the intercession of the Holy Cross. This novena focuses on the burning love of Jesus, who willed 
              to be crucified and shed His Most Precious Blood for our redemption and salvation.
            </p>
            
            <p className="mb-4">
              Through this novena, we pray for God's mercy, the cleansing of our sins, the sanctification of our work, 
              our daily bread, comfort in suffering, family blessings, world peace, obedience to God's commandments, 
              and the grace to reach the glory of Heaven.
            </p>
            
            <p>
              This novena helps us to trust completely in God's mercy and to remember that through the Holy Cross, 
              Jesus has won for us the grace of salvation and the promise of eternal life.
            </p>
          </div>
        </section>

        {/* Daily Navigation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            Daily Prayers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {novenaDays.map((day) => (
              <Link
                key={day.day}
                href={`/novenas/holy-cross/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in the Holy Cross</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in the power of the Holy Cross and Jesus' burning love for us.
                Turn to the Cross with confidence in every need, especially for mercy and grace.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. Jesus will not fail to help 
                those who turn to His Cross with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to Jesus through the Holy Cross. He wants to help you 
                with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Jesus for His sacrifice on the Cross and for the graces you receive. 
                Gratitude opens our hearts to receive more blessings and divine mercy.
              </p>
            </div>
          </div>
        </section>

        {/* The Three Theological Virtues */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            The Three Theological Virtues
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Faith</h3>
              <p className="text-gray-700 text-sm">
                Believe in the power of the Holy Cross and Jesus' ability to grant us mercy and grace. 
                Trust that God hears and answers our prayers through the sacrifice of His Son.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's mercy and in Jesus' ability to help us through the Holy Cross. 
                Maintain confidence that God will provide what is best for our salvation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for God and for others. Include in your intentions the needs of 
                all those who are suffering and in need of God's mercy and peace.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to the Holy Cross? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to the Holy Cross?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>The Holy Cross</strong> is the most sacred symbol of our Christian faith, representing the ultimate 
              sacrifice of Jesus Christ for the redemption and salvation of humanity. Through His death on the Cross, 
              Jesus won for us the grace of salvation and the promise of eternal life.
            </p>
            
            <p className="mb-4">
              <strong>Symbol of Love</strong> - The Cross is the greatest symbol of God's burning love for us. Jesus 
              willingly suffered and died on the Cross to save us from sin and death, showing us the depth of His love 
              and mercy.
            </p>
            
            <p className="mb-4">
              <strong>Source of Grace</strong> - The Holy Cross is a powerful source of grace and mercy. Through the 
              Cross, we can obtain forgiveness of sins, strength in suffering, and the grace to live according to God's will.
            </p>
            
            <p className="mb-4">
              <strong>Path to Salvation</strong> - The Cross is our path to salvation and eternal glory. By meditating 
              on the Cross and praying through its intercession, we grow closer to Jesus and receive the graces we need 
              for our spiritual journey.
            </p>
            
            <p>
              <strong>Feast Days</strong> - The Church celebrates the Exaltation of the Holy Cross on September 14th 
              and the Finding of the Holy Cross on May 3rd. These feasts remind us of the power and importance of the 
              Cross in our spiritual life.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 