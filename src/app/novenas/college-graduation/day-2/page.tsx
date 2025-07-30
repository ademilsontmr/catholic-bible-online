import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for College Graduation - Day 2: Preparation for Graduation',
  description: 'Pray the Novena for College Graduation - Day 2 focusing on Preparation for Graduation. Join in praying the traditional novena to seek God\'s grace for academic success.',
  keywords: [
    'novena for college graduation day 2',
    'college graduation novena day 2',
    'college graduation prayer day 2',
    'novena for college graduation prayer preparation for graduation',
    'day 2 college graduation novena',
    'preparation for graduation college graduation prayer',
    'college graduation novena preparation for graduation',
    'college graduation prayer preparation for graduation'
  ],
  openGraph: {
    title: 'Novena for College Graduation - Day 2: Preparation for Graduation',
    description: 'Pray the Novena for College Graduation - Day 2 focusing on Preparation for Graduation. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/college-graduation/day-2',
  },
  twitter: {
    title: 'Novena for College Graduation - Day 2: Preparation for Graduation',
    description: 'Pray the Novena for College Graduation - Day 2 focusing on Preparation for Graduation. Join in praying the traditional novena.',
  }
}

export default function CollegeGraduationNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for College Graduation – Day 2: Preparation for Graduation
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for College Graduation to seek God's grace and assistance for all college students on their journey to graduation.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/college-graduation" className="hover:text-gray-700">Novena for College Graduation</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-emerald-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Preparation for Graduation</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of the Novena for College Graduation, we pray for all college students who are preparing 
            for an upcoming graduation. We ask God to bring them peace and direction during this important time.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong><br/>
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                Dear Lord, we thank You and praise You for giving us the gift of education. We ask You to pour out Your grace on all college students who are on their journey to graduation.
              </p>

              <p className="mb-6">
                Completing college is a big accomplishment. Graduation can also be a difficult time, full of uncertainty and anxiety about the future. You can bring peace and direction to all college students who are preparing to graduate soon.
              </p>

              <p className="mb-6">
                We ask You to please bless and assist all college students who are trying to graduate, and we particularly ask today that You assist all college students who are preparing for an upcoming graduation.
              </p>

              <p className="mb-6">
                Help us to always trust You in every circumstance we might face in our lives. Give us the grace to do all we can to grow in friendship with You each day of our lives.
              </p>

              <p className="mb-6">
                <strong>And we especially ask in this novena for (mention your intentions here).</strong>
              </p>

              <p className="mb-6">
                <strong>Lord, hear our prayers!</strong>
              </p>

              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong><br/>
                <strong>Amen.</strong>
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
                Today we pray for all college students who are preparing for an upcoming graduation. This is a significant 
                milestone in their educational journey, but it can also be a time of mixed emotions.
              </p>

              <p className="mb-4">
                Graduation represents the culmination of years of hard work, dedication, and sacrifice. It is a time to 
                celebrate achievements and accomplishments. However, it can also be a time of uncertainty and anxiety 
                about what lies ahead - finding a job, starting a career, or pursuing further education.
              </p>

              <p className="mb-4">
                During this preparation period, students may feel overwhelmed by the many decisions they need to make 
                and the changes that are coming. They may worry about whether they have made the right choices or if 
                they are prepared for the next chapter of their lives. This is where God's grace can bring peace and direction.
              </p>

              <p className="mb-4">
                As we pray for those preparing for graduation, let us ask God to calm their anxieties and give them 
                clarity about their future path. Let us pray that they will trust in His plan for their lives and 
                find peace in knowing that He is guiding them every step of the way.
              </p>

              <p>
                Remember that graduation is not just an ending, but a new beginning. With God's grace, students can 
                face the future with confidence, knowing that He will continue to guide and support them in all their endeavors.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's providence and His ability to help you.
                Turn to Him with confidence in every need.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will not fail to help those who turn to Him with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to God.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His help and grace.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-emerald-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, we thank You for hearing our prayers today. Help all college students who are preparing for graduation 
            to find peace and direction during this important time. Give them the grace to trust in Your plan for their lives 
            and to face the future with confidence. May they always remember that You are with them as they begin this new 
            chapter in their journey. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for College Graduation - Day 2: Preparation for Graduation"
          text="Join me in praying the Novena for College Graduation - Day 2 focusing on Preparation for Graduation."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/college-graduation/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Academic Struggles
          </Link>
          
          <Link 
            href="/novenas/college-graduation/day-3"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
          >
            Day 3: Overcoming Discouragement →
          </Link>
        </div>
      </div>
    </div>
  )
} 