import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Kateri Tekakwitha - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Kateri Tekakwitha, the first Native American saint.',
  keywords: [
    'st kateri tekakwitha',
    'saint kateri',
    'native american saint',
    'july 14 feast day',
    'catholic saints',
    'modern saints',
    'patron of ecology'
  ],
  openGraph: {
    title: 'St. Kateri Tekakwitha - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Kateri Tekakwitha, the first Native American saint.',
    url: 'https://catholicbibleonline.com/saints/st-kateri-tekakwitha',
  },
  twitter: {
    title: 'St. Kateri Tekakwitha - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Kateri Tekakwitha, the first Native American saint.',
  }
}

export default function StKateriTekakwithaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌿</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Kateri Tekakwitha
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            First Native American Saint and Patron of Ecology
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Kateri Tekakwitha</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 14</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌿</div>
              <div className="text-sm text-gray-600">Modern Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Kateri Tekakwitha</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Kateri Tekakwitha is the first Native American to be recognized as 
                a saint by the Catholic Church. She was born in 1656, in the Mohawk village 
                of Ossernenon, in what is now New York State. Her mother was an Algonquin, 
                who had been captured by the Mohawks and who took a Mohawk chief for her 
                husband. Kateri's early life was marked by tragedy when she contracted 
                smallpox as a four-year-old child, which scarred her skin and left her 
                with impaired vision. The scars were a source of humiliation in her youth, 
                and she was commonly seen wearing a blanket to hide her face. Worse still, 
                her entire family died during the smallpox outbreak, leaving her orphaned 
                and vulnerable. Kateri was subsequently raised by her uncle, who was the 
                chief of a Mohawk clan, and her aunts, who were not Christian.
              </p>
              
              <p className="mb-6">
                Despite the challenges she faced, Kateri was known as a skilled worker, 
                who was diligent and patient in all her tasks. She learned to work with 
                her hands, creating beautiful beadwork and other crafts that were valued 
                in her community. However, she refused to marry, which was unusual for 
                a young woman in her culture. When her adoptive parents proposed a suitor 
                to her, she refused to entertain the proposal, much to their disappointment 
                and frustration. They punished her by giving her more work to do, hoping 
                to change her mind, but she did not give in. Instead, she remained quiet 
                and diligent, continuing to work hard while maintaining her resolve to 
                remain unmarried. Eventually, they were forced to relent and accept that 
                she had no interest in marriage, though they did not understand her reasons.
              </p>
              
              <p className="mb-6">
                At the age of nineteen, Kateri Tekakwitha converted to Catholicism, taking 
                a vow of chastity and pledging to marry only Jesus Christ. Her decision 
                was very unpopular with her adoptive parents and their neighbors, who 
                did not understand her new faith. Some of her neighbors started rumors 
                of sorcery, accusing her of using magic to avoid marriage and to practice 
                her new religion. To avoid persecution and to be able to practice her 
                faith freely, she traveled to a Christian native community south of Montreal, 
                where she could live among other Catholic Native Americans. This journey 
                was both physical and spiritual, as she left behind her homeland and 
                her family to follow her calling to Christ.
              </p>
              
              <p className="mb-6">
                According to legend, Kateri was very devout and would put thorns on her 
                sleeping mat as a form of penance and self-mortification. She often prayed 
                for the conversion of her fellow Mohawks, hoping that they too would come 
                to know the love of Christ. According to the Jesuit missionaries that 
                served the community where Kateri lived, she often fasted and when she 
                would eat, she would taint her food to diminish its flavor as a form 
                of self-denial. On at least one occasion, she burned herself as a form 
                of penance. Such self-mortification was common among the Mohawk people 
                and was seen as a way to show devotion and to make sacrifices for others. 
                Kateri was very devout and was known for her steadfast devotion to prayer 
                and to living a life of holiness.
              </p>
              
              <p>
                Sadly, just five years after her conversion to Catholicism, Kateri became 
                ill and passed away at the age of twenty-four, on April 17, 1680. Her 
                practices of self-mortification and denial may not have helped her health, 
                but they were expressions of her deep love for Christ and her desire to 
                offer her sufferings for the conversion of others. Her name, Kateri, 
                is the Mohawk form of Catherine, which she took from St. Catherine of 
                Siena, a saint she greatly admired for her devotion and her mystical 
                experiences. St. Kateri Tekakwitha was canonized by Pope Benedict XVI 
                on October 21, 2012, making her the first Native American saint in the 
                Catholic Church. She is the patroness of ecology and the environment, 
                people in exile, and Native Americans, and her example continues to inspire 
                people around the world to live lives of faith, courage, and devotion 
                to God.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Kateri Tekakwitha: First Native American Saint</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">First Native American Saint</h3>
              <p className="mb-6">
                St. Kateri Tekakwitha's designation as the first Native American saint 
                in the Catholic Church is a powerful testament to the universality of 
                God's call to holiness and the dignity of all peoples. Her canonization 
                by Pope Benedict XVI in 2012 was a historic moment that recognized the 
                holiness and spiritual richness of Native American cultures and their 
                contribution to the Church. Kateri's life demonstrates that sanctity 
                is not limited to any particular culture, race, or background, but is 
                available to all who respond to God's grace with faith and love. Her 
                example has helped to bridge cultural divides and to show that the Catholic 
                faith can be lived authentically within any cultural context. Kateri's 
                legacy continues to inspire Native Americans and people of all backgrounds 
                to pursue holiness and to see their cultural heritage as a gift that 
                can enrich their spiritual life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Ecology and the Environment</h3>
              <p className="mb-6">
                St. Kateri's designation as the patroness of ecology and the environment 
                recognizes her deep connection to the natural world and her understanding 
                of the sacredness of creation. As a Native American, Kateri grew up with 
                a profound respect for the earth and all living things, seeing them as 
                gifts from the Creator. Her life was lived in harmony with nature, and 
                she understood that caring for the environment is a spiritual responsibility. 
                Kateri's example reminds us that environmental stewardship is not just 
                a political or social issue, but a moral and spiritual one. Her legacy 
                encourages us to see the natural world as a reflection of God's beauty 
                and to treat it with the respect and care it deserves. In a time when 
                environmental concerns are increasingly urgent, Kateri's example provides 
                a model for how to live in harmony with creation while maintaining a 
                deep spiritual life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Courage and Faith</h3>
              <p>
                St. Kateri's life serves as a powerful example of courage and faith 
                in the face of adversity. Her decision to convert to Catholicism, despite 
                the opposition of her family and community, required tremendous courage 
                and conviction. Her willingness to leave her homeland and travel to a 
                new community to practice her faith shows her deep commitment to following 
                Christ, even when it meant great personal sacrifice. Kateri's example 
                is particularly relevant for people who feel called to follow a different 
                path than what their family or culture expects of them. Her life reminds 
                us that true faith often requires courage to stand up for what we believe 
                in, even when it means facing opposition or misunderstanding. Kateri's 
                legacy encourages us to be bold in our faith and to trust in God's guidance, 
                even when the path ahead seems difficult or uncertain.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">July 14</div>
              <p className="text-gray-600">Feast of St. Kateri Tekakwitha</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Kateri Tekakwitha is celebrated on July 14th, during 
                the summer season when the Church reflects on the themes of growth and 
                harvest. This feast is celebrated as a memorial in the Roman Catholic 
                Church, recognizing Kateri's importance as the first Native American 
                saint and her powerful example of faith and courage. The feast falls 
                during a time when many people are enjoying the beauty of nature, making 
                it an ideal time to remember Kateri's connection to the environment and 
                her role as patroness of ecology. The feast provides an opportunity to 
                honor Kateri's memory and to reflect on the importance of cultural diversity 
                in the Church and our responsibility to care for God's creation.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Kateri Tekakwitha, many people participate in 
                special prayers and devotions to honor her memory and seek her intercession. 
                Churches, particularly those with Native American communities, hold special 
                Masses and services. Many people gather to pray for environmental protection 
                and for the preservation of Native American cultures and traditions. The 
                day is also marked by prayers for those who feel like exiles or outcasts, 
                asking for St. Kateri's intercession in helping them to find acceptance 
                and belonging. Many people also take time to reflect on their own relationship 
                with the environment and to pray for the grace to be better stewards 
                of God's creation. The feast is also a time to reflect on how we can 
                incorporate Kateri's virtues of courage, faith, and respect for creation 
                into our daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of courage and 
                the ability to stand up for what we believe in, even when it is difficult. 
                Many people make special petitions for environmental protection and for 
                the preservation of Native American cultures, asking for St. Kateri's 
                intercession in helping to protect God's creation. The day is also a 
                time to reflect on the importance of cultural diversity in the Church 
                and to pray for the grace to be more accepting and welcoming of people 
                from different backgrounds. St. Kateri's feast day encourages us to remember 
                that we are all called to be saints, regardless of our cultural background, 
                and that our differences can enrich the Church and help us to better 
                understand the diversity of God's creation. It is also a time to pray 
                for the grace to be more courageous in our faith and to trust in God's 
                guidance in our lives.
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
                  <li>• <strong>Ecology:</strong> Patroness of ecology</li>
                  <li>• <strong>Environment:</strong> Patron of the environment</li>
                  <li>• <strong>Native Americans:</strong> Patron of Native Americans</li>
                  <li>• <strong>People in Exile:</strong> Patron of people in exile</li>
                  <li>• <strong>Cultural Diversity:</strong> Patron of cultural diversity</li>
                  <li>• <strong>Environmental Protection:</strong> Patron of environmental protection</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Prayer:</strong> Helper in prayer life</li>
                  <li>• <strong>Courage:</strong> Patron of courage</li>
                  <li>• <strong>Faith:</strong> Helper in faith</li>
                  <li>• <strong>Cultural Heritage:</strong> Patron of cultural heritage</li>
                  <li>• <strong>Stewardship:</strong> Helper in environmental stewardship</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Kateri Tekakwitha</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Kateri Tekakwitha, first Native American saint, help me to 
                    have courage in my faith and respect for God's creation.
                  </p>
                  <p className="mb-4">
                    Teach me to stand up for what I believe in, even when it is difficult, 
                    and to care for the environment as a gift from God. Help me to appreciate 
                    the diversity of cultures and to see the beauty in all of God's creation.
                  </p>
                  <p>
                    St. Kateri, pray for me that I may have the courage to follow Christ, 
                    the wisdom to care for creation, and the love to respect all people 
                    and cultures. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for the Environment</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Kateri, patroness of ecology and the environment, intercede 
                    for the protection of God's creation.
                  </p>
                  <p>
                    Help us to be good stewards of the earth and to care for all living 
                    things. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Kateri Tekakwitha, pray for us!"
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
            <Link href="/saints/st-catherine-siena" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Catherine of Siena
                </h3>
                <p className="text-gray-700 text-sm">
                  Saint whose name Kateri adopted.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-assisi" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron of ecology and animals.
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
                  Young saint who showed great courage.
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