import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'
import RelatedNovenas from '@/components/RelatedNovenas'

export const metadata: Metadata = {
  title: 'Saints Joachim and Anne Novena - Day 9: Humility and Virtue',
  description: 'Pray Saints Joachim and Anne Novena - Day 9 focusing on humility and virtue. Join in praying for holiness in marriage and family life.',
  keywords: [
    'saints joachim and anne novena day 9',
    'st joachim st anne novena day 9',
    'day 9 saints joachim anne novena',
    'humility and virtue joachim anne'
  ],
  openGraph: {
    title: 'Saints Joachim and Anne Novena - Day 9: Humility and Virtue',
    description: 'Pray Saints Joachim and Anne Novena - Day 9 focusing on Humility and Virtue.',
    url: 'https://catholicbibleonline.com/novenas/saints-joachim-anne/day-9',
  },
  twitter: {
    title: 'Saints Joachim and Anne Novena - Day 9: Humility and Virtue',
    description: 'Pray Saints Joachim and Anne Novena - Day 9 focusing on Humility and Virtue.',
  }
}

export default function SaintsJoachimAnneNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Saints Joachim and Anne Novena – Day 9: Humility and Virtue
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for growth in virtue and humble service to God.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/saints-joachim-anne" className="hover:text-gray-700">Saints Joachim and Anne Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-emerald-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Humility and Virtue</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day, we pray for growth in virtue and humble service to God.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-4">Dear Lord, we thank You for giving us Sts. Joachim and Anne as examples of holiness. Help us to imitate the virtue they showed in their holy and humble lives.</p>

              <p className="mb-4">Sts. Joachim and Anne, we know very few details about your lives for certain beyond that you were the parents of Mary. Despite your obscurity, we know that you must have lived virtuous lives and served God faithfully.</p>

              <p className="mb-4">You were entrusted with the very important task of raising the Mother of God. You carried out this task with humility and holiness.</p>

              <p className="mb-4">Pray for me, that I may grow in virtue each day of my life. Pray that I may always be eager to serve God in whatever ways He calls me to.</p>

              <p className="mb-6">
                <strong>Please also pray for (mention your intentions here).</strong>
              </p>

              <p className="mb-6">
                <strong>Sts. Joachim and Anne, pray for us!</strong>
              </p>

              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection for Today</h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Today we focus on humility and virtue. This aspect of honoring Saints Joachim and Anne helps us to grow in holiness 
                within our marriages and families, following their example of faithfulness and trust in God.
              </p>
              <p className="mb-4">
                As we continue our Saints Joachim and Anne Novena, let us remember that they were chosen by God for the special 
                mission of raising the Mother of God, and they can help us fulfill our own missions in marriage and family life.
              </p>
              <p>
                Let us ask Saints Joachim and Anne to help us be instruments of their love and grace in serving God within our 
                families, imitating their perfect example of holiness and devotion.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

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
                Maintain hope in God's plan even when it seems impossible.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's timing and His perfect plan for your life.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Show gratitude for God's blessings and answered prayers.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-emerald-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May God bless you abundantly with holiness in your marriage and family life. May you always remember 
            Saints Joachim and Anne and find strength in their powerful intercession throughout your spiritual journey.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-emerald-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed Saints Joachim and Anne Novena! As you continue to honor the parents of Mary and grow in holiness 
            within your marriage and family, may your heart be filled with grace and divine guidance. May God continue to 
            bless you and provide all the strength you need to serve Him faithfully in your vocation.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Saints Joachim and Anne Novena - Day 9: Humility and Virtue"
          text="Join me in praying Saints Joachim and Anne Novena - Day 9 focusing on humility and virtue."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          
          <Link 
            href="/novenas/saints-joachim-anne/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Cultivating Holy Family
          </Link>
          
          
          
          <Link 
            href="/novenas/saints-joachim-anne"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
          
        </div>
      </div>

      
      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Saints Joachim and Anne Novena" />
      
    </div>
  )
}