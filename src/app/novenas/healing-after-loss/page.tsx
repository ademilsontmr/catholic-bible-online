import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Healing After Loss - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Healing After Loss with daily prayers, reflections, and guidance. Pray for God\'s healing grace after experiencing loss and grief.',
  keywords: [
    'novena for healing after loss',
    'healing after loss novena',
    'grief healing prayer',
    'loss healing novena',
    'bereavement prayer novena',
    'healing grief prayer',
    'overcoming loss novena',
    'grief recovery prayer',
    'loss recovery novena',
    'comfort after loss novena',
    'catholic grief healing'
  ],
  openGraph: {
    title: 'Novena for Healing After Loss - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Healing After Loss with daily prayers, reflections, and guidance for grief recovery.',
    url: 'https://catholicbibleonline.com/novenas/healing-after-loss',
  },
  twitter: {
    title: 'Novena for Healing After Loss - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Healing After Loss with daily prayers, reflections, and guidance for grief recovery.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Acknowledging Our Grief and Pain',
    description: 'Pray for the grace to acknowledge and accept our grief and pain, bringing it honestly to God.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Finding Comfort in God\'s Love',
    description: 'Pray to find comfort and solace in God\'s infinite love and understanding.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Trusting in God\'s Plan',
    description: 'Pray for the grace to trust in God\'s plan, even when we cannot understand our loss.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Embracing God\'s Healing Grace',
    description: 'Pray to embrace God\'s healing grace and allow Him to mend our broken hearts.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Finding Hope in God\'s Promises',
    description: 'Pray to find hope and comfort in God\'s promises of eternal life and reunion.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Letting Go and Moving Forward',
    description: 'Pray for the grace to let go of what we cannot change and move forward with faith.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Finding Purpose in Our Pain',
    description: 'Pray to find meaning and purpose in our suffering and loss.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Opening Our Hearts to New Beginnings',
    description: 'Pray for the grace to open our hearts to new beginnings and possibilities.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Living in Peace and Acceptance',
    description: 'Pray for the grace to live in peace and acceptance, trusting in God\'s love.',
    slug: 'day-9'
  }
]

export default function NovenaForHealingAfterLossPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Healing After Loss
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A compassionate nine-day prayer to seek God's healing grace after experiencing loss, grief, and bereavement.
            This traditional novena helps us find comfort, hope, and peace in the midst of our pain.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💙</div>
              <div className="text-sm text-gray-600">Healing</div>
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
            About the Novena for Healing After Loss
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Healing After Loss is a gentle and compassionate spiritual practice designed to help you find 
              healing and peace after experiencing loss, grief, and bereavement. Loss comes in many forms - the death of a 
              loved one, the end of a relationship, the loss of a job, health, or dreams - and each type of loss can leave 
              us feeling broken, alone, and overwhelmed by grief.
            </p>
            
            <p className="mb-4">
              This novena invites you to bring all your pain, grief, and questions to God, who understands suffering intimately 
              through His Son, Jesus Christ. Through nine days of focused prayer, you will learn to acknowledge your grief, 
              find comfort in God's love, trust in His plan, embrace His healing grace, and discover hope for the future.
            </p>
            
            <p>
              Whether you're grieving the loss of a loved one, dealing with the end of a relationship, or struggling with 
              any other type of loss, this novena will guide you on a journey toward healing, acceptance, and renewed hope.
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
                href={`/novenas/healing-after-loss/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Be Honest</h3>
              <p className="text-gray-700 text-sm">
                Be completely honest with God about your grief, pain, and questions. He understands and wants to hear from your heart.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Healing from loss takes time. Be patient with yourself and trust in God's timing for your healing journey.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Open</h3>
              <p className="text-gray-700 text-sm">
                Be open to God's healing grace and the ways He wants to comfort and restore you. Allow Him to work in your heart.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Maintain hope that healing is possible through God's grace. Look forward to the peace and comfort that await you.
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
                Believe in God's power to heal your broken heart and bring comfort to your grief. Trust that He is working for your good.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Maintain hope that healing and peace are possible through God's grace. Look forward to the comfort and restoration that await you.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and trust in His love for you. Allow God's love to heal your wounds and bring you peace.
              </p>
            </div>
          </div>
        </section>

        {/* What is Loss and Grief? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">What is Loss and Grief?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Loss and grief are natural human experiences that occur when we experience the death of a loved one, the end of 
              a relationship, the loss of a job, health, or dreams, or any other significant change that takes away something 
              or someone important to us. Grief is the emotional, physical, and spiritual response to loss.
            </p>
            <p className="mb-4">
              The Catholic understanding of loss and grief recognizes that these experiences are part of our human journey, 
              but God wants to walk with us through our pain and bring us healing and comfort. Through prayer, the sacraments, 
              and God's grace, we can find meaning in our suffering and hope for the future.
            </p>
            <p>
              This novena helps you to bring your grief and loss to God, who understands suffering intimately. He knows your 
              pain and wants to comfort you, heal your broken heart, and help you find peace and hope in the midst of your loss.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Healing Journey</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you're ready to begin your journey toward healing after loss, start with Day 1 of this novena. 
            Remember that God loves you unconditionally and wants to comfort you in your grief. Trust in His power 
            and allow His grace to work in your heart.
          </p>
          <div className="text-center">
            <Link
              href="/novenas/healing-after-loss/day-1"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Start Day 1: Acknowledging Our Grief and Pain →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 