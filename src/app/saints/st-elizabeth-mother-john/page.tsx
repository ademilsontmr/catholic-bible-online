import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Elizabeth - Mother of John the Baptist | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Elizabeth, mother of John the Baptist and cousin of the Virgin Mary.',
  keywords: [
    'st elizabeth',
    'saint elizabeth',
    'elizabeth mother of john the baptist',
    'november 5 feast day',
    'catholic saints',
    'biblical saints',
    'mother of john the baptist'
  ],
  openGraph: {
    title: 'St. Elizabeth - Mother of John the Baptist',
    description: 'Discover the life, legacy, and feast day of St. Elizabeth, mother of John the Baptist and cousin of the Virgin Mary.',
    url: 'https://catholicbibleonline.com/saints/st-elizabeth-mother-john',
  },
  twitter: {
    title: 'St. Elizabeth - Mother of John the Baptist',
    description: 'Discover the life, legacy, and feast day of St. Elizabeth, mother of John the Baptist and cousin of the Virgin Mary.',
  }
}

export default function StElizabethMotherJohnPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👶</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Elizabeth
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Mother of John the Baptist
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Elizabeth</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">November 5</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👶</div>
              <div className="text-sm text-gray-600">Biblical Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Elizabeth</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                What we know of St. Elizabeth comes from the Gospel, the book of Luke, 
                in particular. In Luke, Elizabeth, a daughter of the line of Aaron, 
                and the wife of Zechariah, was "righteous before God" and was "blameless" 
                but childless. Elizabeth is also a cousin to the Virgin Mary. Zechariah, 
                desiring a child, went to pray in the temple and was told by the angel 
                Gabriel, "Do not be afraid, Zechariah; your prayer has been heard. 
                Your wife Elizabeth will bear you a son, and you are to call him John. 
                He will be a joy and delight to you, and many will rejoice because 
                of his birth, for he will be great in the sight of the Lord. He is 
                never to take wine or other fermented drink, and he will be filled 
                with the Holy Spirit even before he is born." (Luke 1:13-15).
              </p>
              
              <p className="mb-6">
                Zechariah was skeptical because both himself and his wife were elderly. 
                For his skepticism, Zechariah was rendered mute until the prophecy 
                had been fulfilled. Elizabeth became pregnant shortly thereafter and 
                she rejoiced. Gabriel then visited the Virgin Mary at Nazareth, telling 
                her that she would conceive of the Holy Spirit and become the mother 
                of Jesus. Mary then visited Elizabeth, and her baby leapt in her womb. 
                Filled with the Holy Spirit, Elizabeth proclaimed to Mary, "Blessed 
                are you among women, and blessed is the child you will bear! But why 
                am I so favored, that the mother of my Lord should come to me? As 
                soon as the sound of your greeting reached my ears, the baby in my 
                womb leaped for joy. Blessed is she who has believed that the Lord 
                would fulfill his promises to her!" (Luke 1:41-45).
              </p>
              
              <p className="mb-6">
                Mary visited with Elizabeth for three months, both women pregnant 
                with child. After Mary returned home, Elizabeth gave birth to a son 
                and named him John. This child was chosen by God to be John the Baptist. 
                John would baptize Christ as an example to all, that all must be reborn 
                of water and spirit. Although Elizabeth's neighbors assumed the child 
                would be named Zechariah, her husband insisted that John be his name. 
                This astonished the neighbors for there were no men named John in 
                Elizabeth's family, but Zechariah's insistence ended the debate. At 
                the moment, Zechariah insisted that they obey the will of God, and 
                name him John, his speech returned.
              </p>
              
              <p>
                After this, there is no more mention in the Bible about Elizabeth. 
                There are mentions of Elizabeth in the apocryphal works, but these 
                are not within the cannon of the Bible. In the Apocrypha, it mentions 
                that her husband, Zechariah, was murdered in the temple. St. Elizabeth's 
                feast day is celebrated on November 5.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Elizabeth: Mother of the Forerunner</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Faithful Waiting</h3>
              <p className="mb-6">
                St. Elizabeth's most enduring legacy is her extraordinary example 
                of faithful waiting and trust in God's promises. Despite being elderly 
                and childless, Elizabeth remained "righteous before God" and "blameless" 
                in her faith. Her story teaches us that God's timing is perfect and 
                that He often works in ways that seem impossible to human understanding. 
                Elizabeth's patience and faithfulness during her years of barrenness 
                demonstrate that true holiness is not dependent on our circumstances 
                but on our relationship with God. Her legacy reminds us that we should 
                trust in God's promises even when they seem impossible, and that 
                our faithfulness in difficult times prepares us for the blessings 
                that God has in store for us. Elizabeth's example challenges us to 
                remain faithful to God regardless of our circumstances and to trust 
                that He is working all things for our good, even when we cannot see 
                how.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to the Power of Prayer</h3>
              <p className="mb-6">
                St. Elizabeth's story is a powerful witness to the efficacy of prayer 
                and God's faithfulness in answering the prayers of His people. The 
                angel Gabriel told Zechariah that his prayer had been heard, indicating 
                that the couple had been praying for a child for many years. Elizabeth's 
                pregnancy in old age demonstrates that God hears our prayers and 
                answers them in His perfect timing. Her legacy teaches us that we 
                should never give up on prayer, even when our requests seem impossible 
                or when we have been praying for years without seeing results. Elizabeth's 
                example encourages us to persevere in prayer and to trust that God 
                is working behind the scenes, even when we cannot see His hand at 
                work. Her story also reminds us that God's answers to prayer often 
                exceed our expectations, as John the Baptist became not just a son 
                to Elizabeth and Zechariah, but the forerunner of the Messiah.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Example of Holy Motherhood</h3>
              <p>
                St. Elizabeth's role as the mother of John the Baptist makes her 
                a powerful example of holy motherhood and the sacred vocation of 
                raising children for God. Her pregnancy was marked by the Holy Spirit, 
                and her unborn child recognized the presence of the unborn Jesus 
                in Mary's womb. This miraculous event demonstrates the sanctity of 
                human life from conception and the special role that mothers play 
                in God's plan of salvation. Elizabeth's legacy teaches us that motherhood 
                is a sacred calling and that parents have a crucial role in preparing 
                their children for God's service. Her example encourages mothers 
                to pray for their children, to raise them in the faith, and to trust 
                that God has a special plan for each child's life. Elizabeth's story 
                also reminds us that our children are not our own but are gifts from 
                God, entrusted to us for a time to raise them in His ways and to 
                prepare them for their unique mission in life.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">November 5</div>
              <p className="text-gray-600">Feast of St. Elizabeth</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Elizabeth is celebrated on November 5th, during 
                the autumn season when the Church reflects on the themes of harvest 
                and thanksgiving. This feast is celebrated as a memorial in the 
                Roman Catholic Church, recognizing Elizabeth's importance as the 
                mother of John the Baptist and her role in salvation history. The 
                feast falls during a time when many people are reflecting on the 
                blessings of family and the gift of children, making it an ideal 
                time to remember Elizabeth's example of faithful motherhood and 
                trust in God's promises. The feast provides an opportunity to honor 
                Elizabeth's memory and to reflect on how we can trust in God's timing 
                and remain faithful to His promises in our own lives. It is also 
                a time to pray for families, for those who are waiting for children, 
                and for all mothers who are raising their children in the faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Elizabeth, many people participate in special 
                prayers and devotions to honor her memory and seek her intercession. 
                Churches, particularly those with connections to family ministries 
                or pro-life work, hold special Masses and services. Many families 
                gather to pray for their children and for the gift of children, 
                asking for St. Elizabeth's intercession in helping them to trust 
                in God's timing and to remain faithful to His promises. The day 
                is also marked by prayers for those who are struggling with infertility 
                or waiting for children, asking for Elizabeth's intercession in 
                helping them to remain hopeful and faithful. Many people also take 
                time to reflect on their own families and to pray for the grace 
                to raise their children in the faith, following Elizabeth's example 
                of holy motherhood. The feast is also a time to reflect on how 
                we can trust in God's promises and remain faithful to Him even 
                when our circumstances seem difficult or impossible.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of faith 
                and the ability to trust in God's promises even when they seem 
                impossible. Many people make special petitions for families and 
                for those who are waiting for children, asking for St. Elizabeth's 
                intercession in helping them to remain hopeful and faithful. The 
                day is also a time to reflect on the importance of prayer and to 
                pray for the grace to persevere in prayer even when we do not see 
                immediate results. St. Elizabeth's feast day encourages us to remember 
                that God hears our prayers and answers them in His perfect timing, 
                and that we should never give up on prayer. It is also a time to 
                pray for the grace to be faithful to God regardless of our circumstances 
                and to trust that He is working all things for our good. The feast 
                reminds us that our faithfulness in difficult times prepares us 
                for the blessings that God has in store for us.
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
                  <li>• <strong>Mothers:</strong> Patron of mothers and expectant mothers</li>
                  <li>• <strong>Infertility:</strong> Patron of those struggling with infertility</li>
                  <li>• <strong>Pregnancy:</strong> Patron of pregnant women</li>
                  <li>• <strong>Families:</strong> Patron of families</li>
                  <li>• <strong>Prayer:</strong> Patron of those who pray for children</li>
                  <li>• <strong>Faithfulness:</strong> Patron of faithful waiting</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Trust:</strong> Helper in trusting God's promises</li>
                  <li>• <strong>Patience:</strong> Patron of patience in waiting</li>
                  <li>• <strong>Hope:</strong> Helper in maintaining hope</li>
                  <li>• <strong>Family Life:</strong> Patron of holy family life</li>
                  <li>• <strong>Miracles:</strong> Helper in miraculous conceptions</li>
                  <li>• <strong>Intercession:</strong> Powerful advocate in heaven</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Elizabeth</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Elizabeth, mother of John the Baptist and model of faithful 
                    waiting, help me to trust in God's promises even when they seem impossible.
                  </p>
                  <p className="mb-4">
                    Teach me to remain faithful to God regardless of my circumstances, 
                    and guide me in persevering in prayer even when I do not see immediate 
                    results. Help me to trust that God hears my prayers and answers 
                    them in His perfect timing.
                  </p>
                  <p>
                    St. Elizabeth, pray for me that I may have the faith to wait 
                    patiently for God's promises, the hope to remain joyful in difficult 
                    times, and the trust to believe that God is working all things 
                    for my good. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Families</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Elizabeth, patron of families and holy motherhood, intercede 
                    for all families and those who are waiting for children.
                  </p>
                  <p>
                    Help us to trust in God's timing and to remain faithful to His 
                    promises, even when our circumstances seem difficult or impossible. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Elizabeth, pray for us!"
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
            <Link href="/saints/st-mary-virgin" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Mary the Virgin
                </h3>
                <p className="text-gray-700 text-sm">
                  Cousin of St. Elizabeth and Mother of Jesus.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-anne" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anne
                </h3>
                <p className="text-gray-700 text-sm">
                  Mother of the Virgin Mary and grandmother of Jesus.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joachim" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joachim
                </h3>
                <p className="text-gray-700 text-sm">
                  Father of the Virgin Mary and grandfather of Jesus.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <Link
            href="/saints"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Saints
          </Link>
        </div>
      </div>
    </div>
  )
} 