import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Dymphna - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Dymphna, patron saint of mental illness and victims of incest.',
  keywords: [
    'st dymphna',
    'saint dymphna',
    'mental illness',
    'may 15 feast day',
    'catholic saints',
    'martyr saints',
    'patron of mental health'
  ],
  openGraph: {
    title: 'St. Dymphna - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Dymphna, patron saint of mental illness and victims of incest.',
    url: 'https://catholicbibleonline.com/saints/st-dymphna',
  },
  twitter: {
    title: 'St. Dymphna - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Dymphna, patron saint of mental illness and victims of incest.',
  }
}

export default function StDymphnaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Dymphna
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron Saint of Mental Illness and Victims of Incest
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Dymphna</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">May 15</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Martyr Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Dymphna</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Dymphna was born in Ireland sometime in the seventh century to a 
                pagan father, Damon, and a devout Christian mother. From an early age, 
                Dymphna was raised in the Christian faith by her mother, who instilled 
                in her a deep love for God and a desire to serve Him. When she was fourteen 
                years old, Dymphna consecrated herself to Christ and took a vow of chastity, 
                dedicating her life to God and promising to remain pure and devoted to 
                Him. This vow would later become the source of her martyrdom, as it 
                conflicted with the twisted desires of her own father, who would become 
                mentally unstable after the death of his beloved wife.
              </p>
              
              <p className="mb-6">
                Soon after Dymphna's consecration to Christ, her mother died, and her 
                father, who had loved his wife deeply, began to suffer a rapid deterioration 
                of his mental stability. So unhinged was Damon that the King's counselors 
                suggested he remarry, hoping that a new wife would help restore his mental 
                health. Though he was still grieving for his wife, Damon agreed to remarry 
                if a woman as beautiful as she could be found. He sent messengers throughout 
                his town and other lands to find a woman of noble birth who resembled 
                his wife and would be willing to marry him. However, when none could 
                be found, his evil advisors whispered sinful suggestions to marry his 
                own daughter. So twisted were Damon's thoughts that he recognized only 
                his wife when he looked upon Dymphna, and so he consented to the arrangement.
              </p>
              
              <p className="mb-6">
                When Dymphna heard of her father's misguided plot, she fled her castle 
                with her confessor, a priest named Gerebran, two trusted servants, and 
                the king's fool. The group sailed toward what is now called Belgium, 
                seeking refuge from her father's madness. They eventually settled in 
                the town of Geel, where Dymphna used her wealth to build a hospital 
                for the poor and sick, continuing her ministry of charity and service 
                to others. However, in using her wealth, her father was able to discover 
                her location and track her down to Belgium.
              </p>
              
              <p className="mb-6">
                When Damon found his daughter in Belgium, he traveled to Geel and captured 
                them. He ordered the priest's head to be separated from his body, executing 
                Gerebran for helping Dymphna escape. Damon then attempted to convince 
                Dymphna to return to Ireland and marry him, but she steadfastly refused, 
                remaining faithful to her vow of chastity and her commitment to Christ. 
                When Dymphna refused his demands, Damon became enraged and drew his sword. 
                He struck Dymphna's head from her shoulders, martyring her for her faith 
                and her commitment to purity. When she died, Dymphna was only fifteen 
                years old, making her one of the youngest martyrs in the history of the 
                Church. After her father left Geel, the residents collected both Dymphna 
                and Gerebran's remains and laid them to rest in a cave, honoring their 
                sacrifice and their witness to Christ.
              </p>
              
              <p>
                In defense of her purity and her faith, Dymphna received the crown of 
                martyrdom around the year 620 and became known as the "Lily of Éire." 
                Her martyrdom at such a young age and her courage in the face of such 
                a terrible situation made her a powerful example of faith and purity. 
                In 1349, a church honoring St. Dymphna was built in Geel, and by 1480, 
                so many pilgrims were arriving in need of treatment for mental ills 
                that the church was expanded. The expanded sanctuary was eventually 
                overflowing again, leaving the townspeople to accept them into their 
                homes, which began a tradition of care for the mentally ill that continues 
                to this day. Unfortunately, in the 15th century, the original St. Dymphna 
                Church in Geel burned to the ground, and the magnificent Church of St. 
                Dymphna was erected and consecrated in 1532, where it still stands above 
                the location her body was originally buried. Many miracles have been 
                proven to take place at her shrine in the church erected in her honor, 
                and her remains were placed in a silver reliquary in the church. Some 
                of her remains can also be found at the Shrine to Saint Dymphna in the 
                United States.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Dymphna: Patron Saint of Mental Illness</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Patron Saint of Mental Illness</h3>
              <p className="mb-6">
                St. Dymphna's designation as the patron saint of mental illness recognizes 
                her powerful intercession for those suffering from mental and emotional 
                afflictions. Her own father's mental instability and the tragic consequences 
                that resulted from it have made her a natural advocate for those struggling 
                with mental health issues. The tradition of care for the mentally ill 
                that began in Geel, Belgium, where Dymphna was martyred, continues to 
                this day and serves as a model for how society should treat those suffering 
                from mental illness. The fact that the townspeople of Geel began accepting 
                mentally ill pilgrims into their homes when the church became overcrowded 
                demonstrates the compassion and care that Dymphna's example inspired. 
                Her legacy encourages us to treat those suffering from mental illness 
                with dignity, respect, and love, recognizing that they are beloved children 
                of God who deserve our care and support.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Advocate for Victims of Abuse</h3>
              <p className="mb-6">
                St. Dymphna's life and martyrdom also make her a powerful advocate for 
                victims of abuse, particularly victims of incest and sexual violence. 
                Her courage in fleeing from her father's twisted desires and her refusal 
                to compromise her purity, even at the cost of her life, demonstrates 
                the importance of standing up against abuse and protecting one's dignity 
                and worth as a child of God. Dymphna's example shows that no one should 
                be forced to endure abuse or exploitation, and that it is always right 
                to seek safety and protection from those who would harm us. Her legacy 
                encourages victims of abuse to speak out, seek help, and know that they 
                are not alone in their suffering. Dymphna's intercession provides hope 
                and strength to those who are struggling to heal from the trauma of 
                abuse and to rebuild their lives with dignity and self-respect.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Purity and Courage</h3>
              <p>
                St. Dymphna's life serves as a powerful example of purity and courage 
                in the face of unimaginable circumstances. Her vow of chastity at the 
                age of fourteen and her unwavering commitment to that vow, even when 
                faced with the threat of death, demonstrates the importance of remaining 
                faithful to one's principles and values. Dymphna's courage in fleeing 
                from her home and starting a new life in a foreign land shows that it 
                is sometimes necessary to make difficult choices to protect one's safety 
                and dignity. Her willingness to use her wealth to help others, building 
                a hospital for the poor and sick, demonstrates her commitment to charity 
                and service. Dymphna's legacy reminds us that true strength comes from 
                our relationship with God and that we are called to be witnesses to Christ 
                in all circumstances, even when it means facing great danger or making 
                difficult sacrifices.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">May 15</div>
              <p className="text-gray-600">Feast of St. Dymphna</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Dymphna is celebrated on May 15th, during the spring 
                season when the Church reflects on the themes of new life and growth. 
                This feast is celebrated as a memorial in the Roman Catholic Church, 
                recognizing Dymphna's importance as a virgin martyr and patron saint 
                of mental illness. The feast falls during a time when many people are 
                experiencing the renewal of spring, making it an ideal time to remember 
                Dymphna's example of courage and her powerful intercession for those 
                suffering from mental illness. The feast provides an opportunity to 
                honor Dymphna's memory and to reflect on the importance of caring for 
                those who are suffering from mental and emotional afflictions.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Dymphna, many people participate in special 
                prayers and devotions to honor her memory and seek her intercession. 
                Churches, particularly those dedicated to St. Dymphna, hold special 
                Masses and services. Many people gather to pray for those suffering 
                from mental illness and for victims of abuse, asking for St. Dymphna's 
                intercession in helping them to find healing and peace. The day is also 
                marked by prayers for mental health awareness and for the strength to 
                support those who are struggling with mental illness. Many people also 
                take time to reflect on how they can better support and care for those 
                who are suffering from mental health issues and to pray for the grace 
                to be more compassionate and understanding. The feast is also a time 
                to reflect on how we can incorporate Dymphna's virtues of courage, 
                purity, and charity into our daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of compassion 
                and the ability to support those who are suffering from mental illness. 
                Many people make special petitions for those struggling with mental 
                health issues and for victims of abuse, asking for St. Dymphna's intercession 
                in helping them to find healing and peace. The day is also a time to 
                reflect on the importance of mental health awareness and to pray for 
                the grace to be more understanding and supportive of those who are suffering. 
                St. Dymphna's feast day encourages us to remember that we are all called 
                to care for one another and to support those who are struggling, especially 
                those who are suffering from mental illness or the effects of abuse. 
                It is also a time to pray for the courage to stand up against injustice 
                and to protect the dignity and worth of all people, especially the most 
                vulnerable among us.
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
                  <li>• <strong>Mental Illness:</strong> Patron saint of mental illness</li>
                  <li>• <strong>Nervous Disorders:</strong> Patron of nervous disorders</li>
                  <li>• <strong>Emotional Illness:</strong> Patron of emotional illness</li>
                  <li>• <strong>Victims of Incest:</strong> Patron of victims of incest</li>
                  <li>• <strong>Runaways:</strong> Patron of runaways</li>
                  <li>• <strong>Mental Health:</strong> Patron of mental health</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Prayer:</strong> Helper in prayer life</li>
                  <li>• <strong>Healing:</strong> Helper in mental healing</li>
                  <li>• <strong>Protection:</strong> Patron of protection</li>
                  <li>• <strong>Courage:</strong> Helper in finding courage</li>
                  <li>• <strong>Purity:</strong> Patron of purity</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Dymphna</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Hear us, O God, Our Saviour, as we honor St. Dymphna, patron of 
                    those afflicted with mental and emotional illness.
                  </p>
                  <p>
                    Help us to be inspired by her example and comforted by her merciful 
                    help. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Mental Health</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Dymphna, patron saint of mental illness, intercede for all 
                    those suffering from mental and emotional afflictions.
                  </p>
                  <p>
                    Help them to find healing, peace, and the strength to overcome their 
                    struggles. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Dymphna, pray for us!"
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
            <Link href="/saints/st-rita" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Rita of Cascia
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron of impossible cases and difficult marriages.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joan-arc" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joan of Arc
                </h3>
                <p className="text-gray-700 text-sm">
                  Young martyr and patron saint of France.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-philomena" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Philomena
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and patron saint of youth.
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