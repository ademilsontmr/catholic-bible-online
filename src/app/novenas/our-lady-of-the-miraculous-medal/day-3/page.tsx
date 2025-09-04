import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of the Miraculous Medal Novena - Day 3: Divine Protection',
  description: 'Pray the Our Lady of the Miraculous Medal Novena - Day 3 focusing on Divine Protection. Join in praying the traditional novena to seek her intercession.',
  keywords: [
    'our lady of the miraculous medal novena day 3',
    'miraculous medal novena day 3',
    'mary novena day 3',
    'miraculous medal prayer divine protection',
    'day 3 miraculous medal novena',
    'divine protection mary prayer',
    'miraculous medal novena divine protection',
    'mary novena divine protection'
  ],
  openGraph: {
    title: 'Our Lady of the Miraculous Medal Novena - Day 3: Divine Protection',
    description: 'Pray the Our Lady of the Miraculous Medal Novena - Day 3 focusing on Divine Protection. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-the-miraculous-medal/day-3',
  },
  twitter: {
    title: 'Our Lady of the Miraculous Medal Novena - Day 3: Divine Protection',
    description: 'Pray the Our Lady of the Miraculous Medal Novena - Day 3 focusing on Divine Protection. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfTheMiraculousMedalNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of the Miraculous Medal Novena – Day 3: Divine Protection
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Our Lady of the Miraculous Medal Novena to seek her intercession and experience the power of the Miraculous Medal.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-the-miraculous-medal" className="hover:text-gray-700">Our Lady of the Miraculous Medal Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Divine Protection</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day of the Our Lady of the Miraculous Medal Novena, we seek Mary's divine protection 
            and ask for her maternal care in all our needs. We trust in her powerful intercession to shield us from harm.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 3</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father and of the Son and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>V.</strong> Come, O Holy Spirit, fill the hearts of Your faithful,<br/>
                and kindle in them the fire of Your love.
              </p>

              <p className="mb-6">
                <strong>R.</strong> Send forth Your Spirit, and they shall be created.<br/>
                And You shall renew the face of the earth.
              </p>

              <p className="mb-6">
                <strong>Let us pray:</strong><br/>
                O God, who did instruct the hearts of the faithful<br/>
                by the light of the Holy Spirit,<br/>
                grant us in the same Spirit to be truly wise<br/>
                and ever to rejoice in His consolation,<br/>
                through Jesus Christ Our Lord. Amen.
              </p>

              <p className="mb-6">
                <strong>V.</strong> O Mary, conceived without sin,<br/>
                <strong>R.</strong> Pray for us who have recourse to you. (3 times.)
              </p>

              <p className="mb-6">
                <strong>O Lord Jesus Christ,</strong> who have vouchsafed to glorify<br/>
                by numberless miracles the Blessed Virgin Mary,<br/>
                Immaculate from the first moment of her conception,<br/>
                grant that all who devoutly implore her protection on earth,<br/>
                may eternally enjoy Your presence in heaven,<br/>
                who, with the Father and Holy Spirit,<br/>
                live and reign, God, for ever and ever. Amen.
              </p>

              <p className="mb-6">
                <strong>O Lord Jesus Christ,</strong> who for the accomplishment of Your<br/>
                greatest works, have chosen the weak things of the<br/>
                world, that no flesh may glory in Your sight; and who<br/>
                for a better and more widely diffused belief in the<br/>
                Immaculate Conception of Your Mother, have wished that<br/>
                the Miraculous Medal be manifested to Saint Catherine<br/>
                Laboure, grant, we beseech You, that filled with like<br/>
                humility, we may glorify this mystery by word and work.<br/>
                Amen.
              </p>

              <p className="mb-6">
                <strong>Memorare</strong><br/>
                Remember, O most compassionate Virgin Mary,<br/>
                that never was it known that anyone who fled to your protection,<br/>
                implored your assistance, or sought your intercession was left unaided.<br/>
                Inspired with this confidence, we fly unto you,<br/>
                O Virgin of Virgins, our Mother;<br/>
                to you we come; before you we kneel sinful and sorrowful.<br/>
                O Mother of the Word Incarnate, despise not our petitions,<br/>
                but in your clemency hear and answer them. Amen.
              </p>

              <p className="mb-6">
                <strong>Novena Prayer</strong><br/>
                O Immaculate Virgin Mary,<br/>
                Mother of Our Lord Jesus and our Mother,<br/>
                penetrated with the most lively confidence<br/>
                in your all-powerful and never failing intercession,<br/>
                manifested so often through the Miraculous Medal,<br/>
                we your loving and trustful children implore you to obtain for us<br/>
                the graces and favors we ask during this Novena,<br/>
                if they be beneficial to our immortal souls,<br/>
                and the souls for whom we pray.<br/>
                <em>(Here privately form your petitions.)</em>
              </p>

              <p className="mb-6">
                You know, O Mary, how often our souls have been<br/>
                the sanctuaries of your Son who hates iniquity.<br/>
                Obtain for us then a deep hatred of sin and that purity of heart<br/>
                which will attach us to God alone<br/>
                so that our every thought, word and deed<br/>
                may tend to His greater glory.<br/>
                Obtain for us also a spirit of prayer and self-denial<br/>
                that we may recover by penance what we have lost by sin<br/>
                and at length attain to that blessed abode<br/>
                where you are the Queen of angels and of men. Amen.
              </p>

              <p className="mb-6">
                <strong>An Act of Consecration to Our Lady of the Miraculous Medal</strong><br/>
                O Virgin Mother of God, Mary Immaculate,<br/>
                we dedicate and consecrate ourselves to you<br/>
                under the title of Our Lady of the Miraculous Medal.<br/>
                May this Medal be for each one of us a sure sign of your<br/>
                affection for us and a constant reminder of our duties toward you.<br/>
                Ever while wearing it, may we be blessed by your loving<br/>
                protection and preserved in the grace of your Son.<br/>
                O most powerful Virgin, Mother of our Savior,<br/>
                keep us close to you every moment of our lives.<br/>
                Obtain for us, your children, the grace of a happy death;<br/>
                so that, in union with you, we may enjoy the bliss of heaven forever. Amen.
              </p>

              <p className="mb-6">
                <strong>O Mary, conceived without sin, pray for us who have<br/>
                recourse to you.</strong> (3 times.)
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
                Today we seek Mary's divine protection and ask for her maternal care in all our needs. 
                We trust in her powerful intercession to shield us from harm and guide us safely through life's challenges.
              </p>

              <p className="mb-4">
                The Miraculous Medal is a powerful sacramental that provides divine protection to those who wear it with faith. 
                Mary has promised special graces and protection to those who devoutly wear this medal. 
                Through her intercession, we can be preserved in the grace of her Son and protected from spiritual and physical dangers.
              </p>

              <p className="mb-4">
                The Memorare prayer reminds us that "never was it known that anyone who fled to your protection, 
                implored your assistance, or sought your intercession was left unaided." This gives us great confidence 
                in Mary's ability to protect and help us in all our needs.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to be our shield and protection in all circumstances. 
                Let us also ask her to help us stay close to her and her Son, so that we may always be preserved 
                in God's grace and protected from the snares of the enemy.
              </p>

              <p>
                Mary's divine protection is not just about physical safety, but also about spiritual protection. 
                She helps us avoid sin, grow in virtue, and stay on the path to heaven. Through her intercession, 
                may we always be blessed by her loving protection and preserved in the grace of her Son.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in Mary</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in Mary's maternal care and her ability to help you.
                Turn to her with confidence in every need, especially through the Miraculous Medal.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                Mary will not fail to help those who turn to her with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to Mary.
                She wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Mary for her help and intercession.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Mary, conceived without sin, pray for us who have recourse to you. Be our shield and protection in all circumstances. 
            May we always be blessed by your loving protection and preserved in the grace of your Son. 
            Keep us close to you every moment of our lives, and help us to trust completely in your maternal care. Amen.
          </p>
        </section>

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of the Miraculous Medal Novena - Day 3: Divine Protection" 
            url="/novenas/our-lady-of-the-miraculous-medal/day-3"
            excerpt="Join me in praying the Our Lady of the Miraculous Medal Novena - Day 3 focusing on Divine Protection." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-the-miraculous-medal/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Immaculate Conception
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-the-miraculous-medal/day-4"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 4: Purity of Heart →
          </Link>
        </div>
      </div>
    </div>
  )
} 