import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Peace to Our Lady of Sorrows - Day 9: Repentance and Grace',
  description: "Pray the Novena for Peace to Our Lady of Sorrows - Day 9 focusing on Repentance and Grace. Join in praying the traditional novena for peace and protection.",
  keywords: [
    'novena for peace to our lady of sorrows day 9',
    'our lady of sorrows peace novena day 9',
    'lady of sorrows novena day 9',
    'peace novena our lady of sorrows day 9',
    'day 9 novena for peace to our lady of sorrows',
    'repentance and grace prayer',
    'our lady of sorrows novena repentance and grace',
    'peace prayer novena repentance and grace'
  ],
  openGraph: {
    title: 'Novena for Peace to Our Lady of Sorrows - Day 9: Repentance and Grace',
    description: 'Pray the Novena for Peace to Our Lady of Sorrows - Day 9 focusing on Repentance and Grace. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/novena-for-peace-to-our-lady-of-sorrows/day-9',
  },
  twitter: {
    title: 'Novena for Peace to Our Lady of Sorrows - Day 9: Repentance and Grace',
    description: 'Pray the Novena for Peace to Our Lady of Sorrows - Day 9 focusing on Repentance and Grace. Join in praying the traditional novena.',
  }
}

export default function NovenaForPeaceToOurLadyOfSorrowsDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Peace to Our Lady of Sorrows – Day 9: Repentance and Grace
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Peace to Our Lady of Sorrows with devotion and trust.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/novena-for-peace-to-our-lady-of-sorrows" className="hover:text-gray-700">Novena for Peace to Our Lady of Sorrows</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Repentance and Grace</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of our novena, we focus on praying for repentance of those involved in abortion and protection of our heroes. We ask for strength for those who kill the innocent to seek Christ's forgiveness and for protection of our soldiers, firefighters, police, and medical personnel.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Most holy and afflicted Virgin, Queen of Martyrs, you stood beneath the cross, witnessing the agony of your dying Son. Look with a mother's tenderness and pity on us, as we kneel before you. We venerate your sorrows, and place our request with dutiful confidence in the sanctuary of your wounded heart.
              </p>

              <p className="mb-4">
                Present them, we beseech you, on our behalf to Jesus Christ, through the merits of His own most Sacred Passion and Death, together with your sufferings at the foot of the cross. Through the united efficacy of both, obtain the granting of our petition.
              </p>

              <p className="mb-4">
                To whom shall we have recourse in our wants and miseries if not to you, Mother of Mercy? You have drunk so deeply of the chalice of your Son, you can with compassion receive our sorrows.
              </p>

              <p className="mb-4">
                Holy Mary, your soul was pierced by a sword of sorrow at the sight of the passion of your divine Son. Intercede for us and obtain from Jesus these petitions if they be for His honor and glory and for our good and the good of our nation.
              </p>

              <p className="mb-4">
                That our nation's leaders remove those U.S. Marshals who guard abortion chambers and station them on airplanes to protect innocent travelers,
              </p>
              <p className="mb-2 text-center font-semibold">Our Lady of Sorrows, hear us.</p>

              <p className="mb-4">
                That our president may call for a moratorium on abortion while the war against terrorism is waged,
              </p>
              <p className="mb-2 text-center font-semibold">Our Lady of Sorrows, hear us.</p>

              <p className="mb-4">
                That all those injured in the terrorist attacks recover quickly,
              </p>
              <p className="mb-2 text-center font-semibold">Our Lady of Sorrows, hear us.</p>

              <p className="mb-4">
                That the souls of the departed rest in the eternal peace of your Crucified Son, Jesus Christ,
              </p>
              <p className="mb-2 text-center font-semibold">Our Lady of Sorrows, hear us.</p>

              <p className="mb-4">
                That the families of all those lost in the terrorist attack may know the comfort of Christ's constant love,
              </p>
              <p className="mb-2 text-center font-semibold">Our Lady of Sorrows, hear us.</p>

              <p className="mb-4">
                That the parents, grandparents and health care professionals who kill the innocent by abortion may receive the strength to seek Christ's forgiveness,
              </p>
              <p className="mb-2 text-center font-semibold">Our Lady of Sorrows, hear us.</p>

              <p className="mb-4">
                That the biologists, scientists, pharmaceutical company executives, medical school professors and others who are involved in the daily killing of the preborn may recognize the evil they perpetrate, and repent,
              </p>
              <p className="mb-2 text-center font-semibold">Our Lady of Sorrows, hear us.</p>

              <p className="mb-4">
                That our soldiers, firefighters, policeman, and medical personnel will be protected by the grace of God,
              </p>
              <p className="mb-2 text-center font-semibold">Our Lady of Sorrows, hear us.</p>

              <p className="text-center font-semibold">Amen.</p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Repentance and conversion are always possible through God's mercy. Our Lady of Sorrows will intercede for those who have committed grave sins, that they may recognize their errors and seek forgiveness. She will also protect those who serve and protect others.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of our devotion to Our Lady of Sorrows, let us ask ourselves how we can 
              better honor her as Queen of Martyrs and seek her powerful intercession for peace and protection.
            </p>
            <p>
              May Our Lady of Sorrows continue to bless us with her maternal care and lead us closer to her Son, 
              Jesus Christ, through her understanding of human suffering.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Devotion</h3>
              <p className="text-gray-700 text-sm">
                Approach Our Lady of Sorrows with deep devotion and reverence. 
                Trust in her maternal intercession and her understanding of human suffering.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Consistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with consistency and faith. Our Lady of Sorrows will not fail 
                to help those who turn to her with trust and devotion.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Focus on Intentions</h3>
              <p className="text-gray-700 text-sm">
                Keep in mind the specific intentions: peace, protection of innocent life, and the end of abortion. 
                Trust that Our Lady will present these to her Son.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Our Lady of Sorrows for her love and for the graces you receive. 
                Gratitude opens our hearts to receive more spiritual blessings.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May Our Lady of Sorrows bless you abundantly through your prayers for peace. 
            May you always remember to turn to her as Queen of Martyrs and Mother of Mercy. 
            May your heart be filled with her maternal love and protection.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Novena for Peace to Our Lady of Sorrows! As you continue your spiritual journey, 
            may your heart be filled with devotion to Our Lady of Sorrows and trust in her powerful intercession for peace. 
            Remember that she will never abandon you and will be your comfort in times of sorrow. 
            May Our Lady of Sorrows continue to bless you and bring peace to our world.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Peace to Our Lady of Sorrows - Day 9: Repentance and Grace" 
            url="/novenas/novena-for-peace-to-our-lady-of-sorrows/day-9"
            excerpt="Join me in praying the Novena for Peace to Our Lady of Sorrows - Day 9 focusing on Repentance and Grace." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/novena-for-peace-to-our-lady-of-sorrows/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Peace
          </Link>
          
          <Link 
            href="/novenas/novena-for-peace-to-our-lady-of-sorrows"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Novena for Peace to Our Lady of Sorrows" />
    </div>
  )
}


