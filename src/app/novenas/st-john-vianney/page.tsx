import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena in Honor of Saint John Marie Vianney - Complete 9-Day Prayer Guide',
  description: 'Complete Novena in Honor of Saint John Marie Vianney with daily prayers, reflections, and guidance. Pray for St. John Vianney\'s intercession for priests and spiritual growth.',
  keywords: [
    'novena in honor of saint john marie vianney',
    'st john vianney novena',
    'john vianney novena',
    'st john vianney prayer',
    'curé of ars novena',
    'st john vianney intercession',
    'priest novena',
    'st john marie baptist vianney',
    'catholic novena',
    'saint john vianney novena'
  ],
  openGraph: {
    title: 'Novena in Honor of Saint John Marie Vianney - Complete 9-Day Prayer Guide',
    description: 'Complete Novena in Honor of Saint John Marie Vianney with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/st-john-vianney',
  },
  twitter: {
    title: 'Novena in Honor of Saint John Marie Vianney - Complete 9-Day Prayer Guide',
    description: 'Complete Novena in Honor of Saint John Marie Vianney with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Deep Faith',
    description: 'Pray for the depth of faith that St. John Vianney possessed.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Confidence in Prayer',
    description: 'Pray for confidence in prayer and trust in God\'s Providence.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Charity Towards Neighbor',
    description: 'Pray for greater love of God and neighbor as St. John Vianney showed.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Horror of Sin',
    description: 'Pray for horror of sin and the grace to avoid occasions of sin.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Frequent Confession',
    description: 'Pray for the grace to develop the habit of frequent confession.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Eucharistic Devotion',
    description: 'Pray for fervor in receiving Holy Communion and love for the Eucharist.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Victory Over Temptation',
    description: 'Pray for strength to overcome the devil\'s attacks and temptations.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Purity of Heart',
    description: 'Pray for the grace to guard the purity of heart as God asks.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Eternal Salvation',
    description: 'Pray for the grace to work for the salvation of your soul.',
    slug: 'day-9'
  }
]

export default function StJohnVianneyNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena in Honor of Saint John Marie Vianney
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek the intercession of St. John Marie Vianney, 
            the Curé of Ars and patron saint of priests.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🙏</div>
              <div className="text-sm text-gray-600">Saints</div>
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
            About the Novena in Honor of Saint John Marie Vianney
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena in Honor of Saint John Marie Vianney is a powerful nine-day prayer that helps us grow closer to God 
              through the intercession of this great saint. St. John Marie Vianney, known as the Curé of Ars, was a French 
              priest who became famous for his holiness, his work as a confessor, and his devotion to the Blessed Virgin Mary.
            </p>
            
            <p className="mb-4">
              St. John Vianney's life was marked by his deep faith, his love for God and neighbor, his horror of sin, 
              his devotion to the Eucharist, and his tireless work for the salvation of souls. He spent up to 16 hours 
              a day hearing confessions and became known as the patron saint of priests.
            </p>
            
            <p>
              This novena helps us to trust in St. John Vianney's powerful intercession and to turn to him with 
              confidence in every need, especially for spiritual growth and the grace to serve God better.
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
                href={`/novenas/st-john-vianney/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in St. John Vianney</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. John Vianney's powerful intercession and his ability to help you.
                Turn to him with confidence in every need, especially for spiritual growth and priestly vocations.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. St. John Vianney will not fail to help 
                those who turn to him with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. John Vianney. He wants to help you 
                with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. John Vianney for his intercession and for the graces you receive. 
                Gratitude opens our hearts to receive more blessings and miracles.
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
                Believe in St. John Vianney's powerful intercession and in God's ability to work through His saints. 
                Trust that God hears and answers our prayers through His holy servant.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's mercy and in St. John Vianney's ability to obtain miracles for us. 
                Maintain confidence that God will provide what is best for our salvation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for God and for others. Include in your intentions the needs of 
                all those who are suffering or in need of St. John Vianney's help.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to St. John Vianney? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to Saint John Marie Vianney?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Saint John Marie Vianney</strong> (1786-1859) was a French priest known as the Curé of Ars. 
              He is the patron saint of priests and is famous for his holiness, his work as a confessor, 
              and his devotion to the Blessed Virgin Mary.
            </p>
            
            <p className="mb-4">
              <strong>Patron of Priests</strong> - St. John Vianney is the patron saint of all priests. 
              His life of prayer, penance, and tireless work for souls serves as an example for all priests 
              and those discerning the priesthood.
            </p>
            
            <p className="mb-4">
              <strong>Confessor Extraordinaire</strong> - St. John Vianney spent up to 16 hours a day hearing confessions. 
              People came from all over France to confess to him, and he had the gift of reading souls.
            </p>
            
            <p className="mb-4">
              <strong>Devotion to the Eucharist</strong> - St. John Vianney had a deep love for the Eucharist 
              and spent many hours in prayer before the Blessed Sacrament. He often said that the Eucharist 
              was his only consolation in this world.
            </p>
            
            <p>
              <strong>Feast Day</strong> - St. John Marie Vianney is celebrated on August 4th, and his novena is 
              especially popular among priests, seminarians, and those praying for priestly vocations.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 