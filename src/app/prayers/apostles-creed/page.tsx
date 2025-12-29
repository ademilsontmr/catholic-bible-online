import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Apostles' Creed – Statement of Catholic Faith",
  description: "Read the full text of the Apostles' Creed and learn its meaning in Catholic tradition. Discover this ancient statement of Christian beliefs.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/apostles-creed",
  },
  openGraph: {
    title: "Apostles' Creed – Statement of Catholic Faith",
    description: "Read the full text of the Apostles' Creed and learn its meaning in Catholic tradition.",
    url: "https://www.catholicbibleonline.com/prayers/apostles-creed",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apostles' Creed – Statement of Catholic Faith",
    description: "Read the full text of the Apostles' Creed and learn its meaning in Catholic tradition.",
  },
};

export default function ApostlesCreedPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; Apostles' Creed
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">📜 Apostles' Creed – Statement of Catholic Faith</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Apostles' Creed is one of the most ancient and important statements of Christian faith. 
        While not written by the Apostles themselves, it summarizes the essential beliefs that the 
        Apostles taught and that have been passed down through the centuries. This creed serves as 
        a foundation for our Catholic faith and is recited during the Rosary and other devotions.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Full Text of the Creed</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            I believe in God, the Father almighty, creator of heaven and earth.
          </p>
          <p className="mb-4">
            I believe in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, 
            born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried; 
            he descended into hell; on the third day he rose again from the dead; he ascended into heaven, 
            and is seated at the right hand of God the Father almighty; from there he will come to judge 
            the living and the dead.
          </p>
          <p className="mb-4">
            I believe in the Holy Spirit, the holy catholic Church, the communion of saints, 
            the forgiveness of sins, the resurrection of the body, and life everlasting.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Historical Background</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Apostles' Creed developed gradually in the early Church as a way to summarize the essential 
          teachings of the Christian faith. While tradition holds that each of the twelve Apostles 
          contributed one article to the creed, it actually evolved over several centuries as the Church 
          sought to articulate its core beliefs clearly and defend them against various heresies.
        </p>
        
        <p className="text-gray-700 mb-4">
          The earliest form of the creed appeared in the 2nd century, and it reached its final form 
          in the 8th century. It was used for baptismal instruction and as a statement of faith for 
          new converts. Today, it remains one of the most widely accepted statements of Christian belief 
          across different denominations.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Apostles' Creed is divided into three main sections, each focusing on one Person of the 
          Holy Trinity. When we recite this creed, we are not just repeating words—we are making a 
          personal declaration of our faith in the God who has revealed Himself to us through Jesus Christ.
        </p>
        
        <p className="text-gray-700 mb-4">
          The first section affirms our belief in God the Father as the creator of all things. This 
          reminds us that everything we have comes from God and that we are called to be good stewards 
          of His creation. The second section, the longest, focuses on Jesus Christ and His saving work. 
          It recounts the key events of His life, death, and resurrection, showing us that our salvation 
          is rooted in historical events that really happened.
        </p>
        
        <p className="text-gray-700 mb-6">
          The third section speaks of the Holy Spirit and the Church. It reminds us that we are not 
          alone in our faith journey—we are part of a community of believers (the communion of saints) 
          and that God continues to work through His Church to bring forgiveness and new life to all people.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Apostles' Creed</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>The Rosary:</strong> At the beginning of the Rosary devotion</li>
          <li>• <strong>Baptism:</strong> As part of the baptismal ceremony</li>
          <li>• <strong>Daily Prayer:</strong> As a morning or evening prayer</li>
          <li>• <strong>Times of Doubt:</strong> To reaffirm your faith</li>
          <li>• <strong>Before Important Decisions:</strong> To center yourself in your beliefs</li>
          <li>• <strong>Community Worship:</strong> During Mass and other liturgies</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Beliefs Affirmed</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">God the Father</h3>
        <p className="text-gray-700 mb-3">
          Creator of heaven and earth, almighty and loving Father who cares for all His children.
        </p>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Jesus Christ</h3>
        <p className="text-gray-700 mb-3">
          God's only Son, fully human and fully divine, who suffered, died, and rose for our salvation.
        </p>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-3">The Holy Spirit</h3>
        <p className="text-gray-700 mb-3">
          The third Person of the Trinity, who guides the Church and sanctifies believers.
        </p>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-3">The Church</h3>
        <p className="text-gray-700 mb-3">
          The holy catholic Church, the communion of saints, and the forgiveness of sins.
        </p>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Eternal Life</h3>
        <p className="text-gray-700">
          The resurrection of the body and life everlasting in God's presence.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Comparison with the Nicene Creed</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <p className="text-gray-700 mb-3">
          While the Apostles' Creed is shorter and more concise, the Nicene Creed (used at Mass) 
          is more detailed and was developed to address specific theological controversies. Both creeds 
          express the same essential Christian beliefs, but the Nicene Creed provides more theological 
          precision, especially regarding the nature of Christ and the Holy Spirit.
        </p>
        <p className="text-gray-700">
          The Apostles' Creed is often preferred for personal prayer and devotions because of its 
          simplicity and directness, while the Nicene Creed is used in the liturgy to emphasize 
          the unity of the Church's faith.
        </p>
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

          <Link href="/prayers/rosary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Rosary Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  The Rosary
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Complete guide to praying the Rosary with all its mysteries.
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