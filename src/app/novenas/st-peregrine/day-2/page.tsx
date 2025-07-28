import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to St. Peregrine - Day 2: Sacrifice and Dedication',
  description: "Pray the Novena to St. Peregrine - Day 2 focusing on Sacrifice and Dedication. Join in praying the traditional novena to seek St. Peregrine's intercession.",
  keywords: [
    'novena to st peregrine day 2',
    'st peregrine novena day 2',
    'peregrine novena day 2',
    'st peregrine prayer day 2',
    'day 2 st peregrine novena',
    'sacrifice and dedication prayer',
    'st peregrine novena sacrifice and dedication',
    'peregrine novena sacrifice and dedication'
  ],
  openGraph: {
    title: 'Novena to St. Peregrine - Day 2: Sacrifice and Dedication',
    description: 'Pray the Novena to St. Peregrine - Day 2 focusing on Sacrifice and Dedication. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-peregrine/day-2',
  },
  twitter: {
    title: 'Novena to St. Peregrine - Day 2: Sacrifice and Dedication',
    description: 'Pray the Novena to St. Peregrine - Day 2 focusing on Sacrifice and Dedication. Join in praying the traditional novena.',
  }
}

export default function StPeregrineNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to St. Peregrine – Day 2: Sacrifice and Dedication
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena to St. Peregrine to seek his intercession and powerful healing.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/st-peregrine" className="hover:text-gray-700">Novena to St. Peregrine</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Sacrifice and Dedication</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of our novena, we focus on St. Peregrine's sacrifice and dedication. He forsook all the comforts of a life of ease and all the empty honors of the world to dedicate himself to God in the Order of His holy Mother.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Glorious wonder-worker, St. Peregrine,</strong> you answered the divine call with a ready spirit, 
                and forsook all the comforts of a life of ease and all the empty honors of the world to dedicate 
                yourself to God in the Order of His holy Mother.
              </p>

              <p className="mb-6">
                <strong>You labored manfully for the salvation of souls.</strong> In union with Jesus crucified, 
                you endured painful sufferings with such patience as to deserve to be healed miraculously of an 
                incurable cancer in your leg by a touch of His divine hand.
              </p>

              <p className="mb-6">
                <strong>Obtain for me the grace to answer every call of God</strong> and to fulfill His will in all 
                the events of life. Enkindle in my heart a consuming zeal for the salvation of all men.
              </p>

              <p className="mb-6">
                <strong>Deliver me from the infirmities that afflict my body</strong> (especially... )
                Obtain for me also a perfect resignation to the sufferings it may please God to send me, 
                so that, imitating our crucified Savior and His sorrowful Mother, I may merit eternal glory in heaven.
              </p>

              <p className="mb-6">
                <strong>St. Peregrine, pray for me and for all who invoke your aid.</strong>
              </p>

              <p className="mb-6">
                <strong>Prayer to Saint Peregrine</strong>
              </p>

              <p className="mb-6">
                <strong>O great St. Peregrine,</strong> you have been called 'The Mighty,' 'The Wonder-Worker,' 
                because of the numerous miracles which you have obtained from God for those who have had recourse to you.
              </p>

              <p className="mb-6">
                <strong>For so many years you bore in your own flesh</strong> this cancerous disease that destroys 
                the very fibre of our being, and who had recourse to the source of all grace when the power of man 
                could do no more. You were favoured with the vision of Jesus coming down from His Cross to heal your affliction.
              </p>

              <p className="mb-6">
                <strong>Ask of God and Our Lady,</strong> the cure of the sick whom we entrust to you.
                (Pause here and silently recall the names of the sick for whom you are praying)
              </p>

              <p className="mb-6">
                <strong>Aided in this way by your powerful intercession,</strong> we shall sing to God, now and for all eternity, 
                a song of gratitude for His great goodness and mercy.
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              St. Peregrine's complete dedication to God shows us what true discipleship looks like. He was willing to give up everything for the sake of following Christ and serving His Mother.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of St. Peregrine's life and teaching, let us ask ourselves how we can 
              apply these lessons to our own lives and grow in holiness.
            </p>
            <p>
              May St. Peregrine's intercession help us to overcome our weaknesses and to grow stronger in our faith 
              and love for God and neighbor.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
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

        
        {/* Closing */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O glorious St. Peregrine, help me to follow your example of sacrifice and dedication. May your complete surrender to God inspire me to give up my own comforts and honors for the sake of serving God and His Mother. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Novena to St. Peregrine - Day 2: Sacrifice and Dedication"
          text="Join me in praying the Novena to St. Peregrine - Day 2 focusing on Sacrifice and Dedication."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/st-peregrine/day-1"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 1: Divine Call and Obedience
          </Link>
          
          
          <Link
            href="/novenas/st-peregrine/day-3"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 3: Salvation of Souls →
          </Link>
          
        </div>
      </div>
    </div>
  )
}