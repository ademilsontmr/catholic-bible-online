import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 7 Spiritual Works of Mercy | Catholic Bible Online",
  description: "Learn about the 7 Spiritual Works of Mercy in Catholic tradition. Discover how to practice these acts of compassion and love for the salvation of souls.",
  keywords: [
    'spiritual works of mercy',
    'catholic works of mercy',
    '7 spiritual works',
    'catholic teaching',
    'works of mercy'
  ]
};

export default function SpiritualWorksOfMercyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">The 7 Spiritual Works of Mercy</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Spiritual Works of Mercy are acts of compassion that help our neighbors in their spiritual needs. 
        These works guide us in showing God's love and mercy to others, helping them grow closer to Christ.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Counsel the Doubtful</h2>
          <p className="text-gray-700">
            Help those who are struggling with questions of faith or moral decisions. 
            Offer guidance based on Catholic teaching and encourage them to seek God's will.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Instruct the Ignorant</h2>
          <p className="text-gray-700">
            Share the knowledge of our faith with those who do not know it. 
            Teach others about God's love and the truths of the Catholic Church.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Admonish the Sinner</h2>
          <p className="text-gray-700">
            Gently correct those who are doing wrong, always with love and charity. 
            Help them recognize their mistakes and guide them back to the right path.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Comfort the Sorrowful</h2>
          <p className="text-gray-700">
            Be present to those who are suffering or grieving. 
            Offer words of comfort and hope, reminding them of God's love and mercy.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Forgive Injuries</h2>
          <p className="text-gray-700">
            Forgive those who have hurt us, following Christ's example. 
            Let go of resentment and choose to love even those who have wronged us.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Bear Wrongs Patiently</h2>
          <p className="text-gray-700">
            Accept the difficulties and injustices of life with patience and trust in God. 
            Endure suffering for the love of Christ and the salvation of souls.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 md:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Pray for the Living and the Dead</h2>
          <p className="text-gray-700">
            Offer prayers for the needs of others, both those still living and those who have died. 
            Intercede for their spiritual welfare and trust in God's mercy for all souls.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Living the Spiritual Works of Mercy</h2>
        <p className="text-gray-700 mb-4">
          The Spiritual Works of Mercy call us to be instruments of God's love in the world. 
          Through these acts, we participate in Christ's mission of bringing souls to salvation 
          and building up the Kingdom of God on earth.
        </p>
        <p className="text-gray-700">
          Each day, we can practice these works in our families, workplaces, and communities. 
          By doing so, we grow in holiness and help others encounter the love and mercy of God.
        </p>
      </div>
    </main>
  );
} 