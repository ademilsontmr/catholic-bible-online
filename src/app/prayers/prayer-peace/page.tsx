import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prayer for Peace – Prayers for Peace in the World and Hearts | Catholic Bible Online",
  description: "Complete collection of prayers for peace in the world and in our hearts. Traditional Catholic prayers for peace and reconciliation.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-peace",
  },
  openGraph: {
    title: "Prayer for Peace – Prayers for Peace in the World and Hearts",
    description: "Complete collection of prayers for peace in the world and in our hearts.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-peace",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer for Peace – Prayers for Peace in the World and Hearts",
    description: "Complete collection of prayers for peace in the world and in our hearts.",
  },
};

export default function PrayerPeacePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/devotional" className="hover:underline">Devotional</Link> &gt; 
        Prayer for Peace
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🕊️ Prayer for Peace</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        Prayers for peace are essential in our troubled world. These prayers ask for God's peace to reign in our hearts, 
        in our families, in our communities, and throughout the world. They remind us that true peace comes from God 
        and that we are called to be instruments of His peace.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer of St. Francis</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord, make me an instrument of Your peace.
          </p>
          <p className="mb-4">
            Where there is hatred, let me sow love;
          </p>
          <p className="mb-4">
            Where there is injury, pardon;
          </p>
          <p className="mb-4">
            Where there is doubt, faith;
          </p>
          <p className="mb-4">
            Where there is despair, hope;
          </p>
          <p className="mb-4">
            Where there is darkness, light;
          </p>
          <p className="mb-4">
            Where there is sadness, joy.
          </p>
          <p className="mb-4">
            O Divine Master, grant that I may not so much seek
          </p>
          <p className="mb-4">
            To be consoled as to console,
          </p>
          <p className="mb-4">
            To be understood as to understand,
          </p>
          <p className="mb-4">
            To be loved as to love.
          </p>
          <p className="mb-4">
            For it is in giving that we receive,
          </p>
          <p className="mb-4">
            It is in pardoning that we are pardoned,
          </p>
          <p className="mb-4">
            And it is in dying that we are born to eternal life.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for World Peace</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, Prince of Peace, we pray for peace in our troubled world.
          </p>
          <p className="mb-4">
            Bring an end to war and violence, and help all nations to live in harmony and mutual respect.
          </p>
          <p className="mb-4">
            Guide our leaders to work for justice and peace, and help us all to be instruments of Your peace.
          </p>
          <p className="mb-4">
            May Your peace, which surpasses all understanding, guard our hearts and minds in Christ Jesus.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Peace in Our Hearts</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, You said, "Peace I leave with you; my peace I give to you."
          </p>
          <p className="mb-4">
            Grant me the peace that only You can give - a peace that is not of this world, 
            but a peace that comes from knowing and loving You.
          </p>
          <p className="mb-4">
            Help me to trust in Your love and to find rest in Your presence.
          </p>
          <p className="mb-4">
            May Your peace fill my heart and overflow to others around me.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Family Peace</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Heavenly Father, we pray for peace in our family.
          </p>
          <p className="mb-4">
            Help us to love one another as You have loved us, and to forgive one another as You forgive us.
          </p>
          <p className="mb-4">
            May our home be a place of peace, love, and understanding, where each member feels valued and loved.
          </p>
          <p className="mb-4">
            Help us to be patient with one another and to work together in harmony.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Peace in Times of Trouble</h2>
      
      <div className="space-y-6 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-red-900 mb-3">Prayer for Inner Peace</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord Jesus, in these troubled times, I turn to You for peace. Help me to remember that You are always with me, 
            and that nothing can separate me from Your love. Give me the strength to face each day with courage and hope, 
            knowing that You are in control. May Your peace guard my heart and mind. Amen.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Prayer for Peace in Conflict</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord Jesus, You are the Prince of Peace. Help me to be a peacemaker in times of conflict. 
            Give me the wisdom to know when to speak and when to listen, and the courage to stand up for what is right 
            while showing love and respect to others. Help me to be an instrument of Your peace in all situations. Amen.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-green-900 mb-3">Prayer for Peace in the World</h3>
          <p className="text-gray-800 leading-relaxed">
            Almighty God, we pray for peace in our world. Look with mercy upon all who are suffering from war, 
            violence, and injustice. Help us to work for peace and justice in our own lives and communities. 
            May Your peace reign in the hearts of all people, and may we all work together to build a world 
            of peace and harmony. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Reconciliation</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, You came to reconcile us to the Father and to one another.
          </p>
          <p className="mb-4">
            Help me to be reconciled with those with whom I have disagreements or conflicts.
          </p>
          <p className="mb-4">
            Give me the humility to admit my faults and the courage to forgive others.
          </p>
          <p className="mb-4">
            May Your love and peace flow through me to others, bringing healing and reconciliation.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Peace in the Church</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, You prayed that Your followers might be one as You and the Father are one.
          </p>
          <p className="mb-4">
            We pray for unity and peace in Your Church. Help us to overcome divisions and to work together 
            in love and harmony for the spread of Your Gospel.
          </p>
          <p className="mb-4">
            May Your Church be a sign of peace and reconciliation in the world.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray for Peace</h2>
      
      <div className="space-y-4 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-red-900 mb-2">Daily Prayer</h3>
          <p className="text-gray-800">
            Include prayers for peace in your daily prayer routine to cultivate inner peace.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Times of Conflict</h3>
          <p className="text-gray-800">
            Pray for peace when you are experiencing conflict or tension in relationships.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-900 mb-2">World Events</h3>
          <p className="text-gray-800">
            Pray for peace during times of war, violence, or unrest in the world.
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">Family Gatherings</h3>
          <p className="text-gray-800">
            Pray for peace before family gatherings or important meetings.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Peace in the New Year</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, as we begin this new year, we pray for Your peace to reign in our hearts and in our world.
          </p>
          <p className="mb-4">
            Help us to be instruments of Your peace, bringing love where there is hatred, 
            forgiveness where there is injury, and hope where there is despair.
          </p>
          <p className="mb-4">
            May this year be filled with Your peace and love, and may we all work together 
            to build a world of peace and harmony.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          Prayers for peace remind us that true peace comes from God and is not simply the absence of conflict, 
          but the presence of God's love and harmony in our hearts and relationships.
        </p>
        
        <p className="text-gray-700 mb-4">
          These prayers help us to be instruments of God's peace in the world, following the example of Jesus, 
          who came to bring peace and reconciliation to all people.
        </p>
        
        <p className="text-gray-700 mb-6">
          Through these prayers, we can cultivate inner peace and work for peace in our families, communities, 
          and the world. We can be peacemakers, bringing God's love and reconciliation wherever we go.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/prayer-sick" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Devotional
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Prayer for the Sick
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prayers for physical and spiritual healing.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-vocations" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Devotional
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Prayer for Vocations
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prayers for priestly and religious vocations.
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
      </section>
    </main>
  );
} 