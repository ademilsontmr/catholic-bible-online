import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Dominic - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Dominic, founder of the Dominican Order and patron of preachers.',
  keywords: [
    'st dominic',
    'saint dominic',
    'founder of dominican order',
    'august 8 feast day',
    'catholic saints',
    'doctor saints',
    'patron of preachers'
  ],
  openGraph: {
    title: 'St. Dominic - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Dominic, founder of the Dominican Order and patron of preachers.',
    url: 'https://catholicbibleonline.com/saints/st-dominic',
  },
  twitter: {
    title: 'St. Dominic - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Dominic, founder of the Dominican Order and patron of preachers.',
  }
}

export default function StDominicPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🐕</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Dominic
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Founder of the Dominican Order and Patron of Preachers
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Dominic</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 8</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🐕</div>
              <div className="text-sm text-gray-600">Doctor Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Dominic</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Dominic was born around 1170 in Caleruega, a small village in the Kingdom 
                of Castile (modern-day Spain), to Felix de Guzmán and Joan of Aza. He was 
                the youngest of three children in a noble family. From an early age, Dominic 
                showed exceptional piety and a deep love for God. According to tradition, 
                his mother had a dream before his birth in which she saw a dog with a torch 
                in its mouth, which was interpreted as a sign that her son would be a great 
                preacher who would set the world on fire with the Gospel. This vision would 
                later inspire the Dominican Order's symbol of a dog with a torch.
              </p>
              
              <p className="mb-6">
                Dominic received his early education from his uncle, who was a priest, and 
                later studied at the University of Palencia, where he excelled in theology 
                and the liberal arts. He was known for his intelligence, piety, and compassion 
                for the poor. During a famine in Palencia, Dominic sold his precious books 
                to help feed the hungry, saying, "I cannot study on dead skins while men are 
                dying of hunger." This act of charity demonstrated his deep concern for the 
                suffering of others and his willingness to sacrifice his own comfort for their 
                sake. Dominic was ordained a priest around 1194 and became a canon of the 
                cathedral in Osma, where he lived a life of prayer and study.
              </p>
              
              <p className="mb-6">
                In 1203, Dominic accompanied his bishop, Diego de Acebo, on a diplomatic 
                mission to Denmark. During their journey, they passed through southern France, 
                where they encountered the Albigensian heresy, which was spreading rapidly 
                and causing great harm to the Church and society. The Albigensians, also known 
                as Cathars, believed in a dualistic worldview that rejected the material world 
                and the sacraments. Dominic was deeply moved by the spiritual needs of the 
                people and the damage being done by this heresy. He and Bishop Diego decided 
                to stay in the region to preach the Gospel and combat the heresy through prayer, 
                preaching, and example.
              </p>
              
              <p className="mb-6">
                Dominic's approach to combating heresy was revolutionary for his time. Instead 
                of using force or violence, he chose to live among the people, preaching the 
                Gospel with love and compassion. He walked from town to town, barefoot and 
                poor, preaching the truth of the Catholic faith. His method was to engage 
                in public debates with the heretics, using reason and Scripture to demonstrate 
                the truth of Catholic doctrine. Dominic's holiness, learning, and charity 
                won many converts and earned him the respect of both Catholics and heretics. 
                He established a community of women converts at Prouille in 1206, which would 
                become the first Dominican convent.
              </p>
              
              <p>
                In 1215, Dominic traveled to Rome to seek papal approval for his new order. 
                Pope Innocent III initially hesitated, but after Dominic's death, Pope Honorius 
                III approved the Order of Preachers (Dominicans) in 1216. The order was founded 
                on the principles of poverty, preaching, and study, with a special emphasis 
                on the importance of theological education for effective preaching. Dominic 
                established the first Dominican priory in Toulouse and began to attract followers 
                who shared his vision of preaching the Gospel through word and example. The 
                order quickly spread throughout Europe, establishing houses in major cities 
                and universities. Dominic died on August 6, 1221, in Bologna, Italy, after 
                a life of tireless preaching and service to the Church. He was canonized in 
                1234 by Pope Gregory IX, and his feast day is celebrated on August 8th.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Dominic: Founder of the Order of Preachers</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Founder of the Dominican Order</h3>
              <p className="mb-6">
                St. Dominic's greatest legacy is the founding of the Order of Preachers, 
                which has had a profound impact on the Church and the world for over eight 
                centuries. The Dominican Order, with its emphasis on preaching, study, and 
                poverty, has produced some of the Church's greatest saints, scholars, and 
                theologians, including St. Thomas Aquinas, St. Albert the Great, and St. 
                Catherine of Siena. The order's commitment to theological education and 
                intellectual rigor has made it a leading force in Catholic education and 
                scholarship. Dominic's vision of combining contemplative prayer with active 
                preaching has influenced countless religious orders and has shaped the Church's 
                approach to evangelization and pastoral ministry. The Dominican Order continues 
                to be a vibrant presence in the Church today, with friars, nuns, and lay 
                associates working in over 100 countries.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Preaching and Evangelization</h3>
              <p className="mb-6">
                St. Dominic's approach to preaching and evangelization serves as a model 
                for all Christians. His method of engaging with people through dialogue, 
                reason, and charity, rather than through force or coercion, demonstrates 
                the power of love and truth in winning hearts for Christ. Dominic's emphasis 
                on the importance of study and preparation for preaching shows that effective 
                evangelization requires both spiritual depth and intellectual rigor. His 
                willingness to live among the people he was trying to reach, sharing their 
                poverty and suffering, demonstrates the importance of solidarity and compassion 
                in the work of evangelization. Dominic's example encourages all Christians 
                to be bold in sharing their faith, to be well-prepared in their knowledge 
                of the Gospel, and to approach others with love and respect.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Preachers and Teachers</h3>
              <p>
                St. Dominic's life and work have made him the patron saint of preachers, 
                teachers, and all those who are called to share the Gospel with others. 
                His emphasis on the importance of study and preparation for preaching has 
                influenced the Church's approach to theological education and pastoral formation. 
                Dominic's commitment to poverty and simplicity in his preaching ministry 
                serves as a reminder that the power of the Gospel comes not from human 
                eloquence or worldly resources, but from the Holy Spirit working through 
                humble and faithful servants. His example encourages all who are called 
                to preach or teach to approach their ministry with humility, preparation, 
                and love for those they serve. Dominic's legacy reminds us that the work 
                of evangelization is not about personal success or recognition, but about 
                bringing souls to Christ through the power of the Gospel.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">August 8</div>
              <p className="text-gray-600">Feast of St. Dominic</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Dominic is celebrated on August 8th, during the summer 
                season when the Church reflects on the themes of evangelization and the 
                harvest of souls. This feast is celebrated as a memorial in the Roman Catholic 
                Church, recognizing Dominic's importance as the founder of the Order of Preachers 
                and his contribution to the Church's mission of evangelization. The feast 
                falls during a time when many people are on vacation and may be more open 
                to spiritual reflection, making it an ideal time to remember Dominic's call 
                to preach the Gospel to all people. The feast provides an opportunity to 
                honor Dominic's memory and to reflect on the importance of sharing our faith 
                with others through word and example.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Dominic, many people participate in special prayers 
                and devotions to honor his memory and seek his intercession. Churches, particularly 
                those associated with the Dominican Order, hold special Masses and services. 
                Many Dominican communities hold processions and special celebrations to honor 
                their founder. The day is also marked by prayers for preachers, teachers, 
                and all those involved in evangelization, asking for St. Dominic's intercession 
                in helping them to be effective witnesses to Christ. Many people also take 
                time to read and reflect on Dominic's life and teachings, particularly his 
                emphasis on the importance of study, prayer, and charity in the work of 
                evangelization. The feast is also a time to reflect on how we can be better 
                witnesses to Christ in our daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of courage and 
                the ability to share our faith with others. Many people make special petitions 
                for preachers and teachers, asking for St. Dominic's intercession in helping 
                them to be effective witnesses to Christ. The day is also a time to reflect 
                on the importance of study and preparation in our spiritual lives and to 
                pray for the wisdom to understand and share the Gospel effectively. St. Dominic's 
                feast day encourages us to remember that we are all called to be witnesses 
                to Christ and to share the Good News with others through our words and actions. 
                It is also a time to pray for the humility to recognize that the power of 
                evangelization comes from God, not from our own abilities or efforts.
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
                  <li>• <strong>Preachers:</strong> Patron of all preachers</li>
                  <li>• <strong>Teachers:</strong> Patron of educators</li>
                  <li>• <strong>Dominican Order:</strong> Patron of his order</li>
                  <li>• <strong>Evangelizers:</strong> Patron of missionaries</li>
                  <li>• <strong>Students:</strong> Patron of those who study</li>
                  <li>• <strong>Astronomers:</strong> Patron of astronomers</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Truth:</strong> Helper in defending truth</li>
                  <li>• <strong>Charity:</strong> Patron of acts of mercy</li>
                  <li>• <strong>Study:</strong> Helper in academic pursuits</li>
                  <li>• <strong>Poverty:</strong> Patron of voluntary poverty</li>
                  <li>• <strong>Faith:</strong> Helper in spreading faith</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Dominic</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Dominic, founder of the Order of Preachers and patron of preachers, 
                    help me to be a bold and effective witness to Christ in my daily life.
                  </p>
                  <p className="mb-4">
                    Teach me to combine prayer and study with active service to others. 
                    Help me to share the Gospel with love and compassion, using both reason 
                    and charity to win souls for Christ.
                  </p>
                  <p>
                    St. Dominic, pray for me that I may have the courage to preach the truth, 
                    the wisdom to understand God's ways, and the love to serve others with 
                    humility and charity. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Preachers</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Dominic, patron of preachers and teachers, intercede for all those 
                    who are called to share the Gospel with others.
                  </p>
                  <p>
                    Help them to be well-prepared in their knowledge of the faith and to 
                    preach with love, clarity, and power. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Dominic, pray for us!"
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
            <Link href="/saints/st-thomas-aquinas" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thomas Aquinas
                </h3>
                <p className="text-gray-700 text-sm">
                  Dominican friar and Angelic Doctor of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-catherine-siena" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Catherine of Siena
                </h3>
                <p className="text-gray-700 text-sm">
                  Dominican tertiary and Doctor of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-albert-great" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Albert the Great
                </h3>
                <p className="text-gray-700 text-sm">
                  Dominican friar and Universal Doctor of the Church.
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