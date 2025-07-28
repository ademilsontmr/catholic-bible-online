import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to St. Peregrine - Complete 9-Day Prayer Guide',
  description: 'Complete Novena to St. Peregrine with daily prayers, reflections, and guidance. Pray for St. Peregrine\'s intercession and miraculous healing.',
  keywords: [
    'novena to st peregrine',
    'st peregrine novena',
    'peregrine novena',
    'cancer saint novena',
    'st peregrine prayer',
    'healing novena',
    'miracle worker novena',
    'cancer patient prayer',
    'st peregrine intercession',
    'divine healing prayer',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena to St. Peregrine - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to St. Peregrine with daily prayers, reflections, and guidance for spiritual growth and healing.',
    url: 'https://catholicbibleonline.com/novenas/st-peregrine',
  },
  twitter: {
    title: 'Novena to St. Peregrine - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to St. Peregrine with daily prayers, reflections, and guidance for spiritual growth and healing.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Divine Call and Obedience',
    description: 'Pray for the grace to answer God\'s call with a ready spirit like St. Peregrine.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Sacrifice and Dedication',
    description: 'Pray for the grace to sacrifice worldly comforts and dedicate yourself to God.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Salvation of Souls',
    description: 'Pray for zeal in working for the salvation of souls like St. Peregrine.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Union with Christ Crucified',
    description: 'Pray for the grace to unite your sufferings with Christ crucified.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Patience in Suffering',
    description: 'Pray for patience in enduring sufferings with trust in God\'s love.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Miraculous Healing',
    description: 'Pray for trust in God\'s power to work miracles in your life.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Divine Will and Obedience',
    description: 'Pray for the grace to fulfill God\'s will in all life events.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Zeal for Salvation',
    description: 'Pray for a consuming zeal for the salvation of all men.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Perfect Resignation',
    description: 'Pray for perfect resignation to God\'s will and eternal glory.',
    slug: 'day-9'
  }
]

export default function StPeregrineNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to St. Peregrine
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek the intercession of St. Peregrine, the patron saint of cancer patients.
            This traditional novena helps us grow closer to God and experience miraculous healing through St. Peregrine's powerful intercession.
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
            About the Novena to St. Peregrine
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena to St. Peregrine is a powerful nine-day prayer that helps us grow closer to God and experience 
              miraculous healing through St. Peregrine's powerful intercession. St. Peregrine, known as "The Mighty" and 
              "The Wonder-Worker," is the patron saint of cancer patients.
            </p>
            
            <p className="mb-4">
              St. Peregrine himself suffered from cancer for many years, bearing this disease in his own flesh. 
              When human power could do no more, he had recourse to the source of all grace and was favored with 
              a vision of Jesus coming down from His Cross to heal his affliction.
            </p>
            
            <p>
              This novena helps us to trust in St. Peregrine's powerful intercession and to turn to him with confidence 
              in every need, especially for healing from cancer, chronic illnesses, or any serious health conditions.
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
                href={`/novenas/st-peregrine/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in St. Peregrine</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. Peregrine's powerful intercession and his ability to obtain miracles from God.
                Turn to him with confidence in every need, especially for healing.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. St. Peregrine, as a miracle worker, 
                will not fail to help those who turn to him with trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. Peregrine. He wants to help you 
                with the particular difficulties you face, especially health concerns.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. Peregrine for his intercession and for the graces you receive. 
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
                Believe in St. Peregrine's powerful intercession and in God's ability to work miracles 
                through his saints. Trust that God hears and answers our prayers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's mercy and in St. Peregrine's ability to obtain healing and grace. 
                Maintain confidence that God will provide what is best for our salvation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for God and for others. Include in your intentions the needs of 
                all those suffering from cancer and other serious illnesses.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to St. Peregrine? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to St. Peregrine?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>St. Peregrine</strong> was a Servite priest who lived in the 13th century. He is known as 
              the patron saint of cancer patients because he himself suffered from cancer and was miraculously healed.
            </p>
            
            <p className="mb-4">
              <strong>Miracle Worker</strong> - St. Peregrine has been called "The Mighty" and "The Wonder-Worker" 
              because of the numerous miracles he has obtained from God for those who have had recourse to him.
            </p>
            
            <p className="mb-4">
              <strong>Divine Healing</strong> - After suffering from cancer for many years, St. Peregrine was 
              favored with a vision of Jesus coming down from His Cross to heal his affliction.
            </p>
            
            <p className="mb-4">
              <strong>Intercession</strong> - St. Peregrine continues to intercede for those suffering from cancer, 
              chronic illnesses, and other serious health conditions.
            </p>
            
            <p>
              <strong>Feast Day</strong> - St. Peregrine's feast day is celebrated on May 1st, and he is 
              particularly venerated by those seeking healing and miracles.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 