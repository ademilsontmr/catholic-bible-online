import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Way of the Cross – Traditional Devotion Following Jesus' Journey | Catholic Bible Online",
  description: "Complete Way of the Cross devotion with traditional prayers and meditations. Follow Jesus' final journey to Calvary with this powerful devotion.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/way-cross",
  },
  openGraph: {
    title: "Way of the Cross – Traditional Devotion Following Jesus' Journey",
    description: "Complete Way of the Cross devotion with traditional prayers and meditations.",
    url: "https://www.catholicbibleonline.com/prayers/way-cross",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Way of the Cross – Traditional Devotion Following Jesus' Journey",
    description: "Complete Way of the Cross devotion with traditional prayers and meditations.",
  },
};

export default function WayCrossPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/devotional" className="hover:underline">Devotional</Link> &gt; 
        Way of the Cross
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🛤️ Way of the Cross</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Way of the Cross is a traditional Catholic devotion that follows Jesus' final journey from Pilate's 
        judgment hall to His crucifixion and burial. This devotion helps us to meditate on Christ's passion 
        and to unite our sufferings with His for the salvation of souls.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Opening Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus Christ, as I begin this Way of the Cross with You,
          </p>
          <p className="mb-4">
            help me to understand the depth of Your love for me.
          </p>
          <p className="mb-4">
            May Your passion and death inspire me to carry my own crosses with courage and faith.
          </p>
          <p className="mb-4">
            Help me to remember that through Your Resurrection, You have conquered sin and death.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Fourteen Stations</h2>
      
      <div className="space-y-6 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-red-900 mb-3">First Station: Jesus is Condemned to Death</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>We adore You, O Christ, and we bless You.</strong><br/>
            Because by Your holy cross You have redeemed the world.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Jesus, though innocent, was condemned to death by Pontius Pilate. Help me to accept unjust suffering with patience and to trust in Your justice.
          </p>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-orange-900 mb-3">Second Station: Jesus Carries His Cross</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>We adore You, O Christ, and we bless You.</strong><br/>
            Because by Your holy cross You have redeemed the world.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Jesus willingly took up His cross and began the journey to Calvary. Help me to accept the crosses in my life with love and to follow You faithfully.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-yellow-900 mb-3">Third Station: Jesus Falls the First Time</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>We adore You, O Christ, and we bless You.</strong><br/>
            Because by Your holy cross You have redeemed the world.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Jesus fell under the weight of the cross. Help me to get up when I fall and to persevere in my journey of faith.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-green-900 mb-3">Fourth Station: Jesus Meets His Mother</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>We adore You, O Christ, and we bless You.</strong><br/>
            Because by Your holy cross You have redeemed the world.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Jesus and Mary shared in each other's suffering. Help me to comfort those who are suffering and to accept comfort from others.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Fifth Station: Simon Helps Jesus Carry the Cross</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>We adore You, O Christ, and we bless You.</strong><br/>
            Because by Your holy cross You have redeemed the world.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Simon of Cyrene was forced to help Jesus carry the cross. Help me to willingly help others and to see Christ in those who are suffering.
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-900 mb-3">Sixth Station: Veronica Wipes the Face of Jesus</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>We adore You, O Christ, and we bless You.</strong><br/>
            Because by Your holy cross You have redeemed the world.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Veronica showed compassion to Jesus by wiping His face. Help me to show kindness to others and to see Your face in everyone I meet.
          </p>
        </div>

        <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-pink-900 mb-3">Seventh Station: Jesus Falls the Second Time</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>We adore You, O Christ, and we bless You.</strong><br/>
            Because by Your holy cross You have redeemed the world.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Jesus fell again, showing His human weakness. Help me to be patient with my own weaknesses and to trust in Your strength.
          </p>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-indigo-900 mb-3">Eighth Station: Jesus Meets the Women of Jerusalem</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>We adore You, O Christ, and we bless You.</strong><br/>
            Because by Your holy cross You have redeemed the world.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Jesus comforted the weeping women of Jerusalem. Help me to comfort those who mourn and to bring hope to those who are sad.
          </p>
        </div>

        <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-teal-900 mb-3">Ninth Station: Jesus Falls the Third Time</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>We adore You, O Christ, and we bless You.</strong><br/>
            Because by Your holy cross You have redeemed the world.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Jesus fell a third time, completely exhausted. Help me to persevere even when I feel completely overwhelmed.
          </p>
        </div>

        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-cyan-900 mb-3">Tenth Station: Jesus is Stripped of His Garments</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>We adore You, O Christ, and we bless You.</strong><br/>
            Because by Your holy cross You have redeemed the world.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Jesus was stripped of everything before being crucified. Help me to let go of my attachments and to trust in You alone.
          </p>
        </div>

        <div className="bg-lime-50 border border-lime-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-lime-900 mb-3">Eleventh Station: Jesus is Nailed to the Cross</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>We adore You, O Christ, and we bless You.</strong><br/>
            Because by Your holy cross You have redeemed the world.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Jesus was nailed to the cross. Help me to unite my sufferings with Yours and to offer them for the salvation of souls.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-amber-900 mb-3">Twelfth Station: Jesus Dies on the Cross</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>We adore You, O Christ, and we bless You.</strong><br/>
            Because by Your holy cross You have redeemed the world.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Jesus gave up His life for us on the cross. Help me to die to myself and to live for You and others.
          </p>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-emerald-900 mb-3">Thirteenth Station: Jesus is Taken Down from the Cross</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>We adore You, O Christ, and we bless You.</strong><br/>
            Because by Your holy cross You have redeemed the world.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Jesus was taken down from the cross and placed in His mother's arms. Help me to comfort those who are grieving and to be a source of peace.
          </p>
        </div>

        <div className="bg-rose-50 border border-rose-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-rose-900 mb-3">Fourteenth Station: Jesus is Laid in the Tomb</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>We adore You, O Christ, and we bless You.</strong><br/>
            Because by Your holy cross You have redeemed the world.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Jesus was buried in the tomb. Help me to trust that after every death comes new life, and that You will raise me up.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Closing Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus Christ, thank You for allowing me to walk with You through the Way of the Cross.
          </p>
          <p className="mb-4">
            Help me to remember that Your suffering was not in vain, but was the means by which You won our salvation.
          </p>
          <p className="mb-4">
            May Your passion and death inspire me to love You more and to serve others with greater generosity.
          </p>
          <p className="mb-4">
            Help me to trust in Your promise of resurrection and to live with hope in eternal life.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Way of the Cross</h2>
      
      <div className="space-y-4 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-red-900 mb-2">Lent and Holy Week</h3>
          <p className="text-gray-800">
            The Way of the Cross is traditionally prayed during Lent, especially on Fridays, and throughout Holy Week.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Fridays Throughout the Year</h3>
          <p className="text-gray-800">
            Many parishes offer the Way of the Cross every Friday as a way to honor Christ's passion.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-900 mb-2">Personal Devotion</h3>
          <p className="text-gray-800">
            You can pray the Way of the Cross privately at any time, especially when you need strength to carry your own crosses.
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">Times of Suffering</h3>
          <p className="text-gray-800">
            The Way of the Cross is particularly meaningful when you or someone you love is experiencing suffering or difficulty.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Way of the Cross is more than just a historical remembrance of Jesus' passion. It is a spiritual journey 
          that allows us to enter into the mystery of Christ's suffering and to unite our own sufferings with His.
        </p>
        
        <p className="text-gray-700 mb-4">
          As we walk with Jesus through each station, we learn important spiritual lessons: the value of suffering, 
          the importance of helping others, the need for perseverance, and the power of love over death.
        </p>
        
        <p className="text-gray-700 mb-6">
          This devotion helps us to understand that our own crosses, no matter how heavy they may seem, 
          can be transformed by Christ's love and can become a means of grace for ourselves and others. 
          Through the Way of the Cross, we learn to carry our crosses with courage and to trust in God's plan.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/stations-cross" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Devotional
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Stations of the Cross
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Meditation on Christ's passion and death through the fourteen stations.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/holy-week-prayers" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Seasonal
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Holy Week Prayers
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prayers for the most sacred week of the year, leading to Easter.
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
            title="Way Cross" 
            url="/prayers/way-cross"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section></section>
    </main>
  );
} 