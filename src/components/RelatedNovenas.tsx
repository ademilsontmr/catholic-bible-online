import Link from 'next/link'

interface RelatedNovena {
  title: string
  description: string
  category: string
  href: string
}

interface RelatedNovenasProps {
  currentNovena?: string
}

export default function RelatedNovenas({ currentNovena }: RelatedNovenasProps) {
  const getRelatedNovenas = (): RelatedNovena[] => {
    const allNovenas: RelatedNovena[] = [
      {
        title: "Our Lady of Perpetual Help Novena",
        description: "A powerful nine-day prayer to Our Lady of Perpetual Help for her intercession and motherly care.",
        category: "Marian Novenas",
        href: "/novenas/our-lady-of-perpetual-help"
      },
      {
        title: "Our Lady of Guadalupe Novena",
        description: "A beautiful nine-day prayer to Our Lady of Guadalupe, Patroness of the Americas, for her miraculous intercession.",
        category: "Marian Novenas",
        href: "/novenas/our-lady-of-guadalupe"
      },
                        {
                    title: "Our Lady of Lourdes Novena",
                    description: "A powerful nine-day prayer to Our Lady of Lourdes for healing, grace, and spiritual renewal through her miraculous intercession.",
                    category: "Marian Novenas",
                    href: "/novenas/our-lady-of-lourdes"
                  },
                  {
                    title: "Our Lady of Fatima Novena",
                    description: "A powerful nine-day prayer to Our Lady of Fatima for peace, conversion, and the triumph of her Immaculate Heart through prayer and penance.",
                    category: "Marian Novenas",
                    href: "/novenas/our-lady-of-fatima"
                  },
      {
        title: "Sacred Heart of Jesus Novena",
        description: "A beautiful devotion to the Sacred Heart of Jesus, focusing on His infinite love and mercy.",
        category: "Devotions",
        href: "/novenas/sacred-heart"
      },
      {
        title: "Holy Spirit Novena",
        description: "A powerful novena to the Holy Spirit for wisdom, guidance, and the gifts of the Spirit.",
        category: "Devotions",
        href: "/novenas/holy-spirit"
      },
      {
        title: "Divine Mercy Novena",
        description: "A special novena to Jesus' Divine Mercy, especially effective for the conversion of sinners.",
        category: "Devotions",
        href: "/novenas/divine-mercy"
      },
      {
        title: "Novena for Courage",
        description: "A powerful nine-day prayer to develop courage and strength to face life's challenges and difficulties.",
        category: "Devotions",
        href: "/novenas/courage"
      },
      {
        title: "Novena for Difficult Times",
        description: "A powerful nine-day prayer to find strength, hope, and trust in God during challenging and difficult times.",
        category: "Devotions",
        href: "/novenas/difficult-times"
      },
      {
        title: "Novena for Cancer",
        description: "A powerful nine-day prayer for healing, strength, and divine comfort for cancer patients and their families.",
        category: "Healing Novenas",
        href: "/novenas/cancer"
      },
        {
    title: "March for Life Novena",
    description: "A powerful nine-day prayer for the protection of life and the end of abortion.",
    category: "Special Intentions",
    href: "/novenas/march-for-life"
  },
  {
    title: "Novena for the Supreme Court",
    description: "A powerful nine-day prayer for just rulings, moral decisions, and divine guidance for Supreme Court justices.",
    category: "Special Intentions",
    href: "/novenas/supreme-court"
  },
  {
    title: "Homeschool Novena",
    description: "A powerful nine-day prayer for homeschooling families, seeking God's guidance and grace for the educational journey.",
    category: "Family Novenas",
    href: "/novenas/homeschool"
  },
      {
        title: "Christmas Advent Novena",
        description: "A traditional novena to prepare for the birth of Jesus Christ during the Advent season.",
        category: "Seasonal Novenas",
        href: "/novenas/christmas-advent"
      },
      {
        title: "St. Rita of Cascia Novena",
        description: "A powerful novena to St. Rita, the patroness of impossible causes and desperate situations.",
        category: "Saint Novenas",
        href: "/novenas/st-rita-cascia"
      }
    ]

    const filteredNovenas = allNovenas.filter(novena =>
      !currentNovena || !novena.title.toLowerCase().includes(currentNovena.toLowerCase())
    )
    return filteredNovenas.sort(() => 0.5 - Math.random()).slice(0, 3)
  }

  const relatedNovenas = getRelatedNovenas()

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">
          Related Novenas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedNovenas.map((novena, index) => (
            <Link
              key={index}
              href={novena.href}
              className="group block"
            >
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    novena.category === 'Marian Novenas' ? 'bg-blue-100 text-blue-600' :
                    novena.category === 'Devotions' ? 'bg-purple-100 text-purple-600' :
                    novena.category === 'Saint Novenas' ? 'bg-green-100 text-green-600' :
                    novena.category === 'Seasonal Novenas' ? 'bg-orange-100 text-orange-600' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {novena.category}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-black mb-3 group-hover:text-gray-700 transition-colors">
                  {novena.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {novena.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 