import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Gerard Majella - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Gerard Majella, patron of expectant mothers.',
  keywords: [
    'st gerard majella',
    'saint gerard majella',
    'gerard majella',
    'october 16 feast day',
    'catholic saints',
    'modern saints',
    'patron of expectant mothers'
  ],
  openGraph: {
    title: 'St. Gerard Majella - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Gerard Majella, patron of expectant mothers.',
    url: 'https://catholicbibleonline.com/saints/st-gerard-majella',
  },
  twitter: {
    title: 'St. Gerard Majella - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Gerard Majella, patron of expectant mothers.',
  }
}

export default function StGerardMajellaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🤱</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Gerard Majella
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron of Expectant Mothers
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Gerard Majella</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 16</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🤱</div>
              <div className="text-sm text-gray-600">Modern Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Gerard Majella</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Gerard Majella is the patron of expectant mothers. He was born 
                in 1726 in Muro, Italy to a family of seven. Majella grew up in 
                a poverty with a great respect for the poor. As he was just 12 
                when his father passed away, he was forced to grow up fast. Shortly 
                after his father's death, his mother sent him away to live with 
                his uncle and learn to become a tailor, like his father. After 
                a few years of working as a sewing apprentice, Majella took on 
                a job with the local Bishop of Lacedonia as a servant. Once Majella 
                began earning money as a journeyman at the age of 21, he split 
                his earnings with his mother, the poor of Muro and the rest in 
                offerings for the poor souls. As the days passed, Majella began 
                to grow pale and thin, often fasting and in prayer at a nearby Cathedral.
              </p>
              
              <p className="mb-6">
                He applied to the Capuchin monastery at Muro twice, but was turned 
                down both times. Majella was told his health was not well enough 
                for such a strenuous life. However, Majella did not give up. In 
                1749, at the age of 23, he joined the Congregation of the Most 
                Holy Redeemer and just three years later became a professed lay 
                brother. Majella lived with the three vows of Poverty, Chasity 
                and Obedience. He stayed close with the poor and worked very many 
                different jobs. He served as sacristan, gardener, porter, infirmarian, 
                and tailor. However, because of his great piety, extraordinary 
                wisdom, and his gift of reading consciences, he was permitted to 
                counsel communities of religious women. Majella was often called 
                on by the poor and the sick. Wherever his presence was demanded 
                he graciously presented himself. He was there to "do the Will of God."
              </p>
              
              <p className="mb-6">
                This humble servant of God also had faculties associated with certain 
                mystics including, levitation, bi-location and the ability to read 
                souls. His charity, obedience, and selfless service as well as 
                his ceaseless mortification for Christ, made him the perfect model 
                of lay brothers. Throughout his years of life, several reported 
                miracles are tied to Majella including, restoring a boy's life 
                after he fell from a high cliff; blessing a poor farmer's crops, 
                ridding it of mice; blessing a poor family's supply of wheat, causing 
                it to last until the next harvest; and he multiplied bread for 
                the poor on several occasions.
              </p>
              
              <p className="mb-6">
                Along with his miracles effected through prayers for woman in labor, 
                Majella's last recorded miracle is one that many credit toward 
                his becoming the patron of expectant mothers. Shortly before his 
                death, Majella encountered a young girl. He had dropped his handkerchief 
                and she set out to return it, only to be told to keep it. Majella 
                told her she "may need it someday." Years after Majella's passing, 
                the young girl became married and with child. She unexpectedly 
                went into labor and was on the verge of losing her baby. She called 
                for Majella's handkerchief to be applied to her. Almost immediately, 
                her pain abated and she proceeded to give birth to a healthy child, 
                something very rare during that time.
              </p>
              
              <p>
                Even as Majella became ill with tuberculosis, he only desired to 
                live in God's will. His one last request was that a small placard 
                be placed on his door stating, "Here the will of God is done, as 
                God wills, and as long as God wills." Majella was told the Will 
                of God wanted him to get better, and almost at once he became well. 
                However, this only lasted for a month and quickly he became very 
                ill once again. St. Gerard Majella died of disease on October 
                16, 1755 at the age of 29, living in the religious life for six 
                years. Due to the numerous miracles performed through Majella's 
                prayers, proceedings for his canonization began shortly after 
                his death. In 1893, Majella was beatified by Pope Leo XIII and 
                on December 11, 1904, Pope Pius X canonized the man of God.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Gerard Majella: Patron of Expectant Mothers</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Humility and Service</h3>
              <p className="mb-6">
                St. Gerard Majella's most enduring legacy is his extraordinary 
                example of humility and selfless service to others. Despite being 
                rejected twice by the Capuchin monastery due to his poor health, 
                Gerard never gave up on his desire to serve God and others. His 
                life as a lay brother in the Redemptorist order demonstrates that 
                holiness is not limited to priests or those in prominent positions, 
                but is accessible to everyone through simple acts of love and service. 
                Gerard's willingness to perform the most menial tasks - as sacristan, 
                gardener, porter, infirmarian, and tailor - shows that true greatness 
                comes from serving others with love and humility. His legacy reminds 
                us that we are all called to be servants of God and that our worth 
                comes not from our position or status, but from our willingness 
                to serve others with love and humility.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Expectant Mothers</h3>
              <p className="mb-6">
                St. Gerard Majella's special patronage of expectant mothers stems 
                from his extraordinary compassion and the miraculous intercession 
                he provided for women in childbirth. The famous story of his handkerchief, 
                which he gave to a young girl with the words "you may need it someday," 
                and which later saved her life during a difficult childbirth, demonstrates 
                his prophetic insight and his special care for mothers and unborn 
                children. Gerard's legacy teaches us that every human life is precious 
                from the moment of conception and that we should pray for and support 
                expectant mothers and their unborn children. His example encourages 
                us to be advocates for life and to support families during the 
                beautiful but sometimes challenging time of pregnancy and childbirth. 
                Gerard's patronage also reminds us of the importance of prayer 
                and trust in God during difficult times, especially when the lives 
                of mothers and children are at risk.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to God's Will</h3>
              <p>
                St. Gerard Majella's complete surrender to God's will, even in 
                the face of suffering and death, makes him a powerful example 
                of trust and obedience. His famous request for a placard on his 
                door stating "Here the will of God is done, as God wills, and 
                as long as God wills" demonstrates his complete acceptance of 
                whatever God allowed in his life. Gerard's legacy teaches us 
                that true peace and joy come from accepting God's will for our 
                lives, even when it involves suffering or difficulties. His example 
                challenges us to examine our own response to God's will and to 
                ask ourselves whether we are truly willing to accept whatever 
                God allows in our lives. Gerard's story also reminds us that 
                God's will is always for our good, even when we cannot see how, 
                and that our suffering can be redemptive when offered to God 
                with love and trust.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">October 16</div>
              <p className="text-gray-600">Feast of St. Gerard Majella</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Gerard Majella is celebrated on October 16th, 
                during the autumn season when the Church reflects on the themes 
                of harvest and thanksgiving. This feast is celebrated as a memorial 
                in the Roman Catholic Church, recognizing Gerard's importance as 
                the patron of expectant mothers and a model of humility and service. 
                The feast falls during a time when many people are reflecting on 
                the blessings of family and the gift of life, making it an ideal 
                time to remember Gerard's special care for mothers and unborn 
                children. The feast provides an opportunity to honor Gerard's 
                memory and to reflect on how we can better serve and support 
                expectant mothers and families. It is also a time to pray for 
                all those who are expecting children, for those who are struggling 
                with infertility, and for all families who are welcoming new life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Gerard Majella, many people participate 
                in special prayers and devotions to honor his memory and seek 
                his intercession. Churches, particularly those with connections 
                to pro-life ministries or family ministries, hold special Masses 
                and services. Many expectant mothers and families gather to pray 
                for safe pregnancies and healthy births, asking for St. Gerard's 
                intercession in helping them through the challenges of pregnancy 
                and childbirth. The day is also marked by prayers for all those 
                who work in healthcare, particularly those who care for mothers 
                and children, asking for Gerard's guidance in helping them to 
                serve with compassion and skill. Many people also take time to 
                reflect on their own call to serve others and to pray for the 
                grace to be more humble and selfless in their daily lives. The 
                feast is also a time to reflect on how we can better support 
                families and to ensure that every child is welcomed with love 
                and care.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of humility 
                and the ability to serve others with love and selflessness. Many 
                people make special petitions for expectant mothers and families, 
                asking for St. Gerard's intercession in helping them to have 
                safe pregnancies and healthy births. The day is also a time to 
                reflect on the importance of accepting God's will and to pray 
                for the grace to trust in God's plan for our lives, even when 
                it involves difficulties or suffering. St. Gerard's feast day 
                encourages us to remember that we are all called to be servants 
                of God and that true greatness comes from serving others with 
                love and humility. It is also a time to pray for the grace to 
                be advocates for life and to support families in welcoming and 
                caring for new life. The feast reminds us that every human life 
                is precious and that we should do all we can to protect and 
                support mothers and their unborn children.
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
                  <li>• <strong>Expectant Mothers:</strong> Patron of expectant mothers</li>
                  <li>• <strong>Childbirth:</strong> Patron of safe childbirth</li>
                  <li>• <strong>Unborn Children:</strong> Patron of unborn children</li>
                  <li>• <strong>Mothers:</strong> Patron of mothers</li>
                  <li>• <strong>Lay Brothers:</strong> Patron of lay brothers</li>
                  <li>• <strong>Good Confessions:</strong> Patron of good confessions</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Humility:</strong> Helper in practicing humility</li>
                  <li>• <strong>Service:</strong> Patron of selfless service</li>
                  <li>• <strong>Obedience:</strong> Helper in obedience to God's will</li>
                  <li>• <strong>Protection:</strong> Patron of protection</li>
                  <li>• <strong>Miracles:</strong> Helper in miraculous interventions</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Gerard Majella</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Great Saint Gerard, beloved servant of Jesus Christ, perfect 
                    imitator of your meek and humble Savior, and devoted Child 
                    of the Mother of God: enkindle within my heart one spark 
                    of that heavenly fire of charity which glowed in your heart 
                    and made you an angel of love.
                  </p>
                  <p className="mb-4">
                    O glorious Saint Gerard, because when falsely accused of crime, 
                    you did bear, like your Divine master, without murmur or complaint, 
                    the calumnies of wicked men, you have been raised up by God 
                    as the Patron and Protector of expectant mothers. Preserve 
                    me from danger and from the excessive pains accompanying childbirth, 
                    and shield the child which I now carry, that it may see the 
                    light of day and receive the lustral waters of baptism through 
                    Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Expectant Mothers</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Gerard Majella, patron of expectant mothers, intercede 
                    for all mothers who are expecting children.
                  </p>
                  <p>
                    Help them to have safe pregnancies and healthy births, and 
                    protect both mother and child throughout the journey of pregnancy. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Gerard Majella, pray for us!"
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
            <Link href="/saints/st-elizabeth-mother-john" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Elizabeth
                </h3>
                <p className="text-gray-700 text-sm">
                  Mother of John the Baptist and patron of mothers.
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