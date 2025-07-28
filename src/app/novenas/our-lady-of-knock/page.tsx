import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to Our Lady of Knock - Complete 9-Day Prayer Guide',
  description: 'Complete Novena to Our Lady of Knock with daily prayers, reflections, and guidance. Pray for special intentions through the intercession of Our Lady of Knock.',
  keywords: [
    'novena to our lady of knock',
    'our lady of knock novena',
    'our lady of knock prayer',
    'knock novena prayer',
    'our lady of knock devotion',
    'knock novena intercession',
    'catholic novena',
    'novena to our lady of knock',
    'blessed virgin mary novena',
    'knock devotion'
  ],
  openGraph: {
    title: 'Novena to Our Lady of Knock - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to Our Lady of Knock with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-knock',
  },
  twitter: {
    title: 'Novena to Our Lady of Knock - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to Our Lady of Knock with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Queen of Ireland',
    description: 'Honor Our Lady of Knock as Queen of Ireland.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Hope in Distress',
    description: 'Pray for hope in times of distress and sorrow.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Pilgrims on the Road',
    description: 'Remember we are all pilgrims on the road to heaven.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Love for Brothers and Sisters',
    description: 'Pray for love and concern for our brothers and sisters in Christ.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Comfort in Sickness',
    description: 'Seek comfort when sick, lonely, or depressed.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Reverent Participation in Mass',
    description: 'Learn to take part more reverently in the Holy Mass.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Love of Jesus in the Blessed Sacrament',
    description: 'Pray for greater love of Jesus in the Blessed Sacrament.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Prayer at the Hour of Death',
    description: 'Ask Our Lady to pray for us at the hour of our death.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Special Intentions',
    description: 'Present your special intentions to Our Lady of Knock.',
    slug: 'day-9'
  }
]

export default function OurLadyOfKnockNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to Our Lady of Knock
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to Our Lady of Knock, Queen of Ireland, 
            seeking her intercession for special intentions and spiritual guidance.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🇮🇪</div>
              <div className="text-sm text-gray-600">Ireland</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Queen</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About Novena to Our Lady of Knock
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena to Our Lady of Knock is a beautiful nine-day prayer to the Blessed Virgin Mary 
              under her special title of Our Lady of Knock, Queen of Ireland. This novena helps us seek 
              her powerful intercession for special intentions and spiritual guidance.
            </p>
            
            <p className="mb-4">
              Through this novena, we honor Our Lady of Knock who gave hope to her people in times of 
              distress and comforted them in sorrow. She has inspired countless pilgrims to pray with 
              confidence to her divine Son, remembering His promise, "Ask and you shall receive, seek 
              and you shall find."
            </p>
            
            <p>
              This novena reminds us that we are all pilgrims on the road to heaven. It helps us develop 
              love and concern for our brothers and sisters in Christ, teaches us to participate more 
              reverently in the Holy Mass, and deepens our love for Jesus in the Blessed Sacrament.
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
                href={`/novenas/our-lady-of-knock/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Confidence</h3>
              <p className="text-gray-700 text-sm">
                Approach Our Lady of Knock with confidence, remembering Jesus' promise: 
                "Ask and you shall receive, seek and you shall find."
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Remember We Are Pilgrims</h3>
              <p className="text-gray-700 text-sm">
                Remember that we are all pilgrims on the road to heaven. 
                Pray with humility and trust in Our Lady's guidance.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Love for Others</h3>
              <p className="text-gray-700 text-sm">
                Pray with love and concern for your brothers and sisters in Christ, 
                especially those who live with you.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Reverent Mass Participation</h3>
              <p className="text-gray-700 text-sm">
                Ask Our Lady to help you participate more reverently in the Holy Mass 
                and develop greater love for Jesus in the Blessed Sacrament.
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
                Believe in Our Lady of Knock's power and love. Trust in her intercession
                and her role as Queen of Ireland and comforter of her people.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in Our Lady's promise to give hope in times of distress. Maintain confidence
                that she will comfort us in sorrow and guide us on our pilgrimage to heaven.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love Our Lady of Knock with filial devotion and pray with love for others. 
                Include in your intentions the needs of all who are suffering.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to Our Lady of Knock? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to Our Lady of Knock?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Our Lady of Knock</strong> is a special title given to the Blessed Virgin Mary 
              in honor of her apparition at Knock, County Mayo, Ireland, on August 21, 1879. 
              This devotion has been practiced for over a century and is known for its effectiveness.
            </p>
            
            <p className="mb-4">
              <strong>Queen of Ireland</strong> - Under this title, we honor Our Lady as the Queen of Ireland, 
              recognizing her special relationship with the Irish people and her role as their protector 
              and comforter in times of need.
            </p>
            
            <p className="mb-4">
              <strong>Hope in Distress</strong> - Our Lady of Knock is known for giving hope to her people 
              in times of distress and comforting them in sorrow. She has inspired countless pilgrims 
              to pray with confidence to her divine Son.
            </p>
            
            <p className="mb-4">
              <strong>Pilgrimage Destination</strong> - Knock has become a major pilgrimage destination, 
              where people come to pray and seek Our Lady's intercession. The devotion reminds us that 
              we are all pilgrims on the road to heaven.
            </p>
            
            <p>
              <strong>Historical Significance</strong> - The apparition at Knock occurred during a time 
              of great hardship in Ireland, and Our Lady's appearance brought comfort and hope to the 
              people. This devotion continues to inspire faith and devotion throughout the world.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 