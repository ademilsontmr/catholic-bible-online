import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Saints Day Prayers – Honoring the Saints | Catholic Bible Online",
  description: "Beautiful prayers for All Saints Day to honor all the saints in heaven. Discover traditional and contemporary prayers to celebrate the communion of saints.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/all-saints-prayers",
  },
  openGraph: {
    title: "All Saints Day Prayers – Honoring the Saints",
    description: "Beautiful prayers for All Saints Day to honor all the saints in heaven.",
    url: "https://www.catholicbibleonline.com/prayers/all-saints-prayers",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Saints Day Prayers – Honoring the Saints",
    description: "Beautiful prayers for All Saints Day to honor all the saints in heaven.",
  },
};

export default function AllSaintsPrayersPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/seasonal" className="hover:underline">Seasonal</Link> &gt; 
        All Saints Day Prayers
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">👼 All Saints Day Prayers</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        All Saints Day celebrates the communion of saints—all those who have gone before us in faith 
        and now enjoy the beatific vision in heaven. These prayers help us to honor the saints, 
        ask for their intercession, and strive to follow their example of holiness.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer to All Saints</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            O glorious company of saints, who now rejoice in the presence of God,
          </p>
          <p className="mb-4">
            we honor you for your faithfulness and holiness of life.
          </p>
          <p className="mb-4">
            Intercede for us before the throne of God, that we may be strengthened in our faith
          </p>
          <p className="mb-4">
            and inspired by your example to live as true disciples of Christ.
          </p>
          <p className="font-semibold">
            Pray for us, that we may one day join you in the eternal joy of heaven.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for the Communion of Saints</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Almighty and eternal God, who has given us the communion of saints,
          </p>
          <p className="mb-4">
            we thank You for the example of all Your holy ones who have gone before us.
          </p>
          <p className="mb-4">
            Help us to follow their example of faith, hope, and love,
          </p>
          <p className="mb-4">
            and to be inspired by their witness to Your truth and goodness.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer to Be Like the Saints</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, help me to follow the example of Your saints,
          </p>
          <p className="mb-4">
            who loved You with all their hearts and served You with all their strength.
          </p>
          <p className="mb-4">
            Grant me the grace to imitate their virtues and to grow in holiness each day.
          </p>
          <p className="mb-4">
            May their prayers and example guide me on my journey to heaven.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayers for Different Types of Saints</h2>
      
      <div className="space-y-6 mb-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-yellow-900 mb-3">Prayer to the Martyrs</h3>
          <p className="text-gray-800 leading-relaxed">
            Holy martyrs of Christ, who gave your lives rather than deny your faith, 
            pray for us that we may have the courage to stand up for what is right 
            and to remain faithful to God even in times of difficulty and persecution.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-green-900 mb-3">Prayer to the Confessors</h3>
          <p className="text-gray-800 leading-relaxed">
            Blessed confessors, who witnessed to Christ through your holy lives and teachings, 
            pray for us that we may grow in knowledge and love of God, 
            and that we may share the truth of the Gospel with others.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Prayer to the Virgins</h3>
          <p className="text-gray-800 leading-relaxed">
            Holy virgins, who consecrated your lives to God in purity and love, 
            pray for us that we may keep our hearts pure and focused on God, 
            and that we may love Him above all things.
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-900 mb-3">Prayer to the Doctors of the Church</h3>
          <p className="text-gray-800 leading-relaxed">
            Great doctors of the Church, who enlightened the world with your wisdom and teaching, 
            pray for us that we may grow in understanding of our faith 
            and that we may be guided by the truth of God's word.
          </p>
        </div>

        <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-pink-900 mb-3">Prayer to the Founders</h3>
          <p className="text-gray-800 leading-relaxed">
            Holy founders of religious orders, who established communities to serve God and His Church, 
            pray for us that we may be inspired by your vision and zeal, 
            and that we may work together to build up the kingdom of God.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-red-900 mb-3">Prayer to the Unknown Saints</h3>
          <p className="text-gray-800 leading-relaxed">
            All you holy men and women, known and unknown, who now enjoy the glory of heaven, 
            pray for us that we may follow your example of faithfulness and love, 
            and that we may one day join you in the eternal joy of God's presence.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">All Saints Day Blessing Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            May the prayers of all the saints in heaven intercede for you and your loved ones.
          </p>
          <p className="mb-4">
            May their example inspire you to live a life of holiness and virtue.
          </p>
          <p className="mb-4">
            May you be strengthened by their witness and encouraged by their love for God.
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
          All Saints Day celebrates the communion of saints—the spiritual bond that unites all believers, 
          both living and dead, in Christ. It reminds us that we are not alone in our journey of faith, 
          but are surrounded by a great cloud of witnesses who have gone before us.
        </p>
        
        <p className="text-gray-700 mb-4">
          The saints are not distant figures from the past, but our brothers and sisters in Christ who continue 
          to intercede for us and inspire us by their example. They show us that holiness is possible for everyone 
          and that God's grace is sufficient to transform ordinary people into extraordinary witnesses of His love.
        </p>
        
        <p className="text-gray-700 mb-6">
          These All Saints Day prayers help us to honor the saints and to ask for their intercession. They remind us 
          that we are called to be saints ourselves and that we can learn from the example of those who have gone before us. 
          Through these prayers, we can grow in our appreciation of the communion of saints and in our desire to follow their example.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/all-souls-prayers" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Seasonal
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  All Souls Day Prayers
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Pray for the faithful departed with these beautiful All Souls Day prayers.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-to-st-michael" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Saints
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Prayer to St. Michael
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Seek the protection of St. Michael the Archangel with this powerful prayer.
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
      </section>
    </main>
  );
} 