import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Acts of Faith, Hope, and Love – Catholic Theological Virtues | Catholic Bible Online",
  description: "Learn the Acts of Faith, Hope, and Love prayers. These three fundamental theological virtues are essential for the Christian life and spiritual growth.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/acts-of-faith-hope-love",
  },
  openGraph: {
    title: "Acts of Faith, Hope, and Love – Catholic Theological Virtues",
    description: "Learn the Acts of Faith, Hope, and Love prayers. These three fundamental theological virtues are essential for the Christian life.",
    url: "https://www.catholicbibleonline.com/prayers/acts-of-faith-hope-love",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acts of Faith, Hope, and Love – Catholic Theological Virtues",
    description: "Learn the Acts of Faith, Hope, and Love prayers. These three fundamental theological virtues are essential for the Christian life.",
  },
};

export default function ActsOfFaithHopeLovePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/basic" className="hover:underline">Basic Prayers</Link> &gt; 
        Acts of Faith, Hope, and Love
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">❤️ Acts of Faith, Hope, and Love – Catholic Theological Virtues</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Acts of Faith, Hope, and Love are three fundamental prayers that express the theological virtues 
        infused in our souls at baptism. These virtues are the foundation of the Christian life and help us 
        grow in our relationship with God. By praying these acts regularly, we strengthen our faith, 
        maintain hope in God's promises, and grow in love for Him and our neighbor.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Act of Faith</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">O my God, I firmly believe that You are one God in three divine Persons, Father, Son, and Holy Spirit.</p>
          
          <p className="mb-4">I believe that Your divine Son became man and died for our sins, and that He will come to judge the living and the dead.</p>
          
          <p className="mb-4">I believe these and all the truths which the Holy Catholic Church teaches, because You have revealed them, who can neither deceive nor be deceived.</p>
          
          <p className="font-semibold">Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Act of Hope</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">O my God, relying on Your almighty power and infinite mercy and promises, I hope to obtain pardon of my sins, the help of Your grace, and life everlasting, through the merits of Jesus Christ, my Lord and Redeemer.</p>
          
          <p className="font-semibold">Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Act of Love (Charity)</h2>
      
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">O my God, I love You above all things, with my whole heart and soul, because You are all-good and worthy of all love.</p>
          
          <p className="mb-4">I love my neighbor as myself for the love of You.</p>
          
          <p className="mb-4">I forgive all who have injured me and ask pardon of all whom I have injured.</p>
          
          <p className="font-semibold">Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alternative Shorter Versions</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Act of Faith (Short)</h3>
          <div className="text-gray-800">
            <p className="mb-2">My God, I believe in You and all that Your Church teaches, because You have said it, and Your word is true.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Act of Hope (Short)</h3>
          <div className="text-gray-800">
            <p className="mb-2">My God, I hope in You for grace and for glory, because of Your promises, Your mercy, and Your power.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Act of Love (Short)</h3>
          <div className="text-gray-800">
            <p className="mb-2">My God, I love You with my whole heart and above all things, because You are the supreme good and worthy of all my love.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Purpose</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Acts of Faith, Hope, and Love are expressions of the three theological virtues that are 
          infused into our souls at baptism. These virtues are called "theological" because they relate 
          directly to God and are the foundation of the Christian life:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Faith</strong> - Enables us to believe in God and all that He has revealed</li>
          <li>• <strong>Hope</strong> - Enables us to trust in God's promises and rely on His help</li>
          <li>• <strong>Love (Charity)</strong> - Enables us to love God above all things and our neighbor as ourselves</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          These acts help us to consciously exercise these virtues and grow in our relationship with God. 
          They are particularly useful for renewing our baptismal commitment and strengthening our spiritual life.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray These Acts</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Daily prayer</strong> - As part of your morning or evening prayer routine</li>
          <li>• <strong>Before Mass</strong> - To prepare your heart for worship</li>
          <li>• <strong>During times of doubt</strong> - To strengthen your faith</li>
          <li>• <strong>When facing difficulties</strong> - To renew your hope in God</li>
          <li>• <strong>When struggling with love</strong> - To grow in charity</li>
          <li>• <strong>On special occasions</strong> - Baptisms, confirmations, anniversaries</li>
          <li>• <strong>As a family</strong> - Pray together to strengthen family faith</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Strengthens Faith</h3>
          <p className="text-gray-700 text-sm">
            The Act of Faith helps you affirm your belief in God and His Church, especially during times of doubt.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Renews Hope</h3>
          <p className="text-gray-700 text-sm">
            The Act of Hope reminds you to trust in God's mercy and promises, even in difficult times.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Deepens Love</h3>
          <p className="text-gray-700 text-sm">
            The Act of Love helps you grow in love for God and others, and practice forgiveness.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Spiritual Growth</h3>
          <p className="text-gray-700 text-sm">
            Regular practice of these acts helps you grow in holiness and virtue.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The theological virtues are deeply rooted in Scripture:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Faith</strong> - "Faith is the assurance of things hoped for, the conviction of things not seen" (Hebrews 11:1)</li>
          <li>• <strong>Hope</strong> - "Hope does not disappoint us, because God's love has been poured into our hearts" (Romans 5:5)</li>
          <li>• <strong>Love</strong> - "So faith, hope, love abide, these three; but the greatest of these is love" (1 Corinthians 13:13)</li>
          <li>• <strong>Mark 11:22</strong> - "Have faith in God"</li>
          <li>• <strong>Psalm 39:7</strong> - "And now, Lord, for what do I wait? My hope is in you"</li>
          <li>• <strong>Matthew 22:37-39</strong> - "You shall love the Lord your God with all your heart... and your neighbor as yourself"</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          These virtues are essential for the Christian life and help us to live according to God's will.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Practice These Virtues</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          To grow in these theological virtues:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Pray the acts regularly</strong> - Make them part of your daily prayer routine</li>
          <li>• <strong>Study the faith</strong> - Read Scripture, the Catechism, and spiritual books</li>
          <li>• <strong>Trust in God</strong> - Practice relying on God in all circumstances</li>
          <li>• <strong>Practice charity</strong> - Show love to others through acts of kindness</li>
          <li>• <strong>Receive the sacraments</strong> - Especially Eucharist and Reconciliation</li>
          <li>• <strong>Seek God's will</strong> - Ask for guidance in prayer and discernment</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          Remember that these virtues are gifts from God, and we grow in them through His grace and our cooperation.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Remembering</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Pray them together</strong> - Say all three acts in sequence</li>
          <li>• <strong>Use prayer cards</strong> - Keep the text handy until you memorize them</li>
          <li>• <strong>Pray with family</strong> - Make it a family devotion</li>
          <li>• <strong>Set reminders</strong> - Include them in your daily prayer schedule</li>
          <li>• <strong>Reflect on meaning</strong> - Think about what each act means as you pray</li>
          <li>• <strong>Practice regularly</strong> - The more you pray them, the more meaningful they become</li>
          <li>• <strong>Use shorter versions</strong> - Start with the shorter versions if the longer ones seem overwhelming</li>
        </ul>
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
                  The Lord's Prayer, taught by Jesus Himself to His disciples.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/morning-offering" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Morning Offering
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prayer to consecrate your day to God and offer all your actions to Him.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/act-of-contrition" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Act of Contrition
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prayer expressing sorrow for sins and asking for God's forgiveness.
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