import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Rosary for the Family – Family Rosary Prayers and Intentions | Catholic Bible Online",
  description: "Learn how to pray the Rosary as a family. This special devotion strengthens family bonds and brings God's grace to the home. Complete guide with family intentions.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/rosary-for-family",
  },
  openGraph: {
    title: "Rosary for the Family – Family Rosary Prayers and Intentions",
    description: "Learn how to pray the Rosary as a family to strengthen family bonds.",
    url: "https://www.catholicbibleonline.com/prayers/rosary-for-family",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rosary for the Family – Family Rosary Prayers and Intentions",
    description: "Learn how to pray the Rosary as a family to strengthen family bonds.",
  },
};

export default function RosaryForFamilyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/rosary" className="hover:underline">Rosary Prayers</Link> &gt; 
        Rosary for the Family
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">👨‍👩‍👧‍👦 Rosary for the Family – Family Rosary Prayers and Intentions</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Family Rosary is a beautiful tradition that brings families together in prayer and strengthens 
        the bonds of love and faith. This special devotion helps families grow closer to God and to each 
        other, creating a foundation of prayer that will last a lifetime. The Family Rosary is one of the 
        most powerful ways to protect and sanctify the family.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Opening Prayer for the Family</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">O Holy Family of Nazareth,</p>
          <p className="mb-4">Jesus, Mary, and Joseph,</p>
          <p className="mb-4">bless our family and make it holy like yours.</p>
          <p className="mb-4">Help us to love one another as you loved each other.</p>
          <p className="mb-4">Teach us to pray together as a family,</p>
          <p className="mb-4">and to grow in faith, hope, and love.</p>
          <p className="mb-4">May our home be a place of peace and joy,</p>
          <p className="mb-4">where God is always present and honored.</p>
          
          <p className="font-semibold">Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray the Family Rosary</h2>
      
      <div className="space-y-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Choose a Regular Time</h3>
          <div className="text-gray-700">
            <p>Set aside a specific time each day for the Family Rosary, such as after dinner or before bedtime.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Gather the Family</h3>
          <div className="text-gray-700">
            <p>Invite all family members to participate, even if they are young. Everyone can contribute in some way.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Assign Parts</h3>
          <div className="text-gray-700">
            <p>Let different family members lead different parts: one leads the Our Father, another the Hail Marys, etc.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Add Family Intentions</h3>
          <div className="text-gray-700">
            <p>Before each decade, add specific intentions for family members, needs, or special intentions.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Keep It Simple</h3>
          <div className="text-gray-700">
            <p>Start with one decade if the full Rosary seems too long, especially with young children.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Family Intentions for Each Decade</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>First Decade</strong> - For our family's health and well-being</li>
          <li>• <strong>Second Decade</strong> - For our family's spiritual growth and faith</li>
          <li>• <strong>Third Decade</strong> - For our family's unity and love for one another</li>
          <li>• <strong>Fourth Decade</strong> - For our extended family and relatives</li>
          <li>• <strong>Fifth Decade</strong> - For families in need and for the conversion of families</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Family Rosary</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Start small</strong> - Begin with one decade and gradually increase</li>
          <li>• <strong>Be patient</strong> - Young children may not sit still for long</li>
          <li>• <strong>Make it fun</strong> - Use visual aids, pictures, or let children hold the Rosary</li>
          <li>• <strong>Be consistent</strong> - Pray at the same time each day</li>
          <li>• <strong>Include everyone</strong> - Even babies can be present and blessed</li>
          <li>• <strong>Be flexible</strong> - Adapt the prayer to your family's needs</li>
          <li>• <strong>Lead by example</strong> - Show your children that prayer is important</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Family Rosary</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Daily</strong> - As a regular family prayer time</li>
          <li>• <strong>On Sundays</strong> - To mark the Lord's Day as special</li>
          <li>• <strong>On family feast days</strong> - Such as the Holy Family or family saints</li>
          <li>• <strong>Before important events</strong> - Exams, travel, or family decisions</li>
          <li>• <strong>During difficult times</strong> - Illness, financial problems, or family conflicts</li>
          <li>• <strong>On family birthdays</strong> - To give thanks for each family member</li>
          <li>• <strong>On the first Saturday</strong> - In honor of Our Lady of Fatima</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Family Unity</h3>
          <p className="text-gray-700 text-sm">
            The Family Rosary brings families together and strengthens bonds of love and faith.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Protection</h3>
          <p className="text-gray-700 text-sm">
            Families who pray the Rosary together are protected from many evils and difficulties.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Faith Formation</h3>
          <p className="text-gray-700 text-sm">
            Children learn about their faith and develop a love for prayer from an early age.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Grace and Blessings</h3>
          <p className="text-gray-700 text-sm">
            The Family Rosary brings many graces and blessings to the home and family members.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Family Rosary is deeply rooted in Scripture and Catholic tradition:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Matthew 18:20</strong> - "For where two or three are gathered in my name, there am I in the midst of them"</li>
          <li>• <strong>Deuteronomy 6:6-7</strong> - "These words which I command you this day shall be upon your heart; and you shall teach them diligently to your children"</li>
          <li>• <strong>Luke 2:51-52</strong> - Jesus grew in wisdom and grace in the Holy Family</li>
          <li>• <strong>Ephesians 6:4</strong> - "Fathers, do not provoke your children to anger, but bring them up in the discipline and instruction of the Lord"</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          The Bible teaches us that families should be places of prayer and that parents have a responsibility 
          to teach their children about God.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Special Family Prayers</h2>
      
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4"><strong>Prayer for Family Vocations:</strong></p>
          <p className="mb-4">O Lord, bless our family with vocations to the priesthood and religious life.</p>
          <p className="mb-4">Help us to be open to Your call and to support one another in following You.</p>
          
          <p className="font-semibold">Amen.</p>
          
          <p className="mt-6 mb-4"><strong>Prayer for Family Protection:</strong></p>
          <p className="mb-4">Holy Family of Nazareth, protect our family from all harm.</p>
          <p className="mb-4">Keep us safe in body and soul, and help us to grow in holiness together.</p>
          
          <p className="font-semibold">Amen.</p>
        </div>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/joyful-mysteries" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Rosary Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Joyful Mysteries
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The five Joyful Mysteries of the Rosary, prayed on Monday and Saturday.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/how-to-pray-rosary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Rosary Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  How to Pray the Rosary
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Complete step-by-step guide to praying the Rosary with all mysteries.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/rosary-for-peace" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Rosary Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Rosary for Peace
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Rosary devotion for world peace and family harmony.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/prayers/rosary"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          ← Back to Rosary Prayers
        </Link>
      </div>
    </main>
  );
} 