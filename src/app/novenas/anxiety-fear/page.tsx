import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Healing from Anxiety and Fear - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Healing from Anxiety and Fear with daily prayers, reflections, and guidance. Pray for God\'s peace and freedom from anxiety and fear.',
  keywords: [
    'novena for healing from anxiety and fear',
    'anxiety and fear novena',
    'anxiety healing prayer',
    'fear healing novena',
    'peace prayer novena',
    'healing anxiety prayer',
    'overcoming fear novena',
    'anxiety relief prayer',
    'fear relief novena',
    'peace of mind novena',
    'catholic anxiety healing'
  ],
  openGraph: {
    title: 'Novena for Healing from Anxiety and Fear - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Healing from Anxiety and Fear with daily prayers, reflections, and guidance for peace and freedom.',
    url: 'https://catholicbibleonline.com/novenas/anxiety-fear',
  },
  twitter: {
    title: 'Novena for Healing from Anxiety and Fear - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Healing from Anxiety and Fear with daily prayers, reflections, and guidance for peace and freedom.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Trusting in God\'s Perfect Peace',
    description: 'Pray for the grace to trust in God\'s perfect peace and to surrender all anxiety to Him.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Finding Refuge in God\'s Love',
    description: 'Pray to find refuge and safety in God\'s infinite love and protection.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Breaking Free from Fear\'s Grip',
    description: 'Pray for freedom from fear\'s grip and the courage to face life with confidence.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Embracing God\'s Calming Presence',
    description: 'Pray to embrace God\'s calming presence and to rest in His gentle care.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Renewing Our Faith in God\'s Plan',
    description: 'Pray for renewed faith in God\'s perfect plan and His timing for our lives.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Letting Go of Worry and Control',
    description: 'Pray for the grace to let go of worry and the need to control everything.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Finding Hope in God\'s Promises',
    description: 'Pray to find hope and comfort in God\'s promises and His faithfulness.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Walking in God\'s Light and Truth',
    description: 'Pray for the grace to walk in God\'s light and to trust in His truth.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Living in Complete Peace and Freedom',
    description: 'Pray for the grace to live in complete peace and freedom from anxiety and fear.',
    slug: 'day-9'
  }
]

export default function NovenaForAnxietyFearPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Healing from Anxiety and Fear
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A comforting nine-day prayer to seek God's healing grace for anxiety, fear, and inner turmoil.
            This traditional novena helps us find peace, trust in God's care, and experience freedom from worry.
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
              <div className="text-2xl font-bold text-gray-800">3</div>
              <div className="text-sm text-gray-600">Virtues</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Novena for Healing from Anxiety and Fear
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Healing from Anxiety and Fear is a gentle and comforting spiritual practice designed to help you find 
              peace and freedom from the grip of anxiety and fear. In our modern world, many people struggle with overwhelming 
              anxiety, constant worry, paralyzing fear, and inner turmoil that can affect their mental, emotional, and spiritual well-being.
            </p>
            
            <p className="mb-4">
              This novena invites you to bring all your fears and anxieties to God, who is the Prince of Peace. Through nine days of 
              focused prayer, you will learn to trust in God's care, find refuge in His love, break free from fear's grip, and embrace 
              the peace that only He can give.
            </p>
            
            <p>
              Whether you're struggling with generalized anxiety, specific fears, panic attacks, or constant worry, this novena will 
              guide you on a journey toward inner peace and freedom from the chains of anxiety and fear.
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
                href={`/novenas/anxiety-fear/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-teal-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's power to bring peace and freedom from anxiety. Believe that He cares for you deeply.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Honest</h3>
              <p className="text-gray-700 text-sm">
                Be completely honest with God about your fears and anxieties. Share your deepest worries with Him in prayer.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Practice Surrender</h3>
              <p className="text-gray-700 text-sm">
                Practice surrendering your worries to God. Let go of the need to control everything and trust in His care.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Healing from anxiety takes time. Be patient with yourself and trust in God's timing for your peace and freedom.
              </p>
            </div>
          </div>
        </section>

        {/* The Three Theological Virtues */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            The Three Theological Virtues
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Faith</h3>
              <p className="text-gray-700 text-sm">
                Believe in God's power to bring peace and freedom from anxiety. Trust that He is working for your good and your peace.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Maintain hope that peace and freedom from anxiety are possible through God's grace. Look forward to the peace that awaits you.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and trust in His love for you. Allow God's love to cast out all fear and bring you peace.
              </p>
            </div>
          </div>
        </section>

        {/* What is Anxiety and Fear? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">What is Anxiety and Fear?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Anxiety and fear are natural human responses to perceived threats or uncertainty, but when they become overwhelming 
              or persistent, they can significantly impact our mental, emotional, and spiritual well-being. Anxiety can manifest 
              as constant worry, racing thoughts, physical symptoms, and a sense of impending doom.
            </p>
            <p className="mb-4">
              The Catholic understanding of anxiety and fear recognizes that while these emotions are part of our human experience, 
              God wants us to find peace and freedom from their grip. Through prayer, trust in God's providence, and His grace, 
              we can overcome anxiety and fear and experience the peace that surpasses all understanding.
            </p>
            <p>
              This novena helps you to bring your anxiety and fears to God, who is the Prince of Peace. He understands your struggles 
              and wants to help you find freedom from worry and fear, replacing them with His perfect peace and trust in His care.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-teal-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Journey to Peace</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you're ready to begin your journey toward peace and freedom from anxiety and fear, start with Day 1 of this novena. 
            Remember that God loves you unconditionally and wants to give you His peace. Trust in His power 
            and allow His grace to work in your heart.
          </p>
          <div className="text-center">
            <Link
              href="/novenas/anxiety-fear/day-1"
              className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
            >
              Start Day 1: Trusting in God's Perfect Peace →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 