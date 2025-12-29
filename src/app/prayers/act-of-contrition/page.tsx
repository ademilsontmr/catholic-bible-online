import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Act of Contrition – Prayer of Repentance",
  description: "Read the full text of the Act of Contrition and learn its meaning in Catholic tradition. Discover this prayer of repentance and sorrow for sin.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/act-of-contrition",
  },
  openGraph: {
    title: "Act of Contrition – Prayer of Repentance",
    description: "Read the full text of the Act of Contrition and learn its meaning in Catholic tradition.",
    url: "https://www.catholicbibleonline.com/prayers/act-of-contrition",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Act of Contrition – Prayer of Repentance",
    description: "Read the full text of the Act of Contrition and learn its meaning in Catholic tradition.",
  },
};

export default function ActOfContritionPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; Act of Contrition
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">💔 Act of Contrition – Prayer of Repentance</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Act of Contrition is a prayer that expresses our sorrow for sin and our commitment to avoid sin in the future. 
        This prayer is essential for the Sacrament of Reconciliation (Confession) and is also used in daily prayer 
        to express our repentance and desire for God's mercy. It helps us to examine our conscience and turn back to God 
        with a contrite heart.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Full Text of the Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            O my God, I am heartily sorry for having offended Thee, and I detest all my sins because of thy just punishments, 
            but most of all because they offend Thee, my God, who art all good and deserving of all my love.
          </p>
          <p className="mb-4">
            I firmly resolve with the help of Thy grace to sin no more and to avoid the near occasion of sin.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alternative Version</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            My God, I am sorry for my sins with all my heart. In choosing to do wrong and failing to do good, 
            I have sinned against You whom I should love above all things.
          </p>
          <p className="mb-4">
            I firmly intend, with Your help, to do penance, to sin no more, and to avoid whatever leads me to sin.
          </p>
          <p className="mb-4">
            Our Savior Jesus Christ suffered and died for us. In His name, my God, have mercy.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Act of Contrition is more than just a prayer—it's an expression of our heart's true sorrow for sin. 
          When we pray this prayer sincerely, we acknowledge that we have offended God, not just broken rules or 
          hurt others, but have wounded our relationship with the One who loves us most.
        </p>
        
        <p className="text-gray-700 mb-4">
          The prayer has three essential elements: sorrow for sin, resolution to avoid sin, and trust in God's mercy. 
          True contrition comes from love of God rather than fear of punishment. We are sorry not just because we 
          might be punished, but because our sins offend the God who is "all good and deserving of all my love."
        </p>
        
        <p className="text-gray-700 mb-6">
          The prayer also includes a firm resolution to avoid sin in the future. This doesn't mean we will never sin again, 
          but it shows our sincere intention to cooperate with God's grace to grow in holiness. We ask for God's help 
          because we know we cannot overcome sin on our own.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Act of Contrition</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Sacrament of Reconciliation:</strong> During Confession, before receiving absolution</li>
          <li>• <strong>Daily Examination of Conscience:</strong> As part of evening prayer</li>
          <li>• <strong>When You Fall into Sin:</strong> Immediately after committing a sin</li>
          <li>• <strong>Before Receiving Communion:</strong> If you cannot go to Confession</li>
          <li>• <strong>Times of Spiritual Struggle:</strong> When you feel distant from God</li>
          <li>• <strong>Preparation for Important Events:</strong> To purify your heart</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Elements of True Contrition</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Perfect Contrition</h3>
        <p className="text-gray-700 mb-3">
          Sorrow that comes from love of God. We are sorry because our sins offend God, who is all good and deserving of all our love.
        </p>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Imperfect Contrition</h3>
        <p className="text-gray-700 mb-3">
          Sorrow that comes from fear of God's punishment or the ugliness of sin. While less perfect, it is still valid and can lead to forgiveness.
        </p>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Firm Resolution</h3>
        <p className="text-gray-700 mb-3">
          A sincere intention to avoid sin and the occasions that lead to sin, with trust in God's grace to help us.
        </p>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Trust in God's Mercy</h3>
        <p className="text-gray-700">
          Confidence that God will forgive us when we are truly sorry, because He is merciful and loving.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
        <p className="text-gray-700 mb-3">
          The Act of Contrition is rooted in several biblical passages that speak of repentance and God's mercy:
        </p>
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Psalm 51:</strong> "Create in me a clean heart, O God, and renew a right spirit within me."</li>
          <li>• <strong>Luke 15:</strong> The parable of the Prodigal Son shows true contrition and God's forgiveness</li>
          <li>• <strong>1 John 1:9:</strong> "If we confess our sins, he is faithful and just to forgive us our sins."</li>
          <li>• <strong>Psalm 34:18:</strong> "The Lord is near to the brokenhearted and saves the crushed in spirit."</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray with Sincerity</h2>
      
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
        <ol className="text-gray-700 space-y-3">
          <li><strong>1. Examine Your Conscience:</strong> Take time to reflect on your thoughts, words, and actions</li>
          <li><strong>2. Acknowledge Your Sins:</strong> Be honest about what you have done wrong</li>
          <li><strong>3. Feel True Sorrow:</strong> Let your heart be moved by love for God</li>
          <li><strong>4. Make a Resolution:</strong> Decide to avoid sin and its occasions</li>
          <li><strong>5. Trust in God's Mercy:</strong> Believe that God will forgive you</li>
          <li><strong>6. Pray the Act of Contrition:</strong> Express your sorrow and resolution</li>
        </ol>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  The Lord's Prayer, which includes "forgive us our trespasses."
                </p>
              </div>
            </div>
          </Link>

          <Link href="/prayers/glory-be" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Glory Be
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The ancient doxology that honors the Holy Trinity.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/prayers/prayer-to-st-michael" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Saints Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Prayer to St. Michael
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Powerful prayer for protection against evil and temptation.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/prayers"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          ← Back to All Prayers
        </Link>
      </div>
    </main>
  );
} 