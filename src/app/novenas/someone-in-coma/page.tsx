import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Someone in a Coma - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Someone in a Coma with daily prayers, reflections, and guidance. Pray for healing and recovery of those in comas.',
  keywords: [
    'novena for someone in a coma',
    'coma novena',
    'coma prayer',
    'healing novena',
    'coma recovery prayer',
    'medical coma prayer',
    'coma patient prayer',
    'coma healing novena',
    'coma nine day prayer',
    'coma devotion',
    'medical healing prayer',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena for Someone in a Coma - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Someone in a Coma with daily prayers, reflections, and guidance for healing and recovery.',
    url: 'https://catholicbibleonline.com/novenas/someone-in-coma',
  },
  twitter: {
    title: 'Novena for Someone in a Coma - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Someone in a Coma with daily prayers, reflections, and guidance for healing and recovery.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Injury',
    description: 'Pray for those in comas due to injuries and accidents.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Illness',
    description: 'Pray for those in comas due to illness and disease.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Long-term Coma',
    description: 'Pray for those who have been in comas for many years.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Medically Induced',
    description: 'Pray for those in medically induced comas for treatment.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Healthcare Workers',
    description: 'Pray for healthcare workers caring for coma patients.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Human Dignity',
    description: 'Pray for recognition of the human dignity of coma patients.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Family Support',
    description: 'Pray for family members and friends of coma patients.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Faith',
    description: 'Pray for growth in faith during difficult times.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Submission',
    description: 'Pray for submission to God\'s will in all circumstances.',
    slug: 'day-9'
  }
]

export default function SomeoneInComaNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Someone in a Coma
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer for those in comas and their families.
            This traditional novena helps us pray for healing, recovery, and God's mercy for those who are unconscious.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏥</div>
              <div className="text-sm text-gray-600">Healing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🙏</div>
              <div className="text-sm text-gray-600">Prayer</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Novena for Someone in a Coma
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Someone in a Coma is a powerful nine-day prayer that helps us intercede for those who are unconscious 
              and their families. When someone we love is in a coma, it can be one of the most difficult trials we face in life.
            </p>
            
            <p className="mb-4">
              This novena addresses various aspects of coma situations, from medical care to family support, and teaches us to trust 
              in God's healing power and His loving plan for each person, even in the most difficult circumstances.
            </p>
            
            <p>
              Through this novena, we learn to pray with faith and hope for the recovery of those in comas, while also growing 
              in our own spiritual life and trust in God's mercy and love.
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
                href={`/novenas/someone-in-coma/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's healing power and His loving plan.
                Remember that God can do all things, even the impossible.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                Healing often requires persistent prayer and trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions for the person in a coma.
                God wants to help with the particular situation you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His mercy and for the gift of life.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* The Three Healing Virtues */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            The Three Healing Virtues
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-lg font-semibold text-black mb-2">Faith</h3>
              <p className="text-gray-700 text-sm">
                Believe in God's power to heal and restore health.
                Trust that He can bring even the most difficult cases to recovery.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's mercy and His desire for our good.
                Never lose hope, even in the most difficult circumstances.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love the person in a coma as Christ loves them.
                Show love through prayer, support, and care.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Coma Healing Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Coma Healing devotion is a way of praying for those who are unconscious, 
            recognizing their human dignity and trusting in God's healing power.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Coma Healing Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🏥</span>
                <span>Healing</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💙</span>
                <span>Hope</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👨‍👩‍👧‍👦</span>
                <span>Family</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>⚕️</span>
                <span>Medical</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>❤️</span>
                <span>Love</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Trust in God's power to heal even the most difficult cases</li>
              <li>• Recognize the human dignity of those in comas</li>
              <li>• Support families and caregivers of coma patients</li>
              <li>• Grow in faith and hope during difficult times</li>
              <li>• Pray for medical professionals and their work</li>
            </ul>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <Link
            href="/novenas"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to All Novenas
          </Link>
        </div>
      </div>
    </div>
  )
} 