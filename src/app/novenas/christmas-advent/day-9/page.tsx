import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'
import RelatedNovenas from '@/components/RelatedNovenas'

export const metadata: Metadata = {
  title: 'Christmas Novena - Day 9: Joy',
  description: 'Pray the Christmas Novena - Day 9 focusing on Joy. Includes complete prayer text, reflection, and preparation for the birth of Jesus Christ.',
  keywords: [
    'christmas novena day 9',
    'advent novena day 9',
    'christmas prayer joy',
    'day 9 christmas novena',
    'joy advent prayer',
    'christmas novena joy',
    'advent novena joy'
  ],
  openGraph: {
    title: 'Christmas Novena - Day 9: Joy',
    description: 'Pray the Christmas Novena - Day 9 focusing on Joy. Complete prayer text and reflection.',
    url: 'https://catholicbibleonline.com/novenas/christmas-advent/day-9',
  },
  twitter: {
    title: 'Christmas Novena - Day 9: Joy',
    description: 'Pray the Christmas Novena - Day 9 focusing on Joy. Complete prayer text and reflection.',
  }
}

export default function ChristmasAdventNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Christmas Novena – Day 9: Joy
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for the joy of Christmas and the joy of knowing Christ.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/christmas-advent" className="hover:text-gray-700">Christmas Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Joy</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of the Christmas Novena, we pray for the joy of Christmas and the joy of knowing Christ. 
            We ask God to fill our hearts with the true joy that comes from knowing and loving Jesus Christ.
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
              
              <p className="mb-6">
                <strong>Opening Prayer:</strong><br/>
                O Lord, our God, as we complete our preparation for the birth of Your Son, we pray for the gift of joy. 
                Help us to experience the true joy of Christmas - the joy that comes from knowing and loving Jesus Christ. 
                May our hearts be filled with the joy that only You can give.
              </p>
              
              <p className="mb-6">
                <strong>Prayer for Joy:</strong><br/>
                Almighty and merciful God, Your Son Jesus Christ came into the world to bring us joy and to give us life to the full. 
                Grant us the grace to experience the true joy of knowing Him and to share this joy with others. 
                Help us to remember that true joy comes from You and from being in relationship with You.
              </p>
              
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for the joy of Christmas and the joy of knowing Christ. We ask that our hearts may be filled with the true joy 
                that comes from knowing and loving Jesus Christ, and that we may share this joy with others.
              </p>
              
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "I have told you this so that my joy may be in you and that your joy may be complete." (John 15:11)
              </p>
              
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Lord Jesus, fill our hearts with Your joy as we prepare to celebrate Your birth. Help us to experience the true joy 
                that comes from knowing and loving You. May our joy be complete in You and may we share this joy with others. Amen.
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
                Today we pray for the joy of Christmas and the joy of knowing Christ. 
                Joy is a gift from God that helps us to be happy and content, even in difficult circumstances.
              </p>
              
              <p className="mb-4">
                Jesus came into the world to bring us joy and to give us life to the full. He said, "I have come that they may have life, 
                and have it to the full" (John 10:10). This means that He wants us to experience true joy and happiness in our lives.
              </p>
              
              <p className="mb-4">
                Jesus also said, "I have told you this so that my joy may be in you and that your joy may be complete" (John 15:11). 
                This shows us that true joy comes from being in relationship with Jesus and from following His teachings.
              </p>
              
              <p className="mb-4">
                As we complete this novena, let us ask God to fill our hearts with the true joy of Christmas. 
                Let us ask Him to help us experience the joy that comes from knowing and loving Jesus Christ, 
                and to share this joy with others.
              </p>
              
              <p>
                Remember that true joy is not dependent on external circumstances, but comes from knowing that we are loved by God 
                and that we have a relationship with Jesus Christ. This joy is lasting and can sustain us even in difficult times.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Find Joy in Christ</h3>
              <p className="text-gray-700 text-sm">
                True joy comes from knowing and loving Jesus Christ. Spend time with Him in prayer 
                and let His joy fill your heart.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Share Your Joy</h3>
              <p className="text-gray-700 text-sm">
                Share the joy of knowing Christ with others. Let your joy be contagious 
                and help others to find joy in Him as well.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Cultivate an attitude of gratitude. Thank God for His many blessings 
                and find joy in the simple things of life.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust that God has a plan for your life and that He wants you to be happy. 
                This trust brings joy even in difficult circumstances.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord fill your heart with His joy as you complete this Christmas Novena. 
            May you experience the true joy of knowing and loving Jesus Christ, and may you share this joy with others. 
            May your joy be complete in Him and may you always remember the great gift of His love.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Christmas Novena! As you prepare to celebrate the birth of Jesus Christ, 
            may your heart be filled with faith, hope, love, humility, purity, obedience, poverty, peace, and joy. 
            May the Lord bless you abundantly and may you continue to grow in your relationship with Him throughout the year.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Christmas Advent Novena - Day 9: Christmas"
          text="Join me in praying the Christmas Advent Novena - Day 9 focusing on Christmas."
        />

{/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link 
            href="/novenas/christmas-advent/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Poverty
          </Link>
          
          <Link 
            href="/novenas/christmas-advent"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Back to Novena Overview
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Christmas Advent" />
    </div>
  )
} 