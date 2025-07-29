import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Saints Joachim and Anne Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Saints Joachim and Anne Novena with daily prayers, reflections, and guidance. Pray for holiness in marriage, family life, and trust in God\'s plan.',
  keywords: [
    'saints joachim and anne novena',
    'st joachim st anne novena',
    'joachim anne novena',
    'mary parents novena',
    'holy family novena',
    'marriage holiness novena',
    'infertility prayer novena',
    'family life novena',
    'trust god novena',
    'catholic saints novena'
  ],
  openGraph: {
    title: 'Saints Joachim and Anne Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Saints Joachim and Anne Novena with daily prayers, reflections, and guidance for holiness in marriage and family life.',
    url: 'https://catholicbibleonline.com/novenas/saints-joachim-anne',
  },
  twitter: {
    title: 'Saints Joachim and Anne Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Saints Joachim and Anne Novena with daily prayers, reflections, and guidance for holiness in marriage and family life.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Holiness in Marriage',
    description: 'Pray for holiness in married life and faithful service to God.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Suffering from Infertility',
    description: 'Pray for strength during suffering and continued faithfulness.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Virtue of Hope',
    description: 'Pray for growth in hope and perseverance in difficult times.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Devotion as Parents',
    description: 'Pray for devotion in carrying out parental duties faithfully.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Deep Trust in God',
    description: 'Pray for deep trust in God even when His plan is unclear.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Holy Family Life',
    description: 'Pray for a family life centered around God and holiness.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Gratitude to God',
    description: 'Pray for gratitude for God\'s blessings and answered prayers.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Cultivating Holy Family',
    description: 'Pray for cultivating a holy family life and appreciation.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Humility and Virtue',
    description: 'Pray for growth in virtue and humble service to God.',
    slug: 'day-9'
  }
]

export default function SaintsJoachimAnneNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Saints Joachim and Anne Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to honor Saints Joachim and Anne, the parents of the Blessed Virgin Mary.
            This traditional novena helps you grow in holiness in marriage and family life.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👨‍👩‍👧</div>
              <div className="text-sm text-gray-600">Family</div>
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
            About Saints Joachim and Anne Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Saints Joachim and Anne Novena is a profound spiritual practice designed to honor the parents of the Blessed Virgin Mary, 
              who serve as models of holiness in marriage and family life. This novena recognizes that Saints Joachim and Anne were chosen 
              by God for the special mission of raising the Mother of God.
            </p>
            
            <p className="mb-4">
              Through nine days of focused prayer, you will learn to turn to Saints Joachim and Anne for their powerful intercession in 
              helping you grow in holiness within your marriage and family. This novena helps you to understand that even in suffering 
              and difficulties, God has a perfect plan for your life and family.
            </p>
            
            <p>
              Whether you are seeking holiness in marriage, dealing with infertility, raising children, or simply want to honor the 
              parents of Mary, this novena will help you to find the grace and guidance you need through the powerful intercession 
              of Saints Joachim and Anne.
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
                href={`/novenas/saints-joachim-anne/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-emerald-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Faithful</h3>
              <p className="text-gray-700 text-sm">
                Remain faithful to God even in times of suffering and difficulty.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Maintain hope in God\'s plan even when it seems impossible.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust in God\'s timing and His perfect plan for your life.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Show gratitude for God\'s blessings and answered prayers.
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
                Believe in God\'s plan for your marriage and family life.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God\'s promises and His perfect timing.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love God and your family with selfless devotion.
              </p>
            </div>
          </div>
        </section>

        {/* What are Saints Joachim and Anne? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Who are Saints Joachim and Anne?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Saints Joachim and Anne are the parents of the Blessed Virgin Mary, chosen by God for the special mission of raising 
              the Mother of God. Though we know few details about their lives, we know they were holy and faithful servants of God 
              who endured many years of infertility before being blessed with Mary.
            </p>
            <p className="mb-4">
              Their story teaches us about faithfulness in marriage, perseverance in prayer, trust in God\'s plan, and the importance 
              of raising children in holiness. Despite their advanced age and years of childlessness, they never lost hope and continued 
              to serve God faithfully, eventually being rewarded with the greatest blessing - becoming the parents of the Immaculate Virgin.
            </p>
            <p>
              Through this novena, we honor Saints Joachim and Anne and seek their powerful intercession to help us grow in holiness 
              within our marriages and families, to trust in God\'s plan even in difficult times, and to raise our children in the 
              ways of the Lord.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-emerald-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Journey to Holiness</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you\'re ready to honor Saints Joachim and Anne and grow in holiness through their intercession, 
            start with Day 1 of this novena. Remember that Saints Joachim and Anne were chosen by God for a special mission, 
            and they can help you fulfill your own mission in marriage and family life.
          </p>
          <div className="text-center">
            <Link
              href="/novenas/saints-joachim-anne/day-1"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
            >
              Start Day 1: Holiness in Marriage →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 