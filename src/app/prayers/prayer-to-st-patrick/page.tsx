import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prayer to St. Patrick | Catholic Bible Online",
  description: "Learn the prayer to St. Patrick, the patron saint of Ireland. Discover his missionary work and powerful intercession in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-to-st-patrick",
  },
  openGraph: {
    title: "Prayer to St. Patrick",
    description: "Learn the prayer to St. Patrick, the patron saint of Ireland.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-to-st-patrick",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer to St. Patrick",
    description: "Learn the prayer to St. Patrick, the patron saint of Ireland.",
  },
};

export default function PrayerToStPatrickPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/saints" className="hover:underline">Saints Prayers</Link> &gt; 
        Prayer to St. Patrick
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">☘️ Prayer to St. Patrick</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The prayer to St. Patrick honors the beloved patron saint of Ireland and one of the most famous missionaries in Christian history. 
        St. Patrick was a Romano-British Christian missionary and bishop who is credited with bringing Christianity to Ireland. 
        This prayer seeks his intercession for Ireland, missionaries, and all who invoke his powerful help.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer to St. Patrick</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O glorious St. Patrick,</p>
            <p className="mb-2">bishop and confessor,</p>
            <p className="mb-2">who didst become the apostle of Ireland,</p>
            <p className="mb-2">and didst convert innumerable multitudes</p>
            <p className="mb-2">to the Catholic faith,</p>
            <p className="mb-2">obtain for me the grace to walk</p>
            <p className="mb-2">in the footsteps of Jesus Christ,</p>
            <p className="mb-2">and to persevere in the practice of virtue</p>
            <p className="mb-2">until the end of my life.</p>
            <p className="mb-2">O most holy patron of Ireland,</p>
            <p className="mb-2">pray for me and for all the faithful,</p>
            <p className="mb-2">that we may be worthy to obtain</p>
            <p className="mb-2">the promises of our Lord Jesus Christ.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">St. Patrick,</p>
            <p className="mb-2">patron of Ireland,</p>
            <p className="mb-2">pray for us and help us</p>
            <p className="mb-2">to spread the Gospel</p>
            <p className="mb-2">with courage and love.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">St. Patrick's Breastplate</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">Christ be with me, Christ within me,</p>
            <p className="mb-2">Christ behind me, Christ before me,</p>
            <p className="mb-2">Christ beside me, Christ to win me,</p>
            <p className="mb-2">Christ to comfort and restore me.</p>
            <p className="mb-2">Christ beneath me, Christ above me,</p>
            <p className="mb-2">Christ in quiet, Christ in danger,</p>
            <p className="mb-2">Christ in hearts of all that love me,</p>
            <p className="mb-2">Christ in mouth of friend and stranger.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray to St. Patrick</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>On March 17th</strong> - Feast day of St. Patrick</li>
          <li>• <strong>On Saturdays</strong> - Traditional day to honor St. Patrick</li>
          <li>• <strong>For Ireland</strong> - When praying for Ireland and the Irish people</li>
          <li>• <strong>For missionaries</strong> - When praying for missionary work</li>
          <li>• <strong>For snakes</strong> - When praying for protection from evil (symbolic)</li>
          <li>• <strong>For conversion</strong> - When praying for the conversion of sinners</li>
          <li>• <strong>For courage</strong> - When seeking courage to spread the Gospel</li>
          <li>• <strong>For protection</strong> - When seeking protection from harm</li>
          <li>• <strong>For faith</strong> - When praying for stronger faith</li>
          <li>• <strong>Daily devotion</strong> - As a regular prayer to St. Patrick</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">History and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Apostle of Ireland</h3>
          <p className="text-gray-700 text-sm">
            St. Patrick is credited with bringing Christianity to Ireland, converting thousands 
            and establishing the Church throughout the island.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Missionary Bishop</h3>
          <p className="text-gray-700 text-sm">
            St. Patrick was ordained a bishop and sent to Ireland as a missionary, 
            where he spent over 30 years spreading the Gospel.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Shamrock</h3>
          <p className="text-gray-700 text-sm">
            St. Patrick used the three-leafed shamrock to explain the Holy Trinity, 
            making it a symbol of both Ireland and the Catholic faith.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Confessions</h3>
          <p className="text-gray-700 text-sm">
            St. Patrick wrote his "Confessions," an autobiographical work that gives us 
            insight into his life and missionary work in Ireland.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">St. Patrick's Titles and Patronages</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Patron of Ireland</strong> - Protector of Ireland and the Irish people</li>
          <li>• <strong>Patron of Missionaries</strong> - Helper of those who spread the Gospel</li>
          <li>• <strong>Patron of Engineers</strong> - Helper of those who build and create</li>
          <li>• <strong>Patron of Fear of Snakes</strong> - Protector from fears and phobias</li>
          <li>• <strong>Apostle of Ireland</strong> - The one who brought Christianity to Ireland</li>
          <li>• <strong>Bishop and Confessor</strong> - Holy bishop who confessed the faith</li>
          <li>• <strong>Enlightener of Ireland</strong> - The one who brought light to Ireland</li>
          <li>• <strong>National Apostle</strong> - Ireland's national saint and apostle</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Lorica of St. Patrick</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">St. Patrick's Breastplate Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">I arise today</p>
            <p className="mb-2">Through a mighty strength, the invocation of the Trinity,</p>
            <p className="mb-2">Through belief in the threeness,</p>
            <p className="mb-2">Through confession of the oneness</p>
            <p className="mb-2">Of the Creator of Creation.</p>
            <p className="mb-2">I arise today</p>
            <p className="mb-2">Through the strength of Christ's birth with his baptism,</p>
            <p className="mb-2">Through the strength of his crucifixion with his burial,</p>
            <p className="mb-2">Through the strength of his resurrection with his ascension,</p>
            <p className="mb-2">Through the strength of his descent for the judgment of Doom.</p>
            <p className="mb-2">I arise today</p>
            <p className="mb-2">Through the strength of the love of Cherubim,</p>
            <p className="mb-2">In obedience of angels,</p>
            <p className="mb-2">In the service of archangels,</p>
            <p className="mb-2">In hope of resurrection to meet with reward,</p>
            <p className="mb-2">In prayers of patriarchs,</p>
            <p className="mb-2">In predictions of prophets,</p>
            <p className="mb-2">In preaching of apostles,</p>
            <p className="mb-2">In faith of confessors,</p>
            <p className="mb-2">In innocence of holy virgins,</p>
            <p className="mb-2">In deeds of righteous men.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/prayers/prayer-to-st-francis" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🐦</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Prayer to St. Francis</h3>
              <p className="text-gray-600 text-sm">Prayer to St. Francis of Assisi</p>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-to-st-anthony" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Prayer to St. Anthony</h3>
              <p className="text-gray-600 text-sm">Prayer to the finder of lost things</p>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-to-st-joseph" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🔨</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Prayer to St. Joseph</h3>
              <p className="text-gray-600 text-sm">Prayer to the foster father of Jesus</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/prayers/saints"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          ← Back to Saints Prayers
        </Link>
      </div>
    </main>
  );
} 