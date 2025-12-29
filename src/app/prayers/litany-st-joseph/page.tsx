import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Litany of St. Joseph – Honoring the Foster Father of Jesus | Catholic Bible Online",
  description: "Complete Litany of St. Joseph with traditional prayers honoring the foster father of Jesus and patron of the universal Church.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/litany-st-joseph",
  },
  openGraph: {
    title: "Litany of St. Joseph – Honoring the Foster Father of Jesus",
    description: "Complete Litany of St. Joseph with traditional prayers honoring the foster father of Jesus.",
    url: "https://www.catholicbibleonline.com/prayers/litany-st-joseph",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Litany of St. Joseph – Honoring the Foster Father of Jesus",
    description: "Complete Litany of St. Joseph with traditional prayers honoring the foster father of Jesus.",
  },
};

export default function LitanyStJosephPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/devotional" className="hover:underline">Devotional</Link> &gt; 
        Litany of St. Joseph
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🔨 Litany of St. Joseph</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Litany of St. Joseph is a beautiful devotion that honors the foster father of Jesus and the husband of the Blessed Virgin Mary. 
        St. Joseph is the patron of the universal Church and a powerful intercessor for families, workers, and all who seek his protection.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Opening Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord, have mercy on us.
          </p>
          <p className="mb-4">
            Christ, have mercy on us.
          </p>
          <p className="mb-4">
            Lord, have mercy on us.
          </p>
          <p className="mb-4">
            Christ, hear us.
          </p>
          <p className="font-semibold">
            Christ, graciously hear us.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Litany</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            God the Father of heaven, <strong>have mercy on us.</strong>
          </p>
          <p className="mb-4">
            God the Son, Redeemer of the world, <strong>have mercy on us.</strong>
          </p>
          <p className="mb-4">
            God the Holy Spirit, <strong>have mercy on us.</strong>
          </p>
          <p className="mb-4">
            Holy Trinity, one God, <strong>have mercy on us.</strong>
          </p>
          <p className="mb-4">
            Holy Mary, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Saint Joseph, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Renowned offspring of David, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Light of patriarchs, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Spouse of the Mother of God, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Chaste guardian of the Virgin, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Foster father of the Son of God, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Diligent protector of Christ, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Head of the Holy Family, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Joseph most just, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Joseph most chaste, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Joseph most prudent, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Joseph most strong, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Joseph most obedient, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Joseph most faithful, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Mirror of patience, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Lover of poverty, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Model of artisans, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Glory of home life, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Guardian of virgins, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Pillar of families, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Solace of the wretched, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Hope of the sick, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Patron of the dying, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Terror of demons, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Protector of Holy Church, <strong>pray for us.</strong>
          </p>
          <p className="mb-4">
            Lamb of God, who takes away the sins of the world, <strong>spare us, O Lord.</strong>
          </p>
          <p className="mb-4">
            Lamb of God, who takes away the sins of the world, <strong>graciously hear us, O Lord.</strong>
          </p>
          <p className="mb-4">
            Lamb of God, who takes away the sins of the world, <strong>have mercy on us.</strong>
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Concluding Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            V. He made him the lord of his household.
          </p>
          <p className="mb-4">
            R. And prince over all his possessions.
          </p>
          <p className="mb-4">
            Let us pray. O God, who in your ineffable providence were pleased to choose Blessed Joseph to be the spouse of your most holy Mother, grant, we beg you, that we may be worthy to have him for our intercessor in heaven whom on earth we venerate as our Protector: You who live and reign forever and ever.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer to St. Joseph</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            O blessed Joseph, faithful guardian of my Redeemer, Jesus Christ, and foster father of the Son of God,
          </p>
          <p className="mb-4">
            I consecrate myself to your honor and give myself to you, that you may always be my father, my protector, and my guide in the way of salvation.
          </p>
          <p className="mb-4">
            Obtain for me a great purity of heart and a fervent love of the interior life.
          </p>
          <p className="mb-4">
            After your example, may I do all my actions for the greater glory of God, in union with the divine Heart of Jesus and the immaculate heart of Mary.
          </p>
          <p className="mb-4">
            And you, blessed St. Joseph, pray for me, that I may share in the peace and joy of your holy death.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Litany</h2>
      
      <div className="space-y-4 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-red-900 mb-2">Feast of St. Joseph</h3>
          <p className="text-gray-800">
            The Litany is traditionally prayed on March 19th, the Solemnity of St. Joseph, and on May 1st, the Feast of St. Joseph the Worker.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Wednesdays</h3>
          <p className="text-gray-800">
            Many Catholics pray to St. Joseph on Wednesdays, as he is honored on this day of the week.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-900 mb-2">Family Prayer</h3>
          <p className="text-gray-800">
            Use this litany as part of your family prayer routine, as St. Joseph is the patron of families.
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">Special Intentions</h3>
          <p className="text-gray-800">
            Pray this litany when you need St. Joseph's intercession for work, family matters, or protection.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">St. Joseph's Patronages</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            St. Joseph is the patron saint of:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li>The Universal Church</li>
            <li>Families and fathers</li>
            <li>Workers and laborers</li>
            <li>Carpenters and craftsmen</li>
            <li>Those seeking employment</li>
            <li>Those in financial difficulties</li>
            <li>Those selling houses or property</li>
            <li>Those who are dying</li>
            <li>Against doubt and hesitation</li>
            <li>Against communism</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          St. Joseph is a model of humility, obedience, and trust in God's plan. Though he was chosen to be the foster father 
          of Jesus and the husband of the Blessed Virgin Mary, he lived a quiet, hidden life of service and love.
        </p>
        
        <p className="text-gray-700 mb-4">
          Through this litany, we honor St. Joseph's many virtues and ask for his intercession in our lives. 
          He teaches us to trust in God's providence, to work diligently, and to care for our families with love and devotion.
        </p>
        
        <p className="text-gray-700 mb-6">
          St. Joseph is a powerful intercessor who can help us in all our needs, especially those related to work, family, 
          and our spiritual journey. Through his prayers, we can grow in holiness and draw closer to Jesus and Mary.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/litany-blessed-virgin" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Devotional
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Litany of the Blessed Virgin Mary
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Beautiful litany honoring Mary under her many titles and virtues.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/holy-family" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Devotional
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Holy Family Prayers
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prayers honoring Jesus, Mary, and Joseph as the Holy Family.
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
            title="Litany St Joseph" 
            url="/prayers/litany-st-joseph"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section></section>
    </main>
  );
} 