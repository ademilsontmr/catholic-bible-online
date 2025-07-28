import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Three Hail Marys Novena - Complete 9-Day Prayer Guide',
  description: 'Complete The Three Hail Marys Novena with daily prayers, reflections, and guidance. Pray for special intentions through the intercession of the Blessed Virgin Mary.',
  keywords: [
    'three hail marys novena',
    'hail mary novena',
    'three hail marys prayer',
    'hail mary novena prayer',
    'three hail marys devotion',
    'hail mary novena intercession',
    'catholic novena',
    'novena to the three hail marys',
    'blessed virgin mary novena',
    'three hail marys devotion'
  ],
  openGraph: {
    title: 'The Three Hail Marys Novena - Complete 9-Day Prayer Guide',
    description: 'Complete The Three Hail Marys Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/three-hail-marys',
  },
  twitter: {
    title: 'The Three Hail Marys Novena - Complete 9-Day Prayer Guide',
    description: 'Complete The Three Hail Marys Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Power of the Virgin',
    description: 'Pray through the immense Power of the Virgin Mary.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Purity of Heart',
    description: 'Pray for purity of heart and strength over enemies.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Wisdom of Mary',
    description: 'Pray through the ineffable Wisdom of the Virgin.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Meekness and Humility',
    description: 'Pray for meekness and humility of heart.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Divine Will',
    description: 'Pray for perfect knowledge of the divine Will.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Christian Virtue',
    description: 'Pray for guidance in the path of Christian Virtue.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Mercy of Mary',
    description: 'Pray through the immense Love and Mercy of Mary.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Perfect Contrition',
    description: 'Pray for true and perfect contrition for sins.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Eyes of Mercy',
    description: 'Pray to the merciful eyes of the Virgin Mary.',
    slug: 'day-9'
  }
]

export default function ThreeHailMarysNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            The Three Hail Marys Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to the Blessed Virgin Mary through the devotion of the Three Hail Marys, 
            seeking her intercession for special intentions and spiritual graces.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🙏</div>
              <div className="text-sm text-gray-600">Hail Marys</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💙</div>
              <div className="text-sm text-gray-600">Devotion</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About The Three Hail Marys Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Three Hail Marys Novena is a beautiful nine-day prayer to the Blessed Virgin Mary, 
              focusing on three essential aspects of her intercession: her Power, her Wisdom, and her Mercy. 
              Each day we honor these attributes through the recitation of the Hail Mary.
            </p>
            
            <p className="mb-4">
              Through this novena, we beseech Our Lady through her immense Power from the Eternal Father, 
              her ineffable Wisdom from the Incarnate Word, and her immense Love from the Holy Spirit. 
              We seek purity of heart, meekness, humility, and perfect contrition for our sins.
            </p>
            
            <p>
              This novena reminds us of the three theological virtues and the three essential prayers 
              that honor the Power, Wisdom, and Mercy of the Blessed Virgin Mary. We ask her to help us 
              overcome our enemies, accomplish God's will, and obtain true contrition for our sins.
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
                href={`/novenas/three-hail-marys/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Pray with Devotion</h3>
              <p className="text-gray-700 text-sm">
                Approach the Blessed Virgin Mary with deep devotion and trust. 
                Honor her Power, Wisdom, and Mercy through your prayers.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Recite the Hail Marys</h3>
              <p className="text-gray-700 text-sm">
                Each day includes the recitation of the Hail Mary to honor 
                the Power, Wisdom, and Mercy of Our Lady.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in Mary</h3>
              <p className="text-gray-700 text-sm">
                Put all your confidence in the Blessed Virgin Mary. Her intercession 
                is powerful and she will not forsake those who turn to her.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Seek Spiritual Graces</h3>
              <p className="text-gray-700 text-sm">
                Ask for purity of heart, meekness, humility, and perfect contrition. 
                Trust that Mary will obtain what is best for your soul.
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
                Believe in the Power of the Blessed Virgin Mary and her ability to intercede 
                for us before her Son. Trust in her maternal care and protection.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in the Wisdom of Our Lady to guide us in the path of Christian virtue 
                and help us accomplish God's will in our lives.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love the Blessed Virgin Mary with filial devotion and pray with love for others. 
                Include in your intentions the needs of all who are suffering.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to The Three Hail Marys? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to The Three Hail Marys?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>The Three Hail Marys Devotion</strong> is a powerful prayer practice that honors three 
              essential attributes of the Blessed Virgin Mary: her Power, her Wisdom, and her Mercy. 
              This devotion has been practiced by many saints and is known for its effectiveness.
            </p>
            
            <p className="mb-4">
              <strong>Power of the Virgin</strong> - We honor the immense Power that the Blessed Virgin Mary 
              received from the Eternal Father. Through this power, she can obtain for us purity of heart 
              and strength to overcome all enemies of our soul.
            </p>
            
            <p className="mb-4">
              <strong>Wisdom of Mary</strong> - We honor the ineffable Wisdom bestowed upon Our Lady by the 
              Incarnate Word of God. Through this wisdom, she helps us attain meekness, humility, and 
              perfect knowledge of the divine Will.
            </p>
            
            <p className="mb-4">
              <strong>Mercy of Mary</strong> - We honor the immense Love given to the Blessed Virgin Mary 
              by the Holy Spirit for us poor sinners. Through this mercy, she obtains for us true and 
              perfect contrition for our sins.
            </p>
            
            <p>
              <strong>Historical Significance</strong> - This devotion has been practiced for centuries 
              and is particularly associated with spiritual protection, purity of heart, and obtaining 
              special graces through the intercession of the Blessed Virgin Mary.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 