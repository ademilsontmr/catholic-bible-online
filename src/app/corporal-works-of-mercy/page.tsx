import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 7 Corporal Works of Mercy | Catholic Bible Online",
  description:
    "Understand the 7 Corporal Works of Mercy and how to live them in daily life as a Catholic.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/corporal-works-of-mercy",
  },
  openGraph: {
    title: "The 7 Corporal Works of Mercy",
    description:
      "Understand the 7 Corporal Works of Mercy and how to live them in daily life as a Catholic.",
    url: "https://www.catholicbibleonline.com/corporal-works-of-mercy",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 7 Corporal Works of Mercy",
    description:
      "Understand the 7 Corporal Works of Mercy and how to live them in daily life as a Catholic.",
  },
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-4">
        <a href="/" className="hover:underline">Home</a> &gt; Resources &gt; Corporal Works of Mercy
      </nav>
      <h1 className="text-3xl font-bold mb-6">The 7 Corporal Works of Mercy: Loving Through Action</h1>
      <p className="mb-6">
        The Corporal Works of Mercy are concrete acts of charity that respond to the physical needs of others, following Christ's commandment to love our neighbor.
      </p>

      <h2 className="text-2xl font-semibold mb-4">The 7 Corporal Works of Mercy</h2>
      <ol className="list-decimal list-inside mb-6 space-y-2">
        <li>Feed the hungry.</li>
        <li>Give drink to the thirsty.</li>
        <li>Clothe the naked.</li>
        <li>Shelter the homeless.</li>
        <li>Visit the sick.</li>
        <li>Visit the imprisoned.</li>
        <li>Bury the dead.</li>
      </ol>

      <div className="bg-gray-100 p-4 rounded-md mt-6">
        <p className="italic">
          When we serve those in need, we serve Christ Himself (Matthew 25:40). Each act of mercy brings light to a suffering world and draws us closer to God's heart.
        </p>
      </div>
    </main>
  );
} 