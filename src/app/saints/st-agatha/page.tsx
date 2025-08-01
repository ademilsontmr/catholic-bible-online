import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Agatha - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Agatha, virgin martyr of Sicily.',
  keywords: [
    'st agatha',
    'saint agatha',
    'virgin martyr',
    'february 5 feast day',
    'catholic saints',
    'martyr saints',
    'patron of sicily'
  ],
  openGraph: {
    title: 'St. Agatha - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Agatha, virgin martyr of Sicily.',
    url: 'https://catholicbibleonline.com/saints/st-agatha',
  },
  twitter: {
    title: 'St. Agatha - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Agatha, virgin martyr of Sicily.',
  }
}

export default function StAgathaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Agatha
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Virgin Martyr of Sicily and Patron of Breast Cancer Patients
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Agatha</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">February 5</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Martyr Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Agatha</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Agatha, also known as Agatha of Sicily, is one of the most highly 
                venerated virgin martyrs of the Catholic Church. It is believed that 
                she was born around 231 in either Catania or Palermo, Sicily to a rich 
                and noble family. From her very early years, the notably beautiful Agatha 
                dedicated her life to God. She became a consecrated virgin, a state in 
                life where young women choose to remain celibate and give themselves 
                wholly to Jesus and the Church in a life of prayer and service. That 
                did not stop men from desiring her and making unwanted advances toward 
                her. However, one of the men who desired Agatha, whose name was Quintianus, 
                because he was of a high diplomatic ranking, thought he could force her 
                to turn away from her vow and force her to marry. His persistent proposals 
                were consistently spurned by Agatha, so Quintianus, knowing she was a 
                Christian during the persecution of Decius, had her arrested and brought 
                before the judge. He was the Judge.
              </p>
              
              <p className="mb-6">
                He expected her to give in to his demands when she was faced with torture 
                and possible death, but she simply reaffirmed her belief in God by praying: 
                "Jesus Christ, Lord of all, you see my heart, you know my desires. Possess 
                all that I am. I am your sheep: make me worthy to overcome the devil." 
                With tears falling from her eyes, she prayed for courage. To force her 
                to change her mind, Quintianus had her imprisoned - in a brothel. Agatha 
                never lost her confidence in God, even though she suffered a month of 
                assaults and efforts to get her to abandon her vow to God and go against 
                her virtue. Quintianus heard of her calm strength and ordered that she 
                be brought before him once again. During her interrogation, she told him 
                that to be a servant of Jesus Christ was her true freedom. Enraged, Quintianus 
                sent her off to prison instead of back to the brothel -- a move intended 
                to make her even more afraid, but it was probably a great relief to her.
              </p>
              
              <p className="mb-6">
                Agatha continued to proclaim Jesus as her Savior, Lord, Life and Hope. 
                Quintianus ordered her to be tortured. He had her stretched on a rack 
                to be torn with iron hooks, burned with torches, and whipped. Noticing 
                Agatha was enduring all the torture with a sense of cheer, he commanded 
                she be subjected to a worse form of torture - this evil man ordered that 
                her breasts be cut off. He then sent her back to prison with an order 
                of no food or medical attention. But the Lord gave her all the care she 
                needed. He was her Sacred Physician and protector. Agatha had a vision 
                of the apostle, St. Peter, who comforted her and healed her wounds through 
                his prayers. After four days, Quintianus ignored the miraculous cure of 
                her wounds. He had her stripped naked and rolled over naked over hot 
                coals which were mixed with sharp shards. When she was returned to prison, 
                Agatha prayed, "Lord, my Creator, you have ever protected me from the 
                cradle; you have taken me from the love of the world, and given me patience 
                to suffer: receive now my soul." Agatha is believed to have passed into 
                Heaven around the year 251.
              </p>
              
              <p>
                She is commonly featured in religious art with shears, tongs, or breasts 
                on a plate. St. Agatha is the patron saint of Sicily, bellfounders, 
                breast cancer patients, Palermo, rape victims, and wet nurses. She is 
                also considered to be a powerful intercessor when people suffer from 
                fires. Her feast day is celebrated on February 5. Agatha's martyrdom 
                and her unwavering faith in the face of such brutal torture have made 
                her one of the most beloved and venerated saints in the Catholic Church, 
                particularly in Sicily and among those who suffer from breast cancer 
                or other forms of violence and persecution.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Agatha: Virgin Martyr of Sicily</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Virgin Martyr of Sicily</h3>
              <p className="mb-6">
                St. Agatha's most enduring legacy is her courageous witness as a virgin 
                martyr who remained faithful to Christ even in the face of the most 
                brutal torture and persecution. Her martyrdom at the age of approximately 
                twenty demonstrates that holiness and spiritual strength are not limited 
                by age, and that even the youngest among us can achieve great sanctity 
                through their love for God and their commitment to His law. Agatha's 
                willingness to endure horrific torture rather than renounce her faith 
                or her vow of virginity shows her deep understanding of the sacredness 
                of human dignity and the importance of remaining faithful to God's call. 
                Her example is particularly relevant in today's world, where people 
                are often pressured to compromise their values and beliefs. Agatha's 
                courage in standing up for what is right, even when it meant facing 
                death, shows that we too can be strong in our convictions and faithful 
                to God, even when it means going against popular opinion or facing great 
                danger. Her legacy encourages us to take our faith seriously and to be 
                willing to make sacrifices for what we believe in.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Breast Cancer Patients</h3>
              <p className="mb-6">
                St. Agatha's designation as the patroness of breast cancer patients 
                is particularly significant given the nature of her martyrdom, where 
                her breasts were cut off as part of her torture. This connection has 
                made her a powerful advocate for those suffering from breast cancer 
                and other diseases that affect women's health. Agatha's example of 
                courage and faith in the face of physical suffering provides comfort 
                and inspiration to those who are battling illness. Her miraculous healing 
                through the intercession of St. Peter reminds us that God can bring 
                healing and comfort even in the most difficult circumstances. Agatha's 
                patronage of breast cancer patients also highlights the Church's concern 
                for the sick and suffering, and her example encourages us to pray for 
                and support those who are battling illness. Her legacy reminds us that 
                suffering can be a path to holiness and that God's grace is available 
                to all, especially those who are most in need of His mercy and healing.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Protector of Women and Victims</h3>
              <p>
                St. Agatha's patronage of rape victims and her experience of sexual 
                assault and indignity make her a powerful advocate for women who have 
                suffered violence and abuse. Her courage in maintaining her dignity 
                and her faith even when subjected to such horrific treatment provides 
                hope and strength to those who have experienced similar trauma. Agatha's 
                example shows that it is possible to maintain one's dignity and faith 
                even in the face of the most degrading treatment, and that God's love 
                and protection are available even in the darkest moments. Her patronage 
                of Sicily and Palermo recognizes her importance as a local saint who 
                continues to protect and intercede for the people of her homeland. Agatha's 
                legacy encourages us to stand up against violence and injustice, particularly 
                violence against women, and to work for a world where all people are 
                treated with dignity and respect. Her example also reminds us that we 
                are called to be protectors of the vulnerable and to speak out against 
                injustice wherever we encounter it.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">February 5</div>
              <p className="text-gray-600">Feast of St. Agatha</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Agatha is celebrated on February 5th, during the winter 
                season when the Church reflects on the themes of purification and preparation. 
                This feast is celebrated as a memorial in the Roman Catholic Church, 
                recognizing Agatha's importance as a virgin martyr and her powerful 
                example of courage and faith. The feast falls during a time when many 
                people are seeking spiritual renewal and purification, making it an 
                ideal time to remember Agatha's example of purity and faithfulness 
                to Christ. The feast provides an opportunity to honor Agatha's memory 
                and to reflect on the importance of remaining faithful to God's call, 
                even when it means facing great challenges or suffering.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Agatha, many people participate in special 
                prayers and devotions to honor her memory and seek her intercession. 
                Churches, particularly those in Sicily and Italy, hold special Masses 
                and services. Many people gather to pray for those suffering from breast 
                cancer and other illnesses, asking for St. Agatha's intercession in 
                helping them to find healing and comfort. The day is also marked by 
                prayers for victims of violence and abuse, asking for St. Agatha's help 
                in protecting them and giving them strength. Many people also take time 
                to reflect on the importance of standing up for what is right and to 
                pray for the grace to be courageous witnesses to Christ in all circumstances. 
                The feast is also a time to reflect on how we can incorporate Agatha's 
                virtues of courage, purity, and faithfulness into our daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of courage and 
                the ability to stand up for what is right, even when it is difficult. 
                Many people make special petitions for those suffering from breast cancer 
                and other illnesses, asking for St. Agatha's intercession in helping 
                them to find healing and comfort. The day is also a time to reflect 
                on the importance of protecting the vulnerable and to pray for the grace 
                to be courageous witnesses to Christ in all circumstances. St. Agatha's 
                feast day encourages us to remember that we are all called to be saints 
                and that holiness is achieved through courage, faithfulness, and complete 
                trust in God. It is also a time to pray for the grace to stand up against 
                injustice and to protect those who are vulnerable, following Agatha's 
                example of courage and compassion.
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
                  <li>• <strong>Sicily:</strong> Patron saint of Sicily</li>
                  <li>• <strong>Breast Cancer:</strong> Patron of breast cancer patients</li>
                  <li>• <strong>Bellfounders:</strong> Patron of bellfounders</li>
                  <li>• <strong>Palermo:</strong> Patron of Palermo</li>
                  <li>• <strong>Rape Victims:</strong> Patron of rape victims</li>
                  <li>• <strong>Wet Nurses:</strong> Patron of wet nurses</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Prayer:</strong> Helper in prayer life</li>
                  <li>• <strong>Courage:</strong> Patron of courage</li>
                  <li>• <strong>Purity:</strong> Patron of purity</li>
                  <li>• <strong>Protection:</strong> Helper in protection</li>
                  <li>• <strong>Healing:</strong> Patron of healing</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Agatha</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Agatha, virgin martyr and patron of breast cancer patients, 
                    help me to have courage in the face of suffering and persecution.
                  </p>
                  <p className="mb-4">
                    Teach me to remain faithful to God even when it is difficult and 
                    to trust in His protection and healing. Help me to stand up for 
                    what is right and to protect those who are vulnerable.
                  </p>
                  <p>
                    St. Agatha, pray for me that I may have the courage to be faithful 
                    to Christ, the strength to endure suffering with grace, and the 
                    compassion to help those who are in need. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Breast Cancer Patients</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Agatha, patron of breast cancer patients, intercede for all 
                    those who are suffering from this disease.
                  </p>
                  <p>
                    Help them to find healing and comfort, and to trust in God's love 
                    and protection. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Agatha, pray for us!"
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
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Agnes
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and patron of young girls.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-lucy" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Lucy
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and patron of the blind.
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
                  Virgin martyr and patron of youth.
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