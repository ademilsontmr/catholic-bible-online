import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Divine Mercy Chaplet – Powerful Devotion to Jesus | Catholic Bible Online",
  description: "Learn how to pray the Divine Mercy Chaplet, a powerful devotion given to St. Faustina by Jesus Himself. Complete instructions and prayers.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/divine-mercy-chaplet",
  },
  openGraph: {
    title: "Divine Mercy Chaplet – Powerful Devotion to Jesus",
    description: "Learn how to pray the Divine Mercy Chaplet, a powerful devotion given to St. Faustina by Jesus Himself.",
    url: "https://www.catholicbibleonline.com/prayers/divine-mercy-chaplet",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine Mercy Chaplet – Powerful Devotion to Jesus",
    description: "Learn how to pray the Divine Mercy Chaplet, a powerful devotion given to St. Faustina by Jesus Himself.",
  },
};

export default function DivineMercyChapletPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/devotional" className="hover:underline">Devotional</Link> &gt; 
        Divine Mercy Chaplet
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">❤️ Divine Mercy Chaplet</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Divine Mercy Chaplet is a powerful devotion given to St. Faustina Kowalska by Jesus Himself. 
        This prayer is said on ordinary rosary beads and takes about 10 minutes to complete. 
        Jesus promised special graces to those who pray this chaplet with trust in His mercy.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray the Divine Mercy Chaplet</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            <strong>Begin with the Sign of the Cross:</strong>
          </p>
          <p className="mb-4">
            In the name of the Father, and of the Son, and of the Holy Spirit. Amen.
          </p>
          <p className="mb-4">
            <strong>Opening Prayer (optional):</strong>
          </p>
          <p className="mb-4">
            You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us.
          </p>
          <p className="font-semibold">
            O Blood and Water, which gushed forth from the Heart of Jesus as a fount of mercy for us, I trust in You! (3 times)
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Chaplet Prayers</h2>
      
      <div className="space-y-6 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-red-900 mb-3">Our Father</h3>
          <p className="text-gray-800 leading-relaxed">
            Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Hail Mary</h3>
          <p className="text-gray-800 leading-relaxed">
            Hail Mary, full of grace, the Lord is with thee; blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-900 mb-3">Apostles' Creed</h3>
          <p className="text-gray-800 leading-relaxed">
            I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Five Decades</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            <strong>On the large bead before each decade, pray:</strong>
          </p>
          <p className="mb-4">
            Eternal Father, I offer you the Body and Blood, Soul and Divinity of Your Dearly Beloved Son, Our Lord, Jesus Christ, in atonement for our sins and those of the whole world.
          </p>
          <p className="mb-4">
            <strong>On the ten small beads of each decade, pray:</strong>
          </p>
          <p className="mb-4">
            For the sake of His sorrowful Passion, have mercy on us and on the whole world.
          </p>
          <p className="mb-4">
            <strong>After the five decades, pray three times:</strong>
          </p>
          <p className="font-semibold">
            Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Closing Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Eternal God, in whom mercy is endless and the treasury of compassion — inexhaustible, look kindly upon us and increase Your mercy in us, that in difficult moments we might not despair nor become despondent, but with great confidence submit ourselves to Your holy will, which is Love and Mercy itself.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Divine Mercy Chaplet</h2>
      
      <div className="space-y-4 mb-8">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-900 mb-2">3:00 PM - The Hour of Mercy</h3>
          <p className="text-gray-800">
            Jesus asked St. Faustina to pray the chaplet at 3:00 PM, the hour of His death on the cross.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">For the Dying</h3>
          <p className="text-gray-800">
            Jesus promised to stand between His Father and the dying person when the chaplet is prayed.
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">For Special Intentions</h3>
          <p className="text-gray-800">
            Pray for the conversion of sinners, for the souls in purgatory, or for any special need.
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-yellow-900 mb-2">Daily Devotion</h3>
          <p className="text-gray-800">
            Make it a daily practice to grow in trust in God's mercy and to intercede for others.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Promises of Jesus</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            "When they say this Chaplet in the presence of the dying, I will stand between My Father and the dying person, not as the just Judge but as the merciful Savior."
          </p>
          <p className="mb-4">
            "Whoever will recite it will receive great mercy at the hour of death."
          </p>
          <p className="mb-4">
            "Priests will recommend it to sinners as their last hope of salvation."
          </p>
          <p className="mb-4">
            "Even if there were a sinner most hardened, if he were to recite this chaplet only once, he would receive grace from My infinite mercy."
          </p>
          <p className="font-semibold">
            - From the Diary of St. Faustina
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Divine Mercy Chaplet is a powerful prayer that focuses on the mercy of God and our need for it. 
          Through this devotion, we acknowledge our sinfulness and trust in God's infinite mercy to forgive us 
          and transform our lives.
        </p>
        
        <p className="text-gray-700 mb-4">
          The prayer is centered on the passion of Christ, reminding us that it is through His suffering and death 
          that we receive mercy. By offering His Body and Blood to the Father, we participate in Christ's perfect 
          sacrifice and ask for mercy for ourselves and the whole world.
        </p>
        
        <p className="text-gray-700 mb-6">
          This devotion teaches us to trust in God's mercy and to be merciful to others. It reminds us that 
          no sin is too great for God's mercy and that we are called to be instruments of His mercy in the world. 
          Through regular prayer of the Divine Mercy Chaplet, we grow in our understanding of God's love and mercy.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/rosary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Devotions
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  The Rosary
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The traditional Catholic devotion combining vocal prayer with meditation.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-holy-spirit" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Devotional
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Prayer to the Holy Spirit
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Invoke the Holy Spirit for guidance and strength in your spiritual life.
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
            title="Divine Mercy Chaplet" 
            url="/prayers/divine-mercy-chaplet"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section></section>
    </main>
  );
} 