import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 7 Sacraments of the Catholic Church | Catholic Bible Online",
  description:
    "Discover the meaning of the 7 Catholic Sacraments and their role in the life of faith.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/7-sacraments-catholic",
  },
  openGraph: {
    title: "The 7 Sacraments of the Catholic Church",
    description:
      "Discover the meaning of the 7 Catholic Sacraments and their role in the life of faith.",
    url: "https://www.catholicbibleonline.com/7-sacraments-catholic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 7 Sacraments of the Catholic Church",
    description:
      "Discover the meaning of the 7 Catholic Sacraments and their role in the life of faith.",
  },
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-4">
        <a href="/" className="hover:underline">Home</a> &gt; Resources &gt; 7 Sacraments
      </nav>
      <h1 className="text-3xl font-bold mb-6">The 7 Sacraments of the Catholic Church Explained</h1>
      <p className="mb-6">
        The Catholic Church teaches that the sacraments are visible signs of God's grace. Instituted by Christ, they strengthen our faith and unite us with Him.
      </p>

      <h2 className="text-2xl font-semibold mb-4">What Are the 7 Sacraments?</h2>
      <ul className="list-disc list-inside mb-6 space-y-2">
        <li><strong>Baptism</strong> – The gateway to Christian life, cleansing us from original sin.</li>
        <li><strong>Confirmation</strong> – Strengthens the grace of Baptism and gives the gifts of the Holy Spirit.</li>
        <li><strong>Eucharist</strong> – The real presence of Jesus in Holy Communion.</li>
        <li><strong>Penance (Confession)</strong> – Reconciliation with God through forgiveness of sins.</li>
        <li><strong>Anointing of the Sick</strong> – Spiritual and physical healing for the ill.</li>
        <li><strong>Holy Orders</strong> – Ordination of bishops, priests, and deacons.</li>
        <li><strong>Matrimony</strong> – The sacred covenant of marriage between man and woman.</li>
      </ul>

      <div className="bg-gray-100 p-4 rounded-md mt-6">
        <p className="italic">
          The sacraments are gifts that sanctify every stage of life. Through them, God walks with us, offering strength, healing, and grace for our journey to heaven.
        </p>
      </div>
    </main>
  );
} 