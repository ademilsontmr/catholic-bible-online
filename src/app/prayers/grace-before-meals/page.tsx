import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Grace Before Meals – Catholic Prayer Before Eating | Catholic Bible Online",
  description: "Learn the Grace Before Meals prayer to bless your food and give thanks to God. Discover different versions and the importance of praying before meals.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/grace-before-meals",
  },
  openGraph: {
    title: "Grace Before Meals – Catholic Prayer Before Eating",
    description: "Learn the Grace Before Meals prayer to bless your food and give thanks to God.",
    url: "https://www.catholicbibleonline.com/prayers/grace-before-meals",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grace Before Meals – Catholic Prayer Before Eating",
    description: "Learn the Grace Before Meals prayer to bless your food and give thanks to God.",
  },
};

export default function GraceBeforeMealsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/basic" className="hover:underline">Basic Prayers</Link> &gt; 
        Grace Before Meals
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🍽️ Grace Before Meals – Catholic Prayer Before Eating</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        Grace Before Meals is a beautiful tradition that reminds us to give thanks to God for the gift of food 
        and to ask His blessing on our meal. This simple prayer helps us recognize that all good things come 
        from God and teaches us gratitude for His daily provision.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Traditional Grace Before Meals</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">Bless us, O Lord, and these Thy gifts, which we are about to receive from Thy bounty, through Christ our Lord.</p>
          
          <p className="font-semibold">Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alternative Versions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Simple Version</h3>
          <div className="text-gray-800">
            <p className="mb-2">Bless us, O Lord, and these Thy gifts which we are about to receive from Thy bounty. Amen.</p>
          </div>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Family Version</h3>
          <div className="text-gray-800">
            <p className="mb-2">Come, Lord Jesus, be our guest, and let this food to us be blessed. Amen.</p>
          </div>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Biblical Version</h3>
          <div className="text-gray-800">
            <p className="mb-2">For what we are about to receive, may the Lord make us truly thankful. Amen.</p>
          </div>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Modern Version</h3>
          <div className="text-gray-800">
            <p className="mb-2">Thank You, God, for this food. Bless it to our use and us to Your service. Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Grace After Meals</h2>
      
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">We give You thanks, almighty God, for all Your benefits, who live and reign for ever and ever.</p>
          
          <p className="font-semibold">Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Purpose</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          Grace Before Meals serves several important spiritual purposes:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Gratitude</strong> - Acknowledging that all good things come from God</li>
          <li>• <strong>Blessing</strong> - Asking God to bless the food and those who prepared it</li>
          <li>• <strong>Recognition</strong> - Remembering that food is a gift, not something we deserve</li>
          <li>• <strong>Unity</strong> - Bringing family and friends together in prayer</li>
          <li>• <strong>Witness</strong> - Showing others the importance of thanking God</li>
          <li>• <strong>Discipline</strong> - Teaching self-control and patience before eating</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          This simple prayer helps us maintain a grateful heart and keeps us mindful of God's constant care 
          and provision in our lives.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Say Grace</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Before every meal</strong> - Breakfast, lunch, and dinner</li>
          <li>• <strong>Before snacks</strong> - Even small amounts of food</li>
          <li>• <strong>In restaurants</strong> - Even when dining out</li>
          <li>• <strong>At family gatherings</strong> - Special occasions and holidays</li>
          <li>• <strong>When eating alone</strong> - Don't skip grace just because you're alone</li>
          <li>• <strong>At work or school</strong> - Even in public settings</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Grateful Heart</h3>
          <p className="text-gray-700 text-sm">
            Regular thanksgiving helps develop a grateful and content heart.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Family Unity</h3>
          <p className="text-gray-700 text-sm">
            Praying together strengthens family bonds and creates lasting memories.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Witness to Others</h3>
          <p className="text-gray-700 text-sm">
            Saying grace in public can be a gentle witness to your faith.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Mindful Eating</h3>
          <p className="text-gray-700 text-sm">
            Taking a moment to pray helps you eat more mindfully and healthily.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The practice of saying grace is deeply rooted in Scripture:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Matthew 14:19</strong> - Jesus "took the five loaves and the two fish, and looking up to heaven, he said the blessing"</li>
          <li>• <strong>Luke 24:30</strong> - "He took bread, said the blessing, broke it, and gave it to them"</li>
          <li>• <strong>1 Timothy 4:4-5</strong> - "Everything created by God is good, and nothing is to be rejected when received with thanksgiving, for it is made holy by the invocation of God"</li>
          <li>• <strong>Psalm 145:15-16</strong> - "The eyes of all look hopefully to you, and you give them their food in due season"</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          Jesus Himself gave us the example of giving thanks before meals, and the early Christians continued 
          this practice as a way to acknowledge God's provision and care.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Saying Grace</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Make it a habit</strong> - Say grace before every meal, no matter how small</li>
          <li>• <strong>Keep it simple</strong> - Use a short, easy-to-remember prayer</li>
          <li>• <strong>Include everyone</strong> - Invite family and guests to join in</li>
          <li>• <strong>Be respectful</strong> - In public, you can say grace quietly or make the sign of the cross</li>
          <li>• <strong>Teach children</strong> - Help children learn to say grace from an early age</li>
          <li>• <strong>Vary the prayer</strong> - Use different versions to keep it meaningful</li>
          <li>• <strong>Add intentions</strong> - Include special prayers for those in need</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Grace in Different Situations</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          Here are some suggestions for saying grace in different situations:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>At home</strong> - Use the traditional prayer and make the sign of the cross</li>
          <li>• <strong>In restaurants</strong> - Say a quiet prayer or make the sign of the cross discreetly</li>
          <li>• <strong>With non-Catholic friends</strong> - Use a simple, inclusive prayer</li>
          <li>• <strong>At work</strong> - Say a silent prayer before eating</li>
          <li>• <strong>On special occasions</strong> - Add special intentions for the occasion</li>
          <li>• <strong>When eating alone</strong> - Don't skip grace - it's still important</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          Remember that saying grace is not about being perfect or formal, but about acknowledging God's 
          goodness and giving thanks for His gifts.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          
          <Link href="/prayers/family" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Family Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Family Prayers
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prayers for families and children, including meal prayers.
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