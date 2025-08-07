import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grace After Meals – Catholic Prayer After Eating | Catholic Bible Online",
  description: "Learn the Grace After Meals prayer to give thanks to God after eating. Discover different versions and the importance of thanksgiving after meals.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/grace-after-meals",
  },
  openGraph: {
    title: "Grace After Meals – Catholic Prayer After Eating",
    description: "Learn the Grace After Meals prayer to give thanks to God after eating.",
    url: "https://www.catholicbibleonline.com/prayers/grace-after-meals",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grace After Meals – Catholic Prayer After Eating",
    description: "Learn the Grace After Meals prayer to give thanks to God after eating.",
  },
};

export default function GraceAfterMealsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/basic" className="hover:underline">Basic Prayers</Link> &gt; 
        Grace After Meals
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🙏 Grace After Meals – Catholic Prayer After Eating</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        Grace After Meals is a beautiful tradition that teaches us to give thanks to God after we have eaten. 
        This prayer helps us recognize that our nourishment comes from God and reminds us to be grateful for 
        His provision. It completes the cycle of thanksgiving that begins with Grace Before Meals.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Traditional Grace After Meals</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">We give You thanks, almighty God, for all Your benefits, who live and reign for ever and ever.</p>
          
          <p className="font-semibold">Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alternative Versions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Simple Version</h3>
          <div className="text-gray-800">
            <p className="mb-2">Thank You, God, for this food. Amen.</p>
          </div>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Family Version</h3>
          <div className="text-gray-800">
            <p className="mb-2">Thank You, Lord, for this good food. Bless those who prepared it and those who are hungry. Amen.</p>
          </div>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Biblical Version</h3>
          <div className="text-gray-800">
            <p className="mb-2">Blessed be God, who gives us this food to strengthen our bodies. Amen.</p>
          </div>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Modern Version</h3>
          <div className="text-gray-800">
            <p className="mb-2">Thank You, God, for this meal and for all Your blessings. Help us to share with those in need. Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Purpose</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          Grace After Meals serves several important spiritual purposes:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Gratitude</strong> - Expressing thanks to God for the gift of food and nourishment</li>
          <li>• <strong>Completion</strong> - Completing the cycle of thanksgiving that began before the meal</li>
          <li>• <strong>Recognition</strong> - Acknowledging that all good things come from God</li>
          <li>• <strong>Mindfulness</strong> - Being mindful of God's constant care and provision</li>
          <li>• <strong>Solidarity</strong> - Remembering those who are hungry and in need</li>
          <li>• <strong>Discipline</strong> - Teaching the habit of thanksgiving in all circumstances</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          This prayer helps us maintain a grateful heart and reminds us that every meal is a gift from God 
          that should be received with thanksgiving.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Say Grace After Meals</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>After every meal</strong> - Breakfast, lunch, and dinner</li>
          <li>• <strong>After snacks</strong> - Even small amounts of food</li>
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
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Complete Cycle</h3>
          <p className="text-gray-700 text-sm">
            Completes the prayer cycle that began with Grace Before Meals.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Mindful Living</h3>
          <p className="text-gray-700 text-sm">
            Helps you live more mindfully and appreciate God's gifts.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Solidarity</h3>
          <p className="text-gray-700 text-sm">
            Reminds you to pray for and help those who are hungry.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The practice of giving thanks after meals is deeply rooted in Scripture:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>1 Thessalonians 5:18</strong> - "Give thanks in all circumstances"</li>
          <li>• <strong>Psalm 107:1</strong> - "Give thanks to the Lord, for he is good"</li>
          <li>• <strong>Colossians 3:17</strong> - "Whatever you do, do everything in the name of the Lord Jesus, giving thanks"</li>
          <li>• <strong>Luke 24:30</strong> - Jesus gave thanks after breaking bread with His disciples</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          The Bible teaches us to be grateful in all circumstances and to recognize that every good gift 
          comes from God.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Saying Grace After Meals</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Make it a habit</strong> - Say grace after every meal, no matter how small</li>
          <li>• <strong>Keep it simple</strong> - Use a short, easy-to-remember prayer</li>
          <li>• <strong>Include everyone</strong> - Invite family and guests to join in</li>
          <li>• <strong>Be respectful</strong> - In public, you can say grace quietly</li>
          <li>• <strong>Teach children</strong> - Help children learn to say grace from an early age</li>
          <li>• <strong>Vary the prayer</strong> - Use different versions to keep it meaningful</li>
          <li>• <strong>Add intentions</strong> - Include prayers for those who are hungry</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Grace After Meals in Different Situations</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          Here are some suggestions for saying Grace After Meals in different situations:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>At home</strong> - Use the traditional prayer and make the sign of the cross</li>
          <li>• <strong>In restaurants</strong> - Say a quiet prayer or make the sign of the cross discreetly</li>
          <li>• <strong>With non-Catholic friends</strong> - Use a simple, inclusive prayer</li>
          <li>• <strong>At work</strong> - Say a silent prayer after eating</li>
          <li>• <strong>On special occasions</strong> - Add special intentions for the occasion</li>
          <li>• <strong>When eating alone</strong> - Don't skip grace - it's still important</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          Remember that saying Grace After Meals is not about being perfect or formal, but about acknowledging 
          God's goodness and giving thanks for His gifts.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/grace-before-meals" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Grace Before Meals
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prayer to bless your food and give thanks before eating.
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