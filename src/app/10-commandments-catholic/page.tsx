import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 10 Commandments in the Catholic Church | Catholic Bible Online",
  description:
    "Learn the 10 Commandments of the Catholic Church with their meaning and importance in Christian life.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/10-commandments-catholic",
  },
  openGraph: {
    title: "The 10 Commandments in the Catholic Church",
    description:
      "Learn the 10 Commandments of the Catholic Church with their meaning and importance in Christian life.",
    url: "https://www.catholicbibleonline.com/10-commandments-catholic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 10 Commandments in the Catholic Church",
    description:
      "Learn the 10 Commandments of the Catholic Church with their meaning and importance in Christian life.",
  },
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-4">
        <a href="/" className="hover:underline">Home</a> &gt; Resources &gt; 10 Commandments
      </nav>
      <h1 className="text-3xl font-bold mb-6">The 10 Commandments of the Catholic Church</h1>
      <p className="mb-6">
        The Ten Commandments are God's eternal law, given to Moses on Mount Sinai, and they remain the foundation of Christian morality.
        These commandments guide Catholics in living a life of holiness, love, and justice.
      </p>

      <h2 className="text-2xl font-semibold mb-4">What Are the Ten Commandments?</h2>
      <ol className="list-decimal list-inside mb-6 space-y-2">
        <li>I am the Lord your God; you shall not have strange gods before Me.</li>
        <li>You shall not take the name of the Lord your God in vain.</li>
        <li>Remember to keep holy the Lord's Day.</li>
        <li>Honor your father and your mother.</li>
        <li>You shall not kill.</li>
        <li>You shall not commit adultery.</li>
        <li>You shall not steal.</li>
        <li>You shall not bear false witness against your neighbor.</li>
        <li>You shall not covet your neighbor's wife.</li>
        <li>You shall not covet your neighbor's goods.</li>
      </ol>

      <h2 className="text-2xl font-semibold mb-4">Why the 10 Commandments Matter Today</h2>
      <p className="mb-6">
        The Commandments are not mere rules; they are pathways to freedom and love. They help us recognize God's will and live in harmony with others.
      </p>

      <div className="bg-gray-100 p-4 rounded-md mt-6">
        <p className="italic">
          Living by the Ten Commandments is a call to love God above all things and to love our neighbor as ourselves.
          In a world full of distractions, these commandments remind us to put God first and walk in His truth.
        </p>
      </div>
    </main>
  );
} 