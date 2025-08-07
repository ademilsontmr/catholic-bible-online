import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Regina Caeli – Easter Prayer to the Queen of Heaven | Catholic Bible Online",
  description: "Learn the Regina Caeli prayer, the Easter prayer that replaces the Angelus during Easter time. Discover its history and meaning in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/regina-caeli",
  },
  openGraph: {
    title: "Regina Caeli – Easter Prayer to the Queen of Heaven",
    description: "Learn the Regina Caeli prayer, the Easter prayer that replaces the Angelus during Easter time.",
    url: "https://www.catholicbibleonline.com/prayers/regina-caeli",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regina Caeli – Easter Prayer to the Queen of Heaven",
    description: "Learn the Regina Caeli prayer, the Easter prayer that replaces the Angelus during Easter time.",
  },
};

export default function ReginaCaeliPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/marian" className="hover:underline">Marian Prayers</Link> &gt; 
        Regina Caeli
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">👑 Regina Caeli – Easter Prayer to the Queen of Heaven</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Regina Caeli is a beautiful Easter prayer that replaces the Angelus during Easter time. 
        This prayer celebrates the resurrection of Christ and honors Mary as Queen of Heaven. It is recited 
        three times daily, just like the Angelus, but with a special focus on the joy of the resurrection.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Oração Regina Caeli</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Latim</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Regina caeli, laetare, alleluia!</p>
            <p className="mb-2">Quia quem meruisti portare, alleluia!</p>
            <p className="mb-2">Resurrexit, sicut dixit, alleluia!</p>
            <p className="mb-2">Ora pro nobis Deum, alleluia!</p>
            <p className="mb-4">Gaude et laetare, Virgo Maria, alleluia!</p>
            <p className="mb-2">Quia surrexit Dominus vere, alleluia!</p>
            <p className="mb-4">Oremus:</p>
            <p className="mb-2">Deus, qui per resurrectionem Filii tui, Domini nostri Iesu Christi,</p>
            <p className="mb-2">mundum laetificare dignatus es:</p>
            <p className="mb-2">praesta, quaesumus, ut per eius Genetricem Virginem Mariam,</p>
            <p className="mb-2">perpetuae capiamus gaudia vitae.</p>
            <p className="font-semibold">Per Christum Dominum nostrum. Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Português</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">Rainha do céu, alegrai-vos, aleluia!</p>
            <p className="mb-2">Porque Aquele que merecestes trazer em vosso seio, aleluia!</p>
            <p className="mb-2">Ressuscitou como disse, aleluia!</p>
            <p className="mb-2">Rogai por nós a Deus, aleluia!</p>
            <p className="mb-4">Alegrai-vos e exultai, Virgem Maria, aleluia!</p>
            <p className="mb-2">Porque o Senhor ressuscitou verdadeiramente, aleluia!</p>
            <p className="mb-4">Oremos:</p>
            <p className="mb-2">Ó Deus, que Vos dignastes alegrar o mundo</p>
            <p className="mb-2">pela ressurreição do Vosso Filho, Nosso Senhor Jesus Cristo:</p>
            <p className="mb-2">concedei-nos, Vos suplicamos, que pela intercessão da Virgem Maria,</p>
            <p className="mb-2">sua Mãe, alcancemos as alegrias da vida eterna.</p>
            <p className="font-semibold">Por Cristo, Nosso Senhor. Amém.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quando Rezar o Regina Caeli</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Durante o Tempo Pascal</strong> - Do Domingo de Páscoa até Pentecostes</li>
          <li>• <strong>Três vezes ao dia</strong> - 6h, 12h e 18h (substituindo o Angelus)</li>
          <li>• <strong>Quando ouvir os sinos</strong> - Muitas igrejas tocam os sinos para o Regina Caeli</li>
          <li>• <strong>Celebrações pascais</strong> - Durante missas e celebrações do tempo pascal</li>
          <li>• <strong>Oração pessoal</strong> - Como devoção particular durante a Páscoa</li>
          <li>• <strong>Com a família</strong> - Para celebrar a ressurreição em família</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">História e Significado</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Origem Medieval</h3>
          <p className="text-gray-700 text-sm">
            O Regina Caeli tem suas origens na Idade Média e foi composto para celebrar a ressurreição de Cristo. 
            É uma das quatro antífonas marianas tradicionais da Igreja.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Celebração da Ressurreição</h3>
          <p className="text-gray-700 text-sm">
            Esta oração celebra especificamente a ressurreição de Cristo e honra Maria como Rainha do Céu, 
            destacando sua participação no mistério da salvação.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Substitui o Angelus</h3>
          <p className="text-gray-700 text-sm">
            Durante o tempo pascal, o Regina Caeli substitui o Angelus, mantendo a tradição de orar 
            três vezes ao dia, mas com foco na alegria da ressurreição.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Alegria Pascal</h3>
          <p className="text-gray-700 text-sm">
            O Regina Caeli expressa a alegria da Páscoa e nos convida a participar da exultação 
            de Maria pela ressurreição de seu Filho.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Como Rezar o Regina Caeli</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Estrutura da Oração</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">1. Antífona Principal</h4>
            <p className="text-gray-700 text-sm">
              Recite as quatro linhas principais, cada uma seguida de "aleluia!"
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">2. Versículo</h4>
            <p className="text-gray-700 text-sm">
              "Alegrai-vos e exultai, Virgem Maria, aleluia! Porque o Senhor ressuscitou verdadeiramente, aleluia!"
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">3. Oração</h4>
            <p className="text-gray-700 text-sm">
              Conclua com a oração coletiva, pedindo as graças da vida eterna.
            </p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-white rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Dicas para Rezar</h4>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>• Reze com alegria, celebrando a ressurreição</li>
            <li>• Medite no significado de cada "aleluia"</li>
            <li>• Imagine Maria exultando pela ressurreição de Jesus</li>
            <li>• Peça a intercessão de Maria para alcançar a vida eterna</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fundamento Bíblico</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <p className="text-gray-700 mb-4">
          O Regina Caeli está profundamente enraizado na Escritura:
        </p>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-900">Lucas 1:28</h4>
            <p className="text-gray-700 text-sm">
              "Ave, cheia de graça, o Senhor está contigo" - A saudação do anjo a Maria.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900">Lucas 24:6-7</h4>
            <p className="text-gray-700 text-sm">
              "Ele não está aqui, mas ressuscitou. Lembrai-vos de como vos disse, quando ainda estava na Galileia" - 
              A mensagem da ressurreição.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900">Apocalipse 12:1</h4>
            <p className="text-gray-700 text-sm">
              "Apareceu no céu um grande sinal: uma mulher vestida do sol" - Maria como Rainha do Céu.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefícios Espirituais</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Alegria Pascal</h3>
          <p className="text-gray-700 text-sm">
            O Regina Caeli nos ajuda a manter viva a alegria da ressurreição durante todo o tempo pascal.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Devoção Mariana</h3>
          <p className="text-gray-700 text-sm">
            Fortalece nossa devoção a Maria e nos aproxima dela como nossa mãe espiritual.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Esperança Eterna</h3>
          <p className="text-gray-700 text-sm">
            Renova nossa esperança na ressurreição e na vida eterna que nos foi prometida.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">União com a Igreja</h3>
          <p className="text-gray-700 text-sm">
            Nos une a toda a Igreja que reza esta oração durante o tempo pascal.
          </p>
        </div>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Orações Relacionadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/prayers/angelus" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🕰️</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Angelus</h3>
              <p className="text-gray-600 text-sm">Oração tradicional recitada três vezes ao dia</p>
            </div>
          </Link>
          
          <Link href="/prayers/memorare" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🙏</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Memorare</h3>
              <p className="text-gray-600 text-sm">Poderosa oração de intercessão à Santíssima Virgem Maria</p>
            </div>
          </Link>
          
          <Link href="/prayers/hail-mary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🌹</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Ave Maria</h3>
              <p className="text-gray-600 text-sm">Oração fundamental à Santíssima Virgem Maria</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/prayers/marian"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          ← Voltar para Orações Marianas
        </Link>
      </div>
    </main>
  );
} 