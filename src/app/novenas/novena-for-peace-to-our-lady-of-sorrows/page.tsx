import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Peace to Our Lady of Sorrows - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Peace to Our Lady of Sorrows with daily prayers, reflections, and guidance. Pray for peace, protection, and the end of abortion through the intercession of Our Lady of Sorrows.',
  keywords: [
    'novena for peace to our lady of sorrows',
    'our lady of sorrows peace novena',
    'lady of sorrows novena',
    'peace novena our lady of sorrows',
    'our lady of sorrows prayer',
    'sorrowful mother novena',
    'peace prayer novena',
    'our lady of sorrows intercession',
    'catholic novena',
    'novena to our lady of sorrows for peace'
  ],
  openGraph: {
    title: 'Novena for Peace to Our Lady of Sorrows - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Peace to Our Lady of Sorrows with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/novena-for-peace-to-our-lady-of-sorrows',
  },
  twitter: {
    title: 'Novena for Peace to Our Lady of Sorrows - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Peace to Our Lady of Sorrows with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Mother\'s Tenderness',
    description: 'Pray for Our Lady\'s motherly tenderness and pity.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Sanctuary of Wounded Heart',
    description: 'Pray placing our requests in the sanctuary of her wounded heart.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Sacred Passion and Death',
    description: 'Pray through the merits of Christ\'s Sacred Passion and Death.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Mother of Mercy',
    description: 'Pray to Our Lady as Mother of Mercy in our wants and miseries.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Chalice of Sorrow',
    description: 'Pray for Our Lady\'s compassion through her deep sorrow.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Sword of Sorrow',
    description: 'Pray for Our Lady\'s intercession through her pierced soul.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Protection of Innocents',
    description: 'Pray for protection of innocent travelers and end of abortion.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Comfort and Healing',
    description: 'Pray for comfort of families and healing of the injured.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Repentance and Grace',
    description: 'Pray for repentance of those involved in abortion and protection of heroes.',
    slug: 'day-9'
  }
]

export default function NovenaForPeaceToOurLadyOfSorrowsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Peace to Our Lady of Sorrows
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to Our Lady of Sorrows, seeking her intercession 
            for peace, protection of innocent life, and the end of abortion.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🕊️</div>
              <div className="text-sm text-gray-600">Peace</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💔</div>
              <div className="text-sm text-gray-600">Sorrows</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Novena for Peace to Our Lady of Sorrows
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Peace to Our Lady of Sorrows is a profound nine-day prayer to the Sorrowful Mother, 
              who stood beneath the cross witnessing the agony of her dying Son. This novena helps us seek her 
              powerful intercession for peace, protection, and the end of abortion.
            </p>
            
            <p className="mb-4">
              Through this novena, we venerate Our Lady's sorrows and place our requests with dutiful confidence 
              in the sanctuary of her wounded heart. We ask her to present our petitions to Jesus Christ through 
              the merits of His Sacred Passion and Death, together with her sufferings at the foot of the cross.
            </p>
            
            <p>
              This novena addresses specific intentions for peace, protection of innocent life, comfort for families, 
              and repentance for those involved in abortion. Our Lady of Sorrows, as Queen of Martyrs and Mother of Mercy, 
              understands our sufferings and will intercede for us with her Son.
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
                href={`/novenas/novena-for-peace-to-our-lady-of-sorrows/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Devotion</h3>
              <p className="text-gray-700 text-sm">
                Approach Our Lady of Sorrows with deep devotion and reverence. 
                Trust in her maternal intercession and her understanding of human suffering.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Consistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with consistency and faith. Our Lady of Sorrows will not fail 
                to help those who turn to her with trust and devotion.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Focus on Intentions</h3>
              <p className="text-gray-700 text-sm">
                Keep in mind the specific intentions: peace, protection of innocent life, and the end of abortion. 
                Trust that Our Lady will present these to her Son.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Our Lady of Sorrows for her love and for the graces you receive. 
                Gratitude opens our hearts to receive more spiritual blessings.
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
                Believe in Our Lady of Sorrows' power and love. Trust in her intercession 
                and her role as Queen of Martyrs and Mother of Mercy.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in Our Lady's promise to help all who turn to her. Maintain confidence 
                that she will present our intentions to her Son, Jesus Christ.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for Our Lady of Sorrows and for others. Include in your intentions the needs of 
                all who suffer and the protection of innocent life.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to Our Lady of Sorrows? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to Our Lady of Sorrows?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Our Lady of Sorrows</strong> is a title given to the Blessed Virgin Mary in honor of her 
              seven sorrows, particularly her standing at the foot of the cross during the crucifixion of Jesus Christ. 
              She is venerated as the "Queen of Martyrs" and is known for her deep understanding of human suffering.
            </p>
            
            <p className="mb-4">
              <strong>Queen of Martyrs</strong> - Our Lady of Sorrows is honored as the Queen of Martyrs because 
              she suffered more than any other martyr, witnessing the agony and death of her divine Son. Her soul 
              was pierced by a sword of sorrow, as prophesied by Simeon.
            </p>
            
            <p className="mb-4">
              <strong>Mother of Mercy</strong> - Our Lady of Sorrows is known as the Mother of Mercy because she 
              has drunk so deeply of the chalice of her Son's suffering that she can with compassion receive our sorrows 
              and intercede for us with understanding and love.
            </p>
            
            <p className="mb-4">
              <strong>Sanctuary of Wounded Heart</strong> - Her wounded heart is a sanctuary where we can place our 
              requests with confidence. She understands our sufferings and will present our petitions to Jesus through 
              the merits of His Passion and Death.
            </p>
            
            <p>
              <strong>Feast Day</strong> - The Feast of Our Lady of Sorrows is celebrated on September 15th, and this 
              novena is especially popular among those seeking her intercession for peace, protection, and the end of 
              abortion, as she understands the pain of losing innocent life.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 