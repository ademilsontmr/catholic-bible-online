import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "All Souls Day Prayers – Praying for the Faithful Departed | Catholic Bible Online",
  description: "Beautiful prayers for All Souls Day to pray for the faithful departed. Discover traditional and contemporary prayers for the souls in purgatory.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/all-souls-prayers",
  },
  openGraph: {
    title: "All Souls Day Prayers – Praying for the Faithful Departed",
    description: "Beautiful prayers for All Souls Day to pray for the faithful departed.",
    url: "https://www.catholicbibleonline.com/prayers/all-souls-prayers",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Souls Day Prayers – Praying for the Faithful Departed",
    description: "Beautiful prayers for All Souls Day to pray for the faithful departed.",
  },
};

export default function AllSoulsPrayersPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/seasonal" className="hover:underline">Seasonal</Link> &gt; 
        All Souls Day Prayers
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🕯️ All Souls Day Prayers</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        All Souls Day is a time to remember and pray for all the faithful departed, especially those in purgatory. 
        These prayers help us to express our love for those who have gone before us and to assist them 
        on their journey to eternal life with God.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for All Souls</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Eternal rest grant unto them, O Lord, and let perpetual light shine upon them.
          </p>
          <p className="mb-4">
            May the souls of the faithful departed, through the mercy of God, rest in peace.
          </p>
          <p className="mb-4">
            Lord Jesus, we pray for all those who have died, especially our loved ones,
          </p>
          <p className="mb-4">
            that they may be purified of their sins and enter into Your eternal kingdom.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for the Souls in Purgatory</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            O Lord, who art ever merciful and bounteous with Thy gifts,
          </p>
          <p className="mb-4">
            look down upon the suffering souls in purgatory.
          </p>
          <p className="mb-4">
            Remember not their offenses and negligences, but be mindful of Thy tender mercies
          </p>
          <p className="mb-4">
            and of the merits of Jesus Christ, who has paid in full the debt of their sins.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Deceased Loved Ones</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, I pray for [name of deceased], who has gone before me in faith.
          </p>
          <p className="mb-4">
            I thank You for the gift of their life and for all the love and joy they brought to my life.
          </p>
          <p className="mb-4">
            Please welcome them into Your kingdom and grant them eternal rest and peace.
          </p>
          <p className="mb-4">
            Help me to trust in Your mercy and to find comfort in the hope of the resurrection.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayers for Different Intentions</h2>
      
      <div className="space-y-6 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Prayer for Family Members</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord Jesus, I pray for all my deceased family members, especially my parents, grandparents, 
            and other relatives who have gone before me. May they rest in Your peace and may their souls 
            be purified and welcomed into Your eternal kingdom.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-green-900 mb-3">Prayer for Friends</h3>
          <p className="text-gray-800 leading-relaxed">
            Heavenly Father, I remember before You all my friends who have died. Thank You for the gift 
            of their friendship and for the joy they brought to my life. Please grant them eternal rest 
            and may they know the fullness of Your love and mercy.
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-900 mb-3">Prayer for Those Who Died Alone</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord Jesus, I pray for all those who died alone, without the comfort of family or friends. 
            May they find comfort in Your presence and may Your angels guide them to eternal peace. 
            Grant them the mercy and love they may not have experienced in this life.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-red-900 mb-3">Prayer for Victims of Violence</h3>
          <p className="text-gray-800 leading-relaxed">
            Merciful God, I pray for all those who have died as victims of violence, war, or injustice. 
            May they find peace in Your loving embrace and may their suffering be transformed into glory. 
            Help us to work for peace and justice in our world.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-yellow-900 mb-3">Prayer for Those Who Died Suddenly</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord Jesus, I pray for all those who died suddenly and unexpectedly. Comfort their families 
            and friends in their grief and help them to trust in Your divine providence. May the souls 
            of the departed find rest in Your mercy.
          </p>
        </div>

        <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-pink-900 mb-3">Prayer for All the Faithful Departed</h3>
          <p className="text-gray-800 leading-relaxed">
            Almighty and merciful God, I pray for all the faithful departed, especially those who have no one 
            to pray for them. May they be purified of their sins and enter into the joy of Your kingdom. 
            Grant them eternal rest and let perpetual light shine upon them.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for the Dying</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, I pray for all those who are dying today.
          </p>
          <p className="mb-4">
            Be with them in their final moments and grant them the grace of a holy death.
          </p>
          <p className="mb-4">
            May they be comforted by Your presence and may they trust in Your mercy.
          </p>
          <p className="mb-4">
            Help them to surrender their lives into Your loving hands.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">All Souls Day Blessing Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            May the souls of all the faithful departed rest in peace.
          </p>
          <p className="mb-4">
            May they be purified of their sins and enter into the joy of God's kingdom.
          </p>
          <p className="mb-4">
            May we who remain on earth be comforted in our grief and strengthened in our faith.
          </p>
          <p className="mb-4">
            And may the blessing of Almighty God, Father, Son, and Holy Spirit,
          </p>
          <p className="mb-4">
            descend upon you and remain with you always.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          All Souls Day reminds us of the reality of death and the hope of eternal life. It teaches us 
          that death is not the end, but a transition to a new life with God. Through our prayers, 
          we can help the souls in purgatory to be purified and to enter into the fullness of God's presence.
        </p>
        
        <p className="text-gray-700 mb-4">
          The doctrine of purgatory is a beautiful expression of God's mercy. It teaches us that even after death, 
          God continues to work for our salvation, purifying us of our sins so that we may be worthy to enter heaven. 
          Our prayers for the dead are acts of love and charity that can help them on their journey to eternal life.
        </p>
        
        <p className="text-gray-700 mb-6">
          These All Souls Day prayers help us to remember our loved ones who have died and to express our love 
          for them through prayer. They also remind us of our own mortality and the importance of living a holy life. 
          Through these prayers, we can grow in our understanding of the communion of saints and in our hope for eternal life.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/all-saints-prayers" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Seasonal
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  All Saints Day Prayers
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Honor all the saints in heaven with these beautiful All Saints Day prayers.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/our-father" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Our Father
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The prayer that Jesus taught us, perfect for praying for the faithful departed.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/hail-mary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Marian Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Hail Mary
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Ask for the intercession of the Blessed Virgin Mary for the souls in purgatory.
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
            title="All Souls Prayers" 
            url="/prayers/all-souls-prayers"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section></section>
    </main>
  );
} 