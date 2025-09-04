import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Teresa of Calcutta - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Teresa of Calcutta, Mother Teresa.',
  keywords: [
    'st teresa of calcutta',
    'mother teresa',
    'missionaries of charity',
    'september 5 feast day',
    'catholic saints',
    'modern saints',
    'patron of world youth day'
  ],
  openGraph: {
    title: 'St. Teresa of Calcutta - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Teresa of Calcutta, Mother Teresa.',
    url: 'https://catholicbibleonline.com/saints/st-teresa-calcutta',
  },
  twitter: {
    title: 'St. Teresa of Calcutta - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Teresa of Calcutta, Mother Teresa.',
  }
}

export default function StTeresaCalcuttaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💙</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Teresa of Calcutta
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Mother Teresa and Patron of World Youth Day
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Teresa of Calcutta</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">September 5</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💙</div>
              <div className="text-sm text-gray-600">Modern Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Teresa of Calcutta</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The remarkable woman who would be known as Mother Teresa began life 
                named Agnes Gonxha Bojaxhiu. Born on August 26, 1910 in Skopje, she 
                was the youngest child born to Nikola and Drane Bojaxhiu. Receiving 
                her First Communion at the age of five, she was confirmed in November 
                1916. Her father died while she was only eight years old leaving her 
                family in financial straits. Gonxha's religious formation was assisted 
                by the vibrant Jesuit parish of the Sacred Heart in which she was very 
                involved as a youth. Subsequently moved to pursue missionary work, Gonxha 
                left her home in September 1928 at the age of 18 to join the Institute 
                of the Blessed Virgin Mary, known as the Sisters of Loreto, in Ireland. 
                She received the name Sister Mary Teresa after St. Therese of Lisieux. 
                In December of 1929, she departed for her first trip to India, arriving 
                in Calcutta. After making her First Profession of Vows in May 1931, 
                Sister Teresa was assigned to the Loreto Entally community in Calcutta 
                and taught at St. Mary's School for girls.
              </p>
              
              <p className="mb-6">
                Sister Teresa made her Final Profession of Vows, On May 24, 1937, becoming, 
                as she said, the "spouse of Jesus" for "all eternity." From that time 
                on she was called Mother Teresa. She continued teaching at St. Mary's 
                and in 1944 became the school's principal. Mother Teresa's twenty years 
                in Loreto were filled with profound happiness. Noted for her charity, 
                unselfishness and courage, her capacity for hard work and a natural 
                talent for organization, she lived out her consecration to Jesus, in 
                the midst of her companions, with fidelity and joy. It was on September 
                10, 1946 during a train ride from Calcutta to Darjeeling for her annual 
                retreat, that Mother Teresa received her "inspiration, her call within 
                a call." On that day, in a way she would never explain, Jesus' thirst 
                for love and for souls took hold of her heart and the desire to satiate 
                His thirst became the driving force of her life.
              </p>
              
              <p className="mb-6">
                By means of interior locutions and visions, Jesus revealed to her the 
                desire of His heart for "victims of love" who would "radiate His love 
                on souls." "Come be My light,'" He begged her. "I cannot go alone." 
                Jesus revealed His pain at the neglect of the poor, His sorrow at their 
                ignorance of Him and His longing for their love. He asked Mother Teresa 
                to establish a religious community, Missionaries of Charity, dedicated 
                to the service of the poorest of the poor. Nearly two years of testing 
                and discernment passed before Mother Teresa received permission to begin. 
                On August 17, 1948, she dressed for the first time in a white, blue-bordered 
                sari and passed through the gates of her beloved Loreto convent to enter 
                the world of the poor.
              </p>
              
              <p className="mb-6">
                After a short course with the Medical Mission Sisters in Patna, Mother 
                Teresa returned to Calcutta and found temporary lodging with the Little 
                Sisters of the Poor. On December 21, she went for the first time to 
                the slums. She visited families, washed the sores of some children, 
                cared for an old man lying sick on the road and nursed a woman dying 
                of hunger and tuberculosis. She started each day with communion then 
                went out, rosary in her hand, to find and serve Him amongst "the unwanted, 
                the unloved, the uncared for." After some months, she was joined, one 
                by one, by her former students. On October 7, 1950 the new congregation 
                of the Missionaries of Charity was officially established in the Archdiocese 
                of Calcutta. By the early 1960s, Mother Teresa began to send her Sisters 
                to other parts of India. The Decree of Praise granted to the Congregation 
                by Pope Paul VI in February 1965 encouraged her to open a house in Venezuela. 
                It was soon followed by foundations in Rome and Tanzania and, eventually, 
                on every continent.
              </p>
              
              <p className="mb-6">
                Starting in 1980 and continuing through the 1990s, Mother Teresa opened 
                houses in almost all of the communist countries, including the former 
                Soviet Union, Albania and Cuba. In order to respond better to both the 
                physical and spiritual needs of the poor, Mother Teresa founded the 
                Missionaries of Charity Brothers in 1963, in 1976 the contemplative 
                branch of the Sisters, in 1979 the Contemplative Brothers, and in 1984 
                the Missionaries of Charity Fathers. Mother Teresa's inspiration was 
                not limited to those with religious vocations. She formed the Co-Workers 
                of Mother Teresa and the Sick and Suffering Co-Workers, people of many 
                faiths and nationalities with who she shared her spirit of prayer, 
                simplicity, sacrifice and her apostolate of humble works of love.
              </p>
              
              <p>
                During the years of rapid growth the world began to turn its eyes towards 
                Mother Teresa and the work she had started. Numerous awards, beginning 
                with the Indian Padmashri Award in 1962 and notably the Nobel Peace 
                Prize in 1979, honored her work, while an increasingly interested media 
                began to follow her activities. She received both prizes and attention 
                'for the glory of God and in the name of the poor." There was a heroic 
                side of this great woman that was revealed only after her death. Hidden 
                from all eyes, even from those closest to her, was her interior life 
                marked by an experience of a deep, painful and abiding feeling of being 
                separated from God, even rejected by Him, along with an ever increasing 
                longing for His love. She called her inner experience, the darkness. 
                The "painful night" of her soul, which began around the time she started 
                her work for the poor and continued to the end of her life, led Mother 
                Teresa to an ever more profound union with God. Through the darkness 
                she mystically participated in the thirst of Jesus, in His painful and 
                burning longing for love, and she shared in the interior desolation 
                of the poor. On September 5, Mother Teresa's earthly life came to an 
                end. She was given the honor of a state funeral by the Government of 
                India and her body was buried in the Mother House of the Missionaries 
                of Charity. Her tomb quickly became a place of pilgrimage and prayer 
                for people of all faiths, rich and poor alike. Mother Teresa was beatified 
                by Pope John Paul II on October 19, 2003, and canonized by Pope Francis 
                on September 4, 2016.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Teresa of Calcutta: Mother to the Poor</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Founder of the Missionaries of Charity</h3>
              <p className="mb-6">
                St. Teresa of Calcutta's most enduring legacy is the foundation of 
                the Missionaries of Charity, a religious congregation dedicated to 
                serving "the poorest of the poor." What began as a single woman's 
                response to Christ's call has grown into a worldwide movement with 
                thousands of sisters, brothers, and lay volunteers serving in over 
                130 countries. The Missionaries of Charity continue Mother Teresa's 
                work of caring for the dying, the sick, the orphaned, the homeless, 
                and all those who are marginalized by society. The congregation's 
                distinctive white saris with blue borders have become a symbol of 
                hope and love for millions of people around the world. Mother Teresa's 
                vision of serving Christ in the person of the poor has inspired countless 
                people to dedicate their lives to serving others, regardless of their 
                religious beliefs or background. Her legacy reminds us that true holiness 
                is found in serving others, particularly those who are most in need, 
                and that every act of love, no matter how small, has eternal value.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Love and Compassion</h3>
              <p className="mb-6">
                St. Teresa of Calcutta's life serves as a powerful example of unconditional 
                love and compassion for all people, regardless of their religion, nationality, 
                or social status. Her famous words, "Do small things with great love," 
                encapsulate her philosophy of service and continue to inspire people 
                around the world. Mother Teresa's ability to see Christ in every person 
                she encountered, especially in the most destitute and suffering, demonstrates 
                her deep understanding of the dignity of every human being. Her work 
                with the dying in Calcutta, where she established homes for the terminally 
                ill, showed her belief that every person deserves to die with dignity 
                and love. Mother Teresa's example encourages us to look beyond our 
                own needs and to reach out to those who are suffering, lonely, or marginalized. 
                Her legacy reminds us that love is not just a feeling, but an action, 
                and that we are called to be instruments of God's love in the world. 
                Her life demonstrates that true happiness comes from serving others 
                and that the greatest poverty is not material, but spiritual - the 
                poverty of being unloved and unwanted.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to the Power of Prayer</h3>
              <p>
                St. Teresa of Calcutta's hidden spiritual life, marked by what she 
                called "the darkness" - a profound sense of spiritual dryness and separation 
                from God - reveals the depth of her faith and the power of prayer. Despite 
                experiencing this spiritual darkness for most of her adult life, Mother 
                Teresa continued to serve God and others with unwavering dedication. 
                Her ability to persevere in her mission despite her inner struggles 
                demonstrates her profound trust in God and her understanding that faith 
                is not about feelings, but about commitment and obedience to God's will. 
                Mother Teresa's example shows that even the holiest people can experience 
                spiritual darkness and that this darkness can be a path to deeper union 
                with God. Her life reminds us that prayer and service go hand in hand, 
                and that our spiritual struggles can become opportunities for growth 
                and deeper intimacy with God. Mother Teresa's legacy encourages us 
                to persevere in prayer and service, even when we don't feel God's presence, 
                trusting that He is always with us and working through us for the good 
                of others.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">September 5</div>
              <p className="text-gray-600">Feast of St. Teresa of Calcutta</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Teresa of Calcutta is celebrated on September 5th, 
                the anniversary of her death, during the early autumn season when the 
                Church reflects on the themes of harvest and service. This feast is 
                celebrated as a memorial in the Roman Catholic Church, recognizing 
                Mother Teresa's importance as a model of charity and service to the 
                poor. The feast falls during a time when many people are returning 
                to their regular routines after summer, making it an ideal time to 
                remember Mother Teresa's message about the importance of serving others 
                in our daily lives. The feast provides an opportunity to honor Mother 
                Teresa's memory and to reflect on how we can serve Christ in the person 
                of the poor and suffering in our own communities.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Teresa of Calcutta, many people participate 
                in special prayers and devotions to honor her memory and seek her intercession. 
                Churches, particularly those with connections to the Missionaries of 
                Charity or social justice ministries, hold special Masses and services. 
                Many people gather to pray for the poor and suffering, asking for St. 
                Teresa's intercession in helping them to serve those in need. The day 
                is also marked by acts of charity and service, with many people volunteering 
                at soup kitchens, visiting the sick, or performing other acts of kindness 
                in honor of Mother Teresa's example. Many people also take time to 
                reflect on their own call to serve others and to pray for the grace 
                to see Christ in every person they encounter. The feast is also a time 
                to reflect on how we can incorporate Mother Teresa's virtues of love, 
                compassion, and service into our daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of charity 
                and the ability to serve others with love and compassion. Many people 
                make special petitions for the poor and suffering, asking for St. Teresa's 
                intercession in helping them to find comfort and assistance. The day 
                is also a time to reflect on the importance of serving others and to 
                pray for the grace to see Christ in every person, especially those 
                who are most in need. St. Teresa's feast day encourages us to remember 
                that we are all called to be saints and that holiness is achieved through 
                love and service to others. It is also a time to pray for the grace 
                to persevere in prayer and service, even when we experience spiritual 
                dryness or difficulties. The feast reminds us that every act of love, 
                no matter how small, has eternal value and that we are called to be 
                instruments of God's love in the world.
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
                  <li>• <strong>World Youth Day:</strong> Patron saint of World Youth Day</li>
                  <li>• <strong>Missionaries of Charity:</strong> Patron of Missionaries of Charity</li>
                  <li>• <strong>Calcutta:</strong> Co-patron of Archdiocese of Calcutta</li>
                  <li>• <strong>Poor:</strong> Patron of the poor</li>
                  <li>• <strong>Dying:</strong> Patron of the dying</li>
                  <li>• <strong>Orphans:</strong> Patron of orphans</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Prayer:</strong> Helper in prayer life</li>
                  <li>• <strong>Charity:</strong> Patron of charity</li>
                  <li>• <strong>Service:</strong> Helper in service to others</li>
                  <li>• <strong>Compassion:</strong> Patron of compassion</li>
                  <li>• <strong>Love:</strong> Helper in showing love</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Teresa of Calcutta</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Teresa of Calcutta, Mother to the poor, help me to see 
                    Christ in every person I encounter.
                  </p>
                  <p className="mb-4">
                    Teach me to serve others with love and compassion, especially those 
                    who are most in need. Help me to do small things with great love 
                    and to persevere in prayer and service even when it is difficult.
                  </p>
                  <p>
                    St. Teresa, pray for me that I may have the courage to serve others, 
                    the compassion to love the poor, and the faith to trust in God's 
                    plan for my life. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for the Poor</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Teresa of Calcutta, patron of the poor and suffering, intercede 
                    for all those who are in need.
                  </p>
                  <p>
                    Help them to find comfort and assistance, and inspire us to serve 
                    them with love and compassion. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Teresa of Calcutta, pray for us!"
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
            <Link href="/saints/st-therese-lisieux" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thérèse of Lisieux
                </h3>
                <p className="text-gray-700 text-sm">
                  Little Flower, after whom Mother Teresa was named.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-xavier" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis Xavier
                </h3>
                <p className="text-gray-700 text-sm">
                  Co-patron of the Archdiocese of Calcutta.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john-paul-ii" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John Paul II
                </h3>
                <p className="text-gray-700 text-sm">
                  Pope who beatified Mother Teresa.
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