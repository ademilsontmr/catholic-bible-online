import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for a Difficult Pregnancy - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for a Difficult Pregnancy with daily prayers, reflections, and guidance. Pray for strength, hope, and support during challenging pregnancies.',
  keywords: [
    'novena for a difficult pregnancy',
    'difficult pregnancy novena',
    'pregnancy prayer novena',
    'pregnancy support novena',
    'pregnancy strength novena',
    'pregnancy hope novena',
    'pregnancy comfort novena',
    'pregnancy blessing novena',
    'pregnancy protection novena',
    'pregnancy health novena',
    'catholic pregnancy prayer'
  ],
  openGraph: {
    title: 'Novena for a Difficult Pregnancy - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for a Difficult Pregnancy with daily prayers, reflections, and guidance for strength and hope during challenging pregnancies.',
    url: 'https://catholicbibleonline.com/novenas/difficult-pregnancy',
  },
  twitter: {
    title: 'Novena for a Difficult Pregnancy - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for a Difficult Pregnancy with daily prayers, reflections, and guidance for strength and hope during challenging pregnancies.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Assistance for Physical Pain',
    description: 'Pray for all pregnant women who are suffering from physical pain during their pregnancy.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Assistance for Mental Health',
    description: 'Pray for all pregnant women who are suffering from mental health ailments during pregnancy.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Assistance for Abandonment',
    description: 'Pray for all pregnant women who are suffering from abandonment and lack of support.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Assistance for Poverty',
    description: 'Pray for all pregnant women who are suffering from poverty and material needs.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Assistance for Advanced Age',
    description: 'Pray for all pregnant women who are having difficulties because of advanced age.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Protection from Abortion',
    description: 'Pray for all pregnant women who are tempted to choose abortion.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Blessing Medical Professionals',
    description: 'Pray for all medical professionals who treat women in difficult pregnancies.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Supportive Husbands',
    description: 'Pray for all husbands to be the support their wives need during difficult pregnancies.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Complete Assistance and Help',
    description: 'Pray for women in difficult pregnancies to receive every type of help they might need.',
    slug: 'day-9'
  }
]

export default function NovenaForDifficultPregnancyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for a Difficult Pregnancy
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek God's strength, hope, and support during challenging pregnancies.
            This traditional novena helps women find comfort, courage, and divine assistance throughout their pregnancy journey.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🤱</div>
              <div className="text-sm text-gray-600">Pregnancy</div>
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
            About the Novena for a Difficult Pregnancy
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for a Difficult Pregnancy is a compassionate spiritual practice designed to help women 
              who are experiencing challenges during their pregnancy journey. This novena recognizes that pregnancy, 
              while a beautiful gift from God, can sometimes bring physical pain, emotional stress, mental health 
              challenges, and other difficulties that require divine assistance and support.
            </p>
            
            <p className="mb-4">
              Through nine days of focused prayer, you will learn to turn to God for strength, comfort, and 
              hope during your pregnancy challenges. This novena helps you to understand that God is with you 
              in every moment of your pregnancy journey, and that He can provide all the assistance you need 
              to carry your child safely and to grow in holiness throughout this special time.
            </p>
            
            <p>
              Whether you are experiencing physical discomfort, emotional stress, financial difficulties, 
              or any other pregnancy-related challenges, this novena will help you to find peace, strength, 
              and hope through God's love and grace.
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
                href={`/novenas/difficult-pregnancy/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's power to provide strength and assistance during your pregnancy challenges.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Be patient with yourself and trust in God's timing for your pregnancy journey.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Express gratitude for the gift of pregnancy and for God's presence in your life.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's love and care for you and your unborn child.
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
                Believe in God's power to provide strength and assistance during your pregnancy challenges.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promise to be with you and to provide all you need during your pregnancy.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and trust in His love for you and your unborn child.
              </p>
            </div>
          </div>
        </section>

        {/* What is a Difficult Pregnancy? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">What is a Difficult Pregnancy?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              A difficult pregnancy can involve various challenges that make the pregnancy journey more 
              challenging than usual. These challenges can include physical pain and discomfort, mental 
              health issues such as anxiety and depression, emotional stress, financial difficulties, 
              lack of support from family or partners, advanced maternal age complications, and other 
              pregnancy-related health concerns.
            </p>
            <p className="mb-4">
              The Catholic understanding of difficult pregnancies recognizes that while pregnancy is a 
              beautiful gift from God, it can also bring significant challenges that require divine 
              assistance, medical support, and community care. God wants to provide strength, comfort, 
              and hope to all women experiencing pregnancy difficulties.
            </p>
            <p>
              This novena helps you to bring all your pregnancy challenges to God, who understands your 
              struggles intimately and wants to provide you with the strength, support, and peace you need 
              to carry your child safely and to grow in holiness throughout your pregnancy journey.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-pink-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Journey to Pregnancy Strength</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you're ready to begin your journey toward strength and hope during your pregnancy, start with Day 1 
            of this novena. Remember that God loves you and your unborn child unconditionally and wants to provide 
            you with all the strength and support you need. Trust in His love and allow His grace to work in your life.
          </p>
          <div className="text-center">
            <Link
              href="/novenas/difficult-pregnancy/day-1"
              className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
            >
              Start Day 1: Assistance for Physical Pain →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 