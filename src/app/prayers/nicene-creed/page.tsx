import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nicene Creed – Catholic Profession of Faith | Catholic Bible Online",
  description: "Read the full text of the Nicene Creed, the profession of faith used at Mass. Learn its history, meaning, and importance in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/nicene-creed",
  },
  openGraph: {
    title: "Nicene Creed – Catholic Profession of Faith",
    description: "Read the full text of the Nicene Creed, the profession of faith used at Mass.",
    url: "https://www.catholicbibleonline.com/prayers/nicene-creed",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicene Creed – Catholic Profession of Faith",
    description: "Read the full text of the Nicene Creed, the profession of faith used at Mass.",
  },
};

export default function NiceneCreedPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/basic" className="hover:underline">Basic Prayers</Link> &gt; 
        Nicene Creed
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">📖 Nicene Creed – Catholic Profession of Faith</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Nicene Creed is the profession of faith used during the celebration of Mass. It was formulated at the 
        First Council of Nicaea in 325 AD and later expanded at the First Council of Constantinople in 381 AD. 
        This creed clearly articulates the essential beliefs of the Catholic faith, especially regarding the nature of Christ.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Full Text of the Nicene Creed</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">I believe in one God, the Father almighty, maker of heaven and earth, of all things visible and invisible.</p>
          
          <p className="mb-4">I believe in one Lord Jesus Christ, the Only Begotten Son of God, born of the Father before all ages. God from God, Light from Light, true God from true God, begotten, not made, consubstantial with the Father; through him all things were made. For us men and for our salvation he came down from heaven, and by the Holy Spirit was incarnate of the Virgin Mary, and became man. For our sake he was crucified under Pontius Pilate, he suffered death and was buried, and rose again on the third day in accordance with the Scriptures. He ascended into heaven and is seated at the right hand of the Father. He will come again in glory to judge the living and the dead and his kingdom will have no end.</p>
          
          <p className="mb-4">I believe in the Holy Spirit, the Lord, the giver of life, who proceeds from the Father and the Son, who with the Father and the Son is adored and glorified, who has spoken through the prophets.</p>
          
          <p className="mb-4">I believe in one, holy, catholic and apostolic Church. I confess one Baptism for the forgiveness of sins and I look forward to the resurrection of the dead and the life of the world to come.</p>
          
          <p className="font-semibold">Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Historical Background</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Nicene Creed was formulated in response to the Arian heresy, which denied the divinity of Jesus Christ. 
          At the First Council of Nicaea in 325 AD, the bishops gathered to clarify the Church's teaching about the 
          nature of Christ and His relationship to the Father.
        </p>
        
        <p className="text-gray-700 mb-4">
          The key phrase "consubstantial with the Father" (homoousios in Greek) was added to clearly affirm that 
          Jesus Christ is truly God, of the same substance as the Father. This was later expanded at the First 
          Council of Constantinople in 381 AD to include the section about the Holy Spirit.
        </p>
        
        <p className="text-gray-700 mb-6">
          The Nicene Creed has been used in the liturgy since the 6th century and remains the most authoritative 
          statement of Christian belief, uniting Catholics, Orthodox, and many Protestant denominations.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Beliefs Affirmed</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">The Holy Trinity</h3>
          <p className="text-gray-700 text-sm">
            One God in three Persons: Father, Son, and Holy Spirit. Each Person is fully God, yet there is only one God.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">The Incarnation</h3>
          <p className="text-gray-700 text-sm">
            Jesus Christ is truly God and truly man, born of the Virgin Mary through the power of the Holy Spirit.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">The Paschal Mystery</h3>
          <p className="text-gray-700 text-sm">
            Christ's death, resurrection, and ascension for our salvation, and His future return in glory.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">The Church</h3>
          <p className="text-gray-700 text-sm">
            One, holy, catholic, and apostolic Church, with one baptism for the forgiveness of sins.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Comparison with Apostles' Creed</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Nicene Creed</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• More detailed about Christ's divinity</li>
              <li>• Includes "consubstantial with the Father"</li>
              <li>• More explicit about the Holy Spirit</li>
              <li>• Used at Mass on Sundays and solemnities</li>
              <li>• Longer and more theological</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Apostles' Creed</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• More concise and accessible</li>
              <li>• Focuses on the basic facts of faith</li>
              <li>• Used in the Rosary and other devotions</li>
              <li>• Shorter and more straightforward</li>
              <li>• Good for daily prayer and catechesis</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When We Pray the Nicene Creed</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Nicene Creed is recited during Mass on Sundays and solemnities, typically after the homily and before 
          the Prayer of the Faithful. This placement is significant because:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>After hearing God's Word</strong> - We respond by professing our faith</li>
          <li>• <strong>Before the Eucharist</strong> - We prepare to receive Christ by affirming our belief in Him</li>
          <li>• <strong>As a community</strong> - We profess our faith together, united in belief</li>
          <li>• <strong>As preparation</strong> - We ready our hearts for the celebration of the Eucharist</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          The Creed is also used in other liturgical celebrations, such as baptisms, confirmations, and ordinations, 
          as a way to profess our faith and unite with the universal Church.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Significance</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          When we recite the Nicene Creed, we are not just repeating words - we are making a profound act of faith. 
          We are declaring our belief in the core mysteries of our faith and uniting ourselves with the entire Church 
          throughout history and around the world.
        </p>
        
        <p className="text-gray-700 mb-4">
          The Creed helps us to understand and articulate what we believe as Catholics. It serves as a summary of 
          the essential teachings of our faith and a guide for our spiritual journey. By regularly professing these 
          beliefs, we strengthen our faith and grow in our understanding of God's revelation.
        </p>
        
        <p className="text-gray-700 mb-6">
          The Nicene Creed is also a powerful witness to the world. When we profess our faith publicly, we bear 
          witness to the truth of the Gospel and invite others to consider the claims of Christ and His Church.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/apostles-creed" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Apostles' Creed
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The traditional statement of Catholic faith, used in the Rosary and other devotions.
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
                  The Lord's Prayer, taught by Jesus Himself to His disciples.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/mass" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Mass Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Mass Prayers
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Complete collection of prayers used during the celebration of the Holy Mass.
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