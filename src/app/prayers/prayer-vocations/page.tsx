import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prayer for Vocations – Prayers for Priestly and Religious Vocations | Catholic Bible Online",
  description: "Complete collection of prayers for vocations to the priesthood and religious life. Traditional Catholic prayers for vocations.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-vocations",
  },
  openGraph: {
    title: "Prayer for Vocations – Prayers for Priestly and Religious Vocations",
    description: "Complete collection of prayers for vocations to the priesthood and religious life.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-vocations",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer for Vocations – Prayers for Priestly and Religious Vocations",
    description: "Complete collection of prayers for vocations to the priesthood and religious life.",
  },
};

export default function PrayerVocationsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/devotional" className="hover:underline">Devotional</Link> &gt; 
        Prayer for Vocations
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">⛪ Prayer for Vocations</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        Prayers for vocations are essential for the Church, asking God to call men and women to serve as priests, 
        religious, and consecrated persons. These prayers help us to discern our own vocations and to support 
        those who are called to serve the Church in these special ways.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Vocations</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Heavenly Father, You have chosen to associate weak human beings in the divine work of redemption.
          </p>
          <p className="mb-4">
            You need them to become priests, religious, and consecrated persons.
          </p>
          <p className="mb-4">
            You need them to be witnesses of Your love and instruments of Your mercy.
          </p>
          <p className="mb-4">
            Grant that many young people may hear Your call and respond with generous hearts.
          </p>
          <p className="mb-4">
            Help them to understand that to serve You is to reign, and to follow You is to find true happiness.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Priestly Vocations</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, You have called Your apostles to be fishers of men.
          </p>
          <p className="mb-4">
            Continue to call men to the priesthood to serve Your Church and Your people.
          </p>
          <p className="mb-4">
            Give them the courage to respond to Your call with generous hearts.
          </p>
          <p className="mb-4">
            Help them to be holy priests, faithful to Your teachings and examples.
          </p>
          <p className="mb-4">
            May they be instruments of Your grace, bringing Your love and mercy to all.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Religious Vocations</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, You have called many to follow You in the religious life.
          </p>
          <p className="mb-4">
            Continue to call men and women to dedicate their lives to You in poverty, chastity, and obedience.
          </p>
          <p className="mb-4">
            Help them to be witnesses of Your love and instruments of Your mercy.
          </p>
          <p className="mb-4">
            May they inspire others to seek You above all things.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Discernment</h2>
      
      <div className="space-y-6 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-red-900 mb-3">Prayer for Those Discerning</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord Jesus, I am trying to discern Your will for my life. Help me to hear Your voice clearly 
            and to respond with courage and generosity. Give me the wisdom to know what You are asking of me, 
            and the strength to follow wherever You lead. May Your Holy Spirit guide me in this important decision. Amen.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Prayer for Parents</h3>
          <p className="text-gray-800 leading-relaxed">
            Heavenly Father, help us as parents to be open to Your will for our children. 
            If You are calling them to the priesthood or religious life, give us the grace to support them 
            with love and encouragement. Help us to remember that our children belong to You first, 
            and that You have a special plan for each of them. Amen.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-green-900 mb-3">Prayer for the Church</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord Jesus, You are the Good Shepherd who calls His own by name. 
            Send more laborers into Your harvest. Call many young people to serve You as priests and religious. 
            Help them to be faithful to their vocations and to bring Your love and mercy to all they serve. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Seminarians</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, bless all those who are studying for the priesthood.
          </p>
          <p className="mb-4">
            Help them to grow in holiness and knowledge during their time in the seminary.
          </p>
          <p className="mb-4">
            Give them the grace to be faithful to their studies and to their spiritual formation.
          </p>
          <p className="mb-4">
            May they become holy priests who will serve Your Church with love and dedication.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Those in Formation</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, bless all those who are in formation for the religious life.
          </p>
          <p className="mb-4">
            Help them to grow in their understanding of their vocation and in their love for You.
          </p>
          <p className="mb-4">
            Give them the strength to persevere in their formation and to be faithful to their commitments.
          </p>
          <p className="mb-4">
            May they become holy religious who will witness to Your love in the world.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Perseverance</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, You know the challenges and difficulties that come with following a vocation.
          </p>
          <p className="mb-4">
            Help all priests and religious to persevere in their vocations with joy and faithfulness.
          </p>
          <p className="mb-4">
            Give them the grace to overcome temptations and to remain faithful to their commitments.
          </p>
          <p className="mb-4">
            May they find strength in You and in the support of the Church.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray for Vocations</h2>
      
      <div className="space-y-4 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-red-900 mb-2">World Day of Prayer for Vocations</h3>
          <p className="text-gray-800">
            The fourth Sunday of Easter is dedicated to praying for vocations to the priesthood and religious life.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Daily Prayer</h3>
          <p className="text-gray-800">
            Include prayers for vocations in your daily prayer routine.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-900 mb-2">Family Prayer</h3>
          <p className="text-gray-800">
            Pray for vocations as a family, especially if you have children who might be called.
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">Parish Prayer</h3>
          <p className="text-gray-800">
            Pray for vocations during Mass and other parish gatherings.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for the Year of Vocations</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, during this year dedicated to vocations, we pray for an increase in vocations 
            to the priesthood and religious life.
          </p>
          <p className="mb-4">
            Help young people to hear Your call and to respond with generous hearts.
          </p>
          <p className="mb-4">
            Give them the courage to follow You wherever You lead them.
          </p>
          <p className="mb-4">
            May they find true happiness and fulfillment in serving You and Your Church.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          Prayers for vocations remind us that God continues to call men and women to serve Him in special ways 
          through the priesthood and religious life. These vocations are essential for the life and mission of the Church.
        </p>
        
        <p className="text-gray-700 mb-4">
          These prayers help us to support those who are discerning their vocations and to encourage young people 
          to be open to God's call in their lives. They also help us to appreciate the gift of priests and religious 
          in our Church.
        </p>
        
        <p className="text-gray-700 mb-6">
          Through these prayers, we can help to ensure that the Church will have the priests and religious 
          it needs to continue Christ's mission in the world. We can also grow in our own understanding 
          of the importance of vocations in the life of the Church.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/prayer-peace" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Devotional
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Prayer for Peace
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prayers for peace in the world and in our hearts.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-holy-spirit" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Devotional
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Prayer to the Holy Spirit
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Invoke the Holy Spirit for guidance and strength.
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
                  The prayer that Jesus taught us, perfect for daily prayer and reflection.
                </p>
              </div>
            </div>
          </Link>
        </div>
      

      {/* Share Section */}
      <section className="mb-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this prayer</h2>
          <ShareButton 
            title="Prayer Vocations" 
            url="/prayers/prayer-vocations"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section></section>
    </main>
  );
} 