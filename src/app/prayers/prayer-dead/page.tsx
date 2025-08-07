import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prayer for the Dead – Prayers for the Souls in Purgatory | Catholic Bible Online",
  description: "Complete collection of prayers for the dead and the souls in purgatory. Traditional Catholic prayers for the faithful departed.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-dead",
  },
  openGraph: {
    title: "Prayer for the Dead – Prayers for the Souls in Purgatory",
    description: "Complete collection of prayers for the dead and the souls in purgatory.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-dead",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer for the Dead – Prayers for the Souls in Purgatory",
    description: "Complete collection of prayers for the dead and the souls in purgatory.",
  },
};

export default function PrayerDeadPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/devotional" className="hover:underline">Devotional</Link> &gt; 
        Prayer for the Dead
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🕯️ Prayer for the Dead</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        Prayers for the dead are an important part of Catholic tradition, expressing our belief in the communion of saints 
        and our hope for the resurrection. These prayers help the souls in purgatory and remind us of our own mortality 
        and the need to prepare for eternal life.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Eternal Rest Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Eternal rest grant unto them, O Lord,
          </p>
          <p className="mb-4">
            and let perpetual light shine upon them.
          </p>
          <p className="mb-4">
            May they rest in peace.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for All Souls</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            O God, the Creator and Redeemer of all the faithful, grant to the souls of your servants and handmaids 
            the remission of all their sins, that through our pious supplications they may obtain the pardon they have always desired.
          </p>
          <p className="mb-4">
            Who live and reign with God the Father in the unity of the Holy Spirit, God, for ever and ever.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for a Specific Person</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            O Lord, we pray for [Name], who has gone before us in faith.
          </p>
          <p className="mb-4">
            Grant that he/she may be purified of all sin and enter into the fullness of your presence.
          </p>
          <p className="mb-4">
            May he/she rest in peace and rise in glory on the last day.
          </p>
          <p className="mb-4">
            Through Christ our Lord.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for the Souls in Purgatory</h2>
      
      <div className="space-y-6 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-red-900 mb-3">Prayer of St. Gertrude</h3>
          <p className="text-gray-800 leading-relaxed">
            Eternal Father, I offer You the Most Precious Blood of Your Divine Son, Jesus, in union with the Masses 
            said throughout the world today, for all the holy souls in purgatory, for sinners everywhere, for sinners 
            in the universal church, those in my own home and within my family. Amen.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Prayer for the Faithful Departed</h3>
          <p className="text-gray-800 leading-relaxed">
            O Lord, who art ever merciful and bounteous with Thy gifts, look down upon the suffering souls in purgatory. 
            Remember not their offenses and negligences, but be mindful of Thy loving mercy, which is from all eternity. 
            Cleanse them of their sins and fulfill their ardent desires that they may be made worthy to behold Thee 
            face to face in Thy glory. May they soon be united with Thee and hear those blessed words which will call 
            them to their heavenly home: "Come, blessed of My Father, take possession of the kingdom prepared for you 
            from the foundation of the world."
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-green-900 mb-3">Prayer for the Holy Souls</h3>
          <p className="text-gray-800 leading-relaxed">
            O most gentle Heart of Jesus, ever present in the Blessed Sacrament, ever consumed with burning love for 
            the poor captive souls in purgatory, have mercy on the souls of Thy departed servants. Be not severe in 
            Thy judgments, but let some drops of Thy Precious Blood fall upon the devouring flames. And do Thou, 
            O merciful Savior, send Thy angels to conduct them to a place of refreshment, light and peace. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Parents and Relatives</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            O God, who has commanded us to honor our father and mother, have compassion in Thy mercy on the souls 
            of my father and mother; forgive them their sins, and grant that I may see them again in the joy of 
            everlasting brightness. Through Christ our Lord.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for the Dying</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            O most merciful Jesus, Lover of souls, I pray Thee by the agony of Thy most Sacred Heart, and by the 
            sorrows of Thy Immaculate Mother, wash clean in Thy Blood the sinners of the whole world who are now 
            in their agony and who are to die this day.
          </p>
          <p className="mb-4">
            Heart of Jesus, once in agony, have mercy on the dying.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray for the Dead</h2>
      
      <div className="space-y-4 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-red-900 mb-2">All Souls Day</h3>
          <p className="text-gray-800">
            November 2nd is dedicated to praying for all the faithful departed, especially those in purgatory.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Funerals and Memorial Services</h3>
          <p className="text-gray-800">
            Pray for the deceased during funeral Masses and memorial services.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-900 mb-2">Anniversaries</h3>
          <p className="text-gray-800">
            Remember to pray for loved ones on the anniversaries of their deaths.
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-900 mb-2">Daily Prayer</h3>
          <p className="text-gray-800">
            Include prayers for the dead in your daily prayer routine.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for the Month of November</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            O Lord, during this month of November, when we especially remember the faithful departed, 
            grant that through our prayers, works of mercy, and the sacrifice of the Mass, 
            the souls in purgatory may be purified and enter into the joy of Your presence.
          </p>
          <p className="mb-4">
            Help us to remember our own mortality and to prepare for the day when we too will be called 
            to give an account of our lives before You.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          Prayers for the dead are a beautiful expression of our belief in the communion of saints and the power 
          of prayer. They remind us that death is not the end, but a transition to eternal life with God.
        </p>
        
        <p className="text-gray-700 mb-4">
          Through these prayers, we can help the souls in purgatory by offering our prayers, works of mercy, 
          and the sacrifice of the Mass for their purification and entrance into heaven.
        </p>
        
        <p className="text-gray-700 mb-6">
          These prayers also help us to remember our own mortality and the importance of living a holy life. 
          They encourage us to prepare for our own death and to trust in God's mercy and love.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/all-souls-prayers" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Seasonal
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  All Souls Prayers
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Special prayers for All Souls Day and the month of November.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/divine-mercy-chaplet" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Devotional
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Divine Mercy Chaplet
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Powerful devotion to the Divine Mercy of Jesus Christ.
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