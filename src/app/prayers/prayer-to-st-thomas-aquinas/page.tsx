import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Prayer to St. Thomas Aquinas | Catholic Bible Online",
  description: "Learn the prayer to St. Thomas Aquinas, the Angelic Doctor and patron of students. Discover his theological wisdom and powerful intercession in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-to-st-thomas-aquinas",
  },
  openGraph: {
    title: "Prayer to St. Thomas Aquinas",
    description: "Learn the prayer to St. Thomas Aquinas, the Angelic Doctor and patron of students.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-to-st-thomas-aquinas",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer to St. Thomas Aquinas",
    description: "Learn the prayer to St. Thomas Aquinas, the Angelic Doctor and patron of students.",
  },
};

export default function PrayerToStThomasAquinasPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/saints" className="hover:underline">Saints Prayers</Link> &gt; 
        Prayer to St. Thomas Aquinas
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">📚 Prayer to St. Thomas Aquinas</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The prayer to St. Thomas Aquinas honors the Angelic Doctor and one of the greatest theologians in Church history. 
        St. Thomas Aquinas was a Dominican friar and priest who wrote extensively on theology and philosophy, 
        including the famous "Summa Theologica." This prayer seeks his intercession for wisdom and understanding.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer to St. Thomas Aquinas</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O glorious St. Thomas Aquinas,</p>
            <p className="mb-2">Angelic Doctor of the Church,</p>
            <p className="mb-2">who, by the power of your intellect</p>
            <p className="mb-2">and the holiness of your life,</p>
            <p className="mb-2">illuminated the Church</p>
            <p className="mb-2">with the light of your teaching,</p>
            <p className="mb-2">obtain for me from God</p>
            <p className="mb-2">the grace to understand the truths of faith</p>
            <p className="mb-2">and to live according to them.</p>
            <p className="mb-2">Help me to grow in wisdom and knowledge</p>
            <p className="mb-2">and to use my intellect</p>
            <p className="mb-2">for the greater glory of God</p>
            <p className="mb-2">and the salvation of souls.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">St. Thomas Aquinas,</p>
            <p className="mb-2">Angelic Doctor,</p>
            <p className="mb-2">pray for us and help us</p>
            <p className="mb-2">to grow in wisdom and understanding</p>
            <p className="mb-2">of the truths of our faith.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prayer for Students</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O St. Thomas,</p>
            <p className="mb-2">patron of students,</p>
            <p className="mb-2">help me to study diligently</p>
            <p className="mb-2">and to seek truth with humility.</p>
            <p className="mb-2">May my learning lead me closer to God.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray to St. Thomas Aquinas</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>On January 28th</strong> - Feast day of St. Thomas Aquinas</li>
          <li>• <strong>On Mondays</strong> - Traditional day to honor St. Thomas Aquinas</li>
          <li>• <strong>For students</strong> - When studying or taking exams</li>
          <li>• <strong>For wisdom</strong> - When seeking understanding and knowledge</li>
          <li>• <strong>For theologians</strong> - When praying for theologians and teachers</li>
          <li>• <strong>For universities</strong> - When praying for Catholic universities</li>
          <li>• <strong>For clarity</strong> - When seeking clarity in difficult matters</li>
          <li>• <strong>For learning</strong> - When beginning studies or research</li>
          <li>• <strong>For Dominican Order</strong> - When praying for Dominicans</li>
          <li>• <strong>Daily devotion</strong> - As a regular prayer to St. Thomas Aquinas</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">History and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Angelic Doctor</h3>
          <p className="text-gray-700 text-sm">
            St. Thomas Aquinas was called the "Angelic Doctor" for his purity of life 
            and the angelic wisdom of his teaching.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Summa Theologica</h3>
          <p className="text-gray-700 text-sm">
            St. Thomas wrote the "Summa Theologica," one of the most important works 
            of theology in Church history.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Patron of Students</h3>
          <p className="text-gray-700 text-sm">
            St. Thomas is the patron saint of students, scholars, and universities, 
            known for his love of learning and teaching.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Doctor of the Church</h3>
            <p className="text-gray-700 text-sm">
            St. Thomas Aquinas was declared a Doctor of the Church for his profound 
            contributions to Catholic theology and philosophy.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">St. Thomas Aquinas's Titles and Patronages</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Patron of Students</strong> - Protector of students and scholars</li>
          <li>• <strong>Patron of Universities</strong> - Helper of Catholic universities</li>
          <li>• <strong>Patron of Theologians</strong> - Protector of theologians and teachers</li>
          <li>• <strong>Patron of Booksellers</strong> - Helper of those who sell books</li>
          <li>• <strong>Angelic Doctor</strong> - Known for his angelic wisdom</li>
          <li>• <strong>Doctor of the Church</strong> - Teacher of the faith</li>
          <li>• <strong>Common Doctor</strong> - Universal teacher of the Church</li>
          <li>• <strong>Prince of Theologians</strong> - Greatest of all theologians</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/prayers/prayer-to-st-dominic" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🐕</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Prayer to St. Dominic</h3>
              <p className="text-gray-600 text-sm">Prayer to the founder of the Dominicans</p>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-to-st-benedict" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Prayer to St. Benedict</h3>
              <p className="text-gray-600 text-sm">Prayer to the father of Western monasticism</p>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-to-st-ignatius" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">⚜️</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Prayer to St. Ignatius</h3>
              <p className="text-gray-600 text-sm">Prayer to the founder of the Jesuits</p>
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