import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prayer to Our Lady of Guadalupe | Catholic Bible Online",
  description: "Learn the prayer to Our Lady of Guadalupe, Patroness of the Americas. Discover its history and meaning in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-guadalupe",
  },
  openGraph: {
    title: "Prayer to Our Lady of Guadalupe",
    description: "Learn the prayer to Our Lady of Guadalupe, Patroness of the Americas.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-guadalupe",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer to Our Lady of Guadalupe",
    description: "Learn the prayer to Our Lady of Guadalupe, Patroness of the Americas.",
  },
};

export default function PrayerGuadalupePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/marian" className="hover:underline">Marian Prayers</Link> &gt; 
        Prayer to Our Lady of Guadalupe
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🌺 Prayer to Our Lady of Guadalupe</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The prayer to Our Lady of Guadalupe honors the miraculous apparition of Mary to St. Juan Diego 
        in 1531. As the Patroness of the Americas, Our Lady of Guadalupe holds a special place in the 
        hearts of millions of Catholics throughout the Western Hemisphere. Her message of love, 
        compassion, and protection continues to inspire devotion today.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer to Our Lady of Guadalupe</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O Virgin of Guadalupe,</p>
            <p className="mb-2">Mother of the Americas,</p>
            <p className="mb-2">grant to our homes the grace of loving and respecting life in its beginnings,</p>
            <p className="mb-2">with the same love with which you conceived in your womb the life of the Son of God.</p>
            <p className="mb-2">Blessed Virgin Mary,</p>
            <p className="mb-2">Mother of Fair Love,</p>
            <p className="mb-2">protect our families so that they may always be united</p>
            <p className="mb-2">and bless the upbringing of our children.</p>
            <p className="mb-2">Our hope, look upon us with compassion,</p>
            <p className="mb-2">teach us to go continually to Jesus,</p>
            <p className="mb-2">and if we fall, help us to rise again, to return to Him,</p>
            <p className="mb-2">by means of the confession of our faults and sins</p>
            <p className="mb-2">in the Sacrament of Penance,</p>
            <p className="mb-2">which gives peace to the soul.</p>
            <p className="mb-2">We beg you to grant us a great love</p>
            <p className="mb-2">for all the holy Sacraments,</p>
            <p className="mb-2">which are, as it were, the signs that your Son left us on earth.</p>
            <p className="mb-2">Thus, Most Holy Mother,</p>
            <p className="mb-2">with the peace of God in our conscience,</p>
            <p className="mb-2">with our hearts free from evil and hatred,</p>
            <p className="mb-2">we will be able to bring to all true joy and true peace,</p>
            <p className="mb-2">which come to us from your Son,</p>
            <p className="mb-2">our Lord Jesus Christ,</p>
            <p className="font-semibold">who with God the Father and the Holy Spirit, lives and reigns for ever and ever. Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O Virgin of Guadalupe,</p>
            <p className="mb-2">Mother of the Americas,</p>
            <p className="mb-2">pray for us and protect our families.</p>
            <p className="mb-2">Help us to love and respect life,</p>
            <p className="mb-2">and to always turn to your Son, Jesus.</p>
            <p className="mb-2">Bless us with your motherly care</p>
            <p className="mb-2">and guide us to eternal life.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray to Our Lady of Guadalupe</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>On December 12th</strong> - Feast day of Our Lady of Guadalupe</li>
          <li>• <strong>For family protection</strong> - When praying for family unity and protection</li>
          <li>• <strong>For life issues</strong> - When praying for respect for all human life</li>
          <li>• <strong>For the Americas</strong> - When praying for the people of the Western Hemisphere</li>
          <li>• <strong>For conversion</strong> - When praying for the conversion of hearts</li>
          <li>• <strong>For healing</strong> - Physical, emotional, or spiritual healing</li>
          <li>• <strong>Daily devotion</strong> - As a regular prayer to Mary</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">History and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Miraculous Apparition</h3>
          <p className="text-gray-700 text-sm">
            Our Lady appeared to St. Juan Diego on Tepeyac Hill in 1531, leaving her image 
            miraculously imprinted on his tilma (cloak), which remains preserved to this day.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Patroness of the Americas</h3>
          <p className="text-gray-700 text-sm">
            Pope Pius XII declared Our Lady of Guadalupe as Patroness of the Americas in 1945, 
            recognizing her special role in the evangelization of the New World.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Message of Love</h3>
          <p className="text-gray-700 text-sm">
            Mary's message to Juan Diego emphasized her motherly care and her desire to help 
            all people, especially the poor and marginalized.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Cultural Significance</h3>
          <p className="text-gray-700 text-sm">
            The apparition at Guadalupe played a crucial role in the evangelization of Mexico 
            and continues to be a powerful symbol of faith and hope.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray to Our Lady of Guadalupe</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Structure of the Prayer</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">1. Invocation</h4>
            <p className="text-gray-700 text-sm">
              "O Virgin of Guadalupe, Mother of the Americas" - We address Mary with her special title.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">2. Petition for Life</h4>
            <p className="text-gray-700 text-sm">
              We ask for grace to love and respect life, especially in its beginnings.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">3. Family Protection</h4>
            <p className="text-gray-700 text-sm">
              We ask for protection of our families and blessing for the upbringing of children.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">4. Spiritual Growth</h4>
            <p className="text-gray-700 text-sm">
              We ask for help to grow closer to Jesus and to love the Sacraments.
            </p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-white rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Tips for Praying</h4>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>• Pray with devotion to Mary as Mother of the Americas</li>
            <li>• Reflect on the miraculous apparition and its significance</li>
            <li>• Ask for Mary's intercession for family and life issues</li>
            <li>• Trust in Mary's motherly care and protection</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <p className="text-gray-700 mb-4">
          The devotion to Our Lady of Guadalupe is rooted in Scripture and tradition:
        </p>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-900">Revelation 12:1</h4>
            <p className="text-gray-700 text-sm">
              "A great sign appeared in heaven: a woman clothed with the sun" - Mary as the woman crowned with stars.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900">Luke 1:28</h4>
            <p className="text-gray-700 text-sm">
              "Hail, full of grace, the Lord is with you" - Mary's special grace and favor with God.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900">John 19:26-27</h4>
            <p className="text-gray-700 text-sm">
              "Woman, behold your son... Behold your mother" - Jesus giving Mary to us as our mother.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Family Protection</h3>
          <p className="text-gray-700 text-sm">
            This devotion brings special protection and blessing to families and their unity.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Respect for Life</h3>
          <p className="text-gray-700 text-sm">
            Praying to Our Lady of Guadalupe helps us to love and respect all human life.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Cultural Unity</h3>
          <p className="text-gray-700 text-sm">
            This devotion unites people across the Americas in a common faith and devotion.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Miraculous Intercession</h3>
          <p className="text-gray-700 text-sm">
            Our Lady of Guadalupe is known for her powerful intercession and miraculous help.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Novena to Our Lady of Guadalupe</h2>
      
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Nine-Day Prayer</h3>
        
        <div className="text-gray-700 mb-6">
          <p className="mb-2">O Virgin of Guadalupe,</p>
          <p className="mb-2">Mother of the Americas,</p>
          <p className="mb-2">I come to you with confidence and love.</p>
          <p className="mb-2">You are the Mother of God and our Mother too.</p>
          <p className="mb-2">You appeared to Juan Diego and left your image</p>
          <p className="mb-2">as a sign of your love and protection.</p>
          <p className="mb-2">Help me in my present need</p>
              <p className="mb-2">and grant me the grace I ask of you.</p>
          <p className="mb-2">O Mother of Fair Love,</p>
          <p className="mb-2">teach me to love God and my neighbor</p>
          <p className="mb-2">as you have loved us.</p>
          <p className="font-semibold">Amen.</p>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-4">When to Pray the Novena</h3>
        <div className="text-gray-700">
          <p className="mb-2">• December 3-11 (leading to the feast day on December 12)</p>
          <p className="mb-2">• In times of special need or difficulty</p>
          <p className="mb-2">• For family intentions and protection</p>
          <p className="mb-2">• For life issues and conversion of hearts</p>
        </div>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/prayers/memorare" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🙏</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Memorare</h3>
              <p className="text-gray-600 text-sm">Powerful prayer of intercession to the Blessed Virgin Mary</p>
            </div>
          </Link>
          
          <Link href="/prayers/hail-mary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🌹</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Hail Mary</h3>
              <p className="text-gray-600 text-sm">Fundamental prayer to the Blessed Virgin Mary</p>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-perpetual-help" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🖼️</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Prayer to Our Lady of Perpetual Help</h3>
              <p className="text-gray-600 text-sm">Prayer to the miraculous icon of Mary</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/prayers/marian"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          ← Back to Marian Prayers
        </Link>
      </div>
    </main>
  );
} 