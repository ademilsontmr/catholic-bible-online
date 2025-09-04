import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Brigid - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Brigid, patron of Ireland and founder of monastic life.',
  keywords: [
    'st brigid',
    'saint brigid',
    'brigid of ireland',
    'february 1 feast day',
    'catholic saints',
    'early saints',
    'patron of ireland'
  ],
  openGraph: {
    title: 'St. Brigid - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Brigid, patron of Ireland and founder of monastic life.',
    url: 'https://catholicbibleonline.com/saints/st-brigid',
  },
  twitter: {
    title: 'St. Brigid - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Brigid, patron of Ireland and founder of monastic life.',
  }
}

export default function StBrigidPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔥</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Brigid
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron of Ireland and Keeper of the Hearth
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Brigid</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">February 1</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🔥</div>
              <div className="text-sm text-gray-600">Early Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Brigid</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Brigid was born Brigit, and shares a name with a Celtic goddess 
                from whom many legends and folk customs are associated. There is much 
                debate over her birthparents, but it is widely believed her mother 
                was Brocca, a Christian baptized by Saint Patrick, and her father 
                was Dubthach, a Leinster chieftain. Brocca was a slave, therefore 
                Brigid was born into slavery. When Dubthach's wife discovered Brocca 
                was pregnant, she was sold to a Druid landowner. It is not clear 
                if Brocca was unable to produce milk or was not present to care 
                for Brigid, but legend states Brigid vomited any food the druid 
                attempted to feed her, as he was impure, so a white cow with red 
                ears sustained her instead.
              </p>
              
              <p className="mb-6">
                Many stories of Brigid's purity followed her childhood. She was 
                unable to keep from feeding the poor and healing them. One story 
                says Brigid once gave her mother's entire store of butter, that 
                was later replenished after Brigid prayed. When she was about ten-years-old, 
                Brigid was returned to her father's home, as he was her legal master. 
                Her charity did not end when she left her mother, and she donated 
                his possessions to anyone who asked. Eventually, Dubthach became 
                tired of her charitably nature and took her to the king of Leinster, 
                with the intention of selling her. As he spoke to the king, Brigid 
                gave his jeweled sword to a beggar so he could barter it for food 
                for his family. When the king, who was a Christian, saw this, he 
                recognized her heart and convinced Dubthach to grant her freedom 
                by saying, "Her merit before God is greater than ours."
              </p>
              
              <p className="mb-6">
                After being freed, Brigid returned to the Druid and her mother, 
                who was in charge of the Druid's dairy. Brigid took over and often 
                gave away milk, but the dairy prospered despite the charitable practice, 
                and the Druid eventually freed Brocca. Brigid then returned to Dubthach, 
                who had arranged for her to marry a bard. She refused and made a 
                vow to always be chaste. Legend has it Brigid prayed that her beauty 
                be taken so no one would want to marry her, and the prayer was granted. 
                It was not until after she made her final vows that her beauty was restored.
              </p>
              
              <p className="mb-6">
                Another tale says that when Saint Patrick heard her final vows, 
                he accidentally used the form for ordaining priests. When the error 
                was brought to his attention, he simply replied, "So be it, my son, 
                she is destined for great things." Little is known about Saint Brigid's 
                life after she entered the Church, but in 40 she founded a monastery 
                in Kildare, called the Church of the Oak. It was built above a pagan 
                shrine to the Celtic goddess Brigid, which was beneath a large oak tree.
              </p>
              
              <p>
                Brigid and seven friends organized communal consecrated religious 
                life for women in Ireland and she founded two monastic institutions, 
                one for men and one for women. Brigid invited a hermit called Conleth 
                to help her in Kildare as a spiritual pastor. Her biographer reported 
                that Brigid chose Saint Conleth "to govern the church along with herself." 
                She later founded a school of art that included metalwork and illumination, 
                which Conleth led as well. It was at this school that the Book of 
                Kildare, which the Gerald of Wales praised as "the work of angelic, 
                and not human skill," was beautifully illuminated, but was lost 
                three centuries ago. There is evidence that Brigid was a good friend 
                of Saint Patrick's and that the Trias Thaumaturga claimed, "Between 
                St. Patrick and Brigid, the pillars of the Irish people, there 
                was so great a friendship of charity that they had but one heart 
                and one mind. Through him and through her Christ performed many 
                great works." Saint Brigid helped many people in her lifetime, 
                but on February 1 525, she passed away of natural causes.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Brigid: Mother of Irish Monasticism</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Founder of Irish Monastic Life</h3>
              <p className="mb-6">
                St. Brigid's most enduring legacy is her role as the founder of 
                monastic life for women in Ireland and her establishment of the 
                first double monastery at Kildare. Her foundation of the Church 
                of the Oak in 40 marked the beginning of organized religious life 
                for women in Ireland and set a pattern that would be followed 
                throughout the Celtic Christian world. Brigid's monastic foundation 
                was unique in that it included both men and women living in separate 
                communities but under her overall leadership, demonstrating her 
                remarkable organizational skills and spiritual authority. Her legacy 
                reminds us that women have always played a crucial role in the 
                Church's mission and that the monastic life is a powerful means 
                of growing in holiness and serving God. Brigid's example challenges 
                us to recognize and support the gifts and leadership of women in 
                the Church and to appreciate the important contributions they make 
                to the spiritual life of the community.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Charitable Love</h3>
              <p className="mb-6">
                St. Brigid's extraordinary charity and her inability to refuse 
                help to anyone in need make her a powerful example of Christian 
                love in action. From her childhood, when she gave away her mother's 
                butter and her father's possessions, to her adult life, when she 
                founded institutions to care for the poor and sick, Brigid's life 
                was marked by an overwhelming generosity that seemed to defy human 
                logic. Her dairy prospered despite her constant giving, demonstrating 
                that God blesses those who give freely to others. Brigid's legacy 
                teaches us that true charity is not limited by our circumstances 
                or resources, but flows from a heart that is completely open to 
                God's love and the needs of others. Her example challenges us to 
                examine our own generosity and to ask ourselves whether we are 
                truly giving of ourselves to those in need. Brigid's story also 
                reminds us that God often works miracles through those who trust 
                in His providence and give freely to others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Keeper of the Hearth</h3>
              <p>
                St. Brigid's role as the "Keeper of the Hearth" and her association 
                with fire and light make her a powerful symbol of the warmth and 
                light that Christians are called to bring to the world. The hearth 
                represents the center of the home, the place where families gather 
                for warmth, food, and fellowship. Brigid's legacy teaches us that 
                we are all called to be keepers of the hearth in our own communities, 
                creating spaces of warmth, welcome, and spiritual nourishment for 
                others. Her example encourages us to be sources of light and warmth 
                in a world that can often be cold and dark. Brigid's association 
                with fire also reminds us of the Holy Spirit, who came as tongues 
                of fire at Pentecost, and of our call to be witnesses to Christ's 
                light in the world. Her legacy challenges us to ask ourselves whether 
                we are bringing warmth and light to those around us, or whether 
                we are contributing to the coldness and darkness of the world.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">February 1</div>
              <p className="text-gray-600">Feast of St. Brigid</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Brigid is celebrated on February 1st, during 
                the winter season when the Church reflects on the themes of light 
                and warmth. This feast is celebrated as a memorial in the Roman 
                Catholic Church, recognizing Brigid's importance as the patron 
                of Ireland and a model of Christian charity and monastic life. 
                The feast falls during the coldest part of winter, making it 
                an ideal time to remember Brigid's role as the "Keeper of the 
                Hearth" and her association with warmth and light. The feast 
                provides an opportunity to honor Brigid's memory and to reflect 
                on how we can bring warmth and light to those around us during 
                the cold winter months. It is also a time to pray for Ireland 
                and for all those who work to preserve and promote Celtic Christian 
                spirituality and culture.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Brigid, many people participate in special 
                prayers and devotions to honor her memory and seek her intercession. 
                Churches, particularly those with Irish connections or Celtic Christian 
                heritage, hold special Masses and services. Many people gather 
                to pray for Ireland and for all those who work to preserve Celtic 
                Christian traditions and culture. The day is also marked by prayers 
                for those who are cold, hungry, or in need of shelter, asking for 
                St. Brigid's intercession in helping them to find warmth and comfort. 
                Many people also take time to reflect on their own role as "keepers 
                of the hearth" in their families and communities, and to pray for 
                the grace to bring warmth and light to those around them. The feast 
                is also a time to reflect on how we can be more charitable and 
                generous to those in need, following Brigid's example of selfless 
                giving. Some people also light candles or fires in honor of Brigid's 
                association with light and warmth.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of charity 
                and the ability to be a source of warmth and light to others. Many 
                people make special petitions for Ireland and for all those who 
                work to preserve Celtic Christian spirituality and culture, asking 
                for St. Brigid's intercession in helping them to be faithful to 
                their heritage. The day is also a time to reflect on the importance 
                of hospitality and to pray for the grace to welcome others into 
                our homes and hearts. St. Brigid's feast day encourages us to remember 
                that we are all called to be "keepers of the hearth" in our own 
                way, creating spaces of warmth, welcome, and spiritual nourishment 
                for others. It is also a time to pray for the grace to be more 
                charitable and generous to those in need, following Brigid's example 
                of selfless giving. The feast reminds us that true holiness involves 
                not just personal piety, but active love and service to others.
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
                  <li>• <strong>Ireland:</strong> Patron of Ireland</li>
                  <li>• <strong>Nuns:</strong> Patron of nuns and religious women</li>
                  <li>• <strong>Dairy Workers:</strong> Patron of dairy workers</li>
                  <li>• <strong>Midwives:</strong> Patron of midwives</li>
                  <li>• <strong>Poets:</strong> Patron of poets and bards</li>
                  <li>• <strong>Blacksmiths:</strong> Patron of blacksmiths</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Charity:</strong> Helper in acts of charity</li>
                  <li>• <strong>Hospitality:</strong> Patron of hospitality</li>
                  <li>• <strong>Healing:</strong> Helper in healing</li>
                  <li>• <strong>Protection:</strong> Patron of protection</li>
                  <li>• <strong>Fertility:</strong> Helper in fertility</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Brigid</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Brigid, patron of Ireland and keeper of the hearth, 
                    help me to be a source of warmth and light to those around me.
                  </p>
                  <p className="mb-4">
                    Teach me to be charitable and generous to those in need, and 
                    guide me in creating spaces of welcome and spiritual nourishment 
                    for others. Help me to trust in God's providence and to give 
                    freely of what I have.
                  </p>
                  <p>
                    St. Brigid, pray for me that I may have the courage to be 
                    generous, the wisdom to be hospitable, and the love to be 
                    a true keeper of the hearth in my home and community. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">St. Brigid Hearth Keeper Prayer</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Brigid of the Mantle, encompass us, Lady of the Lambs, protect us, 
                    Keeper of the Hearth, kindle us.
                  </p>
                  <p className="mb-4">
                    Beneath your mantle, gather us, And restore us to memory. 
                    Mothers of our mother, Foremothers strong. Guide our hands in yours, 
                    Remind us how to kindle the hearth.
                  </p>
                  <p className="mb-4">
                    To keep it bright, to preserve the flame. Your hands upon ours, 
                    Our hands within yours, To kindle the light, Both day and night.
                  </p>
                  <p>
                    The Mantle of Brigid about us, The Memory of Brigid within us, 
                    The Protection of Brigid keeping us From harm, from ignorance, 
                    from heartlessness. This day and night, From dawn till dark, 
                    From dark till dawn."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Brigid, pray for us!"
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
            <Link href="/saints/st-patrick" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Patrick
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle of Ireland and friend of St. Brigid.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-columba" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Columba
                </h3>
                <p className="text-gray-700 text-sm">
                  Irish missionary and founder of Iona monastery.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-scholastica" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Scholastica
                </h3>
                <p className="text-gray-700 text-sm">
                  Twin sister of St. Benedict and patron of nuns.
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