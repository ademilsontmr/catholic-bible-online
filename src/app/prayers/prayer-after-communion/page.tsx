import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Prayer After Communion – Catholic Thanksgiving Prayer | Catholic Bible Online",
  description: "Learn the Prayer After Communion to give thanks to God after receiving the Eucharist. Discover different versions and the importance of thanksgiving after Holy Communion.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-after-communion",
  },
  openGraph: {
    title: "Prayer After Communion – Catholic Thanksgiving Prayer",
    description: "Learn the Prayer After Communion to give thanks to God after receiving the Eucharist.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-after-communion",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer After Communion – Catholic Thanksgiving Prayer",
    description: "Learn the Prayer After Communion to give thanks to God after receiving the Eucharist.",
  },
};

export default function PrayerAfterCommunionPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/basic" className="hover:underline">Basic Prayers</Link> &gt; 
        Prayer After Communion
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🙏 Prayer After Communion – Catholic Thanksgiving Prayer</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Prayer After Communion is a beautiful tradition that helps us give thanks to God after receiving 
        the Eucharist. This prayer allows us to express our gratitude for the gift of Jesus' Body and Blood, 
        to ask for His continued presence in our lives, and to commit ourselves to living according to His teachings. 
        It completes the sacred moment of Holy Communion with thanksgiving and dedication.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Traditional Prayer After Communion</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">Soul of Christ, sanctify me.</p>
          <p className="mb-4">Body of Christ, save me.</p>
          <p className="mb-4">Blood of Christ, inebriate me.</p>
          <p className="mb-4">Water from the side of Christ, wash me.</p>
          <p className="mb-4">Passion of Christ, strengthen me.</p>
          <p className="mb-4">O good Jesus, hear me.</p>
          <p className="mb-4">Within Your wounds hide me.</p>
          <p className="mb-4">Suffer me not to be separated from You.</p>
          <p className="mb-4">From the malignant enemy defend me.</p>
          <p className="mb-4">In the hour of my death call me.</p>
          <p className="mb-4">And bid me come to You.</p>
          <p className="mb-4">That with Your saints I may praise You.</p>
          <p className="mb-4">For ever and ever.</p>
          
          <p className="font-semibold">Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alternative Versions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Simple Thanksgiving</h3>
          <div className="text-gray-800">
            <p className="mb-2">Thank You, Lord Jesus, for coming to me in Holy Communion. Help me to live as You would have me live, and to love as You love. Amen.</p>
          </div>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Family Version</h3>
          <div className="text-gray-800">
            <p className="mb-2">Dear Jesus, thank You for the gift of Your Body and Blood. Help our family to grow in love for You and for one another. Amen.</p>
          </div>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Biblical Version</h3>
          <div className="text-gray-800">
            <p className="mb-2">Lord Jesus, You have given me the bread of life. Help me to live by every word that comes from Your mouth. Amen.</p>
          </div>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Modern Version</h3>
          <div className="text-gray-800">
            <p className="mb-2">Thank You, Jesus, for this precious gift of Yourself. Transform my heart and help me to be Your presence in the world. Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Purpose</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Prayer After Communion serves several important spiritual purposes:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Thanksgiving</strong> - Expressing gratitude for the gift of Jesus' Body and Blood</li>
          <li>• <strong>Petition</strong> - Asking for Jesus' continued presence and help in our lives</li>
          <li>• <strong>Dedication</strong> - Committing ourselves to live according to Christ's teachings</li>
          <li>• <strong>Protection</strong> - Seeking Jesus' protection from evil and temptation</li>
          <li>• <strong>Union</strong> - Deepening our union with Christ through prayer</li>
          <li>• <strong>Transformation</strong> - Allowing Jesus to transform our hearts and lives</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          This prayer helps us to make the most of the grace received in Holy Communion and to carry 
          Christ's presence with us throughout the day.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray After Communion</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Immediately after receiving Communion</strong> - While still in church</li>
          <li>• <strong>During the thanksgiving period</strong> - The time after Mass for personal prayer</li>
          <li>• <strong>When you return to your pew</strong> - After receiving and returning to your seat</li>
          <li>• <strong>At home after Mass</strong> - Continuing your thanksgiving at home</li>
          <li>• <strong>Throughout the day</strong> - Remembering and thanking Jesus for His gift</li>
          <li>• <strong>Before important decisions</strong> - Seeking Jesus' guidance</li>
          <li>• <strong>In times of difficulty</strong> - Drawing strength from Jesus' presence</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Deepens Union</h3>
          <p className="text-gray-700 text-sm">
            Prayer after Communion deepens your union with Christ and helps you remain in His presence.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Increases Grace</h3>
          <p className="text-gray-700 text-sm">
            Thanksgiving prayer helps you receive more fully the graces of Holy Communion.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Transforms Life</h3>
          <p className="text-gray-700 text-sm">
            Regular prayer after Communion helps transform your life according to Christ's will.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Protects from Evil</h3>
          <p className="text-gray-700 text-sm">
            Prayer after Communion helps protect you from temptation and evil influences.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The practice of prayer after Communion is rooted in Scripture:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>John 6:56</strong> - "Whoever eats my flesh and drinks my blood remains in me and I in them"</li>
          <li>• <strong>1 Corinthians 11:26</strong> - "For as often as you eat this bread and drink the cup, you proclaim the Lord's death until he comes"</li>
          <li>• <strong>Psalm 116:12-13</strong> - "What shall I return to the Lord for all his bounty to me? I will lift up the cup of salvation"</li>
          <li>• <strong>Luke 22:19</strong> - "Do this in remembrance of me"</li>
          <li>• <strong>1 Thessalonians 5:18</strong> - "Give thanks in all circumstances"</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          The Bible teaches us to give thanks for God's gifts and to remain in communion with Christ.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Make the Most of Prayer After Communion</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          To make your prayer after Communion more meaningful:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Be present</strong> - Focus your mind and heart on Jesus' presence within you</li>
          <li>• <strong>Express gratitude</strong> - Thank Jesus for the gift of Himself</li>
          <li>• <strong>Make petitions</strong> - Ask for what you need, for yourself and others</li>
          <li>• <strong>Listen</strong> - Be quiet and listen for Jesus' voice in your heart</li>
          <li>• <strong>Make resolutions</strong> - Commit to living according to Jesus' teachings</li>
          <li>• <strong>Extend the moment</strong> - Continue your thanksgiving throughout the day</li>
          <li>• <strong>Be consistent</strong> - Make prayer after Communion a regular habit</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          Remember that the time after Communion is a special moment of grace when Jesus is physically 
          present within you. Make the most of this precious time.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Prayer After Communion</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Stay in church</strong> - Don't rush out after Communion; take time to pray</li>
          <li>• <strong>Use a prayer book</strong> - Keep a prayer book or card handy</li>
          <li>• <strong>Be personal</strong> - Speak to Jesus from your heart</li>
          <li>• <strong>Include others</strong> - Pray for family, friends, and those in need</li>
          <li>• <strong>Make it a habit</strong> - Pray after Communion every time you receive</li>
          <li>• <strong>Be patient</strong> - Don't worry if you don't feel anything; trust in Jesus' presence</li>
          <li>• <strong>Continue at home</strong> - Extend your thanksgiving throughout the day</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/prayer-before-communion" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Prayer Before Communion
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prayer to prepare your heart for receiving the Eucharist.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/mass" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Mass Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Mass Prayers
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Complete collection of prayers used during the celebration of the Holy Mass.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/thanksgiving" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Thanksgiving Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Thanksgiving Prayers
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Complete collection of prayers of gratitude and thanksgiving to God.
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