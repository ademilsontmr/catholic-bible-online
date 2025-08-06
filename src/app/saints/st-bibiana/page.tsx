import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Bibiana - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Bibiana, virgin and martyr who suffered persecution under Julian the Apostate in 363.',
  keywords: [
    'st bibiana',
    'saint bibiana',
    'st bibiana biography',
    'st bibiana feast day',
    'st bibiana patron saint',
    'catholic saints',
    'virgin martyr',
    'december 2 feast day'
  ],
  openGraph: {
    title: 'St. Bibiana - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Bibiana, virgin and martyr who suffered persecution under Julian the Apostate in 363.',
    url: 'https://catholicbibleonline.com/saints/st-bibiana',
  },
  twitter: {
    title: 'St. Bibiana - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Bibiana, virgin and martyr who suffered persecution under Julian the Apostate in 363.',
  }
}

export default function StBibianaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌸</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Bibiana
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Virgin and Martyr
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Bibiana</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">December 2</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌸</div>
              <div className="text-sm text-gray-600">Virgin & Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Bibiana</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Bibiana was a remarkable young woman whose life and martyrdom exemplify the perfect 
                combination of purity, courage, and unwavering faith in the face of persecution. While 
                little is known for certain about her life beyond her name, the tradition that has been 
                passed down through the centuries tells the story of a family whose faith was tested 
                to the ultimate degree, and of a young virgin who chose death over the renunciation 
                of her Christian beliefs.
              </p>
              
              <p className="mb-6">
                In the year 363, during the reign of Julian the Apostate, a fierce persecution of 
                Christians was initiated throughout the Roman Empire. Julian, who had apostatized from 
                Christianity and returned to paganism, appointed Apronianus as Governor of Rome with 
                the specific mission of eradicating the Christian faith from the imperial capital. 
                It was during this dark period that St. Bibiana and her family would face their greatest 
                trial of faith.
              </p>
              
              <p className="mb-6">
                St. Bibiana was the daughter of devout Christians: Flavian, a Roman knight, and Dafrosa, 
                his wife. Her family was well-respected in Roman society, with her father holding a 
                position of honor as a knight. However, their Christian faith made them targets of 
                the imperial persecution. The family also included Bibiana's sister, Demetria, and 
                together they formed a household united in their devotion to Christ and their commitment 
                to living according to His teachings.
              </p>
              
              <p className="mb-6">
                The persecution began with the arrest and torture of Flavian, who was subjected to 
                brutal treatment in an attempt to force him to renounce his faith. Despite the 
                unimaginable suffering inflicted upon him, Flavian remained steadfast in his 
                Christian beliefs. As punishment for his refusal to apostatize, he was sent into 
                exile, where he eventually died from the wounds he had sustained during his torture. 
                His death marked the beginning of a series of tragedies that would test the faith 
                of his remaining family members.
              </p>
              
              <p className="mb-6">
                Following Flavian's death, the persecution turned to his wife, Dafrosa. She too was 
                given the choice between renouncing her faith and death. Like her husband, Dafrosa 
                chose to remain faithful to Christ, and she was beheaded for her refusal to apostatize. 
                The loss of both parents left Bibiana and her sister Demetria orphaned and vulnerable, 
                but their faith remained unshaken despite the terrible suffering they had witnessed.
              </p>
              
              <p className="mb-6">
                After the execution of their mother, Bibiana and Demetria were stripped of all their 
                possessions and left to suffer in extreme poverty. The authorities hoped that hunger 
                and want would break their spirit and force them to renounce their Christian faith. 
                However, the two sisters remained in their house, spending their time in fasting and 
                prayer, finding strength in their shared faith and in the memory of their parents' 
                courageous witness to Christ.
              </p>
              
              <p className="mb-6">
                Apronianus, seeing that deprivation and poverty had no effect upon the sisters' 
                resolve, summoned them before him. Demetria, after bravely confessing her faith 
                in Christ, fell dead at the feet of the tyrant, either from the stress of the 
                ordeal or through divine intervention. Her death left Bibiana alone to face the 
                full force of the governor's wrath.
              </p>
              
              <p className="mb-6">
                St. Bibiana was reserved for even greater sufferings. She was placed in the hands 
                of a wicked woman named Rufina, who was charged with the task of seducing the young 
                virgin away from her Christian faith. Rufina used both persuasion and physical 
                violence, employing blows as well as verbal coercion, but the Christian virgin 
                remained faithful to her vows of chastity and her commitment to Christ.
              </p>
              
              <p>
                Enraged at the constancy of this saintly virgin, Apronianus ordered her to be tied 
                to a pillar and beaten with scourges laden with lead plummets until she expired. 
                The saint endured these terrible torments with joy, seeing in her suffering an 
                opportunity to share in the passion of Christ. She died under the blows inflicted 
                by the hands of the executioner, her final moments a testament to her unwavering 
                faith and her complete trust in God's love and mercy.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Bibiana: Model of Virgin Martyrdom</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Virgin Martyrdom</h3>
              <p className="mb-6">
                St. Bibiana's most profound legacy is her example of virgin martyrdom, demonstrating 
                that purity of heart and body is worth any sacrifice. Her refusal to compromise her 
                chastity, even under the most extreme pressure and violence, serves as a powerful 
                witness to the value of virginity as a gift to God. Her example continues to inspire 
                young people to understand that their bodies are temples of the Holy Spirit and that 
                maintaining purity is a form of worship and sacrifice pleasing to God. In a world 
                that often devalues chastity and purity, St. Bibiana's witness reminds us that these 
                virtues are not outdated but are timeless expressions of love for God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Family Witness to Faith</h3>
              <p className="mb-6">
                St. Bibiana's story is also a powerful example of how families can witness to their 
                faith together. The entire family - father, mother, and both daughters - chose to 
                remain faithful to Christ even unto death. This family martyrdom demonstrates that 
                faith is not just an individual matter but something that can and should be shared 
                within families. Their example shows that when parents live their faith authentically, 
                their children learn to value their relationship with God above all else. This aspect 
                of St. Bibiana's legacy continues to inspire families to strengthen their faith together 
                and to support one another in living according to Christian values.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courage in the Face of Persecution</h3>
              <p className="mb-6">
                St. Bibiana's courage in the face of systematic persecution serves as a model for 
                Christians who face opposition for their faith today. Her ability to endure not only 
                physical suffering but also psychological pressure and attempts at seduction shows 
                the strength that comes from a deep relationship with Christ. Her example is particularly 
                relevant in our own time, when Christians around the world continue to face persecution 
                for their beliefs. St. Bibiana teaches us that faith is worth any sacrifice and that 
                God's grace is sufficient to sustain us even in the most difficult circumstances.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Resilience</h3>
              <p>
                St. Bibiana's spiritual resilience, demonstrated through her ability to maintain her 
                faith and purity despite the loss of her entire family and the most severe persecution, 
                shows the power of grace to sustain us in times of trial. Her story reminds us that 
                even when we feel most alone and abandoned, God is present with us, giving us the 
                strength to persevere. Her example teaches us that true holiness is not about avoiding 
                suffering but about finding God's presence and purpose even in the midst of the most 
                terrible trials. Her legacy continues to inspire all who face difficulties in their 
                spiritual journey, showing that with God's help, we can overcome any obstacle.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">December 2</div>
              <p className="text-gray-600">Feast of St. Bibiana, Virgin and Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Bibiana's feast day is celebrated on December 2nd, commemorating her martyrdom 
                and her witness to the Christian faith. This feast is particularly significant in 
                Rome, where she suffered and died, and where a church was built in her honor. The 
                feast serves as a reminder of the cost of discipleship and the importance of remaining 
                faithful to Christ even in the face of persecution. Churches throughout the world 
                may hold special Masses or prayer services on this day, particularly those dedicated 
                to virgin martyrs or to the theme of Christian purity and chastity.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Bibiana's feast day, many communities may choose to reflect on the themes 
                of virginity, martyrdom, and family witness to faith. Some may hold special prayer 
                services for young people, asking for St. Bibiana's intercession for those seeking 
                to maintain purity in a challenging world. The day also serves as an opportunity 
                to pray for families, asking for the grace to witness to faith together as St. Bibiana's 
                family did. Many may also take time to reflect on the value of chastity and the 
                importance of protecting this gift from God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                Devotees pray to St. Bibiana for purity of heart and body, for courage in the face 
                of persecution, for strength to remain faithful to Christ in difficult circumstances, 
                and for protection against temptations to impurity. Her intercession is particularly 
                sought by young people, by those who have made vows of chastity, by families seeking 
                to strengthen their faith together, and by all who need courage to stand up for their 
                beliefs. Her example reminds us that virginity is a precious gift from God and that 
                maintaining purity is a form of worship and sacrifice.
              </p>
            </div>
          </div>
        </section>

        {/* Patronage Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🛡️ Patronage</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Primary Patronages</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Virgin Martyrs:</strong> For her example of purity and martyrdom</li>
                  <li>• <strong>Rome:</strong> As the city where she suffered and died</li>
                  <li>• <strong>Epilepsy:</strong> For those suffering from neurological disorders</li>
                  <li>• <strong>Mental Illness:</strong> For those struggling with mental health</li>
                  <li>• <strong>Single Women:</strong> For her example of virginity and independence</li>
                  <li>• <strong>Families:</strong> For her family's witness to faith</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Purity:</strong> For those seeking to maintain chastity</li>
                  <li>• <strong>Persecuted Christians:</strong> For those facing religious persecution</li>
                  <li>• <strong>Family Unity:</strong> For families strengthening their faith together</li>
                  <li>• <strong>Young People:</strong> For guidance in maintaining virtue</li>
                  <li>• <strong>Orphans:</strong> For those who have lost their parents</li>
                  <li>• <strong>Spiritual Strength:</strong> For those facing trials and temptations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Prayers Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🙏 Prayers</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="space-y-8">
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Bibiana</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed St. Bibiana, virgin and martyr, you who remained pure and faithful 
                    even in the face of the most terrible persecution, intercede for us before the 
                    throne of God.
                  </p>
                  <p className="mb-4">
                    Help us to follow your example of courage and purity. Grant us the strength to 
                    maintain our chastity in a world that often devalues this precious gift, the 
                    courage to stand up for our faith even when it means facing opposition, and the 
                    grace to remain faithful to Christ in all circumstances.
                  </p>
                  <p className="mb-4">
                    Inspire us with your unwavering devotion to God and your commitment to virginity. 
                    Help us to understand that our bodies are temples of the Holy Spirit and that 
                    maintaining purity is a form of worship and sacrifice pleasing to God. Show us 
                    how to witness to our faith as a family, supporting one another in our spiritual journey.
                  </p>
                  <p>
                    Through your powerful intercession, may we find the courage to face persecution 
                    with dignity and faith, to maintain our purity with joy and determination, and 
                    to remain steadfast in our commitment to Christ even unto death. St. Bibiana, 
                    pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Bibiana, virgin and martyr, model of purity and courage, pray for us!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Saints Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">Related Saints</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/saints/st-agnes" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Virgin Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Agnes
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin and martyr who chose death over impurity at the age of thirteen.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-cecilia" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Virgin Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Cecilia
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and patroness of musicians and church music.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-lucy" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Virgin Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Lucy
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr who suffered for her faith and is patroness of the blind.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <Link
            href="/saints"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to All Saints
          </Link>
        </div>
      </div>
    </div>
  )
} 