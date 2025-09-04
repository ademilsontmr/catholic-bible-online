import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Edith Stein - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Edith Stein, Carmelite nun and martyr, patron of Europe.',
  keywords: [
    'st edith stein',
    'saint edith stein',
    'carmelite nun',
    'august 9 feast day',
    'catholic saints',
    'modern saints',
    'patron of europe'
  ],
  openGraph: {
    title: 'St. Edith Stein - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Edith Stein, Carmelite nun and martyr, patron of Europe.',
    url: 'https://catholicbibleonline.com/saints/st-edith-stein',
  },
  twitter: {
    title: 'St. Edith Stein - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Edith Stein, Carmelite nun and martyr, patron of Europe.',
  }
}

export default function StEdithSteinPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🕯️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Edith Stein
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Carmelite Nun and Martyr, Patron of Europe
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Edith Stein</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 9</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🕯️</div>
              <div className="text-sm text-gray-600">Modern Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Edith Stein</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Edith Stein was born on October 12, 1891, in Breslau, Germany (now Wrocław, Poland), 
                into a Jewish family. She was the youngest of eleven children born to Siegfried and 
                Auguste Stein. Edith was a brilliant student from an early age, showing exceptional 
                intellectual abilities. She attended the University of Breslau and later the University 
                of Göttingen, where she studied philosophy under the famous phenomenologist Edmund 
                Husserl. Edith became one of his most promising students and was known for her sharp 
                intellect and philosophical insights. During her studies, she became interested in 
                phenomenology and the search for truth, which would eventually lead her to Christianity.
              </p>
              
              <p className="mb-6">
                Edith's spiritual journey was marked by a deep search for truth and meaning. She 
                was initially an atheist, but her philosophical studies and encounters with Christian 
                friends, particularly the widow of a colleague who had died in World War I, began 
                to influence her thinking. In 1921, while staying at the home of a friend, Edith 
                read the autobiography of St. Teresa of Avila, which had a profound impact on her. 
                She later wrote that after finishing the book, she said to herself, "This is the truth." 
                This reading marked the beginning of her conversion to Catholicism. On January 1, 1922, 
                Edith was baptized into the Catholic Church, taking the name Teresa Benedicta of the Cross.
              </p>
              
              <p className="mb-6">
                After her conversion, Edith continued her academic work while also becoming involved 
                in Catholic intellectual circles. She taught at a Dominican school in Speyer and later 
                at the German Institute for Scientific Pedagogy in Münster. However, the rise of Nazism 
                in Germany made it increasingly difficult for her to work, as she was of Jewish descent. 
                In 1933, she was forced to resign from her teaching position due to Nazi anti-Semitic 
                laws. During this time, Edith felt called to religious life and entered the Carmelite 
                monastery in Cologne on October 14, 1933, taking the religious name Teresa Benedicta 
                of the Cross. She made her first vows in 1935 and her final vows in 1938.
              </p>
              
              <p className="mb-6">
                As the Nazi persecution of Jews intensified, Edith's safety became increasingly 
                threatened. In 1938, she was transferred to the Carmelite monastery in Echt, 
                Netherlands, to protect her from the growing danger in Germany. However, after 
                the Dutch bishops issued a pastoral letter condemning Nazi racism, the Nazis 
                retaliated by arresting all Jewish converts to Catholicism in the Netherlands. 
                On August 2, 1942, Edith and her sister Rosa, who had also converted to Catholicism, 
                were arrested by the Gestapo and sent to the Westerbork concentration camp. From 
                there, they were transported to Auschwitz, where they were killed in the gas 
                chambers on August 9, 1942. Edith's last known words were to her sister: "Come, 
                let us go for our people."
              </p>
              
              <p>
                St. Edith Stein's legacy extends far beyond her martyrdom. Her philosophical 
                writings, particularly her work on empathy and the nature of the human person, 
                continue to be studied and valued in academic circles. Her spiritual writings, 
                including her reflections on the cross and suffering, have inspired countless 
                Christians. Edith's life demonstrates the harmony between faith and reason, 
                showing that intellectual pursuit and spiritual depth can coexist and complement 
                each other. Her martyrdom, along with her sister Rosa, is a powerful witness 
                to the dignity of every human person and the evil of racism and anti-Semitism. 
                Edith was beatified by Pope John Paul II in 1987 and canonized in 1998. She 
                was also declared a co-patron of Europe in 1999, recognizing her role as a 
                bridge between Jewish and Christian traditions and her witness to the values 
                that should unite Europe.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Edith Stein: Bridge Between Faith and Reason</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Philosopher and Intellectual</h3>
              <p className="mb-6">
                St. Edith Stein's greatest legacy is her contribution to philosophy and her 
                demonstration of the harmony between faith and reason. Her philosophical work, 
                particularly her doctoral thesis on empathy and her later writings on the nature 
                of the human person, continues to be studied and valued in academic circles. 
                Edith's intellectual journey from atheism to Catholicism shows that the search 
                for truth can lead to faith, and that faith can enrich and deepen intellectual 
                understanding. Her ability to integrate her philosophical insights with her 
                spiritual life serves as a model for all who seek to live an integrated life 
                of faith and reason. Edith's writings on empathy, the human person, and the 
                relationship between philosophy and theology continue to influence contemporary 
                thought and provide valuable insights for understanding human nature and the 
                spiritual life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Bridge Between Jewish and Christian Traditions</h3>
              <p className="mb-6">
                St. Edith Stein's Jewish heritage and her conversion to Catholicism make her 
                a powerful symbol of the connection between Jewish and Christian traditions. 
                Her life demonstrates that one can honor and respect one's Jewish heritage 
                while embracing the Christian faith. Edith's declaration as co-patron of Europe 
                recognizes her role in promoting understanding and reconciliation between different 
                religious and cultural traditions. Her martyrdom at Auschwitz, along with millions 
                of other Jews, makes her a powerful witness against anti-Semitism and racism. 
                Edith's life and death remind us of the importance of respecting the dignity 
                of every human person, regardless of their background or beliefs, and of the 
                need to work for justice and peace in our world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Courage and Sacrifice</h3>
              <p>
                St. Edith Stein's martyrdom serves as a powerful example of courage, faith, 
                and self-sacrifice. Her willingness to accept suffering and death rather than 
                deny her faith or her identity demonstrates the depth of her commitment to 
                Christ and to truth. Edith's last words, "Come, let us go for our people," 
                show her solidarity with her Jewish brothers and sisters and her acceptance 
                of her fate as a form of redemptive suffering. Her life as a Carmelite nun, 
                dedicated to prayer and contemplation, combined with her intellectual work 
                and her ultimate sacrifice, shows that holiness can be achieved in many different 
                ways. Edith's example encourages us to be courageous in our faith, to stand 
                up for what is right, and to be willing to make sacrifices for the sake of 
                others and for the truth.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">August 9</div>
              <p className="text-gray-600">Feast of St. Edith Stein</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Edith Stein is celebrated on August 9th, the anniversary 
                of her martyrdom at Auschwitz. This feast is celebrated as an optional memorial 
                in the Roman Catholic Church, recognizing her importance as a modern saint and 
                her role as co-patron of Europe. The feast falls during the summer season, 
                a time when many people are reflecting on the importance of freedom and human 
                dignity, making it an ideal time to remember Edith's witness to these values. 
                The feast provides an opportunity to honor her memory and to reflect on the 
                importance of standing up for truth and justice, even in the face of great 
                opposition and danger.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Edith Stein, many people participate in special prayers 
                and devotions to honor her memory and seek her intercession. Churches, particularly 
                those associated with the Carmelite Order, hold special Masses and services. 
                Many people also take time to read and reflect on Edith's writings, particularly 
                her philosophical works and spiritual reflections. The day is also marked by 
                prayers for peace, justice, and reconciliation, asking for St. Edith's intercession 
                in helping to overcome prejudice and discrimination. Many people also reflect 
                on the importance of intellectual pursuit and spiritual growth, and how these 
                can be integrated in our daily lives. The feast is also a time to remember 
                the victims of the Holocaust and to pray for peace and understanding between 
                different religious and cultural traditions.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of courage and the 
                strength to stand up for truth and justice. Many people make special petitions 
                for peace and reconciliation, asking for St. Edith's intercession in helping 
                to overcome prejudice and discrimination. The day is also a time to reflect 
                on the importance of integrating faith and reason in our lives and to pray 
                for the wisdom to seek truth in all things. St. Edith's feast day encourages 
                us to remember that we are all called to be witnesses to truth and justice, 
                and to be willing to make sacrifices for the sake of others. It is also a 
                time to pray for the victims of all forms of discrimination and violence, 
                and to work for a world where the dignity of every human person is respected.
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
                  <li>• <strong>Europe:</strong> Co-patron of Europe</li>
                  <li>• <strong>Philosophers:</strong> Patron of philosophers</li>
                  <li>• <strong>Jewish Converts:</strong> Patron of Jewish converts</li>
                  <li>• <strong>Martyrs:</strong> Patron of modern martyrs</li>
                  <li>• <strong>Intellectuals:</strong> Patron of scholars</li>
                  <li>• <strong>Peace:</strong> Patron of peace and reconciliation</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Truth:</strong> Helper in seeking truth</li>
                  <li>• <strong>Justice:</strong> Patron of social justice</li>
                  <li>• <strong>Courage:</strong> Helper in times of persecution</li>
                  <li>• <strong>Unity:</strong> Patron of religious unity</li>
                  <li>• <strong>Wisdom:</strong> Patron of intellectual growth</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Edith Stein</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Edith Stein, philosopher and martyr, help me to seek truth with 
                    courage and to integrate faith and reason in my life.
                  </p>
                  <p className="mb-4">
                    Teach me to stand up for justice and to defend the dignity of every human 
                    person. Help me to be a bridge of understanding between different cultures 
                    and traditions.
                  </p>
                  <p>
                    St. Edith Stein, pray for me that I may have the courage to follow the 
                    truth wherever it leads, the wisdom to understand God's ways, and the 
                    strength to make sacrifices for the sake of others. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Peace and Reconciliation</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Edith Stein, co-patron of Europe and witness to peace, intercede 
                    for all those who work for reconciliation and understanding between peoples.
                  </p>
                  <p>
                    Help us to overcome prejudice and discrimination and to build a world 
                    where the dignity of every human person is respected. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Edith Stein, pray for us!"
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
            <Link href="/saints/st-teresa-avila" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Teresa of Avila
                </h3>
                <p className="text-gray-700 text-sm">
                  Carmelite reformer whose autobiography inspired Edith Stein.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john-cross" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John of the Cross
                </h3>
                <p className="text-gray-700 text-sm">
                  Co-founder of Discalced Carmelites and mystical writer.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-maximilian-kolbe" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Maximilian Kolbe
                </h3>
                <p className="text-gray-700 text-sm">
                  Franciscan martyr who died at Auschwitz.
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