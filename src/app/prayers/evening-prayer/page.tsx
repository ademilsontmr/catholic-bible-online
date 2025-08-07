import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Evening Prayer – Catholic Night Prayer | Catholic Bible Online",
  description: "Learn the Evening Prayer to end your day with gratitude and reflection. Discover different versions and the spiritual benefits of evening prayer.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/evening-prayer",
  },
  openGraph: {
    title: "Evening Prayer – Catholic Night Prayer",
    description: "Learn the Evening Prayer to end your day with gratitude and reflection.",
    url: "https://www.catholicbibleonline.com/prayers/evening-prayer",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evening Prayer – Catholic Night Prayer",
    description: "Learn the Evening Prayer to end your day with gratitude and reflection.",
  },
};

export default function EveningPrayerPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/basic" className="hover:underline">Basic Prayers</Link> &gt; 
        Evening Prayer
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🌙 Evening Prayer – Catholic Night Prayer</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Evening Prayer is a beautiful way to end your day with gratitude and reflection. It helps you review 
        the day's blessings, ask for forgiveness for any failings, and entrust yourself to God's care for the night. 
        This prayer brings peace to your heart and prepares you for restful sleep.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Traditional Evening Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">O my God, at the end of this day I thank You most heartily for all the graces I have received from You.</p>
          
          <p className="mb-4">I am sorry that I have not made better use of them. I am sorry for all the sins I have committed today against You and my neighbor, because of my fault, my fault, my most grievous fault.</p>
          
          <p className="mb-4">I beg You to forgive me and to grant me the grace to do better tomorrow.</p>
          
          <p className="mb-4">I place myself in Your hands and under Your protection this night. May Your holy angels watch over me and keep me in peace.</p>
          
          <p className="font-semibold">Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alternative Evening Prayer</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">Lord Jesus Christ, I thank You for all the blessings of this day. Forgive me for any sins I have committed and help me to do better tomorrow.</p>
          
          <p className="mb-4">I place myself in Your loving care this night. Protect me and my loved ones, and grant us peaceful rest.</p>
          
          <p className="mb-4">Bless all those who are suffering or in need this night. May Your mercy and love surround them.</p>
          
          <p className="font-semibold">Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Purpose</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Evening Prayer serves several important spiritual purposes:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Gratitude</strong> - Thanking God for the blessings and graces of the day</li>
          <li>• <strong>Examination of conscience</strong> - Reflecting on our actions and asking for forgiveness</li>
          <li>• <strong>Trust</strong> - Entrusting ourselves to God's care for the night</li>
          <li>• <strong>Peace</strong> - Finding peace and calm before sleep</li>
          <li>• <strong>Preparation</strong> - Preparing our hearts for the next day</li>
          <li>• <strong>Intercession</strong> - Praying for others who are suffering or in need</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          This prayer helps us end each day with a sense of closure and peace, knowing that we have acknowledged 
          God's presence in our lives and entrusted ourselves to His loving care.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Evening Prayer</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Before going to bed</strong> - As part of your bedtime routine</li>
          <li>• <strong>After finishing your day's work</strong> - To mark the end of your active day</li>
          <li>• <strong>During evening prayer time</strong> - As part of your daily prayer routine</li>
          <li>• <strong>When you're ready for sleep</strong> - To prepare your heart and mind for rest</li>
          <li>• <strong>With family</strong> - As a family prayer before bedtime</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Peaceful Sleep</h3>
          <p className="text-gray-700 text-sm">
            Evening prayer brings peace to your heart and mind, helping you sleep more restfully.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Daily Reflection</h3>
          <p className="text-gray-700 text-sm">
            Helps you reflect on your day and recognize God's presence in your life.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Spiritual Growth</h3>
          <p className="text-gray-700 text-sm">
            Regular examination of conscience helps you grow in virtue and holiness.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Divine Protection</h3>
          <p className="text-gray-700 text-sm">
            Entrusting yourself to God's care brings His protection and blessing.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Make Evening Prayer Meaningful</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          To make your evening prayer more meaningful and effective:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Find a quiet time</strong> - Choose a time when you can be alone and undisturbed</li>
          <li>• <strong>Review your day</strong> - Think about the events, people, and experiences of the day</li>
          <li>• <strong>Count your blessings</strong> - Identify specific things you're grateful for</li>
          <li>• <strong>Examine your conscience</strong> - Reflect on your actions, words, and thoughts</li>
          <li>• <strong>Ask for forgiveness</strong> - Sincerely repent of any sins or failings</li>
          <li>• <strong>Pray for others</strong> - Remember those who are suffering or in need</li>
          <li>• <strong>Express trust</strong> - Place yourself in God's loving care</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          Remember that evening prayer is not about being perfect, but about being honest with God and yourself. 
          It's a time to acknowledge both your blessings and your need for God's mercy.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The practice of evening prayer is rooted in Scripture:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Psalm 4:8</strong> - "In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety"</li>
          <li>• <strong>Psalm 141:2</strong> - "May my prayer be set before you like incense; may the lifting up of my hands be like the evening sacrifice"</li>
          <li>• <strong>Psalm 134:1</strong> - "Praise the Lord, all you servants of the Lord who minister by night in the house of the Lord"</li>
          <li>• <strong>1 Peter 5:7</strong> - "Cast all your anxiety on him because he cares for you"</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          The Bible shows us that evening prayer has been a part of the spiritual life since ancient times, 
          helping people find peace and trust in God's care.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Evening Prayer</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Make it a habit</strong> - Pray at the same time each evening</li>
          <li>• <strong>Keep it simple</strong> - Don't make it so long that you avoid it</li>
          <li>• <strong>Be honest</strong> - Don't be afraid to admit your failings to God</li>
          <li>• <strong>Include family</strong> - Pray together as a family when possible</li>
          <li>• <strong>Use a prayer book</strong> - Keep a prayer book or card handy</li>
          <li>• <strong>Don't give up</strong> - Even if you miss some evenings, keep trying</li>
          <li>• <strong>Make it personal</strong> - Add your own intentions and concerns</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/morning-offering" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Morning Offering
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prayer to consecrate your day to God and offer all your actions to Him.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/act-of-contrition" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Act of Contrition
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prayer expressing sorrow for sins and asking for God's forgiveness.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/our-father" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Our Father
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The Lord's Prayer, taught by Jesus Himself to His disciples.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/prayers/basic"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          ← Back to Basic Prayers
        </Link>
      </div>
    </main>
  );
} 