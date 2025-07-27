import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Beatitudes – Jesus' Guide to Happiness | Catholic Bible Online",
  description: "Discover the 8 Beatitudes from Jesus' Sermon on the Mount. Learn how these teachings guide us to true happiness and holiness in the Catholic faith.",
  keywords: [
    'beatitudes',
    'sermon on the mount',
    'jesus teachings',
    'catholic beatitudes',
    '8 beatitudes',
    'matthew 5'
  ]
};

export default function TheBeatitudesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">The Beatitudes – Jesus' Guide to Happiness</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Beatitudes are eight blessings proclaimed by Jesus in the Sermon on the Mount (Matthew 5:3-12). 
        They reveal the path to true happiness and holiness, showing us how to live as children of God.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Blessed are the poor in spirit</h2>
          <p className="text-gray-700 mb-2">
            "For theirs is the kingdom of heaven."
          </p>
          <p className="text-gray-600">
            Those who recognize their need for God and depend on Him completely. 
            They are humble and open to receiving God's grace.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Blessed are those who mourn</h2>
          <p className="text-gray-700 mb-2">
            "For they shall be comforted."
          </p>
          <p className="text-gray-600">
            Those who grieve over sin and suffering, both their own and others'. 
            They will receive God's consolation and healing.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Blessed are the meek</h2>
          <p className="text-gray-700 mb-2">
            "For they shall inherit the earth."
          </p>
          <p className="text-gray-600">
            Those who are gentle, patient, and not easily angered. 
            They trust in God's providence and do not seek revenge.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Blessed are those who hunger and thirst for righteousness</h2>
          <p className="text-gray-700 mb-2">
            "For they shall be satisfied."
          </p>
          <p className="text-gray-600">
            Those who passionately desire to do God's will and see justice done. 
            They will be filled with God's grace and peace.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Blessed are the merciful</h2>
          <p className="text-gray-700 mb-2">
            "For they shall obtain mercy."
          </p>
          <p className="text-gray-600">
            Those who show compassion and forgiveness to others. 
            They will receive God's mercy in return.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Blessed are the pure in heart</h2>
          <p className="text-gray-700 mb-2">
            "For they shall see God."
          </p>
          <p className="text-gray-600">
            Those whose thoughts and intentions are pure and focused on God. 
            They will have the vision of God in heaven.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Blessed are the peacemakers</h2>
          <p className="text-gray-700 mb-2">
            "For they shall be called sons of God."
          </p>
          <p className="text-gray-600">
            Those who work to bring peace and reconciliation between people. 
            They reflect God's nature as the Prince of Peace.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Blessed are those who are persecuted for righteousness' sake</h2>
          <p className="text-gray-700 mb-2">
            "For theirs is the kingdom of heaven."
          </p>
          <p className="text-gray-600">
            Those who suffer for doing what is right and following Christ. 
            They will receive the greatest reward in heaven.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Living the Beatitudes</h2>
        <p className="text-gray-700 mb-4">
          The Beatitudes are not just beautiful words—they are a call to action. 
          They show us the way to true happiness by following Christ's example 
          and living according to God's will.
        </p>
        <p className="text-gray-700">
          Each beatitude challenges us to examine our hearts and transform our lives. 
          By practicing these virtues, we grow in holiness and become more like Christ, 
          who is the perfect example of all these blessed qualities.
        </p>
      </div>
    </main>
  );
} 